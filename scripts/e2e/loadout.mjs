#!/usr/bin/env node
// One E2E for the $SLO sensor loadout (1.291.0): a definition published once, bound to hosts by id.
//   a. the IDL: $SLO keeps its 22 fields of 1.290.0 and appends CONFIG_PUBLISHER_PEER_ID and SET_PUBLISHER_PEER_ID;
//      $SNR and $RFB keep every 1.290.0 type, field and member and append UPDATED_AT; $SLO is wide record type 299;
//      no field shares a name with an enum, no MIN/MAX member; $SLO sorts after every standard with a field SNR;
//   b. real records: three publishers each write one stream of size-prefixed records headed by its $DPM
//      (definitions, corrected definitions, host-bound records, $CAT, $CMR, $EGP versions and loadouts); the streams
//      are read back from disk, every record dispatched on its file identifier, the CIDs taken over the published
//      bytes; every loadout also travels in one $REC as wide type 299;
//   c. the READING RULE of schema/SLO/main.fbs (scripts/e2e/lib/slo-reading-rule.mjs): rejected, skipped and
//      unresolved loadouts, and "what does this host carry" for objects, a site and an entity at three times,
//      compared with the expected answers;
//   d. every loadout copied through the generated C++ and Go (read, then written again) re-encodes to the JS bytes.
import assert from 'node:assert/strict';
import crypto from 'node:crypto';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { execFileSync } from 'node:child_process';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { allArms, closure, cppCopySource, goCopySource, parseIdl, populate } from './lib/idl-wire.mjs';
import { carries, isDefinition, overlay, rawCid, readFrames } from './lib/slo-reading-rule.mjs';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');
const schemaRoot = path.join(root, 'schema');
const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'sds-loadout-e2e-'));
const run = (cmd, args, cwd = tmp) => execFileSync(cmd, args, { cwd, encoding: 'utf8', stdio: ['ignore', 'pipe', 'pipe'], maxBuffer: 256 * 1024 * 1024 });
const CXX = process.env.CXX || 'c++';
const fieldSig = (f) => `${f.name}:${f.vector ? `[${f.elem}]` : f.elem}=${f.def ?? ''}${f.required ? '!' : ''}`;
const sha = (s) => crypto.createHash('sha256').update(s).digest('hex');
const sortStr = (xs) => [...xs].sort((a, b) => (String(a) < String(b) ? -1 : 1));

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
    'CONFIG_PUBLISHER_PEER_ID:string=', 'SET_PUBLISHER_PEER_ID:string=',
  ], '$SLO: the 22 fields of 1.290.0 in order, then the two publisher fields');
  const members = (model, e) => model.enums.get(e).members.map((m) => `${m.name}=${m.value}`);
  assert.deepEqual(members(slo, 'sloHostScope'), ['UNSPECIFIED=0', 'OBJECT=1', 'SITE=2', 'ENTITY=3', 'CONSTELLATION=4', 'GROUP=5', 'BUS=6']);
  assert.deepEqual(members(slo, 'sloUnitState'), ['UNKNOWN=0', 'PLANNED=1', 'OPERATIONAL=2', 'DEGRADED=3', 'STANDBY=4', 'FAILED=5', 'RETIRED=6']);
  // Each family as of 1.290.0: [types, first 16 hex of the digest over their signatures], with the grown table cut to
  // its 1.290.0 field count; then what that table appends.
  const FAMILY = {
    SNR: ['SNR', 16, [69, '720f97426e63080b'], ['UPDATED_AT:string=']],
    RFB: ['RFB', 25, [7, '4b08c1b6b2f3e74f'], ['UPDATED_AT:string=']],
    SLO: ['SLO', 22, [72, 'f4db960a5a2bb2de'], ['CONFIG_PUBLISHER_PEER_ID:string=', 'SET_PUBLISHER_PEER_ID:string=']],
  };
  const CUT = Object.fromEntries(Object.values(FAMILY).map(([table, count]) => [table, count]));
  for (const [code, [table, count, want, added]] of Object.entries(FAMILY)) {
    const m = parseIdl(schemaRoot, code);
    const fields = (n, t) => (n in CUT ? t.fields.slice(0, CUT[n]) : t.fields);
    const sigs = [...[...m.tables].map(([n, t]) => `T${n}:${fields(n, t).map(fieldSig).join(';')}`),
      ...[...m.enums].map(([n, e]) => `E${n}:${e.base}|${e.members.map((x) => `${x.name}=${x.value}`).join(';')}`)].sort();
    assert.deepEqual([sigs.length, sha(sigs.join('\n')).slice(0, 16)], want, `${code}: every 1.290.0 type, field and member unchanged`);
    assert.deepEqual(m.tables.get(table).fields.slice(count).map(fieldSig), added, `${code}: the additions, last`);
  }
  const camel = (s) => s.toLowerCase().replace(/_([a-z0-9])/g, (_, c) => c.toUpperCase());
  const enumNames = new Set([...slo.enums.keys()].map((n) => n.toLowerCase()));
  for (const f of slo.tables.get('SLO').fields) assert.ok(!enumNames.has(camel(f.name).toLowerCase()), `SLO.${f.name} shares a name with an enum`);
  for (const e of ['sloHostScope', 'sloUnitState']) assert.ok(!members(slo, e).some((m) => /^(MIN|MAX)=/i.test(m)), `${e}: no MIN/MAX`);
  const ordinals = JSON.parse(fs.readFileSync(path.join(schemaRoot, 'REC/RECORDTYPE_ORDINALS.json'), 'utf8'));
  assert.equal(ordinals.extended_ordinals.SLO, 299, '$SLO is wide record type 299');
  assert.deepEqual(Object.entries(ordinals.extended_ordinals).filter(([, v]) => v === 299).map(([k]) => k), ['SLO'], 'no other standard holds 299');
  assert.equal(ordinals.ordinals.SLO, undefined, '$SLO is not in the full union');
  const withSnrField = fs.readdirSync(schemaRoot).filter((c) => fs.existsSync(path.join(schemaRoot, c, 'main.fbs'))
    && /^\s*SNR\s*:/m.test(fs.readFileSync(path.join(schemaRoot, c, 'main.fbs'), 'utf8')));
  assert.ok(withSnrField.length > 0 && withSnrField.every((c) => c < 'SLO'), `$SLO sorts after ${withSnrField.join(', ')}`);

  // ---- b. Three publishers' streams, written and read back.
  const fb = await import(pathToFileURL(path.join(root, 'node_modules/flatbuffers/js/flatbuffers.js')));
  const js = async (code) => import(pathToFileURL(path.join(root, `lib/js/${code}/main.js`)));
  const CODES = ['SNR', 'RFB', 'CAT', 'CMR', 'EGP', 'SLO', 'DPM', 'REC'];
  const B = Object.fromEntries(CODES.map((c, i) => [c, null]));
  await Promise.all(CODES.map(async (c) => { B[c] = await js(c); }));
  const { SNR: N, RFB: F, CAT: C, CMR: M, EGP: G, SLO: L, DPM: D, REC: R } = B;
  const T = (cls, v) => Object.assign(new cls(), v);
  const at = (d) => `${d}T00:00:00.000Z`;
  const U = at('2026-11-01');
  const PEER = { OPR: 'e2e-peer-operator', CAT: 'e2e-peer-catalog', OTH: 'e2e-peer-other' };

  // Definitions, corrected definitions and host-bound records.
  const arrayMount = (el) => T(N.SNRMountingT, { FRAME: N.snrMountingFrame.PLATFORM_BODY, BORESIGHT_AZIMUTH_DEG: 0, BORESIGHT_ELEVATION_DEG: el, ROLL_DEG: 0, POINTING: N.snrPointingMode.NADIR });
  const snr = (v) => T(N.SNRT, { TYPE: N.SensorType.COMMS_ANTENNA, PROVENANCE: T(N.OPPProvenanceT, { SOURCE: 'e2e fixture', METHOD: N.oppDeterminationMethod.USER_DEFINED }), ...v });
  const array = (UPDATED_AT, el, NAME = 'E2E user-link phased array') => snr({ SENSOR_ID: 'e2e-def-user-array', NAME, UPDATED_AT, EMISSION: N.snrEmissionMode.ACTIVE, MOUNTING: arrayMount(el),
    SPECTRAL_BANDS: [T(N.SNRSpectralBandT, { NAME: 'Ku', DESIGNATION: 'Ku', FREQ_LOW_HZ: 10.7e9, FREQ_HIGH_HZ: 12.7e9, DIRECTION: N.snrBandDirection.TRANSMIT })] });
  const arrayV1 = array(at('2026-01-01'), -90);
  const arrayV2 = array(at('2026-10-01'), -89.5);
  const dupA = snr({ SENSOR_ID: 'e2e-def-dup', NAME: 'E2E dup A' });
  const dupB = snr({ SENSOR_ID: 'e2e-def-dup', NAME: 'E2E dup B' });
  const camera = snr({ SENSOR_ID: 'e2e-oneoff-camera', NAME: 'E2E camera', NORAD_CAT_ID: 900101, TYPE: N.SensorType.EO_TV });
  const cospar = snr({ SENSOR_ID: 'e2e-cospar-only', NAME: 'E2E cospar camera', OBJECT_ID: '2026-999A', TYPE: N.SensorType.EO_TV });
  const siteRadar = snr({ SENSOR_ID: 'e2e-site-radar', NAME: 'E2E site radar', SITE_ID: 'e2e-site-1', TYPE: N.SensorType.RADAR_PULSE });
  const rfb = (ID, ID_TRANSMITTER, dir, CENTER_FREQ, v = {}) => T(F.RFBT, { ID, ID_TRANSMITTER, LINK_DIRECTION: F.linkCategory[dir], CENTER_FREQ, NAME: 'E2E TT&C', CITATION: 'e2e fixture', ...v });
  const ttcUp = rfb('e2e-def-ttc-up', 'e2e-def-ttc', 'UPLINK', 2050, { UPDATED_AT: at('2026-01-01') });
  const ttcDownV1 = rfb('e2e-def-ttc-down', 'e2e-def-ttc', 'DOWNLINK', 2250, { UPDATED_AT: at('2026-01-01') });
  const ttcDownV2 = rfb('e2e-def-ttc-down', 'e2e-def-ttc', 'DOWNLINK', 2245, { UPDATED_AT: at('2026-10-01') });
  const boundTtc = rfb('e2e-bound-ttc-down', 'e2e-def-ttc', 'DOWNLINK', 2250, { NORAD_CAT_ID: 900199 });
  // The upstream transmitter-database shape: no catalogue number, the database's satellite id in ID_ENTITY.
  const satnogsLike = rfb('e2e-satnogs-like', 'e2e-entity-radio', 'DOWNLINK', 437.5, { ID_ENTITY: 'e2e-entity-7' });
  assert.equal(isDefinition('RFB', satnogsLike), false, 'an $RFB bound only by ID_ENTITY is host-bound');
  assert.equal(isDefinition('SNR', cospar), false, 'an $SNR bound only by OBJECT_ID is host-bound');
  assert.equal(isDefinition('SNR', arrayV2) && isDefinition('RFB', ttcUp), true, 'no host: a definition');

  // Sets, from the catalogue publisher.
  const cats = [[900101, 'e2e-bus-v2', '2026-999A'], [900102, 'e2e-bus-v2'], [900103, 'e2e-bus-v1'], [900104, null], [900105, 'e2e-bus-v2'], [900106, 'e2e-bus-v1']]
    .map(([NORAD_CAT_ID, BUS_ID, OBJECT_ID = null]) => T(C.CATT, { OBJECT_NAME: `E2E-${NORAD_CAT_ID}`, NORAD_CAT_ID, BUS_ID, OBJECT_ID }));
  const cmr = (NORAD_CAT_ID, state, UPDATED_AT = at('2026-01-01')) => T(M.CMRT, { MEMBERSHIP_ID: `e2e-const:${NORAD_CAT_ID}`, NORAD_CAT_ID, CONSTELLATION_ID: 'e2e-const',
    CONSTELLATION_NAME: 'E2E', STATE: M.cmrMembershipState[state], UPDATED_AT, PROVENANCE: [T(M.CMRProvenanceT, { SOURCE: 'e2e fixture', SOURCE_DATASET: 'e2e', RETRIEVED_AT: UPDATED_AT })] });
  const cmrs = [cmr(900101, 'ACTIVE'), cmr(900102, 'ACTIVE'), cmr(900103, 'ACTIVE'), cmr(900104, 'FORMER'), cmr(900105, 'ACTIVE'),
    cmr(900106, 'ACTIVE'), cmr(900106, 'FORMER', at('2026-08-01'))];
  const member = (v) => T(G.EGPMemberT, v);
  const catMember = (n, shortcut = true) => member({ STANDARD: '$CAT', RECORD_ID: String(n), NORAD_CAT_ID: shortcut ? n : 0 });
  const egp = (GROUP_ID, UPDATED_AT, MEMBERS) => T(G.EGPT, { GROUP_ID, NAME: GROUP_ID, UPDATED_AT, MEMBERSHIP_MODE: G.egpMembershipMode.ENUMERATED, MEMBERS });
  // The later version first, so a reader that keeps the last one read gets the wrong group.
  const versionV2 = [egp('e2e-version-v2', at('2026-06-01'), [catMember(900101), catMember(900102, false)]),
    egp('e2e-version-v2', at('2026-01-01'), [catMember(900101), catMember(900102), catMember(900103)])];

  // Loadouts, from the operator.
  const S = L.sloHostScope; const ST = L.sloUnitState;
  const mount = (v) => T(L.SNRMountingT, v);
  const lo = (v) => T(L.SLOT, { UPDATED_AT: U, PROVENANCE: [T(L.OPPProvenanceT, { SOURCE: 'e2e fixture', METHOD: L.oppDeterminationMethod.USER_DEFINED })], ...v });
  const ARRAY = { CONFIG_STANDARD: '$SNR', CONFIG_ID: 'e2e-def-user-array' };
  const TTC = { CONFIG_STANDARD: '$RFB', CONFIG_ID: 'e2e-def-ttc' };
  const ON = (n) => ({ HOST_SCOPE: S.OBJECT, NORAD_CAT_ID: n });
  const FROM_CAT = { SET_PUBLISHER_PEER_ID: PEER.CAT };
  const cidOf = (finish, value) => { const b = new fb.Builder(1024); finish(b, value.pack(b)); return rawCid(b.asUint8Array()); };
  const snrCid = (v) => cidOf((b, o) => N.SNR.finishSizePrefixedSNRBuffer(b, o), v);
  const loadouts = [
    lo({ LOADOUT_ID: 'e2e-ttc@e2e-const', ...TTC, HOST_SCOPE: S.CONSTELLATION, CONSTELLATION_ID: 'e2e-const', ...FROM_CAT, COUNT: 1, STATUS: ST.OPERATIONAL, VALID_FROM: at('2020-01-01') }),
    lo({ LOADOUT_ID: 'e2e-ttc@e2e-const', ...TTC, HOST_SCOPE: S.CONSTELLATION, CONSTELLATION_ID: 'e2e-const', ...FROM_CAT, COUNT: 2, POSITION: 'e2e-old-slot', UPDATED_AT: at('2026-01-01') }),
    lo({ LOADOUT_ID: 'e2e-array@e2e-bus-v2', ...ARRAY, POSITION: 'nadir-1', HOST_SCOPE: S.BUS, BUS_ID: 'e2e-bus-v2', ...FROM_CAT, COUNT: 4, STATUS: ST.OPERATIONAL }),
    lo({ LOADOUT_ID: 'e2e-array@e2e-version-v2', ...ARRAY, POSITION: 'nadir-1', HOST_SCOPE: S.GROUP, GROUP_ID: 'e2e-version-v2', ...FROM_CAT, COUNT: 4, STATUS: ST.OPERATIONAL, MOUNTING: mount({ ROLL_DEG: 45 }) }),
    lo({ LOADOUT_ID: 'e2e-array@900101', ...ARRAY, POSITION: 'nadir-1', ...ON(900101), STATUS: ST.FAILED, SERIAL_NUMBER: 'E2E-SN-0001', MOUNTING: mount({ BORESIGHT_AZIMUTH_DEG: 10 }) }),
    lo({ LOADOUT_ID: 'e2e-ttc-mast@900101', ...TTC, POSITION: 'mast', ...ON(900101), STATUS: ST.RETIRED }),
    lo({ LOADOUT_ID: 'e2e-ttc@900102', ...TTC, ...ON(900102), STATUS: ST.RETIRED, VALID_FROM: at('2026-06-01') }),
    lo({ LOADOUT_ID: 'e2e-array@900103', ...ARRAY, POSITION: 'nadir-1', ...ON(900103), COUNT: 4, STATUS: ST.OPERATIONAL, VALID_TO: at('2026-01-01') }),
    lo({ LOADOUT_ID: 'e2e-ttc-a@900103', ...TTC, ...ON(900103), STATUS: ST.DEGRADED, UPDATED_AT: at('2026-02-01') }),
    lo({ LOADOUT_ID: 'e2e-ttc-b@900103', ...TTC, ...ON(900103), STATUS: ST.STANDBY, UPDATED_AT: at('2026-03-01') }),
    lo({ LOADOUT_ID: 'e2e-camera@900104', CONFIG_STANDARD: '$SNR', CONFIG_ID: 'e2e-oneoff-camera', ...ON(900104) }),
    lo({ LOADOUT_ID: 'e2e-radio@900104', CONFIG_STANDARD: '$RFB', CONFIG_ID: 'e2e-no-such-radio', ...ON(900104) }),
    lo({ LOADOUT_ID: 'e2e-dup@900104', CONFIG_STANDARD: '$SNR', CONFIG_ID: 'e2e-def-dup', ...ON(900104) }),
    lo({ LOADOUT_ID: 'e2e-cid-bad@900104', ...ARRAY, POSITION: 'spare', ...ON(900104), CONFIG_CID: snrCid(snr({ SENSOR_ID: 'e2e-def-user-array', NAME: 'never published' })) }),
    lo({ LOADOUT_ID: 'e2e-tie-a', ...TTC, ...ON(900105), STATUS: ST.STANDBY }),
    lo({ LOADOUT_ID: 'e2e-tie-b', ...TTC, ...ON(900105), STATUS: ST.DEGRADED }),
    lo({ LOADOUT_ID: 'e2e-dup@900105', CONFIG_STANDARD: '$SNR', CONFIG_ID: 'e2e-def-dup', ...ON(900105), CONFIG_CID: snrCid(dupB) }),
    lo({ LOADOUT_ID: 'e2e-array-failed@900105', ...ARRAY, ...ON(900105), STATUS: ST.FAILED }),
    lo({ LOADOUT_ID: 'e2e-gone@900105', ...ARRAY, POSITION: 'gone-slot', ...ON(900105), STATUS: ST.OPERATIONAL, UPDATED_AT: at('2026-01-01') }),
    lo({ LOADOUT_ID: 'e2e-gone@900105', ...ARRAY, POSITION: 'gone-slot', ...ON(900105), STATUS: ST.OPERATIONAL, VALID_TO: at('2026-03-01'), UPDATED_AT: at('2026-04-01') }),
    lo({ LOADOUT_ID: 'e2e-badlatest@900105', ...ARRAY, POSITION: 'bl-slot', ...ON(900105), STATUS: ST.OPERATIONAL, UPDATED_AT: at('2026-01-01') }),
    lo({ LOADOUT_ID: 'e2e-badlatest@900105', ...ARRAY, POSITION: 'bl-slot', ...ON(900105), STATUS: ST.OPERATIONAL, VALID_TO: '2026-13-01T00:00:00.000Z', UPDATED_AT: at('2026-05-01') }),
    lo({ LOADOUT_ID: 'e2e-idm@900105', CONFIG_STANDARD: '$IDM', CONFIG_ID: 'e2e-some-device', ...ON(900105) }),
    lo({ LOADOUT_ID: 'e2e-array-v1@900106', ...ARRAY, POSITION: 'nadir-1', ...ON(900106), STATUS: ST.OPERATIONAL, CONFIG_CID: snrCid(arrayV1) }),
    lo({ LOADOUT_ID: 'e2e-array-standby@900106', ...ARRAY, ...ON(900106), STATUS: ST.STANDBY, VALID_FROM: at('2026-09-01'), UPDATED_AT: at('2026-11-10') }),
    lo({ LOADOUT_ID: 'e2e-array@e2e-own-group', ...ARRAY, POSITION: 'aux', HOST_SCOPE: S.GROUP, GROUP_ID: 'e2e-own-group', COUNT: 1, STATUS: ST.OPERATIONAL }),
    lo({ LOADOUT_ID: 'e2e-ttc@900199', ...TTC, POSITION: 'mast', ...ON(900199), STATUS: ST.OPERATIONAL, VALID_FROM: at('2026-06-01') }),
    lo({ LOADOUT_ID: 'e2e-ttc@e2e-site-1', ...TTC, HOST_SCOPE: S.SITE, SITE_ID: 'e2e-site-1', COUNT: 2, STATUS: ST.OPERATIONAL,
      MOUNTING: mount({ FRAME: L.snrMountingFrame.LOCAL_ENU, ELEVATION_LIMIT_MIN_DEG: 5 }) }),
    lo({ LOADOUT_ID: 'e2e-array@e2e-ground-net', ...ARRAY, POSITION: 'roof', HOST_SCOPE: S.GROUP, GROUP_ID: 'e2e-ground-net', STATUS: ST.OPERATIONAL,
      MOUNTING: mount({ FRAME: L.snrMountingFrame.LOCAL_ENU, BORESIGHT_ELEVATION_DEG: 90 }) }),
    lo({ LOADOUT_ID: 'e2e-array@e2e-entity-7', ...ARRAY, HOST_SCOPE: S.ENTITY, ENTITY_ID: 'e2e-entity-7', STATUS: ST.PLANNED }),
    lo({ LOADOUT_ID: 'e2e-entity-radio@e2e-entity-7', CONFIG_STANDARD: '$RFB', CONFIG_ID: 'e2e-entity-radio', HOST_SCOPE: S.ENTITY, ENTITY_ID: 'e2e-entity-7' }),
    lo({ LOADOUT_ID: 'e2e-bad-none', ...TTC, HOST_SCOPE: S.UNSPECIFIED, NORAD_CAT_ID: 900101 }),
    lo({ LOADOUT_ID: 'e2e-bad-two', ...TTC, ...ON(900101), GROUP_ID: 'e2e-version-v2' }),
    lo({ LOADOUT_ID: 'e2e-bad-empty', ...ARRAY, HOST_SCOPE: S.BUS }),
    lo({ LOADOUT_ID: 'e2e-bad-date', ...TTC, ...ON(900101), VALID_FROM: '2026-11-01' }),
    lo({ LOADOUT_ID: 'e2e-bad-order', ...TTC, ...ON(900101), VALID_FROM: at('2026-06-01'), VALID_TO: at('2026-06-01') }),
    lo({ LOADOUT_ID: 'e2e-bad-cid-rfb', ...TTC, ...ON(900101), CONFIG_CID: snrCid(arrayV2) }),
    lo({ LOADOUT_ID: 'e2e-bad-twin', ...TTC, ...ON(900101), STATUS: ST.FAILED }),
    lo({ LOADOUT_ID: 'e2e-bad-twin', ...TTC, ...ON(900101), STATUS: ST.DEGRADED }),
  ];
  const ownGroups = [egp('e2e-own-group', U, [catMember(900106)]), egp('e2e-ground-net', U, [member({ STANDARD: '$SIT', RECORD_ID: 'e2e-site-1' })])];

  // One stream per publisher: its $DPM, then its records, each a size-prefixed FlatBuffer.
  const MOD = { SNR: N, RFB: F, CAT: C, CMR: M, EGP: G, SLO: L, DPM: D };
  const frame = (code, value) => { const b = new fb.Builder(1024); MOD[code][code][`finishSizePrefixed${code}Buffer`](b, value.pack(b)); return b.asUint8Array(); };
  const dpm = (peer) => T(D.DPMT, { DATASET_ID: `e2e-${peer}`, UPDATE_ID: 'e2e-1', PROVIDER_PEER_ID: peer, PUBLISH_TIMESTAMP: U });
  const streams = {
    [PEER.OPR]: [['SNR', arrayV1], ['SNR', arrayV2], ['SNR', dupA], ['SNR', dupB], ['SNR', camera], ['SNR', cospar], ['SNR', siteRadar],
      ['RFB', ttcUp], ['RFB', ttcDownV1], ['RFB', ttcDownV2], ['RFB', boundTtc], ['RFB', satnogsLike], ...ownGroups.map((g) => ['EGP', g]), ...loadouts.map((l) => ['SLO', l])],
    [PEER.CAT]: [...cats.map((c) => ['CAT', c]), ...cmrs.map((c) => ['CMR', c]), ...versionV2.map((g) => ['EGP', g])],
    // Another publisher's group of the same GROUP_ID, and a newer definition of the same SENSOR_ID: neither is the operator's choice.
    // A LOADOUT_ID the operator also uses, older than the operator's versions: another publisher's, so it stands.
    [PEER.OTH]: [['EGP', egp('e2e-version-v2', U, [catMember(900104)])], ['SNR', array(at('2026-11-15'), 0, 'another publisher\'s array')],
      ['CAT', T(C.CATT, { NORAD_CAT_ID: 900104, BUS_ID: 'e2e-bus-v2' })],
      ['SLO', lo({ LOADOUT_ID: 'e2e-gone@900105', ...ARRAY, POSITION: 'oth-slot', ...ON(900106), STATUS: ST.OPERATIONAL, CONFIG_PUBLISHER_PEER_ID: PEER.OPR, UPDATED_AT: at('2025-06-01') })]],
  };
  for (const [peer, records] of Object.entries(streams)) {
    fs.writeFileSync(path.join(tmp, `${peer}.sds`), Buffer.concat([dpm(peer), ...records].map((r, i) => Buffer.from(i === 0 ? frame('DPM', r) : frame(...r)))));
  }
  const db = [];
  for (const peer of Object.values(PEER)) {
    const frames = readFrames(new Uint8Array(fs.readFileSync(path.join(tmp, `${peer}.sds`))));
    assert.equal(frames[0].identifier, '$DPM', `${peer}: the stream opens with its $DPM`);
    const head = D.DPM.getSizePrefixedRootAsDPM(new fb.ByteBuffer(frames[0].bytes)).unpack();
    for (const { identifier, bytes } of frames.slice(1)) {
      const code = identifier.slice(1);
      const value = MOD[code][code][`getSizePrefixedRootAs${code}`](new fb.ByteBuffer(bytes)).unpack();
      db.push({ standard: code, publisher: head.PROVIDER_PEER_ID, value, bytes });
    }
    assert.equal(frames.length - 1, streams[peer].length, `${peer}: every record read back`);
  }
  for (const [i, [code, v]] of streams[PEER.OPR].entries()) assert.deepStrictEqual(db[i].value, v, `${code} ${i}: every field round-trips`);
  assert.equal(db.find((e) => e.value.SENSOR_ID === 'e2e-def-dup' && e.value.NAME === 'E2E dup B').bytes.length > 0, true);
  // Every loadout as wide record type 299 in one $REC.
  const wide = (o) => { const b = new fb.Builder(1024); L.SLO.finishSLOBuffer(b, o.pack(b)); return [...b.asUint8Array()]; };
  const rb = new fb.Builder(8192);
  R.REC.finishRECBuffer(rb, T(R.RECT, { version: 'loadout-e2e', RECORDS: loadouts.map((o) => T(R.RecordT, { value_type: R.RecordType.NONE, standard: 'SLO', EXTENDED_TYPE: R.RecordTypeExtended.SLO, EXTENDED_VALUE: wide(o) })) }).pack(rb));
  fs.writeFileSync(path.join(tmp, 'loadouts.rec'), rb.asUint8Array());
  const rec = R.REC.getRootAsREC(new fb.ByteBuffer(new Uint8Array(fs.readFileSync(path.join(tmp, 'loadouts.rec'))))).unpack();
  rec.RECORDS.forEach((r, i) => {
    assert.deepEqual([r.standard, r.value_type, r.EXTENDED_TYPE], ['SLO', R.RecordType.NONE, 299], `$REC ${i}: wide record type 299`);
    const bb = new fb.ByteBuffer(new Uint8Array(r.EXTENDED_VALUE));
    assert.ok(L.SLO.bufferHasIdentifier(bb));
    assert.deepStrictEqual(L.SLO.getRootAsSLO(bb).unpack(), loadouts[i], `$REC ${i}: the loadout round-trips`);
  });

  // ---- c. The reading rule.
  const snrModel = parseIdl(schemaRoot, 'SNR');
  const mountFields = snrModel.tables.get('SNRMounting').fields.map((f) => ({ name: f.name, kind: snrModel.enums.has(f.elem) ? 'enum' : f.elem === 'double' ? 'double' : 'table' }));
  const enums = { sloHostScope: L.sloHostScope, sloUnitState: L.sloUnitState, cmrMembershipState: M.cmrMembershipState };
  const ask = (host, t) => carries(db, host, t, enums, mountFields);
  const BEFORE = at('2025-12-31'); const MID = at('2026-05-01'); const NOW = at('2026-11-19');
  const first = ask({ NORAD_CAT_ID: 900101, OBJECT_ID: '2026-999A' }, NOW);
  assert.deepEqual(first.rejected, sortStr([
    ['e2e-bad-none', 'HOST_SCOPE UNSPECIFIED'], ['e2e-bad-two', 'scope OBJECT with host fields [NORAD_CAT_ID,GROUP_ID]'],
    ['e2e-bad-empty', 'scope BUS with host fields []'], ['e2e-bad-date', 'VALID_FROM not in the form'], ['e2e-bad-order', 'VALID_FROM at or after VALID_TO'],
    ['e2e-bad-cid-rfb', 'CONFIG_CID with $RFB'], ['e2e-bad-twin', 'two versions with one UPDATED_AT'], ['e2e-badlatest@900105', 'VALID_TO not in the form'],
  ]), 'rejected: no host field, two, an empty one, a date not in the form, VALID_FROM at VALID_TO, a CID on $RFB, twin versions, a malformed latest version');
  assert.deepEqual(first.skipped, ['e2e-idm@900105'], 'a CONFIG_STANDARD the reader does not implement is skipped, not rejected');

  const DEF2 = overlay(arrayV2.MOUNTING, null, mountFields);
  const DEF1 = overlay(arrayV1.MOUNTING, null, mountFields);
  assert.deepStrictEqual(DEF2, { FRAME: 1, BORESIGHT_AZIMUTH_DEG: 0, BORESIGHT_ELEVATION_DEG: -89.5, ROLL_DEG: 0, POINTING: 1, SCAN_AZIMUTH_RATE_DEG_S: NaN,
    SCAN_ELEVATION_RATE_DEG_S: NaN, AZIMUTH_LIMIT_MIN_DEG: NaN, AZIMUTH_LIMIT_MAX_DEG: NaN, ELEVATION_LIMIT_MIN_DEG: NaN, ELEVATION_LIMIT_MAX_DEG: NaN, PROVENANCE: null });
  const ENU = (v) => ({ ...Object.fromEntries(Object.entries(DEF2).map(([k, x]) => [k, typeof x === 'number' ? NaN : x])), POINTING: 0, ...v, FRAME: 3 });
  const ARR2 = 'e2e-def-user-array|2026-10-01T00:00:00.000Z|E2E user-link phased array';
  const ARR1 = 'e2e-def-user-array|2026-01-01T00:00:00.000Z|E2E user-link phased array';
  const TTCDEF = ['e2e-def-ttc-down|2026-10-01T00:00:00.000Z|2245', 'e2e-def-ttc-up|2026-01-01T00:00:00.000Z|2050'];
  const unit = (standard, configId, position, scope, loadoutId, count, status, definition, mounting, serial = null) => ({ standard, configId, position, scope, loadoutId, count, status, serial, definition, mounting });
  const arr = (position, scope, loadoutId, count, status, mounting = DEF2, definition = [ARR2], serial = null) => unit('$SNR', 'e2e-def-user-array', position, scope, loadoutId, count, status, definition, mounting, serial);
  const ttc = (position, scope, loadoutId, count, status, definition = TTCDEF, mounting = null) => unit('$RFB', 'e2e-def-ttc', position, scope, loadoutId, count, status, definition, mounting);
  const direct = (standard, configId, definition) => unit(standard, configId, '', 'DIRECT', null, 0, null, definition, null);
  const O = (n, OBJECT_ID = undefined) => ({ NORAD_CAT_ID: n, OBJECT_ID });
  const sortUnits = (us) => [...us].sort((a, b) => (`${a.standard}\0${a.configId}\0${a.position}` < `${b.standard}\0${b.configId}\0${b.position}` ? -1 : 1));
  const expected = [
    [O(900101, '2026-999A'), NOW, [direct('$SNR', 'e2e-oneoff-camera', ['e2e-oneoff-camera||E2E camera']), direct('$SNR', 'e2e-cospar-only', ['e2e-cospar-only||E2E cospar camera']),
      arr('nadir-1', 'OBJECT', 'e2e-array@900101', 0, 'FAILED', { ...DEF2, BORESIGHT_AZIMUTH_DEG: 10 }, [ARR2], 'E2E-SN-0001')], [], [],
    'one object: OBJECT beats GROUP and BUS, a FAILED unit stays, the corrected definition, only the winner\'s override; bound by OBJECT_ID; a positioned RETIRED retires the constellation\'s unpositioned radio'],
    [O(900102), NOW, [arr('nadir-1', 'GROUP', 'e2e-array@e2e-version-v2', 4, 'OPERATIONAL', { ...DEF2, ROLL_DEG: 45 })], [], [],
      'a group member listed by STANDARD and RECORD_ID without the NORAD shortcut; an unpositioned RETIRED retires the radio'],
    [O(900102), BEFORE, [arr('nadir-1', 'GROUP', 'e2e-array@e2e-version-v2', 4, 'OPERATIONAL', { ...DEF2, ROLL_DEG: 45 }), ttc('', 'CONSTELLATION', 'e2e-ttc@e2e-const', 1, 'OPERATIONAL')], [], [],
      'before every group and membership version their earliest version stands; before VALID_FROM the RETIRED loadout does not apply; the latest loadout version, not the positioned older one'],
    [O(900103), NOW, [ttc('', 'OBJECT', 'e2e-ttc-b@900103', 0, 'STANDBY')], [], [], 'out of the latest group version; its own loadout past VALID_TO; of two OBJECT loadouts the later UPDATED_AT'],
    [O(900103), MID, [arr('nadir-1', 'GROUP', 'e2e-array@e2e-version-v2', 4, 'OPERATIONAL', { ...DEF2, ROLL_DEG: 45 }), ttc('', 'OBJECT', 'e2e-ttc-b@900103', 0, 'STANDBY')], [], [],
      'T between two group versions: the version at or before T'],
    [O(900103), BEFORE, [arr('nadir-1', 'OBJECT', 'e2e-array@900103', 4, 'OPERATIONAL'), ttc('', 'OBJECT', 'e2e-ttc-b@900103', 0, 'STANDBY')], [], [], 'before VALID_TO its own loadout'],
    [O(900104), NOW, [], [], ['e2e-camera@900104', 'e2e-cid-bad@900104', 'e2e-dup@900104', 'e2e-radio@900104'],
      'FORMER, no bus, only in another publisher\'s group; host-bound id, no definition, two undated definitions, a CID that matches no version: none resolves'],
    [O(900105), NOW, [arr('nadir-1', 'OBJECT', 'e2e-array-failed@900105', 0, 'FAILED'), unit('$SNR', 'e2e-def-dup', '', 'OBJECT', 'e2e-dup@900105', 0, 'UNKNOWN', ['e2e-def-dup||E2E dup B'], null),
      ttc('', 'OBJECT', 'e2e-tie-a', 0, 'STANDBY')], [['e2e-tie-a', 'e2e-tie-b']], [],
    'an unpositioned OBJECT loadout overrides the positioned BUS one; a CID settles two undated definitions; the latest version past VALID_TO is gone; a malformed latest version leaves nothing; a tie is reported'],
    [O(900106), NOW, [arr('aux', 'OBJECT', 'e2e-array-standby@900106', 0, 'STANDBY'), arr('nadir-1', 'OBJECT', 'e2e-array-v1@900106', 0, 'OPERATIONAL', DEF1, [ARR1]),
      arr('oth-slot', 'OBJECT', 'e2e-gone@900105', 0, 'OPERATIONAL')], [], [],
    'a CID pins the older definition; at one scope a loadout stating the POSITION beats a later one stating none; ACTIVE then FORMER ends the constellation; '
      + 'another publisher\'s loadout of a LOADOUT_ID the operator also uses, with the operator\'s definition'],
    [O(900106), MID, [arr('aux', 'GROUP', 'e2e-array@e2e-own-group', 1, 'OPERATIONAL'), arr('nadir-1', 'OBJECT', 'e2e-array-v1@900106', 0, 'OPERATIONAL', DEF1, [ARR1]),
      arr('oth-slot', 'OBJECT', 'e2e-gone@900105', 0, 'OPERATIONAL'), ttc('', 'CONSTELLATION', 'e2e-ttc@e2e-const', 1, 'OPERATIONAL')], [], [],
    'the loadout\'s own publisher\'s group; before the FORMER record the object is a member'],
    [O(900103), at('2026-01-01'), [arr('nadir-1', 'GROUP', 'e2e-array@e2e-version-v2', 4, 'OPERATIONAL', { ...DEF2, ROLL_DEG: 45 }), ttc('', 'OBJECT', 'e2e-ttc-b@900103', 0, 'STANDBY')], [], [],
      'at VALID_TO exactly the loadout no longer applies'],
    [O(900199), BEFORE, [direct('$RFB', 'e2e-def-ttc', ['e2e-bound-ttc-down||2250'])], [], [], 'a host-bound $RFB binds itself and is not part of the definition'],
    [O(900199), NOW, [ttc('mast', 'OBJECT', 'e2e-ttc@900199', 0, 'OPERATIONAL')], [], [], 'a positioned loadout and a host-bound record of one radio: one unit'],
    [{ SITE_ID: 'e2e-site-1' }, NOW, [direct('$SNR', 'e2e-site-radar', ['e2e-site-radar||E2E site radar']),
      arr('roof', 'GROUP', 'e2e-array@e2e-ground-net', 0, 'OPERATIONAL', ENU({ BORESIGHT_ELEVATION_DEG: 90 })),
      ttc('', 'SITE', 'e2e-ttc@e2e-site-1', 2, 'OPERATIONAL', TTCDEF, ENU({ ELEVATION_LIMIT_MIN_DEG: 5 }))], [], [],
      'a site: bound by SITE_ID, a SITE loadout, a group of sites; a stated FRAME takes the whole mounting from the loadout'],
    [{ ENTITY_ID: 'e2e-entity-7' }, NOW, [direct('$RFB', 'e2e-entity-radio', ['e2e-satnogs-like||437.5']), arr('', 'ENTITY', 'e2e-array@e2e-entity-7', 0, 'PLANNED')], [],
      ['e2e-entity-radio@e2e-entity-7'], 'an entity: an $RFB bound by ID_ENTITY stays, and a loadout naming its id does not resolve or hide it'],
  ];
  for (const [host, t, units, conflicts, unresolved, what] of expected) {
    const got = ask(host, t);
    assert.deepStrictEqual({ units: got.units, conflicts: got.conflicts, unresolved: got.unresolved }, { units: sortUnits(units), conflicts, unresolved }, `${JSON.stringify(host)} at ${t}: ${what}`);
  }

  // ---- d. Every loadout, and one with every field populated, through the generated C++ and Go.
  fs.symlinkSync(path.join(root, 'node_modules'), path.join(tmp, 'node_modules'));
  const runtime = JSON.parse(run('go', ['mod', 'download', '-json', 'github.com/google/flatbuffers@v25.12.19+incompatible']));
  const include = process.env.FLATBUFFERS_INCLUDE_DIR || path.join(runtime.Dir, 'include');
  assert.ok(fs.existsSync(path.join(include, 'flatbuffers/flatbuffers.h')), 'provide pinned C++ runtime headers via FLATBUFFERS_INCLUDE_DIR');
  fs.writeFileSync(path.join(tmp, 'go.mod'), 'module sdsslo\n\ngo 1.21\n\nrequire github.com/google/flatbuffers v25.12.19+incompatible\n');
  const plain = (o) => { const b = new fb.Builder(1024); L.SLO.finishSLOBuffer(b, o.pack(b)); return Buffer.from(b.asUint8Array()); };
  const decode = (f) => L.SLO.getRootAsSLO(new fb.ByteBuffer(new Uint8Array(fs.readFileSync(f)))).unpack();
  const messages = [['populated', populate(slo, L, 'SLO', new Set())], ...loadouts.map((l, i) => [`loadout${i}`, l])];
  const dir = path.join(tmp, 'wire'); fs.mkdirSync(path.join(dir, 'cpp'), { recursive: true });
  const file = (name, leg) => path.join(dir, `${name}.${leg}.fb`);
  for (const [name, o] of messages) fs.writeFileSync(file(name, 'js'), plain(o));
  const copyTables = [...new Set(['SLO', ...closure(slo, 'SLO', { arms: allArms })])];
  run('tar', ['-xzf', path.join(root, 'dist/SLO/SLO.cpp.tar.gz'), '-C', path.join(dir, 'cpp')]);
  // $SCV, which $SNR includes, has a field DOMAIN, a <math.h> macro on macOS: pushed aside (docs/name-collisions.md).
  const cppSource = cppCopySource({ model: slo, root: 'SLO', include: 'SLO/main_generated.h', populated: copyTables });
  assert.ok(cppSource.includes('#include "SLO/main_generated.h"'), 'the C++ copy includes the SLO header');
  fs.writeFileSync(path.join(dir, 'copy.cpp'), cppSource.replace('#include "SLO/main_generated.h"',
    '#include <cmath>\n#include <flatbuffers/flatbuffers.h>\n#pragma push_macro("DOMAIN")\n#undef DOMAIN\n#include "SLO/main_generated.h"\n#pragma pop_macro("DOMAIN")'));
  run(CXX, ['-std=c++17', '-O0', '-I', include, '-I', path.join(dir, 'cpp'), 'copy.cpp', '-o', 'copy'], dir);
  run(path.join(dir, 'copy'), messages.flatMap(([n]) => [file(n, 'js'), file(n, 'cpp')]), dir);
  const goDir = path.join(tmp, 'wireSLO');
  run('cp', ['-R', path.join(root, 'lib/go/SLO'), goDir]); run('chmod', ['-R', 'u+w', goDir]);
  fs.writeFileSync(path.join(goDir, 'wire_e2e.go'), goCopySource({ model: slo, root: 'SLO', pkg: 'SLO', populated: copyTables }));
  fs.mkdirSync(path.join(tmp, 'runwireSLO'));
  fs.writeFileSync(path.join(tmp, 'runwireSLO/main.go'), 'package main\nimport (\n "os"\n p "sdsslo/wireSLO"\n)\nfunc main() { p.WireE2E(os.Args[1:]) }\n');
  run('go', ['run', '-mod=mod', './runwireSLO', ...messages.flatMap(([n]) => [file(n, 'cpp'), file(n, 'go')])]);
  let bytes = 0;
  for (const [name, o] of messages) {
    const jsBytes = fs.readFileSync(file(name, 'js'));
    assert.deepStrictEqual(decode(file(name, 'js')), o, `${name}: JS changed a field`);
    for (const leg of ['cpp', 'go']) {
      const back = decode(file(name, leg));
      assert.deepStrictEqual(back, o, `${name}: ${leg} changed a field`);
      assert.equal(Buffer.compare(plain(back), jsBytes), 0, `${name}: the ${leg} leg re-encodes to the JS bytes`);
    }
    bytes += jsBytes.length;
  }

  console.log(`PASS loadout: $SLO 1.291.0 (22 fields of 1.290.0 + 2), $SNR and $RFB + UPDATED_AT, wide type 299; 3 publishers' streams (${db.length} records) read back; `
    + `${first.rejected.length} loadouts rejected, ${first.skipped.length} skipped; ${expected.length} "what does this host carry" answers match (objects, a site, an entity; `
    + `versions, corrected definitions, CIDs, set publishers, membership at T, positions, RETIRED, FRAME); ${messages.length} $SLO buffers (${bytes} B) byte-equal JS -> C++ -> Go -> JS`);
} finally {
  fs.rmSync(tmp, { recursive: true, force: true });
}
