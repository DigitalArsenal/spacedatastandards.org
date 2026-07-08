import * as flatbuffers from 'flatbuffers';
/**
 * Trust Edge Record - Durable directed trust assertion for an SDN trust graph.
 *
 * A TRE records one directed truster -> trustee assertion. The current trust
 * graph is a projection over the latest TRE records by EDGE_ID, with deleted
 * records acting as tombstones. Implementations must still validate the
 * projected graph for acyclicity before accepting it.
 */
export declare class TRE implements flatbuffers.IUnpackableObject<TRET> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): TRE;
    static getRootAsTRE(bb: flatbuffers.ByteBuffer, obj?: TRE): TRE;
    static getSizePrefixedRootAsTRE(bb: flatbuffers.ByteBuffer, obj?: TRE): TRE;
    static bufferHasIdentifier(bb: flatbuffers.ByteBuffer): boolean;
    /**
     * Stable edge identifier, normally "truster->trustee".
     */
    EDGE_ID(): string | null;
    EDGE_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Trusting node identifier.
     */
    TRUSTER_ID(): string;
    TRUSTER_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    /**
     * Trusted node identifier.
     */
    TRUSTEE_ID(): string;
    TRUSTEE_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    /**
     * Truster-assigned edge weight in the range [0, 1].
     */
    WEIGHT(): number;
    /**
     * Unix timestamp in milliseconds when this edge was last updated.
     */
    UPDATED_AT(): bigint;
    /**
     * True when this record tombstones the edge from the current graph.
     */
    DELETED(): boolean;
    /**
     * Peer ID of the node/provider that issued this trust edge record.
     */
    PROVIDER_PEER_ID(): string | null;
    PROVIDER_PEER_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Provider signature over the trust edge record.
     */
    PROVIDER_SIGNATURE(index: number): number | null;
    providerSignatureLength(): number;
    providerSignatureArray(): Uint8Array | null;
    static startTRE(builder: flatbuffers.Builder): void;
    static addEdgeId(builder: flatbuffers.Builder, EDGE_IDOffset: flatbuffers.Offset): void;
    static addTrusterId(builder: flatbuffers.Builder, TRUSTER_IDOffset: flatbuffers.Offset): void;
    static addTrusteeId(builder: flatbuffers.Builder, TRUSTEE_IDOffset: flatbuffers.Offset): void;
    static addWeight(builder: flatbuffers.Builder, WEIGHT: number): void;
    static addUpdatedAt(builder: flatbuffers.Builder, UPDATED_AT: bigint): void;
    static addDeleted(builder: flatbuffers.Builder, DELETED: boolean): void;
    static addProviderPeerId(builder: flatbuffers.Builder, PROVIDER_PEER_IDOffset: flatbuffers.Offset): void;
    static addProviderSignature(builder: flatbuffers.Builder, PROVIDER_SIGNATUREOffset: flatbuffers.Offset): void;
    static createProviderSignatureVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startProviderSignatureVector(builder: flatbuffers.Builder, numElems: number): void;
    static endTRE(builder: flatbuffers.Builder): flatbuffers.Offset;
    static finishTREBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static finishSizePrefixedTREBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static createTRE(builder: flatbuffers.Builder, EDGE_IDOffset: flatbuffers.Offset, TRUSTER_IDOffset: flatbuffers.Offset, TRUSTEE_IDOffset: flatbuffers.Offset, WEIGHT: number, UPDATED_AT: bigint, DELETED: boolean, PROVIDER_PEER_IDOffset: flatbuffers.Offset, PROVIDER_SIGNATUREOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): TRET;
    unpackTo(_o: TRET): void;
}
export declare class TRET implements flatbuffers.IGeneratedObject {
    EDGE_ID: string | Uint8Array | null;
    TRUSTER_ID: string | Uint8Array | null;
    TRUSTEE_ID: string | Uint8Array | null;
    WEIGHT: number;
    UPDATED_AT: bigint;
    DELETED: boolean;
    PROVIDER_PEER_ID: string | Uint8Array | null;
    PROVIDER_SIGNATURE: (number)[];
    constructor(EDGE_ID?: string | Uint8Array | null, TRUSTER_ID?: string | Uint8Array | null, TRUSTEE_ID?: string | Uint8Array | null, WEIGHT?: number, UPDATED_AT?: bigint, DELETED?: boolean, PROVIDER_PEER_ID?: string | Uint8Array | null, PROVIDER_SIGNATURE?: (number)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=TRE.d.ts.map