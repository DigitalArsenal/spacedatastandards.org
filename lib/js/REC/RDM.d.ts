import * as flatbuffers from 'flatbuffers';
import { reentryDisposition } from './reentryDisposition.js';
import { reentryImpact, reentryImpactT } from './reentryImpact.js';
import { reentryReason } from './reentryReason.js';
import { reentryStateVector, reentryStateVectorT } from './reentryStateVector.js';
import { survivingDebris, survivingDebrisT } from './survivingDebris.js';
/**
 * Reentry Data Message
 */
export declare class RDM implements flatbuffers.IUnpackableObject<RDMT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): RDM;
    static getRootAsRDM(bb: flatbuffers.ByteBuffer, obj?: RDM): RDM;
    static getSizePrefixedRootAsRDM(bb: flatbuffers.ByteBuffer, obj?: RDM): RDM;
    static bufferHasIdentifier(bb: flatbuffers.ByteBuffer): boolean;
    /**
     * CCSDS RDM version
     */
    CCSDS_RDM_VERS(): string | null;
    CCSDS_RDM_VERS(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
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
     * NORAD catalog number
     */
    NORAD_CAT_ID(): number;
    /**
     * Object type (PAYLOAD, ROCKET_BODY, DEBRIS, UNKNOWN)
     */
    OBJECT_TYPE(): string | null;
    OBJECT_TYPE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Reentry disposition
     */
    DISPOSITION(): reentryDisposition;
    /**
     * Reentry reason
     */
    REASON(): reentryReason;
    /**
     * Predicted reentry epoch (ISO 8601)
     */
    REENTRY_EPOCH(): string | null;
    REENTRY_EPOCH(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Reentry epoch uncertainty window in hours
     */
    REENTRY_EPOCH_UNC(): number;
    /**
     * Reentry latitude in degrees
     */
    REENTRY_LATITUDE(): number;
    /**
     * Reentry longitude in degrees
     */
    REENTRY_LONGITUDE(): number;
    /**
     * Reentry altitude in km
     */
    REENTRY_ALTITUDE(): number;
    /**
     * Time system
     */
    TIME_SYSTEM(): string | null;
    TIME_SYSTEM(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Previous predicted reentry epoch for comparison (ISO 8601)
     */
    PREV_PREDICTION_EPOCH(): string | null;
    PREV_PREDICTION_EPOCH(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Ballistic coefficient in kg/m^2
     */
    BALLISTIC_COEFF(): number;
    /**
     * Object mass in kg
     */
    MASS(): number;
    /**
     * Solar radiation pressure area in m^2
     */
    SOLAR_RAD_AREA(): number;
    /**
     * Drag area in m^2
     */
    DRAG_AREA(): number;
    /**
     * Initial state vector
     */
    INITIAL_STATE(obj?: reentryStateVector): reentryStateVector | null;
    /**
     * Ground impact predictions
     */
    IMPACT_PREDICTIONS(index: number, obj?: reentryImpact): reentryImpact | null;
    impactPredictionsLength(): number;
    /**
     * Predicted surviving debris
     */
    SURVIVING_DEBRIS(index: number, obj?: survivingDebris): survivingDebris | null;
    survivingDebrisLength(): number;
    /**
     * Casualty expectation
     */
    CASUALTY_EXPECTATION(): number;
    /**
     * Number of breakup fragments predicted
     */
    NUM_FRAGMENTS(): number;
    /**
     * Total surviving mass in kg
     */
    SURVIVING_MASS(): number;
    /**
     * Additional comments
     */
    COMMENT(): string | null;
    COMMENT(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    static startRDM(builder: flatbuffers.Builder): void;
    static addCcsdsRdmVers(builder: flatbuffers.Builder, CCSDS_RDM_VERSOffset: flatbuffers.Offset): void;
    static addCreationDate(builder: flatbuffers.Builder, CREATION_DATEOffset: flatbuffers.Offset): void;
    static addOriginator(builder: flatbuffers.Builder, ORIGINATOROffset: flatbuffers.Offset): void;
    static addObjectName(builder: flatbuffers.Builder, OBJECT_NAMEOffset: flatbuffers.Offset): void;
    static addObjectId(builder: flatbuffers.Builder, OBJECT_IDOffset: flatbuffers.Offset): void;
    static addNoradCatId(builder: flatbuffers.Builder, NORAD_CAT_ID: number): void;
    static addObjectType(builder: flatbuffers.Builder, OBJECT_TYPEOffset: flatbuffers.Offset): void;
    static addDisposition(builder: flatbuffers.Builder, DISPOSITION: reentryDisposition): void;
    static addReason(builder: flatbuffers.Builder, REASON: reentryReason): void;
    static addReentryEpoch(builder: flatbuffers.Builder, REENTRY_EPOCHOffset: flatbuffers.Offset): void;
    static addReentryEpochUnc(builder: flatbuffers.Builder, REENTRY_EPOCH_UNC: number): void;
    static addReentryLatitude(builder: flatbuffers.Builder, REENTRY_LATITUDE: number): void;
    static addReentryLongitude(builder: flatbuffers.Builder, REENTRY_LONGITUDE: number): void;
    static addReentryAltitude(builder: flatbuffers.Builder, REENTRY_ALTITUDE: number): void;
    static addTimeSystem(builder: flatbuffers.Builder, TIME_SYSTEMOffset: flatbuffers.Offset): void;
    static addPrevPredictionEpoch(builder: flatbuffers.Builder, PREV_PREDICTION_EPOCHOffset: flatbuffers.Offset): void;
    static addBallisticCoeff(builder: flatbuffers.Builder, BALLISTIC_COEFF: number): void;
    static addMass(builder: flatbuffers.Builder, MASS: number): void;
    static addSolarRadArea(builder: flatbuffers.Builder, SOLAR_RAD_AREA: number): void;
    static addDragArea(builder: flatbuffers.Builder, DRAG_AREA: number): void;
    static addInitialState(builder: flatbuffers.Builder, INITIAL_STATEOffset: flatbuffers.Offset): void;
    static addImpactPredictions(builder: flatbuffers.Builder, IMPACT_PREDICTIONSOffset: flatbuffers.Offset): void;
    static createImpactPredictionsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startImpactPredictionsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addSurvivingDebris(builder: flatbuffers.Builder, SURVIVING_DEBRISOffset: flatbuffers.Offset): void;
    static createSurvivingDebrisVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startSurvivingDebrisVector(builder: flatbuffers.Builder, numElems: number): void;
    static addCasualtyExpectation(builder: flatbuffers.Builder, CASUALTY_EXPECTATION: number): void;
    static addNumFragments(builder: flatbuffers.Builder, NUM_FRAGMENTS: number): void;
    static addSurvivingMass(builder: flatbuffers.Builder, SURVIVING_MASS: number): void;
    static addComment(builder: flatbuffers.Builder, COMMENTOffset: flatbuffers.Offset): void;
    static endRDM(builder: flatbuffers.Builder): flatbuffers.Offset;
    static finishRDMBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static finishSizePrefixedRDMBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    unpack(): RDMT;
    unpackTo(_o: RDMT): void;
}
export declare class RDMT implements flatbuffers.IGeneratedObject {
    CCSDS_RDM_VERS: string | Uint8Array | null;
    CREATION_DATE: string | Uint8Array | null;
    ORIGINATOR: string | Uint8Array | null;
    OBJECT_NAME: string | Uint8Array | null;
    OBJECT_ID: string | Uint8Array | null;
    NORAD_CAT_ID: number;
    OBJECT_TYPE: string | Uint8Array | null;
    DISPOSITION: reentryDisposition;
    REASON: reentryReason;
    REENTRY_EPOCH: string | Uint8Array | null;
    REENTRY_EPOCH_UNC: number;
    REENTRY_LATITUDE: number;
    REENTRY_LONGITUDE: number;
    REENTRY_ALTITUDE: number;
    TIME_SYSTEM: string | Uint8Array | null;
    PREV_PREDICTION_EPOCH: string | Uint8Array | null;
    BALLISTIC_COEFF: number;
    MASS: number;
    SOLAR_RAD_AREA: number;
    DRAG_AREA: number;
    INITIAL_STATE: reentryStateVectorT | null;
    IMPACT_PREDICTIONS: (reentryImpactT)[];
    SURVIVING_DEBRIS: (survivingDebrisT)[];
    CASUALTY_EXPECTATION: number;
    NUM_FRAGMENTS: number;
    SURVIVING_MASS: number;
    COMMENT: string | Uint8Array | null;
    constructor(CCSDS_RDM_VERS?: string | Uint8Array | null, CREATION_DATE?: string | Uint8Array | null, ORIGINATOR?: string | Uint8Array | null, OBJECT_NAME?: string | Uint8Array | null, OBJECT_ID?: string | Uint8Array | null, NORAD_CAT_ID?: number, OBJECT_TYPE?: string | Uint8Array | null, DISPOSITION?: reentryDisposition, REASON?: reentryReason, REENTRY_EPOCH?: string | Uint8Array | null, REENTRY_EPOCH_UNC?: number, REENTRY_LATITUDE?: number, REENTRY_LONGITUDE?: number, REENTRY_ALTITUDE?: number, TIME_SYSTEM?: string | Uint8Array | null, PREV_PREDICTION_EPOCH?: string | Uint8Array | null, BALLISTIC_COEFF?: number, MASS?: number, SOLAR_RAD_AREA?: number, DRAG_AREA?: number, INITIAL_STATE?: reentryStateVectorT | null, IMPACT_PREDICTIONS?: (reentryImpactT)[], SURVIVING_DEBRIS?: (survivingDebrisT)[], CASUALTY_EXPECTATION?: number, NUM_FRAGMENTS?: number, SURVIVING_MASS?: number, COMMENT?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=RDM.d.ts.map