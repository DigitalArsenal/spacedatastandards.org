import * as flatbuffers from 'flatbuffers';
import { PVN, PVNT } from './PVN.js';
import { RBFSaaContour, RBFSaaContourT } from './RBFSaaContour.js';
import { RBFStructureFeature, RBFStructureFeatureT } from './RBFStructureFeature.js';
import { rbfFluxKind } from './rbfFluxKind.js';
import { rbfModelKind } from './rbfModelKind.js';
import { rbfParticleSpecies } from './rbfParticleSpecies.js';
/**
 * Radiation Belt Flux
 */
export declare class RBF implements flatbuffers.IUnpackableObject<RBFT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): RBF;
    static getRootAsRBF(bb: flatbuffers.ByteBuffer, obj?: RBF): RBF;
    static getSizePrefixedRootAsRBF(bb: flatbuffers.ByteBuffer, obj?: RBF): RBF;
    static bufferHasIdentifier(bb: flatbuffers.ByteBuffer): boolean;
    /**
     * Unique identifier of this radiation belt flux record.
     */
    RBF_ID(): string;
    RBF_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    /**
     * CCSDS SANA central body name (e.g. "EARTH", "JUPITER", "SATURN", "URANUS", "NEPTUNE").
     */
    BODY_NAME(): string;
    BODY_NAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    /**
     * NAIF SPICE body identifier (e.g. 399, 599, 699, 799, 899).
     */
    BODY_NAIF_ID(): number;
    /**
     * Radiation belt model family.
     */
    MODEL(): rbfModelKind;
    /**
     * Model version or edition string.
     */
    MODEL_VERSION(): string | null;
    MODEL_VERSION(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Underlying planetary magnetic field model identifier.
     */
    MAG_MODEL_ID(): string | null;
    MAG_MODEL_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Body-fixed coordinate frame identifier.
     */
    REFERENCE_FRAME(): string | null;
    REFERENCE_FRAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Particle species tabulated in FLUX_GRID.
     */
    SPECIES(): rbfParticleSpecies;
    /**
     * Flux or plasma density representation kind.
     */
    FLUX_TYPE(): rbfFluxKind;
    /**
     * Physical units string for FLUX_GRID (e.g. "cm^-2 s^-1", "cm^-2 s^-1 MeV^-1 sr^-1", "cm^-3").
     */
    UNITS(): string;
    UNITS(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    /**
     * Valid epoch for the model state, RFC 3339 UTC.
     */
    EPOCH(): string;
    EPOCH(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    /**
     * Geomagnetic Kp index driving the model state (meaningful when HAS_KP is true).
     */
    KP(): number;
    /**
     * True when KP was supplied to the model.
     */
    HAS_KP(): boolean;
    /**
     * Disturbance storm time index Dst in nT (meaningful when HAS_DST_NT is true).
     */
    DST_NT(): number;
    /**
     * True when DST_NT was supplied to the model.
     */
    HAS_DST_NT(): boolean;
    /**
     * 10.7 cm solar radio flux F10.7 in sfu (meaningful when HAS_F107 is true).
     */
    F107(): number;
    /**
     * True when F107 was supplied to the model.
     */
    HAS_F107(): boolean;
    /**
     * Solar wind dynamic pressure in nPa (meaningful when HAS_SOLAR_WIND_PRESSURE is true).
     */
    SOLAR_WIND_PRESSURE_NPA(): number;
    /**
     * True when SOLAR_WIND_PRESSURE_NPA was supplied to the model.
     */
    HAS_SOLAR_WIND_PRESSURE(): boolean;
    /**
     * Statistical percentile/quantile for probabilistic belt models (0..100, default median 50.0).
     */
    QUANTILE_PCT(): number;
    /**
     * McIlwain L-shell grid coordinates in planetary radii.
     */
    L_SHELLS(index: number): number | null;
    lShellsLength(): number;
    lShellsArray(): Float64Array | null;
    /**
     * Particle kinetic energy grid coordinates in MeV.
     */
    ENERGY_MEV(index: number): number | null;
    energyMevLength(): number;
    energyMevArray(): Float64Array | null;
    /**
     * Magnetic field ratio B/B0 grid coordinates along field lines.
     */
    B_OVER_B0(index: number): number | null;
    bOverB0Length(): number;
    bOverB0Array(): Float64Array | null;
    /**
     * Flattened row-major flux values indexed by [L, E, B/B0].
     */
    FLUX_GRID(index: number): number | null;
    fluxGridLength(): number;
    fluxGridArray(): Float64Array | null;
    /**
     * Magnetospheric structures (tori, moon sweep gaps, ring absorption, slot region).
     */
    STRUCTURES(index: number, obj?: RBFStructureFeature): RBFStructureFeature | null;
    structuresLength(): number;
    /**
     * Computed anomaly contours (e.g. South Atlantic Anomaly at reference altitudes).
     */
    SAA_CONTOURS(index: number, obj?: RBFSaaContour): RBFSaaContour | null;
    saaContoursLength(): number;
    /**
     * Referenced $SWS or $SPW space-weather record identifiers.
     */
    SPACE_WEATHER_REFS(index: number): string;
    SPACE_WEATHER_REFS(index: number, optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    spaceWeatherRefsLength(): number;
    /**
     * Record-level source and build provenance.
     */
    PROVENANCE(obj?: PVN): PVN | null;
    static startRBF(builder: flatbuffers.Builder): void;
    static addRbfId(builder: flatbuffers.Builder, RBF_IDOffset: flatbuffers.Offset): void;
    static addBodyName(builder: flatbuffers.Builder, BODY_NAMEOffset: flatbuffers.Offset): void;
    static addBodyNaifId(builder: flatbuffers.Builder, BODY_NAIF_ID: number): void;
    static addModel(builder: flatbuffers.Builder, MODEL: rbfModelKind): void;
    static addModelVersion(builder: flatbuffers.Builder, MODEL_VERSIONOffset: flatbuffers.Offset): void;
    static addMagModelId(builder: flatbuffers.Builder, MAG_MODEL_IDOffset: flatbuffers.Offset): void;
    static addReferenceFrame(builder: flatbuffers.Builder, REFERENCE_FRAMEOffset: flatbuffers.Offset): void;
    static addSpecies(builder: flatbuffers.Builder, SPECIES: rbfParticleSpecies): void;
    static addFluxType(builder: flatbuffers.Builder, FLUX_TYPE: rbfFluxKind): void;
    static addUnits(builder: flatbuffers.Builder, UNITSOffset: flatbuffers.Offset): void;
    static addEpoch(builder: flatbuffers.Builder, EPOCHOffset: flatbuffers.Offset): void;
    static addKp(builder: flatbuffers.Builder, KP: number): void;
    static addHasKp(builder: flatbuffers.Builder, HAS_KP: boolean): void;
    static addDstNt(builder: flatbuffers.Builder, DST_NT: number): void;
    static addHasDstNt(builder: flatbuffers.Builder, HAS_DST_NT: boolean): void;
    static addF107(builder: flatbuffers.Builder, F107: number): void;
    static addHasF107(builder: flatbuffers.Builder, HAS_F107: boolean): void;
    static addSolarWindPressureNpa(builder: flatbuffers.Builder, SOLAR_WIND_PRESSURE_NPA: number): void;
    static addHasSolarWindPressure(builder: flatbuffers.Builder, HAS_SOLAR_WIND_PRESSURE: boolean): void;
    static addQuantilePct(builder: flatbuffers.Builder, QUANTILE_PCT: number): void;
    static addLShells(builder: flatbuffers.Builder, L_SHELLSOffset: flatbuffers.Offset): void;
    static createLShellsVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createLShellsVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startLShellsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addEnergyMev(builder: flatbuffers.Builder, ENERGY_MEVOffset: flatbuffers.Offset): void;
    static createEnergyMevVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createEnergyMevVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startEnergyMevVector(builder: flatbuffers.Builder, numElems: number): void;
    static addBOverB0(builder: flatbuffers.Builder, B_OVER_B0Offset: flatbuffers.Offset): void;
    static createBOverB0Vector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createBOverB0Vector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startBOverB0Vector(builder: flatbuffers.Builder, numElems: number): void;
    static addFluxGrid(builder: flatbuffers.Builder, FLUX_GRIDOffset: flatbuffers.Offset): void;
    static createFluxGridVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createFluxGridVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startFluxGridVector(builder: flatbuffers.Builder, numElems: number): void;
    static addStructures(builder: flatbuffers.Builder, STRUCTURESOffset: flatbuffers.Offset): void;
    static createStructuresVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startStructuresVector(builder: flatbuffers.Builder, numElems: number): void;
    static addSaaContours(builder: flatbuffers.Builder, SAA_CONTOURSOffset: flatbuffers.Offset): void;
    static createSaaContoursVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startSaaContoursVector(builder: flatbuffers.Builder, numElems: number): void;
    static addSpaceWeatherRefs(builder: flatbuffers.Builder, SPACE_WEATHER_REFSOffset: flatbuffers.Offset): void;
    static createSpaceWeatherRefsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startSpaceWeatherRefsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addProvenance(builder: flatbuffers.Builder, PROVENANCEOffset: flatbuffers.Offset): void;
    static endRBF(builder: flatbuffers.Builder): flatbuffers.Offset;
    static finishRBFBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static finishSizePrefixedRBFBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    unpack(): RBFT;
    unpackTo(_o: RBFT): void;
}
export declare class RBFT implements flatbuffers.IGeneratedObject {
    RBF_ID: string | Uint8Array | null;
    BODY_NAME: string | Uint8Array | null;
    BODY_NAIF_ID: number;
    MODEL: rbfModelKind;
    MODEL_VERSION: string | Uint8Array | null;
    MAG_MODEL_ID: string | Uint8Array | null;
    REFERENCE_FRAME: string | Uint8Array | null;
    SPECIES: rbfParticleSpecies;
    FLUX_TYPE: rbfFluxKind;
    UNITS: string | Uint8Array | null;
    EPOCH: string | Uint8Array | null;
    KP: number;
    HAS_KP: boolean;
    DST_NT: number;
    HAS_DST_NT: boolean;
    F107: number;
    HAS_F107: boolean;
    SOLAR_WIND_PRESSURE_NPA: number;
    HAS_SOLAR_WIND_PRESSURE: boolean;
    QUANTILE_PCT: number;
    L_SHELLS: (number)[];
    ENERGY_MEV: (number)[];
    B_OVER_B0: (number)[];
    FLUX_GRID: (number)[];
    STRUCTURES: (RBFStructureFeatureT)[];
    SAA_CONTOURS: (RBFSaaContourT)[];
    SPACE_WEATHER_REFS: (string)[];
    PROVENANCE: PVNT | null;
    constructor(RBF_ID?: string | Uint8Array | null, BODY_NAME?: string | Uint8Array | null, BODY_NAIF_ID?: number, MODEL?: rbfModelKind, MODEL_VERSION?: string | Uint8Array | null, MAG_MODEL_ID?: string | Uint8Array | null, REFERENCE_FRAME?: string | Uint8Array | null, SPECIES?: rbfParticleSpecies, FLUX_TYPE?: rbfFluxKind, UNITS?: string | Uint8Array | null, EPOCH?: string | Uint8Array | null, KP?: number, HAS_KP?: boolean, DST_NT?: number, HAS_DST_NT?: boolean, F107?: number, HAS_F107?: boolean, SOLAR_WIND_PRESSURE_NPA?: number, HAS_SOLAR_WIND_PRESSURE?: boolean, QUANTILE_PCT?: number, L_SHELLS?: (number)[], ENERGY_MEV?: (number)[], B_OVER_B0?: (number)[], FLUX_GRID?: (number)[], STRUCTURES?: (RBFStructureFeatureT)[], SAA_CONTOURS?: (RBFSaaContourT)[], SPACE_WEATHER_REFS?: (string)[], PROVENANCE?: PVNT | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=RBF.d.ts.map