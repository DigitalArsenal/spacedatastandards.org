import * as flatbuffers from 'flatbuffers';
/**
 * A weighted covariance term.
 */
export declare class ERMWeightedCovariance implements flatbuffers.IUnpackableObject<ERMWeightedCovarianceT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): ERMWeightedCovariance;
    static getRootAsERMWeightedCovariance(bb: flatbuffers.ByteBuffer, obj?: ERMWeightedCovariance): ERMWeightedCovariance;
    static getSizePrefixedRootAsERMWeightedCovariance(bb: flatbuffers.ByteBuffer, obj?: ERMWeightedCovariance): ERMWeightedCovariance;
    WEIGHT(): number;
    /**
     * 6, 9, 21 or 36 values, SI.
     */
    COVARIANCE(index: number): number | null;
    covarianceLength(): number;
    covarianceArray(): Float64Array | null;
    static startERMWeightedCovariance(builder: flatbuffers.Builder): void;
    static addWeight(builder: flatbuffers.Builder, WEIGHT: number): void;
    static addCovariance(builder: flatbuffers.Builder, COVARIANCEOffset: flatbuffers.Offset): void;
    static createCovarianceVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createCovarianceVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startCovarianceVector(builder: flatbuffers.Builder, numElems: number): void;
    static endERMWeightedCovariance(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createERMWeightedCovariance(builder: flatbuffers.Builder, WEIGHT: number, COVARIANCEOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): ERMWeightedCovarianceT;
    unpackTo(_o: ERMWeightedCovarianceT): void;
}
export declare class ERMWeightedCovarianceT implements flatbuffers.IGeneratedObject {
    WEIGHT: number;
    COVARIANCE: (number)[];
    constructor(WEIGHT?: number, COVARIANCE?: (number)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=ERMWeightedCovariance.d.ts.map