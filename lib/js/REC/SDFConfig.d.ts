import * as flatbuffers from 'flatbuffers';
import { SDFComponent, SDFComponentT } from './SDFComponent.js';
import { SDFComposition, SDFCompositionT } from './SDFComposition.js';
import { sdfPrimitive } from './sdfPrimitive.js';
/**
 * Complete SDF configuration.
 */
export declare class SDFConfig implements flatbuffers.IUnpackableObject<SDFConfigT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): SDFConfig;
    static getRootAsSDFConfig(bb: flatbuffers.ByteBuffer, obj?: SDFConfig): SDFConfig;
    static getSizePrefixedRootAsSDFConfig(bb: flatbuffers.ByteBuffer, obj?: SDFConfig): SDFConfig;
    /**
     * Root primitive type (useful when COMPONENTS[] is empty).
     */
    PRIMITIVE(): sdfPrimitive;
    /**
     * One or more components that may be combined via COMPOSITIONS[].
     */
    COMPONENTS(index: number, obj?: SDFComponent): SDFComponent | null;
    componentsLength(): number;
    /**
     * Composition tree over COMPONENTS[].
     */
    COMPOSITIONS(index: number, obj?: SDFComposition): SDFComposition | null;
    compositionsLength(): number;
    /**
     * World-to-local transform (4x4 column-major, 16 doubles).
     */
    INVERSE_TRANSFORM(index: number): number | null;
    inverseTransformLength(): number;
    inverseTransformArray(): Float64Array | null;
    static startSDFConfig(builder: flatbuffers.Builder): void;
    static addPrimitive(builder: flatbuffers.Builder, PRIMITIVE: sdfPrimitive): void;
    static addComponents(builder: flatbuffers.Builder, COMPONENTSOffset: flatbuffers.Offset): void;
    static createComponentsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startComponentsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addCompositions(builder: flatbuffers.Builder, COMPOSITIONSOffset: flatbuffers.Offset): void;
    static createCompositionsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startCompositionsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addInverseTransform(builder: flatbuffers.Builder, INVERSE_TRANSFORMOffset: flatbuffers.Offset): void;
    static createInverseTransformVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createInverseTransformVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startInverseTransformVector(builder: flatbuffers.Builder, numElems: number): void;
    static endSDFConfig(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createSDFConfig(builder: flatbuffers.Builder, PRIMITIVE: sdfPrimitive, COMPONENTSOffset: flatbuffers.Offset, COMPOSITIONSOffset: flatbuffers.Offset, INVERSE_TRANSFORMOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): SDFConfigT;
    unpackTo(_o: SDFConfigT): void;
}
export declare class SDFConfigT implements flatbuffers.IGeneratedObject {
    PRIMITIVE: sdfPrimitive;
    COMPONENTS: (SDFComponentT)[];
    COMPOSITIONS: (SDFCompositionT)[];
    INVERSE_TRANSFORM: (number)[];
    constructor(PRIMITIVE?: sdfPrimitive, COMPONENTS?: (SDFComponentT)[], COMPOSITIONS?: (SDFCompositionT)[], INVERSE_TRANSFORM?: (number)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=SDFConfig.d.ts.map