import * as flatbuffers from 'flatbuffers';
import { OPPProvenance, OPPProvenanceT } from './OPPProvenance.js';
import { OPPQuantity, OPPQuantityT } from './OPPQuantity.js';
import { oppMaterialClass } from './oppMaterialClass.js';
import { oppSurfaceKind } from './oppSurfaceKind.js';
/**
 * One exterior surface of the object: what it is made of, how large it is and
 * how it interacts with light.
 *
 * $PNL carries the articulated panel model used for solar-radiation-pressure
 * propagation; an $OPP surface is the sourced material inventory. When both
 * exist, PANEL_ID joins this surface to its $PNL panel. GLTF_MATERIAL_NAME and
 * GLTF_MATERIAL_INDEX join it to the exact glTF material in the asset variant
 * named by OPP.ASSET.
 */
export declare class OPPSurface implements flatbuffers.IUnpackableObject<OPPSurfaceT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): OPPSurface;
    static getRootAsOPPSurface(bb: flatbuffers.ByteBuffer, obj?: OPPSurface): OPPSurface;
    static getSizePrefixedRootAsOPPSurface(bb: flatbuffers.ByteBuffer, obj?: OPPSurface): OPPSurface;
    /**
     * Stable identifier for this surface within the record.
     */
    ID(): string;
    ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    KIND(): oppSurfaceKind;
    /**
     * Material name verbatim from the source: "Kapton MLI", "GaAs
     * triple-junction", "Al 6061-T6". Empty when unstated.
     */
    MATERIAL(): string | null;
    MATERIAL(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    MATERIAL_CLASS(): oppMaterialClass;
    /**
     * How many identical surfaces this entry represents, such as two solar-array
     * wings.
     */
    COUNT(): number;
    /**
     * Provenance of MATERIAL, MATERIAL_CLASS, KIND and COUNT. Every dimensioned
     * field below carries its own.
     */
    PROVENANCE(obj?: OPPProvenance): OPPProvenance | null;
    /**
     * Area of one surface, not of COUNT surfaces [m2].
     */
    AREA(obj?: OPPQuantity): OPPQuantity | null;
    /**
     * Mass of one surface [kg].
     */
    MASS(obj?: OPPQuantity): OPPQuantity | null;
    /**
     * Fraction of incident radiation reflected specularly, dimensionless.
     */
    SPECULAR_REFLECTIVITY(obj?: OPPQuantity): OPPQuantity | null;
    /**
     * Fraction of incident radiation reflected diffusely, dimensionless.
     */
    DIFFUSE_REFLECTIVITY(obj?: OPPQuantity): OPPQuantity | null;
    /**
     * Solar absorptivity, dimensionless.
     */
    ABSORPTIVITY(obj?: OPPQuantity): OPPQuantity | null;
    /**
     * Infrared emissivity, dimensionless.
     */
    EMISSIVITY(obj?: OPPQuantity): OPPQuantity | null;
    /**
     * Join key to the $PNL panel representing this surface; holds that record's
     * PNLPanel.PANEL_ID verbatim. Empty when no $PNL panel exists.
     */
    PANEL_ID(): string | null;
    PANEL_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Name of the glTF material that renders this surface, verbatim, in the
     * variant named by OPP.ASSET.VARIANT_ID. Empty when the surface is not
     * represented in the asset.
     */
    GLTF_MATERIAL_NAME(): string | null;
    GLTF_MATERIAL_NAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Zero-based index into the glTF materials array of that same variant.
     * Negative one means no glTF material corresponds to this surface.
     */
    GLTF_MATERIAL_INDEX(): number;
    NOTES(): string | null;
    NOTES(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    static startOPPSurface(builder: flatbuffers.Builder): void;
    static addId(builder: flatbuffers.Builder, IDOffset: flatbuffers.Offset): void;
    static addKind(builder: flatbuffers.Builder, KIND: oppSurfaceKind): void;
    static addMaterial(builder: flatbuffers.Builder, MATERIALOffset: flatbuffers.Offset): void;
    static addMaterialClass(builder: flatbuffers.Builder, MATERIAL_CLASS: oppMaterialClass): void;
    static addCount(builder: flatbuffers.Builder, COUNT: number): void;
    static addProvenance(builder: flatbuffers.Builder, PROVENANCEOffset: flatbuffers.Offset): void;
    static addArea(builder: flatbuffers.Builder, AREAOffset: flatbuffers.Offset): void;
    static addMass(builder: flatbuffers.Builder, MASSOffset: flatbuffers.Offset): void;
    static addSpecularReflectivity(builder: flatbuffers.Builder, SPECULAR_REFLECTIVITYOffset: flatbuffers.Offset): void;
    static addDiffuseReflectivity(builder: flatbuffers.Builder, DIFFUSE_REFLECTIVITYOffset: flatbuffers.Offset): void;
    static addAbsorptivity(builder: flatbuffers.Builder, ABSORPTIVITYOffset: flatbuffers.Offset): void;
    static addEmissivity(builder: flatbuffers.Builder, EMISSIVITYOffset: flatbuffers.Offset): void;
    static addPanelId(builder: flatbuffers.Builder, PANEL_IDOffset: flatbuffers.Offset): void;
    static addGltfMaterialName(builder: flatbuffers.Builder, GLTF_MATERIAL_NAMEOffset: flatbuffers.Offset): void;
    static addGltfMaterialIndex(builder: flatbuffers.Builder, GLTF_MATERIAL_INDEX: number): void;
    static addNotes(builder: flatbuffers.Builder, NOTESOffset: flatbuffers.Offset): void;
    static endOPPSurface(builder: flatbuffers.Builder): flatbuffers.Offset;
    unpack(): OPPSurfaceT;
    unpackTo(_o: OPPSurfaceT): void;
}
export declare class OPPSurfaceT implements flatbuffers.IGeneratedObject {
    ID: string | Uint8Array | null;
    KIND: oppSurfaceKind;
    MATERIAL: string | Uint8Array | null;
    MATERIAL_CLASS: oppMaterialClass;
    COUNT: number;
    PROVENANCE: OPPProvenanceT | null;
    AREA: OPPQuantityT | null;
    MASS: OPPQuantityT | null;
    SPECULAR_REFLECTIVITY: OPPQuantityT | null;
    DIFFUSE_REFLECTIVITY: OPPQuantityT | null;
    ABSORPTIVITY: OPPQuantityT | null;
    EMISSIVITY: OPPQuantityT | null;
    PANEL_ID: string | Uint8Array | null;
    GLTF_MATERIAL_NAME: string | Uint8Array | null;
    GLTF_MATERIAL_INDEX: number;
    NOTES: string | Uint8Array | null;
    constructor(ID?: string | Uint8Array | null, KIND?: oppSurfaceKind, MATERIAL?: string | Uint8Array | null, MATERIAL_CLASS?: oppMaterialClass, COUNT?: number, PROVENANCE?: OPPProvenanceT | null, AREA?: OPPQuantityT | null, MASS?: OPPQuantityT | null, SPECULAR_REFLECTIVITY?: OPPQuantityT | null, DIFFUSE_REFLECTIVITY?: OPPQuantityT | null, ABSORPTIVITY?: OPPQuantityT | null, EMISSIVITY?: OPPQuantityT | null, PANEL_ID?: string | Uint8Array | null, GLTF_MATERIAL_NAME?: string | Uint8Array | null, GLTF_MATERIAL_INDEX?: number, NOTES?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=OPPSurface.d.ts.map