import * as flatbuffers from 'flatbuffers';
import { memMeasurementType } from './memMeasurementType.js';
/**
 * One observation the estimator read: the editing record, then the columns of
 * a per-input residual listing (P9), one entry per input the fit read, accepted
 * or not. OBSERVATION_ID is the input identifier; the residual is
 * OBSERVED_VALUE - COMPUTED_VALUE.
 */
export declare class ODREditedObservation implements flatbuffers.IUnpackableObject<ODREditedObservationT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): ODREditedObservation;
    static getRootAsODREditedObservation(bb: flatbuffers.ByteBuffer, obj?: ODREditedObservation): ODREditedObservation;
    static getSizePrefixedRootAsODREditedObservation(bb: flatbuffers.ByteBuffer, obj?: ODREditedObservation): ODREditedObservation;
    OBSERVATION_ID(): string;
    OBSERVATION_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    ITERATION(): number;
    PREFIT_RESIDUAL(): number;
    NORMALIZED_RESIDUAL(): number;
    REASON(): string | null;
    REASON(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Epoch of the observation (ISO 8601 UTC).
     */
    EPOCH(): string | null;
    EPOCH(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Measurement class of the observation.
     */
    OBSERVATION_TYPE(): memMeasurementType;
    /**
     * The observation as measured, in the unit of its class: km, km/s or deg.
     */
    OBSERVED_VALUE(): number;
    /**
     * The same quantity computed from the solution at EPOCH, in the same unit.
     */
    COMPUTED_VALUE(): number;
    /**
     * Weight the fit gave the observation in its normal equations; 0 when it gave none.
     */
    WEIGHT(): number;
    /**
     * True when the observation entered the solution; false when the fit edited it out (REASON says why).
     */
    ACCEPTED(): boolean;
    /**
     * Code of the perturbation model COMPUTED_VALUE was computed under, as the listing prints it.
     */
    PERTURBATION_MODEL_CODE(): string | null;
    PERTURBATION_MODEL_CODE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    static startODREditedObservation(builder: flatbuffers.Builder): void;
    static addObservationId(builder: flatbuffers.Builder, OBSERVATION_IDOffset: flatbuffers.Offset): void;
    static addIteration(builder: flatbuffers.Builder, ITERATION: number): void;
    static addPrefitResidual(builder: flatbuffers.Builder, PREFIT_RESIDUAL: number): void;
    static addNormalizedResidual(builder: flatbuffers.Builder, NORMALIZED_RESIDUAL: number): void;
    static addReason(builder: flatbuffers.Builder, REASONOffset: flatbuffers.Offset): void;
    static addEpoch(builder: flatbuffers.Builder, EPOCHOffset: flatbuffers.Offset): void;
    static addObservationType(builder: flatbuffers.Builder, OBSERVATION_TYPE: memMeasurementType): void;
    static addObservedValue(builder: flatbuffers.Builder, OBSERVED_VALUE: number): void;
    static addComputedValue(builder: flatbuffers.Builder, COMPUTED_VALUE: number): void;
    static addWeight(builder: flatbuffers.Builder, WEIGHT: number): void;
    static addAccepted(builder: flatbuffers.Builder, ACCEPTED: boolean): void;
    static addPerturbationModelCode(builder: flatbuffers.Builder, PERTURBATION_MODEL_CODEOffset: flatbuffers.Offset): void;
    static endODREditedObservation(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createODREditedObservation(builder: flatbuffers.Builder, OBSERVATION_IDOffset: flatbuffers.Offset, ITERATION: number, PREFIT_RESIDUAL: number, NORMALIZED_RESIDUAL: number, REASONOffset: flatbuffers.Offset, EPOCHOffset: flatbuffers.Offset, OBSERVATION_TYPE: memMeasurementType, OBSERVED_VALUE: number, COMPUTED_VALUE: number, WEIGHT: number, ACCEPTED: boolean, PERTURBATION_MODEL_CODEOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): ODREditedObservationT;
    unpackTo(_o: ODREditedObservationT): void;
}
export declare class ODREditedObservationT implements flatbuffers.IGeneratedObject {
    OBSERVATION_ID: string | Uint8Array | null;
    ITERATION: number;
    PREFIT_RESIDUAL: number;
    NORMALIZED_RESIDUAL: number;
    REASON: string | Uint8Array | null;
    EPOCH: string | Uint8Array | null;
    OBSERVATION_TYPE: memMeasurementType;
    OBSERVED_VALUE: number;
    COMPUTED_VALUE: number;
    WEIGHT: number;
    ACCEPTED: boolean;
    PERTURBATION_MODEL_CODE: string | Uint8Array | null;
    constructor(OBSERVATION_ID?: string | Uint8Array | null, ITERATION?: number, PREFIT_RESIDUAL?: number, NORMALIZED_RESIDUAL?: number, REASON?: string | Uint8Array | null, EPOCH?: string | Uint8Array | null, OBSERVATION_TYPE?: memMeasurementType, OBSERVED_VALUE?: number, COMPUTED_VALUE?: number, WEIGHT?: number, ACCEPTED?: boolean, PERTURBATION_MODEL_CODE?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=ODREditedObservation.d.ts.map