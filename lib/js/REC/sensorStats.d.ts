import * as flatbuffers from 'flatbuffers';
/**
 * Sensor Operational Statistics
 */
export declare class sensorStats implements flatbuffers.IUnpackableObject<sensorStatsT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): sensorStats;
    static getRootAssensorStats(bb: flatbuffers.ByteBuffer, obj?: sensorStats): sensorStats;
    static getSizePrefixedRootAssensorStats(bb: flatbuffers.ByteBuffer, obj?: sensorStats): sensorStats;
    /**
     * Statistics period start (ISO 8601)
     */
    PERIOD_START(): string | null;
    PERIOD_START(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Statistics period end (ISO 8601)
     */
    PERIOD_END(): string | null;
    PERIOD_END(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Total observation attempts
     */
    OBS_ATTEMPTED(): number;
    /**
     * Successful observations
     */
    OBS_SUCCESSFUL(): number;
    /**
     * Failed observations
     */
    OBS_FAILED(): number;
    /**
     * Uptime fraction (0.0-1.0)
     */
    UPTIME(): number;
    /**
     * Average tracking accuracy in arcseconds
     */
    AVG_ACCURACY(): number;
    /**
     * Detected objects count
     */
    DETECTIONS(): number;
    /**
     * Uncorrelated tracks count
     */
    UCT_COUNT(): number;
    static startsensorStats(builder: flatbuffers.Builder): void;
    static addPeriodStart(builder: flatbuffers.Builder, PERIOD_STARTOffset: flatbuffers.Offset): void;
    static addPeriodEnd(builder: flatbuffers.Builder, PERIOD_ENDOffset: flatbuffers.Offset): void;
    static addObsAttempted(builder: flatbuffers.Builder, OBS_ATTEMPTED: number): void;
    static addObsSuccessful(builder: flatbuffers.Builder, OBS_SUCCESSFUL: number): void;
    static addObsFailed(builder: flatbuffers.Builder, OBS_FAILED: number): void;
    static addUptime(builder: flatbuffers.Builder, UPTIME: number): void;
    static addAvgAccuracy(builder: flatbuffers.Builder, AVG_ACCURACY: number): void;
    static addDetections(builder: flatbuffers.Builder, DETECTIONS: number): void;
    static addUctCount(builder: flatbuffers.Builder, UCT_COUNT: number): void;
    static endsensorStats(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createsensorStats(builder: flatbuffers.Builder, PERIOD_STARTOffset: flatbuffers.Offset, PERIOD_ENDOffset: flatbuffers.Offset, OBS_ATTEMPTED: number, OBS_SUCCESSFUL: number, OBS_FAILED: number, UPTIME: number, AVG_ACCURACY: number, DETECTIONS: number, UCT_COUNT: number): flatbuffers.Offset;
    unpack(): sensorStatsT;
    unpackTo(_o: sensorStatsT): void;
}
export declare class sensorStatsT implements flatbuffers.IGeneratedObject {
    PERIOD_START: string | Uint8Array | null;
    PERIOD_END: string | Uint8Array | null;
    OBS_ATTEMPTED: number;
    OBS_SUCCESSFUL: number;
    OBS_FAILED: number;
    UPTIME: number;
    AVG_ACCURACY: number;
    DETECTIONS: number;
    UCT_COUNT: number;
    constructor(PERIOD_START?: string | Uint8Array | null, PERIOD_END?: string | Uint8Array | null, OBS_ATTEMPTED?: number, OBS_SUCCESSFUL?: number, OBS_FAILED?: number, UPTIME?: number, AVG_ACCURACY?: number, DETECTIONS?: number, UCT_COUNT?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=sensorStats.d.ts.map