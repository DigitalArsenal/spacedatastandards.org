import * as flatbuffers from 'flatbuffers';
/**
 * Orientation as unit quaternion
 */
export declare class CZMOrientation implements flatbuffers.IUnpackableObject<CZMOrientationT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): CZMOrientation;
    static getRootAsCZMOrientation(bb: flatbuffers.ByteBuffer, obj?: CZMOrientation): CZMOrientation;
    static getSizePrefixedRootAsCZMOrientation(bb: flatbuffers.ByteBuffer, obj?: CZMOrientation): CZMOrientation;
    /**
     * X component
     */
    UNIT_QUATERNION_X(): number;
    /**
     * Y component
     */
    UNIT_QUATERNION_Y(): number;
    /**
     * Z component
     */
    UNIT_QUATERNION_Z(): number;
    /**
     * W component
     */
    UNIT_QUATERNION_W(): number;
    static startCZMOrientation(builder: flatbuffers.Builder): void;
    static addUnitQuaternionX(builder: flatbuffers.Builder, UNIT_QUATERNION_X: number): void;
    static addUnitQuaternionY(builder: flatbuffers.Builder, UNIT_QUATERNION_Y: number): void;
    static addUnitQuaternionZ(builder: flatbuffers.Builder, UNIT_QUATERNION_Z: number): void;
    static addUnitQuaternionW(builder: flatbuffers.Builder, UNIT_QUATERNION_W: number): void;
    static endCZMOrientation(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createCZMOrientation(builder: flatbuffers.Builder, UNIT_QUATERNION_X: number, UNIT_QUATERNION_Y: number, UNIT_QUATERNION_Z: number, UNIT_QUATERNION_W: number): flatbuffers.Offset;
    unpack(): CZMOrientationT;
    unpackTo(_o: CZMOrientationT): void;
}
export declare class CZMOrientationT implements flatbuffers.IGeneratedObject {
    UNIT_QUATERNION_X: number;
    UNIT_QUATERNION_Y: number;
    UNIT_QUATERNION_Z: number;
    UNIT_QUATERNION_W: number;
    constructor(UNIT_QUATERNION_X?: number, UNIT_QUATERNION_Y?: number, UNIT_QUATERNION_Z?: number, UNIT_QUATERNION_W?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=CZMOrientation.d.ts.map