import * as flatbuffers from 'flatbuffers';
/**
 * Manifold Element Set
 */
export declare class MFE implements flatbuffers.IUnpackableObject<MFET> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): MFE;
    static getRootAsMFE(bb: flatbuffers.ByteBuffer, obj?: MFE): MFE;
    static getSizePrefixedRootAsMFE(bb: flatbuffers.ByteBuffer, obj?: MFE): MFE;
    static bufferHasIdentifier(bb: flatbuffers.ByteBuffer): boolean;
    ID(): string | null;
    ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    TMP_SAT_NO(): number;
    EPOCH(): string | null;
    EPOCH(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    MEAN_MOTION(): number;
    ECCENTRICITY(): number;
    INCLINATION(): number;
    RAAN(): number;
    ARG_OF_PERIGEE(): number;
    MEAN_ANOMALY(): number;
    REV_NO(): number;
    B_STAR(): number;
    MEAN_MOTION_DOT(): number;
    MEAN_MOTION_DDOT(): number;
    SEMI_MAJOR_AXIS(): number;
    PERIOD(): number;
    APOGEE(): number;
    PERIGEE(): number;
    LINE1(): string | null;
    LINE1(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    LINE2(): string | null;
    LINE2(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    static startMFE(builder: flatbuffers.Builder): void;
    static addId(builder: flatbuffers.Builder, IDOffset: flatbuffers.Offset): void;
    static addTmpSatNo(builder: flatbuffers.Builder, TMP_SAT_NO: number): void;
    static addEpoch(builder: flatbuffers.Builder, EPOCHOffset: flatbuffers.Offset): void;
    static addMeanMotion(builder: flatbuffers.Builder, MEAN_MOTION: number): void;
    static addEccentricity(builder: flatbuffers.Builder, ECCENTRICITY: number): void;
    static addInclination(builder: flatbuffers.Builder, INCLINATION: number): void;
    static addRaan(builder: flatbuffers.Builder, RAAN: number): void;
    static addArgOfPerigee(builder: flatbuffers.Builder, ARG_OF_PERIGEE: number): void;
    static addMeanAnomaly(builder: flatbuffers.Builder, MEAN_ANOMALY: number): void;
    static addRevNo(builder: flatbuffers.Builder, REV_NO: number): void;
    static addBStar(builder: flatbuffers.Builder, B_STAR: number): void;
    static addMeanMotionDot(builder: flatbuffers.Builder, MEAN_MOTION_DOT: number): void;
    static addMeanMotionDdot(builder: flatbuffers.Builder, MEAN_MOTION_DDOT: number): void;
    static addSemiMajorAxis(builder: flatbuffers.Builder, SEMI_MAJOR_AXIS: number): void;
    static addPeriod(builder: flatbuffers.Builder, PERIOD: number): void;
    static addApogee(builder: flatbuffers.Builder, APOGEE: number): void;
    static addPerigee(builder: flatbuffers.Builder, PERIGEE: number): void;
    static addLine1(builder: flatbuffers.Builder, LINE1Offset: flatbuffers.Offset): void;
    static addLine2(builder: flatbuffers.Builder, LINE2Offset: flatbuffers.Offset): void;
    static endMFE(builder: flatbuffers.Builder): flatbuffers.Offset;
    static finishMFEBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static finishSizePrefixedMFEBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static createMFE(builder: flatbuffers.Builder, IDOffset: flatbuffers.Offset, TMP_SAT_NO: number, EPOCHOffset: flatbuffers.Offset, MEAN_MOTION: number, ECCENTRICITY: number, INCLINATION: number, RAAN: number, ARG_OF_PERIGEE: number, MEAN_ANOMALY: number, REV_NO: number, B_STAR: number, MEAN_MOTION_DOT: number, MEAN_MOTION_DDOT: number, SEMI_MAJOR_AXIS: number, PERIOD: number, APOGEE: number, PERIGEE: number, LINE1Offset: flatbuffers.Offset, LINE2Offset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): MFET;
    unpackTo(_o: MFET): void;
}
export declare class MFET implements flatbuffers.IGeneratedObject {
    ID: string | Uint8Array | null;
    TMP_SAT_NO: number;
    EPOCH: string | Uint8Array | null;
    MEAN_MOTION: number;
    ECCENTRICITY: number;
    INCLINATION: number;
    RAAN: number;
    ARG_OF_PERIGEE: number;
    MEAN_ANOMALY: number;
    REV_NO: number;
    B_STAR: number;
    MEAN_MOTION_DOT: number;
    MEAN_MOTION_DDOT: number;
    SEMI_MAJOR_AXIS: number;
    PERIOD: number;
    APOGEE: number;
    PERIGEE: number;
    LINE1: string | Uint8Array | null;
    LINE2: string | Uint8Array | null;
    constructor(ID?: string | Uint8Array | null, TMP_SAT_NO?: number, EPOCH?: string | Uint8Array | null, MEAN_MOTION?: number, ECCENTRICITY?: number, INCLINATION?: number, RAAN?: number, ARG_OF_PERIGEE?: number, MEAN_ANOMALY?: number, REV_NO?: number, B_STAR?: number, MEAN_MOTION_DOT?: number, MEAN_MOTION_DDOT?: number, SEMI_MAJOR_AXIS?: number, PERIOD?: number, APOGEE?: number, PERIGEE?: number, LINE1?: string | Uint8Array | null, LINE2?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=MFE.d.ts.map