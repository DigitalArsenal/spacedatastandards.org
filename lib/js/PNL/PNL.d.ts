import * as flatbuffers from 'flatbuffers';
import { PNLPanel, PNLPanelT } from './PNLPanel.js';
/**
 * Panelled (box-wing) Spacecraft Macro Model — the surface geometry and
 * optical properties needed to compute non-conservative forces (solar
 * radiation pressure, atmospheric drag, thermal re-radiation) on one object.
 *
 * This is deliberately NOT $VAM, $BUS or $PHY. $VAM ranks visual assets for
 * rendering and a render mesh is not a force model; $BUS/$OOD are descriptive
 * inventory; $PHY is simulation configuration (integration method, force-type
 * toggles). None of them carries per-panel area, normal, and optical
 * coefficients.
 */
export declare class PNL implements flatbuffers.IUnpackableObject<PNLT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): PNL;
    static getRootAsPNL(bb: flatbuffers.ByteBuffer, obj?: PNL): PNL;
    static getSizePrefixedRootAsPNL(bb: flatbuffers.ByteBuffer, obj?: PNL): PNL;
    static bufferHasIdentifier(bb: flatbuffers.ByteBuffer): boolean;
    /**
     * Object this macro model describes.
     */
    OBJECT_ID(): string;
    OBJECT_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    /**
     * Advisory object name.
     */
    OBJECT_NAME(): string | null;
    OBJECT_NAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Satellite catalog number, when the object is catalogued.
     */
    NORAD_CAT_ID(): number;
    /**
     * Body-fixed frame the panel normals are expressed in, e.g. "SC_BODY".
     */
    BODY_FRAME(): string | null;
    BODY_FRAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Total spacecraft mass the model corresponds to, kilograms.
     */
    TOTAL_MASS_KG(): number;
    /**
     * Epoch the model is valid at, ISO 8601. Mass and panel configuration
     * change over a mission; a macro model without an epoch is ambiguous.
     */
    EPOCH(): string | null;
    EPOCH(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * The panels.
     */
    PANELS(index: number, obj?: PNLPanel): PNLPanel | null;
    panelsLength(): number;
    /**
     * Reference cross-sectional area used by a consumer that falls back to a
     * cannonball model, square metres.
     */
    REFERENCE_AREA_M2(): number;
    /**
     * Provenance of the geometry and the optical coefficients.
     */
    SOURCE(): string | null;
    SOURCE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    static startPNL(builder: flatbuffers.Builder): void;
    static addObjectId(builder: flatbuffers.Builder, OBJECT_IDOffset: flatbuffers.Offset): void;
    static addObjectName(builder: flatbuffers.Builder, OBJECT_NAMEOffset: flatbuffers.Offset): void;
    static addNoradCatId(builder: flatbuffers.Builder, NORAD_CAT_ID: number): void;
    static addBodyFrame(builder: flatbuffers.Builder, BODY_FRAMEOffset: flatbuffers.Offset): void;
    static addTotalMassKg(builder: flatbuffers.Builder, TOTAL_MASS_KG: number): void;
    static addEpoch(builder: flatbuffers.Builder, EPOCHOffset: flatbuffers.Offset): void;
    static addPanels(builder: flatbuffers.Builder, PANELSOffset: flatbuffers.Offset): void;
    static createPanelsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startPanelsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addReferenceAreaM2(builder: flatbuffers.Builder, REFERENCE_AREA_M2: number): void;
    static addSource(builder: flatbuffers.Builder, SOURCEOffset: flatbuffers.Offset): void;
    static endPNL(builder: flatbuffers.Builder): flatbuffers.Offset;
    static finishPNLBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static finishSizePrefixedPNLBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static createPNL(builder: flatbuffers.Builder, OBJECT_IDOffset: flatbuffers.Offset, OBJECT_NAMEOffset: flatbuffers.Offset, NORAD_CAT_ID: number, BODY_FRAMEOffset: flatbuffers.Offset, TOTAL_MASS_KG: number, EPOCHOffset: flatbuffers.Offset, PANELSOffset: flatbuffers.Offset, REFERENCE_AREA_M2: number, SOURCEOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): PNLT;
    unpackTo(_o: PNLT): void;
}
export declare class PNLT implements flatbuffers.IGeneratedObject {
    OBJECT_ID: string | Uint8Array | null;
    OBJECT_NAME: string | Uint8Array | null;
    NORAD_CAT_ID: number;
    BODY_FRAME: string | Uint8Array | null;
    TOTAL_MASS_KG: number;
    EPOCH: string | Uint8Array | null;
    PANELS: (PNLPanelT)[];
    REFERENCE_AREA_M2: number;
    SOURCE: string | Uint8Array | null;
    constructor(OBJECT_ID?: string | Uint8Array | null, OBJECT_NAME?: string | Uint8Array | null, NORAD_CAT_ID?: number, BODY_FRAME?: string | Uint8Array | null, TOTAL_MASS_KG?: number, EPOCH?: string | Uint8Array | null, PANELS?: (PNLPanelT)[], REFERENCE_AREA_M2?: number, SOURCE?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=PNL.d.ts.map