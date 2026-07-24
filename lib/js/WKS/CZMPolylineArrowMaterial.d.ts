import * as flatbuffers from 'flatbuffers';
import { CZMColor, CZMColorT } from './CZMColor.js';
/**
 * Polyline arrow material
 */
export declare class CZMPolylineArrowMaterial implements flatbuffers.IUnpackableObject<CZMPolylineArrowMaterialT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): CZMPolylineArrowMaterial;
    static getRootAsCZMPolylineArrowMaterial(bb: flatbuffers.ByteBuffer, obj?: CZMPolylineArrowMaterial): CZMPolylineArrowMaterial;
    static getSizePrefixedRootAsCZMPolylineArrowMaterial(bb: flatbuffers.ByteBuffer, obj?: CZMPolylineArrowMaterial): CZMPolylineArrowMaterial;
    /**
     * Arrow color
     */
    COLOR(obj?: CZMColor): CZMColor | null;
    static startCZMPolylineArrowMaterial(builder: flatbuffers.Builder): void;
    static addColor(builder: flatbuffers.Builder, COLOROffset: flatbuffers.Offset): void;
    static endCZMPolylineArrowMaterial(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createCZMPolylineArrowMaterial(builder: flatbuffers.Builder, COLOROffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): CZMPolylineArrowMaterialT;
    unpackTo(_o: CZMPolylineArrowMaterialT): void;
}
export declare class CZMPolylineArrowMaterialT implements flatbuffers.IGeneratedObject {
    COLOR: CZMColorT | null;
    constructor(COLOR?: CZMColorT | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=CZMPolylineArrowMaterial.d.ts.map