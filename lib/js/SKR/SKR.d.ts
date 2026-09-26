import * as flatbuffers from 'flatbuffers';
import { SKRExclusion, SKRExclusionT } from './SKRExclusion.js';
import { SKRHit, SKRHitT } from './SKRHit.js';
import { SKROccultation, SKROccultationT } from './SKROccultation.js';
import { phbDerivation } from './phbDerivation.js';
import { skqQueryKind } from './skqQueryKind.js';
import { skrStatus } from './skrStatus.js';
import { sktPlaceKind } from './sktPlaceKind.js';
/**
 * Sky Query Result: the answer to one `$SKQ`.
 */
export declare class SKR implements flatbuffers.IUnpackableObject<SKRT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): SKR;
    static getRootAsSKR(bb: flatbuffers.ByteBuffer, obj?: SKR): SKR;
    static getSizePrefixedRootAsSKR(bb: flatbuffers.ByteBuffer, obj?: SKR): SKR;
    static bufferHasIdentifier(bb: flatbuffers.ByteBuffer): boolean;
    /**
     * QUERY_ID of the query answered.
     */
    QUERY_ID(): string | null;
    QUERY_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    QUERY_KIND(): skqQueryKind;
    STATUS(): skrStatus;
    /**
     * Why a query failed.
     */
    MESSAGE(): string | null;
    MESSAGE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Epoch and reduction the answer is for, copied from the query.
     */
    EPOCH_JD_TT(): number;
    EPOCH_JD_TT_FRACTION(): number;
    PLACE(): sktPlaceKind;
    /**
     * Catalogue rows held.
     */
    ROW_COUNT(): number;
    /**
     * INGEST: rows added by the ingest answered.
     */
    ROWS_ADDED(): number;
    /**
     * INGEST: records refused by verification.
     */
    REJECTED_COUNT(): number;
    /**
     * Band descriptors held.
     */
    BAND_COUNT(): number;
    /**
     * CONE and FIELD_OF_VIEW: rows matched before MAX_RESULTS applied.
     */
    MATCHED_COUNT(): number;
    HITS(index: number, obj?: SKRHit): SKRHit | null;
    hitsLength(): number;
    /**
     * SYNTHETIC_PHOTOMETRY: bands of the table's columns.
     */
    BAND_IDS(index: number): string;
    BAND_IDS(index: number, optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    bandIdsLength(): number;
    /**
     * SYNTHETIC_PHOTOMETRY: ROW_COUNT x BAND_IDS magnitudes, row-major.
     */
    MAGNITUDES(index: number): number | null;
    magnitudesLength(): number;
    magnitudesArray(): Float32Array | null;
    /**
     * SYNTHETIC_PHOTOMETRY: how each magnitude was obtained, same layout.
     */
    DERIVATIONS(index: number): phbDerivation | null;
    derivationsLength(): number;
    derivationsArray(): Uint8Array | null;
    /**
     * IDENTIFY: detections matched.
     */
    MATCHED_DETECTIONS(): number;
    /**
     * IDENTIFY: camera-to-GCRS rotation, nine entries, row-major.
     */
    ROTATION(index: number): number | null;
    rotationLength(): number;
    rotationArray(): Float64Array | null;
    /**
     * IDENTIFY: the same rotation as (w, x, y, z).
     */
    QUATERNION(index: number): number | null;
    quaternionLength(): number;
    quaternionArray(): Float64Array | null;
    /**
     * IDENTIFY: RMS angle between matched detections and their rows.
     */
    RESIDUAL_RMS_ARCSEC(): number;
    /**
     * IDENTIFY: direction of the camera's +z axis.
     */
    BORESIGHT_RA_DEG(): number;
    BORESIGHT_DEC_DEG(): number;
    /**
     * IDENTIFY: row matched to each detection, in detection order;
     * 4294967295 when unmatched.
     */
    MATCHED_ROWS(index: number): number | null;
    matchedRowsLength(): number;
    matchedRowsArray(): Uint32Array | null;
    /**
     * OCCULTATION: rows passed over.
     */
    OCCULTATIONS(index: number, obj?: SKROccultation): SKROccultation | null;
    occultationsLength(): number;
    /**
     * BRIGHT_STAR_EXCLUSION: one verdict per pointing.
     */
    EXCLUSIONS(index: number, obj?: SKRExclusion): SKRExclusion | null;
    exclusionsLength(): number;
    static startSKR(builder: flatbuffers.Builder): void;
    static addQueryId(builder: flatbuffers.Builder, QUERY_IDOffset: flatbuffers.Offset): void;
    static addQueryKind(builder: flatbuffers.Builder, QUERY_KIND: skqQueryKind): void;
    static addStatus(builder: flatbuffers.Builder, STATUS: skrStatus): void;
    static addMessage(builder: flatbuffers.Builder, MESSAGEOffset: flatbuffers.Offset): void;
    static addEpochJdTt(builder: flatbuffers.Builder, EPOCH_JD_TT: number): void;
    static addEpochJdTtFraction(builder: flatbuffers.Builder, EPOCH_JD_TT_FRACTION: number): void;
    static addPlace(builder: flatbuffers.Builder, PLACE: sktPlaceKind): void;
    static addRowCount(builder: flatbuffers.Builder, ROW_COUNT: number): void;
    static addRowsAdded(builder: flatbuffers.Builder, ROWS_ADDED: number): void;
    static addRejectedCount(builder: flatbuffers.Builder, REJECTED_COUNT: number): void;
    static addBandCount(builder: flatbuffers.Builder, BAND_COUNT: number): void;
    static addMatchedCount(builder: flatbuffers.Builder, MATCHED_COUNT: number): void;
    static addHits(builder: flatbuffers.Builder, HITSOffset: flatbuffers.Offset): void;
    static startHitsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addBandIds(builder: flatbuffers.Builder, BAND_IDSOffset: flatbuffers.Offset): void;
    static createBandIdsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startBandIdsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addMagnitudes(builder: flatbuffers.Builder, MAGNITUDESOffset: flatbuffers.Offset): void;
    static createMagnitudesVector(builder: flatbuffers.Builder, data: number[] | Float32Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createMagnitudesVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startMagnitudesVector(builder: flatbuffers.Builder, numElems: number): void;
    static addDerivations(builder: flatbuffers.Builder, DERIVATIONSOffset: flatbuffers.Offset): void;
    static createDerivationsVector(builder: flatbuffers.Builder, data: phbDerivation[]): flatbuffers.Offset;
    static startDerivationsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addMatchedDetections(builder: flatbuffers.Builder, MATCHED_DETECTIONS: number): void;
    static addRotation(builder: flatbuffers.Builder, ROTATIONOffset: flatbuffers.Offset): void;
    static createRotationVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createRotationVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startRotationVector(builder: flatbuffers.Builder, numElems: number): void;
    static addQuaternion(builder: flatbuffers.Builder, QUATERNIONOffset: flatbuffers.Offset): void;
    static createQuaternionVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createQuaternionVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startQuaternionVector(builder: flatbuffers.Builder, numElems: number): void;
    static addResidualRmsArcsec(builder: flatbuffers.Builder, RESIDUAL_RMS_ARCSEC: number): void;
    static addBoresightRaDeg(builder: flatbuffers.Builder, BORESIGHT_RA_DEG: number): void;
    static addBoresightDecDeg(builder: flatbuffers.Builder, BORESIGHT_DEC_DEG: number): void;
    static addMatchedRows(builder: flatbuffers.Builder, MATCHED_ROWSOffset: flatbuffers.Offset): void;
    static createMatchedRowsVector(builder: flatbuffers.Builder, data: number[] | Uint32Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createMatchedRowsVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startMatchedRowsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addOccultations(builder: flatbuffers.Builder, OCCULTATIONSOffset: flatbuffers.Offset): void;
    static startOccultationsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addExclusions(builder: flatbuffers.Builder, EXCLUSIONSOffset: flatbuffers.Offset): void;
    static startExclusionsVector(builder: flatbuffers.Builder, numElems: number): void;
    static endSKR(builder: flatbuffers.Builder): flatbuffers.Offset;
    static finishSKRBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static finishSizePrefixedSKRBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static createSKR(builder: flatbuffers.Builder, QUERY_IDOffset: flatbuffers.Offset, QUERY_KIND: skqQueryKind, STATUS: skrStatus, MESSAGEOffset: flatbuffers.Offset, EPOCH_JD_TT: number, EPOCH_JD_TT_FRACTION: number, PLACE: sktPlaceKind, ROW_COUNT: number, ROWS_ADDED: number, REJECTED_COUNT: number, BAND_COUNT: number, MATCHED_COUNT: number, HITSOffset: flatbuffers.Offset, BAND_IDSOffset: flatbuffers.Offset, MAGNITUDESOffset: flatbuffers.Offset, DERIVATIONSOffset: flatbuffers.Offset, MATCHED_DETECTIONS: number, ROTATIONOffset: flatbuffers.Offset, QUATERNIONOffset: flatbuffers.Offset, RESIDUAL_RMS_ARCSEC: number, BORESIGHT_RA_DEG: number, BORESIGHT_DEC_DEG: number, MATCHED_ROWSOffset: flatbuffers.Offset, OCCULTATIONSOffset: flatbuffers.Offset, EXCLUSIONSOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): SKRT;
    unpackTo(_o: SKRT): void;
}
export declare class SKRT implements flatbuffers.IGeneratedObject {
    QUERY_ID: string | Uint8Array | null;
    QUERY_KIND: skqQueryKind;
    STATUS: skrStatus;
    MESSAGE: string | Uint8Array | null;
    EPOCH_JD_TT: number;
    EPOCH_JD_TT_FRACTION: number;
    PLACE: sktPlaceKind;
    ROW_COUNT: number;
    ROWS_ADDED: number;
    REJECTED_COUNT: number;
    BAND_COUNT: number;
    MATCHED_COUNT: number;
    HITS: (SKRHitT)[];
    BAND_IDS: (string)[];
    MAGNITUDES: (number)[];
    DERIVATIONS: (phbDerivation)[];
    MATCHED_DETECTIONS: number;
    ROTATION: (number)[];
    QUATERNION: (number)[];
    RESIDUAL_RMS_ARCSEC: number;
    BORESIGHT_RA_DEG: number;
    BORESIGHT_DEC_DEG: number;
    MATCHED_ROWS: (number)[];
    OCCULTATIONS: (SKROccultationT)[];
    EXCLUSIONS: (SKRExclusionT)[];
    constructor(QUERY_ID?: string | Uint8Array | null, QUERY_KIND?: skqQueryKind, STATUS?: skrStatus, MESSAGE?: string | Uint8Array | null, EPOCH_JD_TT?: number, EPOCH_JD_TT_FRACTION?: number, PLACE?: sktPlaceKind, ROW_COUNT?: number, ROWS_ADDED?: number, REJECTED_COUNT?: number, BAND_COUNT?: number, MATCHED_COUNT?: number, HITS?: (SKRHitT)[], BAND_IDS?: (string)[], MAGNITUDES?: (number)[], DERIVATIONS?: (phbDerivation)[], MATCHED_DETECTIONS?: number, ROTATION?: (number)[], QUATERNION?: (number)[], RESIDUAL_RMS_ARCSEC?: number, BORESIGHT_RA_DEG?: number, BORESIGHT_DEC_DEG?: number, MATCHED_ROWS?: (number)[], OCCULTATIONS?: (SKROccultationT)[], EXCLUSIONS?: (SKRExclusionT)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=SKR.d.ts.map