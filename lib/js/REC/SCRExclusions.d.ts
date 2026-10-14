import * as flatbuffers from 'flatbuffers';
import { SCRExclusion, SCRExclusionT } from './SCRExclusion.js';
/**
 * Objects left out of a screen.
 */
export declare class SCRExclusions implements flatbuffers.IUnpackableObject<SCRExclusionsT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): SCRExclusions;
    static getRootAsSCRExclusions(bb: flatbuffers.ByteBuffer, obj?: SCRExclusions): SCRExclusions;
    static getSizePrefixedRootAsSCRExclusions(bb: flatbuffers.ByteBuffer, obj?: SCRExclusions): SCRExclusions;
    EXCLUSIONS(index: number, obj?: SCRExclusion): SCRExclusion | null;
    exclusionsLength(): number;
    static startSCRExclusions(builder: flatbuffers.Builder): void;
    static addExclusions(builder: flatbuffers.Builder, EXCLUSIONSOffset: flatbuffers.Offset): void;
    static createExclusionsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startExclusionsVector(builder: flatbuffers.Builder, numElems: number): void;
    static endSCRExclusions(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createSCRExclusions(builder: flatbuffers.Builder, EXCLUSIONSOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): SCRExclusionsT;
    unpackTo(_o: SCRExclusionsT): void;
}
export declare class SCRExclusionsT implements flatbuffers.IGeneratedObject {
    EXCLUSIONS: (SCRExclusionT)[];
    constructor(EXCLUSIONS?: (SCRExclusionT)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=SCRExclusions.d.ts.map