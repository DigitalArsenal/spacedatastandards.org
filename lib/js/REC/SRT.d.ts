import * as flatbuffers from 'flatbuffers';
import { DTTPayloadRef, DTTPayloadRefT } from './DTTPayloadRef.js';
import { DTTProvenance, DTTProvenanceT } from './DTTProvenance.js';
import { SRTClass, SRTClassT } from './SRTClass.js';
import { dttTilingScheme } from './dttTilingScheme.js';
import { srtPayloadFormat } from './srtPayloadFormat.js';
import { srtPixelRegistration } from './srtPixelRegistration.js';
import { srtQuantity } from './srtQuantity.js';
import { srtSampleType } from './srtSampleType.js';
/**
 * Surface Raster Tile
 */
export declare class SRT implements flatbuffers.IUnpackableObject<SRTT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): SRT;
    static getRootAsSRT(bb: flatbuffers.ByteBuffer, obj?: SRT): SRT;
    static getSizePrefixedRootAsSRT(bb: flatbuffers.ByteBuffer, obj?: SRT): SRT;
    static bufferHasIdentifier(bb: flatbuffers.ByteBuffer): boolean;
    /**
     * Stable identity of the tileset this tile belongs to.
     */
    TILESET_ID(): string;
    TILESET_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    /**
     * Human-readable tileset name.
     */
    TILESET_NAME(): string | null;
    TILESET_NAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * What the samples measure.
     */
    QUANTITY(): srtQuantity;
    /**
     * Source quantity name, verbatim.
     */
    QUANTITY_NAME(): string | null;
    QUANTITY_NAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * UCUM unit of the scaled value (m for canopy height); absent for classes.
     */
    UNIT(): string | null;
    UNIT(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Stored sample type.
     */
    SAMPLE_TYPE(): srtSampleType;
    /**
     * value = sample * SCALE_FACTOR + ADD_OFFSET.
     */
    SCALE_FACTOR(): number;
    /**
     * value = sample * SCALE_FACTOR + ADD_OFFSET.
     */
    ADD_OFFSET(): number;
    /**
     * Stored sample value meaning no data (WorldCover: 0).
     */
    NO_DATA_VALUE(): number;
    /**
     * Class legend; required when QUANTITY = CATEGORICAL_CLASS.
     */
    CLASS_LEGEND(index: number, obj?: SRTClass): SRTClass | null;
    classLegendLength(): number;
    /**
     * Coordinate reference system, verbatim (e.g. EPSG:4326, EPSG:3857).
     */
    CRS(): string;
    CRS(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    /**
     * GDAL geotransform, 6 values, mapping pixel corners to CRS units.
     */
    AFFINE_TRANSFORM(index: number): number | null;
    affineTransformLength(): number;
    affineTransformArray(): Float64Array | null;
    /**
     * Pixel registration.
     */
    PIXEL_REGISTRATION(): srtPixelRegistration;
    /**
     * Grid width in samples.
     */
    GRID_WIDTH(): number;
    /**
     * Grid height in samples.
     */
    GRID_HEIGHT(): number;
    /**
     * Optional pyramid address scheme (canopy quadkey tiles = WEB_MERCATOR).
     */
    TILING_SCHEME(): dttTilingScheme;
    /**
     * Pyramid level.
     */
    LEVEL(): number;
    /**
     * Pyramid column.
     */
    X(): number;
    /**
     * Pyramid row.
     */
    Y(): number;
    /**
     * Geographic bounding box, west edge in degrees.
     */
    WEST_DEG(): number;
    /**
     * Geographic bounding box, south edge in degrees.
     */
    SOUTH_DEG(): number;
    /**
     * Geographic bounding box, east edge in degrees.
     */
    EAST_DEG(): number;
    /**
     * Geographic bounding box, north edge in degrees.
     */
    NORTH_DEG(): number;
    /**
     * Horizontal datum name, verbatim.
     */
    HORIZONTAL_DATUM_NAME(): string | null;
    HORIZONTAL_DATUM_NAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Encoding of PAYLOAD.
     */
    PAYLOAD_FORMAT(): srtPayloadFormat;
    /**
     * Native samples only: no palette conversion, resampling or rounding.
     */
    PAYLOAD(obj?: DTTPayloadRef): DTTPayloadRef | null;
    /**
     * Minimum scaled value in the tile.
     */
    MIN_VALUE(): number;
    /**
     * Maximum scaled value in the tile.
     */
    MAX_VALUE(): number;
    /**
     * Fraction of samples that are not NO_DATA_VALUE, 0 to 1.
     */
    DATA_COVERAGE_FRACTION(): number;
    /**
     * Dataset epoch of the samples, RFC 3339 UTC.
     */
    EPOCH(): string | null;
    EPOCH(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Dataset, retrieval and license lineage.
     */
    PROVENANCE(obj?: DTTProvenance): DTTProvenance | null;
    static startSRT(builder: flatbuffers.Builder): void;
    static addTilesetId(builder: flatbuffers.Builder, TILESET_IDOffset: flatbuffers.Offset): void;
    static addTilesetName(builder: flatbuffers.Builder, TILESET_NAMEOffset: flatbuffers.Offset): void;
    static addQuantity(builder: flatbuffers.Builder, QUANTITY: srtQuantity): void;
    static addQuantityName(builder: flatbuffers.Builder, QUANTITY_NAMEOffset: flatbuffers.Offset): void;
    static addUnit(builder: flatbuffers.Builder, UNITOffset: flatbuffers.Offset): void;
    static addSampleType(builder: flatbuffers.Builder, SAMPLE_TYPE: srtSampleType): void;
    static addScaleFactor(builder: flatbuffers.Builder, SCALE_FACTOR: number): void;
    static addAddOffset(builder: flatbuffers.Builder, ADD_OFFSET: number): void;
    static addNoDataValue(builder: flatbuffers.Builder, NO_DATA_VALUE: number): void;
    static addClassLegend(builder: flatbuffers.Builder, CLASS_LEGENDOffset: flatbuffers.Offset): void;
    static createClassLegendVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startClassLegendVector(builder: flatbuffers.Builder, numElems: number): void;
    static addCrs(builder: flatbuffers.Builder, CRSOffset: flatbuffers.Offset): void;
    static addAffineTransform(builder: flatbuffers.Builder, AFFINE_TRANSFORMOffset: flatbuffers.Offset): void;
    static createAffineTransformVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createAffineTransformVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startAffineTransformVector(builder: flatbuffers.Builder, numElems: number): void;
    static addPixelRegistration(builder: flatbuffers.Builder, PIXEL_REGISTRATION: srtPixelRegistration): void;
    static addGridWidth(builder: flatbuffers.Builder, GRID_WIDTH: number): void;
    static addGridHeight(builder: flatbuffers.Builder, GRID_HEIGHT: number): void;
    static addTilingScheme(builder: flatbuffers.Builder, TILING_SCHEME: dttTilingScheme): void;
    static addLevel(builder: flatbuffers.Builder, LEVEL: number): void;
    static addX(builder: flatbuffers.Builder, X: number): void;
    static addY(builder: flatbuffers.Builder, Y: number): void;
    static addWestDeg(builder: flatbuffers.Builder, WEST_DEG: number): void;
    static addSouthDeg(builder: flatbuffers.Builder, SOUTH_DEG: number): void;
    static addEastDeg(builder: flatbuffers.Builder, EAST_DEG: number): void;
    static addNorthDeg(builder: flatbuffers.Builder, NORTH_DEG: number): void;
    static addHorizontalDatumName(builder: flatbuffers.Builder, HORIZONTAL_DATUM_NAMEOffset: flatbuffers.Offset): void;
    static addPayloadFormat(builder: flatbuffers.Builder, PAYLOAD_FORMAT: srtPayloadFormat): void;
    static addPayload(builder: flatbuffers.Builder, PAYLOADOffset: flatbuffers.Offset): void;
    static addMinValue(builder: flatbuffers.Builder, MIN_VALUE: number): void;
    static addMaxValue(builder: flatbuffers.Builder, MAX_VALUE: number): void;
    static addDataCoverageFraction(builder: flatbuffers.Builder, DATA_COVERAGE_FRACTION: number): void;
    static addEpoch(builder: flatbuffers.Builder, EPOCHOffset: flatbuffers.Offset): void;
    static addProvenance(builder: flatbuffers.Builder, PROVENANCEOffset: flatbuffers.Offset): void;
    static endSRT(builder: flatbuffers.Builder): flatbuffers.Offset;
    static finishSRTBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static finishSizePrefixedSRTBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    unpack(): SRTT;
    unpackTo(_o: SRTT): void;
}
export declare class SRTT implements flatbuffers.IGeneratedObject {
    TILESET_ID: string | Uint8Array | null;
    TILESET_NAME: string | Uint8Array | null;
    QUANTITY: srtQuantity;
    QUANTITY_NAME: string | Uint8Array | null;
    UNIT: string | Uint8Array | null;
    SAMPLE_TYPE: srtSampleType;
    SCALE_FACTOR: number;
    ADD_OFFSET: number;
    NO_DATA_VALUE: number;
    CLASS_LEGEND: (SRTClassT)[];
    CRS: string | Uint8Array | null;
    AFFINE_TRANSFORM: (number)[];
    PIXEL_REGISTRATION: srtPixelRegistration;
    GRID_WIDTH: number;
    GRID_HEIGHT: number;
    TILING_SCHEME: dttTilingScheme;
    LEVEL: number;
    X: number;
    Y: number;
    WEST_DEG: number;
    SOUTH_DEG: number;
    EAST_DEG: number;
    NORTH_DEG: number;
    HORIZONTAL_DATUM_NAME: string | Uint8Array | null;
    PAYLOAD_FORMAT: srtPayloadFormat;
    PAYLOAD: DTTPayloadRefT | null;
    MIN_VALUE: number;
    MAX_VALUE: number;
    DATA_COVERAGE_FRACTION: number;
    EPOCH: string | Uint8Array | null;
    PROVENANCE: DTTProvenanceT | null;
    constructor(TILESET_ID?: string | Uint8Array | null, TILESET_NAME?: string | Uint8Array | null, QUANTITY?: srtQuantity, QUANTITY_NAME?: string | Uint8Array | null, UNIT?: string | Uint8Array | null, SAMPLE_TYPE?: srtSampleType, SCALE_FACTOR?: number, ADD_OFFSET?: number, NO_DATA_VALUE?: number, CLASS_LEGEND?: (SRTClassT)[], CRS?: string | Uint8Array | null, AFFINE_TRANSFORM?: (number)[], PIXEL_REGISTRATION?: srtPixelRegistration, GRID_WIDTH?: number, GRID_HEIGHT?: number, TILING_SCHEME?: dttTilingScheme, LEVEL?: number, X?: number, Y?: number, WEST_DEG?: number, SOUTH_DEG?: number, EAST_DEG?: number, NORTH_DEG?: number, HORIZONTAL_DATUM_NAME?: string | Uint8Array | null, PAYLOAD_FORMAT?: srtPayloadFormat, PAYLOAD?: DTTPayloadRefT | null, MIN_VALUE?: number, MAX_VALUE?: number, DATA_COVERAGE_FRACTION?: number, EPOCH?: string | Uint8Array | null, PROVENANCE?: DTTProvenanceT | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=SRT.d.ts.map