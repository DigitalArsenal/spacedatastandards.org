import * as flatbuffers from 'flatbuffers';
/**
 * One covariance time history of an ACM (Table 5-6): the diagonal terms of the
 * covariance on each line, as TIMES and VALUES like ACMAttitudeBlock; every line
 * has the same number of values.
 */
export declare class ACMCovarianceBlock implements flatbuffers.IUnpackableObject<ACMCovarianceBlockT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): ACMCovarianceBlock;
    static getRootAsACMCovarianceBlock(bb: flatbuffers.ByteBuffer, obj?: ACMCovarianceBlock): ACMCovarianceBlock;
    static getSizePrefixedRootAsACMCovarianceBlock(bb: flatbuffers.ByteBuffer, obj?: ACMCovarianceBlock): ACMCovarianceBlock;
    /**
     * COMMENT lines of this block, joined by a line feed.
     */
    COMMENT(): string | null;
    COMMENT(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * COV_ID.
     */
    COV_ID(): string | null;
    COV_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * COV_PREV_ID.
     */
    COV_PREV_ID(): string | null;
    COV_PREV_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * COV_BASIS.
     */
    COV_BASIS(): string | null;
    COV_BASIS(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * COV_BASIS_ID.
     */
    COV_BASIS_ID(): string | null;
    COV_BASIS_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * COV_REF_FRAME.
     */
    COV_REF_FRAME(): string | null;
    COV_REF_FRAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * COV_TYPE: ANGLE, ANGLE_GYROBIAS, ANGLE_ANGVEL, QUATERNION, QUATERNION_GYROBIAS
     * or QUATERNION_ANGVEL.
     */
    COV_TYPE(): string | null;
    COV_TYPE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * The first column of each data line, as written.
     */
    TIMES(index: number): string;
    TIMES(index: number, optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    timesLength(): number;
    /**
     * The diagonal terms of each line, row by row.
     */
    VALUES(index: number): number | null;
    valuesLength(): number;
    valuesArray(): Float64Array | null;
    static startACMCovarianceBlock(builder: flatbuffers.Builder): void;
    static addComment(builder: flatbuffers.Builder, COMMENTOffset: flatbuffers.Offset): void;
    static addCovId(builder: flatbuffers.Builder, COV_IDOffset: flatbuffers.Offset): void;
    static addCovPrevId(builder: flatbuffers.Builder, COV_PREV_IDOffset: flatbuffers.Offset): void;
    static addCovBasis(builder: flatbuffers.Builder, COV_BASISOffset: flatbuffers.Offset): void;
    static addCovBasisId(builder: flatbuffers.Builder, COV_BASIS_IDOffset: flatbuffers.Offset): void;
    static addCovRefFrame(builder: flatbuffers.Builder, COV_REF_FRAMEOffset: flatbuffers.Offset): void;
    static addCovType(builder: flatbuffers.Builder, COV_TYPEOffset: flatbuffers.Offset): void;
    static addTimes(builder: flatbuffers.Builder, TIMESOffset: flatbuffers.Offset): void;
    static createTimesVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startTimesVector(builder: flatbuffers.Builder, numElems: number): void;
    static addValues(builder: flatbuffers.Builder, VALUESOffset: flatbuffers.Offset): void;
    static createValuesVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createValuesVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startValuesVector(builder: flatbuffers.Builder, numElems: number): void;
    static endACMCovarianceBlock(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createACMCovarianceBlock(builder: flatbuffers.Builder, COMMENTOffset: flatbuffers.Offset, COV_IDOffset: flatbuffers.Offset, COV_PREV_IDOffset: flatbuffers.Offset, COV_BASISOffset: flatbuffers.Offset, COV_BASIS_IDOffset: flatbuffers.Offset, COV_REF_FRAMEOffset: flatbuffers.Offset, COV_TYPEOffset: flatbuffers.Offset, TIMESOffset: flatbuffers.Offset, VALUESOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): ACMCovarianceBlockT;
    unpackTo(_o: ACMCovarianceBlockT): void;
}
export declare class ACMCovarianceBlockT implements flatbuffers.IGeneratedObject {
    COMMENT: string | Uint8Array | null;
    COV_ID: string | Uint8Array | null;
    COV_PREV_ID: string | Uint8Array | null;
    COV_BASIS: string | Uint8Array | null;
    COV_BASIS_ID: string | Uint8Array | null;
    COV_REF_FRAME: string | Uint8Array | null;
    COV_TYPE: string | Uint8Array | null;
    TIMES: (string)[];
    VALUES: (number)[];
    constructor(COMMENT?: string | Uint8Array | null, COV_ID?: string | Uint8Array | null, COV_PREV_ID?: string | Uint8Array | null, COV_BASIS?: string | Uint8Array | null, COV_BASIS_ID?: string | Uint8Array | null, COV_REF_FRAME?: string | Uint8Array | null, COV_TYPE?: string | Uint8Array | null, TIMES?: (string)[], VALUES?: (number)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=ACMCovarianceBlock.d.ts.map