import * as flatbuffers from 'flatbuffers';
/**
 * Near/Far scalar for distance-based display
 */
export declare class CZMNearFarScalar implements flatbuffers.IUnpackableObject<CZMNearFarScalarT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): CZMNearFarScalar;
    static getRootAsCZMNearFarScalar(bb: flatbuffers.ByteBuffer, obj?: CZMNearFarScalar): CZMNearFarScalar;
    static getSizePrefixedRootAsCZMNearFarScalar(bb: flatbuffers.ByteBuffer, obj?: CZMNearFarScalar): CZMNearFarScalar;
    /**
     * Near distance in meters
     */
    NEAR_DISTANCE(): number;
    /**
     * Value at near distance
     */
    NEAR_VALUE(): number;
    /**
     * Far distance in meters
     */
    FAR_DISTANCE(): number;
    /**
     * Value at far distance
     */
    FAR_VALUE(): number;
    static startCZMNearFarScalar(builder: flatbuffers.Builder): void;
    static addNearDistance(builder: flatbuffers.Builder, NEAR_DISTANCE: number): void;
    static addNearValue(builder: flatbuffers.Builder, NEAR_VALUE: number): void;
    static addFarDistance(builder: flatbuffers.Builder, FAR_DISTANCE: number): void;
    static addFarValue(builder: flatbuffers.Builder, FAR_VALUE: number): void;
    static endCZMNearFarScalar(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createCZMNearFarScalar(builder: flatbuffers.Builder, NEAR_DISTANCE: number, NEAR_VALUE: number, FAR_DISTANCE: number, FAR_VALUE: number): flatbuffers.Offset;
    unpack(): CZMNearFarScalarT;
    unpackTo(_o: CZMNearFarScalarT): void;
}
export declare class CZMNearFarScalarT implements flatbuffers.IGeneratedObject {
    NEAR_DISTANCE: number;
    NEAR_VALUE: number;
    FAR_DISTANCE: number;
    FAR_VALUE: number;
    constructor(NEAR_DISTANCE?: number, NEAR_VALUE?: number, FAR_DISTANCE?: number, FAR_VALUE?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=CZMNearFarScalar.d.ts.map