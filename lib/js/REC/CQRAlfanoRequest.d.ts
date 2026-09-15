import * as flatbuffers from 'flatbuffers';
export declare class CQRAlfanoRequest implements flatbuffers.IUnpackableObject<CQRAlfanoRequestT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): CQRAlfanoRequest;
    static getRootAsCQRAlfanoRequest(bb: flatbuffers.ByteBuffer, obj?: CQRAlfanoRequest): CQRAlfanoRequest;
    static getSizePrefixedRootAsCQRAlfanoRequest(bb: flatbuffers.ByteBuffer, obj?: CQRAlfanoRequest): CQRAlfanoRequest;
    MISS_DISTANCE_M(): number;
    COMBINED_RADIUS_M(): number;
    static startCQRAlfanoRequest(builder: flatbuffers.Builder): void;
    static addMissDistanceM(builder: flatbuffers.Builder, MISS_DISTANCE_M: number): void;
    static addCombinedRadiusM(builder: flatbuffers.Builder, COMBINED_RADIUS_M: number): void;
    static endCQRAlfanoRequest(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createCQRAlfanoRequest(builder: flatbuffers.Builder, MISS_DISTANCE_M: number, COMBINED_RADIUS_M: number): flatbuffers.Offset;
    unpack(): CQRAlfanoRequestT;
    unpackTo(_o: CQRAlfanoRequestT): void;
}
export declare class CQRAlfanoRequestT implements flatbuffers.IGeneratedObject {
    MISS_DISTANCE_M: number;
    COMBINED_RADIUS_M: number;
    constructor(MISS_DISTANCE_M?: number, COMBINED_RADIUS_M?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=CQRAlfanoRequest.d.ts.map