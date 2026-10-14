import * as flatbuffers from 'flatbuffers';
/**
 * An element set that could not be used.
 */
export declare class MDERefusedSet implements flatbuffers.IUnpackableObject<MDERefusedSetT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): MDERefusedSet;
    static getRootAsMDERefusedSet(bb: flatbuffers.ByteBuffer, obj?: MDERefusedSet): MDERefusedSet;
    static getSizePrefixedRootAsMDERefusedSet(bb: flatbuffers.ByteBuffer, obj?: MDERefusedSet): MDERefusedSet;
    OBJECT_KEY(): string | null;
    OBJECT_KEY(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    EPOCH_MS(): bigint;
    /**
     * 0-based input record; -1 = not applicable.
     */
    SET_INDEX(): number;
    /**
     * Reason, e.g. "a single element set" or the propagator's refusal text.
     */
    REASON(): string | null;
    REASON(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    static startMDERefusedSet(builder: flatbuffers.Builder): void;
    static addObjectKey(builder: flatbuffers.Builder, OBJECT_KEYOffset: flatbuffers.Offset): void;
    static addEpochMs(builder: flatbuffers.Builder, EPOCH_MS: bigint): void;
    static addSetIndex(builder: flatbuffers.Builder, SET_INDEX: number): void;
    static addReason(builder: flatbuffers.Builder, REASONOffset: flatbuffers.Offset): void;
    static endMDERefusedSet(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createMDERefusedSet(builder: flatbuffers.Builder, OBJECT_KEYOffset: flatbuffers.Offset, EPOCH_MS: bigint, SET_INDEX: number, REASONOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): MDERefusedSetT;
    unpackTo(_o: MDERefusedSetT): void;
}
export declare class MDERefusedSetT implements flatbuffers.IGeneratedObject {
    OBJECT_KEY: string | Uint8Array | null;
    EPOCH_MS: bigint;
    SET_INDEX: number;
    REASON: string | Uint8Array | null;
    constructor(OBJECT_KEY?: string | Uint8Array | null, EPOCH_MS?: bigint, SET_INDEX?: number, REASON?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=MDERefusedSet.d.ts.map