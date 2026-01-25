import * as flatbuffers from 'flatbuffers';
import { LocationInContainer, LocationInContainerT } from './LocationInContainer.js';
import { MatchCriteria, MatchCriteriaT } from './MatchCriteria.js';
import { RepeatEntry, RepeatEntryT } from './RepeatEntry.js';
/**
 * Parameter reference entry in container
 */
export declare class ParameterRefEntry implements flatbuffers.IUnpackableObject<ParameterRefEntryT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): ParameterRefEntry;
    static getRootAsParameterRefEntry(bb: flatbuffers.ByteBuffer, obj?: ParameterRefEntry): ParameterRefEntry;
    static getSizePrefixedRootAsParameterRefEntry(bb: flatbuffers.ByteBuffer, obj?: ParameterRefEntry): ParameterRefEntry;
    /**
     * Parameter reference path
     */
    PARAMETER_REF(): string | null;
    PARAMETER_REF(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
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
    /**
     * Short description
     */
    SHORT_DESCRIPTION(): string | null;
    SHORT_DESCRIPTION(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    static startParameterRefEntry(builder: flatbuffers.Builder): void;
    static addParameterRef(builder: flatbuffers.Builder, PARAMETER_REFOffset: flatbuffers.Offset): void;
    static addLocation(builder: flatbuffers.Builder, LOCATIONOffset: flatbuffers.Offset): void;
    static addRepeat(builder: flatbuffers.Builder, REPEATOffset: flatbuffers.Offset): void;
    static addIncludeCondition(builder: flatbuffers.Builder, INCLUDE_CONDITIONOffset: flatbuffers.Offset): void;
    static addShortDescription(builder: flatbuffers.Builder, SHORT_DESCRIPTIONOffset: flatbuffers.Offset): void;
    static endParameterRefEntry(builder: flatbuffers.Builder): flatbuffers.Offset;
    unpack(): ParameterRefEntryT;
    unpackTo(_o: ParameterRefEntryT): void;
}
export declare class ParameterRefEntryT implements flatbuffers.IGeneratedObject {
    PARAMETER_REF: string | Uint8Array | null;
    LOCATION: LocationInContainerT | null;
    REPEAT: RepeatEntryT | null;
    INCLUDE_CONDITION: MatchCriteriaT | null;
    SHORT_DESCRIPTION: string | Uint8Array | null;
    constructor(PARAMETER_REF?: string | Uint8Array | null, LOCATION?: LocationInContainerT | null, REPEAT?: RepeatEntryT | null, INCLUDE_CONDITION?: MatchCriteriaT | null, SHORT_DESCRIPTION?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=ParameterRefEntry.d.ts.map