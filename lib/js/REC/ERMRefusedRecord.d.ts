import * as flatbuffers from 'flatbuffers';
/**
 * A record that could not be used.
 */
export declare class ERMRefusedRecord implements flatbuffers.IUnpackableObject<ERMRefusedRecordT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): ERMRefusedRecord;
    static getRootAsERMRefusedRecord(bb: flatbuffers.ByteBuffer, obj?: ERMRefusedRecord): ERMRefusedRecord;
    static getSizePrefixedRootAsERMRefusedRecord(bb: flatbuffers.ByteBuffer, obj?: ERMRefusedRecord): ERMRefusedRecord;
    /**
     * 0-based input record.
     */
    RECORD(): number;
    REASON(): string | null;
    REASON(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    OBJECT_KEY(): string | null;
    OBJECT_KEY(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * First epoch, when relevant.
     */
    FIRST(): string | null;
    FIRST(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    static startERMRefusedRecord(builder: flatbuffers.Builder): void;
    static addRecord(builder: flatbuffers.Builder, RECORD: number): void;
    static addReason(builder: flatbuffers.Builder, REASONOffset: flatbuffers.Offset): void;
    static addObjectKey(builder: flatbuffers.Builder, OBJECT_KEYOffset: flatbuffers.Offset): void;
    static addFirst(builder: flatbuffers.Builder, FIRSTOffset: flatbuffers.Offset): void;
    static endERMRefusedRecord(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createERMRefusedRecord(builder: flatbuffers.Builder, RECORD: number, REASONOffset: flatbuffers.Offset, OBJECT_KEYOffset: flatbuffers.Offset, FIRSTOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): ERMRefusedRecordT;
    unpackTo(_o: ERMRefusedRecordT): void;
}
export declare class ERMRefusedRecordT implements flatbuffers.IGeneratedObject {
    RECORD: number;
    REASON: string | Uint8Array | null;
    OBJECT_KEY: string | Uint8Array | null;
    FIRST: string | Uint8Array | null;
    constructor(RECORD?: number, REASON?: string | Uint8Array | null, OBJECT_KEY?: string | Uint8Array | null, FIRST?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=ERMRefusedRecord.d.ts.map