import * as flatbuffers from 'flatbuffers';
import { rflObstacleInteraction } from './rflObstacleInteraction.js';
/**
 * A 3D obstacle that shaped this coverage boundary. A footprint clipped by
 * buildings, a spacecraft structure or terrain is a claim about those
 * objects; publishing the obstacle set with its `$RFS` materials is what
 * makes the clipped boundary reproducible.
 */
export declare class CVPObstacleRef implements flatbuffers.IUnpackableObject<CVPObstacleRefT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): CVPObstacleRef;
    static getRootAsCVPObstacleRef(bb: flatbuffers.ByteBuffer, obj?: CVPObstacleRef): CVPObstacleRef;
    static getSizePrefixedRootAsCVPObstacleRef(bb: flatbuffers.ByteBuffer, obj?: CVPObstacleRef): CVPObstacleRef;
    /**
     * Producer's identifier for the obstacle instance.
     */
    OBSTACLE_ID(): string;
    OBSTACLE_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    /**
     * `$RFS.MATERIAL_ID` of the surface. Absent means the obstacle was treated
     * as an opaque blocker with no material physics — which a consumer is
     * entitled to know.
     */
    MATERIAL_ID(): string | null;
    MATERIAL_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * `$RFS.RFSGeometryRef.GEOMETRY_REF_ID` of the exact geometry used.
     */
    GEOMETRY_REF_ID(): string | null;
    GEOMETRY_REF_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * `$VAM` asset identity of the obstacle mesh.
     */
    VAM_ID(): string | null;
    VAM_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    VARIANT_ID(): string | null;
    VARIANT_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * `$CAT` identity when the obstacle is a catalogued object. 0 when unbound.
     */
    NORAD_CAT_ID(): number;
    OBJECT_ID(): string | null;
    OBJECT_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * `$TBS.SITE_ID` when the obstacle is a structure at a terrestrial site.
     */
    TBS_SITE_ID(): string | null;
    TBS_SITE_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * How the obstacle acted on the field.
     */
    INTERACTION(): rflObstacleInteraction;
    /**
     * Geodetic placement of a fixed obstacle, degrees and metres.
     */
    LATITUDE_DEG(): number;
    LONGITUDE_DEG(): number;
    ALTITUDE_M(): number;
    HEIGHT_M(): number;
    static startCVPObstacleRef(builder: flatbuffers.Builder): void;
    static addObstacleId(builder: flatbuffers.Builder, OBSTACLE_IDOffset: flatbuffers.Offset): void;
    static addMaterialId(builder: flatbuffers.Builder, MATERIAL_IDOffset: flatbuffers.Offset): void;
    static addGeometryRefId(builder: flatbuffers.Builder, GEOMETRY_REF_IDOffset: flatbuffers.Offset): void;
    static addVamId(builder: flatbuffers.Builder, VAM_IDOffset: flatbuffers.Offset): void;
    static addVariantId(builder: flatbuffers.Builder, VARIANT_IDOffset: flatbuffers.Offset): void;
    static addNoradCatId(builder: flatbuffers.Builder, NORAD_CAT_ID: number): void;
    static addObjectId(builder: flatbuffers.Builder, OBJECT_IDOffset: flatbuffers.Offset): void;
    static addTbsSiteId(builder: flatbuffers.Builder, TBS_SITE_IDOffset: flatbuffers.Offset): void;
    static addInteraction(builder: flatbuffers.Builder, INTERACTION: rflObstacleInteraction): void;
    static addLatitudeDeg(builder: flatbuffers.Builder, LATITUDE_DEG: number): void;
    static addLongitudeDeg(builder: flatbuffers.Builder, LONGITUDE_DEG: number): void;
    static addAltitudeM(builder: flatbuffers.Builder, ALTITUDE_M: number): void;
    static addHeightM(builder: flatbuffers.Builder, HEIGHT_M: number): void;
    static endCVPObstacleRef(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createCVPObstacleRef(builder: flatbuffers.Builder, OBSTACLE_IDOffset: flatbuffers.Offset, MATERIAL_IDOffset: flatbuffers.Offset, GEOMETRY_REF_IDOffset: flatbuffers.Offset, VAM_IDOffset: flatbuffers.Offset, VARIANT_IDOffset: flatbuffers.Offset, NORAD_CAT_ID: number, OBJECT_IDOffset: flatbuffers.Offset, TBS_SITE_IDOffset: flatbuffers.Offset, INTERACTION: rflObstacleInteraction, LATITUDE_DEG: number, LONGITUDE_DEG: number, ALTITUDE_M: number, HEIGHT_M: number): flatbuffers.Offset;
    unpack(): CVPObstacleRefT;
    unpackTo(_o: CVPObstacleRefT): void;
}
export declare class CVPObstacleRefT implements flatbuffers.IGeneratedObject {
    OBSTACLE_ID: string | Uint8Array | null;
    MATERIAL_ID: string | Uint8Array | null;
    GEOMETRY_REF_ID: string | Uint8Array | null;
    VAM_ID: string | Uint8Array | null;
    VARIANT_ID: string | Uint8Array | null;
    NORAD_CAT_ID: number;
    OBJECT_ID: string | Uint8Array | null;
    TBS_SITE_ID: string | Uint8Array | null;
    INTERACTION: rflObstacleInteraction;
    LATITUDE_DEG: number;
    LONGITUDE_DEG: number;
    ALTITUDE_M: number;
    HEIGHT_M: number;
    constructor(OBSTACLE_ID?: string | Uint8Array | null, MATERIAL_ID?: string | Uint8Array | null, GEOMETRY_REF_ID?: string | Uint8Array | null, VAM_ID?: string | Uint8Array | null, VARIANT_ID?: string | Uint8Array | null, NORAD_CAT_ID?: number, OBJECT_ID?: string | Uint8Array | null, TBS_SITE_ID?: string | Uint8Array | null, INTERACTION?: rflObstacleInteraction, LATITUDE_DEG?: number, LONGITUDE_DEG?: number, ALTITUDE_M?: number, HEIGHT_M?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=CVPObstacleRef.d.ts.map