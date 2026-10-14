import * as flatbuffers from 'flatbuffers';
import { XMTMeasuredError, XMTMeasuredErrorT } from './XMTMeasuredError.js';
/**
 * How one product is chosen per object.
 */
export declare class XMTSelectionPolicy implements flatbuffers.IUnpackableObject<XMTSelectionPolicyT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): XMTSelectionPolicy;
    static getRootAsXMTSelectionPolicy(bb: flatbuffers.ByteBuffer, obj?: XMTSelectionPolicy): XMTSelectionPolicy;
    static getSizePrefixedRootAsXMTSelectionPolicy(bb: flatbuffers.ByteBuffer, obj?: XMTSelectionPolicy): XMTSelectionPolicy;
    /**
     * Horizon the measured table is read at, days; NaN = none.
     */
    HORIZON_DAYS(): number;
    /**
     * Minimum samples for a measured row to count.
     */
    MIN_SAMPLES(): number;
    /**
     * Maximum product age, days; +Infinity = no limit.
     */
    MAX_AGE_DAYS(): number;
    /**
     * Sources in preference order (ties and the unmeasured fallback).
     */
    SOURCE_ORDER(index: number): string;
    SOURCE_ORDER(index: number, optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    sourceOrderLength(): number;
    /**
     * The measured table.
     */
    MEASURED(index: number, obj?: XMTMeasuredError): XMTMeasuredError | null;
    measuredLength(): number;
    /**
     * Rows in MEASURED (kept when a report omits the table itself).
     */
    MEASURED_ROWS(): number;
    static startXMTSelectionPolicy(builder: flatbuffers.Builder): void;
    static addHorizonDays(builder: flatbuffers.Builder, HORIZON_DAYS: number): void;
    static addMinSamples(builder: flatbuffers.Builder, MIN_SAMPLES: number): void;
    static addMaxAgeDays(builder: flatbuffers.Builder, MAX_AGE_DAYS: number): void;
    static addSourceOrder(builder: flatbuffers.Builder, SOURCE_ORDEROffset: flatbuffers.Offset): void;
    static createSourceOrderVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startSourceOrderVector(builder: flatbuffers.Builder, numElems: number): void;
    static addMeasured(builder: flatbuffers.Builder, MEASUREDOffset: flatbuffers.Offset): void;
    static createMeasuredVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startMeasuredVector(builder: flatbuffers.Builder, numElems: number): void;
    static addMeasuredRows(builder: flatbuffers.Builder, MEASURED_ROWS: number): void;
    static endXMTSelectionPolicy(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createXMTSelectionPolicy(builder: flatbuffers.Builder, HORIZON_DAYS: number, MIN_SAMPLES: number, MAX_AGE_DAYS: number, SOURCE_ORDEROffset: flatbuffers.Offset, MEASUREDOffset: flatbuffers.Offset, MEASURED_ROWS: number): flatbuffers.Offset;
    unpack(): XMTSelectionPolicyT;
    unpackTo(_o: XMTSelectionPolicyT): void;
}
export declare class XMTSelectionPolicyT implements flatbuffers.IGeneratedObject {
    HORIZON_DAYS: number;
    MIN_SAMPLES: number;
    MAX_AGE_DAYS: number;
    SOURCE_ORDER: (string)[];
    MEASURED: (XMTMeasuredErrorT)[];
    MEASURED_ROWS: number;
    constructor(HORIZON_DAYS?: number, MIN_SAMPLES?: number, MAX_AGE_DAYS?: number, SOURCE_ORDER?: (string)[], MEASURED?: (XMTMeasuredErrorT)[], MEASURED_ROWS?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=XMTSelectionPolicy.d.ts.map