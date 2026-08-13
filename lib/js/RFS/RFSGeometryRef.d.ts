import * as flatbuffers from 'flatbuffers';
import { rfsAnalyticShape } from './rfsAnalyticShape.js';
import { rfsGeometryKind } from './rfsGeometryKind.js';
/**
 * Where and what this material is attached to. A material record with no
 * geometry describes a substance; a material record WITH geometry describes
 * an obstacle a solver can intersect.
 */
export declare class RFSGeometryRef implements flatbuffers.IUnpackableObject<RFSGeometryRefT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): RFSGeometryRef;
    static getRootAsRFSGeometryRef(bb: flatbuffers.ByteBuffer, obj?: RFSGeometryRef): RFSGeometryRef;
    static getSizePrefixedRootAsRFSGeometryRef(bb: flatbuffers.ByteBuffer, obj?: RFSGeometryRef): RFSGeometryRef;
    /**
     * Producer-stable identifier of this attachment.
     */
    GEOMETRY_REF_ID(): string;
    GEOMETRY_REF_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    GEOMETRY_KIND(): rfsGeometryKind;
    /**
     * `$VAM` asset identity, copied VERBATIM including the byte hash so the
     * material can never drift onto a different revision of the mesh.
     */
    VAM_ID(): string | null;
    VAM_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    VARIANT_ID(): string | null;
    VARIANT_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    ASSET_SHA256(): string | null;
    ASSET_SHA256(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Mesh and primitive inside the asset.
     */
    MESH_NAME(): string | null;
    MESH_NAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    PRIMITIVE_INDEX(): number;
    /**
     * glTF material slot the properties apply to, matching the
     * `$OPP.OPPSurface` join fields.
     */
    GLTF_MATERIAL_NAME(): string | null;
    GLTF_MATERIAL_NAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    GLTF_MATERIAL_INDEX(): number;
    /**
     * Explicit face indexes, when the material covers part of a mesh.
     */
    FACE_INDEXES(index: number): number | null;
    faceIndexesLength(): number;
    faceIndexesArray(): Uint32Array | null;
    /**
     * `$OPP.OPPSurface` surface identifier.
     */
    OPP_SURFACE_ID(): string | null;
    OPP_SURFACE_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * `$PNL` panel identifier.
     */
    PANEL_ID(): string | null;
    PANEL_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * `$CAT` identity, when the obstacle is a catalogued object. 0 when
     * unbound.
     */
    NORAD_CAT_ID(): number;
    OBJECT_ID(): string | null;
    OBJECT_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * `$TBS.SITE_ID`, when the obstacle is a structure at a terrestrial site.
     */
    TBS_SITE_ID(): string | null;
    TBS_SITE_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Producer's own feature identifier for a building, wall or terrain patch.
     */
    FEATURE_ID(): string | null;
    FEATURE_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Primitive and its dimensions in metres, when GEOMETRY_KIND is
     * ANALYTIC_SHAPE. The dimension order is the primitive's own convention and
     * MUST be stated in SHAPE_DIMENSION_NAMES.
     */
    ANALYTIC_SHAPE(): rfsAnalyticShape;
    SHAPE_DIMENSIONS_M(index: number): number | null;
    shapeDimensionsMLength(): number;
    shapeDimensionsMArray(): Float64Array | null;
    SHAPE_DIMENSION_NAMES(index: number): string;
    SHAPE_DIMENSION_NAMES(index: number, optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    shapeDimensionNamesLength(): number;
    /**
     * Geodetic placement of a fixed obstacle, degrees and metres. Absent for
     * an obstacle whose position is joined from `$CAT`, `$TBS` or `$VAM`.
     */
    LATITUDE_DEG(): number;
    LONGITUDE_DEG(): number;
    ALTITUDE_M(): number;
    /**
     * Height above ground of a fixed structure, metres.
     */
    HEIGHT_M(): number;
    /**
     * Orientation of the surface normal, degrees east of north and above the
     * horizon. A wall that faces the wrong way blocks the wrong link.
     */
    NORMAL_AZIMUTH_DEG(): number;
    NORMAL_ELEVATION_DEG(): number;
    static startRFSGeometryRef(builder: flatbuffers.Builder): void;
    static addGeometryRefId(builder: flatbuffers.Builder, GEOMETRY_REF_IDOffset: flatbuffers.Offset): void;
    static addGeometryKind(builder: flatbuffers.Builder, GEOMETRY_KIND: rfsGeometryKind): void;
    static addVamId(builder: flatbuffers.Builder, VAM_IDOffset: flatbuffers.Offset): void;
    static addVariantId(builder: flatbuffers.Builder, VARIANT_IDOffset: flatbuffers.Offset): void;
    static addAssetSha256(builder: flatbuffers.Builder, ASSET_SHA256Offset: flatbuffers.Offset): void;
    static addMeshName(builder: flatbuffers.Builder, MESH_NAMEOffset: flatbuffers.Offset): void;
    static addPrimitiveIndex(builder: flatbuffers.Builder, PRIMITIVE_INDEX: number): void;
    static addGltfMaterialName(builder: flatbuffers.Builder, GLTF_MATERIAL_NAMEOffset: flatbuffers.Offset): void;
    static addGltfMaterialIndex(builder: flatbuffers.Builder, GLTF_MATERIAL_INDEX: number): void;
    static addFaceIndexes(builder: flatbuffers.Builder, FACE_INDEXESOffset: flatbuffers.Offset): void;
    static createFaceIndexesVector(builder: flatbuffers.Builder, data: number[] | Uint32Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createFaceIndexesVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startFaceIndexesVector(builder: flatbuffers.Builder, numElems: number): void;
    static addOppSurfaceId(builder: flatbuffers.Builder, OPP_SURFACE_IDOffset: flatbuffers.Offset): void;
    static addPanelId(builder: flatbuffers.Builder, PANEL_IDOffset: flatbuffers.Offset): void;
    static addNoradCatId(builder: flatbuffers.Builder, NORAD_CAT_ID: number): void;
    static addObjectId(builder: flatbuffers.Builder, OBJECT_IDOffset: flatbuffers.Offset): void;
    static addTbsSiteId(builder: flatbuffers.Builder, TBS_SITE_IDOffset: flatbuffers.Offset): void;
    static addFeatureId(builder: flatbuffers.Builder, FEATURE_IDOffset: flatbuffers.Offset): void;
    static addAnalyticShape(builder: flatbuffers.Builder, ANALYTIC_SHAPE: rfsAnalyticShape): void;
    static addShapeDimensionsM(builder: flatbuffers.Builder, SHAPE_DIMENSIONS_MOffset: flatbuffers.Offset): void;
    static createShapeDimensionsMVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createShapeDimensionsMVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startShapeDimensionsMVector(builder: flatbuffers.Builder, numElems: number): void;
    static addShapeDimensionNames(builder: flatbuffers.Builder, SHAPE_DIMENSION_NAMESOffset: flatbuffers.Offset): void;
    static createShapeDimensionNamesVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startShapeDimensionNamesVector(builder: flatbuffers.Builder, numElems: number): void;
    static addLatitudeDeg(builder: flatbuffers.Builder, LATITUDE_DEG: number): void;
    static addLongitudeDeg(builder: flatbuffers.Builder, LONGITUDE_DEG: number): void;
    static addAltitudeM(builder: flatbuffers.Builder, ALTITUDE_M: number): void;
    static addHeightM(builder: flatbuffers.Builder, HEIGHT_M: number): void;
    static addNormalAzimuthDeg(builder: flatbuffers.Builder, NORMAL_AZIMUTH_DEG: number): void;
    static addNormalElevationDeg(builder: flatbuffers.Builder, NORMAL_ELEVATION_DEG: number): void;
    static endRFSGeometryRef(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createRFSGeometryRef(builder: flatbuffers.Builder, GEOMETRY_REF_IDOffset: flatbuffers.Offset, GEOMETRY_KIND: rfsGeometryKind, VAM_IDOffset: flatbuffers.Offset, VARIANT_IDOffset: flatbuffers.Offset, ASSET_SHA256Offset: flatbuffers.Offset, MESH_NAMEOffset: flatbuffers.Offset, PRIMITIVE_INDEX: number, GLTF_MATERIAL_NAMEOffset: flatbuffers.Offset, GLTF_MATERIAL_INDEX: number, FACE_INDEXESOffset: flatbuffers.Offset, OPP_SURFACE_IDOffset: flatbuffers.Offset, PANEL_IDOffset: flatbuffers.Offset, NORAD_CAT_ID: number, OBJECT_IDOffset: flatbuffers.Offset, TBS_SITE_IDOffset: flatbuffers.Offset, FEATURE_IDOffset: flatbuffers.Offset, ANALYTIC_SHAPE: rfsAnalyticShape, SHAPE_DIMENSIONS_MOffset: flatbuffers.Offset, SHAPE_DIMENSION_NAMESOffset: flatbuffers.Offset, LATITUDE_DEG: number, LONGITUDE_DEG: number, ALTITUDE_M: number, HEIGHT_M: number, NORMAL_AZIMUTH_DEG: number, NORMAL_ELEVATION_DEG: number): flatbuffers.Offset;
    unpack(): RFSGeometryRefT;
    unpackTo(_o: RFSGeometryRefT): void;
}
export declare class RFSGeometryRefT implements flatbuffers.IGeneratedObject {
    GEOMETRY_REF_ID: string | Uint8Array | null;
    GEOMETRY_KIND: rfsGeometryKind;
    VAM_ID: string | Uint8Array | null;
    VARIANT_ID: string | Uint8Array | null;
    ASSET_SHA256: string | Uint8Array | null;
    MESH_NAME: string | Uint8Array | null;
    PRIMITIVE_INDEX: number;
    GLTF_MATERIAL_NAME: string | Uint8Array | null;
    GLTF_MATERIAL_INDEX: number;
    FACE_INDEXES: (number)[];
    OPP_SURFACE_ID: string | Uint8Array | null;
    PANEL_ID: string | Uint8Array | null;
    NORAD_CAT_ID: number;
    OBJECT_ID: string | Uint8Array | null;
    TBS_SITE_ID: string | Uint8Array | null;
    FEATURE_ID: string | Uint8Array | null;
    ANALYTIC_SHAPE: rfsAnalyticShape;
    SHAPE_DIMENSIONS_M: (number)[];
    SHAPE_DIMENSION_NAMES: (string)[];
    LATITUDE_DEG: number;
    LONGITUDE_DEG: number;
    ALTITUDE_M: number;
    HEIGHT_M: number;
    NORMAL_AZIMUTH_DEG: number;
    NORMAL_ELEVATION_DEG: number;
    constructor(GEOMETRY_REF_ID?: string | Uint8Array | null, GEOMETRY_KIND?: rfsGeometryKind, VAM_ID?: string | Uint8Array | null, VARIANT_ID?: string | Uint8Array | null, ASSET_SHA256?: string | Uint8Array | null, MESH_NAME?: string | Uint8Array | null, PRIMITIVE_INDEX?: number, GLTF_MATERIAL_NAME?: string | Uint8Array | null, GLTF_MATERIAL_INDEX?: number, FACE_INDEXES?: (number)[], OPP_SURFACE_ID?: string | Uint8Array | null, PANEL_ID?: string | Uint8Array | null, NORAD_CAT_ID?: number, OBJECT_ID?: string | Uint8Array | null, TBS_SITE_ID?: string | Uint8Array | null, FEATURE_ID?: string | Uint8Array | null, ANALYTIC_SHAPE?: rfsAnalyticShape, SHAPE_DIMENSIONS_M?: (number)[], SHAPE_DIMENSION_NAMES?: (string)[], LATITUDE_DEG?: number, LONGITUDE_DEG?: number, ALTITUDE_M?: number, HEIGHT_M?: number, NORMAL_AZIMUTH_DEG?: number, NORMAL_ELEVATION_DEG?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=RFSGeometryRef.d.ts.map