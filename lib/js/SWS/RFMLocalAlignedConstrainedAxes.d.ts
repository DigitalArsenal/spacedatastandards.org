import * as flatbuffers from 'flatbuffers';
/**
 * Axes built by aligning one vector with a reference direction and using a
 * second vector as a constraint. Vectors are 3-element, expressed in the
 * coordinate system named by REFERENCE_COORDINATE_SYSTEM_NAME.
 */
export declare class RFMLocalAlignedConstrainedAxes implements flatbuffers.IUnpackableObject<RFMLocalAlignedConstrainedAxesT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): RFMLocalAlignedConstrainedAxes;
    static getRootAsRFMLocalAlignedConstrainedAxes(bb: flatbuffers.ByteBuffer, obj?: RFMLocalAlignedConstrainedAxes): RFMLocalAlignedConstrainedAxes;
    static getSizePrefixedRootAsRFMLocalAlignedConstrainedAxes(bb: flatbuffers.ByteBuffer, obj?: RFMLocalAlignedConstrainedAxes): RFMLocalAlignedConstrainedAxes;
    REFERENCE_OBJECT_ID(): string | null;
    REFERENCE_OBJECT_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    REFERENCE_COORDINATE_SYSTEM_NAME(): string | null;
    REFERENCE_COORDINATE_SYSTEM_NAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    ALIGNMENT_VECTOR(index: number): number | null;
    alignmentVectorLength(): number;
    alignmentVectorArray(): Float64Array | null;
    ALIGNMENT_REFERENCE_VECTOR(index: number): number | null;
    alignmentReferenceVectorLength(): number;
    alignmentReferenceVectorArray(): Float64Array | null;
    CONSTRAINT_VECTOR(index: number): number | null;
    constraintVectorLength(): number;
    constraintVectorArray(): Float64Array | null;
    CONSTRAINT_REFERENCE_VECTOR(index: number): number | null;
    constraintReferenceVectorLength(): number;
    constraintReferenceVectorArray(): Float64Array | null;
    static startRFMLocalAlignedConstrainedAxes(builder: flatbuffers.Builder): void;
    static addReferenceObjectId(builder: flatbuffers.Builder, REFERENCE_OBJECT_IDOffset: flatbuffers.Offset): void;
    static addReferenceCoordinateSystemName(builder: flatbuffers.Builder, REFERENCE_COORDINATE_SYSTEM_NAMEOffset: flatbuffers.Offset): void;
    static addAlignmentVector(builder: flatbuffers.Builder, ALIGNMENT_VECTOROffset: flatbuffers.Offset): void;
    static createAlignmentVectorVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createAlignmentVectorVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startAlignmentVectorVector(builder: flatbuffers.Builder, numElems: number): void;
    static addAlignmentReferenceVector(builder: flatbuffers.Builder, ALIGNMENT_REFERENCE_VECTOROffset: flatbuffers.Offset): void;
    static createAlignmentReferenceVectorVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createAlignmentReferenceVectorVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startAlignmentReferenceVectorVector(builder: flatbuffers.Builder, numElems: number): void;
    static addConstraintVector(builder: flatbuffers.Builder, CONSTRAINT_VECTOROffset: flatbuffers.Offset): void;
    static createConstraintVectorVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createConstraintVectorVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startConstraintVectorVector(builder: flatbuffers.Builder, numElems: number): void;
    static addConstraintReferenceVector(builder: flatbuffers.Builder, CONSTRAINT_REFERENCE_VECTOROffset: flatbuffers.Offset): void;
    static createConstraintReferenceVectorVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createConstraintReferenceVectorVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startConstraintReferenceVectorVector(builder: flatbuffers.Builder, numElems: number): void;
    static endRFMLocalAlignedConstrainedAxes(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createRFMLocalAlignedConstrainedAxes(builder: flatbuffers.Builder, REFERENCE_OBJECT_IDOffset: flatbuffers.Offset, REFERENCE_COORDINATE_SYSTEM_NAMEOffset: flatbuffers.Offset, ALIGNMENT_VECTOROffset: flatbuffers.Offset, ALIGNMENT_REFERENCE_VECTOROffset: flatbuffers.Offset, CONSTRAINT_VECTOROffset: flatbuffers.Offset, CONSTRAINT_REFERENCE_VECTOROffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): RFMLocalAlignedConstrainedAxesT;
    unpackTo(_o: RFMLocalAlignedConstrainedAxesT): void;
}
export declare class RFMLocalAlignedConstrainedAxesT implements flatbuffers.IGeneratedObject {
    REFERENCE_OBJECT_ID: string | Uint8Array | null;
    REFERENCE_COORDINATE_SYSTEM_NAME: string | Uint8Array | null;
    ALIGNMENT_VECTOR: (number)[];
    ALIGNMENT_REFERENCE_VECTOR: (number)[];
    CONSTRAINT_VECTOR: (number)[];
    CONSTRAINT_REFERENCE_VECTOR: (number)[];
    constructor(REFERENCE_OBJECT_ID?: string | Uint8Array | null, REFERENCE_COORDINATE_SYSTEM_NAME?: string | Uint8Array | null, ALIGNMENT_VECTOR?: (number)[], ALIGNMENT_REFERENCE_VECTOR?: (number)[], CONSTRAINT_VECTOR?: (number)[], CONSTRAINT_REFERENCE_VECTOR?: (number)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=RFMLocalAlignedConstrainedAxes.d.ts.map