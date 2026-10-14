import * as flatbuffers from 'flatbuffers';
/**
 * One available orbital state of an object.
 */
export declare class XMTStateCandidate implements flatbuffers.IUnpackableObject<XMTStateCandidateT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): XMTStateCandidate;
    static getRootAsXMTStateCandidate(bb: flatbuffers.ByteBuffer, obj?: XMTStateCandidate): XMTStateCandidate;
    static getSizePrefixedRootAsXMTStateCandidate(bb: flatbuffers.ByteBuffer, obj?: XMTStateCandidate): XMTStateCandidate;
    OBJECT_KEY(): string | null;
    OBJECT_KEY(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Source that produced the state.
     */
    SOURCE_ID(): string | null;
    SOURCE_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Immutable reference to the state record.
     */
    RECORD_ID(): string | null;
    RECORD_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * State epoch, Unix milliseconds.
     */
    EPOCH_MS(): bigint;
    static startXMTStateCandidate(builder: flatbuffers.Builder): void;
    static addObjectKey(builder: flatbuffers.Builder, OBJECT_KEYOffset: flatbuffers.Offset): void;
    static addSourceId(builder: flatbuffers.Builder, SOURCE_IDOffset: flatbuffers.Offset): void;
    static addRecordId(builder: flatbuffers.Builder, RECORD_IDOffset: flatbuffers.Offset): void;
    static addEpochMs(builder: flatbuffers.Builder, EPOCH_MS: bigint): void;
    static endXMTStateCandidate(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createXMTStateCandidate(builder: flatbuffers.Builder, OBJECT_KEYOffset: flatbuffers.Offset, SOURCE_IDOffset: flatbuffers.Offset, RECORD_IDOffset: flatbuffers.Offset, EPOCH_MS: bigint): flatbuffers.Offset;
    unpack(): XMTStateCandidateT;
    unpackTo(_o: XMTStateCandidateT): void;
}
export declare class XMTStateCandidateT implements flatbuffers.IGeneratedObject {
    OBJECT_KEY: string | Uint8Array | null;
    SOURCE_ID: string | Uint8Array | null;
    RECORD_ID: string | Uint8Array | null;
    EPOCH_MS: bigint;
    constructor(OBJECT_KEY?: string | Uint8Array | null, SOURCE_ID?: string | Uint8Array | null, RECORD_ID?: string | Uint8Array | null, EPOCH_MS?: bigint);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=XMTStateCandidate.d.ts.map