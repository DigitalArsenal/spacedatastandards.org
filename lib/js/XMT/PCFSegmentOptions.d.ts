import * as flatbuffers from 'flatbuffers';
/**
 * Beyond-Earth segment sets: Moon-centered, cislunar and heliocentric arcs
 * cut into segments at maneuvers and sphere-of-influence passages.
 */
export declare class PCFSegmentOptions implements flatbuffers.IUnpackableObject<PCFSegmentOptionsT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): PCFSegmentOptions;
    static getRootAsPCFSegmentOptions(bb: flatbuffers.ByteBuffer, obj?: PCFSegmentOptions): PCFSegmentOptions;
    static getSizePrefixedRootAsPCFSegmentOptions(bb: flatbuffers.ByteBuffer, obj?: PCFSegmentOptions): PCFSegmentOptions;
    /**
     * Moon-centered gravity field degree. Default 70.
     */
    MOON_GRAVITY_MAXIMUM_DEGREE(): number;
    /**
     * Moon-centered short-periodic degree. Default 8.
     */
    MOON_SHORT_PERIODIC_MAXIMUM_DEGREE(): number;
    /**
     * Moon-centered eccentricity order (highest |q| of the mean-anomaly
     * multiple kept). Default 2.
     */
    MOON_ECCENTRICITY_ORDER(): number;
    /**
     * Moon-centered integration step, seconds. Default 240.
     */
    MOON_STEP_SECONDS(): number;
    /**
     * Cislunar integration step, seconds. Default 60.
     */
    CISLUNAR_STEP_SECONDS(): number;
    /**
     * Heliocentric integration step, seconds. Default 1800.
     */
    HELIOCENTRIC_STEP_SECONDS(): number;
    /**
     * A segment is accepted when its RMS is within max(RMS_FACTOR x the
     * cleanest segment's RMS, that RMS + RMS_MARGIN_KM). Factor, default 2.
     */
    SEGMENT_RMS_FACTOR(): number;
    /**
     * The additive term of the same rule, km. Default 0.05.
     */
    SEGMENT_RMS_MARGIN_KM(): number;
    /**
     * Shortest cislunar segment, hours. Default 6.
     */
    CISLUNAR_MINIMUM_SEGMENT_HOURS(): number;
    static startPCFSegmentOptions(builder: flatbuffers.Builder): void;
    static addMoonGravityMaximumDegree(builder: flatbuffers.Builder, MOON_GRAVITY_MAXIMUM_DEGREE: number): void;
    static addMoonShortPeriodicMaximumDegree(builder: flatbuffers.Builder, MOON_SHORT_PERIODIC_MAXIMUM_DEGREE: number): void;
    static addMoonEccentricityOrder(builder: flatbuffers.Builder, MOON_ECCENTRICITY_ORDER: number): void;
    static addMoonStepSeconds(builder: flatbuffers.Builder, MOON_STEP_SECONDS: number): void;
    static addCislunarStepSeconds(builder: flatbuffers.Builder, CISLUNAR_STEP_SECONDS: number): void;
    static addHeliocentricStepSeconds(builder: flatbuffers.Builder, HELIOCENTRIC_STEP_SECONDS: number): void;
    static addSegmentRmsFactor(builder: flatbuffers.Builder, SEGMENT_RMS_FACTOR: number): void;
    static addSegmentRmsMarginKm(builder: flatbuffers.Builder, SEGMENT_RMS_MARGIN_KM: number): void;
    static addCislunarMinimumSegmentHours(builder: flatbuffers.Builder, CISLUNAR_MINIMUM_SEGMENT_HOURS: number): void;
    static endPCFSegmentOptions(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createPCFSegmentOptions(builder: flatbuffers.Builder, MOON_GRAVITY_MAXIMUM_DEGREE: number, MOON_SHORT_PERIODIC_MAXIMUM_DEGREE: number, MOON_ECCENTRICITY_ORDER: number, MOON_STEP_SECONDS: number, CISLUNAR_STEP_SECONDS: number, HELIOCENTRIC_STEP_SECONDS: number, SEGMENT_RMS_FACTOR: number, SEGMENT_RMS_MARGIN_KM: number, CISLUNAR_MINIMUM_SEGMENT_HOURS: number): flatbuffers.Offset;
    unpack(): PCFSegmentOptionsT;
    unpackTo(_o: PCFSegmentOptionsT): void;
}
export declare class PCFSegmentOptionsT implements flatbuffers.IGeneratedObject {
    MOON_GRAVITY_MAXIMUM_DEGREE: number;
    MOON_SHORT_PERIODIC_MAXIMUM_DEGREE: number;
    MOON_ECCENTRICITY_ORDER: number;
    MOON_STEP_SECONDS: number;
    CISLUNAR_STEP_SECONDS: number;
    HELIOCENTRIC_STEP_SECONDS: number;
    SEGMENT_RMS_FACTOR: number;
    SEGMENT_RMS_MARGIN_KM: number;
    CISLUNAR_MINIMUM_SEGMENT_HOURS: number;
    constructor(MOON_GRAVITY_MAXIMUM_DEGREE?: number, MOON_SHORT_PERIODIC_MAXIMUM_DEGREE?: number, MOON_ECCENTRICITY_ORDER?: number, MOON_STEP_SECONDS?: number, CISLUNAR_STEP_SECONDS?: number, HELIOCENTRIC_STEP_SECONDS?: number, SEGMENT_RMS_FACTOR?: number, SEGMENT_RMS_MARGIN_KM?: number, CISLUNAR_MINIMUM_SEGMENT_HOURS?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=PCFSegmentOptions.d.ts.map