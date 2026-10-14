import * as flatbuffers from 'flatbuffers';
/**
 * One sample of network throughput.
 */
export declare class NHSThroughputSample implements flatbuffers.IUnpackableObject<NHSThroughputSampleT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): NHSThroughputSample;
    static getRootAsNHSThroughputSample(bb: flatbuffers.ByteBuffer, obj?: NHSThroughputSample): NHSThroughputSample;
    static getSizePrefixedRootAsNHSThroughputSample(bb: flatbuffers.ByteBuffer, obj?: NHSThroughputSample): NHSThroughputSample;
    /**
     * Unix milliseconds of the sample.
     */
    TIME_MS(): bigint;
    /**
     * Total bytes received since the service started, at this sample.
     */
    TOTAL_IN_BYTES(): bigint;
    /**
     * Total bytes sent since the service started, at this sample.
     */
    TOTAL_OUT_BYTES(): bigint;
    /**
     * Receive rate at this sample, bytes per second.
     */
    RATE_IN_BPS(): number;
    /**
     * Send rate at this sample, bytes per second.
     */
    RATE_OUT_BPS(): number;
    static startNHSThroughputSample(builder: flatbuffers.Builder): void;
    static addTimeMs(builder: flatbuffers.Builder, TIME_MS: bigint): void;
    static addTotalInBytes(builder: flatbuffers.Builder, TOTAL_IN_BYTES: bigint): void;
    static addTotalOutBytes(builder: flatbuffers.Builder, TOTAL_OUT_BYTES: bigint): void;
    static addRateInBps(builder: flatbuffers.Builder, RATE_IN_BPS: number): void;
    static addRateOutBps(builder: flatbuffers.Builder, RATE_OUT_BPS: number): void;
    static endNHSThroughputSample(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createNHSThroughputSample(builder: flatbuffers.Builder, TIME_MS: bigint, TOTAL_IN_BYTES: bigint, TOTAL_OUT_BYTES: bigint, RATE_IN_BPS: number, RATE_OUT_BPS: number): flatbuffers.Offset;
    unpack(): NHSThroughputSampleT;
    unpackTo(_o: NHSThroughputSampleT): void;
}
export declare class NHSThroughputSampleT implements flatbuffers.IGeneratedObject {
    TIME_MS: bigint;
    TOTAL_IN_BYTES: bigint;
    TOTAL_OUT_BYTES: bigint;
    RATE_IN_BPS: number;
    RATE_OUT_BPS: number;
    constructor(TIME_MS?: bigint, TOTAL_IN_BYTES?: bigint, TOTAL_OUT_BYTES?: bigint, RATE_IN_BPS?: number, RATE_OUT_BPS?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=NHSThroughputSample.d.ts.map