import * as flatbuffers from 'flatbuffers';
export declare class Metadata implements flatbuffers.IUnpackableObject<MetadataT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): Metadata;
    static getRootAsMetadata(bb: flatbuffers.ByteBuffer, obj?: Metadata): Metadata;
    static getSizePrefixedRootAsMetadata(bb: flatbuffers.ByteBuffer, obj?: Metadata): Metadata;
    /**
     * Comments in the Metadata section.
     */
    COMMENT(index: number): string;
    COMMENT(index: number, optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    commentLength(): number;
    /**
     * Free-text field containing the name of the object.
     */
    OBJECT_NAME(): string | null;
    OBJECT_NAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * International designator for the object as assigned by COSPAR.
     */
    INTERNATIONAL_DESIGNATOR(): string | null;
    INTERNATIONAL_DESIGNATOR(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Satellite catalog source from which 'OBJECT_DESIGNATOR' was obtained.
     */
    CATALOG_NAME(): string | null;
    CATALOG_NAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Unique satellite identification designator from the catalog.
     */
    OBJECT_DESIGNATOR(): string | null;
    OBJECT_DESIGNATOR(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Alternate names of this space object.
     */
    ALTERNATE_NAMES(index: number): string;
    ALTERNATE_NAMES(index: number, optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    alternateNamesLength(): number;
    /**
     * Originator or programmatic Point-of-Contact (PoC) for OCM.
     */
    ORIGINATOR_POC(): string | null;
    ORIGINATOR_POC(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Contact position of the originator PoC.
     */
    ORIGINATOR_POSITION(): string | null;
    ORIGINATOR_POSITION(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Originator PoC phone number.
     */
    ORIGINATOR_PHONE(): string | null;
    ORIGINATOR_PHONE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Originator PoC email address.
     */
    ORIGINATOR_EMAIL(): string | null;
    ORIGINATOR_EMAIL(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Originator's physical address information.
     */
    ORIGINATOR_ADDRESS(): string | null;
    ORIGINATOR_ADDRESS(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Creating agency or operator for technical contact.
     */
    TECH_ORG(): string | null;
    TECH_ORG(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Technical Point-of-Contact (PoC) for OCM.
     */
    TECH_POC(): string | null;
    TECH_POC(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Contact position of the technical PoC.
     */
    TECH_POSITION(): string | null;
    TECH_POSITION(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Technical PoC phone number.
     */
    TECH_PHONE(): string | null;
    TECH_PHONE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Technical PoC email address.
     */
    TECH_EMAIL(): string | null;
    TECH_EMAIL(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Technical PoC physical address information.
     */
    TECH_ADDRESS(): string | null;
    TECH_ADDRESS(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * ID that uniquely identifies the previous message from this originator.
     */
    PREVIOUS_MESSAGE_ID(): string | null;
    PREVIOUS_MESSAGE_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * ID that uniquely identifies the next message from this originator.
     */
    NEXT_MESSAGE_ID(): string | null;
    NEXT_MESSAGE_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Unique identifier of Attitude Data Messages linked to this OCM.
     */
    ADM_MSG_LINK(): string | null;
    ADM_MSG_LINK(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Unique identifier of Conjunction Data Messages linked to this OCM.
     */
    CDM_MSG_LINK(): string | null;
    CDM_MSG_LINK(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Unique identifier of Pointing Request Messages linked to this OCM.
     */
    PRM_MSG_LINK(): string | null;
    PRM_MSG_LINK(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Unique identifier of Reentry Data Messages linked to this OCM.
     */
    RDM_MSG_LINK(): string | null;
    RDM_MSG_LINK(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * List of Tracking Data Messages upon which this orbit determination is based.
     */
    TDM_MSG_LINK(index: number): string;
    TDM_MSG_LINK(index: number, optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    tdmMsgLinkLength(): number;
    /**
     * Operator of the space object.
     */
    OPERATOR(): string | null;
    OPERATOR(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Owner of the space object.
     */
    OWNER(): string | null;
    OWNER(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Country where the space object owner is based.
     */
    COUNTRY(): string | null;
    COUNTRY(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Name of the constellation to which this space object belongs.
     */
    CONSTELLATION(): string | null;
    CONSTELLATION(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Specification of the type of object (e.g., PAYLOAD, ROCKET BODY, DEBRIS).
     */
    OBJECT_TYPE(): string | null;
    OBJECT_TYPE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Time system for all absolute time stamps in this OCM, including EPOCH_TZERO.
     */
    TIME_SYSTEM(): string | null;
    TIME_SYSTEM(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Default epoch to which all relative times are referenced in data blocks.
     */
    EPOCH_TZERO(): string | null;
    EPOCH_TZERO(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Specification of the operational status of the space object.
     */
    OPS_STATUS(): string | null;
    OPS_STATUS(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Specification of the type of orbit (e.g., GEO, LEO).
     */
    ORBIT_CATEGORY(): string | null;
    ORBIT_CATEGORY(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * List of elements of information data blocks included in this message.
     */
    OCM_DATA_ELEMENTS(index: number): string;
    OCM_DATA_ELEMENTS(index: number, optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    ocmDataElementsLength(): number;
    /**
     * Number of spacecraft clock counts at EPOCH_TZERO (used if TIME_SYSTEM is SCLK).
     */
    SCLK_OFFSET_AT_EPOCH(): number;
    /**
     * Number of clock seconds occurring during one SI second (used if TIME_SYSTEM is SCLK).
     */
    SCLK_SEC_PER_SI_SEC(): number;
    /**
     * Creation epoch of the previous message from this originator.
     */
    PREVIOUS_MESSAGE_EPOCH(): string | null;
    PREVIOUS_MESSAGE_EPOCH(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Anticipated (or actual) epoch of the next message from this originator.
     */
    NEXT_MESSAGE_EPOCH(): string | null;
    NEXT_MESSAGE_EPOCH(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Time of the earliest data contained in the OCM.
     */
    START_TIME(): string | null;
    START_TIME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Time of the latest data contained in the OCM.
     */
    STOP_TIME(): string | null;
    STOP_TIME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Span of time that the OCM covers, measured in days.
     */
    TIME_SPAN(): number;
    /**
     * Difference (TAI - UTC) in seconds at EPOCH_TZERO.
     */
    TAIMUTC_AT_TZERO(): number;
    /**
     * Epoch of next leap second.
     */
    NEXT_LEAP_EPOCH(): string | null;
    NEXT_LEAP_EPOCH(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Difference (TAI - UTC) in seconds at NEXT_LEAP_EPOCH.
     */
    NEXT_LEAP_TAIMUTC(): number;
    /**
     * Difference (UT1 - UTC) in seconds at EPOCH_TZERO.
     */
    UT1MUTC_AT_TZERO(): number;
    /**
     * Source and version of Earth Orientation Parameters used.
     */
    EOP_SOURCE(): string | null;
    EOP_SOURCE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Method used to select or interpolate sequential EOP data.
     */
    INTERP_METHOD_EOP(): string | null;
    INTERP_METHOD_EOP(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Source and version of celestial body ephemeris data used.
     */
    CELESTIAL_SOURCE(): string | null;
    CELESTIAL_SOURCE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    static startMetadata(builder: flatbuffers.Builder): void;
    static addComment(builder: flatbuffers.Builder, COMMENTOffset: flatbuffers.Offset): void;
    static createCommentVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startCommentVector(builder: flatbuffers.Builder, numElems: number): void;
    static addObjectName(builder: flatbuffers.Builder, OBJECT_NAMEOffset: flatbuffers.Offset): void;
    static addInternationalDesignator(builder: flatbuffers.Builder, INTERNATIONAL_DESIGNATOROffset: flatbuffers.Offset): void;
    static addCatalogName(builder: flatbuffers.Builder, CATALOG_NAMEOffset: flatbuffers.Offset): void;
    static addObjectDesignator(builder: flatbuffers.Builder, OBJECT_DESIGNATOROffset: flatbuffers.Offset): void;
    static addAlternateNames(builder: flatbuffers.Builder, ALTERNATE_NAMESOffset: flatbuffers.Offset): void;
    static createAlternateNamesVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startAlternateNamesVector(builder: flatbuffers.Builder, numElems: number): void;
    static addOriginatorPoc(builder: flatbuffers.Builder, ORIGINATOR_POCOffset: flatbuffers.Offset): void;
    static addOriginatorPosition(builder: flatbuffers.Builder, ORIGINATOR_POSITIONOffset: flatbuffers.Offset): void;
    static addOriginatorPhone(builder: flatbuffers.Builder, ORIGINATOR_PHONEOffset: flatbuffers.Offset): void;
    static addOriginatorEmail(builder: flatbuffers.Builder, ORIGINATOR_EMAILOffset: flatbuffers.Offset): void;
    static addOriginatorAddress(builder: flatbuffers.Builder, ORIGINATOR_ADDRESSOffset: flatbuffers.Offset): void;
    static addTechOrg(builder: flatbuffers.Builder, TECH_ORGOffset: flatbuffers.Offset): void;
    static addTechPoc(builder: flatbuffers.Builder, TECH_POCOffset: flatbuffers.Offset): void;
    static addTechPosition(builder: flatbuffers.Builder, TECH_POSITIONOffset: flatbuffers.Offset): void;
    static addTechPhone(builder: flatbuffers.Builder, TECH_PHONEOffset: flatbuffers.Offset): void;
    static addTechEmail(builder: flatbuffers.Builder, TECH_EMAILOffset: flatbuffers.Offset): void;
    static addTechAddress(builder: flatbuffers.Builder, TECH_ADDRESSOffset: flatbuffers.Offset): void;
    static addPreviousMessageId(builder: flatbuffers.Builder, PREVIOUS_MESSAGE_IDOffset: flatbuffers.Offset): void;
    static addNextMessageId(builder: flatbuffers.Builder, NEXT_MESSAGE_IDOffset: flatbuffers.Offset): void;
    static addAdmMsgLink(builder: flatbuffers.Builder, ADM_MSG_LINKOffset: flatbuffers.Offset): void;
    static addCdmMsgLink(builder: flatbuffers.Builder, CDM_MSG_LINKOffset: flatbuffers.Offset): void;
    static addPrmMsgLink(builder: flatbuffers.Builder, PRM_MSG_LINKOffset: flatbuffers.Offset): void;
    static addRdmMsgLink(builder: flatbuffers.Builder, RDM_MSG_LINKOffset: flatbuffers.Offset): void;
    static addTdmMsgLink(builder: flatbuffers.Builder, TDM_MSG_LINKOffset: flatbuffers.Offset): void;
    static createTdmMsgLinkVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startTdmMsgLinkVector(builder: flatbuffers.Builder, numElems: number): void;
    static addOperator(builder: flatbuffers.Builder, OPERATOROffset: flatbuffers.Offset): void;
    static addOwner(builder: flatbuffers.Builder, OWNEROffset: flatbuffers.Offset): void;
    static addCountry(builder: flatbuffers.Builder, COUNTRYOffset: flatbuffers.Offset): void;
    static addConstellation(builder: flatbuffers.Builder, CONSTELLATIONOffset: flatbuffers.Offset): void;
    static addObjectType(builder: flatbuffers.Builder, OBJECT_TYPEOffset: flatbuffers.Offset): void;
    static addTimeSystem(builder: flatbuffers.Builder, TIME_SYSTEMOffset: flatbuffers.Offset): void;
    static addEpochTzero(builder: flatbuffers.Builder, EPOCH_TZEROOffset: flatbuffers.Offset): void;
    static addOpsStatus(builder: flatbuffers.Builder, OPS_STATUSOffset: flatbuffers.Offset): void;
    static addOrbitCategory(builder: flatbuffers.Builder, ORBIT_CATEGORYOffset: flatbuffers.Offset): void;
    static addOcmDataElements(builder: flatbuffers.Builder, OCM_DATA_ELEMENTSOffset: flatbuffers.Offset): void;
    static createOcmDataElementsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startOcmDataElementsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addSclkOffsetAtEpoch(builder: flatbuffers.Builder, SCLK_OFFSET_AT_EPOCH: number): void;
    static addSclkSecPerSiSec(builder: flatbuffers.Builder, SCLK_SEC_PER_SI_SEC: number): void;
    static addPreviousMessageEpoch(builder: flatbuffers.Builder, PREVIOUS_MESSAGE_EPOCHOffset: flatbuffers.Offset): void;
    static addNextMessageEpoch(builder: flatbuffers.Builder, NEXT_MESSAGE_EPOCHOffset: flatbuffers.Offset): void;
    static addStartTime(builder: flatbuffers.Builder, START_TIMEOffset: flatbuffers.Offset): void;
    static addStopTime(builder: flatbuffers.Builder, STOP_TIMEOffset: flatbuffers.Offset): void;
    static addTimeSpan(builder: flatbuffers.Builder, TIME_SPAN: number): void;
    static addTaimutcAtTzero(builder: flatbuffers.Builder, TAIMUTC_AT_TZERO: number): void;
    static addNextLeapEpoch(builder: flatbuffers.Builder, NEXT_LEAP_EPOCHOffset: flatbuffers.Offset): void;
    static addNextLeapTaimutc(builder: flatbuffers.Builder, NEXT_LEAP_TAIMUTC: number): void;
    static addUt1MutcAtTzero(builder: flatbuffers.Builder, UT1MUTC_AT_TZERO: number): void;
    static addEopSource(builder: flatbuffers.Builder, EOP_SOURCEOffset: flatbuffers.Offset): void;
    static addInterpMethodEop(builder: flatbuffers.Builder, INTERP_METHOD_EOPOffset: flatbuffers.Offset): void;
    static addCelestialSource(builder: flatbuffers.Builder, CELESTIAL_SOURCEOffset: flatbuffers.Offset): void;
    static endMetadata(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createMetadata(builder: flatbuffers.Builder, COMMENTOffset: flatbuffers.Offset, OBJECT_NAMEOffset: flatbuffers.Offset, INTERNATIONAL_DESIGNATOROffset: flatbuffers.Offset, CATALOG_NAMEOffset: flatbuffers.Offset, OBJECT_DESIGNATOROffset: flatbuffers.Offset, ALTERNATE_NAMESOffset: flatbuffers.Offset, ORIGINATOR_POCOffset: flatbuffers.Offset, ORIGINATOR_POSITIONOffset: flatbuffers.Offset, ORIGINATOR_PHONEOffset: flatbuffers.Offset, ORIGINATOR_EMAILOffset: flatbuffers.Offset, ORIGINATOR_ADDRESSOffset: flatbuffers.Offset, TECH_ORGOffset: flatbuffers.Offset, TECH_POCOffset: flatbuffers.Offset, TECH_POSITIONOffset: flatbuffers.Offset, TECH_PHONEOffset: flatbuffers.Offset, TECH_EMAILOffset: flatbuffers.Offset, TECH_ADDRESSOffset: flatbuffers.Offset, PREVIOUS_MESSAGE_IDOffset: flatbuffers.Offset, NEXT_MESSAGE_IDOffset: flatbuffers.Offset, ADM_MSG_LINKOffset: flatbuffers.Offset, CDM_MSG_LINKOffset: flatbuffers.Offset, PRM_MSG_LINKOffset: flatbuffers.Offset, RDM_MSG_LINKOffset: flatbuffers.Offset, TDM_MSG_LINKOffset: flatbuffers.Offset, OPERATOROffset: flatbuffers.Offset, OWNEROffset: flatbuffers.Offset, COUNTRYOffset: flatbuffers.Offset, CONSTELLATIONOffset: flatbuffers.Offset, OBJECT_TYPEOffset: flatbuffers.Offset, TIME_SYSTEMOffset: flatbuffers.Offset, EPOCH_TZEROOffset: flatbuffers.Offset, OPS_STATUSOffset: flatbuffers.Offset, ORBIT_CATEGORYOffset: flatbuffers.Offset, OCM_DATA_ELEMENTSOffset: flatbuffers.Offset, SCLK_OFFSET_AT_EPOCH: number, SCLK_SEC_PER_SI_SEC: number, PREVIOUS_MESSAGE_EPOCHOffset: flatbuffers.Offset, NEXT_MESSAGE_EPOCHOffset: flatbuffers.Offset, START_TIMEOffset: flatbuffers.Offset, STOP_TIMEOffset: flatbuffers.Offset, TIME_SPAN: number, TAIMUTC_AT_TZERO: number, NEXT_LEAP_EPOCHOffset: flatbuffers.Offset, NEXT_LEAP_TAIMUTC: number, UT1MUTC_AT_TZERO: number, EOP_SOURCEOffset: flatbuffers.Offset, INTERP_METHOD_EOPOffset: flatbuffers.Offset, CELESTIAL_SOURCEOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): MetadataT;
    unpackTo(_o: MetadataT): void;
}
export declare class MetadataT implements flatbuffers.IGeneratedObject {
    COMMENT: (string)[];
    OBJECT_NAME: string | Uint8Array | null;
    INTERNATIONAL_DESIGNATOR: string | Uint8Array | null;
    CATALOG_NAME: string | Uint8Array | null;
    OBJECT_DESIGNATOR: string | Uint8Array | null;
    ALTERNATE_NAMES: (string)[];
    ORIGINATOR_POC: string | Uint8Array | null;
    ORIGINATOR_POSITION: string | Uint8Array | null;
    ORIGINATOR_PHONE: string | Uint8Array | null;
    ORIGINATOR_EMAIL: string | Uint8Array | null;
    ORIGINATOR_ADDRESS: string | Uint8Array | null;
    TECH_ORG: string | Uint8Array | null;
    TECH_POC: string | Uint8Array | null;
    TECH_POSITION: string | Uint8Array | null;
    TECH_PHONE: string | Uint8Array | null;
    TECH_EMAIL: string | Uint8Array | null;
    TECH_ADDRESS: string | Uint8Array | null;
    PREVIOUS_MESSAGE_ID: string | Uint8Array | null;
    NEXT_MESSAGE_ID: string | Uint8Array | null;
    ADM_MSG_LINK: string | Uint8Array | null;
    CDM_MSG_LINK: string | Uint8Array | null;
    PRM_MSG_LINK: string | Uint8Array | null;
    RDM_MSG_LINK: string | Uint8Array | null;
    TDM_MSG_LINK: (string)[];
    OPERATOR: string | Uint8Array | null;
    OWNER: string | Uint8Array | null;
    COUNTRY: string | Uint8Array | null;
    CONSTELLATION: string | Uint8Array | null;
    OBJECT_TYPE: string | Uint8Array | null;
    TIME_SYSTEM: string | Uint8Array | null;
    EPOCH_TZERO: string | Uint8Array | null;
    OPS_STATUS: string | Uint8Array | null;
    ORBIT_CATEGORY: string | Uint8Array | null;
    OCM_DATA_ELEMENTS: (string)[];
    SCLK_OFFSET_AT_EPOCH: number;
    SCLK_SEC_PER_SI_SEC: number;
    PREVIOUS_MESSAGE_EPOCH: string | Uint8Array | null;
    NEXT_MESSAGE_EPOCH: string | Uint8Array | null;
    START_TIME: string | Uint8Array | null;
    STOP_TIME: string | Uint8Array | null;
    TIME_SPAN: number;
    TAIMUTC_AT_TZERO: number;
    NEXT_LEAP_EPOCH: string | Uint8Array | null;
    NEXT_LEAP_TAIMUTC: number;
    UT1MUTC_AT_TZERO: number;
    EOP_SOURCE: string | Uint8Array | null;
    INTERP_METHOD_EOP: string | Uint8Array | null;
    CELESTIAL_SOURCE: string | Uint8Array | null;
    constructor(COMMENT?: (string)[], OBJECT_NAME?: string | Uint8Array | null, INTERNATIONAL_DESIGNATOR?: string | Uint8Array | null, CATALOG_NAME?: string | Uint8Array | null, OBJECT_DESIGNATOR?: string | Uint8Array | null, ALTERNATE_NAMES?: (string)[], ORIGINATOR_POC?: string | Uint8Array | null, ORIGINATOR_POSITION?: string | Uint8Array | null, ORIGINATOR_PHONE?: string | Uint8Array | null, ORIGINATOR_EMAIL?: string | Uint8Array | null, ORIGINATOR_ADDRESS?: string | Uint8Array | null, TECH_ORG?: string | Uint8Array | null, TECH_POC?: string | Uint8Array | null, TECH_POSITION?: string | Uint8Array | null, TECH_PHONE?: string | Uint8Array | null, TECH_EMAIL?: string | Uint8Array | null, TECH_ADDRESS?: string | Uint8Array | null, PREVIOUS_MESSAGE_ID?: string | Uint8Array | null, NEXT_MESSAGE_ID?: string | Uint8Array | null, ADM_MSG_LINK?: string | Uint8Array | null, CDM_MSG_LINK?: string | Uint8Array | null, PRM_MSG_LINK?: string | Uint8Array | null, RDM_MSG_LINK?: string | Uint8Array | null, TDM_MSG_LINK?: (string)[], OPERATOR?: string | Uint8Array | null, OWNER?: string | Uint8Array | null, COUNTRY?: string | Uint8Array | null, CONSTELLATION?: string | Uint8Array | null, OBJECT_TYPE?: string | Uint8Array | null, TIME_SYSTEM?: string | Uint8Array | null, EPOCH_TZERO?: string | Uint8Array | null, OPS_STATUS?: string | Uint8Array | null, ORBIT_CATEGORY?: string | Uint8Array | null, OCM_DATA_ELEMENTS?: (string)[], SCLK_OFFSET_AT_EPOCH?: number, SCLK_SEC_PER_SI_SEC?: number, PREVIOUS_MESSAGE_EPOCH?: string | Uint8Array | null, NEXT_MESSAGE_EPOCH?: string | Uint8Array | null, START_TIME?: string | Uint8Array | null, STOP_TIME?: string | Uint8Array | null, TIME_SPAN?: number, TAIMUTC_AT_TZERO?: number, NEXT_LEAP_EPOCH?: string | Uint8Array | null, NEXT_LEAP_TAIMUTC?: number, UT1MUTC_AT_TZERO?: number, EOP_SOURCE?: string | Uint8Array | null, INTERP_METHOD_EOP?: string | Uint8Array | null, CELESTIAL_SOURCE?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=Metadata.d.ts.map