import * as flatbuffers from 'flatbuffers';
import { RDMUserDefinedParameter, RDMUserDefinedParameterT } from './RDMUserDefinedParameter.js';
import { rdmControlledReentry } from './rdmControlledReentry.js';
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
     * COMMENT lines of the message (CCSDS 508.1-B-1), from its header, metadata and
     * data groups, in message order, joined by a line feed.
     */
    COMMENT(): string | null;
    COMMENT(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * The fields below, with the earlier ones that say so, are the keywords of
     * CCSDS 508.1-B-1. Of the earlier ones OBJECT_ID is INTERNATIONAL_DESIGNATOR,
     * NORAD_CAT_ID the OBJECT_DESIGNATOR when it is a catalog number, REENTRY_EPOCH
     * NOMINAL_REENTRY_EPOCH, PREV_PREDICTION_EPOCH PREVIOUS_MESSAGE_EPOCH, MASS
     * WET_MASS, and INITIAL_STATE the state vector; DISPOSITION, REASON,
     * REENTRY_EPOCH_UNC, REENTRY_LATITUDE, REENTRY_LONGITUDE, IMPACT_PREDICTIONS,
     * SURVIVING_DEBRIS, CASUALTY_EXPECTATION, NUM_FRAGMENTS and SURVIVING_MASS are
     * not keywords of the message.
     * MESSAGE_ID: an identifier the originator makes unique for this message.
     */
    MESSAGE_ID(): string | null;
    MESSAGE_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * CATALOG_NAME: the satellite catalog OBJECT_DESIGNATOR is in.
     */
    CATALOG_NAME(): string | null;
    CATALOG_NAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * OBJECT_DESIGNATOR: the object's identifier in CATALOG_NAME, as written.
     */
    OBJECT_DESIGNATOR(): string | null;
    OBJECT_DESIGNATOR(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * OBJECT_OWNER.
     */
    OBJECT_OWNER(): string | null;
    OBJECT_OWNER(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * OBJECT_OPERATOR.
     */
    OBJECT_OPERATOR(): string | null;
    OBJECT_OPERATOR(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * CONTROLLED_REENTRY: YES, NO or UNKNOWN.
     */
    CONTROLLED_REENTRY(): rdmControlledReentry;
    /**
     * CENTER_NAME: the body being re-entered.
     */
    CENTER_NAME(): string | null;
    CENTER_NAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * EPOCH_TZERO: the epoch the message's relative times are measured from.
     */
    EPOCH_TZERO(): string | null;
    EPOCH_TZERO(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * REF_FRAME: the frame of the state vector.
     */
    REF_FRAME(): string | null;
    REF_FRAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * REF_FRAME_EPOCH.
     */
    REF_FRAME_EPOCH(): string | null;
    REF_FRAME_EPOCH(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * EPHEMERIS_NAME.
     */
    EPHEMERIS_NAME(): string | null;
    EPHEMERIS_NAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * GRAVITY_MODEL.
     */
    GRAVITY_MODEL(): string | null;
    GRAVITY_MODEL(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * ATMOSPHERIC_MODEL.
     */
    ATMOSPHERIC_MODEL(): string | null;
    ATMOSPHERIC_MODEL(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * SOLAR_FLUX_PREDICTION.
     */
    SOLAR_FLUX_PREDICTION(): string | null;
    SOLAR_FLUX_PREDICTION(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * N_BODY_PERTURBATIONS.
     */
    N_BODY_PERTURBATIONS(): string | null;
    N_BODY_PERTURBATIONS(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * SOLAR_RAD_PRESSURE: a model name, or YES or NO.
     */
    SOLAR_RAD_PRESSURE(): string | null;
    SOLAR_RAD_PRESSURE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * EARTH_TIDES: a model name.
     */
    EARTH_TIDES(): string | null;
    EARTH_TIDES(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * INTRACK_THRUST: YES or NO.
     */
    INTRACK_THRUST(): string | null;
    INTRACK_THRUST(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * DRAG_PARAMETERS_SOURCE.
     */
    DRAG_PARAMETERS_SOURCE(): string | null;
    DRAG_PARAMETERS_SOURCE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * DRAG_PARAMETERS_ALTITUDE in km, NaN when not stated.
     */
    DRAG_PARAMETERS_ALTITUDE(): number;
    /**
     * REENTRY_UNCERTAINTY_METHOD: NONE, ANALYTICAL, STOCHASTIC or EMPIRICAL.
     */
    REENTRY_UNCERTAINTY_METHOD(): string | null;
    REENTRY_UNCERTAINTY_METHOD(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * REENTRY_DISINTEGRATION: NONE, MASS-LOSS, BREAK-UP or MASS-LOSS + BREAK-UP.
     */
    REENTRY_DISINTEGRATION(): string | null;
    REENTRY_DISINTEGRATION(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * IMPACT_UNCERTAINTY_METHOD: NONE, ANALYTICAL, STOCHASTIC or EMPIRICAL.
     */
    IMPACT_UNCERTAINTY_METHOD(): string | null;
    IMPACT_UNCERTAINTY_METHOD(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * PREVIOUS_MESSAGE_ID.
     */
    PREVIOUS_MESSAGE_ID(): string | null;
    PREVIOUS_MESSAGE_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * NEXT_MESSAGE_EPOCH.
     */
    NEXT_MESSAGE_EPOCH(): string | null;
    NEXT_MESSAGE_EPOCH(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * ORBIT_LIFETIME in days.
     */
    ORBIT_LIFETIME(): number;
    /**
     * ORBIT_LIFETIME_WINDOW_START in days, NaN when not stated.
     */
    ORBIT_LIFETIME_WINDOW_START(): number;
    /**
     * ORBIT_LIFETIME_WINDOW_END in days, NaN when not stated.
     */
    ORBIT_LIFETIME_WINDOW_END(): number;
    /**
     * REENTRY_WINDOW_START.
     */
    REENTRY_WINDOW_START(): string | null;
    REENTRY_WINDOW_START(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * REENTRY_WINDOW_END.
     */
    REENTRY_WINDOW_END(): string | null;
    REENTRY_WINDOW_END(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * ORBIT_LIFETIME_CONFIDENCE_LEVEL in percent, NaN when not stated.
     */
    ORBIT_LIFETIME_CONFIDENCE_LEVEL(): number;
    /**
     * PROBABILITY_OF_IMPACT, NaN when not stated.
     */
    PROBABILITY_OF_IMPACT(): number;
    /**
     * PROBABILITY_OF_BURN_UP, NaN when not stated.
     */
    PROBABILITY_OF_BURN_UP(): number;
    /**
     * PROBABILITY_OF_BREAK_UP, NaN when not stated.
     */
    PROBABILITY_OF_BREAK_UP(): number;
    /**
     * PROBABILITY_OF_LAND_IMPACT, NaN when not stated.
     */
    PROBABILITY_OF_LAND_IMPACT(): number;
    /**
     * PROBABILITY_OF_CASUALTY, NaN when not stated.
     */
    PROBABILITY_OF_CASUALTY(): number;
    /**
     * NOMINAL_IMPACT_EPOCH.
     */
    NOMINAL_IMPACT_EPOCH(): string | null;
    NOMINAL_IMPACT_EPOCH(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * IMPACT_WINDOW_START.
     */
    IMPACT_WINDOW_START(): string | null;
    IMPACT_WINDOW_START(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * IMPACT_WINDOW_END.
     */
    IMPACT_WINDOW_END(): string | null;
    IMPACT_WINDOW_END(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * IMPACT_REF_FRAME.
     */
    IMPACT_REF_FRAME(): string | null;
    IMPACT_REF_FRAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * NOMINAL_IMPACT_LON in degrees, NaN when not stated.
     */
    NOMINAL_IMPACT_LON(): number;
    /**
     * NOMINAL_IMPACT_LAT in degrees, NaN when not stated.
     */
    NOMINAL_IMPACT_LAT(): number;
    /**
     * NOMINAL_IMPACT_ALT in metres, NaN when not stated.
     */
    NOMINAL_IMPACT_ALT(): number;
    /**
     * IMPACT_1_CONFIDENCE in percent, NaN when not stated.
     */
    IMPACT_1_CONFIDENCE(): number;
    /**
     * IMPACT_1_START_LON in degrees, NaN when not stated.
     */
    IMPACT_1_START_LON(): number;
    /**
     * IMPACT_1_START_LAT in degrees, NaN when not stated.
     */
    IMPACT_1_START_LAT(): number;
    /**
     * IMPACT_1_STOP_LON in degrees, NaN when not stated.
     */
    IMPACT_1_STOP_LON(): number;
    /**
     * IMPACT_1_STOP_LAT in degrees, NaN when not stated.
     */
    IMPACT_1_STOP_LAT(): number;
    /**
     * IMPACT_1_CROSS_TRACK in km, NaN when not stated.
     */
    IMPACT_1_CROSS_TRACK(): number;
    /**
     * IMPACT_2_CONFIDENCE in percent, NaN when not stated.
     */
    IMPACT_2_CONFIDENCE(): number;
    /**
     * IMPACT_2_START_LON in degrees, NaN when not stated.
     */
    IMPACT_2_START_LON(): number;
    /**
     * IMPACT_2_START_LAT in degrees, NaN when not stated.
     */
    IMPACT_2_START_LAT(): number;
    /**
     * IMPACT_2_STOP_LON in degrees, NaN when not stated.
     */
    IMPACT_2_STOP_LON(): number;
    /**
     * IMPACT_2_STOP_LAT in degrees, NaN when not stated.
     */
    IMPACT_2_STOP_LAT(): number;
    /**
     * IMPACT_2_CROSS_TRACK in km, NaN when not stated.
     */
    IMPACT_2_CROSS_TRACK(): number;
    /**
     * IMPACT_3_CONFIDENCE in percent, NaN when not stated.
     */
    IMPACT_3_CONFIDENCE(): number;
    /**
     * IMPACT_3_START_LON in degrees, NaN when not stated.
     */
    IMPACT_3_START_LON(): number;
    /**
     * IMPACT_3_START_LAT in degrees, NaN when not stated.
     */
    IMPACT_3_START_LAT(): number;
    /**
     * IMPACT_3_STOP_LON in degrees, NaN when not stated.
     */
    IMPACT_3_STOP_LON(): number;
    /**
     * IMPACT_3_STOP_LAT in degrees, NaN when not stated.
     */
    IMPACT_3_STOP_LAT(): number;
    /**
     * IMPACT_3_CROSS_TRACK in km, NaN when not stated.
     */
    IMPACT_3_CROSS_TRACK(): number;
    /**
     * COV_REF_FRAME: the frame of COVARIANCE.
     */
    COV_REF_FRAME(): string | null;
    COV_REF_FRAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Position/velocity covariance matrix at the state vector's epoch, 6x6 lower
     * triangle by rows, 21 values (CX_X, CY_X, CY_Y, CZ_X, CZ_Y, CZ_Z, CX_DOT_X,
     * CX_DOT_Y, CX_DOT_Z, CX_DOT_X_DOT, CY_DOT_X, CY_DOT_Y, CY_DOT_Z, CY_DOT_X_DOT,
     * CY_DOT_Y_DOT, CZ_DOT_X, CZ_DOT_Y, CZ_DOT_Z, CZ_DOT_X_DOT, CZ_DOT_Y_DOT,
     * CZ_DOT_Z_DOT) in km**2, km**2/s and km**2/s**2. Empty when not stated.
     */
    COVARIANCE(index: number): number | null;
    covarianceLength(): number;
    covarianceArray(): Float64Array | null;
    /**
     * WET_MASS above is MASS; DRY_MASS in kg, NaN when not stated.
     */
    DRY_MASS(): number;
    /**
     * HAZARDOUS_SUBSTANCES.
     */
    HAZARDOUS_SUBSTANCES(): string | null;
    HAZARDOUS_SUBSTANCES(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * SOLAR_RAD_COEFF, NaN when not stated.
     */
    SOLAR_RAD_COEFF(): number;
    /**
     * DRAG_COEFF, NaN when not stated.
     */
    DRAG_COEFF(): number;
    /**
     * RCS in m**2, NaN when not stated.
     */
    RCS(): number;
    /**
     * THRUST_ACCELERATION in m/s**2, NaN when not stated.
     */
    THRUST_ACCELERATION(): number;
    /**
     * TIME_LASTOB_START.
     */
    TIME_LASTOB_START(): string | null;
    TIME_LASTOB_START(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * TIME_LASTOB_END.
     */
    TIME_LASTOB_END(): string | null;
    TIME_LASTOB_END(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * RECOMMENDED_OD_SPAN in days, NaN when not stated.
     */
    RECOMMENDED_OD_SPAN(): number;
    /**
     * ACTUAL_OD_SPAN in days, NaN when not stated.
     */
    ACTUAL_OD_SPAN(): number;
    /**
     * OBS_AVAILABLE.
     */
    OBS_AVAILABLE(): number;
    /**
     * OBS_USED.
     */
    OBS_USED(): number;
    /**
     * TRACKS_AVAILABLE.
     */
    TRACKS_AVAILABLE(): number;
    /**
     * TRACKS_USED.
     */
    TRACKS_USED(): number;
    /**
     * RESIDUALS_ACCEPTED in percent, NaN when not stated.
     */
    RESIDUALS_ACCEPTED(): number;
    /**
     * WEIGHTED_RMS, NaN when not stated.
     */
    WEIGHTED_RMS(): number;
    /**
     * Every USER_DEFINED keyword of the message, in message order.
     */
    USER_DEFINED_PARAMETERS(index: number, obj?: RDMUserDefinedParameter): RDMUserDefinedParameter | null;
    userDefinedParametersLength(): number;
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
    static addMessageId(builder: flatbuffers.Builder, MESSAGE_IDOffset: flatbuffers.Offset): void;
    static addCatalogName(builder: flatbuffers.Builder, CATALOG_NAMEOffset: flatbuffers.Offset): void;
    static addObjectDesignator(builder: flatbuffers.Builder, OBJECT_DESIGNATOROffset: flatbuffers.Offset): void;
    static addObjectOwner(builder: flatbuffers.Builder, OBJECT_OWNEROffset: flatbuffers.Offset): void;
    static addObjectOperator(builder: flatbuffers.Builder, OBJECT_OPERATOROffset: flatbuffers.Offset): void;
    static addControlledReentry(builder: flatbuffers.Builder, CONTROLLED_REENTRY: rdmControlledReentry): void;
    static addCenterName(builder: flatbuffers.Builder, CENTER_NAMEOffset: flatbuffers.Offset): void;
    static addEpochTzero(builder: flatbuffers.Builder, EPOCH_TZEROOffset: flatbuffers.Offset): void;
    static addRefFrame(builder: flatbuffers.Builder, REF_FRAMEOffset: flatbuffers.Offset): void;
    static addRefFrameEpoch(builder: flatbuffers.Builder, REF_FRAME_EPOCHOffset: flatbuffers.Offset): void;
    static addEphemerisName(builder: flatbuffers.Builder, EPHEMERIS_NAMEOffset: flatbuffers.Offset): void;
    static addGravityModel(builder: flatbuffers.Builder, GRAVITY_MODELOffset: flatbuffers.Offset): void;
    static addAtmosphericModel(builder: flatbuffers.Builder, ATMOSPHERIC_MODELOffset: flatbuffers.Offset): void;
    static addSolarFluxPrediction(builder: flatbuffers.Builder, SOLAR_FLUX_PREDICTIONOffset: flatbuffers.Offset): void;
    static addNBodyPerturbations(builder: flatbuffers.Builder, N_BODY_PERTURBATIONSOffset: flatbuffers.Offset): void;
    static addSolarRadPressure(builder: flatbuffers.Builder, SOLAR_RAD_PRESSUREOffset: flatbuffers.Offset): void;
    static addEarthTides(builder: flatbuffers.Builder, EARTH_TIDESOffset: flatbuffers.Offset): void;
    static addIntrackThrust(builder: flatbuffers.Builder, INTRACK_THRUSTOffset: flatbuffers.Offset): void;
    static addDragParametersSource(builder: flatbuffers.Builder, DRAG_PARAMETERS_SOURCEOffset: flatbuffers.Offset): void;
    static addDragParametersAltitude(builder: flatbuffers.Builder, DRAG_PARAMETERS_ALTITUDE: number): void;
    static addReentryUncertaintyMethod(builder: flatbuffers.Builder, REENTRY_UNCERTAINTY_METHODOffset: flatbuffers.Offset): void;
    static addReentryDisintegration(builder: flatbuffers.Builder, REENTRY_DISINTEGRATIONOffset: flatbuffers.Offset): void;
    static addImpactUncertaintyMethod(builder: flatbuffers.Builder, IMPACT_UNCERTAINTY_METHODOffset: flatbuffers.Offset): void;
    static addPreviousMessageId(builder: flatbuffers.Builder, PREVIOUS_MESSAGE_IDOffset: flatbuffers.Offset): void;
    static addNextMessageEpoch(builder: flatbuffers.Builder, NEXT_MESSAGE_EPOCHOffset: flatbuffers.Offset): void;
    static addOrbitLifetime(builder: flatbuffers.Builder, ORBIT_LIFETIME: number): void;
    static addOrbitLifetimeWindowStart(builder: flatbuffers.Builder, ORBIT_LIFETIME_WINDOW_START: number): void;
    static addOrbitLifetimeWindowEnd(builder: flatbuffers.Builder, ORBIT_LIFETIME_WINDOW_END: number): void;
    static addReentryWindowStart(builder: flatbuffers.Builder, REENTRY_WINDOW_STARTOffset: flatbuffers.Offset): void;
    static addReentryWindowEnd(builder: flatbuffers.Builder, REENTRY_WINDOW_ENDOffset: flatbuffers.Offset): void;
    static addOrbitLifetimeConfidenceLevel(builder: flatbuffers.Builder, ORBIT_LIFETIME_CONFIDENCE_LEVEL: number): void;
    static addProbabilityOfImpact(builder: flatbuffers.Builder, PROBABILITY_OF_IMPACT: number): void;
    static addProbabilityOfBurnUp(builder: flatbuffers.Builder, PROBABILITY_OF_BURN_UP: number): void;
    static addProbabilityOfBreakUp(builder: flatbuffers.Builder, PROBABILITY_OF_BREAK_UP: number): void;
    static addProbabilityOfLandImpact(builder: flatbuffers.Builder, PROBABILITY_OF_LAND_IMPACT: number): void;
    static addProbabilityOfCasualty(builder: flatbuffers.Builder, PROBABILITY_OF_CASUALTY: number): void;
    static addNominalImpactEpoch(builder: flatbuffers.Builder, NOMINAL_IMPACT_EPOCHOffset: flatbuffers.Offset): void;
    static addImpactWindowStart(builder: flatbuffers.Builder, IMPACT_WINDOW_STARTOffset: flatbuffers.Offset): void;
    static addImpactWindowEnd(builder: flatbuffers.Builder, IMPACT_WINDOW_ENDOffset: flatbuffers.Offset): void;
    static addImpactRefFrame(builder: flatbuffers.Builder, IMPACT_REF_FRAMEOffset: flatbuffers.Offset): void;
    static addNominalImpactLon(builder: flatbuffers.Builder, NOMINAL_IMPACT_LON: number): void;
    static addNominalImpactLat(builder: flatbuffers.Builder, NOMINAL_IMPACT_LAT: number): void;
    static addNominalImpactAlt(builder: flatbuffers.Builder, NOMINAL_IMPACT_ALT: number): void;
    static addImpact1Confidence(builder: flatbuffers.Builder, IMPACT_1_CONFIDENCE: number): void;
    static addImpact1StartLon(builder: flatbuffers.Builder, IMPACT_1_START_LON: number): void;
    static addImpact1StartLat(builder: flatbuffers.Builder, IMPACT_1_START_LAT: number): void;
    static addImpact1StopLon(builder: flatbuffers.Builder, IMPACT_1_STOP_LON: number): void;
    static addImpact1StopLat(builder: flatbuffers.Builder, IMPACT_1_STOP_LAT: number): void;
    static addImpact1CrossTrack(builder: flatbuffers.Builder, IMPACT_1_CROSS_TRACK: number): void;
    static addImpact2Confidence(builder: flatbuffers.Builder, IMPACT_2_CONFIDENCE: number): void;
    static addImpact2StartLon(builder: flatbuffers.Builder, IMPACT_2_START_LON: number): void;
    static addImpact2StartLat(builder: flatbuffers.Builder, IMPACT_2_START_LAT: number): void;
    static addImpact2StopLon(builder: flatbuffers.Builder, IMPACT_2_STOP_LON: number): void;
    static addImpact2StopLat(builder: flatbuffers.Builder, IMPACT_2_STOP_LAT: number): void;
    static addImpact2CrossTrack(builder: flatbuffers.Builder, IMPACT_2_CROSS_TRACK: number): void;
    static addImpact3Confidence(builder: flatbuffers.Builder, IMPACT_3_CONFIDENCE: number): void;
    static addImpact3StartLon(builder: flatbuffers.Builder, IMPACT_3_START_LON: number): void;
    static addImpact3StartLat(builder: flatbuffers.Builder, IMPACT_3_START_LAT: number): void;
    static addImpact3StopLon(builder: flatbuffers.Builder, IMPACT_3_STOP_LON: number): void;
    static addImpact3StopLat(builder: flatbuffers.Builder, IMPACT_3_STOP_LAT: number): void;
    static addImpact3CrossTrack(builder: flatbuffers.Builder, IMPACT_3_CROSS_TRACK: number): void;
    static addCovRefFrame(builder: flatbuffers.Builder, COV_REF_FRAMEOffset: flatbuffers.Offset): void;
    static addCovariance(builder: flatbuffers.Builder, COVARIANCEOffset: flatbuffers.Offset): void;
    static createCovarianceVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createCovarianceVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startCovarianceVector(builder: flatbuffers.Builder, numElems: number): void;
    static addDryMass(builder: flatbuffers.Builder, DRY_MASS: number): void;
    static addHazardousSubstances(builder: flatbuffers.Builder, HAZARDOUS_SUBSTANCESOffset: flatbuffers.Offset): void;
    static addSolarRadCoeff(builder: flatbuffers.Builder, SOLAR_RAD_COEFF: number): void;
    static addDragCoeff(builder: flatbuffers.Builder, DRAG_COEFF: number): void;
    static addRcs(builder: flatbuffers.Builder, RCS: number): void;
    static addThrustAcceleration(builder: flatbuffers.Builder, THRUST_ACCELERATION: number): void;
    static addTimeLastobStart(builder: flatbuffers.Builder, TIME_LASTOB_STARTOffset: flatbuffers.Offset): void;
    static addTimeLastobEnd(builder: flatbuffers.Builder, TIME_LASTOB_ENDOffset: flatbuffers.Offset): void;
    static addRecommendedOdSpan(builder: flatbuffers.Builder, RECOMMENDED_OD_SPAN: number): void;
    static addActualOdSpan(builder: flatbuffers.Builder, ACTUAL_OD_SPAN: number): void;
    static addObsAvailable(builder: flatbuffers.Builder, OBS_AVAILABLE: number): void;
    static addObsUsed(builder: flatbuffers.Builder, OBS_USED: number): void;
    static addTracksAvailable(builder: flatbuffers.Builder, TRACKS_AVAILABLE: number): void;
    static addTracksUsed(builder: flatbuffers.Builder, TRACKS_USED: number): void;
    static addResidualsAccepted(builder: flatbuffers.Builder, RESIDUALS_ACCEPTED: number): void;
    static addWeightedRms(builder: flatbuffers.Builder, WEIGHTED_RMS: number): void;
    static addUserDefinedParameters(builder: flatbuffers.Builder, USER_DEFINED_PARAMETERSOffset: flatbuffers.Offset): void;
    static createUserDefinedParametersVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startUserDefinedParametersVector(builder: flatbuffers.Builder, numElems: number): void;
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
    MESSAGE_ID: string | Uint8Array | null;
    CATALOG_NAME: string | Uint8Array | null;
    OBJECT_DESIGNATOR: string | Uint8Array | null;
    OBJECT_OWNER: string | Uint8Array | null;
    OBJECT_OPERATOR: string | Uint8Array | null;
    CONTROLLED_REENTRY: rdmControlledReentry;
    CENTER_NAME: string | Uint8Array | null;
    EPOCH_TZERO: string | Uint8Array | null;
    REF_FRAME: string | Uint8Array | null;
    REF_FRAME_EPOCH: string | Uint8Array | null;
    EPHEMERIS_NAME: string | Uint8Array | null;
    GRAVITY_MODEL: string | Uint8Array | null;
    ATMOSPHERIC_MODEL: string | Uint8Array | null;
    SOLAR_FLUX_PREDICTION: string | Uint8Array | null;
    N_BODY_PERTURBATIONS: string | Uint8Array | null;
    SOLAR_RAD_PRESSURE: string | Uint8Array | null;
    EARTH_TIDES: string | Uint8Array | null;
    INTRACK_THRUST: string | Uint8Array | null;
    DRAG_PARAMETERS_SOURCE: string | Uint8Array | null;
    DRAG_PARAMETERS_ALTITUDE: number;
    REENTRY_UNCERTAINTY_METHOD: string | Uint8Array | null;
    REENTRY_DISINTEGRATION: string | Uint8Array | null;
    IMPACT_UNCERTAINTY_METHOD: string | Uint8Array | null;
    PREVIOUS_MESSAGE_ID: string | Uint8Array | null;
    NEXT_MESSAGE_EPOCH: string | Uint8Array | null;
    ORBIT_LIFETIME: number;
    ORBIT_LIFETIME_WINDOW_START: number;
    ORBIT_LIFETIME_WINDOW_END: number;
    REENTRY_WINDOW_START: string | Uint8Array | null;
    REENTRY_WINDOW_END: string | Uint8Array | null;
    ORBIT_LIFETIME_CONFIDENCE_LEVEL: number;
    PROBABILITY_OF_IMPACT: number;
    PROBABILITY_OF_BURN_UP: number;
    PROBABILITY_OF_BREAK_UP: number;
    PROBABILITY_OF_LAND_IMPACT: number;
    PROBABILITY_OF_CASUALTY: number;
    NOMINAL_IMPACT_EPOCH: string | Uint8Array | null;
    IMPACT_WINDOW_START: string | Uint8Array | null;
    IMPACT_WINDOW_END: string | Uint8Array | null;
    IMPACT_REF_FRAME: string | Uint8Array | null;
    NOMINAL_IMPACT_LON: number;
    NOMINAL_IMPACT_LAT: number;
    NOMINAL_IMPACT_ALT: number;
    IMPACT_1_CONFIDENCE: number;
    IMPACT_1_START_LON: number;
    IMPACT_1_START_LAT: number;
    IMPACT_1_STOP_LON: number;
    IMPACT_1_STOP_LAT: number;
    IMPACT_1_CROSS_TRACK: number;
    IMPACT_2_CONFIDENCE: number;
    IMPACT_2_START_LON: number;
    IMPACT_2_START_LAT: number;
    IMPACT_2_STOP_LON: number;
    IMPACT_2_STOP_LAT: number;
    IMPACT_2_CROSS_TRACK: number;
    IMPACT_3_CONFIDENCE: number;
    IMPACT_3_START_LON: number;
    IMPACT_3_START_LAT: number;
    IMPACT_3_STOP_LON: number;
    IMPACT_3_STOP_LAT: number;
    IMPACT_3_CROSS_TRACK: number;
    COV_REF_FRAME: string | Uint8Array | null;
    COVARIANCE: (number)[];
    DRY_MASS: number;
    HAZARDOUS_SUBSTANCES: string | Uint8Array | null;
    SOLAR_RAD_COEFF: number;
    DRAG_COEFF: number;
    RCS: number;
    THRUST_ACCELERATION: number;
    TIME_LASTOB_START: string | Uint8Array | null;
    TIME_LASTOB_END: string | Uint8Array | null;
    RECOMMENDED_OD_SPAN: number;
    ACTUAL_OD_SPAN: number;
    OBS_AVAILABLE: number;
    OBS_USED: number;
    TRACKS_AVAILABLE: number;
    TRACKS_USED: number;
    RESIDUALS_ACCEPTED: number;
    WEIGHTED_RMS: number;
    USER_DEFINED_PARAMETERS: (RDMUserDefinedParameterT)[];
    constructor(CCSDS_RDM_VERS?: string | Uint8Array | null, CREATION_DATE?: string | Uint8Array | null, ORIGINATOR?: string | Uint8Array | null, OBJECT_NAME?: string | Uint8Array | null, OBJECT_ID?: string | Uint8Array | null, NORAD_CAT_ID?: number, OBJECT_TYPE?: string | Uint8Array | null, DISPOSITION?: reentryDisposition, REASON?: reentryReason, REENTRY_EPOCH?: string | Uint8Array | null, REENTRY_EPOCH_UNC?: number, REENTRY_LATITUDE?: number, REENTRY_LONGITUDE?: number, REENTRY_ALTITUDE?: number, TIME_SYSTEM?: string | Uint8Array | null, PREV_PREDICTION_EPOCH?: string | Uint8Array | null, BALLISTIC_COEFF?: number, MASS?: number, SOLAR_RAD_AREA?: number, DRAG_AREA?: number, INITIAL_STATE?: reentryStateVectorT | null, IMPACT_PREDICTIONS?: (reentryImpactT)[], SURVIVING_DEBRIS?: (survivingDebrisT)[], CASUALTY_EXPECTATION?: number, NUM_FRAGMENTS?: number, SURVIVING_MASS?: number, COMMENT?: string | Uint8Array | null, MESSAGE_ID?: string | Uint8Array | null, CATALOG_NAME?: string | Uint8Array | null, OBJECT_DESIGNATOR?: string | Uint8Array | null, OBJECT_OWNER?: string | Uint8Array | null, OBJECT_OPERATOR?: string | Uint8Array | null, CONTROLLED_REENTRY?: rdmControlledReentry, CENTER_NAME?: string | Uint8Array | null, EPOCH_TZERO?: string | Uint8Array | null, REF_FRAME?: string | Uint8Array | null, REF_FRAME_EPOCH?: string | Uint8Array | null, EPHEMERIS_NAME?: string | Uint8Array | null, GRAVITY_MODEL?: string | Uint8Array | null, ATMOSPHERIC_MODEL?: string | Uint8Array | null, SOLAR_FLUX_PREDICTION?: string | Uint8Array | null, N_BODY_PERTURBATIONS?: string | Uint8Array | null, SOLAR_RAD_PRESSURE?: string | Uint8Array | null, EARTH_TIDES?: string | Uint8Array | null, INTRACK_THRUST?: string | Uint8Array | null, DRAG_PARAMETERS_SOURCE?: string | Uint8Array | null, DRAG_PARAMETERS_ALTITUDE?: number, REENTRY_UNCERTAINTY_METHOD?: string | Uint8Array | null, REENTRY_DISINTEGRATION?: string | Uint8Array | null, IMPACT_UNCERTAINTY_METHOD?: string | Uint8Array | null, PREVIOUS_MESSAGE_ID?: string | Uint8Array | null, NEXT_MESSAGE_EPOCH?: string | Uint8Array | null, ORBIT_LIFETIME?: number, ORBIT_LIFETIME_WINDOW_START?: number, ORBIT_LIFETIME_WINDOW_END?: number, REENTRY_WINDOW_START?: string | Uint8Array | null, REENTRY_WINDOW_END?: string | Uint8Array | null, ORBIT_LIFETIME_CONFIDENCE_LEVEL?: number, PROBABILITY_OF_IMPACT?: number, PROBABILITY_OF_BURN_UP?: number, PROBABILITY_OF_BREAK_UP?: number, PROBABILITY_OF_LAND_IMPACT?: number, PROBABILITY_OF_CASUALTY?: number, NOMINAL_IMPACT_EPOCH?: string | Uint8Array | null, IMPACT_WINDOW_START?: string | Uint8Array | null, IMPACT_WINDOW_END?: string | Uint8Array | null, IMPACT_REF_FRAME?: string | Uint8Array | null, NOMINAL_IMPACT_LON?: number, NOMINAL_IMPACT_LAT?: number, NOMINAL_IMPACT_ALT?: number, IMPACT_1_CONFIDENCE?: number, IMPACT_1_START_LON?: number, IMPACT_1_START_LAT?: number, IMPACT_1_STOP_LON?: number, IMPACT_1_STOP_LAT?: number, IMPACT_1_CROSS_TRACK?: number, IMPACT_2_CONFIDENCE?: number, IMPACT_2_START_LON?: number, IMPACT_2_START_LAT?: number, IMPACT_2_STOP_LON?: number, IMPACT_2_STOP_LAT?: number, IMPACT_2_CROSS_TRACK?: number, IMPACT_3_CONFIDENCE?: number, IMPACT_3_START_LON?: number, IMPACT_3_START_LAT?: number, IMPACT_3_STOP_LON?: number, IMPACT_3_STOP_LAT?: number, IMPACT_3_CROSS_TRACK?: number, COV_REF_FRAME?: string | Uint8Array | null, COVARIANCE?: (number)[], DRY_MASS?: number, HAZARDOUS_SUBSTANCES?: string | Uint8Array | null, SOLAR_RAD_COEFF?: number, DRAG_COEFF?: number, RCS?: number, THRUST_ACCELERATION?: number, TIME_LASTOB_START?: string | Uint8Array | null, TIME_LASTOB_END?: string | Uint8Array | null, RECOMMENDED_OD_SPAN?: number, ACTUAL_OD_SPAN?: number, OBS_AVAILABLE?: number, OBS_USED?: number, TRACKS_AVAILABLE?: number, TRACKS_USED?: number, RESIDUALS_ACCEPTED?: number, WEIGHTED_RMS?: number, USER_DEFINED_PARAMETERS?: (RDMUserDefinedParameterT)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=RDM.d.ts.map