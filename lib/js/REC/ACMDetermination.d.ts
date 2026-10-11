import * as flatbuffers from 'flatbuffers';
import { ACMSensor, ACMSensorT } from './ACMSensor.js';
/**
 * The attitude determination data of an ACM (Table 5-8).
 */
export declare class ACMDetermination implements flatbuffers.IUnpackableObject<ACMDeterminationT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): ACMDetermination;
    static getRootAsACMDetermination(bb: flatbuffers.ByteBuffer, obj?: ACMDetermination): ACMDetermination;
    static getSizePrefixedRootAsACMDetermination(bb: flatbuffers.ByteBuffer, obj?: ACMDetermination): ACMDetermination;
    /**
     * COMMENT lines of this block, joined by a line feed.
     */
    COMMENT(): string | null;
    COMMENT(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * AD_ID.
     */
    AD_ID(): string | null;
    AD_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * AD_PREV_ID.
     */
    AD_PREV_ID(): string | null;
    AD_PREV_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * AD_METHOD: for example EKF, TRIAD or QUEST.
     */
    AD_METHOD(): string | null;
    AD_METHOD(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * ATTITUDE_SOURCE.
     */
    ATTITUDE_SOURCE(): string | null;
    ATTITUDE_SOURCE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * NUMBER_STATES.
     */
    NUMBER_STATES(): number;
    /**
     * ATTITUDE_STATES: QUATERNION, EULER_ANGLES, DCM or ANGVEL.
     */
    ATTITUDE_STATES(): string | null;
    ATTITUDE_STATES(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * EULER_ROT_SEQ.
     */
    EULER_ROT_SEQ(): string | null;
    EULER_ROT_SEQ(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * COV_TYPE.
     */
    COV_TYPE(): string | null;
    COV_TYPE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * REF_FRAME_A.
     */
    REF_FRAME_A(): string | null;
    REF_FRAME_A(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * REF_FRAME_B.
     */
    REF_FRAME_B(): string | null;
    REF_FRAME_B(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * RATE_STATES: ANGVEL, Q_DOT, EULER_RATE or GYRO_BIAS.
     */
    RATE_STATES(): string | null;
    RATE_STATES(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * SIGMA_U in deg/s**1.5, NaN when not stated.
     */
    SIGMA_U(): number;
    /**
     * SIGMA_V in deg/s**0.5, NaN when not stated.
     */
    SIGMA_V(): number;
    /**
     * RATE_PROCESS_NOISE_STDDEV in deg/s**1.5, NaN when not stated.
     */
    RATE_PROCESS_NOISE_STDDEV(): number;
    /**
     * The sensors, in message order.
     */
    SENSORS(index: number, obj?: ACMSensor): ACMSensor | null;
    sensorsLength(): number;
    static startACMDetermination(builder: flatbuffers.Builder): void;
    static addComment(builder: flatbuffers.Builder, COMMENTOffset: flatbuffers.Offset): void;
    static addAdId(builder: flatbuffers.Builder, AD_IDOffset: flatbuffers.Offset): void;
    static addAdPrevId(builder: flatbuffers.Builder, AD_PREV_IDOffset: flatbuffers.Offset): void;
    static addAdMethod(builder: flatbuffers.Builder, AD_METHODOffset: flatbuffers.Offset): void;
    static addAttitudeSource(builder: flatbuffers.Builder, ATTITUDE_SOURCEOffset: flatbuffers.Offset): void;
    static addNumberStates(builder: flatbuffers.Builder, NUMBER_STATES: number): void;
    static addAttitudeStates(builder: flatbuffers.Builder, ATTITUDE_STATESOffset: flatbuffers.Offset): void;
    static addEulerRotSeq(builder: flatbuffers.Builder, EULER_ROT_SEQOffset: flatbuffers.Offset): void;
    static addCovType(builder: flatbuffers.Builder, COV_TYPEOffset: flatbuffers.Offset): void;
    static addRefFrameA(builder: flatbuffers.Builder, REF_FRAME_AOffset: flatbuffers.Offset): void;
    static addRefFrameB(builder: flatbuffers.Builder, REF_FRAME_BOffset: flatbuffers.Offset): void;
    static addRateStates(builder: flatbuffers.Builder, RATE_STATESOffset: flatbuffers.Offset): void;
    static addSigmaU(builder: flatbuffers.Builder, SIGMA_U: number): void;
    static addSigmaV(builder: flatbuffers.Builder, SIGMA_V: number): void;
    static addRateProcessNoiseStddev(builder: flatbuffers.Builder, RATE_PROCESS_NOISE_STDDEV: number): void;
    static addSensors(builder: flatbuffers.Builder, SENSORSOffset: flatbuffers.Offset): void;
    static createSensorsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startSensorsVector(builder: flatbuffers.Builder, numElems: number): void;
    static endACMDetermination(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createACMDetermination(builder: flatbuffers.Builder, COMMENTOffset: flatbuffers.Offset, AD_IDOffset: flatbuffers.Offset, AD_PREV_IDOffset: flatbuffers.Offset, AD_METHODOffset: flatbuffers.Offset, ATTITUDE_SOURCEOffset: flatbuffers.Offset, NUMBER_STATES: number, ATTITUDE_STATESOffset: flatbuffers.Offset, EULER_ROT_SEQOffset: flatbuffers.Offset, COV_TYPEOffset: flatbuffers.Offset, REF_FRAME_AOffset: flatbuffers.Offset, REF_FRAME_BOffset: flatbuffers.Offset, RATE_STATESOffset: flatbuffers.Offset, SIGMA_U: number, SIGMA_V: number, RATE_PROCESS_NOISE_STDDEV: number, SENSORSOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): ACMDeterminationT;
    unpackTo(_o: ACMDeterminationT): void;
}
export declare class ACMDeterminationT implements flatbuffers.IGeneratedObject {
    COMMENT: string | Uint8Array | null;
    AD_ID: string | Uint8Array | null;
    AD_PREV_ID: string | Uint8Array | null;
    AD_METHOD: string | Uint8Array | null;
    ATTITUDE_SOURCE: string | Uint8Array | null;
    NUMBER_STATES: number;
    ATTITUDE_STATES: string | Uint8Array | null;
    EULER_ROT_SEQ: string | Uint8Array | null;
    COV_TYPE: string | Uint8Array | null;
    REF_FRAME_A: string | Uint8Array | null;
    REF_FRAME_B: string | Uint8Array | null;
    RATE_STATES: string | Uint8Array | null;
    SIGMA_U: number;
    SIGMA_V: number;
    RATE_PROCESS_NOISE_STDDEV: number;
    SENSORS: (ACMSensorT)[];
    constructor(COMMENT?: string | Uint8Array | null, AD_ID?: string | Uint8Array | null, AD_PREV_ID?: string | Uint8Array | null, AD_METHOD?: string | Uint8Array | null, ATTITUDE_SOURCE?: string | Uint8Array | null, NUMBER_STATES?: number, ATTITUDE_STATES?: string | Uint8Array | null, EULER_ROT_SEQ?: string | Uint8Array | null, COV_TYPE?: string | Uint8Array | null, REF_FRAME_A?: string | Uint8Array | null, REF_FRAME_B?: string | Uint8Array | null, RATE_STATES?: string | Uint8Array | null, SIGMA_U?: number, SIGMA_V?: number, RATE_PROCESS_NOISE_STDDEV?: number, SENSORS?: (ACMSensorT)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=ACMDetermination.d.ts.map