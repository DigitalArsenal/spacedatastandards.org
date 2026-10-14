import * as flatbuffers from 'flatbuffers';
import { ASGCandidate, ASGCandidateT } from './ASGCandidate.js';
import { ASGMeasurement, ASGMeasurementT } from './ASGMeasurement.js';
import { asgAssociationOutcome } from './asgAssociationOutcome.js';
import { asgUncorrelatedReason } from './asgUncorrelatedReason.js';
/**
 * One observation and its association.
 */
export declare class ASGObservation implements flatbuffers.IUnpackableObject<ASGObservationT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): ASGObservation;
    static getRootAsASGObservation(bb: flatbuffers.ByteBuffer, obj?: ASGObservation): ASGObservation;
    static getSizePrefixedRootAsASGObservation(bb: flatbuffers.ByteBuffer, obj?: ASGObservation): ASGObservation;
    /**
     * Position of the observation in the input, 0-based.
     */
    INDEX(): number;
    /**
     * Standard of the observation record, as its code, e.g. "RDO", "EOO",
     * "RFO".
     */
    RECORD_TYPE(): string | null;
    RECORD_TYPE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * The record's identifier.
     */
    ID(): string | null;
    ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Observation time, UTC, ISO 8601 as the record states it.
     */
    TIME(): string | null;
    TIME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Sensor identifier (the record's sensor or original sensor id).
     */
    SENSOR(): string | null;
    SENSOR(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Track identifier from the record; empty = none.
     */
    TRACK_ID(): string | null;
    TRACK_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * The measured quantities, in the order every candidate's RESIDUAL and
     * PREDICTED follow.
     */
    MEASUREMENTS(index: number, obj?: ASGMeasurement): ASGMeasurement | null;
    measurementsLength(): number;
    /**
     * Degrees of freedom of the test (the number of MEASUREMENTS).
     */
    DEGREES_OF_FREEDOM(): number;
    /**
     * Gate threshold on D2 for this observation.
     */
    GATE(): number;
    OUTCOME(): asgAssociationOutcome;
    REASON(): asgUncorrelatedReason;
    /**
     * True when the judged candidate's posterior is under the minimum
     * posterior, or the assignment gave the observation other than its best
     * candidate.
     */
    AMBIGUOUS(): boolean;
    /**
     * True when the assignment gave the observation other than its best
     * in-gate candidate.
     */
    ASSIGNMENT_CONFLICT(): boolean;
    /**
     * Candidates by increasing D2: the best few plus every in-gate one. The
     * first is the nearest (the one a UCT report names).
     */
    CANDIDATES(index: number, obj?: ASGCandidate): ASGCandidate | null;
    candidatesLength(): number;
    /**
     * Index into CANDIDATES of the assigned object; -1 = uncorrelated.
     */
    ASSIGNED_CANDIDATE(): number;
    /**
     * Sensor position at the observation time, GCRF, km (3 values).
     */
    SENSOR_POSITION_GCRF_KM(index: number): number | null;
    sensorPositionGcrfKmLength(): number;
    sensorPositionGcrfKmArray(): Float64Array | null;
    /**
     * Sensor velocity, GCRF, km/s (3 values) for an Earth-fixed sensor; empty
     * for an inertial sensor position, which carries no velocity.
     */
    SENSOR_VELOCITY_GCRF_KM_S(index: number): number | null;
    sensorVelocityGcrfKmSLength(): number;
    sensorVelocityGcrfKmSArray(): Float64Array | null;
    /**
     * Unit line of sight from the sensor, GCRF (3 values); empty when the
     * observation has no direction.
     */
    LINE_OF_SIGHT_GCRF(index: number): number | null;
    lineOfSightGcrfLength(): number;
    lineOfSightGcrfArray(): Float64Array | null;
    static startASGObservation(builder: flatbuffers.Builder): void;
    static addIndex(builder: flatbuffers.Builder, INDEX: number): void;
    static addRecordType(builder: flatbuffers.Builder, RECORD_TYPEOffset: flatbuffers.Offset): void;
    static addId(builder: flatbuffers.Builder, IDOffset: flatbuffers.Offset): void;
    static addTime(builder: flatbuffers.Builder, TIMEOffset: flatbuffers.Offset): void;
    static addSensor(builder: flatbuffers.Builder, SENSOROffset: flatbuffers.Offset): void;
    static addTrackId(builder: flatbuffers.Builder, TRACK_IDOffset: flatbuffers.Offset): void;
    static addMeasurements(builder: flatbuffers.Builder, MEASUREMENTSOffset: flatbuffers.Offset): void;
    static createMeasurementsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startMeasurementsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addDegreesOfFreedom(builder: flatbuffers.Builder, DEGREES_OF_FREEDOM: number): void;
    static addGate(builder: flatbuffers.Builder, GATE: number): void;
    static addOutcome(builder: flatbuffers.Builder, OUTCOME: asgAssociationOutcome): void;
    static addReason(builder: flatbuffers.Builder, REASON: asgUncorrelatedReason): void;
    static addAmbiguous(builder: flatbuffers.Builder, AMBIGUOUS: boolean): void;
    static addAssignmentConflict(builder: flatbuffers.Builder, ASSIGNMENT_CONFLICT: boolean): void;
    static addCandidates(builder: flatbuffers.Builder, CANDIDATESOffset: flatbuffers.Offset): void;
    static createCandidatesVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startCandidatesVector(builder: flatbuffers.Builder, numElems: number): void;
    static addAssignedCandidate(builder: flatbuffers.Builder, ASSIGNED_CANDIDATE: number): void;
    static addSensorPositionGcrfKm(builder: flatbuffers.Builder, SENSOR_POSITION_GCRF_KMOffset: flatbuffers.Offset): void;
    static createSensorPositionGcrfKmVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createSensorPositionGcrfKmVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startSensorPositionGcrfKmVector(builder: flatbuffers.Builder, numElems: number): void;
    static addSensorVelocityGcrfKmS(builder: flatbuffers.Builder, SENSOR_VELOCITY_GCRF_KM_SOffset: flatbuffers.Offset): void;
    static createSensorVelocityGcrfKmSVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createSensorVelocityGcrfKmSVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startSensorVelocityGcrfKmSVector(builder: flatbuffers.Builder, numElems: number): void;
    static addLineOfSightGcrf(builder: flatbuffers.Builder, LINE_OF_SIGHT_GCRFOffset: flatbuffers.Offset): void;
    static createLineOfSightGcrfVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createLineOfSightGcrfVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startLineOfSightGcrfVector(builder: flatbuffers.Builder, numElems: number): void;
    static endASGObservation(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createASGObservation(builder: flatbuffers.Builder, INDEX: number, RECORD_TYPEOffset: flatbuffers.Offset, IDOffset: flatbuffers.Offset, TIMEOffset: flatbuffers.Offset, SENSOROffset: flatbuffers.Offset, TRACK_IDOffset: flatbuffers.Offset, MEASUREMENTSOffset: flatbuffers.Offset, DEGREES_OF_FREEDOM: number, GATE: number, OUTCOME: asgAssociationOutcome, REASON: asgUncorrelatedReason, AMBIGUOUS: boolean, ASSIGNMENT_CONFLICT: boolean, CANDIDATESOffset: flatbuffers.Offset, ASSIGNED_CANDIDATE: number, SENSOR_POSITION_GCRF_KMOffset: flatbuffers.Offset, SENSOR_VELOCITY_GCRF_KM_SOffset: flatbuffers.Offset, LINE_OF_SIGHT_GCRFOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): ASGObservationT;
    unpackTo(_o: ASGObservationT): void;
}
export declare class ASGObservationT implements flatbuffers.IGeneratedObject {
    INDEX: number;
    RECORD_TYPE: string | Uint8Array | null;
    ID: string | Uint8Array | null;
    TIME: string | Uint8Array | null;
    SENSOR: string | Uint8Array | null;
    TRACK_ID: string | Uint8Array | null;
    MEASUREMENTS: (ASGMeasurementT)[];
    DEGREES_OF_FREEDOM: number;
    GATE: number;
    OUTCOME: asgAssociationOutcome;
    REASON: asgUncorrelatedReason;
    AMBIGUOUS: boolean;
    ASSIGNMENT_CONFLICT: boolean;
    CANDIDATES: (ASGCandidateT)[];
    ASSIGNED_CANDIDATE: number;
    SENSOR_POSITION_GCRF_KM: (number)[];
    SENSOR_VELOCITY_GCRF_KM_S: (number)[];
    LINE_OF_SIGHT_GCRF: (number)[];
    constructor(INDEX?: number, RECORD_TYPE?: string | Uint8Array | null, ID?: string | Uint8Array | null, TIME?: string | Uint8Array | null, SENSOR?: string | Uint8Array | null, TRACK_ID?: string | Uint8Array | null, MEASUREMENTS?: (ASGMeasurementT)[], DEGREES_OF_FREEDOM?: number, GATE?: number, OUTCOME?: asgAssociationOutcome, REASON?: asgUncorrelatedReason, AMBIGUOUS?: boolean, ASSIGNMENT_CONFLICT?: boolean, CANDIDATES?: (ASGCandidateT)[], ASSIGNED_CANDIDATE?: number, SENSOR_POSITION_GCRF_KM?: (number)[], SENSOR_VELOCITY_GCRF_KM_S?: (number)[], LINE_OF_SIGHT_GCRF?: (number)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=ASGObservation.d.ts.map