import * as flatbuffers from 'flatbuffers';
import { ACWElevationMaskPoint, ACWElevationMaskPointT } from './ACWElevationMaskPoint.js';
import { ACWGroundStation, ACWGroundStationT } from './ACWGroundStation.js';
import { ACWRefractionModel, ACWRefractionModelT } from './ACWRefractionModel.js';
import { ACWStateSample, ACWStateSampleT } from './ACWStateSample.js';
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
    constructor(OPERATION?: acwOperationCode, GROUND_STATIONS?: (ACWGroundStationT)[], STATES?: (ACWStateSampleT)[], TARGET_STATION_ID?: string | Uint8Array | null, MIN_ELEVATION_OVERRIDE_RAD?: number, TRACE_ID?: string | Uint8Array | null, ELEVATION_MASK?: (ACWElevationMaskPointT)[], REFRACTION_MODEL?: ACWRefractionModelT | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=ACWRequest.d.ts.map