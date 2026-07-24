import * as flatbuffers from 'flatbuffers';
import { CZMColor, CZMColorT } from './CZMColor.js';
/**
 * Polyline dash material
 */
export declare class CZMPolylineDashMaterial implements flatbuffers.IUnpackableObject<CZMPolylineDashMaterialT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): CZMPolylineDashMaterial;
    static getRootAsCZMPolylineDashMaterial(bb: flatbuffers.ByteBuffer, obj?: CZMPolylineDashMaterial): CZMPolylineDashMaterial;
    static getSizePrefixedRootAsCZMPolylineDashMaterial(bb: flatbuffers.ByteBuffer, obj?: CZMPolylineDashMaterial): CZMPolylineDashMaterial;
    /**
     * Dash color
     */
    COLOR(obj?: CZMColor): CZMColor | null;
    /**
     * Gap color
     */
    GAP_COLOR(obj?: CZMColor): CZMColor | null;
    /**
     * Dash length in pixels
     */
    DASH_LENGTH(): number;
    /**
     * Dash pattern (bitmask)
     */
    DASH_PATTERN(): number;
    static startCZMPolylineDashMaterial(builder: flatbuffers.Builder): void;
    static addColor(builder: flatbuffers.Builder, COLOROffset: flatbuffers.Offset): void;
    static addGapColor(builder: flatbuffers.Builder, GAP_COLOROffset: flatbuffers.Offset): void;
    static addDashLength(builder: flatbuffers.Builder, DASH_LENGTH: number): void;
    static addDashPattern(builder: flatbuffers.Builder, DASH_PATTERN: number): void;
    static endCZMPolylineDashMaterial(builder: flatbuffers.Builder): flatbuffers.Offset;
    unpack(): CZMPolylineDashMaterialT;
    unpackTo(_o: CZMPolylineDashMaterialT): void;
}
export declare class CZMPolylineDashMaterialT implements flatbuffers.IGeneratedObject {
    COLOR: CZMColorT | null;
    GAP_COLOR: CZMColorT | null;
    DASH_LENGTH: number;
    DASH_PATTERN: number;
    constructor(COLOR?: CZMColorT | null, GAP_COLOR?: CZMColorT | null, DASH_LENGTH?: number, DASH_PATTERN?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=CZMPolylineDashMaterial.d.ts.map