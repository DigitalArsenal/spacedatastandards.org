import * as flatbuffers from 'flatbuffers';
/**
 * A density-forecast consider covariance at one epoch.
 */
export declare class ERMConsiderCovariance implements flatbuffers.IUnpackableObject<ERMConsiderCovarianceT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): ERMConsiderCovariance;
    static getRootAsERMConsiderCovariance(bb: flatbuffers.ByteBuffer, obj?: ERMConsiderCovariance): ERMConsiderCovariance;
    static getSizePrefixedRootAsERMConsiderCovariance(bb: flatbuffers.ByteBuffer, obj?: ERMConsiderCovariance): ERMConsiderCovariance;
    EPOCH(): string | null;
    EPOCH(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    SECONDS_FROM_START(): number;
    SIGMA_EFFECTIVE(): number;
    /**
     * Weight of each lead day (K values).
     */
    WEIGHTS(index: number): number | null;
    weightsLength(): number;
    weightsArray(): Float64Array | null;
    WEIGHT_COVERED(): number;
    SENSITIVITY(index: number): number | null;
    sensitivityLength(): number;
    sensitivityArray(): Float64Array | null;
    /**
     * Consider covariance, 6x6 row-major, SI.
     */
    COVARIANCE(index: number): number | null;
    covarianceLength(): number;
    covarianceArray(): Float64Array | null;
    /**
     * BASE plus COVARIANCE; empty when no base.
     */
    TOTAL(index: number): number | null;
    totalLength(): number;
    totalArray(): Float64Array | null;
    static startERMConsiderCovariance(builder: flatbuffers.Builder): void;
    static addEpoch(builder: flatbuffers.Builder, EPOCHOffset: flatbuffers.Offset): void;
    static addSecondsFromStart(builder: flatbuffers.Builder, SECONDS_FROM_START: number): void;
    static addSigmaEffective(builder: flatbuffers.Builder, SIGMA_EFFECTIVE: number): void;
    static addWeights(builder: flatbuffers.Builder, WEIGHTSOffset: flatbuffers.Offset): void;
    static createWeightsVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createWeightsVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startWeightsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addWeightCovered(builder: flatbuffers.Builder, WEIGHT_COVERED: number): void;
    static addSensitivity(builder: flatbuffers.Builder, SENSITIVITYOffset: flatbuffers.Offset): void;
    static createSensitivityVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createSensitivityVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startSensitivityVector(builder: flatbuffers.Builder, numElems: number): void;
    static addCovariance(builder: flatbuffers.Builder, COVARIANCEOffset: flatbuffers.Offset): void;
    static createCovarianceVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createCovarianceVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startCovarianceVector(builder: flatbuffers.Builder, numElems: number): void;
    static addTotal(builder: flatbuffers.Builder, TOTALOffset: flatbuffers.Offset): void;
    static createTotalVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createTotalVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startTotalVector(builder: flatbuffers.Builder, numElems: number): void;
    static endERMConsiderCovariance(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createERMConsiderCovariance(builder: flatbuffers.Builder, EPOCHOffset: flatbuffers.Offset, SECONDS_FROM_START: number, SIGMA_EFFECTIVE: number, WEIGHTSOffset: flatbuffers.Offset, WEIGHT_COVERED: number, SENSITIVITYOffset: flatbuffers.Offset, COVARIANCEOffset: flatbuffers.Offset, TOTALOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): ERMConsiderCovarianceT;
    unpackTo(_o: ERMConsiderCovarianceT): void;
}
export declare class ERMConsiderCovarianceT implements flatbuffers.IGeneratedObject {
    EPOCH: string | Uint8Array | null;
    SECONDS_FROM_START: number;
    SIGMA_EFFECTIVE: number;
    WEIGHTS: (number)[];
    WEIGHT_COVERED: number;
    SENSITIVITY: (number)[];
    COVARIANCE: (number)[];
    TOTAL: (number)[];
    constructor(EPOCH?: string | Uint8Array | null, SECONDS_FROM_START?: number, SIGMA_EFFECTIVE?: number, WEIGHTS?: (number)[], WEIGHT_COVERED?: number, SENSITIVITY?: (number)[], COVARIANCE?: (number)[], TOTAL?: (number)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=ERMConsiderCovariance.d.ts.map