import * as flatbuffers from 'flatbuffers';
import { GCTCoverGrid, GCTCoverGridT } from './GCTCoverGrid.js';
import { GCTInstance, GCTInstanceT } from './GCTInstance.js';
import { GCTVariant, GCTVariantT } from './GCTVariant.js';
import { gctFieldQuantity } from './gctFieldQuantity.js';
import { gctRefinement } from './gctRefinement.js';
import { gctTilingScheme } from './gctTilingScheme.js';
import { wxfLicenseClass } from './wxfLicenseClass.js';
import { wxfModelClass } from './wxfModelClass.js';
import { wxfTimeBasis } from './wxfTimeBasis.js';
/**
 * Gaussian Cloud Tile: one quadtree tile of a volumetric field as a mass-conserving Gaussian mixture, rendering-ready, for one valid time.
 */
export declare class GCT implements flatbuffers.IUnpackableObject<GCTT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): GCT;
    static getRootAsGCT(bb: flatbuffers.ByteBuffer, obj?: GCT): GCT;
    static getSizePrefixedRootAsGCT(bb: flatbuffers.ByteBuffer, obj?: GCT): GCT;
    static bufferHasIdentifier(bb: flatbuffers.ByteBuffer): boolean;
    /**
     * Stable identifier of the whole tiled field this tile belongs to; equal
     * across all tiles and levels of one (producer, source fields, valid
     * time, geometric-error ladder).
     */
    FIELD_ID(): string;
    FIELD_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    /**
     * Quadtree the keys are stated in.
     */
    TILING(): gctTilingScheme;
    /**
     * Tile level; 0 is a root.
     */
    LEVEL(): number;
    /**
     * Tile column, eastward from longitude -180.
     */
    X(): number;
    /**
     * Tile row, southward from latitude +90.
     */
    Y(): number;
    /**
     * Which of the four children exist (bits 0..3 as defined in the header).
     * 0 on a leaf. A child that does not exist has no content anywhere
     * beneath it — clear sky is never traversed.
     */
    CHILD_MASK(): number;
    /**
     * Deepest level with content under this tile, when the producer knows
     * it; 255 when unstated.
     */
    MAX_LEVEL(): number;
    /**
     * How the tile relates to its children.
     */
    REFINE(): gctRefinement;
    /**
     * The cell the tile's content was merged on, metres: its geometric
     * error. Children carry a smaller value than their parent.
     */
    GEOMETRIC_ERROR_M(): number;
    /**
     * Bounding region of the content and every descendant's content, which
     * may exceed the nominal tile rectangle. Radians, WGS84.
     */
    WEST_RAD(): number;
    SOUTH_RAD(): number;
    EAST_RAD(): number;
    NORTH_RAD(): number;
    /**
     * Lowest point of the region, metres above the WGS84 ellipsoid.
     */
    MIN_HEIGHT_M(): number;
    /**
     * Highest point of the region, metres above the WGS84 ellipsoid.
     */
    MAX_HEIGHT_M(): number;
    /**
     * The tile's east-north-up frame: geodetic origin, radians and metres
     * above the WGS84 ellipsoid. Instances and variants are stated in this
     * frame.
     */
    ORIGIN_LON_RAD(): number;
    ORIGIN_LAT_RAD(): number;
    ORIGIN_HEIGHT_M(): number;
    /**
     * Column-major 4x4 transform taking tile-frame points (metres) to WGS84
     * Earth-centred Earth-fixed metres. Exactly 16 entries. Its rigid
     * inverse takes ECEF points into the tile frame.
     */
    ENU_TO_ECEF(index: number): number | null;
    enuToEcefLength(): number;
    enuToEcefArray(): Float64Array | null;
    /**
     * Physical quantity every Gaussian amplitude measures.
     */
    FIELD_QUANTITY(): gctFieldQuantity;
    /**
     * Producer's name for the quantity; required when FIELD_QUANTITY is
     * OTHER.
     */
    FIELD_QUANTITY_NAME(): string | null;
    FIELD_QUANTITY_NAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Units of every amplitude, UCUM or CF style (e.g. "m-1", "kg kg-1").
     */
    AMPLITUDE_UNITS(): string;
    AMPLITUDE_UNITS(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    /**
     * Relative tolerance on mass conservation between any two levels of a
     * variant and between a tile and its children, e.g. 0.01.
     */
    MASS_TOLERANCE(): number;
    /**
     * Variants placed in this tile.
     */
    VARIANTS(index: number, obj?: GCTVariant): GCTVariant | null;
    variantsLength(): number;
    /**
     * Placements of the variants in the tile frame.
     */
    INSTANCES(index: number, obj?: GCTInstance): GCTInstance | null;
    instancesLength(): number;
    /**
     * The producer's reduction of the source fields to this tile, present on
     * tiles whose GEOMETRIC_ERROR_M exceeds the cloud layer's thickness (the
     * sheet a consumer draws before the Gaussians resolve) and optional
     * elsewhere.
     */
    COVER(obj?: GCTCoverGrid): GCTCoverGrid | null;
    /**
     * Time the field is valid at, Unix milliseconds UTC.
     */
    VALID_TIME_MS(): bigint;
    /**
     * Initialisation time of the run the source fields came from, Unix
     * milliseconds UTC. Present only for TIME_BASIS Initialization.
     */
    INIT_TIME_MS(): bigint;
    /**
     * Forecast lead from INIT_TIME_MS, hours. Present only for TIME_BASIS
     * Initialization.
     */
    LEAD_HOURS(): number;
    /**
     * Which times the source publishes; governs INIT_TIME_MS and LEAD_HOURS.
     */
    TIME_BASIS(): wxfTimeBasis;
    /**
     * Class of the model that produced the source fields.
     */
    MODEL_CLASS(): wxfModelClass;
    /**
     * Producer-defined identifier of the source model.
     */
    MODEL_ID(): string | null;
    MODEL_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * FIELD_ID of every `$WXF` (or other source record) the tile was derived
     * from, including ones that contributed nothing, so a consumer can tell
     * "not consulted" from "consulted and empty".
     */
    SOURCE_FIELD_IDS(index: number): string;
    SOURCE_FIELD_IDS(index: number, optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    sourceFieldIdsLength(): number;
    /**
     * Peer identifier of the node that produced and published this tile.
     */
    PRODUCER_PEER_ID(): string | null;
    PRODUCER_PEER_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Producer software and version that authored the Gaussians, e.g.
     * "orbpro-gaussian-clouds 0.13.0".
     */
    PRODUCER_VERSION(): string | null;
    PRODUCER_VERSION(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Producer conventions a consumer needs and this schema does not fix
     * (the EROSION deck convention, the erosion and warp fields' definition).
     */
    PRODUCER_NOTES(): string | null;
    PRODUCER_NOTES(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Unix milliseconds UTC when the tile was produced.
     */
    PRODUCED_AT_MS(): bigint;
    /**
     * Seed the placement and authoring were derived from; with the source
     * fields it reproduces the tile.
     */
    AUTHORING_SEED(): number;
    /**
     * Licence class applicable to the derived tile at PRODUCED_AT_MS.
     */
    LICENSE_CLASS(): wxfLicenseClass;
    /**
     * URL of the licence or terms the tile is offered under.
     */
    LICENSE_URL(): string | null;
    LICENSE_URL(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Citation the upstream publishers ask for.
     */
    CITATION(): string | null;
    CITATION(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    static startGCT(builder: flatbuffers.Builder): void;
    static addFieldId(builder: flatbuffers.Builder, FIELD_IDOffset: flatbuffers.Offset): void;
    static addTiling(builder: flatbuffers.Builder, TILING: gctTilingScheme): void;
    static addLevel(builder: flatbuffers.Builder, LEVEL: number): void;
    static addX(builder: flatbuffers.Builder, X: number): void;
    static addY(builder: flatbuffers.Builder, Y: number): void;
    static addChildMask(builder: flatbuffers.Builder, CHILD_MASK: number): void;
    static addMaxLevel(builder: flatbuffers.Builder, MAX_LEVEL: number): void;
    static addRefine(builder: flatbuffers.Builder, REFINE: gctRefinement): void;
    static addGeometricErrorM(builder: flatbuffers.Builder, GEOMETRIC_ERROR_M: number): void;
    static addWestRad(builder: flatbuffers.Builder, WEST_RAD: number): void;
    static addSouthRad(builder: flatbuffers.Builder, SOUTH_RAD: number): void;
    static addEastRad(builder: flatbuffers.Builder, EAST_RAD: number): void;
    static addNorthRad(builder: flatbuffers.Builder, NORTH_RAD: number): void;
    static addMinHeightM(builder: flatbuffers.Builder, MIN_HEIGHT_M: number): void;
    static addMaxHeightM(builder: flatbuffers.Builder, MAX_HEIGHT_M: number): void;
    static addOriginLonRad(builder: flatbuffers.Builder, ORIGIN_LON_RAD: number): void;
    static addOriginLatRad(builder: flatbuffers.Builder, ORIGIN_LAT_RAD: number): void;
    static addOriginHeightM(builder: flatbuffers.Builder, ORIGIN_HEIGHT_M: number): void;
    static addEnuToEcef(builder: flatbuffers.Builder, ENU_TO_ECEFOffset: flatbuffers.Offset): void;
    static createEnuToEcefVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createEnuToEcefVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startEnuToEcefVector(builder: flatbuffers.Builder, numElems: number): void;
    static addFieldQuantity(builder: flatbuffers.Builder, FIELD_QUANTITY: gctFieldQuantity): void;
    static addFieldQuantityName(builder: flatbuffers.Builder, FIELD_QUANTITY_NAMEOffset: flatbuffers.Offset): void;
    static addAmplitudeUnits(builder: flatbuffers.Builder, AMPLITUDE_UNITSOffset: flatbuffers.Offset): void;
    static addMassTolerance(builder: flatbuffers.Builder, MASS_TOLERANCE: number): void;
    static addVariants(builder: flatbuffers.Builder, VARIANTSOffset: flatbuffers.Offset): void;
    static createVariantsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startVariantsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addInstances(builder: flatbuffers.Builder, INSTANCESOffset: flatbuffers.Offset): void;
    static createInstancesVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startInstancesVector(builder: flatbuffers.Builder, numElems: number): void;
    static addCover(builder: flatbuffers.Builder, COVEROffset: flatbuffers.Offset): void;
    static addValidTimeMs(builder: flatbuffers.Builder, VALID_TIME_MS: bigint): void;
    static addInitTimeMs(builder: flatbuffers.Builder, INIT_TIME_MS: bigint): void;
    static addLeadHours(builder: flatbuffers.Builder, LEAD_HOURS: number): void;
    static addTimeBasis(builder: flatbuffers.Builder, TIME_BASIS: wxfTimeBasis): void;
    static addModelClass(builder: flatbuffers.Builder, MODEL_CLASS: wxfModelClass): void;
    static addModelId(builder: flatbuffers.Builder, MODEL_IDOffset: flatbuffers.Offset): void;
    static addSourceFieldIds(builder: flatbuffers.Builder, SOURCE_FIELD_IDSOffset: flatbuffers.Offset): void;
    static createSourceFieldIdsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startSourceFieldIdsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addProducerPeerId(builder: flatbuffers.Builder, PRODUCER_PEER_IDOffset: flatbuffers.Offset): void;
    static addProducerVersion(builder: flatbuffers.Builder, PRODUCER_VERSIONOffset: flatbuffers.Offset): void;
    static addProducerNotes(builder: flatbuffers.Builder, PRODUCER_NOTESOffset: flatbuffers.Offset): void;
    static addProducedAtMs(builder: flatbuffers.Builder, PRODUCED_AT_MS: bigint): void;
    static addAuthoringSeed(builder: flatbuffers.Builder, AUTHORING_SEED: number): void;
    static addLicenseClass(builder: flatbuffers.Builder, LICENSE_CLASS: wxfLicenseClass): void;
    static addLicenseUrl(builder: flatbuffers.Builder, LICENSE_URLOffset: flatbuffers.Offset): void;
    static addCitation(builder: flatbuffers.Builder, CITATIONOffset: flatbuffers.Offset): void;
    static endGCT(builder: flatbuffers.Builder): flatbuffers.Offset;
    static finishGCTBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static finishSizePrefixedGCTBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    unpack(): GCTT;
    unpackTo(_o: GCTT): void;
}
export declare class GCTT implements flatbuffers.IGeneratedObject {
    FIELD_ID: string | Uint8Array | null;
    TILING: gctTilingScheme;
    LEVEL: number;
    X: number;
    Y: number;
    CHILD_MASK: number;
    MAX_LEVEL: number;
    REFINE: gctRefinement;
    GEOMETRIC_ERROR_M: number;
    WEST_RAD: number;
    SOUTH_RAD: number;
    EAST_RAD: number;
    NORTH_RAD: number;
    MIN_HEIGHT_M: number;
    MAX_HEIGHT_M: number;
    ORIGIN_LON_RAD: number;
    ORIGIN_LAT_RAD: number;
    ORIGIN_HEIGHT_M: number;
    ENU_TO_ECEF: (number)[];
    FIELD_QUANTITY: gctFieldQuantity;
    FIELD_QUANTITY_NAME: string | Uint8Array | null;
    AMPLITUDE_UNITS: string | Uint8Array | null;
    MASS_TOLERANCE: number;
    VARIANTS: (GCTVariantT)[];
    INSTANCES: (GCTInstanceT)[];
    COVER: GCTCoverGridT | null;
    VALID_TIME_MS: bigint;
    INIT_TIME_MS: bigint;
    LEAD_HOURS: number;
    TIME_BASIS: wxfTimeBasis;
    MODEL_CLASS: wxfModelClass;
    MODEL_ID: string | Uint8Array | null;
    SOURCE_FIELD_IDS: (string)[];
    PRODUCER_PEER_ID: string | Uint8Array | null;
    PRODUCER_VERSION: string | Uint8Array | null;
    PRODUCER_NOTES: string | Uint8Array | null;
    PRODUCED_AT_MS: bigint;
    AUTHORING_SEED: number;
    LICENSE_CLASS: wxfLicenseClass;
    LICENSE_URL: string | Uint8Array | null;
    CITATION: string | Uint8Array | null;
    constructor(FIELD_ID?: string | Uint8Array | null, TILING?: gctTilingScheme, LEVEL?: number, X?: number, Y?: number, CHILD_MASK?: number, MAX_LEVEL?: number, REFINE?: gctRefinement, GEOMETRIC_ERROR_M?: number, WEST_RAD?: number, SOUTH_RAD?: number, EAST_RAD?: number, NORTH_RAD?: number, MIN_HEIGHT_M?: number, MAX_HEIGHT_M?: number, ORIGIN_LON_RAD?: number, ORIGIN_LAT_RAD?: number, ORIGIN_HEIGHT_M?: number, ENU_TO_ECEF?: (number)[], FIELD_QUANTITY?: gctFieldQuantity, FIELD_QUANTITY_NAME?: string | Uint8Array | null, AMPLITUDE_UNITS?: string | Uint8Array | null, MASS_TOLERANCE?: number, VARIANTS?: (GCTVariantT)[], INSTANCES?: (GCTInstanceT)[], COVER?: GCTCoverGridT | null, VALID_TIME_MS?: bigint, INIT_TIME_MS?: bigint, LEAD_HOURS?: number, TIME_BASIS?: wxfTimeBasis, MODEL_CLASS?: wxfModelClass, MODEL_ID?: string | Uint8Array | null, SOURCE_FIELD_IDS?: (string)[], PRODUCER_PEER_ID?: string | Uint8Array | null, PRODUCER_VERSION?: string | Uint8Array | null, PRODUCER_NOTES?: string | Uint8Array | null, PRODUCED_AT_MS?: bigint, AUTHORING_SEED?: number, LICENSE_CLASS?: wxfLicenseClass, LICENSE_URL?: string | Uint8Array | null, CITATION?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=GCT.d.ts.map