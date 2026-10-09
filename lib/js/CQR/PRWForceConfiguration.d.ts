import * as flatbuffers from 'flatbuffers';
import { PRWEcom2, PRWEcom2T } from './PRWEcom2.js';
import { PRWSpaceWeather, PRWSpaceWeatherT } from './PRWSpaceWeather.js';
import { prwAtmosphereFamily } from './prwAtmosphereFamily.js';
import { prwGnssSpacecraftBlock } from './prwGnssSpacecraftBlock.js';
import { prwGravitySelection } from './prwGravitySelection.js';
import { prwRadiationPressureFamily } from './prwRadiationPressureFamily.js';
import { prwRelativityTerms } from './prwRelativityTerms.js';
import { prwSolidTideModel } from './prwSolidTideModel.js';
/**
 * Executable subset currently reachable through HPOP invoke. No implied
 * support for coefficients, drag models or bodies the provider cannot supply.
 */
export declare class PRWForceConfiguration implements flatbuffers.IUnpackableObject<PRWForceConfigurationT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): PRWForceConfiguration;
    static getRootAsPRWForceConfiguration(bb: flatbuffers.ByteBuffer, obj?: PRWForceConfiguration): PRWForceConfiguration;
    static getSizePrefixedRootAsPRWForceConfiguration(bb: flatbuffers.ByteBuffer, obj?: PRWForceConfiguration): PRWForceConfiguration;
    GRAVITY_CHOICE(): prwGravitySelection;
    ENABLE_POINT_MASS(): boolean;
    /**
     * m3/s2; required positive when a central gravity term is enabled.
     */
    GRAVITATIONAL_PARAMETER(): number;
    ENABLE_J2(): boolean;
    ENABLE_J3(): boolean;
    ENABLE_J4(): boolean;
    ENABLE_HIGHER_ZONALS(): boolean;
    /**
     * Optional truncations; absent selects the explicitly reported model default.
     */
    MAXIMUM_DEGREE(): number;
    /**
     * True when MAXIMUM_DEGREE carries a value; false means absent.
     */
    HAS_MAXIMUM_DEGREE(): boolean;
    MAXIMUM_ORDER(): number;
    /**
     * True when MAXIMUM_ORDER carries a value; false means absent.
     */
    HAS_MAXIMUM_ORDER(): boolean;
    ENABLE_THIRD_BODY(): boolean;
    /**
     * NAIF IDs; explicit vector, e.g. [10,301]. Empty means no third bodies.
     */
    THIRD_BODY_IDS(index: number): number | null;
    thirdBodyIdsLength(): number;
    thirdBodyIdsArray(): Int32Array | null;
    ENABLE_SRP(): boolean;
    ENABLE_DRAG(): boolean;
    INITIAL_MASS_KG(): number;
    AREA_M2(): number;
    REFLECTIVITY_COEFFICIENT(): number;
    DRAG_COEFFICIENT(): number;
    ATMOSPHERE_MODEL(): prwAtmosphereFamily;
    WEATHER(obj?: PRWSpaceWeather): PRWSpaceWeather | null;
    /**
     * Actual configured source name, e.g. an analytic series or a planetary SPK kernel.
     */
    EPHEMERIS_SOURCE(): string;
    EPHEMERIS_SOURCE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    /**
     * Solid Earth tides. Their field is Earth-fixed, so a provider needs Earth
     * orientation (PRW.EARTH_ORIENTATION) to apply them.
     */
    SOLID_TIDES(): prwSolidTideModel;
    RELATIVITY(): prwRelativityTerms;
    /**
     * Constant acceleration along the in-track axis, m/s2: T of RTN,
     * N cross rhat with N = unit(r cross v) (the "in-track thrust" of a VCM).
     */
    IN_TRACK_ACCELERATION_M_S2(): number;
    /**
     * True when IN_TRACK_ACCELERATION_M_S2 carries a value; false means absent.
     */
    HAS_IN_TRACK_ACCELERATION_M_S2(): boolean;
    /**
     * Rate of change of the drag ballistic coefficient Cd*A/m, m2/kg/s (the
     * BDOT of a VCM). Drag uses Cd*A/m + rate * (t - initial epoch).
     */
    DRAG_AREA_OVER_MASS_RATE_M2_KG_S(): number;
    /**
     * True when DRAG_AREA_OVER_MASS_RATE_M2_KG_S carries a value; false means absent.
     */
    HAS_DRAG_AREA_OVER_MASS_RATE_M2_KG_S(): boolean;
    /**
     * Highest degree of the tesseral and sectorial terms (order >= 1); the
     * zonals run to MAXIMUM_DEGREE. A VCM's "mmZ,nnT" is MAXIMUM_DEGREE mm,
     * MAXIMUM_ORDER nn and MAXIMUM_TESSERAL_DEGREE nn.
     */
    MAXIMUM_TESSERAL_DEGREE(): number;
    /**
     * True when MAXIMUM_TESSERAL_DEGREE carries a value; false means absent.
     */
    HAS_MAXIMUM_TESSERAL_DEGREE(): boolean;
    /**
     * Solar radiation pressure model family (default: the cannonball).
     */
    RADIATION_PRESSURE_MODEL(): prwRadiationPressureFamily;
    /**
     * Spacecraft block; required when RADIATION_PRESSURE_MODEL is GNSS_BOX_WING.
     */
    GNSS_BLOCK(): prwGnssSpacecraftBlock;
    /**
     * ECOM2 coefficients; absent means no ECOM2 term.
     */
    ECOM2(obj?: PRWEcom2): PRWEcom2 | null;
    static startPRWForceConfiguration(builder: flatbuffers.Builder): void;
    static addGravityChoice(builder: flatbuffers.Builder, GRAVITY_CHOICE: prwGravitySelection): void;
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
    static addAtmosphereModel(builder: flatbuffers.Builder, ATMOSPHERE_MODEL: prwAtmosphereFamily): void;
    static addWeather(builder: flatbuffers.Builder, WEATHEROffset: flatbuffers.Offset): void;
    static addEphemerisSource(builder: flatbuffers.Builder, EPHEMERIS_SOURCEOffset: flatbuffers.Offset): void;
    static addSolidTides(builder: flatbuffers.Builder, SOLID_TIDES: prwSolidTideModel): void;
    static addRelativity(builder: flatbuffers.Builder, RELATIVITY: prwRelativityTerms): void;
    static addInTrackAccelerationMS2(builder: flatbuffers.Builder, IN_TRACK_ACCELERATION_M_S2: number): void;
    static addHasInTrackAccelerationMS2(builder: flatbuffers.Builder, HAS_IN_TRACK_ACCELERATION_M_S2: boolean): void;
    static addDragAreaOverMassRateM2KgS(builder: flatbuffers.Builder, DRAG_AREA_OVER_MASS_RATE_M2_KG_S: number): void;
    static addHasDragAreaOverMassRateM2KgS(builder: flatbuffers.Builder, HAS_DRAG_AREA_OVER_MASS_RATE_M2_KG_S: boolean): void;
    static addMaximumTesseralDegree(builder: flatbuffers.Builder, MAXIMUM_TESSERAL_DEGREE: number): void;
    static addHasMaximumTesseralDegree(builder: flatbuffers.Builder, HAS_MAXIMUM_TESSERAL_DEGREE: boolean): void;
    static addRadiationPressureModel(builder: flatbuffers.Builder, RADIATION_PRESSURE_MODEL: prwRadiationPressureFamily): void;
    static addGnssBlock(builder: flatbuffers.Builder, GNSS_BLOCK: prwGnssSpacecraftBlock): void;
    static addEcom2(builder: flatbuffers.Builder, ECOM2Offset: flatbuffers.Offset): void;
    static endPRWForceConfiguration(builder: flatbuffers.Builder): flatbuffers.Offset;
    unpack(): PRWForceConfigurationT;
    unpackTo(_o: PRWForceConfigurationT): void;
}
export declare class PRWForceConfigurationT implements flatbuffers.IGeneratedObject {
    GRAVITY_CHOICE: prwGravitySelection;
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
    ATMOSPHERE_MODEL: prwAtmosphereFamily;
    WEATHER: PRWSpaceWeatherT | null;
    EPHEMERIS_SOURCE: string | Uint8Array | null;
    SOLID_TIDES: prwSolidTideModel;
    RELATIVITY: prwRelativityTerms;
    IN_TRACK_ACCELERATION_M_S2: number;
    HAS_IN_TRACK_ACCELERATION_M_S2: boolean;
    DRAG_AREA_OVER_MASS_RATE_M2_KG_S: number;
    HAS_DRAG_AREA_OVER_MASS_RATE_M2_KG_S: boolean;
    MAXIMUM_TESSERAL_DEGREE: number;
    HAS_MAXIMUM_TESSERAL_DEGREE: boolean;
    RADIATION_PRESSURE_MODEL: prwRadiationPressureFamily;
    GNSS_BLOCK: prwGnssSpacecraftBlock;
    ECOM2: PRWEcom2T | null;
    constructor(GRAVITY_CHOICE?: prwGravitySelection, ENABLE_POINT_MASS?: boolean, GRAVITATIONAL_PARAMETER?: number, ENABLE_J2?: boolean, ENABLE_J3?: boolean, ENABLE_J4?: boolean, ENABLE_HIGHER_ZONALS?: boolean, MAXIMUM_DEGREE?: number, HAS_MAXIMUM_DEGREE?: boolean, MAXIMUM_ORDER?: number, HAS_MAXIMUM_ORDER?: boolean, ENABLE_THIRD_BODY?: boolean, THIRD_BODY_IDS?: (number)[], ENABLE_SRP?: boolean, ENABLE_DRAG?: boolean, INITIAL_MASS_KG?: number, AREA_M2?: number, REFLECTIVITY_COEFFICIENT?: number, DRAG_COEFFICIENT?: number, ATMOSPHERE_MODEL?: prwAtmosphereFamily, WEATHER?: PRWSpaceWeatherT | null, EPHEMERIS_SOURCE?: string | Uint8Array | null, SOLID_TIDES?: prwSolidTideModel, RELATIVITY?: prwRelativityTerms, IN_TRACK_ACCELERATION_M_S2?: number, HAS_IN_TRACK_ACCELERATION_M_S2?: boolean, DRAG_AREA_OVER_MASS_RATE_M2_KG_S?: number, HAS_DRAG_AREA_OVER_MASS_RATE_M2_KG_S?: boolean, MAXIMUM_TESSERAL_DEGREE?: number, HAS_MAXIMUM_TESSERAL_DEGREE?: boolean, RADIATION_PRESSURE_MODEL?: prwRadiationPressureFamily, GNSS_BLOCK?: prwGnssSpacecraftBlock, ECOM2?: PRWEcom2T | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=PRWForceConfiguration.d.ts.map