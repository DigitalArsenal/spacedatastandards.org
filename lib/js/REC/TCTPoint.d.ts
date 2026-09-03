import * as flatbuffers from 'flatbuffers';
import { TCTRadii, TCTRadiiT } from './TCTRadii.js';
import { tctIntensityCategory } from './tctIntensityCategory.js';
/**
 * One point along a track.
 */
export declare class TCTPoint implements flatbuffers.IUnpackableObject<TCTPointT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): TCTPoint;
    static getRootAsTCTPoint(bb: flatbuffers.ByteBuffer, obj?: TCTPoint): TCTPoint;
    static getSizePrefixedRootAsTCTPoint(bb: flatbuffers.ByteBuffer, obj?: TCTPoint): TCTPoint;
    /**
     * Time the point is valid at, Unix milliseconds UTC.
     */
    VALID_TIME_MS(): bigint;
    /**
     * Lead from INIT_TIME_MS, hours; 0 for observed tracks.
     */
    LEAD_HOURS(): number;
    /**
     * Centre latitude, degrees north.
     */
    LATITUDE(): number;
    /**
     * Centre longitude, degrees east in [-180, 180).
     */
    LONGITUDE(): number;
    /**
     * Maximum sustained wind over WIND_AVERAGING_PERIOD_S, m/s
     * (1 kt = 1852/3600 m/s).
     */
    MAX_SUSTAINED_WIND_MS(): number;
    /**
     * Minimum central pressure, pascal (1 hPa = 100 Pa).
     */
    MIN_CENTRAL_PRESSURE_PA(): number;
    /**
     * Radius of maximum wind, km; negative when not reported.
     */
    RADIUS_MAX_WIND_KM(): number;
    /**
     * Wind radii at each reported threshold.
     */
    RADII(index: number, obj?: TCTRadii): TCTRadii | null;
    radiiLength(): number;
    /**
     * Intensity category at this point.
     */
    CATEGORY(): tctIntensityCategory;
    /**
     * Probability in [0, 1] that the system exists at this point; 1 for
     * observed tracks and unconditional forecasts.
     */
    EXISTENCE_PROBABILITY(): number;
    /**
     * Direction of motion, degrees clockwise from north; negative when not
     * reported.
     */
    MOTION_DIRECTION_DEG(): number;
    /**
     * Speed of motion, m/s; negative when not reported.
     */
    MOTION_SPEED_MS(): number;
    static startTCTPoint(builder: flatbuffers.Builder): void;
    static addValidTimeMs(builder: flatbuffers.Builder, VALID_TIME_MS: bigint): void;
    static addLeadHours(builder: flatbuffers.Builder, LEAD_HOURS: number): void;
    static addLatitude(builder: flatbuffers.Builder, LATITUDE: number): void;
    static addLongitude(builder: flatbuffers.Builder, LONGITUDE: number): void;
    static addMaxSustainedWindMs(builder: flatbuffers.Builder, MAX_SUSTAINED_WIND_MS: number): void;
    static addMinCentralPressurePa(builder: flatbuffers.Builder, MIN_CENTRAL_PRESSURE_PA: number): void;
    static addRadiusMaxWindKm(builder: flatbuffers.Builder, RADIUS_MAX_WIND_KM: number): void;
    static addRadii(builder: flatbuffers.Builder, RADIIOffset: flatbuffers.Offset): void;
    static createRadiiVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startRadiiVector(builder: flatbuffers.Builder, numElems: number): void;
    static addCategory(builder: flatbuffers.Builder, CATEGORY: tctIntensityCategory): void;
    static addExistenceProbability(builder: flatbuffers.Builder, EXISTENCE_PROBABILITY: number): void;
    static addMotionDirectionDeg(builder: flatbuffers.Builder, MOTION_DIRECTION_DEG: number): void;
    static addMotionSpeedMs(builder: flatbuffers.Builder, MOTION_SPEED_MS: number): void;
    static endTCTPoint(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createTCTPoint(builder: flatbuffers.Builder, VALID_TIME_MS: bigint, LEAD_HOURS: number, LATITUDE: number, LONGITUDE: number, MAX_SUSTAINED_WIND_MS: number, MIN_CENTRAL_PRESSURE_PA: number, RADIUS_MAX_WIND_KM: number, RADIIOffset: flatbuffers.Offset, CATEGORY: tctIntensityCategory, EXISTENCE_PROBABILITY: number, MOTION_DIRECTION_DEG: number, MOTION_SPEED_MS: number): flatbuffers.Offset;
    unpack(): TCTPointT;
    unpackTo(_o: TCTPointT): void;
}
export declare class TCTPointT implements flatbuffers.IGeneratedObject {
    VALID_TIME_MS: bigint;
    LEAD_HOURS: number;
    LATITUDE: number;
    LONGITUDE: number;
    MAX_SUSTAINED_WIND_MS: number;
    MIN_CENTRAL_PRESSURE_PA: number;
    RADIUS_MAX_WIND_KM: number;
    RADII: (TCTRadiiT)[];
    CATEGORY: tctIntensityCategory;
    EXISTENCE_PROBABILITY: number;
    MOTION_DIRECTION_DEG: number;
    MOTION_SPEED_MS: number;
    constructor(VALID_TIME_MS?: bigint, LEAD_HOURS?: number, LATITUDE?: number, LONGITUDE?: number, MAX_SUSTAINED_WIND_MS?: number, MIN_CENTRAL_PRESSURE_PA?: number, RADIUS_MAX_WIND_KM?: number, RADII?: (TCTRadiiT)[], CATEGORY?: tctIntensityCategory, EXISTENCE_PROBABILITY?: number, MOTION_DIRECTION_DEG?: number, MOTION_SPEED_MS?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=TCTPoint.d.ts.map