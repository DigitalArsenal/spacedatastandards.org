import * as flatbuffers from 'flatbuffers';
import { FRMStateVector, FRMStateVectorT } from './FRMStateVector.js';
import { ODRAttestation, ODRAttestationT } from './ODRAttestation.js';
import { ODREditedObservation, ODREditedObservationT } from './ODREditedObservation.js';
import { ODREstimatedParameter, ODREstimatedParameterT } from './ODREstimatedParameter.js';
import { ODRFilterEpoch, ODRFilterEpochT } from './ODRFilterEpoch.js';
import { ODRIterationStatistics, ODRIterationStatisticsT } from './ODRIterationStatistics.js';
import { ODRSolverConfiguration, ODRSolverConfigurationT } from './ODRSolverConfiguration.js';
import { odrConvergenceReason } from './odrConvergenceReason.js';
/**
 * Estimation Run Report. This is the canonical estimation-family result
 * model. STATE_COVARIANCE is row-major with COVARIANCE_DIMENSION squared
 * entries and is also published as the $OCM named by OCM_CONTENT_ID. The
 * estimator report never substitutes a propagator name for its input port.
 */
export declare class ODR implements flatbuffers.IUnpackableObject<ODRT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): ODR;
    static getRootAsODR(bb: flatbuffers.ByteBuffer, obj?: ODR): ODR;
    static getSizePrefixedRootAsODR(bb: flatbuffers.ByteBuffer, obj?: ODR): ODR;
    static bufferHasIdentifier(bb: flatbuffers.ByteBuffer): boolean;
    RUN_ID(): string;
    RUN_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    STARTED_AT(): string | null;
    STARTED_AT(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    COMPLETED_AT(): string | null;
    COMPLETED_AT(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    CONFIGURATION(obj?: ODRSolverConfiguration): ODRSolverConfiguration | null;
    CONVERGENCE_REASON(): odrConvergenceReason;
    ITERATIONS(index: number, obj?: ODRIterationStatistics): ODRIterationStatistics | null;
    iterationsLength(): number;
    EDITED_OBSERVATIONS(index: number, obj?: ODREditedObservation): ODREditedObservation | null;
    editedObservationsLength(): number;
    ESTIMATED_PARAMETERS(index: number, obj?: ODREstimatedParameter): ODREstimatedParameter | null;
    estimatedParametersLength(): number;
    ESTIMATED_EPOCH_STATE(obj?: FRMStateVector): FRMStateVector | null;
    COVARIANCE_DIMENSION(): number;
    STATE_COVARIANCE(index: number): number | null;
    stateCovarianceLength(): number;
    stateCovarianceArray(): Float64Array | null;
    OCM_CONTENT_ID(): string;
    OCM_CONTENT_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    FILTER_HISTORY(index: number, obj?: ODRFilterEpoch): ODRFilterEpoch | null;
    filterHistoryLength(): number;
    RESIDUAL_RMS(): number;
    TRACE_ID(): string | null;
    TRACE_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    ATTESTATION(obj?: ODRAttestation): ODRAttestation | null;
    static startODR(builder: flatbuffers.Builder): void;
    static addRunId(builder: flatbuffers.Builder, RUN_IDOffset: flatbuffers.Offset): void;
    static addStartedAt(builder: flatbuffers.Builder, STARTED_ATOffset: flatbuffers.Offset): void;
    static addCompletedAt(builder: flatbuffers.Builder, COMPLETED_ATOffset: flatbuffers.Offset): void;
    static addConfiguration(builder: flatbuffers.Builder, CONFIGURATIONOffset: flatbuffers.Offset): void;
    static addConvergenceReason(builder: flatbuffers.Builder, CONVERGENCE_REASON: odrConvergenceReason): void;
    static addIterations(builder: flatbuffers.Builder, ITERATIONSOffset: flatbuffers.Offset): void;
    static createIterationsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startIterationsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addEditedObservations(builder: flatbuffers.Builder, EDITED_OBSERVATIONSOffset: flatbuffers.Offset): void;
    static createEditedObservationsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startEditedObservationsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addEstimatedParameters(builder: flatbuffers.Builder, ESTIMATED_PARAMETERSOffset: flatbuffers.Offset): void;
    static createEstimatedParametersVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startEstimatedParametersVector(builder: flatbuffers.Builder, numElems: number): void;
    static addEstimatedEpochState(builder: flatbuffers.Builder, ESTIMATED_EPOCH_STATEOffset: flatbuffers.Offset): void;
    static addCovarianceDimension(builder: flatbuffers.Builder, COVARIANCE_DIMENSION: number): void;
    static addStateCovariance(builder: flatbuffers.Builder, STATE_COVARIANCEOffset: flatbuffers.Offset): void;
    static createStateCovarianceVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createStateCovarianceVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startStateCovarianceVector(builder: flatbuffers.Builder, numElems: number): void;
    static addOcmContentId(builder: flatbuffers.Builder, OCM_CONTENT_IDOffset: flatbuffers.Offset): void;
    static addFilterHistory(builder: flatbuffers.Builder, FILTER_HISTORYOffset: flatbuffers.Offset): void;
    static createFilterHistoryVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startFilterHistoryVector(builder: flatbuffers.Builder, numElems: number): void;
    static addResidualRms(builder: flatbuffers.Builder, RESIDUAL_RMS: number): void;
    static addTraceId(builder: flatbuffers.Builder, TRACE_IDOffset: flatbuffers.Offset): void;
    static addAttestation(builder: flatbuffers.Builder, ATTESTATIONOffset: flatbuffers.Offset): void;
    static endODR(builder: flatbuffers.Builder): flatbuffers.Offset;
    static finishODRBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static finishSizePrefixedODRBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    unpack(): ODRT;
    unpackTo(_o: ODRT): void;
}
export declare class ODRT implements flatbuffers.IGeneratedObject {
    RUN_ID: string | Uint8Array | null;
    STARTED_AT: string | Uint8Array | null;
    COMPLETED_AT: string | Uint8Array | null;
    CONFIGURATION: ODRSolverConfigurationT | null;
    CONVERGENCE_REASON: odrConvergenceReason;
    ITERATIONS: (ODRIterationStatisticsT)[];
    EDITED_OBSERVATIONS: (ODREditedObservationT)[];
    ESTIMATED_PARAMETERS: (ODREstimatedParameterT)[];
    ESTIMATED_EPOCH_STATE: FRMStateVectorT | null;
    COVARIANCE_DIMENSION: number;
    STATE_COVARIANCE: (number)[];
    OCM_CONTENT_ID: string | Uint8Array | null;
    FILTER_HISTORY: (ODRFilterEpochT)[];
    RESIDUAL_RMS: number;
    TRACE_ID: string | Uint8Array | null;
    ATTESTATION: ODRAttestationT | null;
    constructor(RUN_ID?: string | Uint8Array | null, STARTED_AT?: string | Uint8Array | null, COMPLETED_AT?: string | Uint8Array | null, CONFIGURATION?: ODRSolverConfigurationT | null, CONVERGENCE_REASON?: odrConvergenceReason, ITERATIONS?: (ODRIterationStatisticsT)[], EDITED_OBSERVATIONS?: (ODREditedObservationT)[], ESTIMATED_PARAMETERS?: (ODREstimatedParameterT)[], ESTIMATED_EPOCH_STATE?: FRMStateVectorT | null, COVARIANCE_DIMENSION?: number, STATE_COVARIANCE?: (number)[], OCM_CONTENT_ID?: string | Uint8Array | null, FILTER_HISTORY?: (ODRFilterEpochT)[], RESIDUAL_RMS?: number, TRACE_ID?: string | Uint8Array | null, ATTESTATION?: ODRAttestationT | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=ODR.d.ts.map