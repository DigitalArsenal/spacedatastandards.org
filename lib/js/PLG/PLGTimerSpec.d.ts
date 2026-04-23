import * as flatbuffers from 'flatbuffers';
/**
 * Timer entry declared by a plugin.
 */
export declare class PLGTimerSpec implements flatbuffers.IUnpackableObject<PLGTimerSpecT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): PLGTimerSpec;
    static getRootAsPLGTimerSpec(bb: flatbuffers.ByteBuffer, obj?: PLGTimerSpec): PLGTimerSpec;
    static getSizePrefixedRootAsPLGTimerSpec(bb: flatbuffers.ByteBuffer, obj?: PLGTimerSpec): PLGTimerSpec;
    TIMER_ID(): string | null;
    TIMER_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    METHOD_ID(): string | null;
    METHOD_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    INPUT_PORT_ID(): string | null;
    INPUT_PORT_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    DEFAULT_INTERVAL_MS(): bigint;
    DESCRIPTION(): string | null;
    DESCRIPTION(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    static startPLGTimerSpec(builder: flatbuffers.Builder): void;
    static addTimerId(builder: flatbuffers.Builder, TIMER_IDOffset: flatbuffers.Offset): void;
    static addMethodId(builder: flatbuffers.Builder, METHOD_IDOffset: flatbuffers.Offset): void;
    static addInputPortId(builder: flatbuffers.Builder, INPUT_PORT_IDOffset: flatbuffers.Offset): void;
    static addDefaultIntervalMs(builder: flatbuffers.Builder, DEFAULT_INTERVAL_MS: bigint): void;
    static addDescription(builder: flatbuffers.Builder, DESCRIPTIONOffset: flatbuffers.Offset): void;
    static endPLGTimerSpec(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createPLGTimerSpec(builder: flatbuffers.Builder, TIMER_IDOffset: flatbuffers.Offset, METHOD_IDOffset: flatbuffers.Offset, INPUT_PORT_IDOffset: flatbuffers.Offset, DEFAULT_INTERVAL_MS: bigint, DESCRIPTIONOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): PLGTimerSpecT;
    unpackTo(_o: PLGTimerSpecT): void;
}
export declare class PLGTimerSpecT implements flatbuffers.IGeneratedObject {
    TIMER_ID: string | Uint8Array | null;
    METHOD_ID: string | Uint8Array | null;
    INPUT_PORT_ID: string | Uint8Array | null;
    DEFAULT_INTERVAL_MS: bigint;
    DESCRIPTION: string | Uint8Array | null;
    constructor(TIMER_ID?: string | Uint8Array | null, METHOD_ID?: string | Uint8Array | null, INPUT_PORT_ID?: string | Uint8Array | null, DEFAULT_INTERVAL_MS?: bigint, DESCRIPTION?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=PLGTimerSpec.d.ts.map