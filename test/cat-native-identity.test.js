import assert from 'node:assert/strict';
import { Builder, ByteBuffer } from 'flatbuffers';
import { CAT, CATT } from '../lib/js/CAT/main.js';

function encode(value) {
  const builder = new Builder(256);
  CAT.finishSizePrefixedCATBuffer(builder, value.pack(builder));
  return builder.asUint8Array().slice();
}

function decode(bytes) {
  assert.equal(new TextDecoder().decode(bytes.subarray(8, 12)), '$CAT');
  return CAT.getSizePrefixedRootAsCAT(new ByteBuffer(bytes)).unpack();
}

describe('CAT source-native identity wire compatibility', () => {
  it('reads the 24-field CAT layout from SDS 1.212.0 without native identifiers', () => {
    // Frozen field slots in schema/CAT/main.fbs at SDS 1.212.0:
    // OBJECT_NAME=0, NORAD_CAT_ID=2, BUS_ID=23. This deliberately uses the
    // old writer layout, not the new generated object's pack method.
    const builder = new Builder(256);
    const name = builder.createString('ISS');
    const bus = builder.createString('legacy-bus');
    builder.startObject(24);
    builder.addFieldOffset(0, name, 0);
    builder.addFieldInt32(2, 25544, 0);
    builder.addFieldOffset(23, bus, 0);
    builder.finish(builder.endObject(), '$CAT', true);
    const value = decode(builder.asUint8Array());
    assert.equal(value.OBJECT_NAME, 'ISS');
    assert.equal(value.NORAD_CAT_ID, 25544);
    assert.equal(value.BUS_ID, 'legacy-bus');
    assert.equal(value.CATALOG_URI, null);
    assert.equal(value.CATALOG_OBJECT_ID, null);
  });

  it('keeps all pre-existing field slots readable by an old reader', () => {
    const value = new CATT();
    Object.assign(value, { OBJECT_NAME: 'ISS', NORAD_CAT_ID: 25544,
      BUS_ID: 'bus-1', CATALOG_URI: 'https://planet4589.org/space/gcat/',
      CATALOG_OBJECT_ID: 'S25544' });
    const bytes = encode(value), bb = new ByteBuffer(bytes);
    const position = 4 + bb.readInt32(4);
    const offset = slot => bb.__offset(position, 4 + slot * 2);
    assert.equal(bb.__string(position + offset(0)), 'ISS');
    assert.equal(bb.readUint32(position + offset(2)), 25544);
    assert.equal(bb.__string(position + offset(23)), 'bus-1');
    assert.equal(bb.__string(position + offset(24)), value.CATALOG_URI);
    assert.equal(bb.__string(position + offset(25)), value.CATALOG_OBJECT_ID);
  });

  it('preserves opaque native keys and distinguishes authorities and editions', () => {
    const identities = [
      ['https://planet4589.org/space/gcat/', 'S00001'],
      ['urn:example:catalog:one', '000Ab-\u0394'],
      ['urn:example:catalog:two', '000Ab-\u0394'],
      ['https://mmccants.org/tles/classfd.zip#sha256=edition-a', '90007'],
      ['https://mmccants.org/tles/classfd.zip#sha256=edition-b', '90007'],
    ];
    const decoded = identities.map(([CATALOG_URI, CATALOG_OBJECT_ID]) => {
      const value = new CATT();
      Object.assign(value, { CATALOG_URI, CATALOG_OBJECT_ID });
      const back = decode(encode(value));
      assert.equal(back.NORAD_CAT_ID, 0);
      assert.equal(back.OBJECT_ID, null);
      return [back.CATALOG_URI, back.CATALOG_OBJECT_ID];
    });
    assert.deepEqual(decoded, identities);
    assert.equal(new Set(decoded.map(JSON.stringify)).size, identities.length);
  });
});
