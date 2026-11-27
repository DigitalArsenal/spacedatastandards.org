import * as flatbuffers from 'flatbuffers';
/**
 * One non-credential HTTP header observed by the collecting edge/server.
 */
export declare class AISHeader implements flatbuffers.IUnpackableObject<AISHeaderT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): AISHeader;
    static getRootAsAISHeader(bb: flatbuffers.ByteBuffer, obj?: AISHeader): AISHeader;
    static getSizePrefixedRootAsAISHeader(bb: flatbuffers.ByteBuffer, obj?: AISHeader): AISHeader;
    /**
     * Lowercase HTTP header name (collector strips Authorization, Proxy-Authorization,
     * Cookie, Set-Cookie, X-Api-Key, X-Auth-Token, X-SDN-Token, CF-Access-JWT-Assertion,
     * and CF-Access-Client-Secret before persisting).
     */
    NAME(): string;
    NAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    /**
     * Verbatim non-credential HTTP header value.
     */
    VALUE(): string | null;
    VALUE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    static startAISHeader(builder: flatbuffers.Builder): void;
    static addName(builder: flatbuffers.Builder, NAMEOffset: flatbuffers.Offset): void;
    static addValue(builder: flatbuffers.Builder, VALUEOffset: flatbuffers.Offset): void;
    static endAISHeader(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createAISHeader(builder: flatbuffers.Builder, NAMEOffset: flatbuffers.Offset, VALUEOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): AISHeaderT;
    unpackTo(_o: AISHeaderT): void;
}
export declare class AISHeaderT implements flatbuffers.IGeneratedObject {
    NAME: string | Uint8Array | null;
    VALUE: string | Uint8Array | null;
    constructor(NAME?: string | Uint8Array | null, VALUE?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=AISHeader.d.ts.map