import * as flatbuffers from 'flatbuffers';
import { eventCategory } from './eventCategory.js';
import { eventResult } from './eventResult.js';
/**
 * On-Orbit Event
 */
export declare class OOE implements flatbuffers.IUnpackableObject<OOET> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): OOE;
    static getRootAsOOE(bb: flatbuffers.ByteBuffer, obj?: OOE): OOE;
    static getSizePrefixedRootAsOOE(bb: flatbuffers.ByteBuffer, obj?: OOE): OOE;
    static bufferHasIdentifier(bb: flatbuffers.ByteBuffer): boolean;
    /**
     * Unique identifier
     */
    ID(): string | null;
    ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
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
     * Source record this was derived from
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
     * Event time (ISO 8601)
     */
    EVENT_TIME(): string | null;
    EVENT_TIME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Notes on event time accuracy
     */
    EVENT_TIME_NOTES(): string | null;
    EVENT_TIME_NOTES(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Event category
     */
    CATEGORY(): eventCategory;
    /**
     * Event result/outcome
     */
    RESULT(): eventResult;
    /**
     * Event type detail
     */
    EVENT_TYPE(): string | null;
    EVENT_TYPE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Operator organization identifier
     */
    OPERATOR_ORG_ID(): string | null;
    OPERATOR_ORG_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Owner organization identifier
     */
    OWNER_ORG_ID(): string | null;
    OWNER_ORG_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Lessee organization identifier
     */
    LESSEE_ORG_ID(): string | null;
    LESSEE_ORG_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Operated on behalf of organization
     */
    OPERATED_ON_BEHALF_OF_ORG_ID(): string | null;
    OPERATED_ON_BEHALF_OF_ORG_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * GEO longitude at event time (degrees east)
     */
    GEO_POSITION(): number;
    /**
     * Orbital plane slot
     */
    PLANE_SLOT(): string | null;
    PLANE_SLOT(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Orbital plane number
     */
    PLANE_NUMBER(): string | null;
    PLANE_NUMBER(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Position status at event time
     */
    POSITION_STATUS(): string | null;
    POSITION_STATUS(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Time until expected recovery (ISO 8601)
     */
    UNTIL_TIME(): string | null;
    UNTIL_TIME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Official loss date (ISO 8601)
     */
    OFFICIAL_LOSS_DATE(): string | null;
    OFFICIAL_LOSS_DATE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Financial loss amount (USD)
     */
    NET_AMOUNT(): number;
    /**
     * Root cause description
     */
    UNDERLYING_CAUSE(): string | null;
    UNDERLYING_CAUSE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Capability loss fraction (0-1)
     */
    CAPABILITY_LOSS(): number;
    /**
     * Capacity loss fraction (0-1)
     */
    CAPACITY_LOSS(): number;
    /**
     * Insurance loss amount (USD)
     */
    INSURANCE_LOSS(): number;
    /**
     * Third-party insurance loss (USD)
     */
    THIRD_PARTY_INSURANCE_LOSS(): number;
    /**
     * Number of personnel injured
     */
    INJURED(): number;
    /**
     * Number of fatalities
     */
    KILLED(): number;
    /**
     * Spacecraft age at event (years)
     */
    AGE_AT_EVENT(): number;
    /**
     * Design life remaining at event (years)
     */
    LIFE_LOST(): number;
    /**
     * Flight phase achieved
     */
    ACHIEVED_FLIGHT_PHASE(): string | null;
    ACHIEVED_FLIGHT_PHASE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Flight phase at occurrence
     */
    OCCURRENCE_FLIGHT_PHASE(): string | null;
    OCCURRENCE_FLIGHT_PHASE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Stage at fault
     */
    STAGE_AT_FAULT(): string | null;
    STAGE_AT_FAULT(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Equipment at fault
     */
    EQUIPMENT_AT_FAULT(): string | null;
    EQUIPMENT_AT_FAULT(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Equipment type at fault
     */
    EQUIPMENT_TYPE_AT_FAULT(): string | null;
    EQUIPMENT_TYPE_AT_FAULT(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Equipment part at fault
     */
    EQUIPMENT_PART_AT_FAULT(): string | null;
    EQUIPMENT_PART_AT_FAULT(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Consequential equipment failure
     */
    CONSEQUENTIAL_EQUIPMENT_FAILURE(): string | null;
    CONSEQUENTIAL_EQUIPMENT_FAILURE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * True if orbit is inclined
     */
    INCLINED(): boolean;
    /**
     * Event description
     */
    DESCRIPTION(): string | null;
    DESCRIPTION(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Additional remarks
     */
    REMARKS(): string | null;
    REMARKS(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Object status after event
     */
    OBJECT_STATUS(): string | null;
    OBJECT_STATUS(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Satellite position after event
     */
    SATELLITE_POSITION(): string | null;
    SATELLITE_POSITION(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * On-orbit reference
     */
    ON_ORBIT(): string | null;
    ON_ORBIT(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    static startOOE(builder: flatbuffers.Builder): void;
    static addId(builder: flatbuffers.Builder, IDOffset: flatbuffers.Offset): void;
    static addSatNo(builder: flatbuffers.Builder, SAT_NO: number): void;
    static addOrigObjectId(builder: flatbuffers.Builder, ORIG_OBJECT_IDOffset: flatbuffers.Offset): void;
    static addDerivedFrom(builder: flatbuffers.Builder, DERIVED_FROMOffset: flatbuffers.Offset): void;
    static addDeclassificationDate(builder: flatbuffers.Builder, DECLASSIFICATION_DATEOffset: flatbuffers.Offset): void;
    static addDeclassificationString(builder: flatbuffers.Builder, DECLASSIFICATION_STRINGOffset: flatbuffers.Offset): void;
    static addEventTime(builder: flatbuffers.Builder, EVENT_TIMEOffset: flatbuffers.Offset): void;
    static addEventTimeNotes(builder: flatbuffers.Builder, EVENT_TIME_NOTESOffset: flatbuffers.Offset): void;
    static addCategory(builder: flatbuffers.Builder, CATEGORY: eventCategory): void;
    static addResult(builder: flatbuffers.Builder, RESULT: eventResult): void;
    static addEventType(builder: flatbuffers.Builder, EVENT_TYPEOffset: flatbuffers.Offset): void;
    static addOperatorOrgId(builder: flatbuffers.Builder, OPERATOR_ORG_IDOffset: flatbuffers.Offset): void;
    static addOwnerOrgId(builder: flatbuffers.Builder, OWNER_ORG_IDOffset: flatbuffers.Offset): void;
    static addLesseeOrgId(builder: flatbuffers.Builder, LESSEE_ORG_IDOffset: flatbuffers.Offset): void;
    static addOperatedOnBehalfOfOrgId(builder: flatbuffers.Builder, OPERATED_ON_BEHALF_OF_ORG_IDOffset: flatbuffers.Offset): void;
    static addGeoPosition(builder: flatbuffers.Builder, GEO_POSITION: number): void;
    static addPlaneSlot(builder: flatbuffers.Builder, PLANE_SLOTOffset: flatbuffers.Offset): void;
    static addPlaneNumber(builder: flatbuffers.Builder, PLANE_NUMBEROffset: flatbuffers.Offset): void;
    static addPositionStatus(builder: flatbuffers.Builder, POSITION_STATUSOffset: flatbuffers.Offset): void;
    static addUntilTime(builder: flatbuffers.Builder, UNTIL_TIMEOffset: flatbuffers.Offset): void;
    static addOfficialLossDate(builder: flatbuffers.Builder, OFFICIAL_LOSS_DATEOffset: flatbuffers.Offset): void;
    static addNetAmount(builder: flatbuffers.Builder, NET_AMOUNT: number): void;
    static addUnderlyingCause(builder: flatbuffers.Builder, UNDERLYING_CAUSEOffset: flatbuffers.Offset): void;
    static addCapabilityLoss(builder: flatbuffers.Builder, CAPABILITY_LOSS: number): void;
    static addCapacityLoss(builder: flatbuffers.Builder, CAPACITY_LOSS: number): void;
    static addInsuranceLoss(builder: flatbuffers.Builder, INSURANCE_LOSS: number): void;
    static addThirdPartyInsuranceLoss(builder: flatbuffers.Builder, THIRD_PARTY_INSURANCE_LOSS: number): void;
    static addInjured(builder: flatbuffers.Builder, INJURED: number): void;
    static addKilled(builder: flatbuffers.Builder, KILLED: number): void;
    static addAgeAtEvent(builder: flatbuffers.Builder, AGE_AT_EVENT: number): void;
    static addLifeLost(builder: flatbuffers.Builder, LIFE_LOST: number): void;
    static addAchievedFlightPhase(builder: flatbuffers.Builder, ACHIEVED_FLIGHT_PHASEOffset: flatbuffers.Offset): void;
    static addOccurrenceFlightPhase(builder: flatbuffers.Builder, OCCURRENCE_FLIGHT_PHASEOffset: flatbuffers.Offset): void;
    static addStageAtFault(builder: flatbuffers.Builder, STAGE_AT_FAULTOffset: flatbuffers.Offset): void;
    static addEquipmentAtFault(builder: flatbuffers.Builder, EQUIPMENT_AT_FAULTOffset: flatbuffers.Offset): void;
    static addEquipmentTypeAtFault(builder: flatbuffers.Builder, EQUIPMENT_TYPE_AT_FAULTOffset: flatbuffers.Offset): void;
    static addEquipmentPartAtFault(builder: flatbuffers.Builder, EQUIPMENT_PART_AT_FAULTOffset: flatbuffers.Offset): void;
    static addConsequentialEquipmentFailure(builder: flatbuffers.Builder, CONSEQUENTIAL_EQUIPMENT_FAILUREOffset: flatbuffers.Offset): void;
    static addInclined(builder: flatbuffers.Builder, INCLINED: boolean): void;
    static addDescription(builder: flatbuffers.Builder, DESCRIPTIONOffset: flatbuffers.Offset): void;
    static addRemarks(builder: flatbuffers.Builder, REMARKSOffset: flatbuffers.Offset): void;
    static addObjectStatus(builder: flatbuffers.Builder, OBJECT_STATUSOffset: flatbuffers.Offset): void;
    static addSatellitePosition(builder: flatbuffers.Builder, SATELLITE_POSITIONOffset: flatbuffers.Offset): void;
    static addOnOrbit(builder: flatbuffers.Builder, ON_ORBITOffset: flatbuffers.Offset): void;
    static endOOE(builder: flatbuffers.Builder): flatbuffers.Offset;
    static finishOOEBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static finishSizePrefixedOOEBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static createOOE(builder: flatbuffers.Builder, IDOffset: flatbuffers.Offset, SAT_NO: number, ORIG_OBJECT_IDOffset: flatbuffers.Offset, DERIVED_FROMOffset: flatbuffers.Offset, DECLASSIFICATION_DATEOffset: flatbuffers.Offset, DECLASSIFICATION_STRINGOffset: flatbuffers.Offset, EVENT_TIMEOffset: flatbuffers.Offset, EVENT_TIME_NOTESOffset: flatbuffers.Offset, CATEGORY: eventCategory, RESULT: eventResult, EVENT_TYPEOffset: flatbuffers.Offset, OPERATOR_ORG_IDOffset: flatbuffers.Offset, OWNER_ORG_IDOffset: flatbuffers.Offset, LESSEE_ORG_IDOffset: flatbuffers.Offset, OPERATED_ON_BEHALF_OF_ORG_IDOffset: flatbuffers.Offset, GEO_POSITION: number, PLANE_SLOTOffset: flatbuffers.Offset, PLANE_NUMBEROffset: flatbuffers.Offset, POSITION_STATUSOffset: flatbuffers.Offset, UNTIL_TIMEOffset: flatbuffers.Offset, OFFICIAL_LOSS_DATEOffset: flatbuffers.Offset, NET_AMOUNT: number, UNDERLYING_CAUSEOffset: flatbuffers.Offset, CAPABILITY_LOSS: number, CAPACITY_LOSS: number, INSURANCE_LOSS: number, THIRD_PARTY_INSURANCE_LOSS: number, INJURED: number, KILLED: number, AGE_AT_EVENT: number, LIFE_LOST: number, ACHIEVED_FLIGHT_PHASEOffset: flatbuffers.Offset, OCCURRENCE_FLIGHT_PHASEOffset: flatbuffers.Offset, STAGE_AT_FAULTOffset: flatbuffers.Offset, EQUIPMENT_AT_FAULTOffset: flatbuffers.Offset, EQUIPMENT_TYPE_AT_FAULTOffset: flatbuffers.Offset, EQUIPMENT_PART_AT_FAULTOffset: flatbuffers.Offset, CONSEQUENTIAL_EQUIPMENT_FAILUREOffset: flatbuffers.Offset, INCLINED: boolean, DESCRIPTIONOffset: flatbuffers.Offset, REMARKSOffset: flatbuffers.Offset, OBJECT_STATUSOffset: flatbuffers.Offset, SATELLITE_POSITIONOffset: flatbuffers.Offset, ON_ORBITOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): OOET;
    unpackTo(_o: OOET): void;
}
export declare class OOET implements flatbuffers.IGeneratedObject {
    ID: string | Uint8Array | null;
    SAT_NO: number;
    ORIG_OBJECT_ID: string | Uint8Array | null;
    DERIVED_FROM: string | Uint8Array | null;
    DECLASSIFICATION_DATE: string | Uint8Array | null;
    DECLASSIFICATION_STRING: string | Uint8Array | null;
    EVENT_TIME: string | Uint8Array | null;
    EVENT_TIME_NOTES: string | Uint8Array | null;
    CATEGORY: eventCategory;
    RESULT: eventResult;
    EVENT_TYPE: string | Uint8Array | null;
    OPERATOR_ORG_ID: string | Uint8Array | null;
    OWNER_ORG_ID: string | Uint8Array | null;
    LESSEE_ORG_ID: string | Uint8Array | null;
    OPERATED_ON_BEHALF_OF_ORG_ID: string | Uint8Array | null;
    GEO_POSITION: number;
    PLANE_SLOT: string | Uint8Array | null;
    PLANE_NUMBER: string | Uint8Array | null;
    POSITION_STATUS: string | Uint8Array | null;
    UNTIL_TIME: string | Uint8Array | null;
    OFFICIAL_LOSS_DATE: string | Uint8Array | null;
    NET_AMOUNT: number;
    UNDERLYING_CAUSE: string | Uint8Array | null;
    CAPABILITY_LOSS: number;
    CAPACITY_LOSS: number;
    INSURANCE_LOSS: number;
    THIRD_PARTY_INSURANCE_LOSS: number;
    INJURED: number;
    KILLED: number;
    AGE_AT_EVENT: number;
    LIFE_LOST: number;
    ACHIEVED_FLIGHT_PHASE: string | Uint8Array | null;
    OCCURRENCE_FLIGHT_PHASE: string | Uint8Array | null;
    STAGE_AT_FAULT: string | Uint8Array | null;
    EQUIPMENT_AT_FAULT: string | Uint8Array | null;
    EQUIPMENT_TYPE_AT_FAULT: string | Uint8Array | null;
    EQUIPMENT_PART_AT_FAULT: string | Uint8Array | null;
    CONSEQUENTIAL_EQUIPMENT_FAILURE: string | Uint8Array | null;
    INCLINED: boolean;
    DESCRIPTION: string | Uint8Array | null;
    REMARKS: string | Uint8Array | null;
    OBJECT_STATUS: string | Uint8Array | null;
    SATELLITE_POSITION: string | Uint8Array | null;
    ON_ORBIT: string | Uint8Array | null;
    constructor(ID?: string | Uint8Array | null, SAT_NO?: number, ORIG_OBJECT_ID?: string | Uint8Array | null, DERIVED_FROM?: string | Uint8Array | null, DECLASSIFICATION_DATE?: string | Uint8Array | null, DECLASSIFICATION_STRING?: string | Uint8Array | null, EVENT_TIME?: string | Uint8Array | null, EVENT_TIME_NOTES?: string | Uint8Array | null, CATEGORY?: eventCategory, RESULT?: eventResult, EVENT_TYPE?: string | Uint8Array | null, OPERATOR_ORG_ID?: string | Uint8Array | null, OWNER_ORG_ID?: string | Uint8Array | null, LESSEE_ORG_ID?: string | Uint8Array | null, OPERATED_ON_BEHALF_OF_ORG_ID?: string | Uint8Array | null, GEO_POSITION?: number, PLANE_SLOT?: string | Uint8Array | null, PLANE_NUMBER?: string | Uint8Array | null, POSITION_STATUS?: string | Uint8Array | null, UNTIL_TIME?: string | Uint8Array | null, OFFICIAL_LOSS_DATE?: string | Uint8Array | null, NET_AMOUNT?: number, UNDERLYING_CAUSE?: string | Uint8Array | null, CAPABILITY_LOSS?: number, CAPACITY_LOSS?: number, INSURANCE_LOSS?: number, THIRD_PARTY_INSURANCE_LOSS?: number, INJURED?: number, KILLED?: number, AGE_AT_EVENT?: number, LIFE_LOST?: number, ACHIEVED_FLIGHT_PHASE?: string | Uint8Array | null, OCCURRENCE_FLIGHT_PHASE?: string | Uint8Array | null, STAGE_AT_FAULT?: string | Uint8Array | null, EQUIPMENT_AT_FAULT?: string | Uint8Array | null, EQUIPMENT_TYPE_AT_FAULT?: string | Uint8Array | null, EQUIPMENT_PART_AT_FAULT?: string | Uint8Array | null, CONSEQUENTIAL_EQUIPMENT_FAILURE?: string | Uint8Array | null, INCLINED?: boolean, DESCRIPTION?: string | Uint8Array | null, REMARKS?: string | Uint8Array | null, OBJECT_STATUS?: string | Uint8Array | null, SATELLITE_POSITION?: string | Uint8Array | null, ON_ORBIT?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=OOE.d.ts.map