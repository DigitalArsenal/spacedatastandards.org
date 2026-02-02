import * as flatbuffers from 'flatbuffers';
/**
 * Orbit Manifold
 */
export declare class MNF implements flatbuffers.IUnpackableObject<MNFT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): MNF;
    static getRootAsMNF(bb: flatbuffers.ByteBuffer, obj?: MNF): MNF;
    static getSizePrefixedRootAsMNF(bb: flatbuffers.ByteBuffer, obj?: MNF): MNF;
    static bufferHasIdentifier(bb: flatbuffers.ByteBuffer): boolean;
    ID(): string | null;
    ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    STATUS(): string | null;
    STATUS(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    WEIGHT(): number;
    DELTA_V(): number;
    DELTA_T(): number;
    static startMNF(builder: flatbuffers.Builder): void;
    static addId(builder: flatbuffers.Builder, IDOffset: flatbuffers.Offset): void;
    static addStatus(builder: flatbuffers.Builder, STATUSOffset: flatbuffers.Offset): void;
    static addWeight(builder: flatbuffers.Builder, WEIGHT: number): void;
    static addDeltaV(builder: flatbuffers.Builder, DELTA_V: number): void;
    static addDeltaT(builder: flatbuffers.Builder, DELTA_T: number): void;
    static endMNF(builder: flatbuffers.Builder): flatbuffers.Offset;
    static finishMNFBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static finishSizePrefixedMNFBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static createMNF(builder: flatbuffers.Builder, IDOffset: flatbuffers.Offset, STATUSOffset: flatbuffers.Offset, WEIGHT: number, DELTA_V: number, DELTA_T: number): flatbuffers.Offset;
    unpack(): MNFT;
    unpackTo(_o: MNFT): void;
}
export declare class MNFT implements flatbuffers.IGeneratedObject {
    ID: string | Uint8Array | null;
    STATUS: string | Uint8Array | null;
    WEIGHT: number;
    DELTA_V: number;
    DELTA_T: number;
    constructor(ID?: string | Uint8Array | null, STATUS?: string | Uint8Array | null, WEIGHT?: number, DELTA_V?: number, DELTA_T?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=MNF.d.ts.map