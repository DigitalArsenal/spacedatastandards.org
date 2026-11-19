// The $SLO READING RULE (schema/SLO/main.fbs) as code, for the E2E checks: the loadout validator, the definition
// test, the raw CIDv1 of published bytes, a reader for a stream of size-prefixed records, and the resolver that
// answers "what does host H carry at time T". Step numbers are the rule's.
//
// It works on object-API values (unpack()) and takes the generated enums it needs as arguments, so it has no
// binding of its own. Every record is an entry { standard, publisher, value, bytes }: `standard` is the code
// without `$`, `publisher` the PROVIDER_PEER_ID of the $DPM the record was published under, `bytes` the record's
// size-prefixed bytes as published (absent when the reader holds only a decoded copy).
import crypto from 'node:crypto';

export const CONFIG_STANDARDS = ['$SNR', '$RFB'];
export const HOST_FIELD = { OBJECT: 'NORAD_CAT_ID', SITE: 'SITE_ID', ENTITY: 'ENTITY_ID', CONSTELLATION: 'CONSTELLATION_ID', GROUP: 'GROUP_ID', BUS: 'BUS_ID' };
const RANK = { OBJECT: 0, SITE: 0, ENTITY: 0, DIRECT: 0, GROUP: 1, BUS: 2, CONSTELLATION: 3 };
const TIME = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/;
const empty = (s) => s === null || s === undefined || s === '';

/** True for a time in the exact form YYYY-MM-DDTHH:mm:ss.sssZ that names a real instant. */
export function isTime(s) {
  return typeof s === 'string' && TIME.test(s) && !Number.isNaN(Date.parse(s)) && new Date(s).toISOString() === s;
}

/** Raw CIDv1 (codec raw 0x55, multihash sha2-256), multibase base32 lowercase. */
export function rawCid(bytes) {
  const digest = crypto.createHash('sha256').update(bytes).digest();
  const raw = Buffer.concat([Buffer.from([0x01, 0x55, 0x12, 0x20]), digest]);
  const alphabet = 'abcdefghijklmnopqrstuvwxyz234567';
  let bits = 0; let value = 0; let out = 'b';
  for (const byte of raw) {
    value = (value << 8) | byte; bits += 8;
    while (bits >= 5) { out += alphabet[(value >>> (bits - 5)) & 31]; bits -= 5; }
  }
  if (bits > 0) out += alphabet[(value << (5 - bits)) & 31];
  return out;
}

/** Splits a stream of size-prefixed FlatBuffers into frames: [{ identifier, bytes }]. */
export function readFrames(stream) {
  const frames = [];
  for (let at = 0; at < stream.length;) {
    const size = stream[at] | (stream[at + 1] << 8) | (stream[at + 2] << 16) | (stream[at + 3] << 24);
    const bytes = stream.slice(at, at + 4 + size);
    frames.push({ identifier: String.fromCharCode(...bytes.slice(8, 12)), bytes });
    at += 4 + size;
  }
  return frames;
}

/** Step 1: why a loadout is rejected, or null. `scopeName` maps a HOST_SCOPE value to its member name. */
export function validateLoadout(l, scopeName) {
  const name = scopeName(l.HOST_SCOPE);
  if (!(name in HOST_FIELD)) return `HOST_SCOPE ${name ?? l.HOST_SCOPE}`;
  const set = Object.values(HOST_FIELD).filter((f) => (f === 'NORAD_CAT_ID' ? l[f] !== 0 : !empty(l[f])));
  if (set.length !== 1 || set[0] !== HOST_FIELD[name]) return `scope ${name} with host fields [${set.join(',')}]`;
  for (const f of ['UPDATED_AT', 'VALID_FROM', 'VALID_TO']) if (!(f !== 'UPDATED_AT' && empty(l[f])) && !isTime(l[f])) return `${f} not in the form`;
  if (!empty(l.VALID_FROM) && !empty(l.VALID_TO) && l.VALID_FROM >= l.VALID_TO) return 'VALID_FROM at or after VALID_TO';
  if (!empty(l.CONFIG_CID) && l.CONFIG_STANDARD !== '$SNR') return `CONFIG_CID with ${l.CONFIG_STANDARD}`;
  return null;
}

