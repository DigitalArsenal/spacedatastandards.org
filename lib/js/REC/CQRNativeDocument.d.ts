import * as flatbuffers from 'flatbuffers';
import { cqrDocumentSyntax } from './cqrDocumentSyntax.js';
/**
 * Typed replacement of a bare raw-text port. Content is UTF-8 with no BOM;
 * XML declaration, if present, must agree. Content must be nonempty CDM KVN
 * or CDM XML matching SERIALIZATION; reject UNSPECIFIED and other documents.
 * Not an arbitrary JSON container.
 */
export declare class CQRNativeDocument implements flatbuffers.IUnpackableObject<CQRNativeDocumentT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): CQRNativeDocument;
    static getRootAsCQRNativeDocument(bb: flatbuffers.ByteBuffer, obj?: CQRNativeDocument): CQRNativeDocument;
    static getSizePrefixedRootAsCQRNativeDocument(bb: flatbuffers.ByteBuffer, obj?: CQRNativeDocument): CQRNativeDocument;
    SERIALIZATION(): cqrDocumentSyntax;
    CONTENT(index: number): number | null;
    contentLength(): number;
    contentArray(): Uint8Array;
    static startCQRNativeDocument(builder: flatbuffers.Builder): void;
    static addSerialization(builder: flatbuffers.Builder, SERIALIZATION: cqrDocumentSyntax): void;
    static addContent(builder: flatbuffers.Builder, CONTENTOffset: flatbuffers.Offset): void;
    static createContentVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startContentVector(builder: flatbuffers.Builder, numElems: number): void;
    static endCQRNativeDocument(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createCQRNativeDocument(builder: flatbuffers.Builder, SERIALIZATION: cqrDocumentSyntax, CONTENTOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): CQRNativeDocumentT;
    unpackTo(_o: CQRNativeDocumentT): void;
}
export declare class CQRNativeDocumentT implements flatbuffers.IGeneratedObject {
    SERIALIZATION: cqrDocumentSyntax;
    CONTENT: (number)[];
    constructor(SERIALIZATION?: cqrDocumentSyntax, CONTENT?: (number)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=CQRNativeDocument.d.ts.map