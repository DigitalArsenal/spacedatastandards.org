import * as flatbuffers from 'flatbuffers';
import { Header, HeaderT } from './header.js';
import { Maneuver, ManeuverT } from './maneuver.js';
import { Metadata, MetadataT } from './metadata.js';
import { OrbitDetermination, OrbitDeterminationT } from './orbit-determination.js';
import { Perturbations, PerturbationsT } from './perturbations.js';
import { PhysicalProperties, PhysicalPropertiesT } from './physical-properties.js';
import { StateVector, StateVectorT } from './state-vector.js';
import { UserDefinedParameters, UserDefinedParametersT } from './user-defined-parameters.js';
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
    header(obj?: Header): Header | null;
    /**
     * Metadata section of the OCM.
     */
    metadata(obj?: Metadata): Metadata | null;
    /**
     * Trajectory type (e.g., PROPAGATED, ESTIMATED).
     */
    trajType(): string | null;
    trajType(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * State vector data.
     */
    stateData(index: number, obj?: StateVector): StateVector | null;
    stateDataLength(): number;
    /**
     * Physical properties of the space object.
     */
    physicalProperties(obj?: PhysicalProperties): PhysicalProperties | null;
    /**
     * Covariance data associated with the state vectors.
     */
    covarianceData(index: number, obj?: StateVector): StateVector | null;
    covarianceDataLength(): number;
    /**
     * Maneuver data.
     */
    maneuverData(index: number, obj?: Maneuver): Maneuver | null;
    maneuverDataLength(): number;
    /**
     * Perturbations parameters used.
     */
    perturbations(obj?: Perturbations): Perturbations | null;
    /**
     * Orbit determination data.
     */
    orbitDetermination(obj?: OrbitDetermination): OrbitDetermination | null;
    /**
     * User-defined parameters and supplemental comments.
     */
    userDefinedParameters(index: number, obj?: UserDefinedParameters): UserDefinedParameters | null;
    userDefinedParametersLength(): number;
    static startOCM(builder: flatbuffers.Builder): void;
    static addHeader(builder: flatbuffers.Builder, headerOffset: flatbuffers.Offset): void;
    static addMetadata(builder: flatbuffers.Builder, metadataOffset: flatbuffers.Offset): void;
    static addTrajType(builder: flatbuffers.Builder, trajTypeOffset: flatbuffers.Offset): void;
    static addStateData(builder: flatbuffers.Builder, stateDataOffset: flatbuffers.Offset): void;
    static createStateDataVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startStateDataVector(builder: flatbuffers.Builder, numElems: number): void;
    static addPhysicalProperties(builder: flatbuffers.Builder, physicalPropertiesOffset: flatbuffers.Offset): void;
    static addCovarianceData(builder: flatbuffers.Builder, covarianceDataOffset: flatbuffers.Offset): void;
    static createCovarianceDataVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startCovarianceDataVector(builder: flatbuffers.Builder, numElems: number): void;
    static addManeuverData(builder: flatbuffers.Builder, maneuverDataOffset: flatbuffers.Offset): void;
    static createManeuverDataVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startManeuverDataVector(builder: flatbuffers.Builder, numElems: number): void;
    static addPerturbations(builder: flatbuffers.Builder, perturbationsOffset: flatbuffers.Offset): void;
    static addOrbitDetermination(builder: flatbuffers.Builder, orbitDeterminationOffset: flatbuffers.Offset): void;
    static addUserDefinedParameters(builder: flatbuffers.Builder, userDefinedParametersOffset: flatbuffers.Offset): void;
    static createUserDefinedParametersVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startUserDefinedParametersVector(builder: flatbuffers.Builder, numElems: number): void;
    static endOCM(builder: flatbuffers.Builder): flatbuffers.Offset;
    static finishOCMBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static finishSizePrefixedOCMBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    unpack(): OCMT;
    unpackTo(_o: OCMT): void;
}
export declare class OCMT implements flatbuffers.IGeneratedObject {
    header: HeaderT | null;
    metadata: MetadataT | null;
    trajType: string | Uint8Array | null;
    stateData: (StateVectorT)[];
    physicalProperties: PhysicalPropertiesT | null;
    covarianceData: (StateVectorT)[];
    maneuverData: (ManeuverT)[];
    perturbations: PerturbationsT | null;
    orbitDetermination: OrbitDeterminationT | null;
    userDefinedParameters: (UserDefinedParametersT)[];
    constructor(header?: HeaderT | null, metadata?: MetadataT | null, trajType?: string | Uint8Array | null, stateData?: (StateVectorT)[], physicalProperties?: PhysicalPropertiesT | null, covarianceData?: (StateVectorT)[], maneuverData?: (ManeuverT)[], perturbations?: PerturbationsT | null, orbitDetermination?: OrbitDeterminationT | null, userDefinedParameters?: (UserDefinedParametersT)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=ocm.d.ts.map