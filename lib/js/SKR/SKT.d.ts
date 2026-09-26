import * as flatbuffers from 'flatbuffers';
import { SKTPoint, SKTPointT } from './SKTPoint.js';
import { phbMagnitudeSystem } from './phbMagnitudeSystem.js';
import { phbSpectralRegime } from './phbSpectralRegime.js';
import { sktCelestialFrame } from './sktCelestialFrame.js';
import { sktColorEncoding } from './sktColorEncoding.js';
import { sktMapEncoding } from './sktMapEncoding.js';
import { sktMapQuantity } from './sktMapQuantity.js';
import { sktPayloadKind } from './sktPayloadKind.js';
import { sktPlaceKind } from './sktPlaceKind.js';
import { sktRefinement } from './sktRefinement.js';
import { sktStretchFunction } from './sktStretchFunction.js';
/**
 * Sky Tile: one HEALPix tile of an all-sky point-source or diffuse-map layer.
 */
export declare class SKT implements flatbuffers.IUnpackableObject<SKTT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): SKT;
    static getRootAsSKT(bb: flatbuffers.ByteBuffer, obj?: SKT): SKT;
    static getSizePrefixedRootAsSKT(bb: flatbuffers.ByteBuffer, obj?: SKT): SKT;
    static bufferHasIdentifier(bb: flatbuffers.ByteBuffer): boolean;
    /**
     * Stable identifier of the layer: equal across every tile of one
     * (producer, source catalogue or survey, band, place, epoch).
     */
    LAYER_ID(): string;
    LAYER_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    /**
     * Frame the HEALPix grid and the point positions are stated in.
     */
    FRAME(): sktCelestialFrame;
    /**
     * HEALPix order; NSIDE = 2^ORDER.
     */
    ORDER(): number;
    /**
     * Nested pixel index at ORDER.
     */
    PIXEL(): bigint;
    /**
     * Deepest order of the layer, when the producer knows it; 255 when
     * unstated.
     */
    MAX_ORDER(): number;
    /**
     * Which of the four children exist (bit i for child 4 * PIXEL + i). 0 on
     * a leaf.
     */
    CHILD_MASK(): number;
    /**
     * Payload the tile carries.
     */
    PAYLOAD_KIND(): sktPayloadKind;
    /**
     * How the tile relates to its ancestors and children.
     */
    REFINE(): sktRefinement;
    /**
     * Coarse spectral region of the band.
     */
    SPECTRAL_REGIME(): phbSpectralRegime;
    /**
     * Band identifier; resolves to a `$PHB` BAND_ID. MAG and map values are
     * in this band.
     */
    BAND_ID(): string | null;
    BAND_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Effective wavelength of the band, nanometres (vacuum).
     */
    WAVELENGTH_EFF_NM(): number;
    /**
     * Short edge of a band-integrated map, nanometres.
     */
    WAVELENGTH_MIN_NM(): number;
    /**
     * Long edge of a band-integrated map, nanometres.
     */
    WAVELENGTH_MAX_NM(): number;
    /**
     * Calibration system of MAG.
     */
    MAGNITUDE_SYSTEM(): phbMagnitudeSystem;
    /**
     * Which place point positions are.
     */
    PLACE(): sktPlaceKind;
    /**
     * Epoch of point positions, Julian years (TT).
     */
    EPOCH(): number;
    /**
     * Observer an ASTROMETRIC or APPARENT tile was computed for (a site, a
     * spacecraft or the geocentre), as the producer names it.
     */
    OBSERVER_ID(): string | null;
    OBSERVER_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Number of points in the payload.
     */
    POINT_COUNT(): number;
    /**
     * Brightest magnitude in the tile.
     */
    MAG_BRIGHTEST(): number;
    /**
     * Faintest magnitude in the tile; with the ancestors, the layer is
     * complete to this limit inside the pixel.
     */
    MAG_LIMIT(): number;
    /**
     * What each point's COLOR holds.
     */
    COLOR_ENCODING(): sktColorEncoding;
    /**
     * Bluer band of a COLOR_INDEX colour.
     */
    COLOR_BLUE_BAND_ID(): string | null;
    COLOR_BLUE_BAND_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Redder band of a COLOR_INDEX colour.
     */
    COLOR_RED_BAND_ID(): string | null;
    COLOR_RED_BAND_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Packed points, brightest first.
     */
    POINTS(index: number, obj?: SKTPoint): SKTPoint | null;
    pointsLength(): number;
    /**
     * Content identifier of the full `$STR` / `$CSO` records of the points,
     * a size-prefixed record sequence in ROW order.
     */
    ROW_COLLECTION_CID(): string | null;
    ROW_COLLECTION_CID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Order offset of the map pixels: the tile holds 4^MAP_DEPTH values.
     */
    MAP_DEPTH(): number;
    /**
     * Numeric encoding of MAP_VALUES.
     */
    MAP_ENCODING(): sktMapEncoding;
    /**
     * Physical quantity of the map.
     */
    MAP_QUANTITY(): sktMapQuantity;
    /**
     * Producer's name for the quantity when MAP_QUANTITY is OTHER.
     */
    MAP_QUANTITY_NAME(): string | null;
    MAP_QUANTITY_NAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Units of the physical map values, UCUM style (e.g. "K", "MJy/sr",
     * "count/s/sr").
     */
    MAP_UNITS(): string | null;
    MAP_UNITS(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Scale of a scaled integer encoding.
     */
    MAP_SCALE(): number;
    /**
     * Offset of a scaled integer encoding.
     */
    MAP_OFFSET(): number;
    /**
     * Raw value marking a pixel with no data in a scaled integer encoding.
     */
    MAP_BLANK(): number;
    /**
     * Raw map bytes, 4^MAP_DEPTH values in nested order.
     */
    MAP_VALUES(index: number): number | null;
    mapValuesLength(): number;
    mapValuesArray(): Uint8Array | null;
    /**
     * Recommended stretch.
     */
    STRETCH(): sktStretchFunction;
    /**
     * Physical value drawn black.
     */
    BLACK_POINT(): number;
    /**
     * Physical value drawn white.
     */
    WHITE_POINT(): number;
    /**
     * Softening of an ASINH stretch, in physical units.
     */
    STRETCH_SOFTENING(): number;
    /**
     * Percentile levels of the layer's value distribution, in [0, 100],
     * ascending.
     */
    PERCENTILE_LEVELS(index: number): number | null;
    percentileLevelsLength(): number;
    percentileLevelsArray(): Float32Array | null;
    /**
     * Physical value at each PERCENTILE_LEVELS entry. Computed over the whole
     * layer, so every tile stretches alike.
     */
    PERCENTILE_VALUES(index: number): number | null;
    percentileValuesLength(): number;
    percentileValuesArray(): Float64Array | null;
    /**
     * Content identifier of the payload when POINTS and MAP_VALUES are absent.
     */
    PAYLOAD_CID(): string | null;
    PAYLOAD_CID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Length of the payload at PAYLOAD_CID, bytes.
     */
    PAYLOAD_BYTES(): bigint;
    /**
     * Start of the observations the tile summarises, ISO 8601 UTC.
     */
    OBSERVATION_START(): string | null;
    OBSERVATION_START(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * End of the observations the tile summarises, ISO 8601 UTC.
     */
    OBSERVATION_END(): string | null;
    OBSERVATION_END(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Verbatim names of the catalogues or surveys the tile was derived from.
     */
    SOURCE_NAMES(index: number): string;
    SOURCE_NAMES(index: number, optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    sourceNamesLength(): number;
    /**
     * Peer identifier of the node that produced the tile.
     */
    PRODUCER_PEER_ID(): string | null;
    PRODUCER_PEER_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Producer software and version.
     */
    PRODUCER_VERSION(): string | null;
    PRODUCER_VERSION(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Time the tile was produced, ISO 8601 UTC.
     */
    PRODUCED_AT(): string | null;
    PRODUCED_AT(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Citation the upstream publishers ask for.
     */
    CITATION(): string | null;
    CITATION(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * URL of the licence or terms of the source data.
     */
    LICENSE_URL(): string | null;
    LICENSE_URL(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    static startSKT(builder: flatbuffers.Builder): void;
    static addLayerId(builder: flatbuffers.Builder, LAYER_IDOffset: flatbuffers.Offset): void;
    static addFrame(builder: flatbuffers.Builder, FRAME: sktCelestialFrame): void;
    static addOrder(builder: flatbuffers.Builder, ORDER: number): void;
    static addPixel(builder: flatbuffers.Builder, PIXEL: bigint): void;
    static addMaxOrder(builder: flatbuffers.Builder, MAX_ORDER: number): void;
    static addChildMask(builder: flatbuffers.Builder, CHILD_MASK: number): void;
    static addPayloadKind(builder: flatbuffers.Builder, PAYLOAD_KIND: sktPayloadKind): void;
    static addRefine(builder: flatbuffers.Builder, REFINE: sktRefinement): void;
    static addSpectralRegime(builder: flatbuffers.Builder, SPECTRAL_REGIME: phbSpectralRegime): void;
    static addBandId(builder: flatbuffers.Builder, BAND_IDOffset: flatbuffers.Offset): void;
    static addWavelengthEffNm(builder: flatbuffers.Builder, WAVELENGTH_EFF_NM: number): void;
    static addWavelengthMinNm(builder: flatbuffers.Builder, WAVELENGTH_MIN_NM: number): void;
    static addWavelengthMaxNm(builder: flatbuffers.Builder, WAVELENGTH_MAX_NM: number): void;
    static addMagnitudeSystem(builder: flatbuffers.Builder, MAGNITUDE_SYSTEM: phbMagnitudeSystem): void;
    static addPlace(builder: flatbuffers.Builder, PLACE: sktPlaceKind): void;
    static addEpoch(builder: flatbuffers.Builder, EPOCH: number): void;
    static addObserverId(builder: flatbuffers.Builder, OBSERVER_IDOffset: flatbuffers.Offset): void;
    static addPointCount(builder: flatbuffers.Builder, POINT_COUNT: number): void;
    static addMagBrightest(builder: flatbuffers.Builder, MAG_BRIGHTEST: number): void;
    static addMagLimit(builder: flatbuffers.Builder, MAG_LIMIT: number): void;
    static addColorEncoding(builder: flatbuffers.Builder, COLOR_ENCODING: sktColorEncoding): void;
    static addColorBlueBandId(builder: flatbuffers.Builder, COLOR_BLUE_BAND_IDOffset: flatbuffers.Offset): void;
    static addColorRedBandId(builder: flatbuffers.Builder, COLOR_RED_BAND_IDOffset: flatbuffers.Offset): void;
    static addPoints(builder: flatbuffers.Builder, POINTSOffset: flatbuffers.Offset): void;
    static startPointsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addRowCollectionCid(builder: flatbuffers.Builder, ROW_COLLECTION_CIDOffset: flatbuffers.Offset): void;
    static addMapDepth(builder: flatbuffers.Builder, MAP_DEPTH: number): void;
    static addMapEncoding(builder: flatbuffers.Builder, MAP_ENCODING: sktMapEncoding): void;
    static addMapQuantity(builder: flatbuffers.Builder, MAP_QUANTITY: sktMapQuantity): void;
    static addMapQuantityName(builder: flatbuffers.Builder, MAP_QUANTITY_NAMEOffset: flatbuffers.Offset): void;
    static addMapUnits(builder: flatbuffers.Builder, MAP_UNITSOffset: flatbuffers.Offset): void;
    static addMapScale(builder: flatbuffers.Builder, MAP_SCALE: number): void;
    static addMapOffset(builder: flatbuffers.Builder, MAP_OFFSET: number): void;
    static addMapBlank(builder: flatbuffers.Builder, MAP_BLANK: number): void;
    static addMapValues(builder: flatbuffers.Builder, MAP_VALUESOffset: flatbuffers.Offset): void;
    static createMapValuesVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startMapValuesVector(builder: flatbuffers.Builder, numElems: number): void;
    static addStretch(builder: flatbuffers.Builder, STRETCH: sktStretchFunction): void;
    static addBlackPoint(builder: flatbuffers.Builder, BLACK_POINT: number): void;
    static addWhitePoint(builder: flatbuffers.Builder, WHITE_POINT: number): void;
    static addStretchSoftening(builder: flatbuffers.Builder, STRETCH_SOFTENING: number): void;
    static addPercentileLevels(builder: flatbuffers.Builder, PERCENTILE_LEVELSOffset: flatbuffers.Offset): void;
    static createPercentileLevelsVector(builder: flatbuffers.Builder, data: number[] | Float32Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createPercentileLevelsVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startPercentileLevelsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addPercentileValues(builder: flatbuffers.Builder, PERCENTILE_VALUESOffset: flatbuffers.Offset): void;
    static createPercentileValuesVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createPercentileValuesVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startPercentileValuesVector(builder: flatbuffers.Builder, numElems: number): void;
    static addPayloadCid(builder: flatbuffers.Builder, PAYLOAD_CIDOffset: flatbuffers.Offset): void;
    static addPayloadBytes(builder: flatbuffers.Builder, PAYLOAD_BYTES: bigint): void;
    static addObservationStart(builder: flatbuffers.Builder, OBSERVATION_STARTOffset: flatbuffers.Offset): void;
    static addObservationEnd(builder: flatbuffers.Builder, OBSERVATION_ENDOffset: flatbuffers.Offset): void;
    static addSourceNames(builder: flatbuffers.Builder, SOURCE_NAMESOffset: flatbuffers.Offset): void;
    static createSourceNamesVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startSourceNamesVector(builder: flatbuffers.Builder, numElems: number): void;
    static addProducerPeerId(builder: flatbuffers.Builder, PRODUCER_PEER_IDOffset: flatbuffers.Offset): void;
    static addProducerVersion(builder: flatbuffers.Builder, PRODUCER_VERSIONOffset: flatbuffers.Offset): void;
    static addProducedAt(builder: flatbuffers.Builder, PRODUCED_ATOffset: flatbuffers.Offset): void;
    static addCitation(builder: flatbuffers.Builder, CITATIONOffset: flatbuffers.Offset): void;
    static addLicenseUrl(builder: flatbuffers.Builder, LICENSE_URLOffset: flatbuffers.Offset): void;
    static endSKT(builder: flatbuffers.Builder): flatbuffers.Offset;
    static finishSKTBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static finishSizePrefixedSKTBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static createSKT(builder: flatbuffers.Builder, LAYER_IDOffset: flatbuffers.Offset, FRAME: sktCelestialFrame, ORDER: number, PIXEL: bigint, MAX_ORDER: number, CHILD_MASK: number, PAYLOAD_KIND: sktPayloadKind, REFINE: sktRefinement, SPECTRAL_REGIME: phbSpectralRegime, BAND_IDOffset: flatbuffers.Offset, WAVELENGTH_EFF_NM: number, WAVELENGTH_MIN_NM: number, WAVELENGTH_MAX_NM: number, MAGNITUDE_SYSTEM: phbMagnitudeSystem, PLACE: sktPlaceKind, EPOCH: number, OBSERVER_IDOffset: flatbuffers.Offset, POINT_COUNT: number, MAG_BRIGHTEST: number, MAG_LIMIT: number, COLOR_ENCODING: sktColorEncoding, COLOR_BLUE_BAND_IDOffset: flatbuffers.Offset, COLOR_RED_BAND_IDOffset: flatbuffers.Offset, POINTSOffset: flatbuffers.Offset, ROW_COLLECTION_CIDOffset: flatbuffers.Offset, MAP_DEPTH: number, MAP_ENCODING: sktMapEncoding, MAP_QUANTITY: sktMapQuantity, MAP_QUANTITY_NAMEOffset: flatbuffers.Offset, MAP_UNITSOffset: flatbuffers.Offset, MAP_SCALE: number, MAP_OFFSET: number, MAP_BLANK: number, MAP_VALUESOffset: flatbuffers.Offset, STRETCH: sktStretchFunction, BLACK_POINT: number, WHITE_POINT: number, STRETCH_SOFTENING: number, PERCENTILE_LEVELSOffset: flatbuffers.Offset, PERCENTILE_VALUESOffset: flatbuffers.Offset, PAYLOAD_CIDOffset: flatbuffers.Offset, PAYLOAD_BYTES: bigint, OBSERVATION_STARTOffset: flatbuffers.Offset, OBSERVATION_ENDOffset: flatbuffers.Offset, SOURCE_NAMESOffset: flatbuffers.Offset, PRODUCER_PEER_IDOffset: flatbuffers.Offset, PRODUCER_VERSIONOffset: flatbuffers.Offset, PRODUCED_ATOffset: flatbuffers.Offset, CITATIONOffset: flatbuffers.Offset, LICENSE_URLOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): SKTT;
    unpackTo(_o: SKTT): void;
}
export declare class SKTT implements flatbuffers.IGeneratedObject {
    LAYER_ID: string | Uint8Array | null;
    FRAME: sktCelestialFrame;
    ORDER: number;
    PIXEL: bigint;
    MAX_ORDER: number;
    CHILD_MASK: number;
    PAYLOAD_KIND: sktPayloadKind;
    REFINE: sktRefinement;
    SPECTRAL_REGIME: phbSpectralRegime;
    BAND_ID: string | Uint8Array | null;
    WAVELENGTH_EFF_NM: number;
    WAVELENGTH_MIN_NM: number;
    WAVELENGTH_MAX_NM: number;
    MAGNITUDE_SYSTEM: phbMagnitudeSystem;
    PLACE: sktPlaceKind;
    EPOCH: number;
    OBSERVER_ID: string | Uint8Array | null;
    POINT_COUNT: number;
    MAG_BRIGHTEST: number;
    MAG_LIMIT: number;
    COLOR_ENCODING: sktColorEncoding;
    COLOR_BLUE_BAND_ID: string | Uint8Array | null;
    COLOR_RED_BAND_ID: string | Uint8Array | null;
    POINTS: (SKTPointT)[];
    ROW_COLLECTION_CID: string | Uint8Array | null;
    MAP_DEPTH: number;
    MAP_ENCODING: sktMapEncoding;
    MAP_QUANTITY: sktMapQuantity;
    MAP_QUANTITY_NAME: string | Uint8Array | null;
    MAP_UNITS: string | Uint8Array | null;
    MAP_SCALE: number;
    MAP_OFFSET: number;
    MAP_BLANK: number;
    MAP_VALUES: (number)[];
    STRETCH: sktStretchFunction;
    BLACK_POINT: number;
    WHITE_POINT: number;
    STRETCH_SOFTENING: number;
    PERCENTILE_LEVELS: (number)[];
    PERCENTILE_VALUES: (number)[];
    PAYLOAD_CID: string | Uint8Array | null;
    PAYLOAD_BYTES: bigint;
    OBSERVATION_START: string | Uint8Array | null;
    OBSERVATION_END: string | Uint8Array | null;
    SOURCE_NAMES: (string)[];
    PRODUCER_PEER_ID: string | Uint8Array | null;
    PRODUCER_VERSION: string | Uint8Array | null;
    PRODUCED_AT: string | Uint8Array | null;
    CITATION: string | Uint8Array | null;
    LICENSE_URL: string | Uint8Array | null;
    constructor(LAYER_ID?: string | Uint8Array | null, FRAME?: sktCelestialFrame, ORDER?: number, PIXEL?: bigint, MAX_ORDER?: number, CHILD_MASK?: number, PAYLOAD_KIND?: sktPayloadKind, REFINE?: sktRefinement, SPECTRAL_REGIME?: phbSpectralRegime, BAND_ID?: string | Uint8Array | null, WAVELENGTH_EFF_NM?: number, WAVELENGTH_MIN_NM?: number, WAVELENGTH_MAX_NM?: number, MAGNITUDE_SYSTEM?: phbMagnitudeSystem, PLACE?: sktPlaceKind, EPOCH?: number, OBSERVER_ID?: string | Uint8Array | null, POINT_COUNT?: number, MAG_BRIGHTEST?: number, MAG_LIMIT?: number, COLOR_ENCODING?: sktColorEncoding, COLOR_BLUE_BAND_ID?: string | Uint8Array | null, COLOR_RED_BAND_ID?: string | Uint8Array | null, POINTS?: (SKTPointT)[], ROW_COLLECTION_CID?: string | Uint8Array | null, MAP_DEPTH?: number, MAP_ENCODING?: sktMapEncoding, MAP_QUANTITY?: sktMapQuantity, MAP_QUANTITY_NAME?: string | Uint8Array | null, MAP_UNITS?: string | Uint8Array | null, MAP_SCALE?: number, MAP_OFFSET?: number, MAP_BLANK?: number, MAP_VALUES?: (number)[], STRETCH?: sktStretchFunction, BLACK_POINT?: number, WHITE_POINT?: number, STRETCH_SOFTENING?: number, PERCENTILE_LEVELS?: (number)[], PERCENTILE_VALUES?: (number)[], PAYLOAD_CID?: string | Uint8Array | null, PAYLOAD_BYTES?: bigint, OBSERVATION_START?: string | Uint8Array | null, OBSERVATION_END?: string | Uint8Array | null, SOURCE_NAMES?: (string)[], PRODUCER_PEER_ID?: string | Uint8Array | null, PRODUCER_VERSION?: string | Uint8Array | null, PRODUCED_AT?: string | Uint8Array | null, CITATION?: string | Uint8Array | null, LICENSE_URL?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=SKT.d.ts.map