import * as flatbuffers from 'flatbuffers';
import { CZMColor, CZMColorT } from './CZMColor.js';
/**
 * Checkerboard material
 */
export declare class CZMCheckerboardMaterial implements flatbuffers.IUnpackableObject<CZMCheckerboardMaterialT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): CZMCheckerboardMaterial;
    static getRootAsCZMCheckerboardMaterial(bb: flatbuffers.ByteBuffer, obj?: CZMCheckerboardMaterial): CZMCheckerboardMaterial;
    static getSizePrefixedRootAsCZMCheckerboardMaterial(bb: flatbuffers.ByteBuffer, obj?: CZMCheckerboardMaterial): CZMCheckerboardMaterial;
    /**
     * Even color
     */
    EVEN_COLOR(obj?: CZMColor): CZMColor | null;
    /**
     * Odd color
     */
    ODD_COLOR(obj?: CZMColor): CZMColor | null;
    /**
     * Repeat X
     */
    REPEAT_X(): number;
    /**
     * Repeat Y
     */
    REPEAT_Y(): number;
    static startCZMCheckerboardMaterial(builder: flatbuffers.Builder): void;
    static addEvenColor(builder: flatbuffers.Builder, EVEN_COLOROffset: flatbuffers.Offset): void;
    static addOddColor(builder: flatbuffers.Builder, ODD_COLOROffset: flatbuffers.Offset): void;
    static addRepeatX(builder: flatbuffers.Builder, REPEAT_X: number): void;
    static addRepeatY(builder: flatbuffers.Builder, REPEAT_Y: number): void;
    static endCZMCheckerboardMaterial(builder: flatbuffers.Builder): flatbuffers.Offset;
    unpack(): CZMCheckerboardMaterialT;
    unpackTo(_o: CZMCheckerboardMaterialT): void;
}
export declare class CZMCheckerboardMaterialT implements flatbuffers.IGeneratedObject {
    EVEN_COLOR: CZMColorT | null;
    ODD_COLOR: CZMColorT | null;
    REPEAT_X: number;
    REPEAT_Y: number;
    constructor(EVEN_COLOR?: CZMColorT | null, ODD_COLOR?: CZMColorT | null, REPEAT_X?: number, REPEAT_Y?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=CZMCheckerboardMaterial.d.ts.map