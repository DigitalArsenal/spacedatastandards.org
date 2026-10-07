import assert from 'node:assert/strict';
import { Builder, ByteBuffer } from 'flatbuffers';
import { WXF, WXFT, WXFGridT, wxfVariable, wxfLevelKind, wxfValuesEncoding } from '../lib/js/WXF/main.js';

function roundTrip(values) {
  const value=Object.assign(new WXFT(), {FIELD_ID:'fixture', GRID:new WXFGridT()}, values);
  const builder=new Builder(4096);
  WXF.finishSizePrefixedWXFBuffer(builder,value.pack(builder));
  return WXF.getSizePrefixedRootAsWXF(new ByteBuffer(builder.asUint8Array())).unpack();
}

// CHUNK_CODECS as the schema defines them, on uint16 codes in VALUES order.
function encode(codes, codecs) {
  let c=Uint16Array.from(codes);
  for (const codec of codecs) {
    if (codec==='delta') c=c.map((v,i)=>i?(v-codes[i-1])&0xffff:v);
    else if (codec==='zigzag') c=c.map(v=>{const n=v<<16>>16; return n>=0?2*n:-2*n-1;});
    else if (codec==='shuffle') { const b=new Uint8Array(c.length*2); c.forEach((v,i)=>{b[i]=v&0xff; b[c.length+i]=v>>8;}); return b; }
  }
  return new Uint8Array(c.buffer);
}
function decode(bytes, codecs) {
  const n=bytes.length/2; let c;
  let k=codecs.length-1;
  if (codecs[k]==='shuffle') { c=new Uint16Array(n); for (let i=0;i<n;i++) c[i]=bytes[i]|(bytes[n+i]<<8); k--; }
  else c=new Uint16Array(bytes.slice().buffer);
  for (; k>=0; k--) {
    if (codecs[k]==='zigzag') c=c.map(v=>((v>>>1)^-(v&1))&0xffff);
    else if (codecs[k]==='delta') { for (let i=1;i<n;i++) c[i]=(c[i]+c[i-1])&0xffff; }
  }
  return c;
}

describe('WXF imager observations', () => {
  it('appends the imager enum members after every existing one', () => {
    assert.equal(wxfVariable.GeopotentialHeight,30);
    assert.deepEqual([wxfVariable.BrightnessTemperature,wxfVariable.Reflectance,wxfVariable.CloudMask,wxfVariable.CloudPhase,
      wxfVariable.CloudOpticalDepth,wxfVariable.CloudEffectiveRadius,wxfVariable.CloudEmissivity],[31,32,33,34,35,36,37]);
    assert.equal(wxfLevelKind.HeightAboveEllipsoid,7); assert.equal(wxfLevelKind.CloudTop,8);
    assert.equal(wxfValuesEncoding.ContentAddressedChunk,1);
    assert.deepEqual([wxfValuesEncoding.InlineQuantizedUint16,wxfValuesEncoding.InlineQuantizedUint8,wxfValuesEncoding.InlineEncodedChunk],[2,3,4]);
  });

  it('leaves the platform unstated by default', () => {
    const record=roundTrip({});
    assert.ok(Number.isNaN(record.PLATFORM_LONGITUDE_DEG)); assert.ok(Number.isNaN(record.PLATFORM_LATITUDE_DEG));
    assert.ok(Number.isNaN(record.PLATFORM_HEIGHT_M));
    assert.equal(record.SCALE_FACTOR,1); assert.equal(record.ADD_OFFSET,0); assert.equal(record.SCAN_END_TIME_MS,0n);
  });

  it('carries brightness temperatures as 0.1 K codes in an encoded chunk', () => {
    // a 2 x 4 band of a 10.3 um channel; 65535 is a missing cell
    const kelvin=[288.4,288.5,288.3,null,231.0,231.2,230.9,229.7], scale=0.1, offset=150;
    const codes=kelvin.map(v=>v===null?65535:Math.round((v-offset)/scale));
    const codecs=['delta','zigzag','shuffle'], chunk=encode(codes,codecs);
    const grid=Object.assign(new WXFGridT(),{LAT0:10,LON0:-120,DLAT:-0.0879,DLON:0.0879,NLAT:2,NLON:4});
    const record=roundTrip({GRID:grid,VARIABLE:wxfVariable.BrightnessTemperature,VARIABLE_NAME:'brightness_temperature_10p3um',
      UNITS:'K',LEVEL_KIND:wxfLevelKind.TopOfAtmosphere,VALUES_ENCODING:wxfValuesEncoding.InlineEncodedChunk,
      QUANTIZED_U8:[...chunk],CHUNK_DTYPE:'uint16',CHUNK_CODECS:codecs,CHUNK_BYTE_LENGTH:BigInt(chunk.length),
      SCALE_FACTOR:scale,ADD_OFFSET:offset,SENSOR_ID:'geostationary imager',CHANNEL_WAVELENGTH_UM:10.3,
      PLATFORM_LONGITUDE_DEG:-137.2,PLATFORM_LATITUDE_DEG:0,PLATFORM_HEIGHT_M:35786023,
      VALID_TIME_MS:1791255600000n,SCAN_END_TIME_MS:1791256200000n});
    assert.equal(record.VALUES_ENCODING,wxfValuesEncoding.InlineEncodedChunk);
    assert.deepEqual(record.CHUNK_CODECS,codecs); assert.equal(record.CHUNK_DTYPE,'uint16');
    assert.equal(record.PLATFORM_LONGITUDE_DEG,-137.2); assert.equal(record.SCAN_END_TIME_MS,1791256200000n);
    assert.ok(Math.abs(record.CHANNEL_WAVELENGTH_UM-10.3)<1e-6);
    const back=decode(Uint8Array.from(record.QUANTIZED_U8),record.CHUNK_CODECS);
    assert.deepEqual([...back],codes);
    const values=[...back].map(c=>c===65535?null:+(record.ADD_OFFSET+record.SCALE_FACTOR*c).toFixed(1));
    assert.deepEqual(values,kelvin);
  });

  it('carries a categorical cloud mask as plain 8-bit codes', () => {
    const mask=[0,1,2,3,3,255];
    const record=roundTrip({VARIABLE:wxfVariable.CloudMask,UNITS:'1',VALUES_ENCODING:wxfValuesEncoding.InlineQuantizedUint8,
      QUANTIZED_U8:mask,SCALE_FACTOR:1,ADD_OFFSET:0});
    assert.deepEqual(record.QUANTIZED_U8,mask); assert.equal(record.VARIABLE,wxfVariable.CloudMask);
  });

  it('places the cloud-top height at the CloudTop level', () => {
    const record=roundTrip({VARIABLE:wxfVariable.GeopotentialHeight,LEVEL_KIND:wxfLevelKind.CloudTop,UNITS:'m',
      VALUES_ENCODING:wxfValuesEncoding.InlineQuantizedUint16,QUANTIZED_U16:[0,300,65535],SCALE_FACTOR:34,ADD_OFFSET:0});
    assert.equal(record.LEVEL_KIND,wxfLevelKind.CloudTop); assert.deepEqual(record.QUANTIZED_U16,[0,300,65535]);
  });
});
