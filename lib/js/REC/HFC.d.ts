import * as flatbuffers from 'flatbuffers';
import { ATM, ATMT } from './ATM.js';
import { OCM, OCMT } from './OCM.js';
import { OEM, OEMT } from './OEM.js';
import { hfcAtmosphereCouplingMode } from './hfcAtmosphereCouplingMode.js';
import { hfcFlowRegime } from './hfcFlowRegime.js';
/**
 * Hypersonic Flight Conditions
 */
export declare class HFC implements flatbuffers.IUnpackableObject<HFCT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): HFC;
    static getRootAsHFC(bb: flatbuffers.ByteBuffer, obj?: HFC): HFC;
    static getSizePrefixedRootAsHFC(bb: flatbuffers.ByteBuffer, obj?: HFC): HFC;
    static bufferHasIdentifier(bb: flatbuffers.ByteBuffer): boolean;
    /**
     * Producer-defined message identifier.
     */
    MESSAGE_ID(): string | null;
    MESSAGE_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Message creation date in ISO 8601 UTC format.
     */
    CREATION_DATE(): string | null;
    CREATION_DATE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Creating agency, application, or service.
     */
    ORIGINATOR(): string | null;
    ORIGINATOR(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Object, vehicle, or trajectory name.
     */
    OBJECT_NAME(): string | null;
    OBJECT_NAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Time system used by all epochs.
     */
    TIME_SYSTEM(): string | null;
    TIME_SYSTEM(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Reference frame for state vectors.
     */
    REF_FRAME(): string | null;
    REF_FRAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Start epoch for compact trajectory and condition arrays.
     */
    START_TIME(): string | null;
    START_TIME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Stop epoch for compact trajectory and condition arrays.
     */
    STOP_TIME(): string | null;
    STOP_TIME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Uniform step size in seconds. Use zero when samples are epoch-tagged elsewhere.
     */
    STEP_SIZE(): number;
    /**
     * Source OEM ephemeris when conditions were evaluated from orbit ephemeris data.
     */
    SOURCE_OEM(obj?: OEM): OEM | null;
    /**
     * Source OCM trajectory when conditions were evaluated from comprehensive orbit data.
     */
    SOURCE_OCM(obj?: OCM): OCM | null;
    /**
     * Atmosphere model request used by the propagator.
     */
    ATMOSPHERE(obj?: ATM): ATM | null;
    /**
     * Atmosphere provider or module identifier.
     */
    ATMOSPHERE_PROVIDER(): string | null;
    ATMOSPHERE_PROVIDER(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Atmosphere model revision, data release, or configuration hash.
     */
    ATMOSPHERE_MODEL_REVISION(): string | null;
    ATMOSPHERE_MODEL_REVISION(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Coupling mode used between the propagator and atmosphere provider.
     */
    ATMOSPHERE_COUPLING(): hfcAtmosphereCouplingMode;
    /**
     * Aerothermal model name.
     */
    AEROTHERMAL_MODEL(): string | null;
    AEROTHERMAL_MODEL(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Gas model name.
     */
    GAS_MODEL(): string | null;
    GAS_MODEL(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Flow regime classification for the sampled trajectory.
     */
    FLOW_REGIME(): hfcFlowRegime;
    /**
     * Number of position/velocity components per state sample.
     */
    STATE_VECTOR_SIZE(): number;
    /**
     * Flat state array [x, y, z, vx, vy, vz, ...] in km and km/s.
     */
    STATE_DATA(index: number): number | null;
    stateDataLength(): number;
    stateDataArray(): Float64Array | null;
    /**
     * Epochs for irregularly sampled condition arrays.
     */
    SAMPLE_EPOCHS(index: number): string;
    SAMPLE_EPOCHS(index: number, optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    sampleEpochsLength(): number;
    /**
     * Geodetic latitude samples in degrees.
     */
    LATITUDE_DEG(index: number): number | null;
    latitudeDegLength(): number;
    latitudeDegArray(): Float64Array | null;
    /**
     * Geodetic longitude samples in degrees.
     */
    LONGITUDE_DEG(index: number): number | null;
    longitudeDegLength(): number;
    longitudeDegArray(): Float64Array | null;
    /**
     * Altitude samples in meters.
     */
    ALTITUDE_M(index: number): number | null;
    altitudeMLength(): number;
    altitudeMArray(): Float64Array | null;
    /**
     * Inertial or relative speed samples in meters per second.
     */
    SPEED_M_PER_S(index: number): number | null;
    speedMPerSLength(): number;
    speedMPerSArray(): Float64Array | null;
    /**
     * Mach number samples.
     */
    MACH(index: number): number | null;
    machLength(): number;
    machArray(): Float64Array | null;
    /**
     * Dynamic pressure samples in pascals.
     */
    DYNAMIC_PRESSURE_PA(index: number): number | null;
    dynamicPressurePaLength(): number;
    dynamicPressurePaArray(): Float64Array | null;
    /**
     * Atmospheric density samples in kilograms per cubic meter.
     */
    DENSITY_KG_PER_M3(index: number): number | null;
    densityKgPerM3Length(): number;
    densityKgPerM3Array(): Float64Array | null;
    /**
     * Atmospheric temperature samples in kelvin.
     */
    TEMPERATURE_K(index: number): number | null;
    temperatureKLength(): number;
    temperatureKArray(): Float64Array | null;
    /**
     * Static pressure samples in pascals.
     */
    PRESSURE_PA(index: number): number | null;
    pressurePaLength(): number;
    pressurePaArray(): Float64Array | null;
    /**
     * Speed of sound samples in meters per second.
     */
    SPEED_OF_SOUND_M_PER_S(index: number): number | null;
    speedOfSoundMPerSLength(): number;
    speedOfSoundMPerSArray(): Float64Array | null;
    /**
     * Knudsen number samples.
     */
    KNUDSEN_NUMBER(index: number): number | null;
    knudsenNumberLength(): number;
    knudsenNumberArray(): Float64Array | null;
    /**
     * Reynolds number samples.
     */
    REYNOLDS_NUMBER(index: number): number | null;
    reynoldsNumberLength(): number;
    reynoldsNumberArray(): Float64Array | null;
    /**
     * Convective heat flux samples in watts per square meter.
     */
    CONVECTIVE_HEAT_FLUX_W_PER_M2(index: number): number | null;
    convectiveHeatFluxWPerM2Length(): number;
    convectiveHeatFluxWPerM2Array(): Float64Array | null;
    /**
     * Radiative heat flux samples in watts per square meter.
     */
    RADIATIVE_HEAT_FLUX_W_PER_M2(index: number): number | null;
    radiativeHeatFluxWPerM2Length(): number;
    radiativeHeatFluxWPerM2Array(): Float64Array | null;
    /**
     * Stagnation heat flux samples in watts per square meter.
     */
    STAGNATION_HEAT_FLUX_W_PER_M2(index: number): number | null;
    stagnationHeatFluxWPerM2Length(): number;
    stagnationHeatFluxWPerM2Array(): Float64Array | null;
    /**
     * Normal load factor samples in g.
     */
    LOAD_FACTOR_G(index: number): number | null;
    loadFactorGLength(): number;
    loadFactorGArray(): Float64Array | null;
    /**
     * Angle of attack samples in degrees.
     */
    ANGLE_OF_ATTACK_DEG(index: number): number | null;
    angleOfAttackDegLength(): number;
    angleOfAttackDegArray(): Float64Array | null;
    /**
     * Sideslip angle samples in degrees.
     */
    SIDESLIP_DEG(index: number): number | null;
    sideslipDegLength(): number;
    sideslipDegArray(): Float64Array | null;
    /**
     * Bank angle samples in degrees.
     */
    BANK_ANGLE_DEG(index: number): number | null;
    bankAngleDegLength(): number;
    bankAngleDegArray(): Float64Array | null;
    /**
     * Vehicle reference area in square meters.
     */
    REFERENCE_AREA_M2(): number;
    /**
     * Vehicle reference length in meters.
     */
    REFERENCE_LENGTH_M(): number;
    /**
     * Nose radius in meters.
     */
    NOSE_RADIUS_M(): number;
    /**
     * Vehicle mass in kilograms.
     */
    MASS_KG(): number;
    /**
     * Wall or surface temperature in kelvin.
     */
    SURFACE_TEMPERATURE_K(): number;
    /**
     * Free-form model assumptions or limitations.
     */
    ASSUMPTIONS(index: number): string;
    ASSUMPTIONS(index: number, optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    assumptionsLength(): number;
    /**
     * Additional comments.
     */
    COMMENT(): string | null;
    COMMENT(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    static startHFC(builder: flatbuffers.Builder): void;
    static addMessageId(builder: flatbuffers.Builder, MESSAGE_IDOffset: flatbuffers.Offset): void;
    static addCreationDate(builder: flatbuffers.Builder, CREATION_DATEOffset: flatbuffers.Offset): void;
    static addOriginator(builder: flatbuffers.Builder, ORIGINATOROffset: flatbuffers.Offset): void;
    static addObjectName(builder: flatbuffers.Builder, OBJECT_NAMEOffset: flatbuffers.Offset): void;
    static addTimeSystem(builder: flatbuffers.Builder, TIME_SYSTEMOffset: flatbuffers.Offset): void;
    static addRefFrame(builder: flatbuffers.Builder, REF_FRAMEOffset: flatbuffers.Offset): void;
    static addStartTime(builder: flatbuffers.Builder, START_TIMEOffset: flatbuffers.Offset): void;
    static addStopTime(builder: flatbuffers.Builder, STOP_TIMEOffset: flatbuffers.Offset): void;
    static addStepSize(builder: flatbuffers.Builder, STEP_SIZE: number): void;
    static addSourceOem(builder: flatbuffers.Builder, SOURCE_OEMOffset: flatbuffers.Offset): void;
    static addSourceOcm(builder: flatbuffers.Builder, SOURCE_OCMOffset: flatbuffers.Offset): void;
    static addAtmosphere(builder: flatbuffers.Builder, ATMOSPHEREOffset: flatbuffers.Offset): void;
    static addAtmosphereProvider(builder: flatbuffers.Builder, ATMOSPHERE_PROVIDEROffset: flatbuffers.Offset): void;
    static addAtmosphereModelRevision(builder: flatbuffers.Builder, ATMOSPHERE_MODEL_REVISIONOffset: flatbuffers.Offset): void;
    static addAtmosphereCoupling(builder: flatbuffers.Builder, ATMOSPHERE_COUPLING: hfcAtmosphereCouplingMode): void;
    static addAerothermalModel(builder: flatbuffers.Builder, AEROTHERMAL_MODELOffset: flatbuffers.Offset): void;
    static addGasModel(builder: flatbuffers.Builder, GAS_MODELOffset: flatbuffers.Offset): void;
    static addFlowRegime(builder: flatbuffers.Builder, FLOW_REGIME: hfcFlowRegime): void;
    static addStateVectorSize(builder: flatbuffers.Builder, STATE_VECTOR_SIZE: number): void;
    static addStateData(builder: flatbuffers.Builder, STATE_DATAOffset: flatbuffers.Offset): void;
    static createStateDataVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createStateDataVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startStateDataVector(builder: flatbuffers.Builder, numElems: number): void;
    static addSampleEpochs(builder: flatbuffers.Builder, SAMPLE_EPOCHSOffset: flatbuffers.Offset): void;
    static createSampleEpochsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startSampleEpochsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addLatitudeDeg(builder: flatbuffers.Builder, LATITUDE_DEGOffset: flatbuffers.Offset): void;
    static createLatitudeDegVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createLatitudeDegVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startLatitudeDegVector(builder: flatbuffers.Builder, numElems: number): void;
    static addLongitudeDeg(builder: flatbuffers.Builder, LONGITUDE_DEGOffset: flatbuffers.Offset): void;
    static createLongitudeDegVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createLongitudeDegVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startLongitudeDegVector(builder: flatbuffers.Builder, numElems: number): void;
    static addAltitudeM(builder: flatbuffers.Builder, ALTITUDE_MOffset: flatbuffers.Offset): void;
    static createAltitudeMVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createAltitudeMVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startAltitudeMVector(builder: flatbuffers.Builder, numElems: number): void;
    static addSpeedMPerS(builder: flatbuffers.Builder, SPEED_M_PER_SOffset: flatbuffers.Offset): void;
    static createSpeedMPerSVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createSpeedMPerSVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startSpeedMPerSVector(builder: flatbuffers.Builder, numElems: number): void;
    static addMach(builder: flatbuffers.Builder, MACHOffset: flatbuffers.Offset): void;
    static createMachVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createMachVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startMachVector(builder: flatbuffers.Builder, numElems: number): void;
    static addDynamicPressurePa(builder: flatbuffers.Builder, DYNAMIC_PRESSURE_PAOffset: flatbuffers.Offset): void;
    static createDynamicPressurePaVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createDynamicPressurePaVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startDynamicPressurePaVector(builder: flatbuffers.Builder, numElems: number): void;
    static addDensityKgPerM3(builder: flatbuffers.Builder, DENSITY_KG_PER_M3Offset: flatbuffers.Offset): void;
    static createDensityKgPerM3Vector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createDensityKgPerM3Vector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startDensityKgPerM3Vector(builder: flatbuffers.Builder, numElems: number): void;
    static addTemperatureK(builder: flatbuffers.Builder, TEMPERATURE_KOffset: flatbuffers.Offset): void;
    static createTemperatureKVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createTemperatureKVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startTemperatureKVector(builder: flatbuffers.Builder, numElems: number): void;
    static addPressurePa(builder: flatbuffers.Builder, PRESSURE_PAOffset: flatbuffers.Offset): void;
    static createPressurePaVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createPressurePaVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startPressurePaVector(builder: flatbuffers.Builder, numElems: number): void;
    static addSpeedOfSoundMPerS(builder: flatbuffers.Builder, SPEED_OF_SOUND_M_PER_SOffset: flatbuffers.Offset): void;
    static createSpeedOfSoundMPerSVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createSpeedOfSoundMPerSVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startSpeedOfSoundMPerSVector(builder: flatbuffers.Builder, numElems: number): void;
    static addKnudsenNumber(builder: flatbuffers.Builder, KNUDSEN_NUMBEROffset: flatbuffers.Offset): void;
    static createKnudsenNumberVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createKnudsenNumberVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startKnudsenNumberVector(builder: flatbuffers.Builder, numElems: number): void;
    static addReynoldsNumber(builder: flatbuffers.Builder, REYNOLDS_NUMBEROffset: flatbuffers.Offset): void;
    static createReynoldsNumberVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createReynoldsNumberVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startReynoldsNumberVector(builder: flatbuffers.Builder, numElems: number): void;
    static addConvectiveHeatFluxWPerM2(builder: flatbuffers.Builder, CONVECTIVE_HEAT_FLUX_W_PER_M2Offset: flatbuffers.Offset): void;
    static createConvectiveHeatFluxWPerM2Vector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createConvectiveHeatFluxWPerM2Vector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startConvectiveHeatFluxWPerM2Vector(builder: flatbuffers.Builder, numElems: number): void;
    static addRadiativeHeatFluxWPerM2(builder: flatbuffers.Builder, RADIATIVE_HEAT_FLUX_W_PER_M2Offset: flatbuffers.Offset): void;
    static createRadiativeHeatFluxWPerM2Vector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createRadiativeHeatFluxWPerM2Vector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startRadiativeHeatFluxWPerM2Vector(builder: flatbuffers.Builder, numElems: number): void;
    static addStagnationHeatFluxWPerM2(builder: flatbuffers.Builder, STAGNATION_HEAT_FLUX_W_PER_M2Offset: flatbuffers.Offset): void;
    static createStagnationHeatFluxWPerM2Vector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createStagnationHeatFluxWPerM2Vector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startStagnationHeatFluxWPerM2Vector(builder: flatbuffers.Builder, numElems: number): void;
    static addLoadFactorG(builder: flatbuffers.Builder, LOAD_FACTOR_GOffset: flatbuffers.Offset): void;
    static createLoadFactorGVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createLoadFactorGVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startLoadFactorGVector(builder: flatbuffers.Builder, numElems: number): void;
    static addAngleOfAttackDeg(builder: flatbuffers.Builder, ANGLE_OF_ATTACK_DEGOffset: flatbuffers.Offset): void;
    static createAngleOfAttackDegVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createAngleOfAttackDegVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startAngleOfAttackDegVector(builder: flatbuffers.Builder, numElems: number): void;
    static addSideslipDeg(builder: flatbuffers.Builder, SIDESLIP_DEGOffset: flatbuffers.Offset): void;
    static createSideslipDegVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createSideslipDegVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startSideslipDegVector(builder: flatbuffers.Builder, numElems: number): void;
    static addBankAngleDeg(builder: flatbuffers.Builder, BANK_ANGLE_DEGOffset: flatbuffers.Offset): void;
    static createBankAngleDegVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createBankAngleDegVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startBankAngleDegVector(builder: flatbuffers.Builder, numElems: number): void;
    static addReferenceAreaM2(builder: flatbuffers.Builder, REFERENCE_AREA_M2: number): void;
    static addReferenceLengthM(builder: flatbuffers.Builder, REFERENCE_LENGTH_M: number): void;
    static addNoseRadiusM(builder: flatbuffers.Builder, NOSE_RADIUS_M: number): void;
    static addMassKg(builder: flatbuffers.Builder, MASS_KG: number): void;
    static addSurfaceTemperatureK(builder: flatbuffers.Builder, SURFACE_TEMPERATURE_K: number): void;
    static addAssumptions(builder: flatbuffers.Builder, ASSUMPTIONSOffset: flatbuffers.Offset): void;
    static createAssumptionsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startAssumptionsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addComment(builder: flatbuffers.Builder, COMMENTOffset: flatbuffers.Offset): void;
    static endHFC(builder: flatbuffers.Builder): flatbuffers.Offset;
    static finishHFCBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static finishSizePrefixedHFCBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    unpack(): HFCT;
    unpackTo(_o: HFCT): void;
}
export declare class HFCT implements flatbuffers.IGeneratedObject {
    MESSAGE_ID: string | Uint8Array | null;
    CREATION_DATE: string | Uint8Array | null;
    ORIGINATOR: string | Uint8Array | null;
    OBJECT_NAME: string | Uint8Array | null;
    TIME_SYSTEM: string | Uint8Array | null;
    REF_FRAME: string | Uint8Array | null;
    START_TIME: string | Uint8Array | null;
    STOP_TIME: string | Uint8Array | null;
    STEP_SIZE: number;
    SOURCE_OEM: OEMT | null;
    SOURCE_OCM: OCMT | null;
    ATMOSPHERE: ATMT | null;
    ATMOSPHERE_PROVIDER: string | Uint8Array | null;
    ATMOSPHERE_MODEL_REVISION: string | Uint8Array | null;
    ATMOSPHERE_COUPLING: hfcAtmosphereCouplingMode;
    AEROTHERMAL_MODEL: string | Uint8Array | null;
    GAS_MODEL: string | Uint8Array | null;
    FLOW_REGIME: hfcFlowRegime;
    STATE_VECTOR_SIZE: number;
    STATE_DATA: (number)[];
    SAMPLE_EPOCHS: (string)[];
    LATITUDE_DEG: (number)[];
    LONGITUDE_DEG: (number)[];
    ALTITUDE_M: (number)[];
    SPEED_M_PER_S: (number)[];
    MACH: (number)[];
    DYNAMIC_PRESSURE_PA: (number)[];
    DENSITY_KG_PER_M3: (number)[];
    TEMPERATURE_K: (number)[];
    PRESSURE_PA: (number)[];
    SPEED_OF_SOUND_M_PER_S: (number)[];
    KNUDSEN_NUMBER: (number)[];
    REYNOLDS_NUMBER: (number)[];
    CONVECTIVE_HEAT_FLUX_W_PER_M2: (number)[];
    RADIATIVE_HEAT_FLUX_W_PER_M2: (number)[];
    STAGNATION_HEAT_FLUX_W_PER_M2: (number)[];
    LOAD_FACTOR_G: (number)[];
    ANGLE_OF_ATTACK_DEG: (number)[];
    SIDESLIP_DEG: (number)[];
    BANK_ANGLE_DEG: (number)[];
    REFERENCE_AREA_M2: number;
    REFERENCE_LENGTH_M: number;
    NOSE_RADIUS_M: number;
    MASS_KG: number;
    SURFACE_TEMPERATURE_K: number;
    ASSUMPTIONS: (string)[];
    COMMENT: string | Uint8Array | null;
    constructor(MESSAGE_ID?: string | Uint8Array | null, CREATION_DATE?: string | Uint8Array | null, ORIGINATOR?: string | Uint8Array | null, OBJECT_NAME?: string | Uint8Array | null, TIME_SYSTEM?: string | Uint8Array | null, REF_FRAME?: string | Uint8Array | null, START_TIME?: string | Uint8Array | null, STOP_TIME?: string | Uint8Array | null, STEP_SIZE?: number, SOURCE_OEM?: OEMT | null, SOURCE_OCM?: OCMT | null, ATMOSPHERE?: ATMT | null, ATMOSPHERE_PROVIDER?: string | Uint8Array | null, ATMOSPHERE_MODEL_REVISION?: string | Uint8Array | null, ATMOSPHERE_COUPLING?: hfcAtmosphereCouplingMode, AEROTHERMAL_MODEL?: string | Uint8Array | null, GAS_MODEL?: string | Uint8Array | null, FLOW_REGIME?: hfcFlowRegime, STATE_VECTOR_SIZE?: number, STATE_DATA?: (number)[], SAMPLE_EPOCHS?: (string)[], LATITUDE_DEG?: (number)[], LONGITUDE_DEG?: (number)[], ALTITUDE_M?: (number)[], SPEED_M_PER_S?: (number)[], MACH?: (number)[], DYNAMIC_PRESSURE_PA?: (number)[], DENSITY_KG_PER_M3?: (number)[], TEMPERATURE_K?: (number)[], PRESSURE_PA?: (number)[], SPEED_OF_SOUND_M_PER_S?: (number)[], KNUDSEN_NUMBER?: (number)[], REYNOLDS_NUMBER?: (number)[], CONVECTIVE_HEAT_FLUX_W_PER_M2?: (number)[], RADIATIVE_HEAT_FLUX_W_PER_M2?: (number)[], STAGNATION_HEAT_FLUX_W_PER_M2?: (number)[], LOAD_FACTOR_G?: (number)[], ANGLE_OF_ATTACK_DEG?: (number)[], SIDESLIP_DEG?: (number)[], BANK_ANGLE_DEG?: (number)[], REFERENCE_AREA_M2?: number, REFERENCE_LENGTH_M?: number, NOSE_RADIUS_M?: number, MASS_KG?: number, SURFACE_TEMPERATURE_K?: number, ASSUMPTIONS?: (string)[], COMMENT?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=HFC.d.ts.map