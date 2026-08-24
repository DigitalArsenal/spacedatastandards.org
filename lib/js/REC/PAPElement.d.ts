import * as flatbuffers from 'flatbuffers';
/**
 * One array element and its applied complex weight.
 */
export declare class PAPElement implements flatbuffers.IUnpackableObject<PAPElementT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): PAPElement;
    static getRootAsPAPElement(bb: flatbuffers.ByteBuffer, obj?: PAPElement): PAPElement;
    static getSizePrefixedRootAsPAPElement(bb: flatbuffers.ByteBuffer, obj?: PAPElement): PAPElement;
    ELEMENT_ID(): string;
    ELEMENT_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    POSITION_X_M(): number;
    POSITION_Y_M(): number;
    POSITION_Z_M(): number;
    WEIGHT_REAL(): number;
    WEIGHT_IMAGINARY(): number;
    AMPLITUDE(): number;
    PHASE_DEG(): number;
    ELEMENT_PATTERN_ID(): string | null;
    ELEMENT_PATTERN_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    FAILURE_FLAGS(): number;
    FAILED(): boolean;
    static startPAPElement(builder: flatbuffers.Builder): void;
    static addElementId(builder: flatbuffers.Builder, ELEMENT_IDOffset: flatbuffers.Offset): void;
    static addPositionXM(builder: flatbuffers.Builder, POSITION_X_M: number): void;
    static addPositionYM(builder: flatbuffers.Builder, POSITION_Y_M: number): void;
    static addPositionZM(builder: flatbuffers.Builder, POSITION_Z_M: number): void;
    static addWeightReal(builder: flatbuffers.Builder, WEIGHT_REAL: number): void;
    static addWeightImaginary(builder: flatbuffers.Builder, WEIGHT_IMAGINARY: number): void;
    static addAmplitude(builder: flatbuffers.Builder, AMPLITUDE: number): void;
    static addPhaseDeg(builder: flatbuffers.Builder, PHASE_DEG: number): void;
    static addElementPatternId(builder: flatbuffers.Builder, ELEMENT_PATTERN_IDOffset: flatbuffers.Offset): void;
    static addFailureFlags(builder: flatbuffers.Builder, FAILURE_FLAGS: number): void;
    static addFailed(builder: flatbuffers.Builder, FAILED: boolean): void;
    static endPAPElement(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createPAPElement(builder: flatbuffers.Builder, ELEMENT_IDOffset: flatbuffers.Offset, POSITION_X_M: number, POSITION_Y_M: number, POSITION_Z_M: number, WEIGHT_REAL: number, WEIGHT_IMAGINARY: number, AMPLITUDE: number, PHASE_DEG: number, ELEMENT_PATTERN_IDOffset: flatbuffers.Offset, FAILURE_FLAGS: number, FAILED: boolean): flatbuffers.Offset;
    unpack(): PAPElementT;
    unpackTo(_o: PAPElementT): void;
}
export declare class PAPElementT implements flatbuffers.IGeneratedObject {
    ELEMENT_ID: string | Uint8Array | null;
    POSITION_X_M: number;
    POSITION_Y_M: number;
    POSITION_Z_M: number;
    WEIGHT_REAL: number;
    WEIGHT_IMAGINARY: number;
    AMPLITUDE: number;
    PHASE_DEG: number;
    ELEMENT_PATTERN_ID: string | Uint8Array | null;
    FAILURE_FLAGS: number;
    FAILED: boolean;
    constructor(ELEMENT_ID?: string | Uint8Array | null, POSITION_X_M?: number, POSITION_Y_M?: number, POSITION_Z_M?: number, WEIGHT_REAL?: number, WEIGHT_IMAGINARY?: number, AMPLITUDE?: number, PHASE_DEG?: number, ELEMENT_PATTERN_ID?: string | Uint8Array | null, FAILURE_FLAGS?: number, FAILED?: boolean);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=PAPElement.d.ts.map