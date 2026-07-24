import * as flatbuffers from 'flatbuffers';
import { CZMCheckerboardMaterial, CZMCheckerboardMaterialT } from './CZMCheckerboardMaterial.js';
import { CZMGridMaterial, CZMGridMaterialT } from './CZMGridMaterial.js';
import { CZMImageMaterial, CZMImageMaterialT } from './CZMImageMaterial.js';
import { CZMSolidColorMaterial, CZMSolidColorMaterialT } from './CZMSolidColorMaterial.js';
import { CZMStripeMaterial, CZMStripeMaterialT } from './CZMStripeMaterial.js';
/**
 * Surface material (used by polygon, ellipse, box, etc.)
 */
export declare class CZMMaterial implements flatbuffers.IUnpackableObject<CZMMaterialT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): CZMMaterial;
    static getRootAsCZMMaterial(bb: flatbuffers.ByteBuffer, obj?: CZMMaterial): CZMMaterial;
    static getSizePrefixedRootAsCZMMaterial(bb: flatbuffers.ByteBuffer, obj?: CZMMaterial): CZMMaterial;
    /**
     * Solid color material
     */
    SOLID_COLOR(obj?: CZMSolidColorMaterial): CZMSolidColorMaterial | null;
    /**
     * Image material
     */
    IMAGE(obj?: CZMImageMaterial): CZMImageMaterial | null;
    /**
     * Grid material
     */
    GRID(obj?: CZMGridMaterial): CZMGridMaterial | null;
    /**
     * Stripe material
     */
    STRIPE(obj?: CZMStripeMaterial): CZMStripeMaterial | null;
    /**
     * Checkerboard material
     */
    CHECKERBOARD(obj?: CZMCheckerboardMaterial): CZMCheckerboardMaterial | null;
    static startCZMMaterial(builder: flatbuffers.Builder): void;
    static addSolidColor(builder: flatbuffers.Builder, SOLID_COLOROffset: flatbuffers.Offset): void;
    static addImage(builder: flatbuffers.Builder, IMAGEOffset: flatbuffers.Offset): void;
    static addGrid(builder: flatbuffers.Builder, GRIDOffset: flatbuffers.Offset): void;
    static addStripe(builder: flatbuffers.Builder, STRIPEOffset: flatbuffers.Offset): void;
    static addCheckerboard(builder: flatbuffers.Builder, CHECKERBOARDOffset: flatbuffers.Offset): void;
    static endCZMMaterial(builder: flatbuffers.Builder): flatbuffers.Offset;
    unpack(): CZMMaterialT;
    unpackTo(_o: CZMMaterialT): void;
}
export declare class CZMMaterialT implements flatbuffers.IGeneratedObject {
    SOLID_COLOR: CZMSolidColorMaterialT | null;
    IMAGE: CZMImageMaterialT | null;
    GRID: CZMGridMaterialT | null;
    STRIPE: CZMStripeMaterialT | null;
    CHECKERBOARD: CZMCheckerboardMaterialT | null;
    constructor(SOLID_COLOR?: CZMSolidColorMaterialT | null, IMAGE?: CZMImageMaterialT | null, GRID?: CZMGridMaterialT | null, STRIPE?: CZMStripeMaterialT | null, CHECKERBOARD?: CZMCheckerboardMaterialT | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=CZMMaterial.d.ts.map