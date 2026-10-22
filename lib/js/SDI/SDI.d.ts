import * as flatbuffers from 'flatbuffers';
import { PVN, PVNT } from './PVN.js';
/**
 * Solar Disk Image
 */
export declare class SDI implements flatbuffers.IUnpackableObject<SDIT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): SDI;
    static getRootAsSDI(bb: flatbuffers.ByteBuffer, obj?: SDI): SDI;
    static getSizePrefixedRootAsSDI(bb: flatbuffers.ByteBuffer, obj?: SDI): SDI;
    static bufferHasIdentifier(bb: flatbuffers.ByteBuffer): boolean;
    /**
     * Observatory or mission, verbatim (FITS TELESCOP).
     */
    OBSERVATORY(): string | null;
    OBSERVATORY(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Instrument, verbatim (FITS INSTRUME).
     */
    INSTRUMENT(): string | null;
    INSTRUMENT(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Measurement, verbatim (FITS WAVELNTH token or continuum label).
     */
    MEASUREMENT(): string | null;
    MEASUREMENT(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Wavelength in nm.
     */
    WAVELENGTH_NM(): number;
    /**
     * The source's image identity, verbatim.
     */
    IMAGE_ID(): string | null;
    IMAGE_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * When this image was requested from the source, RFC 3339 UTC.
     */
    REQUESTED_AT(): string | null;
    REQUESTED_AT(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Observation time normalized to RFC 3339 UTC.
     */
    OBSERVED_AT(): string;
    OBSERVED_AT(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    /**
     * FITS DATE-OBS, verbatim.
     */
    DATE_OBS(): string | null;
    DATE_OBS(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * FITS TIMESYS, verbatim.
     */
    TIME_SCALE(): string | null;
    TIME_SCALE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Source cadence in seconds.
     */
    CADENCE_S(): number;
    /**
     * Exposure time in seconds (FITS EXPTIME).
     */
    EXPOSURE_S(): number;
    /**
     * CID of the image bytes.
     */
    IMAGE_CID(): string | null;
    IMAGE_CID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Media type of the image bytes (e.g. image/jp2, application/fits).
     */
    IMAGE_MEDIA_TYPE(): string | null;
    IMAGE_MEDIA_TYPE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * SHA-256 of the image bytes, lowercase hex.
     */
    IMAGE_DIGEST(): string | null;
    IMAGE_DIGEST(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Size of the image bytes.
     */
    IMAGE_SIZE_BYTES(): bigint;
    /**
     * CID of the verbatim FITS header.
     */
    HEADER_CID(): string | null;
    HEADER_CID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Image width in pixels (FITS NAXIS1).
     */
    WIDTH(): number;
    /**
     * Image height in pixels (FITS NAXIS2).
     */
    HEIGHT(): number;
    /**
     * FITS CTYPE1, verbatim (e.g. HPLN-TAN).
     */
    CTYPE1(): string | null;
    CTYPE1(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * FITS CTYPE2, verbatim (e.g. HPLT-TAN).
     */
    CTYPE2(): string | null;
    CTYPE2(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * FITS CUNIT1, verbatim.
     */
    CUNIT1(): string | null;
    CUNIT1(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * FITS CUNIT2, verbatim.
     */
    CUNIT2(): string | null;
    CUNIT2(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * FITS CRPIX1, one-based.
     */
    CRPIX1(): number;
    /**
     * FITS CRPIX2, one-based.
     */
    CRPIX2(): number;
    /**
     * FITS CRVAL1 in CUNIT1.
     */
    CRVAL1(): number;
    /**
     * FITS CRVAL2 in CUNIT2.
     */
    CRVAL2(): number;
    /**
     * FITS CDELT1 in CUNIT1 per pixel.
     */
    CDELT1(): number;
    /**
     * FITS CDELT2 in CUNIT2 per pixel.
     */
    CDELT2(): number;
    /**
     * FITS CROTA2 in degrees.
     */
    CROTA2(): number;
    /**
     * FITS PCi_j matrix, 4 values row-major (PC1_1, PC1_2, PC2_1, PC2_2),
     * present only when the source supplies them.
     */
    PC(index: number): number | null;
    pcLength(): number;
    pcArray(): Float64Array | null;
    /**
     * Observed solar radius in arcseconds (FITS RSUN_OBS).
     */
    RSUN_OBS_ARCSEC(): number;
    /**
     * Reference solar radius in meters (FITS RSUN_REF).
     */
    RSUN_REF_M(): number;
    /**
     * Observer distance from Sun center in meters (FITS DSUN_OBS).
     */
    DSUN_OBS_M(): number;
    /**
     * Observer Carrington longitude in degrees (FITS CRLN_OBS).
     */
    CRLN_OBS_DEG(): number;
    /**
     * Observer Carrington latitude in degrees (FITS CRLT_OBS).
     */
    CRLT_OBS_DEG(): number;
    /**
     * Observer Stonyhurst longitude in degrees (FITS HGLN_OBS).
     */
    HGLN_OBS_DEG(): number;
    /**
     * Observer Stonyhurst latitude in degrees (FITS HGLT_OBS).
     */
    HGLT_OBS_DEG(): number;
    /**
     * FITS QUALITY bitmask; meaningful only when HAS_QUALITY.
     */
    QUALITY(): bigint;
    /**
     * True when the source states QUALITY.
     */
    HAS_QUALITY(): boolean;
    /**
     * Processing description, verbatim.
     */
    PROCESSING(): string | null;
    PROCESSING(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Per-record source, provider, software, license terms and lineage.
     */
    PROVENANCE(obj?: PVN): PVN | null;
    /**
     * CID of the original source bytes this record was parsed from.
     */
    SOURCE_CID(): string | null;
    SOURCE_CID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * SHA-256 of the original source bytes, lowercase hex.
     */
    SOURCE_DIGEST(): string | null;
    SOURCE_DIGEST(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * When the source bytes were retrieved, RFC 3339 UTC.
     */
    RETRIEVED_AT(): string | null;
    RETRIEVED_AT(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    static startSDI(builder: flatbuffers.Builder): void;
    static addObservatory(builder: flatbuffers.Builder, OBSERVATORYOffset: flatbuffers.Offset): void;
    static addInstrument(builder: flatbuffers.Builder, INSTRUMENTOffset: flatbuffers.Offset): void;
    static addMeasurement(builder: flatbuffers.Builder, MEASUREMENTOffset: flatbuffers.Offset): void;
    static addWavelengthNm(builder: flatbuffers.Builder, WAVELENGTH_NM: number): void;
    static addImageId(builder: flatbuffers.Builder, IMAGE_IDOffset: flatbuffers.Offset): void;
    static addRequestedAt(builder: flatbuffers.Builder, REQUESTED_ATOffset: flatbuffers.Offset): void;
    static addObservedAt(builder: flatbuffers.Builder, OBSERVED_ATOffset: flatbuffers.Offset): void;
    static addDateObs(builder: flatbuffers.Builder, DATE_OBSOffset: flatbuffers.Offset): void;
    static addTimeScale(builder: flatbuffers.Builder, TIME_SCALEOffset: flatbuffers.Offset): void;
    static addCadenceS(builder: flatbuffers.Builder, CADENCE_S: number): void;
    static addExposureS(builder: flatbuffers.Builder, EXPOSURE_S: number): void;
    static addImageCid(builder: flatbuffers.Builder, IMAGE_CIDOffset: flatbuffers.Offset): void;
    static addImageMediaType(builder: flatbuffers.Builder, IMAGE_MEDIA_TYPEOffset: flatbuffers.Offset): void;
    static addImageDigest(builder: flatbuffers.Builder, IMAGE_DIGESTOffset: flatbuffers.Offset): void;
    static addImageSizeBytes(builder: flatbuffers.Builder, IMAGE_SIZE_BYTES: bigint): void;
    static addHeaderCid(builder: flatbuffers.Builder, HEADER_CIDOffset: flatbuffers.Offset): void;
    static addWidth(builder: flatbuffers.Builder, WIDTH: number): void;
    static addHeight(builder: flatbuffers.Builder, HEIGHT: number): void;
    static addCtype1(builder: flatbuffers.Builder, CTYPE1Offset: flatbuffers.Offset): void;
    static addCtype2(builder: flatbuffers.Builder, CTYPE2Offset: flatbuffers.Offset): void;
    static addCunit1(builder: flatbuffers.Builder, CUNIT1Offset: flatbuffers.Offset): void;
    static addCunit2(builder: flatbuffers.Builder, CUNIT2Offset: flatbuffers.Offset): void;
    static addCrpix1(builder: flatbuffers.Builder, CRPIX1: number): void;
    static addCrpix2(builder: flatbuffers.Builder, CRPIX2: number): void;
    static addCrval1(builder: flatbuffers.Builder, CRVAL1: number): void;
    static addCrval2(builder: flatbuffers.Builder, CRVAL2: number): void;
    static addCdelt1(builder: flatbuffers.Builder, CDELT1: number): void;
    static addCdelt2(builder: flatbuffers.Builder, CDELT2: number): void;
    static addCrota2(builder: flatbuffers.Builder, CROTA2: number): void;
    static addPc(builder: flatbuffers.Builder, PCOffset: flatbuffers.Offset): void;
    static createPcVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createPcVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startPcVector(builder: flatbuffers.Builder, numElems: number): void;
    static addRsunObsArcsec(builder: flatbuffers.Builder, RSUN_OBS_ARCSEC: number): void;
    static addRsunRefM(builder: flatbuffers.Builder, RSUN_REF_M: number): void;
    static addDsunObsM(builder: flatbuffers.Builder, DSUN_OBS_M: number): void;
    static addCrlnObsDeg(builder: flatbuffers.Builder, CRLN_OBS_DEG: number): void;
    static addCrltObsDeg(builder: flatbuffers.Builder, CRLT_OBS_DEG: number): void;
    static addHglnObsDeg(builder: flatbuffers.Builder, HGLN_OBS_DEG: number): void;
    static addHgltObsDeg(builder: flatbuffers.Builder, HGLT_OBS_DEG: number): void;
    static addQuality(builder: flatbuffers.Builder, QUALITY: bigint): void;
    static addHasQuality(builder: flatbuffers.Builder, HAS_QUALITY: boolean): void;
    static addProcessing(builder: flatbuffers.Builder, PROCESSINGOffset: flatbuffers.Offset): void;
    static addProvenance(builder: flatbuffers.Builder, PROVENANCEOffset: flatbuffers.Offset): void;
    static addSourceCid(builder: flatbuffers.Builder, SOURCE_CIDOffset: flatbuffers.Offset): void;
    static addSourceDigest(builder: flatbuffers.Builder, SOURCE_DIGESTOffset: flatbuffers.Offset): void;
    static addRetrievedAt(builder: flatbuffers.Builder, RETRIEVED_ATOffset: flatbuffers.Offset): void;
    static endSDI(builder: flatbuffers.Builder): flatbuffers.Offset;
    static finishSDIBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static finishSizePrefixedSDIBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    unpack(): SDIT;
    unpackTo(_o: SDIT): void;
}
export declare class SDIT implements flatbuffers.IGeneratedObject {
    OBSERVATORY: string | Uint8Array | null;
    INSTRUMENT: string | Uint8Array | null;
    MEASUREMENT: string | Uint8Array | null;
    WAVELENGTH_NM: number;
    IMAGE_ID: string | Uint8Array | null;
    REQUESTED_AT: string | Uint8Array | null;
    OBSERVED_AT: string | Uint8Array | null;
    DATE_OBS: string | Uint8Array | null;
    TIME_SCALE: string | Uint8Array | null;
    CADENCE_S: number;
    EXPOSURE_S: number;
    IMAGE_CID: string | Uint8Array | null;
    IMAGE_MEDIA_TYPE: string | Uint8Array | null;
    IMAGE_DIGEST: string | Uint8Array | null;
    IMAGE_SIZE_BYTES: bigint;
    HEADER_CID: string | Uint8Array | null;
    WIDTH: number;
    HEIGHT: number;
    CTYPE1: string | Uint8Array | null;
    CTYPE2: string | Uint8Array | null;
    CUNIT1: string | Uint8Array | null;
    CUNIT2: string | Uint8Array | null;
    CRPIX1: number;
    CRPIX2: number;
    CRVAL1: number;
    CRVAL2: number;
    CDELT1: number;
    CDELT2: number;
    CROTA2: number;
    PC: (number)[];
    RSUN_OBS_ARCSEC: number;
    RSUN_REF_M: number;
    DSUN_OBS_M: number;
    CRLN_OBS_DEG: number;
    CRLT_OBS_DEG: number;
    HGLN_OBS_DEG: number;
    HGLT_OBS_DEG: number;
    QUALITY: bigint;
    HAS_QUALITY: boolean;
    PROCESSING: string | Uint8Array | null;
    PROVENANCE: PVNT | null;
    SOURCE_CID: string | Uint8Array | null;
    SOURCE_DIGEST: string | Uint8Array | null;
    RETRIEVED_AT: string | Uint8Array | null;
    constructor(OBSERVATORY?: string | Uint8Array | null, INSTRUMENT?: string | Uint8Array | null, MEASUREMENT?: string | Uint8Array | null, WAVELENGTH_NM?: number, IMAGE_ID?: string | Uint8Array | null, REQUESTED_AT?: string | Uint8Array | null, OBSERVED_AT?: string | Uint8Array | null, DATE_OBS?: string | Uint8Array | null, TIME_SCALE?: string | Uint8Array | null, CADENCE_S?: number, EXPOSURE_S?: number, IMAGE_CID?: string | Uint8Array | null, IMAGE_MEDIA_TYPE?: string | Uint8Array | null, IMAGE_DIGEST?: string | Uint8Array | null, IMAGE_SIZE_BYTES?: bigint, HEADER_CID?: string | Uint8Array | null, WIDTH?: number, HEIGHT?: number, CTYPE1?: string | Uint8Array | null, CTYPE2?: string | Uint8Array | null, CUNIT1?: string | Uint8Array | null, CUNIT2?: string | Uint8Array | null, CRPIX1?: number, CRPIX2?: number, CRVAL1?: number, CRVAL2?: number, CDELT1?: number, CDELT2?: number, CROTA2?: number, PC?: (number)[], RSUN_OBS_ARCSEC?: number, RSUN_REF_M?: number, DSUN_OBS_M?: number, CRLN_OBS_DEG?: number, CRLT_OBS_DEG?: number, HGLN_OBS_DEG?: number, HGLT_OBS_DEG?: number, QUALITY?: bigint, HAS_QUALITY?: boolean, PROCESSING?: string | Uint8Array | null, PROVENANCE?: PVNT | null, SOURCE_CID?: string | Uint8Array | null, SOURCE_DIGEST?: string | Uint8Array | null, RETRIEVED_AT?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=SDI.d.ts.map