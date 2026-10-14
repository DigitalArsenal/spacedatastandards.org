import * as flatbuffers from 'flatbuffers';
import { xmtRecordKind } from './xmtRecordKind.js';
/**
 * Content identifiers of one record.
 */
export declare class XMTRecordRef implements flatbuffers.IUnpackableObject<XMTRecordRefT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): XMTRecordRef;
    static getRootAsXMTRecordRef(bb: flatbuffers.ByteBuffer, obj?: XMTRecordRef): XMTRecordRef;
    static getSizePrefixedRootAsXMTRecordRef(bb: flatbuffers.ByteBuffer, obj?: XMTRecordRef): XMTRecordRef;
    KIND(): xmtRecordKind;
    /**
     * SHA-256 hex digest of the record bytes as passed (size prefix included).
     */
    SHA256(): string | null;
    SHA256(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * CIDv1 (raw, sha2-256) of the same bytes.
     */
    CID(): string | null;
    CID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    static startXMTRecordRef(builder: flatbuffers.Builder): void;
    static addKind(builder: flatbuffers.Builder, KIND: xmtRecordKind): void;
    static addSha256(builder: flatbuffers.Builder, SHA256Offset: flatbuffers.Offset): void;
    static addCid(builder: flatbuffers.Builder, CIDOffset: flatbuffers.Offset): void;
    static endXMTRecordRef(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createXMTRecordRef(builder: flatbuffers.Builder, KIND: xmtRecordKind, SHA256Offset: flatbuffers.Offset, CIDOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): XMTRecordRefT;
    unpackTo(_o: XMTRecordRefT): void;
}
export declare class XMTRecordRefT implements flatbuffers.IGeneratedObject {
    KIND: xmtRecordKind;
    SHA256: string | Uint8Array | null;
    CID: string | Uint8Array | null;
    constructor(KIND?: xmtRecordKind, SHA256?: string | Uint8Array | null, CID?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=XMTRecordRef.d.ts.map