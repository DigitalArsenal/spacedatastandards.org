import * as flatbuffers from 'flatbuffers';
/**
 * CoT Detail - extensible detail element
 */
export declare class COTDetail implements flatbuffers.IUnpackableObject<COTDetailT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): COTDetail;
    static getRootAsCOTDetail(bb: flatbuffers.ByteBuffer, obj?: COTDetail): COTDetail;
    static getSizePrefixedRootAsCOTDetail(bb: flatbuffers.ByteBuffer, obj?: COTDetail): COTDetail;
    /**
     * Contact callsign
     */
    CALLSIGN(): string | null;
    CALLSIGN(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Contact endpoint (e.g. IP:port)
     */
    ENDPOINT(): string | null;
    ENDPOINT(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Contact phone number
     */
    PHONE(): string | null;
    PHONE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Track course in degrees true
     */
    COURSE(): number;
    /**
     * Track speed in m/s
     */
    SPEED(): number;
    /**
     * Group name/team
     */
    GROUP_NAME(): string | null;
    GROUP_NAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Group role
     */
    GROUP_ROLE(): string | null;
    GROUP_ROLE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Status (battery percentage, etc.)
     */
    STATUS_BATTERY(): number;
    /**
     * Status readiness
     */
    STATUS_READINESS(): boolean;
    /**
     * Precision location source
     */
    PREC_LOCATION_SOURCE(): string | null;
    PREC_LOCATION_SOURCE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Precision location altitude source
     */
    PREC_ALTSRC(): string | null;
    PREC_ALTSRC(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * UID of the device
     */
    UID_DROID(): string | null;
    UID_DROID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Remarks text
     */
    REMARKS(): string | null;
    REMARKS(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Remarks source
     */
    REMARKS_SOURCE(): string | null;
    REMARKS_SOURCE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Remarks timestamp (ISO 8601)
     */
    REMARKS_TIME(): string | null;
    REMARKS_TIME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Link UID (for related events)
     */
    LINK_UID(): string | null;
    LINK_UID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Link type
     */
    LINK_TYPE(): string | null;
    LINK_TYPE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Link relation
     */
    LINK_RELATION(): string | null;
    LINK_RELATION(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Color in ARGB integer format
     */
    COLOR(): number;
    /**
     * Stroke weight for drawing
     */
    STROKE_WEIGHT(): number;
    /**
     * Fill color in ARGB integer format
     */
    FILL_COLOR(): number;
    /**
     * Labeled flag
     */
    LABELLED(): boolean;
    /**
     * Archive flag
     */
    ARCHIVE(): boolean;
    /**
     * Raw XML detail content (for extensions not covered above)
     */
    RAW_XML(): string | null;
    RAW_XML(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    static startCOTDetail(builder: flatbuffers.Builder): void;
    static addCallsign(builder: flatbuffers.Builder, CALLSIGNOffset: flatbuffers.Offset): void;
    static addEndpoint(builder: flatbuffers.Builder, ENDPOINTOffset: flatbuffers.Offset): void;
    static addPhone(builder: flatbuffers.Builder, PHONEOffset: flatbuffers.Offset): void;
    static addCourse(builder: flatbuffers.Builder, COURSE: number): void;
    static addSpeed(builder: flatbuffers.Builder, SPEED: number): void;
    static addGroupName(builder: flatbuffers.Builder, GROUP_NAMEOffset: flatbuffers.Offset): void;
    static addGroupRole(builder: flatbuffers.Builder, GROUP_ROLEOffset: flatbuffers.Offset): void;
    static addStatusBattery(builder: flatbuffers.Builder, STATUS_BATTERY: number): void;
    static addStatusReadiness(builder: flatbuffers.Builder, STATUS_READINESS: boolean): void;
    static addPrecLocationSource(builder: flatbuffers.Builder, PREC_LOCATION_SOURCEOffset: flatbuffers.Offset): void;
    static addPrecAltsrc(builder: flatbuffers.Builder, PREC_ALTSRCOffset: flatbuffers.Offset): void;
    static addUidDroid(builder: flatbuffers.Builder, UID_DROIDOffset: flatbuffers.Offset): void;
    static addRemarks(builder: flatbuffers.Builder, REMARKSOffset: flatbuffers.Offset): void;
    static addRemarksSource(builder: flatbuffers.Builder, REMARKS_SOURCEOffset: flatbuffers.Offset): void;
    static addRemarksTime(builder: flatbuffers.Builder, REMARKS_TIMEOffset: flatbuffers.Offset): void;
    static addLinkUid(builder: flatbuffers.Builder, LINK_UIDOffset: flatbuffers.Offset): void;
    static addLinkType(builder: flatbuffers.Builder, LINK_TYPEOffset: flatbuffers.Offset): void;
    static addLinkRelation(builder: flatbuffers.Builder, LINK_RELATIONOffset: flatbuffers.Offset): void;
    static addColor(builder: flatbuffers.Builder, COLOR: number): void;
    static addStrokeWeight(builder: flatbuffers.Builder, STROKE_WEIGHT: number): void;
    static addFillColor(builder: flatbuffers.Builder, FILL_COLOR: number): void;
    static addLabelled(builder: flatbuffers.Builder, LABELLED: boolean): void;
    static addArchive(builder: flatbuffers.Builder, ARCHIVE: boolean): void;
    static addRawXml(builder: flatbuffers.Builder, RAW_XMLOffset: flatbuffers.Offset): void;
    static endCOTDetail(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createCOTDetail(builder: flatbuffers.Builder, CALLSIGNOffset: flatbuffers.Offset, ENDPOINTOffset: flatbuffers.Offset, PHONEOffset: flatbuffers.Offset, COURSE: number, SPEED: number, GROUP_NAMEOffset: flatbuffers.Offset, GROUP_ROLEOffset: flatbuffers.Offset, STATUS_BATTERY: number, STATUS_READINESS: boolean, PREC_LOCATION_SOURCEOffset: flatbuffers.Offset, PREC_ALTSRCOffset: flatbuffers.Offset, UID_DROIDOffset: flatbuffers.Offset, REMARKSOffset: flatbuffers.Offset, REMARKS_SOURCEOffset: flatbuffers.Offset, REMARKS_TIMEOffset: flatbuffers.Offset, LINK_UIDOffset: flatbuffers.Offset, LINK_TYPEOffset: flatbuffers.Offset, LINK_RELATIONOffset: flatbuffers.Offset, COLOR: number, STROKE_WEIGHT: number, FILL_COLOR: number, LABELLED: boolean, ARCHIVE: boolean, RAW_XMLOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): COTDetailT;
    unpackTo(_o: COTDetailT): void;
}
export declare class COTDetailT implements flatbuffers.IGeneratedObject {
    CALLSIGN: string | Uint8Array | null;
    ENDPOINT: string | Uint8Array | null;
    PHONE: string | Uint8Array | null;
    COURSE: number;
    SPEED: number;
    GROUP_NAME: string | Uint8Array | null;
    GROUP_ROLE: string | Uint8Array | null;
    STATUS_BATTERY: number;
    STATUS_READINESS: boolean;
    PREC_LOCATION_SOURCE: string | Uint8Array | null;
    PREC_ALTSRC: string | Uint8Array | null;
    UID_DROID: string | Uint8Array | null;
    REMARKS: string | Uint8Array | null;
    REMARKS_SOURCE: string | Uint8Array | null;
    REMARKS_TIME: string | Uint8Array | null;
    LINK_UID: string | Uint8Array | null;
    LINK_TYPE: string | Uint8Array | null;
    LINK_RELATION: string | Uint8Array | null;
    COLOR: number;
    STROKE_WEIGHT: number;
    FILL_COLOR: number;
    LABELLED: boolean;
    ARCHIVE: boolean;
    RAW_XML: string | Uint8Array | null;
    constructor(CALLSIGN?: string | Uint8Array | null, ENDPOINT?: string | Uint8Array | null, PHONE?: string | Uint8Array | null, COURSE?: number, SPEED?: number, GROUP_NAME?: string | Uint8Array | null, GROUP_ROLE?: string | Uint8Array | null, STATUS_BATTERY?: number, STATUS_READINESS?: boolean, PREC_LOCATION_SOURCE?: string | Uint8Array | null, PREC_ALTSRC?: string | Uint8Array | null, UID_DROID?: string | Uint8Array | null, REMARKS?: string | Uint8Array | null, REMARKS_SOURCE?: string | Uint8Array | null, REMARKS_TIME?: string | Uint8Array | null, LINK_UID?: string | Uint8Array | null, LINK_TYPE?: string | Uint8Array | null, LINK_RELATION?: string | Uint8Array | null, COLOR?: number, STROKE_WEIGHT?: number, FILL_COLOR?: number, LABELLED?: boolean, ARCHIVE?: boolean, RAW_XML?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=COTDetail.d.ts.map