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
    paramName(): string | null;
    paramName(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Value of the user-defined parameter.
     */
    paramValue(): string | null;
    paramValue(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    static startUserDefinedParameters(builder: flatbuffers.Builder): void;
    static addParamName(builder: flatbuffers.Builder, paramNameOffset: flatbuffers.Offset): void;
    static addParamValue(builder: flatbuffers.Builder, paramValueOffset: flatbuffers.Offset): void;
    static endUserDefinedParameters(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createUserDefinedParameters(builder: flatbuffers.Builder, paramNameOffset: flatbuffers.Offset, paramValueOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): UserDefinedParametersT;
    unpackTo(_o: UserDefinedParametersT): void;
}
export declare class UserDefinedParametersT implements flatbuffers.IGeneratedObject {
    paramName: string | Uint8Array | null;
    paramValue: string | Uint8Array | null;
    constructor(paramName?: string | Uint8Array | null, paramValue?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=user-defined-parameters.d.ts.map