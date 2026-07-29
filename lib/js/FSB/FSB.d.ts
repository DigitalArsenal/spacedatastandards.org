import * as flatbuffers from 'flatbuffers';
import { flatSqlByteStreamKind } from './flatSqlByteStreamKind.js';
/**
 * FlatSQL Byte Stream — a bounded, typed chunk used for append/query and
 * opaque snapshot/WAL persistence. DATA carries at most one MiB so larger
 * inputs and snapshots are delivered as ordered chunks. The host may persist
 * canonical FSB bytes but must not interpret DATA as tables, rows, or SQL.
 */
export declare class FSB implements flatbuffers.IUnpackableObject<FSBT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): FSB;
    static getRootAsFSB(bb: flatbuffers.ByteBuffer, obj?: FSB): FSB;
    static getSizePrefixedRootAsFSB(bb: flatbuffers.ByteBuffer, obj?: FSB): FSB;
    static bufferHasIdentifier(bb: flatbuffers.ByteBuffer): boolean;
    REQUEST_ID(): bigint;
    KIND(): flatSqlByteStreamKind;
    CHUNK_SEQUENCE(): number;
    FINAL(): boolean;
    TOTAL_BYTES(): bigint;
    RECORD_COUNT(): bigint;
    COLUMN_COUNT(): number;
    SCHEMA_NAME(): string | null;
    SCHEMA_NAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    FILE_IDENTIFIER(): string | null;
    FILE_IDENTIFIER(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    DATA(index: number): number | null;
    dataLength(): number;
    dataArray(): Uint8Array | null;
    SHA256(index: number): number | null;
    sha256Length(): number;
    sha256Array(): Uint8Array | null;
    static startFSB(builder: flatbuffers.Builder): void;
    static addRequestId(builder: flatbuffers.Builder, REQUEST_ID: bigint): void;
    static addKind(builder: flatbuffers.Builder, KIND: flatSqlByteStreamKind): void;
    static addChunkSequence(builder: flatbuffers.Builder, CHUNK_SEQUENCE: number): void;
    static addFinal(builder: flatbuffers.Builder, FINAL: boolean): void;
    static addTotalBytes(builder: flatbuffers.Builder, TOTAL_BYTES: bigint): void;
    static addRecordCount(builder: flatbuffers.Builder, RECORD_COUNT: bigint): void;
    static addColumnCount(builder: flatbuffers.Builder, COLUMN_COUNT: number): void;
    static addSchemaName(builder: flatbuffers.Builder, SCHEMA_NAMEOffset: flatbuffers.Offset): void;
    static addFileIdentifier(builder: flatbuffers.Builder, FILE_IDENTIFIEROffset: flatbuffers.Offset): void;
    static addData(builder: flatbuffers.Builder, DATAOffset: flatbuffers.Offset): void;
    static createDataVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startDataVector(builder: flatbuffers.Builder, numElems: number): void;
    static addSha256(builder: flatbuffers.Builder, SHA256Offset: flatbuffers.Offset): void;
    static createSha256Vector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startSha256Vector(builder: flatbuffers.Builder, numElems: number): void;
    static endFSB(builder: flatbuffers.Builder): flatbuffers.Offset;
    static finishFSBBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static finishSizePrefixedFSBBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static createFSB(builder: flatbuffers.Builder, REQUEST_ID: bigint, KIND: flatSqlByteStreamKind, CHUNK_SEQUENCE: number, FINAL: boolean, TOTAL_BYTES: bigint, RECORD_COUNT: bigint, COLUMN_COUNT: number, SCHEMA_NAMEOffset: flatbuffers.Offset, FILE_IDENTIFIEROffset: flatbuffers.Offset, DATAOffset: flatbuffers.Offset, SHA256Offset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): FSBT;
    unpackTo(_o: FSBT): void;
}
export declare class FSBT implements flatbuffers.IGeneratedObject {
    REQUEST_ID: bigint;
    KIND: flatSqlByteStreamKind;
    CHUNK_SEQUENCE: number;
    FINAL: boolean;
    TOTAL_BYTES: bigint;
    RECORD_COUNT: bigint;
    COLUMN_COUNT: number;
    SCHEMA_NAME: string | Uint8Array | null;
    FILE_IDENTIFIER: string | Uint8Array | null;
    DATA: (number)[];
    SHA256: (number)[];
    constructor(REQUEST_ID?: bigint, KIND?: flatSqlByteStreamKind, CHUNK_SEQUENCE?: number, FINAL?: boolean, TOTAL_BYTES?: bigint, RECORD_COUNT?: bigint, COLUMN_COUNT?: number, SCHEMA_NAME?: string | Uint8Array | null, FILE_IDENTIFIER?: string | Uint8Array | null, DATA?: (number)[], SHA256?: (number)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=FSB.d.ts.map