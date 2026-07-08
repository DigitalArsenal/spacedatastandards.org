import * as flatbuffers from 'flatbuffers';
/**
 * Trust Node Record - Durable node membership state for an SDN trust graph.
 *
 * TNR records preserve isolated trust graph nodes that do not currently have
 * an active trust edge. The current graph is a projection over the latest TNR
 * and TRE records, where deleted records are tombstones.
 */
export declare class TNR implements flatbuffers.IUnpackableObject<TNRT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): TNR;
    static getRootAsTNR(bb: flatbuffers.ByteBuffer, obj?: TNR): TNR;
    static getSizePrefixedRootAsTNR(bb: flatbuffers.ByteBuffer, obj?: TNR): TNR;
    static bufferHasIdentifier(bb: flatbuffers.ByteBuffer): boolean;
    /**
     * Stable trust graph node identifier, normally an SDN peer ID or account id.
     */
    NODE_ID(): string;
    NODE_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    /**
     * Unix timestamp in milliseconds when this node record was created.
     */
    CREATED_AT(): bigint;
    /**
     * Unix timestamp in milliseconds when this node record was last updated.
     */
    UPDATED_AT(): bigint;
    /**
     * True when this record tombstones the node from the current graph.
     */
    DELETED(): boolean;
    /**
     * Peer ID of the node/provider that issued this trust graph record.
     */
    PROVIDER_PEER_ID(): string | null;
    PROVIDER_PEER_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Provider signature over the trust node record.
     */
    PROVIDER_SIGNATURE(index: number): number | null;
    providerSignatureLength(): number;
    providerSignatureArray(): Uint8Array | null;
    static startTNR(builder: flatbuffers.Builder): void;
    static addNodeId(builder: flatbuffers.Builder, NODE_IDOffset: flatbuffers.Offset): void;
    static addCreatedAt(builder: flatbuffers.Builder, CREATED_AT: bigint): void;
    static addUpdatedAt(builder: flatbuffers.Builder, UPDATED_AT: bigint): void;
    static addDeleted(builder: flatbuffers.Builder, DELETED: boolean): void;
    static addProviderPeerId(builder: flatbuffers.Builder, PROVIDER_PEER_IDOffset: flatbuffers.Offset): void;
    static addProviderSignature(builder: flatbuffers.Builder, PROVIDER_SIGNATUREOffset: flatbuffers.Offset): void;
    static createProviderSignatureVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startProviderSignatureVector(builder: flatbuffers.Builder, numElems: number): void;
    static endTNR(builder: flatbuffers.Builder): flatbuffers.Offset;
    static finishTNRBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static finishSizePrefixedTNRBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static createTNR(builder: flatbuffers.Builder, NODE_IDOffset: flatbuffers.Offset, CREATED_AT: bigint, UPDATED_AT: bigint, DELETED: boolean, PROVIDER_PEER_IDOffset: flatbuffers.Offset, PROVIDER_SIGNATUREOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): TNRT;
    unpackTo(_o: TNRT): void;
}
export declare class TNRT implements flatbuffers.IGeneratedObject {
    NODE_ID: string | Uint8Array | null;
    CREATED_AT: bigint;
    UPDATED_AT: bigint;
    DELETED: boolean;
    PROVIDER_PEER_ID: string | Uint8Array | null;
    PROVIDER_SIGNATURE: (number)[];
    constructor(NODE_ID?: string | Uint8Array | null, CREATED_AT?: bigint, UPDATED_AT?: bigint, DELETED?: boolean, PROVIDER_PEER_ID?: string | Uint8Array | null, PROVIDER_SIGNATURE?: (number)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=TNR.d.ts.map