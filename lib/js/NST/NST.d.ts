import * as flatbuffers from 'flatbuffers';
import { NSTNode, NSTNodeT } from './NSTNode.js';
/**
 * Node Status Record - the set of peers a node reports.
 */
export declare class NST implements flatbuffers.IUnpackableObject<NSTT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): NST;
    static getRootAsNST(bb: flatbuffers.ByteBuffer, obj?: NST): NST;
    static getSizePrefixedRootAsNST(bb: flatbuffers.ByteBuffer, obj?: NST): NST;
    static bufferHasIdentifier(bb: flatbuffers.ByteBuffer): boolean;
    NODES(index: number, obj?: NSTNode): NSTNode | null;
    nodesLength(): number;
    /**
     * Unix milliseconds when this set was generated.
     */
    GENERATED_AT(): bigint;
    /**
     * Peer identifier of the emitting node.
     */
    SOURCE_PEER_ID(): string | null;
    SOURCE_PEER_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    static startNST(builder: flatbuffers.Builder): void;
    static addNodes(builder: flatbuffers.Builder, NODESOffset: flatbuffers.Offset): void;
    static createNodesVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startNodesVector(builder: flatbuffers.Builder, numElems: number): void;
    static addGeneratedAt(builder: flatbuffers.Builder, GENERATED_AT: bigint): void;
    static addSourcePeerId(builder: flatbuffers.Builder, SOURCE_PEER_IDOffset: flatbuffers.Offset): void;
    static endNST(builder: flatbuffers.Builder): flatbuffers.Offset;
    static finishNSTBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static finishSizePrefixedNSTBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static createNST(builder: flatbuffers.Builder, NODESOffset: flatbuffers.Offset, GENERATED_AT: bigint, SOURCE_PEER_IDOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): NSTT;
    unpackTo(_o: NSTT): void;
}
export declare class NSTT implements flatbuffers.IGeneratedObject {
    NODES: (NSTNodeT)[];
    GENERATED_AT: bigint;
    SOURCE_PEER_ID: string | Uint8Array | null;
    constructor(NODES?: (NSTNodeT)[], GENERATED_AT?: bigint, SOURCE_PEER_ID?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=NST.d.ts.map