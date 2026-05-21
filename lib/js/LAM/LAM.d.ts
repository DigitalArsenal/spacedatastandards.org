import * as flatbuffers from 'flatbuffers';
import { ATM, ATMT } from './ATM.js';
import { BOV, BOVT } from './BOV.js';
import { HFC, HFCT } from './HFC.js';
import { LDM, LDMT } from './LDM.js';
import { LND, LNDT } from './LND.js';
import { LNE, LNET } from './LNE.js';
import { MST, MSTT } from './MST.js';
import { OCM, OCMT } from './OCM.js';
import { OEM, OEMT } from './OEM.js';
import { ROC, ROCT } from './ROC.js';
import { lamAscentEvent, lamAscentEventT } from './lamAscentEvent.js';
import { lamConstraintStatus } from './lamConstraintStatus.js';
import { lamConstraintViolation, lamConstraintViolationT } from './lamConstraintViolation.js';
import { lamMissionPhase } from './lamMissionPhase.js';
/**
 * Launch Ascent Message
 */
export declare class LAM implements flatbuffers.IUnpackableObject<LAMT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): LAM;
    static getRootAsLAM(bb: flatbuffers.ByteBuffer, obj?: LAM): LAM;
    static getSizePrefixedRootAsLAM(bb: flatbuffers.ByteBuffer, obj?: LAM): LAM;
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
     * Mission name.
     */
    MISSION_NAME(): string | null;
    MISSION_NAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Vehicle name.
     */
    VEHICLE_NAME(): string | null;
    VEHICLE_NAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Time system used by all epochs.
     */
    TIME_SYSTEM(): string | null;
    TIME_SYSTEM(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Reference frame for trajectory data.
     */
    REF_FRAME(): string | null;
    REF_FRAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Launch epoch in ISO 8601 UTC format.
     */
    LAUNCH_EPOCH(): string | null;
    LAUNCH_EPOCH(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Evaluation start epoch in ISO 8601 UTC format.
     */
    START_TIME(): string | null;
    START_TIME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Evaluation stop epoch in ISO 8601 UTC format.
     */
    STOP_TIME(): string | null;
    STOP_TIME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Uniform propagation step size in seconds.
     */
    STEP_SIZE(): number;
    /**
     * Source launch data message.
     */
    LAUNCH_DATA(obj?: LDM): LDM | null;
    /**
     * Rocket configuration used by the simulation.
     */
    ROCKET_CONFIGURATION(obj?: ROC): ROC | null;
    /**
     * Launch event records used as source or result context.
     */
    EVENT_RECORDS(index: number, obj?: LNE): LNE | null;
    eventRecordsLength(): number;
    /**
     * Launch detection records used as source or result context.
     */
    DETECTIONS(index: number, obj?: LND): LND | null;
    detectionsLength(): number;
    /**
     * Boost or missile-track style records used as source or result context.
     */
    BOOST_TRACKS(index: number, obj?: MST): MST | null;
    boostTracksLength(): number;
    /**
     * Burnout vectors produced or consumed by the ascent simulation.
     */
    BURN_OUT_VECTORS(index: number, obj?: BOV): BOV | null;
    burnOutVectorsLength(): number;
    /**
     * Produced or consumed ephemeris.
     */
    TRAJECTORY_OEM(obj?: OEM): OEM | null;
    /**
     * Produced or consumed comprehensive trajectory.
     */
    TRAJECTORY_OCM(obj?: OCM): OCM | null;
    /**
     * Atmosphere model request used by the ascent analysis.
     */
    ATMOSPHERE(obj?: ATM): ATM | null;
    /**
     * Hypersonic conditions computed along the ascent trajectory.
     */
    HYPERSONIC_CONDITIONS(obj?: HFC): HFC | null;
    /**
     * Propagator module, engine, or adapter name.
     */
    PROPAGATOR_NAME(): string | null;
    PROPAGATOR_NAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Propagator module, engine, or adapter version.
     */
    PROPAGATOR_VERSION(): string | null;
    PROPAGATOR_VERSION(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Guidance model name.
     */
    GUIDANCE_MODEL(): string | null;
    GUIDANCE_MODEL(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Thrust model name.
     */
    THRUST_MODEL(): string | null;
    THRUST_MODEL(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Aerodynamic model name.
     */
    AERODYNAMIC_MODEL(): string | null;
    AERODYNAMIC_MODEL(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Current or terminal mission phase.
     */
    PHASE(): lamMissionPhase;
    /**
     * Aggregate constraint status.
     */
    CONSTRAINT_STATUS(): lamConstraintStatus;
    /**
     * Time from launch samples in seconds.
     */
    TIME_FROM_LAUNCH_S(index: number): number | null;
    timeFromLaunchSLength(): number;
    timeFromLaunchSArray(): Float64Array | null;
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
     * Downrange distance samples in meters.
     */
    DOWNRANGE_M(index: number): number | null;
    downrangeMLength(): number;
    downrangeMArray(): Float64Array | null;
    /**
     * Speed samples in meters per second.
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
     * Heat flux samples in watts per square meter.
     */
    HEAT_FLUX_W_PER_M2(index: number): number | null;
    heatFluxWPerM2Length(): number;
    heatFluxWPerM2Array(): Float64Array | null;
    /**
     * Vehicle mass samples in kilograms.
     */
    MASS_KG(index: number): number | null;
    massKgLength(): number;
    massKgArray(): Float64Array | null;
    /**
     * Thrust samples in newtons.
     */
    THRUST_N(index: number): number | null;
    thrustNLength(): number;
    thrustNArray(): Float64Array | null;
    /**
     * Acceleration samples in g.
     */
    ACCELERATION_G(index: number): number | null;
    accelerationGLength(): number;
    accelerationGArray(): Float64Array | null;
    /**
     * Pitch angle samples in degrees.
     */
    PITCH_DEG(index: number): number | null;
    pitchDegLength(): number;
    pitchDegArray(): Float64Array | null;
    /**
     * Flight path angle samples in degrees.
     */
    FLIGHT_PATH_ANGLE_DEG(index: number): number | null;
    flightPathAngleDegLength(): number;
    flightPathAngleDegArray(): Float64Array | null;
    /**
     * Instantaneous impact point latitude samples in degrees.
     */
    IIP_LATITUDE_DEG(index: number): number | null;
    iipLatitudeDegLength(): number;
    iipLatitudeDegArray(): Float64Array | null;
    /**
     * Instantaneous impact point longitude samples in degrees.
     */
    IIP_LONGITUDE_DEG(index: number): number | null;
    iipLongitudeDegLength(): number;
    iipLongitudeDegArray(): Float64Array | null;
    /**
     * Maximum dynamic pressure in pascals.
     */
    MAX_DYNAMIC_PRESSURE_PA(): number;
    /**
     * Epoch of maximum dynamic pressure in ISO 8601 UTC format.
     */
    MAX_DYNAMIC_PRESSURE_EPOCH(): string | null;
    MAX_DYNAMIC_PRESSURE_EPOCH(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Maximum heat flux in watts per square meter.
     */
    MAX_HEAT_FLUX_W_PER_M2(): number;
    /**
     * Epoch of maximum heat flux in ISO 8601 UTC format.
     */
    MAX_HEAT_FLUX_EPOCH(): string | null;
    MAX_HEAT_FLUX_EPOCH(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Orbit insertion epoch in ISO 8601 UTC format.
     */
    ORBIT_INSERTION_EPOCH(): string | null;
    ORBIT_INSERTION_EPOCH(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Achieved apoapsis in meters.
     */
    APOAPSIS_M(): number;
    /**
     * Achieved periapsis in meters.
     */
    PERIAPSIS_M(): number;
    /**
     * Achieved inclination in degrees.
     */
    INCLINATION_DEG(): number;
    /**
     * Payload injection velocity error in meters per second.
     */
    PAYLOAD_INJECTION_ERROR_M_PER_S(): number;
    /**
     * Key ascent events.
     */
    ASCENT_EVENTS(index: number, obj?: lamAscentEvent): lamAscentEvent | null;
    ascentEventsLength(): number;
    /**
     * Constraint warnings and violations.
     */
    CONSTRAINT_VIOLATIONS(index: number, obj?: lamConstraintViolation): lamConstraintViolation | null;
    constraintViolationsLength(): number;
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
    static startLAM(builder: flatbuffers.Builder): void;
    static addMessageId(builder: flatbuffers.Builder, MESSAGE_IDOffset: flatbuffers.Offset): void;
    static addCreationDate(builder: flatbuffers.Builder, CREATION_DATEOffset: flatbuffers.Offset): void;
    static addOriginator(builder: flatbuffers.Builder, ORIGINATOROffset: flatbuffers.Offset): void;
    static addMissionName(builder: flatbuffers.Builder, MISSION_NAMEOffset: flatbuffers.Offset): void;
    static addVehicleName(builder: flatbuffers.Builder, VEHICLE_NAMEOffset: flatbuffers.Offset): void;
    static addTimeSystem(builder: flatbuffers.Builder, TIME_SYSTEMOffset: flatbuffers.Offset): void;
    static addRefFrame(builder: flatbuffers.Builder, REF_FRAMEOffset: flatbuffers.Offset): void;
    static addLaunchEpoch(builder: flatbuffers.Builder, LAUNCH_EPOCHOffset: flatbuffers.Offset): void;
    static addStartTime(builder: flatbuffers.Builder, START_TIMEOffset: flatbuffers.Offset): void;
    static addStopTime(builder: flatbuffers.Builder, STOP_TIMEOffset: flatbuffers.Offset): void;
    static addStepSize(builder: flatbuffers.Builder, STEP_SIZE: number): void;
    static addLaunchData(builder: flatbuffers.Builder, LAUNCH_DATAOffset: flatbuffers.Offset): void;
    static addRocketConfiguration(builder: flatbuffers.Builder, ROCKET_CONFIGURATIONOffset: flatbuffers.Offset): void;
    static addEventRecords(builder: flatbuffers.Builder, EVENT_RECORDSOffset: flatbuffers.Offset): void;
    static createEventRecordsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startEventRecordsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addDetections(builder: flatbuffers.Builder, DETECTIONSOffset: flatbuffers.Offset): void;
    static createDetectionsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startDetectionsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addBoostTracks(builder: flatbuffers.Builder, BOOST_TRACKSOffset: flatbuffers.Offset): void;
    static createBoostTracksVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startBoostTracksVector(builder: flatbuffers.Builder, numElems: number): void;
    static addBurnOutVectors(builder: flatbuffers.Builder, BURN_OUT_VECTORSOffset: flatbuffers.Offset): void;
    static createBurnOutVectorsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startBurnOutVectorsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addTrajectoryOem(builder: flatbuffers.Builder, TRAJECTORY_OEMOffset: flatbuffers.Offset): void;
    static addTrajectoryOcm(builder: flatbuffers.Builder, TRAJECTORY_OCMOffset: flatbuffers.Offset): void;
    static addAtmosphere(builder: flatbuffers.Builder, ATMOSPHEREOffset: flatbuffers.Offset): void;
    static addHypersonicConditions(builder: flatbuffers.Builder, HYPERSONIC_CONDITIONSOffset: flatbuffers.Offset): void;
    static addPropagatorName(builder: flatbuffers.Builder, PROPAGATOR_NAMEOffset: flatbuffers.Offset): void;
    static addPropagatorVersion(builder: flatbuffers.Builder, PROPAGATOR_VERSIONOffset: flatbuffers.Offset): void;
    static addGuidanceModel(builder: flatbuffers.Builder, GUIDANCE_MODELOffset: flatbuffers.Offset): void;
    static addThrustModel(builder: flatbuffers.Builder, THRUST_MODELOffset: flatbuffers.Offset): void;
    static addAerodynamicModel(builder: flatbuffers.Builder, AERODYNAMIC_MODELOffset: flatbuffers.Offset): void;
    static addPhase(builder: flatbuffers.Builder, PHASE: lamMissionPhase): void;
    static addConstraintStatus(builder: flatbuffers.Builder, CONSTRAINT_STATUS: lamConstraintStatus): void;
    static addTimeFromLaunchS(builder: flatbuffers.Builder, TIME_FROM_LAUNCH_SOffset: flatbuffers.Offset): void;
    static createTimeFromLaunchSVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createTimeFromLaunchSVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startTimeFromLaunchSVector(builder: flatbuffers.Builder, numElems: number): void;
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
    static addDownrangeM(builder: flatbuffers.Builder, DOWNRANGE_MOffset: flatbuffers.Offset): void;
    static createDownrangeMVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createDownrangeMVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startDownrangeMVector(builder: flatbuffers.Builder, numElems: number): void;
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
    static addHeatFluxWPerM2(builder: flatbuffers.Builder, HEAT_FLUX_W_PER_M2Offset: flatbuffers.Offset): void;
    static createHeatFluxWPerM2Vector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createHeatFluxWPerM2Vector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startHeatFluxWPerM2Vector(builder: flatbuffers.Builder, numElems: number): void;
    static addMassKg(builder: flatbuffers.Builder, MASS_KGOffset: flatbuffers.Offset): void;
    static createMassKgVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createMassKgVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startMassKgVector(builder: flatbuffers.Builder, numElems: number): void;
    static addThrustN(builder: flatbuffers.Builder, THRUST_NOffset: flatbuffers.Offset): void;
    static createThrustNVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createThrustNVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startThrustNVector(builder: flatbuffers.Builder, numElems: number): void;
    static addAccelerationG(builder: flatbuffers.Builder, ACCELERATION_GOffset: flatbuffers.Offset): void;
    static createAccelerationGVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createAccelerationGVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startAccelerationGVector(builder: flatbuffers.Builder, numElems: number): void;
    static addPitchDeg(builder: flatbuffers.Builder, PITCH_DEGOffset: flatbuffers.Offset): void;
    static createPitchDegVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createPitchDegVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startPitchDegVector(builder: flatbuffers.Builder, numElems: number): void;
    static addFlightPathAngleDeg(builder: flatbuffers.Builder, FLIGHT_PATH_ANGLE_DEGOffset: flatbuffers.Offset): void;
    static createFlightPathAngleDegVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createFlightPathAngleDegVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startFlightPathAngleDegVector(builder: flatbuffers.Builder, numElems: number): void;
    static addIipLatitudeDeg(builder: flatbuffers.Builder, IIP_LATITUDE_DEGOffset: flatbuffers.Offset): void;
    static createIipLatitudeDegVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createIipLatitudeDegVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startIipLatitudeDegVector(builder: flatbuffers.Builder, numElems: number): void;
    static addIipLongitudeDeg(builder: flatbuffers.Builder, IIP_LONGITUDE_DEGOffset: flatbuffers.Offset): void;
    static createIipLongitudeDegVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createIipLongitudeDegVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startIipLongitudeDegVector(builder: flatbuffers.Builder, numElems: number): void;
    static addMaxDynamicPressurePa(builder: flatbuffers.Builder, MAX_DYNAMIC_PRESSURE_PA: number): void;
    static addMaxDynamicPressureEpoch(builder: flatbuffers.Builder, MAX_DYNAMIC_PRESSURE_EPOCHOffset: flatbuffers.Offset): void;
    static addMaxHeatFluxWPerM2(builder: flatbuffers.Builder, MAX_HEAT_FLUX_W_PER_M2: number): void;
    static addMaxHeatFluxEpoch(builder: flatbuffers.Builder, MAX_HEAT_FLUX_EPOCHOffset: flatbuffers.Offset): void;
    static addOrbitInsertionEpoch(builder: flatbuffers.Builder, ORBIT_INSERTION_EPOCHOffset: flatbuffers.Offset): void;
    static addApoapsisM(builder: flatbuffers.Builder, APOAPSIS_M: number): void;
    static addPeriapsisM(builder: flatbuffers.Builder, PERIAPSIS_M: number): void;
    static addInclinationDeg(builder: flatbuffers.Builder, INCLINATION_DEG: number): void;
    static addPayloadInjectionErrorMPerS(builder: flatbuffers.Builder, PAYLOAD_INJECTION_ERROR_M_PER_S: number): void;
    static addAscentEvents(builder: flatbuffers.Builder, ASCENT_EVENTSOffset: flatbuffers.Offset): void;
    static createAscentEventsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startAscentEventsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addConstraintViolations(builder: flatbuffers.Builder, CONSTRAINT_VIOLATIONSOffset: flatbuffers.Offset): void;
    static createConstraintViolationsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startConstraintViolationsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addAssumptions(builder: flatbuffers.Builder, ASSUMPTIONSOffset: flatbuffers.Offset): void;
    static createAssumptionsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startAssumptionsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addComment(builder: flatbuffers.Builder, COMMENTOffset: flatbuffers.Offset): void;
    static endLAM(builder: flatbuffers.Builder): flatbuffers.Offset;
    static finishLAMBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static finishSizePrefixedLAMBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    unpack(): LAMT;
    unpackTo(_o: LAMT): void;
}
export declare class LAMT implements flatbuffers.IGeneratedObject {
    MESSAGE_ID: string | Uint8Array | null;
    CREATION_DATE: string | Uint8Array | null;
    ORIGINATOR: string | Uint8Array | null;
    MISSION_NAME: string | Uint8Array | null;
    VEHICLE_NAME: string | Uint8Array | null;
    TIME_SYSTEM: string | Uint8Array | null;
    REF_FRAME: string | Uint8Array | null;
    LAUNCH_EPOCH: string | Uint8Array | null;
    START_TIME: string | Uint8Array | null;
    STOP_TIME: string | Uint8Array | null;
    STEP_SIZE: number;
    LAUNCH_DATA: LDMT | null;
    ROCKET_CONFIGURATION: ROCT | null;
    EVENT_RECORDS: (LNET)[];
    DETECTIONS: (LNDT)[];
    BOOST_TRACKS: (MSTT)[];
    BURN_OUT_VECTORS: (BOVT)[];
    TRAJECTORY_OEM: OEMT | null;
    TRAJECTORY_OCM: OCMT | null;
    ATMOSPHERE: ATMT | null;
    HYPERSONIC_CONDITIONS: HFCT | null;
    PROPAGATOR_NAME: string | Uint8Array | null;
    PROPAGATOR_VERSION: string | Uint8Array | null;
    GUIDANCE_MODEL: string | Uint8Array | null;
    THRUST_MODEL: string | Uint8Array | null;
    AERODYNAMIC_MODEL: string | Uint8Array | null;
    PHASE: lamMissionPhase;
    CONSTRAINT_STATUS: lamConstraintStatus;
    TIME_FROM_LAUNCH_S: (number)[];
    LATITUDE_DEG: (number)[];
    LONGITUDE_DEG: (number)[];
    ALTITUDE_M: (number)[];
    DOWNRANGE_M: (number)[];
    SPEED_M_PER_S: (number)[];
    MACH: (number)[];
    DYNAMIC_PRESSURE_PA: (number)[];
    HEAT_FLUX_W_PER_M2: (number)[];
    MASS_KG: (number)[];
    THRUST_N: (number)[];
    ACCELERATION_G: (number)[];
    PITCH_DEG: (number)[];
    FLIGHT_PATH_ANGLE_DEG: (number)[];
    IIP_LATITUDE_DEG: (number)[];
    IIP_LONGITUDE_DEG: (number)[];
    MAX_DYNAMIC_PRESSURE_PA: number;
    MAX_DYNAMIC_PRESSURE_EPOCH: string | Uint8Array | null;
    MAX_HEAT_FLUX_W_PER_M2: number;
    MAX_HEAT_FLUX_EPOCH: string | Uint8Array | null;
    ORBIT_INSERTION_EPOCH: string | Uint8Array | null;
    APOAPSIS_M: number;
    PERIAPSIS_M: number;
    INCLINATION_DEG: number;
    PAYLOAD_INJECTION_ERROR_M_PER_S: number;
    ASCENT_EVENTS: (lamAscentEventT)[];
    CONSTRAINT_VIOLATIONS: (lamConstraintViolationT)[];
    ASSUMPTIONS: (string)[];
    COMMENT: string | Uint8Array | null;
    constructor(MESSAGE_ID?: string | Uint8Array | null, CREATION_DATE?: string | Uint8Array | null, ORIGINATOR?: string | Uint8Array | null, MISSION_NAME?: string | Uint8Array | null, VEHICLE_NAME?: string | Uint8Array | null, TIME_SYSTEM?: string | Uint8Array | null, REF_FRAME?: string | Uint8Array | null, LAUNCH_EPOCH?: string | Uint8Array | null, START_TIME?: string | Uint8Array | null, STOP_TIME?: string | Uint8Array | null, STEP_SIZE?: number, LAUNCH_DATA?: LDMT | null, ROCKET_CONFIGURATION?: ROCT | null, EVENT_RECORDS?: (LNET)[], DETECTIONS?: (LNDT)[], BOOST_TRACKS?: (MSTT)[], BURN_OUT_VECTORS?: (BOVT)[], TRAJECTORY_OEM?: OEMT | null, TRAJECTORY_OCM?: OCMT | null, ATMOSPHERE?: ATMT | null, HYPERSONIC_CONDITIONS?: HFCT | null, PROPAGATOR_NAME?: string | Uint8Array | null, PROPAGATOR_VERSION?: string | Uint8Array | null, GUIDANCE_MODEL?: string | Uint8Array | null, THRUST_MODEL?: string | Uint8Array | null, AERODYNAMIC_MODEL?: string | Uint8Array | null, PHASE?: lamMissionPhase, CONSTRAINT_STATUS?: lamConstraintStatus, TIME_FROM_LAUNCH_S?: (number)[], LATITUDE_DEG?: (number)[], LONGITUDE_DEG?: (number)[], ALTITUDE_M?: (number)[], DOWNRANGE_M?: (number)[], SPEED_M_PER_S?: (number)[], MACH?: (number)[], DYNAMIC_PRESSURE_PA?: (number)[], HEAT_FLUX_W_PER_M2?: (number)[], MASS_KG?: (number)[], THRUST_N?: (number)[], ACCELERATION_G?: (number)[], PITCH_DEG?: (number)[], FLIGHT_PATH_ANGLE_DEG?: (number)[], IIP_LATITUDE_DEG?: (number)[], IIP_LONGITUDE_DEG?: (number)[], MAX_DYNAMIC_PRESSURE_PA?: number, MAX_DYNAMIC_PRESSURE_EPOCH?: string | Uint8Array | null, MAX_HEAT_FLUX_W_PER_M2?: number, MAX_HEAT_FLUX_EPOCH?: string | Uint8Array | null, ORBIT_INSERTION_EPOCH?: string | Uint8Array | null, APOAPSIS_M?: number, PERIAPSIS_M?: number, INCLINATION_DEG?: number, PAYLOAD_INJECTION_ERROR_M_PER_S?: number, ASCENT_EVENTS?: (lamAscentEventT)[], CONSTRAINT_VIOLATIONS?: (lamConstraintViolationT)[], ASSUMPTIONS?: (string)[], COMMENT?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=LAM.d.ts.map