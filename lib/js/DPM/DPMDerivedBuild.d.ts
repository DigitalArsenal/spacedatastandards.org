import * as flatbuffers from 'flatbuffers';
/**
 * Who built the derived polynomial rows of an asset's records, and under what:
 * the per-asset part of $PPE PPEBuild, same names and meanings. The per-record
 * RECORD_DIGEST is not stated: rows carried inside the record they derive from
 * are bound to it by the record itself. A reader that cannot reproduce
 * BUILDER_DIGEST and ENVIRONMENT_DIGEST must not use the rows.
 */
export declare class DPMDerivedBuild implements flatbuffers.IUnpackableObject<DPMDerivedBuildT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): DPMDerivedBuild;
    static getRootAsDPMDerivedBuild(bb: flatbuffers.ByteBuffer, obj?: DPMDerivedBuild): DPMDerivedBuild;
    static getSizePrefixedRootAsDPMDerivedBuild(bb: flatbuffers.ByteBuffer, obj?: DPMDerivedBuild): DPMDerivedBuild;
    /**
     * Name of the builder, e.g. sdn-ap.
     */
    BUILDER_NAME(): string | null;
    BUILDER_NAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Version of the builder.
     */
    BUILDER_VERSION(): string | null;
    BUILDER_VERSION(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * SHA-256 of the builder's executable artifact (32 bytes).
     */
    BUILDER_DIGEST(index: number): number | null;
    builderDigestLength(): number;
    builderDigestArray(): Uint8Array | null;
    /**
     * SHA-256 over the configuration and environment inputs the builder used that
     * are not in the source record, by the builder's published rule (32 bytes);
     * empty when the builder uses none.
     */
    ENVIRONMENT_DIGEST(index: number): number | null;
    environmentDigestLength(): number;
    environmentDigestArray(): Uint8Array | null;
    /**
     * Build tolerance per position axis in km. NaN when not stated.
     */
    TOL_POSITION(): number;
    /**
     * Build tolerance per velocity axis in km/s. NaN when not stated or without
     * velocity.
     */
    TOL_VELOCITY(): number;
    static startDPMDerivedBuild(builder: flatbuffers.Builder): void;
    static addBuilderName(builder: flatbuffers.Builder, BUILDER_NAMEOffset: flatbuffers.Offset): void;
    static addBuilderVersion(builder: flatbuffers.Builder, BUILDER_VERSIONOffset: flatbuffers.Offset): void;
    static addBuilderDigest(builder: flatbuffers.Builder, BUILDER_DIGESTOffset: flatbuffers.Offset): void;
    static createBuilderDigestVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startBuilderDigestVector(builder: flatbuffers.Builder, numElems: number): void;
    static addEnvironmentDigest(builder: flatbuffers.Builder, ENVIRONMENT_DIGESTOffset: flatbuffers.Offset): void;
    static createEnvironmentDigestVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startEnvironmentDigestVector(builder: flatbuffers.Builder, numElems: number): void;
    static addTolPosition(builder: flatbuffers.Builder, TOL_POSITION: number): void;
    static addTolVelocity(builder: flatbuffers.Builder, TOL_VELOCITY: number): void;
    static endDPMDerivedBuild(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createDPMDerivedBuild(builder: flatbuffers.Builder, BUILDER_NAMEOffset: flatbuffers.Offset, BUILDER_VERSIONOffset: flatbuffers.Offset, BUILDER_DIGESTOffset: flatbuffers.Offset, ENVIRONMENT_DIGESTOffset: flatbuffers.Offset, TOL_POSITION: number, TOL_VELOCITY: number): flatbuffers.Offset;
    unpack(): DPMDerivedBuildT;
    unpackTo(_o: DPMDerivedBuildT): void;
}
export declare class DPMDerivedBuildT implements flatbuffers.IGeneratedObject {
    BUILDER_NAME: string | Uint8Array | null;
    BUILDER_VERSION: string | Uint8Array | null;
    BUILDER_DIGEST: (number)[];
    ENVIRONMENT_DIGEST: (number)[];
    TOL_POSITION: number;
    TOL_VELOCITY: number;
    constructor(BUILDER_NAME?: string | Uint8Array | null, BUILDER_VERSION?: string | Uint8Array | null, BUILDER_DIGEST?: (number)[], ENVIRONMENT_DIGEST?: (number)[], TOL_POSITION?: number, TOL_VELOCITY?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=DPMDerivedBuild.d.ts.map