import * as flatbuffers from 'flatbuffers';
import { mplRelativeDynamics } from './mplRelativeDynamics.js';
/**
 * A differential-drag model for relative motion.
 */
export declare class mplDifferentialDrag implements flatbuffers.IUnpackableObject<mplDifferentialDragT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): mplDifferentialDrag;
    static getRootAsmplDifferentialDrag(bb: flatbuffers.ByteBuffer, obj?: mplDifferentialDrag): mplDifferentialDrag;
    static getSizePrefixedRootAsmplDifferentialDrag(bb: flatbuffers.ByteBuffer, obj?: mplDifferentialDrag): mplDifferentialDrag;
    /**
     * Which drag model; J2DragEccentric or J2DragArbitrary.
     */
    MODEL(): mplRelativeDynamics;
    /**
     * Differential drag rates of the dimensionless relative orbital
     * elements, 1/s: of the relative semi-major axis da (multiply by the
     * reference semi-major axis for a length rate), and of the relative
     * eccentricity-vector components dex and dey. DA_DOT_PER_S alone for
     * J2DragEccentric; all three for J2DragArbitrary.
     */
    DA_DOT_PER_S(): number;
    DEX_DOT_PER_S(): number;
    DEY_DOT_PER_S(): number;
    static startmplDifferentialDrag(builder: flatbuffers.Builder): void;
    static addModel(builder: flatbuffers.Builder, MODEL: mplRelativeDynamics): void;
    static addDaDotPerS(builder: flatbuffers.Builder, DA_DOT_PER_S: number): void;
    static addDexDotPerS(builder: flatbuffers.Builder, DEX_DOT_PER_S: number): void;
    static addDeyDotPerS(builder: flatbuffers.Builder, DEY_DOT_PER_S: number): void;
    static endmplDifferentialDrag(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createmplDifferentialDrag(builder: flatbuffers.Builder, MODEL: mplRelativeDynamics, DA_DOT_PER_S: number, DEX_DOT_PER_S: number, DEY_DOT_PER_S: number): flatbuffers.Offset;
    unpack(): mplDifferentialDragT;
    unpackTo(_o: mplDifferentialDragT): void;
}
export declare class mplDifferentialDragT implements flatbuffers.IGeneratedObject {
    MODEL: mplRelativeDynamics;
    DA_DOT_PER_S: number;
    DEX_DOT_PER_S: number;
    DEY_DOT_PER_S: number;
    constructor(MODEL?: mplRelativeDynamics, DA_DOT_PER_S?: number, DEX_DOT_PER_S?: number, DEY_DOT_PER_S?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=mplDifferentialDrag.d.ts.map