/** The definition test: an $SNR or $RFB record that names no host. */
export function isDefinition(standard, r) {
  if (standard === 'SNR') return r.NORAD_CAT_ID === 0 && empty(r.OBJECT_ID) && empty(r.SITE_ID) && empty(r.ENTITY_ID);
  if (standard === 'RFB') return r.NORAD_CAT_ID === 0 && empty(r.ID_ENTITY);
  throw new Error(`not a definition standard: ${standard}`);
}

// The latest version per key: Map key -> { entry, conflict, versions }. No UPDATED_AT is older than any.
function latestPer(entries, key) {
  const groups = new Map();
  for (const e of entries) { const k = key(e); groups.set(k, [...(groups.get(k) ?? []), e]); }
  const out = new Map();
  for (const [k, versions] of groups) {
    const order = [...versions].sort((a, b) => cmpTime(b.value.UPDATED_AT, a.value.UPDATED_AT));
    const conflict = order.length > 1 && (order[0].value.UPDATED_AT ?? null) === (order[1].value.UPDATED_AT ?? null);
    out.set(k, { entry: order[0], conflict, versions });
  }
  return out;
}
const cmpTime = (a, b) => (a === b ? 0 : empty(a) ? -1 : empty(b) ? 1 : a < b ? -1 : 1);
// A set record as of T: the latest version with UPDATED_AT at or before T, or the earliest when all are later.
function asOf(versions, t) {
  const order = [...versions].sort((a, b) => cmpTime(a.value.UPDATED_AT, b.value.UPDATED_AT));
  const before = order.filter((v) => !empty(v.value.UPDATED_AT) && v.value.UPDATED_AT <= t);
  return before.length ? before[before.length - 1] : order[0];
}

/**
 * Steps 0 to 9 for one host at one time.
 *   db: every entry read; host: { NORAD_CAT_ID, OBJECT_ID } | { SITE_ID } | { ENTITY_ID }; t: a time in the form.
 *   enums: { sloHostScope, sloUnitState, cmrMembershipState }; mountFields: [{ name, kind: 'enum'|'double'|'table' }].
 */
