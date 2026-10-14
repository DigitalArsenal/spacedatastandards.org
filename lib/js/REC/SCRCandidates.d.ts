import * as flatbuffers from 'flatbuffers';
import { SCRCandidatePair, SCRCandidatePairT } from './SCRCandidatePair.js';
/**
 * Candidates of a block or a screen, ordered by step then pair.
 */
export declare class SCRCandidates implements flatbuffers.IUnpackableObject<SCRCandidatesT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): SCRCandidates;
    static getRootAsSCRCandidates(bb: flatbuffers.ByteBuffer, obj?: SCRCandidates): SCRCandidates;
    static getSizePrefixedRootAsSCRCandidates(bb: flatbuffers.ByteBuffer, obj?: SCRCandidates): SCRCandidates;
    PAIRS(index: number, obj?: SCRCandidatePair): SCRCandidatePair | null;
    pairsLength(): number;
    static startSCRCandidates(builder: flatbuffers.Builder): void;
    static addPairs(builder: flatbuffers.Builder, PAIRSOffset: flatbuffers.Offset): void;
    static startPairsVector(builder: flatbuffers.Builder, numElems: number): void;
    static endSCRCandidates(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createSCRCandidates(builder: flatbuffers.Builder, PAIRSOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): SCRCandidatesT;
    unpackTo(_o: SCRCandidatesT): void;
}
export declare class SCRCandidatesT implements flatbuffers.IGeneratedObject {
    PAIRS: (SCRCandidatePairT)[];
    constructor(PAIRS?: (SCRCandidatePairT)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=SCRCandidates.d.ts.map