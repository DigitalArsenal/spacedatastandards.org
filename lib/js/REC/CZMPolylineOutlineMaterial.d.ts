import * as flatbuffers from 'flatbuffers';
import { CZMColor, CZMColorT } from './CZMColor.js';
/**
 * Polyline outline material
 */
export declare class CZMPolylineOutlineMaterial implements flatbuffers.IUnpackableObject<CZMPolylineOutlineMaterialT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): CZMPolylineOutlineMaterial;
    static getRootAsCZMPolylineOutlineMaterial(bb: flatbuffers.ByteBuffer, obj?: CZMPolylineOutlineMaterial): CZMPolylineOutlineMaterial;
    static getSizePrefixedRootAsCZMPolylineOutlineMaterial(bb: flatbuffers.ByteBuffer, obj?: CZMPolylineOutlineMaterial): CZMPolylineOutlineMaterial;
    /**
     * Line color
     */
    COLOR(obj?: CZMColor): CZMColor | null;
    /**
     * Outline color
     */
    OUTLINE_COLOR(obj?: CZMColor): CZMColor | null;
    /**
     * Outline width
     */
    OUTLINE_WIDTH(): number;
    static startCZMPolylineOutlineMaterial(builder: flatbuffers.Builder): void;
    static addColor(builder: flatbuffers.Builder, COLOROffset: flatbuffers.Offset): void;
    static addOutlineColor(builder: flatbuffers.Builder, OUTLINE_COLOROffset: flatbuffers.Offset): void;
    static addOutlineWidth(builder: flatbuffers.Builder, OUTLINE_WIDTH: number): void;
    static endCZMPolylineOutlineMaterial(builder: flatbuffers.Builder): flatbuffers.Offset;
    unpack(): CZMPolylineOutlineMaterialT;
    unpackTo(_o: CZMPolylineOutlineMaterialT): void;
}
export declare class CZMPolylineOutlineMaterialT implements flatbuffers.IGeneratedObject {
    COLOR: CZMColorT | null;
    OUTLINE_COLOR: CZMColorT | null;
    OUTLINE_WIDTH: number;
    constructor(COLOR?: CZMColorT | null, OUTLINE_COLOR?: CZMColorT | null, OUTLINE_WIDTH?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=CZMPolylineOutlineMaterial.d.ts.map