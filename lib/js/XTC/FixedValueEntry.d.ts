import * as flatbuffers from 'flatbuffers';
import { LocationInContainer, LocationInContainerT } from './LocationInContainer.js';
/**
 * Fixed value entry (static padding/header)
 */
export declare class FixedValueEntry implements flatbuffers.IUnpackableObject<FixedValueEntryT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): FixedValueEntry;
    static getRootAsFixedValueEntry(bb: flatbuffers.ByteBuffer, obj?: FixedValueEntry): FixedValueEntry;
    static getSizePrefixedRootAsFixedValueEntry(bb: flatbuffers.ByteBuffer, obj?: FixedValueEntry): FixedValueEntry;
    /**
     * Binary value (hex string)
     */
    BINARY_VALUE(): string | null;
    BINARY_VALUE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Size in bits
     */
    SIZE_IN_BITS(): number;
    /**
     * Name/description
     */
    NAME(): string | null;
    NAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Location in container
     */
    LOCATION(obj?: LocationInContainer): LocationInContainer | null;
    static startFixedValueEntry(builder: flatbuffers.Builder): void;
    static addBinaryValue(builder: flatbuffers.Builder, BINARY_VALUEOffset: flatbuffers.Offset): void;
    static addSizeInBits(builder: flatbuffers.Builder, SIZE_IN_BITS: number): void;
    static addName(builder: flatbuffers.Builder, NAMEOffset: flatbuffers.Offset): void;
    static addLocation(builder: flatbuffers.Builder, LOCATIONOffset: flatbuffers.Offset): void;
    static endFixedValueEntry(builder: flatbuffers.Builder): flatbuffers.Offset;
    unpack(): FixedValueEntryT;
    unpackTo(_o: FixedValueEntryT): void;
}
export declare class FixedValueEntryT implements flatbuffers.IGeneratedObject {
    BINARY_VALUE: string | Uint8Array | null;
    SIZE_IN_BITS: number;
    NAME: string | Uint8Array | null;
    LOCATION: LocationInContainerT | null;
    constructor(BINARY_VALUE?: string | Uint8Array | null, SIZE_IN_BITS?: number, NAME?: string | Uint8Array | null, LOCATION?: LocationInContainerT | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=FixedValueEntry.d.ts.map