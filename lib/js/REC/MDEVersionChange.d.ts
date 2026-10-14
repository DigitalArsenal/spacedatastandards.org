import * as flatbuffers from 'flatbuffers';
import { mdeComparisonMode } from './mdeComparisonMode.js';
/**
 * One comparison of two versions (or one version with itself).
 */
export declare class MDEVersionChange implements flatbuffers.IUnpackableObject<MDEVersionChangeT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): MDEVersionChange;
    static getRootAsMDEVersionChange(bb: flatbuffers.ByteBuffer, obj?: MDEVersionChange): MDEVersionChange;
    static getSizePrefixedRootAsMDEVersionChange(bb: flatbuffers.ByteBuffer, obj?: MDEVersionChange): MDEVersionChange;
    /**
     * Older and newer version descriptions; WITHIN names the version for a
     * WithinVersion change.
     */
    OLDER(): string | null;
    OLDER(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    NEWER(): string | null;
    NEWER(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    WITHIN(): string | null;
    WITHIN(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    MODE(): mdeComparisonMode;
    /**
     * Why there was no comparison; empty otherwise.
     */
    DETAIL(): string | null;
    DETAIL(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Window compared, Unix ms.
     */
    WINDOW_START_MS(): bigint;
    WINDOW_STOP_MS(): bigint;
    /**
     * Semi-major axis change, km.
     */
    DELTA_SMA_KM(): number;
    /**
     * In-track and cross-track equivalent delta-v, m/s.
     */
    IN_TRACK_M_S(): number;
    CROSS_TRACK_M_S(): number;
    /**
     * Gap between adjacent versions, s.
     */
    GAP_S(): number;
    static startMDEVersionChange(builder: flatbuffers.Builder): void;
    static addOlder(builder: flatbuffers.Builder, OLDEROffset: flatbuffers.Offset): void;
    static addNewer(builder: flatbuffers.Builder, NEWEROffset: flatbuffers.Offset): void;
    static addWithin(builder: flatbuffers.Builder, WITHINOffset: flatbuffers.Offset): void;
    static addMode(builder: flatbuffers.Builder, MODE: mdeComparisonMode): void;
    static addDetail(builder: flatbuffers.Builder, DETAILOffset: flatbuffers.Offset): void;
    static addWindowStartMs(builder: flatbuffers.Builder, WINDOW_START_MS: bigint): void;
    static addWindowStopMs(builder: flatbuffers.Builder, WINDOW_STOP_MS: bigint): void;
    static addDeltaSmaKm(builder: flatbuffers.Builder, DELTA_SMA_KM: number): void;
    static addInTrackMS(builder: flatbuffers.Builder, IN_TRACK_M_S: number): void;
    static addCrossTrackMS(builder: flatbuffers.Builder, CROSS_TRACK_M_S: number): void;
    static addGapS(builder: flatbuffers.Builder, GAP_S: number): void;
    static endMDEVersionChange(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createMDEVersionChange(builder: flatbuffers.Builder, OLDEROffset: flatbuffers.Offset, NEWEROffset: flatbuffers.Offset, WITHINOffset: flatbuffers.Offset, MODE: mdeComparisonMode, DETAILOffset: flatbuffers.Offset, WINDOW_START_MS: bigint, WINDOW_STOP_MS: bigint, DELTA_SMA_KM: number, IN_TRACK_M_S: number, CROSS_TRACK_M_S: number, GAP_S: number): flatbuffers.Offset;
    unpack(): MDEVersionChangeT;
    unpackTo(_o: MDEVersionChangeT): void;
}
export declare class MDEVersionChangeT implements flatbuffers.IGeneratedObject {
    OLDER: string | Uint8Array | null;
    NEWER: string | Uint8Array | null;
    WITHIN: string | Uint8Array | null;
    MODE: mdeComparisonMode;
    DETAIL: string | Uint8Array | null;
    WINDOW_START_MS: bigint;
    WINDOW_STOP_MS: bigint;
    DELTA_SMA_KM: number;
    IN_TRACK_M_S: number;
    CROSS_TRACK_M_S: number;
    GAP_S: number;
    constructor(OLDER?: string | Uint8Array | null, NEWER?: string | Uint8Array | null, WITHIN?: string | Uint8Array | null, MODE?: mdeComparisonMode, DETAIL?: string | Uint8Array | null, WINDOW_START_MS?: bigint, WINDOW_STOP_MS?: bigint, DELTA_SMA_KM?: number, IN_TRACK_M_S?: number, CROSS_TRACK_M_S?: number, GAP_S?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=MDEVersionChange.d.ts.map