import * as flatbuffers from 'flatbuffers';
/**
 * Trigger condition for algorithm execution
 */
export declare class AlgorithmTrigger implements flatbuffers.IUnpackableObject<AlgorithmTriggerT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): AlgorithmTrigger;
    static getRootAsAlgorithmTrigger(bb: flatbuffers.ByteBuffer, obj?: AlgorithmTrigger): AlgorithmTrigger;
    static getSizePrefixedRootAsAlgorithmTrigger(bb: flatbuffers.ByteBuffer, obj?: AlgorithmTrigger): AlgorithmTrigger;
    /**
     * Trigger on parameter update
     */
    PARAMETER_REF(): string | null;
    PARAMETER_REF(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Trigger on container reception
     */
    CONTAINER_REF(): string | null;
    CONTAINER_REF(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Trigger rate (per second)
     */
    RATE(): number;
    static startAlgorithmTrigger(builder: flatbuffers.Builder): void;
    static addParameterRef(builder: flatbuffers.Builder, PARAMETER_REFOffset: flatbuffers.Offset): void;
    static addContainerRef(builder: flatbuffers.Builder, CONTAINER_REFOffset: flatbuffers.Offset): void;
    static addRate(builder: flatbuffers.Builder, RATE: number): void;
    static endAlgorithmTrigger(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createAlgorithmTrigger(builder: flatbuffers.Builder, PARAMETER_REFOffset: flatbuffers.Offset, CONTAINER_REFOffset: flatbuffers.Offset, RATE: number): flatbuffers.Offset;
    unpack(): AlgorithmTriggerT;
    unpackTo(_o: AlgorithmTriggerT): void;
}
export declare class AlgorithmTriggerT implements flatbuffers.IGeneratedObject {
    PARAMETER_REF: string | Uint8Array | null;
    CONTAINER_REF: string | Uint8Array | null;
    RATE: number;
    constructor(PARAMETER_REF?: string | Uint8Array | null, CONTAINER_REF?: string | Uint8Array | null, RATE?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=AlgorithmTrigger.d.ts.map