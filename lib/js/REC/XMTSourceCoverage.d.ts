import * as flatbuffers from 'flatbuffers';
/**
 * The objects a source declares it covers.
 */
export declare class XMTSourceCoverage implements flatbuffers.IUnpackableObject<XMTSourceCoverageT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): XMTSourceCoverage;
    static getRootAsXMTSourceCoverage(bb: flatbuffers.ByteBuffer, obj?: XMTSourceCoverage): XMTSourceCoverage;
    static getSizePrefixedRootAsXMTSourceCoverage(bb: flatbuffers.ByteBuffer, obj?: XMTSourceCoverage): XMTSourceCoverage;
    SOURCE_ID(): string | null;
    SOURCE_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Immutable publication the declaration comes from.
     */
    HEAD(): string | null;
    HEAD(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * International designators covered.
     */
    OBJECTS(index: number): string;
    OBJECTS(index: number, optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    objectsLength(): number;
    static startXMTSourceCoverage(builder: flatbuffers.Builder): void;
    static addSourceId(builder: flatbuffers.Builder, SOURCE_IDOffset: flatbuffers.Offset): void;
    static addHead(builder: flatbuffers.Builder, HEADOffset: flatbuffers.Offset): void;
    static addObjects(builder: flatbuffers.Builder, OBJECTSOffset: flatbuffers.Offset): void;
    static createObjectsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startObjectsVector(builder: flatbuffers.Builder, numElems: number): void;
    static endXMTSourceCoverage(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createXMTSourceCoverage(builder: flatbuffers.Builder, SOURCE_IDOffset: flatbuffers.Offset, HEADOffset: flatbuffers.Offset, OBJECTSOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): XMTSourceCoverageT;
    unpackTo(_o: XMTSourceCoverageT): void;
}
export declare class XMTSourceCoverageT implements flatbuffers.IGeneratedObject {
    SOURCE_ID: string | Uint8Array | null;
    HEAD: string | Uint8Array | null;
    OBJECTS: (string)[];
    constructor(SOURCE_ID?: string | Uint8Array | null, HEAD?: string | Uint8Array | null, OBJECTS?: (string)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=XMTSourceCoverage.d.ts.map