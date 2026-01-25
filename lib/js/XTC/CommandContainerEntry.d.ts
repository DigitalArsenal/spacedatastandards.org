import * as flatbuffers from 'flatbuffers';
import { ArgumentRefEntry, ArgumentRefEntryT } from './ArgumentRefEntry.js';
import { FixedValueEntry, FixedValueEntryT } from './FixedValueEntry.js';
import { ParameterRefEntry, ParameterRefEntryT } from './ParameterRefEntry.js';
/**
 * Command container entry
 */
export declare class CommandContainerEntry implements flatbuffers.IUnpackableObject<CommandContainerEntryT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): CommandContainerEntry;
    static getRootAsCommandContainerEntry(bb: flatbuffers.ByteBuffer, obj?: CommandContainerEntry): CommandContainerEntry;
    static getSizePrefixedRootAsCommandContainerEntry(bb: flatbuffers.ByteBuffer, obj?: CommandContainerEntry): CommandContainerEntry;
    /**
     * Argument reference entry
     */
    ARGUMENT_REF_ENTRY(obj?: ArgumentRefEntry): ArgumentRefEntry | null;
    /**
     * Parameter reference entry
     */
    PARAMETER_REF_ENTRY(obj?: ParameterRefEntry): ParameterRefEntry | null;
    /**
     * Fixed value entry
     */
    FIXED_VALUE_ENTRY(obj?: FixedValueEntry): FixedValueEntry | null;
    static startCommandContainerEntry(builder: flatbuffers.Builder): void;
    static addArgumentRefEntry(builder: flatbuffers.Builder, ARGUMENT_REF_ENTRYOffset: flatbuffers.Offset): void;
    static addParameterRefEntry(builder: flatbuffers.Builder, PARAMETER_REF_ENTRYOffset: flatbuffers.Offset): void;
    static addFixedValueEntry(builder: flatbuffers.Builder, FIXED_VALUE_ENTRYOffset: flatbuffers.Offset): void;
    static endCommandContainerEntry(builder: flatbuffers.Builder): flatbuffers.Offset;
    unpack(): CommandContainerEntryT;
    unpackTo(_o: CommandContainerEntryT): void;
}
export declare class CommandContainerEntryT implements flatbuffers.IGeneratedObject {
    ARGUMENT_REF_ENTRY: ArgumentRefEntryT | null;
    PARAMETER_REF_ENTRY: ParameterRefEntryT | null;
    FIXED_VALUE_ENTRY: FixedValueEntryT | null;
    constructor(ARGUMENT_REF_ENTRY?: ArgumentRefEntryT | null, PARAMETER_REF_ENTRY?: ParameterRefEntryT | null, FIXED_VALUE_ENTRY?: FixedValueEntryT | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=CommandContainerEntry.d.ts.map