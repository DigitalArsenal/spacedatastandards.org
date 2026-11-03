import * as flatbuffers from 'flatbuffers';
import { PVN, PVNT } from './PVN.js';
import { swaMessageKind } from './swaMessageKind.js';
import { swaScaleFamily } from './swaScaleFamily.js';
/**
 * Space Weather Alert
 */
export declare class SWA implements flatbuffers.IUnpackableObject<SWAT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): SWA;
    static getRootAsSWA(bb: flatbuffers.ByteBuffer, obj?: SWA): SWA;
    static getSizePrefixedRootAsSWA(bb: flatbuffers.ByteBuffer, obj?: SWA): SWA;
    static bufferHasIdentifier(bb: flatbuffers.ByteBuffer): boolean;
    /**
     * Product identity, verbatim (e.g. K05A, EF3A).
     */
    PRODUCT_ID(): string;
    PRODUCT_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    /**
     * Message code and serial number, verbatim (e.g. ALTK05, 2051).
     */
    MESSAGE_CODE(): string | null;
    MESSAGE_CODE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    SERIAL_NUMBER(): string | null;
    SERIAL_NUMBER(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Serial this message continues, extends or cancels, verbatim.
     */
    REFERS_TO_SERIAL(): string | null;
    REFERS_TO_SERIAL(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    KIND(): swaMessageKind;
    ISSUED_AT(): string;
    ISSUED_AT(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    /**
     * Times stated in the text, RFC 3339 UTC; absent when not stated.
     */
    BEGIN_TIME(): string | null;
    BEGIN_TIME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    END_TIME(): string | null;
    END_TIME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    VALID_FROM(): string | null;
    VALID_FROM(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    VALID_TO(): string | null;
    VALID_TO(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    SCALE_FAMILY(): swaScaleFamily;
    /**
     * Scale level 1-5; 0 when none is stated.
     */
    SCALE_LEVEL(): number;
    /**
     * The message, verbatim.
     */
    MESSAGE(): string;
    MESSAGE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    PROVENANCE(obj?: PVN): PVN | null;
    SOURCE_CID(): string | null;
    SOURCE_CID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    SOURCE_DIGEST(): string | null;
    SOURCE_DIGEST(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    RETRIEVED_AT(): string | null;
    RETRIEVED_AT(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    static startSWA(builder: flatbuffers.Builder): void;
    static addProductId(builder: flatbuffers.Builder, PRODUCT_IDOffset: flatbuffers.Offset): void;
    static addMessageCode(builder: flatbuffers.Builder, MESSAGE_CODEOffset: flatbuffers.Offset): void;
    static addSerialNumber(builder: flatbuffers.Builder, SERIAL_NUMBEROffset: flatbuffers.Offset): void;
    static addRefersToSerial(builder: flatbuffers.Builder, REFERS_TO_SERIALOffset: flatbuffers.Offset): void;
    static addKind(builder: flatbuffers.Builder, KIND: swaMessageKind): void;
    static addIssuedAt(builder: flatbuffers.Builder, ISSUED_ATOffset: flatbuffers.Offset): void;
    static addBeginTime(builder: flatbuffers.Builder, BEGIN_TIMEOffset: flatbuffers.Offset): void;
    static addEndTime(builder: flatbuffers.Builder, END_TIMEOffset: flatbuffers.Offset): void;
    static addValidFrom(builder: flatbuffers.Builder, VALID_FROMOffset: flatbuffers.Offset): void;
    static addValidTo(builder: flatbuffers.Builder, VALID_TOOffset: flatbuffers.Offset): void;
    static addScaleFamily(builder: flatbuffers.Builder, SCALE_FAMILY: swaScaleFamily): void;
    static addScaleLevel(builder: flatbuffers.Builder, SCALE_LEVEL: number): void;
    static addMessage(builder: flatbuffers.Builder, MESSAGEOffset: flatbuffers.Offset): void;
    static addProvenance(builder: flatbuffers.Builder, PROVENANCEOffset: flatbuffers.Offset): void;
    static addSourceCid(builder: flatbuffers.Builder, SOURCE_CIDOffset: flatbuffers.Offset): void;
    static addSourceDigest(builder: flatbuffers.Builder, SOURCE_DIGESTOffset: flatbuffers.Offset): void;
    static addRetrievedAt(builder: flatbuffers.Builder, RETRIEVED_ATOffset: flatbuffers.Offset): void;
    static endSWA(builder: flatbuffers.Builder): flatbuffers.Offset;
    static finishSWABuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static finishSizePrefixedSWABuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    unpack(): SWAT;
    unpackTo(_o: SWAT): void;
}
export declare class SWAT implements flatbuffers.IGeneratedObject {
    PRODUCT_ID: string | Uint8Array | null;
    MESSAGE_CODE: string | Uint8Array | null;
    SERIAL_NUMBER: string | Uint8Array | null;
    REFERS_TO_SERIAL: string | Uint8Array | null;
    KIND: swaMessageKind;
    ISSUED_AT: string | Uint8Array | null;
    BEGIN_TIME: string | Uint8Array | null;
    END_TIME: string | Uint8Array | null;
    VALID_FROM: string | Uint8Array | null;
    VALID_TO: string | Uint8Array | null;
    SCALE_FAMILY: swaScaleFamily;
    SCALE_LEVEL: number;
    MESSAGE: string | Uint8Array | null;
    PROVENANCE: PVNT | null;
    SOURCE_CID: string | Uint8Array | null;
    SOURCE_DIGEST: string | Uint8Array | null;
    RETRIEVED_AT: string | Uint8Array | null;
    constructor(PRODUCT_ID?: string | Uint8Array | null, MESSAGE_CODE?: string | Uint8Array | null, SERIAL_NUMBER?: string | Uint8Array | null, REFERS_TO_SERIAL?: string | Uint8Array | null, KIND?: swaMessageKind, ISSUED_AT?: string | Uint8Array | null, BEGIN_TIME?: string | Uint8Array | null, END_TIME?: string | Uint8Array | null, VALID_FROM?: string | Uint8Array | null, VALID_TO?: string | Uint8Array | null, SCALE_FAMILY?: swaScaleFamily, SCALE_LEVEL?: number, MESSAGE?: string | Uint8Array | null, PROVENANCE?: PVNT | null, SOURCE_CID?: string | Uint8Array | null, SOURCE_DIGEST?: string | Uint8Array | null, RETRIEVED_AT?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=SWA.d.ts.map