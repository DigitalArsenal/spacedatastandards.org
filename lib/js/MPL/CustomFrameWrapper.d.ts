import * as flatbuffers from 'flatbuffers';
import { CustomFrame } from './CustomFrame.js';
export declare class CustomFrameWrapper implements flatbuffers.IUnpackableObject<CustomFrameWrapperT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): CustomFrameWrapper;
    static getRootAsCustomFrameWrapper(bb: flatbuffers.ByteBuffer, obj?: CustomFrameWrapper): CustomFrameWrapper;
    static getSizePrefixedRootAsCustomFrameWrapper(bb: flatbuffers.ByteBuffer, obj?: CustomFrameWrapper): CustomFrameWrapper;
    frame(): CustomFrame;
    static startCustomFrameWrapper(builder: flatbuffers.Builder): void;
    static addFrame(builder: flatbuffers.Builder, frame: CustomFrame): void;
    static endCustomFrameWrapper(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createCustomFrameWrapper(builder: flatbuffers.Builder, frame: CustomFrame): flatbuffers.Offset;
    unpack(): CustomFrameWrapperT;
    unpackTo(_o: CustomFrameWrapperT): void;
}
export declare class CustomFrameWrapperT implements flatbuffers.IGeneratedObject {
    frame: CustomFrame;
    constructor(frame?: CustomFrame);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=CustomFrameWrapper.d.ts.map