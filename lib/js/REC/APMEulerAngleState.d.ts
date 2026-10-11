import * as flatbuffers from 'flatbuffers';
/**
 * An Euler angle state of an APM (EULER_START block). Angles in degrees; a rate
 * is NaN when the message states none.
 */
export declare class APMEulerAngleState implements flatbuffers.IUnpackableObject<APMEulerAngleStateT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): APMEulerAngleState;
    static getRootAsAPMEulerAngleState(bb: flatbuffers.ByteBuffer, obj?: APMEulerAngleState): APMEulerAngleState;
    static getSizePrefixedRootAsAPMEulerAngleState(bb: flatbuffers.ByteBuffer, obj?: APMEulerAngleState): APMEulerAngleState;
    /**
     * COMMENT lines of this block, joined by a line feed.
     */
    COMMENT(): string | null;
    COMMENT(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * REF_FRAME_A: the frame the rotation starts from.
     */
    REF_FRAME_A(): string | null;
    REF_FRAME_A(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * REF_FRAME_B: the frame the rotation ends in.
     */
    REF_FRAME_B(): string | null;
    REF_FRAME_B(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * EULER_ROT_SEQ: the rotation sequence, for example ZXZ.
     */
    EULER_ROT_SEQ(): string | null;
    EULER_ROT_SEQ(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * ANGLE_1 in degrees.
     */
    ANGLE_1(): number;
    /**
     * ANGLE_2 in degrees.
     */
    ANGLE_2(): number;
    /**
     * ANGLE_3 in degrees.
     */
    ANGLE_3(): number;
    /**
     * ANGLE_1_DOT in deg/s, NaN when not stated.
     */
    ANGLE_1_DOT(): number;
    /**
     * ANGLE_2_DOT in deg/s, NaN when not stated.
     */
    ANGLE_2_DOT(): number;
    /**
     * ANGLE_3_DOT in deg/s, NaN when not stated.
     */
    ANGLE_3_DOT(): number;
    static startAPMEulerAngleState(builder: flatbuffers.Builder): void;
    static addComment(builder: flatbuffers.Builder, COMMENTOffset: flatbuffers.Offset): void;
    static addRefFrameA(builder: flatbuffers.Builder, REF_FRAME_AOffset: flatbuffers.Offset): void;
    static addRefFrameB(builder: flatbuffers.Builder, REF_FRAME_BOffset: flatbuffers.Offset): void;
    static addEulerRotSeq(builder: flatbuffers.Builder, EULER_ROT_SEQOffset: flatbuffers.Offset): void;
    static addAngle1(builder: flatbuffers.Builder, ANGLE_1: number): void;
    static addAngle2(builder: flatbuffers.Builder, ANGLE_2: number): void;
    static addAngle3(builder: flatbuffers.Builder, ANGLE_3: number): void;
    static addAngle1Dot(builder: flatbuffers.Builder, ANGLE_1_DOT: number): void;
    static addAngle2Dot(builder: flatbuffers.Builder, ANGLE_2_DOT: number): void;
    static addAngle3Dot(builder: flatbuffers.Builder, ANGLE_3_DOT: number): void;
    static endAPMEulerAngleState(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createAPMEulerAngleState(builder: flatbuffers.Builder, COMMENTOffset: flatbuffers.Offset, REF_FRAME_AOffset: flatbuffers.Offset, REF_FRAME_BOffset: flatbuffers.Offset, EULER_ROT_SEQOffset: flatbuffers.Offset, ANGLE_1: number, ANGLE_2: number, ANGLE_3: number, ANGLE_1_DOT: number, ANGLE_2_DOT: number, ANGLE_3_DOT: number): flatbuffers.Offset;
    unpack(): APMEulerAngleStateT;
    unpackTo(_o: APMEulerAngleStateT): void;
}
export declare class APMEulerAngleStateT implements flatbuffers.IGeneratedObject {
    COMMENT: string | Uint8Array | null;
    REF_FRAME_A: string | Uint8Array | null;
    REF_FRAME_B: string | Uint8Array | null;
    EULER_ROT_SEQ: string | Uint8Array | null;
    ANGLE_1: number;
    ANGLE_2: number;
    ANGLE_3: number;
    ANGLE_1_DOT: number;
    ANGLE_2_DOT: number;
    ANGLE_3_DOT: number;
    constructor(COMMENT?: string | Uint8Array | null, REF_FRAME_A?: string | Uint8Array | null, REF_FRAME_B?: string | Uint8Array | null, EULER_ROT_SEQ?: string | Uint8Array | null, ANGLE_1?: number, ANGLE_2?: number, ANGLE_3?: number, ANGLE_1_DOT?: number, ANGLE_2_DOT?: number, ANGLE_3_DOT?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=APMEulerAngleState.d.ts.map