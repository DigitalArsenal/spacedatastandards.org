import * as flatbuffers from 'flatbuffers';
/**
 * Same identity/hash rules as BodyRecordRef, docs/clg-contract.md section 2.
 */
export declare class CLGRecordRef implements flatbuffers.IUnpackableObject<CLGRecordRefT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): CLGRecordRef;
    static getRootAsCLGRecordRef(bb: flatbuffers.ByteBuffer, obj?: CLGRecordRef): CLGRecordRef;
    static getSizePrefixedRootAsCLGRecordRef(bb: flatbuffers.ByteBuffer, obj?: CLGRecordRef): CLGRecordRef;
    STANDARD(): string;
    STANDARD(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    RECORD_ID(): string;
    RECORD_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    SHA256(): string;
    SHA256(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    URI(): string | null;
    URI(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    static startCLGRecordRef(builder: flatbuffers.Builder): void;
    static addStandard(builder: flatbuffers.Builder, STANDARDOffset: flatbuffers.Offset): void;
    static addRecordId(builder: flatbuffers.Builder, RECORD_IDOffset: flatbuffers.Offset): void;
    static addSha256(builder: flatbuffers.Builder, SHA256Offset: flatbuffers.Offset): void;
    static addUri(builder: flatbuffers.Builder, URIOffset: flatbuffers.Offset): void;
    static endCLGRecordRef(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createCLGRecordRef(builder: flatbuffers.Builder, STANDARDOffset: flatbuffers.Offset, RECORD_IDOffset: flatbuffers.Offset, SHA256Offset: flatbuffers.Offset, URIOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): CLGRecordRefT;
    unpackTo(_o: CLGRecordRefT): void;
}
export declare class CLGRecordRefT implements flatbuffers.IGeneratedObject {
    STANDARD: string | Uint8Array | null;
    RECORD_ID: string | Uint8Array | null;
    SHA256: string | Uint8Array | null;
    URI: string | Uint8Array | null;
    constructor(STANDARD?: string | Uint8Array | null, RECORD_ID?: string | Uint8Array | null, SHA256?: string | Uint8Array | null, URI?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=CLGRecordRef.d.ts.map