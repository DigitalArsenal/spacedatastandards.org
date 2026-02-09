import * as flatbuffers from 'flatbuffers';
/**
 * Distance display condition
 */
export declare class CZMDistanceDisplayCondition implements flatbuffers.IUnpackableObject<CZMDistanceDisplayConditionT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): CZMDistanceDisplayCondition;
    static getRootAsCZMDistanceDisplayCondition(bb: flatbuffers.ByteBuffer, obj?: CZMDistanceDisplayCondition): CZMDistanceDisplayCondition;
    static getSizePrefixedRootAsCZMDistanceDisplayCondition(bb: flatbuffers.ByteBuffer, obj?: CZMDistanceDisplayCondition): CZMDistanceDisplayCondition;
    /**
     * Near distance in meters
     */
    NEAR_DISTANCE(): number;
    /**
     * Far distance in meters
     */
    FAR_DISTANCE(): number;
    static startCZMDistanceDisplayCondition(builder: flatbuffers.Builder): void;
    static addNearDistance(builder: flatbuffers.Builder, NEAR_DISTANCE: number): void;
    static addFarDistance(builder: flatbuffers.Builder, FAR_DISTANCE: number): void;
    static endCZMDistanceDisplayCondition(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createCZMDistanceDisplayCondition(builder: flatbuffers.Builder, NEAR_DISTANCE: number, FAR_DISTANCE: number): flatbuffers.Offset;
    unpack(): CZMDistanceDisplayConditionT;
    unpackTo(_o: CZMDistanceDisplayConditionT): void;
}
export declare class CZMDistanceDisplayConditionT implements flatbuffers.IGeneratedObject {
    NEAR_DISTANCE: number;
    FAR_DISTANCE: number;
    constructor(NEAR_DISTANCE?: number, FAR_DISTANCE?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=CZMDistanceDisplayCondition.d.ts.map