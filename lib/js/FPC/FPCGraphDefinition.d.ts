import * as flatbuffers from 'flatbuffers';
/**
 * Graph creation / reset request.
 */
export declare class FPCGraphDefinition implements flatbuffers.IUnpackableObject<FPCGraphDefinitionT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): FPCGraphDefinition;
    static getRootAsFPCGraphDefinition(bb: flatbuffers.ByteBuffer, obj?: FPCGraphDefinition): FPCGraphDefinition;
    static getSizePrefixedRootAsFPCGraphDefinition(bb: flatbuffers.ByteBuffer, obj?: FPCGraphDefinition): FPCGraphDefinition;
    /**
     * Number of vertices in the graph.
     */
    VERTEX_COUNT(): number;
    static startFPCGraphDefinition(builder: flatbuffers.Builder): void;
    static addVertexCount(builder: flatbuffers.Builder, VERTEX_COUNT: number): void;
    static endFPCGraphDefinition(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createFPCGraphDefinition(builder: flatbuffers.Builder, VERTEX_COUNT: number): flatbuffers.Offset;
    unpack(): FPCGraphDefinitionT;
    unpackTo(_o: FPCGraphDefinitionT): void;
}
export declare class FPCGraphDefinitionT implements flatbuffers.IGeneratedObject {
    VERTEX_COUNT: number;
    constructor(VERTEX_COUNT?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=FPCGraphDefinition.d.ts.map