import * as flatbuffers from 'flatbuffers';
import { ACMAttitudeBlock, ACMAttitudeBlockT } from './ACMAttitudeBlock.js';
import { ACMCovarianceBlock, ACMCovarianceBlockT } from './ACMCovarianceBlock.js';
import { ACMDetermination, ACMDeterminationT } from './ACMDetermination.js';
import { ACMManeuverBlock, ACMManeuverBlockT } from './ACMManeuverBlock.js';
import { ACMUserDefinedParameter, ACMUserDefinedParameterT } from './ACMUserDefinedParameter.js';
import { attCovariance, attCovarianceT } from './attCovariance.js';
import { attManeuver, attManeuverT } from './attManeuver.js';
import { attPhysicalProperties, attPhysicalPropertiesT } from './attPhysicalProperties.js';
import { attitudeState, attitudeStateT } from './attitudeState.js';
import { maneuverableFlag } from './maneuverableFlag.js';
/**
 * Attitude Comprehensive Message
 */
export declare class ACM implements flatbuffers.IUnpackableObject<ACMT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): ACM;
    static getRootAsACM(bb: flatbuffers.ByteBuffer, obj?: ACM): ACM;
    static getSizePrefixedRootAsACM(bb: flatbuffers.ByteBuffer, obj?: ACM): ACM;
    static bufferHasIdentifier(bb: flatbuffers.ByteBuffer): boolean;
    /**
     * CCSDS ACM version
     */
    CCSDS_ACM_VERS(): string | null;
    CCSDS_ACM_VERS(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Message creation date (ISO 8601)
     */
    CREATION_DATE(): string | null;
    CREATION_DATE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Creating organization
     */
    ORIGINATOR(): string | null;
    ORIGINATOR(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Object name
     */
    OBJECT_NAME(): string | null;
    OBJECT_NAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * International designator
     */
    OBJECT_ID(): string | null;
    OBJECT_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Catalog name
     */
    CATALOG_NAME(): string | null;
    CATALOG_NAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Epoch of state (ISO 8601)
     */
    EPOCH(): string | null;
    EPOCH(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Time system
     */
    TIME_SYSTEM(): string | null;
    TIME_SYSTEM(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Attitude states
     */
    ATT_STATES(index: number, obj?: attitudeState): attitudeState | null;
    attStatesLength(): number;
    /**
     * Physical properties
     */
    PHYS_PROPERTIES(obj?: attPhysicalProperties): attPhysicalProperties | null;
    /**
     * Attitude covariance data
     */
    COV_DATA(index: number, obj?: attCovariance): attCovariance | null;
    covDataLength(): number;
    /**
     * Attitude maneuvers
     */
    MANEUVERS(index: number, obj?: attManeuver): attManeuver | null;
    maneuversLength(): number;
    /**
     * Maneuverability status
     */
    MANEUVERABLE(): maneuverableFlag;
    /**
     * COMMENT lines of the message header, metadata and user-defined data
     * (CCSDS 504.0-B-2), in message order, joined by a line feed. A time history,
     * covariance, maneuver or determination block's own comments stay with it.
     */
    COMMENT(): string | null;
    COMMENT(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * CLASSIFICATION of the message: the optional header keyword stating its
     * security classification or handling caveat.
     */
    CLASSIFICATION(): string | null;
    CLASSIFICATION(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * MESSAGE_ID: the optional header keyword, an identifier the originator makes
     * unique for this message.
     */
    MESSAGE_ID(): string | null;
    MESSAGE_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * OBJECT_DESIGNATOR (CCSDS 504.0-B-2): the object's identifier in CATALOG_NAME.
     * OBJECT_ID above holds the INTERNATIONAL_DESIGNATOR of the message and EPOCH
     * above its EPOCH_TZERO, the epoch every relative time is measured from.
     */
    OBJECT_DESIGNATOR(): string | null;
    OBJECT_DESIGNATOR(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * ORIGINATOR_POC: point of contact at the originator.
     */
    ORIGINATOR_POC(): string | null;
    ORIGINATOR_POC(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * ORIGINATOR_POSITION: position of the point of contact.
     */
    ORIGINATOR_POSITION(): string | null;
    ORIGINATOR_POSITION(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * ORIGINATOR_PHONE: telephone number of the point of contact.
     */
    ORIGINATOR_PHONE(): string | null;
    ORIGINATOR_PHONE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * ORIGINATOR_EMAIL: email address of the point of contact.
     */
    ORIGINATOR_EMAIL(): string | null;
    ORIGINATOR_EMAIL(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * ORIGINATOR_ADDRESS: postal address of the point of contact.
     */
    ORIGINATOR_ADDRESS(): string | null;
    ORIGINATOR_ADDRESS(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * ODM_MSG_LINK: the identifier of the Orbit Data Message this attitude goes with.
     */
    ODM_MSG_LINK(): string | null;
    ODM_MSG_LINK(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * CENTER_NAME: the orbit center, when the message states one.
     */
    CENTER_NAME(): string | null;
    CENTER_NAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * ACM_DATA_ELEMENTS: comma-separated list of the data blocks the message holds.
     */
    ACM_DATA_ELEMENTS(): string | null;
    ACM_DATA_ELEMENTS(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * START_TIME: start of the total time span the message covers.
     */
    START_TIME(): string | null;
    START_TIME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * STOP_TIME: end of the total time span the message covers.
     */
    STOP_TIME(): string | null;
    STOP_TIME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * TAIMUTC_AT_TZERO in seconds, NaN when not stated.
     */
    TAIMUTC_AT_TZERO(): number;
    /**
     * NEXT_LEAP_EPOCH: epoch of the next leap second after EPOCH_TZERO.
     */
    NEXT_LEAP_EPOCH(): string | null;
    NEXT_LEAP_EPOCH(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * NEXT_LEAP_TAIMUTC in seconds, NaN when not stated.
     */
    NEXT_LEAP_TAIMUTC(): number;
    /**
     * Attitude state time histories (ATT_START blocks), in message order.
     */
    ATT_BLOCKS(index: number, obj?: ACMAttitudeBlock): ACMAttitudeBlock | null;
    attBlocksLength(): number;
    /**
     * Covariance time histories (COV_START blocks), in message order.
     */
    COV_BLOCKS(index: number, obj?: ACMCovarianceBlock): ACMCovarianceBlock | null;
    covBlocksLength(): number;
    /**
     * Maneuver specifications (MAN_START blocks), in message order.
     */
    MAN_BLOCKS(index: number, obj?: ACMManeuverBlock): ACMManeuverBlock | null;
    manBlocksLength(): number;
    /**
     * The attitude determination data (AD_START block), when the message has them.
     */
    DETERMINATION(obj?: ACMDetermination): ACMDetermination | null;
    /**
     * Every USER_DEFINED parameter of the message, in message order.
     */
    USER_DEFINED_PARAMETERS(index: number, obj?: ACMUserDefinedParameter): ACMUserDefinedParameter | null;
    userDefinedParametersLength(): number;
    static startACM(builder: flatbuffers.Builder): void;
    static addCcsdsAcmVers(builder: flatbuffers.Builder, CCSDS_ACM_VERSOffset: flatbuffers.Offset): void;
    static addCreationDate(builder: flatbuffers.Builder, CREATION_DATEOffset: flatbuffers.Offset): void;
    static addOriginator(builder: flatbuffers.Builder, ORIGINATOROffset: flatbuffers.Offset): void;
    static addObjectName(builder: flatbuffers.Builder, OBJECT_NAMEOffset: flatbuffers.Offset): void;
    static addObjectId(builder: flatbuffers.Builder, OBJECT_IDOffset: flatbuffers.Offset): void;
    static addCatalogName(builder: flatbuffers.Builder, CATALOG_NAMEOffset: flatbuffers.Offset): void;
    static addEpoch(builder: flatbuffers.Builder, EPOCHOffset: flatbuffers.Offset): void;
    static addTimeSystem(builder: flatbuffers.Builder, TIME_SYSTEMOffset: flatbuffers.Offset): void;
    static addAttStates(builder: flatbuffers.Builder, ATT_STATESOffset: flatbuffers.Offset): void;
    static createAttStatesVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startAttStatesVector(builder: flatbuffers.Builder, numElems: number): void;
    static addPhysProperties(builder: flatbuffers.Builder, PHYS_PROPERTIESOffset: flatbuffers.Offset): void;
    static addCovData(builder: flatbuffers.Builder, COV_DATAOffset: flatbuffers.Offset): void;
    static createCovDataVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startCovDataVector(builder: flatbuffers.Builder, numElems: number): void;
    static addManeuvers(builder: flatbuffers.Builder, MANEUVERSOffset: flatbuffers.Offset): void;
    static createManeuversVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startManeuversVector(builder: flatbuffers.Builder, numElems: number): void;
    static addManeuverable(builder: flatbuffers.Builder, MANEUVERABLE: maneuverableFlag): void;
    static addComment(builder: flatbuffers.Builder, COMMENTOffset: flatbuffers.Offset): void;
    static addClassification(builder: flatbuffers.Builder, CLASSIFICATIONOffset: flatbuffers.Offset): void;
    static addMessageId(builder: flatbuffers.Builder, MESSAGE_IDOffset: flatbuffers.Offset): void;
    static addObjectDesignator(builder: flatbuffers.Builder, OBJECT_DESIGNATOROffset: flatbuffers.Offset): void;
    static addOriginatorPoc(builder: flatbuffers.Builder, ORIGINATOR_POCOffset: flatbuffers.Offset): void;
    static addOriginatorPosition(builder: flatbuffers.Builder, ORIGINATOR_POSITIONOffset: flatbuffers.Offset): void;
    static addOriginatorPhone(builder: flatbuffers.Builder, ORIGINATOR_PHONEOffset: flatbuffers.Offset): void;
    static addOriginatorEmail(builder: flatbuffers.Builder, ORIGINATOR_EMAILOffset: flatbuffers.Offset): void;
    static addOriginatorAddress(builder: flatbuffers.Builder, ORIGINATOR_ADDRESSOffset: flatbuffers.Offset): void;
    static addOdmMsgLink(builder: flatbuffers.Builder, ODM_MSG_LINKOffset: flatbuffers.Offset): void;
    static addCenterName(builder: flatbuffers.Builder, CENTER_NAMEOffset: flatbuffers.Offset): void;
    static addAcmDataElements(builder: flatbuffers.Builder, ACM_DATA_ELEMENTSOffset: flatbuffers.Offset): void;
    static addStartTime(builder: flatbuffers.Builder, START_TIMEOffset: flatbuffers.Offset): void;
    static addStopTime(builder: flatbuffers.Builder, STOP_TIMEOffset: flatbuffers.Offset): void;
    static addTaimutcAtTzero(builder: flatbuffers.Builder, TAIMUTC_AT_TZERO: number): void;
    static addNextLeapEpoch(builder: flatbuffers.Builder, NEXT_LEAP_EPOCHOffset: flatbuffers.Offset): void;
    static addNextLeapTaimutc(builder: flatbuffers.Builder, NEXT_LEAP_TAIMUTC: number): void;
    static addAttBlocks(builder: flatbuffers.Builder, ATT_BLOCKSOffset: flatbuffers.Offset): void;
    static createAttBlocksVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startAttBlocksVector(builder: flatbuffers.Builder, numElems: number): void;
    static addCovBlocks(builder: flatbuffers.Builder, COV_BLOCKSOffset: flatbuffers.Offset): void;
    static createCovBlocksVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startCovBlocksVector(builder: flatbuffers.Builder, numElems: number): void;
    static addManBlocks(builder: flatbuffers.Builder, MAN_BLOCKSOffset: flatbuffers.Offset): void;
    static createManBlocksVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startManBlocksVector(builder: flatbuffers.Builder, numElems: number): void;
    static addDetermination(builder: flatbuffers.Builder, DETERMINATIONOffset: flatbuffers.Offset): void;
    static addUserDefinedParameters(builder: flatbuffers.Builder, USER_DEFINED_PARAMETERSOffset: flatbuffers.Offset): void;
    static createUserDefinedParametersVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startUserDefinedParametersVector(builder: flatbuffers.Builder, numElems: number): void;
    static endACM(builder: flatbuffers.Builder): flatbuffers.Offset;
    static finishACMBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static finishSizePrefixedACMBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    unpack(): ACMT;
    unpackTo(_o: ACMT): void;
}
export declare class ACMT implements flatbuffers.IGeneratedObject {
    CCSDS_ACM_VERS: string | Uint8Array | null;
    CREATION_DATE: string | Uint8Array | null;
    ORIGINATOR: string | Uint8Array | null;
    OBJECT_NAME: string | Uint8Array | null;
    OBJECT_ID: string | Uint8Array | null;
    CATALOG_NAME: string | Uint8Array | null;
    EPOCH: string | Uint8Array | null;
    TIME_SYSTEM: string | Uint8Array | null;
    ATT_STATES: (attitudeStateT)[];
    PHYS_PROPERTIES: attPhysicalPropertiesT | null;
    COV_DATA: (attCovarianceT)[];
    MANEUVERS: (attManeuverT)[];
    MANEUVERABLE: maneuverableFlag;
    COMMENT: string | Uint8Array | null;
    CLASSIFICATION: string | Uint8Array | null;
    MESSAGE_ID: string | Uint8Array | null;
    OBJECT_DESIGNATOR: string | Uint8Array | null;
    ORIGINATOR_POC: string | Uint8Array | null;
    ORIGINATOR_POSITION: string | Uint8Array | null;
    ORIGINATOR_PHONE: string | Uint8Array | null;
    ORIGINATOR_EMAIL: string | Uint8Array | null;
    ORIGINATOR_ADDRESS: string | Uint8Array | null;
    ODM_MSG_LINK: string | Uint8Array | null;
    CENTER_NAME: string | Uint8Array | null;
    ACM_DATA_ELEMENTS: string | Uint8Array | null;
    START_TIME: string | Uint8Array | null;
    STOP_TIME: string | Uint8Array | null;
    TAIMUTC_AT_TZERO: number;
    NEXT_LEAP_EPOCH: string | Uint8Array | null;
    NEXT_LEAP_TAIMUTC: number;
    ATT_BLOCKS: (ACMAttitudeBlockT)[];
    COV_BLOCKS: (ACMCovarianceBlockT)[];
    MAN_BLOCKS: (ACMManeuverBlockT)[];
    DETERMINATION: ACMDeterminationT | null;
    USER_DEFINED_PARAMETERS: (ACMUserDefinedParameterT)[];
    constructor(CCSDS_ACM_VERS?: string | Uint8Array | null, CREATION_DATE?: string | Uint8Array | null, ORIGINATOR?: string | Uint8Array | null, OBJECT_NAME?: string | Uint8Array | null, OBJECT_ID?: string | Uint8Array | null, CATALOG_NAME?: string | Uint8Array | null, EPOCH?: string | Uint8Array | null, TIME_SYSTEM?: string | Uint8Array | null, ATT_STATES?: (attitudeStateT)[], PHYS_PROPERTIES?: attPhysicalPropertiesT | null, COV_DATA?: (attCovarianceT)[], MANEUVERS?: (attManeuverT)[], MANEUVERABLE?: maneuverableFlag, COMMENT?: string | Uint8Array | null, CLASSIFICATION?: string | Uint8Array | null, MESSAGE_ID?: string | Uint8Array | null, OBJECT_DESIGNATOR?: string | Uint8Array | null, ORIGINATOR_POC?: string | Uint8Array | null, ORIGINATOR_POSITION?: string | Uint8Array | null, ORIGINATOR_PHONE?: string | Uint8Array | null, ORIGINATOR_EMAIL?: string | Uint8Array | null, ORIGINATOR_ADDRESS?: string | Uint8Array | null, ODM_MSG_LINK?: string | Uint8Array | null, CENTER_NAME?: string | Uint8Array | null, ACM_DATA_ELEMENTS?: string | Uint8Array | null, START_TIME?: string | Uint8Array | null, STOP_TIME?: string | Uint8Array | null, TAIMUTC_AT_TZERO?: number, NEXT_LEAP_EPOCH?: string | Uint8Array | null, NEXT_LEAP_TAIMUTC?: number, ATT_BLOCKS?: (ACMAttitudeBlockT)[], COV_BLOCKS?: (ACMCovarianceBlockT)[], MAN_BLOCKS?: (ACMManeuverBlockT)[], DETERMINATION?: ACMDeterminationT | null, USER_DEFINED_PARAMETERS?: (ACMUserDefinedParameterT)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=ACM.d.ts.map