import * as flatbuffers from 'flatbuffers';
import { ERMCounts, ERMCountsT } from './ERMCounts.js';
import { ERMElementFit, ERMElementFitT } from './ERMElementFit.js';
import { ERMFitOptions, ERMFitOptionsT } from './ERMFitOptions.js';
import { ERMResidualRequest, ERMResidualRequestT } from './ERMResidualRequest.js';
import { ERMResidualResult, ERMResidualResultT } from './ERMResidualResult.js';
/**
 * Element-set fits or residuals against an ephemeris.
 */
export declare class ERMElementFits implements flatbuffers.IUnpackableObject<ERMElementFitsT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): ERMElementFits;
    static getRootAsERMElementFits(bb: flatbuffers.ByteBuffer, obj?: ERMElementFits): ERMElementFits;
    static getSizePrefixedRootAsERMElementFits(bb: flatbuffers.ByteBuffer, obj?: ERMElementFits): ERMElementFits;
    /**
     * Model, e.g. "SGP4 (Vallado 2020), WGS-72, opsmode i; TEME".
     */
    MODEL(): string | null;
    MODEL(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * e.g. "model minus ephemeris".
     */
    RESIDUAL_SIGN(): string | null;
    RESIDUAL_SIGN(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    UNITS(): string | null;
    UNITS(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    COUNTS(obj?: ERMCounts): ERMCounts | null;
    OPTIONS(obj?: ERMFitOptions): ERMFitOptions | null;
    FITS(index: number, obj?: ERMElementFit): ERMElementFit | null;
    fitsLength(): number;
    /**
     * Residual requests; include per-window samples.
     */
    INCLUDE_SAMPLES(): boolean;
    RESIDUAL_REQUESTS(index: number, obj?: ERMResidualRequest): ERMResidualRequest | null;
    residualRequestsLength(): number;
    RESIDUAL_RESULTS(index: number, obj?: ERMResidualResult): ERMResidualResult | null;
    residualResultsLength(): number;
    static startERMElementFits(builder: flatbuffers.Builder): void;
    static addModel(builder: flatbuffers.Builder, MODELOffset: flatbuffers.Offset): void;
    static addResidualSign(builder: flatbuffers.Builder, RESIDUAL_SIGNOffset: flatbuffers.Offset): void;
    static addUnits(builder: flatbuffers.Builder, UNITSOffset: flatbuffers.Offset): void;
    static addCounts(builder: flatbuffers.Builder, COUNTSOffset: flatbuffers.Offset): void;
    static addOptions(builder: flatbuffers.Builder, OPTIONSOffset: flatbuffers.Offset): void;
    static addFits(builder: flatbuffers.Builder, FITSOffset: flatbuffers.Offset): void;
    static createFitsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startFitsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addIncludeSamples(builder: flatbuffers.Builder, INCLUDE_SAMPLES: boolean): void;
    static addResidualRequests(builder: flatbuffers.Builder, RESIDUAL_REQUESTSOffset: flatbuffers.Offset): void;
    static createResidualRequestsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startResidualRequestsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addResidualResults(builder: flatbuffers.Builder, RESIDUAL_RESULTSOffset: flatbuffers.Offset): void;
    static createResidualResultsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startResidualResultsVector(builder: flatbuffers.Builder, numElems: number): void;
    static endERMElementFits(builder: flatbuffers.Builder): flatbuffers.Offset;
    unpack(): ERMElementFitsT;
    unpackTo(_o: ERMElementFitsT): void;
}
export declare class ERMElementFitsT implements flatbuffers.IGeneratedObject {
    MODEL: string | Uint8Array | null;
    RESIDUAL_SIGN: string | Uint8Array | null;
    UNITS: string | Uint8Array | null;
    COUNTS: ERMCountsT | null;
    OPTIONS: ERMFitOptionsT | null;
    FITS: (ERMElementFitT)[];
    INCLUDE_SAMPLES: boolean;
    RESIDUAL_REQUESTS: (ERMResidualRequestT)[];
    RESIDUAL_RESULTS: (ERMResidualResultT)[];
    constructor(MODEL?: string | Uint8Array | null, RESIDUAL_SIGN?: string | Uint8Array | null, UNITS?: string | Uint8Array | null, COUNTS?: ERMCountsT | null, OPTIONS?: ERMFitOptionsT | null, FITS?: (ERMElementFitT)[], INCLUDE_SAMPLES?: boolean, RESIDUAL_REQUESTS?: (ERMResidualRequestT)[], RESIDUAL_RESULTS?: (ERMResidualResultT)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=ERMElementFits.d.ts.map