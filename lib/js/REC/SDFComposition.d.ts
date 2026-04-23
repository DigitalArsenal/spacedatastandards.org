import * as flatbuffers from 'flatbuffers';
import { sdfOperation } from './sdfOperation.js';
/**
 * Constructive composition of two SDFs.
 */
export declare class SDFComposition implements flatbuffers.IUnpackableObject<SDFCompositionT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): SDFComposition;
    static getRootAsSDFComposition(bb: flatbuffers.ByteBuffer, obj?: SDFComposition): SDFComposition;
    static getSizePrefixedRootAsSDFComposition(bb: flatbuffers.ByteBuffer, obj?: SDFComposition): SDFComposition;
    OPERATION(): sdfOperation;
    /**
     * First operand (index into SDF.COMPONENTS[]).
     */
    OPERAND_A(): number;
    /**
     * Second operand (index into SDF.COMPONENTS[]).
     */
    OPERAND_B(): number;
    /**
     * Blend radius for smooth operations.
     */
    BLEND_RADIUS(): number;
    static startSDFComposition(builder: flatbuffers.Builder): void;
    static addOperation(builder: flatbuffers.Builder, OPERATION: sdfOperation): void;
    static addOperandA(builder: flatbuffers.Builder, OPERAND_A: number): void;
    static addOperandB(builder: flatbuffers.Builder, OPERAND_B: number): void;
    static addBlendRadius(builder: flatbuffers.Builder, BLEND_RADIUS: number): void;
    static endSDFComposition(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createSDFComposition(builder: flatbuffers.Builder, OPERATION: sdfOperation, OPERAND_A: number, OPERAND_B: number, BLEND_RADIUS: number): flatbuffers.Offset;
    unpack(): SDFCompositionT;
    unpackTo(_o: SDFCompositionT): void;
}
export declare class SDFCompositionT implements flatbuffers.IGeneratedObject {
    OPERATION: sdfOperation;
    OPERAND_A: number;
    OPERAND_B: number;
    BLEND_RADIUS: number;
    constructor(OPERATION?: sdfOperation, OPERAND_A?: number, OPERAND_B?: number, BLEND_RADIUS?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=SDFComposition.d.ts.map