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
    CCSDS_OCM_VERS(): string | null;
    CCSDS_OCM_VERS(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Comments (a contiguous set of one or more comment lines may be provided immediately after the version number).
     */
    COMMENT(index: number): string;
    COMMENT(index: number, optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    commentLength(): number;
    /**
     * User-defined free-text message classification/caveats of this OCM.
     */
    CLASSIFICATION(): string | null;
    CLASSIFICATION(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * File creation date/time in UTC.
     */
    CREATION_DATE(): string | null;
    CREATION_DATE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Creating agency or operator.
     */
    ORIGINATOR(): string | null;
    ORIGINATOR(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Free-text field containing an ID that uniquely identifies a message from this originator.
     */
    MESSAGE_ID(): string | null;
    MESSAGE_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    static startHeader(builder: flatbuffers.Builder): void;
    static addCcsdsOcmVers(builder: flatbuffers.Builder, CCSDS_OCM_VERSOffset: flatbuffers.Offset): void;
    static addComment(builder: flatbuffers.Builder, COMMENTOffset: flatbuffers.Offset): void;
    static createCommentVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startCommentVector(builder: flatbuffers.Builder, numElems: number): void;
    static addClassification(builder: flatbuffers.Builder, CLASSIFICATIONOffset: flatbuffers.Offset): void;
    static addCreationDate(builder: flatbuffers.Builder, CREATION_DATEOffset: flatbuffers.Offset): void;
    static addOriginator(builder: flatbuffers.Builder, ORIGINATOROffset: flatbuffers.Offset): void;
    static addMessageId(builder: flatbuffers.Builder, MESSAGE_IDOffset: flatbuffers.Offset): void;
    static endHeader(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createHeader(builder: flatbuffers.Builder, CCSDS_OCM_VERSOffset: flatbuffers.Offset, COMMENTOffset: flatbuffers.Offset, CLASSIFICATIONOffset: flatbuffers.Offset, CREATION_DATEOffset: flatbuffers.Offset, ORIGINATOROffset: flatbuffers.Offset, MESSAGE_IDOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): HeaderT;
    unpackTo(_o: HeaderT): void;
}
export declare class HeaderT implements flatbuffers.IGeneratedObject {
    CCSDS_OCM_VERS: string | Uint8Array | null;
    COMMENT: (string)[];
    CLASSIFICATION: string | Uint8Array | null;
    CREATION_DATE: string | Uint8Array | null;
    ORIGINATOR: string | Uint8Array | null;
    MESSAGE_ID: string | Uint8Array | null;
    constructor(CCSDS_OCM_VERS?: string | Uint8Array | null, COMMENT?: (string)[], CLASSIFICATION?: string | Uint8Array | null, CREATION_DATE?: string | Uint8Array | null, ORIGINATOR?: string | Uint8Array | null, MESSAGE_ID?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=Header.d.ts.map