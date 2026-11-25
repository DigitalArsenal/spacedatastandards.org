import * as flatbuffers from 'flatbuffers';
import { rdeShieldGeometry } from './rdeShieldGeometry.js';
import { rdeShieldMaterial } from './rdeShieldMaterial.js';
/**
 * Shielding configuration for dose and TID calculations.
 */
export declare class RDEShielding implements flatbuffers.IUnpackableObject<RDEShieldingT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): RDEShielding;
    static getRootAsRDEShielding(bb: flatbuffers.ByteBuffer, obj?: RDEShielding): RDEShielding;
    static getSizePrefixedRootAsRDEShielding(bb: flatbuffers.ByteBuffer, obj?: RDEShielding): RDEShielding;
    /**
     * Primary shielding material class.
     */
    MATERIAL(): rdeShieldMaterial;
    /**
     * Descriptive material or layup name when CUSTOM or MULTI_MATERIAL.
     */
    MATERIAL_NAME(): string | null;
    MATERIAL_NAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Transport geometry approximation.
     */
    GEOMETRY(): rdeShieldGeometry;
    /**
     * Shield thickness in millimeters.
     */
    THICKNESS_MM(): number;
    /**
     * Areal mass density in g/cm^2.
     */
    AREAL_DENSITY_G_CM2(): number;
    static startRDEShielding(builder: flatbuffers.Builder): void;
    static addMaterial(builder: flatbuffers.Builder, MATERIAL: rdeShieldMaterial): void;
    static addMaterialName(builder: flatbuffers.Builder, MATERIAL_NAMEOffset: flatbuffers.Offset): void;
    static addGeometry(builder: flatbuffers.Builder, GEOMETRY: rdeShieldGeometry): void;
    static addThicknessMm(builder: flatbuffers.Builder, THICKNESS_MM: number): void;
    static addArealDensityGCm2(builder: flatbuffers.Builder, AREAL_DENSITY_G_CM2: number): void;
    static endRDEShielding(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createRDEShielding(builder: flatbuffers.Builder, MATERIAL: rdeShieldMaterial, MATERIAL_NAMEOffset: flatbuffers.Offset, GEOMETRY: rdeShieldGeometry, THICKNESS_MM: number, AREAL_DENSITY_G_CM2: number): flatbuffers.Offset;
    unpack(): RDEShieldingT;
    unpackTo(_o: RDEShieldingT): void;
}
export declare class RDEShieldingT implements flatbuffers.IGeneratedObject {
    MATERIAL: rdeShieldMaterial;
    MATERIAL_NAME: string | Uint8Array | null;
    GEOMETRY: rdeShieldGeometry;
    THICKNESS_MM: number;
    AREAL_DENSITY_G_CM2: number;
    constructor(MATERIAL?: rdeShieldMaterial, MATERIAL_NAME?: string | Uint8Array | null, GEOMETRY?: rdeShieldGeometry, THICKNESS_MM?: number, AREAL_DENSITY_G_CM2?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=RDEShielding.d.ts.map