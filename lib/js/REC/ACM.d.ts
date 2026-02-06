import * as flatbuffers from 'flatbuffers';
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
     * Additional comments
     */
    COMMENT(): string | null;
    COMMENT(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
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
    constructor(CCSDS_ACM_VERS?: string | Uint8Array | null, CREATION_DATE?: string | Uint8Array | null, ORIGINATOR?: string | Uint8Array | null, OBJECT_NAME?: string | Uint8Array | null, OBJECT_ID?: string | Uint8Array | null, CATALOG_NAME?: string | Uint8Array | null, EPOCH?: string | Uint8Array | null, TIME_SYSTEM?: string | Uint8Array | null, ATT_STATES?: (attitudeStateT)[], PHYS_PROPERTIES?: attPhysicalPropertiesT | null, COV_DATA?: (attCovarianceT)[], MANEUVERS?: (attManeuverT)[], MANEUVERABLE?: maneuverableFlag, COMMENT?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=ACM.d.ts.map