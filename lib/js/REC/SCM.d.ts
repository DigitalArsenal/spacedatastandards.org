import * as flatbuffers from 'flatbuffers';
import { SCHEMA_STANDARD, SCHEMA_STANDARDT } from './SCHEMA_STANDARD.js';
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
    RECORDS(index: number, obj?: SCHEMA_STANDARD): SCHEMA_STANDARD | null;
    recordsLength(): number;
    /**
     * Version of the standards package the reporting node runs.
     */
    STANDARDS_VERSION(): string | null;
    STANDARDS_VERSION(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Unix milliseconds when this registry frame was generated.
     */
    GENERATED_AT_MS(): bigint;
    static startSCM(builder: flatbuffers.Builder): void;
    static addVersion(builder: flatbuffers.Builder, versionOffset: flatbuffers.Offset): void;
    static addRecords(builder: flatbuffers.Builder, RECORDSOffset: flatbuffers.Offset): void;
    static createRecordsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startRecordsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addStandardsVersion(builder: flatbuffers.Builder, STANDARDS_VERSIONOffset: flatbuffers.Offset): void;
    static addGeneratedAtMs(builder: flatbuffers.Builder, GENERATED_AT_MS: bigint): void;
    static endSCM(builder: flatbuffers.Builder): flatbuffers.Offset;
    static finishSCMBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static finishSizePrefixedSCMBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static createSCM(builder: flatbuffers.Builder, versionOffset: flatbuffers.Offset, RECORDSOffset: flatbuffers.Offset, STANDARDS_VERSIONOffset: flatbuffers.Offset, GENERATED_AT_MS: bigint): flatbuffers.Offset;
    unpack(): SCMT;
    unpackTo(_o: SCMT): void;
}
export declare class SCMT implements flatbuffers.IGeneratedObject {
    version: string | Uint8Array | null;
    RECORDS: (SCHEMA_STANDARDT)[];
    STANDARDS_VERSION: string | Uint8Array | null;
    GENERATED_AT_MS: bigint;
    constructor(version?: string | Uint8Array | null, RECORDS?: (SCHEMA_STANDARDT)[], STANDARDS_VERSION?: string | Uint8Array | null, GENERATED_AT_MS?: bigint);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=SCM.d.ts.map