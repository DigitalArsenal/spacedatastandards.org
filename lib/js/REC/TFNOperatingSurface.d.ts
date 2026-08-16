import * as flatbuffers from 'flatbuffers';
import { tfnSurfaceKind } from './tfnSurfaceKind.js';
/**
 * One operating surface: the arrival/departure geometry of the facility.
 * A runway and a berth carry the same shape; fields a domain does not use
 * are absent (NaN), never zero.
 */
export declare class TFNOperatingSurface implements flatbuffers.IUnpackableObject<TFNOperatingSurfaceT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): TFNOperatingSurface;
    static getRootAsTFNOperatingSurface(bb: flatbuffers.ByteBuffer, obj?: TFNOperatingSurface): TFNOperatingSurface;
    static getSizePrefixedRootAsTFNOperatingSurface(bb: flatbuffers.ByteBuffer, obj?: TFNOperatingSurface): TFNOperatingSurface;
    /**
     * Publisher-stable identifier of this surface within the facility.
     */
    SURFACE_ID(): string;
    SURFACE_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    /**
     * Kind of surface.
     */
    SURFACE_TYPE(): tfnSurfaceKind;
    /**
     * The source's own surface-kind token, verbatim, so a kind outside
     * tfnSurfaceKind survives a round trip.
     */
    SURFACE_TYPE_CODE(): string | null;
    SURFACE_TYPE_CODE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Published designator of the surface, verbatim (runway designator,
     * berth number).
     */
    DESIGNATOR(): string | null;
    DESIGNATOR(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Usable length, metres.
     */
    LENGTH_M(): number;
    /**
     * Usable width, metres.
     */
    WIDTH_M(): number;
    /**
     * Available depth of water, metres, for a maritime surface.
     */
    DEPTH_M(): number;
    /**
     * Surface material or construction, verbatim as the source states it.
     */
    SURFACE_MATERIAL(): string | null;
    SURFACE_MATERIAL(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * True bearing of the surface's operating direction, degrees, [0, 360).
     */
    TRUE_BEARING_DEG(): number;
    /**
     * Geodetic position of the threshold or reference point of this
     * surface, decimal degrees on WGS 84.
     */
    THRESHOLD_LATITUDE(): number;
    THRESHOLD_LONGITUDE(): number;
    /**
     * The surface is lighted.
     */
    LIGHTED(): boolean;
    static startTFNOperatingSurface(builder: flatbuffers.Builder): void;
    static addSurfaceId(builder: flatbuffers.Builder, SURFACE_IDOffset: flatbuffers.Offset): void;
    static addSurfaceType(builder: flatbuffers.Builder, SURFACE_TYPE: tfnSurfaceKind): void;
    static addSurfaceTypeCode(builder: flatbuffers.Builder, SURFACE_TYPE_CODEOffset: flatbuffers.Offset): void;
    static addDesignator(builder: flatbuffers.Builder, DESIGNATOROffset: flatbuffers.Offset): void;
    static addLengthM(builder: flatbuffers.Builder, LENGTH_M: number): void;
    static addWidthM(builder: flatbuffers.Builder, WIDTH_M: number): void;
    static addDepthM(builder: flatbuffers.Builder, DEPTH_M: number): void;
    static addSurfaceMaterial(builder: flatbuffers.Builder, SURFACE_MATERIALOffset: flatbuffers.Offset): void;
    static addTrueBearingDeg(builder: flatbuffers.Builder, TRUE_BEARING_DEG: number): void;
    static addThresholdLatitude(builder: flatbuffers.Builder, THRESHOLD_LATITUDE: number): void;
    static addThresholdLongitude(builder: flatbuffers.Builder, THRESHOLD_LONGITUDE: number): void;
    static addLighted(builder: flatbuffers.Builder, LIGHTED: boolean): void;
    static endTFNOperatingSurface(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createTFNOperatingSurface(builder: flatbuffers.Builder, SURFACE_IDOffset: flatbuffers.Offset, SURFACE_TYPE: tfnSurfaceKind, SURFACE_TYPE_CODEOffset: flatbuffers.Offset, DESIGNATOROffset: flatbuffers.Offset, LENGTH_M: number, WIDTH_M: number, DEPTH_M: number, SURFACE_MATERIALOffset: flatbuffers.Offset, TRUE_BEARING_DEG: number, THRESHOLD_LATITUDE: number, THRESHOLD_LONGITUDE: number, LIGHTED: boolean): flatbuffers.Offset;
    unpack(): TFNOperatingSurfaceT;
    unpackTo(_o: TFNOperatingSurfaceT): void;
}
export declare class TFNOperatingSurfaceT implements flatbuffers.IGeneratedObject {
    SURFACE_ID: string | Uint8Array | null;
    SURFACE_TYPE: tfnSurfaceKind;
    SURFACE_TYPE_CODE: string | Uint8Array | null;
    DESIGNATOR: string | Uint8Array | null;
    LENGTH_M: number;
    WIDTH_M: number;
    DEPTH_M: number;
    SURFACE_MATERIAL: string | Uint8Array | null;
    TRUE_BEARING_DEG: number;
    THRESHOLD_LATITUDE: number;
    THRESHOLD_LONGITUDE: number;
    LIGHTED: boolean;
    constructor(SURFACE_ID?: string | Uint8Array | null, SURFACE_TYPE?: tfnSurfaceKind, SURFACE_TYPE_CODE?: string | Uint8Array | null, DESIGNATOR?: string | Uint8Array | null, LENGTH_M?: number, WIDTH_M?: number, DEPTH_M?: number, SURFACE_MATERIAL?: string | Uint8Array | null, TRUE_BEARING_DEG?: number, THRESHOLD_LATITUDE?: number, THRESHOLD_LONGITUDE?: number, LIGHTED?: boolean);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=TFNOperatingSurface.d.ts.map