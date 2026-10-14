import * as flatbuffers from 'flatbuffers';
/**
 * One USER_DEFINED_x keyword of an ACM, or one USER_DEFINED element of its XML
 * form: the parameter name (the x) and the value as written.
 */
export declare class ACMUserDefinedParameter implements flatbuffers.IUnpackableObject<ACMUserDefinedParameterT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): ACMUserDefinedParameter;
    static getRootAsACMUserDefinedParameter(bb: flatbuffers.ByteBuffer, obj?: ACMUserDefinedParameter): ACMUserDefinedParameter;
    static getSizePrefixedRootAsACMUserDefinedParameter(bb: flatbuffers.ByteBuffer, obj?: ACMUserDefinedParameter): ACMUserDefinedParameter;
    /**
     * x, the part of the keyword after USER_DEFINED_ (the XML parameter attribute)
     */
    PARAM_NAME(): string | null;
    PARAM_NAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * The value as written
     */
    PARAM_VALUE(): string | null;
    PARAM_VALUE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    static startACMUserDefinedParameter(builder: flatbuffers.Builder): void;
    static addParamName(builder: flatbuffers.Builder, PARAM_NAMEOffset: flatbuffers.Offset): void;
    static addParamValue(builder: flatbuffers.Builder, PARAM_VALUEOffset: flatbuffers.Offset): void;
    static endACMUserDefinedParameter(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createACMUserDefinedParameter(builder: flatbuffers.Builder, PARAM_NAMEOffset: flatbuffers.Offset, PARAM_VALUEOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): ACMUserDefinedParameterT;
    unpackTo(_o: ACMUserDefinedParameterT): void;
}
export declare class ACMUserDefinedParameterT implements flatbuffers.IGeneratedObject {
    PARAM_NAME: string | Uint8Array | null;
    PARAM_VALUE: string | Uint8Array | null;
    constructor(PARAM_NAME?: string | Uint8Array | null, PARAM_VALUE?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=ACMUserDefinedParameter.d.ts.map