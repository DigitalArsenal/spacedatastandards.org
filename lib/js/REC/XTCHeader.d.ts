import * as flatbuffers from 'flatbuffers';
/**
 * Document header information
 */
export declare class XTCHeader implements flatbuffers.IUnpackableObject<XTCHeaderT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): XTCHeader;
    static getRootAsXTCHeader(bb: flatbuffers.ByteBuffer, obj?: XTCHeader): XTCHeader;
    static getSizePrefixedRootAsXTCHeader(bb: flatbuffers.ByteBuffer, obj?: XTCHeader): XTCHeader;
    /**
     * Version of this XTCE document
     */
    VERSION(): string | null;
    VERSION(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Date of document creation (ISO 8601)
     */
    DATE(): string | null;
    DATE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Classification level
     */
    CLASSIFICATION(): string | null;
    CLASSIFICATION(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Validation status
     */
    VALIDATION_STATUS(): string | null;
    VALIDATION_STATUS(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Author information
     */
    AUTHOR(): string | null;
    AUTHOR(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Notes/comments
     */
    NOTES(index: number): string;
    NOTES(index: number, optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    notesLength(): number;
    static startXTCHeader(builder: flatbuffers.Builder): void;
    static addVersion(builder: flatbuffers.Builder, VERSIONOffset: flatbuffers.Offset): void;
    static addDate(builder: flatbuffers.Builder, DATEOffset: flatbuffers.Offset): void;
    static addClassification(builder: flatbuffers.Builder, CLASSIFICATIONOffset: flatbuffers.Offset): void;
    static addValidationStatus(builder: flatbuffers.Builder, VALIDATION_STATUSOffset: flatbuffers.Offset): void;
    static addAuthor(builder: flatbuffers.Builder, AUTHOROffset: flatbuffers.Offset): void;
    static addNotes(builder: flatbuffers.Builder, NOTESOffset: flatbuffers.Offset): void;
    static createNotesVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startNotesVector(builder: flatbuffers.Builder, numElems: number): void;
    static endXTCHeader(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createXTCHeader(builder: flatbuffers.Builder, VERSIONOffset: flatbuffers.Offset, DATEOffset: flatbuffers.Offset, CLASSIFICATIONOffset: flatbuffers.Offset, VALIDATION_STATUSOffset: flatbuffers.Offset, AUTHOROffset: flatbuffers.Offset, NOTESOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): XTCHeaderT;
    unpackTo(_o: XTCHeaderT): void;
}
export declare class XTCHeaderT implements flatbuffers.IGeneratedObject {
    VERSION: string | Uint8Array | null;
    DATE: string | Uint8Array | null;
    CLASSIFICATION: string | Uint8Array | null;
    VALIDATION_STATUS: string | Uint8Array | null;
    AUTHOR: string | Uint8Array | null;
    NOTES: (string)[];
    constructor(VERSION?: string | Uint8Array | null, DATE?: string | Uint8Array | null, CLASSIFICATION?: string | Uint8Array | null, VALIDATION_STATUS?: string | Uint8Array | null, AUTHOR?: string | Uint8Array | null, NOTES?: (string)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=XTCHeader.d.ts.map