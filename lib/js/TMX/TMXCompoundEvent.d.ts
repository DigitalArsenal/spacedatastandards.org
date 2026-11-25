import * as flatbuffers from 'flatbuffers';
import { TMXRecordRef, TMXRecordRefT } from './TMXRecordRef.js';
import { tmxPhenomenologyKind } from './tmxPhenomenologyKind.js';
import { tmxSeverityLevel } from './tmxSeverityLevel.js';
/**
 * Overlapping multi-phenomenology compound threat event on an asset, site, or bucket.
 */
export declare class TMXCompoundEvent implements flatbuffers.IUnpackableObject<TMXCompoundEventT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): TMXCompoundEvent;
    static getRootAsTMXCompoundEvent(bb: flatbuffers.ByteBuffer, obj?: TMXCompoundEvent): TMXCompoundEvent;
    static getSizePrefixedRootAsTMXCompoundEvent(bb: flatbuffers.ByteBuffer, obj?: TMXCompoundEvent): TMXCompoundEvent;
    /**
     * Stable identifier of this compound overlap event.
     */
    COMPOUND_ID(): string;
    COMPOUND_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    /**
     * Bucket identifier where the overlap occurs.
     */
    BUCKET_ID(): string;
    BUCKET_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    /**
     * Optional NORAD catalog number of the affected asset.
     */
    NORAD_CAT_ID(): number;
    /**
     * Optional ground site or gateway identifier.
     */
    SITE_ID(): string | null;
    SITE_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Co-occurring phenomenologies participating in the overlap.
     */
    PHENOMENOLOGIES(index: number): tmxPhenomenologyKind | null;
    phenomenologiesLength(): number;
    phenomenologiesArray(): Int8Array | null;
    /**
     * Member SDS event references forming this compound event.
     */
    MEMBER_EVENT_REFS(index: number, obj?: TMXRecordRef): TMXRecordRef | null;
    memberEventRefsLength(): number;
    /**
     * Inclusive overlap window start, RFC 3339 UTC.
     */
    OVERLAP_START_UTC(): string;
    OVERLAP_START_UTC(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    /**
     * Exclusive overlap window end, RFC 3339 UTC.
     */
    OVERLAP_END_UTC(): string;
    OVERLAP_END_UTC(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    /**
     * Applied compound multiplier in basis points.
     */
    COMPOUND_MULTIPLIER_BPS(): number;
    /**
     * Applied compound bonus in basis points.
     */
    COMPOUND_BONUS_BPS(): number;
    /**
     * Final deterministic combined score in basis points (0..10000).
     */
    COMBINED_SCORE(): number;
    /**
     * Resulting categorical severity tier.
     */
    SEVERITY_TIER(): tmxSeverityLevel;
    static startTMXCompoundEvent(builder: flatbuffers.Builder): void;
    static addCompoundId(builder: flatbuffers.Builder, COMPOUND_IDOffset: flatbuffers.Offset): void;
    static addBucketId(builder: flatbuffers.Builder, BUCKET_IDOffset: flatbuffers.Offset): void;
    static addNoradCatId(builder: flatbuffers.Builder, NORAD_CAT_ID: number): void;
    static addSiteId(builder: flatbuffers.Builder, SITE_IDOffset: flatbuffers.Offset): void;
    static addPhenomenologies(builder: flatbuffers.Builder, PHENOMENOLOGIESOffset: flatbuffers.Offset): void;
    static createPhenomenologiesVector(builder: flatbuffers.Builder, data: tmxPhenomenologyKind[]): flatbuffers.Offset;
    static startPhenomenologiesVector(builder: flatbuffers.Builder, numElems: number): void;
    static addMemberEventRefs(builder: flatbuffers.Builder, MEMBER_EVENT_REFSOffset: flatbuffers.Offset): void;
    static createMemberEventRefsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startMemberEventRefsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addOverlapStartUtc(builder: flatbuffers.Builder, OVERLAP_START_UTCOffset: flatbuffers.Offset): void;
    static addOverlapEndUtc(builder: flatbuffers.Builder, OVERLAP_END_UTCOffset: flatbuffers.Offset): void;
    static addCompoundMultiplierBps(builder: flatbuffers.Builder, COMPOUND_MULTIPLIER_BPS: number): void;
    static addCompoundBonusBps(builder: flatbuffers.Builder, COMPOUND_BONUS_BPS: number): void;
    static addCombinedScore(builder: flatbuffers.Builder, COMBINED_SCORE: number): void;
    static addSeverityTier(builder: flatbuffers.Builder, SEVERITY_TIER: tmxSeverityLevel): void;
    static endTMXCompoundEvent(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createTMXCompoundEvent(builder: flatbuffers.Builder, COMPOUND_IDOffset: flatbuffers.Offset, BUCKET_IDOffset: flatbuffers.Offset, NORAD_CAT_ID: number, SITE_IDOffset: flatbuffers.Offset, PHENOMENOLOGIESOffset: flatbuffers.Offset, MEMBER_EVENT_REFSOffset: flatbuffers.Offset, OVERLAP_START_UTCOffset: flatbuffers.Offset, OVERLAP_END_UTCOffset: flatbuffers.Offset, COMPOUND_MULTIPLIER_BPS: number, COMPOUND_BONUS_BPS: number, COMBINED_SCORE: number, SEVERITY_TIER: tmxSeverityLevel): flatbuffers.Offset;
    unpack(): TMXCompoundEventT;
    unpackTo(_o: TMXCompoundEventT): void;
}
export declare class TMXCompoundEventT implements flatbuffers.IGeneratedObject {
    COMPOUND_ID: string | Uint8Array | null;
    BUCKET_ID: string | Uint8Array | null;
    NORAD_CAT_ID: number;
    SITE_ID: string | Uint8Array | null;
    PHENOMENOLOGIES: (tmxPhenomenologyKind)[];
    MEMBER_EVENT_REFS: (TMXRecordRefT)[];
    OVERLAP_START_UTC: string | Uint8Array | null;
    OVERLAP_END_UTC: string | Uint8Array | null;
    COMPOUND_MULTIPLIER_BPS: number;
    COMPOUND_BONUS_BPS: number;
    COMBINED_SCORE: number;
    SEVERITY_TIER: tmxSeverityLevel;
    constructor(COMPOUND_ID?: string | Uint8Array | null, BUCKET_ID?: string | Uint8Array | null, NORAD_CAT_ID?: number, SITE_ID?: string | Uint8Array | null, PHENOMENOLOGIES?: (tmxPhenomenologyKind)[], MEMBER_EVENT_REFS?: (TMXRecordRefT)[], OVERLAP_START_UTC?: string | Uint8Array | null, OVERLAP_END_UTC?: string | Uint8Array | null, COMPOUND_MULTIPLIER_BPS?: number, COMPOUND_BONUS_BPS?: number, COMBINED_SCORE?: number, SEVERITY_TIER?: tmxSeverityLevel);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=TMXCompoundEvent.d.ts.map