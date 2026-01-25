import * as flatbuffers from 'flatbuffers';
import { CustomStream, CustomStreamT } from './CustomStream.js';
import { FixedFrameStream, FixedFrameStreamT } from './FixedFrameStream.js';
import { VariableFrameStream, VariableFrameStreamT } from './VariableFrameStream.js';
/**
 * Collection of streams
 */
export declare class StreamSet implements flatbuffers.IUnpackableObject<StreamSetT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): StreamSet;
    static getRootAsStreamSet(bb: flatbuffers.ByteBuffer, obj?: StreamSet): StreamSet;
    static getSizePrefixedRootAsStreamSet(bb: flatbuffers.ByteBuffer, obj?: StreamSet): StreamSet;
    /**
     * Fixed frame streams
     */
    FIXED_FRAME_STREAMS(index: number, obj?: FixedFrameStream): FixedFrameStream | null;
    fixedFrameStreamsLength(): number;
    /**
     * Variable frame streams
     */
    VARIABLE_FRAME_STREAMS(index: number, obj?: VariableFrameStream): VariableFrameStream | null;
    variableFrameStreamsLength(): number;
    /**
     * Custom streams
     */
    CUSTOM_STREAMS(index: number, obj?: CustomStream): CustomStream | null;
    customStreamsLength(): number;
    static startStreamSet(builder: flatbuffers.Builder): void;
    static addFixedFrameStreams(builder: flatbuffers.Builder, FIXED_FRAME_STREAMSOffset: flatbuffers.Offset): void;
    static createFixedFrameStreamsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startFixedFrameStreamsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addVariableFrameStreams(builder: flatbuffers.Builder, VARIABLE_FRAME_STREAMSOffset: flatbuffers.Offset): void;
    static createVariableFrameStreamsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startVariableFrameStreamsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addCustomStreams(builder: flatbuffers.Builder, CUSTOM_STREAMSOffset: flatbuffers.Offset): void;
    static createCustomStreamsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startCustomStreamsVector(builder: flatbuffers.Builder, numElems: number): void;
    static endStreamSet(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createStreamSet(builder: flatbuffers.Builder, FIXED_FRAME_STREAMSOffset: flatbuffers.Offset, VARIABLE_FRAME_STREAMSOffset: flatbuffers.Offset, CUSTOM_STREAMSOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): StreamSetT;
    unpackTo(_o: StreamSetT): void;
}
export declare class StreamSetT implements flatbuffers.IGeneratedObject {
    FIXED_FRAME_STREAMS: (FixedFrameStreamT)[];
    VARIABLE_FRAME_STREAMS: (VariableFrameStreamT)[];
    CUSTOM_STREAMS: (CustomStreamT)[];
    constructor(FIXED_FRAME_STREAMS?: (FixedFrameStreamT)[], VARIABLE_FRAME_STREAMS?: (VariableFrameStreamT)[], CUSTOM_STREAMS?: (CustomStreamT)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=StreamSet.d.ts.map