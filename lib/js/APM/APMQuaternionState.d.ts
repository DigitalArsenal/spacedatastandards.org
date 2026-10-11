import * as flatbuffers from 'flatbuffers';
/**
 * A quaternion state of an APM (CCSDS 504.0-B-2 Table 3-3): rotation from
 * REF_FRAME_A to REF_FRAME_B. The derivative is NaN when the message states none.
 */
export declare class APMQuaternionState implements flatbuffers.IUnpackableObject<APMQuaternionStateT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): APMQuaternionState;
    static getRootAsAPMQuaternionState(bb: flatbuffers.ByteBuffer, obj?: APMQuaternionState): APMQuaternionState;
    static getSizePrefixedRootAsAPMQuaternionState(bb: flatbuffers.ByteBuffer, obj?: APMQuaternionState): APMQuaternionState;
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
     * Q1 (vector part, x).
     */
    Q1(): number;
    /**
     * Q2 (vector part, y).
     */
    Q2(): number;
    /**
     * Q3 (vector part, z).
     */
    Q3(): number;
    /**
     * QC (scalar part).
     */
    QC(): number;
    /**
     * Q1_DOT in 1/s, NaN when not stated.
     */
    Q1_DOT(): number;
    /**
     * Q2_DOT in 1/s, NaN when not stated.
     */
    Q2_DOT(): number;
    /**
     * Q3_DOT in 1/s, NaN when not stated.
     */
    Q3_DOT(): number;
    /**
     * QC_DOT in 1/s, NaN when not stated.
     */
    QC_DOT(): number;
    static startAPMQuaternionState(builder: flatbuffers.Builder): void;
    static addComment(builder: flatbuffers.Builder, COMMENTOffset: flatbuffers.Offset): void;
    static addRefFrameA(builder: flatbuffers.Builder, REF_FRAME_AOffset: flatbuffers.Offset): void;
    static addRefFrameB(builder: flatbuffers.Builder, REF_FRAME_BOffset: flatbuffers.Offset): void;
    static addQ1(builder: flatbuffers.Builder, Q1: number): void;
    static addQ2(builder: flatbuffers.Builder, Q2: number): void;
    static addQ3(builder: flatbuffers.Builder, Q3: number): void;
    static addQc(builder: flatbuffers.Builder, QC: number): void;
    static addQ1Dot(builder: flatbuffers.Builder, Q1_DOT: number): void;
    static addQ2Dot(builder: flatbuffers.Builder, Q2_DOT: number): void;
    static addQ3Dot(builder: flatbuffers.Builder, Q3_DOT: number): void;
    static addQcDot(builder: flatbuffers.Builder, QC_DOT: number): void;
    static endAPMQuaternionState(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createAPMQuaternionState(builder: flatbuffers.Builder, COMMENTOffset: flatbuffers.Offset, REF_FRAME_AOffset: flatbuffers.Offset, REF_FRAME_BOffset: flatbuffers.Offset, Q1: number, Q2: number, Q3: number, QC: number, Q1_DOT: number, Q2_DOT: number, Q3_DOT: number, QC_DOT: number): flatbuffers.Offset;
    unpack(): APMQuaternionStateT;
    unpackTo(_o: APMQuaternionStateT): void;
}
export declare class APMQuaternionStateT implements flatbuffers.IGeneratedObject {
    COMMENT: string | Uint8Array | null;
    REF_FRAME_A: string | Uint8Array | null;
    REF_FRAME_B: string | Uint8Array | null;
    Q1: number;
    Q2: number;
    Q3: number;
    QC: number;
    Q1_DOT: number;
    Q2_DOT: number;
    Q3_DOT: number;
    QC_DOT: number;
    constructor(COMMENT?: string | Uint8Array | null, REF_FRAME_A?: string | Uint8Array | null, REF_FRAME_B?: string | Uint8Array | null, Q1?: number, Q2?: number, Q3?: number, QC?: number, Q1_DOT?: number, Q2_DOT?: number, Q3_DOT?: number, QC_DOT?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=APMQuaternionState.d.ts.map