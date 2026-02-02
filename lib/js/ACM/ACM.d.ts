import * as flatbuffers from 'flatbuffers';
/**
 * Attitude Comprehensive Message
 */
export declare class ACM implements flatbuffers.IUnpackableObject<ACMT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): ACM;
    static getRootAsACM(bb: flatbuffers.ByteBuffer, obj?: ACM): ACM;
    static getSizePrefixedRootAsACM(bb: flatbuffers.ByteBuffer, obj?: ACM): ACM;
    static bufferHasIdentifier(bb: flatbuffers.ByteBuffer): boolean;
    CCSDS_ACM_VERS(): string | null;
    CCSDS_ACM_VERS(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    CREATION_DATE(): string | null;
    CREATION_DATE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    ORIGINATOR(): string | null;
    ORIGINATOR(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    OBJECT_NAME(): string | null;
    OBJECT_NAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    OBJECT_ID(): string | null;
    OBJECT_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    static startACM(builder: flatbuffers.Builder): void;
    static addCcsdsAcmVers(builder: flatbuffers.Builder, CCSDS_ACM_VERSOffset: flatbuffers.Offset): void;
    static addCreationDate(builder: flatbuffers.Builder, CREATION_DATEOffset: flatbuffers.Offset): void;
    static addOriginator(builder: flatbuffers.Builder, ORIGINATOROffset: flatbuffers.Offset): void;
    static addObjectName(builder: flatbuffers.Builder, OBJECT_NAMEOffset: flatbuffers.Offset): void;
    static addObjectId(builder: flatbuffers.Builder, OBJECT_IDOffset: flatbuffers.Offset): void;
    static endACM(builder: flatbuffers.Builder): flatbuffers.Offset;
    static finishACMBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static finishSizePrefixedACMBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static createACM(builder: flatbuffers.Builder, CCSDS_ACM_VERSOffset: flatbuffers.Offset, CREATION_DATEOffset: flatbuffers.Offset, ORIGINATOROffset: flatbuffers.Offset, OBJECT_NAMEOffset: flatbuffers.Offset, OBJECT_IDOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): ACMT;
    unpackTo(_o: ACMT): void;
}
export declare class ACMT implements flatbuffers.IGeneratedObject {
    CCSDS_ACM_VERS: string | Uint8Array | null;
    CREATION_DATE: string | Uint8Array | null;
    ORIGINATOR: string | Uint8Array | null;
    OBJECT_NAME: string | Uint8Array | null;
    OBJECT_ID: string | Uint8Array | null;
    constructor(CCSDS_ACM_VERS?: string | Uint8Array | null, CREATION_DATE?: string | Uint8Array | null, ORIGINATOR?: string | Uint8Array | null, OBJECT_NAME?: string | Uint8Array | null, OBJECT_ID?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=ACM.d.ts.map