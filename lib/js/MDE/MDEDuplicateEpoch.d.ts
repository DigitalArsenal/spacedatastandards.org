import * as flatbuffers from 'flatbuffers';
/**
 * An element set dropped as a republication of another.
 */
export declare class MDEDuplicateEpoch implements flatbuffers.IUnpackableObject<MDEDuplicateEpochT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): MDEDuplicateEpoch;
    static getRootAsMDEDuplicateEpoch(bb: flatbuffers.ByteBuffer, obj?: MDEDuplicateEpoch): MDEDuplicateEpoch;
    static getSizePrefixedRootAsMDEDuplicateEpoch(bb: flatbuffers.ByteBuffer, obj?: MDEDuplicateEpoch): MDEDuplicateEpoch;
    OBJECT_KEY(): string | null;
    OBJECT_KEY(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Epoch, Unix ms.
     */
    EPOCH_MS(): bigint;
    /**
     * 0-based input record kept and dropped.
     */
    KEPT_RECORD(): number;
    DROPPED_RECORD(): number;
    static startMDEDuplicateEpoch(builder: flatbuffers.Builder): void;
    static addObjectKey(builder: flatbuffers.Builder, OBJECT_KEYOffset: flatbuffers.Offset): void;
    static addEpochMs(builder: flatbuffers.Builder, EPOCH_MS: bigint): void;
    static addKeptRecord(builder: flatbuffers.Builder, KEPT_RECORD: number): void;
    static addDroppedRecord(builder: flatbuffers.Builder, DROPPED_RECORD: number): void;
    static endMDEDuplicateEpoch(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createMDEDuplicateEpoch(builder: flatbuffers.Builder, OBJECT_KEYOffset: flatbuffers.Offset, EPOCH_MS: bigint, KEPT_RECORD: number, DROPPED_RECORD: number): flatbuffers.Offset;
    unpack(): MDEDuplicateEpochT;
    unpackTo(_o: MDEDuplicateEpochT): void;
}
export declare class MDEDuplicateEpochT implements flatbuffers.IGeneratedObject {
    OBJECT_KEY: string | Uint8Array | null;
    EPOCH_MS: bigint;
    KEPT_RECORD: number;
    DROPPED_RECORD: number;
    constructor(OBJECT_KEY?: string | Uint8Array | null, EPOCH_MS?: bigint, KEPT_RECORD?: number, DROPPED_RECORD?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=MDEDuplicateEpoch.d.ts.map