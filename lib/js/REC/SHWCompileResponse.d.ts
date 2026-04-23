import * as flatbuffers from 'flatbuffers';
import { SHWUniform, SHWUniformT } from './SHWUniform.js';
/**
 * Compile response — whether the shader compiled, with diagnostics.
 */
export declare class SHWCompileResponse implements flatbuffers.IUnpackableObject<SHWCompileResponseT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): SHWCompileResponse;
    static getRootAsSHWCompileResponse(bb: flatbuffers.ByteBuffer, obj?: SHWCompileResponse): SHWCompileResponse;
    static getSizePrefixedRootAsSHWCompileResponse(bb: flatbuffers.ByteBuffer, obj?: SHWCompileResponse): SHWCompileResponse;
    SHADER_NAME(): string | null;
    SHADER_NAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Whether compilation succeeded.
     */
    COMPILE_SUCCESS(): boolean;
    /**
     * Optional GLSL info log.
     */
    INFO_LOG(): string | null;
    INFO_LOG(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Optional compiled binary (if the compiler emits one).
     */
    COMPILED_BINARY(index: number): number | null;
    compiledBinaryLength(): number;
    compiledBinaryArray(): Uint8Array | null;
    /**
     * Echo of the uniforms the compiler actually linked.
     */
    LINKED_UNIFORMS(index: number, obj?: SHWUniform): SHWUniform | null;
    linkedUniformsLength(): number;
    static startSHWCompileResponse(builder: flatbuffers.Builder): void;
    static addShaderName(builder: flatbuffers.Builder, SHADER_NAMEOffset: flatbuffers.Offset): void;
    static addCompileSuccess(builder: flatbuffers.Builder, COMPILE_SUCCESS: boolean): void;
    static addInfoLog(builder: flatbuffers.Builder, INFO_LOGOffset: flatbuffers.Offset): void;
    static addCompiledBinary(builder: flatbuffers.Builder, COMPILED_BINARYOffset: flatbuffers.Offset): void;
    static createCompiledBinaryVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startCompiledBinaryVector(builder: flatbuffers.Builder, numElems: number): void;
    static addLinkedUniforms(builder: flatbuffers.Builder, LINKED_UNIFORMSOffset: flatbuffers.Offset): void;
    static createLinkedUniformsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startLinkedUniformsVector(builder: flatbuffers.Builder, numElems: number): void;
    static endSHWCompileResponse(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createSHWCompileResponse(builder: flatbuffers.Builder, SHADER_NAMEOffset: flatbuffers.Offset, COMPILE_SUCCESS: boolean, INFO_LOGOffset: flatbuffers.Offset, COMPILED_BINARYOffset: flatbuffers.Offset, LINKED_UNIFORMSOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): SHWCompileResponseT;
    unpackTo(_o: SHWCompileResponseT): void;
}
export declare class SHWCompileResponseT implements flatbuffers.IGeneratedObject {
    SHADER_NAME: string | Uint8Array | null;
    COMPILE_SUCCESS: boolean;
    INFO_LOG: string | Uint8Array | null;
    COMPILED_BINARY: (number)[];
    LINKED_UNIFORMS: (SHWUniformT)[];
    constructor(SHADER_NAME?: string | Uint8Array | null, COMPILE_SUCCESS?: boolean, INFO_LOG?: string | Uint8Array | null, COMPILED_BINARY?: (number)[], LINKED_UNIFORMS?: (SHWUniformT)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=SHWCompileResponse.d.ts.map