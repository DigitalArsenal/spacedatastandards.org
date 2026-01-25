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
    static startSpatialCoverage(builder: flatbuffers.Builder): void;
    static addType(builder: flatbuffers.Builder, TYPEOffset: flatbuffers.Offset): void;
    static addRegions(builder: flatbuffers.Builder, REGIONSOffset: flatbuffers.Offset): void;
    static createRegionsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startRegionsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addObjectIds(builder: flatbuffers.Builder, OBJECT_IDSOffset: flatbuffers.Offset): void;
    static createObjectIdsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startObjectIdsVector(builder: flatbuffers.Builder, numElems: number): void;
    static endSpatialCoverage(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createSpatialCoverage(builder: flatbuffers.Builder, TYPEOffset: flatbuffers.Offset, REGIONSOffset: flatbuffers.Offset, OBJECT_IDSOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): SpatialCoverageT;
    unpackTo(_o: SpatialCoverageT): void;
}
export declare class SpatialCoverageT implements flatbuffers.IGeneratedObject {
    TYPE: string | Uint8Array | null;
    REGIONS: (string)[];
    OBJECT_IDS: (string)[];
    constructor(TYPE?: string | Uint8Array | null, REGIONS?: (string)[], OBJECT_IDS?: (string)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=SpatialCoverage.d.ts.map