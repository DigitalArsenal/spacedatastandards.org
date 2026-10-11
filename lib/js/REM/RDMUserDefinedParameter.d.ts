import * as flatbuffers from 'flatbuffers';
/**
 * One USER_DEFINED_x keyword of an RDM, or one USER_DEFINED element of its XML
 * form: the parameter name (the x) and the value as written.
 */
export declare class RDMUserDefinedParameter implements flatbuffers.IUnpackableObject<RDMUserDefinedParameterT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): RDMUserDefinedParameter;
    static getRootAsRDMUserDefinedParameter(bb: flatbuffers.ByteBuffer, obj?: RDMUserDefinedParameter): RDMUserDefinedParameter;
    static getSizePrefixedRootAsRDMUserDefinedParameter(bb: flatbuffers.ByteBuffer, obj?: RDMUserDefinedParameter): RDMUserDefinedParameter;
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
    static startRDMUserDefinedParameter(builder: flatbuffers.Builder): void;
    static addParamName(builder: flatbuffers.Builder, PARAM_NAMEOffset: flatbuffers.Offset): void;
    static addParamValue(builder: flatbuffers.Builder, PARAM_VALUEOffset: flatbuffers.Offset): void;
    static endRDMUserDefinedParameter(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createRDMUserDefinedParameter(builder: flatbuffers.Builder, PARAM_NAMEOffset: flatbuffers.Offset, PARAM_VALUEOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): RDMUserDefinedParameterT;
    unpackTo(_o: RDMUserDefinedParameterT): void;
}
export declare class RDMUserDefinedParameterT implements flatbuffers.IGeneratedObject {
    PARAM_NAME: string | Uint8Array | null;
    PARAM_VALUE: string | Uint8Array | null;
    constructor(PARAM_NAME?: string | Uint8Array | null, PARAM_VALUE?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=RDMUserDefinedParameter.d.ts.map