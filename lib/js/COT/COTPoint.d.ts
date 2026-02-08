import * as flatbuffers from 'flatbuffers';
/**
 * CoT Point - geographical point with error estimates
 */
export declare class COTPoint implements flatbuffers.IUnpackableObject<COTPointT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): COTPoint;
    static getRootAsCOTPoint(bb: flatbuffers.ByteBuffer, obj?: COTPoint): COTPoint;
    static getSizePrefixedRootAsCOTPoint(bb: flatbuffers.ByteBuffer, obj?: COTPoint): COTPoint;
    /**
     * Latitude in decimal degrees (WGS84)
     */
    LATITUDE(): number;
    /**
     * Longitude in decimal degrees (WGS84)
     */
    LONGITUDE(): number;
    /**
     * Height above WGS84 ellipsoid in meters
     */
    HAE(): number;
    /**
     * Circular error in meters (95% confidence)
     */
    CE(): number;
    /**
     * Linear error (vertical) in meters (95% confidence)
     */
    LE(): number;
    static startCOTPoint(builder: flatbuffers.Builder): void;
    static addLatitude(builder: flatbuffers.Builder, LATITUDE: number): void;
    static addLongitude(builder: flatbuffers.Builder, LONGITUDE: number): void;
    static addHae(builder: flatbuffers.Builder, HAE: number): void;
    static addCe(builder: flatbuffers.Builder, CE: number): void;
    static addLe(builder: flatbuffers.Builder, LE: number): void;
    static endCOTPoint(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createCOTPoint(builder: flatbuffers.Builder, LATITUDE: number, LONGITUDE: number, HAE: number, CE: number, LE: number): flatbuffers.Offset;
    unpack(): COTPointT;
    unpackTo(_o: COTPointT): void;
}
export declare class COTPointT implements flatbuffers.IGeneratedObject {
    LATITUDE: number;
    LONGITUDE: number;
    HAE: number;
    CE: number;
    LE: number;
    constructor(LATITUDE?: number, LONGITUDE?: number, HAE?: number, CE?: number, LE?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=COTPoint.d.ts.map