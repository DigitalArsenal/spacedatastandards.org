import * as flatbuffers from 'flatbuffers';
import { ReferenceLocationType } from './ReferenceLocationType.js';
/**
 * Location specification within a container
 */
export declare class LocationInContainer implements flatbuffers.IUnpackableObject<LocationInContainerT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): LocationInContainer;
    static getRootAsLocationInContainer(bb: flatbuffers.ByteBuffer, obj?: LocationInContainer): LocationInContainer;
    static getSizePrefixedRootAsLocationInContainer(bb: flatbuffers.ByteBuffer, obj?: LocationInContainer): LocationInContainer;
    /**
     * Reference location type
     */
    REFERENCE_LOCATION(): ReferenceLocationType;
    /**
     * Offset in bits from reference location
     */
    OFFSET_IN_BITS(): number;
    static startLocationInContainer(builder: flatbuffers.Builder): void;
    static addReferenceLocation(builder: flatbuffers.Builder, REFERENCE_LOCATION: ReferenceLocationType): void;
    static addOffsetInBits(builder: flatbuffers.Builder, OFFSET_IN_BITS: number): void;
    static endLocationInContainer(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createLocationInContainer(builder: flatbuffers.Builder, REFERENCE_LOCATION: ReferenceLocationType, OFFSET_IN_BITS: number): flatbuffers.Offset;
    unpack(): LocationInContainerT;
    unpackTo(_o: LocationInContainerT): void;
}
export declare class LocationInContainerT implements flatbuffers.IGeneratedObject {
    REFERENCE_LOCATION: ReferenceLocationType;
    OFFSET_IN_BITS: number;
    constructor(REFERENCE_LOCATION?: ReferenceLocationType, OFFSET_IN_BITS?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=LocationInContainer.d.ts.map