import * as flatbuffers from 'flatbuffers';
/**
 * One identity the track is known by in a named identity scheme.
 */
export declare class TMSIdentifier implements flatbuffers.IUnpackableObject<TMSIdentifierT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): TMSIdentifier;
    static getRootAsTMSIdentifier(bb: flatbuffers.ByteBuffer, obj?: TMSIdentifier): TMSIdentifier;
    static getSizePrefixedRootAsTMSIdentifier(bb: flatbuffers.ByteBuffer, obj?: TMSIdentifier): TMSIdentifier;
    /**
     * Identity scheme token, verbatim (the identity system's own name).
     * Never a field name and never normalized by the publisher.
     */
    SCHEME(): string;
    SCHEME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    /**
     * The identifier within that scheme, verbatim.
     */
    VALUE(): string;
    VALUE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    static startTMSIdentifier(builder: flatbuffers.Builder): void;
    static addScheme(builder: flatbuffers.Builder, SCHEMEOffset: flatbuffers.Offset): void;
    static addValue(builder: flatbuffers.Builder, VALUEOffset: flatbuffers.Offset): void;
    static endTMSIdentifier(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createTMSIdentifier(builder: flatbuffers.Builder, SCHEMEOffset: flatbuffers.Offset, VALUEOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): TMSIdentifierT;
    unpackTo(_o: TMSIdentifierT): void;
}
export declare class TMSIdentifierT implements flatbuffers.IGeneratedObject {
    SCHEME: string | Uint8Array | null;
    VALUE: string | Uint8Array | null;
    constructor(SCHEME?: string | Uint8Array | null, VALUE?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=TMSIdentifier.d.ts.map