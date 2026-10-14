import * as flatbuffers from 'flatbuffers';
/**
 * One named request parameter (a query-string pair, a path segment bound to
 * a name, a form field or a header the service reads).
 */
export declare class APRParameter implements flatbuffers.IUnpackableObject<APRParameterT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): APRParameter;
    static getRootAsAPRParameter(bb: flatbuffers.ByteBuffer, obj?: APRParameter): APRParameter;
    static getSizePrefixedRootAsAPRParameter(bb: flatbuffers.ByteBuffer, obj?: APRParameter): APRParameter;
    /**
     * Parameter name as the service defines it, e.g. "limit", "epoch",
     * "peerId".
     */
    NAME(): string | null;
    NAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Parameter value as received, as text.
     */
    VALUE(): string | null;
    VALUE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    static startAPRParameter(builder: flatbuffers.Builder): void;
    static addName(builder: flatbuffers.Builder, NAMEOffset: flatbuffers.Offset): void;
    static addValue(builder: flatbuffers.Builder, VALUEOffset: flatbuffers.Offset): void;
    static endAPRParameter(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createAPRParameter(builder: flatbuffers.Builder, NAMEOffset: flatbuffers.Offset, VALUEOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): APRParameterT;
    unpackTo(_o: APRParameterT): void;
}
export declare class APRParameterT implements flatbuffers.IGeneratedObject {
    NAME: string | Uint8Array | null;
    VALUE: string | Uint8Array | null;
    constructor(NAME?: string | Uint8Array | null, VALUE?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=APRParameter.d.ts.map