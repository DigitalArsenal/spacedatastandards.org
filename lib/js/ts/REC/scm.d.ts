import * as flatbuffers from 'flatbuffers';
import { SCHEMA_STANDARD, SCHEMA_STANDARDT } from './schema-standard.js';
/**
 * Schema Manifest
 */
export declare class SCM implements flatbuffers.IUnpackableObject<SCMT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): SCM;
    static getRootAsSCM(bb: flatbuffers.ByteBuffer, obj?: SCM): SCM;
    static getSizePrefixedRootAsSCM(bb: flatbuffers.ByteBuffer, obj?: SCM): SCM;
    static bufferHasIdentifier(bb: flatbuffers.ByteBuffer): boolean;
    /**
     * Version of Space Data Standards
     */
    version(): string | null;
    version(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Standards Dictionary
     */
    records(index: number, obj?: SCHEMA_STANDARD): SCHEMA_STANDARD | null;
    recordsLength(): number;
    static startSCM(builder: flatbuffers.Builder): void;
    static addVersion(builder: flatbuffers.Builder, versionOffset: flatbuffers.Offset): void;
    static addRecords(builder: flatbuffers.Builder, recordsOffset: flatbuffers.Offset): void;
    static createRecordsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startRecordsVector(builder: flatbuffers.Builder, numElems: number): void;
    static endSCM(builder: flatbuffers.Builder): flatbuffers.Offset;
    static finishSCMBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static finishSizePrefixedSCMBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static createSCM(builder: flatbuffers.Builder, versionOffset: flatbuffers.Offset, recordsOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): SCMT;
    unpackTo(_o: SCMT): void;
}
export declare class SCMT implements flatbuffers.IGeneratedObject {
    version: string | Uint8Array | null;
    records: (SCHEMA_STANDARDT)[];
    constructor(version?: string | Uint8Array | null, records?: (SCHEMA_STANDARDT)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=scm.d.ts.map