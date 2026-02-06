import * as flatbuffers from 'flatbuffers';
import { odMethod } from './odMethod.js';
import { odSensorContribution, odSensorContributionT } from './odSensorContribution.js';
/**
 * Orbit Determination Results
 */
export declare class OBD implements flatbuffers.IUnpackableObject<OBDT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): OBD;
    static getRootAsOBD(bb: flatbuffers.ByteBuffer, obj?: OBD): OBD;
    static getSizePrefixedRootAsOBD(bb: flatbuffers.ByteBuffer, obj?: OBD): OBD;
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
     * OD fit start time (ISO 8601)
     */
    START_TIME(): string | null;
    START_TIME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * OD fit end time (ISO 8601)
     */
    END_TIME(): string | null;
    END_TIME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * OD method used
     */
    METHOD(): odMethod;
    /**
     * Method source or software
     */
    METHOD_SOURCE(): string | null;
    METHOD_SOURCE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * True if this is an initial orbit determination
     */
    INITIAL_OD(): boolean;
    /**
     * A priori element set identifier
     */
    APRIORI_ID_ELSET(): string | null;
    APRIORI_ID_ELSET(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * A priori element set data reference
     */
    APRIORI_ELSET(): string | null;
    APRIORI_ELSET(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * A priori state vector identifier
     */
    APRIORI_ID_STATE_VECTOR(): string | null;
    APRIORI_ID_STATE_VECTOR(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * A priori state vector data reference
     */
    APRIORI_STATE_VECTOR(): string | null;
    APRIORI_STATE_VECTOR(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Start of last observation arc (ISO 8601)
     */
    LAST_OB_START(): string | null;
    LAST_OB_START(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * End of last observation arc (ISO 8601)
     */
    LAST_OB_END(): string | null;
    LAST_OB_END(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Observation time span (days)
     */
    TIME_SPAN(): number;
    /**
     * Fit span in days
     */
    FIT_SPAN(): number;
    /**
     * Solution effective from (ISO 8601)
     */
    EFFECTIVE_FROM(): string | null;
    EFFECTIVE_FROM(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Solution effective until (ISO 8601)
     */
    EFFECTIVE_UNTIL(): string | null;
    EFFECTIVE_UNTIL(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Weighted RMS of residuals
     */
    WRMS(): number;
    /**
     * Previous solution WRMS
     */
    PREVIOUS_WRMS(): number;
    /**
     * First pass WRMS
     */
    FIRST_PASS_WRMS(): number;
    /**
     * Best pass WRMS
     */
    BEST_PASS_WRMS(): number;
    /**
     * Error growth rate (km/day)
     */
    ERROR_GROWTH_RATE(): number;
    /**
     * Energy dissipation rate
     */
    EDR(): number;
    /**
     * True if ballistic coefficient was estimated
     */
    BALLISTIC_COEFF_EST(): boolean;
    /**
     * Ballistic coefficient model
     */
    BALLISTIC_COEFF_MODEL(): string | null;
    BALLISTIC_COEFF_MODEL(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * True if area-to-mass ratio was estimated
     */
    AGOM_EST(): boolean;
    /**
     * Area-to-mass ratio model
     */
    AGOM_MODEL(): string | null;
    AGOM_MODEL(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * RMS convergence criteria
     */
    RMS_CONVERGENCE_CRITERIA(): number;
    /**
     * Number of iterations to converge
     */
    NUM_ITERATIONS(): number;
    /**
     * Total accepted observations
     */
    NUM_ACCEPTED_OBS(): number;
    /**
     * Total rejected observations
     */
    NUM_REJECTED_OBS(): number;
    /**
     * Sensor contributions to this solution
     */
    SENSORS(index: number, obj?: odSensorContribution): odSensorContribution | null;
    sensorsLength(): number;
    /**
     * Accepted observation types
     */
    ACCEPTED_OB_TYPS(index: number): string;
    ACCEPTED_OB_TYPS(index: number, optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    acceptedObTypsLength(): number;
    /**
     * Accepted observation identifiers
     */
    ACCEPTED_OB_IDS(index: number): string;
    ACCEPTED_OB_IDS(index: number, optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    acceptedObIdsLength(): number;
    /**
     * Rejected observation types
     */
    REJECTED_OB_TYPS(index: number): string;
    REJECTED_OB_TYPS(index: number, optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    rejectedObTypsLength(): number;
    /**
     * Rejected observation identifiers
     */
    REJECTED_OB_IDS(index: number): string;
    REJECTED_OB_IDS(index: number, optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    rejectedObIdsLength(): number;
    static startOBD(builder: flatbuffers.Builder): void;
    static addId(builder: flatbuffers.Builder, IDOffset: flatbuffers.Offset): void;
    static addSatNo(builder: flatbuffers.Builder, SAT_NO: number): void;
    static addOrigObjectId(builder: flatbuffers.Builder, ORIG_OBJECT_IDOffset: flatbuffers.Offset): void;
    static addOnOrbit(builder: flatbuffers.Builder, ON_ORBITOffset: flatbuffers.Offset): void;
    static addStartTime(builder: flatbuffers.Builder, START_TIMEOffset: flatbuffers.Offset): void;
    static addEndTime(builder: flatbuffers.Builder, END_TIMEOffset: flatbuffers.Offset): void;
    static addMethod(builder: flatbuffers.Builder, METHOD: odMethod): void;
    static addMethodSource(builder: flatbuffers.Builder, METHOD_SOURCEOffset: flatbuffers.Offset): void;
    static addInitialOd(builder: flatbuffers.Builder, INITIAL_OD: boolean): void;
    static addAprioriIdElset(builder: flatbuffers.Builder, APRIORI_ID_ELSETOffset: flatbuffers.Offset): void;
    static addAprioriElset(builder: flatbuffers.Builder, APRIORI_ELSETOffset: flatbuffers.Offset): void;
    static addAprioriIdStateVector(builder: flatbuffers.Builder, APRIORI_ID_STATE_VECTOROffset: flatbuffers.Offset): void;
    static addAprioriStateVector(builder: flatbuffers.Builder, APRIORI_STATE_VECTOROffset: flatbuffers.Offset): void;
    static addLastObStart(builder: flatbuffers.Builder, LAST_OB_STARTOffset: flatbuffers.Offset): void;
    static addLastObEnd(builder: flatbuffers.Builder, LAST_OB_ENDOffset: flatbuffers.Offset): void;
    static addTimeSpan(builder: flatbuffers.Builder, TIME_SPAN: number): void;
    static addFitSpan(builder: flatbuffers.Builder, FIT_SPAN: number): void;
    static addEffectiveFrom(builder: flatbuffers.Builder, EFFECTIVE_FROMOffset: flatbuffers.Offset): void;
    static addEffectiveUntil(builder: flatbuffers.Builder, EFFECTIVE_UNTILOffset: flatbuffers.Offset): void;
    static addWrms(builder: flatbuffers.Builder, WRMS: number): void;
    static addPreviousWrms(builder: flatbuffers.Builder, PREVIOUS_WRMS: number): void;
    static addFirstPassWrms(builder: flatbuffers.Builder, FIRST_PASS_WRMS: number): void;
    static addBestPassWrms(builder: flatbuffers.Builder, BEST_PASS_WRMS: number): void;
    static addErrorGrowthRate(builder: flatbuffers.Builder, ERROR_GROWTH_RATE: number): void;
    static addEdr(builder: flatbuffers.Builder, EDR: number): void;
    static addBallisticCoeffEst(builder: flatbuffers.Builder, BALLISTIC_COEFF_EST: boolean): void;
    static addBallisticCoeffModel(builder: flatbuffers.Builder, BALLISTIC_COEFF_MODELOffset: flatbuffers.Offset): void;
    static addAgomEst(builder: flatbuffers.Builder, AGOM_EST: boolean): void;
    static addAgomModel(builder: flatbuffers.Builder, AGOM_MODELOffset: flatbuffers.Offset): void;
    static addRmsConvergenceCriteria(builder: flatbuffers.Builder, RMS_CONVERGENCE_CRITERIA: number): void;
    static addNumIterations(builder: flatbuffers.Builder, NUM_ITERATIONS: number): void;
    static addNumAcceptedObs(builder: flatbuffers.Builder, NUM_ACCEPTED_OBS: number): void;
    static addNumRejectedObs(builder: flatbuffers.Builder, NUM_REJECTED_OBS: number): void;
    static addSensors(builder: flatbuffers.Builder, SENSORSOffset: flatbuffers.Offset): void;
    static createSensorsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startSensorsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addAcceptedObTyps(builder: flatbuffers.Builder, ACCEPTED_OB_TYPSOffset: flatbuffers.Offset): void;
    static createAcceptedObTypsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startAcceptedObTypsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addAcceptedObIds(builder: flatbuffers.Builder, ACCEPTED_OB_IDSOffset: flatbuffers.Offset): void;
    static createAcceptedObIdsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startAcceptedObIdsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addRejectedObTyps(builder: flatbuffers.Builder, REJECTED_OB_TYPSOffset: flatbuffers.Offset): void;
    static createRejectedObTypsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startRejectedObTypsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addRejectedObIds(builder: flatbuffers.Builder, REJECTED_OB_IDSOffset: flatbuffers.Offset): void;
    static createRejectedObIdsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startRejectedObIdsVector(builder: flatbuffers.Builder, numElems: number): void;
    static endOBD(builder: flatbuffers.Builder): flatbuffers.Offset;
    static finishOBDBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static finishSizePrefixedOBDBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static createOBD(builder: flatbuffers.Builder, IDOffset: flatbuffers.Offset, SAT_NO: number, ORIG_OBJECT_IDOffset: flatbuffers.Offset, ON_ORBITOffset: flatbuffers.Offset, START_TIMEOffset: flatbuffers.Offset, END_TIMEOffset: flatbuffers.Offset, METHOD: odMethod, METHOD_SOURCEOffset: flatbuffers.Offset, INITIAL_OD: boolean, APRIORI_ID_ELSETOffset: flatbuffers.Offset, APRIORI_ELSETOffset: flatbuffers.Offset, APRIORI_ID_STATE_VECTOROffset: flatbuffers.Offset, APRIORI_STATE_VECTOROffset: flatbuffers.Offset, LAST_OB_STARTOffset: flatbuffers.Offset, LAST_OB_ENDOffset: flatbuffers.Offset, TIME_SPAN: number, FIT_SPAN: number, EFFECTIVE_FROMOffset: flatbuffers.Offset, EFFECTIVE_UNTILOffset: flatbuffers.Offset, WRMS: number, PREVIOUS_WRMS: number, FIRST_PASS_WRMS: number, BEST_PASS_WRMS: number, ERROR_GROWTH_RATE: number, EDR: number, BALLISTIC_COEFF_EST: boolean, BALLISTIC_COEFF_MODELOffset: flatbuffers.Offset, AGOM_EST: boolean, AGOM_MODELOffset: flatbuffers.Offset, RMS_CONVERGENCE_CRITERIA: number, NUM_ITERATIONS: number, NUM_ACCEPTED_OBS: number, NUM_REJECTED_OBS: number, SENSORSOffset: flatbuffers.Offset, ACCEPTED_OB_TYPSOffset: flatbuffers.Offset, ACCEPTED_OB_IDSOffset: flatbuffers.Offset, REJECTED_OB_TYPSOffset: flatbuffers.Offset, REJECTED_OB_IDSOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): OBDT;
    unpackTo(_o: OBDT): void;
}
export declare class OBDT implements flatbuffers.IGeneratedObject {
    ID: string | Uint8Array | null;
    SAT_NO: number;
    ORIG_OBJECT_ID: string | Uint8Array | null;
    ON_ORBIT: string | Uint8Array | null;
    START_TIME: string | Uint8Array | null;
    END_TIME: string | Uint8Array | null;
    METHOD: odMethod;
    METHOD_SOURCE: string | Uint8Array | null;
    INITIAL_OD: boolean;
    APRIORI_ID_ELSET: string | Uint8Array | null;
    APRIORI_ELSET: string | Uint8Array | null;
    APRIORI_ID_STATE_VECTOR: string | Uint8Array | null;
    APRIORI_STATE_VECTOR: string | Uint8Array | null;
    LAST_OB_START: string | Uint8Array | null;
    LAST_OB_END: string | Uint8Array | null;
    TIME_SPAN: number;
    FIT_SPAN: number;
    EFFECTIVE_FROM: string | Uint8Array | null;
    EFFECTIVE_UNTIL: string | Uint8Array | null;
    WRMS: number;
    PREVIOUS_WRMS: number;
    FIRST_PASS_WRMS: number;
    BEST_PASS_WRMS: number;
    ERROR_GROWTH_RATE: number;
    EDR: number;
    BALLISTIC_COEFF_EST: boolean;
    BALLISTIC_COEFF_MODEL: string | Uint8Array | null;
    AGOM_EST: boolean;
    AGOM_MODEL: string | Uint8Array | null;
    RMS_CONVERGENCE_CRITERIA: number;
    NUM_ITERATIONS: number;
    NUM_ACCEPTED_OBS: number;
    NUM_REJECTED_OBS: number;
    SENSORS: (odSensorContributionT)[];
    ACCEPTED_OB_TYPS: (string)[];
    ACCEPTED_OB_IDS: (string)[];
    REJECTED_OB_TYPS: (string)[];
    REJECTED_OB_IDS: (string)[];
    constructor(ID?: string | Uint8Array | null, SAT_NO?: number, ORIG_OBJECT_ID?: string | Uint8Array | null, ON_ORBIT?: string | Uint8Array | null, START_TIME?: string | Uint8Array | null, END_TIME?: string | Uint8Array | null, METHOD?: odMethod, METHOD_SOURCE?: string | Uint8Array | null, INITIAL_OD?: boolean, APRIORI_ID_ELSET?: string | Uint8Array | null, APRIORI_ELSET?: string | Uint8Array | null, APRIORI_ID_STATE_VECTOR?: string | Uint8Array | null, APRIORI_STATE_VECTOR?: string | Uint8Array | null, LAST_OB_START?: string | Uint8Array | null, LAST_OB_END?: string | Uint8Array | null, TIME_SPAN?: number, FIT_SPAN?: number, EFFECTIVE_FROM?: string | Uint8Array | null, EFFECTIVE_UNTIL?: string | Uint8Array | null, WRMS?: number, PREVIOUS_WRMS?: number, FIRST_PASS_WRMS?: number, BEST_PASS_WRMS?: number, ERROR_GROWTH_RATE?: number, EDR?: number, BALLISTIC_COEFF_EST?: boolean, BALLISTIC_COEFF_MODEL?: string | Uint8Array | null, AGOM_EST?: boolean, AGOM_MODEL?: string | Uint8Array | null, RMS_CONVERGENCE_CRITERIA?: number, NUM_ITERATIONS?: number, NUM_ACCEPTED_OBS?: number, NUM_REJECTED_OBS?: number, SENSORS?: (odSensorContributionT)[], ACCEPTED_OB_TYPS?: (string)[], ACCEPTED_OB_IDS?: (string)[], REJECTED_OB_TYPS?: (string)[], REJECTED_OB_IDS?: (string)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=OBD.d.ts.map