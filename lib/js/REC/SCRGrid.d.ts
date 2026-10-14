import * as flatbuffers from 'flatbuffers';
import { SCRGridState, SCRGridStateT } from './SCRGridState.js';
import { SCRRadiusBand, SCRRadiusBandT } from './SCRRadiusBand.js';
/**
 * The coarse grid of one block.
 */
export declare class SCRGrid implements flatbuffers.IUnpackableObject<SCRGridT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): SCRGrid;
    static getRootAsSCRGrid(bb: flatbuffers.ByteBuffer, obj?: SCRGrid): SCRGrid;
    static getSizePrefixedRootAsSCRGrid(bb: flatbuffers.ByteBuffer, obj?: SCRGrid): SCRGrid;
    FIRST_STEP(): number;
    STEP_COUNT(): number;
    /**
     * Objects (rows per step), in the screen's index order.
     */
    OBJECTS(): number;
    /**
     * Evaluation frame, e.g. "TEME", "GCRF", "EME2000".
     */
    FRAME(): string | null;
    FRAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Coarse step, s; 0 = not stated.
     */
    STEP_S(): number;
    /**
     * States, step-major: STEP_COUNT * OBJECTS rows, row (s, n) at
     * s * OBJECTS + n. An excluded object's rows are NaN.
     */
    STATES(index: number, obj?: SCRGridState): SCRGridState | null;
    statesLength(): number;
    /**
     * Radius band of each object over the block (widened by the deviation
     * bound); NaN for an excluded object. Pairs whose bands are further apart
     * than the threshold cannot close.
     */
    BANDS(index: number, obj?: SCRRadiusBand): SCRRadiusBand | null;
    bandsLength(): number;
    static startSCRGrid(builder: flatbuffers.Builder): void;
    static addFirstStep(builder: flatbuffers.Builder, FIRST_STEP: number): void;
    static addStepCount(builder: flatbuffers.Builder, STEP_COUNT: number): void;
    static addObjects(builder: flatbuffers.Builder, OBJECTS: number): void;
    static addFrame(builder: flatbuffers.Builder, FRAMEOffset: flatbuffers.Offset): void;
    static addStepS(builder: flatbuffers.Builder, STEP_S: number): void;
    static addStates(builder: flatbuffers.Builder, STATESOffset: flatbuffers.Offset): void;
    static startStatesVector(builder: flatbuffers.Builder, numElems: number): void;
    static addBands(builder: flatbuffers.Builder, BANDSOffset: flatbuffers.Offset): void;
    static startBandsVector(builder: flatbuffers.Builder, numElems: number): void;
    static endSCRGrid(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createSCRGrid(builder: flatbuffers.Builder, FIRST_STEP: number, STEP_COUNT: number, OBJECTS: number, FRAMEOffset: flatbuffers.Offset, STEP_S: number, STATESOffset: flatbuffers.Offset, BANDSOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): SCRGridT;
    unpackTo(_o: SCRGridT): void;
}
export declare class SCRGridT implements flatbuffers.IGeneratedObject {
    FIRST_STEP: number;
    STEP_COUNT: number;
    OBJECTS: number;
    FRAME: string | Uint8Array | null;
    STEP_S: number;
    STATES: (SCRGridStateT)[];
    BANDS: (SCRRadiusBandT)[];
    constructor(FIRST_STEP?: number, STEP_COUNT?: number, OBJECTS?: number, FRAME?: string | Uint8Array | null, STEP_S?: number, STATES?: (SCRGridStateT)[], BANDS?: (SCRRadiusBandT)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=SCRGrid.d.ts.map