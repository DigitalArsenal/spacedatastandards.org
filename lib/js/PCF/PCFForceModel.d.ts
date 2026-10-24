import * as flatbuffers from 'flatbuffers';
import { PCFEcom2, PCFEcom2T } from './PCFEcom2.js';
import { PCFEmpiricalTerms, PCFEmpiricalTermsT } from './PCFEmpiricalTerms.js';
import { PCFSpaceWeather, PCFSpaceWeatherT } from './PCFSpaceWeather.js';
import { evlShadowModel } from './evlShadowModel.js';
import { pcfAtmosphereFamily } from './pcfAtmosphereFamily.js';
import { pcfDensityCorrection } from './pcfDensityCorrection.js';
import { pcfEarthRadiationModel } from './pcfEarthRadiationModel.js';
import { pcfEphemerisKind } from './pcfEphemerisKind.js';
import { pcfGnssSpacecraftBlock } from './pcfGnssSpacecraftBlock.js';
import { pcfGravitySelection } from './pcfGravitySelection.js';
import { pcfNeutralWind } from './pcfNeutralWind.js';
import { pcfOceanTideModel } from './pcfOceanTideModel.js';
import { pcfRadiationPressureFamily } from './pcfRadiationPressureFamily.js';
import { pcfRelativityTerms } from './pcfRelativityTerms.js';
import { pcfSolidTideModel } from './pcfSolidTideModel.js';
import { pcfWeatherExtension } from './pcfWeatherExtension.js';
import { pcfWeatherSource } from './pcfWeatherSource.js';
/**
 * The forces a propagator applies, shared by $PCF and $PRW. Flags default to
 * off unless stated: a force is active only when selected. No implied support
 * for coefficients, drag models or bodies the provider cannot supply; a
 * provider refuses what it cannot apply, by name.
 */
