import * as flatbuffers from 'flatbuffers';
import { attitudeDataLine, attitudeDataLineT } from './attitudeDataLine.js';
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
    /**
     * Plain-text comments carried in the metadata block (504.0-B-2 table 4-3).
     * One entry per COMMENT line, in file order.
     */
    COMMENT(index: number): string;
    COMMENT(index: number, optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    commentLength(): number;
    /**
     * Origin of the reference frame, e.g. "EARTH", "MARS BARYCENTER"
     * (504.0-B-2 table 4-3, optional).
     */
    CENTER_NAME(): string | null;
    CENTER_NAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Classification marking of the data in portion-marked format
     * (504.0-B-2 table 4-3, optional).
     */
    CLASSIFICATION(): string | null;
    CLASSIFICATION(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Start of the USEABLE time span covered by the data, ISO 8601.
     */
    USEABLE_START_TIME(): string | null;
    USEABLE_START_TIME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * End of the USEABLE time span covered by the data, ISO 8601.
     */
    USEABLE_STOP_TIME(): string | null;
    USEABLE_STOP_TIME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Rotation sequence defining the REF_FRAME_A to REF_FRAME_B transformation
     * when ATTITUDE_TYPE is an EULER_ANGLE variant, e.g. "312", "321".
     */
    EULER_ROT_SEQ(): string | null;
    EULER_ROT_SEQ(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Reference frame in which the ANGVEL_* components are expressed; the value
     * is "REF_FRAME_A" or "REF_FRAME_B" (504.0-B-2 table 4-3).
     * NOTE: the B-1 keyword RATE_FRAME does not exist in 504.0-B-2; ANGVEL_FRAME
     * is the ratified spelling and is the one carried here.
     */
    ANGVEL_FRAME(): string | null;
    ANGVEL_FRAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Recommended interpolation method, e.g. "HERMITE", "LINEAR", "LAGRANGE".
     */
    INTERPOLATION_METHOD(): string | null;
    INTERPOLATION_METHOD(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Recommended interpolation degree.
     */
    INTERPOLATION_DEGREE(): number;
    /**
     * Attitude data lines with EXPLICIT per-state epochs, for non-uniform steps.
     *
     * VALIDATION RULES (identical in form to $OEM, schema/OEM/main.fbs):
     * 1. If STEP_SIZE > 0, ATTITUDE_DATA is authoritative and
     *    ATTITUDE_DATA_LINES must be empty or ignored by parsers.
     * 2. If STEP_SIZE == 0 or is omitted, ATTITUDE_DATA_LINES is authoritative
     *    and ATTITUDE_DATA must be empty or ignored by parsers.
     * 3. Do NOT populate both formats simultaneously.
     */
    ATTITUDE_DATA_LINES(index: number, obj?: attitudeDataLine): attitudeDataLine | null;
    attitudeDataLinesLength(): number;
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
    static addComment(builder: flatbuffers.Builder, COMMENTOffset: flatbuffers.Offset): void;
    static createCommentVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startCommentVector(builder: flatbuffers.Builder, numElems: number): void;
    static addCenterName(builder: flatbuffers.Builder, CENTER_NAMEOffset: flatbuffers.Offset): void;
    static addClassification(builder: flatbuffers.Builder, CLASSIFICATIONOffset: flatbuffers.Offset): void;
    static addUseableStartTime(builder: flatbuffers.Builder, USEABLE_START_TIMEOffset: flatbuffers.Offset): void;
    static addUseableStopTime(builder: flatbuffers.Builder, USEABLE_STOP_TIMEOffset: flatbuffers.Offset): void;
    static addEulerRotSeq(builder: flatbuffers.Builder, EULER_ROT_SEQOffset: flatbuffers.Offset): void;
    static addAngvelFrame(builder: flatbuffers.Builder, ANGVEL_FRAMEOffset: flatbuffers.Offset): void;
    static addInterpolationMethod(builder: flatbuffers.Builder, INTERPOLATION_METHODOffset: flatbuffers.Offset): void;
    static addInterpolationDegree(builder: flatbuffers.Builder, INTERPOLATION_DEGREE: number): void;
    static addAttitudeDataLines(builder: flatbuffers.Builder, ATTITUDE_DATA_LINESOffset: flatbuffers.Offset): void;
    static createAttitudeDataLinesVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startAttitudeDataLinesVector(builder: flatbuffers.Builder, numElems: number): void;
    static endAEMSegment(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createAEMSegment(builder: flatbuffers.Builder, OBJECT_NAMEOffset: flatbuffers.Offset, OBJECT_IDOffset: flatbuffers.Offset, REF_FRAME_AOffset: flatbuffers.Offset, REF_FRAME_BOffset: flatbuffers.Offset, ATTITUDE_DIROffset: flatbuffers.Offset, TIME_SYSTEMOffset: flatbuffers.Offset, ATTITUDE_TYPEOffset: flatbuffers.Offset, START_TIMEOffset: flatbuffers.Offset, STOP_TIMEOffset: flatbuffers.Offset, STEP_SIZE: number, ATTITUDE_COMPONENTS: number, ATTITUDE_DATAOffset: flatbuffers.Offset, COMMENTOffset: flatbuffers.Offset, CENTER_NAMEOffset: flatbuffers.Offset, CLASSIFICATIONOffset: flatbuffers.Offset, USEABLE_START_TIMEOffset: flatbuffers.Offset, USEABLE_STOP_TIMEOffset: flatbuffers.Offset, EULER_ROT_SEQOffset: flatbuffers.Offset, ANGVEL_FRAMEOffset: flatbuffers.Offset, INTERPOLATION_METHODOffset: flatbuffers.Offset, INTERPOLATION_DEGREE: number, ATTITUDE_DATA_LINESOffset: flatbuffers.Offset): flatbuffers.Offset;
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
    COMMENT: (string)[];
    CENTER_NAME: string | Uint8Array | null;
    CLASSIFICATION: string | Uint8Array | null;
    USEABLE_START_TIME: string | Uint8Array | null;
    USEABLE_STOP_TIME: string | Uint8Array | null;
    EULER_ROT_SEQ: string | Uint8Array | null;
    ANGVEL_FRAME: string | Uint8Array | null;
    INTERPOLATION_METHOD: string | Uint8Array | null;
    INTERPOLATION_DEGREE: number;
    ATTITUDE_DATA_LINES: (attitudeDataLineT)[];
    constructor(OBJECT_NAME?: string | Uint8Array | null, OBJECT_ID?: string | Uint8Array | null, REF_FRAME_A?: string | Uint8Array | null, REF_FRAME_B?: string | Uint8Array | null, ATTITUDE_DIR?: string | Uint8Array | null, TIME_SYSTEM?: string | Uint8Array | null, ATTITUDE_TYPE?: string | Uint8Array | null, START_TIME?: string | Uint8Array | null, STOP_TIME?: string | Uint8Array | null, STEP_SIZE?: number, ATTITUDE_COMPONENTS?: number, ATTITUDE_DATA?: (number)[], COMMENT?: (string)[], CENTER_NAME?: string | Uint8Array | null, CLASSIFICATION?: string | Uint8Array | null, USEABLE_START_TIME?: string | Uint8Array | null, USEABLE_STOP_TIME?: string | Uint8Array | null, EULER_ROT_SEQ?: string | Uint8Array | null, ANGVEL_FRAME?: string | Uint8Array | null, INTERPOLATION_METHOD?: string | Uint8Array | null, INTERPOLATION_DEGREE?: number, ATTITUDE_DATA_LINES?: (attitudeDataLineT)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=AEMSegment.d.ts.map