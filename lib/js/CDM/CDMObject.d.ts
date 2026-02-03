import * as flatbuffers from 'flatbuffers';
import { CAT, CATT } from './CAT.js';
import { EPM, EPMT } from './EPM.js';
import { RFM, RFMT } from './RFM.js';
import { covarianceMethod } from './covarianceMethod.js';
export declare class CDMObject implements flatbuffers.IUnpackableObject<CDMObjectT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): CDMObject;
    static getRootAsCDMObject(bb: flatbuffers.ByteBuffer, obj?: CDMObject): CDMObject;
    static getSizePrefixedRootAsCDMObject(bb: flatbuffers.ByteBuffer, obj?: CDMObject): CDMObject;
    /**
     * A comment
     */
    COMMENT(): string | null;
    COMMENT(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    OBJECT(obj?: CAT): CAT | null;
    /**
     * Point of Contact
     */
    POC(obj?: EPM): EPM | null;
    /**
     * Operator contact position
     */
    OPERATOR_CONTACT_POSITION(): string | null;
    OPERATOR_CONTACT_POSITION(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Operator organization
     */
    OPERATOR_ORGANIZATION(): string | null;
    OPERATOR_ORGANIZATION(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Ephemeris name
     */
    EPHEMERIS_NAME(): string | null;
    EPHEMERIS_NAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Covariance method
     */
    COVARIANCE_METHOD(): covarianceMethod;
    /**
     * Reference Frame in which the object position is defined
     */
    REFERENCE_FRAME(obj?: RFM): RFM | null;
    /**
     * Gravity model
     */
    GRAVITY_MODEL(): string | null;
    GRAVITY_MODEL(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Atmospheric model
     */
    ATMOSPHERIC_MODEL(): string | null;
    ATMOSPHERIC_MODEL(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * N-body perturbations
     */
    N_BODY_PERTURBATIONS(): string | null;
    N_BODY_PERTURBATIONS(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Solar radiation pressure
     */
    SOLAR_RAD_PRESSURE(): boolean;
    /**
     * Earth tides
     */
    EARTH_TIDES(): boolean;
    /**
     * Intrack thrust
     */
    INTRACK_THRUST(): boolean;
    /**
     * Time of last observation start
     */
    TIME_LASTOB_START(): string | null;
    TIME_LASTOB_START(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Time of last observation end
     */
    TIME_LASTOB_END(): string | null;
    TIME_LASTOB_END(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Recommended observation data span
     */
    RECOMMENDED_OD_SPAN(): number;
    /**
     * Actual observation data span
     */
    ACTUAL_OD_SPAN(): number;
    /**
     * Number of observations available
     */
    OBS_AVAILABLE(): number;
    /**
     * Number of observations used
     */
    OBS_USED(): number;
    /**
     * Number of tracks available
     */
    TRACKS_AVAILABLE(): number;
    /**
     * Number of tracks used
     */
    TRACKS_USED(): number;
    /**
     * Residuals accepted
     */
    RESIDUALS_ACCEPTED(): number;
    /**
     * Weighted root mean square
     */
    WEIGHTED_RMS(): number;
    /**
     * Area of the object
     */
    AREA_PC(): number;
    /**
     * Area of the object drag
     */
    AREA_DRG(): number;
    /**
     * Area of the object solar radiation pressure
     */
    AREA_SRP(): number;
    /**
     * Object's area-to-mass ratio
     */
    CR_AREA_OVER_MASS(): number;
    /**
     * Object's thrust acceleration
     */
    THRUST_ACCELERATION(): number;
    /**
     * Object's solar flux
     */
    SEDR(): number;
    /**
     * X-coordinate of the object's position in RTN coordinates
     */
    X(): number;
    /**
     * Y-coordinate of the object's position in RTN
     */
    Y(): number;
    /**
     * Z-coordinate of the object's position in RTN
     */
    Z(): number;
    /**
     * X-coordinate of the object's position in RTN coordinates
     */
    X_DOT(): number;
    /**
     * Y-coordinate of the object's position in RTN
     */
    Y_DOT(): number;
    /**
     * Z-coordinate of the object's position in RTN
     */
    Z_DOT(): number;
    /**
     * Covariance matrix as flat array (9x9 lower triangular = 45 elements).
     * Order: [CR_R, CT_R, CT_T, CN_R, CN_T, CN_N, CRDOT_R, CRDOT_T, CRDOT_N, CRDOT_RDOT,
     *         CTDOT_R, CTDOT_T, CTDOT_N, CTDOT_RDOT, CTDOT_TDOT,
     *         CNDOT_R, CNDOT_T, CNDOT_N, CNDOT_RDOT, CNDOT_TDOT, CNDOT_NDOT,
     *         CDRG_R, CDRG_T, CDRG_N, CDRG_RDOT, CDRG_TDOT, CDRG_NDOT, CDRG_DRG,
     *         CSRP_R, CSRP_T, CSRP_N, CSRP_RDOT, CSRP_TDOT, CSRP_NDOT, CSRP_DRG, CSRP_SRP,
     *         CTHR_R, CTHR_T, CTHR_N, CTHR_RDOT, CTHR_TDOT, CTHR_NDOT, CTHR_DRG, CTHR_SRP, CTHR_THR]
     */
    COVARIANCE(index: number): number | null;
    covarianceLength(): number;
    covarianceArray(): Float64Array | null;
    static startCDMObject(builder: flatbuffers.Builder): void;
    static addComment(builder: flatbuffers.Builder, COMMENTOffset: flatbuffers.Offset): void;
    static addObject(builder: flatbuffers.Builder, OBJECTOffset: flatbuffers.Offset): void;
    static addPoc(builder: flatbuffers.Builder, POCOffset: flatbuffers.Offset): void;
    static addOperatorContactPosition(builder: flatbuffers.Builder, OPERATOR_CONTACT_POSITIONOffset: flatbuffers.Offset): void;
    static addOperatorOrganization(builder: flatbuffers.Builder, OPERATOR_ORGANIZATIONOffset: flatbuffers.Offset): void;
    static addEphemerisName(builder: flatbuffers.Builder, EPHEMERIS_NAMEOffset: flatbuffers.Offset): void;
    static addCovarianceMethod(builder: flatbuffers.Builder, COVARIANCE_METHOD: covarianceMethod): void;
    static addReferenceFrame(builder: flatbuffers.Builder, REFERENCE_FRAMEOffset: flatbuffers.Offset): void;
    static addGravityModel(builder: flatbuffers.Builder, GRAVITY_MODELOffset: flatbuffers.Offset): void;
    static addAtmosphericModel(builder: flatbuffers.Builder, ATMOSPHERIC_MODELOffset: flatbuffers.Offset): void;
    static addNBodyPerturbations(builder: flatbuffers.Builder, N_BODY_PERTURBATIONSOffset: flatbuffers.Offset): void;
    static addSolarRadPressure(builder: flatbuffers.Builder, SOLAR_RAD_PRESSURE: boolean): void;
    static addEarthTides(builder: flatbuffers.Builder, EARTH_TIDES: boolean): void;
    static addIntrackThrust(builder: flatbuffers.Builder, INTRACK_THRUST: boolean): void;
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
    static addAreaPc(builder: flatbuffers.Builder, AREA_PC: number): void;
    static addAreaDrg(builder: flatbuffers.Builder, AREA_DRG: number): void;
    static addAreaSrp(builder: flatbuffers.Builder, AREA_SRP: number): void;
    static addCrAreaOverMass(builder: flatbuffers.Builder, CR_AREA_OVER_MASS: number): void;
    static addThrustAcceleration(builder: flatbuffers.Builder, THRUST_ACCELERATION: number): void;
    static addSedr(builder: flatbuffers.Builder, SEDR: number): void;
    static addX(builder: flatbuffers.Builder, X: number): void;
    static addY(builder: flatbuffers.Builder, Y: number): void;
    static addZ(builder: flatbuffers.Builder, Z: number): void;
    static addXDot(builder: flatbuffers.Builder, X_DOT: number): void;
    static addYDot(builder: flatbuffers.Builder, Y_DOT: number): void;
    static addZDot(builder: flatbuffers.Builder, Z_DOT: number): void;
    static addCovariance(builder: flatbuffers.Builder, COVARIANCEOffset: flatbuffers.Offset): void;
    static createCovarianceVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createCovarianceVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startCovarianceVector(builder: flatbuffers.Builder, numElems: number): void;
    static endCDMObject(builder: flatbuffers.Builder): flatbuffers.Offset;
    unpack(): CDMObjectT;
    unpackTo(_o: CDMObjectT): void;
}
export declare class CDMObjectT implements flatbuffers.IGeneratedObject {
    COMMENT: string | Uint8Array | null;
    OBJECT: CATT | null;
    POC: EPMT | null;
    OPERATOR_CONTACT_POSITION: string | Uint8Array | null;
    OPERATOR_ORGANIZATION: string | Uint8Array | null;
    EPHEMERIS_NAME: string | Uint8Array | null;
    COVARIANCE_METHOD: covarianceMethod;
    REFERENCE_FRAME: RFMT | null;
    GRAVITY_MODEL: string | Uint8Array | null;
    ATMOSPHERIC_MODEL: string | Uint8Array | null;
    N_BODY_PERTURBATIONS: string | Uint8Array | null;
    SOLAR_RAD_PRESSURE: boolean;
    EARTH_TIDES: boolean;
    INTRACK_THRUST: boolean;
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
    AREA_PC: number;
    AREA_DRG: number;
    AREA_SRP: number;
    CR_AREA_OVER_MASS: number;
    THRUST_ACCELERATION: number;
    SEDR: number;
    X: number;
    Y: number;
    Z: number;
    X_DOT: number;
    Y_DOT: number;
    Z_DOT: number;
    COVARIANCE: (number)[];
    constructor(COMMENT?: string | Uint8Array | null, OBJECT?: CATT | null, POC?: EPMT | null, OPERATOR_CONTACT_POSITION?: string | Uint8Array | null, OPERATOR_ORGANIZATION?: string | Uint8Array | null, EPHEMERIS_NAME?: string | Uint8Array | null, COVARIANCE_METHOD?: covarianceMethod, REFERENCE_FRAME?: RFMT | null, GRAVITY_MODEL?: string | Uint8Array | null, ATMOSPHERIC_MODEL?: string | Uint8Array | null, N_BODY_PERTURBATIONS?: string | Uint8Array | null, SOLAR_RAD_PRESSURE?: boolean, EARTH_TIDES?: boolean, INTRACK_THRUST?: boolean, TIME_LASTOB_START?: string | Uint8Array | null, TIME_LASTOB_END?: string | Uint8Array | null, RECOMMENDED_OD_SPAN?: number, ACTUAL_OD_SPAN?: number, OBS_AVAILABLE?: number, OBS_USED?: number, TRACKS_AVAILABLE?: number, TRACKS_USED?: number, RESIDUALS_ACCEPTED?: number, WEIGHTED_RMS?: number, AREA_PC?: number, AREA_DRG?: number, AREA_SRP?: number, CR_AREA_OVER_MASS?: number, THRUST_ACCELERATION?: number, SEDR?: number, X?: number, Y?: number, Z?: number, X_DOT?: number, Y_DOT?: number, Z_DOT?: number, COVARIANCE?: (number)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=CDMObject.d.ts.map