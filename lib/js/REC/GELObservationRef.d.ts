import * as flatbuffers from 'flatbuffers';
import { gelObservationDisposition } from './gelObservationDisposition.js';
/**
 * Trace from a solution row back to one `$DOA` observation or `$IQC` capture.
 */
export declare class GELObservationRef implements flatbuffers.IUnpackableObject<GELObservationRefT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): GELObservationRef;
    static getRootAsGELObservationRef(bb: flatbuffers.ByteBuffer, obj?: GELObservationRef): GELObservationRef;
    static getSizePrefixedRootAsGELObservationRef(bb: flatbuffers.ByteBuffer, obj?: GELObservationRef): GELObservationRef;
    OBSERVATION_INDEX(): number;
    /**
     * At least one of DOA_ID or IQC_ID is required. When both are present, the
     * `$DOA` observation must have been derived from the named `$IQC` capture.
     */
    DOA_ID(): string | null;
    DOA_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    IQC_ID(): string | null;
    IQC_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    COLLECTOR_ID(): string | null;
    COLLECTOR_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    EPOCH(): number;
    TIME_DIFFERENCE_RESIDUAL_S(): number;
    FREQUENCY_DIFFERENCE_RESIDUAL_HZ(): number;
    ANGULAR_RESIDUAL_DEG(): number;
    WEIGHT(): number;
    DISPOSITION(): gelObservationDisposition;
    REJECTION_REASON(): string | null;
    REJECTION_REASON(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    static startGELObservationRef(builder: flatbuffers.Builder): void;
    static addObservationIndex(builder: flatbuffers.Builder, OBSERVATION_INDEX: number): void;
    static addDoaId(builder: flatbuffers.Builder, DOA_IDOffset: flatbuffers.Offset): void;
    static addIqcId(builder: flatbuffers.Builder, IQC_IDOffset: flatbuffers.Offset): void;
    static addCollectorId(builder: flatbuffers.Builder, COLLECTOR_IDOffset: flatbuffers.Offset): void;
    static addEpoch(builder: flatbuffers.Builder, EPOCH: number): void;
    static addTimeDifferenceResidualS(builder: flatbuffers.Builder, TIME_DIFFERENCE_RESIDUAL_S: number): void;
    static addFrequencyDifferenceResidualHz(builder: flatbuffers.Builder, FREQUENCY_DIFFERENCE_RESIDUAL_HZ: number): void;
    static addAngularResidualDeg(builder: flatbuffers.Builder, ANGULAR_RESIDUAL_DEG: number): void;
    static addWeight(builder: flatbuffers.Builder, WEIGHT: number): void;
    static addDisposition(builder: flatbuffers.Builder, DISPOSITION: gelObservationDisposition): void;
    static addRejectionReason(builder: flatbuffers.Builder, REJECTION_REASONOffset: flatbuffers.Offset): void;
    static endGELObservationRef(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createGELObservationRef(builder: flatbuffers.Builder, OBSERVATION_INDEX: number, DOA_IDOffset: flatbuffers.Offset, IQC_IDOffset: flatbuffers.Offset, COLLECTOR_IDOffset: flatbuffers.Offset, EPOCH: number, TIME_DIFFERENCE_RESIDUAL_S: number, FREQUENCY_DIFFERENCE_RESIDUAL_HZ: number, ANGULAR_RESIDUAL_DEG: number, WEIGHT: number, DISPOSITION: gelObservationDisposition, REJECTION_REASONOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): GELObservationRefT;
    unpackTo(_o: GELObservationRefT): void;
}
export declare class GELObservationRefT implements flatbuffers.IGeneratedObject {
    OBSERVATION_INDEX: number;
    DOA_ID: string | Uint8Array | null;
    IQC_ID: string | Uint8Array | null;
    COLLECTOR_ID: string | Uint8Array | null;
    EPOCH: number;
    TIME_DIFFERENCE_RESIDUAL_S: number;
    FREQUENCY_DIFFERENCE_RESIDUAL_HZ: number;
    ANGULAR_RESIDUAL_DEG: number;
    WEIGHT: number;
    DISPOSITION: gelObservationDisposition;
    REJECTION_REASON: string | Uint8Array | null;
    constructor(OBSERVATION_INDEX?: number, DOA_ID?: string | Uint8Array | null, IQC_ID?: string | Uint8Array | null, COLLECTOR_ID?: string | Uint8Array | null, EPOCH?: number, TIME_DIFFERENCE_RESIDUAL_S?: number, FREQUENCY_DIFFERENCE_RESIDUAL_HZ?: number, ANGULAR_RESIDUAL_DEG?: number, WEIGHT?: number, DISPOSITION?: gelObservationDisposition, REJECTION_REASON?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=GELObservationRef.d.ts.map