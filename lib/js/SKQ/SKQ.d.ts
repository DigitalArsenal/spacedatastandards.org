import * as flatbuffers from 'flatbuffers';
import { SKQDetection, SKQDetectionT } from './SKQDetection.js';
import { SKQPointing, SKQPointingT } from './SKQPointing.js';
import { SKQTrack, SKQTrackT } from './SKQTrack.js';
import { skqQueryKind } from './skqQueryKind.js';
import { sktColorEncoding } from './sktColorEncoding.js';
import { sktPlaceKind } from './sktPlaceKind.js';
/**
 * Sky Query: one question to a star and compact-source catalogue for an observer and epoch.
 */
export declare class SKQ implements flatbuffers.IUnpackableObject<SKQT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): SKQ;
    static getRootAsSKQ(bb: flatbuffers.ByteBuffer, obj?: SKQ): SKQ;
    static getSizePrefixedRootAsSKQ(bb: flatbuffers.ByteBuffer, obj?: SKQ): SKQ;
    static bufferHasIdentifier(bb: flatbuffers.ByteBuffer): boolean;
    /**
     * Caller's identifier, echoed in the result.
     */
    QUERY_ID(): string | null;
    QUERY_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * What is asked.
     */
    QUERY_KIND(): skqQueryKind;
    /**
     * Whole part of the epoch, Julian Date (TT).
     */
    EPOCH_JD_TT(): number;
    /**
     * Fraction added to EPOCH_JD_TT, days.
     */
    EPOCH_JD_TT_FRACTION(): number;
    /**
     * Name of the observer, carried into tiles and results.
     */
    OBSERVER_ID(): string | null;
    OBSERVER_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Observer's geocentric position on GCRS axes, metres; three entries.
     */
    OBSERVER_POSITION_M(index: number): number | null;
    observerPositionMLength(): number;
    observerPositionMArray(): Float64Array | null;
    /**
     * Observer's geocentric velocity on GCRS axes, metres per second; three
     * entries.
     */
    OBSERVER_VELOCITY_M_PER_S(index: number): number | null;
    observerVelocityMPerSLength(): number;
    observerVelocityMPerSArray(): Float64Array | null;
    /**
     * How far the reduction goes.
     */
    PLACE(): sktPlaceKind;
    /**
     * Band magnitudes are stated in and limited by; resolves to a `$PHB`
     * BAND_ID.
     */
    BAND_ID(): string | null;
    BAND_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Faintest magnitude reported. Absent: no limit.
     */
    MAG_LIMIT(): number;
    /**
     * Largest number of rows reported; 0 for no cap.
     */
    MAX_RESULTS(): number;
    /**
     * APPARENT_PLACES: HEALPix order of the output tiles.
     */
    TILE_ORDER(): number;
    /**
     * APPARENT_PLACES: what each point's COLOR holds.
     */
    COLOR_ENCODING(): sktColorEncoding;
    /**
     * APPARENT_PLACES: bands of a COLOR_INDEX colour.
     */
    COLOR_BLUE_BAND_ID(): string | null;
    COLOR_BLUE_BAND_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    COLOR_RED_BAND_ID(): string | null;
    COLOR_RED_BAND_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * APPARENT_PLACES: LAYER_ID of the output tiles.
     */
    LAYER_ID(): string | null;
    LAYER_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * SYNTHETIC_PHOTOMETRY: bands to report.
     */
    BAND_IDS(index: number): string;
    BAND_IDS(index: number, optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    bandIdsLength(): number;
    /**
     * CONE and FIELD_OF_VIEW: centre or boresight.
     */
    RA_DEG(): number;
    DEC_DEG(): number;
    /**
     * CONE: radius.
     */
    RADIUS_DEG(): number;
    /**
     * FIELD_OF_VIEW: half-extent along the field's x axis.
     */
    HALF_WIDTH_DEG(): number;
    /**
     * FIELD_OF_VIEW: half-extent along the field's y axis.
     */
    HALF_HEIGHT_DEG(): number;
    /**
     * FIELD_OF_VIEW: position angle of the field's +y axis, east of north.
     */
    ROLL_DEG(): number;
    /**
     * IDENTIFY: detected stars.
     */
    DETECTIONS(index: number, obj?: SKQDetection): SKQDetection | null;
    detectionsLength(): number;
    /**
     * IDENTIFY: largest angle between a detection and its catalogue star.
     */
    TOLERANCE_ARCSEC(): number;
    /**
     * IDENTIFY: largest angle between two detections (the field diagonal).
     */
    MAX_FIELD_DEG(): number;
    /**
     * OCCULTATION: bodies and their tracks.
     */
    TRACKS(index: number, obj?: SKQTrack): SKQTrack | null;
    tracksLength(): number;
    /**
     * BRIGHT_STAR_EXCLUSION: pointings to check.
     */
    POINTINGS(index: number, obj?: SKQPointing): SKQPointing | null;
    pointingsLength(): number;
    /**
     * BRIGHT_STAR_EXCLUSION: radius around each pointing.
     */
    EXCLUSION_RADIUS_DEG(): number;
    /**
     * BRIGHT_STAR_EXCLUSION: rows at least this bright exclude a pointing.
     */
    MAG_THRESHOLD(): number;
    static startSKQ(builder: flatbuffers.Builder): void;
    static addQueryId(builder: flatbuffers.Builder, QUERY_IDOffset: flatbuffers.Offset): void;
    static addQueryKind(builder: flatbuffers.Builder, QUERY_KIND: skqQueryKind): void;
    static addEpochJdTt(builder: flatbuffers.Builder, EPOCH_JD_TT: number): void;
    static addEpochJdTtFraction(builder: flatbuffers.Builder, EPOCH_JD_TT_FRACTION: number): void;
    static addObserverId(builder: flatbuffers.Builder, OBSERVER_IDOffset: flatbuffers.Offset): void;
    static addObserverPositionM(builder: flatbuffers.Builder, OBSERVER_POSITION_MOffset: flatbuffers.Offset): void;
    static createObserverPositionMVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createObserverPositionMVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startObserverPositionMVector(builder: flatbuffers.Builder, numElems: number): void;
    static addObserverVelocityMPerS(builder: flatbuffers.Builder, OBSERVER_VELOCITY_M_PER_SOffset: flatbuffers.Offset): void;
    static createObserverVelocityMPerSVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createObserverVelocityMPerSVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startObserverVelocityMPerSVector(builder: flatbuffers.Builder, numElems: number): void;
    static addPlace(builder: flatbuffers.Builder, PLACE: sktPlaceKind): void;
    static addBandId(builder: flatbuffers.Builder, BAND_IDOffset: flatbuffers.Offset): void;
    static addMagLimit(builder: flatbuffers.Builder, MAG_LIMIT: number): void;
    static addMaxResults(builder: flatbuffers.Builder, MAX_RESULTS: number): void;
    static addTileOrder(builder: flatbuffers.Builder, TILE_ORDER: number): void;
    static addColorEncoding(builder: flatbuffers.Builder, COLOR_ENCODING: sktColorEncoding): void;
    static addColorBlueBandId(builder: flatbuffers.Builder, COLOR_BLUE_BAND_IDOffset: flatbuffers.Offset): void;
    static addColorRedBandId(builder: flatbuffers.Builder, COLOR_RED_BAND_IDOffset: flatbuffers.Offset): void;
    static addLayerId(builder: flatbuffers.Builder, LAYER_IDOffset: flatbuffers.Offset): void;
    static addBandIds(builder: flatbuffers.Builder, BAND_IDSOffset: flatbuffers.Offset): void;
    static createBandIdsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startBandIdsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addRaDeg(builder: flatbuffers.Builder, RA_DEG: number): void;
    static addDecDeg(builder: flatbuffers.Builder, DEC_DEG: number): void;
    static addRadiusDeg(builder: flatbuffers.Builder, RADIUS_DEG: number): void;
    static addHalfWidthDeg(builder: flatbuffers.Builder, HALF_WIDTH_DEG: number): void;
    static addHalfHeightDeg(builder: flatbuffers.Builder, HALF_HEIGHT_DEG: number): void;
    static addRollDeg(builder: flatbuffers.Builder, ROLL_DEG: number): void;
    static addDetections(builder: flatbuffers.Builder, DETECTIONSOffset: flatbuffers.Offset): void;
    static startDetectionsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addToleranceArcsec(builder: flatbuffers.Builder, TOLERANCE_ARCSEC: number): void;
    static addMaxFieldDeg(builder: flatbuffers.Builder, MAX_FIELD_DEG: number): void;
    static addTracks(builder: flatbuffers.Builder, TRACKSOffset: flatbuffers.Offset): void;
    static startTracksVector(builder: flatbuffers.Builder, numElems: number): void;
    static addPointings(builder: flatbuffers.Builder, POINTINGSOffset: flatbuffers.Offset): void;
    static startPointingsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addExclusionRadiusDeg(builder: flatbuffers.Builder, EXCLUSION_RADIUS_DEG: number): void;
    static addMagThreshold(builder: flatbuffers.Builder, MAG_THRESHOLD: number): void;
    static endSKQ(builder: flatbuffers.Builder): flatbuffers.Offset;
    static finishSKQBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static finishSizePrefixedSKQBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static createSKQ(builder: flatbuffers.Builder, QUERY_IDOffset: flatbuffers.Offset, QUERY_KIND: skqQueryKind, EPOCH_JD_TT: number, EPOCH_JD_TT_FRACTION: number, OBSERVER_IDOffset: flatbuffers.Offset, OBSERVER_POSITION_MOffset: flatbuffers.Offset, OBSERVER_VELOCITY_M_PER_SOffset: flatbuffers.Offset, PLACE: sktPlaceKind, BAND_IDOffset: flatbuffers.Offset, MAG_LIMIT: number, MAX_RESULTS: number, TILE_ORDER: number, COLOR_ENCODING: sktColorEncoding, COLOR_BLUE_BAND_IDOffset: flatbuffers.Offset, COLOR_RED_BAND_IDOffset: flatbuffers.Offset, LAYER_IDOffset: flatbuffers.Offset, BAND_IDSOffset: flatbuffers.Offset, RA_DEG: number, DEC_DEG: number, RADIUS_DEG: number, HALF_WIDTH_DEG: number, HALF_HEIGHT_DEG: number, ROLL_DEG: number, DETECTIONSOffset: flatbuffers.Offset, TOLERANCE_ARCSEC: number, MAX_FIELD_DEG: number, TRACKSOffset: flatbuffers.Offset, POINTINGSOffset: flatbuffers.Offset, EXCLUSION_RADIUS_DEG: number, MAG_THRESHOLD: number): flatbuffers.Offset;
    unpack(): SKQT;
    unpackTo(_o: SKQT): void;
}
export declare class SKQT implements flatbuffers.IGeneratedObject {
    QUERY_ID: string | Uint8Array | null;
    QUERY_KIND: skqQueryKind;
    EPOCH_JD_TT: number;
    EPOCH_JD_TT_FRACTION: number;
    OBSERVER_ID: string | Uint8Array | null;
    OBSERVER_POSITION_M: (number)[];
    OBSERVER_VELOCITY_M_PER_S: (number)[];
    PLACE: sktPlaceKind;
    BAND_ID: string | Uint8Array | null;
    MAG_LIMIT: number;
    MAX_RESULTS: number;
    TILE_ORDER: number;
    COLOR_ENCODING: sktColorEncoding;
    COLOR_BLUE_BAND_ID: string | Uint8Array | null;
    COLOR_RED_BAND_ID: string | Uint8Array | null;
    LAYER_ID: string | Uint8Array | null;
    BAND_IDS: (string)[];
    RA_DEG: number;
    DEC_DEG: number;
    RADIUS_DEG: number;
    HALF_WIDTH_DEG: number;
    HALF_HEIGHT_DEG: number;
    ROLL_DEG: number;
    DETECTIONS: (SKQDetectionT)[];
    TOLERANCE_ARCSEC: number;
    MAX_FIELD_DEG: number;
    TRACKS: (SKQTrackT)[];
    POINTINGS: (SKQPointingT)[];
    EXCLUSION_RADIUS_DEG: number;
    MAG_THRESHOLD: number;
    constructor(QUERY_ID?: string | Uint8Array | null, QUERY_KIND?: skqQueryKind, EPOCH_JD_TT?: number, EPOCH_JD_TT_FRACTION?: number, OBSERVER_ID?: string | Uint8Array | null, OBSERVER_POSITION_M?: (number)[], OBSERVER_VELOCITY_M_PER_S?: (number)[], PLACE?: sktPlaceKind, BAND_ID?: string | Uint8Array | null, MAG_LIMIT?: number, MAX_RESULTS?: number, TILE_ORDER?: number, COLOR_ENCODING?: sktColorEncoding, COLOR_BLUE_BAND_ID?: string | Uint8Array | null, COLOR_RED_BAND_ID?: string | Uint8Array | null, LAYER_ID?: string | Uint8Array | null, BAND_IDS?: (string)[], RA_DEG?: number, DEC_DEG?: number, RADIUS_DEG?: number, HALF_WIDTH_DEG?: number, HALF_HEIGHT_DEG?: number, ROLL_DEG?: number, DETECTIONS?: (SKQDetectionT)[], TOLERANCE_ARCSEC?: number, MAX_FIELD_DEG?: number, TRACKS?: (SKQTrackT)[], POINTINGS?: (SKQPointingT)[], EXCLUSION_RADIUS_DEG?: number, MAG_THRESHOLD?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=SKQ.d.ts.map