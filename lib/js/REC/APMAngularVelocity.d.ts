import * as flatbuffers from 'flatbuffers';
/**
 * An angular velocity of an APM (ANGVEL_START block), in deg/s.
 */
export declare class APMAngularVelocity implements flatbuffers.IUnpackableObject<APMAngularVelocityT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): APMAngularVelocity;
    static getRootAsAPMAngularVelocity(bb: flatbuffers.ByteBuffer, obj?: APMAngularVelocity): APMAngularVelocity;
    static getSizePrefixedRootAsAPMAngularVelocity(bb: flatbuffers.ByteBuffer, obj?: APMAngularVelocity): APMAngularVelocity;
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
     * ANGVEL_FRAME: the frame the components are in.
     */
    ANGVEL_FRAME(): string | null;
    ANGVEL_FRAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * ANGVEL_X in deg/s.
     */
    ANGVEL_X(): number;
    /**
     * ANGVEL_Y in deg/s.
     */
    ANGVEL_Y(): number;
    /**
     * ANGVEL_Z in deg/s.
     */
    ANGVEL_Z(): number;
    static startAPMAngularVelocity(builder: flatbuffers.Builder): void;
    static addComment(builder: flatbuffers.Builder, COMMENTOffset: flatbuffers.Offset): void;
    static addRefFrameA(builder: flatbuffers.Builder, REF_FRAME_AOffset: flatbuffers.Offset): void;
    static addRefFrameB(builder: flatbuffers.Builder, REF_FRAME_BOffset: flatbuffers.Offset): void;
    static addAngvelFrame(builder: flatbuffers.Builder, ANGVEL_FRAMEOffset: flatbuffers.Offset): void;
    static addAngvelX(builder: flatbuffers.Builder, ANGVEL_X: number): void;
    static addAngvelY(builder: flatbuffers.Builder, ANGVEL_Y: number): void;
    static addAngvelZ(builder: flatbuffers.Builder, ANGVEL_Z: number): void;
    static endAPMAngularVelocity(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createAPMAngularVelocity(builder: flatbuffers.Builder, COMMENTOffset: flatbuffers.Offset, REF_FRAME_AOffset: flatbuffers.Offset, REF_FRAME_BOffset: flatbuffers.Offset, ANGVEL_FRAMEOffset: flatbuffers.Offset, ANGVEL_X: number, ANGVEL_Y: number, ANGVEL_Z: number): flatbuffers.Offset;
    unpack(): APMAngularVelocityT;
    unpackTo(_o: APMAngularVelocityT): void;
}
export declare class APMAngularVelocityT implements flatbuffers.IGeneratedObject {
    COMMENT: string | Uint8Array | null;
    REF_FRAME_A: string | Uint8Array | null;
    REF_FRAME_B: string | Uint8Array | null;
    ANGVEL_FRAME: string | Uint8Array | null;
    ANGVEL_X: number;
    ANGVEL_Y: number;
    ANGVEL_Z: number;
    constructor(COMMENT?: string | Uint8Array | null, REF_FRAME_A?: string | Uint8Array | null, REF_FRAME_B?: string | Uint8Array | null, ANGVEL_FRAME?: string | Uint8Array | null, ANGVEL_X?: number, ANGVEL_Y?: number, ANGVEL_Z?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=APMAngularVelocity.d.ts.map