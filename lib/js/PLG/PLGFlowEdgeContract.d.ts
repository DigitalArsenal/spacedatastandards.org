import * as flatbuffers from 'flatbuffers';
import { FlatBufferTypeRef, FlatBufferTypeRefT } from './FlatBufferTypeRef.js';
import { flowEdgeRoutePolicy } from './flowEdgeRoutePolicy.js';
/**
 * Exact validated SDS and representation contract bound into a signed flow
 * edge. CANONICAL_TYPE and ALIGNED_TYPE describe the same logical schema;
 * ALIGNED_TYPE carries its fixed layout in TAB.FlatBufferTypeRef.
 */
export declare class PLGFlowEdgeContract implements flatbuffers.IUnpackableObject<PLGFlowEdgeContractT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): PLGFlowEdgeContract;
    static getRootAsPLGFlowEdgeContract(bb: flatbuffers.ByteBuffer, obj?: PLGFlowEdgeContract): PLGFlowEdgeContract;
    static getSizePrefixedRootAsPLGFlowEdgeContract(bb: flatbuffers.ByteBuffer, obj?: PLGFlowEdgeContract): PLGFlowEdgeContract;
    /**
     * Canonical SDS identity carried by the edge. NOT `required`: an edge may
     * be opaque by design (see OPAQUE), and a signer must never be forced to
     * invent an identity to satisfy the schema. A contract MUST carry exactly
     * one of CANONICAL_TYPE or OPAQUE = true; a contract with neither, or with
     * both, is invalid and MUST be rejected by the compiler that signs the flow.
     */
    CANONICAL_TYPE(obj?: FlatBufferTypeRef): FlatBufferTypeRef | null;
    ALIGNED_TYPE(obj?: FlatBufferTypeRef): FlatBufferTypeRef | null;
    CANONICAL_FALLBACK_AVAILABLE(): boolean;
    ALIGNED_ELIGIBLE(): boolean;
    ROUTE_POLICY(): flowEdgeRoutePolicy;
    /**
     * The edge carries bytes with no SDS identity BY DESIGN — an
     * application-blind host-capability adapter (an HTTP body, a raw file
     * chunk) or a timer TICK frame with no payload at all. This is a deliberate
     * signed assertion of opacity, which is why it is an explicit flag rather
     * than an absent CANONICAL_TYPE: a missing type must stay distinguishable
     * from a declared-opaque one. An opaque edge is ineligible for the aligned
     * route, so ALIGNED_ELIGIBLE MUST be false when OPAQUE is true.
     */
    OPAQUE(): boolean;
    static startPLGFlowEdgeContract(builder: flatbuffers.Builder): void;
    static addCanonicalType(builder: flatbuffers.Builder, CANONICAL_TYPEOffset: flatbuffers.Offset): void;
    static addAlignedType(builder: flatbuffers.Builder, ALIGNED_TYPEOffset: flatbuffers.Offset): void;
    static addCanonicalFallbackAvailable(builder: flatbuffers.Builder, CANONICAL_FALLBACK_AVAILABLE: boolean): void;
    static addAlignedEligible(builder: flatbuffers.Builder, ALIGNED_ELIGIBLE: boolean): void;
    static addRoutePolicy(builder: flatbuffers.Builder, ROUTE_POLICY: flowEdgeRoutePolicy): void;
    static addOpaque(builder: flatbuffers.Builder, OPAQUE: boolean): void;
    static endPLGFlowEdgeContract(builder: flatbuffers.Builder): flatbuffers.Offset;
    unpack(): PLGFlowEdgeContractT;
    unpackTo(_o: PLGFlowEdgeContractT): void;
}
export declare class PLGFlowEdgeContractT implements flatbuffers.IGeneratedObject {
    CANONICAL_TYPE: FlatBufferTypeRefT | null;
    ALIGNED_TYPE: FlatBufferTypeRefT | null;
    CANONICAL_FALLBACK_AVAILABLE: boolean;
    ALIGNED_ELIGIBLE: boolean;
    ROUTE_POLICY: flowEdgeRoutePolicy;
    OPAQUE: boolean;
    constructor(CANONICAL_TYPE?: FlatBufferTypeRefT | null, ALIGNED_TYPE?: FlatBufferTypeRefT | null, CANONICAL_FALLBACK_AVAILABLE?: boolean, ALIGNED_ELIGIBLE?: boolean, ROUTE_POLICY?: flowEdgeRoutePolicy, OPAQUE?: boolean);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=PLGFlowEdgeContract.d.ts.map