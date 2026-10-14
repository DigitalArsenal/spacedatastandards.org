import * as flatbuffers from 'flatbuffers';
import { XMTRecordRef, XMTRecordRefT } from './XMTRecordRef.js';
import { xmtCandidateStanding } from './xmtCandidateStanding.js';
/**
 * One source's product as a candidate for one object.
 */
export declare class XMTProductCandidate implements flatbuffers.IUnpackableObject<XMTProductCandidateT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): XMTProductCandidate;
    static getRootAsXMTProductCandidate(bb: flatbuffers.ByteBuffer, obj?: XMTProductCandidate): XMTProductCandidate;
    static getSizePrefixedRootAsXMTProductCandidate(bb: flatbuffers.ByteBuffer, obj?: XMTProductCandidate): XMTProductCandidate;
    SOURCE_ID(): string | null;
    SOURCE_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Product epoch, Unix milliseconds.
     */
    EPOCH_MS(): bigint;
    /**
     * As-of time minus epoch, days.
     */
    AGE_DAYS(): number;
    STANDING(): xmtCandidateStanding;
    /**
     * True when the measured table covers it with enough samples.
     */
    MEASURED(): boolean;
    /**
     * Measured median 3-D error, km; NaN when not in the table.
     */
    MEDIAN_3D_KM(): number;
    /**
     * Samples behind the median.
     */
    SAMPLES(): number;
    /**
     * Time of the maneuver that retired it, Unix milliseconds; 0 = not
     * retired.
     */
    RETIRED_BY_MS(): bigint;
    RECORD(obj?: XMTRecordRef): XMTRecordRef | null;
    static startXMTProductCandidate(builder: flatbuffers.Builder): void;
    static addSourceId(builder: flatbuffers.Builder, SOURCE_IDOffset: flatbuffers.Offset): void;
    static addEpochMs(builder: flatbuffers.Builder, EPOCH_MS: bigint): void;
    static addAgeDays(builder: flatbuffers.Builder, AGE_DAYS: number): void;
    static addStanding(builder: flatbuffers.Builder, STANDING: xmtCandidateStanding): void;
    static addMeasured(builder: flatbuffers.Builder, MEASURED: boolean): void;
    static addMedian3DKm(builder: flatbuffers.Builder, MEDIAN_3D_KM: number): void;
    static addSamples(builder: flatbuffers.Builder, SAMPLES: number): void;
    static addRetiredByMs(builder: flatbuffers.Builder, RETIRED_BY_MS: bigint): void;
    static addRecord(builder: flatbuffers.Builder, RECORDOffset: flatbuffers.Offset): void;
    static endXMTProductCandidate(builder: flatbuffers.Builder): flatbuffers.Offset;
    unpack(): XMTProductCandidateT;
    unpackTo(_o: XMTProductCandidateT): void;
}
export declare class XMTProductCandidateT implements flatbuffers.IGeneratedObject {
    SOURCE_ID: string | Uint8Array | null;
    EPOCH_MS: bigint;
    AGE_DAYS: number;
    STANDING: xmtCandidateStanding;
    MEASURED: boolean;
    MEDIAN_3D_KM: number;
    SAMPLES: number;
    RETIRED_BY_MS: bigint;
    RECORD: XMTRecordRefT | null;
    constructor(SOURCE_ID?: string | Uint8Array | null, EPOCH_MS?: bigint, AGE_DAYS?: number, STANDING?: xmtCandidateStanding, MEASURED?: boolean, MEDIAN_3D_KM?: number, SAMPLES?: number, RETIRED_BY_MS?: bigint, RECORD?: XMTRecordRefT | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=XMTProductCandidate.d.ts.map