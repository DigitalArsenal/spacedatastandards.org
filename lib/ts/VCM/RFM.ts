// automatically generated by the FlatBuffers compiler, do not modify

/* eslint-disable @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any, @typescript-eslint/no-non-null-assertion */

import * as flatbuffers from 'flatbuffers';

import { refFrame } from './refFrame.js';


/**
 * Reference Frame Message
 */
export class RFM implements flatbuffers.IUnpackableObject<RFMT> {
  bb: flatbuffers.ByteBuffer|null = null;
  bb_pos = 0;
  __init(i:number, bb:flatbuffers.ByteBuffer):RFM {
  this.bb_pos = i;
  this.bb = bb;
  return this;
}

static getRootAsRFM(bb:flatbuffers.ByteBuffer, obj?:RFM):RFM {
  return (obj || new RFM()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

static getSizePrefixedRootAsRFM(bb:flatbuffers.ByteBuffer, obj?:RFM):RFM {
  bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
  return (obj || new RFM()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

static bufferHasIdentifier(bb:flatbuffers.ByteBuffer):boolean {
  return bb.__has_identifier('$RFM');
}

REFERENCE_FRAME():refFrame {
  const offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? this.bb!.readInt8(this.bb_pos + offset) : refFrame.ECEF;
}

static startRFM(builder:flatbuffers.Builder) {
  builder.startObject(1);
}

static addReferenceFrame(builder:flatbuffers.Builder, REFERENCE_FRAME:refFrame) {
  builder.addFieldInt8(0, REFERENCE_FRAME, refFrame.ECEF);
}

static endRFM(builder:flatbuffers.Builder):flatbuffers.Offset {
  const offset = builder.endObject();
  return offset;
}

static finishRFMBuffer(builder:flatbuffers.Builder, offset:flatbuffers.Offset) {
  builder.finish(offset, '$RFM');
}

static finishSizePrefixedRFMBuffer(builder:flatbuffers.Builder, offset:flatbuffers.Offset) {
  builder.finish(offset, '$RFM', true);
}

static createRFM(builder:flatbuffers.Builder, REFERENCE_FRAME:refFrame):flatbuffers.Offset {
  RFM.startRFM(builder);
  RFM.addReferenceFrame(builder, REFERENCE_FRAME);
  return RFM.endRFM(builder);
}

unpack(): RFMT {
  return new RFMT(
    this.REFERENCE_FRAME()
  );
}


unpackTo(_o: RFMT): void {
  _o.REFERENCE_FRAME = this.REFERENCE_FRAME();
}
}

export class RFMT implements flatbuffers.IGeneratedObject {
constructor(
  public REFERENCE_FRAME: refFrame = refFrame.ECEF
){}


pack(builder:flatbuffers.Builder): flatbuffers.Offset {
  return RFM.createRFM(builder,
    this.REFERENCE_FRAME
  );
}
}