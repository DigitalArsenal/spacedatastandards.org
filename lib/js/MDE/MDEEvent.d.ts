import * as flatbuffers from 'flatbuffers';
import { MDEEvidence, MDEEvidenceT } from './MDEEvidence.js';
import { maneuverCharacterization } from './maneuverCharacterization.js';
import { mdeDetector } from './mdeDetector.js';
/**
 * One event a detector raised.
 */
export declare class MDEEvent implements flatbuffers.IUnpackableObject<MDEEventT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): MDEEvent;
    static getRootAsMDEEvent(bb: flatbuffers.ByteBuffer, obj?: MDEEvent): MDEEvent;
    static getSizePrefixedRootAsMDEEvent(bb: flatbuffers.ByteBuffer, obj?: MDEEvent): MDEEvent;
    DETECTOR(): mdeDetector;
    /**
     * Event time, Unix ms.
     */
    TIME_MS(): bigint;
    CHARACTERIZATION(): maneuverCharacterization;
    /**
     * In-track delta-v, m/s; 0 unless its test fired.
     */
    IN_TRACK_M_S(): number;
    /**
     * Cross-track delta-v, m/s; 0 unless its test fired.
     */
    CROSS_TRACK_M_S(): number;
    IN_TRACK_FIRED(): boolean;
    CROSS_TRACK_FIRED(): boolean;
    /**
     * In-track and cross-track estimates before the firing rule, m/s.
     */
    RAW_IN_TRACK_M_S(): number;
    RAW_CROSS_TRACK_M_S(): number;
    /**
     * Semi-major axis change, km.
     */
    DELTA_SMA_KM(): number;
    /**
     * Separation at the crossing, km.
     */
    SEPARATION_KM(): number;
    /**
     * True when TIME_MS is a crossing time (else a gap middle).
     */
    TIME_FROM_CROSSING(): boolean;
    /**
     * Indices of the history blocks (element sets or versions) before and
     * after the event.
     */
    BLOCK_BEFORE(): number;
    BLOCK_AFTER(): number;
    EVIDENCE(obj?: MDEEvidence): MDEEvidence | null;
    /**
     * D3: change of along-track acceleration, m/s**2; NaN = not computed.
     */
    ACCEL_CHANGE_M_S2(): number;
    /**
     * ID of the $MNV record emitted for the event; empty when not emitted.
     */
    MNV_ID(): string | null;
    MNV_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    static startMDEEvent(builder: flatbuffers.Builder): void;
    static addDetector(builder: flatbuffers.Builder, DETECTOR: mdeDetector): void;
    static addTimeMs(builder: flatbuffers.Builder, TIME_MS: bigint): void;
    static addCharacterization(builder: flatbuffers.Builder, CHARACTERIZATION: maneuverCharacterization): void;
    static addInTrackMS(builder: flatbuffers.Builder, IN_TRACK_M_S: number): void;
    static addCrossTrackMS(builder: flatbuffers.Builder, CROSS_TRACK_M_S: number): void;
    static addInTrackFired(builder: flatbuffers.Builder, IN_TRACK_FIRED: boolean): void;
    static addCrossTrackFired(builder: flatbuffers.Builder, CROSS_TRACK_FIRED: boolean): void;
    static addRawInTrackMS(builder: flatbuffers.Builder, RAW_IN_TRACK_M_S: number): void;
    static addRawCrossTrackMS(builder: flatbuffers.Builder, RAW_CROSS_TRACK_M_S: number): void;
    static addDeltaSmaKm(builder: flatbuffers.Builder, DELTA_SMA_KM: number): void;
    static addSeparationKm(builder: flatbuffers.Builder, SEPARATION_KM: number): void;
    static addTimeFromCrossing(builder: flatbuffers.Builder, TIME_FROM_CROSSING: boolean): void;
    static addBlockBefore(builder: flatbuffers.Builder, BLOCK_BEFORE: number): void;
    static addBlockAfter(builder: flatbuffers.Builder, BLOCK_AFTER: number): void;
    static addEvidence(builder: flatbuffers.Builder, EVIDENCEOffset: flatbuffers.Offset): void;
    static addAccelChangeMS2(builder: flatbuffers.Builder, ACCEL_CHANGE_M_S2: number): void;
    static addMnvId(builder: flatbuffers.Builder, MNV_IDOffset: flatbuffers.Offset): void;
    static endMDEEvent(builder: flatbuffers.Builder): flatbuffers.Offset;
    unpack(): MDEEventT;
    unpackTo(_o: MDEEventT): void;
}
export declare class MDEEventT implements flatbuffers.IGeneratedObject {
    DETECTOR: mdeDetector;
    TIME_MS: bigint;
    CHARACTERIZATION: maneuverCharacterization;
    IN_TRACK_M_S: number;
    CROSS_TRACK_M_S: number;
    IN_TRACK_FIRED: boolean;
    CROSS_TRACK_FIRED: boolean;
    RAW_IN_TRACK_M_S: number;
    RAW_CROSS_TRACK_M_S: number;
    DELTA_SMA_KM: number;
    SEPARATION_KM: number;
    TIME_FROM_CROSSING: boolean;
    BLOCK_BEFORE: number;
    BLOCK_AFTER: number;
    EVIDENCE: MDEEvidenceT | null;
    ACCEL_CHANGE_M_S2: number;
    MNV_ID: string | Uint8Array | null;
    constructor(DETECTOR?: mdeDetector, TIME_MS?: bigint, CHARACTERIZATION?: maneuverCharacterization, IN_TRACK_M_S?: number, CROSS_TRACK_M_S?: number, IN_TRACK_FIRED?: boolean, CROSS_TRACK_FIRED?: boolean, RAW_IN_TRACK_M_S?: number, RAW_CROSS_TRACK_M_S?: number, DELTA_SMA_KM?: number, SEPARATION_KM?: number, TIME_FROM_CROSSING?: boolean, BLOCK_BEFORE?: number, BLOCK_AFTER?: number, EVIDENCE?: MDEEvidenceT | null, ACCEL_CHANGE_M_S2?: number, MNV_ID?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=MDEEvent.d.ts.map