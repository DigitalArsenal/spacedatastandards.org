import * as flatbuffers from 'flatbuffers';
/**
 * How a process noise was fitted.
 */
export declare class ERMNoiseFit implements flatbuffers.IUnpackableObject<ERMNoiseFitT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): ERMNoiseFit;
    static getRootAsERMNoiseFit(bb: flatbuffers.ByteBuffer, obj?: ERMNoiseFit): ERMNoiseFit;
    static getSizePrefixedRootAsERMNoiseFit(bb: flatbuffers.ByteBuffer, obj?: ERMNoiseFit): ERMNoiseFit;
    SAMPLES(): bigint;
    OBJECTS(): number;
    /**
     * Window of the samples, ISO 8601 UTC.
     */
    WINDOW_START(): string | null;
    WINDOW_START(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    WINDOW_STOP(): string | null;
    WINDOW_STOP(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    NEGATIVE_LOG_LIKELIHOOD_Q0(): number;
    NEGATIVE_LOG_LIKELIHOOD(): number;
    /**
     * Maximum-likelihood densities, m**2/s**3 (3 values).
     */
    MAXIMUM_LIKELIHOOD_M2_S3(index: number): number | null;
    maximumLikelihoodM2S3Length(): number;
    maximumLikelihoodM2S3Array(): Float64Array | null;
    /**
     * Strata calibrated with the ML densities and with P0 alone.
     */
    CALIBRATED_STRATA_MAXIMUM_LIKELIHOOD(): number;
    CALIBRATED_STRATA_P0_ALONE(): number;
    /**
     * Which was selected: "P0 alone" or "maximum likelihood".
     */
    SELECTED(): string | null;
    SELECTED(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    RULE(): string | null;
    RULE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    static startERMNoiseFit(builder: flatbuffers.Builder): void;
    static addSamples(builder: flatbuffers.Builder, SAMPLES: bigint): void;
    static addObjects(builder: flatbuffers.Builder, OBJECTS: number): void;
    static addWindowStart(builder: flatbuffers.Builder, WINDOW_STARTOffset: flatbuffers.Offset): void;
    static addWindowStop(builder: flatbuffers.Builder, WINDOW_STOPOffset: flatbuffers.Offset): void;
    static addNegativeLogLikelihoodQ0(builder: flatbuffers.Builder, NEGATIVE_LOG_LIKELIHOOD_Q0: number): void;
    static addNegativeLogLikelihood(builder: flatbuffers.Builder, NEGATIVE_LOG_LIKELIHOOD: number): void;
    static addMaximumLikelihoodM2S3(builder: flatbuffers.Builder, MAXIMUM_LIKELIHOOD_M2_S3Offset: flatbuffers.Offset): void;
    static createMaximumLikelihoodM2S3Vector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createMaximumLikelihoodM2S3Vector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startMaximumLikelihoodM2S3Vector(builder: flatbuffers.Builder, numElems: number): void;
    static addCalibratedStrataMaximumLikelihood(builder: flatbuffers.Builder, CALIBRATED_STRATA_MAXIMUM_LIKELIHOOD: number): void;
    static addCalibratedStrataP0Alone(builder: flatbuffers.Builder, CALIBRATED_STRATA_P0_ALONE: number): void;
    static addSelected(builder: flatbuffers.Builder, SELECTEDOffset: flatbuffers.Offset): void;
    static addRule(builder: flatbuffers.Builder, RULEOffset: flatbuffers.Offset): void;
    static endERMNoiseFit(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createERMNoiseFit(builder: flatbuffers.Builder, SAMPLES: bigint, OBJECTS: number, WINDOW_STARTOffset: flatbuffers.Offset, WINDOW_STOPOffset: flatbuffers.Offset, NEGATIVE_LOG_LIKELIHOOD_Q0: number, NEGATIVE_LOG_LIKELIHOOD: number, MAXIMUM_LIKELIHOOD_M2_S3Offset: flatbuffers.Offset, CALIBRATED_STRATA_MAXIMUM_LIKELIHOOD: number, CALIBRATED_STRATA_P0_ALONE: number, SELECTEDOffset: flatbuffers.Offset, RULEOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): ERMNoiseFitT;
    unpackTo(_o: ERMNoiseFitT): void;
}
export declare class ERMNoiseFitT implements flatbuffers.IGeneratedObject {
    SAMPLES: bigint;
    OBJECTS: number;
    WINDOW_START: string | Uint8Array | null;
    WINDOW_STOP: string | Uint8Array | null;
    NEGATIVE_LOG_LIKELIHOOD_Q0: number;
    NEGATIVE_LOG_LIKELIHOOD: number;
    MAXIMUM_LIKELIHOOD_M2_S3: (number)[];
    CALIBRATED_STRATA_MAXIMUM_LIKELIHOOD: number;
    CALIBRATED_STRATA_P0_ALONE: number;
    SELECTED: string | Uint8Array | null;
    RULE: string | Uint8Array | null;
    constructor(SAMPLES?: bigint, OBJECTS?: number, WINDOW_START?: string | Uint8Array | null, WINDOW_STOP?: string | Uint8Array | null, NEGATIVE_LOG_LIKELIHOOD_Q0?: number, NEGATIVE_LOG_LIKELIHOOD?: number, MAXIMUM_LIKELIHOOD_M2_S3?: (number)[], CALIBRATED_STRATA_MAXIMUM_LIKELIHOOD?: number, CALIBRATED_STRATA_P0_ALONE?: number, SELECTED?: string | Uint8Array | null, RULE?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=ERMNoiseFit.d.ts.map