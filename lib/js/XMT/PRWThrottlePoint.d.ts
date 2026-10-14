import * as flatbuffers from 'flatbuffers';
/**
 * Piecewise-linear throttle. Clock is seconds from initial propagation epoch.
 */
export declare class PRWThrottlePoint implements flatbuffers.IUnpackableObject<PRWThrottlePointT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): PRWThrottlePoint;
    static getRootAsPRWThrottlePoint(bb: flatbuffers.ByteBuffer, obj?: PRWThrottlePoint): PRWThrottlePoint;
    static getSizePrefixedRootAsPRWThrottlePoint(bb: flatbuffers.ByteBuffer, obj?: PRWThrottlePoint): PRWThrottlePoint;
    ELAPSED_SECONDS(): number;
    FRACTION(): number;
    static startPRWThrottlePoint(builder: flatbuffers.Builder): void;
    static addElapsedSeconds(builder: flatbuffers.Builder, ELAPSED_SECONDS: number): void;
    static addFraction(builder: flatbuffers.Builder, FRACTION: number): void;
    static endPRWThrottlePoint(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createPRWThrottlePoint(builder: flatbuffers.Builder, ELAPSED_SECONDS: number, FRACTION: number): flatbuffers.Offset;
    unpack(): PRWThrottlePointT;
    unpackTo(_o: PRWThrottlePointT): void;
}
export declare class PRWThrottlePointT implements flatbuffers.IGeneratedObject {
    ELAPSED_SECONDS: number;
    FRACTION: number;
    constructor(ELAPSED_SECONDS?: number, FRACTION?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=PRWThrottlePoint.d.ts.map