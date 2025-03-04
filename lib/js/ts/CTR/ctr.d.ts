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
    static bufferHasIdentifier(bb: flatbuffers.ByteBuffer): boolean;
    /**
     * ISO 3166 Numeric code
     */
    id(): string | null;
    id(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Country name
     */
    name(): string | null;
    name(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * GENC code
     */
    gencCode(): string | null;
    gencCode(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * ISO 3166 Alpha-2 code
     */
    alpha2Code(): string | null;
    alpha2Code(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * ISO 3166 Alpha-3 code
     */
    alpha3Code(): string | null;
    alpha3Code(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Stanag code
     */
    stanagCode(): string | null;
    stanagCode(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Internet country code top-level domain (ccTLD)
     */
    internetCctld(): string | null;
    internetCctld(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Additional comments
     */
    comment(): string | null;
    comment(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    static startCTR(builder: flatbuffers.Builder): void;
    static addId(builder: flatbuffers.Builder, idOffset: flatbuffers.Offset): void;
    static addName(builder: flatbuffers.Builder, nameOffset: flatbuffers.Offset): void;
    static addGencCode(builder: flatbuffers.Builder, gencCodeOffset: flatbuffers.Offset): void;
    static addAlpha2Code(builder: flatbuffers.Builder, alpha2CodeOffset: flatbuffers.Offset): void;
    static addAlpha3Code(builder: flatbuffers.Builder, alpha3CodeOffset: flatbuffers.Offset): void;
    static addStanagCode(builder: flatbuffers.Builder, stanagCodeOffset: flatbuffers.Offset): void;
    static addInternetCctld(builder: flatbuffers.Builder, internetCctldOffset: flatbuffers.Offset): void;
    static addComment(builder: flatbuffers.Builder, commentOffset: flatbuffers.Offset): void;
    static endCTR(builder: flatbuffers.Builder): flatbuffers.Offset;
    static finishCTRBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static finishSizePrefixedCTRBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static createCTR(builder: flatbuffers.Builder, idOffset: flatbuffers.Offset, nameOffset: flatbuffers.Offset, gencCodeOffset: flatbuffers.Offset, alpha2CodeOffset: flatbuffers.Offset, alpha3CodeOffset: flatbuffers.Offset, stanagCodeOffset: flatbuffers.Offset, internetCctldOffset: flatbuffers.Offset, commentOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): CTRT;
    unpackTo(_o: CTRT): void;
}
export declare class CTRT implements flatbuffers.IGeneratedObject {
    id: string | Uint8Array | null;
    name: string | Uint8Array | null;
    gencCode: string | Uint8Array | null;
    alpha2Code: string | Uint8Array | null;
    alpha3Code: string | Uint8Array | null;
    stanagCode: string | Uint8Array | null;
    internetCctld: string | Uint8Array | null;
    comment: string | Uint8Array | null;
    constructor(id?: string | Uint8Array | null, name?: string | Uint8Array | null, gencCode?: string | Uint8Array | null, alpha2Code?: string | Uint8Array | null, alpha3Code?: string | Uint8Array | null, stanagCode?: string | Uint8Array | null, internetCctld?: string | Uint8Array | null, comment?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=ctr.d.ts.map