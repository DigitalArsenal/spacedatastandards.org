import * as flatbuffers from 'flatbuffers';
/**
 * One named quality score and its basis.
 */
export declare class VAMQualityDimension implements flatbuffers.IUnpackableObject<VAMQualityDimensionT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): VAMQualityDimension;
    static getRootAsVAMQualityDimension(bb: flatbuffers.ByteBuffer, obj?: VAMQualityDimension): VAMQualityDimension;
    static getSizePrefixedRootAsVAMQualityDimension(bb: flatbuffers.ByteBuffer, obj?: VAMQualityDimension): VAMQualityDimension;
    NAME(): string;
    NAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    SCORE(): number;
    BASIS(): string | null;
    BASIS(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    static startVAMQualityDimension(builder: flatbuffers.Builder): void;
    static addName(builder: flatbuffers.Builder, NAMEOffset: flatbuffers.Offset): void;
    static addScore(builder: flatbuffers.Builder, SCORE: number): void;
    static addBasis(builder: flatbuffers.Builder, BASISOffset: flatbuffers.Offset): void;
    static endVAMQualityDimension(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createVAMQualityDimension(builder: flatbuffers.Builder, NAMEOffset: flatbuffers.Offset, SCORE: number, BASISOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): VAMQualityDimensionT;
    unpackTo(_o: VAMQualityDimensionT): void;
}
export declare class VAMQualityDimensionT implements flatbuffers.IGeneratedObject {
    NAME: string | Uint8Array | null;
    SCORE: number;
    BASIS: string | Uint8Array | null;
    constructor(NAME?: string | Uint8Array | null, SCORE?: number, BASIS?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=VAMQualityDimension.d.ts.map