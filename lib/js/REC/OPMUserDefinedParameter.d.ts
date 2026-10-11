import * as flatbuffers from 'flatbuffers';
/**
 * One USER_DEFINED_x keyword of an OPM, or one USER_DEFINED element of its XML
 * form: the parameter name (the x) and the value as written.
 */
export declare class OPMUserDefinedParameter implements flatbuffers.IUnpackableObject<OPMUserDefinedParameterT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): OPMUserDefinedParameter;
    static getRootAsOPMUserDefinedParameter(bb: flatbuffers.ByteBuffer, obj?: OPMUserDefinedParameter): OPMUserDefinedParameter;
    static getSizePrefixedRootAsOPMUserDefinedParameter(bb: flatbuffers.ByteBuffer, obj?: OPMUserDefinedParameter): OPMUserDefinedParameter;
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
    static startOPMUserDefinedParameter(builder: flatbuffers.Builder): void;
    static addParamName(builder: flatbuffers.Builder, PARAM_NAMEOffset: flatbuffers.Offset): void;
    static addParamValue(builder: flatbuffers.Builder, PARAM_VALUEOffset: flatbuffers.Offset): void;
    static endOPMUserDefinedParameter(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createOPMUserDefinedParameter(builder: flatbuffers.Builder, PARAM_NAMEOffset: flatbuffers.Offset, PARAM_VALUEOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): OPMUserDefinedParameterT;
    unpackTo(_o: OPMUserDefinedParameterT): void;
}
export declare class OPMUserDefinedParameterT implements flatbuffers.IGeneratedObject {
    PARAM_NAME: string | Uint8Array | null;
    PARAM_VALUE: string | Uint8Array | null;
    constructor(PARAM_NAME?: string | Uint8Array | null, PARAM_VALUE?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=OPMUserDefinedParameter.d.ts.map