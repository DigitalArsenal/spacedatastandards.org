import * as flatbuffers from 'flatbuffers';
export declare class ODREditedObservation implements flatbuffers.IUnpackableObject<ODREditedObservationT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): ODREditedObservation;
    static getRootAsODREditedObservation(bb: flatbuffers.ByteBuffer, obj?: ODREditedObservation): ODREditedObservation;
    static getSizePrefixedRootAsODREditedObservation(bb: flatbuffers.ByteBuffer, obj?: ODREditedObservation): ODREditedObservation;
    OBSERVATION_ID(): string;
    OBSERVATION_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    ITERATION(): number;
    PREFIT_RESIDUAL(): number;
    NORMALIZED_RESIDUAL(): number;
    REASON(): string | null;
    REASON(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    static startODREditedObservation(builder: flatbuffers.Builder): void;
    static addObservationId(builder: flatbuffers.Builder, OBSERVATION_IDOffset: flatbuffers.Offset): void;
    static addIteration(builder: flatbuffers.Builder, ITERATION: number): void;
    static addPrefitResidual(builder: flatbuffers.Builder, PREFIT_RESIDUAL: number): void;
    static addNormalizedResidual(builder: flatbuffers.Builder, NORMALIZED_RESIDUAL: number): void;
    static addReason(builder: flatbuffers.Builder, REASONOffset: flatbuffers.Offset): void;
    static endODREditedObservation(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createODREditedObservation(builder: flatbuffers.Builder, OBSERVATION_IDOffset: flatbuffers.Offset, ITERATION: number, PREFIT_RESIDUAL: number, NORMALIZED_RESIDUAL: number, REASONOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): ODREditedObservationT;
    unpackTo(_o: ODREditedObservationT): void;
}
export declare class ODREditedObservationT implements flatbuffers.IGeneratedObject {
    OBSERVATION_ID: string | Uint8Array | null;
    ITERATION: number;
    PREFIT_RESIDUAL: number;
    NORMALIZED_RESIDUAL: number;
    REASON: string | Uint8Array | null;
    constructor(OBSERVATION_ID?: string | Uint8Array | null, ITERATION?: number, PREFIT_RESIDUAL?: number, NORMALIZED_RESIDUAL?: number, REASON?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=ODREditedObservation.d.ts.map