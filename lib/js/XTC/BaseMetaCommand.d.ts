import * as flatbuffers from 'flatbuffers';
import { ArgumentAssignment, ArgumentAssignmentT } from './ArgumentAssignment.js';
/**
 * Base metacommand reference
 */
export declare class BaseMetaCommand implements flatbuffers.IUnpackableObject<BaseMetaCommandT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): BaseMetaCommand;
    static getRootAsBaseMetaCommand(bb: flatbuffers.ByteBuffer, obj?: BaseMetaCommand): BaseMetaCommand;
    static getSizePrefixedRootAsBaseMetaCommand(bb: flatbuffers.ByteBuffer, obj?: BaseMetaCommand): BaseMetaCommand;
    /**
     * MetaCommand reference
     */
    META_COMMAND_REF(): string | null;
    META_COMMAND_REF(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Argument assignments for inherited arguments
     */
    ARGUMENT_ASSIGNMENTS(index: number, obj?: ArgumentAssignment): ArgumentAssignment | null;
    argumentAssignmentsLength(): number;
    static startBaseMetaCommand(builder: flatbuffers.Builder): void;
    static addMetaCommandRef(builder: flatbuffers.Builder, META_COMMAND_REFOffset: flatbuffers.Offset): void;
    static addArgumentAssignments(builder: flatbuffers.Builder, ARGUMENT_ASSIGNMENTSOffset: flatbuffers.Offset): void;
    static createArgumentAssignmentsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startArgumentAssignmentsVector(builder: flatbuffers.Builder, numElems: number): void;
    static endBaseMetaCommand(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createBaseMetaCommand(builder: flatbuffers.Builder, META_COMMAND_REFOffset: flatbuffers.Offset, ARGUMENT_ASSIGNMENTSOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): BaseMetaCommandT;
    unpackTo(_o: BaseMetaCommandT): void;
}
export declare class BaseMetaCommandT implements flatbuffers.IGeneratedObject {
    META_COMMAND_REF: string | Uint8Array | null;
    ARGUMENT_ASSIGNMENTS: (ArgumentAssignmentT)[];
    constructor(META_COMMAND_REF?: string | Uint8Array | null, ARGUMENT_ASSIGNMENTS?: (ArgumentAssignmentT)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=BaseMetaCommand.d.ts.map