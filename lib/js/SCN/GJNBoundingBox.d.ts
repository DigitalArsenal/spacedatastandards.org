import * as flatbuffers from 'flatbuffers';
/**
 * GeoJSON Bounding Box [west, south, east, north] or [west, south, min-alt, east, north, max-alt]
 */
export declare class GJNBoundingBox implements flatbuffers.IUnpackableObject<GJNBoundingBoxT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): GJNBoundingBox;
    static getRootAsGJNBoundingBox(bb: flatbuffers.ByteBuffer, obj?: GJNBoundingBox): GJNBoundingBox;
    static getSizePrefixedRootAsGJNBoundingBox(bb: flatbuffers.ByteBuffer, obj?: GJNBoundingBox): GJNBoundingBox;
    /**
     * Western longitude
     */
    WEST(): number;
    /**
     * Southern latitude
     */
    SOUTH(): number;
    /**
     * Eastern longitude
     */
    EAST(): number;
    /**
     * Northern latitude
     */
    NORTH(): number;
    /**
     * Minimum altitude (optional)
     */
    MIN_ALTITUDE(): number;
    /**
     * Maximum altitude (optional)
     */
    MAX_ALTITUDE(): number;
    /**
     * True if the bbox includes altitude (6 values vs 4)
     */
    HAS_ALTITUDE(): boolean;
    static startGJNBoundingBox(builder: flatbuffers.Builder): void;
    static addWest(builder: flatbuffers.Builder, WEST: number): void;
    static addSouth(builder: flatbuffers.Builder, SOUTH: number): void;
    static addEast(builder: flatbuffers.Builder, EAST: number): void;
    static addNorth(builder: flatbuffers.Builder, NORTH: number): void;
    static addMinAltitude(builder: flatbuffers.Builder, MIN_ALTITUDE: number): void;
    static addMaxAltitude(builder: flatbuffers.Builder, MAX_ALTITUDE: number): void;
    static addHasAltitude(builder: flatbuffers.Builder, HAS_ALTITUDE: boolean): void;
    static endGJNBoundingBox(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createGJNBoundingBox(builder: flatbuffers.Builder, WEST: number, SOUTH: number, EAST: number, NORTH: number, MIN_ALTITUDE: number, MAX_ALTITUDE: number, HAS_ALTITUDE: boolean): flatbuffers.Offset;
    unpack(): GJNBoundingBoxT;
    unpackTo(_o: GJNBoundingBoxT): void;
}
export declare class GJNBoundingBoxT implements flatbuffers.IGeneratedObject {
    WEST: number;
    SOUTH: number;
    EAST: number;
    NORTH: number;
    MIN_ALTITUDE: number;
    MAX_ALTITUDE: number;
    HAS_ALTITUDE: boolean;
    constructor(WEST?: number, SOUTH?: number, EAST?: number, NORTH?: number, MIN_ALTITUDE?: number, MAX_ALTITUDE?: number, HAS_ALTITUDE?: boolean);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=GJNBoundingBox.d.ts.map