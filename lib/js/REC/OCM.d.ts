import * as flatbuffers from 'flatbuffers';
import { Header, HeaderT } from './Header.js';
import { Maneuver, ManeuverT } from './Maneuver.js';
import { Metadata, MetadataT } from './Metadata.js';
import { OrbitDetermination, OrbitDeterminationT } from './OrbitDetermination.js';
import { Perturbations, PerturbationsT } from './Perturbations.js';
import { PhysicalProperties, PhysicalPropertiesT } from './PhysicalProperties.js';
import { StateVector, StateVectorT } from './StateVector.js';
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
     * State vector data.
     */
    STATE_DATA(index: number, obj?: StateVector): StateVector | null;
    stateDataLength(): number;
    /**
     * Physical properties of the space object.
     */
    PHYSICAL_PROPERTIES(obj?: PhysicalProperties): PhysicalProperties | null;
    /**
     * Covariance data associated with the state vectors.
     */
    COVARIANCE_DATA(index: number, obj?: StateVector): StateVector | null;
    covarianceDataLength(): number;
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
    static addStateData(builder: flatbuffers.Builder, STATE_DATAOffset: flatbuffers.Offset): void;
    static createStateDataVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startStateDataVector(builder: flatbuffers.Builder, numElems: number): void;
    static addPhysicalProperties(builder: flatbuffers.Builder, PHYSICAL_PROPERTIESOffset: flatbuffers.Offset): void;
    static addCovarianceData(builder: flatbuffers.Builder, COVARIANCE_DATAOffset: flatbuffers.Offset): void;
    static createCovarianceDataVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startCovarianceDataVector(builder: flatbuffers.Builder, numElems: number): void;
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
    STATE_DATA: (StateVectorT)[];
    PHYSICAL_PROPERTIES: PhysicalPropertiesT | null;
    COVARIANCE_DATA: (StateVectorT)[];
    MANEUVER_DATA: (ManeuverT)[];
    PERTURBATIONS: PerturbationsT | null;
    ORBIT_DETERMINATION: OrbitDeterminationT | null;
    USER_DEFINED_PARAMETERS: (UserDefinedParametersT)[];
    constructor(HEADER?: HeaderT | null, METADATA?: MetadataT | null, TRAJ_TYPE?: string | Uint8Array | null, STATE_DATA?: (StateVectorT)[], PHYSICAL_PROPERTIES?: PhysicalPropertiesT | null, COVARIANCE_DATA?: (StateVectorT)[], MANEUVER_DATA?: (ManeuverT)[], PERTURBATIONS?: PerturbationsT | null, ORBIT_DETERMINATION?: OrbitDeterminationT | null, USER_DEFINED_PARAMETERS?: (UserDefinedParametersT)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=OCM.d.ts.map