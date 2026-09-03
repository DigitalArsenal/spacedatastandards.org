import * as flatbuffers from 'flatbuffers';
import { ndsIngestEventKind } from './ndsIngestEventKind.js';
/**
 * One source-ingest transition surfaced to the dashboard.
 */
export declare class NDSIngestEvent implements flatbuffers.IUnpackableObject<NDSIngestEventT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): NDSIngestEvent;
    static getRootAsNDSIngestEvent(bb: flatbuffers.ByteBuffer, obj?: NDSIngestEvent): NDSIngestEvent;
    static getSizePrefixedRootAsNDSIngestEvent(bb: flatbuffers.ByteBuffer, obj?: NDSIngestEvent): NDSIngestEvent;
    KIND(): ndsIngestEventKind;
    SCHEMA(): string | null;
    SCHEMA(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    PROVIDER_ID(): string | null;
    PROVIDER_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    SOURCE_NAME(): string | null;
    SOURCE_NAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    MESSAGE(): string | null;
    MESSAGE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    COUNT(): bigint;
    /**
     * Unix seconds when the transition occurred.
     */
    AT(): bigint;
    static startNDSIngestEvent(builder: flatbuffers.Builder): void;
    static addKind(builder: flatbuffers.Builder, KIND: ndsIngestEventKind): void;
    static addSchema(builder: flatbuffers.Builder, SCHEMAOffset: flatbuffers.Offset): void;
    static addProviderId(builder: flatbuffers.Builder, PROVIDER_IDOffset: flatbuffers.Offset): void;
    static addSourceName(builder: flatbuffers.Builder, SOURCE_NAMEOffset: flatbuffers.Offset): void;
    static addMessage(builder: flatbuffers.Builder, MESSAGEOffset: flatbuffers.Offset): void;
    static addCount(builder: flatbuffers.Builder, COUNT: bigint): void;
    static addAt(builder: flatbuffers.Builder, AT: bigint): void;
    static endNDSIngestEvent(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createNDSIngestEvent(builder: flatbuffers.Builder, KIND: ndsIngestEventKind, SCHEMAOffset: flatbuffers.Offset, PROVIDER_IDOffset: flatbuffers.Offset, SOURCE_NAMEOffset: flatbuffers.Offset, MESSAGEOffset: flatbuffers.Offset, COUNT: bigint, AT: bigint): flatbuffers.Offset;
    unpack(): NDSIngestEventT;
    unpackTo(_o: NDSIngestEventT): void;
}
export declare class NDSIngestEventT implements flatbuffers.IGeneratedObject {
    KIND: ndsIngestEventKind;
    SCHEMA: string | Uint8Array | null;
    PROVIDER_ID: string | Uint8Array | null;
    SOURCE_NAME: string | Uint8Array | null;
    MESSAGE: string | Uint8Array | null;
    COUNT: bigint;
    AT: bigint;
    constructor(KIND?: ndsIngestEventKind, SCHEMA?: string | Uint8Array | null, PROVIDER_ID?: string | Uint8Array | null, SOURCE_NAME?: string | Uint8Array | null, MESSAGE?: string | Uint8Array | null, COUNT?: bigint, AT?: bigint);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=NDSIngestEvent.d.ts.map