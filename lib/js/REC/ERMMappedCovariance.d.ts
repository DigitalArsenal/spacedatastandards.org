import * as flatbuffers from 'flatbuffers';
import { ERMLambertArc, ERMLambertArcT } from './ERMLambertArc.js';
/**
 * A mapped covariance at one target.
 */
export declare class ERMMappedCovariance implements flatbuffers.IUnpackableObject<ERMMappedCovarianceT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): ERMMappedCovariance;
    static getRootAsERMMappedCovariance(bb: flatbuffers.ByteBuffer, obj?: ERMMappedCovariance): ERMMappedCovariance;
    static getSizePrefixedRootAsERMMappedCovariance(bb: flatbuffers.ByteBuffer, obj?: ERMMappedCovariance): ERMMappedCovariance;
    EPOCH(): string | null;
    EPOCH(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Lower21 RTN at the target.
     */
    COVARIANCE(index: number): number | null;
    covarianceLength(): number;
    covarianceArray(): Float64Array | null;
    /**
     * STM, 6x6 row-major (TEME, km, km/s); empty unless requested.
     */
    STM(index: number): number | null;
    stmLength(): number;
    stmArray(): Float64Array | null;
    LAMBERT(obj?: ERMLambertArc): ERMLambertArc | null;
    /**
     * Failure text; empty on success.
     */
    ERROR(): string | null;
    ERROR(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    static startERMMappedCovariance(builder: flatbuffers.Builder): void;
    static addEpoch(builder: flatbuffers.Builder, EPOCHOffset: flatbuffers.Offset): void;
    static addCovariance(builder: flatbuffers.Builder, COVARIANCEOffset: flatbuffers.Offset): void;
    static createCovarianceVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createCovarianceVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startCovarianceVector(builder: flatbuffers.Builder, numElems: number): void;
    static addStm(builder: flatbuffers.Builder, STMOffset: flatbuffers.Offset): void;
    static createStmVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createStmVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startStmVector(builder: flatbuffers.Builder, numElems: number): void;
    static addLambert(builder: flatbuffers.Builder, LAMBERTOffset: flatbuffers.Offset): void;
    static addError(builder: flatbuffers.Builder, ERROROffset: flatbuffers.Offset): void;
    static endERMMappedCovariance(builder: flatbuffers.Builder): flatbuffers.Offset;
    unpack(): ERMMappedCovarianceT;
    unpackTo(_o: ERMMappedCovarianceT): void;
}
export declare class ERMMappedCovarianceT implements flatbuffers.IGeneratedObject {
    EPOCH: string | Uint8Array | null;
    COVARIANCE: (number)[];
    STM: (number)[];
    LAMBERT: ERMLambertArcT | null;
    ERROR: string | Uint8Array | null;
    constructor(EPOCH?: string | Uint8Array | null, COVARIANCE?: (number)[], STM?: (number)[], LAMBERT?: ERMLambertArcT | null, ERROR?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=ERMMappedCovariance.d.ts.map