#!/usr/bin/env node
// One E2E for the $SLO sensor loadout: a definition published once, bound to hosts by id.
//   a. the IDL: $SLO's types, file identifier and wide record type 299 (the last); exactly one host field per
//      scope; no field shares a name with an enum, no MIN/MAX member; $SNR and $RFB changed in comments only
//      (every type, field and member as in 1.289.0); $SLO sorts after every standard with a field named SNR;
//   b. real records written to one $REC file and read back from disk: one $SNR definition and one $RFB definition
//      (two link records) with no host, a host-bound $SNR and $RFB, $CAT objects with BUS_ID, $CMR memberships,
//      two versions of one $EGP, and $SLO loadouts binding the definitions to one object, a group, a bus and a
//      constellation, plus three malformed loadouts;
//   c. "what does this object carry" resolved by the reading rule in schema/SLO/main.fbs (versions, dates, most
//      specific scope, RETIRED, tie, mounting override) at two times, compared with the expected set.
import assert from 'node:assert/strict';
import crypto from 'node:crypto';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { parseIdl } from './lib/idl-wire.mjs';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');
const schemaRoot = path.join(root, 'schema');
const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'sds-loadout-e2e-'));
const fieldSig = (f) => `${f.name}:${f.vector ? `[${f.elem}]` : f.elem}=${f.def ?? ''}${f.required ? '!' : ''}`;
const sha = (s) => crypto.createHash('sha256').update(s).digest('hex');

