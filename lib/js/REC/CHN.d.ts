import * as flatbuffers from 'flatbuffers';
/**
 * Communications Channel
 */
export declare class CHN implements flatbuffers.IUnpackableObject<CHNT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): CHN;
    static getRootAsCHN(bb: flatbuffers.ByteBuffer, obj?: CHN): CHN;
    static getSizePrefixedRootAsCHN(bb: flatbuffers.ByteBuffer, obj?: CHN): CHN;
    static bufferHasIdentifier(bb: flatbuffers.ByteBuffer): boolean;
    ID(): string | null;
    ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    NAME(): string | null;
    NAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    TYPE(): string | null;
    TYPE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    BEAM_NAME(): string | null;
    BEAM_NAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    ID_RFBAND(): string | null;
    ID_RFBAND(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    ENCRYPTION(): string | null;
    ENCRYPTION(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    PKG(): string | null;
    PKG(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    RES(): string | null;
    RES(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    COMPRESSION(): string | null;
    COMPRESSION(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    VPID(): string | null;
    VPID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    APID(): string | null;
    APID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    SID(): string | null;
    SID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    OWNER(): string | null;
    OWNER(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    static startCHN(builder: flatbuffers.Builder): void;
    static addId(builder: flatbuffers.Builder, IDOffset: flatbuffers.Offset): void;
    static addName(builder: flatbuffers.Builder, NAMEOffset: flatbuffers.Offset): void;
    static addType(builder: flatbuffers.Builder, TYPEOffset: flatbuffers.Offset): void;
    static addBeamName(builder: flatbuffers.Builder, BEAM_NAMEOffset: flatbuffers.Offset): void;
    static addIdRfband(builder: flatbuffers.Builder, ID_RFBANDOffset: flatbuffers.Offset): void;
    static addEncryption(builder: flatbuffers.Builder, ENCRYPTIONOffset: flatbuffers.Offset): void;
    static addPkg(builder: flatbuffers.Builder, PKGOffset: flatbuffers.Offset): void;
    static addRes(builder: flatbuffers.Builder, RESOffset: flatbuffers.Offset): void;
    static addCompression(builder: flatbuffers.Builder, COMPRESSIONOffset: flatbuffers.Offset): void;
    static addVpid(builder: flatbuffers.Builder, VPIDOffset: flatbuffers.Offset): void;
    static addApid(builder: flatbuffers.Builder, APIDOffset: flatbuffers.Offset): void;
    static addSid(builder: flatbuffers.Builder, SIDOffset: flatbuffers.Offset): void;
    static addOwner(builder: flatbuffers.Builder, OWNEROffset: flatbuffers.Offset): void;
    static endCHN(builder: flatbuffers.Builder): flatbuffers.Offset;
    static finishCHNBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static finishSizePrefixedCHNBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static createCHN(builder: flatbuffers.Builder, IDOffset: flatbuffers.Offset, NAMEOffset: flatbuffers.Offset, TYPEOffset: flatbuffers.Offset, BEAM_NAMEOffset: flatbuffers.Offset, ID_RFBANDOffset: flatbuffers.Offset, ENCRYPTIONOffset: flatbuffers.Offset, PKGOffset: flatbuffers.Offset, RESOffset: flatbuffers.Offset, COMPRESSIONOffset: flatbuffers.Offset, VPIDOffset: flatbuffers.Offset, APIDOffset: flatbuffers.Offset, SIDOffset: flatbuffers.Offset, OWNEROffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): CHNT;
    unpackTo(_o: CHNT): void;
}
export declare class CHNT implements flatbuffers.IGeneratedObject {
    ID: string | Uint8Array | null;
    NAME: string | Uint8Array | null;
    TYPE: string | Uint8Array | null;
    BEAM_NAME: string | Uint8Array | null;
    ID_RFBAND: string | Uint8Array | null;
    ENCRYPTION: string | Uint8Array | null;
    PKG: string | Uint8Array | null;
    RES: string | Uint8Array | null;
    COMPRESSION: string | Uint8Array | null;
    VPID: string | Uint8Array | null;
    APID: string | Uint8Array | null;
    SID: string | Uint8Array | null;
    OWNER: string | Uint8Array | null;
    constructor(ID?: string | Uint8Array | null, NAME?: string | Uint8Array | null, TYPE?: string | Uint8Array | null, BEAM_NAME?: string | Uint8Array | null, ID_RFBAND?: string | Uint8Array | null, ENCRYPTION?: string | Uint8Array | null, PKG?: string | Uint8Array | null, RES?: string | Uint8Array | null, COMPRESSION?: string | Uint8Array | null, VPID?: string | Uint8Array | null, APID?: string | Uint8Array | null, SID?: string | Uint8Array | null, OWNER?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=CHN.d.ts.map