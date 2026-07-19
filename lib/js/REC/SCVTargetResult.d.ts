import * as flatbuffers from 'flatbuffers';
export declare class SCVTargetResult implements flatbuffers.IUnpackableObject<SCVTargetResultT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): SCVTargetResult;
    static getRootAsSCVTargetResult(bb: flatbuffers.ByteBuffer, obj?: SCVTargetResult): SCVTargetResult;
    static getSizePrefixedRootAsSCVTargetResult(bb: flatbuffers.ByteBuffer, obj?: SCVTargetResult): SCVTargetResult;
    TARGET_ID(): number;
    NAME(): string | null;
    NAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    ACCESS_COUNT(): number;
    REVISIT_COUNT(): number;
    TOTAL_ACCESS_DURATION_SEC(): number;
    MEAN_REVISIT_TIME_SEC(): number;
    MAX_GAP_SEC(): number;
    INTERVAL_START_SEC(index: number): number | null;
    intervalStartSecLength(): number;
    intervalStartSecArray(): Float64Array | null;
    INTERVAL_STOP_SEC(index: number): number | null;
    intervalStopSecLength(): number;
    intervalStopSecArray(): Float64Array | null;
    PASS_START_BUCKETS(index: number): number | null;
    passStartBucketsLength(): number;
    passStartBucketsArray(): Uint32Array | null;
    ACCESS_BITSET(index: number): number | null;
    accessBitsetLength(): number;
    accessBitsetArray(): Uint32Array | null;
    static startSCVTargetResult(builder: flatbuffers.Builder): void;
    static addTargetId(builder: flatbuffers.Builder, TARGET_ID: number): void;
    static addName(builder: flatbuffers.Builder, NAMEOffset: flatbuffers.Offset): void;
    static addAccessCount(builder: flatbuffers.Builder, ACCESS_COUNT: number): void;
    static addRevisitCount(builder: flatbuffers.Builder, REVISIT_COUNT: number): void;
    static addTotalAccessDurationSec(builder: flatbuffers.Builder, TOTAL_ACCESS_DURATION_SEC: number): void;
    static addMeanRevisitTimeSec(builder: flatbuffers.Builder, MEAN_REVISIT_TIME_SEC: number): void;
    static addMaxGapSec(builder: flatbuffers.Builder, MAX_GAP_SEC: number): void;
    static addIntervalStartSec(builder: flatbuffers.Builder, INTERVAL_START_SECOffset: flatbuffers.Offset): void;
    static createIntervalStartSecVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createIntervalStartSecVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startIntervalStartSecVector(builder: flatbuffers.Builder, numElems: number): void;
    static addIntervalStopSec(builder: flatbuffers.Builder, INTERVAL_STOP_SECOffset: flatbuffers.Offset): void;
    static createIntervalStopSecVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createIntervalStopSecVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startIntervalStopSecVector(builder: flatbuffers.Builder, numElems: number): void;
    static addPassStartBuckets(builder: flatbuffers.Builder, PASS_START_BUCKETSOffset: flatbuffers.Offset): void;
    static createPassStartBucketsVector(builder: flatbuffers.Builder, data: number[] | Uint32Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createPassStartBucketsVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startPassStartBucketsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addAccessBitset(builder: flatbuffers.Builder, ACCESS_BITSETOffset: flatbuffers.Offset): void;
    static createAccessBitsetVector(builder: flatbuffers.Builder, data: number[] | Uint32Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createAccessBitsetVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startAccessBitsetVector(builder: flatbuffers.Builder, numElems: number): void;
    static endSCVTargetResult(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createSCVTargetResult(builder: flatbuffers.Builder, TARGET_ID: number, NAMEOffset: flatbuffers.Offset, ACCESS_COUNT: number, REVISIT_COUNT: number, TOTAL_ACCESS_DURATION_SEC: number, MEAN_REVISIT_TIME_SEC: number, MAX_GAP_SEC: number, INTERVAL_START_SECOffset: flatbuffers.Offset, INTERVAL_STOP_SECOffset: flatbuffers.Offset, PASS_START_BUCKETSOffset: flatbuffers.Offset, ACCESS_BITSETOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): SCVTargetResultT;
    unpackTo(_o: SCVTargetResultT): void;
}
export declare class SCVTargetResultT implements flatbuffers.IGeneratedObject {
    TARGET_ID: number;
    NAME: string | Uint8Array | null;
    ACCESS_COUNT: number;
    REVISIT_COUNT: number;
    TOTAL_ACCESS_DURATION_SEC: number;
    MEAN_REVISIT_TIME_SEC: number;
    MAX_GAP_SEC: number;
    INTERVAL_START_SEC: (number)[];
    INTERVAL_STOP_SEC: (number)[];
    PASS_START_BUCKETS: (number)[];
    ACCESS_BITSET: (number)[];
    constructor(TARGET_ID?: number, NAME?: string | Uint8Array | null, ACCESS_COUNT?: number, REVISIT_COUNT?: number, TOTAL_ACCESS_DURATION_SEC?: number, MEAN_REVISIT_TIME_SEC?: number, MAX_GAP_SEC?: number, INTERVAL_START_SEC?: (number)[], INTERVAL_STOP_SEC?: (number)[], PASS_START_BUCKETS?: (number)[], ACCESS_BITSET?: (number)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=SCVTargetResult.d.ts.map