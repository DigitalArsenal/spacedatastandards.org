import * as flatbuffers from 'flatbuffers';
import { OrbitFrame } from './OrbitFrame.js';
export declare class OrbitFrameWrapper implements flatbuffers.IUnpackableObject<OrbitFrameWrapperT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): OrbitFrameWrapper;
    static getRootAsOrbitFrameWrapper(bb: flatbuffers.ByteBuffer, obj?: OrbitFrameWrapper): OrbitFrameWrapper;
    static getSizePrefixedRootAsOrbitFrameWrapper(bb: flatbuffers.ByteBuffer, obj?: OrbitFrameWrapper): OrbitFrameWrapper;
    frame(): OrbitFrame;
    static startOrbitFrameWrapper(builder: flatbuffers.Builder): void;
    static addFrame(builder: flatbuffers.Builder, frame: OrbitFrame): void;
    static endOrbitFrameWrapper(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createOrbitFrameWrapper(builder: flatbuffers.Builder, frame: OrbitFrame): flatbuffers.Offset;
    unpack(): OrbitFrameWrapperT;
    unpackTo(_o: OrbitFrameWrapperT): void;
}
export declare class OrbitFrameWrapperT implements flatbuffers.IGeneratedObject {
    frame: OrbitFrame;
    constructor(frame?: OrbitFrame);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=OrbitFrameWrapper.d.ts.map