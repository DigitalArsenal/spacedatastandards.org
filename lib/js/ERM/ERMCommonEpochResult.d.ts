import * as flatbuffers from 'flatbuffers';
import { ERMSetDifference, ERMSetDifferenceT } from './ERMSetDifference.js';
import { ermDifferenceOrigin } from './ermDifferenceOrigin.js';
/**
 * Differences at one common epoch.
 */
export declare class ERMCommonEpochResult implements flatbuffers.IUnpackableObject<ERMCommonEpochResultT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): ERMCommonEpochResult;
    static getRootAsERMCommonEpochResult(bb: flatbuffers.ByteBuffer, obj?: ERMCommonEpochResult): ERMCommonEpochResult;
    static getSizePrefixedRootAsERMCommonEpochResult(bb: flatbuffers.ByteBuffer, obj?: ERMCommonEpochResult): ERMCommonEpochResult;
    NORAD_CAT_ID(): number;
    ORIGIN(): ermDifferenceOrigin;
    /**
     * Epoch used.
     */
    EPOCH(): string | null;
    EPOCH(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Why there are no differences; empty otherwise.
     */
    MISSING(): string | null;
    MISSING(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    ORIGIN_SET(): string | null;
    ORIGIN_SET(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Origin state, GCRF, km and km/s (6 values).
     */
    STATE(index: number): number | null;
    stateLength(): number;
    stateArray(): Float64Array | null;
    SETS(index: number, obj?: ERMSetDifference): ERMSetDifference | null;
    setsLength(): number;
    /**
     * Requested sets not found.
     */
    MISSING_SETS(index: number): string;
    MISSING_SETS(index: number, optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    missingSetsLength(): number;
    static startERMCommonEpochResult(builder: flatbuffers.Builder): void;
    static addNoradCatId(builder: flatbuffers.Builder, NORAD_CAT_ID: number): void;
    static addOrigin(builder: flatbuffers.Builder, ORIGIN: ermDifferenceOrigin): void;
    static addEpoch(builder: flatbuffers.Builder, EPOCHOffset: flatbuffers.Offset): void;
    static addMissing(builder: flatbuffers.Builder, MISSINGOffset: flatbuffers.Offset): void;
    static addOriginSet(builder: flatbuffers.Builder, ORIGIN_SETOffset: flatbuffers.Offset): void;
    static addState(builder: flatbuffers.Builder, STATEOffset: flatbuffers.Offset): void;
    static createStateVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createStateVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startStateVector(builder: flatbuffers.Builder, numElems: number): void;
    static addSets(builder: flatbuffers.Builder, SETSOffset: flatbuffers.Offset): void;
    static createSetsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startSetsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addMissingSets(builder: flatbuffers.Builder, MISSING_SETSOffset: flatbuffers.Offset): void;
    static createMissingSetsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startMissingSetsVector(builder: flatbuffers.Builder, numElems: number): void;
    static endERMCommonEpochResult(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createERMCommonEpochResult(builder: flatbuffers.Builder, NORAD_CAT_ID: number, ORIGIN: ermDifferenceOrigin, EPOCHOffset: flatbuffers.Offset, MISSINGOffset: flatbuffers.Offset, ORIGIN_SETOffset: flatbuffers.Offset, STATEOffset: flatbuffers.Offset, SETSOffset: flatbuffers.Offset, MISSING_SETSOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): ERMCommonEpochResultT;
    unpackTo(_o: ERMCommonEpochResultT): void;
}
export declare class ERMCommonEpochResultT implements flatbuffers.IGeneratedObject {
    NORAD_CAT_ID: number;
    ORIGIN: ermDifferenceOrigin;
    EPOCH: string | Uint8Array | null;
    MISSING: string | Uint8Array | null;
    ORIGIN_SET: string | Uint8Array | null;
    STATE: (number)[];
    SETS: (ERMSetDifferenceT)[];
    MISSING_SETS: (string)[];
    constructor(NORAD_CAT_ID?: number, ORIGIN?: ermDifferenceOrigin, EPOCH?: string | Uint8Array | null, MISSING?: string | Uint8Array | null, ORIGIN_SET?: string | Uint8Array | null, STATE?: (number)[], SETS?: (ERMSetDifferenceT)[], MISSING_SETS?: (string)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=ERMCommonEpochResult.d.ts.map