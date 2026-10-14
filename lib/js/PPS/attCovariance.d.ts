import * as flatbuffers from 'flatbuffers';
import { attCovType } from './attCovType.js';
/**
 * Attitude Covariance
 */
export declare class attCovariance implements flatbuffers.IUnpackableObject<attCovarianceT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): attCovariance;
    static getRootAsattCovariance(bb: flatbuffers.ByteBuffer, obj?: attCovariance): attCovariance;
    static getSizePrefixedRootAsattCovariance(bb: flatbuffers.ByteBuffer, obj?: attCovariance): attCovariance;
    /**
     * Covariance type
     */
    COV_TYPE(): attCovType;
    /**
     * Reference frame
     */
    COV_REF_FRAME(): string | null;
    COV_REF_FRAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Epoch (ISO 8601)
     */
    EPOCH(): string | null;
    EPOCH(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Upper-triangular covariance matrix elements (row-major)
     */
    COV(index: number): number | null;
    covLength(): number;
    covArray(): Float64Array | null;
    static startattCovariance(builder: flatbuffers.Builder): void;
    static addCovType(builder: flatbuffers.Builder, COV_TYPE: attCovType): void;
    static addCovRefFrame(builder: flatbuffers.Builder, COV_REF_FRAMEOffset: flatbuffers.Offset): void;
    static addEpoch(builder: flatbuffers.Builder, EPOCHOffset: flatbuffers.Offset): void;
    static addCov(builder: flatbuffers.Builder, COVOffset: flatbuffers.Offset): void;
    static createCovVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createCovVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startCovVector(builder: flatbuffers.Builder, numElems: number): void;
    static endattCovariance(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createattCovariance(builder: flatbuffers.Builder, COV_TYPE: attCovType, COV_REF_FRAMEOffset: flatbuffers.Offset, EPOCHOffset: flatbuffers.Offset, COVOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): attCovarianceT;
    unpackTo(_o: attCovarianceT): void;
}
export declare class attCovarianceT implements flatbuffers.IGeneratedObject {
    COV_TYPE: attCovType;
    COV_REF_FRAME: string | Uint8Array | null;
    EPOCH: string | Uint8Array | null;
    COV: (number)[];
    constructor(COV_TYPE?: attCovType, COV_REF_FRAME?: string | Uint8Array | null, EPOCH?: string | Uint8Array | null, COV?: (number)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=attCovariance.d.ts.map