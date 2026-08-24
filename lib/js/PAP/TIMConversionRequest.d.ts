import * as flatbuffers from 'flatbuffers';
import { TIMInstant, TIMInstantT } from './TIMInstant.js';
import { timEpochRepresentation } from './timEpochRepresentation.js';
import { timingStandard } from './timingStandard.js';
/**
 * Request to convert one instant into another time system/representation.
 */
export declare class TIMConversionRequest implements flatbuffers.IUnpackableObject<TIMConversionRequestT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): TIMConversionRequest;
    static getRootAsTIMConversionRequest(bb: flatbuffers.ByteBuffer, obj?: TIMConversionRequest): TIMConversionRequest;
    static getSizePrefixedRootAsTIMConversionRequest(bb: flatbuffers.ByteBuffer, obj?: TIMConversionRequest): TIMConversionRequest;
    /**
     * Source instant to convert.
     */
    SOURCE(obj?: TIMInstant): TIMInstant | null;
    /**
     * Target time system.
     */
    TARGET_TIME_SYSTEM(): timingStandard;
    /**
     * Preferred target representation.
     */
    TARGET_EPOCH_FORMAT(): timEpochRepresentation;
    /**
     * Optional TAI-UTC override in seconds for the source instant.
     */
    TAI_MINUS_UTC_SECONDS(): number;
    /**
     * Whether TAI_MINUS_UTC_SECONDS should override runtime leap-second data.
     */
    HAS_TAI_MINUS_UTC(): boolean;
    /**
     * Optional UT1-UTC override in seconds for UT1 conversions.
     */
    DUT1_SECONDS(): number;
    /**
     * Whether DUT1_SECONDS should override runtime Earth-orientation data.
     */
    HAS_DUT1(): boolean;
    /**
     * Optional caller trace/correlation identifier.
     */
    TRACE_ID(): string | null;
    TRACE_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    static startTIMConversionRequest(builder: flatbuffers.Builder): void;
    static addSource(builder: flatbuffers.Builder, SOURCEOffset: flatbuffers.Offset): void;
    static addTargetTimeSystem(builder: flatbuffers.Builder, TARGET_TIME_SYSTEM: timingStandard): void;
    static addTargetEpochFormat(builder: flatbuffers.Builder, TARGET_EPOCH_FORMAT: timEpochRepresentation): void;
    static addTaiMinusUtcSeconds(builder: flatbuffers.Builder, TAI_MINUS_UTC_SECONDS: number): void;
    static addHasTaiMinusUtc(builder: flatbuffers.Builder, HAS_TAI_MINUS_UTC: boolean): void;
    static addDut1Seconds(builder: flatbuffers.Builder, DUT1_SECONDS: number): void;
    static addHasDut1(builder: flatbuffers.Builder, HAS_DUT1: boolean): void;
    static addTraceId(builder: flatbuffers.Builder, TRACE_IDOffset: flatbuffers.Offset): void;
    static endTIMConversionRequest(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createTIMConversionRequest(builder: flatbuffers.Builder, SOURCEOffset: flatbuffers.Offset, TARGET_TIME_SYSTEM: timingStandard, TARGET_EPOCH_FORMAT: timEpochRepresentation, TAI_MINUS_UTC_SECONDS: number, HAS_TAI_MINUS_UTC: boolean, DUT1_SECONDS: number, HAS_DUT1: boolean, TRACE_IDOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): TIMConversionRequestT;
    unpackTo(_o: TIMConversionRequestT): void;
}
export declare class TIMConversionRequestT implements flatbuffers.IGeneratedObject {
    SOURCE: TIMInstantT | null;
    TARGET_TIME_SYSTEM: timingStandard;
    TARGET_EPOCH_FORMAT: timEpochRepresentation;
    TAI_MINUS_UTC_SECONDS: number;
    HAS_TAI_MINUS_UTC: boolean;
    DUT1_SECONDS: number;
    HAS_DUT1: boolean;
    TRACE_ID: string | Uint8Array | null;
    constructor(SOURCE?: TIMInstantT | null, TARGET_TIME_SYSTEM?: timingStandard, TARGET_EPOCH_FORMAT?: timEpochRepresentation, TAI_MINUS_UTC_SECONDS?: number, HAS_TAI_MINUS_UTC?: boolean, DUT1_SECONDS?: number, HAS_DUT1?: boolean, TRACE_ID?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=TIMConversionRequest.d.ts.map