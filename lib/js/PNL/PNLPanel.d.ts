import * as flatbuffers from 'flatbuffers';
import { pnlTrackingMode } from './pnlTrackingMode.js';
/**
 * One flat panel of a macro model.
 *
 * The reflection coefficients describe how incident radiation is disposed of:
 * SPECULAR_REFLECTIVITY + DIFFUSE_REFLECTIVITY + ABSORPTIVITY should sum to
 * 1 for a physically consistent panel. Producers SHOULD state the source of
 * the optical properties in the parent record's SOURCE field; a panel model
 * whose coefficients have no provenance is worse than none.
 */
export declare class PNLPanel implements flatbuffers.IUnpackableObject<PNLPanelT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): PNLPanel;
    static getRootAsPNLPanel(bb: flatbuffers.ByteBuffer, obj?: PNLPanel): PNLPanel;
    static getSizePrefixedRootAsPNLPanel(bb: flatbuffers.ByteBuffer, obj?: PNLPanel): PNLPanel;
    /**
     * Stable panel identifier within the model.
     */
    PANEL_ID(): string | null;
    PANEL_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Panel area, square metres.
     */
    AREA_M2(): number;
    /**
     * Outward panel normal in the body frame, unit vector.
     */
    NORMAL_X(): number;
    NORMAL_Y(): number;
    NORMAL_Z(): number;
    /**
     * Orientation behaviour of the panel.
     */
    TRACKING_MODE(): pnlTrackingMode;
    /**
     * Fraction of incident radiation reflected specularly.
     */
    SPECULAR_REFLECTIVITY(): number;
    /**
     * Fraction reflected diffusely.
     */
    DIFFUSE_REFLECTIVITY(): number;
    /**
     * Fraction absorbed.
     */
    ABSORPTIVITY(): number;
    /**
     * Infrared emissivity of the panel surface.
     */
    EMISSIVITY(): number;
    /**
     * True when absorbed energy is re-radiated instantaneously (no thermal
     * lag). False means the consumer must model thermal inertia.
     */
    INSTANTANEOUS_RERADIATION(): boolean;
    /**
     * Panel drag coefficient, when the model is used for aerodynamic forces.
     */
    DRAG_COEFFICIENT(): number;
    /**
     * Material name, for traceability back to a materials table.
     */
    MATERIAL_NAME(): string | null;
    MATERIAL_NAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    static startPNLPanel(builder: flatbuffers.Builder): void;
    static addPanelId(builder: flatbuffers.Builder, PANEL_IDOffset: flatbuffers.Offset): void;
    static addAreaM2(builder: flatbuffers.Builder, AREA_M2: number): void;
    static addNormalX(builder: flatbuffers.Builder, NORMAL_X: number): void;
    static addNormalY(builder: flatbuffers.Builder, NORMAL_Y: number): void;
    static addNormalZ(builder: flatbuffers.Builder, NORMAL_Z: number): void;
    static addTrackingMode(builder: flatbuffers.Builder, TRACKING_MODE: pnlTrackingMode): void;
    static addSpecularReflectivity(builder: flatbuffers.Builder, SPECULAR_REFLECTIVITY: number): void;
    static addDiffuseReflectivity(builder: flatbuffers.Builder, DIFFUSE_REFLECTIVITY: number): void;
    static addAbsorptivity(builder: flatbuffers.Builder, ABSORPTIVITY: number): void;
    static addEmissivity(builder: flatbuffers.Builder, EMISSIVITY: number): void;
    static addInstantaneousReradiation(builder: flatbuffers.Builder, INSTANTANEOUS_RERADIATION: boolean): void;
    static addDragCoefficient(builder: flatbuffers.Builder, DRAG_COEFFICIENT: number): void;
    static addMaterialName(builder: flatbuffers.Builder, MATERIAL_NAMEOffset: flatbuffers.Offset): void;
    static endPNLPanel(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createPNLPanel(builder: flatbuffers.Builder, PANEL_IDOffset: flatbuffers.Offset, AREA_M2: number, NORMAL_X: number, NORMAL_Y: number, NORMAL_Z: number, TRACKING_MODE: pnlTrackingMode, SPECULAR_REFLECTIVITY: number, DIFFUSE_REFLECTIVITY: number, ABSORPTIVITY: number, EMISSIVITY: number, INSTANTANEOUS_RERADIATION: boolean, DRAG_COEFFICIENT: number, MATERIAL_NAMEOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): PNLPanelT;
    unpackTo(_o: PNLPanelT): void;
}
export declare class PNLPanelT implements flatbuffers.IGeneratedObject {
    PANEL_ID: string | Uint8Array | null;
    AREA_M2: number;
    NORMAL_X: number;
    NORMAL_Y: number;
    NORMAL_Z: number;
    TRACKING_MODE: pnlTrackingMode;
    SPECULAR_REFLECTIVITY: number;
    DIFFUSE_REFLECTIVITY: number;
    ABSORPTIVITY: number;
    EMISSIVITY: number;
    INSTANTANEOUS_RERADIATION: boolean;
    DRAG_COEFFICIENT: number;
    MATERIAL_NAME: string | Uint8Array | null;
    constructor(PANEL_ID?: string | Uint8Array | null, AREA_M2?: number, NORMAL_X?: number, NORMAL_Y?: number, NORMAL_Z?: number, TRACKING_MODE?: pnlTrackingMode, SPECULAR_REFLECTIVITY?: number, DIFFUSE_REFLECTIVITY?: number, ABSORPTIVITY?: number, EMISSIVITY?: number, INSTANTANEOUS_RERADIATION?: boolean, DRAG_COEFFICIENT?: number, MATERIAL_NAME?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=PNLPanel.d.ts.map