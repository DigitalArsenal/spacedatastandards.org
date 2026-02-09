import * as flatbuffers from 'flatbuffers';
import { CZMColor, CZMColorT } from './CZMColor.js';
/**
 * Grid material
 */
export declare class CZMGridMaterial implements flatbuffers.IUnpackableObject<CZMGridMaterialT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): CZMGridMaterial;
    static getRootAsCZMGridMaterial(bb: flatbuffers.ByteBuffer, obj?: CZMGridMaterial): CZMGridMaterial;
    static getSizePrefixedRootAsCZMGridMaterial(bb: flatbuffers.ByteBuffer, obj?: CZMGridMaterial): CZMGridMaterial;
    /**
     * Grid line color
     */
    COLOR(obj?: CZMColor): CZMColor | null;
    /**
     * Cell alpha
     */
    CELL_ALPHA(): number;
    /**
     * Number of grid lines along X
     */
    LINE_COUNT_X(): number;
    /**
     * Number of grid lines along Y
     */
    LINE_COUNT_Y(): number;
    /**
     * Thickness of grid lines along X
     */
    LINE_THICKNESS_X(): number;
    /**
     * Thickness of grid lines along Y
     */
    LINE_THICKNESS_Y(): number;
    /**
     * Offset of grid lines along X
     */
    LINE_OFFSET_X(): number;
    /**
     * Offset of grid lines along Y
     */
    LINE_OFFSET_Y(): number;
    static startCZMGridMaterial(builder: flatbuffers.Builder): void;
    static addColor(builder: flatbuffers.Builder, COLOROffset: flatbuffers.Offset): void;
    static addCellAlpha(builder: flatbuffers.Builder, CELL_ALPHA: number): void;
    static addLineCountX(builder: flatbuffers.Builder, LINE_COUNT_X: number): void;
    static addLineCountY(builder: flatbuffers.Builder, LINE_COUNT_Y: number): void;
    static addLineThicknessX(builder: flatbuffers.Builder, LINE_THICKNESS_X: number): void;
    static addLineThicknessY(builder: flatbuffers.Builder, LINE_THICKNESS_Y: number): void;
    static addLineOffsetX(builder: flatbuffers.Builder, LINE_OFFSET_X: number): void;
    static addLineOffsetY(builder: flatbuffers.Builder, LINE_OFFSET_Y: number): void;
    static endCZMGridMaterial(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createCZMGridMaterial(builder: flatbuffers.Builder, COLOROffset: flatbuffers.Offset, CELL_ALPHA: number, LINE_COUNT_X: number, LINE_COUNT_Y: number, LINE_THICKNESS_X: number, LINE_THICKNESS_Y: number, LINE_OFFSET_X: number, LINE_OFFSET_Y: number): flatbuffers.Offset;
    unpack(): CZMGridMaterialT;
    unpackTo(_o: CZMGridMaterialT): void;
}
export declare class CZMGridMaterialT implements flatbuffers.IGeneratedObject {
    COLOR: CZMColorT | null;
    CELL_ALPHA: number;
    LINE_COUNT_X: number;
    LINE_COUNT_Y: number;
    LINE_THICKNESS_X: number;
    LINE_THICKNESS_Y: number;
    LINE_OFFSET_X: number;
    LINE_OFFSET_Y: number;
    constructor(COLOR?: CZMColorT | null, CELL_ALPHA?: number, LINE_COUNT_X?: number, LINE_COUNT_Y?: number, LINE_THICKNESS_X?: number, LINE_THICKNESS_Y?: number, LINE_OFFSET_X?: number, LINE_OFFSET_Y?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=CZMGridMaterial.d.ts.map