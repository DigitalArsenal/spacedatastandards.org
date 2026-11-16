import * as flatbuffers from 'flatbuffers';
/**
 * The builder of a derived ephemeris and the inputs its records are bound to.
 * The records are a derived convenience: the source they were built from remains
 * the authoritative content, and a reader may ignore them. BUILDER_NAME and
 * BUILDER_VERSION identify the published rule that defines RECORD_DIGEST and
 * ENVIRONMENT_DIGEST; a consumer that cannot reproduce both must not use the records.
 */
export declare class PPEBuild implements flatbuffers.IUnpackableObject<PPEBuildT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): PPEBuild;
    static getRootAsPPEBuild(bb: flatbuffers.ByteBuffer, obj?: PPEBuild): PPEBuild;
    static getSizePrefixedRootAsPPEBuild(bb: flatbuffers.ByteBuffer, obj?: PPEBuild): PPEBuild;
    /**
     * Name of the builder, as it publishes itself.
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
     * SHA-256 over the fields of the source record the builder reads, by the builder's
     * published rule (32 bytes). A mismatch with the record a consumer holds voids the records.
     */
    RECORD_DIGEST(index: number): number | null;
    recordDigestLength(): number;
    recordDigestArray(): Uint8Array | null;
    /**
     * SHA-256 over the configuration and environment inputs the builder used that are not
     * in the source record (force-model configuration, space-weather data), by the builder's
     * published rule (32 bytes); empty when the builder uses none.
     */
    ENVIRONMENT_DIGEST(index: number): number | null;
    environmentDigestLength(): number;
    environmentDigestArray(): Uint8Array | null;
    /**
     * Build tolerance per position axis in km. NaN when not stated.
     */
    TOL_POSITION(): number;
    /**
     * Build tolerance per velocity axis in km/s. NaN when not stated or without velocity.
     */
    TOL_VELOCITY(): number;
    static startPPEBuild(builder: flatbuffers.Builder): void;
    static addBuilderName(builder: flatbuffers.Builder, BUILDER_NAMEOffset: flatbuffers.Offset): void;
    static addBuilderVersion(builder: flatbuffers.Builder, BUILDER_VERSIONOffset: flatbuffers.Offset): void;
    static addBuilderDigest(builder: flatbuffers.Builder, BUILDER_DIGESTOffset: flatbuffers.Offset): void;
    static createBuilderDigestVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startBuilderDigestVector(builder: flatbuffers.Builder, numElems: number): void;
    static addRecordDigest(builder: flatbuffers.Builder, RECORD_DIGESTOffset: flatbuffers.Offset): void;
    static createRecordDigestVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startRecordDigestVector(builder: flatbuffers.Builder, numElems: number): void;
    static addEnvironmentDigest(builder: flatbuffers.Builder, ENVIRONMENT_DIGESTOffset: flatbuffers.Offset): void;
    static createEnvironmentDigestVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startEnvironmentDigestVector(builder: flatbuffers.Builder, numElems: number): void;
    static addTolPosition(builder: flatbuffers.Builder, TOL_POSITION: number): void;
    static addTolVelocity(builder: flatbuffers.Builder, TOL_VELOCITY: number): void;
    static endPPEBuild(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createPPEBuild(builder: flatbuffers.Builder, BUILDER_NAMEOffset: flatbuffers.Offset, BUILDER_VERSIONOffset: flatbuffers.Offset, BUILDER_DIGESTOffset: flatbuffers.Offset, RECORD_DIGESTOffset: flatbuffers.Offset, ENVIRONMENT_DIGESTOffset: flatbuffers.Offset, TOL_POSITION: number, TOL_VELOCITY: number): flatbuffers.Offset;
    unpack(): PPEBuildT;
    unpackTo(_o: PPEBuildT): void;
}
export declare class PPEBuildT implements flatbuffers.IGeneratedObject {
    BUILDER_NAME: string | Uint8Array | null;
    BUILDER_VERSION: string | Uint8Array | null;
    BUILDER_DIGEST: (number)[];
    RECORD_DIGEST: (number)[];
    ENVIRONMENT_DIGEST: (number)[];
    TOL_POSITION: number;
    TOL_VELOCITY: number;
    constructor(BUILDER_NAME?: string | Uint8Array | null, BUILDER_VERSION?: string | Uint8Array | null, BUILDER_DIGEST?: (number)[], RECORD_DIGEST?: (number)[], ENVIRONMENT_DIGEST?: (number)[], TOL_POSITION?: number, TOL_VELOCITY?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=PPEBuild.d.ts.map