import * as flatbuffers from 'flatbuffers';
/**
 * One category tally.
 */
export declare class AGRCategory implements flatbuffers.IUnpackableObject<AGRCategoryT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): AGRCategory;
    static getRootAsAGRCategory(bb: flatbuffers.ByteBuffer, obj?: AGRCategory): AGRCategory;
    static getSizePrefixedRootAsAGRCategory(bb: flatbuffers.ByteBuffer, obj?: AGRCategory): AGRCategory;
    KEY(): string | null;
    KEY(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    COUNT(): bigint;
    SUM(): number;
    static startAGRCategory(builder: flatbuffers.Builder): void;
    static addKey(builder: flatbuffers.Builder, KEYOffset: flatbuffers.Offset): void;
    static addCount(builder: flatbuffers.Builder, COUNT: bigint): void;
    static addSum(builder: flatbuffers.Builder, SUM: number): void;
    static endAGRCategory(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createAGRCategory(builder: flatbuffers.Builder, KEYOffset: flatbuffers.Offset, COUNT: bigint, SUM: number): flatbuffers.Offset;
    unpack(): AGRCategoryT;
    unpackTo(_o: AGRCategoryT): void;
}
export declare class AGRCategoryT implements flatbuffers.IGeneratedObject {
    KEY: string | Uint8Array | null;
    COUNT: bigint;
    SUM: number;
    constructor(KEY?: string | Uint8Array | null, COUNT?: bigint, SUM?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=AGRCategory.d.ts.map