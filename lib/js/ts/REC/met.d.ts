import * as flatbuffers from 'flatbuffers';
import { meanElementTheory } from './mean-element-theory.js';
/**
 * Mean Element Theory
 */
export declare class MET implements flatbuffers.IUnpackableObject<METT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): MET;
    static getRootAsMET(bb: flatbuffers.ByteBuffer, obj?: MET): MET;
    static getSizePrefixedRootAsMET(bb: flatbuffers.ByteBuffer, obj?: MET): MET;
    static bufferHasIdentifier(bb: flatbuffers.ByteBuffer): boolean;
    meanElementTheory(): meanElementTheory;
    static startMET(builder: flatbuffers.Builder): void;
    static addMeanElementTheory(builder: flatbuffers.Builder, meanElementTheory: meanElementTheory): void;
    static endMET(builder: flatbuffers.Builder): flatbuffers.Offset;
    static finishMETBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static finishSizePrefixedMETBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static createMET(builder: flatbuffers.Builder, meanElementTheory: meanElementTheory): flatbuffers.Offset;
    unpack(): METT;
    unpackTo(_o: METT): void;
}
export declare class METT implements flatbuffers.IGeneratedObject {
    meanElementTheory: meanElementTheory;
    constructor(meanElementTheory?: meanElementTheory);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=met.d.ts.map