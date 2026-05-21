import * as flatbuffers from 'flatbuffers';
import { ATM, ATMT } from './ATM.js';
import { HFC, HFCT } from './HFC.js';
import { OCM, OCMT } from './OCM.js';
import { OEM, OEMT } from './OEM.js';
import { RDM, RDMT } from './RDM.js';
import { remBreakupMode } from './remBreakupMode.js';
import { remEvaluationOutcome } from './remEvaluationOutcome.js';
import { remFragmentEvaluation, remFragmentEvaluationT } from './remFragmentEvaluation.js';
/**
 * Reentry Evaluation Message
 */
export declare class REM implements flatbuffers.IUnpackableObject<REMT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): REM;
    static getRootAsREM(bb: flatbuffers.ByteBuffer, obj?: REM): REM;
    static getSizePrefixedRootAsREM(bb: flatbuffers.ByteBuffer, obj?: REM): REM;
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
     * Object name.
     */
    OBJECT_NAME(): string | null;
    OBJECT_NAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * International designator or producer object identifier.
     */
    OBJECT_ID(): string | null;
    OBJECT_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Satellite catalog number.
     */
    NORAD_CAT_ID(): number;
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
     * Source reentry data message.
     */
    REENTRY_DATA(obj?: RDM): RDM | null;
    /**
     * Source or produced ephemeris.
     */
    TRAJECTORY_OEM(obj?: OEM): OEM | null;
    /**
     * Source or produced comprehensive trajectory.
     */
    TRAJECTORY_OCM(obj?: OCM): OCM | null;
    /**
     * Atmosphere model request used by the reentry analysis.
     */
    ATMOSPHERE(obj?: ATM): ATM | null;
    /**
     * Hypersonic conditions computed along the reentry trajectory.
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
     * Aerothermal model name.
     */
    AEROTHERMAL_MODEL(): string | null;
    AEROTHERMAL_MODEL(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Breakup model name.
     */
    BREAKUP_MODEL(): string | null;
    BREAKUP_MODEL(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Evaluation outcome.
     */
    OUTCOME(): remEvaluationOutcome;
    /**
     * Dominant breakup or demise mode.
     */
    BREAKUP_MODE(): remBreakupMode;
    /**
     * Predicted atmospheric interface epoch in ISO 8601 UTC format.
     */
    ENTRY_INTERFACE_EPOCH(): string | null;
    ENTRY_INTERFACE_EPOCH(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Entry interface altitude in meters.
     */
    ENTRY_INTERFACE_ALTITUDE_M(): number;
    /**
     * Predicted peak heating epoch in ISO 8601 UTC format.
     */
    PEAK_HEATING_EPOCH(): string | null;
    PEAK_HEATING_EPOCH(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Peak heat flux in watts per square meter.
     */
    PEAK_HEAT_FLUX_W_PER_M2(): number;
    /**
     * Predicted peak dynamic pressure epoch in ISO 8601 UTC format.
     */
    PEAK_DYNAMIC_PRESSURE_EPOCH(): string | null;
    PEAK_DYNAMIC_PRESSURE_EPOCH(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Peak dynamic pressure in pascals.
     */
    PEAK_DYNAMIC_PRESSURE_PA(): number;
    /**
     * Predicted peak deceleration epoch in ISO 8601 UTC format.
     */
    PEAK_DECELERATION_EPOCH(): string | null;
    PEAK_DECELERATION_EPOCH(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Peak deceleration in g.
     */
    PEAK_DECELERATION_G(): number;
    /**
     * Predicted breakup epoch in ISO 8601 UTC format.
     */
    BREAKUP_EPOCH(): string | null;
    BREAKUP_EPOCH(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Predicted breakup altitude in meters.
     */
    BREAKUP_ALTITUDE_M(): number;
    /**
     * Predicted impact epoch in ISO 8601 UTC format.
     */
    IMPACT_EPOCH(): string | null;
    IMPACT_EPOCH(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Predicted impact latitude in degrees.
     */
    IMPACT_LATITUDE_DEG(): number;
    /**
     * Predicted impact longitude in degrees.
     */
    IMPACT_LONGITUDE_DEG(): number;
    /**
     * Along-track one-sigma impact uncertainty in meters.
     */
    ALONG_TRACK_UNCERTAINTY_M(): number;
    /**
     * Cross-track one-sigma impact uncertainty in meters.
     */
    CROSS_TRACK_UNCERTAINTY_M(): number;
    /**
     * Total surviving mass in kilograms.
     */
    SURVIVING_MASS_KG(): number;
    /**
     * Number of predicted surviving fragments.
     */
    SURVIVING_FRAGMENT_COUNT(): number;
    /**
     * Aggregate survival probability from zero to one.
     */
    SURVIVAL_PROBABILITY(): number;
    /**
     * Expected casualty value.
     */
    CASUALTY_EXPECTATION(): number;
    /**
     * Ground risk probability from zero to one.
     */
    GROUND_RISK_PROBABILITY(): number;
    /**
     * Minimum thermal margin over the evaluated trajectory.
     */
    MIN_THERMAL_MARGIN(): number;
    /**
     * Minimum structural margin over the evaluated trajectory.
     */
    MIN_STRUCTURAL_MARGIN(): number;
    /**
     * Fragment-level evaluation outputs.
     */
    FRAGMENTS(index: number, obj?: remFragmentEvaluation): remFragmentEvaluation | null;
    fragmentsLength(): number;
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
    static startREM(builder: flatbuffers.Builder): void;
    static addMessageId(builder: flatbuffers.Builder, MESSAGE_IDOffset: flatbuffers.Offset): void;
    static addCreationDate(builder: flatbuffers.Builder, CREATION_DATEOffset: flatbuffers.Offset): void;
    static addOriginator(builder: flatbuffers.Builder, ORIGINATOROffset: flatbuffers.Offset): void;
    static addObjectName(builder: flatbuffers.Builder, OBJECT_NAMEOffset: flatbuffers.Offset): void;
    static addObjectId(builder: flatbuffers.Builder, OBJECT_IDOffset: flatbuffers.Offset): void;
    static addNoradCatId(builder: flatbuffers.Builder, NORAD_CAT_ID: number): void;
    static addTimeSystem(builder: flatbuffers.Builder, TIME_SYSTEMOffset: flatbuffers.Offset): void;
    static addRefFrame(builder: flatbuffers.Builder, REF_FRAMEOffset: flatbuffers.Offset): void;
    static addStartTime(builder: flatbuffers.Builder, START_TIMEOffset: flatbuffers.Offset): void;
    static addStopTime(builder: flatbuffers.Builder, STOP_TIMEOffset: flatbuffers.Offset): void;
    static addStepSize(builder: flatbuffers.Builder, STEP_SIZE: number): void;
    static addReentryData(builder: flatbuffers.Builder, REENTRY_DATAOffset: flatbuffers.Offset): void;
    static addTrajectoryOem(builder: flatbuffers.Builder, TRAJECTORY_OEMOffset: flatbuffers.Offset): void;
    static addTrajectoryOcm(builder: flatbuffers.Builder, TRAJECTORY_OCMOffset: flatbuffers.Offset): void;
    static addAtmosphere(builder: flatbuffers.Builder, ATMOSPHEREOffset: flatbuffers.Offset): void;
    static addHypersonicConditions(builder: flatbuffers.Builder, HYPERSONIC_CONDITIONSOffset: flatbuffers.Offset): void;
    static addPropagatorName(builder: flatbuffers.Builder, PROPAGATOR_NAMEOffset: flatbuffers.Offset): void;
    static addPropagatorVersion(builder: flatbuffers.Builder, PROPAGATOR_VERSIONOffset: flatbuffers.Offset): void;
    static addAerothermalModel(builder: flatbuffers.Builder, AEROTHERMAL_MODELOffset: flatbuffers.Offset): void;
    static addBreakupModel(builder: flatbuffers.Builder, BREAKUP_MODELOffset: flatbuffers.Offset): void;
    static addOutcome(builder: flatbuffers.Builder, OUTCOME: remEvaluationOutcome): void;
    static addBreakupMode(builder: flatbuffers.Builder, BREAKUP_MODE: remBreakupMode): void;
    static addEntryInterfaceEpoch(builder: flatbuffers.Builder, ENTRY_INTERFACE_EPOCHOffset: flatbuffers.Offset): void;
    static addEntryInterfaceAltitudeM(builder: flatbuffers.Builder, ENTRY_INTERFACE_ALTITUDE_M: number): void;
    static addPeakHeatingEpoch(builder: flatbuffers.Builder, PEAK_HEATING_EPOCHOffset: flatbuffers.Offset): void;
    static addPeakHeatFluxWPerM2(builder: flatbuffers.Builder, PEAK_HEAT_FLUX_W_PER_M2: number): void;
    static addPeakDynamicPressureEpoch(builder: flatbuffers.Builder, PEAK_DYNAMIC_PRESSURE_EPOCHOffset: flatbuffers.Offset): void;
    static addPeakDynamicPressurePa(builder: flatbuffers.Builder, PEAK_DYNAMIC_PRESSURE_PA: number): void;
    static addPeakDecelerationEpoch(builder: flatbuffers.Builder, PEAK_DECELERATION_EPOCHOffset: flatbuffers.Offset): void;
    static addPeakDecelerationG(builder: flatbuffers.Builder, PEAK_DECELERATION_G: number): void;
    static addBreakupEpoch(builder: flatbuffers.Builder, BREAKUP_EPOCHOffset: flatbuffers.Offset): void;
    static addBreakupAltitudeM(builder: flatbuffers.Builder, BREAKUP_ALTITUDE_M: number): void;
    static addImpactEpoch(builder: flatbuffers.Builder, IMPACT_EPOCHOffset: flatbuffers.Offset): void;
    static addImpactLatitudeDeg(builder: flatbuffers.Builder, IMPACT_LATITUDE_DEG: number): void;
    static addImpactLongitudeDeg(builder: flatbuffers.Builder, IMPACT_LONGITUDE_DEG: number): void;
    static addAlongTrackUncertaintyM(builder: flatbuffers.Builder, ALONG_TRACK_UNCERTAINTY_M: number): void;
    static addCrossTrackUncertaintyM(builder: flatbuffers.Builder, CROSS_TRACK_UNCERTAINTY_M: number): void;
    static addSurvivingMassKg(builder: flatbuffers.Builder, SURVIVING_MASS_KG: number): void;
    static addSurvivingFragmentCount(builder: flatbuffers.Builder, SURVIVING_FRAGMENT_COUNT: number): void;
    static addSurvivalProbability(builder: flatbuffers.Builder, SURVIVAL_PROBABILITY: number): void;
    static addCasualtyExpectation(builder: flatbuffers.Builder, CASUALTY_EXPECTATION: number): void;
    static addGroundRiskProbability(builder: flatbuffers.Builder, GROUND_RISK_PROBABILITY: number): void;
    static addMinThermalMargin(builder: flatbuffers.Builder, MIN_THERMAL_MARGIN: number): void;
    static addMinStructuralMargin(builder: flatbuffers.Builder, MIN_STRUCTURAL_MARGIN: number): void;
    static addFragments(builder: flatbuffers.Builder, FRAGMENTSOffset: flatbuffers.Offset): void;
    static createFragmentsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startFragmentsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addAssumptions(builder: flatbuffers.Builder, ASSUMPTIONSOffset: flatbuffers.Offset): void;
    static createAssumptionsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startAssumptionsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addComment(builder: flatbuffers.Builder, COMMENTOffset: flatbuffers.Offset): void;
    static endREM(builder: flatbuffers.Builder): flatbuffers.Offset;
    static finishREMBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static finishSizePrefixedREMBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    unpack(): REMT;
    unpackTo(_o: REMT): void;
}
export declare class REMT implements flatbuffers.IGeneratedObject {
    MESSAGE_ID: string | Uint8Array | null;
    CREATION_DATE: string | Uint8Array | null;
    ORIGINATOR: string | Uint8Array | null;
    OBJECT_NAME: string | Uint8Array | null;
    OBJECT_ID: string | Uint8Array | null;
    NORAD_CAT_ID: number;
    TIME_SYSTEM: string | Uint8Array | null;
    REF_FRAME: string | Uint8Array | null;
    START_TIME: string | Uint8Array | null;
    STOP_TIME: string | Uint8Array | null;
    STEP_SIZE: number;
    REENTRY_DATA: RDMT | null;
    TRAJECTORY_OEM: OEMT | null;
    TRAJECTORY_OCM: OCMT | null;
    ATMOSPHERE: ATMT | null;
    HYPERSONIC_CONDITIONS: HFCT | null;
    PROPAGATOR_NAME: string | Uint8Array | null;
    PROPAGATOR_VERSION: string | Uint8Array | null;
    AEROTHERMAL_MODEL: string | Uint8Array | null;
    BREAKUP_MODEL: string | Uint8Array | null;
    OUTCOME: remEvaluationOutcome;
    BREAKUP_MODE: remBreakupMode;
    ENTRY_INTERFACE_EPOCH: string | Uint8Array | null;
    ENTRY_INTERFACE_ALTITUDE_M: number;
    PEAK_HEATING_EPOCH: string | Uint8Array | null;
    PEAK_HEAT_FLUX_W_PER_M2: number;
    PEAK_DYNAMIC_PRESSURE_EPOCH: string | Uint8Array | null;
    PEAK_DYNAMIC_PRESSURE_PA: number;
    PEAK_DECELERATION_EPOCH: string | Uint8Array | null;
    PEAK_DECELERATION_G: number;
    BREAKUP_EPOCH: string | Uint8Array | null;
    BREAKUP_ALTITUDE_M: number;
    IMPACT_EPOCH: string | Uint8Array | null;
    IMPACT_LATITUDE_DEG: number;
    IMPACT_LONGITUDE_DEG: number;
    ALONG_TRACK_UNCERTAINTY_M: number;
    CROSS_TRACK_UNCERTAINTY_M: number;
    SURVIVING_MASS_KG: number;
    SURVIVING_FRAGMENT_COUNT: number;
    SURVIVAL_PROBABILITY: number;
    CASUALTY_EXPECTATION: number;
    GROUND_RISK_PROBABILITY: number;
    MIN_THERMAL_MARGIN: number;
    MIN_STRUCTURAL_MARGIN: number;
    FRAGMENTS: (remFragmentEvaluationT)[];
    ASSUMPTIONS: (string)[];
    COMMENT: string | Uint8Array | null;
    constructor(MESSAGE_ID?: string | Uint8Array | null, CREATION_DATE?: string | Uint8Array | null, ORIGINATOR?: string | Uint8Array | null, OBJECT_NAME?: string | Uint8Array | null, OBJECT_ID?: string | Uint8Array | null, NORAD_CAT_ID?: number, TIME_SYSTEM?: string | Uint8Array | null, REF_FRAME?: string | Uint8Array | null, START_TIME?: string | Uint8Array | null, STOP_TIME?: string | Uint8Array | null, STEP_SIZE?: number, REENTRY_DATA?: RDMT | null, TRAJECTORY_OEM?: OEMT | null, TRAJECTORY_OCM?: OCMT | null, ATMOSPHERE?: ATMT | null, HYPERSONIC_CONDITIONS?: HFCT | null, PROPAGATOR_NAME?: string | Uint8Array | null, PROPAGATOR_VERSION?: string | Uint8Array | null, AEROTHERMAL_MODEL?: string | Uint8Array | null, BREAKUP_MODEL?: string | Uint8Array | null, OUTCOME?: remEvaluationOutcome, BREAKUP_MODE?: remBreakupMode, ENTRY_INTERFACE_EPOCH?: string | Uint8Array | null, ENTRY_INTERFACE_ALTITUDE_M?: number, PEAK_HEATING_EPOCH?: string | Uint8Array | null, PEAK_HEAT_FLUX_W_PER_M2?: number, PEAK_DYNAMIC_PRESSURE_EPOCH?: string | Uint8Array | null, PEAK_DYNAMIC_PRESSURE_PA?: number, PEAK_DECELERATION_EPOCH?: string | Uint8Array | null, PEAK_DECELERATION_G?: number, BREAKUP_EPOCH?: string | Uint8Array | null, BREAKUP_ALTITUDE_M?: number, IMPACT_EPOCH?: string | Uint8Array | null, IMPACT_LATITUDE_DEG?: number, IMPACT_LONGITUDE_DEG?: number, ALONG_TRACK_UNCERTAINTY_M?: number, CROSS_TRACK_UNCERTAINTY_M?: number, SURVIVING_MASS_KG?: number, SURVIVING_FRAGMENT_COUNT?: number, SURVIVAL_PROBABILITY?: number, CASUALTY_EXPECTATION?: number, GROUND_RISK_PROBABILITY?: number, MIN_THERMAL_MARGIN?: number, MIN_STRUCTURAL_MARGIN?: number, FRAGMENTS?: (remFragmentEvaluationT)[], ASSUMPTIONS?: (string)[], COMMENT?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=REM.d.ts.map