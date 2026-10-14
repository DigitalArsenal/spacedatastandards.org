import * as flatbuffers from 'flatbuffers';
import { ATM, ATMT } from './ATM.js';
export declare class Perturbations implements flatbuffers.IUnpackableObject<PerturbationsT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): Perturbations;
    static getRootAsPerturbations(bb: flatbuffers.ByteBuffer, obj?: Perturbations): Perturbations;
    static getSizePrefixedRootAsPerturbations(bb: flatbuffers.ByteBuffer, obj?: Perturbations): Perturbations;
    /**
     * Comments in the Perturbations section.
     */
    COMMENT(index: number): string;
    COMMENT(index: number, optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    commentLength(): number;
    /**
     * Atmospheric model used.
     */
    ATMOSPHERIC_MODEL(obj?: ATM): ATM | null;
    /**
     * Gravity model used.
     */
    GRAVITY_MODEL(): string | null;
    GRAVITY_MODEL(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Degree of the gravity model.
     */
    GRAVITY_DEGREE(): number;
    /**
     * Order of the gravity model.
     */
    GRAVITY_ORDER(): number;
    /**
     * Gravitational constant times the mass of the central body.
     */
    GM(): number;
    /**
     * List of celestial bodies included in n-body perturbations.
     */
    N_BODY_PERTURBATIONS(index: number): string;
    N_BODY_PERTURBATIONS(index: number, optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    nBodyPerturbationsLength(): number;
    /**
     * Ocean tides model used.
     */
    OCEAN_TIDES_MODEL(): string | null;
    OCEAN_TIDES_MODEL(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Solid tides model used.
     */
    SOLID_TIDES_MODEL(): string | null;
    SOLID_TIDES_MODEL(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Atmospheric tides model used.
     */
    ATMOSPHERIC_TIDES_MODEL(): string | null;
    ATMOSPHERIC_TIDES_MODEL(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Geopotential model used.
     */
    GEOPOTENTIAL_MODEL(): string | null;
    GEOPOTENTIAL_MODEL(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Solar radiation pressure model used.
     */
    SOLAR_RAD_PRESSURE(): string | null;
    SOLAR_RAD_PRESSURE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Albedo model used.
     */
    ALBEDO(): string | null;
    ALBEDO(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Thermal model used.
     */
    THERMAL(): string | null;
    THERMAL(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Relativity model used.
     */
    RELATIVITY(): string | null;
    RELATIVITY(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Atmospheric drag model used.
     */
    ATMOSPHERIC_DRAG(): string | null;
    ATMOSPHERIC_DRAG(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Fixed geomagnetic Kp index used.
     */
    FIXED_GEOMAG_KP(): number;
    /**
     * Fixed F10.7 solar flux value used.
     */
    FIXED_F10P7(): number;
    /**
     * Fixed mean F10.7 solar flux value used.
     */
    FIXED_F10P7_MEAN(): number;
    /**
     * Fixed (time-invariant) geomagnetic index ap used in place of the normal
     * time-varying values (CCSDS 502.0-B-3 FIXED_GEOMAG_AP).
     */
    FIXED_GEOMAG_AP(): number;
    /**
     * ATMOSPHERIC_MODEL as the message wrote it (CCSDS 502.0-B-3); ATMOSPHERIC_MODEL
     * above is the model family when the text names one.
     */
    ATMOSPHERIC_MODEL_NAME(): string | null;
    ATMOSPHERIC_MODEL_NAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * EQUATORIAL_RADIUS in km, NaN when not stated.
     */
    EQUATORIAL_RADIUS(): number;
    /**
     * CENTRAL_BODY_ROTATION in deg/s, NaN when not stated.
     */
    CENTRAL_BODY_ROTATION(): number;
    /**
     * OBLATE_FLATTENING, NaN when not stated.
     */
    OBLATE_FLATTENING(): number;
    /**
     * REDUCTION_THEORY.
     */
    REDUCTION_THEORY(): string | null;
    REDUCTION_THEORY(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * ALBEDO_GRID_SIZE.
     */
    ALBEDO_GRID_SIZE(): number;
    /**
     * SHADOW_MODEL.
     */
    SHADOW_MODEL(): string | null;
    SHADOW_MODEL(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * SHADOW_BODIES.
     */
    SHADOW_BODIES(): string | null;
    SHADOW_BODIES(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * SW_DATA_SOURCE: the space weather data source.
     */
    SW_DATA_SOURCE(): string | null;
    SW_DATA_SOURCE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * SW_DATA_EPOCH.
     */
    SW_DATA_EPOCH(): string | null;
    SW_DATA_EPOCH(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * SW_INTERP_METHOD.
     */
    SW_INTERP_METHOD(): string | null;
    SW_INTERP_METHOD(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * FIXED_GEOMAG_DST in nT, NaN when not stated.
     */
    FIXED_GEOMAG_DST(): number;
    /**
     * FIXED_M10P7, NaN when not stated.
     */
    FIXED_M10P7(): number;
    /**
     * FIXED_M10P7_MEAN, NaN when not stated.
     */
    FIXED_M10P7_MEAN(): number;
    /**
     * FIXED_S10P7, NaN when not stated.
     */
    FIXED_S10P7(): number;
    /**
     * FIXED_S10P7_MEAN, NaN when not stated.
     */
    FIXED_S10P7_MEAN(): number;
    /**
     * FIXED_Y10P7, NaN when not stated.
     */
    FIXED_Y10P7(): number;
    /**
     * FIXED_Y10P7_MEAN, NaN when not stated.
     */
    FIXED_Y10P7_MEAN(): number;
    static startPerturbations(builder: flatbuffers.Builder): void;
    static addComment(builder: flatbuffers.Builder, COMMENTOffset: flatbuffers.Offset): void;
    static createCommentVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startCommentVector(builder: flatbuffers.Builder, numElems: number): void;
    static addAtmosphericModel(builder: flatbuffers.Builder, ATMOSPHERIC_MODELOffset: flatbuffers.Offset): void;
    static addGravityModel(builder: flatbuffers.Builder, GRAVITY_MODELOffset: flatbuffers.Offset): void;
    static addGravityDegree(builder: flatbuffers.Builder, GRAVITY_DEGREE: number): void;
    static addGravityOrder(builder: flatbuffers.Builder, GRAVITY_ORDER: number): void;
    static addGm(builder: flatbuffers.Builder, GM: number): void;
    static addNBodyPerturbations(builder: flatbuffers.Builder, N_BODY_PERTURBATIONSOffset: flatbuffers.Offset): void;
    static createNBodyPerturbationsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startNBodyPerturbationsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addOceanTidesModel(builder: flatbuffers.Builder, OCEAN_TIDES_MODELOffset: flatbuffers.Offset): void;
    static addSolidTidesModel(builder: flatbuffers.Builder, SOLID_TIDES_MODELOffset: flatbuffers.Offset): void;
    static addAtmosphericTidesModel(builder: flatbuffers.Builder, ATMOSPHERIC_TIDES_MODELOffset: flatbuffers.Offset): void;
    static addGeopotentialModel(builder: flatbuffers.Builder, GEOPOTENTIAL_MODELOffset: flatbuffers.Offset): void;
    static addSolarRadPressure(builder: flatbuffers.Builder, SOLAR_RAD_PRESSUREOffset: flatbuffers.Offset): void;
    static addAlbedo(builder: flatbuffers.Builder, ALBEDOOffset: flatbuffers.Offset): void;
    static addThermal(builder: flatbuffers.Builder, THERMALOffset: flatbuffers.Offset): void;
    static addRelativity(builder: flatbuffers.Builder, RELATIVITYOffset: flatbuffers.Offset): void;
    static addAtmosphericDrag(builder: flatbuffers.Builder, ATMOSPHERIC_DRAGOffset: flatbuffers.Offset): void;
    static addFixedGeomagKp(builder: flatbuffers.Builder, FIXED_GEOMAG_KP: number): void;
    static addFixedF10P7(builder: flatbuffers.Builder, FIXED_F10P7: number): void;
    static addFixedF10P7Mean(builder: flatbuffers.Builder, FIXED_F10P7_MEAN: number): void;
    static addFixedGeomagAp(builder: flatbuffers.Builder, FIXED_GEOMAG_AP: number): void;
    static addAtmosphericModelName(builder: flatbuffers.Builder, ATMOSPHERIC_MODEL_NAMEOffset: flatbuffers.Offset): void;
    static addEquatorialRadius(builder: flatbuffers.Builder, EQUATORIAL_RADIUS: number): void;
    static addCentralBodyRotation(builder: flatbuffers.Builder, CENTRAL_BODY_ROTATION: number): void;
    static addOblateFlattening(builder: flatbuffers.Builder, OBLATE_FLATTENING: number): void;
    static addReductionTheory(builder: flatbuffers.Builder, REDUCTION_THEORYOffset: flatbuffers.Offset): void;
    static addAlbedoGridSize(builder: flatbuffers.Builder, ALBEDO_GRID_SIZE: number): void;
    static addShadowModel(builder: flatbuffers.Builder, SHADOW_MODELOffset: flatbuffers.Offset): void;
    static addShadowBodies(builder: flatbuffers.Builder, SHADOW_BODIESOffset: flatbuffers.Offset): void;
    static addSwDataSource(builder: flatbuffers.Builder, SW_DATA_SOURCEOffset: flatbuffers.Offset): void;
    static addSwDataEpoch(builder: flatbuffers.Builder, SW_DATA_EPOCHOffset: flatbuffers.Offset): void;
    static addSwInterpMethod(builder: flatbuffers.Builder, SW_INTERP_METHODOffset: flatbuffers.Offset): void;
    static addFixedGeomagDst(builder: flatbuffers.Builder, FIXED_GEOMAG_DST: number): void;
    static addFixedM10P7(builder: flatbuffers.Builder, FIXED_M10P7: number): void;
    static addFixedM10P7Mean(builder: flatbuffers.Builder, FIXED_M10P7_MEAN: number): void;
    static addFixedS10P7(builder: flatbuffers.Builder, FIXED_S10P7: number): void;
    static addFixedS10P7Mean(builder: flatbuffers.Builder, FIXED_S10P7_MEAN: number): void;
    static addFixedY10P7(builder: flatbuffers.Builder, FIXED_Y10P7: number): void;
    static addFixedY10P7Mean(builder: flatbuffers.Builder, FIXED_Y10P7_MEAN: number): void;
    static endPerturbations(builder: flatbuffers.Builder): flatbuffers.Offset;
    unpack(): PerturbationsT;
    unpackTo(_o: PerturbationsT): void;
}
export declare class PerturbationsT implements flatbuffers.IGeneratedObject {
    COMMENT: (string)[];
    ATMOSPHERIC_MODEL: ATMT | null;
    GRAVITY_MODEL: string | Uint8Array | null;
    GRAVITY_DEGREE: number;
    GRAVITY_ORDER: number;
    GM: number;
    N_BODY_PERTURBATIONS: (string)[];
    OCEAN_TIDES_MODEL: string | Uint8Array | null;
    SOLID_TIDES_MODEL: string | Uint8Array | null;
    ATMOSPHERIC_TIDES_MODEL: string | Uint8Array | null;
    GEOPOTENTIAL_MODEL: string | Uint8Array | null;
    SOLAR_RAD_PRESSURE: string | Uint8Array | null;
    ALBEDO: string | Uint8Array | null;
    THERMAL: string | Uint8Array | null;
    RELATIVITY: string | Uint8Array | null;
    ATMOSPHERIC_DRAG: string | Uint8Array | null;
    FIXED_GEOMAG_KP: number;
    FIXED_F10P7: number;
    FIXED_F10P7_MEAN: number;
    FIXED_GEOMAG_AP: number;
    ATMOSPHERIC_MODEL_NAME: string | Uint8Array | null;
    EQUATORIAL_RADIUS: number;
    CENTRAL_BODY_ROTATION: number;
    OBLATE_FLATTENING: number;
    REDUCTION_THEORY: string | Uint8Array | null;
    ALBEDO_GRID_SIZE: number;
    SHADOW_MODEL: string | Uint8Array | null;
    SHADOW_BODIES: string | Uint8Array | null;
    SW_DATA_SOURCE: string | Uint8Array | null;
    SW_DATA_EPOCH: string | Uint8Array | null;
    SW_INTERP_METHOD: string | Uint8Array | null;
    FIXED_GEOMAG_DST: number;
    FIXED_M10P7: number;
    FIXED_M10P7_MEAN: number;
    FIXED_S10P7: number;
    FIXED_S10P7_MEAN: number;
    FIXED_Y10P7: number;
    FIXED_Y10P7_MEAN: number;
    constructor(COMMENT?: (string)[], ATMOSPHERIC_MODEL?: ATMT | null, GRAVITY_MODEL?: string | Uint8Array | null, GRAVITY_DEGREE?: number, GRAVITY_ORDER?: number, GM?: number, N_BODY_PERTURBATIONS?: (string)[], OCEAN_TIDES_MODEL?: string | Uint8Array | null, SOLID_TIDES_MODEL?: string | Uint8Array | null, ATMOSPHERIC_TIDES_MODEL?: string | Uint8Array | null, GEOPOTENTIAL_MODEL?: string | Uint8Array | null, SOLAR_RAD_PRESSURE?: string | Uint8Array | null, ALBEDO?: string | Uint8Array | null, THERMAL?: string | Uint8Array | null, RELATIVITY?: string | Uint8Array | null, ATMOSPHERIC_DRAG?: string | Uint8Array | null, FIXED_GEOMAG_KP?: number, FIXED_F10P7?: number, FIXED_F10P7_MEAN?: number, FIXED_GEOMAG_AP?: number, ATMOSPHERIC_MODEL_NAME?: string | Uint8Array | null, EQUATORIAL_RADIUS?: number, CENTRAL_BODY_ROTATION?: number, OBLATE_FLATTENING?: number, REDUCTION_THEORY?: string | Uint8Array | null, ALBEDO_GRID_SIZE?: number, SHADOW_MODEL?: string | Uint8Array | null, SHADOW_BODIES?: string | Uint8Array | null, SW_DATA_SOURCE?: string | Uint8Array | null, SW_DATA_EPOCH?: string | Uint8Array | null, SW_INTERP_METHOD?: string | Uint8Array | null, FIXED_GEOMAG_DST?: number, FIXED_M10P7?: number, FIXED_M10P7_MEAN?: number, FIXED_S10P7?: number, FIXED_S10P7_MEAN?: number, FIXED_Y10P7?: number, FIXED_Y10P7_MEAN?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=Perturbations.d.ts.map