import * as flatbuffers from 'flatbuffers';
import { CZMDynValueType } from './CZMDynValueType.js';
import { CZMInterpolation, CZMInterpolationT } from './CZMInterpolation.js';
/**
 * Sampled time-varying data
 */
export declare class CZMDynSampled implements flatbuffers.IUnpackableObject<CZMDynSampledT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): CZMDynSampled;
    static getRootAsCZMDynSampled(bb: flatbuffers.ByteBuffer, obj?: CZMDynSampled): CZMDynSampled;
    static getSizePrefixedRootAsCZMDynSampled(bb: flatbuffers.ByteBuffer, obj?: CZMDynSampled): CZMDynSampled;
    /**
     * Reference epoch (ISO 8601)
     */
    EPOCH(): string | null;
    EPOCH(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Value type determines stride through DATA
     */
    VALUE_TYPE(): CZMDynValueType;
    /**
     * Interleaved [time, value(s), ...] — stride depends on VALUE_TYPE
     */
    DATA(index: number): number | null;
    dataLength(): number;
    dataArray(): Float64Array | null;
    /**
     * Interpolation settings
     */
    INTERPOLATION(obj?: CZMInterpolation): CZMInterpolation | null;
    static startCZMDynSampled(builder: flatbuffers.Builder): void;
    static addEpoch(builder: flatbuffers.Builder, EPOCHOffset: flatbuffers.Offset): void;
    static addValueType(builder: flatbuffers.Builder, VALUE_TYPE: CZMDynValueType): void;
    static addData(builder: flatbuffers.Builder, DATAOffset: flatbuffers.Offset): void;
    static createDataVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createDataVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startDataVector(builder: flatbuffers.Builder, numElems: number): void;
    static addInterpolation(builder: flatbuffers.Builder, INTERPOLATIONOffset: flatbuffers.Offset): void;
    static endCZMDynSampled(builder: flatbuffers.Builder): flatbuffers.Offset;
    unpack(): CZMDynSampledT;
    unpackTo(_o: CZMDynSampledT): void;
}
export declare class CZMDynSampledT implements flatbuffers.IGeneratedObject {
    EPOCH: string | Uint8Array | null;
    VALUE_TYPE: CZMDynValueType;
    DATA: (number)[];
    INTERPOLATION: CZMInterpolationT | null;
    constructor(EPOCH?: string | Uint8Array | null, VALUE_TYPE?: CZMDynValueType, DATA?: (number)[], INTERPOLATION?: CZMInterpolationT | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=CZMDynSampled.d.ts.map