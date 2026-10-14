import * as flatbuffers from 'flatbuffers';
import { xmtStateChoice } from './xmtStateChoice.js';
/**
 * The state-source choice for one object.
 */
export declare class XMTStateSelection implements flatbuffers.IUnpackableObject<XMTStateSelectionT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): XMTStateSelection;
    static getRootAsXMTStateSelection(bb: flatbuffers.ByteBuffer, obj?: XMTStateSelection): XMTStateSelection;
    static getSizePrefixedRootAsXMTStateSelection(bb: flatbuffers.ByteBuffer, obj?: XMTStateSelection): XMTStateSelection;
    STATUS(): xmtStateChoice;
    /**
     * Source chosen; empty when none.
     */
    SOURCE_ID(): string | null;
    SOURCE_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Record chosen; empty when none.
     */
    RECORD_ID(): string | null;
    RECORD_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Epoch of the chosen state, Unix milliseconds; 0 when none.
     */
    EPOCH_MS(): bigint;
    /**
     * The sources considered (or, for coverage, those declaring coverage).
     */
    SOURCES(index: number): string;
    SOURCES(index: number, optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    sourcesLength(): number;
    static startXMTStateSelection(builder: flatbuffers.Builder): void;
    static addStatus(builder: flatbuffers.Builder, STATUS: xmtStateChoice): void;
    static addSourceId(builder: flatbuffers.Builder, SOURCE_IDOffset: flatbuffers.Offset): void;
    static addRecordId(builder: flatbuffers.Builder, RECORD_IDOffset: flatbuffers.Offset): void;
    static addEpochMs(builder: flatbuffers.Builder, EPOCH_MS: bigint): void;
    static addSources(builder: flatbuffers.Builder, SOURCESOffset: flatbuffers.Offset): void;
    static createSourcesVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startSourcesVector(builder: flatbuffers.Builder, numElems: number): void;
    static endXMTStateSelection(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createXMTStateSelection(builder: flatbuffers.Builder, STATUS: xmtStateChoice, SOURCE_IDOffset: flatbuffers.Offset, RECORD_IDOffset: flatbuffers.Offset, EPOCH_MS: bigint, SOURCESOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): XMTStateSelectionT;
    unpackTo(_o: XMTStateSelectionT): void;
}
export declare class XMTStateSelectionT implements flatbuffers.IGeneratedObject {
    STATUS: xmtStateChoice;
    SOURCE_ID: string | Uint8Array | null;
    RECORD_ID: string | Uint8Array | null;
    EPOCH_MS: bigint;
    SOURCES: (string)[];
    constructor(STATUS?: xmtStateChoice, SOURCE_ID?: string | Uint8Array | null, RECORD_ID?: string | Uint8Array | null, EPOCH_MS?: bigint, SOURCES?: (string)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=XMTStateSelection.d.ts.map