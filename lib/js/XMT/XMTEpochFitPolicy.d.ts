import * as flatbuffers from 'flatbuffers';
import { PRWForceConfiguration, PRWForceConfigurationT } from './PRWForceConfiguration.js';
import { PRWIntegratorSettings, PRWIntegratorSettingsT } from './PRWIntegratorSettings.js';
/**
 * Policy of an epoch-state fit to a provider ephemeris, validated on
 * held-out samples.
 */
export declare class XMTEpochFitPolicy implements flatbuffers.IUnpackableObject<XMTEpochFitPolicyT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): XMTEpochFitPolicy;
    static getRootAsXMTEpochFitPolicy(bb: flatbuffers.ByteBuffer, obj?: XMTEpochFitPolicy): XMTEpochFitPolicy;
    static getSizePrefixedRootAsXMTEpochFitPolicy(bb: flatbuffers.ByteBuffer, obj?: XMTEpochFitPolicy): XMTEpochFitPolicy;
    /**
     * Propagator module identifier, e.g. "com.orbpro.ffm".
     */
    PROPAGATOR_ID(): string | null;
    PROPAGATOR_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * SHA-256 hex digest of the propagator artifact.
     */
    PROPAGATOR_ARTIFACT_SHA256(): string | null;
    PROPAGATOR_ARTIFACT_SHA256(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Force model the trajectories were propagated with.
     */
    FORCE_MODEL(obj?: PRWForceConfiguration): PRWForceConfiguration | null;
    /**
     * Integrator settings, when stated.
     */
    INTEGRATOR(obj?: PRWIntegratorSettings): PRWIntegratorSettings | null;
    /**
     * Known limitations of the force model (human-readable).
     */
    FORCE_MODEL_LIMITATION(): string | null;
    FORCE_MODEL_LIMITATION(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Immutable reference to the frame transformation used.
     */
    FRAME_TRANSFORMATION_REF(): string | null;
    FRAME_TRANSFORMATION_REF(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Every HOLDOUT_STRIDE-th sample is held out, 2 to 8.
     */
    HOLDOUT_STRIDE(): number;
    /**
     * Maximum training and held-out residual for Validated, km.
     */
    POSITION_TOLERANCE_KM(): number;
    /**
     * Held-out RMS above this rejects the fit, km; NaN = no limit.
     */
    MAXIMUM_HOLDOUT_RMS_KM(): number;
    /**
     * Finite-difference perturbation of the position, km (fit step).
     */
    POSITION_PERTURBATION_KM(): number;
    /**
     * Finite-difference perturbation of the velocity, km/s (fit step).
     */
    VELOCITY_PERTURBATION_KM_S(): number;
    /**
     * Position residual weight (one sigma), km (fit step).
     */
    POSITION_WEIGHT_KM(): number;
    /**
     * Position regularization (prior sigma), km (fit step).
     */
    POSITION_REGULARIZATION_KM(): number;
    /**
     * Velocity regularization (prior sigma), km/s (fit step).
     */
    VELOCITY_REGULARIZATION_KM_S(): number;
    static startXMTEpochFitPolicy(builder: flatbuffers.Builder): void;
    static addPropagatorId(builder: flatbuffers.Builder, PROPAGATOR_IDOffset: flatbuffers.Offset): void;
    static addPropagatorArtifactSha256(builder: flatbuffers.Builder, PROPAGATOR_ARTIFACT_SHA256Offset: flatbuffers.Offset): void;
    static addForceModel(builder: flatbuffers.Builder, FORCE_MODELOffset: flatbuffers.Offset): void;
    static addIntegrator(builder: flatbuffers.Builder, INTEGRATOROffset: flatbuffers.Offset): void;
    static addForceModelLimitation(builder: flatbuffers.Builder, FORCE_MODEL_LIMITATIONOffset: flatbuffers.Offset): void;
    static addFrameTransformationRef(builder: flatbuffers.Builder, FRAME_TRANSFORMATION_REFOffset: flatbuffers.Offset): void;
    static addHoldoutStride(builder: flatbuffers.Builder, HOLDOUT_STRIDE: number): void;
    static addPositionToleranceKm(builder: flatbuffers.Builder, POSITION_TOLERANCE_KM: number): void;
    static addMaximumHoldoutRmsKm(builder: flatbuffers.Builder, MAXIMUM_HOLDOUT_RMS_KM: number): void;
    static addPositionPerturbationKm(builder: flatbuffers.Builder, POSITION_PERTURBATION_KM: number): void;
    static addVelocityPerturbationKmS(builder: flatbuffers.Builder, VELOCITY_PERTURBATION_KM_S: number): void;
    static addPositionWeightKm(builder: flatbuffers.Builder, POSITION_WEIGHT_KM: number): void;
    static addPositionRegularizationKm(builder: flatbuffers.Builder, POSITION_REGULARIZATION_KM: number): void;
    static addVelocityRegularizationKmS(builder: flatbuffers.Builder, VELOCITY_REGULARIZATION_KM_S: number): void;
    static endXMTEpochFitPolicy(builder: flatbuffers.Builder): flatbuffers.Offset;
    unpack(): XMTEpochFitPolicyT;
    unpackTo(_o: XMTEpochFitPolicyT): void;
}
export declare class XMTEpochFitPolicyT implements flatbuffers.IGeneratedObject {
    PROPAGATOR_ID: string | Uint8Array | null;
    PROPAGATOR_ARTIFACT_SHA256: string | Uint8Array | null;
    FORCE_MODEL: PRWForceConfigurationT | null;
    INTEGRATOR: PRWIntegratorSettingsT | null;
    FORCE_MODEL_LIMITATION: string | Uint8Array | null;
    FRAME_TRANSFORMATION_REF: string | Uint8Array | null;
    HOLDOUT_STRIDE: number;
    POSITION_TOLERANCE_KM: number;
    MAXIMUM_HOLDOUT_RMS_KM: number;
    POSITION_PERTURBATION_KM: number;
    VELOCITY_PERTURBATION_KM_S: number;
    POSITION_WEIGHT_KM: number;
    POSITION_REGULARIZATION_KM: number;
    VELOCITY_REGULARIZATION_KM_S: number;
    constructor(PROPAGATOR_ID?: string | Uint8Array | null, PROPAGATOR_ARTIFACT_SHA256?: string | Uint8Array | null, FORCE_MODEL?: PRWForceConfigurationT | null, INTEGRATOR?: PRWIntegratorSettingsT | null, FORCE_MODEL_LIMITATION?: string | Uint8Array | null, FRAME_TRANSFORMATION_REF?: string | Uint8Array | null, HOLDOUT_STRIDE?: number, POSITION_TOLERANCE_KM?: number, MAXIMUM_HOLDOUT_RMS_KM?: number, POSITION_PERTURBATION_KM?: number, VELOCITY_PERTURBATION_KM_S?: number, POSITION_WEIGHT_KM?: number, POSITION_REGULARIZATION_KM?: number, VELOCITY_REGULARIZATION_KM_S?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=XMTEpochFitPolicy.d.ts.map