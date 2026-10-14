import * as flatbuffers from 'flatbuffers';
import { ermFitEpochChoice } from './ermFitEpochChoice.js';
import { ermFitFavour } from './ermFitFavour.js';
import { ermFitStart } from './ermFitStart.js';
import { ermFitWeighting } from './ermFitWeighting.js';
/**
 * Settings of a fit of element sets to an ephemeris (shared, or for one
 * object when NORAD_CAT_ID is set).
 */
export declare class ERMFitSettings implements flatbuffers.IUnpackableObject<ERMFitSettingsT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): ERMFitSettings;
    static getRootAsERMFitSettings(bb: flatbuffers.ByteBuffer, obj?: ERMFitSettings): ERMFitSettings;
    static getSizePrefixedRootAsERMFitSettings(bb: flatbuffers.ByteBuffer, obj?: ERMFitSettings): ERMFitSettings;
    /**
     * Object; 0 = the shared settings.
     */
    NORAD_CAT_ID(): number;
    FROM_EPOCH(): string | null;
    FROM_EPOCH(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    TO_EPOCH(): string | null;
    TO_EPOCH(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    EPOCH_CHOICE(): ermFitEpochChoice;
    EPOCH(): string | null;
    EPOCH(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Thin the ephemeris to this step, s; 0 = every state.
     */
    STEP_S(): number;
    FIT_BSTAR(): boolean;
    /**
     * Fixed B*, 1/earth radii; NaN = the a priori set's, else 0.
     */
    BSTAR(): number;
    /**
     * Take B* from the a priori set.
     */
    BSTAR_FROM_APRIORI(): boolean;
    WEIGHTING(): ermFitWeighting;
    SIGMA_RTN_KM(index: number): number | null;
    sigmaRtnKmLength(): number;
    sigmaRtnKmArray(): Float64Array | null;
    /**
     * Fit velocities too.
     */
    VELOCITY(): boolean;
    SIGMA_VELOCITY_KM_S(): number;
    /**
     * Exponential weighting half-life, hours; 0 = none.
     */
    HALF_LIFE_HOURS(): number;
    TOWARDS(): ermFitFavour;
    MAX_ITERATIONS(): number;
    TOLERANCE(): number;
    FLOOR_KM(): number;
    INITIAL(): ermFitStart;
    /**
     * Reject residuals beyond this many sigma; 0 = none.
     */
    REJECT_SIGMA(): number;
    /**
     * Scale the fit covariance by the residual variance (default true unless
     * WEIGHTING is EphemerisCovariance).
     */
    SCALE_COVARIANCE(): boolean;
    /**
     * True when SCALE_COVARIANCE carries a value; false means the default.
     */
    HAS_SCALE_COVARIANCE(): boolean;
    RESIDUALS(): boolean;
    CLOSURE(): boolean;
    /**
     * Ephemeris stream to use; -1 = all.
     */
    EPHEMERIS_STREAM(): number;
    /**
     * Metadata of the fitted OMM.
     */
    ORIGINATOR(): string | null;
    ORIGINATOR(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    CREATION_DATE(): string | null;
    CREATION_DATE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    CLASSIFICATION(): string | null;
    CLASSIFICATION(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    COMMENT(): string | null;
    COMMENT(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    OBJECT_NAME(): string | null;
    OBJECT_NAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    OBJECT_ID(): string | null;
    OBJECT_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    ELEMENT_SET_NO(): number;
    static startERMFitSettings(builder: flatbuffers.Builder): void;
    static addNoradCatId(builder: flatbuffers.Builder, NORAD_CAT_ID: number): void;
    static addFromEpoch(builder: flatbuffers.Builder, FROM_EPOCHOffset: flatbuffers.Offset): void;
    static addToEpoch(builder: flatbuffers.Builder, TO_EPOCHOffset: flatbuffers.Offset): void;
    static addEpochChoice(builder: flatbuffers.Builder, EPOCH_CHOICE: ermFitEpochChoice): void;
    static addEpoch(builder: flatbuffers.Builder, EPOCHOffset: flatbuffers.Offset): void;
    static addStepS(builder: flatbuffers.Builder, STEP_S: number): void;
    static addFitBstar(builder: flatbuffers.Builder, FIT_BSTAR: boolean): void;
    static addBstar(builder: flatbuffers.Builder, BSTAR: number): void;
    static addBstarFromApriori(builder: flatbuffers.Builder, BSTAR_FROM_APRIORI: boolean): void;
    static addWeighting(builder: flatbuffers.Builder, WEIGHTING: ermFitWeighting): void;
    static addSigmaRtnKm(builder: flatbuffers.Builder, SIGMA_RTN_KMOffset: flatbuffers.Offset): void;
    static createSigmaRtnKmVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createSigmaRtnKmVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startSigmaRtnKmVector(builder: flatbuffers.Builder, numElems: number): void;
    static addVelocity(builder: flatbuffers.Builder, VELOCITY: boolean): void;
    static addSigmaVelocityKmS(builder: flatbuffers.Builder, SIGMA_VELOCITY_KM_S: number): void;
    static addHalfLifeHours(builder: flatbuffers.Builder, HALF_LIFE_HOURS: number): void;
    static addTowards(builder: flatbuffers.Builder, TOWARDS: ermFitFavour): void;
    static addMaxIterations(builder: flatbuffers.Builder, MAX_ITERATIONS: number): void;
    static addTolerance(builder: flatbuffers.Builder, TOLERANCE: number): void;
    static addFloorKm(builder: flatbuffers.Builder, FLOOR_KM: number): void;
    static addInitial(builder: flatbuffers.Builder, INITIAL: ermFitStart): void;
    static addRejectSigma(builder: flatbuffers.Builder, REJECT_SIGMA: number): void;
    static addScaleCovariance(builder: flatbuffers.Builder, SCALE_COVARIANCE: boolean): void;
    static addHasScaleCovariance(builder: flatbuffers.Builder, HAS_SCALE_COVARIANCE: boolean): void;
    static addResiduals(builder: flatbuffers.Builder, RESIDUALS: boolean): void;
    static addClosure(builder: flatbuffers.Builder, CLOSURE: boolean): void;
    static addEphemerisStream(builder: flatbuffers.Builder, EPHEMERIS_STREAM: number): void;
    static addOriginator(builder: flatbuffers.Builder, ORIGINATOROffset: flatbuffers.Offset): void;
    static addCreationDate(builder: flatbuffers.Builder, CREATION_DATEOffset: flatbuffers.Offset): void;
    static addClassification(builder: flatbuffers.Builder, CLASSIFICATIONOffset: flatbuffers.Offset): void;
    static addComment(builder: flatbuffers.Builder, COMMENTOffset: flatbuffers.Offset): void;
    static addObjectName(builder: flatbuffers.Builder, OBJECT_NAMEOffset: flatbuffers.Offset): void;
    static addObjectId(builder: flatbuffers.Builder, OBJECT_IDOffset: flatbuffers.Offset): void;
    static addElementSetNo(builder: flatbuffers.Builder, ELEMENT_SET_NO: number): void;
    static endERMFitSettings(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createERMFitSettings(builder: flatbuffers.Builder, NORAD_CAT_ID: number, FROM_EPOCHOffset: flatbuffers.Offset, TO_EPOCHOffset: flatbuffers.Offset, EPOCH_CHOICE: ermFitEpochChoice, EPOCHOffset: flatbuffers.Offset, STEP_S: number, FIT_BSTAR: boolean, BSTAR: number, BSTAR_FROM_APRIORI: boolean, WEIGHTING: ermFitWeighting, SIGMA_RTN_KMOffset: flatbuffers.Offset, VELOCITY: boolean, SIGMA_VELOCITY_KM_S: number, HALF_LIFE_HOURS: number, TOWARDS: ermFitFavour, MAX_ITERATIONS: number, TOLERANCE: number, FLOOR_KM: number, INITIAL: ermFitStart, REJECT_SIGMA: number, SCALE_COVARIANCE: boolean, HAS_SCALE_COVARIANCE: boolean, RESIDUALS: boolean, CLOSURE: boolean, EPHEMERIS_STREAM: number, ORIGINATOROffset: flatbuffers.Offset, CREATION_DATEOffset: flatbuffers.Offset, CLASSIFICATIONOffset: flatbuffers.Offset, COMMENTOffset: flatbuffers.Offset, OBJECT_NAMEOffset: flatbuffers.Offset, OBJECT_IDOffset: flatbuffers.Offset, ELEMENT_SET_NO: number): flatbuffers.Offset;
    unpack(): ERMFitSettingsT;
    unpackTo(_o: ERMFitSettingsT): void;
}
export declare class ERMFitSettingsT implements flatbuffers.IGeneratedObject {
    NORAD_CAT_ID: number;
    FROM_EPOCH: string | Uint8Array | null;
    TO_EPOCH: string | Uint8Array | null;
    EPOCH_CHOICE: ermFitEpochChoice;
    EPOCH: string | Uint8Array | null;
    STEP_S: number;
    FIT_BSTAR: boolean;
    BSTAR: number;
    BSTAR_FROM_APRIORI: boolean;
    WEIGHTING: ermFitWeighting;
    SIGMA_RTN_KM: (number)[];
    VELOCITY: boolean;
    SIGMA_VELOCITY_KM_S: number;
    HALF_LIFE_HOURS: number;
    TOWARDS: ermFitFavour;
    MAX_ITERATIONS: number;
    TOLERANCE: number;
    FLOOR_KM: number;
    INITIAL: ermFitStart;
    REJECT_SIGMA: number;
    SCALE_COVARIANCE: boolean;
    HAS_SCALE_COVARIANCE: boolean;
    RESIDUALS: boolean;
    CLOSURE: boolean;
    EPHEMERIS_STREAM: number;
    ORIGINATOR: string | Uint8Array | null;
    CREATION_DATE: string | Uint8Array | null;
    CLASSIFICATION: string | Uint8Array | null;
    COMMENT: string | Uint8Array | null;
    OBJECT_NAME: string | Uint8Array | null;
    OBJECT_ID: string | Uint8Array | null;
    ELEMENT_SET_NO: number;
    constructor(NORAD_CAT_ID?: number, FROM_EPOCH?: string | Uint8Array | null, TO_EPOCH?: string | Uint8Array | null, EPOCH_CHOICE?: ermFitEpochChoice, EPOCH?: string | Uint8Array | null, STEP_S?: number, FIT_BSTAR?: boolean, BSTAR?: number, BSTAR_FROM_APRIORI?: boolean, WEIGHTING?: ermFitWeighting, SIGMA_RTN_KM?: (number)[], VELOCITY?: boolean, SIGMA_VELOCITY_KM_S?: number, HALF_LIFE_HOURS?: number, TOWARDS?: ermFitFavour, MAX_ITERATIONS?: number, TOLERANCE?: number, FLOOR_KM?: number, INITIAL?: ermFitStart, REJECT_SIGMA?: number, SCALE_COVARIANCE?: boolean, HAS_SCALE_COVARIANCE?: boolean, RESIDUALS?: boolean, CLOSURE?: boolean, EPHEMERIS_STREAM?: number, ORIGINATOR?: string | Uint8Array | null, CREATION_DATE?: string | Uint8Array | null, CLASSIFICATION?: string | Uint8Array | null, COMMENT?: string | Uint8Array | null, OBJECT_NAME?: string | Uint8Array | null, OBJECT_ID?: string | Uint8Array | null, ELEMENT_SET_NO?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=ERMFitSettings.d.ts.map