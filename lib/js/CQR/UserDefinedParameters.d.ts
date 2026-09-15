import * as flatbuffers from 'flatbuffers';
export declare class UserDefinedParameters implements flatbuffers.IUnpackableObject<UserDefinedParametersT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): UserDefinedParameters;
    static getRootAsUserDefinedParameters(bb: flatbuffers.ByteBuffer, obj?: UserDefinedParameters): UserDefinedParameters;
    static getSizePrefixedRootAsUserDefinedParameters(bb: flatbuffers.ByteBuffer, obj?: UserDefinedParameters): UserDefinedParameters;
    /**
     * Name of the user-defined parameter.
     */
    PARAM_NAME(): string | null;
    PARAM_NAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Value of the user-defined parameter.
     */
    PARAM_VALUE(): string | null;
    PARAM_VALUE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    static startUserDefinedParameters(builder: flatbuffers.Builder): void;
    static addParamName(builder: flatbuffers.Builder, PARAM_NAMEOffset: flatbuffers.Offset): void;
    static addParamValue(builder: flatbuffers.Builder, PARAM_VALUEOffset: flatbuffers.Offset): void;
    static endUserDefinedParameters(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createUserDefinedParameters(builder: flatbuffers.Builder, PARAM_NAMEOffset: flatbuffers.Offset, PARAM_VALUEOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): UserDefinedParametersT;
    unpackTo(_o: UserDefinedParametersT): void;
}
export declare class UserDefinedParametersT implements flatbuffers.IGeneratedObject {
    PARAM_NAME: string | Uint8Array | null;
    PARAM_VALUE: string | Uint8Array | null;
    constructor(PARAM_NAME?: string | Uint8Array | null, PARAM_VALUE?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=UserDefinedParameters.d.ts.map