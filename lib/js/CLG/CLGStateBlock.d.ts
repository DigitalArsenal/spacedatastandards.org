import * as flatbuffers from 'flatbuffers';
import { CLGPoseSegment, CLGPoseSegmentT } from './CLGPoseSegment.js';
export declare class CLGStateBlock implements flatbuffers.IUnpackableObject<CLGStateBlockT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): CLGStateBlock;
    static getRootAsCLGStateBlock(bb: flatbuffers.ByteBuffer, obj?: CLGStateBlock): CLGStateBlock;
    static getSizePrefixedRootAsCLGStateBlock(bb: flatbuffers.ByteBuffer, obj?: CLGStateBlock): CLGStateBlock;
    SEQUENCE(): number;
    SEGMENTS(index: number, obj?: CLGPoseSegment): CLGPoseSegment | null;
    segmentsLength(): number;
    FINAL_BLOCK(): boolean;
    /**
     * Value presence: false means omitted; true precedes value validation.
     */
    HAS_SEQUENCE(): boolean;
    HAS_FINAL_BLOCK(): boolean;
    static startCLGStateBlock(builder: flatbuffers.Builder): void;
    static addSequence(builder: flatbuffers.Builder, SEQUENCE: number): void;
    static addSegments(builder: flatbuffers.Builder, SEGMENTSOffset: flatbuffers.Offset): void;
    static createSegmentsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startSegmentsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addFinalBlock(builder: flatbuffers.Builder, FINAL_BLOCK: boolean): void;
    static addHasSequence(builder: flatbuffers.Builder, HAS_SEQUENCE: boolean): void;
    static addHasFinalBlock(builder: flatbuffers.Builder, HAS_FINAL_BLOCK: boolean): void;
    static endCLGStateBlock(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createCLGStateBlock(builder: flatbuffers.Builder, SEQUENCE: number, SEGMENTSOffset: flatbuffers.Offset, FINAL_BLOCK: boolean, HAS_SEQUENCE: boolean, HAS_FINAL_BLOCK: boolean): flatbuffers.Offset;
    unpack(): CLGStateBlockT;
    unpackTo(_o: CLGStateBlockT): void;
}
export declare class CLGStateBlockT implements flatbuffers.IGeneratedObject {
    SEQUENCE: number;
    SEGMENTS: (CLGPoseSegmentT)[];
    FINAL_BLOCK: boolean;
    HAS_SEQUENCE: boolean;
    HAS_FINAL_BLOCK: boolean;
    constructor(SEQUENCE?: number, SEGMENTS?: (CLGPoseSegmentT)[], FINAL_BLOCK?: boolean, HAS_SEQUENCE?: boolean, HAS_FINAL_BLOCK?: boolean);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=CLGStateBlock.d.ts.map