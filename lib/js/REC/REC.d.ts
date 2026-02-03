import * as flatbuffers from 'flatbuffers';
import { Record, RecordT } from './Record.js';
/**
 * Collection of Standard Records
 */
export declare class REC implements flatbuffers.IUnpackableObject<RECT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): REC;
    static getRootAsREC(bb: flatbuffers.ByteBuffer, obj?: REC): REC;
    static getSizePrefixedRootAsREC(bb: flatbuffers.ByteBuffer, obj?: REC): REC;
    static bufferHasIdentifier(bb: flatbuffers.ByteBuffer): boolean;
    /**
     * Schema version identifier
     */
    version(): string | null;
    version(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Array of heterogeneous records from any supported standard
     */
    RECORDS(index: number, obj?: Record): Record | null;
    recordsLength(): number;
    static startREC(builder: flatbuffers.Builder): void;
    static addVersion(builder: flatbuffers.Builder, versionOffset: flatbuffers.Offset): void;
    static addRecords(builder: flatbuffers.Builder, RECORDSOffset: flatbuffers.Offset): void;
    static createRecordsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startRecordsVector(builder: flatbuffers.Builder, numElems: number): void;
    static endREC(builder: flatbuffers.Builder): flatbuffers.Offset;
    static finishRECBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static finishSizePrefixedRECBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static createREC(builder: flatbuffers.Builder, versionOffset: flatbuffers.Offset, RECORDSOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): RECT;
    unpackTo(_o: RECT): void;
}
export declare class RECT implements flatbuffers.IGeneratedObject {
    version: string | Uint8Array | null;
    RECORDS: (RecordT)[];
    constructor(version?: string | Uint8Array | null, RECORDS?: (RecordT)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=REC.d.ts.map