// automatically generated by the FlatBuffers compiler, do not modify

import * as flatbuffers from 'flatbuffers';

import { CSM, CSMT } from './CSM.js';


export class CSMCOLLECTION implements flatbuffers.IUnpackableObject<CSMCOLLECTIONT> {
  bb: flatbuffers.ByteBuffer|null = null;
  bb_pos = 0;
  __init(i:number, bb:flatbuffers.ByteBuffer):CSMCOLLECTION {
  this.bb_pos = i;
  this.bb = bb;
  return this;
}

static getRootAsCSMCOLLECTION(bb:flatbuffers.ByteBuffer, obj?:CSMCOLLECTION):CSMCOLLECTION {
  return (obj || new CSMCOLLECTION()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

static getSizePrefixedRootAsCSMCOLLECTION(bb:flatbuffers.ByteBuffer, obj?:CSMCOLLECTION):CSMCOLLECTION {
  bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
  return (obj || new CSMCOLLECTION()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

/**
 * A vector of CSM records
 */
RECORDS(index: number, obj?:CSM):CSM|null {
  const offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? (obj || new CSM()).__init(this.bb!.__indirect(this.bb!.__vector(this.bb_pos + offset) + index * 4), this.bb!) : null;
}

recordsLength():number {
  const offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? this.bb!.__vector_len(this.bb_pos + offset) : 0;
}

static startCSMCOLLECTION(builder:flatbuffers.Builder) {
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

static endCSMCOLLECTION(builder:flatbuffers.Builder):flatbuffers.Offset {
  const offset = builder.endObject();
  return offset;
}

static createCSMCOLLECTION(builder:flatbuffers.Builder, RECORDSOffset:flatbuffers.Offset):flatbuffers.Offset {
  CSMCOLLECTION.startCSMCOLLECTION(builder);
  CSMCOLLECTION.addRecords(builder, RECORDSOffset);
  return CSMCOLLECTION.endCSMCOLLECTION(builder);
}

unpack(): CSMCOLLECTIONT {
  return new CSMCOLLECTIONT(
    this.bb!.createObjList<CSM, CSMT>(this.RECORDS.bind(this), this.recordsLength())
  );
}


unpackTo(_o: CSMCOLLECTIONT): void {
  _o.RECORDS = this.bb!.createObjList<CSM, CSMT>(this.RECORDS.bind(this), this.recordsLength());
}
}

export class CSMCOLLECTIONT implements flatbuffers.IGeneratedObject {
constructor(
  public RECORDS: (CSMT)[] = []
){}


pack(builder:flatbuffers.Builder): flatbuffers.Offset {
  const RECORDS = CSMCOLLECTION.createRecordsVector(builder, builder.createObjectOffsetList(this.RECORDS));

  return CSMCOLLECTION.createCSMCOLLECTION(builder,
    RECORDS
  );
}
}