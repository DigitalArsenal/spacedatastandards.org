import * as flatbuffers from 'flatbuffers';
/**
 * A screening case: two objects' position errors and covariances.
 */
export declare class ERMScreeningCase implements flatbuffers.IUnpackableObject<ERMScreeningCaseT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): ERMScreeningCase;
    static getRootAsERMScreeningCase(bb: flatbuffers.ByteBuffer, obj?: ERMScreeningCase): ERMScreeningCase;
    static getSizePrefixedRootAsERMScreeningCase(bb: flatbuffers.ByteBuffer, obj?: ERMScreeningCase): ERMScreeningCase;
    /**
     * RTN position errors, km (3 values each).
     */
    ERROR1_KM(index: number): number | null;
    error1KmLength(): number;
    error1KmArray(): Float64Array | null;
    ERROR2_KM(index: number): number | null;
    error2KmLength(): number;
    error2KmArray(): Float64Array | null;
    /**
     * Position covariances, Lower6, km**2.
     */
    COVARIANCE1_KM2(index: number): number | null;
    covariance1Km2Length(): number;
    covariance1Km2Array(): Float64Array | null;
    COVARIANCE2_KM2(index: number): number | null;
    covariance2Km2Length(): number;
    covariance2Km2Array(): Float64Array | null;
    static startERMScreeningCase(builder: flatbuffers.Builder): void;
    static addError1Km(builder: flatbuffers.Builder, ERROR1_KMOffset: flatbuffers.Offset): void;
    static createError1KmVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createError1KmVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startError1KmVector(builder: flatbuffers.Builder, numElems: number): void;
    static addError2Km(builder: flatbuffers.Builder, ERROR2_KMOffset: flatbuffers.Offset): void;
    static createError2KmVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createError2KmVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startError2KmVector(builder: flatbuffers.Builder, numElems: number): void;
    static addCovariance1Km2(builder: flatbuffers.Builder, COVARIANCE1_KM2Offset: flatbuffers.Offset): void;
    static createCovariance1Km2Vector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createCovariance1Km2Vector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startCovariance1Km2Vector(builder: flatbuffers.Builder, numElems: number): void;
    static addCovariance2Km2(builder: flatbuffers.Builder, COVARIANCE2_KM2Offset: flatbuffers.Offset): void;
    static createCovariance2Km2Vector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createCovariance2Km2Vector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startCovariance2Km2Vector(builder: flatbuffers.Builder, numElems: number): void;
    static endERMScreeningCase(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createERMScreeningCase(builder: flatbuffers.Builder, ERROR1_KMOffset: flatbuffers.Offset, ERROR2_KMOffset: flatbuffers.Offset, COVARIANCE1_KM2Offset: flatbuffers.Offset, COVARIANCE2_KM2Offset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): ERMScreeningCaseT;
    unpackTo(_o: ERMScreeningCaseT): void;
}
export declare class ERMScreeningCaseT implements flatbuffers.IGeneratedObject {
    ERROR1_KM: (number)[];
    ERROR2_KM: (number)[];
    COVARIANCE1_KM2: (number)[];
    COVARIANCE2_KM2: (number)[];
    constructor(ERROR1_KM?: (number)[], ERROR2_KM?: (number)[], COVARIANCE1_KM2?: (number)[], COVARIANCE2_KM2?: (number)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=ERMScreeningCase.d.ts.map