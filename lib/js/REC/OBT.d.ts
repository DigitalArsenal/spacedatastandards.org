import * as flatbuffers from 'flatbuffers';
import { aouType } from './aouType.js';
import { orbitObjectType } from './orbitObjectType.js';
/**
 * Orbit Track
 */
export declare class OBT implements flatbuffers.IUnpackableObject<OBTT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): OBT;
    static getRootAsOBT(bb: flatbuffers.ByteBuffer, obj?: OBT): OBT;
    static getSizePrefixedRootAsOBT(bb: flatbuffers.ByteBuffer, obj?: OBT): OBT;
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
     * On-orbit reference
     */
    ON_ORBIT(): string | null;
    ON_ORBIT(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Track point timestamp (ISO 8601)
     */
    TS(): string | null;
    TS(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
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
     * Elevation angle from observer (degrees)
     */
    ANG_ELEV(): number;
    /**
     * Radar data fusion RF value
     */
    RDF_RF(): number;
    /**
     * Call sign
     */
    CALL_SIGN(): string | null;
    CALL_SIGN(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Report number
     */
    RPT_NUM(): string | null;
    RPT_NUM(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Track identifier
     */
    TRK_ID(): string | null;
    TRK_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Object identity assessment
     */
    OBJ_IDENT(): string | null;
    OBJ_IDENT(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Identity amplification
     */
    IDENT_AMP(): string | null;
    IDENT_AMP(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Satellite operational status
     */
    SAT_STATUS(): string | null;
    SAT_STATUS(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Object type
     */
    OBJ_TYPE(): orbitObjectType;
    /**
     * Country code (ISO 3166)
     */
    COUNTRY_CODE(): string | null;
    COUNTRY_CODE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Orbit decay rate (km/day)
     */
    DECAY(): number;
    /**
     * Charlie line data (amplification text)
     */
    CHARLIE_LINE(): string | null;
    CHARLIE_LINE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Area of uncertainty type
     */
    AOU_TYPE(): aouType;
    /**
     * Area of uncertainty data
     */
    AOU_DATA(index: number): number | null;
    aouDataLength(): number;
    aouDataArray(): Float64Array | null;
    /**
     * Containment probability (0-1)
     */
    CNTNMNT(): number;
    /**
     * Cross-reference identifier
     */
    XREF(): string | null;
    XREF(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Charlie cross-reference
     */
    CH_XREF(): string | null;
    CH_XREF(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Additional amplification text
     */
    AMPLIFICATION(): string | null;
    AMPLIFICATION(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * IFF mode/code
     */
    IFF(): string | null;
    IFF(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Vehicle type
     */
    VEH_TYPE(): string | null;
    VEH_TYPE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * True if reinforced unit
     */
    REINFORCED(): boolean;
    /**
     * True if reduced unit
     */
    REDUCED(): boolean;
    /**
     * True if headquarters element
     */
    HQ(): boolean;
    /**
     * True if dummy/exercise track
     */
    DUMMY(): boolean;
    /**
     * True if task force
     */
    TASK_FORCE(): boolean;
    /**
     * True if feint
     */
    FEINT(): boolean;
    /**
     * True if installation (not mobile)
     */
    INSTALLATION(): boolean;
    /**
     * Contributing track sensors
     */
    TRACK_SENSORS(index: number): string;
    TRACK_SENSORS(index: number, optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    trackSensorsLength(): number;
    static startOBT(builder: flatbuffers.Builder): void;
    static addId(builder: flatbuffers.Builder, IDOffset: flatbuffers.Offset): void;
    static addSatNo(builder: flatbuffers.Builder, SAT_NO: number): void;
    static addOrigObjectId(builder: flatbuffers.Builder, ORIG_OBJECT_IDOffset: flatbuffers.Offset): void;
    static addOnOrbit(builder: flatbuffers.Builder, ON_ORBITOffset: flatbuffers.Offset): void;
    static addTs(builder: flatbuffers.Builder, TSOffset: flatbuffers.Offset): void;
    static addLat(builder: flatbuffers.Builder, LAT: number): void;
    static addLon(builder: flatbuffers.Builder, LON: number): void;
    static addAlt(builder: flatbuffers.Builder, ALT: number): void;
    static addSpd(builder: flatbuffers.Builder, SPD: number): void;
    static addAngElev(builder: flatbuffers.Builder, ANG_ELEV: number): void;
    static addRdfRf(builder: flatbuffers.Builder, RDF_RF: number): void;
    static addCallSign(builder: flatbuffers.Builder, CALL_SIGNOffset: flatbuffers.Offset): void;
    static addRptNum(builder: flatbuffers.Builder, RPT_NUMOffset: flatbuffers.Offset): void;
    static addTrkId(builder: flatbuffers.Builder, TRK_IDOffset: flatbuffers.Offset): void;
    static addObjIdent(builder: flatbuffers.Builder, OBJ_IDENTOffset: flatbuffers.Offset): void;
    static addIdentAmp(builder: flatbuffers.Builder, IDENT_AMPOffset: flatbuffers.Offset): void;
    static addSatStatus(builder: flatbuffers.Builder, SAT_STATUSOffset: flatbuffers.Offset): void;
    static addObjType(builder: flatbuffers.Builder, OBJ_TYPE: orbitObjectType): void;
    static addCountryCode(builder: flatbuffers.Builder, COUNTRY_CODEOffset: flatbuffers.Offset): void;
    static addDecay(builder: flatbuffers.Builder, DECAY: number): void;
    static addCharlieLine(builder: flatbuffers.Builder, CHARLIE_LINEOffset: flatbuffers.Offset): void;
    static addAouType(builder: flatbuffers.Builder, AOU_TYPE: aouType): void;
    static addAouData(builder: flatbuffers.Builder, AOU_DATAOffset: flatbuffers.Offset): void;
    static createAouDataVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createAouDataVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startAouDataVector(builder: flatbuffers.Builder, numElems: number): void;
    static addCntnmnt(builder: flatbuffers.Builder, CNTNMNT: number): void;
    static addXref(builder: flatbuffers.Builder, XREFOffset: flatbuffers.Offset): void;
    static addChXref(builder: flatbuffers.Builder, CH_XREFOffset: flatbuffers.Offset): void;
    static addAmplification(builder: flatbuffers.Builder, AMPLIFICATIONOffset: flatbuffers.Offset): void;
    static addIff(builder: flatbuffers.Builder, IFFOffset: flatbuffers.Offset): void;
    static addVehType(builder: flatbuffers.Builder, VEH_TYPEOffset: flatbuffers.Offset): void;
    static addReinforced(builder: flatbuffers.Builder, REINFORCED: boolean): void;
    static addReduced(builder: flatbuffers.Builder, REDUCED: boolean): void;
    static addHq(builder: flatbuffers.Builder, HQ: boolean): void;
    static addDummy(builder: flatbuffers.Builder, DUMMY: boolean): void;
    static addTaskForce(builder: flatbuffers.Builder, TASK_FORCE: boolean): void;
    static addFeint(builder: flatbuffers.Builder, FEINT: boolean): void;
    static addInstallation(builder: flatbuffers.Builder, INSTALLATION: boolean): void;
    static addTrackSensors(builder: flatbuffers.Builder, TRACK_SENSORSOffset: flatbuffers.Offset): void;
    static createTrackSensorsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startTrackSensorsVector(builder: flatbuffers.Builder, numElems: number): void;
    static endOBT(builder: flatbuffers.Builder): flatbuffers.Offset;
    static finishOBTBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static finishSizePrefixedOBTBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static createOBT(builder: flatbuffers.Builder, IDOffset: flatbuffers.Offset, SAT_NO: number, ORIG_OBJECT_IDOffset: flatbuffers.Offset, ON_ORBITOffset: flatbuffers.Offset, TSOffset: flatbuffers.Offset, LAT: number, LON: number, ALT: number, SPD: number, ANG_ELEV: number, RDF_RF: number, CALL_SIGNOffset: flatbuffers.Offset, RPT_NUMOffset: flatbuffers.Offset, TRK_IDOffset: flatbuffers.Offset, OBJ_IDENTOffset: flatbuffers.Offset, IDENT_AMPOffset: flatbuffers.Offset, SAT_STATUSOffset: flatbuffers.Offset, OBJ_TYPE: orbitObjectType, COUNTRY_CODEOffset: flatbuffers.Offset, DECAY: number, CHARLIE_LINEOffset: flatbuffers.Offset, AOU_TYPE: aouType, AOU_DATAOffset: flatbuffers.Offset, CNTNMNT: number, XREFOffset: flatbuffers.Offset, CH_XREFOffset: flatbuffers.Offset, AMPLIFICATIONOffset: flatbuffers.Offset, IFFOffset: flatbuffers.Offset, VEH_TYPEOffset: flatbuffers.Offset, REINFORCED: boolean, REDUCED: boolean, HQ: boolean, DUMMY: boolean, TASK_FORCE: boolean, FEINT: boolean, INSTALLATION: boolean, TRACK_SENSORSOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): OBTT;
    unpackTo(_o: OBTT): void;
}
export declare class OBTT implements flatbuffers.IGeneratedObject {
    ID: string | Uint8Array | null;
    SAT_NO: number;
    ORIG_OBJECT_ID: string | Uint8Array | null;
    ON_ORBIT: string | Uint8Array | null;
    TS: string | Uint8Array | null;
    LAT: number;
    LON: number;
    ALT: number;
    SPD: number;
    ANG_ELEV: number;
    RDF_RF: number;
    CALL_SIGN: string | Uint8Array | null;
    RPT_NUM: string | Uint8Array | null;
    TRK_ID: string | Uint8Array | null;
    OBJ_IDENT: string | Uint8Array | null;
    IDENT_AMP: string | Uint8Array | null;
    SAT_STATUS: string | Uint8Array | null;
    OBJ_TYPE: orbitObjectType;
    COUNTRY_CODE: string | Uint8Array | null;
    DECAY: number;
    CHARLIE_LINE: string | Uint8Array | null;
    AOU_TYPE: aouType;
    AOU_DATA: (number)[];
    CNTNMNT: number;
    XREF: string | Uint8Array | null;
    CH_XREF: string | Uint8Array | null;
    AMPLIFICATION: string | Uint8Array | null;
    IFF: string | Uint8Array | null;
    VEH_TYPE: string | Uint8Array | null;
    REINFORCED: boolean;
    REDUCED: boolean;
    HQ: boolean;
    DUMMY: boolean;
    TASK_FORCE: boolean;
    FEINT: boolean;
    INSTALLATION: boolean;
    TRACK_SENSORS: (string)[];
    constructor(ID?: string | Uint8Array | null, SAT_NO?: number, ORIG_OBJECT_ID?: string | Uint8Array | null, ON_ORBIT?: string | Uint8Array | null, TS?: string | Uint8Array | null, LAT?: number, LON?: number, ALT?: number, SPD?: number, ANG_ELEV?: number, RDF_RF?: number, CALL_SIGN?: string | Uint8Array | null, RPT_NUM?: string | Uint8Array | null, TRK_ID?: string | Uint8Array | null, OBJ_IDENT?: string | Uint8Array | null, IDENT_AMP?: string | Uint8Array | null, SAT_STATUS?: string | Uint8Array | null, OBJ_TYPE?: orbitObjectType, COUNTRY_CODE?: string | Uint8Array | null, DECAY?: number, CHARLIE_LINE?: string | Uint8Array | null, AOU_TYPE?: aouType, AOU_DATA?: (number)[], CNTNMNT?: number, XREF?: string | Uint8Array | null, CH_XREF?: string | Uint8Array | null, AMPLIFICATION?: string | Uint8Array | null, IFF?: string | Uint8Array | null, VEH_TYPE?: string | Uint8Array | null, REINFORCED?: boolean, REDUCED?: boolean, HQ?: boolean, DUMMY?: boolean, TASK_FORCE?: boolean, FEINT?: boolean, INSTALLATION?: boolean, TRACK_SENSORS?: (string)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=OBT.d.ts.map