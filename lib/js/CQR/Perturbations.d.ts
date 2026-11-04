import * as flatbuffers from 'flatbuffers';
import { ATM, ATMT } from './ATM.js';
import { SPW, SPWT } from './SPW.js';
import { pcfDensityCorrection } from './pcfDensityCorrection.js';
import { pcfWeatherSource } from './pcfWeatherSource.js';
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
    /**
     * Highest degree of the tesseral and sectorial terms (order 1 and above) of
     * the gravity field the record was computed with (SDS addition; the $PCF
     * FORCES name). For a mean-element set (MEAN_ELEMENTS) the cap beyond its
     * theory: 0 is the theory's own terms. For a numerical solution the nn of a
     * legacy VCM's "mmZ,nnT". 0 is otherwise not stated. A record that writes
     * either cap leaves GRAVITY_DEGREE and GRAVITY_ORDER unwritten: a degree and
     * order pair cannot state a tesseral cap below a zonal one.
     */
    MAXIMUM_TESSERAL_DEGREE(): number;
    /**
     * Highest degree of the zonal terms (order 0) of the gravity field the
     * record was computed with (SDS addition). For a mean-element set the tail
     * J6..Jz beyond its theory: 0 is the theory's own zonals, below 6 is none.
     * For a numerical solution the mm of a legacy VCM's "mmZ,nnT". 0 is
     * otherwise not stated.
     */
    MAXIMUM_ZONAL_DEGREE(): number;
    /**
     * Where the space weather behind the drag density comes from. RECORDS: the
     * daily rows in SPACE_WEATHER; THEORY_FLUX_MODEL: the theory's own generic
     * flux model; NONE: no drag weather (SGP4's BSTAR). UNSPECIFIED is refused
     * in an element-set record.
     */
    WEATHER_SOURCE(): pcfWeatherSource;
    /**
     * Correction applied to the atmosphere model's density.
     */
    DENSITY_CORRECTION(): pcfDensityCorrection;
    /**
     * CID of the $DCL whose nodes DENSITY_CORRECTION_NODE_TIMES_MS and
     * DENSITY_CORRECTION_LOG_DENSITY_SCALE_DIMENSIONLESS copy; required when
     * DENSITY_CORRECTION is not NONE. Provenance: not compared at flight.
     */
    DENSITY_CORRECTION_CID(): string | null;
    DENSITY_CORRECTION_CID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * The daily space weather the drag density reads (SDS addition; CCSDS
     * 502.0-B-3 names only the source, epoch and interpolation as text and
     * fixed values). Present iff WEATHER_SOURCE is RECORDS: one $SPW row per
     * UTC day, DATE ascending, no gap, from the day before the first day the
     * record is flown or was fitted through its last day. The record is flown
     * to the end of the last row's day and no further. Each row carries DATE,
     * F107_OBS, F107_OBS_CENTER81, AP_AVG and F107_DATA_TYPE (OBS observed;
     * PRD, PRM predicted); other SPW fields unwritten.
     */
    SPACE_WEATHER(index: number, obj?: SPW): SPW | null;
    spaceWeatherLength(): number;
    /**
     * DENSITY_CORRECTION DCA_COMMON_MODE: the $DCL LogDensityNodes layer the
     * set flies under, as that $DCL's CORRECTION.NODE_TIMES_MS (UTC Unix
     * milliseconds, strictly increasing) over the span of SPACE_WEATHER.
     * Empty when DENSITY_CORRECTION is NONE.
     */
    DENSITY_CORRECTION_NODE_TIMES_MS(index: number): bigint | null;
    densityCorrectionNodeTimesMsLength(): number;
    /**
     * One finite s = ln(rho / rho_NRLMSISE00) per DENSITY_CORRECTION_NODE_TIMES_MS
     * entry, dimensionless, as that $DCL's
     * CORRECTION.NODE_LOG_DENSITY_SCALE_DIMENSIONLESS: linear between nodes,
     * held at the end values outside them.
     */
    DENSITY_CORRECTION_LOG_DENSITY_SCALE_DIMENSIONLESS(index: number): number | null;
    densityCorrectionLogDensityScaleDimensionlessLength(): number;
    densityCorrectionLogDensityScaleDimensionlessArray(): Float64Array | null;
    /**
     * Number of terms of the nutation series REDUCTION_THEORY names that the
     * force model sums (the series of a legacy VCM's "IAU 1980 NUTAT: ttt TERMS":
     * 4, 50 or 106). 0 when the series is not truncated or the count is not
     * stated.
     */
    REDUCTION_THEORY_TERMS(): number;
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
    static addMaximumTesseralDegree(builder: flatbuffers.Builder, MAXIMUM_TESSERAL_DEGREE: number): void;
    static addMaximumZonalDegree(builder: flatbuffers.Builder, MAXIMUM_ZONAL_DEGREE: number): void;
    static addWeatherSource(builder: flatbuffers.Builder, WEATHER_SOURCE: pcfWeatherSource): void;
    static addDensityCorrection(builder: flatbuffers.Builder, DENSITY_CORRECTION: pcfDensityCorrection): void;
    static addDensityCorrectionCid(builder: flatbuffers.Builder, DENSITY_CORRECTION_CIDOffset: flatbuffers.Offset): void;
    static addSpaceWeather(builder: flatbuffers.Builder, SPACE_WEATHEROffset: flatbuffers.Offset): void;
    static createSpaceWeatherVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startSpaceWeatherVector(builder: flatbuffers.Builder, numElems: number): void;
    static addDensityCorrectionNodeTimesMs(builder: flatbuffers.Builder, DENSITY_CORRECTION_NODE_TIMES_MSOffset: flatbuffers.Offset): void;
    static createDensityCorrectionNodeTimesMsVector(builder: flatbuffers.Builder, data: bigint[]): flatbuffers.Offset;
    static startDensityCorrectionNodeTimesMsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addDensityCorrectionLogDensityScaleDimensionless(builder: flatbuffers.Builder, DENSITY_CORRECTION_LOG_DENSITY_SCALE_DIMENSIONLESSOffset: flatbuffers.Offset): void;
    static createDensityCorrectionLogDensityScaleDimensionlessVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createDensityCorrectionLogDensityScaleDimensionlessVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startDensityCorrectionLogDensityScaleDimensionlessVector(builder: flatbuffers.Builder, numElems: number): void;
    static addReductionTheoryTerms(builder: flatbuffers.Builder, REDUCTION_THEORY_TERMS: number): void;
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
    MAXIMUM_TESSERAL_DEGREE: number;
    MAXIMUM_ZONAL_DEGREE: number;
    WEATHER_SOURCE: pcfWeatherSource;
    DENSITY_CORRECTION: pcfDensityCorrection;
    DENSITY_CORRECTION_CID: string | Uint8Array | null;
    SPACE_WEATHER: (SPWT)[];
    DENSITY_CORRECTION_NODE_TIMES_MS: (bigint)[];
    DENSITY_CORRECTION_LOG_DENSITY_SCALE_DIMENSIONLESS: (number)[];
    REDUCTION_THEORY_TERMS: number;
    constructor(COMMENT?: (string)[], ATMOSPHERIC_MODEL?: ATMT | null, GRAVITY_MODEL?: string | Uint8Array | null, GRAVITY_DEGREE?: number, GRAVITY_ORDER?: number, GM?: number, N_BODY_PERTURBATIONS?: (string)[], OCEAN_TIDES_MODEL?: string | Uint8Array | null, SOLID_TIDES_MODEL?: string | Uint8Array | null, ATMOSPHERIC_TIDES_MODEL?: string | Uint8Array | null, GEOPOTENTIAL_MODEL?: string | Uint8Array | null, SOLAR_RAD_PRESSURE?: string | Uint8Array | null, ALBEDO?: string | Uint8Array | null, THERMAL?: string | Uint8Array | null, RELATIVITY?: string | Uint8Array | null, ATMOSPHERIC_DRAG?: string | Uint8Array | null, FIXED_GEOMAG_KP?: number, FIXED_F10P7?: number, FIXED_F10P7_MEAN?: number, FIXED_GEOMAG_AP?: number, ATMOSPHERIC_MODEL_NAME?: string | Uint8Array | null, EQUATORIAL_RADIUS?: number, CENTRAL_BODY_ROTATION?: number, OBLATE_FLATTENING?: number, REDUCTION_THEORY?: string | Uint8Array | null, ALBEDO_GRID_SIZE?: number, SHADOW_MODEL?: string | Uint8Array | null, SHADOW_BODIES?: string | Uint8Array | null, SW_DATA_SOURCE?: string | Uint8Array | null, SW_DATA_EPOCH?: string | Uint8Array | null, SW_INTERP_METHOD?: string | Uint8Array | null, FIXED_GEOMAG_DST?: number, FIXED_M10P7?: number, FIXED_M10P7_MEAN?: number, FIXED_S10P7?: number, FIXED_S10P7_MEAN?: number, FIXED_Y10P7?: number, FIXED_Y10P7_MEAN?: number, MAXIMUM_TESSERAL_DEGREE?: number, MAXIMUM_ZONAL_DEGREE?: number, WEATHER_SOURCE?: pcfWeatherSource, DENSITY_CORRECTION?: pcfDensityCorrection, DENSITY_CORRECTION_CID?: string | Uint8Array | null, SPACE_WEATHER?: (SPWT)[], DENSITY_CORRECTION_NODE_TIMES_MS?: (bigint)[], DENSITY_CORRECTION_LOG_DENSITY_SCALE_DIMENSIONLESS?: (number)[], REDUCTION_THEORY_TERMS?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=Perturbations.d.ts.map