import * as flatbuffers from 'flatbuffers';
/**
 * gx:Wait tour primitive
 */
export declare class KMLWait implements flatbuffers.IUnpackableObject<KMLWaitT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): KMLWait;
    static getRootAsKMLWait(bb: flatbuffers.ByteBuffer, obj?: KMLWait): KMLWait;
    static getSizePrefixedRootAsKMLWait(bb: flatbuffers.ByteBuffer, obj?: KMLWait): KMLWait;
    /**
     * Duration in seconds
     */
    DURATION(): number;
    static startKMLWait(builder: flatbuffers.Builder): void;
    static addDuration(builder: flatbuffers.Builder, DURATION: number): void;
    static endKMLWait(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createKMLWait(builder: flatbuffers.Builder, DURATION: number): flatbuffers.Offset;
    unpack(): KMLWaitT;
    unpackTo(_o: KMLWaitT): void;
}
export declare class KMLWaitT implements flatbuffers.IGeneratedObject {
    DURATION: number;
    constructor(DURATION?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=KMLWait.d.ts.map