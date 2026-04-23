import * as flatbuffers from 'flatbuffers';
import { catalogQueryKind } from './catalogQueryKind.js';
/**
 * Catalog query request payload.
 */
export declare class CAQRequest implements flatbuffers.IUnpackableObject<CAQRequestT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): CAQRequest;
    static getRootAsCAQRequest(bb: flatbuffers.ByteBuffer, obj?: CAQRequest): CAQRequest;
    static getSizePrefixedRootAsCAQRequest(bb: flatbuffers.ByteBuffer, obj?: CAQRequest): CAQRequest;
    KIND(): catalogQueryKind;
    /**
     * Host-specific query string (for example a FlatSQL or DSL expression).
     */
    QUERY(): string | null;
    QUERY(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Entity index for single-row queries.
     */
    ENTITY_INDEX(): number;
    /**
     * Upper bound on the number of rows / indices to return (0 = unbounded).
     */
    MAX_COUNT(): number;
    /**
     * Expected number of entities in the catalog at the time the request was
     * issued, used to size visibility masks.
     */
    ENTITY_COUNT(): number;
    static startCAQRequest(builder: flatbuffers.Builder): void;
    static addKind(builder: flatbuffers.Builder, KIND: catalogQueryKind): void;
    static addQuery(builder: flatbuffers.Builder, QUERYOffset: flatbuffers.Offset): void;
    static addEntityIndex(builder: flatbuffers.Builder, ENTITY_INDEX: number): void;
    static addMaxCount(builder: flatbuffers.Builder, MAX_COUNT: number): void;
    static addEntityCount(builder: flatbuffers.Builder, ENTITY_COUNT: number): void;
    static endCAQRequest(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createCAQRequest(builder: flatbuffers.Builder, KIND: catalogQueryKind, QUERYOffset: flatbuffers.Offset, ENTITY_INDEX: number, MAX_COUNT: number, ENTITY_COUNT: number): flatbuffers.Offset;
    unpack(): CAQRequestT;
    unpackTo(_o: CAQRequestT): void;
}
export declare class CAQRequestT implements flatbuffers.IGeneratedObject {
    KIND: catalogQueryKind;
    QUERY: string | Uint8Array | null;
    ENTITY_INDEX: number;
    MAX_COUNT: number;
    ENTITY_COUNT: number;
    constructor(KIND?: catalogQueryKind, QUERY?: string | Uint8Array | null, ENTITY_INDEX?: number, MAX_COUNT?: number, ENTITY_COUNT?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=CAQRequest.d.ts.map