import * as flatbuffers from 'flatbuffers';
/**
 * Cartesian position (X, Y, Z in meters)
 */
export declare class CZMCartesian implements flatbuffers.IUnpackableObject<CZMCartesianT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): CZMCartesian;
    static getRootAsCZMCartesian(bb: flatbuffers.ByteBuffer, obj?: CZMCartesian): CZMCartesian;
    static getSizePrefixedRootAsCZMCartesian(bb: flatbuffers.ByteBuffer, obj?: CZMCartesian): CZMCartesian;
    /**
     * X component in meters (Earth-fixed)
     */
    X(): number;
    /**
     * Y component in meters (Earth-fixed)
     */
    Y(): number;
    /**
     * Z component in meters (Earth-fixed)
     */
    Z(): number;
    static startCZMCartesian(builder: flatbuffers.Builder): void;
    static addX(builder: flatbuffers.Builder, X: number): void;
    static addY(builder: flatbuffers.Builder, Y: number): void;
    static addZ(builder: flatbuffers.Builder, Z: number): void;
    static endCZMCartesian(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createCZMCartesian(builder: flatbuffers.Builder, X: number, Y: number, Z: number): flatbuffers.Offset;
    unpack(): CZMCartesianT;
    unpackTo(_o: CZMCartesianT): void;
}
export declare class CZMCartesianT implements flatbuffers.IGeneratedObject {
    X: number;
    Y: number;
    Z: number;
    constructor(X?: number, Y?: number, Z?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=CZMCartesian.d.ts.map