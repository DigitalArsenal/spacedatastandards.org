#!/usr/bin/env node
// Offline E2E for the $WXF storm variables. Fixture: a 4 x 4 patch of NOAA HRRR (2026-10-26 18Z f01) about the hour's
// largest 2-5 km updraft helicity - MXUPHL (NCEP local 0/7/199, m2/s2), HAIL (0/1/31, m), HLCY 0-3 km (0/7/8, m2/s2) -
// decoded by ecCodes, and the GOES-19 GLM flashes of one 20 s LCFA file counted on a 0.125 deg 4 x 4 patch, both from the
// public AWS objects named in it (US government/public-domain data). Each is written as a size-prefixed $WXF with its
// new standard variable, read back, and checked value for value. Bundles the committed generated TypeScript.
import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { pathToFileURL, fileURLToPath } from 'node:url';
import { build } from 'esbuild';
import * as fb from 'flatbuffers';

const root = fileURLToPath(new URL('../../', import.meta.url));
const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'wxf-storm-'));
try {
  await build({ entryPoints: [path.join(root, 'lib/ts/WXF/main.ts')], bundle: true,
    platform: 'node', format: 'esm', outfile: path.join(tmp, 'bindings.mjs'), logLevel: 'silent' });
  const S = await import(pathToFileURL(path.join(tmp, 'bindings.mjs')));
  const fix = JSON.parse(fs.readFileSync(path.join(root, 'scripts/fixtures/wxf-hrrr-glm-storm.json')));
  const names = ['LightningFlashDensity', 'UpdraftHelicity', 'MaximumHailDiameter', 'StormRelativeHelicity'];
  names.forEach((n, i) => assert.equal(S.wxfVariable[n], S.wxfVariable.RadarReflectivity + 1 + i, n));     // append-only, in order
  const km2 = (fix.glm_patch.step * 111.32) ** 2 * Math.cos((fix.glm_patch.lat0 + 2 * fix.glm_patch.step) * Math.PI / 180);
  const cases = [
    { name: 'LightningFlashDensity', values: fix.GLM_COUNTS.map((c) => c / km2 / (fix.glm_patch.seconds / 60)), units: 'km-2 min-1', level: S.wxfLevelKind.EntireAtmosphere, temporal: S.wxfTemporalKind.Averaged, hours: fix.glm_patch.seconds / 3600 },
    { name: 'UpdraftHelicity', values: fix.MXUPHL, units: 'm2 s-2', level: S.wxfLevelKind.HeightAboveGround, levelValue: 5000, temporal: S.wxfTemporalKind.Maximum, hours: 1 },
    { name: 'MaximumHailDiameter', values: fix.HAIL, units: 'm', level: S.wxfLevelKind.EntireAtmosphere, temporal: S.wxfTemporalKind.Maximum, hours: 1 },
    { name: 'StormRelativeHelicity', values: fix.HLCY, units: 'm2 s-2', level: S.wxfLevelKind.HeightAboveGround, levelValue: 3000, temporal: S.wxfTemporalKind.Instantaneous, hours: 0 },
  ];
  assert.ok(fix.GLM_COUNTS.some((c) => c > 0), 'the GLM patch saw flashes');
  for (const c of cases) {
    const values = Float32Array.from(c.values);
    assert.ok(values.every((v) => Number.isFinite(v) && v >= 0), `${c.name}: plausible values`);
    const record = Object.assign(new S.WXFT(), {
      FIELD_ID: `storm:${c.name}`, VARIABLE: S.wxfVariable[c.name], VARIABLE_NAME: c.name, UNITS: c.units, LEVEL_KIND: c.level, LEVEL_VALUE: c.levelValue || 0,
      TEMPORAL_KIND: c.temporal, ACCUMULATION_HOURS: c.hours,
      GRID: Object.assign(new S.WXFGridT(), { LAT0: 0, LON0: 0, DLAT: 0.03, DLON: 0.03, NLAT: 4, NLON: 4 }),
      VALUES_ENCODING: S.wxfValuesEncoding.InlineFloat32, VALUES: Array.from(values),
    });
    const b = new fb.Builder(256);
    b.finishSizePrefixed(record.pack(b), '$WXF');
    const bb = new fb.ByteBuffer(b.asUint8Array().slice(4));
    assert.ok(S.WXF.bufferHasIdentifier(bb), '$WXF identifier');
    const back = S.WXF.getRootAsWXF(bb);
    assert.equal(S.wxfVariable[back.VARIABLE()], c.name);
    assert.equal(back.UNITS(), c.units);
    assert.equal(back.TEMPORAL_KIND(), c.temporal);
    assert.equal(back.LEVEL_KIND(), c.level);
    assert.deepEqual(Array.from(back.valuesArray()), Array.from(values));
  }
  console.log(`wxf-storm-variables: ${names.join(', ')}: 16 HRRR / GLM cells each round trip`);
} finally {
  fs.rmSync(tmp, { recursive: true, force: true });
}
