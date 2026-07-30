import * as flatbuffers from 'flatbuffers';
/**
 * Binds a trigger to the node + input port it delivers its frame to.
 */
export declare class PLGFlowTriggerBinding implements flatbuffers.IUnpackableObject<PLGFlowTriggerBindingT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): PLGFlowTriggerBinding;
    static getRootAsPLGFlowTriggerBinding(bb: flatbuffers.ByteBuffer, obj?: PLGFlowTriggerBinding): PLGFlowTriggerBinding;
    static getSizePrefixedRootAsPLGFlowTriggerBinding(bb: flatbuffers.ByteBuffer, obj?: PLGFlowTriggerBinding): PLGFlowTriggerBinding;
    /**
     * Trigger identifier
     */
    TRIGGER_ID(): string;
    TRIGGER_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    /**
     * Target node id
     */
    TARGET_NODE_ID(): string;
    TARGET_NODE_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    /**
     * Target input port id
     */
    TARGET_PORT_ID(): string;
    TARGET_PORT_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    static startPLGFlowTriggerBinding(builder: flatbuffers.Builder): void;
    static addTriggerId(builder: flatbuffers.Builder, TRIGGER_IDOffset: flatbuffers.Offset): void;
    static addTargetNodeId(builder: flatbuffers.Builder, TARGET_NODE_IDOffset: flatbuffers.Offset): void;
    static addTargetPortId(builder: flatbuffers.Builder, TARGET_PORT_IDOffset: flatbuffers.Offset): void;
    static endPLGFlowTriggerBinding(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createPLGFlowTriggerBinding(builder: flatbuffers.Builder, TRIGGER_IDOffset: flatbuffers.Offset, TARGET_NODE_IDOffset: flatbuffers.Offset, TARGET_PORT_IDOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): PLGFlowTriggerBindingT;
    unpackTo(_o: PLGFlowTriggerBindingT): void;
}
export declare class PLGFlowTriggerBindingT implements flatbuffers.IGeneratedObject {
    TRIGGER_ID: string | Uint8Array | null;
    TARGET_NODE_ID: string | Uint8Array | null;
    TARGET_PORT_ID: string | Uint8Array | null;
    constructor(TRIGGER_ID?: string | Uint8Array | null, TARGET_NODE_ID?: string | Uint8Array | null, TARGET_PORT_ID?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=PLGFlowTriggerBinding.d.ts.map