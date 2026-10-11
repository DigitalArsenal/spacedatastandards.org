import * as flatbuffers from 'flatbuffers';
/**
 * One USER_DEFINED_x keyword of an OMM, or one USER_DEFINED element of its XML
 * form: the parameter name (the x) and the value as written.
 */
export declare class OMMUserDefinedParameter implements flatbuffers.IUnpackableObject<OMMUserDefinedParameterT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): OMMUserDefinedParameter;
    static getRootAsOMMUserDefinedParameter(bb: flatbuffers.ByteBuffer, obj?: OMMUserDefinedParameter): OMMUserDefinedParameter;
    static getSizePrefixedRootAsOMMUserDefinedParameter(bb: flatbuffers.ByteBuffer, obj?: OMMUserDefinedParameter): OMMUserDefinedParameter;
    /**
     * x, the part of the keyword after USER_DEFINED_ (the XML parameter attribute)
     */
    PARAM_NAME(): string | null;
    PARAM_NAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * The value as written, unit-less text
     */
    PARAM_VALUE(): string | null;
    PARAM_VALUE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    static startOMMUserDefinedParameter(builder: flatbuffers.Builder): void;
    static addParamName(builder: flatbuffers.Builder, PARAM_NAMEOffset: flatbuffers.Offset): void;
    static addParamValue(builder: flatbuffers.Builder, PARAM_VALUEOffset: flatbuffers.Offset): void;
    static endOMMUserDefinedParameter(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createOMMUserDefinedParameter(builder: flatbuffers.Builder, PARAM_NAMEOffset: flatbuffers.Offset, PARAM_VALUEOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): OMMUserDefinedParameterT;
    unpackTo(_o: OMMUserDefinedParameterT): void;
}
export declare class OMMUserDefinedParameterT implements flatbuffers.IGeneratedObject {
    PARAM_NAME: string | Uint8Array | null;
    PARAM_VALUE: string | Uint8Array | null;
    constructor(PARAM_NAME?: string | Uint8Array | null, PARAM_VALUE?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=OMMUserDefinedParameter.d.ts.map