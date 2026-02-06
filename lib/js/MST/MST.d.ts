import * as flatbuffers from 'flatbuffers';
import { aouReportType } from './aouReportType.js';
import { missileEnvironment } from './missileEnvironment.js';
import { missileStatus } from './missileStatus.js';
/**
 * Missile Track
 */
export declare class MST implements flatbuffers.IUnpackableObject<MSTT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): MST;
    static getRootAsMST(bb: flatbuffers.ByteBuffer, obj?: MST): MST;
    static getSizePrefixedRootAsMST(bb: flatbuffers.ByteBuffer, obj?: MST): MST;
    static bufferHasIdentifier(bb: flatbuffers.ByteBuffer): boolean;
    /**
     * Unique identifier
     */
    ID(): string | null;
    ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Message type code
     */
    MSG_TYPE(): string | null;
    MSG_TYPE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Message sub-type
     */
    MSG_SUB_TYPE(): string | null;
    MSG_SUB_TYPE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Message creation date (ISO 8601)
     */
    MSG_CREATE_DATE(): string | null;
    MSG_CREATE_DATE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Track environment
     */
    ENVIRONMENT(): missileEnvironment;
    /**
     * Object type classification
     */
    OBJ_TYPE(): string | null;
    OBJ_TYPE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Object type confidence (0-100)
     */
    OBJ_TYPE_CONF(): number;
    /**
     * Object platform type
     */
    OBJ_PLAT(): string | null;
    OBJ_PLAT(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Object identity assessment
     */
    OBJ_IDENT(): string | null;
    OBJ_IDENT(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Space amplification data
     */
    SPACE_AMP(): string | null;
    SPACE_AMP(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Space amplification confidence (0-100)
     */
    SPACE_AMP_CONF(): number;
    /**
     * Object activity
     */
    OBJ_ACT(): string | null;
    OBJ_ACT(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Space specific type
     */
    SPACE_SPEC_TYPE(): string | null;
    SPACE_SPEC_TYPE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Aircraft sub-type (if applicable)
     */
    ACFT_SUB_TYPE(): string | null;
    ACFT_SUB_TYPE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Object name
     */
    NAME(): string | null;
    NAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Call sign
     */
    CALL_SIGN(): string | null;
    CALL_SIGN(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * True if track is lost
     */
    LOST_TRK_IND(): boolean;
    /**
     * Track identifier
     */
    TRACK_ID(): string | null;
    TRACK_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Parent track identifier
     */
    PARENT_TRACK_ID(): string | null;
    PARENT_TRACK_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Multi-unit identifier (source track)
     */
    MUID_SRC_TRK(): string | null;
    MUID_SRC_TRK(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Multi-unit identifier (source)
     */
    MUID_SRC(): string | null;
    MUID_SRC(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Alert classification
     */
    ALERT(): string | null;
    ALERT(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Missile engagement status
     */
    MSL_STATUS(): missileStatus;
    /**
     * Track timestamp (ISO 8601)
     */
    TS(): string | null;
    TS(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * AOU report type
     */
    AOU_RPT_TYPE(): aouReportType;
    /**
     * Containment probability (0-1)
     */
    CONTAINMENT(): number;
    /**
     * Track confidence (0-1)
     */
    TRK_CONF(): number;
    /**
     * Track quality (0-15)
     */
    TRK_QUAL(): number;
    /**
     * Elevation angle (degrees)
     */
    ANG_ELEV(): number;
    /**
     * Sensor mode
     */
    SEN_MODE(): string | null;
    SEN_MODE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Information source
     */
    INFO_SOURCE(): string | null;
    INFO_SOURCE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * True if object is in boost phase
     */
    BOOSTING(): boolean;
    /**
     * Polar singularity latitude (degrees)
     */
    POLAR_SING_LOC_LAT(): number;
    /**
     * Polar singularity longitude (degrees)
     */
    POLAR_SING_LOC_LON(): number;
    /**
     * True if emergency indicator set
     */
    EMG_IND(): boolean;
    /**
     * True if drop point indicator set
     */
    DROP_PT_IND(): boolean;
    /**
     * Launch time (ISO 8601)
     */
    LAUNCH_TIME(): string | null;
    LAUNCH_TIME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Launch latitude (degrees)
     */
    LAUNCH_LAT(): number;
    /**
     * Launch longitude (degrees)
     */
    LAUNCH_LON(): number;
    /**
     * Azimuth correction (degrees)
     */
    AZ_CORR(): number;
    /**
     * Burnout altitude (km)
     */
    BURNOUT_ALT(): number;
    /**
     * Launch AOU type
     */
    LAUNCH_AOU_TYPE(): aouReportType;
    /**
     * Predicted impact time (ISO 8601)
     */
    IMPACT_TIME(): string | null;
    IMPACT_TIME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Predicted impact latitude (degrees)
     */
    IMPACT_LAT(): number;
    /**
     * Predicted impact longitude (degrees)
     */
    IMPACT_LON(): number;
    /**
     * Impact AOU type
     */
    IMPACT_AOU_TYPE(): aouReportType;
    /**
     * Start time for vector data (ISO 8601)
     */
    VECTOR_START_TIME(): string | null;
    VECTOR_START_TIME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Time interval between vector points (seconds)
     */
    VECTOR_STEP_SIZE(): number;
    /**
     * Number of components per vector (default 6: X, Y, Z, VX, VY, VZ)
     */
    VECTOR_COMPONENTS(): number;
    /**
     * Vector data as flat array [X0, Y0, Z0, VX0, VY0, VZ0, X1, ...]
     */
    VECTORS(index: number): number | null;
    vectorsLength(): number;
    vectorsArray(): Float64Array | null;
    /**
     * AOU report data as flat array
     */
    AOU_RPT(index: number): number | null;
    aouRptLength(): number;
    aouRptArray(): Float64Array | null;
    /**
     * Launch AOU data as flat array
     */
    LAUNCH_AOU(index: number): number | null;
    launchAouLength(): number;
    launchAouArray(): Float64Array | null;
    /**
     * Impact AOU data as flat array
     */
    IMPACT_AOU(index: number): number | null;
    impactAouLength(): number;
    impactAouArray(): Float64Array | null;
    static startMST(builder: flatbuffers.Builder): void;
    static addId(builder: flatbuffers.Builder, IDOffset: flatbuffers.Offset): void;
    static addMsgType(builder: flatbuffers.Builder, MSG_TYPEOffset: flatbuffers.Offset): void;
    static addMsgSubType(builder: flatbuffers.Builder, MSG_SUB_TYPEOffset: flatbuffers.Offset): void;
    static addMsgCreateDate(builder: flatbuffers.Builder, MSG_CREATE_DATEOffset: flatbuffers.Offset): void;
    static addEnvironment(builder: flatbuffers.Builder, ENVIRONMENT: missileEnvironment): void;
    static addObjType(builder: flatbuffers.Builder, OBJ_TYPEOffset: flatbuffers.Offset): void;
    static addObjTypeConf(builder: flatbuffers.Builder, OBJ_TYPE_CONF: number): void;
    static addObjPlat(builder: flatbuffers.Builder, OBJ_PLATOffset: flatbuffers.Offset): void;
    static addObjIdent(builder: flatbuffers.Builder, OBJ_IDENTOffset: flatbuffers.Offset): void;
    static addSpaceAmp(builder: flatbuffers.Builder, SPACE_AMPOffset: flatbuffers.Offset): void;
    static addSpaceAmpConf(builder: flatbuffers.Builder, SPACE_AMP_CONF: number): void;
    static addObjAct(builder: flatbuffers.Builder, OBJ_ACTOffset: flatbuffers.Offset): void;
    static addSpaceSpecType(builder: flatbuffers.Builder, SPACE_SPEC_TYPEOffset: flatbuffers.Offset): void;
    static addAcftSubType(builder: flatbuffers.Builder, ACFT_SUB_TYPEOffset: flatbuffers.Offset): void;
    static addName(builder: flatbuffers.Builder, NAMEOffset: flatbuffers.Offset): void;
    static addCallSign(builder: flatbuffers.Builder, CALL_SIGNOffset: flatbuffers.Offset): void;
    static addLostTrkInd(builder: flatbuffers.Builder, LOST_TRK_IND: boolean): void;
    static addTrackId(builder: flatbuffers.Builder, TRACK_IDOffset: flatbuffers.Offset): void;
    static addParentTrackId(builder: flatbuffers.Builder, PARENT_TRACK_IDOffset: flatbuffers.Offset): void;
    static addMuidSrcTrk(builder: flatbuffers.Builder, MUID_SRC_TRKOffset: flatbuffers.Offset): void;
    static addMuidSrc(builder: flatbuffers.Builder, MUID_SRCOffset: flatbuffers.Offset): void;
    static addAlert(builder: flatbuffers.Builder, ALERTOffset: flatbuffers.Offset): void;
    static addMslStatus(builder: flatbuffers.Builder, MSL_STATUS: missileStatus): void;
    static addTs(builder: flatbuffers.Builder, TSOffset: flatbuffers.Offset): void;
    static addAouRptType(builder: flatbuffers.Builder, AOU_RPT_TYPE: aouReportType): void;
    static addContainment(builder: flatbuffers.Builder, CONTAINMENT: number): void;
    static addTrkConf(builder: flatbuffers.Builder, TRK_CONF: number): void;
    static addTrkQual(builder: flatbuffers.Builder, TRK_QUAL: number): void;
    static addAngElev(builder: flatbuffers.Builder, ANG_ELEV: number): void;
    static addSenMode(builder: flatbuffers.Builder, SEN_MODEOffset: flatbuffers.Offset): void;
    static addInfoSource(builder: flatbuffers.Builder, INFO_SOURCEOffset: flatbuffers.Offset): void;
    static addBoosting(builder: flatbuffers.Builder, BOOSTING: boolean): void;
    static addPolarSingLocLat(builder: flatbuffers.Builder, POLAR_SING_LOC_LAT: number): void;
    static addPolarSingLocLon(builder: flatbuffers.Builder, POLAR_SING_LOC_LON: number): void;
    static addEmgInd(builder: flatbuffers.Builder, EMG_IND: boolean): void;
    static addDropPtInd(builder: flatbuffers.Builder, DROP_PT_IND: boolean): void;
    static addLaunchTime(builder: flatbuffers.Builder, LAUNCH_TIMEOffset: flatbuffers.Offset): void;
    static addLaunchLat(builder: flatbuffers.Builder, LAUNCH_LAT: number): void;
    static addLaunchLon(builder: flatbuffers.Builder, LAUNCH_LON: number): void;
    static addAzCorr(builder: flatbuffers.Builder, AZ_CORR: number): void;
    static addBurnoutAlt(builder: flatbuffers.Builder, BURNOUT_ALT: number): void;
    static addLaunchAouType(builder: flatbuffers.Builder, LAUNCH_AOU_TYPE: aouReportType): void;
    static addImpactTime(builder: flatbuffers.Builder, IMPACT_TIMEOffset: flatbuffers.Offset): void;
    static addImpactLat(builder: flatbuffers.Builder, IMPACT_LAT: number): void;
    static addImpactLon(builder: flatbuffers.Builder, IMPACT_LON: number): void;
    static addImpactAouType(builder: flatbuffers.Builder, IMPACT_AOU_TYPE: aouReportType): void;
    static addVectorStartTime(builder: flatbuffers.Builder, VECTOR_START_TIMEOffset: flatbuffers.Offset): void;
    static addVectorStepSize(builder: flatbuffers.Builder, VECTOR_STEP_SIZE: number): void;
    static addVectorComponents(builder: flatbuffers.Builder, VECTOR_COMPONENTS: number): void;
    static addVectors(builder: flatbuffers.Builder, VECTORSOffset: flatbuffers.Offset): void;
    static createVectorsVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createVectorsVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startVectorsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addAouRpt(builder: flatbuffers.Builder, AOU_RPTOffset: flatbuffers.Offset): void;
    static createAouRptVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createAouRptVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startAouRptVector(builder: flatbuffers.Builder, numElems: number): void;
    static addLaunchAou(builder: flatbuffers.Builder, LAUNCH_AOUOffset: flatbuffers.Offset): void;
    static createLaunchAouVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createLaunchAouVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startLaunchAouVector(builder: flatbuffers.Builder, numElems: number): void;
    static addImpactAou(builder: flatbuffers.Builder, IMPACT_AOUOffset: flatbuffers.Offset): void;
    static createImpactAouVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createImpactAouVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startImpactAouVector(builder: flatbuffers.Builder, numElems: number): void;
    static endMST(builder: flatbuffers.Builder): flatbuffers.Offset;
    static finishMSTBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static finishSizePrefixedMSTBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static createMST(builder: flatbuffers.Builder, IDOffset: flatbuffers.Offset, MSG_TYPEOffset: flatbuffers.Offset, MSG_SUB_TYPEOffset: flatbuffers.Offset, MSG_CREATE_DATEOffset: flatbuffers.Offset, ENVIRONMENT: missileEnvironment, OBJ_TYPEOffset: flatbuffers.Offset, OBJ_TYPE_CONF: number, OBJ_PLATOffset: flatbuffers.Offset, OBJ_IDENTOffset: flatbuffers.Offset, SPACE_AMPOffset: flatbuffers.Offset, SPACE_AMP_CONF: number, OBJ_ACTOffset: flatbuffers.Offset, SPACE_SPEC_TYPEOffset: flatbuffers.Offset, ACFT_SUB_TYPEOffset: flatbuffers.Offset, NAMEOffset: flatbuffers.Offset, CALL_SIGNOffset: flatbuffers.Offset, LOST_TRK_IND: boolean, TRACK_IDOffset: flatbuffers.Offset, PARENT_TRACK_IDOffset: flatbuffers.Offset, MUID_SRC_TRKOffset: flatbuffers.Offset, MUID_SRCOffset: flatbuffers.Offset, ALERTOffset: flatbuffers.Offset, MSL_STATUS: missileStatus, TSOffset: flatbuffers.Offset, AOU_RPT_TYPE: aouReportType, CONTAINMENT: number, TRK_CONF: number, TRK_QUAL: number, ANG_ELEV: number, SEN_MODEOffset: flatbuffers.Offset, INFO_SOURCEOffset: flatbuffers.Offset, BOOSTING: boolean, POLAR_SING_LOC_LAT: number, POLAR_SING_LOC_LON: number, EMG_IND: boolean, DROP_PT_IND: boolean, LAUNCH_TIMEOffset: flatbuffers.Offset, LAUNCH_LAT: number, LAUNCH_LON: number, AZ_CORR: number, BURNOUT_ALT: number, LAUNCH_AOU_TYPE: aouReportType, IMPACT_TIMEOffset: flatbuffers.Offset, IMPACT_LAT: number, IMPACT_LON: number, IMPACT_AOU_TYPE: aouReportType, VECTOR_START_TIMEOffset: flatbuffers.Offset, VECTOR_STEP_SIZE: number, VECTOR_COMPONENTS: number, VECTORSOffset: flatbuffers.Offset, AOU_RPTOffset: flatbuffers.Offset, LAUNCH_AOUOffset: flatbuffers.Offset, IMPACT_AOUOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): MSTT;
    unpackTo(_o: MSTT): void;
}
export declare class MSTT implements flatbuffers.IGeneratedObject {
    ID: string | Uint8Array | null;
    MSG_TYPE: string | Uint8Array | null;
    MSG_SUB_TYPE: string | Uint8Array | null;
    MSG_CREATE_DATE: string | Uint8Array | null;
    ENVIRONMENT: missileEnvironment;
    OBJ_TYPE: string | Uint8Array | null;
    OBJ_TYPE_CONF: number;
    OBJ_PLAT: string | Uint8Array | null;
    OBJ_IDENT: string | Uint8Array | null;
    SPACE_AMP: string | Uint8Array | null;
    SPACE_AMP_CONF: number;
    OBJ_ACT: string | Uint8Array | null;
    SPACE_SPEC_TYPE: string | Uint8Array | null;
    ACFT_SUB_TYPE: string | Uint8Array | null;
    NAME: string | Uint8Array | null;
    CALL_SIGN: string | Uint8Array | null;
    LOST_TRK_IND: boolean;
    TRACK_ID: string | Uint8Array | null;
    PARENT_TRACK_ID: string | Uint8Array | null;
    MUID_SRC_TRK: string | Uint8Array | null;
    MUID_SRC: string | Uint8Array | null;
    ALERT: string | Uint8Array | null;
    MSL_STATUS: missileStatus;
    TS: string | Uint8Array | null;
    AOU_RPT_TYPE: aouReportType;
    CONTAINMENT: number;
    TRK_CONF: number;
    TRK_QUAL: number;
    ANG_ELEV: number;
    SEN_MODE: string | Uint8Array | null;
    INFO_SOURCE: string | Uint8Array | null;
    BOOSTING: boolean;
    POLAR_SING_LOC_LAT: number;
    POLAR_SING_LOC_LON: number;
    EMG_IND: boolean;
    DROP_PT_IND: boolean;
    LAUNCH_TIME: string | Uint8Array | null;
    LAUNCH_LAT: number;
    LAUNCH_LON: number;
    AZ_CORR: number;
    BURNOUT_ALT: number;
    LAUNCH_AOU_TYPE: aouReportType;
    IMPACT_TIME: string | Uint8Array | null;
    IMPACT_LAT: number;
    IMPACT_LON: number;
    IMPACT_AOU_TYPE: aouReportType;
    VECTOR_START_TIME: string | Uint8Array | null;
    VECTOR_STEP_SIZE: number;
    VECTOR_COMPONENTS: number;
    VECTORS: (number)[];
    AOU_RPT: (number)[];
    LAUNCH_AOU: (number)[];
    IMPACT_AOU: (number)[];
    constructor(ID?: string | Uint8Array | null, MSG_TYPE?: string | Uint8Array | null, MSG_SUB_TYPE?: string | Uint8Array | null, MSG_CREATE_DATE?: string | Uint8Array | null, ENVIRONMENT?: missileEnvironment, OBJ_TYPE?: string | Uint8Array | null, OBJ_TYPE_CONF?: number, OBJ_PLAT?: string | Uint8Array | null, OBJ_IDENT?: string | Uint8Array | null, SPACE_AMP?: string | Uint8Array | null, SPACE_AMP_CONF?: number, OBJ_ACT?: string | Uint8Array | null, SPACE_SPEC_TYPE?: string | Uint8Array | null, ACFT_SUB_TYPE?: string | Uint8Array | null, NAME?: string | Uint8Array | null, CALL_SIGN?: string | Uint8Array | null, LOST_TRK_IND?: boolean, TRACK_ID?: string | Uint8Array | null, PARENT_TRACK_ID?: string | Uint8Array | null, MUID_SRC_TRK?: string | Uint8Array | null, MUID_SRC?: string | Uint8Array | null, ALERT?: string | Uint8Array | null, MSL_STATUS?: missileStatus, TS?: string | Uint8Array | null, AOU_RPT_TYPE?: aouReportType, CONTAINMENT?: number, TRK_CONF?: number, TRK_QUAL?: number, ANG_ELEV?: number, SEN_MODE?: string | Uint8Array | null, INFO_SOURCE?: string | Uint8Array | null, BOOSTING?: boolean, POLAR_SING_LOC_LAT?: number, POLAR_SING_LOC_LON?: number, EMG_IND?: boolean, DROP_PT_IND?: boolean, LAUNCH_TIME?: string | Uint8Array | null, LAUNCH_LAT?: number, LAUNCH_LON?: number, AZ_CORR?: number, BURNOUT_ALT?: number, LAUNCH_AOU_TYPE?: aouReportType, IMPACT_TIME?: string | Uint8Array | null, IMPACT_LAT?: number, IMPACT_LON?: number, IMPACT_AOU_TYPE?: aouReportType, VECTOR_START_TIME?: string | Uint8Array | null, VECTOR_STEP_SIZE?: number, VECTOR_COMPONENTS?: number, VECTORS?: (number)[], AOU_RPT?: (number)[], LAUNCH_AOU?: (number)[], IMPACT_AOU?: (number)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=MST.d.ts.map