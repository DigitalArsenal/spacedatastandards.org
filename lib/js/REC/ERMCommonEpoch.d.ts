import * as flatbuffers from 'flatbuffers';
import { ERMCommonEpochResult, ERMCommonEpochResultT } from './ERMCommonEpochResult.js';
import { ERMCommonEpochTarget, ERMCommonEpochTargetT } from './ERMCommonEpochTarget.js';
import { ERMCounts, ERMCountsT } from './ERMCounts.js';
/**
 * Common-epoch requests or results.
 */
export declare class ERMCommonEpoch implements flatbuffers.IUnpackableObject<ERMCommonEpochT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): ERMCommonEpoch;
    static getRootAsERMCommonEpoch(bb: flatbuffers.ByteBuffer, obj?: ERMCommonEpoch): ERMCommonEpoch;
    static getSizePrefixedRootAsERMCommonEpoch(bb: flatbuffers.ByteBuffer, obj?: ERMCommonEpoch): ERMCommonEpoch;
    UNITS(): string | null;
    UNITS(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    COUNTS(obj?: ERMCounts): ERMCounts | null;
    REQUESTS(index: number, obj?: ERMCommonEpochTarget): ERMCommonEpochTarget | null;
    requestsLength(): number;
    RESULTS(index: number, obj?: ERMCommonEpochResult): ERMCommonEpochResult | null;
    resultsLength(): number;
    static startERMCommonEpoch(builder: flatbuffers.Builder): void;
    static addUnits(builder: flatbuffers.Builder, UNITSOffset: flatbuffers.Offset): void;
    static addCounts(builder: flatbuffers.Builder, COUNTSOffset: flatbuffers.Offset): void;
    static addRequests(builder: flatbuffers.Builder, REQUESTSOffset: flatbuffers.Offset): void;
    static createRequestsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startRequestsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addResults(builder: flatbuffers.Builder, RESULTSOffset: flatbuffers.Offset): void;
    static createResultsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startResultsVector(builder: flatbuffers.Builder, numElems: number): void;
    static endERMCommonEpoch(builder: flatbuffers.Builder): flatbuffers.Offset;
    unpack(): ERMCommonEpochT;
    unpackTo(_o: ERMCommonEpochT): void;
}
export declare class ERMCommonEpochT implements flatbuffers.IGeneratedObject {
    UNITS: string | Uint8Array | null;
    COUNTS: ERMCountsT | null;
    REQUESTS: (ERMCommonEpochTargetT)[];
    RESULTS: (ERMCommonEpochResultT)[];
    constructor(UNITS?: string | Uint8Array | null, COUNTS?: ERMCountsT | null, REQUESTS?: (ERMCommonEpochTargetT)[], RESULTS?: (ERMCommonEpochResultT)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=ERMCommonEpoch.d.ts.map