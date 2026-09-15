import * as flatbuffers from 'flatbuffers';
import { ACWConstraintSet, ACWConstraintSetT } from './ACWConstraintSet.js';
import { ACWElevationMaskPoint, ACWElevationMaskPointT } from './ACWElevationMaskPoint.js';
import { ACWGroundStation, ACWGroundStationT } from './ACWGroundStation.js';
import { ACWObserverTrajectory, ACWObserverTrajectoryT } from './ACWObserverTrajectory.js';
import { ACWRefractionModel, ACWRefractionModelT } from './ACWRefractionModel.js';
import { ACWStateSample, ACWStateSampleT } from './ACWStateSample.js';
import { acwEvaluationMode } from './acwEvaluationMode.js';
import { acwOperationCode } from './acwOperationCode.js';
/**
 * One access-window compute request.
 */
export declare class ACWRequest implements flatbuffers.IUnpackableObject<ACWRequestT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): ACWRequest;
    static getRootAsACWRequest(bb: flatbuffers.ByteBuffer, obj?: ACWRequest): ACWRequest;
    static getSizePrefixedRootAsACWRequest(bb: flatbuffers.ByteBuffer, obj?: ACWRequest): ACWRequest;
    OPERATION(): acwOperationCode;
    /**
     * Candidate ground stations.
     */
    GROUND_STATIONS(index: number, obj?: ACWGroundStation): ACWGroundStation | null;
    groundStationsLength(): number;
    /**
     * Pre-sampled target Earth-fixed Cartesian states.
     */
    STATES(index: number, obj?: ACWStateSample): ACWStateSample | null;
    statesLength(): number;
    /**
     * Optional target station id. Empty means all stations when supported.
     */
    TARGET_STATION_ID(): string | null;
    TARGET_STATION_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Optional caller override for minimum elevation, radians.
     */
    MIN_ELEVATION_OVERRIDE_RAD(): number;
    /**
     * Optional trace/correlation identifier.
     */
    TRACE_ID(): string | null;
    TRACE_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Optional azimuth-dependent minimum elevation mask.
     */
    ELEVATION_MASK(index: number, obj?: ACWElevationMaskPoint): ACWElevationMaskPoint | null;
    elevationMaskLength(): number;
    /**
     * Optional apparent-elevation refraction model.
     */
    REFRACTION_MODEL(obj?: ACWRefractionModel): ACWRefractionModel | null;
    /**
     * Optional constraint composition. When absent the legacy behaviour holds:
     * every ground station's MIN_ELEVATION_RAD (or the override) plus
     * ELEVATION_MASK, all required.
     */
    CONSTRAINTS(obj?: ACWConstraintSet): ACWConstraintSet | null;
    /**
     * Optional moving observers (satellite-to-satellite access). Each observer
     * is evaluated against STATES like a ground station.
     */
    OBSERVERS(index: number, obj?: ACWObserverTrajectory): ACWObserverTrajectory | null;
    observersLength(): number;
    /**
     * Sample-only or root-refined window edges.
     */
    EVALUATION_MODE(): acwEvaluationMode;
    /**
     * Edge refinement tolerance for CONTINUOUS, seconds.
     */
    ROOT_TOLERANCE_S(): number;
    /**
     * Sun states in the STATES frame and time scale, required by
     * SUN_EXCLUSION and TARGET_LIGHTING constraints; interpolated to sample epochs.
     */
    SUN_STATES(index: number, obj?: ACWStateSample): ACWStateSample | null;
    sunStatesLength(): number;
    /**
     * Moon states in the STATES frame and time scale, required by MOON_EXCLUSION.
     */
    MOON_STATES(index: number, obj?: ACWStateSample): ACWStateSample | null;
    moonStatesLength(): number;
    static startACWRequest(builder: flatbuffers.Builder): void;
    static addOperation(builder: flatbuffers.Builder, OPERATION: acwOperationCode): void;
    static addGroundStations(builder: flatbuffers.Builder, GROUND_STATIONSOffset: flatbuffers.Offset): void;
    static createGroundStationsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startGroundStationsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addStates(builder: flatbuffers.Builder, STATESOffset: flatbuffers.Offset): void;
    static createStatesVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startStatesVector(builder: flatbuffers.Builder, numElems: number): void;
    static addTargetStationId(builder: flatbuffers.Builder, TARGET_STATION_IDOffset: flatbuffers.Offset): void;
    static addMinElevationOverrideRad(builder: flatbuffers.Builder, MIN_ELEVATION_OVERRIDE_RAD: number): void;
    static addTraceId(builder: flatbuffers.Builder, TRACE_IDOffset: flatbuffers.Offset): void;
    static addElevationMask(builder: flatbuffers.Builder, ELEVATION_MASKOffset: flatbuffers.Offset): void;
    static createElevationMaskVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startElevationMaskVector(builder: flatbuffers.Builder, numElems: number): void;
    static addRefractionModel(builder: flatbuffers.Builder, REFRACTION_MODELOffset: flatbuffers.Offset): void;
    static addConstraints(builder: flatbuffers.Builder, CONSTRAINTSOffset: flatbuffers.Offset): void;
    static addObservers(builder: flatbuffers.Builder, OBSERVERSOffset: flatbuffers.Offset): void;
    static createObserversVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startObserversVector(builder: flatbuffers.Builder, numElems: number): void;
    static addEvaluationMode(builder: flatbuffers.Builder, EVALUATION_MODE: acwEvaluationMode): void;
    static addRootToleranceS(builder: flatbuffers.Builder, ROOT_TOLERANCE_S: number): void;
    static addSunStates(builder: flatbuffers.Builder, SUN_STATESOffset: flatbuffers.Offset): void;
    static createSunStatesVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startSunStatesVector(builder: flatbuffers.Builder, numElems: number): void;
    static addMoonStates(builder: flatbuffers.Builder, MOON_STATESOffset: flatbuffers.Offset): void;
    static createMoonStatesVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startMoonStatesVector(builder: flatbuffers.Builder, numElems: number): void;
    static endACWRequest(builder: flatbuffers.Builder): flatbuffers.Offset;
    unpack(): ACWRequestT;
    unpackTo(_o: ACWRequestT): void;
}
export declare class ACWRequestT implements flatbuffers.IGeneratedObject {
    OPERATION: acwOperationCode;
    GROUND_STATIONS: (ACWGroundStationT)[];
    STATES: (ACWStateSampleT)[];
    TARGET_STATION_ID: string | Uint8Array | null;
    MIN_ELEVATION_OVERRIDE_RAD: number;
    TRACE_ID: string | Uint8Array | null;
    ELEVATION_MASK: (ACWElevationMaskPointT)[];
    REFRACTION_MODEL: ACWRefractionModelT | null;
    CONSTRAINTS: ACWConstraintSetT | null;
    OBSERVERS: (ACWObserverTrajectoryT)[];
    EVALUATION_MODE: acwEvaluationMode;
    ROOT_TOLERANCE_S: number;
    SUN_STATES: (ACWStateSampleT)[];
    MOON_STATES: (ACWStateSampleT)[];
    constructor(OPERATION?: acwOperationCode, GROUND_STATIONS?: (ACWGroundStationT)[], STATES?: (ACWStateSampleT)[], TARGET_STATION_ID?: string | Uint8Array | null, MIN_ELEVATION_OVERRIDE_RAD?: number, TRACE_ID?: string | Uint8Array | null, ELEVATION_MASK?: (ACWElevationMaskPointT)[], REFRACTION_MODEL?: ACWRefractionModelT | null, CONSTRAINTS?: ACWConstraintSetT | null, OBSERVERS?: (ACWObserverTrajectoryT)[], EVALUATION_MODE?: acwEvaluationMode, ROOT_TOLERANCE_S?: number, SUN_STATES?: (ACWStateSampleT)[], MOON_STATES?: (ACWStateSampleT)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=ACWRequest.d.ts.map