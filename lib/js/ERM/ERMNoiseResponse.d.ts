import * as flatbuffers from 'flatbuffers';
/**
 * Unit process-noise responses at one target.
 */
export declare class ERMNoiseResponse implements flatbuffers.IUnpackableObject<ERMNoiseResponseT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): ERMNoiseResponse;
    static getRootAsERMNoiseResponse(bb: flatbuffers.ByteBuffer, obj?: ERMNoiseResponse): ERMNoiseResponse;
    static getSizePrefixedRootAsERMNoiseResponse(bb: flatbuffers.ByteBuffer, obj?: ERMNoiseResponse): ERMNoiseResponse;
    EPOCH(): string | null;
    EPOCH(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    STEPS(): number;
    STEP_S(): number;
    /**
     * 6x6 row-major per unit density on R, T, N (3 x 36 values).
     */
    RESPONSES(index: number): number | null;
    responsesLength(): number;
    responsesArray(): Float64Array | null;
    static startERMNoiseResponse(builder: flatbuffers.Builder): void;
    static addEpoch(builder: flatbuffers.Builder, EPOCHOffset: flatbuffers.Offset): void;
    static addSteps(builder: flatbuffers.Builder, STEPS: number): void;
    static addStepS(builder: flatbuffers.Builder, STEP_S: number): void;
    static addResponses(builder: flatbuffers.Builder, RESPONSESOffset: flatbuffers.Offset): void;
    static createResponsesVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createResponsesVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startResponsesVector(builder: flatbuffers.Builder, numElems: number): void;
    static endERMNoiseResponse(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createERMNoiseResponse(builder: flatbuffers.Builder, EPOCHOffset: flatbuffers.Offset, STEPS: number, STEP_S: number, RESPONSESOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): ERMNoiseResponseT;
    unpackTo(_o: ERMNoiseResponseT): void;
}
export declare class ERMNoiseResponseT implements flatbuffers.IGeneratedObject {
    EPOCH: string | Uint8Array | null;
    STEPS: number;
    STEP_S: number;
    RESPONSES: (number)[];
    constructor(EPOCH?: string | Uint8Array | null, STEPS?: number, STEP_S?: number, RESPONSES?: (number)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=ERMNoiseResponse.d.ts.map