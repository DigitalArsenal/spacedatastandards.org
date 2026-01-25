import * as flatbuffers from 'flatbuffers';
/**
 * Service definition
 */
export declare class Service implements flatbuffers.IUnpackableObject<ServiceT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): Service;
    static getRootAsService(bb: flatbuffers.ByteBuffer, obj?: Service): Service;
    static getSizePrefixedRootAsService(bb: flatbuffers.ByteBuffer, obj?: Service): Service;
    /**
     * Service name
     */
    NAME(): string | null;
    NAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Short description
     */
    SHORT_DESCRIPTION(): string | null;
    SHORT_DESCRIPTION(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Long description
     */
    LONG_DESCRIPTION(): string | null;
    LONG_DESCRIPTION(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Container references provided by this service
     */
    CONTAINER_REFS(index: number): string;
    CONTAINER_REFS(index: number, optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    containerRefsLength(): number;
    /**
     * Command references accepted by this service
     */
    COMMAND_REFS(index: number): string;
    COMMAND_REFS(index: number, optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    commandRefsLength(): number;
    static startService(builder: flatbuffers.Builder): void;
    static addName(builder: flatbuffers.Builder, NAMEOffset: flatbuffers.Offset): void;
    static addShortDescription(builder: flatbuffers.Builder, SHORT_DESCRIPTIONOffset: flatbuffers.Offset): void;
    static addLongDescription(builder: flatbuffers.Builder, LONG_DESCRIPTIONOffset: flatbuffers.Offset): void;
    static addContainerRefs(builder: flatbuffers.Builder, CONTAINER_REFSOffset: flatbuffers.Offset): void;
    static createContainerRefsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startContainerRefsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addCommandRefs(builder: flatbuffers.Builder, COMMAND_REFSOffset: flatbuffers.Offset): void;
    static createCommandRefsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startCommandRefsVector(builder: flatbuffers.Builder, numElems: number): void;
    static endService(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createService(builder: flatbuffers.Builder, NAMEOffset: flatbuffers.Offset, SHORT_DESCRIPTIONOffset: flatbuffers.Offset, LONG_DESCRIPTIONOffset: flatbuffers.Offset, CONTAINER_REFSOffset: flatbuffers.Offset, COMMAND_REFSOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): ServiceT;
    unpackTo(_o: ServiceT): void;
}
export declare class ServiceT implements flatbuffers.IGeneratedObject {
    NAME: string | Uint8Array | null;
    SHORT_DESCRIPTION: string | Uint8Array | null;
    LONG_DESCRIPTION: string | Uint8Array | null;
    CONTAINER_REFS: (string)[];
    COMMAND_REFS: (string)[];
    constructor(NAME?: string | Uint8Array | null, SHORT_DESCRIPTION?: string | Uint8Array | null, LONG_DESCRIPTION?: string | Uint8Array | null, CONTAINER_REFS?: (string)[], COMMAND_REFS?: (string)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=Service.d.ts.map