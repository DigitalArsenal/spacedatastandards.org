import * as flatbuffers from 'flatbuffers';
/**
 * Reentry Data Message
 */
export declare class RDM implements flatbuffers.IUnpackableObject<RDMT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): RDM;
    static getRootAsRDM(bb: flatbuffers.ByteBuffer, obj?: RDM): RDM;
    static getSizePrefixedRootAsRDM(bb: flatbuffers.ByteBuffer, obj?: RDM): RDM;
    static bufferHasIdentifier(bb: flatbuffers.ByteBuffer): boolean;
    CCSDS_RDM_VERS(): string | null;
    CCSDS_RDM_VERS(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    CREATION_DATE(): string | null;
    CREATION_DATE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    ORIGINATOR(): string | null;
    ORIGINATOR(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    OBJECT_NAME(): string | null;
    OBJECT_NAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    OBJECT_ID(): string | null;
    OBJECT_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    REENTRY_EPOCH(): string | null;
    REENTRY_EPOCH(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    REENTRY_LATITUDE(): number;
    REENTRY_LONGITUDE(): number;
    static startRDM(builder: flatbuffers.Builder): void;
    static addCcsdsRdmVers(builder: flatbuffers.Builder, CCSDS_RDM_VERSOffset: flatbuffers.Offset): void;
    static addCreationDate(builder: flatbuffers.Builder, CREATION_DATEOffset: flatbuffers.Offset): void;
    static addOriginator(builder: flatbuffers.Builder, ORIGINATOROffset: flatbuffers.Offset): void;
    static addObjectName(builder: flatbuffers.Builder, OBJECT_NAMEOffset: flatbuffers.Offset): void;
    static addObjectId(builder: flatbuffers.Builder, OBJECT_IDOffset: flatbuffers.Offset): void;
    static addReentryEpoch(builder: flatbuffers.Builder, REENTRY_EPOCHOffset: flatbuffers.Offset): void;
    static addReentryLatitude(builder: flatbuffers.Builder, REENTRY_LATITUDE: number): void;
    static addReentryLongitude(builder: flatbuffers.Builder, REENTRY_LONGITUDE: number): void;
    static endRDM(builder: flatbuffers.Builder): flatbuffers.Offset;
    static finishRDMBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static finishSizePrefixedRDMBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static createRDM(builder: flatbuffers.Builder, CCSDS_RDM_VERSOffset: flatbuffers.Offset, CREATION_DATEOffset: flatbuffers.Offset, ORIGINATOROffset: flatbuffers.Offset, OBJECT_NAMEOffset: flatbuffers.Offset, OBJECT_IDOffset: flatbuffers.Offset, REENTRY_EPOCHOffset: flatbuffers.Offset, REENTRY_LATITUDE: number, REENTRY_LONGITUDE: number): flatbuffers.Offset;
    unpack(): RDMT;
    unpackTo(_o: RDMT): void;
}
export declare class RDMT implements flatbuffers.IGeneratedObject {
    CCSDS_RDM_VERS: string | Uint8Array | null;
    CREATION_DATE: string | Uint8Array | null;
    ORIGINATOR: string | Uint8Array | null;
    OBJECT_NAME: string | Uint8Array | null;
    OBJECT_ID: string | Uint8Array | null;
    REENTRY_EPOCH: string | Uint8Array | null;
    REENTRY_LATITUDE: number;
    REENTRY_LONGITUDE: number;
    constructor(CCSDS_RDM_VERS?: string | Uint8Array | null, CREATION_DATE?: string | Uint8Array | null, ORIGINATOR?: string | Uint8Array | null, OBJECT_NAME?: string | Uint8Array | null, OBJECT_ID?: string | Uint8Array | null, REENTRY_EPOCH?: string | Uint8Array | null, REENTRY_LATITUDE?: number, REENTRY_LONGITUDE?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=RDM.d.ts.map