import * as flatbuffers from 'flatbuffers';
/**
 * Launch Event
 */
export declare class LNE implements flatbuffers.IUnpackableObject<LNET> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): LNE;
    static getRootAsLNE(bb: flatbuffers.ByteBuffer, obj?: LNE): LNE;
    static getSizePrefixedRootAsLNE(bb: flatbuffers.ByteBuffer, obj?: LNE): LNE;
    static bufferHasIdentifier(bb: flatbuffers.ByteBuffer): boolean;
    ID(): string | null;
    ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    ORIG_OBJECT_ID(): string | null;
    ORIG_OBJECT_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    DERIVED_FROM(): string | null;
    DERIVED_FROM(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    DECLASSIFICATION_DATE(): string | null;
    DECLASSIFICATION_DATE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    DECLASSIFICATION_STRING(): string | null;
    DECLASSIFICATION_STRING(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    MSG_CREATE_DATE(): string | null;
    MSG_CREATE_DATE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    LAUNCH_FAILURE_CODE(): string | null;
    LAUNCH_FAILURE_CODE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    LAUNCH_DATE(): string | null;
    LAUNCH_DATE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    BE_NUMBER(): string | null;
    BE_NUMBER(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    O_SUFFIX(): string | null;
    O_SUFFIX(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    LAUNCH_FACILITY_NAME(): string | null;
    LAUNCH_FACILITY_NAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    ON_ORBIT(): string | null;
    ON_ORBIT(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    SAT_NO(): number;
    static startLNE(builder: flatbuffers.Builder): void;
    static addId(builder: flatbuffers.Builder, IDOffset: flatbuffers.Offset): void;
    static addOrigObjectId(builder: flatbuffers.Builder, ORIG_OBJECT_IDOffset: flatbuffers.Offset): void;
    static addDerivedFrom(builder: flatbuffers.Builder, DERIVED_FROMOffset: flatbuffers.Offset): void;
    static addDeclassificationDate(builder: flatbuffers.Builder, DECLASSIFICATION_DATEOffset: flatbuffers.Offset): void;
    static addDeclassificationString(builder: flatbuffers.Builder, DECLASSIFICATION_STRINGOffset: flatbuffers.Offset): void;
    static addMsgCreateDate(builder: flatbuffers.Builder, MSG_CREATE_DATEOffset: flatbuffers.Offset): void;
    static addLaunchFailureCode(builder: flatbuffers.Builder, LAUNCH_FAILURE_CODEOffset: flatbuffers.Offset): void;
    static addLaunchDate(builder: flatbuffers.Builder, LAUNCH_DATEOffset: flatbuffers.Offset): void;
    static addBeNumber(builder: flatbuffers.Builder, BE_NUMBEROffset: flatbuffers.Offset): void;
    static addOSuffix(builder: flatbuffers.Builder, O_SUFFIXOffset: flatbuffers.Offset): void;
    static addLaunchFacilityName(builder: flatbuffers.Builder, LAUNCH_FACILITY_NAMEOffset: flatbuffers.Offset): void;
    static addOnOrbit(builder: flatbuffers.Builder, ON_ORBITOffset: flatbuffers.Offset): void;
    static addSatNo(builder: flatbuffers.Builder, SAT_NO: number): void;
    static endLNE(builder: flatbuffers.Builder): flatbuffers.Offset;
    static finishLNEBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static finishSizePrefixedLNEBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static createLNE(builder: flatbuffers.Builder, IDOffset: flatbuffers.Offset, ORIG_OBJECT_IDOffset: flatbuffers.Offset, DERIVED_FROMOffset: flatbuffers.Offset, DECLASSIFICATION_DATEOffset: flatbuffers.Offset, DECLASSIFICATION_STRINGOffset: flatbuffers.Offset, MSG_CREATE_DATEOffset: flatbuffers.Offset, LAUNCH_FAILURE_CODEOffset: flatbuffers.Offset, LAUNCH_DATEOffset: flatbuffers.Offset, BE_NUMBEROffset: flatbuffers.Offset, O_SUFFIXOffset: flatbuffers.Offset, LAUNCH_FACILITY_NAMEOffset: flatbuffers.Offset, ON_ORBITOffset: flatbuffers.Offset, SAT_NO: number): flatbuffers.Offset;
    unpack(): LNET;
    unpackTo(_o: LNET): void;
}
export declare class LNET implements flatbuffers.IGeneratedObject {
    ID: string | Uint8Array | null;
    ORIG_OBJECT_ID: string | Uint8Array | null;
    DERIVED_FROM: string | Uint8Array | null;
    DECLASSIFICATION_DATE: string | Uint8Array | null;
    DECLASSIFICATION_STRING: string | Uint8Array | null;
    MSG_CREATE_DATE: string | Uint8Array | null;
    LAUNCH_FAILURE_CODE: string | Uint8Array | null;
    LAUNCH_DATE: string | Uint8Array | null;
    BE_NUMBER: string | Uint8Array | null;
    O_SUFFIX: string | Uint8Array | null;
    LAUNCH_FACILITY_NAME: string | Uint8Array | null;
    ON_ORBIT: string | Uint8Array | null;
    SAT_NO: number;
    constructor(ID?: string | Uint8Array | null, ORIG_OBJECT_ID?: string | Uint8Array | null, DERIVED_FROM?: string | Uint8Array | null, DECLASSIFICATION_DATE?: string | Uint8Array | null, DECLASSIFICATION_STRING?: string | Uint8Array | null, MSG_CREATE_DATE?: string | Uint8Array | null, LAUNCH_FAILURE_CODE?: string | Uint8Array | null, LAUNCH_DATE?: string | Uint8Array | null, BE_NUMBER?: string | Uint8Array | null, O_SUFFIX?: string | Uint8Array | null, LAUNCH_FACILITY_NAME?: string | Uint8Array | null, ON_ORBIT?: string | Uint8Array | null, SAT_NO?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=LNE.d.ts.map