import * as flatbuffers from 'flatbuffers';
/**
 * Immutable reference. STANDARD matches REC.standard (e.g. "DTT", no "$"),
 * or "MODEL" for a manifest. SHA256 is 64 lowercase hexadecimal characters.
 * Hash exact standalone root bytes WITHOUT size prefix, WITH file identifier;
 * MODEL hashes exact supplied manifest bytes. Never hash a REC wrapper.
 * RECORD_ID is the selector specified in docs/clg-contract.md section 2; "root" selects
 * the complete root. URI is advisory and never fetched by a module.
 */
export declare class BodyRecordRef implements flatbuffers.IUnpackableObject<BodyRecordRefT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): BodyRecordRef;
    static getRootAsBodyRecordRef(bb: flatbuffers.ByteBuffer, obj?: BodyRecordRef): BodyRecordRef;
    static getSizePrefixedRootAsBodyRecordRef(bb: flatbuffers.ByteBuffer, obj?: BodyRecordRef): BodyRecordRef;
    STANDARD(): string;
    STANDARD(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    RECORD_ID(): string;
    RECORD_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    SHA256(): string;
    SHA256(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    URI(): string | null;
    URI(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    static startBodyRecordRef(builder: flatbuffers.Builder): void;
    static addStandard(builder: flatbuffers.Builder, STANDARDOffset: flatbuffers.Offset): void;
    static addRecordId(builder: flatbuffers.Builder, RECORD_IDOffset: flatbuffers.Offset): void;
    static addSha256(builder: flatbuffers.Builder, SHA256Offset: flatbuffers.Offset): void;
    static addUri(builder: flatbuffers.Builder, URIOffset: flatbuffers.Offset): void;
    static endBodyRecordRef(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createBodyRecordRef(builder: flatbuffers.Builder, STANDARDOffset: flatbuffers.Offset, RECORD_IDOffset: flatbuffers.Offset, SHA256Offset: flatbuffers.Offset, URIOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): BodyRecordRefT;
    unpackTo(_o: BodyRecordRefT): void;
}
export declare class BodyRecordRefT implements flatbuffers.IGeneratedObject {
    STANDARD: string | Uint8Array | null;
    RECORD_ID: string | Uint8Array | null;
    SHA256: string | Uint8Array | null;
    URI: string | Uint8Array | null;
    constructor(STANDARD?: string | Uint8Array | null, RECORD_ID?: string | Uint8Array | null, SHA256?: string | Uint8Array | null, URI?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=BodyRecordRef.d.ts.map