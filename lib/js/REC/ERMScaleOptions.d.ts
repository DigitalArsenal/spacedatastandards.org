import * as flatbuffers from 'flatbuffers';
/**
 * Options of a model scaling.
 */
export declare class ERMScaleOptions implements flatbuffers.IUnpackableObject<ERMScaleOptionsT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): ERMScaleOptions;
    static getRootAsERMScaleOptions(bb: flatbuffers.ByteBuffer, obj?: ERMScaleOptions): ERMScaleOptions;
    static getSizePrefixedRootAsERMScaleOptions(bb: flatbuffers.ByteBuffer, obj?: ERMScaleOptions): ERMScaleOptions;
    /**
     * Strata with fewer clipped reference samples stay unscaled.
     */
    MINIMUM_SAMPLES(): number;
    static startERMScaleOptions(builder: flatbuffers.Builder): void;
    static addMinimumSamples(builder: flatbuffers.Builder, MINIMUM_SAMPLES: number): void;
    static endERMScaleOptions(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createERMScaleOptions(builder: flatbuffers.Builder, MINIMUM_SAMPLES: number): flatbuffers.Offset;
    unpack(): ERMScaleOptionsT;
    unpackTo(_o: ERMScaleOptionsT): void;
}
export declare class ERMScaleOptionsT implements flatbuffers.IGeneratedObject {
    MINIMUM_SAMPLES: number;
    constructor(MINIMUM_SAMPLES?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=ERMScaleOptions.d.ts.map