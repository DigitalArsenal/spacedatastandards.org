import * as flatbuffers from 'flatbuffers';
import { ermMapMethod } from './ermMapMethod.js';
/**
 * A covariance to map through a state transition.
 */
export declare class ERMMapRequest implements flatbuffers.IUnpackableObject<ERMMapRequestT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): ERMMapRequest;
    static getRootAsERMMapRequest(bb: flatbuffers.ByteBuffer, obj?: ERMMapRequest): ERMMapRequest;
    static getSizePrefixedRootAsERMMapRequest(bb: flatbuffers.ByteBuffer, obj?: ERMMapRequest): ERMMapRequest;
    NORAD_CAT_ID(): number;
    /**
     * Anchor set epoch.
     */
    SET_EPOCH(): string | null;
    SET_EPOCH(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Covariance, Lower21 RTN (km, km/s).
     */
    COVARIANCE(index: number): number | null;
    covarianceLength(): number;
    covarianceArray(): Float64Array | null;
    /**
     * Target epochs.
     */
    TO_EPOCHS(index: number): string;
    TO_EPOCHS(index: number, optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    toEpochsLength(): number;
    /**
     * Covariance epoch; empty = the set epoch.
     */
    FROM_EPOCH(): string | null;
    FROM_EPOCH(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    METHOD(): ermMapMethod;
    /**
     * Report the STM.
     */
    INCLUDE_STM(): boolean;
    /**
     * Set whose state at FROM_EPOCH defines the input axes; empty = the anchor.
     */
    AXES_SET(): string | null;
    AXES_SET(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    static startERMMapRequest(builder: flatbuffers.Builder): void;
    static addNoradCatId(builder: flatbuffers.Builder, NORAD_CAT_ID: number): void;
    static addSetEpoch(builder: flatbuffers.Builder, SET_EPOCHOffset: flatbuffers.Offset): void;
    static addCovariance(builder: flatbuffers.Builder, COVARIANCEOffset: flatbuffers.Offset): void;
    static createCovarianceVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createCovarianceVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startCovarianceVector(builder: flatbuffers.Builder, numElems: number): void;
    static addToEpochs(builder: flatbuffers.Builder, TO_EPOCHSOffset: flatbuffers.Offset): void;
    static createToEpochsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startToEpochsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addFromEpoch(builder: flatbuffers.Builder, FROM_EPOCHOffset: flatbuffers.Offset): void;
    static addMethod(builder: flatbuffers.Builder, METHOD: ermMapMethod): void;
    static addIncludeStm(builder: flatbuffers.Builder, INCLUDE_STM: boolean): void;
    static addAxesSet(builder: flatbuffers.Builder, AXES_SETOffset: flatbuffers.Offset): void;
    static endERMMapRequest(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createERMMapRequest(builder: flatbuffers.Builder, NORAD_CAT_ID: number, SET_EPOCHOffset: flatbuffers.Offset, COVARIANCEOffset: flatbuffers.Offset, TO_EPOCHSOffset: flatbuffers.Offset, FROM_EPOCHOffset: flatbuffers.Offset, METHOD: ermMapMethod, INCLUDE_STM: boolean, AXES_SETOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): ERMMapRequestT;
    unpackTo(_o: ERMMapRequestT): void;
}
export declare class ERMMapRequestT implements flatbuffers.IGeneratedObject {
    NORAD_CAT_ID: number;
    SET_EPOCH: string | Uint8Array | null;
    COVARIANCE: (number)[];
    TO_EPOCHS: (string)[];
    FROM_EPOCH: string | Uint8Array | null;
    METHOD: ermMapMethod;
    INCLUDE_STM: boolean;
    AXES_SET: string | Uint8Array | null;
    constructor(NORAD_CAT_ID?: number, SET_EPOCH?: string | Uint8Array | null, COVARIANCE?: (number)[], TO_EPOCHS?: (string)[], FROM_EPOCH?: string | Uint8Array | null, METHOD?: ermMapMethod, INCLUDE_STM?: boolean, AXES_SET?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=ERMMapRequest.d.ts.map