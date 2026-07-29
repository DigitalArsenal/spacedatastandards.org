import * as flatbuffers from 'flatbuffers';
import { PLGFlowEdgeContract, PLGFlowEdgeContractT } from './PLGFlowEdgeContract.js';
/**
 * One directed edge wiring a producer output port to a consumer input port.
 */
export declare class PLGFlowEdge implements flatbuffers.IUnpackableObject<PLGFlowEdgeT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): PLGFlowEdge;
    static getRootAsPLGFlowEdge(bb: flatbuffers.ByteBuffer, obj?: PLGFlowEdge): PLGFlowEdge;
    static getSizePrefixedRootAsPLGFlowEdge(bb: flatbuffers.ByteBuffer, obj?: PLGFlowEdge): PLGFlowEdge;
    /**
     * Stable edge identifier
     */
    EDGE_ID(): string | null;
    EDGE_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Source node id
     */
    FROM_NODE_ID(): string;
    FROM_NODE_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    /**
     * Source output port id
     */
    FROM_PORT_ID(): string;
    FROM_PORT_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    /**
     * Destination node id
     */
    TO_NODE_ID(): string;
    TO_NODE_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    /**
     * Destination input port id
     */
    TO_PORT_ID(): string;
    TO_PORT_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    /**
     * Exact identity/layout and compile-time representation policy. NOT
     * `required`: marking a NEW field of an EXISTING table required makes the
     * FlatBuffers verifier reject every $PLG buffer written before 1.0.13,
     * which is a breaking change to a ratified standard. Presence is enforced
     * where it belongs — the flow compiler MUST refuse to SIGN a flow whose
     * edges lack a CONTRACT, and a verifier MUST reject a signed flow edge
     * without one. Buffers predating 1.0.13 stay readable and stay unsigned.
     */
    CONTRACT(obj?: PLGFlowEdgeContract): PLGFlowEdgeContract | null;
    static startPLGFlowEdge(builder: flatbuffers.Builder): void;
    static addEdgeId(builder: flatbuffers.Builder, EDGE_IDOffset: flatbuffers.Offset): void;
    static addFromNodeId(builder: flatbuffers.Builder, FROM_NODE_IDOffset: flatbuffers.Offset): void;
    static addFromPortId(builder: flatbuffers.Builder, FROM_PORT_IDOffset: flatbuffers.Offset): void;
    static addToNodeId(builder: flatbuffers.Builder, TO_NODE_IDOffset: flatbuffers.Offset): void;
    static addToPortId(builder: flatbuffers.Builder, TO_PORT_IDOffset: flatbuffers.Offset): void;
    static addContract(builder: flatbuffers.Builder, CONTRACTOffset: flatbuffers.Offset): void;
    static endPLGFlowEdge(builder: flatbuffers.Builder): flatbuffers.Offset;
    unpack(): PLGFlowEdgeT;
    unpackTo(_o: PLGFlowEdgeT): void;
}
export declare class PLGFlowEdgeT implements flatbuffers.IGeneratedObject {
    EDGE_ID: string | Uint8Array | null;
    FROM_NODE_ID: string | Uint8Array | null;
    FROM_PORT_ID: string | Uint8Array | null;
    TO_NODE_ID: string | Uint8Array | null;
    TO_PORT_ID: string | Uint8Array | null;
    CONTRACT: PLGFlowEdgeContractT | null;
    constructor(EDGE_ID?: string | Uint8Array | null, FROM_NODE_ID?: string | Uint8Array | null, FROM_PORT_ID?: string | Uint8Array | null, TO_NODE_ID?: string | Uint8Array | null, TO_PORT_ID?: string | Uint8Array | null, CONTRACT?: PLGFlowEdgeContractT | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=PLGFlowEdge.d.ts.map