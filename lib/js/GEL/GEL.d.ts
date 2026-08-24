import * as flatbuffers from 'flatbuffers';
import { GELConvergenceDiagnostics, GELConvergenceDiagnosticsT } from './GELConvergenceDiagnostics.js';
import { GELObservationRef, GELObservationRefT } from './GELObservationRef.js';
import { RFLProvenance, RFLProvenanceT } from './RFLProvenance.js';
import { gelTechniqueClass } from './gelTechniqueClass.js';
/**
 * Emitter Geolocation Solution
 */
export declare class GEL implements flatbuffers.IUnpackableObject<GELT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): GEL;
    static getRootAsGEL(bb: flatbuffers.ByteBuffer, obj?: GEL): GEL;
    static getSizePrefixedRootAsGEL(bb: flatbuffers.ByteBuffer, obj?: GEL): GEL;
    static bufferHasIdentifier(bb: flatbuffers.ByteBuffer): boolean;
    GEL_ID(): string;
    GEL_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    NAME(): string | null;
    NAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    SCENARIO_ID(): string | null;
    SCENARIO_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    EMITTER_ID(): string | null;
    EMITTER_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    TECHNIQUE(): gelTechniqueClass;
    SOLUTION_EPOCH(): number;
    LATITUDE_DEG(): number;
    LONGITUDE_DEG(): number;
    ALTITUDE_M(): number;
    /**
     * 3x3 east-north-up covariance, row-major, square metres.
     */
    ENU_COVARIANCE_M2(index: number): number | null;
    enuCovarianceM2Length(): number;
    enuCovarianceM2Array(): Float64Array;
    ERROR_ELLIPSE_SEMI_MAJOR_M(): number;
    ERROR_ELLIPSE_SEMI_MINOR_M(): number;
    ERROR_ELLIPSE_ORIENTATION_DEG(): number;
    CEP50_M(): number;
    CEP95_M(): number;
    GDOP(): number;
    VELOCITY_EAST_M_S(): number;
    VELOCITY_NORTH_M_S(): number;
    VELOCITY_UP_M_S(): number;
    VELOCITY_COVARIANCE_M2_S2(index: number): number | null;
    velocityCovarianceM2S2Length(): number;
    velocityCovarianceM2S2Array(): Float64Array | null;
    OBSERVATION_REFS(index: number, obj?: GELObservationRef): GELObservationRef | null;
    observationRefsLength(): number;
    CONVERGENCE_DIAGNOSTICS(obj?: GELConvergenceDiagnostics): GELConvergenceDiagnostics | null;
    PROVENANCE(obj?: RFLProvenance): RFLProvenance | null;
    COMPUTED_AT(): bigint;
    PRODUCER_ID(): string;
    PRODUCER_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    /**
     * Ed25519 signature over the size-prefixed FlatBuffer with both 64-byte
     * signature payloads zeroed while preserving their vectors and offsets.
     */
    SIGNATURE(index: number): number | null;
    signatureLength(): number;
    signatureArray(): Uint8Array;
    /**
     * Ed25519 signature over canonical JSON with IDL field order and
     * capitalization, no insignificant whitespace, and both signature fields
     * omitted.
     */
    CANONICAL_JSON_SIGNATURE(index: number): number | null;
    canonicalJsonSignatureLength(): number;
    canonicalJsonSignatureArray(): Uint8Array;
    static startGEL(builder: flatbuffers.Builder): void;
    static addGelId(builder: flatbuffers.Builder, GEL_IDOffset: flatbuffers.Offset): void;
    static addName(builder: flatbuffers.Builder, NAMEOffset: flatbuffers.Offset): void;
    static addScenarioId(builder: flatbuffers.Builder, SCENARIO_IDOffset: flatbuffers.Offset): void;
    static addEmitterId(builder: flatbuffers.Builder, EMITTER_IDOffset: flatbuffers.Offset): void;
    static addTechnique(builder: flatbuffers.Builder, TECHNIQUE: gelTechniqueClass): void;
    static addSolutionEpoch(builder: flatbuffers.Builder, SOLUTION_EPOCH: number): void;
    static addLatitudeDeg(builder: flatbuffers.Builder, LATITUDE_DEG: number): void;
    static addLongitudeDeg(builder: flatbuffers.Builder, LONGITUDE_DEG: number): void;
    static addAltitudeM(builder: flatbuffers.Builder, ALTITUDE_M: number): void;
    static addEnuCovarianceM2(builder: flatbuffers.Builder, ENU_COVARIANCE_M2Offset: flatbuffers.Offset): void;
    static createEnuCovarianceM2Vector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createEnuCovarianceM2Vector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startEnuCovarianceM2Vector(builder: flatbuffers.Builder, numElems: number): void;
    static addErrorEllipseSemiMajorM(builder: flatbuffers.Builder, ERROR_ELLIPSE_SEMI_MAJOR_M: number): void;
    static addErrorEllipseSemiMinorM(builder: flatbuffers.Builder, ERROR_ELLIPSE_SEMI_MINOR_M: number): void;
    static addErrorEllipseOrientationDeg(builder: flatbuffers.Builder, ERROR_ELLIPSE_ORIENTATION_DEG: number): void;
    static addCep50M(builder: flatbuffers.Builder, CEP50_M: number): void;
    static addCep95M(builder: flatbuffers.Builder, CEP95_M: number): void;
    static addGdop(builder: flatbuffers.Builder, GDOP: number): void;
    static addVelocityEastMS(builder: flatbuffers.Builder, VELOCITY_EAST_M_S: number): void;
    static addVelocityNorthMS(builder: flatbuffers.Builder, VELOCITY_NORTH_M_S: number): void;
    static addVelocityUpMS(builder: flatbuffers.Builder, VELOCITY_UP_M_S: number): void;
    static addVelocityCovarianceM2S2(builder: flatbuffers.Builder, VELOCITY_COVARIANCE_M2_S2Offset: flatbuffers.Offset): void;
    static createVelocityCovarianceM2S2Vector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createVelocityCovarianceM2S2Vector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startVelocityCovarianceM2S2Vector(builder: flatbuffers.Builder, numElems: number): void;
    static addObservationRefs(builder: flatbuffers.Builder, OBSERVATION_REFSOffset: flatbuffers.Offset): void;
    static createObservationRefsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startObservationRefsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addConvergenceDiagnostics(builder: flatbuffers.Builder, CONVERGENCE_DIAGNOSTICSOffset: flatbuffers.Offset): void;
    static addProvenance(builder: flatbuffers.Builder, PROVENANCEOffset: flatbuffers.Offset): void;
    static addComputedAt(builder: flatbuffers.Builder, COMPUTED_AT: bigint): void;
    static addProducerId(builder: flatbuffers.Builder, PRODUCER_IDOffset: flatbuffers.Offset): void;
    static addSignature(builder: flatbuffers.Builder, SIGNATUREOffset: flatbuffers.Offset): void;
    static createSignatureVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startSignatureVector(builder: flatbuffers.Builder, numElems: number): void;
    static addCanonicalJsonSignature(builder: flatbuffers.Builder, CANONICAL_JSON_SIGNATUREOffset: flatbuffers.Offset): void;
    static createCanonicalJsonSignatureVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startCanonicalJsonSignatureVector(builder: flatbuffers.Builder, numElems: number): void;
    static endGEL(builder: flatbuffers.Builder): flatbuffers.Offset;
    static finishGELBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static finishSizePrefixedGELBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    unpack(): GELT;
    unpackTo(_o: GELT): void;
}
export declare class GELT implements flatbuffers.IGeneratedObject {
    GEL_ID: string | Uint8Array | null;
    NAME: string | Uint8Array | null;
    SCENARIO_ID: string | Uint8Array | null;
    EMITTER_ID: string | Uint8Array | null;
    TECHNIQUE: gelTechniqueClass;
    SOLUTION_EPOCH: number;
    LATITUDE_DEG: number;
    LONGITUDE_DEG: number;
    ALTITUDE_M: number;
    ENU_COVARIANCE_M2: (number)[];
    ERROR_ELLIPSE_SEMI_MAJOR_M: number;
    ERROR_ELLIPSE_SEMI_MINOR_M: number;
    ERROR_ELLIPSE_ORIENTATION_DEG: number;
    CEP50_M: number;
    CEP95_M: number;
    GDOP: number;
    VELOCITY_EAST_M_S: number;
    VELOCITY_NORTH_M_S: number;
    VELOCITY_UP_M_S: number;
    VELOCITY_COVARIANCE_M2_S2: (number)[];
    OBSERVATION_REFS: (GELObservationRefT)[];
    CONVERGENCE_DIAGNOSTICS: GELConvergenceDiagnosticsT | null;
    PROVENANCE: RFLProvenanceT | null;
    COMPUTED_AT: bigint;
    PRODUCER_ID: string | Uint8Array | null;
    SIGNATURE: (number)[];
    CANONICAL_JSON_SIGNATURE: (number)[];
    constructor(GEL_ID?: string | Uint8Array | null, NAME?: string | Uint8Array | null, SCENARIO_ID?: string | Uint8Array | null, EMITTER_ID?: string | Uint8Array | null, TECHNIQUE?: gelTechniqueClass, SOLUTION_EPOCH?: number, LATITUDE_DEG?: number, LONGITUDE_DEG?: number, ALTITUDE_M?: number, ENU_COVARIANCE_M2?: (number)[], ERROR_ELLIPSE_SEMI_MAJOR_M?: number, ERROR_ELLIPSE_SEMI_MINOR_M?: number, ERROR_ELLIPSE_ORIENTATION_DEG?: number, CEP50_M?: number, CEP95_M?: number, GDOP?: number, VELOCITY_EAST_M_S?: number, VELOCITY_NORTH_M_S?: number, VELOCITY_UP_M_S?: number, VELOCITY_COVARIANCE_M2_S2?: (number)[], OBSERVATION_REFS?: (GELObservationRefT)[], CONVERGENCE_DIAGNOSTICS?: GELConvergenceDiagnosticsT | null, PROVENANCE?: RFLProvenanceT | null, COMPUTED_AT?: bigint, PRODUCER_ID?: string | Uint8Array | null, SIGNATURE?: (number)[], CANONICAL_JSON_SIGNATURE?: (number)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=GEL.d.ts.map