import * as flatbuffers from 'flatbuffers';
/**
 * Argument assignment (value binding)
 */
export declare class ArgumentAssignment implements flatbuffers.IUnpackableObject<ArgumentAssignmentT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): ArgumentAssignment;
    static getRootAsArgumentAssignment(bb: flatbuffers.ByteBuffer, obj?: ArgumentAssignment): ArgumentAssignment;
    static getSizePrefixedRootAsArgumentAssignment(bb: flatbuffers.ByteBuffer, obj?: ArgumentAssignment): ArgumentAssignment;
    /**
     * Argument name
     */
    ARGUMENT_NAME(): string | null;
    ARGUMENT_NAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Assigned value
     */
    VALUE(): string | null;
    VALUE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    static startArgumentAssignment(builder: flatbuffers.Builder): void;
    static addArgumentName(builder: flatbuffers.Builder, ARGUMENT_NAMEOffset: flatbuffers.Offset): void;
    static addValue(builder: flatbuffers.Builder, VALUEOffset: flatbuffers.Offset): void;
    static endArgumentAssignment(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createArgumentAssignment(builder: flatbuffers.Builder, ARGUMENT_NAMEOffset: flatbuffers.Offset, VALUEOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): ArgumentAssignmentT;
    unpackTo(_o: ArgumentAssignmentT): void;
}
export declare class ArgumentAssignmentT implements flatbuffers.IGeneratedObject {
    ARGUMENT_NAME: string | Uint8Array | null;
    VALUE: string | Uint8Array | null;
    constructor(ARGUMENT_NAME?: string | Uint8Array | null, VALUE?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=ArgumentAssignment.d.ts.map