import * as flatbuffers from 'flatbuffers';
/**
 * One flow trigger (e.g. a host timer or HTTP route) that starts a drain.
 */
export declare class PLGFlowTrigger implements flatbuffers.IUnpackableObject<PLGFlowTriggerT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): PLGFlowTrigger;
    static getRootAsPLGFlowTrigger(bb: flatbuffers.ByteBuffer, obj?: PLGFlowTrigger): PLGFlowTrigger;
    static getSizePrefixedRootAsPLGFlowTrigger(bb: flatbuffers.ByteBuffer, obj?: PLGFlowTrigger): PLGFlowTrigger;
    /**
     * Stable trigger identifier
     */
    TRIGGER_ID(): string;
    TRIGGER_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    /**
     * Trigger kind, e.g. "timer", "http"
     */
    KIND(): string | null;
    KIND(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Trigger source, e.g. "host-cron"
     */
    SOURCE(): string | null;
    SOURCE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Default firing interval in milliseconds (timer triggers)
     */
    DEFAULT_INTERVAL_MS(): bigint;
    /**
     * Mounted HTTP path (http triggers)
     */
    HTTP_PATH(): string | null;
    HTTP_PATH(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    static startPLGFlowTrigger(builder: flatbuffers.Builder): void;
    static addTriggerId(builder: flatbuffers.Builder, TRIGGER_IDOffset: flatbuffers.Offset): void;
    static addKind(builder: flatbuffers.Builder, KINDOffset: flatbuffers.Offset): void;
    static addSource(builder: flatbuffers.Builder, SOURCEOffset: flatbuffers.Offset): void;
    static addDefaultIntervalMs(builder: flatbuffers.Builder, DEFAULT_INTERVAL_MS: bigint): void;
    static addHttpPath(builder: flatbuffers.Builder, HTTP_PATHOffset: flatbuffers.Offset): void;
    static endPLGFlowTrigger(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createPLGFlowTrigger(builder: flatbuffers.Builder, TRIGGER_IDOffset: flatbuffers.Offset, KINDOffset: flatbuffers.Offset, SOURCEOffset: flatbuffers.Offset, DEFAULT_INTERVAL_MS: bigint, HTTP_PATHOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): PLGFlowTriggerT;
    unpackTo(_o: PLGFlowTriggerT): void;
}
export declare class PLGFlowTriggerT implements flatbuffers.IGeneratedObject {
    TRIGGER_ID: string | Uint8Array | null;
    KIND: string | Uint8Array | null;
    SOURCE: string | Uint8Array | null;
    DEFAULT_INTERVAL_MS: bigint;
    HTTP_PATH: string | Uint8Array | null;
    constructor(TRIGGER_ID?: string | Uint8Array | null, KIND?: string | Uint8Array | null, SOURCE?: string | Uint8Array | null, DEFAULT_INTERVAL_MS?: bigint, HTTP_PATH?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=PLGFlowTrigger.d.ts.map