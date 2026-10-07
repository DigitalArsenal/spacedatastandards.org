import assert from "node:assert/strict";
import * as flatbuffers from "flatbuffers";
import { EPM, EPMT } from "../lib/js/EPM/main.js";

// 1.239.0: the entity's photo rides its profile record (owner 2026-10-07,
// spacedatanetwork-stack task sdn-node-photo-20261007).
describe("EPM PHOTO", () => {
  const photo =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAEhQGAhKmMIQAAAABJRU5ErkJggg==";

  function encode(fields) {
    const record = Object.assign(new EPMT(), fields);
    const builder = new flatbuffers.Builder(256);
    builder.finish(record.pack(builder), "$EPM");
    return EPM.getRootAsEPM(new flatbuffers.ByteBuffer(builder.asUint8Array()));
  }

  it("carries the photo through a record", () => {
    const decoded = encode({ DN: "Edgesource Corporation", PHOTO: photo });
    assert.equal(decoded.PHOTO(), photo);
    assert.equal(decoded.unpack().PHOTO, photo);
    assert.equal(decoded.DN(), "Edgesource Corporation");
  });

  it("reads a record without a photo as having none", () => {
    assert.equal(encode({ DN: "Node" }).PHOTO(), null);
  });
});
