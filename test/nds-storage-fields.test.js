import assert from "node:assert/strict";
import * as flatbuffers from "flatbuffers";

import * as NDS from "../lib/js/NDS/main.js";

function roundTrip(stats) {
  const builder = new flatbuffers.Builder(1024);
  NDS.NDS.finishSizePrefixedNDSBuffer(builder, stats.pack(builder));
  const bytes = builder.asUint8Array().slice();
  assert.equal(new TextDecoder().decode(bytes.subarray(8, 12)), "$NDS");
  return NDS.NDS.getSizePrefixedRootAsNDS(new flatbuffers.ByteBuffer(bytes)).unpack();
}

describe("node data statistics carry volume storage figures", () => {
  it("keeps free and capacity bytes distinct from the record footprint", () => {
    const stats = new NDS.NDST();
    stats.GENERATED_AT = 1788560800n;
    stats.TOTAL_RECORDS = 26000000n;
    stats.TOTAL_BYTES = 41000000000n;
    stats.STORAGE_FREE_BYTES = 120000000000n;
    stats.STORAGE_CAPACITY_BYTES = 1000000000000n;

    const decoded = roundTrip(stats);
    assert.equal(decoded.TOTAL_BYTES, 41000000000n);
    assert.equal(decoded.STORAGE_FREE_BYTES, 120000000000n);
    assert.equal(decoded.STORAGE_CAPACITY_BYTES, 1000000000000n);
    assert.equal(
      decoded.STORAGE_CAPACITY_BYTES - decoded.STORAGE_FREE_BYTES,
      880000000000n
    );
  });

  it("reads both storage figures as 0 (unknown) when the node does not publish them", () => {
    const decoded = roundTrip(new NDS.NDST());
    assert.equal(decoded.STORAGE_FREE_BYTES, 0n);
    assert.equal(decoded.STORAGE_CAPACITY_BYTES, 0n);
  });
});
