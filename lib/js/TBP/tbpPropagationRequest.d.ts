import * as flatbuffers from 'flatbuffers';
import { tbpState, tbpStateT } from './tbpState.js';
/**
 * Options for a propagation.
 */
export declare class tbpPropagationRequest implements flatbuffers.IUnpackableObject<tbpPropagationRequestT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): tbpPropagationRequest;
    static getRootAstbpPropagationRequest(bb: flatbuffers.ByteBuffer, obj?: tbpPropagationRequest): tbpPropagationRequest;
    static getSizePrefixedRootAstbpPropagationRequest(bb: flatbuffers.ByteBuffer, obj?: tbpPropagationRequest): tbpPropagationRequest;
    INITIAL_STATE(obj?: tbpState): tbpState | null;
    /**
     * Non-dimensional duration (negative = backwards).
     */
    DURATION(): number;
    /**
     * Non-dimensional integration step; 0 = default.
     */
    STEP(): number;
    /**
     * Samples in the answer, endpoints included; 0 = default.
     */
    OUTPUT_POINTS(): number;
    /**
     * Also propagate the state transition matrix.
     */
    STATE_TRANSITION(): boolean;
    static starttbpPropagationRequest(builder: flatbuffers.Builder): void;
    static addInitialState(builder: flatbuffers.Builder, INITIAL_STATEOffset: flatbuffers.Offset): void;
    static addDuration(builder: flatbuffers.Builder, DURATION: number): void;
    static addStep(builder: flatbuffers.Builder, STEP: number): void;
    static addOutputPoints(builder: flatbuffers.Builder, OUTPUT_POINTS: number): void;
    static addStateTransition(builder: flatbuffers.Builder, STATE_TRANSITION: boolean): void;
    static endtbpPropagationRequest(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createtbpPropagationRequest(builder: flatbuffers.Builder, INITIAL_STATEOffset: flatbuffers.Offset, DURATION: number, STEP: number, OUTPUT_POINTS: number, STATE_TRANSITION: boolean): flatbuffers.Offset;
    unpack(): tbpPropagationRequestT;
    unpackTo(_o: tbpPropagationRequestT): void;
}
export declare class tbpPropagationRequestT implements flatbuffers.IGeneratedObject {
    INITIAL_STATE: tbpStateT | null;
    DURATION: number;
    STEP: number;
    OUTPUT_POINTS: number;
    STATE_TRANSITION: boolean;
    constructor(INITIAL_STATE?: tbpStateT | null, DURATION?: number, STEP?: number, OUTPUT_POINTS?: number, STATE_TRANSITION?: boolean);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=tbpPropagationRequest.d.ts.map