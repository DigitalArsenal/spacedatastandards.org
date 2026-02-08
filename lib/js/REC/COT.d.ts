import * as flatbuffers from 'flatbuffers';
import { COTDetail, COTDetailT } from './COTDetail.js';
import { COTHowType } from './COTHowType.js';
import { COTPoint, COTPointT } from './COTPoint.js';
/**
 * Cursor on Target Event
 */
export declare class COT implements flatbuffers.IUnpackableObject<COTT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): COT;
    static getRootAsCOT(bb: flatbuffers.ByteBuffer, obj?: COT): COT;
    static getSizePrefixedRootAsCOT(bb: flatbuffers.ByteBuffer, obj?: COT): COT;
    static bufferHasIdentifier(bb: flatbuffers.ByteBuffer): boolean;
    /**
     * Schema version
     */
    VERSION(): string | null;
    VERSION(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Globally unique event identifier
     */
    UID(): string | null;
    UID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * CoT event type (dot-delimited MIL-STD-2525/APP-6 hierarchy)
     * e.g. "a-f-G-U-C" = atom, friend, Ground, Unit, Combat
     */
    TYPE(): string | null;
    TYPE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * How the event was generated (e.g. "m-g" = machine GPS)
     */
    HOW(): COTHowType;
    /**
     * Time the event was generated (ISO 8601)
     */
    TIME(): string | null;
    TIME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Time the event information was valid (ISO 8601)
     */
    START(): string | null;
    START(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Time the event information is no longer valid (ISO 8601)
     */
    STALE(): string | null;
    STALE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Access control marking
     */
    ACCESS(): string | null;
    ACCESS(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Quality of service
     */
    QOS(): string | null;
    QOS(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Operational status
     */
    OPEX(): string | null;
    OPEX(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Point location
     */
    POINT(obj?: COTPoint): COTPoint | null;
    /**
     * Detailed event information
     */
    DETAIL(obj?: COTDetail): COTDetail | null;
    static startCOT(builder: flatbuffers.Builder): void;
    static addVersion(builder: flatbuffers.Builder, VERSIONOffset: flatbuffers.Offset): void;
    static addUid(builder: flatbuffers.Builder, UIDOffset: flatbuffers.Offset): void;
    static addType(builder: flatbuffers.Builder, TYPEOffset: flatbuffers.Offset): void;
    static addHow(builder: flatbuffers.Builder, HOW: COTHowType): void;
    static addTime(builder: flatbuffers.Builder, TIMEOffset: flatbuffers.Offset): void;
    static addStart(builder: flatbuffers.Builder, STARTOffset: flatbuffers.Offset): void;
    static addStale(builder: flatbuffers.Builder, STALEOffset: flatbuffers.Offset): void;
    static addAccess(builder: flatbuffers.Builder, ACCESSOffset: flatbuffers.Offset): void;
    static addQos(builder: flatbuffers.Builder, QOSOffset: flatbuffers.Offset): void;
    static addOpex(builder: flatbuffers.Builder, OPEXOffset: flatbuffers.Offset): void;
    static addPoint(builder: flatbuffers.Builder, POINTOffset: flatbuffers.Offset): void;
    static addDetail(builder: flatbuffers.Builder, DETAILOffset: flatbuffers.Offset): void;
    static endCOT(builder: flatbuffers.Builder): flatbuffers.Offset;
    static finishCOTBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static finishSizePrefixedCOTBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    unpack(): COTT;
    unpackTo(_o: COTT): void;
}
export declare class COTT implements flatbuffers.IGeneratedObject {
    VERSION: string | Uint8Array | null;
    UID: string | Uint8Array | null;
    TYPE: string | Uint8Array | null;
    HOW: COTHowType;
    TIME: string | Uint8Array | null;
    START: string | Uint8Array | null;
    STALE: string | Uint8Array | null;
    ACCESS: string | Uint8Array | null;
    QOS: string | Uint8Array | null;
    OPEX: string | Uint8Array | null;
    POINT: COTPointT | null;
    DETAIL: COTDetailT | null;
    constructor(VERSION?: string | Uint8Array | null, UID?: string | Uint8Array | null, TYPE?: string | Uint8Array | null, HOW?: COTHowType, TIME?: string | Uint8Array | null, START?: string | Uint8Array | null, STALE?: string | Uint8Array | null, ACCESS?: string | Uint8Array | null, QOS?: string | Uint8Array | null, OPEX?: string | Uint8Array | null, POINT?: COTPointT | null, DETAIL?: COTDetailT | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=COT.d.ts.map