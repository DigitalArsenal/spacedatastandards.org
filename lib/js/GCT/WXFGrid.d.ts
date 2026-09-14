import * as flatbuffers from 'flatbuffers';
import { wxfGridKind } from './wxfGridKind.js';
/**
 * Regular grid the samples are laid out on. Samples are row-major with
 * latitude as the outer index: cell (i, j) for 0 <= i < NLAT, 0 <= j < NLON
 * sits at VALUES[i * NLON + j] and is centred at
 * (LAT0 + i * DLAT, LON0 + j * DLON). DLAT is negative when rows run north
 * to south. Longitudes are in [-180, 180) or [0, 360) exactly as the
 * producer publishes them; a consumer normalises.
 */
export declare class WXFGrid implements flatbuffers.IUnpackableObject<WXFGridT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): WXFGrid;
    static getRootAsWXFGrid(bb: flatbuffers.ByteBuffer, obj?: WXFGrid): WXFGrid;
    static getSizePrefixedRootAsWXFGrid(bb: flatbuffers.ByteBuffer, obj?: WXFGrid): WXFGrid;
    /**
     * Grid geometry.
     */
    KIND(): wxfGridKind;
    /**
     * Latitude of the first row's cell centre, degrees north.
     */
    LAT0(): number;
    /**
     * Longitude of the first column's cell centre, degrees east.
     */
    LON0(): number;
    /**
     * Latitude step between rows, degrees (signed).
     */
    DLAT(): number;
    /**
     * Longitude step between columns, degrees (signed).
     */
    DLON(): number;
    /**
     * Number of rows (latitudes).
     */
    NLAT(): number;
    /**
     * Number of columns (longitudes).
     */
    NLON(): number;
    /**
     * Whether the last column wraps to the first (global grid).
     */
    PERIODIC_LON(): boolean;
    static startWXFGrid(builder: flatbuffers.Builder): void;
    static addKind(builder: flatbuffers.Builder, KIND: wxfGridKind): void;
    static addLat0(builder: flatbuffers.Builder, LAT0: number): void;
    static addLon0(builder: flatbuffers.Builder, LON0: number): void;
    static addDlat(builder: flatbuffers.Builder, DLAT: number): void;
    static addDlon(builder: flatbuffers.Builder, DLON: number): void;
    static addNlat(builder: flatbuffers.Builder, NLAT: number): void;
    static addNlon(builder: flatbuffers.Builder, NLON: number): void;
    static addPeriodicLon(builder: flatbuffers.Builder, PERIODIC_LON: boolean): void;
    static endWXFGrid(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createWXFGrid(builder: flatbuffers.Builder, KIND: wxfGridKind, LAT0: number, LON0: number, DLAT: number, DLON: number, NLAT: number, NLON: number, PERIODIC_LON: boolean): flatbuffers.Offset;
    unpack(): WXFGridT;
    unpackTo(_o: WXFGridT): void;
}
export declare class WXFGridT implements flatbuffers.IGeneratedObject {
    KIND: wxfGridKind;
    LAT0: number;
    LON0: number;
    DLAT: number;
    DLON: number;
    NLAT: number;
    NLON: number;
    PERIODIC_LON: boolean;
    constructor(KIND?: wxfGridKind, LAT0?: number, LON0?: number, DLAT?: number, DLON?: number, NLAT?: number, NLON?: number, PERIODIC_LON?: boolean);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=WXFGrid.d.ts.map