import assert from 'node:assert/strict';
import fs from 'node:fs';
import { Builder, ByteBuffer } from 'flatbuffers';
import { WXF, WXFT, WXFGridT, wxfLicenseClass, wxfTimeBasis, wxfMemberKind } from '../lib/js/WXF/main.js';

function roundTrip(values) {
  const value=Object.assign(new WXFT(), {FIELD_ID:'fixture', GRID:new WXFGridT()}, values);
  value.GRID.NLAT=1; value.GRID.NLON=1;
  const builder=new Builder(1024);
  WXF.finishSizePrefixedWXFBuffer(builder,value.pack(builder));
  return WXF.getSizePrefixedRootAsWXF(new ByteBuffer(builder.asUint8Array())).unpack();
}

describe('WXF source time and licence contract', () => {
  it('preserves established licence ordinals and the legacy time default', () => {
    assert.equal(wxfLicenseClass.RealTimeExperimental,0);
    assert.equal(wxfLicenseClass.Historical,1);
    assert.equal(wxfLicenseClass.OpenAttribution,2);
    assert.equal(wxfMemberKind.ProbabilityBelowThreshold,10);
    assert.equal(wxfMemberKind.Unspecified,11);
    const record=roundTrip({INIT_TIME_MS:1788825600000n,LEAD_HOURS:1,VALID_TIME_MS:1788829200000n});
    assert.equal(record.TIME_BASIS,wxfTimeBasis.Initialization);
    assert.equal(record.INIT_TIME_MS,1788825600000n);
  });
  it('represents open future forecasts without inventing a model run', () => {
    // Open-Meteo /en/docs publishes hourly valid times but no run init epoch.
    // /en/terms licenses the data CC BY 4.0 regardless of forecast age.
    const record=roundTrip({TIME_BASIS:wxfTimeBasis.ValidTimeOnly,VALID_TIME_MS:1788829200000n,
      RETRIEVED_AT:1788825600000n,LICENSE_CLASS:wxfLicenseClass.OpenAttribution,
      LICENSE_URL:'https://creativecommons.org/licenses/by/4.0/'});
    assert.equal(record.TIME_BASIS,wxfTimeBasis.ValidTimeOnly);
    assert.equal(record.INIT_TIME_MS,0n); assert.equal(record.LEAD_HOURS,0);
    assert.equal(record.HORIZON_HOURS,0);
    assert.equal(record.LICENSE_CLASS,wxfLicenseClass.OpenAttribution);
    assert.equal(record.VALID_TIME_MS,1788829200000n);
  });
  it('appends TIME_BASIS after every existing WXF field', () => {
    const schema=fs.readFileSync(new URL('../schema/WXF/main.fbs',import.meta.url),'utf8');
    const fields=[...schema.split('table WXF {')[1].split('}')[0].matchAll(/^  ([A-Z_]+):/gm)].map(m=>m[1]);
    assert.deepEqual(fields.slice(-2),['PRODUCER_PEER_ID','TIME_BASIS']);
    assert.match(schema,/RETRIEVED_AT is not a substitute for initialization/);
  });
});
