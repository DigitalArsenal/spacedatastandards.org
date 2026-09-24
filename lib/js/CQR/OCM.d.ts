import * as flatbuffers from 'flatbuffers';
import { Header, HeaderT } from './Header.js';
import { Maneuver, ManeuverT } from './Maneuver.js';
import { Metadata, MetadataT } from './Metadata.js';
import { OrbitDetermination, OrbitDeterminationT } from './OrbitDetermination.js';
import { PPEOrbitalElementRecord, PPEOrbitalElementRecordT } from './PPEOrbitalElementRecord.js';
import { PPEPositionRecord, PPEPositionRecordT } from './PPEPositionRecord.js';
import { Perturbations, PerturbationsT } from './Perturbations.js';
import { PhysicalProperties, PhysicalPropertiesT } from './PhysicalProperties.js';
import { RFM, RFMT } from './RFM.js';
import { UserDefinedParameters, UserDefinedParametersT } from './UserDefinedParameters.js';
import { trajectoryType } from './trajectoryType.js';
/**
 * Orbit Comprehensive Message
 */
export declare class OCM implements flatbuffers.IUnpackableObject<OCMT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): OCM;
    static getRootAsOCM(bb: flatbuffers.ByteBuffer, obj?: OCM): OCM;
    static getSizePrefixedRootAsOCM(bb: flatbuffers.ByteBuffer, obj?: OCM): OCM;
    static bufferHasIdentifier(bb: flatbuffers.ByteBuffer): boolean;
    /**
     * Header section of the OCM.
     */
    HEADER(obj?: Header): Header | null;
    /**
     * Metadata section of the OCM.
     */
    METADATA(obj?: Metadata): Metadata | null;
    /**
     * Trajectory state representation type.
     * Determines how orbit state data is parameterized in this message.
     * For CARTESIAN_PV/CARTESIAN_PVA, use STATE_DATA array.
     * For POLYNOMIAL_POS/POLYNOMIAL_OE, use the corresponding polynomial record arrays.
     */
    TRAJ_TYPE(): trajectoryType;
    /**
     * Legacy trajectory type string for backward compatibility and extended types
     * (e.g., "PROPAGATED", "ESTIMATED", "FILTERED").
     */
    TRAJ_TYPE_DESCRIPTION(): string | null;
    TRAJ_TYPE_DESCRIPTION(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Time interval between state vectors in seconds (required for time-series data).
     */
    STATE_STEP_SIZE(): number;
    /**
     * Number of components per state vector.
     * 6 = position + velocity (X, Y, Z, X_DOT, Y_DOT, Z_DOT)
     * 9 = position + velocity + acceleration (adds X_DDOT, Y_DDOT, Z_DDOT)
     * 6 or 7 for the element sets named by TRAJ_TYPE.
     */
    STATE_VECTOR_SIZE(): number;
    /**
     * State data as row-major array of doubles.
     * Layout: [X0, Y0, Z0, X_DOT0, Y_DOT0, Z_DOT0, X1, Y1, Z1, ...]
     * Time reconstruction: epoch[i] = METADATA.START_TIME + (i * STATE_STEP_SIZE)
     * Length must be divisible by STATE_VECTOR_SIZE.
     * Units: km, km/s and km/s**2, in TRAJ_REF_FRAME about CENTER_NAME.
     */
    STATE_DATA(index: number): number | null;
    stateDataLength(): number;
    stateDataArray(): Float64Array | null;
    /**
     * Covariance data as flat array (21 elements per epoch for 6x6 lower triangular).
     * Time alignment matches STATE_DATA epochs.
     */
    COVARIANCE_DATA(index: number): number | null;
    covarianceDataLength(): number;
    covarianceDataArray(): Float64Array | null;
    /**
     * Polynomial position records.
     * Used when TRAJ_TYPE is POLYNOMIAL_POS. Each record covers a time segment
     * with polynomial coefficients for X, Y, Z position (and optionally velocity).
     * See PPE schema for record structure and evaluation procedure.
     */
    POLYNOMIAL_POSITION_RECORDS(index: number, obj?: PPEPositionRecord): PPEPositionRecord | null;
    polynomialPositionRecordsLength(): number;
    /**
     * Polynomial orbital element records.
     * Used when TRAJ_TYPE is POLYNOMIAL_OE. Each record covers a time segment
     * with polynomial coefficients for classical orbital elements.
     * See PPE schema for record structure and evaluation procedure.
     */
    POLYNOMIAL_OE_RECORDS(index: number, obj?: PPEOrbitalElementRecord): PPEOrbitalElementRecord | null;
    polynomialOeRecordsLength(): number;
    /**
     * Physical properties of the space object.
     */
    PHYSICAL_PROPERTIES(obj?: PhysicalProperties): PhysicalProperties | null;
    /**
     * Maneuver data.
     */
    MANEUVER_DATA(index: number, obj?: Maneuver): Maneuver | null;
    maneuverDataLength(): number;
    /**
     * Perturbations parameters used.
     */
    PERTURBATIONS(obj?: Perturbations): Perturbations | null;
    /**
     * Orbit determination data.
     */
    ORBIT_DETERMINATION(obj?: OrbitDetermination): OrbitDetermination | null;
    /**
     * User-defined parameters and supplemental comments.
     */
    USER_DEFINED_PARAMETERS(index: number, obj?: UserDefinedParameters): UserDefinedParameters | null;
    userDefinedParametersLength(): number;
    /**
     * Origin of TRAJ_REF_FRAME (EARTH, MOON, ...) (CCSDS 502.0-B-3 CENTER_NAME).
     */
    CENTER_NAME(): string | null;
    CENTER_NAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Reference frame of STATE_DATA and the polynomial records
     * (CCSDS 502.0-B-3 TRAJ_REF_FRAME).
     */
    TRAJ_REF_FRAME(obj?: RFM): RFM | null;
    /**
     * Epoch of TRAJ_REF_FRAME when it is not intrinsic to the frame
     * (CCSDS 502.0-B-3 TRAJ_FRAME_EPOCH).
     */
    TRAJ_FRAME_EPOCH(): string | null;
    TRAJ_FRAME_EPOCH(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Reference frame of COVARIANCE_DATA (CCSDS 502.0-B-3 COV_REF_FRAME).
     */
    COV_REF_FRAME(obj?: RFM): RFM | null;
    /**
     * Orbit revolution number at the first state (CCSDS 502.0-B-3 ORB_REVNUM).
     */
    ORB_REVNUM(): number;
    /**
     * For element sets: OSCULATING, or the mean-element theory used (BROUWER,
     * KOZAI, ...) (CCSDS 502.0-B-3 ORB_AVERAGING). Absent means OSCULATING.
     */
    ORB_AVERAGING(): string | null;
    ORB_AVERAGING(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    static startOCM(builder: flatbuffers.Builder): void;
    static addHeader(builder: flatbuffers.Builder, HEADEROffset: flatbuffers.Offset): void;
    static addMetadata(builder: flatbuffers.Builder, METADATAOffset: flatbuffers.Offset): void;
    static addTrajType(builder: flatbuffers.Builder, TRAJ_TYPE: trajectoryType): void;
    static addTrajTypeDescription(builder: flatbuffers.Builder, TRAJ_TYPE_DESCRIPTIONOffset: flatbuffers.Offset): void;
    static addStateStepSize(builder: flatbuffers.Builder, STATE_STEP_SIZE: number): void;
    static addStateVectorSize(builder: flatbuffers.Builder, STATE_VECTOR_SIZE: number): void;
    static addStateData(builder: flatbuffers.Builder, STATE_DATAOffset: flatbuffers.Offset): void;
    static createStateDataVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createStateDataVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startStateDataVector(builder: flatbuffers.Builder, numElems: number): void;
    static addCovarianceData(builder: flatbuffers.Builder, COVARIANCE_DATAOffset: flatbuffers.Offset): void;
    static createCovarianceDataVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createCovarianceDataVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startCovarianceDataVector(builder: flatbuffers.Builder, numElems: number): void;
    static addPolynomialPositionRecords(builder: flatbuffers.Builder, POLYNOMIAL_POSITION_RECORDSOffset: flatbuffers.Offset): void;
    static createPolynomialPositionRecordsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startPolynomialPositionRecordsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addPolynomialOeRecords(builder: flatbuffers.Builder, POLYNOMIAL_OE_RECORDSOffset: flatbuffers.Offset): void;
    static createPolynomialOeRecordsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startPolynomialOeRecordsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addPhysicalProperties(builder: flatbuffers.Builder, PHYSICAL_PROPERTIESOffset: flatbuffers.Offset): void;
    static addManeuverData(builder: flatbuffers.Builder, MANEUVER_DATAOffset: flatbuffers.Offset): void;
    static createManeuverDataVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startManeuverDataVector(builder: flatbuffers.Builder, numElems: number): void;
    static addPerturbations(builder: flatbuffers.Builder, PERTURBATIONSOffset: flatbuffers.Offset): void;
    static addOrbitDetermination(builder: flatbuffers.Builder, ORBIT_DETERMINATIONOffset: flatbuffers.Offset): void;
    static addUserDefinedParameters(builder: flatbuffers.Builder, USER_DEFINED_PARAMETERSOffset: flatbuffers.Offset): void;
    static createUserDefinedParametersVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startUserDefinedParametersVector(builder: flatbuffers.Builder, numElems: number): void;
    static addCenterName(builder: flatbuffers.Builder, CENTER_NAMEOffset: flatbuffers.Offset): void;
    static addTrajRefFrame(builder: flatbuffers.Builder, TRAJ_REF_FRAMEOffset: flatbuffers.Offset): void;
    static addTrajFrameEpoch(builder: flatbuffers.Builder, TRAJ_FRAME_EPOCHOffset: flatbuffers.Offset): void;
    static addCovRefFrame(builder: flatbuffers.Builder, COV_REF_FRAMEOffset: flatbuffers.Offset): void;
    static addOrbRevnum(builder: flatbuffers.Builder, ORB_REVNUM: number): void;
    static addOrbAveraging(builder: flatbuffers.Builder, ORB_AVERAGINGOffset: flatbuffers.Offset): void;
    static endOCM(builder: flatbuffers.Builder): flatbuffers.Offset;
    static finishOCMBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static finishSizePrefixedOCMBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    unpack(): OCMT;
    unpackTo(_o: OCMT): void;
}
export declare class OCMT implements flatbuffers.IGeneratedObject {
    HEADER: HeaderT | null;
    METADATA: MetadataT | null;
    TRAJ_TYPE: trajectoryType;
    TRAJ_TYPE_DESCRIPTION: string | Uint8Array | null;
    STATE_STEP_SIZE: number;
    STATE_VECTOR_SIZE: number;
    STATE_DATA: (number)[];
    COVARIANCE_DATA: (number)[];
    POLYNOMIAL_POSITION_RECORDS: (PPEPositionRecordT)[];
    POLYNOMIAL_OE_RECORDS: (PPEOrbitalElementRecordT)[];
    PHYSICAL_PROPERTIES: PhysicalPropertiesT | null;
    MANEUVER_DATA: (ManeuverT)[];
    PERTURBATIONS: PerturbationsT | null;
    ORBIT_DETERMINATION: OrbitDeterminationT | null;
    USER_DEFINED_PARAMETERS: (UserDefinedParametersT)[];
    CENTER_NAME: string | Uint8Array | null;
    TRAJ_REF_FRAME: RFMT | null;
    TRAJ_FRAME_EPOCH: string | Uint8Array | null;
    COV_REF_FRAME: RFMT | null;
    ORB_REVNUM: number;
    ORB_AVERAGING: string | Uint8Array | null;
    constructor(HEADER?: HeaderT | null, METADATA?: MetadataT | null, TRAJ_TYPE?: trajectoryType, TRAJ_TYPE_DESCRIPTION?: string | Uint8Array | null, STATE_STEP_SIZE?: number, STATE_VECTOR_SIZE?: number, STATE_DATA?: (number)[], COVARIANCE_DATA?: (number)[], POLYNOMIAL_POSITION_RECORDS?: (PPEPositionRecordT)[], POLYNOMIAL_OE_RECORDS?: (PPEOrbitalElementRecordT)[], PHYSICAL_PROPERTIES?: PhysicalPropertiesT | null, MANEUVER_DATA?: (ManeuverT)[], PERTURBATIONS?: PerturbationsT | null, ORBIT_DETERMINATION?: OrbitDeterminationT | null, USER_DEFINED_PARAMETERS?: (UserDefinedParametersT)[], CENTER_NAME?: string | Uint8Array | null, TRAJ_REF_FRAME?: RFMT | null, TRAJ_FRAME_EPOCH?: string | Uint8Array | null, COV_REF_FRAME?: RFMT | null, ORB_REVNUM?: number, ORB_AVERAGING?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=OCM.d.ts.map