import * as flatbuffers from 'flatbuffers';
import { odrEstimatorKind } from './odrEstimatorKind.js';
import { odrProcessNoiseKind } from './odrProcessNoiseKind.js';
export declare class ODRSolverConfiguration implements flatbuffers.IUnpackableObject<ODRSolverConfigurationT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): ODRSolverConfiguration;
    static getRootAsODRSolverConfiguration(bb: flatbuffers.ByteBuffer, obj?: ODRSolverConfiguration): ODRSolverConfiguration;
    static getSizePrefixedRootAsODRSolverConfiguration(bb: flatbuffers.ByteBuffer, obj?: ODRSolverConfiguration): ODRSolverConfiguration;
    ESTIMATOR(): odrEstimatorKind;
    MAXIMUM_ITERATIONS(): number;
    STATE_CONVERGENCE_TOLERANCE(): number;
    RMS_CONVERGENCE_TOLERANCE(): number;
    SIGMA_EDIT_THRESHOLD(): number;
    PROCESS_NOISE(): odrProcessNoiseKind;
    PROCESS_NOISE_SPECTRAL_DENSITY(index: number): number | null;
    processNoiseSpectralDensityLength(): number;
    processNoiseSpectralDensityArray(): Float64Array | null;
    DYNAMIC_MODEL_CORRELATION_TIME_SECONDS(): number;
    PROPAGATOR_PORT_ID(): string;
    PROPAGATOR_PORT_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    PROPAGATOR_CAPABILITY(): string;
    PROPAGATOR_CAPABILITY(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    static startODRSolverConfiguration(builder: flatbuffers.Builder): void;
    static addEstimator(builder: flatbuffers.Builder, ESTIMATOR: odrEstimatorKind): void;
    static addMaximumIterations(builder: flatbuffers.Builder, MAXIMUM_ITERATIONS: number): void;
    static addStateConvergenceTolerance(builder: flatbuffers.Builder, STATE_CONVERGENCE_TOLERANCE: number): void;
    static addRmsConvergenceTolerance(builder: flatbuffers.Builder, RMS_CONVERGENCE_TOLERANCE: number): void;
    static addSigmaEditThreshold(builder: flatbuffers.Builder, SIGMA_EDIT_THRESHOLD: number): void;
    static addProcessNoise(builder: flatbuffers.Builder, PROCESS_NOISE: odrProcessNoiseKind): void;
    static addProcessNoiseSpectralDensity(builder: flatbuffers.Builder, PROCESS_NOISE_SPECTRAL_DENSITYOffset: flatbuffers.Offset): void;
    static createProcessNoiseSpectralDensityVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createProcessNoiseSpectralDensityVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startProcessNoiseSpectralDensityVector(builder: flatbuffers.Builder, numElems: number): void;
    static addDynamicModelCorrelationTimeSeconds(builder: flatbuffers.Builder, DYNAMIC_MODEL_CORRELATION_TIME_SECONDS: number): void;
    static addPropagatorPortId(builder: flatbuffers.Builder, PROPAGATOR_PORT_IDOffset: flatbuffers.Offset): void;
    static addPropagatorCapability(builder: flatbuffers.Builder, PROPAGATOR_CAPABILITYOffset: flatbuffers.Offset): void;
    static endODRSolverConfiguration(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createODRSolverConfiguration(builder: flatbuffers.Builder, ESTIMATOR: odrEstimatorKind, MAXIMUM_ITERATIONS: number, STATE_CONVERGENCE_TOLERANCE: number, RMS_CONVERGENCE_TOLERANCE: number, SIGMA_EDIT_THRESHOLD: number, PROCESS_NOISE: odrProcessNoiseKind, PROCESS_NOISE_SPECTRAL_DENSITYOffset: flatbuffers.Offset, DYNAMIC_MODEL_CORRELATION_TIME_SECONDS: number, PROPAGATOR_PORT_IDOffset: flatbuffers.Offset, PROPAGATOR_CAPABILITYOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): ODRSolverConfigurationT;
    unpackTo(_o: ODRSolverConfigurationT): void;
}
export declare class ODRSolverConfigurationT implements flatbuffers.IGeneratedObject {
    ESTIMATOR: odrEstimatorKind;
    MAXIMUM_ITERATIONS: number;
    STATE_CONVERGENCE_TOLERANCE: number;
    RMS_CONVERGENCE_TOLERANCE: number;
    SIGMA_EDIT_THRESHOLD: number;
    PROCESS_NOISE: odrProcessNoiseKind;
    PROCESS_NOISE_SPECTRAL_DENSITY: (number)[];
    DYNAMIC_MODEL_CORRELATION_TIME_SECONDS: number;
    PROPAGATOR_PORT_ID: string | Uint8Array | null;
    PROPAGATOR_CAPABILITY: string | Uint8Array | null;
    constructor(ESTIMATOR?: odrEstimatorKind, MAXIMUM_ITERATIONS?: number, STATE_CONVERGENCE_TOLERANCE?: number, RMS_CONVERGENCE_TOLERANCE?: number, SIGMA_EDIT_THRESHOLD?: number, PROCESS_NOISE?: odrProcessNoiseKind, PROCESS_NOISE_SPECTRAL_DENSITY?: (number)[], DYNAMIC_MODEL_CORRELATION_TIME_SECONDS?: number, PROPAGATOR_PORT_ID?: string | Uint8Array | null, PROPAGATOR_CAPABILITY?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=ODRSolverConfiguration.d.ts.map