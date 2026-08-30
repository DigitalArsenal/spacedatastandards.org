import * as flatbuffers from 'flatbuffers';
/**
 * Build artifact emitted by the plugin toolchain.
 */
export declare class PLGBuildArtifact implements flatbuffers.IUnpackableObject<PLGBuildArtifactT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): PLGBuildArtifact;
    static getRootAsPLGBuildArtifact(bb: flatbuffers.ByteBuffer, obj?: PLGBuildArtifact): PLGBuildArtifact;
    static getSizePrefixedRootAsPLGBuildArtifact(bb: flatbuffers.ByteBuffer, obj?: PLGBuildArtifact): PLGBuildArtifact;
    ARTIFACT_ID(): string;
    ARTIFACT_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    KIND(): string | null;
    KIND(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    PATH(): string;
    PATH(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    TARGET(): string | null;
    TARGET(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    ENTRY_SYMBOL(): string | null;
    ENTRY_SYMBOL(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    static startPLGBuildArtifact(builder: flatbuffers.Builder): void;
    static addArtifactId(builder: flatbuffers.Builder, ARTIFACT_IDOffset: flatbuffers.Offset): void;
    static addKind(builder: flatbuffers.Builder, KINDOffset: flatbuffers.Offset): void;
    static addPath(builder: flatbuffers.Builder, PATHOffset: flatbuffers.Offset): void;
    static addTarget(builder: flatbuffers.Builder, TARGETOffset: flatbuffers.Offset): void;
    static addEntrySymbol(builder: flatbuffers.Builder, ENTRY_SYMBOLOffset: flatbuffers.Offset): void;
    static endPLGBuildArtifact(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createPLGBuildArtifact(builder: flatbuffers.Builder, ARTIFACT_IDOffset: flatbuffers.Offset, KINDOffset: flatbuffers.Offset, PATHOffset: flatbuffers.Offset, TARGETOffset: flatbuffers.Offset, ENTRY_SYMBOLOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): PLGBuildArtifactT;
    unpackTo(_o: PLGBuildArtifactT): void;
}
export declare class PLGBuildArtifactT implements flatbuffers.IGeneratedObject {
    ARTIFACT_ID: string | Uint8Array | null;
    KIND: string | Uint8Array | null;
    PATH: string | Uint8Array | null;
    TARGET: string | Uint8Array | null;
    ENTRY_SYMBOL: string | Uint8Array | null;
    constructor(ARTIFACT_ID?: string | Uint8Array | null, KIND?: string | Uint8Array | null, PATH?: string | Uint8Array | null, TARGET?: string | Uint8Array | null, ENTRY_SYMBOL?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=PLGBuildArtifact.d.ts.map