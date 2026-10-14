import * as flatbuffers from 'flatbuffers';
/**
 * A time span of one object.
 */
export declare class MDEObjectSpan implements flatbuffers.IUnpackableObject<MDEObjectSpanT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): MDEObjectSpan;
    static getRootAsMDEObjectSpan(bb: flatbuffers.ByteBuffer, obj?: MDEObjectSpan): MDEObjectSpan;
    static getSizePrefixedRootAsMDEObjectSpan(bb: flatbuffers.ByteBuffer, obj?: MDEObjectSpan): MDEObjectSpan;
    OBJECT_KEY(): string | null;
    OBJECT_KEY(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    FROM_MS(): bigint;
    TO_MS(): bigint;
    static startMDEObjectSpan(builder: flatbuffers.Builder): void;
    static addObjectKey(builder: flatbuffers.Builder, OBJECT_KEYOffset: flatbuffers.Offset): void;
    static addFromMs(builder: flatbuffers.Builder, FROM_MS: bigint): void;
    static addToMs(builder: flatbuffers.Builder, TO_MS: bigint): void;
    static endMDEObjectSpan(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createMDEObjectSpan(builder: flatbuffers.Builder, OBJECT_KEYOffset: flatbuffers.Offset, FROM_MS: bigint, TO_MS: bigint): flatbuffers.Offset;
    unpack(): MDEObjectSpanT;
    unpackTo(_o: MDEObjectSpanT): void;
}
export declare class MDEObjectSpanT implements flatbuffers.IGeneratedObject {
    OBJECT_KEY: string | Uint8Array | null;
    FROM_MS: bigint;
    TO_MS: bigint;
    constructor(OBJECT_KEY?: string | Uint8Array | null, FROM_MS?: bigint, TO_MS?: bigint);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=MDEObjectSpan.d.ts.map