import * as flatbuffers from 'flatbuffers';
/**
 * A file a model was derived from.
 */
export declare class ERMProvenanceFile implements flatbuffers.IUnpackableObject<ERMProvenanceFileT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): ERMProvenanceFile;
    static getRootAsERMProvenanceFile(bb: flatbuffers.ByteBuffer, obj?: ERMProvenanceFile): ERMProvenanceFile;
    static getSizePrefixedRootAsERMProvenanceFile(bb: flatbuffers.ByteBuffer, obj?: ERMProvenanceFile): ERMProvenanceFile;
    NAME(): string | null;
    NAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    SHA256(): string | null;
    SHA256(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    static startERMProvenanceFile(builder: flatbuffers.Builder): void;
    static addName(builder: flatbuffers.Builder, NAMEOffset: flatbuffers.Offset): void;
    static addSha256(builder: flatbuffers.Builder, SHA256Offset: flatbuffers.Offset): void;
    static endERMProvenanceFile(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createERMProvenanceFile(builder: flatbuffers.Builder, NAMEOffset: flatbuffers.Offset, SHA256Offset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): ERMProvenanceFileT;
    unpackTo(_o: ERMProvenanceFileT): void;
}
export declare class ERMProvenanceFileT implements flatbuffers.IGeneratedObject {
    NAME: string | Uint8Array | null;
    SHA256: string | Uint8Array | null;
    constructor(NAME?: string | Uint8Array | null, SHA256?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=ERMProvenanceFile.d.ts.map