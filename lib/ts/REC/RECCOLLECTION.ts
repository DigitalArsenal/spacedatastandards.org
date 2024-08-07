// automatically generated by the FlatBuffers compiler, do not modify

/* eslint-disable @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any, @typescript-eslint/no-non-null-assertion */

import * as flatbuffers from 'flatbuffers';

import { REC, RECT } from './REC.js';


export class RECCOLLECTION implements flatbuffers.IUnpackableObject<RECCOLLECTIONT> {
  bb: flatbuffers.ByteBuffer|null = null;
  bb_pos = 0;
  __init(i:number, bb:flatbuffers.ByteBuffer):RECCOLLECTION {
  this.bb_pos = i;
  this.bb = bb;
  return this;
}

static getRootAsRECCOLLECTION(bb:flatbuffers.ByteBuffer, obj?:RECCOLLECTION):RECCOLLECTION {
  return (obj || new RECCOLLECTION()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

static getSizePrefixedRootAsRECCOLLECTION(bb:flatbuffers.ByteBuffer, obj?:RECCOLLECTION):RECCOLLECTION {
  bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
  return (obj || new RECCOLLECTION()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

RECORDS(index: number, obj?:REC):REC|null {
  const offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? (obj || new REC()).__init(this.bb!.__indirect(this.bb!.__vector(this.bb_pos + offset) + index * 4), this.bb!) : null;
}

recordsLength():number {
  const offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? this.bb!.__vector_len(this.bb_pos + offset) : 0;
}

static startRECCOLLECTION(builder:flatbuffers.Builder) {
  builder.startObject(1);
}

static addRecords(builder:flatbuffers.Builder, RECORDSOffset:flatbuffers.Offset) {
  builder.addFieldOffset(0, RECORDSOffset, 0);
}

static createRecordsVector(builder:flatbuffers.Builder, data:flatbuffers.Offset[]):flatbuffers.Offset {
  builder.startVector(4, data.length, 4);
  for (let i = data.length - 1; i >= 0; i--) {
    builder.addOffset(data[i]!);
  }
  return builder.endVector();
}

static startRecordsVector(builder:flatbuffers.Builder, numElems:number) {
  builder.startVector(4, numElems, 4);
}

static endRECCOLLECTION(builder:flatbuffers.Builder):flatbuffers.Offset {
  const offset = builder.endObject();
  return offset;
}

static createRECCOLLECTION(builder:flatbuffers.Builder, RECORDSOffset:flatbuffers.Offset):flatbuffers.Offset {
  RECCOLLECTION.startRECCOLLECTION(builder);
  RECCOLLECTION.addRecords(builder, RECORDSOffset);
  return RECCOLLECTION.endRECCOLLECTION(builder);
}

unpack(): RECCOLLECTIONT {
  return new RECCOLLECTIONT(
    this.bb!.createObjList<REC, RECT>(this.RECORDS.bind(this), this.recordsLength())
  );
}


unpackTo(_o: RECCOLLECTIONT): void {
  _o.RECORDS = this.bb!.createObjList<REC, RECT>(this.RECORDS.bind(this), this.recordsLength());
}
}

export class RECCOLLECTIONT implements flatbuffers.IGeneratedObject {
constructor(
  public RECORDS: (RECT)[] = []
){}


pack(builder:flatbuffers.Builder): flatbuffers.Offset {
  const RECORDS = RECCOLLECTION.createRecordsVector(builder, builder.createObjectOffsetList(this.RECORDS));

  return RECCOLLECTION.createRECCOLLECTION(builder,
    RECORDS
  );
}
}
