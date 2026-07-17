import * as flatbuffers from 'flatbuffers';
/**
 * One node in a composed flow graph. A degenerate flow IS a module: a leaf
 * module leaves the flow-graph fields on PLG empty; a composed flow populates
 * them. This is how flows reuse the module schema rather than a separate one.
 */
export declare class PLGFlowNode implements flatbuffers.IUnpackableObject<PLGFlowNodeT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): PLGFlowNode;
    static getRootAsPLGFlowNode(bb: flatbuffers.ByteBuffer, obj?: PLGFlowNode): PLGFlowNode;
    static getSizePrefixedRootAsPLGFlowNode(bb: flatbuffers.ByteBuffer, obj?: PLGFlowNode): PLGFlowNode;
    /**
     * Stable node identifier within this flow
     */
    NODE_ID(): string;
    NODE_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    /**
     * Plugin id of the module this node invokes
     */
    PLUGIN_ID(): string;
    PLUGIN_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    /**
     * Method id invoked on the module
     */
    METHOD_ID(): string | null;
    METHOD_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Node kind, e.g. "transform", "trigger", "capability"
     */
    KIND(): string | null;
    KIND(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Dispatch model: empty = linked-direct (in-wasm), else "host-capability"
     */
    DISPATCH_MODEL(): string | null;
    DISPATCH_MODEL(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Opaque per-node configuration (FlatBuffer or raw bytes; never JSON)
     */
    CONFIG(index: number): number | null;
    configLength(): number;
    configArray(): Uint8Array | null;
    /**
     * Editor layout X position
     */
    UI_X(): number;
    /**
     * Editor layout Y position
     */
    UI_Y(): number;
    static startPLGFlowNode(builder: flatbuffers.Builder): void;
    static addNodeId(builder: flatbuffers.Builder, NODE_IDOffset: flatbuffers.Offset): void;
    static addPluginId(builder: flatbuffers.Builder, PLUGIN_IDOffset: flatbuffers.Offset): void;
    static addMethodId(builder: flatbuffers.Builder, METHOD_IDOffset: flatbuffers.Offset): void;
    static addKind(builder: flatbuffers.Builder, KINDOffset: flatbuffers.Offset): void;
    static addDispatchModel(builder: flatbuffers.Builder, DISPATCH_MODELOffset: flatbuffers.Offset): void;
    static addConfig(builder: flatbuffers.Builder, CONFIGOffset: flatbuffers.Offset): void;
    static createConfigVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startConfigVector(builder: flatbuffers.Builder, numElems: number): void;
    static addUiX(builder: flatbuffers.Builder, UI_X: number): void;
    static addUiY(builder: flatbuffers.Builder, UI_Y: number): void;
    static endPLGFlowNode(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createPLGFlowNode(builder: flatbuffers.Builder, NODE_IDOffset: flatbuffers.Offset, PLUGIN_IDOffset: flatbuffers.Offset, METHOD_IDOffset: flatbuffers.Offset, KINDOffset: flatbuffers.Offset, DISPATCH_MODELOffset: flatbuffers.Offset, CONFIGOffset: flatbuffers.Offset, UI_X: number, UI_Y: number): flatbuffers.Offset;
    unpack(): PLGFlowNodeT;
    unpackTo(_o: PLGFlowNodeT): void;
}
export declare class PLGFlowNodeT implements flatbuffers.IGeneratedObject {
    NODE_ID: string | Uint8Array | null;
    PLUGIN_ID: string | Uint8Array | null;
    METHOD_ID: string | Uint8Array | null;
    KIND: string | Uint8Array | null;
    DISPATCH_MODEL: string | Uint8Array | null;
    CONFIG: (number)[];
    UI_X: number;
    UI_Y: number;
    constructor(NODE_ID?: string | Uint8Array | null, PLUGIN_ID?: string | Uint8Array | null, METHOD_ID?: string | Uint8Array | null, KIND?: string | Uint8Array | null, DISPATCH_MODEL?: string | Uint8Array | null, CONFIG?: (number)[], UI_X?: number, UI_Y?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=PLGFlowNode.d.ts.map