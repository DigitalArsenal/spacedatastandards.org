import * as flatbuffers from 'flatbuffers';
/**
 * An identifier of the same system in another catalog.
 */
export declare class SSYCrossIdentifier implements flatbuffers.IUnpackableObject<SSYCrossIdentifierT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): SSYCrossIdentifier;
    static getRootAsSSYCrossIdentifier(bb: flatbuffers.ByteBuffer, obj?: SSYCrossIdentifier): SSYCrossIdentifier;
    static getSizePrefixedRootAsSSYCrossIdentifier(bb: flatbuffers.ByteBuffer, obj?: SSYCrossIdentifier): SSYCrossIdentifier;
    /**
     * Catalog, e.g. LVG, HyperLEDA, NED-LVS, SGA, Harris, Hunt+Reffert2023.
     */
    CATALOG(): string;
    CATALOG(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    IDENTIFIER(): string;
    IDENTIFIER(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    static startSSYCrossIdentifier(builder: flatbuffers.Builder): void;
    static addCatalog(builder: flatbuffers.Builder, CATALOGOffset: flatbuffers.Offset): void;
    static addIdentifier(builder: flatbuffers.Builder, IDENTIFIEROffset: flatbuffers.Offset): void;
    static endSSYCrossIdentifier(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createSSYCrossIdentifier(builder: flatbuffers.Builder, CATALOGOffset: flatbuffers.Offset, IDENTIFIEROffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): SSYCrossIdentifierT;
    unpackTo(_o: SSYCrossIdentifierT): void;
}
export declare class SSYCrossIdentifierT implements flatbuffers.IGeneratedObject {
    CATALOG: string | Uint8Array | null;
    IDENTIFIER: string | Uint8Array | null;
    constructor(CATALOG?: string | Uint8Array | null, IDENTIFIER?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=SSYCrossIdentifier.d.ts.map