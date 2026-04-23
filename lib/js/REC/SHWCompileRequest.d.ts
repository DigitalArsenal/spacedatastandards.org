import * as flatbuffers from 'flatbuffers';
import { SHWUniform, SHWUniformT } from './SHWUniform.js';
import { glslStage } from './glslStage.js';
import { shaderHookPoint } from './shaderHookPoint.js';
/**
 * Compile request — one shader source (typically a fragment of a
 * larger stage) plus metadata for the host splice.
 */
export declare class SHWCompileRequest implements flatbuffers.IUnpackableObject<SHWCompileRequestT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): SHWCompileRequest;
    static getRootAsSHWCompileRequest(bb: flatbuffers.ByteBuffer, obj?: SHWCompileRequest): SHWCompileRequest;
    static getSizePrefixedRootAsSHWCompileRequest(bb: flatbuffers.ByteBuffer, obj?: SHWCompileRequest): SHWCompileRequest;
    /**
     * Logical shader name (used in logs and uniform prefixing).
     */
    SHADER_NAME(): string | null;
    SHADER_NAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Target GLSL stage.
     */
    SHADER_STAGE(): glslStage;
    /**
     * Intended injection point in the host pipeline.
     */
    SHADER_INJECTION_POINT(): shaderHookPoint;
    /**
     * GLSL source (or preprocessed chunk).
     */
    SHADER_SOURCE(): string | null;
    SHADER_SOURCE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * GLSL version string (for example `300 es`).
     */
    GLSL_VERSION(): string | null;
    GLSL_VERSION(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Expected uniforms declared by the source.
     */
    SHADER_UNIFORMS(index: number, obj?: SHWUniform): SHWUniform | null;
    shaderUniformsLength(): number;
    static startSHWCompileRequest(builder: flatbuffers.Builder): void;
    static addShaderName(builder: flatbuffers.Builder, SHADER_NAMEOffset: flatbuffers.Offset): void;
    static addShaderStage(builder: flatbuffers.Builder, SHADER_STAGE: glslStage): void;
    static addShaderInjectionPoint(builder: flatbuffers.Builder, SHADER_INJECTION_POINT: shaderHookPoint): void;
    static addShaderSource(builder: flatbuffers.Builder, SHADER_SOURCEOffset: flatbuffers.Offset): void;
    static addGlslVersion(builder: flatbuffers.Builder, GLSL_VERSIONOffset: flatbuffers.Offset): void;
    static addShaderUniforms(builder: flatbuffers.Builder, SHADER_UNIFORMSOffset: flatbuffers.Offset): void;
    static createShaderUniformsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startShaderUniformsVector(builder: flatbuffers.Builder, numElems: number): void;
    static endSHWCompileRequest(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createSHWCompileRequest(builder: flatbuffers.Builder, SHADER_NAMEOffset: flatbuffers.Offset, SHADER_STAGE: glslStage, SHADER_INJECTION_POINT: shaderHookPoint, SHADER_SOURCEOffset: flatbuffers.Offset, GLSL_VERSIONOffset: flatbuffers.Offset, SHADER_UNIFORMSOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): SHWCompileRequestT;
    unpackTo(_o: SHWCompileRequestT): void;
}
export declare class SHWCompileRequestT implements flatbuffers.IGeneratedObject {
    SHADER_NAME: string | Uint8Array | null;
    SHADER_STAGE: glslStage;
    SHADER_INJECTION_POINT: shaderHookPoint;
    SHADER_SOURCE: string | Uint8Array | null;
    GLSL_VERSION: string | Uint8Array | null;
    SHADER_UNIFORMS: (SHWUniformT)[];
    constructor(SHADER_NAME?: string | Uint8Array | null, SHADER_STAGE?: glslStage, SHADER_INJECTION_POINT?: shaderHookPoint, SHADER_SOURCE?: string | Uint8Array | null, GLSL_VERSION?: string | Uint8Array | null, SHADER_UNIFORMS?: (SHWUniformT)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=SHWCompileRequest.d.ts.map