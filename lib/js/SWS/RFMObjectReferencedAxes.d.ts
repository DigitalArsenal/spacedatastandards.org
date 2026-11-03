import * as flatbuffers from 'flatbuffers';
import { rfmVectorSpecification } from './rfmVectorSpecification.js';
/**
 * Axes built from the relative geometry of two objects. Exactly two of the
 * three axis assignments are independent; the third completes the triad.
 */
export declare class RFMObjectReferencedAxes implements flatbuffers.IUnpackableObject<RFMObjectReferencedAxesT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): RFMObjectReferencedAxes;
    static getRootAsRFMObjectReferencedAxes(bb: flatbuffers.ByteBuffer, obj?: RFMObjectReferencedAxes): RFMObjectReferencedAxes;
    static getSizePrefixedRootAsRFMObjectReferencedAxes(bb: flatbuffers.ByteBuffer, obj?: RFMObjectReferencedAxes): RFMObjectReferencedAxes;
    PRIMARY_OBJECT_ID(): string | null;
    PRIMARY_OBJECT_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    SECONDARY_OBJECT_ID(): string | null;
    SECONDARY_OBJECT_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    X_AXIS(): rfmVectorSpecification;
    Y_AXIS(): rfmVectorSpecification;
    Z_AXIS(): rfmVectorSpecification;
    static startRFMObjectReferencedAxes(builder: flatbuffers.Builder): void;
    static addPrimaryObjectId(builder: flatbuffers.Builder, PRIMARY_OBJECT_IDOffset: flatbuffers.Offset): void;
    static addSecondaryObjectId(builder: flatbuffers.Builder, SECONDARY_OBJECT_IDOffset: flatbuffers.Offset): void;
    static addXAxis(builder: flatbuffers.Builder, X_AXIS: rfmVectorSpecification): void;
    static addYAxis(builder: flatbuffers.Builder, Y_AXIS: rfmVectorSpecification): void;
    static addZAxis(builder: flatbuffers.Builder, Z_AXIS: rfmVectorSpecification): void;
    static endRFMObjectReferencedAxes(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createRFMObjectReferencedAxes(builder: flatbuffers.Builder, PRIMARY_OBJECT_IDOffset: flatbuffers.Offset, SECONDARY_OBJECT_IDOffset: flatbuffers.Offset, X_AXIS: rfmVectorSpecification, Y_AXIS: rfmVectorSpecification, Z_AXIS: rfmVectorSpecification): flatbuffers.Offset;
    unpack(): RFMObjectReferencedAxesT;
    unpackTo(_o: RFMObjectReferencedAxesT): void;
}
export declare class RFMObjectReferencedAxesT implements flatbuffers.IGeneratedObject {
    PRIMARY_OBJECT_ID: string | Uint8Array | null;
    SECONDARY_OBJECT_ID: string | Uint8Array | null;
    X_AXIS: rfmVectorSpecification;
    Y_AXIS: rfmVectorSpecification;
    Z_AXIS: rfmVectorSpecification;
    constructor(PRIMARY_OBJECT_ID?: string | Uint8Array | null, SECONDARY_OBJECT_ID?: string | Uint8Array | null, X_AXIS?: rfmVectorSpecification, Y_AXIS?: rfmVectorSpecification, Z_AXIS?: rfmVectorSpecification);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=RFMObjectReferencedAxes.d.ts.map