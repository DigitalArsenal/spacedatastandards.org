import * as flatbuffers from 'flatbuffers';
import { SpacecraftFrame } from './SpacecraftFrame.js';
export declare class SpacecraftFrameWrapper implements flatbuffers.IUnpackableObject<SpacecraftFrameWrapperT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): SpacecraftFrameWrapper;
    static getRootAsSpacecraftFrameWrapper(bb: flatbuffers.ByteBuffer, obj?: SpacecraftFrameWrapper): SpacecraftFrameWrapper;
    static getSizePrefixedRootAsSpacecraftFrameWrapper(bb: flatbuffers.ByteBuffer, obj?: SpacecraftFrameWrapper): SpacecraftFrameWrapper;
    frame(): SpacecraftFrame;
    static startSpacecraftFrameWrapper(builder: flatbuffers.Builder): void;
    static addFrame(builder: flatbuffers.Builder, frame: SpacecraftFrame): void;
    static endSpacecraftFrameWrapper(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createSpacecraftFrameWrapper(builder: flatbuffers.Builder, frame: SpacecraftFrame): flatbuffers.Offset;
    unpack(): SpacecraftFrameWrapperT;
    unpackTo(_o: SpacecraftFrameWrapperT): void;
}
export declare class SpacecraftFrameWrapperT implements flatbuffers.IGeneratedObject {
    frame: SpacecraftFrame;
    constructor(frame?: SpacecraftFrame);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=SpacecraftFrameWrapper.d.ts.map