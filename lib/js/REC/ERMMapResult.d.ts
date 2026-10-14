import * as flatbuffers from 'flatbuffers';
import { ERMMappedCovariance, ERMMappedCovarianceT } from './ERMMappedCovariance.js';
import { ermMapMethod } from './ermMapMethod.js';
/**
 * Mapping of one request.
 */
export declare class ERMMapResult implements flatbuffers.IUnpackableObject<ERMMapResultT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): ERMMapResult;
    static getRootAsERMMapResult(bb: flatbuffers.ByteBuffer, obj?: ERMMapResult): ERMMapResult;
    static getSizePrefixedRootAsERMMapResult(bb: flatbuffers.ByteBuffer, obj?: ERMMapResult): ERMMapResult;
    NORAD_CAT_ID(): number;
    SET_EPOCH(): string | null;
    SET_EPOCH(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    METHOD(): ermMapMethod;
    FROM_EPOCH(): string | null;
    FROM_EPOCH(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    AXES_SET(): string | null;
    AXES_SET(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    ERROR(): string | null;
    ERROR(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    TARGETS(index: number, obj?: ERMMappedCovariance): ERMMappedCovariance | null;
    targetsLength(): number;
    static startERMMapResult(builder: flatbuffers.Builder): void;
    static addNoradCatId(builder: flatbuffers.Builder, NORAD_CAT_ID: number): void;
    static addSetEpoch(builder: flatbuffers.Builder, SET_EPOCHOffset: flatbuffers.Offset): void;
    static addMethod(builder: flatbuffers.Builder, METHOD: ermMapMethod): void;
    static addFromEpoch(builder: flatbuffers.Builder, FROM_EPOCHOffset: flatbuffers.Offset): void;
    static addAxesSet(builder: flatbuffers.Builder, AXES_SETOffset: flatbuffers.Offset): void;
    static addError(builder: flatbuffers.Builder, ERROROffset: flatbuffers.Offset): void;
    static addTargets(builder: flatbuffers.Builder, TARGETSOffset: flatbuffers.Offset): void;
    static createTargetsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startTargetsVector(builder: flatbuffers.Builder, numElems: number): void;
    static endERMMapResult(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createERMMapResult(builder: flatbuffers.Builder, NORAD_CAT_ID: number, SET_EPOCHOffset: flatbuffers.Offset, METHOD: ermMapMethod, FROM_EPOCHOffset: flatbuffers.Offset, AXES_SETOffset: flatbuffers.Offset, ERROROffset: flatbuffers.Offset, TARGETSOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): ERMMapResultT;
    unpackTo(_o: ERMMapResultT): void;
}
export declare class ERMMapResultT implements flatbuffers.IGeneratedObject {
    NORAD_CAT_ID: number;
    SET_EPOCH: string | Uint8Array | null;
    METHOD: ermMapMethod;
    FROM_EPOCH: string | Uint8Array | null;
    AXES_SET: string | Uint8Array | null;
    ERROR: string | Uint8Array | null;
    TARGETS: (ERMMappedCovarianceT)[];
    constructor(NORAD_CAT_ID?: number, SET_EPOCH?: string | Uint8Array | null, METHOD?: ermMapMethod, FROM_EPOCH?: string | Uint8Array | null, AXES_SET?: string | Uint8Array | null, ERROR?: string | Uint8Array | null, TARGETS?: (ERMMappedCovarianceT)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=ERMMapResult.d.ts.map