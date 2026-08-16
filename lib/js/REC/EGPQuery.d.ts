import * as flatbuffers from 'flatbuffers';
/**
 * The query that generated this group — the wire form of save-search-as-group.
 * This is generating provenance, not source lineage, so it is a field of its
 * own and never overloaded onto EGPProvenance.
 */
export declare class EGPQuery implements flatbuffers.IUnpackableObject<EGPQueryT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): EGPQuery;
    static getRootAsEGPQuery(bb: flatbuffers.ByteBuffer, obj?: EGPQuery): EGPQuery;
    static getSizePrefixedRootAsEGPQuery(bb: flatbuffers.ByteBuffer, obj?: EGPQuery): EGPQuery;
    /**
     * Query language the TEXT is written in, verbatim and lowercase, e.g.
     * `flatsql`. A consumer that does not implement the dialect keeps MEMBERS
     * and never guesses at the text.
     */
    DIALECT(): string;
    DIALECT(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    /**
     * The query text verbatim, exactly as evaluated.
     */
    TEXT(): string;
    TEXT(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    /**
     * RFC 3339 UTC fixed-millisecond timestamp at which TEXT was evaluated to
     * produce MEMBERS.
     */
    EVALUATED_AT(): string | null;
    EVALUATED_AT(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Row count the evaluation returned. A consumer whose re-evaluation differs
     * reports drift; it never silently rewrites the record.
     */
    RESULT_COUNT(): number;
    /**
     * Dataset or collection epoch the evaluation ran against, when the publisher
     * can name one.
     */
    DATASET_EPOCH(): string | null;
    DATASET_EPOCH(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    static startEGPQuery(builder: flatbuffers.Builder): void;
    static addDialect(builder: flatbuffers.Builder, DIALECTOffset: flatbuffers.Offset): void;
    static addText(builder: flatbuffers.Builder, TEXTOffset: flatbuffers.Offset): void;
    static addEvaluatedAt(builder: flatbuffers.Builder, EVALUATED_ATOffset: flatbuffers.Offset): void;
    static addResultCount(builder: flatbuffers.Builder, RESULT_COUNT: number): void;
    static addDatasetEpoch(builder: flatbuffers.Builder, DATASET_EPOCHOffset: flatbuffers.Offset): void;
    static endEGPQuery(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createEGPQuery(builder: flatbuffers.Builder, DIALECTOffset: flatbuffers.Offset, TEXTOffset: flatbuffers.Offset, EVALUATED_ATOffset: flatbuffers.Offset, RESULT_COUNT: number, DATASET_EPOCHOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): EGPQueryT;
    unpackTo(_o: EGPQueryT): void;
}
export declare class EGPQueryT implements flatbuffers.IGeneratedObject {
    DIALECT: string | Uint8Array | null;
    TEXT: string | Uint8Array | null;
    EVALUATED_AT: string | Uint8Array | null;
    RESULT_COUNT: number;
    DATASET_EPOCH: string | Uint8Array | null;
    constructor(DIALECT?: string | Uint8Array | null, TEXT?: string | Uint8Array | null, EVALUATED_AT?: string | Uint8Array | null, RESULT_COUNT?: number, DATASET_EPOCH?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=EGPQuery.d.ts.map