export declare class PCFForceModel implements flatbuffers.IUnpackableObject<PCFForceModelT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): PCFForceModel;
    static getRootAsPCFForceModel(bb: flatbuffers.ByteBuffer, obj?: PCFForceModel): PCFForceModel;
    static getSizePrefixedRootAsPCFForceModel(bb: flatbuffers.ByteBuffer, obj?: PCFForceModel): PCFForceModel;
    /**
     * Gravity field. Default INFER_FLAGS (the ENABLE_ flags decide).
     */
    GRAVITY_CHOICE(): pcfGravitySelection;
    /**
     * Central-body point-mass term. Default true.
     */
    ENABLE_POINT_MASS(): boolean;
    /**
     * Gravitational parameter of the central body, m3/s2; required positive
     * when a central gravity term is enabled. Default 0.
     */
    GRAVITATIONAL_PARAMETER(): number;
    /**
     * J2 zonal term. Default true.
     */
    ENABLE_J2(): boolean;
    /**
     * J3 zonal term. Default false.
     */
    ENABLE_J3(): boolean;
    /**
     * J4 zonal term. Default false.
     */
    ENABLE_J4(): boolean;
    /**
     * Zonal terms above J4. Default false.
     */
    ENABLE_HIGHER_ZONALS(): boolean;
    /**
     * Highest field degree; dimensionless. Absent selects the explicitly
     * reported model default.
     */
    MAXIMUM_DEGREE(): number;
    /**
     * True when MAXIMUM_DEGREE carries a value; false (the default) means absent.
     */
    HAS_MAXIMUM_DEGREE(): boolean;
    /**
     * Highest field order; dimensionless. Absent selects the explicitly
     * reported model default.
     */
    MAXIMUM_ORDER(): number;
    /**
     * True when MAXIMUM_ORDER carries a value; false (the default) means absent.
     */
    HAS_MAXIMUM_ORDER(): boolean;
    /**
     * Third-body gravity of THIRD_BODY_IDS. Default false.
     */
    ENABLE_THIRD_BODY(): boolean;
    /**
     * NAIF IDs; explicit vector, e.g. [10,301]. Empty (the default) means no
     * third bodies.
     */
    THIRD_BODY_IDS(index: number): number | null;
    thirdBodyIdsLength(): number;
    thirdBodyIdsArray(): Int32Array | null;
    /**
     * Solar radiation pressure. Default false.
     */
    ENABLE_SRP(): boolean;
    /**
     * Atmospheric drag. Default false.
     */
    ENABLE_DRAG(): boolean;
    /**
     * Spacecraft mass, kg. Default 1000.
     */
    INITIAL_MASS_KG(): number;
    /**
     * Cross-section area, m2. Default 10.
     */
    AREA_M2(): number;
    /**
     * Radiation-pressure coefficient Cr, dimensionless. Default 1.5.
     */
    REFLECTIVITY_COEFFICIENT(): number;
    /**
     * Drag coefficient Cd, dimensionless. Default 2.2.
     */
    DRAG_COEFFICIENT(): number;
    /**
     * Atmosphere model. Default NRLMSISE00.
     */
    ATMOSPHERE_MODEL(): pcfAtmosphereFamily;
    /**
     * Space weather held for the arc when WEATHER_SOURCE selects it. Default
     * absent.
     */
    WEATHER(obj?: PCFSpaceWeather): PCFSpaceWeather | null;
    /**
     * Actual configured source name, e.g. an analytic series or a planetary SPK
     * kernel. Required; no default.
     */
    EPHEMERIS_SOURCE(): string;
    EPHEMERIS_SOURCE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    /**
     * Solid Earth tides. Their field is Earth-fixed, so a provider needs Earth
     * orientation (the request's Earth orientation rows) to apply them. Default
     * NONE.
     */
    SOLID_TIDES(): pcfSolidTideModel;
    /**
     * Post-Newtonian terms. Default NONE.
     */
    RELATIVITY(): pcfRelativityTerms;
    /**
     * Constant acceleration along the in-track axis, m/s2: T of RTN,
     * N cross rhat with N = unit(r cross v) (the "in-track thrust" of a VCM).
     * Default absent.
     */
    IN_TRACK_ACCELERATION_M_S2(): number;
    /**
     * True when IN_TRACK_ACCELERATION_M_S2 carries a value; false (the default)
     * means absent.
     */
    HAS_IN_TRACK_ACCELERATION_M_S2(): boolean;
    /**
     * Rate of change of the drag ballistic coefficient Cd*A/m, m2/kg/s (the
     * BDOT of a VCM). Drag uses Cd*A/m + rate * (t - initial epoch). Default
     * absent.
     */
    DRAG_AREA_OVER_MASS_RATE_M2_KG_S(): number;
    /**
     * True when DRAG_AREA_OVER_MASS_RATE_M2_KG_S carries a value; false (the
     * default) means absent.
     */
    HAS_DRAG_AREA_OVER_MASS_RATE_M2_KG_S(): boolean;
    /**
     * Highest degree of the tesseral and sectorial terms (order >= 1); the
     * zonals run to MAXIMUM_DEGREE. A VCM's "mmZ,nnT" is MAXIMUM_DEGREE mm,
     * MAXIMUM_ORDER nn and MAXIMUM_TESSERAL_DEGREE nn. Default absent.
     */
    MAXIMUM_TESSERAL_DEGREE(): number;
    /**
     * True when MAXIMUM_TESSERAL_DEGREE carries a value; false (the default)
     * means absent.
     */
    HAS_MAXIMUM_TESSERAL_DEGREE(): boolean;
    /**
     * Solar radiation pressure model family. Default CANNONBALL.
     */
    RADIATION_PRESSURE_MODEL(): pcfRadiationPressureFamily;
    /**
     * Spacecraft block; required when RADIATION_PRESSURE_MODEL is GNSS_BOX_WING.
     * Default UNSPECIFIED.
     */
    GNSS_BLOCK(): pcfGnssSpacecraftBlock;
    /**
     * ECOM2 coefficients; absent (the default) means no ECOM2 term.
     */
    ECOM2(obj?: PCFEcom2): PCFEcom2 | null;
    /**
     * Earth radiation pressure (albedo and infrared). It reads the Sun's
     * position from the ephemeris source. Default NONE.
     */
    EARTH_RADIATION(): pcfEarthRadiationModel;
    /**
     * Angular size of the Earth surface elements it sums, degrees. Default 15.
     */
    EARTH_RADIATION_RESOLUTION_DEG(): number;
    /**
     * Isotropic Cr*A/m, m2/kg, the Earth's radiation acts on. Absent, it is the
     * cannonball's REFLECTIVITY_COEFFICIENT * AREA_M2 / INITIAL_MASS_KG, and
     * fitting SRP_AREA_OVER_MASS scales both.
     */
    EARTH_RADIATION_AREA_OVER_MASS_M2_KG(): number;
    /**
     * True when EARTH_RADIATION_AREA_OVER_MASS_M2_KG carries a value; false (the
     * default) means absent.
     */
    HAS_EARTH_RADIATION_AREA_OVER_MASS_M2_KG(): boolean;
    /**
     * Ocean tides. Their field is Earth-fixed, so a provider needs Earth
     * orientation (the request's Earth orientation rows) to apply them. Default
     * NONE.
     */
    OCEAN_TIDES(): pcfOceanTideModel;
    /**
     * Truncation of the ocean tide field, degree. Default 30.
     */
    OCEAN_TIDE_MAXIMUM_DEGREE(): number;
    /**
     * Truncation of the ocean tide field, order. Default 30.
     */
    OCEAN_TIDE_MAXIMUM_ORDER(): number;
    /**
     * Central body, a NAIF ID. The gravity field, atmosphere, tides and third
     * bodies are those of this body. Default 399 (Earth).
     */
    CENTRAL_BODY_NAIF_ID(): number;
    /**
     * Where the Sun, Moon and planets are read from. Default UNSPECIFIED (the
     * source named in EPHEMERIS_SOURCE).
     */
    EPHEMERIS_KIND(): pcfEphemerisKind;
    /**
     * Shadow model of the radiation-pressure and Earth-radiation terms. Default
     * UNSPECIFIED (the provider's: conical).
     */
    SHADOW_MODEL(): evlShadowModel;
    /**
     * Where the space weather comes from. Default UNSPECIFIED (inferred).
     */
    WEATHER_SOURCE(): pcfWeatherSource;
    /**
     * What happens past the last space weather row. Default UNSPECIFIED (the
     * provider's rule).
     */
    WEATHER_EXTENSION(): pcfWeatherExtension;
    /**
     * Correction applied to the atmosphere model's density. Default NONE.
     */
    DENSITY_CORRECTION(): pcfDensityCorrection;
    /**
     * Past the last density-correction node the log-density scale relaxes to
     * its trailing mean with this time constant, hours; 0 holds the last node.
     * Absent, the provider's rule (the numerical propagator holds; the advanced
     * mean-element propagator relaxes with 48 h).
     */
    DENSITY_CORRECTION_RELAXATION_HOURS(): number;
    /**
     * True when DENSITY_CORRECTION_RELAXATION_HOURS carries a value; false (the
     * default) means absent.
     */
    HAS_DENSITY_CORRECTION_RELAXATION_HOURS(): boolean;
    /**
     * Neutral wind in the drag relative velocity. Default NONE.
     */
    NEUTRAL_WIND(): pcfNeutralWind;
    /**
     * Empirical along-track terms of the averaged theories. Absent (the
     * default): the theory's own.
     */
    EMPIRICAL_TERMS(obj?: PCFEmpiricalTerms): PCFEmpiricalTerms | null;
    static startPCFForceModel(builder: flatbuffers.Builder): void;
    static addGravityChoice(builder: flatbuffers.Builder, GRAVITY_CHOICE: pcfGravitySelection): void;
    static addEnablePointMass(builder: flatbuffers.Builder, ENABLE_POINT_MASS: boolean): void;
    static addGravitationalParameter(builder: flatbuffers.Builder, GRAVITATIONAL_PARAMETER: number): void;
    static addEnableJ2(builder: flatbuffers.Builder, ENABLE_J2: boolean): void;
    static addEnableJ3(builder: flatbuffers.Builder, ENABLE_J3: boolean): void;
    static addEnableJ4(builder: flatbuffers.Builder, ENABLE_J4: boolean): void;
    static addEnableHigherZonals(builder: flatbuffers.Builder, ENABLE_HIGHER_ZONALS: boolean): void;
    static addMaximumDegree(builder: flatbuffers.Builder, MAXIMUM_DEGREE: number): void;
    static addHasMaximumDegree(builder: flatbuffers.Builder, HAS_MAXIMUM_DEGREE: boolean): void;
    static addMaximumOrder(builder: flatbuffers.Builder, MAXIMUM_ORDER: number): void;
    static addHasMaximumOrder(builder: flatbuffers.Builder, HAS_MAXIMUM_ORDER: boolean): void;
    static addEnableThirdBody(builder: flatbuffers.Builder, ENABLE_THIRD_BODY: boolean): void;
    static addThirdBodyIds(builder: flatbuffers.Builder, THIRD_BODY_IDSOffset: flatbuffers.Offset): void;
    static createThirdBodyIdsVector(builder: flatbuffers.Builder, data: number[] | Int32Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createThirdBodyIdsVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startThirdBodyIdsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addEnableSrp(builder: flatbuffers.Builder, ENABLE_SRP: boolean): void;
    static addEnableDrag(builder: flatbuffers.Builder, ENABLE_DRAG: boolean): void;
    static addInitialMassKg(builder: flatbuffers.Builder, INITIAL_MASS_KG: number): void;
    static addAreaM2(builder: flatbuffers.Builder, AREA_M2: number): void;
    static addReflectivityCoefficient(builder: flatbuffers.Builder, REFLECTIVITY_COEFFICIENT: number): void;
    static addDragCoefficient(builder: flatbuffers.Builder, DRAG_COEFFICIENT: number): void;
    static addAtmosphereModel(builder: flatbuffers.Builder, ATMOSPHERE_MODEL: pcfAtmosphereFamily): void;
    static addWeather(builder: flatbuffers.Builder, WEATHEROffset: flatbuffers.Offset): void;
    static addEphemerisSource(builder: flatbuffers.Builder, EPHEMERIS_SOURCEOffset: flatbuffers.Offset): void;
    static addSolidTides(builder: flatbuffers.Builder, SOLID_TIDES: pcfSolidTideModel): void;
    static addRelativity(builder: flatbuffers.Builder, RELATIVITY: pcfRelativityTerms): void;
    static addInTrackAccelerationMS2(builder: flatbuffers.Builder, IN_TRACK_ACCELERATION_M_S2: number): void;
    static addHasInTrackAccelerationMS2(builder: flatbuffers.Builder, HAS_IN_TRACK_ACCELERATION_M_S2: boolean): void;
    static addDragAreaOverMassRateM2KgS(builder: flatbuffers.Builder, DRAG_AREA_OVER_MASS_RATE_M2_KG_S: number): void;
    static addHasDragAreaOverMassRateM2KgS(builder: flatbuffers.Builder, HAS_DRAG_AREA_OVER_MASS_RATE_M2_KG_S: boolean): void;
    static addMaximumTesseralDegree(builder: flatbuffers.Builder, MAXIMUM_TESSERAL_DEGREE: number): void;
    static addHasMaximumTesseralDegree(builder: flatbuffers.Builder, HAS_MAXIMUM_TESSERAL_DEGREE: boolean): void;
    static addRadiationPressureModel(builder: flatbuffers.Builder, RADIATION_PRESSURE_MODEL: pcfRadiationPressureFamily): void;
    static addGnssBlock(builder: flatbuffers.Builder, GNSS_BLOCK: pcfGnssSpacecraftBlock): void;
    static addEcom2(builder: flatbuffers.Builder, ECOM2Offset: flatbuffers.Offset): void;
    static addEarthRadiation(builder: flatbuffers.Builder, EARTH_RADIATION: pcfEarthRadiationModel): void;
    static addEarthRadiationResolutionDeg(builder: flatbuffers.Builder, EARTH_RADIATION_RESOLUTION_DEG: number): void;
    static addEarthRadiationAreaOverMassM2Kg(builder: flatbuffers.Builder, EARTH_RADIATION_AREA_OVER_MASS_M2_KG: number): void;
    static addHasEarthRadiationAreaOverMassM2Kg(builder: flatbuffers.Builder, HAS_EARTH_RADIATION_AREA_OVER_MASS_M2_KG: boolean): void;
    static addOceanTides(builder: flatbuffers.Builder, OCEAN_TIDES: pcfOceanTideModel): void;
    static addOceanTideMaximumDegree(builder: flatbuffers.Builder, OCEAN_TIDE_MAXIMUM_DEGREE: number): void;
    static addOceanTideMaximumOrder(builder: flatbuffers.Builder, OCEAN_TIDE_MAXIMUM_ORDER: number): void;
    static addCentralBodyNaifId(builder: flatbuffers.Builder, CENTRAL_BODY_NAIF_ID: number): void;
    static addEphemerisKind(builder: flatbuffers.Builder, EPHEMERIS_KIND: pcfEphemerisKind): void;
    static addShadowModel(builder: flatbuffers.Builder, SHADOW_MODEL: evlShadowModel): void;
    static addWeatherSource(builder: flatbuffers.Builder, WEATHER_SOURCE: pcfWeatherSource): void;
    static addWeatherExtension(builder: flatbuffers.Builder, WEATHER_EXTENSION: pcfWeatherExtension): void;
    static addDensityCorrection(builder: flatbuffers.Builder, DENSITY_CORRECTION: pcfDensityCorrection): void;
    static addDensityCorrectionRelaxationHours(builder: flatbuffers.Builder, DENSITY_CORRECTION_RELAXATION_HOURS: number): void;
    static addHasDensityCorrectionRelaxationHours(builder: flatbuffers.Builder, HAS_DENSITY_CORRECTION_RELAXATION_HOURS: boolean): void;
    static addNeutralWind(builder: flatbuffers.Builder, NEUTRAL_WIND: pcfNeutralWind): void;
    static addEmpiricalTerms(builder: flatbuffers.Builder, EMPIRICAL_TERMSOffset: flatbuffers.Offset): void;
    static endPCFForceModel(builder: flatbuffers.Builder): flatbuffers.Offset;
    unpack(): PCFForceModelT;
    unpackTo(_o: PCFForceModelT): void;
}
export declare class PCFForceModelT implements flatbuffers.IGeneratedObject {
    GRAVITY_CHOICE: pcfGravitySelection;
    ENABLE_POINT_MASS: boolean;
    GRAVITATIONAL_PARAMETER: number;
    ENABLE_J2: boolean;
    ENABLE_J3: boolean;
    ENABLE_J4: boolean;
    ENABLE_HIGHER_ZONALS: boolean;
    MAXIMUM_DEGREE: number;
    HAS_MAXIMUM_DEGREE: boolean;
    MAXIMUM_ORDER: number;
    HAS_MAXIMUM_ORDER: boolean;
    ENABLE_THIRD_BODY: boolean;
    THIRD_BODY_IDS: (number)[];
    ENABLE_SRP: boolean;
    ENABLE_DRAG: boolean;
    INITIAL_MASS_KG: number;
    AREA_M2: number;
    REFLECTIVITY_COEFFICIENT: number;
    DRAG_COEFFICIENT: number;
    ATMOSPHERE_MODEL: pcfAtmosphereFamily;
    WEATHER: PCFSpaceWeatherT | null;
    EPHEMERIS_SOURCE: string | Uint8Array | null;
    SOLID_TIDES: pcfSolidTideModel;
    RELATIVITY: pcfRelativityTerms;
    IN_TRACK_ACCELERATION_M_S2: number;
    HAS_IN_TRACK_ACCELERATION_M_S2: boolean;
    DRAG_AREA_OVER_MASS_RATE_M2_KG_S: number;
    HAS_DRAG_AREA_OVER_MASS_RATE_M2_KG_S: boolean;
    MAXIMUM_TESSERAL_DEGREE: number;
    HAS_MAXIMUM_TESSERAL_DEGREE: boolean;
    RADIATION_PRESSURE_MODEL: pcfRadiationPressureFamily;
    GNSS_BLOCK: pcfGnssSpacecraftBlock;
    ECOM2: PCFEcom2T | null;
    EARTH_RADIATION: pcfEarthRadiationModel;
    EARTH_RADIATION_RESOLUTION_DEG: number;
    EARTH_RADIATION_AREA_OVER_MASS_M2_KG: number;
    HAS_EARTH_RADIATION_AREA_OVER_MASS_M2_KG: boolean;
    OCEAN_TIDES: pcfOceanTideModel;
    OCEAN_TIDE_MAXIMUM_DEGREE: number;
    OCEAN_TIDE_MAXIMUM_ORDER: number;
    CENTRAL_BODY_NAIF_ID: number;
    EPHEMERIS_KIND: pcfEphemerisKind;
    SHADOW_MODEL: evlShadowModel;
    WEATHER_SOURCE: pcfWeatherSource;
    WEATHER_EXTENSION: pcfWeatherExtension;
    DENSITY_CORRECTION: pcfDensityCorrection;
    DENSITY_CORRECTION_RELAXATION_HOURS: number;
    HAS_DENSITY_CORRECTION_RELAXATION_HOURS: boolean;
    NEUTRAL_WIND: pcfNeutralWind;
    EMPIRICAL_TERMS: PCFEmpiricalTermsT | null;
    constructor(GRAVITY_CHOICE?: pcfGravitySelection, ENABLE_POINT_MASS?: boolean, GRAVITATIONAL_PARAMETER?: number, ENABLE_J2?: boolean, ENABLE_J3?: boolean, ENABLE_J4?: boolean, ENABLE_HIGHER_ZONALS?: boolean, MAXIMUM_DEGREE?: number, HAS_MAXIMUM_DEGREE?: boolean, MAXIMUM_ORDER?: number, HAS_MAXIMUM_ORDER?: boolean, ENABLE_THIRD_BODY?: boolean, THIRD_BODY_IDS?: (number)[], ENABLE_SRP?: boolean, ENABLE_DRAG?: boolean, INITIAL_MASS_KG?: number, AREA_M2?: number, REFLECTIVITY_COEFFICIENT?: number, DRAG_COEFFICIENT?: number, ATMOSPHERE_MODEL?: pcfAtmosphereFamily, WEATHER?: PCFSpaceWeatherT | null, EPHEMERIS_SOURCE?: string | Uint8Array | null, SOLID_TIDES?: pcfSolidTideModel, RELATIVITY?: pcfRelativityTerms, IN_TRACK_ACCELERATION_M_S2?: number, HAS_IN_TRACK_ACCELERATION_M_S2?: boolean, DRAG_AREA_OVER_MASS_RATE_M2_KG_S?: number, HAS_DRAG_AREA_OVER_MASS_RATE_M2_KG_S?: boolean, MAXIMUM_TESSERAL_DEGREE?: number, HAS_MAXIMUM_TESSERAL_DEGREE?: boolean, RADIATION_PRESSURE_MODEL?: pcfRadiationPressureFamily, GNSS_BLOCK?: pcfGnssSpacecraftBlock, ECOM2?: PCFEcom2T | null, EARTH_RADIATION?: pcfEarthRadiationModel, EARTH_RADIATION_RESOLUTION_DEG?: number, EARTH_RADIATION_AREA_OVER_MASS_M2_KG?: number, HAS_EARTH_RADIATION_AREA_OVER_MASS_M2_KG?: boolean, OCEAN_TIDES?: pcfOceanTideModel, OCEAN_TIDE_MAXIMUM_DEGREE?: number, OCEAN_TIDE_MAXIMUM_ORDER?: number, CENTRAL_BODY_NAIF_ID?: number, EPHEMERIS_KIND?: pcfEphemerisKind, SHADOW_MODEL?: evlShadowModel, WEATHER_SOURCE?: pcfWeatherSource, WEATHER_EXTENSION?: pcfWeatherExtension, DENSITY_CORRECTION?: pcfDensityCorrection, DENSITY_CORRECTION_RELAXATION_HOURS?: number, HAS_DENSITY_CORRECTION_RELAXATION_HOURS?: boolean, NEUTRAL_WIND?: pcfNeutralWind, EMPIRICAL_TERMS?: PCFEmpiricalTermsT | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=PCFForceModel.d.ts.map