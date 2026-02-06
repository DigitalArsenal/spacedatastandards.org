import * as flatbuffers from 'flatbuffers';
import { launchOutcome } from './launchOutcome.js';
/**
 * Launch Event
 */
export declare class LNE implements flatbuffers.IUnpackableObject<LNET> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): LNE;
    static getRootAsLNE(bb: flatbuffers.ByteBuffer, obj?: LNE): LNE;
    static getSizePrefixedRootAsLNE(bb: flatbuffers.ByteBuffer, obj?: LNE): LNE;
    static bufferHasIdentifier(bb: flatbuffers.ByteBuffer): boolean;
    /**
     * Unique identifier
     */
    ID(): string | null;
    ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Satellite catalog number of launched object
     */
    SAT_NO(): number;
    /**
     * International designator (YYYY-NNNP)
     */
    ORIG_OBJECT_ID(): string | null;
    ORIG_OBJECT_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Source record this event was derived from
     */
    DERIVED_FROM(): string | null;
    DERIVED_FROM(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Classification date (ISO 8601)
     */
    DECLASSIFICATION_DATE(): string | null;
    DECLASSIFICATION_DATE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Classification marking
     */
    DECLASSIFICATION_STRING(): string | null;
    DECLASSIFICATION_STRING(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Message creation time (ISO 8601)
     */
    MSG_CREATE_DATE(): string | null;
    MSG_CREATE_DATE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Launch date and time (ISO 8601)
     */
    LAUNCH_DATE(): string | null;
    LAUNCH_DATE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Launch outcome
     */
    OUTCOME(): launchOutcome;
    /**
     * Launch failure code (if applicable)
     */
    LAUNCH_FAILURE_CODE(): string | null;
    LAUNCH_FAILURE_CODE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Basic encyclopedia number
     */
    BE_NUMBER(): string | null;
    BE_NUMBER(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Object suffix identifier
     */
    O_SUFFIX(): string | null;
    O_SUFFIX(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Launch facility name
     */
    LAUNCH_FACILITY_NAME(): string | null;
    LAUNCH_FACILITY_NAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Launch facility code
     */
    LAUNCH_FACILITY_CODE(): string | null;
    LAUNCH_FACILITY_CODE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Launch vehicle type
     */
    LAUNCH_VEHICLE(): string | null;
    LAUNCH_VEHICLE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Launch vehicle configuration
     */
    LAUNCH_VEHICLE_CONFIG(): string | null;
    LAUNCH_VEHICLE_CONFIG(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Target orbit type (LEO, MEO, GEO, HEO, SSO, etc.)
     */
    TARGET_ORBIT(): string | null;
    TARGET_ORBIT(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Number of objects placed on orbit
     */
    OBJECTS_ON_ORBIT(): number;
    /**
     * On-orbit reference identifier
     */
    ON_ORBIT(): string | null;
    ON_ORBIT(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Launch country or operator
     */
    LAUNCH_COUNTRY(): string | null;
    LAUNCH_COUNTRY(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Mission name or payload description
     */
    MISSION_NAME(): string | null;
    MISSION_NAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Additional remarks
     */
    REMARKS(): string | null;
    REMARKS(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    static startLNE(builder: flatbuffers.Builder): void;
    static addId(builder: flatbuffers.Builder, IDOffset: flatbuffers.Offset): void;
    static addSatNo(builder: flatbuffers.Builder, SAT_NO: number): void;
    static addOrigObjectId(builder: flatbuffers.Builder, ORIG_OBJECT_IDOffset: flatbuffers.Offset): void;
    static addDerivedFrom(builder: flatbuffers.Builder, DERIVED_FROMOffset: flatbuffers.Offset): void;
    static addDeclassificationDate(builder: flatbuffers.Builder, DECLASSIFICATION_DATEOffset: flatbuffers.Offset): void;
    static addDeclassificationString(builder: flatbuffers.Builder, DECLASSIFICATION_STRINGOffset: flatbuffers.Offset): void;
    static addMsgCreateDate(builder: flatbuffers.Builder, MSG_CREATE_DATEOffset: flatbuffers.Offset): void;
    static addLaunchDate(builder: flatbuffers.Builder, LAUNCH_DATEOffset: flatbuffers.Offset): void;
    static addOutcome(builder: flatbuffers.Builder, OUTCOME: launchOutcome): void;
    static addLaunchFailureCode(builder: flatbuffers.Builder, LAUNCH_FAILURE_CODEOffset: flatbuffers.Offset): void;
    static addBeNumber(builder: flatbuffers.Builder, BE_NUMBEROffset: flatbuffers.Offset): void;
    static addOSuffix(builder: flatbuffers.Builder, O_SUFFIXOffset: flatbuffers.Offset): void;
    static addLaunchFacilityName(builder: flatbuffers.Builder, LAUNCH_FACILITY_NAMEOffset: flatbuffers.Offset): void;
    static addLaunchFacilityCode(builder: flatbuffers.Builder, LAUNCH_FACILITY_CODEOffset: flatbuffers.Offset): void;
    static addLaunchVehicle(builder: flatbuffers.Builder, LAUNCH_VEHICLEOffset: flatbuffers.Offset): void;
    static addLaunchVehicleConfig(builder: flatbuffers.Builder, LAUNCH_VEHICLE_CONFIGOffset: flatbuffers.Offset): void;
    static addTargetOrbit(builder: flatbuffers.Builder, TARGET_ORBITOffset: flatbuffers.Offset): void;
    static addObjectsOnOrbit(builder: flatbuffers.Builder, OBJECTS_ON_ORBIT: number): void;
    static addOnOrbit(builder: flatbuffers.Builder, ON_ORBITOffset: flatbuffers.Offset): void;
    static addLaunchCountry(builder: flatbuffers.Builder, LAUNCH_COUNTRYOffset: flatbuffers.Offset): void;
    static addMissionName(builder: flatbuffers.Builder, MISSION_NAMEOffset: flatbuffers.Offset): void;
    static addRemarks(builder: flatbuffers.Builder, REMARKSOffset: flatbuffers.Offset): void;
    static endLNE(builder: flatbuffers.Builder): flatbuffers.Offset;
    static finishLNEBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static finishSizePrefixedLNEBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static createLNE(builder: flatbuffers.Builder, IDOffset: flatbuffers.Offset, SAT_NO: number, ORIG_OBJECT_IDOffset: flatbuffers.Offset, DERIVED_FROMOffset: flatbuffers.Offset, DECLASSIFICATION_DATEOffset: flatbuffers.Offset, DECLASSIFICATION_STRINGOffset: flatbuffers.Offset, MSG_CREATE_DATEOffset: flatbuffers.Offset, LAUNCH_DATEOffset: flatbuffers.Offset, OUTCOME: launchOutcome, LAUNCH_FAILURE_CODEOffset: flatbuffers.Offset, BE_NUMBEROffset: flatbuffers.Offset, O_SUFFIXOffset: flatbuffers.Offset, LAUNCH_FACILITY_NAMEOffset: flatbuffers.Offset, LAUNCH_FACILITY_CODEOffset: flatbuffers.Offset, LAUNCH_VEHICLEOffset: flatbuffers.Offset, LAUNCH_VEHICLE_CONFIGOffset: flatbuffers.Offset, TARGET_ORBITOffset: flatbuffers.Offset, OBJECTS_ON_ORBIT: number, ON_ORBITOffset: flatbuffers.Offset, LAUNCH_COUNTRYOffset: flatbuffers.Offset, MISSION_NAMEOffset: flatbuffers.Offset, REMARKSOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): LNET;
    unpackTo(_o: LNET): void;
}
export declare class LNET implements flatbuffers.IGeneratedObject {
    ID: string | Uint8Array | null;
    SAT_NO: number;
    ORIG_OBJECT_ID: string | Uint8Array | null;
    DERIVED_FROM: string | Uint8Array | null;
    DECLASSIFICATION_DATE: string | Uint8Array | null;
    DECLASSIFICATION_STRING: string | Uint8Array | null;
    MSG_CREATE_DATE: string | Uint8Array | null;
    LAUNCH_DATE: string | Uint8Array | null;
    OUTCOME: launchOutcome;
    LAUNCH_FAILURE_CODE: string | Uint8Array | null;
    BE_NUMBER: string | Uint8Array | null;
    O_SUFFIX: string | Uint8Array | null;
    LAUNCH_FACILITY_NAME: string | Uint8Array | null;
    LAUNCH_FACILITY_CODE: string | Uint8Array | null;
    LAUNCH_VEHICLE: string | Uint8Array | null;
    LAUNCH_VEHICLE_CONFIG: string | Uint8Array | null;
    TARGET_ORBIT: string | Uint8Array | null;
    OBJECTS_ON_ORBIT: number;
    ON_ORBIT: string | Uint8Array | null;
    LAUNCH_COUNTRY: string | Uint8Array | null;
    MISSION_NAME: string | Uint8Array | null;
    REMARKS: string | Uint8Array | null;
    constructor(ID?: string | Uint8Array | null, SAT_NO?: number, ORIG_OBJECT_ID?: string | Uint8Array | null, DERIVED_FROM?: string | Uint8Array | null, DECLASSIFICATION_DATE?: string | Uint8Array | null, DECLASSIFICATION_STRING?: string | Uint8Array | null, MSG_CREATE_DATE?: string | Uint8Array | null, LAUNCH_DATE?: string | Uint8Array | null, OUTCOME?: launchOutcome, LAUNCH_FAILURE_CODE?: string | Uint8Array | null, BE_NUMBER?: string | Uint8Array | null, O_SUFFIX?: string | Uint8Array | null, LAUNCH_FACILITY_NAME?: string | Uint8Array | null, LAUNCH_FACILITY_CODE?: string | Uint8Array | null, LAUNCH_VEHICLE?: string | Uint8Array | null, LAUNCH_VEHICLE_CONFIG?: string | Uint8Array | null, TARGET_ORBIT?: string | Uint8Array | null, OBJECTS_ON_ORBIT?: number, ON_ORBIT?: string | Uint8Array | null, LAUNCH_COUNTRY?: string | Uint8Array | null, MISSION_NAME?: string | Uint8Array | null, REMARKS?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=LNE.d.ts.map