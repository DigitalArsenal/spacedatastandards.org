import * as flatbuffers from 'flatbuffers';
/**
 * A trajectory or state product taking part in a comparison.
 */
export declare class XMTTrajectory implements flatbuffers.IUnpackableObject<XMTTrajectoryT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): XMTTrajectory;
    static getRootAsXMTTrajectory(bb: flatbuffers.ByteBuffer, obj?: XMTTrajectory): XMTTrajectory;
    static getSizePrefixedRootAsXMTTrajectory(bb: flatbuffers.ByteBuffer, obj?: XMTTrajectory): XMTTrajectory;
    /**
     * Identifier of the trajectory within the request; distinct.
     */
    ID(): string | null;
    ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Provider namespace of the product, e.g. "vimpel", "space-track".
     */
    PROVIDER(): string | null;
    PROVIDER(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * The object's identifier in the provider's namespace.
     */
    NATIVE_ID(): string | null;
    NATIVE_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Immutable reference to the record the trajectory came from (CID or
     * SHA-256).
     */
    RECORD_ID(): string | null;
    RECORD_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    static startXMTTrajectory(builder: flatbuffers.Builder): void;
    static addId(builder: flatbuffers.Builder, IDOffset: flatbuffers.Offset): void;
    static addProvider(builder: flatbuffers.Builder, PROVIDEROffset: flatbuffers.Offset): void;
    static addNativeId(builder: flatbuffers.Builder, NATIVE_IDOffset: flatbuffers.Offset): void;
    static addRecordId(builder: flatbuffers.Builder, RECORD_IDOffset: flatbuffers.Offset): void;
    static endXMTTrajectory(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createXMTTrajectory(builder: flatbuffers.Builder, IDOffset: flatbuffers.Offset, PROVIDEROffset: flatbuffers.Offset, NATIVE_IDOffset: flatbuffers.Offset, RECORD_IDOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): XMTTrajectoryT;
    unpackTo(_o: XMTTrajectoryT): void;
}
export declare class XMTTrajectoryT implements flatbuffers.IGeneratedObject {
    ID: string | Uint8Array | null;
    PROVIDER: string | Uint8Array | null;
    NATIVE_ID: string | Uint8Array | null;
    RECORD_ID: string | Uint8Array | null;
    constructor(ID?: string | Uint8Array | null, PROVIDER?: string | Uint8Array | null, NATIVE_ID?: string | Uint8Array | null, RECORD_ID?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=XMTTrajectory.d.ts.map