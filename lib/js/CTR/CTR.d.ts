import * as flatbuffers from 'flatbuffers';
/**
 * Country Identity Message
 */
export declare class CTR implements flatbuffers.IUnpackableObject<CTRT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): CTR;
    static getRootAsCTR(bb: flatbuffers.ByteBuffer, obj?: CTR): CTR;
    static getSizePrefixedRootAsCTR(bb: flatbuffers.ByteBuffer, obj?: CTR): CTR;
    /**
     * ISO 3166 Numeric code
     */
    ID(): string | null;
    ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Country name
     */
    NAME(): string | null;
    NAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * GENC code
     */
    GENC_CODE(): string | null;
    GENC_CODE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * ISO 3166 Alpha-2 code
     */
    ALPHA_2_CODE(): string | null;
    ALPHA_2_CODE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * ISO 3166 Alpha-3 code
     */
    ALPHA_3_CODE(): string | null;
    ALPHA_3_CODE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Stanag code
     */
    STANAG_CODE(): string | null;
    STANAG_CODE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Internet country code top-level domain (ccTLD)
     */
    INTERNET_CCTLD(): string | null;
    INTERNET_CCTLD(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Additional comments
     */
    COMMENT(): string | null;
    COMMENT(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    static startCTR(builder: flatbuffers.Builder): void;
    static addId(builder: flatbuffers.Builder, IDOffset: flatbuffers.Offset): void;
    static addName(builder: flatbuffers.Builder, NAMEOffset: flatbuffers.Offset): void;
    static addGencCode(builder: flatbuffers.Builder, GENC_CODEOffset: flatbuffers.Offset): void;
    static addAlpha2Code(builder: flatbuffers.Builder, ALPHA_2_CODEOffset: flatbuffers.Offset): void;
    static addAlpha3Code(builder: flatbuffers.Builder, ALPHA_3_CODEOffset: flatbuffers.Offset): void;
    static addStanagCode(builder: flatbuffers.Builder, STANAG_CODEOffset: flatbuffers.Offset): void;
    static addInternetCctld(builder: flatbuffers.Builder, INTERNET_CCTLDOffset: flatbuffers.Offset): void;
    static addComment(builder: flatbuffers.Builder, COMMENTOffset: flatbuffers.Offset): void;
    static endCTR(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createCTR(builder: flatbuffers.Builder, IDOffset: flatbuffers.Offset, NAMEOffset: flatbuffers.Offset, GENC_CODEOffset: flatbuffers.Offset, ALPHA_2_CODEOffset: flatbuffers.Offset, ALPHA_3_CODEOffset: flatbuffers.Offset, STANAG_CODEOffset: flatbuffers.Offset, INTERNET_CCTLDOffset: flatbuffers.Offset, COMMENTOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): CTRT;
    unpackTo(_o: CTRT): void;
}
export declare class CTRT implements flatbuffers.IGeneratedObject {
    ID: string | Uint8Array | null;
    NAME: string | Uint8Array | null;
    GENC_CODE: string | Uint8Array | null;
    ALPHA_2_CODE: string | Uint8Array | null;
    ALPHA_3_CODE: string | Uint8Array | null;
    STANAG_CODE: string | Uint8Array | null;
    INTERNET_CCTLD: string | Uint8Array | null;
    COMMENT: string | Uint8Array | null;
    constructor(ID?: string | Uint8Array | null, NAME?: string | Uint8Array | null, GENC_CODE?: string | Uint8Array | null, ALPHA_2_CODE?: string | Uint8Array | null, ALPHA_3_CODE?: string | Uint8Array | null, STANAG_CODE?: string | Uint8Array | null, INTERNET_CCTLD?: string | Uint8Array | null, COMMENT?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=CTR.d.ts.map