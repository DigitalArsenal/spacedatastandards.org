import * as flatbuffers from 'flatbuffers';
import { BUS, BUST } from './BUS.js';
import { attitudeState, attitudeStateT } from './attitudeState.js';
import { ephemerisDataBlock, ephemerisDataBlockT } from './ephemerisDataBlock.js';
import { ppsBattery, ppsBatteryT } from './ppsBattery.js';
import { ppsPointingSegment, ppsPointingSegmentT } from './ppsPointingSegment.js';
import { ppsSolarArray, ppsSolarArrayT } from './ppsSolarArray.js';
/**
 * The scenario: what to simulate.
 */
export declare class ppsScenario implements flatbuffers.IUnpackableObject<ppsScenarioT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): ppsScenario;
    static getRootAsppsScenario(bb: flatbuffers.ByteBuffer, obj?: ppsScenario): ppsScenario;
    static getSizePrefixedRootAsppsScenario(bb: flatbuffers.ByteBuffer, obj?: ppsScenario): ppsScenario;
    /**
     * Identifier of the scenario.
     */
    SCENARIO_ID(): string | null;
    SCENARIO_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Human-readable name.
     */
    NAME(): string | null;
    NAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Unix milliseconds of the start; 0 = relative time only.
     */
    START_EPOCH_MS(): bigint;
    /**
     * Duration and output step, s.
     */
    DURATION_S(): number;
    STEP_S(): number;
    /**
     * The spacecraft whose scenario this is (catalog number or name).
     */
    OBJECT_ID(): string | null;
    OBJECT_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * The bus, when described.
     */
    BUS_SPECIFICATION(obj?: BUS): BUS | null;
    /**
     * The trajectory over the span (for Sun, eclipse and target geometry);
     * empty = the simulator's own orbit model.
     */
    TRAJECTORY(obj?: ephemerisDataBlock): ephemerisDataBlock | null;
    /**
     * Pointing modes, in time order; empty = one mode for the whole span.
     */
    POINTING(index: number, obj?: ppsPointingSegment): ppsPointingSegment | null;
    pointingLength(): number;
    /**
     * Attitude at the start; empty = derived from the first mode.
     */
    INITIAL_ATTITUDE(obj?: attitudeState): attitudeState | null;
    /**
     * Pointing error at the start, deg.
     */
    INITIAL_POINTING_ERROR_DEG(): number;
    /**
     * Body rate magnitude at the start, deg/s.
     */
    INITIAL_BODY_RATE_DEG_S(): number;
    /**
     * Reaction-wheel momentum magnitude at the start, N m s.
     */
    INITIAL_WHEEL_MOMENTUM_NMS(): number;
    /**
     * Largest wheel momentum before saturation, N m s; 0 = not limited.
     */
    WHEEL_MOMENTUM_CAPACITY_NMS(): number;
    /**
     * Pointing error below which the mode is fine tracking, deg; 0 = the
     * simulator's default.
     */
    FINE_POINTING_THRESHOLD_DEG(): number;
    SOLAR_ARRAY(obj?: ppsSolarArray): ppsSolarArray | null;
    BATTERY(obj?: ppsBattery): ppsBattery | null;
    /**
     * Constant electrical load, W; 0 = the simulator's default.
     */
    BUS_LOAD_W(): number;
    /**
     * Attitude sensor noise, arcsec, 1 sigma.
     */
    SENSOR_NOISE_ARCSEC(): number;
    /**
     * Target of the relative-position series; empty = none.
     */
    RELATIVE_TARGET_ID(): string | null;
    RELATIVE_TARGET_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    static startppsScenario(builder: flatbuffers.Builder): void;
    static addScenarioId(builder: flatbuffers.Builder, SCENARIO_IDOffset: flatbuffers.Offset): void;
    static addName(builder: flatbuffers.Builder, NAMEOffset: flatbuffers.Offset): void;
    static addStartEpochMs(builder: flatbuffers.Builder, START_EPOCH_MS: bigint): void;
    static addDurationS(builder: flatbuffers.Builder, DURATION_S: number): void;
    static addStepS(builder: flatbuffers.Builder, STEP_S: number): void;
    static addObjectId(builder: flatbuffers.Builder, OBJECT_IDOffset: flatbuffers.Offset): void;
    static addBusSpecification(builder: flatbuffers.Builder, BUS_SPECIFICATIONOffset: flatbuffers.Offset): void;
    static addTrajectory(builder: flatbuffers.Builder, TRAJECTORYOffset: flatbuffers.Offset): void;
    static addPointing(builder: flatbuffers.Builder, POINTINGOffset: flatbuffers.Offset): void;
    static createPointingVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startPointingVector(builder: flatbuffers.Builder, numElems: number): void;
    static addInitialAttitude(builder: flatbuffers.Builder, INITIAL_ATTITUDEOffset: flatbuffers.Offset): void;
    static addInitialPointingErrorDeg(builder: flatbuffers.Builder, INITIAL_POINTING_ERROR_DEG: number): void;
    static addInitialBodyRateDegS(builder: flatbuffers.Builder, INITIAL_BODY_RATE_DEG_S: number): void;
    static addInitialWheelMomentumNms(builder: flatbuffers.Builder, INITIAL_WHEEL_MOMENTUM_NMS: number): void;
    static addWheelMomentumCapacityNms(builder: flatbuffers.Builder, WHEEL_MOMENTUM_CAPACITY_NMS: number): void;
    static addFinePointingThresholdDeg(builder: flatbuffers.Builder, FINE_POINTING_THRESHOLD_DEG: number): void;
    static addSolarArray(builder: flatbuffers.Builder, SOLAR_ARRAYOffset: flatbuffers.Offset): void;
    static addBattery(builder: flatbuffers.Builder, BATTERYOffset: flatbuffers.Offset): void;
    static addBusLoadW(builder: flatbuffers.Builder, BUS_LOAD_W: number): void;
    static addSensorNoiseArcsec(builder: flatbuffers.Builder, SENSOR_NOISE_ARCSEC: number): void;
    static addRelativeTargetId(builder: flatbuffers.Builder, RELATIVE_TARGET_IDOffset: flatbuffers.Offset): void;
    static endppsScenario(builder: flatbuffers.Builder): flatbuffers.Offset;
    unpack(): ppsScenarioT;
    unpackTo(_o: ppsScenarioT): void;
}
export declare class ppsScenarioT implements flatbuffers.IGeneratedObject {
    SCENARIO_ID: string | Uint8Array | null;
    NAME: string | Uint8Array | null;
    START_EPOCH_MS: bigint;
    DURATION_S: number;
    STEP_S: number;
    OBJECT_ID: string | Uint8Array | null;
    BUS_SPECIFICATION: BUST | null;
    TRAJECTORY: ephemerisDataBlockT | null;
    POINTING: (ppsPointingSegmentT)[];
    INITIAL_ATTITUDE: attitudeStateT | null;
    INITIAL_POINTING_ERROR_DEG: number;
    INITIAL_BODY_RATE_DEG_S: number;
    INITIAL_WHEEL_MOMENTUM_NMS: number;
    WHEEL_MOMENTUM_CAPACITY_NMS: number;
    FINE_POINTING_THRESHOLD_DEG: number;
    SOLAR_ARRAY: ppsSolarArrayT | null;
    BATTERY: ppsBatteryT | null;
    BUS_LOAD_W: number;
    SENSOR_NOISE_ARCSEC: number;
    RELATIVE_TARGET_ID: string | Uint8Array | null;
    constructor(SCENARIO_ID?: string | Uint8Array | null, NAME?: string | Uint8Array | null, START_EPOCH_MS?: bigint, DURATION_S?: number, STEP_S?: number, OBJECT_ID?: string | Uint8Array | null, BUS_SPECIFICATION?: BUST | null, TRAJECTORY?: ephemerisDataBlockT | null, POINTING?: (ppsPointingSegmentT)[], INITIAL_ATTITUDE?: attitudeStateT | null, INITIAL_POINTING_ERROR_DEG?: number, INITIAL_BODY_RATE_DEG_S?: number, INITIAL_WHEEL_MOMENTUM_NMS?: number, WHEEL_MOMENTUM_CAPACITY_NMS?: number, FINE_POINTING_THRESHOLD_DEG?: number, SOLAR_ARRAY?: ppsSolarArrayT | null, BATTERY?: ppsBatteryT | null, BUS_LOAD_W?: number, SENSOR_NOISE_ARCSEC?: number, RELATIVE_TARGET_ID?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=ppsScenario.d.ts.map