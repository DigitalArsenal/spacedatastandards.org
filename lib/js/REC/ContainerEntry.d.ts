import * as flatbuffers from 'flatbuffers';
import { ArrayParameterRefEntry, ArrayParameterRefEntryT } from './ArrayParameterRefEntry.js';
import { ContainerRefEntry, ContainerRefEntryT } from './ContainerRefEntry.js';
import { FixedValueEntry, FixedValueEntryT } from './FixedValueEntry.js';
import { ParameterRefEntry, ParameterRefEntryT } from './ParameterRefEntry.js';
/**
 * Container entry list item (union of entry types)
 */
export declare class ContainerEntry implements flatbuffers.IUnpackableObject<ContainerEntryT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): ContainerEntry;
    static getRootAsContainerEntry(bb: flatbuffers.ByteBuffer, obj?: ContainerEntry): ContainerEntry;
    static getSizePrefixedRootAsContainerEntry(bb: flatbuffers.ByteBuffer, obj?: ContainerEntry): ContainerEntry;
    /**
     * Parameter reference entry
     */
    PARAMETER_REF_ENTRY(obj?: ParameterRefEntry): ParameterRefEntry | null;
    /**
     * Container reference entry
     */
    CONTAINER_REF_ENTRY(obj?: ContainerRefEntry): ContainerRefEntry | null;
    /**
     * Fixed value entry
     */
    FIXED_VALUE_ENTRY(obj?: FixedValueEntry): FixedValueEntry | null;
    /**
     * Array parameter reference entry
     */
    ARRAY_PARAMETER_REF_ENTRY(obj?: ArrayParameterRefEntry): ArrayParameterRefEntry | null;
    static startContainerEntry(builder: flatbuffers.Builder): void;
    static addParameterRefEntry(builder: flatbuffers.Builder, PARAMETER_REF_ENTRYOffset: flatbuffers.Offset): void;
    static addContainerRefEntry(builder: flatbuffers.Builder, CONTAINER_REF_ENTRYOffset: flatbuffers.Offset): void;
    static addFixedValueEntry(builder: flatbuffers.Builder, FIXED_VALUE_ENTRYOffset: flatbuffers.Offset): void;
    static addArrayParameterRefEntry(builder: flatbuffers.Builder, ARRAY_PARAMETER_REF_ENTRYOffset: flatbuffers.Offset): void;
    static endContainerEntry(builder: flatbuffers.Builder): flatbuffers.Offset;
    unpack(): ContainerEntryT;
    unpackTo(_o: ContainerEntryT): void;
}
export declare class ContainerEntryT implements flatbuffers.IGeneratedObject {
    PARAMETER_REF_ENTRY: ParameterRefEntryT | null;
    CONTAINER_REF_ENTRY: ContainerRefEntryT | null;
    FIXED_VALUE_ENTRY: FixedValueEntryT | null;
    ARRAY_PARAMETER_REF_ENTRY: ArrayParameterRefEntryT | null;
    constructor(PARAMETER_REF_ENTRY?: ParameterRefEntryT | null, CONTAINER_REF_ENTRY?: ContainerRefEntryT | null, FIXED_VALUE_ENTRY?: FixedValueEntryT | null, ARRAY_PARAMETER_REF_ENTRY?: ArrayParameterRefEntryT | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=ContainerEntry.d.ts.map