// automatically generated by the FlatBuffers compiler, do not modify

import * as flatbuffers from 'flatbuffers';

import { SCHEMA_STANDARD, SCHEMA_STANDARDT } from './SCHEMA_STANDARD.js';


/**
 * Schema Manifest
 */
export class SCHEMA_MANIFEST implements flatbuffers.IUnpackableObject<SCHEMA_MANIFESTT> {
  bb: flatbuffers.ByteBuffer|null = null;
  bb_pos = 0;
  __init(i:number, bb:flatbuffers.ByteBuffer):SCHEMA_MANIFEST {
  this.bb_pos = i;
  this.bb = bb;
  return this;
}

static getRootAsSCHEMA_MANIFEST(bb:flatbuffers.ByteBuffer, obj?:SCHEMA_MANIFEST):SCHEMA_MANIFEST {
  return (obj || new SCHEMA_MANIFEST()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

static getSizePrefixedRootAsSCHEMA_MANIFEST(bb:flatbuffers.ByteBuffer, obj?:SCHEMA_MANIFEST):SCHEMA_MANIFEST {
  bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
  return (obj || new SCHEMA_MANIFEST()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

static bufferHasIdentifier(bb:flatbuffers.ByteBuffer):boolean {
  return bb.__has_identifier('SCMM');
}

/**
 * Version of Space Data Standards
 */
version():string|null
version(optionalEncoding:flatbuffers.Encoding):string|Uint8Array|null
version(optionalEncoding?:any):string|Uint8Array|null {
  const offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? this.bb!.__string(this.bb_pos + offset, optionalEncoding) : null;
}

/**
 * Standards Dictionary
 */
RECORDS(index: number, obj?:SCHEMA_STANDARD):SCHEMA_STANDARD|null {
  const offset = this.bb!.__offset(this.bb_pos, 6);
  return offset ? (obj || new SCHEMA_STANDARD()).__init(this.bb!.__indirect(this.bb!.__vector(this.bb_pos + offset) + index * 4), this.bb!) : null;
}

recordsLength():number {
  const offset = this.bb!.__offset(this.bb_pos, 6);
  return offset ? this.bb!.__vector_len(this.bb_pos + offset) : 0;
}

static startSCHEMA_MANIFEST(builder:flatbuffers.Builder) {
  builder.startObject(2);
}

static addVersion(builder:flatbuffers.Builder, versionOffset:flatbuffers.Offset) {
  builder.addFieldOffset(0, versionOffset, 0);
}

static addRecords(builder:flatbuffers.Builder, RECORDSOffset:flatbuffers.Offset) {
  builder.addFieldOffset(1, RECORDSOffset, 0);
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

static endSCHEMA_MANIFEST(builder:flatbuffers.Builder):flatbuffers.Offset {
  const offset = builder.endObject();
  return offset;
}

static finishSCHEMA_MANIFESTBuffer(builder:flatbuffers.Builder, offset:flatbuffers.Offset) {
  builder.finish(offset, 'SCMM');
}

static finishSizePrefixedSCHEMA_MANIFESTBuffer(builder:flatbuffers.Builder, offset:flatbuffers.Offset) {
  builder.finish(offset, 'SCMM', true);
}

static createSCHEMA_MANIFEST(builder:flatbuffers.Builder, versionOffset:flatbuffers.Offset, RECORDSOffset:flatbuffers.Offset):flatbuffers.Offset {
  SCHEMA_MANIFEST.startSCHEMA_MANIFEST(builder);
  SCHEMA_MANIFEST.addVersion(builder, versionOffset);
  SCHEMA_MANIFEST.addRecords(builder, RECORDSOffset);
  return SCHEMA_MANIFEST.endSCHEMA_MANIFEST(builder);
}

unpack(): SCHEMA_MANIFESTT {
  return new SCHEMA_MANIFESTT(
    this.version(),
    this.bb!.createObjList<SCHEMA_STANDARD, SCHEMA_STANDARDT>(this.RECORDS.bind(this), this.recordsLength())
  );
}


unpackTo(_o: SCHEMA_MANIFESTT): void {
  _o.version = this.version();
  _o.RECORDS = this.bb!.createObjList<SCHEMA_STANDARD, SCHEMA_STANDARDT>(this.RECORDS.bind(this), this.recordsLength());
}
}

export class SCHEMA_MANIFESTT implements flatbuffers.IGeneratedObject {
constructor(
  public version: string|Uint8Array|null = null,
  public RECORDS: (SCHEMA_STANDARDT)[] = []
){}


pack(builder:flatbuffers.Builder): flatbuffers.Offset {
  const version = (this.version !== null ? builder.createString(this.version!) : 0);
  const RECORDS = SCHEMA_MANIFEST.createRecordsVector(builder, builder.createObjectOffsetList(this.RECORDS));

  return SCHEMA_MANIFEST.createSCHEMA_MANIFEST(builder,
    version,
    RECORDS
  );
}
}