import * as flatbuffers from 'flatbuffers';
import { memIonosphereModel } from './memIonosphereModel.js';
import { memMeasurementType } from './memMeasurementType.js';
import { memTroposphereModel } from './memTroposphereModel.js';
/**
 * Noise, bias and editing rules for one observable. Standard deviations and
 * biases use the observable's SI unit. ANGLE observables use radians.
 */
export declare class MEMErrorModel implements flatbuffers.IUnpackableObject<MEMErrorModelT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): MEMErrorModel;
    static getRootAsMEMErrorModel(bb: flatbuffers.ByteBuffer, obj?: MEMErrorModel): MEMErrorModel;
    static getSizePrefixedRootAsMEMErrorModel(bb: flatbuffers.ByteBuffer, obj?: MEMErrorModel): MEMErrorModel;
    MODEL_ID(): string;
    MODEL_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    MEASUREMENT_TYPE(): memMeasurementType;
    NOISE_SIGMA(): number;
    BIAS(): number;
    BIAS_SIGMA(): number;
    CORRELATION_TIME_SECONDS(): number;
    MINIMUM_ACCEPTED_VALUE(): number;
    MAXIMUM_ACCEPTED_VALUE(): number;
    SIGMA_EDIT_THRESHOLD(): number;
    ACCEPT_START_EPOCH(): string | null;
    ACCEPT_START_EPOCH(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    ACCEPT_STOP_EPOCH(): string | null;
    ACCEPT_STOP_EPOCH(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    TROPOSPHERE_MODEL(): memTroposphereModel;
    IONOSPHERE_MODEL(): memIonosphereModel;
    APPLY_LIGHT_TIME(): boolean;
    APPLY_BODY_ROTATION(): boolean;
    static startMEMErrorModel(builder: flatbuffers.Builder): void;
    static addModelId(builder: flatbuffers.Builder, MODEL_IDOffset: flatbuffers.Offset): void;
    static addMeasurementType(builder: flatbuffers.Builder, MEASUREMENT_TYPE: memMeasurementType): void;
    static addNoiseSigma(builder: flatbuffers.Builder, NOISE_SIGMA: number): void;
    static addBias(builder: flatbuffers.Builder, BIAS: number): void;
    static addBiasSigma(builder: flatbuffers.Builder, BIAS_SIGMA: number): void;
    static addCorrelationTimeSeconds(builder: flatbuffers.Builder, CORRELATION_TIME_SECONDS: number): void;
    static addMinimumAcceptedValue(builder: flatbuffers.Builder, MINIMUM_ACCEPTED_VALUE: number): void;
    static addMaximumAcceptedValue(builder: flatbuffers.Builder, MAXIMUM_ACCEPTED_VALUE: number): void;
    static addSigmaEditThreshold(builder: flatbuffers.Builder, SIGMA_EDIT_THRESHOLD: number): void;
    static addAcceptStartEpoch(builder: flatbuffers.Builder, ACCEPT_START_EPOCHOffset: flatbuffers.Offset): void;
    static addAcceptStopEpoch(builder: flatbuffers.Builder, ACCEPT_STOP_EPOCHOffset: flatbuffers.Offset): void;
    static addTroposphereModel(builder: flatbuffers.Builder, TROPOSPHERE_MODEL: memTroposphereModel): void;
    static addIonosphereModel(builder: flatbuffers.Builder, IONOSPHERE_MODEL: memIonosphereModel): void;
    static addApplyLightTime(builder: flatbuffers.Builder, APPLY_LIGHT_TIME: boolean): void;
    static addApplyBodyRotation(builder: flatbuffers.Builder, APPLY_BODY_ROTATION: boolean): void;
    static endMEMErrorModel(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createMEMErrorModel(builder: flatbuffers.Builder, MODEL_IDOffset: flatbuffers.Offset, MEASUREMENT_TYPE: memMeasurementType, NOISE_SIGMA: number, BIAS: number, BIAS_SIGMA: number, CORRELATION_TIME_SECONDS: number, MINIMUM_ACCEPTED_VALUE: number, MAXIMUM_ACCEPTED_VALUE: number, SIGMA_EDIT_THRESHOLD: number, ACCEPT_START_EPOCHOffset: flatbuffers.Offset, ACCEPT_STOP_EPOCHOffset: flatbuffers.Offset, TROPOSPHERE_MODEL: memTroposphereModel, IONOSPHERE_MODEL: memIonosphereModel, APPLY_LIGHT_TIME: boolean, APPLY_BODY_ROTATION: boolean): flatbuffers.Offset;
    unpack(): MEMErrorModelT;
    unpackTo(_o: MEMErrorModelT): void;
}
export declare class MEMErrorModelT implements flatbuffers.IGeneratedObject {
    MODEL_ID: string | Uint8Array | null;
    MEASUREMENT_TYPE: memMeasurementType;
    NOISE_SIGMA: number;
    BIAS: number;
    BIAS_SIGMA: number;
    CORRELATION_TIME_SECONDS: number;
    MINIMUM_ACCEPTED_VALUE: number;
    MAXIMUM_ACCEPTED_VALUE: number;
    SIGMA_EDIT_THRESHOLD: number;
    ACCEPT_START_EPOCH: string | Uint8Array | null;
    ACCEPT_STOP_EPOCH: string | Uint8Array | null;
    TROPOSPHERE_MODEL: memTroposphereModel;
    IONOSPHERE_MODEL: memIonosphereModel;
    APPLY_LIGHT_TIME: boolean;
    APPLY_BODY_ROTATION: boolean;
    constructor(MODEL_ID?: string | Uint8Array | null, MEASUREMENT_TYPE?: memMeasurementType, NOISE_SIGMA?: number, BIAS?: number, BIAS_SIGMA?: number, CORRELATION_TIME_SECONDS?: number, MINIMUM_ACCEPTED_VALUE?: number, MAXIMUM_ACCEPTED_VALUE?: number, SIGMA_EDIT_THRESHOLD?: number, ACCEPT_START_EPOCH?: string | Uint8Array | null, ACCEPT_STOP_EPOCH?: string | Uint8Array | null, TROPOSPHERE_MODEL?: memTroposphereModel, IONOSPHERE_MODEL?: memIonosphereModel, APPLY_LIGHT_TIME?: boolean, APPLY_BODY_ROTATION?: boolean);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=MEMErrorModel.d.ts.map