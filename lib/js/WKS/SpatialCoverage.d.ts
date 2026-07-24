import * as flatbuffers from 'flatbuffers';
/**
 * Spatial coverage definition
 */
export declare class SpatialCoverage implements flatbuffers.IUnpackableObject<SpatialCoverageT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): SpatialCoverage;
    static getRootAsSpatialCoverage(bb: flatbuffers.ByteBuffer, obj?: SpatialCoverage): SpatialCoverage;
    static getSizePrefixedRootAsSpatialCoverage(bb: flatbuffers.ByteBuffer, obj?: SpatialCoverage): SpatialCoverage;
    /**
     * Type of coverage: "global", "region", "object_list"
     */
    TYPE(): string | null;
    TYPE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Regions covered, e.g., ["LEO", "GEO", "MEO"]
     */
    REGIONS(index: number): string;
    REGIONS(index: number, optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    regionsLength(): number;
    /**
     * Specific NORAD IDs or catalog numbers
     */
    OBJECT_IDS(index: number): string;
    OBJECT_IDS(index: number, optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    objectIdsLength(): number;
    /**
     * Minimum altitude in kilometers for altitude-bounded offerings
     */
    MIN_ALTITUDE_KM(): number;
    /**
     * Maximum altitude in kilometers for altitude-bounded offerings
     */
    MAX_ALTITUDE_KM(): number;
    /**
     * Bounding box as [min_lat, min_lon, max_lat, max_lon]
     */
    GEO_BOUNDS(index: number): number | null;
    geoBoundsLength(): number;
    geoBoundsArray(): Float64Array | null;
    static startSpatialCoverage(builder: flatbuffers.Builder): void;
    static addType(builder: flatbuffers.Builder, TYPEOffset: flatbuffers.Offset): void;
    static addRegions(builder: flatbuffers.Builder, REGIONSOffset: flatbuffers.Offset): void;
    static createRegionsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startRegionsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addObjectIds(builder: flatbuffers.Builder, OBJECT_IDSOffset: flatbuffers.Offset): void;
    static createObjectIdsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startObjectIdsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addMinAltitudeKm(builder: flatbuffers.Builder, MIN_ALTITUDE_KM: number): void;
    static addMaxAltitudeKm(builder: flatbuffers.Builder, MAX_ALTITUDE_KM: number): void;
    static addGeoBounds(builder: flatbuffers.Builder, GEO_BOUNDSOffset: flatbuffers.Offset): void;
    static createGeoBoundsVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createGeoBoundsVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startGeoBoundsVector(builder: flatbuffers.Builder, numElems: number): void;
    static endSpatialCoverage(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createSpatialCoverage(builder: flatbuffers.Builder, TYPEOffset: flatbuffers.Offset, REGIONSOffset: flatbuffers.Offset, OBJECT_IDSOffset: flatbuffers.Offset, MIN_ALTITUDE_KM: number, MAX_ALTITUDE_KM: number, GEO_BOUNDSOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): SpatialCoverageT;
    unpackTo(_o: SpatialCoverageT): void;
}
export declare class SpatialCoverageT implements flatbuffers.IGeneratedObject {
    TYPE: string | Uint8Array | null;
    REGIONS: (string)[];
    OBJECT_IDS: (string)[];
    MIN_ALTITUDE_KM: number;
    MAX_ALTITUDE_KM: number;
    GEO_BOUNDS: (number)[];
    constructor(TYPE?: string | Uint8Array | null, REGIONS?: (string)[], OBJECT_IDS?: (string)[], MIN_ALTITUDE_KM?: number, MAX_ALTITUDE_KM?: number, GEO_BOUNDS?: (number)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=SpatialCoverage.d.ts.map