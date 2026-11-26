import * as flatbuffers from 'flatbuffers';
/**
 * Optional Gaussian parameter prior.
 */
export declare class PCFGaussianPrior implements flatbuffers.IUnpackableObject<PCFGaussianPriorT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): PCFGaussianPrior;
    static getRootAsPCFGaussianPrior(bb: flatbuffers.ByteBuffer, obj?: PCFGaussianPrior): PCFGaussianPrior;
    static getSizePrefixedRootAsPCFGaussianPrior(bb: flatbuffers.ByteBuffer, obj?: PCFGaussianPrior): PCFGaussianPrior;
    /**
     * Prior mean in the parameter's unit.
     */
    MEAN(): number;
    /**
     * Prior standard deviation in the parameter's unit; > 0 when HAS_SIGMA is true.
     */
    SIGMA(): number;
    /**
     * True when SIGMA is explicitly provided.
     */
    HAS_SIGMA(): boolean;
    static startPCFGaussianPrior(builder: flatbuffers.Builder): void;
    static addMean(builder: flatbuffers.Builder, MEAN: number): void;
    static addSigma(builder: flatbuffers.Builder, SIGMA: number): void;
    static addHasSigma(builder: flatbuffers.Builder, HAS_SIGMA: boolean): void;
    static endPCFGaussianPrior(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createPCFGaussianPrior(builder: flatbuffers.Builder, MEAN: number, SIGMA: number, HAS_SIGMA: boolean): flatbuffers.Offset;
    unpack(): PCFGaussianPriorT;
    unpackTo(_o: PCFGaussianPriorT): void;
}
export declare class PCFGaussianPriorT implements flatbuffers.IGeneratedObject {
    MEAN: number;
    SIGMA: number;
    HAS_SIGMA: boolean;
    constructor(MEAN?: number, SIGMA?: number, HAS_SIGMA?: boolean);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=PCFGaussianPrior.d.ts.map