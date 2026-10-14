import * as flatbuffers from 'flatbuffers';
/**
 * A propagated state at one arc target.
 */
export declare class ERMPredictionSample implements flatbuffers.IUnpackableObject<ERMPredictionSampleT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): ERMPredictionSample;
    static getRootAsERMPredictionSample(bb: flatbuffers.ByteBuffer, obj?: ERMPredictionSample): ERMPredictionSample;
    static getSizePrefixedRootAsERMPredictionSample(bb: flatbuffers.ByteBuffer, obj?: ERMPredictionSample): ERMPredictionSample;
    /**
     * State, GCRF, m and m/s (6 values); empty = no prediction.
     */
    STATE(index: number): number | null;
    stateLength(): number;
    stateArray(): Float64Array | null;
    /**
     * Position covariance from P0 alone, m**2, xx, xy, xz, yy, yz, zz (6
     * values); empty = none.
     */
    P0_POSITION(index: number): number | null;
    p0PositionLength(): number;
    p0PositionArray(): Float64Array | null;
    /**
     * Unit-density process-noise responses for R, T, N, each in the order of
     * P0_POSITION (3 x 6 values); empty = none.
     */
    NOISE_RESPONSES(index: number): number | null;
    noiseResponsesLength(): number;
    noiseResponsesArray(): Float64Array | null;
    static startERMPredictionSample(builder: flatbuffers.Builder): void;
    static addState(builder: flatbuffers.Builder, STATEOffset: flatbuffers.Offset): void;
    static createStateVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createStateVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startStateVector(builder: flatbuffers.Builder, numElems: number): void;
    static addP0Position(builder: flatbuffers.Builder, P0_POSITIONOffset: flatbuffers.Offset): void;
    static createP0PositionVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createP0PositionVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startP0PositionVector(builder: flatbuffers.Builder, numElems: number): void;
    static addNoiseResponses(builder: flatbuffers.Builder, NOISE_RESPONSESOffset: flatbuffers.Offset): void;
    static createNoiseResponsesVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createNoiseResponsesVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startNoiseResponsesVector(builder: flatbuffers.Builder, numElems: number): void;
    static endERMPredictionSample(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createERMPredictionSample(builder: flatbuffers.Builder, STATEOffset: flatbuffers.Offset, P0_POSITIONOffset: flatbuffers.Offset, NOISE_RESPONSESOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): ERMPredictionSampleT;
    unpackTo(_o: ERMPredictionSampleT): void;
}
export declare class ERMPredictionSampleT implements flatbuffers.IGeneratedObject {
    STATE: (number)[];
    P0_POSITION: (number)[];
    NOISE_RESPONSES: (number)[];
    constructor(STATE?: (number)[], P0_POSITION?: (number)[], NOISE_RESPONSES?: (number)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=ERMPredictionSample.d.ts.map