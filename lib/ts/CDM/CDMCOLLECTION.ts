// automatically generated by the FlatBuffers compiler, do not modify

/* eslint-disable @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any, @typescript-eslint/no-non-null-assertion */

import * as flatbuffers from 'flatbuffers';

import { CDM, CDMT } from './CDM.js';


export class CDMCOLLECTION implements flatbuffers.IUnpackableObject<CDMCOLLECTIONT> {
  bb: flatbuffers.ByteBuffer|null = null;
  bb_pos = 0;
  __init(i:number, bb:flatbuffers.ByteBuffer):CDMCOLLECTION {
  this.bb_pos = i;
  this.bb = bb;
  return this;
}

static getRootAsCDMCOLLECTION(bb:flatbuffers.ByteBuffer, obj?:CDMCOLLECTION):CDMCOLLECTION {
  return (obj || new CDMCOLLECTION()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

static getSizePrefixedRootAsCDMCOLLECTION(bb:flatbuffers.ByteBuffer, obj?:CDMCOLLECTION):CDMCOLLECTION {
  bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
  return (obj || new CDMCOLLECTION()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

RECORDS(index: number, obj?:CDM):CDM|null {
  const offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? (obj || new CDM()).__init(this.bb!.__indirect(this.bb!.__vector(this.bb_pos + offset) + index * 4), this.bb!) : null;
}

recordsLength():number {
  const offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? this.bb!.__vector_len(this.bb_pos + offset) : 0;
}

static startCDMCOLLECTION(builder:flatbuffers.Builder) {
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

static endCDMCOLLECTION(builder:flatbuffers.Builder):flatbuffers.Offset {
  const offset = builder.endObject();
  return offset;
}

static createCDMCOLLECTION(builder:flatbuffers.Builder, RECORDSOffset:flatbuffers.Offset):flatbuffers.Offset {
  CDMCOLLECTION.startCDMCOLLECTION(builder);
  CDMCOLLECTION.addRecords(builder, RECORDSOffset);
  return CDMCOLLECTION.endCDMCOLLECTION(builder);
}

unpack(): CDMCOLLECTIONT {
  return new CDMCOLLECTIONT(
    this.bb!.createObjList<CDM, CDMT>(this.RECORDS.bind(this), this.recordsLength())
  );
}


unpackTo(_o: CDMCOLLECTIONT): void {
  _o.RECORDS = this.bb!.createObjList<CDM, CDMT>(this.RECORDS.bind(this), this.recordsLength());
}
}

export class CDMCOLLECTIONT implements flatbuffers.IGeneratedObject {
constructor(
  public RECORDS: (CDMT)[] = []
){}


pack(builder:flatbuffers.Builder): flatbuffers.Offset {
  const RECORDS = CDMCOLLECTION.createRecordsVector(builder, builder.createObjectOffsetList(this.RECORDS));

  return CDMCOLLECTION.createCDMCOLLECTION(builder,
    RECORDS
  );
}
}
