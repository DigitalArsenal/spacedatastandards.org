// automatically generated by the FlatBuffers compiler, do not modify

/* eslint-disable @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any, @typescript-eslint/no-non-null-assertion */

import * as flatbuffers from 'flatbuffers';

import { VCM, VCMT } from './VCM.js';


/**
 * Collection of VCM records
 */
export class VCM_COLLECTION implements flatbuffers.IUnpackableObject<VCM_COLLECTIONT> {
  bb: flatbuffers.ByteBuffer|null = null;
  bb_pos = 0;
  __init(i:number, bb:flatbuffers.ByteBuffer):VCM_COLLECTION {
  this.bb_pos = i;
  this.bb = bb;
  return this;
}

static getRootAsVCM_COLLECTION(bb:flatbuffers.ByteBuffer, obj?:VCM_COLLECTION):VCM_COLLECTION {
  return (obj || new VCM_COLLECTION()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

static getSizePrefixedRootAsVCM_COLLECTION(bb:flatbuffers.ByteBuffer, obj?:VCM_COLLECTION):VCM_COLLECTION {
  bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
  return (obj || new VCM_COLLECTION()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

RECORDS(index: number, obj?:VCM):VCM|null {
  const offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? (obj || new VCM()).__init(this.bb!.__indirect(this.bb!.__vector(this.bb_pos + offset) + index * 4), this.bb!) : null;
}

recordsLength():number {
  const offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? this.bb!.__vector_len(this.bb_pos + offset) : 0;
}

static startVCM_COLLECTION(builder:flatbuffers.Builder) {
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

static endVCM_COLLECTION(builder:flatbuffers.Builder):flatbuffers.Offset {
  const offset = builder.endObject();
  return offset;
}

static createVCM_COLLECTION(builder:flatbuffers.Builder, RECORDSOffset:flatbuffers.Offset):flatbuffers.Offset {
  VCM_COLLECTION.startVCM_COLLECTION(builder);
  VCM_COLLECTION.addRecords(builder, RECORDSOffset);
  return VCM_COLLECTION.endVCM_COLLECTION(builder);
}

unpack(): VCM_COLLECTIONT {
  return new VCM_COLLECTIONT(
    this.bb!.createObjList<VCM, VCMT>(this.RECORDS.bind(this), this.recordsLength())
  );
}


unpackTo(_o: VCM_COLLECTIONT): void {
  _o.RECORDS = this.bb!.createObjList<VCM, VCMT>(this.RECORDS.bind(this), this.recordsLength());
}
}

export class VCM_COLLECTIONT implements flatbuffers.IGeneratedObject {
constructor(
  public RECORDS: (VCMT)[] = []
){}


pack(builder:flatbuffers.Builder): flatbuffers.Offset {
  const RECORDS = VCM_COLLECTION.createRecordsVector(builder, builder.createObjectOffsetList(this.RECORDS));

  return VCM_COLLECTION.createVCM_COLLECTION(builder,
    RECORDS
  );
}
}