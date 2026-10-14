import * as flatbuffers from 'flatbuffers';
/**
 * An ellipsoidal possibility kernel.
 */
export declare class SCRPossibilityKernel implements flatbuffers.IUnpackableObject<SCRPossibilityKernelT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): SCRPossibilityKernel;
    static getRootAsSCRPossibilityKernel(bb: flatbuffers.ByteBuffer, obj?: SCRPossibilityKernel): SCRPossibilityKernel;
    static getSizePrefixedRootAsSCRPossibilityKernel(bb: flatbuffers.ByteBuffer, obj?: SCRPossibilityKernel): SCRPossibilityKernel;
    /**
     * Centre state x, y, z (m), vx, vy, vz (m/s): 6 values.
     */
    CENTRE(index: number): number | null;
    centreLength(): number;
    centreArray(): Float64Array | null;
    /**
     * Shape matrix, 6x6 row-major (36 values), positive definite, used like a
     * covariance in SI units.
     */
    SHAPE(index: number): number | null;
    shapeLength(): number;
    shapeArray(): Float64Array | null;
    static startSCRPossibilityKernel(builder: flatbuffers.Builder): void;
    static addCentre(builder: flatbuffers.Builder, CENTREOffset: flatbuffers.Offset): void;
    static createCentreVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createCentreVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startCentreVector(builder: flatbuffers.Builder, numElems: number): void;
    static addShape(builder: flatbuffers.Builder, SHAPEOffset: flatbuffers.Offset): void;
    static createShapeVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createShapeVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startShapeVector(builder: flatbuffers.Builder, numElems: number): void;
    static endSCRPossibilityKernel(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createSCRPossibilityKernel(builder: flatbuffers.Builder, CENTREOffset: flatbuffers.Offset, SHAPEOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): SCRPossibilityKernelT;
    unpackTo(_o: SCRPossibilityKernelT): void;
}
export declare class SCRPossibilityKernelT implements flatbuffers.IGeneratedObject {
    CENTRE: (number)[];
    SHAPE: (number)[];
    constructor(CENTRE?: (number)[], SHAPE?: (number)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=SCRPossibilityKernel.d.ts.map