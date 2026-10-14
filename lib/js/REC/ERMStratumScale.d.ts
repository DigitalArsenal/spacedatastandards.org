import * as flatbuffers from 'flatbuffers';
/**
 * Per-axis scale applied to a stratum's position covariance.
 */
export declare class ERMStratumScale implements flatbuffers.IUnpackableObject<ERMStratumScaleT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): ERMStratumScale;
    static getRootAsERMStratumScale(bb: flatbuffers.ByteBuffer, obj?: ERMStratumScale): ERMStratumScale;
    static getSizePrefixedRootAsERMStratumScale(bb: flatbuffers.ByteBuffer, obj?: ERMStratumScale): ERMStratumScale;
    /**
     * s_R, s_T, s_N (covariance scaled by s_a s_b), 3 values.
     */
    FACTORS(index: number): number | null;
    factorsLength(): number;
    factorsArray(): Float64Array | null;
    /**
     * Reference samples behind them.
     */
    TRUTH_N(): bigint;
    static startERMStratumScale(builder: flatbuffers.Builder): void;
    static addFactors(builder: flatbuffers.Builder, FACTORSOffset: flatbuffers.Offset): void;
    static createFactorsVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createFactorsVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startFactorsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addTruthN(builder: flatbuffers.Builder, TRUTH_N: bigint): void;
    static endERMStratumScale(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createERMStratumScale(builder: flatbuffers.Builder, FACTORSOffset: flatbuffers.Offset, TRUTH_N: bigint): flatbuffers.Offset;
    unpack(): ERMStratumScaleT;
    unpackTo(_o: ERMStratumScaleT): void;
}
export declare class ERMStratumScaleT implements flatbuffers.IGeneratedObject {
    FACTORS: (number)[];
    TRUTH_N: bigint;
    constructor(FACTORS?: (number)[], TRUTH_N?: bigint);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=ERMStratumScale.d.ts.map