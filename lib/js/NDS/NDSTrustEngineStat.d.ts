import * as flatbuffers from 'flatbuffers';
/**
 * Counters for the node's trust rule evaluation engine.
 */
export declare class NDSTrustEngineStat implements flatbuffers.IUnpackableObject<NDSTrustEngineStatT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): NDSTrustEngineStat;
    static getRootAsNDSTrustEngineStat(bb: flatbuffers.ByteBuffer, obj?: NDSTrustEngineStat): NDSTrustEngineStat;
    static getSizePrefixedRootAsNDSTrustEngineStat(bb: flatbuffers.ByteBuffer, obj?: NDSTrustEngineStat): NDSTrustEngineStat;
    /**
     * Minimum interval between evaluation passes, milliseconds.
     */
    MIN_INTERVAL_MS(): bigint;
    RUNS(): bigint;
    /**
     * Unix seconds; 0 = never.
     */
    LAST_RUN_AT(): bigint;
    static startNDSTrustEngineStat(builder: flatbuffers.Builder): void;
    static addMinIntervalMs(builder: flatbuffers.Builder, MIN_INTERVAL_MS: bigint): void;
    static addRuns(builder: flatbuffers.Builder, RUNS: bigint): void;
    static addLastRunAt(builder: flatbuffers.Builder, LAST_RUN_AT: bigint): void;
    static endNDSTrustEngineStat(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createNDSTrustEngineStat(builder: flatbuffers.Builder, MIN_INTERVAL_MS: bigint, RUNS: bigint, LAST_RUN_AT: bigint): flatbuffers.Offset;
    unpack(): NDSTrustEngineStatT;
    unpackTo(_o: NDSTrustEngineStatT): void;
}
export declare class NDSTrustEngineStatT implements flatbuffers.IGeneratedObject {
    MIN_INTERVAL_MS: bigint;
    RUNS: bigint;
    LAST_RUN_AT: bigint;
    constructor(MIN_INTERVAL_MS?: bigint, RUNS?: bigint, LAST_RUN_AT?: bigint);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=NDSTrustEngineStat.d.ts.map