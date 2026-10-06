import * as flatbuffers from 'flatbuffers';
/**
 * One identity the tracked object is known by in a named identity scheme.
 * Same shape and meaning as `TMSIdentifier`.
 */
export declare class ETSIdentifier implements flatbuffers.IUnpackableObject<ETSIdentifierT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): ETSIdentifier;
    static getRootAsETSIdentifier(bb: flatbuffers.ByteBuffer, obj?: ETSIdentifier): ETSIdentifier;
    static getSizePrefixedRootAsETSIdentifier(bb: flatbuffers.ByteBuffer, obj?: ETSIdentifier): ETSIdentifier;
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
    static startETSIdentifier(builder: flatbuffers.Builder): void;
    static addScheme(builder: flatbuffers.Builder, SCHEMEOffset: flatbuffers.Offset): void;
    static addValue(builder: flatbuffers.Builder, VALUEOffset: flatbuffers.Offset): void;
    static endETSIdentifier(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createETSIdentifier(builder: flatbuffers.Builder, SCHEMEOffset: flatbuffers.Offset, VALUEOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): ETSIdentifierT;
    unpackTo(_o: ETSIdentifierT): void;
}
export declare class ETSIdentifierT implements flatbuffers.IGeneratedObject {
    SCHEME: string | Uint8Array | null;
    VALUE: string | Uint8Array | null;
    constructor(SCHEME?: string | Uint8Array | null, VALUE?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=ETSIdentifier.d.ts.map