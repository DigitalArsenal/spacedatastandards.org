#!/usr/bin/env node
// Offline E2E. Fixture: first 24 unmodified rows of NOAA SWPC RTSW MAG,
// captured 2026-11-03 from the URL below (US government/public-domain data).
// Bundle the committed generated TypeScript, so no published package is used.
import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { pathToFileURL, fileURLToPath } from 'node:url';
import { createHash } from 'node:crypto';
import { build } from 'esbuild';
import * as fb from 'flatbuffers';

const root = fileURLToPath(new URL('../../', import.meta.url));
const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'sws-roundtrip-'));
let records = 0, samples = 0, sourceFields = 0, recordFields = 0;
try {
  await build({ entryPoints: [path.join(root, 'lib/ts/SWS/main.ts')], bundle: true,
    platform: 'node', format: 'esm', outfile: path.join(tmp, 'bindings.mjs'), logLevel: 'silent' });
  const S = await import(pathToFileURL(path.join(tmp, 'bindings.mjs')));
  const fixture = fs.readFileSync(path.join(root, 'scripts/fixtures/sws-rtsw_mag_1m.json'));
  const rows = JSON.parse(fixture);
  assert.ok(rows.length > 0);
  const quantities = { bt: ['ImfMagnitude', 'nT'],
    bx_gse: ['ImfX', 'nT'], by_gse: ['ImfY', 'nT'], bz_gse: ['ImfZ', 'nT'],
    bx_gsm: ['ImfX', 'nT'], by_gsm: ['ImfY', 'nT'], bz_gsm: ['ImfZ', 'nT'],
    theta_gse: ['ImfLatitude', 'deg'], phi_gse: ['ImfLongitude', 'deg'],
    theta_gsm: ['ImfLatitude', 'deg'], phi_gsm: ['ImfLongitude', 'deg'] };
  const flags = ['range', 'scale', 'sensitivity', 'manual_mode', 'max_telemetry_flag', 'max_data_flag'];
  const expectedKeys = ['time_tag', 'active', 'source', 'sample_size', 'overall_quality', ...Object.keys(quantities), ...flags].sort();
  for (const row of rows) assert.deepEqual(Object.keys(row).sort(), expectedKeys, 'every source field must be mapped');
  const url = 'https://services.swpc.noaa.gov/json/rtsw/rtsw_mag_1m.json';
  const scalar = value => value === null ? NaN : Number(value);
  const restore = (value, original) => Number.isNaN(value) ? null : typeof original === 'boolean' ? Boolean(value) : value;
  for (const platform of [...new Set(rows.map(r => r.source))]) {
    const group = rows.filter(r => r.source === platform).sort((a, b) => a.time_tag.localeCompare(b.time_tag));
    const reconstructed = group.map(() => ({}));
    for (const [name, [quantity, units]] of Object.entries(quantities)) {
      let frame = null;
      if (name !== 'bt') {
        const gsm = name.endsWith('_gsm');
        frame = Object.assign(new S.RFMT(), {
          NAME: gsm ? 'GSM' : 'GSE',
          REFERENCE_FRAME_type: S.RFMUnion.RFMCoordinateSystemWrapper,
          REFERENCE_FRAME: Object.assign(new S.RFMCoordinateSystemWrapperT(), {
            COORDINATE_SYSTEM: Object.assign(new S.RFMCoordinateSystemT(), {
              AXIS_TYPE: gsm ? S.rfmAxisType.SOLAR_MAGNETOSPHERIC : S.rfmAxisType.SOLAR_ECLIPTIC_MAGNETOSPHERIC,
            }),
          }),
        });
      }
      const input = Object.assign(new S.SWST(), {
        SERIES_ID: `${platform}/${name}/${group[0].time_tag.slice(0, 10)}`,
        QUANTITY: S.swsQuantity[quantity], QUANTITY_NAME: name, UNITS: units,
        REFERENCE_FRAME: frame, STATUS: S.swsValueStatus.RealTime,
        LOCATION: S.swsLocation.AtSpacecraft, PLATFORMS: [platform], INSTRUMENT: 'MAG', CADENCE_S: 60,
        // SWPC interval convention is not documented; keep Unspecified.
        EPOCHS_MS: group.map(r => BigInt(Date.parse(r.time_tag + 'Z'))),
        VALUES: group.map(r => scalar(r[name])), QUALITY: group.map(r => r.overall_quality),
        ACTIVE: group.map(r => r.active), SAMPLE_COUNTS: group.map(r => r.sample_size),
        FLAG_NAMES: flags, FLAG_VALUES: flags.flatMap(f => group.map(r => scalar(r[f]))),
        PROVENANCE: Object.assign(new S.PVNT(), { SOURCE_ID: url, SOURCE_KIND: S.pvnSourceKind.Observation,
          ORIGINATOR: 'NOAA SWPC', PROVIDER_ID: 'NOAA SWPC', PRODUCER: 'sws-swpc-roundtrip.mjs',
          LICENSE_CLASS: S.pvnLicenseClass.Reproducible, LICENSE_ID: 'US Government public domain',
          LINEAGE: 'Unmodified rows trimmed from NOAA SWPC RTSW MAG JSON; null numeric values encoded as NaN.' }),
        SOURCE_DIGEST: createHash('sha256').update(fixture).digest('hex'), RETRIEVED_AT: '2026-11-03T18:06:23Z',
      });
      const builder = new fb.Builder(1024);
      S.SWS.finishSWSBuffer(builder, input.pack(builder));
      const bytes = builder.asUint8Array();
      assert.equal(Buffer.from(bytes.subarray(4, 8)).toString(), '$SWS');
      const output = S.SWS.getRootAsSWS(new fb.ByteBuffer(bytes)).unpack();
      assert.deepEqual(output, input, 'every SWS field, nested field, default and vector must round-trip');
      recordFields += Object.keys(input).length;
      for (let i = 0; i < group.length; i++) {
        assert.equal(output.VALUES[i], scalar(group[i][name]), `${platform}/${name}/${i}`);
        const r = reconstructed[i];
        r[name] = restore(output.VALUES[i], group[i][name]);
        r.time_tag = new Date(Number(output.EPOCHS_MS[i])).toISOString().replace('.000Z', '');
        r.source = output.PLATFORMS[0]; r.active = output.ACTIVE[i];
        r.sample_size = output.SAMPLE_COUNTS[i]; r.overall_quality = output.QUALITY[i];
        flags.forEach((f, j) => { r[f] = restore(output.FLAG_VALUES[j * group.length + i], group[i][f]); });
        samples++;
      }
      records++;
    }
    for (let i = 0; i < group.length; i++) {
      assert.deepEqual(reconstructed[i], group[i], `all source fields in ${platform} row ${i}`);
      sourceFields += Object.keys(group[i]).length;
    }
  }
  console.log(`PASS SWS SWPC roundtrip: ${rows.length} source rows, ${records} records, ${samples} sample values, ${sourceFields} source fields, ${recordFields} record fields compared`);
} catch (error) {
  console.error(`FAIL SWS SWPC roundtrip after ${records} records and ${samples} sample values:`, error);
  process.exitCode = 1;
} finally {
  fs.rmSync(tmp, { recursive: true, force: true });
}
