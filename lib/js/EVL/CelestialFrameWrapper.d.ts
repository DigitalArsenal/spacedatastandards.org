import * as flatbuffers from 'flatbuffers';
import { CelestialFrame } from './CelestialFrame.js';
export declare class CelestialFrameWrapper implements flatbuffers.IUnpackableObject<CelestialFrameWrapperT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): CelestialFrameWrapper;
    static getRootAsCelestialFrameWrapper(bb: flatbuffers.ByteBuffer, obj?: CelestialFrameWrapper): CelestialFrameWrapper;
    static getSizePrefixedRootAsCelestialFrameWrapper(bb: flatbuffers.ByteBuffer, obj?: CelestialFrameWrapper): CelestialFrameWrapper;
    frame(): CelestialFrame;
    static startCelestialFrameWrapper(builder: flatbuffers.Builder): void;
    static addFrame(builder: flatbuffers.Builder, frame: CelestialFrame): void;
    static endCelestialFrameWrapper(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createCelestialFrameWrapper(builder: flatbuffers.Builder, frame: CelestialFrame): flatbuffers.Offset;
    unpack(): CelestialFrameWrapperT;
    unpackTo(_o: CelestialFrameWrapperT): void;
}
export declare class CelestialFrameWrapperT implements flatbuffers.IGeneratedObject {
    frame: CelestialFrame;
    constructor(frame?: CelestialFrame);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=CelestialFrameWrapper.d.ts.map