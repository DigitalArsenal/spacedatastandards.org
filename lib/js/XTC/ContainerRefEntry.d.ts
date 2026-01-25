import * as flatbuffers from 'flatbuffers';
import { LocationInContainer, LocationInContainerT } from './LocationInContainer.js';
import { MatchCriteria, MatchCriteriaT } from './MatchCriteria.js';
import { RepeatEntry, RepeatEntryT } from './RepeatEntry.js';
/**
 * Container reference entry (nested container)
 */
export declare class ContainerRefEntry implements flatbuffers.IUnpackableObject<ContainerRefEntryT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): ContainerRefEntry;
    static getRootAsContainerRefEntry(bb: flatbuffers.ByteBuffer, obj?: ContainerRefEntry): ContainerRefEntry;
    static getSizePrefixedRootAsContainerRefEntry(bb: flatbuffers.ByteBuffer, obj?: ContainerRefEntry): ContainerRefEntry;
    /**
     * Container reference path
     */
    CONTAINER_REF(): string | null;
    CONTAINER_REF(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Location in container
     */
    LOCATION(obj?: LocationInContainer): LocationInContainer | null;
    /**
     * Repeat specification
     */
    REPEAT(obj?: RepeatEntry): RepeatEntry | null;
    /**
     * Include condition
     */
    INCLUDE_CONDITION(obj?: MatchCriteria): MatchCriteria | null;
    static startContainerRefEntry(builder: flatbuffers.Builder): void;
    static addContainerRef(builder: flatbuffers.Builder, CONTAINER_REFOffset: flatbuffers.Offset): void;
    static addLocation(builder: flatbuffers.Builder, LOCATIONOffset: flatbuffers.Offset): void;
    static addRepeat(builder: flatbuffers.Builder, REPEATOffset: flatbuffers.Offset): void;
    static addIncludeCondition(builder: flatbuffers.Builder, INCLUDE_CONDITIONOffset: flatbuffers.Offset): void;
    static endContainerRefEntry(builder: flatbuffers.Builder): flatbuffers.Offset;
    unpack(): ContainerRefEntryT;
    unpackTo(_o: ContainerRefEntryT): void;
}
export declare class ContainerRefEntryT implements flatbuffers.IGeneratedObject {
    CONTAINER_REF: string | Uint8Array | null;
    LOCATION: LocationInContainerT | null;
    REPEAT: RepeatEntryT | null;
    INCLUDE_CONDITION: MatchCriteriaT | null;
    constructor(CONTAINER_REF?: string | Uint8Array | null, LOCATION?: LocationInContainerT | null, REPEAT?: RepeatEntryT | null, INCLUDE_CONDITION?: MatchCriteriaT | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=ContainerRefEntry.d.ts.map