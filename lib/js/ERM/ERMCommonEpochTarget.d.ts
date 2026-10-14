import * as flatbuffers from 'flatbuffers';
import { ermDifferenceOrigin } from './ermDifferenceOrigin.js';
/**
 * A request for differences at a common epoch.
 */
export declare class ERMCommonEpochTarget implements flatbuffers.IUnpackableObject<ERMCommonEpochTargetT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): ERMCommonEpochTarget;
    static getRootAsERMCommonEpochTarget(bb: flatbuffers.ByteBuffer, obj?: ERMCommonEpochTarget): ERMCommonEpochTarget;
    static getSizePrefixedRootAsERMCommonEpochTarget(bb: flatbuffers.ByteBuffer, obj?: ERMCommonEpochTarget): ERMCommonEpochTarget;
    NORAD_CAT_ID(): number;
    /**
     * Requested epoch, ISO 8601.
     */
    EPOCH(): string | null;
    EPOCH(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Element-set epochs to propagate there (matched within 1 s).
     */
    SETS(index: number): string;
    SETS(index: number, optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    setsLength(): number;
    ORIGIN(): ermDifferenceOrigin;
    /**
     * Use the first reference epoch within this after EPOCH, s; 0 = exact.
     */
    AFTER_S(): number;
    /**
     * The origin set's epoch (ORIGIN OneSet).
     */
    ORIGIN_SET(): string | null;
    ORIGIN_SET(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    static startERMCommonEpochTarget(builder: flatbuffers.Builder): void;
    static addNoradCatId(builder: flatbuffers.Builder, NORAD_CAT_ID: number): void;
    static addEpoch(builder: flatbuffers.Builder, EPOCHOffset: flatbuffers.Offset): void;
    static addSets(builder: flatbuffers.Builder, SETSOffset: flatbuffers.Offset): void;
    static createSetsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startSetsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addOrigin(builder: flatbuffers.Builder, ORIGIN: ermDifferenceOrigin): void;
    static addAfterS(builder: flatbuffers.Builder, AFTER_S: number): void;
    static addOriginSet(builder: flatbuffers.Builder, ORIGIN_SETOffset: flatbuffers.Offset): void;
    static endERMCommonEpochTarget(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createERMCommonEpochTarget(builder: flatbuffers.Builder, NORAD_CAT_ID: number, EPOCHOffset: flatbuffers.Offset, SETSOffset: flatbuffers.Offset, ORIGIN: ermDifferenceOrigin, AFTER_S: number, ORIGIN_SETOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): ERMCommonEpochTargetT;
    unpackTo(_o: ERMCommonEpochTargetT): void;
}
export declare class ERMCommonEpochTargetT implements flatbuffers.IGeneratedObject {
    NORAD_CAT_ID: number;
    EPOCH: string | Uint8Array | null;
    SETS: (string)[];
    ORIGIN: ermDifferenceOrigin;
    AFTER_S: number;
    ORIGIN_SET: string | Uint8Array | null;
    constructor(NORAD_CAT_ID?: number, EPOCH?: string | Uint8Array | null, SETS?: (string)[], ORIGIN?: ermDifferenceOrigin, AFTER_S?: number, ORIGIN_SET?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=ERMCommonEpochTarget.d.ts.map