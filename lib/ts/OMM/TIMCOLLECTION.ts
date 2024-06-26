// automatically generated by the FlatBuffers compiler, do not modify

/* eslint-disable @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any, @typescript-eslint/no-non-null-assertion */

import * as flatbuffers from 'flatbuffers';

import { TIM, TIMT } from './TIM.js';


export class TIMCOLLECTION implements flatbuffers.IUnpackableObject<TIMCOLLECTIONT> {
  bb: flatbuffers.ByteBuffer|null = null;
  bb_pos = 0;
  __init(i:number, bb:flatbuffers.ByteBuffer):TIMCOLLECTION {
  this.bb_pos = i;
  this.bb = bb;
  return this;
}

static getRootAsTIMCOLLECTION(bb:flatbuffers.ByteBuffer, obj?:TIMCOLLECTION):TIMCOLLECTION {
  return (obj || new TIMCOLLECTION()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

static getSizePrefixedRootAsTIMCOLLECTION(bb:flatbuffers.ByteBuffer, obj?:TIMCOLLECTION):TIMCOLLECTION {
  bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
  return (obj || new TIMCOLLECTION()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

RECORDS(index: number, obj?:TIM):TIM|null {
  const offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? (obj || new TIM()).__init(this.bb!.__indirect(this.bb!.__vector(this.bb_pos + offset) + index * 4), this.bb!) : null;
}

recordsLength():number {
  const offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? this.bb!.__vector_len(this.bb_pos + offset) : 0;
}

static startTIMCOLLECTION(builder:flatbuffers.Builder) {
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

static endTIMCOLLECTION(builder:flatbuffers.Builder):flatbuffers.Offset {
  const offset = builder.endObject();
  return offset;
}

static createTIMCOLLECTION(builder:flatbuffers.Builder, RECORDSOffset:flatbuffers.Offset):flatbuffers.Offset {
  TIMCOLLECTION.startTIMCOLLECTION(builder);
  TIMCOLLECTION.addRecords(builder, RECORDSOffset);
  return TIMCOLLECTION.endTIMCOLLECTION(builder);
}

unpack(): TIMCOLLECTIONT {
  return new TIMCOLLECTIONT(
    this.bb!.createObjList<TIM, TIMT>(this.RECORDS.bind(this), this.recordsLength())
  );
}


unpackTo(_o: TIMCOLLECTIONT): void {
  _o.RECORDS = this.bb!.createObjList<TIM, TIMT>(this.RECORDS.bind(this), this.recordsLength());
}
}

export class TIMCOLLECTIONT implements flatbuffers.IGeneratedObject {
constructor(
  public RECORDS: (TIMT)[] = []
){}


pack(builder:flatbuffers.Builder): flatbuffers.Offset {
  const RECORDS = TIMCOLLECTION.createRecordsVector(builder, builder.createObjectOffsetList(this.RECORDS));

  return TIMCOLLECTION.createTIMCOLLECTION(builder,
    RECORDS
  );
}
}
