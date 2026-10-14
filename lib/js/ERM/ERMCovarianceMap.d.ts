import * as flatbuffers from 'flatbuffers';
import { ERMCounts, ERMCountsT } from './ERMCounts.js';
import { ERMMapRequest, ERMMapRequestT } from './ERMMapRequest.js';
import { ERMMapResult, ERMMapResultT } from './ERMMapResult.js';
/**
 * Covariance mapping requests or results.
 */
export declare class ERMCovarianceMap implements flatbuffers.IUnpackableObject<ERMCovarianceMapT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): ERMCovarianceMap;
    static getRootAsERMCovarianceMap(bb: flatbuffers.ByteBuffer, obj?: ERMCovarianceMap): ERMCovarianceMap;
    static getSizePrefixedRootAsERMCovarianceMap(bb: flatbuffers.ByteBuffer, obj?: ERMCovarianceMap): ERMCovarianceMap;
    UNITS(): string | null;
    UNITS(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    COUNTS(obj?: ERMCounts): ERMCounts | null;
    REQUESTS(index: number, obj?: ERMMapRequest): ERMMapRequest | null;
    requestsLength(): number;
    RESULTS(index: number, obj?: ERMMapResult): ERMMapResult | null;
    resultsLength(): number;
    static startERMCovarianceMap(builder: flatbuffers.Builder): void;
    static addUnits(builder: flatbuffers.Builder, UNITSOffset: flatbuffers.Offset): void;
    static addCounts(builder: flatbuffers.Builder, COUNTSOffset: flatbuffers.Offset): void;
    static addRequests(builder: flatbuffers.Builder, REQUESTSOffset: flatbuffers.Offset): void;
    static createRequestsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startRequestsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addResults(builder: flatbuffers.Builder, RESULTSOffset: flatbuffers.Offset): void;
    static createResultsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startResultsVector(builder: flatbuffers.Builder, numElems: number): void;
    static endERMCovarianceMap(builder: flatbuffers.Builder): flatbuffers.Offset;
    unpack(): ERMCovarianceMapT;
    unpackTo(_o: ERMCovarianceMapT): void;
}
export declare class ERMCovarianceMapT implements flatbuffers.IGeneratedObject {
    UNITS: string | Uint8Array | null;
    COUNTS: ERMCountsT | null;
    REQUESTS: (ERMMapRequestT)[];
    RESULTS: (ERMMapResultT)[];
    constructor(UNITS?: string | Uint8Array | null, COUNTS?: ERMCountsT | null, REQUESTS?: (ERMMapRequestT)[], RESULTS?: (ERMMapResultT)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=ERMCovarianceMap.d.ts.map