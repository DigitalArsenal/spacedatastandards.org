import * as flatbuffers from 'flatbuffers';
/**
 * One name a place is known by, beside its primary NAME. Every attribute is
 * carried as the gazetteer publishes it; a consumer choosing a display name
 * applies its own policy over these flags and never has the choice baked in
 * by the publisher.
 */
export declare class GNPName implements flatbuffers.IUnpackableObject<GNPNameT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): GNPName;
    static getRootAsGNPName(bb: flatbuffers.ByteBuffer, obj?: GNPName): GNPName;
    static getSizePrefixedRootAsGNPName(bb: flatbuffers.ByteBuffer, obj?: GNPName): GNPName;
    /**
     * The alternate name verbatim, in its own script, unnormalized.
     */
    NAME(): string;
    NAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    /**
     * ISO 639 language tag when the gazetteer states one. A gazetteer may also
     * state a non-language tag for a link or a postal, IATA, ICAO, or similar
     * coded name; that token is carried verbatim rather than discarded.
     */
    LANGUAGE(): string | null;
    LANGUAGE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * The gazetteer marks this as the preferred name for its language.
     */
    IS_PREFERRED(): boolean;
    /**
     * The gazetteer marks this as a short form.
     */
    IS_SHORT(): boolean;
    /**
     * The gazetteer marks this as colloquial or unofficial.
     */
    IS_COLLOQUIAL(): boolean;
    /**
     * The gazetteer marks this name as no longer in use.
     */
    IS_HISTORIC(): boolean;
    /**
     * Period the name was in use, verbatim as the gazetteer states it. Not
     * normalized to RFC 3339: gazetteers publish partial and era-qualified
     * dates here, and coercion would invent precision.
     */
    VALID_FROM(): string | null;
    VALID_FROM(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    VALID_TO(): string | null;
    VALID_TO(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    static startGNPName(builder: flatbuffers.Builder): void;
    static addName(builder: flatbuffers.Builder, NAMEOffset: flatbuffers.Offset): void;
    static addLanguage(builder: flatbuffers.Builder, LANGUAGEOffset: flatbuffers.Offset): void;
    static addIsPreferred(builder: flatbuffers.Builder, IS_PREFERRED: boolean): void;
    static addIsShort(builder: flatbuffers.Builder, IS_SHORT: boolean): void;
    static addIsColloquial(builder: flatbuffers.Builder, IS_COLLOQUIAL: boolean): void;
    static addIsHistoric(builder: flatbuffers.Builder, IS_HISTORIC: boolean): void;
    static addValidFrom(builder: flatbuffers.Builder, VALID_FROMOffset: flatbuffers.Offset): void;
    static addValidTo(builder: flatbuffers.Builder, VALID_TOOffset: flatbuffers.Offset): void;
    static endGNPName(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createGNPName(builder: flatbuffers.Builder, NAMEOffset: flatbuffers.Offset, LANGUAGEOffset: flatbuffers.Offset, IS_PREFERRED: boolean, IS_SHORT: boolean, IS_COLLOQUIAL: boolean, IS_HISTORIC: boolean, VALID_FROMOffset: flatbuffers.Offset, VALID_TOOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): GNPNameT;
    unpackTo(_o: GNPNameT): void;
}
export declare class GNPNameT implements flatbuffers.IGeneratedObject {
    NAME: string | Uint8Array | null;
    LANGUAGE: string | Uint8Array | null;
    IS_PREFERRED: boolean;
    IS_SHORT: boolean;
    IS_COLLOQUIAL: boolean;
    IS_HISTORIC: boolean;
    VALID_FROM: string | Uint8Array | null;
    VALID_TO: string | Uint8Array | null;
    constructor(NAME?: string | Uint8Array | null, LANGUAGE?: string | Uint8Array | null, IS_PREFERRED?: boolean, IS_SHORT?: boolean, IS_COLLOQUIAL?: boolean, IS_HISTORIC?: boolean, VALID_FROM?: string | Uint8Array | null, VALID_TO?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=GNPName.d.ts.map