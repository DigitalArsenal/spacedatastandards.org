import * as flatbuffers from 'flatbuffers';
import { GJNPosition, GJNPositionT } from './GJNPosition.js';
/**
 * A linear ring is a closed LineString with 4+ positions (first = last)
 */
export declare class GJNLinearRing implements flatbuffers.IUnpackableObject<GJNLinearRingT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): GJNLinearRing;
    static getRootAsGJNLinearRing(bb: flatbuffers.ByteBuffer, obj?: GJNLinearRing): GJNLinearRing;
    static getSizePrefixedRootAsGJNLinearRing(bb: flatbuffers.ByteBuffer, obj?: GJNLinearRing): GJNLinearRing;
    /**
     * Ordered positions forming the ring
     */
    POSITIONS(index: number, obj?: GJNPosition): GJNPosition | null;
    positionsLength(): number;
    static startGJNLinearRing(builder: flatbuffers.Builder): void;
    static addPositions(builder: flatbuffers.Builder, POSITIONSOffset: flatbuffers.Offset): void;
    static createPositionsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startPositionsVector(builder: flatbuffers.Builder, numElems: number): void;
    static endGJNLinearRing(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createGJNLinearRing(builder: flatbuffers.Builder, POSITIONSOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): GJNLinearRingT;
    unpackTo(_o: GJNLinearRingT): void;
}
export declare class GJNLinearRingT implements flatbuffers.IGeneratedObject {
    POSITIONS: (GJNPositionT)[];
    constructor(POSITIONS?: (GJNPositionT)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=GJNLinearRing.d.ts.map