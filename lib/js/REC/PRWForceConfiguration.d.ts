import * as flatbuffers from 'flatbuffers';
import { PRWSpaceWeather, PRWSpaceWeatherT } from './PRWSpaceWeather.js';
import { prwAtmosphereFamily } from './prwAtmosphereFamily.js';
import { prwGravitySelection } from './prwGravitySelection.js';
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
    constructor(GRAVITY_CHOICE?: prwGravitySelection, ENABLE_POINT_MASS?: boolean, GRAVITATIONAL_PARAMETER?: number, ENABLE_J2?: boolean, ENABLE_J3?: boolean, ENABLE_J4?: boolean, ENABLE_HIGHER_ZONALS?: boolean, MAXIMUM_DEGREE?: number, HAS_MAXIMUM_DEGREE?: boolean, MAXIMUM_ORDER?: number, HAS_MAXIMUM_ORDER?: boolean, ENABLE_THIRD_BODY?: boolean, THIRD_BODY_IDS?: (number)[], ENABLE_SRP?: boolean, ENABLE_DRAG?: boolean, INITIAL_MASS_KG?: number, AREA_M2?: number, REFLECTIVITY_COEFFICIENT?: number, DRAG_COEFFICIENT?: number, ATMOSPHERE_MODEL?: prwAtmosphereFamily, WEATHER?: PRWSpaceWeatherT | null, EPHEMERIS_SOURCE?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=PRWForceConfiguration.d.ts.map