import * as flatbuffers from 'flatbuffers';
import { trackEnvironment } from './trackEnvironment.js';
import { trackStatus } from './trackStatus.js';
/**
 * Track
 */
export declare class TRK implements flatbuffers.IUnpackableObject<TRKT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): TRK;
    static getRootAsTRK(bb: flatbuffers.ByteBuffer, obj?: TRK): TRK;
    static getSizePrefixedRootAsTRK(bb: flatbuffers.ByteBuffer, obj?: TRK): TRK;
    static bufferHasIdentifier(bb: flatbuffers.ByteBuffer): boolean;
    /**
     * Unique identifier
     */
    ID(): string | null;
    ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Contact reference
     */
    CNTCT(): string | null;
    CNTCT(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Message timestamp (ISO 8601)
     */
    MSG_TS(): string | null;
    MSG_TS(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Mission identifier
     */
    MSN_ID(): string | null;
    MSN_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Asset nationality
     */
    ASSET_NAT(): string | null;
    ASSET_NAT(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Asset identifier
     */
    ASSET(): string | null;
    ASSET(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Sensor identifier
     */
    SENSOR_ID(): string | null;
    SENSOR_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Sensor quality assessment
     */
    SEN_QUAL(): string | null;
    SEN_QUAL(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Track identifier
     */
    TRK_ID(): string | null;
    TRK_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Track number
     */
    TRK_NUM(): string | null;
    TRK_NUM(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Track status
     */
    TRK_STAT(): trackStatus;
    /**
     * Object nationality
     */
    OBJ_NAT(): string | null;
    OBJ_NAT(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Object identifier
     */
    OBJ_ID(): string | null;
    OBJ_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Object type classification
     */
    OBJ_TYPE(): string | null;
    OBJ_TYPE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Object specific type
     */
    OBJ_SPEC(): string | null;
    OBJ_SPEC(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Object platform type
     */
    OBJ_PLAT(): string | null;
    OBJ_PLAT(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Object activity
     */
    OBJ_ACT(): string | null;
    OBJ_ACT(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Mode type
     */
    MOD_TYPE(): string | null;
    MOD_TYPE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Track item identifier
     */
    TRK_ITM_ID(): string | null;
    TRK_ITM_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Track point timestamp (ISO 8601)
     */
    TS(): string | null;
    TS(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Track quality (0-15)
     */
    TRK_QUAL(): number;
    /**
     * Track point type
     */
    TRK_PT_TYPE(): string | null;
    TRK_PT_TYPE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Object identity assessment
     */
    OBJ_IDENT(): string | null;
    OBJ_IDENT(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Identity credibility (1-6)
     */
    IDENT_CRED(): number;
    /**
     * Identity reliability (A-F)
     */
    IDENT_REL(): number;
    /**
     * Identity amplification
     */
    IDENT_AMP(): string | null;
    IDENT_AMP(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Track environment
     */
    ENVIRONMENT(): trackEnvironment;
    /**
     * Environment confidence (0-1)
     */
    ENVIRONMENT_CONF(): number;
    /**
     * Track confidence (0-1)
     */
    TRK_CONF(): number;
    /**
     * Latitude (degrees)
     */
    LAT(): number;
    /**
     * Longitude (degrees)
     */
    LON(): number;
    /**
     * Altitude (km)
     */
    ALT(): number;
    /**
     * Speed (km/s)
     */
    SPD(): number;
    /**
     * Heading (degrees from north)
     */
    HDNG(): number;
    /**
     * Course (degrees from north)
     */
    COURSE(): number;
    /**
     * Source types
     */
    SRC_TYPS(index: number): string;
    SRC_TYPS(index: number, optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    srcTypsLength(): number;
    /**
     * Source identifiers
     */
    SRC_IDS(index: number): string;
    SRC_IDS(index: number, optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    srcIdsLength(): number;
    /**
     * Call sign
     */
    CALL_SIGN(): string | null;
    CALL_SIGN(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * True if fused from multiple sources
     */
    MULTI_SOURCE(): boolean;
    /**
     * J-series message type
     */
    J_SERIES(): string | null;
    J_SERIES(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Force strength indicator
     */
    STRENGTH(): number;
    /**
     * Mode 1 code
     */
    M1(): number;
    /**
     * Mode 1 validity
     */
    M1V(): number;
    /**
     * Mode 2 code
     */
    M2(): number;
    /**
     * Mode 2 validity
     */
    M2V(): number;
    /**
     * Mode 3A code
     */
    M3A(): number;
    /**
     * Mode 3A validity
     */
    M3AV(): number;
    /**
     * Associated tags
     */
    TAGS(index: number): string;
    TAGS(index: number, optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    tagsLength(): number;
    /**
     * Start time for track data (ISO 8601)
     */
    TRACK_START_TIME(): string | null;
    TRACK_START_TIME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Time interval between track points (seconds)
     */
    TRACK_STEP_SIZE(): number;
    /**
     * Number of components per point (default 3 for X, Y, Z)
     */
    TRACK_COMPONENTS(): number;
    /**
     * ECEF position as flat array [X0, Y0, Z0, X1, Y1, Z1, ...]
     */
    ECEF_POS(index: number): number | null;
    ecefPosLength(): number;
    ecefPosArray(): Float64Array | null;
    /**
     * ECEF velocity as flat array [VX0, VY0, VZ0, VX1, VY1, VZ1, ...]
     */
    ECEF_VEL(index: number): number | null;
    ecefVelLength(): number;
    ecefVelArray(): Float64Array | null;
    /**
     * ECEF acceleration as flat array [AX0, AY0, AZ0, AX1, AY1, AZ1, ...]
     */
    ECEF_ACC(index: number): number | null;
    ecefAccLength(): number;
    ecefAccArray(): Float64Array | null;
    /**
     * Local coordinate position as flat array
     */
    LC_POS(index: number): number | null;
    lcPosLength(): number;
    lcPosArray(): Float64Array | null;
    /**
     * Local coordinate velocity as flat array
     */
    LC_VEL(index: number): number | null;
    lcVelLength(): number;
    lcVelArray(): Float64Array | null;
    /**
     * Local coordinate acceleration as flat array
     */
    LC_ACC(index: number): number | null;
    lcAccLength(): number;
    lcAccArray(): Float64Array | null;
    /**
     * Covariance data (21 elements per point for 6x6 lower triangular)
     */
    COV(index: number): number | null;
    covLength(): number;
    covArray(): Float64Array | null;
    /**
     * Error ellipse data (6 elements per point)
     */
    ERR_ELLP(index: number): number | null;
    errEllpLength(): number;
    errEllpArray(): Float64Array | null;
    static startTRK(builder: flatbuffers.Builder): void;
    static addId(builder: flatbuffers.Builder, IDOffset: flatbuffers.Offset): void;
    static addCntct(builder: flatbuffers.Builder, CNTCTOffset: flatbuffers.Offset): void;
    static addMsgTs(builder: flatbuffers.Builder, MSG_TSOffset: flatbuffers.Offset): void;
    static addMsnId(builder: flatbuffers.Builder, MSN_IDOffset: flatbuffers.Offset): void;
    static addAssetNat(builder: flatbuffers.Builder, ASSET_NATOffset: flatbuffers.Offset): void;
    static addAsset(builder: flatbuffers.Builder, ASSETOffset: flatbuffers.Offset): void;
    static addSensorId(builder: flatbuffers.Builder, SENSOR_IDOffset: flatbuffers.Offset): void;
    static addSenQual(builder: flatbuffers.Builder, SEN_QUALOffset: flatbuffers.Offset): void;
    static addTrkId(builder: flatbuffers.Builder, TRK_IDOffset: flatbuffers.Offset): void;
    static addTrkNum(builder: flatbuffers.Builder, TRK_NUMOffset: flatbuffers.Offset): void;
    static addTrkStat(builder: flatbuffers.Builder, TRK_STAT: trackStatus): void;
    static addObjNat(builder: flatbuffers.Builder, OBJ_NATOffset: flatbuffers.Offset): void;
    static addObjId(builder: flatbuffers.Builder, OBJ_IDOffset: flatbuffers.Offset): void;
    static addObjType(builder: flatbuffers.Builder, OBJ_TYPEOffset: flatbuffers.Offset): void;
    static addObjSpec(builder: flatbuffers.Builder, OBJ_SPECOffset: flatbuffers.Offset): void;
    static addObjPlat(builder: flatbuffers.Builder, OBJ_PLATOffset: flatbuffers.Offset): void;
    static addObjAct(builder: flatbuffers.Builder, OBJ_ACTOffset: flatbuffers.Offset): void;
    static addModType(builder: flatbuffers.Builder, MOD_TYPEOffset: flatbuffers.Offset): void;
    static addTrkItmId(builder: flatbuffers.Builder, TRK_ITM_IDOffset: flatbuffers.Offset): void;
    static addTs(builder: flatbuffers.Builder, TSOffset: flatbuffers.Offset): void;
    static addTrkQual(builder: flatbuffers.Builder, TRK_QUAL: number): void;
    static addTrkPtType(builder: flatbuffers.Builder, TRK_PT_TYPEOffset: flatbuffers.Offset): void;
    static addObjIdent(builder: flatbuffers.Builder, OBJ_IDENTOffset: flatbuffers.Offset): void;
    static addIdentCred(builder: flatbuffers.Builder, IDENT_CRED: number): void;
    static addIdentRel(builder: flatbuffers.Builder, IDENT_REL: number): void;
    static addIdentAmp(builder: flatbuffers.Builder, IDENT_AMPOffset: flatbuffers.Offset): void;
    static addEnvironment(builder: flatbuffers.Builder, ENVIRONMENT: trackEnvironment): void;
    static addEnvironmentConf(builder: flatbuffers.Builder, ENVIRONMENT_CONF: number): void;
    static addTrkConf(builder: flatbuffers.Builder, TRK_CONF: number): void;
    static addLat(builder: flatbuffers.Builder, LAT: number): void;
    static addLon(builder: flatbuffers.Builder, LON: number): void;
    static addAlt(builder: flatbuffers.Builder, ALT: number): void;
    static addSpd(builder: flatbuffers.Builder, SPD: number): void;
    static addHdng(builder: flatbuffers.Builder, HDNG: number): void;
    static addCourse(builder: flatbuffers.Builder, COURSE: number): void;
    static addSrcTyps(builder: flatbuffers.Builder, SRC_TYPSOffset: flatbuffers.Offset): void;
    static createSrcTypsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startSrcTypsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addSrcIds(builder: flatbuffers.Builder, SRC_IDSOffset: flatbuffers.Offset): void;
    static createSrcIdsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startSrcIdsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addCallSign(builder: flatbuffers.Builder, CALL_SIGNOffset: flatbuffers.Offset): void;
    static addMultiSource(builder: flatbuffers.Builder, MULTI_SOURCE: boolean): void;
    static addJSeries(builder: flatbuffers.Builder, J_SERIESOffset: flatbuffers.Offset): void;
    static addStrength(builder: flatbuffers.Builder, STRENGTH: number): void;
    static addM1(builder: flatbuffers.Builder, M1: number): void;
    static addM1V(builder: flatbuffers.Builder, M1V: number): void;
    static addM2(builder: flatbuffers.Builder, M2: number): void;
    static addM2V(builder: flatbuffers.Builder, M2V: number): void;
    static addM3A(builder: flatbuffers.Builder, M3A: number): void;
    static addM3Av(builder: flatbuffers.Builder, M3AV: number): void;
    static addTags(builder: flatbuffers.Builder, TAGSOffset: flatbuffers.Offset): void;
    static createTagsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startTagsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addTrackStartTime(builder: flatbuffers.Builder, TRACK_START_TIMEOffset: flatbuffers.Offset): void;
    static addTrackStepSize(builder: flatbuffers.Builder, TRACK_STEP_SIZE: number): void;
    static addTrackComponents(builder: flatbuffers.Builder, TRACK_COMPONENTS: number): void;
    static addEcefPos(builder: flatbuffers.Builder, ECEF_POSOffset: flatbuffers.Offset): void;
    static createEcefPosVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createEcefPosVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startEcefPosVector(builder: flatbuffers.Builder, numElems: number): void;
    static addEcefVel(builder: flatbuffers.Builder, ECEF_VELOffset: flatbuffers.Offset): void;
    static createEcefVelVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createEcefVelVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startEcefVelVector(builder: flatbuffers.Builder, numElems: number): void;
    static addEcefAcc(builder: flatbuffers.Builder, ECEF_ACCOffset: flatbuffers.Offset): void;
    static createEcefAccVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createEcefAccVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startEcefAccVector(builder: flatbuffers.Builder, numElems: number): void;
    static addLcPos(builder: flatbuffers.Builder, LC_POSOffset: flatbuffers.Offset): void;
    static createLcPosVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createLcPosVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startLcPosVector(builder: flatbuffers.Builder, numElems: number): void;
    static addLcVel(builder: flatbuffers.Builder, LC_VELOffset: flatbuffers.Offset): void;
    static createLcVelVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createLcVelVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startLcVelVector(builder: flatbuffers.Builder, numElems: number): void;
    static addLcAcc(builder: flatbuffers.Builder, LC_ACCOffset: flatbuffers.Offset): void;
    static createLcAccVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createLcAccVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startLcAccVector(builder: flatbuffers.Builder, numElems: number): void;
    static addCov(builder: flatbuffers.Builder, COVOffset: flatbuffers.Offset): void;
    static createCovVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createCovVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startCovVector(builder: flatbuffers.Builder, numElems: number): void;
    static addErrEllp(builder: flatbuffers.Builder, ERR_ELLPOffset: flatbuffers.Offset): void;
    static createErrEllpVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createErrEllpVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startErrEllpVector(builder: flatbuffers.Builder, numElems: number): void;
    static endTRK(builder: flatbuffers.Builder): flatbuffers.Offset;
    static finishTRKBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static finishSizePrefixedTRKBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static createTRK(builder: flatbuffers.Builder, IDOffset: flatbuffers.Offset, CNTCTOffset: flatbuffers.Offset, MSG_TSOffset: flatbuffers.Offset, MSN_IDOffset: flatbuffers.Offset, ASSET_NATOffset: flatbuffers.Offset, ASSETOffset: flatbuffers.Offset, SENSOR_IDOffset: flatbuffers.Offset, SEN_QUALOffset: flatbuffers.Offset, TRK_IDOffset: flatbuffers.Offset, TRK_NUMOffset: flatbuffers.Offset, TRK_STAT: trackStatus, OBJ_NATOffset: flatbuffers.Offset, OBJ_IDOffset: flatbuffers.Offset, OBJ_TYPEOffset: flatbuffers.Offset, OBJ_SPECOffset: flatbuffers.Offset, OBJ_PLATOffset: flatbuffers.Offset, OBJ_ACTOffset: flatbuffers.Offset, MOD_TYPEOffset: flatbuffers.Offset, TRK_ITM_IDOffset: flatbuffers.Offset, TSOffset: flatbuffers.Offset, TRK_QUAL: number, TRK_PT_TYPEOffset: flatbuffers.Offset, OBJ_IDENTOffset: flatbuffers.Offset, IDENT_CRED: number, IDENT_REL: number, IDENT_AMPOffset: flatbuffers.Offset, ENVIRONMENT: trackEnvironment, ENVIRONMENT_CONF: number, TRK_CONF: number, LAT: number, LON: number, ALT: number, SPD: number, HDNG: number, COURSE: number, SRC_TYPSOffset: flatbuffers.Offset, SRC_IDSOffset: flatbuffers.Offset, CALL_SIGNOffset: flatbuffers.Offset, MULTI_SOURCE: boolean, J_SERIESOffset: flatbuffers.Offset, STRENGTH: number, M1: number, M1V: number, M2: number, M2V: number, M3A: number, M3AV: number, TAGSOffset: flatbuffers.Offset, TRACK_START_TIMEOffset: flatbuffers.Offset, TRACK_STEP_SIZE: number, TRACK_COMPONENTS: number, ECEF_POSOffset: flatbuffers.Offset, ECEF_VELOffset: flatbuffers.Offset, ECEF_ACCOffset: flatbuffers.Offset, LC_POSOffset: flatbuffers.Offset, LC_VELOffset: flatbuffers.Offset, LC_ACCOffset: flatbuffers.Offset, COVOffset: flatbuffers.Offset, ERR_ELLPOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): TRKT;
    unpackTo(_o: TRKT): void;
}
export declare class TRKT implements flatbuffers.IGeneratedObject {
    ID: string | Uint8Array | null;
    CNTCT: string | Uint8Array | null;
    MSG_TS: string | Uint8Array | null;
    MSN_ID: string | Uint8Array | null;
    ASSET_NAT: string | Uint8Array | null;
    ASSET: string | Uint8Array | null;
    SENSOR_ID: string | Uint8Array | null;
    SEN_QUAL: string | Uint8Array | null;
    TRK_ID: string | Uint8Array | null;
    TRK_NUM: string | Uint8Array | null;
    TRK_STAT: trackStatus;
    OBJ_NAT: string | Uint8Array | null;
    OBJ_ID: string | Uint8Array | null;
    OBJ_TYPE: string | Uint8Array | null;
    OBJ_SPEC: string | Uint8Array | null;
    OBJ_PLAT: string | Uint8Array | null;
    OBJ_ACT: string | Uint8Array | null;
    MOD_TYPE: string | Uint8Array | null;
    TRK_ITM_ID: string | Uint8Array | null;
    TS: string | Uint8Array | null;
    TRK_QUAL: number;
    TRK_PT_TYPE: string | Uint8Array | null;
    OBJ_IDENT: string | Uint8Array | null;
    IDENT_CRED: number;
    IDENT_REL: number;
    IDENT_AMP: string | Uint8Array | null;
    ENVIRONMENT: trackEnvironment;
    ENVIRONMENT_CONF: number;
    TRK_CONF: number;
    LAT: number;
    LON: number;
    ALT: number;
    SPD: number;
    HDNG: number;
    COURSE: number;
    SRC_TYPS: (string)[];
    SRC_IDS: (string)[];
    CALL_SIGN: string | Uint8Array | null;
    MULTI_SOURCE: boolean;
    J_SERIES: string | Uint8Array | null;
    STRENGTH: number;
    M1: number;
    M1V: number;
    M2: number;
    M2V: number;
    M3A: number;
    M3AV: number;
    TAGS: (string)[];
    TRACK_START_TIME: string | Uint8Array | null;
    TRACK_STEP_SIZE: number;
    TRACK_COMPONENTS: number;
    ECEF_POS: (number)[];
    ECEF_VEL: (number)[];
    ECEF_ACC: (number)[];
    LC_POS: (number)[];
    LC_VEL: (number)[];
    LC_ACC: (number)[];
    COV: (number)[];
    ERR_ELLP: (number)[];
    constructor(ID?: string | Uint8Array | null, CNTCT?: string | Uint8Array | null, MSG_TS?: string | Uint8Array | null, MSN_ID?: string | Uint8Array | null, ASSET_NAT?: string | Uint8Array | null, ASSET?: string | Uint8Array | null, SENSOR_ID?: string | Uint8Array | null, SEN_QUAL?: string | Uint8Array | null, TRK_ID?: string | Uint8Array | null, TRK_NUM?: string | Uint8Array | null, TRK_STAT?: trackStatus, OBJ_NAT?: string | Uint8Array | null, OBJ_ID?: string | Uint8Array | null, OBJ_TYPE?: string | Uint8Array | null, OBJ_SPEC?: string | Uint8Array | null, OBJ_PLAT?: string | Uint8Array | null, OBJ_ACT?: string | Uint8Array | null, MOD_TYPE?: string | Uint8Array | null, TRK_ITM_ID?: string | Uint8Array | null, TS?: string | Uint8Array | null, TRK_QUAL?: number, TRK_PT_TYPE?: string | Uint8Array | null, OBJ_IDENT?: string | Uint8Array | null, IDENT_CRED?: number, IDENT_REL?: number, IDENT_AMP?: string | Uint8Array | null, ENVIRONMENT?: trackEnvironment, ENVIRONMENT_CONF?: number, TRK_CONF?: number, LAT?: number, LON?: number, ALT?: number, SPD?: number, HDNG?: number, COURSE?: number, SRC_TYPS?: (string)[], SRC_IDS?: (string)[], CALL_SIGN?: string | Uint8Array | null, MULTI_SOURCE?: boolean, J_SERIES?: string | Uint8Array | null, STRENGTH?: number, M1?: number, M1V?: number, M2?: number, M2V?: number, M3A?: number, M3AV?: number, TAGS?: (string)[], TRACK_START_TIME?: string | Uint8Array | null, TRACK_STEP_SIZE?: number, TRACK_COMPONENTS?: number, ECEF_POS?: (number)[], ECEF_VEL?: (number)[], ECEF_ACC?: (number)[], LC_POS?: (number)[], LC_VEL?: (number)[], LC_ACC?: (number)[], COV?: (number)[], ERR_ELLP?: (number)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=TRK.d.ts.map