try {
  // ---- a. The IDL.
  const slo = parseIdl(schemaRoot, 'SLO');
  assert.equal(slo.root, 'SLO', '$SLO: root type');
  assert.match(fs.readFileSync(path.join(schemaRoot, 'SLO/main.fbs'), 'utf8'), /file_identifier "\$SLO";/, '$SLO: file identifier');
  assert.deepEqual(slo.tables.get('SLO').fields.map(fieldSig), [
    'LOADOUT_ID:string=!', 'CONFIG_STANDARD:string=!', 'CONFIG_ID:string=!', 'CONFIG_CID:string=', 'HOST_SCOPE:sloHostScope=UNSPECIFIED',
    'NORAD_CAT_ID:uint=', 'SITE_ID:string=', 'ENTITY_ID:string=', 'CONSTELLATION_ID:string=', 'GROUP_ID:string=', 'BUS_ID:string=',
    'VALID_FROM:string=', 'VALID_TO:string=', 'COUNT:uint=', 'POSITION:string=', 'SERIAL_NUMBER:string=', 'MOUNTING:SNRMounting=',
    'STATUS:sloUnitState=UNKNOWN', 'UPDATED_AT:string=!', 'PROVENANCE:[OPPProvenance]=!', 'CITATION:string=', 'NOTES:string=',
  ], '$SLO: its fields, in order');
  const members = (e) => slo.enums.get(e).members.map((m) => `${m.name}=${m.value}`);
  assert.deepEqual(members('sloHostScope'), ['UNSPECIFIED=0', 'OBJECT=1', 'SITE=2', 'ENTITY=3', 'CONSTELLATION=4', 'GROUP=5', 'BUS=6']);
  assert.deepEqual(members('sloUnitState'), ['UNKNOWN=0', 'PLANNED=1', 'OPERATIONAL=2', 'DEGRADED=3', 'STANDBY=4', 'FAILED=5', 'RETIRED=6']);
  const HOST_FIELD = { OBJECT: 'NORAD_CAT_ID', SITE: 'SITE_ID', ENTITY: 'ENTITY_ID', CONSTELLATION: 'CONSTELLATION_ID', GROUP: 'GROUP_ID', BUS: 'BUS_ID' };
  const sloFields = new Set(slo.tables.get('SLO').fields.map((f) => f.name));
  for (const f of Object.values(HOST_FIELD)) assert.ok(sloFields.has(f), `host field ${f}`);
  assert.deepEqual(members('sloHostScope').slice(1).map((m) => m.split('=')[0]), Object.keys(HOST_FIELD), 'one scope per host field');
  const camel = (s) => s.toLowerCase().replace(/_([a-z0-9])/g, (_, c) => c.toUpperCase());
  const enumNames = new Set([...slo.enums.keys()].map((n) => n.toLowerCase()));
  for (const f of slo.tables.get('SLO').fields) assert.ok(!enumNames.has(camel(f.name).toLowerCase()), `SLO.${f.name} shares a name with an enum`);
  for (const e of ['sloHostScope', 'sloUnitState']) assert.ok(!members(e).some((m) => /^(MIN|MAX)=/i.test(m)), `${e}: no MIN/MAX`);
  const ordinals = JSON.parse(fs.readFileSync(path.join(schemaRoot, 'REC/RECORDTYPE_ORDINALS.json'), 'utf8'));
  assert.equal(ordinals.extended_ordinals.SLO, 299, '$SLO is wide record type 299');
  assert.deepEqual(Object.entries(ordinals.extended_ordinals).filter(([, v]) => v === 299).map(([k]) => k), ['SLO'], 'no other standard holds 299');
  assert.equal(ordinals.ordinals.SLO, undefined, '$SLO is not in the full union');
  // $SNR and $RFB: comment-only. [number of types, first 16 hex of the digest over their signatures] at 1.289.0.
  for (const [code, want] of Object.entries({ SNR: [69, '720f97426e63080b'], RFB: [7, '4b08c1b6b2f3e74f'] })) {
    const m = parseIdl(schemaRoot, code);
    const sigs = [...[...m.tables].map(([n, t]) => `T${n}:${t.fields.map(fieldSig).join(';')}`),
      ...[...m.enums].map(([n, e]) => `E${n}:${e.base}|${e.members.map((x) => `${x.name}=${x.value}`).join(';')}`)].sort();
    assert.deepEqual([sigs.length, sha(sigs.join('\n')).slice(0, 16)], want, `${code}: every type, field and member as in 1.289.0`);
  }
  // flatc refuses a field named like a table it has already read, and $REC includes in code order.
  const withSnrField = fs.readdirSync(schemaRoot).filter((c) => fs.existsSync(path.join(schemaRoot, c, 'main.fbs'))
    && /^\s*SNR\s*:/m.test(fs.readFileSync(path.join(schemaRoot, c, 'main.fbs'), 'utf8')));
  assert.ok(withSnrField.length > 0 && withSnrField.every((c) => c < 'SLO'), `$SLO sorts after ${withSnrField.join(', ')}`);

  // ---- b. Real records, one $REC file, written and read back.
  const fb = await import(pathToFileURL(path.join(root, 'node_modules/flatbuffers/js/flatbuffers.js')));
  const js = async (code) => import(pathToFileURL(path.join(root, `lib/js/${code}/main.js`)));
  const [R, L] = await Promise.all(['REC', 'SLO'].map(js));
  const T = (cls, v) => Object.assign(new cls(), v);
  const U = '2026-11-01T00:00:00.000Z';
  const prov = (cls, v = {}) => T(cls, { SOURCE: 'e2e fixture', METHOD: R.oppDeterminationMethod.USER_DEFINED, ...v });

  const snrDef = T(R.SNRT, {
    SENSOR_ID: 'e2e-def-user-array', NAME: 'E2E user-link phased array', TYPE: R.SensorType.COMMS_ANTENNA, EMISSION: R.snrEmissionMode.ACTIVE,
    SPECTRAL_BANDS: [T(R.SNRSpectralBandT, { NAME: 'Ku', DESIGNATION: 'Ku', FREQ_LOW_HZ: 10.7e9, FREQ_HIGH_HZ: 12.7e9, DIRECTION: R.snrBandDirection.TRANSMIT })],
    MOUNTING: T(R.SNRMountingT, { FRAME: R.snrMountingFrame.PLATFORM_BODY, BORESIGHT_AZIMUTH_DEG: 0, BORESIGHT_ELEVATION_DEG: -90, ROLL_DEG: 0, POINTING: R.snrPointingMode.NADIR }),
    RF: T(R.SNRRfParametersT, { ANTENNA_PATTERN: R.snrAntennaPattern.PHASED_ARRAY }),
    PROVENANCE: prov(R.OPPProvenanceT),
  });
  const snrOneOff = T(R.SNRT, { SENSOR_ID: 'e2e-oneoff-camera', NAME: 'E2E camera', NORAD_CAT_ID: 900101, TYPE: R.SensorType.EO_TV, PROVENANCE: prov(R.OPPProvenanceT) });
  const rfb = (ID, ID_TRANSMITTER, LINK_DIRECTION, CENTER_FREQ, NORAD_CAT_ID = 0) => T(R.RFBT, { ID, ID_TRANSMITTER, LINK_DIRECTION, CENTER_FREQ, NORAD_CAT_ID, NAME: 'E2E TT&C', PURPOSE: 'TT&C', CITATION: 'e2e fixture' });
  const rfbs = [rfb('e2e-def-ttc-up', 'e2e-def-ttc', R.linkCategory.UPLINK, 2050), rfb('e2e-def-ttc-down', 'e2e-def-ttc', R.linkCategory.DOWNLINK, 2250),
    rfb('e2e-bound-ttc-down', 'e2e-def-ttc', R.linkCategory.DOWNLINK, 2250, 900199)];
  const cats = [[900101, 'e2e-bus-v2'], [900102, 'e2e-bus-v2'], [900103, 'e2e-bus-v1'], [900104, null], [900105, 'e2e-bus-v2']]
    .map(([NORAD_CAT_ID, BUS_ID]) => T(R.CATT, { OBJECT_NAME: `E2E-${NORAD_CAT_ID}`, NORAD_CAT_ID, BUS_ID }));
  const cmrProv = [T(R.CMRProvenanceT, { SOURCE: 'e2e fixture', SOURCE_DATASET: 'e2e', RETRIEVED_AT: U })];
  const cmrs = [[900101, 'ACTIVE'], [900102, 'ACTIVE'], [900103, 'ACTIVE'], [900104, 'FORMER'], [900105, 'ACTIVE']]
    .map(([NORAD_CAT_ID, s]) => T(R.CMRT, { MEMBERSHIP_ID: `e2e-const:${NORAD_CAT_ID}`, NORAD_CAT_ID, CONSTELLATION_ID: 'e2e-const', CONSTELLATION_NAME: 'E2E',
      STATE: R.cmrMembershipState[s], UPDATED_AT: U, PROVENANCE: cmrProv }));
  const egp = (UPDATED_AT, ids) => T(R.EGPT, { GROUP_ID: 'e2e-version-v2', NAME: 'E2E version 2', UPDATED_AT, MEMBERSHIP_MODE: R.egpMembershipMode.ENUMERATED,
    MEMBERS: ids.map((n) => T(R.EGPMemberT, { STANDARD: '$CAT', RECORD_ID: String(n), NORAD_CAT_ID: n })) });
  // The later version first, so a reader that keeps the last one read gets the wrong group.
  const egps = [egp('2026-06-01T00:00:00.000Z', [900101, 900102]), egp('2026-01-01T00:00:00.000Z', [900101, 900102, 900103])];

  const S = L.sloHostScope;
  const ST = L.sloUnitState;
  const mount = (v) => T(L.SNRMountingT, v);
  const sloProv = [T(L.OPPProvenanceT, { SOURCE: 'e2e fixture', METHOD: L.oppDeterminationMethod.USER_DEFINED })];
  const lo = (v) => T(L.SLOT, { UPDATED_AT: U, PROVENANCE: sloProv, ...v });
  const ARRAY = { CONFIG_STANDARD: '$SNR', CONFIG_ID: 'e2e-def-user-array', POSITION: 'nadir-1' };
  const TTC = { CONFIG_STANDARD: '$RFB', CONFIG_ID: 'e2e-def-ttc' };
  const loadouts = [
    lo({ LOADOUT_ID: 'e2e-ttc@e2e-const', ...TTC, HOST_SCOPE: S.CONSTELLATION, CONSTELLATION_ID: 'e2e-const', COUNT: 1, STATUS: ST.OPERATIONAL, VALID_FROM: '2020-01-01T00:00:00.000Z' }),
    lo({ LOADOUT_ID: 'e2e-ttc@e2e-const', ...TTC, HOST_SCOPE: S.CONSTELLATION, CONSTELLATION_ID: 'e2e-const', COUNT: 2, STATUS: ST.OPERATIONAL, VALID_FROM: '2020-01-01T00:00:00.000Z', POSITION: 'e2e-old-slot', UPDATED_AT: '2026-01-01T00:00:00.000Z' }),
    lo({ LOADOUT_ID: 'e2e-ttc@900199', ...TTC, HOST_SCOPE: S.OBJECT, NORAD_CAT_ID: 900199, STATUS: ST.OPERATIONAL, VALID_FROM: '2026-06-01T00:00:00.000Z' }),
    lo({ LOADOUT_ID: 'e2e-array@e2e-bus-v2', ...ARRAY, HOST_SCOPE: S.BUS, BUS_ID: 'e2e-bus-v2', COUNT: 4, STATUS: ST.OPERATIONAL }),
    lo({ LOADOUT_ID: 'e2e-array@e2e-version-v2', ...ARRAY, HOST_SCOPE: S.GROUP, GROUP_ID: 'e2e-version-v2', COUNT: 4, STATUS: ST.OPERATIONAL, MOUNTING: mount({ ROLL_DEG: 45 }) }),
    lo({ LOADOUT_ID: 'e2e-array@900101', ...ARRAY, HOST_SCOPE: S.OBJECT, NORAD_CAT_ID: 900101, STATUS: ST.FAILED, SERIAL_NUMBER: 'E2E-SN-0001', MOUNTING: mount({ BORESIGHT_AZIMUTH_DEG: 10 }) }),
    lo({ LOADOUT_ID: 'e2e-ttc@900102', ...TTC, HOST_SCOPE: S.OBJECT, NORAD_CAT_ID: 900102, STATUS: ST.RETIRED, VALID_FROM: '2026-06-01T00:00:00.000Z' }),
    lo({ LOADOUT_ID: 'e2e-array@900103', ...ARRAY, HOST_SCOPE: S.OBJECT, NORAD_CAT_ID: 900103, COUNT: 4, STATUS: ST.OPERATIONAL, VALID_TO: '2026-01-01T00:00:00.000Z' }),
    lo({ LOADOUT_ID: 'e2e-ttc-a@900103', ...TTC, HOST_SCOPE: S.OBJECT, NORAD_CAT_ID: 900103, STATUS: ST.DEGRADED, UPDATED_AT: '2026-02-01T00:00:00.000Z' }),
    lo({ LOADOUT_ID: 'e2e-ttc-b@900103', ...TTC, HOST_SCOPE: S.OBJECT, NORAD_CAT_ID: 900103, STATUS: ST.STANDBY, UPDATED_AT: '2026-03-01T00:00:00.000Z' }),
    lo({ LOADOUT_ID: 'e2e-camera@900104', CONFIG_STANDARD: '$SNR', CONFIG_ID: 'e2e-oneoff-camera', HOST_SCOPE: S.OBJECT, NORAD_CAT_ID: 900104 }),
    lo({ LOADOUT_ID: 'e2e-radio@900104', CONFIG_STANDARD: '$RFB', CONFIG_ID: 'e2e-no-such-radio', HOST_SCOPE: S.OBJECT, NORAD_CAT_ID: 900104 }),
    lo({ LOADOUT_ID: 'e2e-tie-a', ...TTC, HOST_SCOPE: S.OBJECT, NORAD_CAT_ID: 900105, STATUS: ST.STANDBY }),
    lo({ LOADOUT_ID: 'e2e-tie-b', ...TTC, HOST_SCOPE: S.OBJECT, NORAD_CAT_ID: 900105, STATUS: ST.DEGRADED }),
    lo({ LOADOUT_ID: 'e2e-bad-none', ...TTC, HOST_SCOPE: S.UNSPECIFIED, NORAD_CAT_ID: 900101, STATUS: ST.FAILED }),
    lo({ LOADOUT_ID: 'e2e-bad-two', ...TTC, HOST_SCOPE: S.OBJECT, NORAD_CAT_ID: 900101, GROUP_ID: 'e2e-version-v2', STATUS: ST.FAILED }),
    lo({ LOADOUT_ID: 'e2e-bad-empty', ...ARRAY, HOST_SCOPE: S.BUS, STATUS: ST.FAILED }),
  ];

  const sloBytes = (o) => { const b = new fb.Builder(512); L.SLO.finishSLOBuffer(b, o.pack(b)); return b.asUint8Array(); };
  for (const o of loadouts) {
    const bytes = sloBytes(o);
    assert.ok(L.SLO.bufferHasIdentifier(new fb.ByteBuffer(bytes)), `${o.LOADOUT_ID}: file identifier $SLO`);
    assert.deepStrictEqual(L.SLO.getRootAsSLO(new fb.ByteBuffer(bytes)).unpack(), o, `${o.LOADOUT_ID}: every field round-trips`);
  }
  const union = (type, value) => T(R.RecordT, { value_type: R.RecordType[type], value, standard: type });
  const wide = (o) => T(R.RecordT, { value_type: R.RecordType.NONE, standard: 'SLO', EXTENDED_TYPE: R.RecordTypeExtended.SLO, EXTENDED_VALUE: [...sloBytes(o)] });
  const records = [union('SNR', snrDef), union('SNR', snrOneOff), ...rfbs.map((r) => union('RFB', r)), ...cats.map((c) => union('CAT', c)),
    ...cmrs.map((c) => union('CMR', c)), ...egps.map((g) => union('EGP', g)), ...loadouts.map(wide)];
  const builder = new fb.Builder(4096);
  R.REC.finishRECBuffer(builder, T(R.RECT, { version: 'loadout-e2e', RECORDS: records }).pack(builder));
  const file = path.join(tmp, 'loadout.rec');
  fs.writeFileSync(file, builder.asUint8Array());

  const disk = new Uint8Array(fs.readFileSync(file));
  assert.ok(R.REC.bufferHasIdentifier(new fb.ByteBuffer(disk)), 'the file is a $REC');
  const back = R.REC.getRootAsREC(new fb.ByteBuffer(disk)).unpack();
  assert.equal(back.RECORDS.length, records.length);
  // Dispatch on Record.standard, never the ordinal.
  const db = { SNR: [], RFB: [], CAT: [], CMR: [], EGP: [], SLO: [] };
  for (const r of back.RECORDS) {
    if (r.standard === 'SLO') {
      assert.deepEqual([r.value_type, r.EXTENDED_TYPE], [R.RecordType.NONE, 299], '$SLO: wide record type 299');
      const bb = new fb.ByteBuffer(new Uint8Array(r.EXTENDED_VALUE));
      assert.ok(L.SLO.bufferHasIdentifier(bb));
      db.SLO.push(L.SLO.getRootAsSLO(bb).unpack());
    } else db[r.standard].push(r.value);
  }
  assert.deepEqual(Object.fromEntries(Object.entries(db).map(([k, v]) => [k, v.length])), { SNR: 2, RFB: 3, CAT: 5, CMR: 5, EGP: 2, SLO: loadouts.length });
  assert.deepStrictEqual(db.SNR[0], snrDef, 'the $SNR definition round-trips');
  assert.deepStrictEqual(db.RFB.slice(0, 2), rfbs.slice(0, 2), 'the $RFB definition round-trips');
  assert.equal(db.SNR[0].NORAD_CAT_ID, 0); assert.equal(db.SNR[0].SITE_ID, null); assert.equal(db.SNR[0].ENTITY_ID, null); assert.equal(db.SNR[0].OBJECT_ID, null);

  // ---- c. The reading rule (schema/SLO/main.fbs, READING RULE), for an object host.
  const snrMount = parseIdl(schemaRoot, 'SNR');
  const mountFields = snrMount.tables.get('SNRMounting').fields;
  const isEnum = (f) => snrMount.enums.has(f.elem);
  const stated = (f, v) => (isEnum(f) ? v !== 0 : f.elem === 'double' ? !Number.isNaN(v) : v !== null && v !== undefined);
  const overlay = (base, over) => {
    if (!base && !over) return null;
    const out = {};
    for (const f of mountFields) {
      const v = over && stated(f, over[f.name]) ? over[f.name] : base ? base[f.name] : (isEnum(f) ? 0 : f.elem === 'double' ? NaN : null);
      out[f.name] = f.name === 'PROVENANCE' ? (v?.SOURCE ?? null) : v;
    }
    return out;
  };
  const scopeName = (v) => L.sloHostScope[v];
  const reject = (l) => {
    const name = scopeName(l.HOST_SCOPE);
    if (!(name in HOST_FIELD)) return `HOST_SCOPE ${name}`;
    const set = Object.values(HOST_FIELD).filter((f) => (f === 'NORAD_CAT_ID' ? l[f] !== 0 : l[f] !== null && l[f] !== ''));
    if (set.length !== 1 || set[0] !== HOST_FIELD[name]) return `scope ${name} with host fields [${set.join(',')}]`;
    if (!['$SNR', '$RFB'].includes(l.CONFIG_STANDARD)) return `CONFIG_STANDARD ${l.CONFIG_STANDARD}`;
    return null;
  };
  const latest = (rows, key) => [...rows.reduce((m, r) => (m.has(r[key]) && m.get(r[key]).UPDATED_AT >= r.UPDATED_AT ? m : m.set(r[key], r)), new Map()).values()];
  const rejected = db.SLO.map((l) => [l.LOADOUT_ID, reject(l)]).filter(([, e]) => e);
  assert.deepEqual(rejected, [
    ['e2e-bad-none', 'HOST_SCOPE UNSPECIFIED'],
    ['e2e-bad-two', 'scope OBJECT with host fields [NORAD_CAT_ID,GROUP_ID]'],
    ['e2e-bad-empty', 'scope BUS with host fields []'],
  ], 'a loadout with no host field, two host fields, or an empty named field is rejected');
  const valid = latest(db.SLO.filter((l) => !reject(l)), 'LOADOUT_ID');
  const groups = new Map(latest(db.EGP, 'GROUP_ID').map((g) => [g.GROUP_ID, g]));
  const RANK = { OBJECT: 0, SITE: 0, ENTITY: 0, GROUP: 1, BUS: 2, CONSTELLATION: 3 };
  const noHost = (s) => s.NORAD_CAT_ID === 0 && !s.OBJECT_ID && !s.SITE_ID && !s.ENTITY_ID;
  const definition = (std, id) => (std === '$SNR' ? db.SNR.filter((s) => s.SENSOR_ID === id && noHost(s)) : db.RFB.filter((r) => r.ID_TRANSMITTER === id && r.NORAD_CAT_ID === 0));

  const carries = (N, t) => {
    const cat = db.CAT.find((c) => c.NORAD_CAT_ID === N);
    const cands = [];
    for (const s of db.SNR) if (s.NORAD_CAT_ID === N) cands.push({ rank: 0, direct: true, std: '$SNR', id: s.SENSOR_ID, pos: '', defs: [s] });
    for (const id of new Set(db.RFB.filter((r) => r.NORAD_CAT_ID === N).map((r) => r.ID_TRANSMITTER))) {
      cands.push({ rank: 0, direct: true, std: '$RFB', id, pos: '', defs: db.RFB.filter((r) => r.NORAD_CAT_ID === N && r.ID_TRANSMITTER === id) });
    }
    for (const l of valid) {
      const scope = scopeName(l.HOST_SCOPE);
      const hit = scope === 'OBJECT' ? l.NORAD_CAT_ID === N
        : scope === 'GROUP' ? !!groups.get(l.GROUP_ID)?.MEMBERS.some((m) => m.NORAD_CAT_ID === N)
          : scope === 'BUS' ? !!cat?.BUS_ID && cat.BUS_ID === l.BUS_ID
            : scope === 'CONSTELLATION' ? db.CMR.some((c) => c.NORAD_CAT_ID === N && c.STATE === R.cmrMembershipState.ACTIVE && c.CONSTELLATION_ID === l.CONSTELLATION_ID)
              : false;
      if (!hit) continue;
      if ((l.VALID_FROM && t < l.VALID_FROM) || (l.VALID_TO && t >= l.VALID_TO)) continue;
      cands.push({ rank: RANK[scope], direct: false, std: l.CONFIG_STANDARD, id: l.CONFIG_ID, pos: l.POSITION ?? '', l });
    }
    const byKey = new Map();
    for (const c of cands) { const k = `${c.std}\0${c.id}\0${c.pos}`; byKey.set(k, [...(byKey.get(k) ?? []), c]); }
    const units = []; const conflicts = []; const unresolved = [];
    for (const group of byKey.values()) {
      group.sort((a, b) => a.rank - b.rank || Number(a.direct) - Number(b.direct)
        || (a.l && b.l ? (b.l.UPDATED_AT < a.l.UPDATED_AT ? -1 : b.l.UPDATED_AT > a.l.UPDATED_AT ? 1 : (a.l.LOADOUT_ID < b.l.LOADOUT_ID ? -1 : 1)) : 0));
      const [w, next] = group;
      if (next && !w.direct && !next.direct && w.rank === next.rank && w.l.UPDATED_AT === next.l.UPDATED_AT) conflicts.push([w.l.LOADOUT_ID, next.l.LOADOUT_ID]);
      if (w.l?.STATUS === L.sloUnitState.RETIRED) continue;
      const defs = w.direct ? w.defs : definition(w.std, w.id);
      if (defs.length === 0 || (w.std === '$SNR' && defs.length !== 1)) { unresolved.push(w.l.LOADOUT_ID); continue; }
      units.push({
        standard: w.std, configId: w.id, position: w.pos, scope: w.direct ? 'DIRECT' : scopeName(w.l.HOST_SCOPE), loadoutId: w.l?.LOADOUT_ID ?? null,
        count: w.l?.COUNT ?? 0, status: w.l ? L.sloUnitState[w.l.STATUS] : null, serial: w.l?.SERIAL_NUMBER ?? null,
        definition: defs.map((d) => d.SENSOR_ID ?? d.ID).sort(),
        mounting: overlay(w.std === '$SNR' ? defs[0].MOUNTING : null, w.l?.MOUNTING ?? null),
      });
    }
    return { units: sortUnits(units), conflicts, unresolved };
  };
  function sortUnits(units) {
    const order = (x) => `${x.standard}\0${x.configId}\0${x.position}`;
    return [...units].sort((a, b) => (order(a) < order(b) ? -1 : 1));
  }

  const DEF_MOUNT = overlay(db.SNR[0].MOUNTING, null);
  assert.deepStrictEqual(DEF_MOUNT, { FRAME: 1, BORESIGHT_AZIMUTH_DEG: 0, BORESIGHT_ELEVATION_DEG: -90, ROLL_DEG: 0, POINTING: 1, SCAN_AZIMUTH_RATE_DEG_S: NaN,
    SCAN_ELEVATION_RATE_DEG_S: NaN, AZIMUTH_LIMIT_MIN_DEG: NaN, AZIMUTH_LIMIT_MAX_DEG: NaN, ELEVATION_LIMIT_MIN_DEG: NaN, ELEVATION_LIMIT_MAX_DEG: NaN, PROVENANCE: null });
  const u = (configId, scope, loadoutId, count, status, extra = {}) => {
    const snr = configId === 'e2e-def-user-array';
    return { standard: '$SNR', configId, position: snr ? 'nadir-1' : '', scope, loadoutId, count, status, serial: null,
      definition: [configId], mounting: snr ? DEF_MOUNT : null, ...extra };
  };
  const ttc = (scope, loadoutId, count, status) => ({ standard: '$RFB', configId: 'e2e-def-ttc', position: '', scope, loadoutId, count, status, serial: null,
    definition: ['e2e-def-ttc-down', 'e2e-def-ttc-up'], mounting: null });
  const camera = { ...u('e2e-oneoff-camera', 'DIRECT', null, 0, null), position: '', mounting: null };
  const NOW = '2026-11-19T00:00:00.000Z';
  const BEFORE = '2025-12-31T00:00:00.000Z';
  const expected = [
    [900101, NOW, [camera, u('e2e-def-user-array', 'OBJECT', 'e2e-array@900101', 0, 'FAILED', { serial: 'E2E-SN-0001', mounting: { ...DEF_MOUNT, BORESIGHT_AZIMUTH_DEG: 10 } }),
      ttc('CONSTELLATION', 'e2e-ttc@e2e-const', 1, 'OPERATIONAL')], [], [], 'one object: OBJECT beats GROUP and BUS; only the winner\'s mounting override; the latest loadout version'],
    [900102, NOW, [u('e2e-def-user-array', 'GROUP', 'e2e-array@e2e-version-v2', 4, 'OPERATIONAL', { mounting: { ...DEF_MOUNT, ROLL_DEG: 45 } })], [], [],
      'a group: GROUP beats BUS; a RETIRED OBJECT loadout removes the radio'],
    [900102, BEFORE, [u('e2e-def-user-array', 'GROUP', 'e2e-array@e2e-version-v2', 4, 'OPERATIONAL', { mounting: { ...DEF_MOUNT, ROLL_DEG: 45 } }),
      ttc('CONSTELLATION', 'e2e-ttc@e2e-const', 1, 'OPERATIONAL')], [], [], 'before VALID_FROM the RETIRED loadout does not apply'],
    [900103, NOW, [ttc('OBJECT', 'e2e-ttc-b@900103', 0, 'STANDBY')], [], [],
      'out of the latest group version, on another bus, its own loadout past VALID_TO; of two OBJECT loadouts the later UPDATED_AT wins'],
    [900103, BEFORE, [u('e2e-def-user-array', 'OBJECT', 'e2e-array@900103', 4, 'OPERATIONAL'), ttc('OBJECT', 'e2e-ttc-b@900103', 0, 'STANDBY')], [], [],
      'before VALID_TO its own loadout applies'],
    [900104, NOW, [], [], ['e2e-camera@900104', 'e2e-radio@900104'],
      'a FORMER constellation member with no bus carries nothing; a CONFIG_ID only on a host-bound record, or on no record, does not resolve'],
    [900105, NOW, [u('e2e-def-user-array', 'BUS', 'e2e-array@e2e-bus-v2', 4, 'OPERATIONAL'), ttc('OBJECT', 'e2e-tie-a', 0, 'STANDBY')], [['e2e-tie-a', 'e2e-tie-b']], [],
      'a bus: the definition\'s mounting; a tie is reported and the lower LOADOUT_ID kept'],
    [900199, BEFORE, [{ ...ttc('DIRECT', null, 0, null), definition: ['e2e-bound-ttc-down'] }], [], [], 'a host-bound $RFB binds itself and is not part of the definition'],
    [900199, NOW, [ttc('OBJECT', 'e2e-ttc@900199', 0, 'OPERATIONAL')], [], [], 'a loadout beats a direct binding of the same key'],
  ];
  for (const [N, t, units, conflicts, unresolved, what] of expected) {
    assert.deepStrictEqual(carries(N, t), { units: sortUnits(units), conflicts, unresolved }, `${N} at ${t}: ${what}`);
  }
  assert.deepEqual(definition('$RFB', 'e2e-def-ttc').map((r) => r.ID).sort(), ['e2e-def-ttc-down', 'e2e-def-ttc-up'], 'the $RFB definition is the unbound records of one ID_TRANSMITTER');

  console.log(`PASS loadout: $SLO wide type 299; ${loadouts.length} loadouts and ${records.length - loadouts.length} other records in one $REC file read back; 3 malformed loadouts rejected; `
    + `${expected.length} "what does this object carry" answers match (OBJECT, GROUP, BUS, CONSTELLATION, dates, RETIRED, tie, mounting override); $SNR and $RFB types unchanged`);
} finally {
  fs.rmSync(tmp, { recursive: true, force: true });
}
