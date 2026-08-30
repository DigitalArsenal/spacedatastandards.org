import * as flatbuffers from 'flatbuffers';
export declare class PSSProvenance implements flatbuffers.IUnpackableObject<PSSProvenanceT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): PSSProvenance;
    static getRootAsPSSProvenance(bb: flatbuffers.ByteBuffer, obj?: PSSProvenance): PSSProvenance;
    static getSizePrefixedRootAsPSSProvenance(bb: flatbuffers.ByteBuffer, obj?: PSSProvenance): PSSProvenance;
    SOLVER_MODULE_ID(): string | null;
    SOLVER_MODULE_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    SOLVER_MODULE_VERSION(): string | null;
    SOLVER_MODULE_VERSION(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    SOLVER_ARTIFACT_SHA256(): string | null;
    SOLVER_ARTIFACT_SHA256(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    PROPAGATOR_MODULE_ID(): string | null;
    PROPAGATOR_MODULE_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    PROPAGATOR_MODULE_VERSION(): string | null;
    PROPAGATOR_MODULE_VERSION(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    PROPAGATOR_ARTIFACT_SHA256(): string | null;
    PROPAGATOR_ARTIFACT_SHA256(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    SOURCE_SDS_TYPE(): string | null;
    SOURCE_SDS_TYPE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    SOURCE_RECORD_ID(): string | null;
    SOURCE_RECORD_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    CREATED_AT(): string | null;
    CREATED_AT(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    static startPSSProvenance(builder: flatbuffers.Builder): void;
    static addSolverModuleId(builder: flatbuffers.Builder, SOLVER_MODULE_IDOffset: flatbuffers.Offset): void;
    static addSolverModuleVersion(builder: flatbuffers.Builder, SOLVER_MODULE_VERSIONOffset: flatbuffers.Offset): void;
    static addSolverArtifactSha256(builder: flatbuffers.Builder, SOLVER_ARTIFACT_SHA256Offset: flatbuffers.Offset): void;
    static addPropagatorModuleId(builder: flatbuffers.Builder, PROPAGATOR_MODULE_IDOffset: flatbuffers.Offset): void;
    static addPropagatorModuleVersion(builder: flatbuffers.Builder, PROPAGATOR_MODULE_VERSIONOffset: flatbuffers.Offset): void;
    static addPropagatorArtifactSha256(builder: flatbuffers.Builder, PROPAGATOR_ARTIFACT_SHA256Offset: flatbuffers.Offset): void;
    static addSourceSdsType(builder: flatbuffers.Builder, SOURCE_SDS_TYPEOffset: flatbuffers.Offset): void;
    static addSourceRecordId(builder: flatbuffers.Builder, SOURCE_RECORD_IDOffset: flatbuffers.Offset): void;
    static addCreatedAt(builder: flatbuffers.Builder, CREATED_ATOffset: flatbuffers.Offset): void;
    static endPSSProvenance(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createPSSProvenance(builder: flatbuffers.Builder, SOLVER_MODULE_IDOffset: flatbuffers.Offset, SOLVER_MODULE_VERSIONOffset: flatbuffers.Offset, SOLVER_ARTIFACT_SHA256Offset: flatbuffers.Offset, PROPAGATOR_MODULE_IDOffset: flatbuffers.Offset, PROPAGATOR_MODULE_VERSIONOffset: flatbuffers.Offset, PROPAGATOR_ARTIFACT_SHA256Offset: flatbuffers.Offset, SOURCE_SDS_TYPEOffset: flatbuffers.Offset, SOURCE_RECORD_IDOffset: flatbuffers.Offset, CREATED_ATOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): PSSProvenanceT;
    unpackTo(_o: PSSProvenanceT): void;
}
export declare class PSSProvenanceT implements flatbuffers.IGeneratedObject {
    SOLVER_MODULE_ID: string | Uint8Array | null;
    SOLVER_MODULE_VERSION: string | Uint8Array | null;
    SOLVER_ARTIFACT_SHA256: string | Uint8Array | null;
    PROPAGATOR_MODULE_ID: string | Uint8Array | null;
    PROPAGATOR_MODULE_VERSION: string | Uint8Array | null;
    PROPAGATOR_ARTIFACT_SHA256: string | Uint8Array | null;
    SOURCE_SDS_TYPE: string | Uint8Array | null;
    SOURCE_RECORD_ID: string | Uint8Array | null;
    CREATED_AT: string | Uint8Array | null;
    constructor(SOLVER_MODULE_ID?: string | Uint8Array | null, SOLVER_MODULE_VERSION?: string | Uint8Array | null, SOLVER_ARTIFACT_SHA256?: string | Uint8Array | null, PROPAGATOR_MODULE_ID?: string | Uint8Array | null, PROPAGATOR_MODULE_VERSION?: string | Uint8Array | null, PROPAGATOR_ARTIFACT_SHA256?: string | Uint8Array | null, SOURCE_SDS_TYPE?: string | Uint8Array | null, SOURCE_RECORD_ID?: string | Uint8Array | null, CREATED_AT?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=PSSProvenance.d.ts.map