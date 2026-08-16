import * as flatbuffers from 'flatbuffers';
import { DTTPayloadRef, DTTPayloadRefT } from './DTTPayloadRef.js';
import { DTTProvenance, DTTProvenanceT } from './DTTProvenance.js';
import { dttPayloadFormat } from './dttPayloadFormat.js';
import { dttSourceClass } from './dttSourceClass.js';
import { dttTilingScheme } from './dttTilingScheme.js';
import { dttVerticalDatum } from './dttVerticalDatum.js';
import { dttWaterMask } from './dttWaterMask.js';
/**
 * Digital Terrain Tile
 *
 * One addressable tile of a terrain elevation pyramid: its address in a
 * stated tiling scheme, its geographic extent, its payload encoding and where
 * those bytes live, the vertical datum its heights are measured from, what it
 * states about water cover, and the dataset edition and licence it was
 * redistributed under.
 *
 * $DTT is the SERVED ARTIFACT of a terrain lane and is deliberately not
 * $TRN, which configures how a consumer uses terrain (sources, interpolation,
 * cache size, exaggeration) and holds no elevation; nor $TRS, which is a
 * radio-propagation solve over terrain heights. A terrain service publishes
 * $DTT records, is configured by $TRN, and its heights may be consumed by
 * $TRS.
 *
 * Angles are decimal degrees on WGS 84 and heights are metres. Tile bytes are
 * referenced by content identifier by default; see DTTPayloadRef.
 */
