import * as flatbuffers from 'flatbuffers';
/**
 * A refused element set.
 */
export declare class dclRefusal implements flatbuffers.IUnpackableObject<dclRefusalT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): dclRefusal;
    static getRootAsdclRefusal(bb: flatbuffers.ByteBuffer, obj?: dclRefusal): dclRefusal;
    static getSizePrefixedRootAsdclRefusal(bb: flatbuffers.ByteBuffer, obj?: dclRefusal): dclRefusal;
    /**
     * Index of the set in ELEMENT_SETS.
     */
    INDEX(): number;
    /**
     * Why, e.g. "deep-space", "sgp4-init", "mean-motion-or-eccentricity".
     */
    REASON(): string | null;
    REASON(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    static startdclRefusal(builder: flatbuffers.Builder): void;
    static addIndex(builder: flatbuffers.Builder, INDEX: number): void;
    static addReason(builder: flatbuffers.Builder, REASONOffset: flatbuffers.Offset): void;
    static enddclRefusal(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createdclRefusal(builder: flatbuffers.Builder, INDEX: number, REASONOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): dclRefusalT;
    unpackTo(_o: dclRefusalT): void;
}
export declare class dclRefusalT implements flatbuffers.IGeneratedObject {
    INDEX: number;
    REASON: string | Uint8Array | null;
    constructor(INDEX?: number, REASON?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=dclRefusal.d.ts.map