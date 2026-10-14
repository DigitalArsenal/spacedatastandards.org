import * as flatbuffers from 'flatbuffers';
/**
 * A window the provider refused.
 */
export declare class PRWWindowRefusal implements flatbuffers.IUnpackableObject<PRWWindowRefusalT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): PRWWindowRefusal;
    static getRootAsPRWWindowRefusal(bb: flatbuffers.ByteBuffer, obj?: PRWWindowRefusal): PRWWindowRefusal;
    static getSizePrefixedRootAsPRWWindowRefusal(bb: flatbuffers.ByteBuffer, obj?: PRWWindowRefusal): PRWWindowRefusal;
    /**
     * The query's SEQUENCE.
     */
    SEQUENCE(): number;
    /**
     * The query's SET_INDEX.
     */
    SET_INDEX(): number;
    /**
     * Reason code, e.g. "set-out-of-range", "mean-element-theory-not-sgp4:X",
     * "invalid-span", "span-too-long", "sgp4-propagate".
     */
    REASON(): string | null;
    REASON(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    static startPRWWindowRefusal(builder: flatbuffers.Builder): void;
    static addSequence(builder: flatbuffers.Builder, SEQUENCE: number): void;
    static addSetIndex(builder: flatbuffers.Builder, SET_INDEX: number): void;
    static addReason(builder: flatbuffers.Builder, REASONOffset: flatbuffers.Offset): void;
    static endPRWWindowRefusal(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createPRWWindowRefusal(builder: flatbuffers.Builder, SEQUENCE: number, SET_INDEX: number, REASONOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): PRWWindowRefusalT;
    unpackTo(_o: PRWWindowRefusalT): void;
}
export declare class PRWWindowRefusalT implements flatbuffers.IGeneratedObject {
    SEQUENCE: number;
    SET_INDEX: number;
    REASON: string | Uint8Array | null;
    constructor(SEQUENCE?: number, SET_INDEX?: number, REASON?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=PRWWindowRefusal.d.ts.map