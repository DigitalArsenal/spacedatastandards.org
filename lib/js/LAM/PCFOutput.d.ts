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
    /**
     * Output epochs, ISO 8601 UTC, ascending; when present they are the
     * states written and START_TIME, STOP_TIME and STEP_SECONDS are not read.
     * Default empty.
     */
    EPOCHS(index: number): string;
    EPOCHS(index: number, optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    epochsLength(): number;
    /**
     * First output epoch, ISO 8601 UTC. Default empty: the element set's
     * epoch.
     */
    START_TIME(): string | null;
    START_TIME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Last output epoch, ISO 8601 UTC, at or after START_TIME. Default empty:
     * START_TIME plus one day.
     */
    STOP_TIME(): string | null;
    STOP_TIME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    static startPCFOutput(builder: flatbuffers.Builder): void;
    static addFrame(builder: flatbuffers.Builder, FRAME: pcfOutputFrame): void;
    static addStepSeconds(builder: flatbuffers.Builder, STEP_SECONDS: number): void;
    static addMaximumStates(builder: flatbuffers.Builder, MAXIMUM_STATES: number): void;
    static addEpochs(builder: flatbuffers.Builder, EPOCHSOffset: flatbuffers.Offset): void;
    static createEpochsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startEpochsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addStartTime(builder: flatbuffers.Builder, START_TIMEOffset: flatbuffers.Offset): void;
    static addStopTime(builder: flatbuffers.Builder, STOP_TIMEOffset: flatbuffers.Offset): void;
    static endPCFOutput(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createPCFOutput(builder: flatbuffers.Builder, FRAME: pcfOutputFrame, STEP_SECONDS: number, MAXIMUM_STATES: number, EPOCHSOffset: flatbuffers.Offset, START_TIMEOffset: flatbuffers.Offset, STOP_TIMEOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): PCFOutputT;
    unpackTo(_o: PCFOutputT): void;
}
export declare class PCFOutputT implements flatbuffers.IGeneratedObject {
    FRAME: pcfOutputFrame;
    STEP_SECONDS: number;
    MAXIMUM_STATES: number;
    EPOCHS: (string)[];
    START_TIME: string | Uint8Array | null;
    STOP_TIME: string | Uint8Array | null;
    constructor(FRAME?: pcfOutputFrame, STEP_SECONDS?: number, MAXIMUM_STATES?: number, EPOCHS?: (string)[], START_TIME?: string | Uint8Array | null, STOP_TIME?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=PCFOutput.d.ts.map