import * as flatbuffers from 'flatbuffers';
/**
 * Batch propagation request — propagate every entity in ENTITY_HANDLES[] to
 * EPOCH and write the result StateVector stream to OUTPUT_OFFSET in the
 * shared arena.
 */
export declare class PRWBatchRequest implements flatbuffers.IUnpackableObject<PRWBatchRequestT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): PRWBatchRequest;
    static getRootAsPRWBatchRequest(bb: flatbuffers.ByteBuffer, obj?: PRWBatchRequest): PRWBatchRequest;
    static getSizePrefixedRootAsPRWBatchRequest(bb: flatbuffers.ByteBuffer, obj?: PRWBatchRequest): PRWBatchRequest;
    /**
     * Target epoch as a Julian date (TIME_SYSTEM is configured on the host).
     */
    EPOCH(): number;
    /**
     * Entity handles to propagate (empty = all initialized entities).
     */
    ENTITY_HANDLES(index: number): number | null;
    entityHandlesLength(): number;
    entityHandlesArray(): Uint32Array | null;
    /**
     * Output buffer offset in the arena where the StateVector stream begins.
     */
    OUTPUT_OFFSET(): number;
    /**
     * Maximum entities to process in this call (0 = unbounded).
     */
    MAX_COUNT(): number;
    /**
     * Target reference frame for the output state stream. Matches enum
     * values in SDS `RFM`. If zero, the propagator chooses its native frame.
     */
    TARGET_FRAME(): string | null;
    TARGET_FRAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    static startPRWBatchRequest(builder: flatbuffers.Builder): void;
    static addEpoch(builder: flatbuffers.Builder, EPOCH: number): void;
    static addEntityHandles(builder: flatbuffers.Builder, ENTITY_HANDLESOffset: flatbuffers.Offset): void;
    static createEntityHandlesVector(builder: flatbuffers.Builder, data: number[] | Uint32Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createEntityHandlesVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startEntityHandlesVector(builder: flatbuffers.Builder, numElems: number): void;
    static addOutputOffset(builder: flatbuffers.Builder, OUTPUT_OFFSET: number): void;
    static addMaxCount(builder: flatbuffers.Builder, MAX_COUNT: number): void;
    static addTargetFrame(builder: flatbuffers.Builder, TARGET_FRAMEOffset: flatbuffers.Offset): void;
    static endPRWBatchRequest(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createPRWBatchRequest(builder: flatbuffers.Builder, EPOCH: number, ENTITY_HANDLESOffset: flatbuffers.Offset, OUTPUT_OFFSET: number, MAX_COUNT: number, TARGET_FRAMEOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): PRWBatchRequestT;
    unpackTo(_o: PRWBatchRequestT): void;
}
export declare class PRWBatchRequestT implements flatbuffers.IGeneratedObject {
    EPOCH: number;
    ENTITY_HANDLES: (number)[];
    OUTPUT_OFFSET: number;
    MAX_COUNT: number;
    TARGET_FRAME: string | Uint8Array | null;
    constructor(EPOCH?: number, ENTITY_HANDLES?: (number)[], OUTPUT_OFFSET?: number, MAX_COUNT?: number, TARGET_FRAME?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=PRWBatchRequest.d.ts.map