import * as flatbuffers from 'flatbuffers';
import { FRMStateVector, FRMStateVectorT } from './FRMStateVector.js';
export declare class ODRFilterEpoch implements flatbuffers.IUnpackableObject<ODRFilterEpochT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): ODRFilterEpoch;
    static getRootAsODRFilterEpoch(bb: flatbuffers.ByteBuffer, obj?: ODRFilterEpoch): ODRFilterEpoch;
    static getSizePrefixedRootAsODRFilterEpoch(bb: flatbuffers.ByteBuffer, obj?: ODRFilterEpoch): ODRFilterEpoch;
    EPOCH(): string | null;
    EPOCH(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    FILTERED_STATE(obj?: FRMStateVector): FRMStateVector | null;
    FILTERED_COVARIANCE(index: number): number | null;
    filteredCovarianceLength(): number;
    filteredCovarianceArray(): Float64Array | null;
    SMOOTHED_STATE(obj?: FRMStateVector): FRMStateVector | null;
    SMOOTHED_COVARIANCE(index: number): number | null;
    smoothedCovarianceLength(): number;
    smoothedCovarianceArray(): Float64Array | null;
    NORMALIZED_INNOVATION_SQUARED(): number;
    static startODRFilterEpoch(builder: flatbuffers.Builder): void;
    static addEpoch(builder: flatbuffers.Builder, EPOCHOffset: flatbuffers.Offset): void;
    static addFilteredState(builder: flatbuffers.Builder, FILTERED_STATEOffset: flatbuffers.Offset): void;
    static addFilteredCovariance(builder: flatbuffers.Builder, FILTERED_COVARIANCEOffset: flatbuffers.Offset): void;
    static createFilteredCovarianceVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createFilteredCovarianceVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startFilteredCovarianceVector(builder: flatbuffers.Builder, numElems: number): void;
    static addSmoothedState(builder: flatbuffers.Builder, SMOOTHED_STATEOffset: flatbuffers.Offset): void;
    static addSmoothedCovariance(builder: flatbuffers.Builder, SMOOTHED_COVARIANCEOffset: flatbuffers.Offset): void;
    static createSmoothedCovarianceVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createSmoothedCovarianceVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startSmoothedCovarianceVector(builder: flatbuffers.Builder, numElems: number): void;
    static addNormalizedInnovationSquared(builder: flatbuffers.Builder, NORMALIZED_INNOVATION_SQUARED: number): void;
    static endODRFilterEpoch(builder: flatbuffers.Builder): flatbuffers.Offset;
    unpack(): ODRFilterEpochT;
    unpackTo(_o: ODRFilterEpochT): void;
}
export declare class ODRFilterEpochT implements flatbuffers.IGeneratedObject {
    EPOCH: string | Uint8Array | null;
    FILTERED_STATE: FRMStateVectorT | null;
    FILTERED_COVARIANCE: (number)[];
    SMOOTHED_STATE: FRMStateVectorT | null;
    SMOOTHED_COVARIANCE: (number)[];
    NORMALIZED_INNOVATION_SQUARED: number;
    constructor(EPOCH?: string | Uint8Array | null, FILTERED_STATE?: FRMStateVectorT | null, FILTERED_COVARIANCE?: (number)[], SMOOTHED_STATE?: FRMStateVectorT | null, SMOOTHED_COVARIANCE?: (number)[], NORMALIZED_INNOVATION_SQUARED?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=ODRFilterEpoch.d.ts.map