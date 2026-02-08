import * as flatbuffers from 'flatbuffers';
/**
 * TimeStamp
 */
export declare class KMLTimeStamp implements flatbuffers.IUnpackableObject<KMLTimeStampT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): KMLTimeStamp;
    static getRootAsKMLTimeStamp(bb: flatbuffers.ByteBuffer, obj?: KMLTimeStamp): KMLTimeStamp;
    static getSizePrefixedRootAsKMLTimeStamp(bb: flatbuffers.ByteBuffer, obj?: KMLTimeStamp): KMLTimeStamp;
    /**
     * Time (ISO 8601)
     */
    WHEN(): string | null;
    WHEN(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    static startKMLTimeStamp(builder: flatbuffers.Builder): void;
    static addWhen(builder: flatbuffers.Builder, WHENOffset: flatbuffers.Offset): void;
    static endKMLTimeStamp(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createKMLTimeStamp(builder: flatbuffers.Builder, WHENOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): KMLTimeStampT;
    unpackTo(_o: KMLTimeStampT): void;
}
export declare class KMLTimeStampT implements flatbuffers.IGeneratedObject {
    WHEN: string | Uint8Array | null;
    constructor(WHEN?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=KMLTimeStamp.d.ts.map