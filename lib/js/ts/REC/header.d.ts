import * as flatbuffers from 'flatbuffers';
export declare class Header implements flatbuffers.IUnpackableObject<HeaderT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): Header;
    static getRootAsHeader(bb: flatbuffers.ByteBuffer, obj?: Header): Header;
    static getSizePrefixedRootAsHeader(bb: flatbuffers.ByteBuffer, obj?: Header): Header;
    /**
     * Format version in the form of 'x.y', where 'y' is incremented for minor changes, and 'x' for major changes.
     */
    ccsdsOcmVers(): string | null;
    ccsdsOcmVers(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Comments (a contiguous set of one or more comment lines may be provided immediately after the version number).
     */
    comment(index: number): string;
    comment(index: number, optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    commentLength(): number;
    /**
     * User-defined free-text message classification/caveats of this OCM.
     */
    classification(): string | null;
    classification(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * File creation date/time in UTC.
     */
    creationDate(): string | null;
    creationDate(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Creating agency or operator.
     */
    originator(): string | null;
    originator(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Free-text field containing an ID that uniquely identifies a message from this originator.
     */
    messageId(): string | null;
    messageId(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    static startHeader(builder: flatbuffers.Builder): void;
    static addCcsdsOcmVers(builder: flatbuffers.Builder, ccsdsOcmVersOffset: flatbuffers.Offset): void;
    static addComment(builder: flatbuffers.Builder, commentOffset: flatbuffers.Offset): void;
    static createCommentVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startCommentVector(builder: flatbuffers.Builder, numElems: number): void;
    static addClassification(builder: flatbuffers.Builder, classificationOffset: flatbuffers.Offset): void;
    static addCreationDate(builder: flatbuffers.Builder, creationDateOffset: flatbuffers.Offset): void;
    static addOriginator(builder: flatbuffers.Builder, originatorOffset: flatbuffers.Offset): void;
    static addMessageId(builder: flatbuffers.Builder, messageIdOffset: flatbuffers.Offset): void;
    static endHeader(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createHeader(builder: flatbuffers.Builder, ccsdsOcmVersOffset: flatbuffers.Offset, commentOffset: flatbuffers.Offset, classificationOffset: flatbuffers.Offset, creationDateOffset: flatbuffers.Offset, originatorOffset: flatbuffers.Offset, messageIdOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): HeaderT;
    unpackTo(_o: HeaderT): void;
}
export declare class HeaderT implements flatbuffers.IGeneratedObject {
    ccsdsOcmVers: string | Uint8Array | null;
    comment: (string)[];
    classification: string | Uint8Array | null;
    creationDate: string | Uint8Array | null;
    originator: string | Uint8Array | null;
    messageId: string | Uint8Array | null;
    constructor(ccsdsOcmVers?: string | Uint8Array | null, comment?: (string)[], classification?: string | Uint8Array | null, creationDate?: string | Uint8Array | null, originator?: string | Uint8Array | null, messageId?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=header.d.ts.map