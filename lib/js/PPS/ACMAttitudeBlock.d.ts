import * as flatbuffers from 'flatbuffers';
/**
 * One attitude state time history of an ACM (CCSDS 504.0-B-2 Table 5-4): the
 * block's keywords, then its data lines as TIMES (the first column of each line,
 * elapsed seconds from EPOCH_TZERO or an epoch, as written) and VALUES (the other
 * columns, NUMBER_STATES per line, row by row).
 */
export declare class ACMAttitudeBlock implements flatbuffers.IUnpackableObject<ACMAttitudeBlockT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): ACMAttitudeBlock;
    static getRootAsACMAttitudeBlock(bb: flatbuffers.ByteBuffer, obj?: ACMAttitudeBlock): ACMAttitudeBlock;
    static getSizePrefixedRootAsACMAttitudeBlock(bb: flatbuffers.ByteBuffer, obj?: ACMAttitudeBlock): ACMAttitudeBlock;
    /**
     * COMMENT lines of this block, joined by a line feed.
     */
    COMMENT(): string | null;
    COMMENT(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * ATT_ID.
     */
    ATT_ID(): string | null;
    ATT_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * ATT_PREV_ID.
     */
    ATT_PREV_ID(): string | null;
    ATT_PREV_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * ATT_BASIS: PREDICTED, DETERMINED_GND, DETERMINED_OBC or SIMULATED.
     */
    ATT_BASIS(): string | null;
    ATT_BASIS(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * ATT_BASIS_ID.
     */
    ATT_BASIS_ID(): string | null;
    ATT_BASIS_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * REF_FRAME_A: the frame the transformation starts from.
     */
    REF_FRAME_A(): string | null;
    REF_FRAME_A(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * REF_FRAME_B: the frame the transformation ends in.
     */
    REF_FRAME_B(): string | null;
    REF_FRAME_B(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * NUMBER_STATES: the data columns on each line (attitude, then rate).
     */
    NUMBER_STATES(): number;
    /**
     * ATT_TYPE: QUATERNION, EULER_ANGLES, DCM or ANGVEL.
     */
    ATT_TYPE(): string | null;
    ATT_TYPE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * EULER_ROT_SEQ, when ATT_TYPE is EULER_ANGLES.
     */
    EULER_ROT_SEQ(): string | null;
    EULER_ROT_SEQ(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * RATE_TYPE: ANGVEL, Q_DOT, EULER_RATE or GYRO_BIAS, when the lines carry rates.
     */
    RATE_TYPE(): string | null;
    RATE_TYPE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * The first column of each data line, as written.
     */
    TIMES(index: number): string;
    TIMES(index: number, optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    timesLength(): number;
    /**
     * The other columns of the data lines, NUMBER_STATES per line.
     */
    VALUES(index: number): number | null;
    valuesLength(): number;
    valuesArray(): Float64Array | null;
    static startACMAttitudeBlock(builder: flatbuffers.Builder): void;
    static addComment(builder: flatbuffers.Builder, COMMENTOffset: flatbuffers.Offset): void;
    static addAttId(builder: flatbuffers.Builder, ATT_IDOffset: flatbuffers.Offset): void;
    static addAttPrevId(builder: flatbuffers.Builder, ATT_PREV_IDOffset: flatbuffers.Offset): void;
    static addAttBasis(builder: flatbuffers.Builder, ATT_BASISOffset: flatbuffers.Offset): void;
    static addAttBasisId(builder: flatbuffers.Builder, ATT_BASIS_IDOffset: flatbuffers.Offset): void;
    static addRefFrameA(builder: flatbuffers.Builder, REF_FRAME_AOffset: flatbuffers.Offset): void;
    static addRefFrameB(builder: flatbuffers.Builder, REF_FRAME_BOffset: flatbuffers.Offset): void;
    static addNumberStates(builder: flatbuffers.Builder, NUMBER_STATES: number): void;
    static addAttType(builder: flatbuffers.Builder, ATT_TYPEOffset: flatbuffers.Offset): void;
    static addEulerRotSeq(builder: flatbuffers.Builder, EULER_ROT_SEQOffset: flatbuffers.Offset): void;
    static addRateType(builder: flatbuffers.Builder, RATE_TYPEOffset: flatbuffers.Offset): void;
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
    static endACMAttitudeBlock(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createACMAttitudeBlock(builder: flatbuffers.Builder, COMMENTOffset: flatbuffers.Offset, ATT_IDOffset: flatbuffers.Offset, ATT_PREV_IDOffset: flatbuffers.Offset, ATT_BASISOffset: flatbuffers.Offset, ATT_BASIS_IDOffset: flatbuffers.Offset, REF_FRAME_AOffset: flatbuffers.Offset, REF_FRAME_BOffset: flatbuffers.Offset, NUMBER_STATES: number, ATT_TYPEOffset: flatbuffers.Offset, EULER_ROT_SEQOffset: flatbuffers.Offset, RATE_TYPEOffset: flatbuffers.Offset, TIMESOffset: flatbuffers.Offset, VALUESOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): ACMAttitudeBlockT;
    unpackTo(_o: ACMAttitudeBlockT): void;
}
export declare class ACMAttitudeBlockT implements flatbuffers.IGeneratedObject {
    COMMENT: string | Uint8Array | null;
    ATT_ID: string | Uint8Array | null;
    ATT_PREV_ID: string | Uint8Array | null;
    ATT_BASIS: string | Uint8Array | null;
    ATT_BASIS_ID: string | Uint8Array | null;
    REF_FRAME_A: string | Uint8Array | null;
    REF_FRAME_B: string | Uint8Array | null;
    NUMBER_STATES: number;
    ATT_TYPE: string | Uint8Array | null;
    EULER_ROT_SEQ: string | Uint8Array | null;
    RATE_TYPE: string | Uint8Array | null;
    TIMES: (string)[];
    VALUES: (number)[];
    constructor(COMMENT?: string | Uint8Array | null, ATT_ID?: string | Uint8Array | null, ATT_PREV_ID?: string | Uint8Array | null, ATT_BASIS?: string | Uint8Array | null, ATT_BASIS_ID?: string | Uint8Array | null, REF_FRAME_A?: string | Uint8Array | null, REF_FRAME_B?: string | Uint8Array | null, NUMBER_STATES?: number, ATT_TYPE?: string | Uint8Array | null, EULER_ROT_SEQ?: string | Uint8Array | null, RATE_TYPE?: string | Uint8Array | null, TIMES?: (string)[], VALUES?: (number)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=ACMAttitudeBlock.d.ts.map