import * as flatbuffers from 'flatbuffers';
import { SCHEMA_STANDARD, SCHEMA_STANDARDT } from './SCHEMA_STANDARD.js';
/**
 * Schema Manifest
 */
export declare class SCHEMA_MANIFEST implements flatbuffers.IUnpackableObject<SCHEMA_MANIFESTT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): SCHEMA_MANIFEST;
    static getRootAsSCHEMA_MANIFEST(bb: flatbuffers.ByteBuffer, obj?: SCHEMA_MANIFEST): SCHEMA_MANIFEST;
    static getSizePrefixedRootAsSCHEMA_MANIFEST(bb: flatbuffers.ByteBuffer, obj?: SCHEMA_MANIFEST): SCHEMA_MANIFEST;
    static bufferHasIdentifier(bb: flatbuffers.ByteBuffer): boolean;
    /**
     * Version of Space Data Standards
     */
    version(): string | null;
    version(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Standards Dictionary
     */
    RECORDS(index: number, obj?: SCHEMA_STANDARD): SCHEMA_STANDARD | null;
    recordsLength(): number;
    static startSCHEMA_MANIFEST(builder: flatbuffers.Builder): void;
    static addVersion(builder: flatbuffers.Builder, versionOffset: flatbuffers.Offset): void;
    static addRecords(builder: flatbuffers.Builder, RECORDSOffset: flatbuffers.Offset): void;
    static createRecordsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startRecordsVector(builder: flatbuffers.Builder, numElems: number): void;
    static endSCHEMA_MANIFEST(builder: flatbuffers.Builder): flatbuffers.Offset;
    static finishSCHEMA_MANIFESTBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static finishSizePrefixedSCHEMA_MANIFESTBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static createSCHEMA_MANIFEST(builder: flatbuffers.Builder, versionOffset: flatbuffers.Offset, RECORDSOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): SCHEMA_MANIFESTT;
    unpackTo(_o: SCHEMA_MANIFESTT): void;
}
export declare class SCHEMA_MANIFESTT implements flatbuffers.IGeneratedObject {
    version: string | Uint8Array | null;
    RECORDS: (SCHEMA_STANDARDT)[];
    constructor(version?: string | Uint8Array | null, RECORDS?: (SCHEMA_STANDARDT)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=SCHEMA_MANIFEST.d.ts.map