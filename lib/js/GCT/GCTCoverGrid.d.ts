import * as flatbuffers from 'flatbuffers';
/**
 * The producer's reduction of the source fields to this tile's rectangle:
 * what a coarse tile draws as a continuous sheet before any Gaussian is
 * resolved. Samples are row-major with latitude as the outer index, cell
 * (i, j) centred at (LAT0_RAD + i * DLAT_RAD, LON0_RAD + j * DLON_RAD).
 */
export declare class GCTCoverGrid implements flatbuffers.IUnpackableObject<GCTCoverGridT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): GCTCoverGrid;
    static getRootAsGCTCoverGrid(bb: flatbuffers.ByteBuffer, obj?: GCTCoverGrid): GCTCoverGrid;
    static getSizePrefixedRootAsGCTCoverGrid(bb: flatbuffers.ByteBuffer, obj?: GCTCoverGrid): GCTCoverGrid;
    /**
     * Latitude of the first row's cell centre, radians.
     */
    LAT0_RAD(): number;
    /**
     * Longitude of the first column's cell centre, radians.
     */
    LON0_RAD(): number;
    /**
     * Latitude step between rows, radians (signed).
     */
    DLAT_RAD(): number;
    /**
     * Longitude step between columns, radians (signed).
     */
    DLON_RAD(): number;
    /**
     * Number of rows.
     */
    NLAT(): number;
    /**
     * Number of columns.
     */
    NLON(): number;
    /**
     * Low-cloud cover fraction per cell, [0, 1]. NaN marks a missing cell.
     */
    LOW_COVER(index: number): number | null;
    lowCoverLength(): number;
    lowCoverArray(): Float32Array | null;
    /**
     * Medium-cloud cover fraction per cell, [0, 1]. Absent when unstated.
     */
    MEDIUM_COVER(index: number): number | null;
    mediumCoverLength(): number;
    mediumCoverArray(): Float32Array | null;
    /**
     * High-cloud cover fraction per cell, [0, 1]. Absent when unstated.
     */
    HIGH_COVER(index: number): number | null;
    highCoverLength(): number;
    highCoverArray(): Float32Array | null;
    /**
     * Height of the low-cloud base per cell, metres above the ellipsoid
     * (the lifting condensation level over the ground height).
     */
    BASE_HEIGHT_M(index: number): number | null;
    baseHeightMLength(): number;
    baseHeightMArray(): Float32Array | null;
    /**
     * Height of the low-cloud top per cell, metres above the ellipsoid.
     */
    TOP_HEIGHT_M(index: number): number | null;
    topHeightMLength(): number;
    topHeightMArray(): Float32Array | null;
    /**
     * Column optical depth per cell of the whole tile content along the
     * vertical, dimensionless. Absent when unstated.
     */
    COLUMN_OPTICAL_DEPTH(index: number): number | null;
    columnOpticalDepthLength(): number;
    columnOpticalDepthArray(): Float32Array | null;
    static startGCTCoverGrid(builder: flatbuffers.Builder): void;
    static addLat0Rad(builder: flatbuffers.Builder, LAT0_RAD: number): void;
    static addLon0Rad(builder: flatbuffers.Builder, LON0_RAD: number): void;
    static addDlatRad(builder: flatbuffers.Builder, DLAT_RAD: number): void;
    static addDlonRad(builder: flatbuffers.Builder, DLON_RAD: number): void;
    static addNlat(builder: flatbuffers.Builder, NLAT: number): void;
    static addNlon(builder: flatbuffers.Builder, NLON: number): void;
    static addLowCover(builder: flatbuffers.Builder, LOW_COVEROffset: flatbuffers.Offset): void;
    static createLowCoverVector(builder: flatbuffers.Builder, data: number[] | Float32Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createLowCoverVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startLowCoverVector(builder: flatbuffers.Builder, numElems: number): void;
    static addMediumCover(builder: flatbuffers.Builder, MEDIUM_COVEROffset: flatbuffers.Offset): void;
    static createMediumCoverVector(builder: flatbuffers.Builder, data: number[] | Float32Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createMediumCoverVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startMediumCoverVector(builder: flatbuffers.Builder, numElems: number): void;
    static addHighCover(builder: flatbuffers.Builder, HIGH_COVEROffset: flatbuffers.Offset): void;
    static createHighCoverVector(builder: flatbuffers.Builder, data: number[] | Float32Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createHighCoverVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startHighCoverVector(builder: flatbuffers.Builder, numElems: number): void;
    static addBaseHeightM(builder: flatbuffers.Builder, BASE_HEIGHT_MOffset: flatbuffers.Offset): void;
    static createBaseHeightMVector(builder: flatbuffers.Builder, data: number[] | Float32Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createBaseHeightMVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startBaseHeightMVector(builder: flatbuffers.Builder, numElems: number): void;
    static addTopHeightM(builder: flatbuffers.Builder, TOP_HEIGHT_MOffset: flatbuffers.Offset): void;
    static createTopHeightMVector(builder: flatbuffers.Builder, data: number[] | Float32Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createTopHeightMVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startTopHeightMVector(builder: flatbuffers.Builder, numElems: number): void;
    static addColumnOpticalDepth(builder: flatbuffers.Builder, COLUMN_OPTICAL_DEPTHOffset: flatbuffers.Offset): void;
    static createColumnOpticalDepthVector(builder: flatbuffers.Builder, data: number[] | Float32Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createColumnOpticalDepthVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startColumnOpticalDepthVector(builder: flatbuffers.Builder, numElems: number): void;
    static endGCTCoverGrid(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createGCTCoverGrid(builder: flatbuffers.Builder, LAT0_RAD: number, LON0_RAD: number, DLAT_RAD: number, DLON_RAD: number, NLAT: number, NLON: number, LOW_COVEROffset: flatbuffers.Offset, MEDIUM_COVEROffset: flatbuffers.Offset, HIGH_COVEROffset: flatbuffers.Offset, BASE_HEIGHT_MOffset: flatbuffers.Offset, TOP_HEIGHT_MOffset: flatbuffers.Offset, COLUMN_OPTICAL_DEPTHOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): GCTCoverGridT;
    unpackTo(_o: GCTCoverGridT): void;
}
export declare class GCTCoverGridT implements flatbuffers.IGeneratedObject {
    LAT0_RAD: number;
    LON0_RAD: number;
    DLAT_RAD: number;
    DLON_RAD: number;
    NLAT: number;
    NLON: number;
    LOW_COVER: (number)[];
    MEDIUM_COVER: (number)[];
    HIGH_COVER: (number)[];
    BASE_HEIGHT_M: (number)[];
    TOP_HEIGHT_M: (number)[];
    COLUMN_OPTICAL_DEPTH: (number)[];
    constructor(LAT0_RAD?: number, LON0_RAD?: number, DLAT_RAD?: number, DLON_RAD?: number, NLAT?: number, NLON?: number, LOW_COVER?: (number)[], MEDIUM_COVER?: (number)[], HIGH_COVER?: (number)[], BASE_HEIGHT_M?: (number)[], TOP_HEIGHT_M?: (number)[], COLUMN_OPTICAL_DEPTH?: (number)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=GCTCoverGrid.d.ts.map