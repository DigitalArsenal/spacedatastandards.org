import * as flatbuffers from 'flatbuffers';
import { CZMPolylineArrowMaterial, CZMPolylineArrowMaterialT } from './CZMPolylineArrowMaterial.js';
import { CZMPolylineDashMaterial, CZMPolylineDashMaterialT } from './CZMPolylineDashMaterial.js';
import { CZMPolylineGlowMaterial, CZMPolylineGlowMaterialT } from './CZMPolylineGlowMaterial.js';
import { CZMPolylineOutlineMaterial, CZMPolylineOutlineMaterialT } from './CZMPolylineOutlineMaterial.js';
import { CZMSolidColorMaterial, CZMSolidColorMaterialT } from './CZMSolidColorMaterial.js';
/**
 * Polyline material (used by polyline, path)
 */
export declare class CZMPolylineMaterial implements flatbuffers.IUnpackableObject<CZMPolylineMaterialT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): CZMPolylineMaterial;
    static getRootAsCZMPolylineMaterial(bb: flatbuffers.ByteBuffer, obj?: CZMPolylineMaterial): CZMPolylineMaterial;
    static getSizePrefixedRootAsCZMPolylineMaterial(bb: flatbuffers.ByteBuffer, obj?: CZMPolylineMaterial): CZMPolylineMaterial;
    /**
     * Solid color material
     */
    SOLID_COLOR(obj?: CZMSolidColorMaterial): CZMSolidColorMaterial | null;
    /**
     * Polyline outline material
     */
    POLYLINE_OUTLINE(obj?: CZMPolylineOutlineMaterial): CZMPolylineOutlineMaterial | null;
    /**
     * Polyline arrow material
     */
    POLYLINE_ARROW(obj?: CZMPolylineArrowMaterial): CZMPolylineArrowMaterial | null;
    /**
     * Polyline dash material
     */
    POLYLINE_DASH(obj?: CZMPolylineDashMaterial): CZMPolylineDashMaterial | null;
    /**
     * Polyline glow material
     */
    POLYLINE_GLOW(obj?: CZMPolylineGlowMaterial): CZMPolylineGlowMaterial | null;
    static startCZMPolylineMaterial(builder: flatbuffers.Builder): void;
    static addSolidColor(builder: flatbuffers.Builder, SOLID_COLOROffset: flatbuffers.Offset): void;
    static addPolylineOutline(builder: flatbuffers.Builder, POLYLINE_OUTLINEOffset: flatbuffers.Offset): void;
    static addPolylineArrow(builder: flatbuffers.Builder, POLYLINE_ARROWOffset: flatbuffers.Offset): void;
    static addPolylineDash(builder: flatbuffers.Builder, POLYLINE_DASHOffset: flatbuffers.Offset): void;
    static addPolylineGlow(builder: flatbuffers.Builder, POLYLINE_GLOWOffset: flatbuffers.Offset): void;
    static endCZMPolylineMaterial(builder: flatbuffers.Builder): flatbuffers.Offset;
    unpack(): CZMPolylineMaterialT;
    unpackTo(_o: CZMPolylineMaterialT): void;
}
export declare class CZMPolylineMaterialT implements flatbuffers.IGeneratedObject {
    SOLID_COLOR: CZMSolidColorMaterialT | null;
    POLYLINE_OUTLINE: CZMPolylineOutlineMaterialT | null;
    POLYLINE_ARROW: CZMPolylineArrowMaterialT | null;
    POLYLINE_DASH: CZMPolylineDashMaterialT | null;
    POLYLINE_GLOW: CZMPolylineGlowMaterialT | null;
    constructor(SOLID_COLOR?: CZMSolidColorMaterialT | null, POLYLINE_OUTLINE?: CZMPolylineOutlineMaterialT | null, POLYLINE_ARROW?: CZMPolylineArrowMaterialT | null, POLYLINE_DASH?: CZMPolylineDashMaterialT | null, POLYLINE_GLOW?: CZMPolylineGlowMaterialT | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=CZMPolylineMaterial.d.ts.map