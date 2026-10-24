import * as flatbuffers from 'flatbuffers';
import { pcfOutputFrame } from './pcfOutputFrame.js';
/**
 * Output states: frame, step and size.
 */
export declare class PCFOutput implements flatbuffers.IUnpackableObject<PCFOutputT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): PCFOutput;
    static getRootAsPCFOutput(bb: flatbuffers.ByteBuffer, obj?: PCFOutput): PCFOutput;
    static getSizePrefixedRootAsPCFOutput(bb: flatbuffers.ByteBuffer, obj?: PCFOutput): PCFOutput;
    /**
     * Frame of the output states. Default UNSPECIFIED (the grid template's
     * frame, TEME without one).
     */
    FRAME(): pcfOutputFrame;
    /**
     * Spacing of the output states, seconds, when no grid template names the
     * epochs; a grid template's epochs win. Default 60.
     */
    STEP_SECONDS(): number;
    /**
     * Most states one request may produce. Default 500000.
     */
    MAXIMUM_STATES(): number;
    static startPCFOutput(builder: flatbuffers.Builder): void;
    static addFrame(builder: flatbuffers.Builder, FRAME: pcfOutputFrame): void;
    static addStepSeconds(builder: flatbuffers.Builder, STEP_SECONDS: number): void;
    static addMaximumStates(builder: flatbuffers.Builder, MAXIMUM_STATES: number): void;
    static endPCFOutput(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createPCFOutput(builder: flatbuffers.Builder, FRAME: pcfOutputFrame, STEP_SECONDS: number, MAXIMUM_STATES: number): flatbuffers.Offset;
    unpack(): PCFOutputT;
    unpackTo(_o: PCFOutputT): void;
}
export declare class PCFOutputT implements flatbuffers.IGeneratedObject {
    FRAME: pcfOutputFrame;
    STEP_SECONDS: number;
    MAXIMUM_STATES: number;
    constructor(FRAME?: pcfOutputFrame, STEP_SECONDS?: number, MAXIMUM_STATES?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=PCFOutput.d.ts.map