import * as flatbuffers from 'flatbuffers';
import { CZMColor, CZMColorT } from './CZMColor.js';
/**
 * Polyline glow material
 */
export declare class CZMPolylineGlowMaterial implements flatbuffers.IUnpackableObject<CZMPolylineGlowMaterialT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): CZMPolylineGlowMaterial;
    static getRootAsCZMPolylineGlowMaterial(bb: flatbuffers.ByteBuffer, obj?: CZMPolylineGlowMaterial): CZMPolylineGlowMaterial;
    static getSizePrefixedRootAsCZMPolylineGlowMaterial(bb: flatbuffers.ByteBuffer, obj?: CZMPolylineGlowMaterial): CZMPolylineGlowMaterial;
    /**
     * Glow color
     */
    COLOR(obj?: CZMColor): CZMColor | null;
    /**
     * Glow power
     */
    GLOW_POWER(): number;
    /**
     * Taper power
     */
    TAPER_POWER(): number;
    static startCZMPolylineGlowMaterial(builder: flatbuffers.Builder): void;
    static addColor(builder: flatbuffers.Builder, COLOROffset: flatbuffers.Offset): void;
    static addGlowPower(builder: flatbuffers.Builder, GLOW_POWER: number): void;
    static addTaperPower(builder: flatbuffers.Builder, TAPER_POWER: number): void;
    static endCZMPolylineGlowMaterial(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createCZMPolylineGlowMaterial(builder: flatbuffers.Builder, COLOROffset: flatbuffers.Offset, GLOW_POWER: number, TAPER_POWER: number): flatbuffers.Offset;
    unpack(): CZMPolylineGlowMaterialT;
    unpackTo(_o: CZMPolylineGlowMaterialT): void;
}
export declare class CZMPolylineGlowMaterialT implements flatbuffers.IGeneratedObject {
    COLOR: CZMColorT | null;
    GLOW_POWER: number;
    TAPER_POWER: number;
    constructor(COLOR?: CZMColorT | null, GLOW_POWER?: number, TAPER_POWER?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=CZMPolylineGlowMaterial.d.ts.map