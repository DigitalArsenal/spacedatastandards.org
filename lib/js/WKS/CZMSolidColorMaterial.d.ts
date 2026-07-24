import * as flatbuffers from 'flatbuffers';
import { CZMColor, CZMColorT } from './CZMColor.js';
/**
 * Solid color material
 */
export declare class CZMSolidColorMaterial implements flatbuffers.IUnpackableObject<CZMSolidColorMaterialT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): CZMSolidColorMaterial;
    static getRootAsCZMSolidColorMaterial(bb: flatbuffers.ByteBuffer, obj?: CZMSolidColorMaterial): CZMSolidColorMaterial;
    static getSizePrefixedRootAsCZMSolidColorMaterial(bb: flatbuffers.ByteBuffer, obj?: CZMSolidColorMaterial): CZMSolidColorMaterial;
    /**
     * Color
     */
    COLOR(obj?: CZMColor): CZMColor | null;
    static startCZMSolidColorMaterial(builder: flatbuffers.Builder): void;
    static addColor(builder: flatbuffers.Builder, COLOROffset: flatbuffers.Offset): void;
    static endCZMSolidColorMaterial(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createCZMSolidColorMaterial(builder: flatbuffers.Builder, COLOROffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): CZMSolidColorMaterialT;
    unpackTo(_o: CZMSolidColorMaterialT): void;
}
export declare class CZMSolidColorMaterialT implements flatbuffers.IGeneratedObject {
    COLOR: CZMColorT | null;
    constructor(COLOR?: CZMColorT | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=CZMSolidColorMaterial.d.ts.map