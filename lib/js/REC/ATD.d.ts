import * as flatbuffers from 'flatbuffers';
import { attMotionType } from './attMotionType.js';
import { attRepresentation } from './attRepresentation.js';
/**
 * Attitude Data Point
 */
export declare class ATD implements flatbuffers.IUnpackableObject<ATDT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): ATD;
    static getRootAsATD(bb: flatbuffers.ByteBuffer, obj?: ATD): ATD;
    static getSizePrefixedRootAsATD(bb: flatbuffers.ByteBuffer, obj?: ATD): ATD;
    static bufferHasIdentifier(bb: flatbuffers.ByteBuffer): boolean;
    /**
     * Unique identifier
     */
    ID(): string | null;
    ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Attitude set identifier (groups time-series points)
     */
    AS_ID(): string | null;
    AS_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Satellite catalog number
     */
    SAT_NO(): number;
    /**
     * International designator
     */
    ORIG_OBJECT_ID(): string | null;
    ORIG_OBJECT_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Observation epoch (ISO 8601)
     */
    EPOCH(): string | null;
    EPOCH(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Attitude representation used
     */
    REPRESENTATION(): attRepresentation;
    /**
     * Motion characterization
     */
    MOTION_TYPE(): attMotionType;
    /**
     * Quaternion scalar component (q0 or qc)
     */
    QC(): number;
    /**
     * Quaternion vector component 1
     */
    Q1(): number;
    /**
     * Quaternion vector component 2
     */
    Q2(): number;
    /**
     * Quaternion vector component 3
     */
    Q3(): number;
    /**
     * Quaternion scalar rate (rad/s)
     */
    QC_DOT(): number;
    /**
     * Quaternion vector rate 1 (rad/s)
     */
    Q1_DOT(): number;
    /**
     * Quaternion vector rate 2 (rad/s)
     */
    Q2_DOT(): number;
    /**
     * Quaternion vector rate 3 (rad/s)
     */
    Q3_DOT(): number;
    /**
     * Euler angle X (degrees)
     */
    X_ANGLE(): number;
    /**
     * Euler angle Y (degrees)
     */
    Y_ANGLE(): number;
    /**
     * Euler angle Z (degrees)
     */
    Z_ANGLE(): number;
    /**
     * Angular rate about X (deg/s)
     */
    X_RATE(): number;
    /**
     * Angular rate about Y (deg/s)
     */
    Y_RATE(): number;
    /**
     * Angular rate about Z (deg/s)
     */
    Z_RATE(): number;
    /**
     * Right ascension of spin axis (degrees)
     */
    RA(): number;
    /**
     * Declination of spin axis (degrees)
     */
    DECLINATION(): number;
    /**
     * Coning half-angle (degrees)
     */
    CONING_ANGLE(): number;
    /**
     * Precession period (seconds)
     */
    PREC_PERIOD(): number;
    /**
     * Spin period (seconds)
     */
    SPIN_PERIOD(): number;
    /**
     * Attitude uncertainty (degrees, 1-sigma)
     */
    ATTITUDE_UNC(): number;
    /**
     * Rate uncertainty (deg/s, 1-sigma)
     */
    RATE_UNC(): number;
    /**
     * Data quality (0-9, 9=best)
     */
    QUALITY(): number;
    /**
     * Reference frame for attitude
     */
    REF_FRAME(): string | null;
    REF_FRAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Sensor identifier providing the observation
     */
    SENSOR_ID(): string | null;
    SENSOR_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    static startATD(builder: flatbuffers.Builder): void;
    static addId(builder: flatbuffers.Builder, IDOffset: flatbuffers.Offset): void;
    static addAsId(builder: flatbuffers.Builder, AS_IDOffset: flatbuffers.Offset): void;
    static addSatNo(builder: flatbuffers.Builder, SAT_NO: number): void;
    static addOrigObjectId(builder: flatbuffers.Builder, ORIG_OBJECT_IDOffset: flatbuffers.Offset): void;
    static addEpoch(builder: flatbuffers.Builder, EPOCHOffset: flatbuffers.Offset): void;
    static addRepresentation(builder: flatbuffers.Builder, REPRESENTATION: attRepresentation): void;
    static addMotionType(builder: flatbuffers.Builder, MOTION_TYPE: attMotionType): void;
    static addQc(builder: flatbuffers.Builder, QC: number): void;
    static addQ1(builder: flatbuffers.Builder, Q1: number): void;
    static addQ2(builder: flatbuffers.Builder, Q2: number): void;
    static addQ3(builder: flatbuffers.Builder, Q3: number): void;
    static addQcDot(builder: flatbuffers.Builder, QC_DOT: number): void;
    static addQ1Dot(builder: flatbuffers.Builder, Q1_DOT: number): void;
    static addQ2Dot(builder: flatbuffers.Builder, Q2_DOT: number): void;
    static addQ3Dot(builder: flatbuffers.Builder, Q3_DOT: number): void;
    static addXAngle(builder: flatbuffers.Builder, X_ANGLE: number): void;
    static addYAngle(builder: flatbuffers.Builder, Y_ANGLE: number): void;
    static addZAngle(builder: flatbuffers.Builder, Z_ANGLE: number): void;
    static addXRate(builder: flatbuffers.Builder, X_RATE: number): void;
    static addYRate(builder: flatbuffers.Builder, Y_RATE: number): void;
    static addZRate(builder: flatbuffers.Builder, Z_RATE: number): void;
    static addRa(builder: flatbuffers.Builder, RA: number): void;
    static addDeclination(builder: flatbuffers.Builder, DECLINATION: number): void;
    static addConingAngle(builder: flatbuffers.Builder, CONING_ANGLE: number): void;
    static addPrecPeriod(builder: flatbuffers.Builder, PREC_PERIOD: number): void;
    static addSpinPeriod(builder: flatbuffers.Builder, SPIN_PERIOD: number): void;
    static addAttitudeUnc(builder: flatbuffers.Builder, ATTITUDE_UNC: number): void;
    static addRateUnc(builder: flatbuffers.Builder, RATE_UNC: number): void;
    static addQuality(builder: flatbuffers.Builder, QUALITY: number): void;
    static addRefFrame(builder: flatbuffers.Builder, REF_FRAMEOffset: flatbuffers.Offset): void;
    static addSensorId(builder: flatbuffers.Builder, SENSOR_IDOffset: flatbuffers.Offset): void;
    static endATD(builder: flatbuffers.Builder): flatbuffers.Offset;
    static finishATDBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static finishSizePrefixedATDBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static createATD(builder: flatbuffers.Builder, IDOffset: flatbuffers.Offset, AS_IDOffset: flatbuffers.Offset, SAT_NO: number, ORIG_OBJECT_IDOffset: flatbuffers.Offset, EPOCHOffset: flatbuffers.Offset, REPRESENTATION: attRepresentation, MOTION_TYPE: attMotionType, QC: number, Q1: number, Q2: number, Q3: number, QC_DOT: number, Q1_DOT: number, Q2_DOT: number, Q3_DOT: number, X_ANGLE: number, Y_ANGLE: number, Z_ANGLE: number, X_RATE: number, Y_RATE: number, Z_RATE: number, RA: number, DECLINATION: number, CONING_ANGLE: number, PREC_PERIOD: number, SPIN_PERIOD: number, ATTITUDE_UNC: number, RATE_UNC: number, QUALITY: number, REF_FRAMEOffset: flatbuffers.Offset, SENSOR_IDOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): ATDT;
    unpackTo(_o: ATDT): void;
}
export declare class ATDT implements flatbuffers.IGeneratedObject {
    ID: string | Uint8Array | null;
    AS_ID: string | Uint8Array | null;
    SAT_NO: number;
    ORIG_OBJECT_ID: string | Uint8Array | null;
    EPOCH: string | Uint8Array | null;
    REPRESENTATION: attRepresentation;
    MOTION_TYPE: attMotionType;
    QC: number;
    Q1: number;
    Q2: number;
    Q3: number;
    QC_DOT: number;
    Q1_DOT: number;
    Q2_DOT: number;
    Q3_DOT: number;
    X_ANGLE: number;
    Y_ANGLE: number;
    Z_ANGLE: number;
    X_RATE: number;
    Y_RATE: number;
    Z_RATE: number;
    RA: number;
    DECLINATION: number;
    CONING_ANGLE: number;
    PREC_PERIOD: number;
    SPIN_PERIOD: number;
    ATTITUDE_UNC: number;
    RATE_UNC: number;
    QUALITY: number;
    REF_FRAME: string | Uint8Array | null;
    SENSOR_ID: string | Uint8Array | null;
    constructor(ID?: string | Uint8Array | null, AS_ID?: string | Uint8Array | null, SAT_NO?: number, ORIG_OBJECT_ID?: string | Uint8Array | null, EPOCH?: string | Uint8Array | null, REPRESENTATION?: attRepresentation, MOTION_TYPE?: attMotionType, QC?: number, Q1?: number, Q2?: number, Q3?: number, QC_DOT?: number, Q1_DOT?: number, Q2_DOT?: number, Q3_DOT?: number, X_ANGLE?: number, Y_ANGLE?: number, Z_ANGLE?: number, X_RATE?: number, Y_RATE?: number, Z_RATE?: number, RA?: number, DECLINATION?: number, CONING_ANGLE?: number, PREC_PERIOD?: number, SPIN_PERIOD?: number, ATTITUDE_UNC?: number, RATE_UNC?: number, QUALITY?: number, REF_FRAME?: string | Uint8Array | null, SENSOR_ID?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=ATD.d.ts.map