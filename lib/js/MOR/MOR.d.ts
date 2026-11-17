import * as flatbuffers from 'flatbuffers';
import { CVR, CVRT } from './CVR.js';
import { MORCovariancePropagation, MORCovariancePropagationT } from './MORCovariancePropagation.js';
import { MORWindow, MORWindowT } from './MORWindow.js';
import { MPE, MPET } from './MPE.js';
import { covarianceCalibration } from './covarianceCalibration.js';
import { meanElementSource } from './meanElementSource.js';
import { morCovarianceFloor } from './morCovarianceFloor.js';
import { morGravityField } from './morGravityField.js';
import { morMessageStatus } from './morMessageStatus.js';
import { morRadiationModel } from './morRadiationModel.js';
import { morSolidTideModel } from './morSolidTideModel.js';
/**
 * Minimum Orbit Record.
 */
export declare class MOR implements flatbuffers.IUnpackableObject<MORT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): MOR;
    static getRootAsMOR(bb: flatbuffers.ByteBuffer, obj?: MOR): MOR;
    static getSizePrefixedRootAsMOR(bb: flatbuffers.ByteBuffer, obj?: MOR): MOR;
    static bufferHasIdentifier(bb: flatbuffers.ByteBuffer): boolean;
    /**
     * The object's NORAD catalog number, the join key to $CAT, $OMM and $OCM; 0 when it has none.
     */
    NORAD_CAT_ID(): number;
    /**
     * The object's COSPAR international designator.
     */
    INTERNATIONAL_DESIGNATOR(): string | null;
    INTERNATIONAL_DESIGNATOR(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Who issued the set ($OCM HEADER.ORIGINATOR). A reader keys a series on NORAD_CAT_ID,
     * INTERNATIONAL_DESIGNATOR and ORIGINATOR.
     */
    ORIGINATOR(): string | null;
    ORIGINATOR(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * The object's name; absent unless a reader copies it into what it writes.
     */
    OBJECT_NAME(): string | null;
    OBJECT_NAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Whether the set is real or test data.
     */
    MESSAGE_STATUS(): morMessageStatus;
    /**
     * Epoch of the elements: microseconds since 1970-01-01T00:00:00 UTC, every UTC day 86,400,000,000
     * (the UNIX time scale of $MPE EPOCH). An $OCM EPOCH text with up to six fraction digits converts both
     * ways without loss; an instant inside a leap second has no value here.
     */
    EPOCH_UNIX_US(): bigint;
    /**
     * The theory the set is defined under: SGP4, SGP4XP or AP. A reader refuses UNSPECIFIED.
     */
    MEAN_ELEMENT_THEORY(): meanElementSource;
    /**
     * Mean motion, rev/day, as the theory defines it: Kozai for SGP4, Brouwer for SGP4XP and AP.
     */
    MEAN_MOTION(): number;
    /**
     * Eccentricity.
     */
    ECCENTRICITY(): number;
    /**
     * Inclination, deg.
     */
    INCLINATION(): number;
    /**
     * Right ascension of the ascending node, deg.
     */
    RA_OF_ASC_NODE(): number;
    /**
     * Argument of pericenter, deg.
     */
    ARG_OF_PERICENTER(): number;
    /**
     * Mean anomaly, deg.
     */
    MEAN_ANOMALY(): number;
    /**
     * Drag term Cd*A/m, m**2/kg. SGP4XP and AP; 0 for SGP4.
     */
    BTERM(): number;
    /**
     * Radiation term Cr*A/m, m**2/kg. SGP4XP and AP; 0 for SGP4.
     */
    AGOM(): number;
    /**
     * BSTAR, 1/Earth radii. SGP4 only.
     */
    BSTAR(): number;
    /**
     * MEAN_MOTION_DOT, rev/day**2. SGP4 only.
     */
    MEAN_MOTION_DOT(): number;
    /**
     * MEAN_MOTION_DDOT, rev/day**3. SGP4 only.
     */
    MEAN_MOTION_DDOT(): number;
    /**
     * The gravity field the set flies on.
     */
    GRAVITY_FIELD(): morGravityField;
    /**
     * Highest tesseral degree of the field's terms; 0 for SGP4 and SGP4XP.
     */
    MAXIMUM_TESSERAL_DEGREE(): number;
    /**
     * Highest zonal degree of the field's terms; 0 for SGP4 and SGP4XP.
     */
    MAXIMUM_ZONAL_DEGREE(): number;
    /**
     * The solid Earth tide the set flies with.
     */
    SOLID_TIDES_MODEL(): morSolidTideModel;
    /**
     * The radiation pressure model the set states.
     */
    SOLAR_RAD_PRESSURE(): morRadiationModel;
    /**
     * The dynamic parameters the orbit determination carried, bit k for prwDynamicParameter ordinal k:
     * DRAG_AREA_OVER_MASS (bit 1, value BTERM), SRP_AREA_OVER_MASS (bit 3, value AGOM) and ECOM2_Y0
     * (bit 6, value ECOM2_Y0). Any other bit has no value here and is refused.
     */
    OD_PARAMETERS(): number;
    /**
     * Of OD_PARAMETERS, the ones the orbit determination solved for (the others were held).
     */
    OD_SOLVED_FOR(): number;
    /**
     * The ECOM2 Y0 radiation acceleration, m/s**2, when OD_PARAMETERS has bit 6.
     */
    ECOM2_Y0(): number;
    /**
     * The span of the observations the orbit determination used, days; NaN when not stated.
     */
    ACTUAL_OD_SPAN(): number;
    /**
     * Observations the orbit determination used; -1 when not stated ($OCM 0).
     */
    OD_OBSERVATIONS_USED(): number;
    /**
     * Tracks the orbit determination used; -1 when not stated ($OCM 0).
     */
    OD_TRACKS_USED(): number;
    /**
     * Weighted RMS residual ratio of the orbit determination; NaN when not stated ($OCM 0).
     */
    WEIGHTED_RMS(): number;
    /**
     * Epoch of the orbit determination, in the form of EPOCH_UNIX_US; -9223372036854775808 when not stated.
     */
    OD_EPOCH_UNIX_US(): bigint;
    /**
     * Days from the last observation the orbit determination used to OD_EPOCH; NaN when not stated.
     */
    DAYS_SINCE_LAST_OBS(): number;
    /**
     * The epoch covariance, lower triangle row by row, N(N+1)/2 values: N = 6 plus the solved parameters
     * among DRAG_AREA_OVER_MASS, DRAG_AREA_OVER_MASS_RATE, SRP_AREA_OVER_MASS, IN_TRACK_ACCELERATION and
     * OUTGASSING_ACCELERATION; position and velocity in km and km/s in TRAJ_REF_FRAME of the expansion,
     * then those parameters in ascending ordinal. Absent: no covariance.
     */
    COVARIANCE_DATA(index: number): number | null;
    covarianceDataLength(): number;
    covarianceDataArray(): Float64Array | null;
    /**
     * What propagates COVARIANCE_DATA beyond its epoch; with COVARIANCE_DATA only.
     */
    COV_PROPAGATION(obj?: MORCovariancePropagation): MORCovariancePropagation | null;
    /**
     * Where COV_PROPAGATION's floor sits; with COVARIANCE_DATA only. A record read alone flies the same
     * covariance as its $OCM.
     */
    COV_FLOOR(): morCovarianceFloor;
    /**
     * The realism model of COVARIANCE_DATA among its asset's $DPM DPMAsset.COV_REALISM_MODELS, by ID; 0 when
     * the record states its own COV_REALISM or none. The model's figures need the asset; the ID does not.
     */
    COV_REALISM_ID(): number;
    /**
     * The realism of COVARIANCE_DATA when it is the record's own (it differs from record to record), the
     * single entry of $OCM COV_REALISM. Never with COV_REALISM_ID.
     */
    COV_REALISM(obj?: CVR): CVR | null;
    /**
     * Whether COVARIANCE_DATA's coverage was measured against independent reference states.
     */
    COV_CALIBRATION(): covarianceCalibration;
    /**
     * Identifier of that calibration evidence (a report or record).
     */
    COV_CALIBRATION_REFERENCE(): string | null;
    COV_CALIBRATION_REFERENCE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Polynomial rows derived from this record by the builder its asset names ($DPM DPMAsset.DERIVED_BUILD),
     * in time order, without overlap. A convenience: the elements remain authoritative and a reader may
     * ignore the rows. Without the asset's DERIVED_BUILD a reader must not use them, nor when it cannot
     * reproduce that statement, nor when WINDOW_RECORD_CHECK does not match.
     * A record without WINDOWS has no rows; why is stated by the build's $DRB OUTCOMES, never in the record.
     */
    WINDOWS(index: number, obj?: MORWindow): MORWindow | null;
    windowsLength(): number;
    /**
     * The binary64 coefficients of the served windows, in window order: for each, X, Y and Z of position
     * (POS_COEFF_HEAD_COUNT each), then X, Y and Z of velocity (VEL_COEFF_HEAD_COUNT each).
     */
    WINDOW_COEFF_HEADS(index: number): number | null;
    windowCoeffHeadsLength(): number;
    windowCoeffHeadsArray(): Float64Array | null;
    /**
     * The binary32 coefficients of the served windows, in the same order: X, Y and Z of position
     * (POS_COEFF_COUNT - POS_COEFF_HEAD_COUNT each), then of velocity.
     */
    WINDOW_COEFF_TAILS(index: number): number | null;
    windowCoeffTailsLength(): number;
    windowCoeffTailsArray(): Float32Array | null;
    /**
     * The first 8 bytes, as a little-endian uint64, of the SHA-256 the builder named in DERIVED_BUILD
     * publishes as its record digest (over the record's decoded inputs). A reader recomputes it from this
     * record before using the rows: a mismatch voids the rows. With WINDOWS only.
     */
    WINDOW_RECORD_CHECK(): bigint;
    /**
     * The object's own element set for times beyond what this record serves (a reader's fallback
     * propagator), as an $MPE: SGP4 with BSTAR or SGP4XP with BTERM and AGOM. Its ENTITY_ID is absent: the
     * object is this record's.
     */
    FALLBACK(obj?: MPE): MPE | null;
    static startMOR(builder: flatbuffers.Builder): void;
    static addNoradCatId(builder: flatbuffers.Builder, NORAD_CAT_ID: number): void;
    static addInternationalDesignator(builder: flatbuffers.Builder, INTERNATIONAL_DESIGNATOROffset: flatbuffers.Offset): void;
    static addOriginator(builder: flatbuffers.Builder, ORIGINATOROffset: flatbuffers.Offset): void;
    static addObjectName(builder: flatbuffers.Builder, OBJECT_NAMEOffset: flatbuffers.Offset): void;
    static addMessageStatus(builder: flatbuffers.Builder, MESSAGE_STATUS: morMessageStatus): void;
    static addEpochUnixUs(builder: flatbuffers.Builder, EPOCH_UNIX_US: bigint): void;
    static addMeanElementTheory(builder: flatbuffers.Builder, MEAN_ELEMENT_THEORY: meanElementSource): void;
    static addMeanMotion(builder: flatbuffers.Builder, MEAN_MOTION: number): void;
    static addEccentricity(builder: flatbuffers.Builder, ECCENTRICITY: number): void;
    static addInclination(builder: flatbuffers.Builder, INCLINATION: number): void;
    static addRaOfAscNode(builder: flatbuffers.Builder, RA_OF_ASC_NODE: number): void;
    static addArgOfPericenter(builder: flatbuffers.Builder, ARG_OF_PERICENTER: number): void;
    static addMeanAnomaly(builder: flatbuffers.Builder, MEAN_ANOMALY: number): void;
    static addBterm(builder: flatbuffers.Builder, BTERM: number): void;
    static addAgom(builder: flatbuffers.Builder, AGOM: number): void;
    static addBstar(builder: flatbuffers.Builder, BSTAR: number): void;
    static addMeanMotionDot(builder: flatbuffers.Builder, MEAN_MOTION_DOT: number): void;
    static addMeanMotionDdot(builder: flatbuffers.Builder, MEAN_MOTION_DDOT: number): void;
    static addGravityField(builder: flatbuffers.Builder, GRAVITY_FIELD: morGravityField): void;
    static addMaximumTesseralDegree(builder: flatbuffers.Builder, MAXIMUM_TESSERAL_DEGREE: number): void;
    static addMaximumZonalDegree(builder: flatbuffers.Builder, MAXIMUM_ZONAL_DEGREE: number): void;
    static addSolidTidesModel(builder: flatbuffers.Builder, SOLID_TIDES_MODEL: morSolidTideModel): void;
    static addSolarRadPressure(builder: flatbuffers.Builder, SOLAR_RAD_PRESSURE: morRadiationModel): void;
    static addOdParameters(builder: flatbuffers.Builder, OD_PARAMETERS: number): void;
    static addOdSolvedFor(builder: flatbuffers.Builder, OD_SOLVED_FOR: number): void;
    static addEcom2Y0(builder: flatbuffers.Builder, ECOM2_Y0: number): void;
    static addActualOdSpan(builder: flatbuffers.Builder, ACTUAL_OD_SPAN: number): void;
    static addOdObservationsUsed(builder: flatbuffers.Builder, OD_OBSERVATIONS_USED: number): void;
    static addOdTracksUsed(builder: flatbuffers.Builder, OD_TRACKS_USED: number): void;
    static addWeightedRms(builder: flatbuffers.Builder, WEIGHTED_RMS: number): void;
    static addOdEpochUnixUs(builder: flatbuffers.Builder, OD_EPOCH_UNIX_US: bigint): void;
    static addDaysSinceLastObs(builder: flatbuffers.Builder, DAYS_SINCE_LAST_OBS: number): void;
    static addCovarianceData(builder: flatbuffers.Builder, COVARIANCE_DATAOffset: flatbuffers.Offset): void;
    static createCovarianceDataVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createCovarianceDataVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startCovarianceDataVector(builder: flatbuffers.Builder, numElems: number): void;
    static addCovPropagation(builder: flatbuffers.Builder, COV_PROPAGATIONOffset: flatbuffers.Offset): void;
    static addCovFloor(builder: flatbuffers.Builder, COV_FLOOR: morCovarianceFloor): void;
    static addCovRealismId(builder: flatbuffers.Builder, COV_REALISM_ID: number): void;
    static addCovRealism(builder: flatbuffers.Builder, COV_REALISMOffset: flatbuffers.Offset): void;
    static addCovCalibration(builder: flatbuffers.Builder, COV_CALIBRATION: covarianceCalibration): void;
    static addCovCalibrationReference(builder: flatbuffers.Builder, COV_CALIBRATION_REFERENCEOffset: flatbuffers.Offset): void;
    static addWindows(builder: flatbuffers.Builder, WINDOWSOffset: flatbuffers.Offset): void;
    static startWindowsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addWindowCoeffHeads(builder: flatbuffers.Builder, WINDOW_COEFF_HEADSOffset: flatbuffers.Offset): void;
    static createWindowCoeffHeadsVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createWindowCoeffHeadsVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startWindowCoeffHeadsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addWindowCoeffTails(builder: flatbuffers.Builder, WINDOW_COEFF_TAILSOffset: flatbuffers.Offset): void;
    static createWindowCoeffTailsVector(builder: flatbuffers.Builder, data: number[] | Float32Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createWindowCoeffTailsVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startWindowCoeffTailsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addWindowRecordCheck(builder: flatbuffers.Builder, WINDOW_RECORD_CHECK: bigint): void;
    static addFallback(builder: flatbuffers.Builder, FALLBACKOffset: flatbuffers.Offset): void;
    static endMOR(builder: flatbuffers.Builder): flatbuffers.Offset;
    static finishMORBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static finishSizePrefixedMORBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    unpack(): MORT;
    unpackTo(_o: MORT): void;
}
export declare class MORT implements flatbuffers.IGeneratedObject {
    NORAD_CAT_ID: number;
    INTERNATIONAL_DESIGNATOR: string | Uint8Array | null;
    ORIGINATOR: string | Uint8Array | null;
    OBJECT_NAME: string | Uint8Array | null;
    MESSAGE_STATUS: morMessageStatus;
    EPOCH_UNIX_US: bigint;
    MEAN_ELEMENT_THEORY: meanElementSource;
    MEAN_MOTION: number;
    ECCENTRICITY: number;
    INCLINATION: number;
    RA_OF_ASC_NODE: number;
    ARG_OF_PERICENTER: number;
    MEAN_ANOMALY: number;
    BTERM: number;
    AGOM: number;
    BSTAR: number;
    MEAN_MOTION_DOT: number;
    MEAN_MOTION_DDOT: number;
    GRAVITY_FIELD: morGravityField;
    MAXIMUM_TESSERAL_DEGREE: number;
    MAXIMUM_ZONAL_DEGREE: number;
    SOLID_TIDES_MODEL: morSolidTideModel;
    SOLAR_RAD_PRESSURE: morRadiationModel;
    OD_PARAMETERS: number;
    OD_SOLVED_FOR: number;
    ECOM2_Y0: number;
    ACTUAL_OD_SPAN: number;
    OD_OBSERVATIONS_USED: number;
    OD_TRACKS_USED: number;
    WEIGHTED_RMS: number;
    OD_EPOCH_UNIX_US: bigint;
    DAYS_SINCE_LAST_OBS: number;
    COVARIANCE_DATA: (number)[];
    COV_PROPAGATION: MORCovariancePropagationT | null;
    COV_FLOOR: morCovarianceFloor;
    COV_REALISM_ID: number;
    COV_REALISM: CVRT | null;
    COV_CALIBRATION: covarianceCalibration;
    COV_CALIBRATION_REFERENCE: string | Uint8Array | null;
    WINDOWS: (MORWindowT)[];
    WINDOW_COEFF_HEADS: (number)[];
    WINDOW_COEFF_TAILS: (number)[];
    WINDOW_RECORD_CHECK: bigint;
    FALLBACK: MPET | null;
    constructor(NORAD_CAT_ID?: number, INTERNATIONAL_DESIGNATOR?: string | Uint8Array | null, ORIGINATOR?: string | Uint8Array | null, OBJECT_NAME?: string | Uint8Array | null, MESSAGE_STATUS?: morMessageStatus, EPOCH_UNIX_US?: bigint, MEAN_ELEMENT_THEORY?: meanElementSource, MEAN_MOTION?: number, ECCENTRICITY?: number, INCLINATION?: number, RA_OF_ASC_NODE?: number, ARG_OF_PERICENTER?: number, MEAN_ANOMALY?: number, BTERM?: number, AGOM?: number, BSTAR?: number, MEAN_MOTION_DOT?: number, MEAN_MOTION_DDOT?: number, GRAVITY_FIELD?: morGravityField, MAXIMUM_TESSERAL_DEGREE?: number, MAXIMUM_ZONAL_DEGREE?: number, SOLID_TIDES_MODEL?: morSolidTideModel, SOLAR_RAD_PRESSURE?: morRadiationModel, OD_PARAMETERS?: number, OD_SOLVED_FOR?: number, ECOM2_Y0?: number, ACTUAL_OD_SPAN?: number, OD_OBSERVATIONS_USED?: number, OD_TRACKS_USED?: number, WEIGHTED_RMS?: number, OD_EPOCH_UNIX_US?: bigint, DAYS_SINCE_LAST_OBS?: number, COVARIANCE_DATA?: (number)[], COV_PROPAGATION?: MORCovariancePropagationT | null, COV_FLOOR?: morCovarianceFloor, COV_REALISM_ID?: number, COV_REALISM?: CVRT | null, COV_CALIBRATION?: covarianceCalibration, COV_CALIBRATION_REFERENCE?: string | Uint8Array | null, WINDOWS?: (MORWindowT)[], WINDOW_COEFF_HEADS?: (number)[], WINDOW_COEFF_TAILS?: (number)[], WINDOW_RECORD_CHECK?: bigint, FALLBACK?: MPET | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=MOR.d.ts.map