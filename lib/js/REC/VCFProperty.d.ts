import * as flatbuffers from 'flatbuffers';
/**
 * One emitted card property, as the publisher parsed its own output.
 */
export declare class VCFProperty implements flatbuffers.IUnpackableObject<VCFPropertyT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): VCFProperty;
    static getRootAsVCFProperty(bb: flatbuffers.ByteBuffer, obj?: VCFProperty): VCFProperty;
    static getSizePrefixedRootAsVCFProperty(bb: flatbuffers.ByteBuffer, obj?: VCFProperty): VCFProperty;
    /**
     * Property name verbatim and upper-case, e.g. `EMAIL`.
     */
    NAME(): string;
    NAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    /**
     * Parameter tokens verbatim in emission order, each a single `name=value`
     * pair. A parameter the emitter wrote without a value is carried verbatim.
     */
    PARAMETERS(index: number): string;
    PARAMETERS(index: number, optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    parametersLength(): number;
    /**
     * Property value with the text format's escaping REMOVED, so a consumer
     * reads a value rather than re-implementing an unescaper. `CARD` retains the
     * escaped form.
     */
    VALUE(): string | null;
    VALUE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Grouping prefix the property was emitted under, when the emitter used one.
     */
    GROUP(): string | null;
    GROUP(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Zero-based position of this property in the canonical emission order for
     * this FORM. Two conforming emitters agree on this number.
     */
    ORDER(): number;
    /**
     * Octet length of the property's complete UNFOLDED content line, excluding
     * the line terminator. This is the number folding is applied against.
     */
    OCTET_LENGTH(): number;
    static startVCFProperty(builder: flatbuffers.Builder): void;
    static addName(builder: flatbuffers.Builder, NAMEOffset: flatbuffers.Offset): void;
    static addParameters(builder: flatbuffers.Builder, PARAMETERSOffset: flatbuffers.Offset): void;
    static createParametersVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startParametersVector(builder: flatbuffers.Builder, numElems: number): void;
    static addValue(builder: flatbuffers.Builder, VALUEOffset: flatbuffers.Offset): void;
    static addGroup(builder: flatbuffers.Builder, GROUPOffset: flatbuffers.Offset): void;
    static addOrder(builder: flatbuffers.Builder, ORDER: number): void;
    static addOctetLength(builder: flatbuffers.Builder, OCTET_LENGTH: number): void;
    static endVCFProperty(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createVCFProperty(builder: flatbuffers.Builder, NAMEOffset: flatbuffers.Offset, PARAMETERSOffset: flatbuffers.Offset, VALUEOffset: flatbuffers.Offset, GROUPOffset: flatbuffers.Offset, ORDER: number, OCTET_LENGTH: number): flatbuffers.Offset;
    unpack(): VCFPropertyT;
    unpackTo(_o: VCFPropertyT): void;
}
export declare class VCFPropertyT implements flatbuffers.IGeneratedObject {
    NAME: string | Uint8Array | null;
    PARAMETERS: (string)[];
    VALUE: string | Uint8Array | null;
    GROUP: string | Uint8Array | null;
    ORDER: number;
    OCTET_LENGTH: number;
    constructor(NAME?: string | Uint8Array | null, PARAMETERS?: (string)[], VALUE?: string | Uint8Array | null, GROUP?: string | Uint8Array | null, ORDER?: number, OCTET_LENGTH?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=VCFProperty.d.ts.map