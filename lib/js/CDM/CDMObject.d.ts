import * as flatbuffers from 'flatbuffers';
import { CAT, CATT } from './CAT.js';
import { EPM, EPMT } from './EPM.js';
import { covarianceMethod } from './covarianceMethod.js';
import { refFrame } from './refFrame.js';
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
    REFERENCE_FRAME(): refFrame;
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
     * Covariance Matrix component
     */
    CR_R(): number;
    /**
     * Covariance Matrix component
     */
    CT_R(): number;
    /**
     * Covariance Matrix component
     */
    CT_T(): number;
    /**
     * Covariance Matrix component
     */
    CN_R(): number;
    /**
     * Covariance Matrix component
     */
    CN_T(): number;
    /**
     * Covariance Matrix component
     */
    CN_N(): number;
    /**
     * Covariance Matrix component
     */
    CRDOT_R(): number;
    /**
     * Covariance Matrix component
     */
    CRDOT_T(): number;
    /**
     * Covariance Matrix component
     */
    CRDOT_N(): number;
    /**
     * Covariance Matrix component
     */
    CRDOT_RDOT(): number;
    /**
     * Covariance Matrix component
     */
    CTDOT_R(): number;
    /**
     * Covariance Matrix component
     */
    CTDOT_T(): number;
    /**
     * Covariance Matrix component
     */
    CTDOT_N(): number;
    /**
     * Covariance Matrix component
     */
    CTDOT_RDOT(): number;
    /**
     * Covariance Matrix component
     */
    CTDOT_TDOT(): number;
    /**
     * Covariance Matrix component
     */
    CNDOT_R(): number;
    /**
     * Covariance Matrix component
     */
    CNDOT_T(): number;
    /**
     * Covariance Matrix component
     */
    CNDOT_N(): number;
    /**
     * Covariance Matrix component
     */
    CNDOT_RDOT(): number;
    /**
     * Covariance Matrix component
     */
    CNDOT_TDOT(): number;
    /**
     * Covariance Matrix component
     */
    CNDOT_NDOT(): number;
    /**
     * Covariance Matrix component
     */
    CDRG_R(): number;
    /**
     * Covariance Matrix component
     */
    CDRG_T(): number;
    /**
     * Covariance Matrix component
     */
    CDRG_N(): number;
    /**
     * Covariance Matrix component
     */
    CDRG_RDOT(): number;
    /**
     * Covariance Matrix component
     */
    CDRG_TDOT(): number;
    /**
     * Covariance Matrix component
     */
    CDRG_NDOT(): number;
    /**
     * Covariance Matrix component
     */
    CDRG_DRG(): number;
    /**
     * Covariance Matrix component
     */
    CSRP_R(): number;
    /**
     * Covariance Matrix component
     */
    CSRP_T(): number;
    /**
     * Covariance Matrix component
     */
    CSRP_N(): number;
    /**
     * Covariance Matrix component
     */
    CSRP_RDOT(): number;
    /**
     * Covariance Matrix component
     */
    CSRP_TDOT(): number;
    /**
     * Covariance Matrix component
     */
    CSRP_NDOT(): number;
    /**
     * Covariance Matrix component
     */
    CSRP_DRG(): number;
    /**
     * Covariance Matrix component
     */
    CSRP_SRP(): number;
    /**
     * Covariance Matrix component
     */
    CTHR_R(): number;
    /**
     * Covariance Matrix component
     */
    CTHR_T(): number;
    /**
     * Covariance Matrix component
     */
    CTHR_N(): number;
    /**
     * Covariance Matrix component
     */
    CTHR_RDOT(): number;
    /**
     * Covariance Matrix component
     */
    CTHR_TDOT(): number;
    /**
     * Covariance Matrix component
     */
    CTHR_NDOT(): number;
    /**
     * Covariance Matrix component
     */
    CTHR_DRG(): number;
    /**
     * Covariance Matrix component
     */
    CTHR_SRP(): number;
    /**
     * Covariance Matrix component
     */
    CTHR_THR(): number;
    static startCDMObject(builder: flatbuffers.Builder): void;
    static addComment(builder: flatbuffers.Builder, COMMENTOffset: flatbuffers.Offset): void;
    static addObject(builder: flatbuffers.Builder, OBJECTOffset: flatbuffers.Offset): void;
    static addPoc(builder: flatbuffers.Builder, POCOffset: flatbuffers.Offset): void;
    static addOperatorContactPosition(builder: flatbuffers.Builder, OPERATOR_CONTACT_POSITIONOffset: flatbuffers.Offset): void;
    static addOperatorOrganization(builder: flatbuffers.Builder, OPERATOR_ORGANIZATIONOffset: flatbuffers.Offset): void;
    static addEphemerisName(builder: flatbuffers.Builder, EPHEMERIS_NAMEOffset: flatbuffers.Offset): void;
    static addCovarianceMethod(builder: flatbuffers.Builder, COVARIANCE_METHOD: covarianceMethod): void;
    static addReferenceFrame(builder: flatbuffers.Builder, REFERENCE_FRAME: refFrame): void;
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
    static addCrR(builder: flatbuffers.Builder, CR_R: number): void;
    static addCtR(builder: flatbuffers.Builder, CT_R: number): void;
    static addCtT(builder: flatbuffers.Builder, CT_T: number): void;
    static addCnR(builder: flatbuffers.Builder, CN_R: number): void;
    static addCnT(builder: flatbuffers.Builder, CN_T: number): void;
    static addCnN(builder: flatbuffers.Builder, CN_N: number): void;
    static addCrdotR(builder: flatbuffers.Builder, CRDOT_R: number): void;
    static addCrdotT(builder: flatbuffers.Builder, CRDOT_T: number): void;
    static addCrdotN(builder: flatbuffers.Builder, CRDOT_N: number): void;
    static addCrdotRdot(builder: flatbuffers.Builder, CRDOT_RDOT: number): void;
    static addCtdotR(builder: flatbuffers.Builder, CTDOT_R: number): void;
    static addCtdotT(builder: flatbuffers.Builder, CTDOT_T: number): void;
    static addCtdotN(builder: flatbuffers.Builder, CTDOT_N: number): void;
    static addCtdotRdot(builder: flatbuffers.Builder, CTDOT_RDOT: number): void;
    static addCtdotTdot(builder: flatbuffers.Builder, CTDOT_TDOT: number): void;
    static addCndotR(builder: flatbuffers.Builder, CNDOT_R: number): void;
    static addCndotT(builder: flatbuffers.Builder, CNDOT_T: number): void;
    static addCndotN(builder: flatbuffers.Builder, CNDOT_N: number): void;
    static addCndotRdot(builder: flatbuffers.Builder, CNDOT_RDOT: number): void;
    static addCndotTdot(builder: flatbuffers.Builder, CNDOT_TDOT: number): void;
    static addCndotNdot(builder: flatbuffers.Builder, CNDOT_NDOT: number): void;
    static addCdrgR(builder: flatbuffers.Builder, CDRG_R: number): void;
    static addCdrgT(builder: flatbuffers.Builder, CDRG_T: number): void;
    static addCdrgN(builder: flatbuffers.Builder, CDRG_N: number): void;
    static addCdrgRdot(builder: flatbuffers.Builder, CDRG_RDOT: number): void;
    static addCdrgTdot(builder: flatbuffers.Builder, CDRG_TDOT: number): void;
    static addCdrgNdot(builder: flatbuffers.Builder, CDRG_NDOT: number): void;
    static addCdrgDrg(builder: flatbuffers.Builder, CDRG_DRG: number): void;
    static addCsrpR(builder: flatbuffers.Builder, CSRP_R: number): void;
    static addCsrpT(builder: flatbuffers.Builder, CSRP_T: number): void;
    static addCsrpN(builder: flatbuffers.Builder, CSRP_N: number): void;
    static addCsrpRdot(builder: flatbuffers.Builder, CSRP_RDOT: number): void;
    static addCsrpTdot(builder: flatbuffers.Builder, CSRP_TDOT: number): void;
    static addCsrpNdot(builder: flatbuffers.Builder, CSRP_NDOT: number): void;
    static addCsrpDrg(builder: flatbuffers.Builder, CSRP_DRG: number): void;
    static addCsrpSrp(builder: flatbuffers.Builder, CSRP_SRP: number): void;
    static addCthrR(builder: flatbuffers.Builder, CTHR_R: number): void;
    static addCthrT(builder: flatbuffers.Builder, CTHR_T: number): void;
    static addCthrN(builder: flatbuffers.Builder, CTHR_N: number): void;
    static addCthrRdot(builder: flatbuffers.Builder, CTHR_RDOT: number): void;
    static addCthrTdot(builder: flatbuffers.Builder, CTHR_TDOT: number): void;
    static addCthrNdot(builder: flatbuffers.Builder, CTHR_NDOT: number): void;
    static addCthrDrg(builder: flatbuffers.Builder, CTHR_DRG: number): void;
    static addCthrSrp(builder: flatbuffers.Builder, CTHR_SRP: number): void;
    static addCthrThr(builder: flatbuffers.Builder, CTHR_THR: number): void;
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
    REFERENCE_FRAME: refFrame;
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
    CR_R: number;
    CT_R: number;
    CT_T: number;
    CN_R: number;
    CN_T: number;
    CN_N: number;
    CRDOT_R: number;
    CRDOT_T: number;
    CRDOT_N: number;
    CRDOT_RDOT: number;
    CTDOT_R: number;
    CTDOT_T: number;
    CTDOT_N: number;
    CTDOT_RDOT: number;
    CTDOT_TDOT: number;
    CNDOT_R: number;
    CNDOT_T: number;
    CNDOT_N: number;
    CNDOT_RDOT: number;
    CNDOT_TDOT: number;
    CNDOT_NDOT: number;
    CDRG_R: number;
    CDRG_T: number;
    CDRG_N: number;
    CDRG_RDOT: number;
    CDRG_TDOT: number;
    CDRG_NDOT: number;
    CDRG_DRG: number;
    CSRP_R: number;
    CSRP_T: number;
    CSRP_N: number;
    CSRP_RDOT: number;
    CSRP_TDOT: number;
    CSRP_NDOT: number;
    CSRP_DRG: number;
    CSRP_SRP: number;
    CTHR_R: number;
    CTHR_T: number;
    CTHR_N: number;
    CTHR_RDOT: number;
    CTHR_TDOT: number;
    CTHR_NDOT: number;
    CTHR_DRG: number;
    CTHR_SRP: number;
    CTHR_THR: number;
    constructor(COMMENT?: string | Uint8Array | null, OBJECT?: CATT | null, POC?: EPMT | null, OPERATOR_CONTACT_POSITION?: string | Uint8Array | null, OPERATOR_ORGANIZATION?: string | Uint8Array | null, EPHEMERIS_NAME?: string | Uint8Array | null, COVARIANCE_METHOD?: covarianceMethod, REFERENCE_FRAME?: refFrame, GRAVITY_MODEL?: string | Uint8Array | null, ATMOSPHERIC_MODEL?: string | Uint8Array | null, N_BODY_PERTURBATIONS?: string | Uint8Array | null, SOLAR_RAD_PRESSURE?: boolean, EARTH_TIDES?: boolean, INTRACK_THRUST?: boolean, TIME_LASTOB_START?: string | Uint8Array | null, TIME_LASTOB_END?: string | Uint8Array | null, RECOMMENDED_OD_SPAN?: number, ACTUAL_OD_SPAN?: number, OBS_AVAILABLE?: number, OBS_USED?: number, TRACKS_AVAILABLE?: number, TRACKS_USED?: number, RESIDUALS_ACCEPTED?: number, WEIGHTED_RMS?: number, AREA_PC?: number, AREA_DRG?: number, AREA_SRP?: number, CR_AREA_OVER_MASS?: number, THRUST_ACCELERATION?: number, SEDR?: number, X?: number, Y?: number, Z?: number, X_DOT?: number, Y_DOT?: number, Z_DOT?: number, CR_R?: number, CT_R?: number, CT_T?: number, CN_R?: number, CN_T?: number, CN_N?: number, CRDOT_R?: number, CRDOT_T?: number, CRDOT_N?: number, CRDOT_RDOT?: number, CTDOT_R?: number, CTDOT_T?: number, CTDOT_N?: number, CTDOT_RDOT?: number, CTDOT_TDOT?: number, CNDOT_R?: number, CNDOT_T?: number, CNDOT_N?: number, CNDOT_RDOT?: number, CNDOT_TDOT?: number, CNDOT_NDOT?: number, CDRG_R?: number, CDRG_T?: number, CDRG_N?: number, CDRG_RDOT?: number, CDRG_TDOT?: number, CDRG_NDOT?: number, CDRG_DRG?: number, CSRP_R?: number, CSRP_T?: number, CSRP_N?: number, CSRP_RDOT?: number, CSRP_TDOT?: number, CSRP_NDOT?: number, CSRP_DRG?: number, CSRP_SRP?: number, CTHR_R?: number, CTHR_T?: number, CTHR_N?: number, CTHR_RDOT?: number, CTHR_TDOT?: number, CTHR_NDOT?: number, CTHR_DRG?: number, CTHR_SRP?: number, CTHR_THR?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=CDMObject.d.ts.map