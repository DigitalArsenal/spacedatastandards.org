import * as flatbuffers from 'flatbuffers';
import { Header, HeaderT } from './Header.js';
import { Maneuver, ManeuverT } from './Maneuver.js';
import { Metadata, MetadataT } from './Metadata.js';
import { OrbitDetermination, OrbitDeterminationT } from './OrbitDetermination.js';
import { Perturbations, PerturbationsT } from './Perturbations.js';
import { PhysicalProperties, PhysicalPropertiesT } from './PhysicalProperties.js';
import { UserDefinedParameters, UserDefinedParametersT } from './UserDefinedParameters.js';
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
     * Trajectory type (e.g., PROPAGATED, ESTIMATED).
     */
    TRAJ_TYPE(): string | null;
    TRAJ_TYPE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Time interval between state vectors in seconds (required for time-series data).
     */
    STATE_STEP_SIZE(): number;
    /**
     * Number of components per state vector.
     * 6 = position + velocity (X, Y, Z, X_DOT, Y_DOT, Z_DOT)
     * 9 = position + velocity + acceleration (adds X_DDOT, Y_DDOT, Z_DDOT)
     */
    STATE_VECTOR_SIZE(): number;
    /**
     * State data as row-major array of doubles.
     * Layout: [X0, Y0, Z0, X_DOT0, Y_DOT0, Z_DOT0, X1, Y1, Z1, ...]
     * Time reconstruction: epoch[i] = METADATA.START_TIME + (i * STATE_STEP_SIZE)
     * Length must be divisible by STATE_VECTOR_SIZE.
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
    static startOCM(builder: flatbuffers.Builder): void;
    static addHeader(builder: flatbuffers.Builder, HEADEROffset: flatbuffers.Offset): void;
    static addMetadata(builder: flatbuffers.Builder, METADATAOffset: flatbuffers.Offset): void;
    static addTrajType(builder: flatbuffers.Builder, TRAJ_TYPEOffset: flatbuffers.Offset): void;
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
    static addPhysicalProperties(builder: flatbuffers.Builder, PHYSICAL_PROPERTIESOffset: flatbuffers.Offset): void;
    static addManeuverData(builder: flatbuffers.Builder, MANEUVER_DATAOffset: flatbuffers.Offset): void;
    static createManeuverDataVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startManeuverDataVector(builder: flatbuffers.Builder, numElems: number): void;
    static addPerturbations(builder: flatbuffers.Builder, PERTURBATIONSOffset: flatbuffers.Offset): void;
    static addOrbitDetermination(builder: flatbuffers.Builder, ORBIT_DETERMINATIONOffset: flatbuffers.Offset): void;
    static addUserDefinedParameters(builder: flatbuffers.Builder, USER_DEFINED_PARAMETERSOffset: flatbuffers.Offset): void;
    static createUserDefinedParametersVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startUserDefinedParametersVector(builder: flatbuffers.Builder, numElems: number): void;
    static endOCM(builder: flatbuffers.Builder): flatbuffers.Offset;
    static finishOCMBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static finishSizePrefixedOCMBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    unpack(): OCMT;
    unpackTo(_o: OCMT): void;
}
export declare class OCMT implements flatbuffers.IGeneratedObject {
    HEADER: HeaderT | null;
    METADATA: MetadataT | null;
    TRAJ_TYPE: string | Uint8Array | null;
    STATE_STEP_SIZE: number;
    STATE_VECTOR_SIZE: number;
    STATE_DATA: (number)[];
    COVARIANCE_DATA: (number)[];
    PHYSICAL_PROPERTIES: PhysicalPropertiesT | null;
    MANEUVER_DATA: (ManeuverT)[];
    PERTURBATIONS: PerturbationsT | null;
    ORBIT_DETERMINATION: OrbitDeterminationT | null;
    USER_DEFINED_PARAMETERS: (UserDefinedParametersT)[];
    constructor(HEADER?: HeaderT | null, METADATA?: MetadataT | null, TRAJ_TYPE?: string | Uint8Array | null, STATE_STEP_SIZE?: number, STATE_VECTOR_SIZE?: number, STATE_DATA?: (number)[], COVARIANCE_DATA?: (number)[], PHYSICAL_PROPERTIES?: PhysicalPropertiesT | null, MANEUVER_DATA?: (ManeuverT)[], PERTURBATIONS?: PerturbationsT | null, ORBIT_DETERMINATION?: OrbitDeterminationT | null, USER_DEFINED_PARAMETERS?: (UserDefinedParametersT)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=OCM.d.ts.map