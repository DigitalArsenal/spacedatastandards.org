import * as flatbuffers from 'flatbuffers';
/**
 * Count of records under one reason.
 */
export declare class XMTReasonCount implements flatbuffers.IUnpackableObject<XMTReasonCountT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): XMTReasonCount;
    static getRootAsXMTReasonCount(bb: flatbuffers.ByteBuffer, obj?: XMTReasonCount): XMTReasonCount;
    static getSizePrefixedRootAsXMTReasonCount(bb: flatbuffers.ByteBuffer, obj?: XMTReasonCount): XMTReasonCount;
    REASON(): string | null;
    REASON(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    COUNT(): number;
    static startXMTReasonCount(builder: flatbuffers.Builder): void;
    static addReason(builder: flatbuffers.Builder, REASONOffset: flatbuffers.Offset): void;
    static addCount(builder: flatbuffers.Builder, COUNT: number): void;
    static endXMTReasonCount(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createXMTReasonCount(builder: flatbuffers.Builder, REASONOffset: flatbuffers.Offset, COUNT: number): flatbuffers.Offset;
    unpack(): XMTReasonCountT;
    unpackTo(_o: XMTReasonCountT): void;
}
export declare class XMTReasonCountT implements flatbuffers.IGeneratedObject {
    REASON: string | Uint8Array | null;
    COUNT: number;
    constructor(REASON?: string | Uint8Array | null, COUNT?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=XMTReasonCount.d.ts.map