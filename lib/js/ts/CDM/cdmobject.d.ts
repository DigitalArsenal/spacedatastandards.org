import * as flatbuffers from 'flatbuffers';
import { CAT, CATT } from './cat.js';
import { EPM, EPMT } from './epm.js';
import { covarianceMethod } from './covariance-method.js';
import { refFrame } from './ref-frame.js';
export declare class CDMObject implements flatbuffers.IUnpackableObject<CDMObjectT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): CDMObject;
    static getRootAsCDMObject(bb: flatbuffers.ByteBuffer, obj?: CDMObject): CDMObject;
    static getSizePrefixedRootAsCDMObject(bb: flatbuffers.ByteBuffer, obj?: CDMObject): CDMObject;
    /**
     * A comment
     */
    comment(): string | null;
    comment(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    object(obj?: CAT): CAT | null;
    /**
     * Point of Contact
     */
    poc(obj?: EPM): EPM | null;
    /**
     * Operator contact position
     */
    operatorContactPosition(): string | null;
    operatorContactPosition(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Operator organization
     */
    operatorOrganization(): string | null;
    operatorOrganization(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Ephemeris name
     */
    ephemerisName(): string | null;
    ephemerisName(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Covariance method
     */
    covarianceMethod(): covarianceMethod;
    /**
     * Reference Frame in which the object position is defined
     */
    referenceFrame(): refFrame;
    /**
     * Gravity model
     */
    gravityModel(): string | null;
    gravityModel(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Atmospheric model
     */
    atmosphericModel(): string | null;
    atmosphericModel(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * N-body perturbations
     */
    nBodyPerturbations(): string | null;
    nBodyPerturbations(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Solar radiation pressure
     */
    solarRadPressure(): boolean;
    /**
     * Earth tides
     */
    earthTides(): boolean;
    /**
     * Intrack thrust
     */
    intrackThrust(): boolean;
    /**
     * Time of last observation start
     */
    timeLastobStart(): string | null;
    timeLastobStart(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Time of last observation end
     */
    timeLastobEnd(): string | null;
    timeLastobEnd(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Recommended observation data span
     */
    recommendedOdSpan(): number;
    /**
     * Actual observation data span
     */
    actualOdSpan(): number;
    /**
     * Number of observations available
     */
    obsAvailable(): number;
    /**
     * Number of observations used
     */
    obsUsed(): number;
    /**
     * Number of tracks available
     */
    tracksAvailable(): number;
    /**
     * Number of tracks used
     */
    tracksUsed(): number;
    /**
     * Residuals accepted
     */
    residualsAccepted(): number;
    /**
     * Weighted root mean square
     */
    weightedRms(): number;
    /**
     * Area of the object
     */
    areaPc(): number;
    /**
     * Area of the object drag
     */
    areaDrg(): number;
    /**
     * Area of the object solar radiation pressure
     */
    areaSrp(): number;
    /**
     * Object's area-to-mass ratio
     */
    crAreaOverMass(): number;
    /**
     * Object's thrust acceleration
     */
    thrustAcceleration(): number;
    /**
     * Object's solar flux
     */
    sedr(): number;
    /**
     * X-coordinate of the object's position in RTN coordinates
     */
    x(): number;
    /**
     * Y-coordinate of the object's position in RTN
     */
    y(): number;
    /**
     * Z-coordinate of the object's position in RTN
     */
    z(): number;
    /**
     * X-coordinate of the object's position in RTN coordinates
     */
    xDot(): number;
    /**
     * Y-coordinate of the object's position in RTN
     */
    yDot(): number;
    /**
     * Z-coordinate of the object's position in RTN
     */
    zDot(): number;
    /**
     * Covariance Matrix component
     */
    crR(): number;
    /**
     * Covariance Matrix component
     */
    ctR(): number;
    /**
     * Covariance Matrix component
     */
    ctT(): number;
    /**
     * Covariance Matrix component
     */
    cnR(): number;
    /**
     * Covariance Matrix component
     */
    cnT(): number;
    /**
     * Covariance Matrix component
     */
    cnN(): number;
    /**
     * Covariance Matrix component
     */
    crdotR(): number;
    /**
     * Covariance Matrix component
     */
    crdotT(): number;
    /**
     * Covariance Matrix component
     */
    crdotN(): number;
    /**
     * Covariance Matrix component
     */
    crdotRdot(): number;
    /**
     * Covariance Matrix component
     */
    ctdotR(): number;
    /**
     * Covariance Matrix component
     */
    ctdotT(): number;
    /**
     * Covariance Matrix component
     */
    ctdotN(): number;
    /**
     * Covariance Matrix component
     */
    ctdotRdot(): number;
    /**
     * Covariance Matrix component
     */
    ctdotTdot(): number;
    /**
     * Covariance Matrix component
     */
    cndotR(): number;
    /**
     * Covariance Matrix component
     */
    cndotT(): number;
    /**
     * Covariance Matrix component
     */
    cndotN(): number;
    /**
     * Covariance Matrix component
     */
    cndotRdot(): number;
    /**
     * Covariance Matrix component
     */
    cndotTdot(): number;
    /**
     * Covariance Matrix component
     */
    cndotNdot(): number;
    /**
     * Covariance Matrix component
     */
    cdrgR(): number;
    /**
     * Covariance Matrix component
     */
    cdrgT(): number;
    /**
     * Covariance Matrix component
     */
    cdrgN(): number;
    /**
     * Covariance Matrix component
     */
    cdrgRdot(): number;
    /**
     * Covariance Matrix component
     */
    cdrgTdot(): number;
    /**
     * Covariance Matrix component
     */
    cdrgNdot(): number;
    /**
     * Covariance Matrix component
     */
    cdrgDrg(): number;
    /**
     * Covariance Matrix component
     */
    csrpR(): number;
    /**
     * Covariance Matrix component
     */
    csrpT(): number;
    /**
     * Covariance Matrix component
     */
    csrpN(): number;
    /**
     * Covariance Matrix component
     */
    csrpRdot(): number;
    /**
     * Covariance Matrix component
     */
    csrpTdot(): number;
    /**
     * Covariance Matrix component
     */
    csrpNdot(): number;
    /**
     * Covariance Matrix component
     */
    csrpDrg(): number;
    /**
     * Covariance Matrix component
     */
    csrpSrp(): number;
    /**
     * Covariance Matrix component
     */
    cthrR(): number;
    /**
     * Covariance Matrix component
     */
    cthrT(): number;
    /**
     * Covariance Matrix component
     */
    cthrN(): number;
    /**
     * Covariance Matrix component
     */
    cthrRdot(): number;
    /**
     * Covariance Matrix component
     */
    cthrTdot(): number;
    /**
     * Covariance Matrix component
     */
    cthrNdot(): number;
    /**
     * Covariance Matrix component
     */
    cthrDrg(): number;
    /**
     * Covariance Matrix component
     */
    cthrSrp(): number;
    /**
     * Covariance Matrix component
     */
    cthrThr(): number;
    static startCDMObject(builder: flatbuffers.Builder): void;
    static addComment(builder: flatbuffers.Builder, commentOffset: flatbuffers.Offset): void;
    static addObject(builder: flatbuffers.Builder, objectOffset: flatbuffers.Offset): void;
    static addPoc(builder: flatbuffers.Builder, pocOffset: flatbuffers.Offset): void;
    static addOperatorContactPosition(builder: flatbuffers.Builder, operatorContactPositionOffset: flatbuffers.Offset): void;
    static addOperatorOrganization(builder: flatbuffers.Builder, operatorOrganizationOffset: flatbuffers.Offset): void;
    static addEphemerisName(builder: flatbuffers.Builder, ephemerisNameOffset: flatbuffers.Offset): void;
    static addCovarianceMethod(builder: flatbuffers.Builder, covarianceMethod: covarianceMethod): void;
    static addReferenceFrame(builder: flatbuffers.Builder, referenceFrame: refFrame): void;
    static addGravityModel(builder: flatbuffers.Builder, gravityModelOffset: flatbuffers.Offset): void;
    static addAtmosphericModel(builder: flatbuffers.Builder, atmosphericModelOffset: flatbuffers.Offset): void;
    static addNBodyPerturbations(builder: flatbuffers.Builder, nBodyPerturbationsOffset: flatbuffers.Offset): void;
    static addSolarRadPressure(builder: flatbuffers.Builder, solarRadPressure: boolean): void;
    static addEarthTides(builder: flatbuffers.Builder, earthTides: boolean): void;
    static addIntrackThrust(builder: flatbuffers.Builder, intrackThrust: boolean): void;
    static addTimeLastobStart(builder: flatbuffers.Builder, timeLastobStartOffset: flatbuffers.Offset): void;
    static addTimeLastobEnd(builder: flatbuffers.Builder, timeLastobEndOffset: flatbuffers.Offset): void;
    static addRecommendedOdSpan(builder: flatbuffers.Builder, recommendedOdSpan: number): void;
    static addActualOdSpan(builder: flatbuffers.Builder, actualOdSpan: number): void;
    static addObsAvailable(builder: flatbuffers.Builder, obsAvailable: number): void;
    static addObsUsed(builder: flatbuffers.Builder, obsUsed: number): void;
    static addTracksAvailable(builder: flatbuffers.Builder, tracksAvailable: number): void;
    static addTracksUsed(builder: flatbuffers.Builder, tracksUsed: number): void;
    static addResidualsAccepted(builder: flatbuffers.Builder, residualsAccepted: number): void;
    static addWeightedRms(builder: flatbuffers.Builder, weightedRms: number): void;
    static addAreaPc(builder: flatbuffers.Builder, areaPc: number): void;
    static addAreaDrg(builder: flatbuffers.Builder, areaDrg: number): void;
    static addAreaSrp(builder: flatbuffers.Builder, areaSrp: number): void;
    static addCrAreaOverMass(builder: flatbuffers.Builder, crAreaOverMass: number): void;
    static addThrustAcceleration(builder: flatbuffers.Builder, thrustAcceleration: number): void;
    static addSedr(builder: flatbuffers.Builder, sedr: number): void;
    static addX(builder: flatbuffers.Builder, x: number): void;
    static addY(builder: flatbuffers.Builder, y: number): void;
    static addZ(builder: flatbuffers.Builder, z: number): void;
    static addXDot(builder: flatbuffers.Builder, xDot: number): void;
    static addYDot(builder: flatbuffers.Builder, yDot: number): void;
    static addZDot(builder: flatbuffers.Builder, zDot: number): void;
    static addCrR(builder: flatbuffers.Builder, crR: number): void;
    static addCtR(builder: flatbuffers.Builder, ctR: number): void;
    static addCtT(builder: flatbuffers.Builder, ctT: number): void;
    static addCnR(builder: flatbuffers.Builder, cnR: number): void;
    static addCnT(builder: flatbuffers.Builder, cnT: number): void;
    static addCnN(builder: flatbuffers.Builder, cnN: number): void;
    static addCrdotR(builder: flatbuffers.Builder, crdotR: number): void;
    static addCrdotT(builder: flatbuffers.Builder, crdotT: number): void;
    static addCrdotN(builder: flatbuffers.Builder, crdotN: number): void;
    static addCrdotRdot(builder: flatbuffers.Builder, crdotRdot: number): void;
    static addCtdotR(builder: flatbuffers.Builder, ctdotR: number): void;
    static addCtdotT(builder: flatbuffers.Builder, ctdotT: number): void;
    static addCtdotN(builder: flatbuffers.Builder, ctdotN: number): void;
    static addCtdotRdot(builder: flatbuffers.Builder, ctdotRdot: number): void;
    static addCtdotTdot(builder: flatbuffers.Builder, ctdotTdot: number): void;
    static addCndotR(builder: flatbuffers.Builder, cndotR: number): void;
    static addCndotT(builder: flatbuffers.Builder, cndotT: number): void;
    static addCndotN(builder: flatbuffers.Builder, cndotN: number): void;
    static addCndotRdot(builder: flatbuffers.Builder, cndotRdot: number): void;
    static addCndotTdot(builder: flatbuffers.Builder, cndotTdot: number): void;
    static addCndotNdot(builder: flatbuffers.Builder, cndotNdot: number): void;
    static addCdrgR(builder: flatbuffers.Builder, cdrgR: number): void;
    static addCdrgT(builder: flatbuffers.Builder, cdrgT: number): void;
    static addCdrgN(builder: flatbuffers.Builder, cdrgN: number): void;
    static addCdrgRdot(builder: flatbuffers.Builder, cdrgRdot: number): void;
    static addCdrgTdot(builder: flatbuffers.Builder, cdrgTdot: number): void;
    static addCdrgNdot(builder: flatbuffers.Builder, cdrgNdot: number): void;
    static addCdrgDrg(builder: flatbuffers.Builder, cdrgDrg: number): void;
    static addCsrpR(builder: flatbuffers.Builder, csrpR: number): void;
    static addCsrpT(builder: flatbuffers.Builder, csrpT: number): void;
    static addCsrpN(builder: flatbuffers.Builder, csrpN: number): void;
    static addCsrpRdot(builder: flatbuffers.Builder, csrpRdot: number): void;
    static addCsrpTdot(builder: flatbuffers.Builder, csrpTdot: number): void;
    static addCsrpNdot(builder: flatbuffers.Builder, csrpNdot: number): void;
    static addCsrpDrg(builder: flatbuffers.Builder, csrpDrg: number): void;
    static addCsrpSrp(builder: flatbuffers.Builder, csrpSrp: number): void;
    static addCthrR(builder: flatbuffers.Builder, cthrR: number): void;
    static addCthrT(builder: flatbuffers.Builder, cthrT: number): void;
    static addCthrN(builder: flatbuffers.Builder, cthrN: number): void;
    static addCthrRdot(builder: flatbuffers.Builder, cthrRdot: number): void;
    static addCthrTdot(builder: flatbuffers.Builder, cthrTdot: number): void;
    static addCthrNdot(builder: flatbuffers.Builder, cthrNdot: number): void;
    static addCthrDrg(builder: flatbuffers.Builder, cthrDrg: number): void;
    static addCthrSrp(builder: flatbuffers.Builder, cthrSrp: number): void;
    static addCthrThr(builder: flatbuffers.Builder, cthrThr: number): void;
    static endCDMObject(builder: flatbuffers.Builder): flatbuffers.Offset;
    unpack(): CDMObjectT;
    unpackTo(_o: CDMObjectT): void;
}
export declare class CDMObjectT implements flatbuffers.IGeneratedObject {
    comment: string | Uint8Array | null;
    object: CATT | null;
    poc: EPMT | null;
    operatorContactPosition: string | Uint8Array | null;
    operatorOrganization: string | Uint8Array | null;
    ephemerisName: string | Uint8Array | null;
    covarianceMethod: covarianceMethod;
    referenceFrame: refFrame;
    gravityModel: string | Uint8Array | null;
    atmosphericModel: string | Uint8Array | null;
    nBodyPerturbations: string | Uint8Array | null;
    solarRadPressure: boolean;
    earthTides: boolean;
    intrackThrust: boolean;
    timeLastobStart: string | Uint8Array | null;
    timeLastobEnd: string | Uint8Array | null;
    recommendedOdSpan: number;
    actualOdSpan: number;
    obsAvailable: number;
    obsUsed: number;
    tracksAvailable: number;
    tracksUsed: number;
    residualsAccepted: number;
    weightedRms: number;
    areaPc: number;
    areaDrg: number;
    areaSrp: number;
    crAreaOverMass: number;
    thrustAcceleration: number;
    sedr: number;
    x: number;
    y: number;
    z: number;
    xDot: number;
    yDot: number;
    zDot: number;
    crR: number;
    ctR: number;
    ctT: number;
    cnR: number;
    cnT: number;
    cnN: number;
    crdotR: number;
    crdotT: number;
    crdotN: number;
    crdotRdot: number;
    ctdotR: number;
    ctdotT: number;
    ctdotN: number;
    ctdotRdot: number;
    ctdotTdot: number;
    cndotR: number;
    cndotT: number;
    cndotN: number;
    cndotRdot: number;
    cndotTdot: number;
    cndotNdot: number;
    cdrgR: number;
    cdrgT: number;
    cdrgN: number;
    cdrgRdot: number;
    cdrgTdot: number;
    cdrgNdot: number;
    cdrgDrg: number;
    csrpR: number;
    csrpT: number;
    csrpN: number;
    csrpRdot: number;
    csrpTdot: number;
    csrpNdot: number;
    csrpDrg: number;
    csrpSrp: number;
    cthrR: number;
    cthrT: number;
    cthrN: number;
    cthrRdot: number;
    cthrTdot: number;
    cthrNdot: number;
    cthrDrg: number;
    cthrSrp: number;
    cthrThr: number;
    constructor(comment?: string | Uint8Array | null, object?: CATT | null, poc?: EPMT | null, operatorContactPosition?: string | Uint8Array | null, operatorOrganization?: string | Uint8Array | null, ephemerisName?: string | Uint8Array | null, covarianceMethod?: covarianceMethod, referenceFrame?: refFrame, gravityModel?: string | Uint8Array | null, atmosphericModel?: string | Uint8Array | null, nBodyPerturbations?: string | Uint8Array | null, solarRadPressure?: boolean, earthTides?: boolean, intrackThrust?: boolean, timeLastobStart?: string | Uint8Array | null, timeLastobEnd?: string | Uint8Array | null, recommendedOdSpan?: number, actualOdSpan?: number, obsAvailable?: number, obsUsed?: number, tracksAvailable?: number, tracksUsed?: number, residualsAccepted?: number, weightedRms?: number, areaPc?: number, areaDrg?: number, areaSrp?: number, crAreaOverMass?: number, thrustAcceleration?: number, sedr?: number, x?: number, y?: number, z?: number, xDot?: number, yDot?: number, zDot?: number, crR?: number, ctR?: number, ctT?: number, cnR?: number, cnT?: number, cnN?: number, crdotR?: number, crdotT?: number, crdotN?: number, crdotRdot?: number, ctdotR?: number, ctdotT?: number, ctdotN?: number, ctdotRdot?: number, ctdotTdot?: number, cndotR?: number, cndotT?: number, cndotN?: number, cndotRdot?: number, cndotTdot?: number, cndotNdot?: number, cdrgR?: number, cdrgT?: number, cdrgN?: number, cdrgRdot?: number, cdrgTdot?: number, cdrgNdot?: number, cdrgDrg?: number, csrpR?: number, csrpT?: number, csrpN?: number, csrpRdot?: number, csrpTdot?: number, csrpNdot?: number, csrpDrg?: number, csrpSrp?: number, cthrR?: number, cthrT?: number, cthrN?: number, cthrRdot?: number, cthrTdot?: number, cthrNdot?: number, cthrDrg?: number, cthrSrp?: number, cthrThr?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=cdmobject.d.ts.map