export declare class DTT implements flatbuffers.IUnpackableObject<DTTT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): DTT;
    static getRootAsDTT(bb: flatbuffers.ByteBuffer, obj?: DTT): DTT;
    static getSizePrefixedRootAsDTT(bb: flatbuffers.ByteBuffer, obj?: DTT): DTT;
    static bufferHasIdentifier(bb: flatbuffers.ByteBuffer): boolean;
    /**
     * Publisher-stable identifier for the tile pyramid (the tileset) this tile
     * belongs to. Tiles of one pyramid share a scheme, format, and datum.
     */
    TILESET_ID(): string;
    TILESET_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    /**
     * The tileset's own name, verbatim, for display.
     */
    TILESET_NAME(): string | null;
    TILESET_NAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Scheme the address below is expressed in.
     */
    TILING_SCHEME(): dttTilingScheme;
    /**
     * Zoom level of the tile, 0 at the pyramid root.
     */
    LEVEL(): number;
    /**
     * Column index within LEVEL, increasing eastward from the scheme origin.
     */
    X(): number;
    /**
     * Row index within LEVEL, increasing in the scheme's own row direction;
     * ROW_ORIGIN_NORTH states which.
     */
    Y(): number;
    /**
     * Row index 0 lies at the north edge of the scheme. When false, row 0 lies
     * at the south edge.
     */
    ROW_ORIGIN_NORTH(): boolean;
    /**
     * Western extent of the tile, decimal degrees on WGS 84.
     */
    WEST_DEG(): number;
    /**
     * Southern extent of the tile, decimal degrees on WGS 84.
     */
    SOUTH_DEG(): number;
    /**
     * Eastern extent of the tile, decimal degrees on WGS 84.
     */
    EAST_DEG(): number;
    /**
     * Northern extent of the tile, decimal degrees on WGS 84.
     */
    NORTH_DEG(): number;
    /**
     * Lowest height present in the tile, metres above VERTICAL_DATUM. Stated
     * so a consumer can build a bounding volume without decoding the payload.
     */
    MIN_HEIGHT_M(): number;
    /**
     * Highest height present in the tile, metres above VERTICAL_DATUM.
     */
    MAX_HEIGHT_M(): number;
    /**
     * Encoding of the payload bytes.
     */
    PAYLOAD_FORMAT(): dttPayloadFormat;
    /**
     * Version of PAYLOAD_FORMAT the bytes conform to, verbatim, when the
     * format is versioned.
     */
    PAYLOAD_FORMAT_VERSION(): string | null;
    PAYLOAD_FORMAT_VERSION(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * The tile's elevation bytes.
     */
    PAYLOAD(obj?: DTTPayloadRef): DTTPayloadRef | null;
    /**
     * Number of height posts across the tile for gridded formats. Unset for
     * mesh formats, whose vertex count varies.
     */
    GRID_WIDTH(): number;
    /**
     * Number of height posts down the tile for gridded formats.
     */
    GRID_HEIGHT(): number;
    /**
     * Nominal ground distance between adjacent height posts at the tile
     * centre, metres. The tile's effective resolution as served, which is not
     * necessarily the source dataset's native post spacing.
     */
    POST_SPACING_M(): number;
    /**
     * Native post spacing of the source elevations, metres, when the tile was
     * resampled from a coarser or finer grid.
     */
    SOURCE_POST_SPACING_M(): number;
    /**
     * Surface the heights are measured from.
     */
    VERTICAL_DATUM(): dttVerticalDatum;
    /**
     * The datum, geoid model, or vertical reference frame named verbatim as
     * its authority states it.
     */
    VERTICAL_DATUM_NAME(): string | null;
    VERTICAL_DATUM_NAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Horizontal reference frame the extent is expressed in, verbatim, when it
     * is not WGS 84.
     */
    HORIZONTAL_DATUM_NAME(): string | null;
    HORIZONTAL_DATUM_NAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Vertical accuracy the publisher states for this tile, metres, at the
     * confidence level stated in ACCURACY_CONFIDENCE.
     */
    VERTICAL_ACCURACY_M(): number;
    /**
     * Confidence level the accuracy figures are stated at, as a fraction
     * between 0 and 1.
     */
    ACCURACY_CONFIDENCE(): number;
    /**
     * Horizontal accuracy the publisher states for this tile, metres.
     */
    HORIZONTAL_ACCURACY_M(): number;
    /**
     * Fraction of the tile extent covered by real measurements rather than
     * interpolated or filled values, between 0 and 1.
     */
    DATA_COVERAGE_FRACTION(): number;
    /**
     * Height value used to mark absent samples in gridded payloads.
     */
    NO_DATA_VALUE(): number;
    /**
     * What the tile states about water cover.
     */
    WATER_MASK_KIND(): dttWaterMask;
    /**
     * The per-sample water mask bytes when WATER_MASK_KIND is RASTER: one
     * unsigned byte per sample, 255 fully water, 0 fully land.
     */
    WATER_MASK(obj?: DTTPayloadRef): DTTPayloadRef | null;
    /**
     * Number of mask samples across and down the tile when WATER_MASK_KIND is
     * RASTER. Independent of GRID_WIDTH/GRID_HEIGHT: a mask is commonly
     * carried at a different resolution than the heights.
     */
    WATER_MASK_WIDTH(): number;
    WATER_MASK_HEIGHT(): number;
    /**
     * Dataset the water mask was derived from, when it is not the elevation
     * dataset. A separate lineage because a mask carries its own licence.
     */
    WATER_MASK_PROVENANCE(obj?: DTTProvenance): DTTProvenance | null;
    /**
     * Per-sample surface normals accompanying the tile, when the publisher
     * serves them, so a consumer need not derive lighting from heights.
     */
    VERTEX_NORMALS(obj?: DTTPayloadRef): DTTPayloadRef | null;
    /**
     * Per-sample land-cover classification accompanying the tile, when the
     * publisher serves one.
     */
    LAND_COVER(obj?: DTTPayloadRef): DTTPayloadRef | null;
    /**
     * Availability of the four child tiles at LEVEL+1, as the low four bits:
     * bit 0 south-west, bit 1 south-east, bit 2 north-west, bit 3 north-east.
     * A set bit states the child exists in this tileset.
     */
    CHILD_AVAILABILITY(): number;
    /**
     * The deepest level this tileset serves anywhere. A consumer stops
     * requesting below it rather than discovering absence by failed fetches.
     */
    MAX_LEVEL(): number;
    /**
     * Production technique class of the source elevations.
     */
    SOURCE_CLASS(): dttSourceClass;
    /**
     * Dataset lineage and redistribution terms. Required.
     */
    PROVENANCE(obj?: DTTProvenance): DTTProvenance | null;
    /**
     * RFC 3339 UTC fixed-millisecond epoch the elevations represent, when the
     * dataset states an observation epoch distinct from its edition. Terrain
     * changes; a tile compared across time is compared at this epoch.
     */
    EPOCH(): string | null;
    EPOCH(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Entity tag for the served bytes, verbatim, so a cache can revalidate.
     */
    ETAG(): string | null;
    ETAG(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * RFC 3339 UTC timestamp after which this tile should be revalidated.
     */
    EXPIRES(): string | null;
    EXPIRES(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Free-form publisher notes about this tile. Never a substitute for a
     * stated field.
     */
    REMARKS(): string | null;
    REMARKS(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    static startDTT(builder: flatbuffers.Builder): void;
    static addTilesetId(builder: flatbuffers.Builder, TILESET_IDOffset: flatbuffers.Offset): void;
    static addTilesetName(builder: flatbuffers.Builder, TILESET_NAMEOffset: flatbuffers.Offset): void;
    static addTilingScheme(builder: flatbuffers.Builder, TILING_SCHEME: dttTilingScheme): void;
    static addLevel(builder: flatbuffers.Builder, LEVEL: number): void;
    static addX(builder: flatbuffers.Builder, X: number): void;
    static addY(builder: flatbuffers.Builder, Y: number): void;
    static addRowOriginNorth(builder: flatbuffers.Builder, ROW_ORIGIN_NORTH: boolean): void;
    static addWestDeg(builder: flatbuffers.Builder, WEST_DEG: number): void;
    static addSouthDeg(builder: flatbuffers.Builder, SOUTH_DEG: number): void;
    static addEastDeg(builder: flatbuffers.Builder, EAST_DEG: number): void;
    static addNorthDeg(builder: flatbuffers.Builder, NORTH_DEG: number): void;
    static addMinHeightM(builder: flatbuffers.Builder, MIN_HEIGHT_M: number): void;
    static addMaxHeightM(builder: flatbuffers.Builder, MAX_HEIGHT_M: number): void;
    static addPayloadFormat(builder: flatbuffers.Builder, PAYLOAD_FORMAT: dttPayloadFormat): void;
    static addPayloadFormatVersion(builder: flatbuffers.Builder, PAYLOAD_FORMAT_VERSIONOffset: flatbuffers.Offset): void;
    static addPayload(builder: flatbuffers.Builder, PAYLOADOffset: flatbuffers.Offset): void;
    static addGridWidth(builder: flatbuffers.Builder, GRID_WIDTH: number): void;
    static addGridHeight(builder: flatbuffers.Builder, GRID_HEIGHT: number): void;
    static addPostSpacingM(builder: flatbuffers.Builder, POST_SPACING_M: number): void;
    static addSourcePostSpacingM(builder: flatbuffers.Builder, SOURCE_POST_SPACING_M: number): void;
    static addVerticalDatum(builder: flatbuffers.Builder, VERTICAL_DATUM: dttVerticalDatum): void;
    static addVerticalDatumName(builder: flatbuffers.Builder, VERTICAL_DATUM_NAMEOffset: flatbuffers.Offset): void;
    static addHorizontalDatumName(builder: flatbuffers.Builder, HORIZONTAL_DATUM_NAMEOffset: flatbuffers.Offset): void;
    static addVerticalAccuracyM(builder: flatbuffers.Builder, VERTICAL_ACCURACY_M: number): void;
    static addAccuracyConfidence(builder: flatbuffers.Builder, ACCURACY_CONFIDENCE: number): void;
    static addHorizontalAccuracyM(builder: flatbuffers.Builder, HORIZONTAL_ACCURACY_M: number): void;
    static addDataCoverageFraction(builder: flatbuffers.Builder, DATA_COVERAGE_FRACTION: number): void;
    static addNoDataValue(builder: flatbuffers.Builder, NO_DATA_VALUE: number): void;
    static addWaterMaskKind(builder: flatbuffers.Builder, WATER_MASK_KIND: dttWaterMask): void;
    static addWaterMask(builder: flatbuffers.Builder, WATER_MASKOffset: flatbuffers.Offset): void;
    static addWaterMaskWidth(builder: flatbuffers.Builder, WATER_MASK_WIDTH: number): void;
    static addWaterMaskHeight(builder: flatbuffers.Builder, WATER_MASK_HEIGHT: number): void;
    static addWaterMaskProvenance(builder: flatbuffers.Builder, WATER_MASK_PROVENANCEOffset: flatbuffers.Offset): void;
    static addVertexNormals(builder: flatbuffers.Builder, VERTEX_NORMALSOffset: flatbuffers.Offset): void;
    static addLandCover(builder: flatbuffers.Builder, LAND_COVEROffset: flatbuffers.Offset): void;
    static addChildAvailability(builder: flatbuffers.Builder, CHILD_AVAILABILITY: number): void;
    static addMaxLevel(builder: flatbuffers.Builder, MAX_LEVEL: number): void;
    static addSourceClass(builder: flatbuffers.Builder, SOURCE_CLASS: dttSourceClass): void;
    static addProvenance(builder: flatbuffers.Builder, PROVENANCEOffset: flatbuffers.Offset): void;
    static addEpoch(builder: flatbuffers.Builder, EPOCHOffset: flatbuffers.Offset): void;
    static addEtag(builder: flatbuffers.Builder, ETAGOffset: flatbuffers.Offset): void;
    static addExpires(builder: flatbuffers.Builder, EXPIRESOffset: flatbuffers.Offset): void;
    static addRemarks(builder: flatbuffers.Builder, REMARKSOffset: flatbuffers.Offset): void;
    static endDTT(builder: flatbuffers.Builder): flatbuffers.Offset;
    static finishDTTBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static finishSizePrefixedDTTBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    unpack(): DTTT;
    unpackTo(_o: DTTT): void;
}
export declare class DTTT implements flatbuffers.IGeneratedObject {
    TILESET_ID: string | Uint8Array | null;
    TILESET_NAME: string | Uint8Array | null;
    TILING_SCHEME: dttTilingScheme;
    LEVEL: number;
    X: number;
    Y: number;
    ROW_ORIGIN_NORTH: boolean;
    WEST_DEG: number;
    SOUTH_DEG: number;
    EAST_DEG: number;
    NORTH_DEG: number;
    MIN_HEIGHT_M: number;
    MAX_HEIGHT_M: number;
    PAYLOAD_FORMAT: dttPayloadFormat;
    PAYLOAD_FORMAT_VERSION: string | Uint8Array | null;
    PAYLOAD: DTTPayloadRefT | null;
    GRID_WIDTH: number;
    GRID_HEIGHT: number;
    POST_SPACING_M: number;
    SOURCE_POST_SPACING_M: number;
    VERTICAL_DATUM: dttVerticalDatum;
    VERTICAL_DATUM_NAME: string | Uint8Array | null;
    HORIZONTAL_DATUM_NAME: string | Uint8Array | null;
    VERTICAL_ACCURACY_M: number;
    ACCURACY_CONFIDENCE: number;
    HORIZONTAL_ACCURACY_M: number;
    DATA_COVERAGE_FRACTION: number;
    NO_DATA_VALUE: number;
    WATER_MASK_KIND: dttWaterMask;
    WATER_MASK: DTTPayloadRefT | null;
    WATER_MASK_WIDTH: number;
    WATER_MASK_HEIGHT: number;
    WATER_MASK_PROVENANCE: DTTProvenanceT | null;
    VERTEX_NORMALS: DTTPayloadRefT | null;
    LAND_COVER: DTTPayloadRefT | null;
    CHILD_AVAILABILITY: number;
    MAX_LEVEL: number;
    SOURCE_CLASS: dttSourceClass;
    PROVENANCE: DTTProvenanceT | null;
    EPOCH: string | Uint8Array | null;
    ETAG: string | Uint8Array | null;
    EXPIRES: string | Uint8Array | null;
    REMARKS: string | Uint8Array | null;
    constructor(TILESET_ID?: string | Uint8Array | null, TILESET_NAME?: string | Uint8Array | null, TILING_SCHEME?: dttTilingScheme, LEVEL?: number, X?: number, Y?: number, ROW_ORIGIN_NORTH?: boolean, WEST_DEG?: number, SOUTH_DEG?: number, EAST_DEG?: number, NORTH_DEG?: number, MIN_HEIGHT_M?: number, MAX_HEIGHT_M?: number, PAYLOAD_FORMAT?: dttPayloadFormat, PAYLOAD_FORMAT_VERSION?: string | Uint8Array | null, PAYLOAD?: DTTPayloadRefT | null, GRID_WIDTH?: number, GRID_HEIGHT?: number, POST_SPACING_M?: number, SOURCE_POST_SPACING_M?: number, VERTICAL_DATUM?: dttVerticalDatum, VERTICAL_DATUM_NAME?: string | Uint8Array | null, HORIZONTAL_DATUM_NAME?: string | Uint8Array | null, VERTICAL_ACCURACY_M?: number, ACCURACY_CONFIDENCE?: number, HORIZONTAL_ACCURACY_M?: number, DATA_COVERAGE_FRACTION?: number, NO_DATA_VALUE?: number, WATER_MASK_KIND?: dttWaterMask, WATER_MASK?: DTTPayloadRefT | null, WATER_MASK_WIDTH?: number, WATER_MASK_HEIGHT?: number, WATER_MASK_PROVENANCE?: DTTProvenanceT | null, VERTEX_NORMALS?: DTTPayloadRefT | null, LAND_COVER?: DTTPayloadRefT | null, CHILD_AVAILABILITY?: number, MAX_LEVEL?: number, SOURCE_CLASS?: dttSourceClass, PROVENANCE?: DTTProvenanceT | null, EPOCH?: string | Uint8Array | null, ETAG?: string | Uint8Array | null, EXPIRES?: string | Uint8Array | null, REMARKS?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=DTT.d.ts.map