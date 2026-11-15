#!/usr/bin/env node
// Offline E2E for the $WXF hydrometeor variables. Fixture: a 4 x 4 patch of NOAA GFS 0.25 deg CLMR (GRIB2 0/1/22),
// ICMR (0/1/23), RWMR (0/1/24), SNMR (0/1/25) and GRLE (0/1/32) at 500 hPa, kg/kg, and REFC (0/16/196, dBZ, the column
// maximum), decoded by ecCodes from the public AWS object named in it (US government/public-domain data). Each field is
// written as a size-prefixed $WXF with its new standard variable and level, read back, and checked value for value. Bundles the committed generated TypeScript, so no
// published package is used.
import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { pathToFileURL, fileURLToPath } from 'node:url';
import { build } from 'esbuild';
import * as fb from 'flatbuffers';

const root = fileURLToPath(new URL('../../', import.meta.url));
const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'wxf-condensate-'));
try {
  await build({ entryPoints: [path.join(root, 'lib/ts/WXF/main.ts')], bundle: true,
    platform: 'node', format: 'esm', outfile: path.join(tmp, 'bindings.mjs'), logLevel: 'silent' });
  const S = await import(pathToFileURL(path.join(tmp, 'bindings.mjs')));
  const fix = JSON.parse(fs.readFileSync(path.join(root, 'scripts/fixtures/wxf-gfs-hydrometeors.json')));
  // append-only: the new codes follow AuroraProbability, in order
  const fields = [['CLMR', 'CloudWaterMixingRatio'], ['ICMR', 'CloudIceMixingRatio'], ['RWMR', 'RainMixingRatio'],
    ['SNMR', 'SnowMixingRatio'], ['GRLE', 'GraupelMixingRatio'], ['REFC', 'RadarReflectivity']];
  fields.forEach(([, name], i) => assert.equal(S.wxfVariable[name], S.wxfVariable.AuroraProbability + 1 + i, name));
  for (const [grib, name] of fields) {
    const variable = S.wxfVariable[name], dbz = grib === 'REFC', units = dbz ? 'dBZ' : 'kg kg-1';
    const values = Float32Array.from(fix[grib]);
    assert.equal(values.length, fix.nlat * fix.nlon);
    assert.ok(values.every((v) => (dbz ? v > -40 && v < 80 : v >= 0 && v < 0.02)), `${grib}: plausible values`);
    const record = Object.assign(new S.WXFT(), {
      FIELD_ID: `gfs:20261026T12:f4:${grib}_${fix.level_hPa}hPa`, VARIABLE: variable, VARIABLE_NAME: grib, UNITS: units,
      LEVEL_KIND: dbz ? S.wxfLevelKind.EntireAtmosphere : S.wxfLevelKind.PressureLevel, LEVEL_VALUE: dbz ? 0 : fix.level_hPa * 100,
      GRID: Object.assign(new S.WXFGridT(), { LAT0: fix.lat0, LON0: fix.lon0, DLAT: fix.dlat, DLON: fix.dlon, NLAT: fix.nlat, NLON: fix.nlon }),
      VALUES_ENCODING: S.wxfValuesEncoding.InlineFloat32, VALUES: Array.from(values),
    });
    const b = new fb.Builder(256);
    b.finishSizePrefixed(record.pack(b), '$WXF');
    const bytes = b.asUint8Array();
    const bb = new fb.ByteBuffer(bytes.slice(4));
    assert.ok(S.WXF.bufferHasIdentifier(bb), '$WXF identifier');
    const back = S.WXF.getRootAsWXF(bb);
    assert.equal(back.VARIABLE(), variable);
    assert.equal(S.wxfVariable[back.VARIABLE()], name);
    assert.equal(back.UNITS(), units);
    assert.equal(back.LEVEL_KIND(), dbz ? S.wxfLevelKind.EntireAtmosphere : S.wxfLevelKind.PressureLevel);
    assert.equal(back.LEVEL_VALUE(), dbz ? 0 : 50000);
    assert.equal(back.GRID().NLAT(), 4);
    assert.deepEqual(Array.from(back.valuesArray()), Array.from(values));
  }
  console.log(`wxf-hydrometeors: ${fields.map(([g, n]) => `${g} as ${n}`).join(', ')}: 16 GFS cells each round trip`);
} finally {
  fs.rmSync(tmp, { recursive: true, force: true });
}