export function carries(db, host, t, { sloHostScope, sloUnitState, cmrMembershipState }, mountFields) {
  const scopeName = (v) => sloHostScope[v];
  const of = (code) => db.filter((e) => e.standard === code);
  const report = { rejected: [], skipped: [], unresolved: [], conflicts: [] };
  // 0. The latest version of each LOADOUT_ID per publisher; equal UPDATED_AT rejects the id.
  const loadouts = [];
  for (const { entry, conflict } of latestPer(of('SLO'), (e) => `${e.publisher}\0${e.value.LOADOUT_ID}`).values()) {
    if (conflict) { report.rejected.push([entry.value.LOADOUT_ID, 'two versions with one UPDATED_AT']); continue; }
    // 1. Reject, then skip what the reader does not implement.
    const why = validateLoadout(entry.value, scopeName);
    if (why) report.rejected.push([entry.value.LOADOUT_ID, why]);
    else if (!CONFIG_STANDARDS.includes(entry.value.CONFIG_STANDARD)) report.skipped.push(entry.value.LOADOUT_ID);
    else loadouts.push(entry);
  }
  // 2. The current version of each definition record, per publisher.
  const snr = latestPer(of('SNR'), (e) => `${e.publisher}\0${e.value.SENSOR_ID}`);
  const rfb = latestPer(of('RFB'), (e) => `${e.publisher}\0${e.value.ID}`);
  // 3. Candidates.
  const isObject = host.NORAD_CAT_ID !== undefined;
  const cands = [];
  for (const { entry, conflict } of snr.values()) {
    const r = entry.value;
    if (conflict || isDefinition('SNR', r)) continue;
    const hit = isObject ? r.NORAD_CAT_ID === host.NORAD_CAT_ID || (!empty(r.OBJECT_ID) && r.OBJECT_ID === host.OBJECT_ID)
      : host.SITE_ID !== undefined ? r.SITE_ID === host.SITE_ID : r.ENTITY_ID === host.ENTITY_ID;
    if (hit) cands.push({ scope: 'DIRECT', std: '$SNR', id: r.SENSOR_ID, pos: '', defs: [entry] });
  }
  const directRfb = new Map();
  for (const { entry, conflict } of rfb.values()) {
    const r = entry.value;
    if (conflict || isDefinition('RFB', r)) continue;
    const hit = isObject ? r.NORAD_CAT_ID === host.NORAD_CAT_ID : r.ID_ENTITY === (host.SITE_ID ?? host.ENTITY_ID);
    if (!hit) continue;
    const id = empty(r.ID_TRANSMITTER) ? r.ID : r.ID_TRANSMITTER;
    directRfb.set(id, [...(directRfb.get(id) ?? []), entry]);
  }
  for (const [id, defs] of directRfb) cands.push({ scope: 'DIRECT', std: '$RFB', id, pos: '', defs });
  const memberIsHost = (m) => (isObject
    ? (m.NORAD_CAT_ID !== 0 && m.NORAD_CAT_ID === host.NORAD_CAT_ID)
      || (m.STANDARD === '$CAT' && (m.RECORD_ID === String(host.NORAD_CAT_ID) || (!empty(host.OBJECT_ID) && m.RECORD_ID === host.OBJECT_ID)))
    : host.SITE_ID !== undefined ? m.STANDARD === '$SIT' && m.RECORD_ID === host.SITE_ID : m.RECORD_ID === host.ENTITY_ID);
  for (const e of loadouts) {
    const l = e.value;
    const scope = scopeName(l.HOST_SCOPE);
    const setPublisher = empty(l.SET_PUBLISHER_PEER_ID) ? e.publisher : l.SET_PUBLISHER_PEER_ID;
    let hit = false;
    if (scope === 'OBJECT') hit = isObject && l.NORAD_CAT_ID === host.NORAD_CAT_ID;
    else if (scope === 'SITE') hit = l.SITE_ID === host.SITE_ID;
    else if (scope === 'ENTITY') hit = l.ENTITY_ID === host.ENTITY_ID;
    else if (scope === 'GROUP') {
      const versions = of('EGP').filter((g) => g.publisher === setPublisher && g.value.GROUP_ID === l.GROUP_ID);
      hit = versions.length > 0 && asOf(versions, t).value.MEMBERS.some(memberIsHost);
    } else if (scope === 'BUS') {
      const cat = isObject ? of('CAT').filter((c) => c.publisher === setPublisher && c.value.NORAD_CAT_ID === host.NORAD_CAT_ID).pop() : undefined;
      hit = !!cat && !empty(cat.value.BUS_ID) && cat.value.BUS_ID === l.BUS_ID;
    } else if (scope === 'CONSTELLATION' && isObject) {
      const byId = new Map();
      for (const c of of('CMR').filter((c) => c.publisher === setPublisher)) byId.set(c.value.MEMBERSHIP_ID, [...(byId.get(c.value.MEMBERSHIP_ID) ?? []), c]);
      hit = [...byId.values()].map((v) => asOf(v, t).value).some((c) => (c.NORAD_CAT_ID === host.NORAD_CAT_ID || (!empty(c.OBJECT_ID) && c.OBJECT_ID === host.OBJECT_ID))
        && c.CONSTELLATION_ID === l.CONSTELLATION_ID && c.STATE === cmrMembershipState.ACTIVE);
    }
    if (!hit) continue;
    // 4. Dates.
    if ((!empty(l.VALID_FROM) && t < l.VALID_FROM) || (!empty(l.VALID_TO) && t >= l.VALID_TO)) continue;
    // 5. The definition.
    const defPublisher = empty(l.CONFIG_PUBLISHER_PEER_ID) ? e.publisher : l.CONFIG_PUBLISHER_PEER_ID;
    let defs = null;
    if (l.CONFIG_STANDARD === '$SNR') {
      const cur = snr.get(`${defPublisher}\0${l.CONFIG_ID}`);
      if (cur && !empty(l.CONFIG_CID)) {
        const pinned = cur.versions.filter((v) => v.bytes && isDefinition('SNR', v.value) && rawCid(v.bytes) === l.CONFIG_CID);
        if (pinned.length === 1) defs = pinned;
      } else if (cur && !cur.conflict && isDefinition('SNR', cur.entry.value)) defs = [cur.entry];
    } else {
      const records = [...rfb.values()].filter(({ entry }) => entry.publisher === defPublisher && entry.value.ID_TRANSMITTER === l.CONFIG_ID);
      const current = records.filter(({ entry }) => isDefinition('RFB', entry.value));
      if (current.length && !current.some((r) => r.conflict)) defs = current.map((r) => r.entry);
    }
    if (!defs) { report.unresolved.push(l.LOADOUT_ID); continue; }
    cands.push({ scope, std: l.CONFIG_STANDARD, id: l.CONFIG_ID, pos: l.POSITION ?? '', defs, l });
  }
  // 6. Units.
  const groups = new Map();
  for (const c of cands) { const k = `${c.std}\0${c.id}`; groups.set(k, [...(groups.get(k) ?? []), c]); }
  const units = [];
  for (const group of groups.values()) {
    const positions = [...new Set(group.map((c) => c.pos).filter((p) => p !== ''))];
    for (const p of positions.length ? positions : ['']) {
      const competing = group.filter((c) => c.pos === '' || c.pos === p);
      // 7. The winner.
      const key = (c) => [RANK[c.scope], c.l ? 0 : 1, p !== '' && c.pos === p ? 0 : 1];
      competing.sort((a, b) => {
        const [ka, kb] = [key(a), key(b)];
        for (let i = 0; i < ka.length; i++) if (ka[i] !== kb[i]) return ka[i] - kb[i];
        if (!a.l || !b.l) return 0;
        return cmpTime(b.l.UPDATED_AT, a.l.UPDATED_AT) || (a.l.LOADOUT_ID < b.l.LOADOUT_ID ? -1 : a.l.LOADOUT_ID > b.l.LOADOUT_ID ? 1 : 0);
      });
      const [w, next] = competing;
      if (next && w.l && next.l && key(w).join() === key(next).join() && w.l.UPDATED_AT === next.l.UPDATED_AT) report.conflicts.push([w.l.LOADOUT_ID, next.l.LOADOUT_ID]);
      // 8. Status.
      if (w.l && w.l.STATUS === sloUnitState.RETIRED) continue;
      // 9. Mounting.
      const base = w.std === '$SNR' ? w.defs[0].value.MOUNTING : null;
      units.push({
        standard: w.std, configId: w.id, position: p, scope: w.scope, loadoutId: w.l?.LOADOUT_ID ?? null,
        count: w.l?.COUNT ?? 0, status: w.l ? sloUnitState[w.l.STATUS] : null, serial: w.l?.SERIAL_NUMBER ?? null,
        definition: w.defs.map(({ value: d }) => (w.std === '$SNR' ? `${d.SENSOR_ID}|${d.UPDATED_AT ?? ''}|${d.NAME ?? ''}` : `${d.ID}|${d.UPDATED_AT ?? ''}|${d.CENTER_FREQ}`)).sort(),
        mounting: overlay(base, w.l?.MOUNTING ?? null, mountFields),
      });
    }
  }
  const order = (u) => `${u.standard}\0${u.configId}\0${u.position}`;
  units.sort((a, b) => (order(a) < order(b) ? -1 : 1));
  for (const k of ['rejected', 'skipped', 'unresolved']) report[k].sort((a, b) => (String(a) < String(b) ? -1 : 1));
  return { units, ...report };
}

/** Step 9: the unit's mounting as a plain object (PROVENANCE by its SOURCE), or null when neither side has one. */
export function overlay(base, over, mountFields) {
  if (!base && !over) return null;
  const unset = (f) => (f.kind === 'enum' ? 0 : f.kind === 'double' ? NaN : null);
  const stated = (f, v) => (f.kind === 'enum' ? v !== 0 : f.kind === 'double' ? !Number.isNaN(v) : v !== null && v !== undefined);
  const whole = over && over.FRAME !== 0;
  const out = {};
  for (const f of mountFields) {
    const v = whole ? over[f.name] : over && stated(f, over[f.name]) ? over[f.name] : base ? base[f.name] : unset(f);
    out[f.name] = f.kind === 'table' ? (v?.SOURCE ?? null) : v;
  }
  return out;
}
