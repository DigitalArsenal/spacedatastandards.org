import * as flatbuffers from 'flatbuffers';
import { shaderUniformType } from './shaderUniformType.js';
/**
 * Uniform descriptor — name + type + optional default value.
 */
export declare class SHWUniform implements flatbuffers.IUnpackableObject<SHWUniformT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): SHWUniform;
    static getRootAsSHWUniform(bb: flatbuffers.ByteBuffer, obj?: SHWUniform): SHWUniform;
    static getSizePrefixedRootAsSHWUniform(bb: flatbuffers.ByteBuffer, obj?: SHWUniform): SHWUniform;
    UNIFORM_NAME(): string | null;
    UNIFORM_NAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    UNIFORM_TYPE(): shaderUniformType;
    /**
     * Optional human-readable description.
     */
    UNIFORM_DESCRIPTION(): string | null;
    UNIFORM_DESCRIPTION(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Optional default value encoded as bytes in the native type layout.
     */
    UNIFORM_DEFAULT_VALUE(index: number): number | null;
    uniformDefaultValueLength(): number;
    uniformDefaultValueArray(): Uint8Array | null;
    static startSHWUniform(builder: flatbuffers.Builder): void;
    static addUniformName(builder: flatbuffers.Builder, UNIFORM_NAMEOffset: flatbuffers.Offset): void;
    static addUniformType(builder: flatbuffers.Builder, UNIFORM_TYPE: shaderUniformType): void;
    static addUniformDescription(builder: flatbuffers.Builder, UNIFORM_DESCRIPTIONOffset: flatbuffers.Offset): void;
    static addUniformDefaultValue(builder: flatbuffers.Builder, UNIFORM_DEFAULT_VALUEOffset: flatbuffers.Offset): void;
    static createUniformDefaultValueVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startUniformDefaultValueVector(builder: flatbuffers.Builder, numElems: number): void;
    static endSHWUniform(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createSHWUniform(builder: flatbuffers.Builder, UNIFORM_NAMEOffset: flatbuffers.Offset, UNIFORM_TYPE: shaderUniformType, UNIFORM_DESCRIPTIONOffset: flatbuffers.Offset, UNIFORM_DEFAULT_VALUEOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): SHWUniformT;
    unpackTo(_o: SHWUniformT): void;
}
export declare class SHWUniformT implements flatbuffers.IGeneratedObject {
    UNIFORM_NAME: string | Uint8Array | null;
    UNIFORM_TYPE: shaderUniformType;
    UNIFORM_DESCRIPTION: string | Uint8Array | null;
    UNIFORM_DEFAULT_VALUE: (number)[];
    constructor(UNIFORM_NAME?: string | Uint8Array | null, UNIFORM_TYPE?: shaderUniformType, UNIFORM_DESCRIPTION?: string | Uint8Array | null, UNIFORM_DEFAULT_VALUE?: (number)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=SHWUniform.d.ts.map