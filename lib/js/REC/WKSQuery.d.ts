import * as flatbuffers from 'flatbuffers';
/**
 * One saved FlatSQL query belonging to a workspace.
 */
export declare class WKSQuery implements flatbuffers.IUnpackableObject<WKSQueryT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): WKSQuery;
    static getRootAsWKSQuery(bb: flatbuffers.ByteBuffer, obj?: WKSQuery): WKSQuery;
    static getSizePrefixedRootAsWKSQuery(bb: flatbuffers.ByteBuffer, obj?: WKSQuery): WKSQuery;
    /**
     * Stable query identifier within the workspace
     */
    QUERY_ID(): string | null;
    QUERY_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Display name
     */
    NAME(): string | null;
    NAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * FlatSQL query text
     */
    SQL(): string | null;
    SQL(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Whether this query is active (applied) when the workspace opens
     */
    ACTIVE(): boolean;
    static startWKSQuery(builder: flatbuffers.Builder): void;
    static addQueryId(builder: flatbuffers.Builder, QUERY_IDOffset: flatbuffers.Offset): void;
    static addName(builder: flatbuffers.Builder, NAMEOffset: flatbuffers.Offset): void;
    static addSql(builder: flatbuffers.Builder, SQLOffset: flatbuffers.Offset): void;
    static addActive(builder: flatbuffers.Builder, ACTIVE: boolean): void;
    static endWKSQuery(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createWKSQuery(builder: flatbuffers.Builder, QUERY_IDOffset: flatbuffers.Offset, NAMEOffset: flatbuffers.Offset, SQLOffset: flatbuffers.Offset, ACTIVE: boolean): flatbuffers.Offset;
    unpack(): WKSQueryT;
    unpackTo(_o: WKSQueryT): void;
}
export declare class WKSQueryT implements flatbuffers.IGeneratedObject {
    QUERY_ID: string | Uint8Array | null;
    NAME: string | Uint8Array | null;
    SQL: string | Uint8Array | null;
    ACTIVE: boolean;
    constructor(QUERY_ID?: string | Uint8Array | null, NAME?: string | Uint8Array | null, SQL?: string | Uint8Array | null, ACTIVE?: boolean);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=WKSQuery.d.ts.map