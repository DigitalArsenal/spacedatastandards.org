import * as flatbuffers from 'flatbuffers';
import { LocationInContainer, LocationInContainerT } from './LocationInContainer.js';
/**
 * Array parameter reference entry
 */
export declare class ArrayParameterRefEntry implements flatbuffers.IUnpackableObject<ArrayParameterRefEntryT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): ArrayParameterRefEntry;
    static getRootAsArrayParameterRefEntry(bb: flatbuffers.ByteBuffer, obj?: ArrayParameterRefEntry): ArrayParameterRefEntry;
    static getSizePrefixedRootAsArrayParameterRefEntry(bb: flatbuffers.ByteBuffer, obj?: ArrayParameterRefEntry): ArrayParameterRefEntry;
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
     * First index to include
     */
    FIRST_INDEX(): number;
    /**
     * Last index to include
     */
    LAST_INDEX(): number;
    static startArrayParameterRefEntry(builder: flatbuffers.Builder): void;
    static addParameterRef(builder: flatbuffers.Builder, PARAMETER_REFOffset: flatbuffers.Offset): void;
    static addLocation(builder: flatbuffers.Builder, LOCATIONOffset: flatbuffers.Offset): void;
    static addFirstIndex(builder: flatbuffers.Builder, FIRST_INDEX: number): void;
    static addLastIndex(builder: flatbuffers.Builder, LAST_INDEX: number): void;
    static endArrayParameterRefEntry(builder: flatbuffers.Builder): flatbuffers.Offset;
    unpack(): ArrayParameterRefEntryT;
    unpackTo(_o: ArrayParameterRefEntryT): void;
}
export declare class ArrayParameterRefEntryT implements flatbuffers.IGeneratedObject {
    PARAMETER_REF: string | Uint8Array | null;
    LOCATION: LocationInContainerT | null;
    FIRST_INDEX: number;
    LAST_INDEX: number;
    constructor(PARAMETER_REF?: string | Uint8Array | null, LOCATION?: LocationInContainerT | null, FIRST_INDEX?: number, LAST_INDEX?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=ArrayParameterRefEntry.d.ts.map