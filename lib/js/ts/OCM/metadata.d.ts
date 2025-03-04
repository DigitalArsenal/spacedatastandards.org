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
    comment(index: number): string;
    comment(index: number, optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    commentLength(): number;
    /**
     * Free-text field containing the name of the object.
     */
    objectName(): string | null;
    objectName(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * International designator for the object as assigned by COSPAR.
     */
    internationalDesignator(): string | null;
    internationalDesignator(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Satellite catalog source from which 'OBJECT_DESIGNATOR' was obtained.
     */
    catalogName(): string | null;
    catalogName(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Unique satellite identification designator from the catalog.
     */
    objectDesignator(): string | null;
    objectDesignator(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Alternate names of this space object.
     */
    alternateNames(index: number): string;
    alternateNames(index: number, optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    alternateNamesLength(): number;
    /**
     * Originator or programmatic Point-of-Contact (PoC) for OCM.
     */
    originatorPoc(): string | null;
    originatorPoc(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Contact position of the originator PoC.
     */
    originatorPosition(): string | null;
    originatorPosition(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Originator PoC phone number.
     */
    originatorPhone(): string | null;
    originatorPhone(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Originator PoC email address.
     */
    originatorEmail(): string | null;
    originatorEmail(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Originator's physical address information.
     */
    originatorAddress(): string | null;
    originatorAddress(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Creating agency or operator for technical contact.
     */
    techOrg(): string | null;
    techOrg(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Technical Point-of-Contact (PoC) for OCM.
     */
    techPoc(): string | null;
    techPoc(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Contact position of the technical PoC.
     */
    techPosition(): string | null;
    techPosition(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Technical PoC phone number.
     */
    techPhone(): string | null;
    techPhone(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Technical PoC email address.
     */
    techEmail(): string | null;
    techEmail(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Technical PoC physical address information.
     */
    techAddress(): string | null;
    techAddress(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * ID that uniquely identifies the previous message from this originator.
     */
    previousMessageId(): string | null;
    previousMessageId(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * ID that uniquely identifies the next message from this originator.
     */
    nextMessageId(): string | null;
    nextMessageId(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Unique identifier of Attitude Data Messages linked to this OCM.
     */
    admMsgLink(): string | null;
    admMsgLink(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Unique identifier of Conjunction Data Messages linked to this OCM.
     */
    cdmMsgLink(): string | null;
    cdmMsgLink(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Unique identifier of Pointing Request Messages linked to this OCM.
     */
    prmMsgLink(): string | null;
    prmMsgLink(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Unique identifier of Reentry Data Messages linked to this OCM.
     */
    rdmMsgLink(): string | null;
    rdmMsgLink(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * List of Tracking Data Messages upon which this orbit determination is based.
     */
    tdmMsgLink(index: number): string;
    tdmMsgLink(index: number, optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    tdmMsgLinkLength(): number;
    /**
     * Operator of the space object.
     */
    operator(): string | null;
    operator(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Owner of the space object.
     */
    owner(): string | null;
    owner(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Country where the space object owner is based.
     */
    country(): string | null;
    country(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Name of the constellation to which this space object belongs.
     */
    constellation(): string | null;
    constellation(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Specification of the type of object (e.g., PAYLOAD, ROCKET BODY, DEBRIS).
     */
    objectType(): string | null;
    objectType(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Time system for all absolute time stamps in this OCM, including EPOCH_TZERO.
     */
    timeSystem(): string | null;
    timeSystem(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Default epoch to which all relative times are referenced in data blocks.
     */
    epochTzero(): string | null;
    epochTzero(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Specification of the operational status of the space object.
     */
    opsStatus(): string | null;
    opsStatus(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Specification of the type of orbit (e.g., GEO, LEO).
     */
    orbitCategory(): string | null;
    orbitCategory(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * List of elements of information data blocks included in this message.
     */
    ocmDataElements(index: number): string;
    ocmDataElements(index: number, optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    ocmDataElementsLength(): number;
    /**
     * Number of spacecraft clock counts at EPOCH_TZERO (used if TIME_SYSTEM is SCLK).
     */
    sclkOffsetAtEpoch(): number;
    /**
     * Number of clock seconds occurring during one SI second (used if TIME_SYSTEM is SCLK).
     */
    sclkSecPerSiSec(): number;
    /**
     * Creation epoch of the previous message from this originator.
     */
    previousMessageEpoch(): string | null;
    previousMessageEpoch(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Anticipated (or actual) epoch of the next message from this originator.
     */
    nextMessageEpoch(): string | null;
    nextMessageEpoch(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Time of the earliest data contained in the OCM.
     */
    startTime(): string | null;
    startTime(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Time of the latest data contained in the OCM.
     */
    stopTime(): string | null;
    stopTime(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Span of time that the OCM covers, measured in days.
     */
    timeSpan(): number;
    /**
     * Difference (TAI - UTC) in seconds at EPOCH_TZERO.
     */
    taimutcAtTzero(): number;
    /**
     * Epoch of next leap second.
     */
    nextLeapEpoch(): string | null;
    nextLeapEpoch(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Difference (TAI - UTC) in seconds at NEXT_LEAP_EPOCH.
     */
    nextLeapTaimutc(): number;
    /**
     * Difference (UT1 - UTC) in seconds at EPOCH_TZERO.
     */
    ut1MutcAtTzero(): number;
    /**
     * Source and version of Earth Orientation Parameters used.
     */
    eopSource(): string | null;
    eopSource(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Method used to select or interpolate sequential EOP data.
     */
    interpMethodEop(): string | null;
    interpMethodEop(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Source and version of celestial body ephemeris data used.
     */
    celestialSource(): string | null;
    celestialSource(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    static startMetadata(builder: flatbuffers.Builder): void;
    static addComment(builder: flatbuffers.Builder, commentOffset: flatbuffers.Offset): void;
    static createCommentVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startCommentVector(builder: flatbuffers.Builder, numElems: number): void;
    static addObjectName(builder: flatbuffers.Builder, objectNameOffset: flatbuffers.Offset): void;
    static addInternationalDesignator(builder: flatbuffers.Builder, internationalDesignatorOffset: flatbuffers.Offset): void;
    static addCatalogName(builder: flatbuffers.Builder, catalogNameOffset: flatbuffers.Offset): void;
    static addObjectDesignator(builder: flatbuffers.Builder, objectDesignatorOffset: flatbuffers.Offset): void;
    static addAlternateNames(builder: flatbuffers.Builder, alternateNamesOffset: flatbuffers.Offset): void;
    static createAlternateNamesVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startAlternateNamesVector(builder: flatbuffers.Builder, numElems: number): void;
    static addOriginatorPoc(builder: flatbuffers.Builder, originatorPocOffset: flatbuffers.Offset): void;
    static addOriginatorPosition(builder: flatbuffers.Builder, originatorPositionOffset: flatbuffers.Offset): void;
    static addOriginatorPhone(builder: flatbuffers.Builder, originatorPhoneOffset: flatbuffers.Offset): void;
    static addOriginatorEmail(builder: flatbuffers.Builder, originatorEmailOffset: flatbuffers.Offset): void;
    static addOriginatorAddress(builder: flatbuffers.Builder, originatorAddressOffset: flatbuffers.Offset): void;
    static addTechOrg(builder: flatbuffers.Builder, techOrgOffset: flatbuffers.Offset): void;
    static addTechPoc(builder: flatbuffers.Builder, techPocOffset: flatbuffers.Offset): void;
    static addTechPosition(builder: flatbuffers.Builder, techPositionOffset: flatbuffers.Offset): void;
    static addTechPhone(builder: flatbuffers.Builder, techPhoneOffset: flatbuffers.Offset): void;
    static addTechEmail(builder: flatbuffers.Builder, techEmailOffset: flatbuffers.Offset): void;
    static addTechAddress(builder: flatbuffers.Builder, techAddressOffset: flatbuffers.Offset): void;
    static addPreviousMessageId(builder: flatbuffers.Builder, previousMessageIdOffset: flatbuffers.Offset): void;
    static addNextMessageId(builder: flatbuffers.Builder, nextMessageIdOffset: flatbuffers.Offset): void;
    static addAdmMsgLink(builder: flatbuffers.Builder, admMsgLinkOffset: flatbuffers.Offset): void;
    static addCdmMsgLink(builder: flatbuffers.Builder, cdmMsgLinkOffset: flatbuffers.Offset): void;
    static addPrmMsgLink(builder: flatbuffers.Builder, prmMsgLinkOffset: flatbuffers.Offset): void;
    static addRdmMsgLink(builder: flatbuffers.Builder, rdmMsgLinkOffset: flatbuffers.Offset): void;
    static addTdmMsgLink(builder: flatbuffers.Builder, tdmMsgLinkOffset: flatbuffers.Offset): void;
    static createTdmMsgLinkVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startTdmMsgLinkVector(builder: flatbuffers.Builder, numElems: number): void;
    static addOperator(builder: flatbuffers.Builder, operatorOffset: flatbuffers.Offset): void;
    static addOwner(builder: flatbuffers.Builder, ownerOffset: flatbuffers.Offset): void;
    static addCountry(builder: flatbuffers.Builder, countryOffset: flatbuffers.Offset): void;
    static addConstellation(builder: flatbuffers.Builder, constellationOffset: flatbuffers.Offset): void;
    static addObjectType(builder: flatbuffers.Builder, objectTypeOffset: flatbuffers.Offset): void;
    static addTimeSystem(builder: flatbuffers.Builder, timeSystemOffset: flatbuffers.Offset): void;
    static addEpochTzero(builder: flatbuffers.Builder, epochTzeroOffset: flatbuffers.Offset): void;
    static addOpsStatus(builder: flatbuffers.Builder, opsStatusOffset: flatbuffers.Offset): void;
    static addOrbitCategory(builder: flatbuffers.Builder, orbitCategoryOffset: flatbuffers.Offset): void;
    static addOcmDataElements(builder: flatbuffers.Builder, ocmDataElementsOffset: flatbuffers.Offset): void;
    static createOcmDataElementsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startOcmDataElementsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addSclkOffsetAtEpoch(builder: flatbuffers.Builder, sclkOffsetAtEpoch: number): void;
    static addSclkSecPerSiSec(builder: flatbuffers.Builder, sclkSecPerSiSec: number): void;
    static addPreviousMessageEpoch(builder: flatbuffers.Builder, previousMessageEpochOffset: flatbuffers.Offset): void;
    static addNextMessageEpoch(builder: flatbuffers.Builder, nextMessageEpochOffset: flatbuffers.Offset): void;
    static addStartTime(builder: flatbuffers.Builder, startTimeOffset: flatbuffers.Offset): void;
    static addStopTime(builder: flatbuffers.Builder, stopTimeOffset: flatbuffers.Offset): void;
    static addTimeSpan(builder: flatbuffers.Builder, timeSpan: number): void;
    static addTaimutcAtTzero(builder: flatbuffers.Builder, taimutcAtTzero: number): void;
    static addNextLeapEpoch(builder: flatbuffers.Builder, nextLeapEpochOffset: flatbuffers.Offset): void;
    static addNextLeapTaimutc(builder: flatbuffers.Builder, nextLeapTaimutc: number): void;
    static addUt1MutcAtTzero(builder: flatbuffers.Builder, ut1MutcAtTzero: number): void;
    static addEopSource(builder: flatbuffers.Builder, eopSourceOffset: flatbuffers.Offset): void;
    static addInterpMethodEop(builder: flatbuffers.Builder, interpMethodEopOffset: flatbuffers.Offset): void;
    static addCelestialSource(builder: flatbuffers.Builder, celestialSourceOffset: flatbuffers.Offset): void;
    static endMetadata(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createMetadata(builder: flatbuffers.Builder, commentOffset: flatbuffers.Offset, objectNameOffset: flatbuffers.Offset, internationalDesignatorOffset: flatbuffers.Offset, catalogNameOffset: flatbuffers.Offset, objectDesignatorOffset: flatbuffers.Offset, alternateNamesOffset: flatbuffers.Offset, originatorPocOffset: flatbuffers.Offset, originatorPositionOffset: flatbuffers.Offset, originatorPhoneOffset: flatbuffers.Offset, originatorEmailOffset: flatbuffers.Offset, originatorAddressOffset: flatbuffers.Offset, techOrgOffset: flatbuffers.Offset, techPocOffset: flatbuffers.Offset, techPositionOffset: flatbuffers.Offset, techPhoneOffset: flatbuffers.Offset, techEmailOffset: flatbuffers.Offset, techAddressOffset: flatbuffers.Offset, previousMessageIdOffset: flatbuffers.Offset, nextMessageIdOffset: flatbuffers.Offset, admMsgLinkOffset: flatbuffers.Offset, cdmMsgLinkOffset: flatbuffers.Offset, prmMsgLinkOffset: flatbuffers.Offset, rdmMsgLinkOffset: flatbuffers.Offset, tdmMsgLinkOffset: flatbuffers.Offset, operatorOffset: flatbuffers.Offset, ownerOffset: flatbuffers.Offset, countryOffset: flatbuffers.Offset, constellationOffset: flatbuffers.Offset, objectTypeOffset: flatbuffers.Offset, timeSystemOffset: flatbuffers.Offset, epochTzeroOffset: flatbuffers.Offset, opsStatusOffset: flatbuffers.Offset, orbitCategoryOffset: flatbuffers.Offset, ocmDataElementsOffset: flatbuffers.Offset, sclkOffsetAtEpoch: number, sclkSecPerSiSec: number, previousMessageEpochOffset: flatbuffers.Offset, nextMessageEpochOffset: flatbuffers.Offset, startTimeOffset: flatbuffers.Offset, stopTimeOffset: flatbuffers.Offset, timeSpan: number, taimutcAtTzero: number, nextLeapEpochOffset: flatbuffers.Offset, nextLeapTaimutc: number, ut1MutcAtTzero: number, eopSourceOffset: flatbuffers.Offset, interpMethodEopOffset: flatbuffers.Offset, celestialSourceOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): MetadataT;
    unpackTo(_o: MetadataT): void;
}
export declare class MetadataT implements flatbuffers.IGeneratedObject {
    comment: (string)[];
    objectName: string | Uint8Array | null;
    internationalDesignator: string | Uint8Array | null;
    catalogName: string | Uint8Array | null;
    objectDesignator: string | Uint8Array | null;
    alternateNames: (string)[];
    originatorPoc: string | Uint8Array | null;
    originatorPosition: string | Uint8Array | null;
    originatorPhone: string | Uint8Array | null;
    originatorEmail: string | Uint8Array | null;
    originatorAddress: string | Uint8Array | null;
    techOrg: string | Uint8Array | null;
    techPoc: string | Uint8Array | null;
    techPosition: string | Uint8Array | null;
    techPhone: string | Uint8Array | null;
    techEmail: string | Uint8Array | null;
    techAddress: string | Uint8Array | null;
    previousMessageId: string | Uint8Array | null;
    nextMessageId: string | Uint8Array | null;
    admMsgLink: string | Uint8Array | null;
    cdmMsgLink: string | Uint8Array | null;
    prmMsgLink: string | Uint8Array | null;
    rdmMsgLink: string | Uint8Array | null;
    tdmMsgLink: (string)[];
    operator: string | Uint8Array | null;
    owner: string | Uint8Array | null;
    country: string | Uint8Array | null;
    constellation: string | Uint8Array | null;
    objectType: string | Uint8Array | null;
    timeSystem: string | Uint8Array | null;
    epochTzero: string | Uint8Array | null;
    opsStatus: string | Uint8Array | null;
    orbitCategory: string | Uint8Array | null;
    ocmDataElements: (string)[];
    sclkOffsetAtEpoch: number;
    sclkSecPerSiSec: number;
    previousMessageEpoch: string | Uint8Array | null;
    nextMessageEpoch: string | Uint8Array | null;
    startTime: string | Uint8Array | null;
    stopTime: string | Uint8Array | null;
    timeSpan: number;
    taimutcAtTzero: number;
    nextLeapEpoch: string | Uint8Array | null;
    nextLeapTaimutc: number;
    ut1MutcAtTzero: number;
    eopSource: string | Uint8Array | null;
    interpMethodEop: string | Uint8Array | null;
    celestialSource: string | Uint8Array | null;
    constructor(comment?: (string)[], objectName?: string | Uint8Array | null, internationalDesignator?: string | Uint8Array | null, catalogName?: string | Uint8Array | null, objectDesignator?: string | Uint8Array | null, alternateNames?: (string)[], originatorPoc?: string | Uint8Array | null, originatorPosition?: string | Uint8Array | null, originatorPhone?: string | Uint8Array | null, originatorEmail?: string | Uint8Array | null, originatorAddress?: string | Uint8Array | null, techOrg?: string | Uint8Array | null, techPoc?: string | Uint8Array | null, techPosition?: string | Uint8Array | null, techPhone?: string | Uint8Array | null, techEmail?: string | Uint8Array | null, techAddress?: string | Uint8Array | null, previousMessageId?: string | Uint8Array | null, nextMessageId?: string | Uint8Array | null, admMsgLink?: string | Uint8Array | null, cdmMsgLink?: string | Uint8Array | null, prmMsgLink?: string | Uint8Array | null, rdmMsgLink?: string | Uint8Array | null, tdmMsgLink?: (string)[], operator?: string | Uint8Array | null, owner?: string | Uint8Array | null, country?: string | Uint8Array | null, constellation?: string | Uint8Array | null, objectType?: string | Uint8Array | null, timeSystem?: string | Uint8Array | null, epochTzero?: string | Uint8Array | null, opsStatus?: string | Uint8Array | null, orbitCategory?: string | Uint8Array | null, ocmDataElements?: (string)[], sclkOffsetAtEpoch?: number, sclkSecPerSiSec?: number, previousMessageEpoch?: string | Uint8Array | null, nextMessageEpoch?: string | Uint8Array | null, startTime?: string | Uint8Array | null, stopTime?: string | Uint8Array | null, timeSpan?: number, taimutcAtTzero?: number, nextLeapEpoch?: string | Uint8Array | null, nextLeapTaimutc?: number, ut1MutcAtTzero?: number, eopSource?: string | Uint8Array | null, interpMethodEop?: string | Uint8Array | null, celestialSource?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=metadata.d.ts.map