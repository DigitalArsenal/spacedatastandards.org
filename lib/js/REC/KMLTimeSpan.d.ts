import * as flatbuffers from 'flatbuffers';
/**
 * TimeSpan
 */
export declare class KMLTimeSpan implements flatbuffers.IUnpackableObject<KMLTimeSpanT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): KMLTimeSpan;
    static getRootAsKMLTimeSpan(bb: flatbuffers.ByteBuffer, obj?: KMLTimeSpan): KMLTimeSpan;
    static getSizePrefixedRootAsKMLTimeSpan(bb: flatbuffers.ByteBuffer, obj?: KMLTimeSpan): KMLTimeSpan;
    /**
     * Begin time (ISO 8601)
     */
    BEGIN(): string | null;
    BEGIN(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * End time (ISO 8601)
     */
    END(): string | null;
    END(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    static startKMLTimeSpan(builder: flatbuffers.Builder): void;
    static addBegin(builder: flatbuffers.Builder, BEGINOffset: flatbuffers.Offset): void;
    static addEnd(builder: flatbuffers.Builder, ENDOffset: flatbuffers.Offset): void;
    static endKMLTimeSpan(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createKMLTimeSpan(builder: flatbuffers.Builder, BEGINOffset: flatbuffers.Offset, ENDOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): KMLTimeSpanT;
    unpackTo(_o: KMLTimeSpanT): void;
}
export declare class KMLTimeSpanT implements flatbuffers.IGeneratedObject {
    BEGIN: string | Uint8Array | null;
    END: string | Uint8Array | null;
    constructor(BEGIN?: string | Uint8Array | null, END?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=KMLTimeSpan.d.ts.map