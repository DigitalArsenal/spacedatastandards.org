import * as flatbuffers from 'flatbuffers';
/**
 * An update the node has accepted and not yet acted on.
 */
export declare class USTPendingUpdate implements flatbuffers.IUnpackableObject<USTPendingUpdateT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): USTPendingUpdate;
    static getRootAsUSTPendingUpdate(bb: flatbuffers.ByteBuffer, obj?: USTPendingUpdate): USTPendingUpdate;
    static getSizePrefixedRootAsUSTPendingUpdate(bb: flatbuffers.ByteBuffer, obj?: USTPendingUpdate): USTPendingUpdate;
    /**
     * Release update identifier the signal carried.
     */
    UPDATE_ID(): string | null;
    UPDATE_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Version the update installs.
     */
    VERSION(): string | null;
    VERSION(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Sequence number of the update signal.
     */
    SEQUENCE(): bigint;
    /**
     * When the node will act on it (RFC 3339, UTC).
     */
    DUE_AT(): string | null;
    DUE_AT(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    static startUSTPendingUpdate(builder: flatbuffers.Builder): void;
    static addUpdateId(builder: flatbuffers.Builder, UPDATE_IDOffset: flatbuffers.Offset): void;
    static addVersion(builder: flatbuffers.Builder, VERSIONOffset: flatbuffers.Offset): void;
    static addSequence(builder: flatbuffers.Builder, SEQUENCE: bigint): void;
    static addDueAt(builder: flatbuffers.Builder, DUE_ATOffset: flatbuffers.Offset): void;
    static endUSTPendingUpdate(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createUSTPendingUpdate(builder: flatbuffers.Builder, UPDATE_IDOffset: flatbuffers.Offset, VERSIONOffset: flatbuffers.Offset, SEQUENCE: bigint, DUE_ATOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): USTPendingUpdateT;
    unpackTo(_o: USTPendingUpdateT): void;
}
export declare class USTPendingUpdateT implements flatbuffers.IGeneratedObject {
    UPDATE_ID: string | Uint8Array | null;
    VERSION: string | Uint8Array | null;
    SEQUENCE: bigint;
    DUE_AT: string | Uint8Array | null;
    constructor(UPDATE_ID?: string | Uint8Array | null, VERSION?: string | Uint8Array | null, SEQUENCE?: bigint, DUE_AT?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=USTPendingUpdate.d.ts.map