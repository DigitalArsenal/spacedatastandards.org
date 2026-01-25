import * as flatbuffers from 'flatbuffers';
import { LocationInContainer, LocationInContainerT } from './LocationInContainer.js';
/**
 * Argument reference entry in command container
 */
export declare class ArgumentRefEntry implements flatbuffers.IUnpackableObject<ArgumentRefEntryT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): ArgumentRefEntry;
    static getRootAsArgumentRefEntry(bb: flatbuffers.ByteBuffer, obj?: ArgumentRefEntry): ArgumentRefEntry;
    static getSizePrefixedRootAsArgumentRefEntry(bb: flatbuffers.ByteBuffer, obj?: ArgumentRefEntry): ArgumentRefEntry;
    /**
     * Argument reference
     */
    ARGUMENT_REF(): string | null;
    ARGUMENT_REF(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Location in container
     */
    LOCATION(obj?: LocationInContainer): LocationInContainer | null;
    /**
     * Short description
     */
    SHORT_DESCRIPTION(): string | null;
    SHORT_DESCRIPTION(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    static startArgumentRefEntry(builder: flatbuffers.Builder): void;
    static addArgumentRef(builder: flatbuffers.Builder, ARGUMENT_REFOffset: flatbuffers.Offset): void;
    static addLocation(builder: flatbuffers.Builder, LOCATIONOffset: flatbuffers.Offset): void;
    static addShortDescription(builder: flatbuffers.Builder, SHORT_DESCRIPTIONOffset: flatbuffers.Offset): void;
    static endArgumentRefEntry(builder: flatbuffers.Builder): flatbuffers.Offset;
    unpack(): ArgumentRefEntryT;
    unpackTo(_o: ArgumentRefEntryT): void;
}
export declare class ArgumentRefEntryT implements flatbuffers.IGeneratedObject {
    ARGUMENT_REF: string | Uint8Array | null;
    LOCATION: LocationInContainerT | null;
    SHORT_DESCRIPTION: string | Uint8Array | null;
    constructor(ARGUMENT_REF?: string | Uint8Array | null, LOCATION?: LocationInContainerT | null, SHORT_DESCRIPTION?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=ArgumentRefEntry.d.ts.map