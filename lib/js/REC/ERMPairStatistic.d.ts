import * as flatbuffers from 'flatbuffers';
/**
 * Statistics of one pair.
 */
export declare class ERMPairStatistic implements flatbuffers.IUnpackableObject<ERMPairStatisticT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): ERMPairStatistic;
    static getRootAsERMPairStatistic(bb: flatbuffers.ByteBuffer, obj?: ERMPairStatistic): ERMPairStatistic;
    static getSizePrefixedRootAsERMPairStatistic(bb: flatbuffers.ByteBuffer, obj?: ERMPairStatistic): ERMPairStatistic;
    ID(): string | null;
    ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Why the pair could not be evaluated; empty otherwise.
     */
    MISSING(): string | null;
    MISSING(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Error (predicted minus truth), RTN, m and m/s (3 values each).
     */
    ERROR_RTN_M(index: number): number | null;
    errorRtnMLength(): number;
    errorRtnMArray(): Float64Array | null;
    VELOCITY_ERROR_RTN_M_S(index: number): number | null;
    velocityErrorRtnMSLength(): number;
    velocityErrorRtnMSArray(): Float64Array | null;
    /**
     * Interpolation of the predicted side: degree, first sample index,
     * samples; 0 = not interpolated.
     */
    INTERPOLATION_DEGREE(): number;
    INTERPOLATION_FROM(): number;
    INTERPOLATION_SAMPLES(): number;
    /**
     * Position covariances, Lower6, RTN, m**2; TRUTH_RTN empty = none.
     */
    PREDICTED_RTN(index: number): number | null;
    predictedRtnLength(): number;
    predictedRtnArray(): Float64Array | null;
    TRUTH_RTN(index: number): number | null;
    truthRtnLength(): number;
    truthRtnArray(): Float64Array | null;
    D2_COMBINED(): number;
    LOG_DET_COMBINED(): number;
    D2_PREDICTED(): number;
    /**
     * Whitened errors (3 values each).
     */
    Z_COMBINED(index: number): number | null;
    zCombinedLength(): number;
    zCombinedArray(): Float64Array | null;
    Z_PREDICTED(index: number): number | null;
    zPredictedLength(): number;
    zPredictedArray(): Float64Array | null;
    static startERMPairStatistic(builder: flatbuffers.Builder): void;
    static addId(builder: flatbuffers.Builder, IDOffset: flatbuffers.Offset): void;
    static addMissing(builder: flatbuffers.Builder, MISSINGOffset: flatbuffers.Offset): void;
    static addErrorRtnM(builder: flatbuffers.Builder, ERROR_RTN_MOffset: flatbuffers.Offset): void;
    static createErrorRtnMVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createErrorRtnMVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startErrorRtnMVector(builder: flatbuffers.Builder, numElems: number): void;
    static addVelocityErrorRtnMS(builder: flatbuffers.Builder, VELOCITY_ERROR_RTN_M_SOffset: flatbuffers.Offset): void;
    static createVelocityErrorRtnMSVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createVelocityErrorRtnMSVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startVelocityErrorRtnMSVector(builder: flatbuffers.Builder, numElems: number): void;
    static addInterpolationDegree(builder: flatbuffers.Builder, INTERPOLATION_DEGREE: number): void;
    static addInterpolationFrom(builder: flatbuffers.Builder, INTERPOLATION_FROM: number): void;
    static addInterpolationSamples(builder: flatbuffers.Builder, INTERPOLATION_SAMPLES: number): void;
    static addPredictedRtn(builder: flatbuffers.Builder, PREDICTED_RTNOffset: flatbuffers.Offset): void;
    static createPredictedRtnVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createPredictedRtnVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startPredictedRtnVector(builder: flatbuffers.Builder, numElems: number): void;
    static addTruthRtn(builder: flatbuffers.Builder, TRUTH_RTNOffset: flatbuffers.Offset): void;
    static createTruthRtnVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createTruthRtnVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startTruthRtnVector(builder: flatbuffers.Builder, numElems: number): void;
    static addD2Combined(builder: flatbuffers.Builder, D2_COMBINED: number): void;
    static addLogDetCombined(builder: flatbuffers.Builder, LOG_DET_COMBINED: number): void;
    static addD2Predicted(builder: flatbuffers.Builder, D2_PREDICTED: number): void;
    static addZCombined(builder: flatbuffers.Builder, Z_COMBINEDOffset: flatbuffers.Offset): void;
    static createZCombinedVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createZCombinedVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startZCombinedVector(builder: flatbuffers.Builder, numElems: number): void;
    static addZPredicted(builder: flatbuffers.Builder, Z_PREDICTEDOffset: flatbuffers.Offset): void;
    static createZPredictedVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createZPredictedVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startZPredictedVector(builder: flatbuffers.Builder, numElems: number): void;
    static endERMPairStatistic(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createERMPairStatistic(builder: flatbuffers.Builder, IDOffset: flatbuffers.Offset, MISSINGOffset: flatbuffers.Offset, ERROR_RTN_MOffset: flatbuffers.Offset, VELOCITY_ERROR_RTN_M_SOffset: flatbuffers.Offset, INTERPOLATION_DEGREE: number, INTERPOLATION_FROM: number, INTERPOLATION_SAMPLES: number, PREDICTED_RTNOffset: flatbuffers.Offset, TRUTH_RTNOffset: flatbuffers.Offset, D2_COMBINED: number, LOG_DET_COMBINED: number, D2_PREDICTED: number, Z_COMBINEDOffset: flatbuffers.Offset, Z_PREDICTEDOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): ERMPairStatisticT;
    unpackTo(_o: ERMPairStatisticT): void;
}
export declare class ERMPairStatisticT implements flatbuffers.IGeneratedObject {
    ID: string | Uint8Array | null;
    MISSING: string | Uint8Array | null;
    ERROR_RTN_M: (number)[];
    VELOCITY_ERROR_RTN_M_S: (number)[];
    INTERPOLATION_DEGREE: number;
    INTERPOLATION_FROM: number;
    INTERPOLATION_SAMPLES: number;
    PREDICTED_RTN: (number)[];
    TRUTH_RTN: (number)[];
    D2_COMBINED: number;
    LOG_DET_COMBINED: number;
    D2_PREDICTED: number;
    Z_COMBINED: (number)[];
    Z_PREDICTED: (number)[];
    constructor(ID?: string | Uint8Array | null, MISSING?: string | Uint8Array | null, ERROR_RTN_M?: (number)[], VELOCITY_ERROR_RTN_M_S?: (number)[], INTERPOLATION_DEGREE?: number, INTERPOLATION_FROM?: number, INTERPOLATION_SAMPLES?: number, PREDICTED_RTN?: (number)[], TRUTH_RTN?: (number)[], D2_COMBINED?: number, LOG_DET_COMBINED?: number, D2_PREDICTED?: number, Z_COMBINED?: (number)[], Z_PREDICTED?: (number)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=ERMPairStatistic.d.ts.map