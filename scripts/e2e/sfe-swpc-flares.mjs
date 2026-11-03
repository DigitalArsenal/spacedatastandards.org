#!/usr/bin/env node
// Offline E2E using generated TS bindings and the verbatim modules-lane excerpt.
// Source commit: bc6cc21066c595eaa7bd6486568d153d33fc116f
// Source path: data-source/swpc-realtime/tests/fixtures/xray-flares-7-day.excerpt.json
// Provenance copied from that commit's fixtures/provenance.json:
// URL: https://services.swpc.noaa.gov/json/goes/primary/xray-flares-7-day.json
// Retrieved: 2026-11-03T19:09:09.361967+00:00
// Full SHA256: e2ca4884b4271c926a66ca8446c620a698bc2bbc4a1247f114c47255268eb6c4 (35 rows)
// Excerpt SHA256: bef21ff899a4ccbb5154a5bd88dbc7e95a059d72210466f9c830ebb8e7276c68 (1 row)
// Selection: First object, source bytes preserved verbatim; array delimiters and final newline added
// License: NOAA SWPC public domain; https://www.weather.gov/disclaimer
import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { createHash } from 'node:crypto';
import { build } from 'esbuild';
import * as fb from 'flatbuffers';

const root = fileURLToPath(new URL('../../', import.meta.url));
const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'sfe-roundtrip-'));
try {
  await build({ entryPoints: [path.join(root, 'lib/ts/SFE/main.ts')], bundle: true,
    platform: 'node', format: 'esm', outfile: path.join(tmp, 'bindings.mjs'), logLevel: 'silent' });
  const S = await import(pathToFileURL(path.join(tmp, 'bindings.mjs')));
  const fixture = fs.readFileSync(path.join(root, 'scripts/fixtures/sfe-xray-flares-7-day.json'));
  const digest = createHash('sha256').update(fixture).digest('hex');
  assert.equal(digest, 'bef21ff899a4ccbb5154a5bd88dbc7e95a059d72210466f9c830ebb8e7276c68');
  const rows = JSON.parse(fixture);
  assert.equal(rows.length, 1);
  // time_tag is the source event identity, independently preserved from begin_time.
  const mapping = { time_tag: 'EVENT_ID', begin_time: 'BEGIN_TIME', begin_class: 'BEGIN_XRAY_CLASS',
    max_time: 'PEAK_TIME', max_class: 'XRAY_CLASS', max_xrlong: 'PEAK_FLUX_W_M2',
    max_ratio: 'PEAK_RATIO', max_ratio_time: 'PEAK_RATIO_TIME',
    current_int_xrlong: 'INTEGRATED_FLUX_J_M2', end_time: 'END_TIME', end_class: 'END_XRAY_CLASS',
    satellite: 'PLATFORM' };
  function roundtrip(row) {
    assert.deepEqual(Object.keys(row).sort(), Object.keys(mapping).sort(), 'every source field must be mapped');
    const input = Object.assign(new S.SFET(), {
      PRODUCT: 'xray-flares-7-day.json', EVENT_KIND: S.sfeEventKind.XRAY,
      SOURCE_DIGEST: digest, RETRIEVED_AT: '2026-11-03T19:09:09.361967+00:00',
      PROVENANCE: Object.assign(new S.PVNT(), {
        SOURCE_ID: 'https://services.swpc.noaa.gov/json/goes/primary/xray-flares-7-day.json',
        SOURCE_KIND: S.pvnSourceKind.Observation, ORIGINATOR: 'NOAA SWPC', PROVIDER_ID: 'NOAA SWPC',
        PRODUCER: 'sfe-swpc-flares.mjs', LICENSE_CLASS: S.pvnLicenseClass.Reproducible,
        LICENSE_ID: 'US Government public domain',
        LINEAGE: 'Verbatim SWPC excerpt; null ratio encoded as NaN; satellite number as platform string.',
      }),
    });
    for (const [key, field] of Object.entries(mapping)) {
      input[field] = key === 'satellite' ? String(row[key]) : key === 'max_ratio' && row[key] === null ? NaN : row[key];
    }
    const builder = new fb.Builder(1024);
    S.SFE.finishSFEBuffer(builder, input.pack(builder));
    const bytes = builder.asUint8Array();
    assert.equal(Buffer.from(bytes.subarray(4, 8)).toString(), '$SFE');
    const output = S.SFE.getRootAsSFE(new fb.ByteBuffer(bytes)).unpack();
    assert.deepEqual(output, input, 'all record fields and defaults round-trip');
    const restored = {};
    for (const [key, field] of Object.entries(mapping)) {
      restored[key] = key === 'satellite' ? Number(output[field]) :
        key === 'max_ratio' && Number.isNaN(output[field]) ? null : output[field];
      assert.equal(restored[key], row[key], `source field ${key}`);
    }
    assert.deepEqual(restored, row);
  }
  rows.forEach(roundtrip);
  // Synthetic boundary cases, separate from the captured fixture: exercise stored
  // ratio/time values and zero, plus independent time_tag and begin_time slots.
  for (const ratio of [0, 0.1234567890123456]) roundtrip({ ...rows[0],
    time_tag: '2026-10-27T21:13:00Z', max_ratio: ratio, max_ratio_time: '2026-10-27T21:18:00Z' });
  console.log(`PASS SFE SWPC roundtrip: ${rows.length} source rows, ${rows.length * Object.keys(mapping).length} source fields equal, 2 populated-ratio cases`);
} finally {
  fs.rmSync(tmp, { recursive: true, force: true });
}
