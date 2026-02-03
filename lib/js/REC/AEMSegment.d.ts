import * as flatbuffers from 'flatbuffers';
export declare class AEMSegment implements flatbuffers.IUnpackableObject<AEMSegmentT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): AEMSegment;
    static getRootAsAEMSegment(bb: flatbuffers.ByteBuffer, obj?: AEMSegment): AEMSegment;
    static getSizePrefixedRootAsAEMSegment(bb: flatbuffers.ByteBuffer, obj?: AEMSegment): AEMSegment;
    OBJECT_NAME(): string | null;
    OBJECT_NAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    OBJECT_ID(): string | null;
    OBJECT_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    REF_FRAME_A(): string | null;
    REF_FRAME_A(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    REF_FRAME_B(): string | null;
    REF_FRAME_B(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    ATTITUDE_DIR(): string | null;
    ATTITUDE_DIR(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    TIME_SYSTEM(): string | null;
    TIME_SYSTEM(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    ATTITUDE_TYPE(): string | null;
    ATTITUDE_TYPE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    START_TIME(): string | null;
    START_TIME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    STOP_TIME(): string | null;
    STOP_TIME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Time interval between attitude states in seconds (required).
     */
    STEP_SIZE(): number;
    /**
     * Number of components per attitude state.
     * 7 = quaternion + angular rates (Q1, Q2, Q3, QC, RATE_X, RATE_Y, RATE_Z)
     * 4 = quaternion only (Q1, Q2, Q3, QC)
     */
    ATTITUDE_COMPONENTS(): number;
    /**
     * Attitude data as row-major array of doubles.
     * Layout: [Q1_0, Q2_0, Q3_0, QC_0, RATE_X_0, RATE_Y_0, RATE_Z_0, Q1_1, ...]
     * Time reconstruction: epoch[i] = START_TIME + (i * STEP_SIZE)
     * Length must be divisible by ATTITUDE_COMPONENTS.
     */
    ATTITUDE_DATA(index: number): number | null;
    attitudeDataLength(): number;
    attitudeDataArray(): Float64Array | null;
    static startAEMSegment(builder: flatbuffers.Builder): void;
    static addObjectName(builder: flatbuffers.Builder, OBJECT_NAMEOffset: flatbuffers.Offset): void;
    static addObjectId(builder: flatbuffers.Builder, OBJECT_IDOffset: flatbuffers.Offset): void;
    static addRefFrameA(builder: flatbuffers.Builder, REF_FRAME_AOffset: flatbuffers.Offset): void;
    static addRefFrameB(builder: flatbuffers.Builder, REF_FRAME_BOffset: flatbuffers.Offset): void;
    static addAttitudeDir(builder: flatbuffers.Builder, ATTITUDE_DIROffset: flatbuffers.Offset): void;
    static addTimeSystem(builder: flatbuffers.Builder, TIME_SYSTEMOffset: flatbuffers.Offset): void;
    static addAttitudeType(builder: flatbuffers.Builder, ATTITUDE_TYPEOffset: flatbuffers.Offset): void;
    static addStartTime(builder: flatbuffers.Builder, START_TIMEOffset: flatbuffers.Offset): void;
    static addStopTime(builder: flatbuffers.Builder, STOP_TIMEOffset: flatbuffers.Offset): void;
    static addStepSize(builder: flatbuffers.Builder, STEP_SIZE: number): void;
    static addAttitudeComponents(builder: flatbuffers.Builder, ATTITUDE_COMPONENTS: number): void;
    static addAttitudeData(builder: flatbuffers.Builder, ATTITUDE_DATAOffset: flatbuffers.Offset): void;
    static createAttitudeDataVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createAttitudeDataVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startAttitudeDataVector(builder: flatbuffers.Builder, numElems: number): void;
    static endAEMSegment(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createAEMSegment(builder: flatbuffers.Builder, OBJECT_NAMEOffset: flatbuffers.Offset, OBJECT_IDOffset: flatbuffers.Offset, REF_FRAME_AOffset: flatbuffers.Offset, REF_FRAME_BOffset: flatbuffers.Offset, ATTITUDE_DIROffset: flatbuffers.Offset, TIME_SYSTEMOffset: flatbuffers.Offset, ATTITUDE_TYPEOffset: flatbuffers.Offset, START_TIMEOffset: flatbuffers.Offset, STOP_TIMEOffset: flatbuffers.Offset, STEP_SIZE: number, ATTITUDE_COMPONENTS: number, ATTITUDE_DATAOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): AEMSegmentT;
    unpackTo(_o: AEMSegmentT): void;
}
export declare class AEMSegmentT implements flatbuffers.IGeneratedObject {
    OBJECT_NAME: string | Uint8Array | null;
    OBJECT_ID: string | Uint8Array | null;
    REF_FRAME_A: string | Uint8Array | null;
    REF_FRAME_B: string | Uint8Array | null;
    ATTITUDE_DIR: string | Uint8Array | null;
    TIME_SYSTEM: string | Uint8Array | null;
    ATTITUDE_TYPE: string | Uint8Array | null;
    START_TIME: string | Uint8Array | null;
    STOP_TIME: string | Uint8Array | null;
    STEP_SIZE: number;
    ATTITUDE_COMPONENTS: number;
    ATTITUDE_DATA: (number)[];
    constructor(OBJECT_NAME?: string | Uint8Array | null, OBJECT_ID?: string | Uint8Array | null, REF_FRAME_A?: string | Uint8Array | null, REF_FRAME_B?: string | Uint8Array | null, ATTITUDE_DIR?: string | Uint8Array | null, TIME_SYSTEM?: string | Uint8Array | null, ATTITUDE_TYPE?: string | Uint8Array | null, START_TIME?: string | Uint8Array | null, STOP_TIME?: string | Uint8Array | null, STEP_SIZE?: number, ATTITUDE_COMPONENTS?: number, ATTITUDE_DATA?: (number)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=AEMSegment.d.ts.map