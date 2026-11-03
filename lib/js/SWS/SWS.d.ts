import * as flatbuffers from 'flatbuffers';
import { PVN, PVNT } from './PVN.js';
import { RFM, RFMT } from './RFM.js';
import { swsLocation } from './swsLocation.js';
import { swsNoaaScale } from './swsNoaaScale.js';
import { swsQuantity } from './swsQuantity.js';
import { swsSampleConvention } from './swsSampleConvention.js';
import { swsValueStatus } from './swsValueStatus.js';
/**
 * Space Weather Series
 */
export declare class SWS implements flatbuffers.IUnpackableObject<SWST> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): SWS;
    static getRootAsSWS(bb: flatbuffers.ByteBuffer, obj?: SWS): SWS;
    static getSizePrefixedRootAsSWS(bb: flatbuffers.ByteBuffer, obj?: SWS): SWS;
    static bufferHasIdentifier(bb: flatbuffers.ByteBuffer): boolean;
    /**
     * Publisher-stable identifier of the series.
     */
    SERIES_ID(): string | null;
    SERIES_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    QUANTITY(): swsQuantity;
    /**
     * The source's own quantity name, verbatim (e.g. bz_gsm, BZ_GSM).
     */
    QUANTITY_NAME(): string | null;
    QUANTITY_NAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Units, fixed by QUANTITY and repeated here (e.g. nT).
     */
    UNITS(): string;
    UNITS(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    /**
     * Axes of a vector component (GSE, GSM, ...); absent for a scalar.
     */
    REFERENCE_FRAME(obj?: RFM): RFM | null;
    /**
     * Status of every sample, unless SAMPLE_STATUS gives it per sample.
     */
    STATUS(): swsValueStatus;
    /**
     * Per-sample status, index-aligned; empty = STATUS for all.
     */
    SAMPLE_STATUS(index: number): swsValueStatus | null;
    sampleStatusLength(): number;
    sampleStatusArray(): Int8Array | null;
    LOCATION(): swsLocation;
    /**
     * Source platforms, verbatim (e.g. SOLAR1, ACE, GOES-18, Wind).
     */
    PLATFORMS(index: number): string;
    PLATFORMS(index: number, optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    platformsLength(): number;
    /**
     * Per-sample index into PLATFORMS; empty = PLATFORMS[0] for all.
     */
    SAMPLE_PLATFORM(index: number): number | null;
    samplePlatformLength(): number;
    samplePlatformArray(): Uint8Array | null;
    /**
     * Catalog numbers of PLATFORMS, index-aligned; 0 = none stated.
     */
    NORAD_CAT_IDS(index: number): number | null;
    noradCatIdsLength(): number;
    noradCatIdsArray(): Uint32Array | null;
    /**
     * Instrument, verbatim (e.g. MAG, SWEPAM, XRS, SEISS).
     */
    INSTRUMENT(): string | null;
    INSTRUMENT(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Nominal sample spacing in seconds.
     */
    CADENCE_S(): number;
    SAMPLE_CONVENTION(): swsSampleConvention;
    /**
     * Particle energy bounds, MeV; NaN maximum = integral above the minimum.
     */
    ENERGY_MIN_MEV(): number;
    ENERGY_MAX_MEV(): number;
    /**
     * Irradiance passband, nm.
     */
    PASSBAND_MIN_NM(): number;
    PASSBAND_MAX_NM(): number;
    /**
     * Sample epochs, UTC Unix milliseconds, ascending.
     */
    EPOCHS_MS(index: number): bigint | null;
    epochsMsLength(): number;
    /**
     * One value per epoch, in UNITS; NaN = missing.
     */
    VALUES(index: number): number | null;
    valuesLength(): number;
    valuesArray(): Float64Array;
    /**
     * One-sigma per epoch, in UNITS, when the source states it.
     */
    SIGMAS(index: number): number | null;
    sigmasLength(): number;
    sigmasArray(): Float64Array | null;
    /**
     * Arrival times at LOCATION when the source propagates (UTC Unix ms).
     */
    PROPAGATED_EPOCHS_MS(index: number): bigint | null;
    propagatedEpochsMsLength(): number;
    /**
     * The source's per-sample overall quality code, verbatim.
     */
    QUALITY(index: number): number | null;
    qualityLength(): number;
    qualityArray(): Int32Array | null;
    /**
     * True where the sample's platform was the source's operational one.
     */
    ACTIVE(index: number): boolean | null;
    activeLength(): number;
    activeArray(): Int8Array | null;
    /**
     * Source samples (or stations, for an index) behind each value.
     */
    SAMPLE_COUNTS(index: number): number | null;
    sampleCountsLength(): number;
    sampleCountsArray(): Uint32Array | null;
    /**
     * Names of further per-sample source flags, verbatim.
     */
    FLAG_NAMES(index: number): string;
    FLAG_NAMES(index: number, optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    flagNamesLength(): number;
    /**
     * Flag-major values: flag f, sample i at f * count + i; NaN = null.
     */
    FLAG_VALUES(index: number): number | null;
    flagValuesLength(): number;
    flagValuesArray(): Float64Array | null;
    /**
     * The NOAA scale NOAA_SCALE_LEVELS reports, and its level per sample (0-5).
     */
    NOAA_SCALE_KIND(): swsNoaaScale;
    NOAA_SCALE_LEVELS(index: number): number | null;
    noaaScaleLevelsLength(): number;
    noaaScaleLevelsArray(): Uint8Array | null;
    /**
     * Issue time of a Predicted series, RFC 3339 UTC.
     */
    FORECAST_ISSUED_AT(): string | null;
    FORECAST_ISSUED_AT(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Model run identity of a Modeled series, verbatim.
     */
    MODEL_RUN_ID(): string | null;
    MODEL_RUN_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Per-record source, provider, software, license terms and lineage.
     */
    PROVENANCE(obj?: PVN): PVN | null;
    SOURCE_CID(): string | null;
    SOURCE_CID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    SOURCE_DIGEST(): string | null;
    SOURCE_DIGEST(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    RETRIEVED_AT(): string | null;
    RETRIEVED_AT(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    static startSWS(builder: flatbuffers.Builder): void;
    static addSeriesId(builder: flatbuffers.Builder, SERIES_IDOffset: flatbuffers.Offset): void;
    static addQuantity(builder: flatbuffers.Builder, QUANTITY: swsQuantity): void;
    static addQuantityName(builder: flatbuffers.Builder, QUANTITY_NAMEOffset: flatbuffers.Offset): void;
    static addUnits(builder: flatbuffers.Builder, UNITSOffset: flatbuffers.Offset): void;
    static addReferenceFrame(builder: flatbuffers.Builder, REFERENCE_FRAMEOffset: flatbuffers.Offset): void;
    static addStatus(builder: flatbuffers.Builder, STATUS: swsValueStatus): void;
    static addSampleStatus(builder: flatbuffers.Builder, SAMPLE_STATUSOffset: flatbuffers.Offset): void;
    static createSampleStatusVector(builder: flatbuffers.Builder, data: swsValueStatus[]): flatbuffers.Offset;
    static startSampleStatusVector(builder: flatbuffers.Builder, numElems: number): void;
    static addLocation(builder: flatbuffers.Builder, LOCATION: swsLocation): void;
    static addPlatforms(builder: flatbuffers.Builder, PLATFORMSOffset: flatbuffers.Offset): void;
    static createPlatformsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startPlatformsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addSamplePlatform(builder: flatbuffers.Builder, SAMPLE_PLATFORMOffset: flatbuffers.Offset): void;
    static createSamplePlatformVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startSamplePlatformVector(builder: flatbuffers.Builder, numElems: number): void;
    static addNoradCatIds(builder: flatbuffers.Builder, NORAD_CAT_IDSOffset: flatbuffers.Offset): void;
    static createNoradCatIdsVector(builder: flatbuffers.Builder, data: number[] | Uint32Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createNoradCatIdsVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startNoradCatIdsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addInstrument(builder: flatbuffers.Builder, INSTRUMENTOffset: flatbuffers.Offset): void;
    static addCadenceS(builder: flatbuffers.Builder, CADENCE_S: number): void;
    static addSampleConvention(builder: flatbuffers.Builder, SAMPLE_CONVENTION: swsSampleConvention): void;
    static addEnergyMinMev(builder: flatbuffers.Builder, ENERGY_MIN_MEV: number): void;
    static addEnergyMaxMev(builder: flatbuffers.Builder, ENERGY_MAX_MEV: number): void;
    static addPassbandMinNm(builder: flatbuffers.Builder, PASSBAND_MIN_NM: number): void;
    static addPassbandMaxNm(builder: flatbuffers.Builder, PASSBAND_MAX_NM: number): void;
    static addEpochsMs(builder: flatbuffers.Builder, EPOCHS_MSOffset: flatbuffers.Offset): void;
    static createEpochsMsVector(builder: flatbuffers.Builder, data: bigint[]): flatbuffers.Offset;
    static startEpochsMsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addValues(builder: flatbuffers.Builder, VALUESOffset: flatbuffers.Offset): void;
    static createValuesVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createValuesVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startValuesVector(builder: flatbuffers.Builder, numElems: number): void;
    static addSigmas(builder: flatbuffers.Builder, SIGMASOffset: flatbuffers.Offset): void;
    static createSigmasVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createSigmasVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startSigmasVector(builder: flatbuffers.Builder, numElems: number): void;
    static addPropagatedEpochsMs(builder: flatbuffers.Builder, PROPAGATED_EPOCHS_MSOffset: flatbuffers.Offset): void;
    static createPropagatedEpochsMsVector(builder: flatbuffers.Builder, data: bigint[]): flatbuffers.Offset;
    static startPropagatedEpochsMsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addQuality(builder: flatbuffers.Builder, QUALITYOffset: flatbuffers.Offset): void;
    static createQualityVector(builder: flatbuffers.Builder, data: number[] | Int32Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createQualityVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startQualityVector(builder: flatbuffers.Builder, numElems: number): void;
    static addActive(builder: flatbuffers.Builder, ACTIVEOffset: flatbuffers.Offset): void;
    static createActiveVector(builder: flatbuffers.Builder, data: boolean[]): flatbuffers.Offset;
    static startActiveVector(builder: flatbuffers.Builder, numElems: number): void;
    static addSampleCounts(builder: flatbuffers.Builder, SAMPLE_COUNTSOffset: flatbuffers.Offset): void;
    static createSampleCountsVector(builder: flatbuffers.Builder, data: number[] | Uint32Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createSampleCountsVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startSampleCountsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addFlagNames(builder: flatbuffers.Builder, FLAG_NAMESOffset: flatbuffers.Offset): void;
    static createFlagNamesVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startFlagNamesVector(builder: flatbuffers.Builder, numElems: number): void;
    static addFlagValues(builder: flatbuffers.Builder, FLAG_VALUESOffset: flatbuffers.Offset): void;
    static createFlagValuesVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createFlagValuesVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startFlagValuesVector(builder: flatbuffers.Builder, numElems: number): void;
    static addNoaaScaleKind(builder: flatbuffers.Builder, NOAA_SCALE_KIND: swsNoaaScale): void;
    static addNoaaScaleLevels(builder: flatbuffers.Builder, NOAA_SCALE_LEVELSOffset: flatbuffers.Offset): void;
    static createNoaaScaleLevelsVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startNoaaScaleLevelsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addForecastIssuedAt(builder: flatbuffers.Builder, FORECAST_ISSUED_ATOffset: flatbuffers.Offset): void;
    static addModelRunId(builder: flatbuffers.Builder, MODEL_RUN_IDOffset: flatbuffers.Offset): void;
    static addProvenance(builder: flatbuffers.Builder, PROVENANCEOffset: flatbuffers.Offset): void;
    static addSourceCid(builder: flatbuffers.Builder, SOURCE_CIDOffset: flatbuffers.Offset): void;
    static addSourceDigest(builder: flatbuffers.Builder, SOURCE_DIGESTOffset: flatbuffers.Offset): void;
    static addRetrievedAt(builder: flatbuffers.Builder, RETRIEVED_ATOffset: flatbuffers.Offset): void;
    static endSWS(builder: flatbuffers.Builder): flatbuffers.Offset;
    static finishSWSBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static finishSizePrefixedSWSBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    unpack(): SWST;
    unpackTo(_o: SWST): void;
}
export declare class SWST implements flatbuffers.IGeneratedObject {
    SERIES_ID: string | Uint8Array | null;
    QUANTITY: swsQuantity;
    QUANTITY_NAME: string | Uint8Array | null;
    UNITS: string | Uint8Array | null;
    REFERENCE_FRAME: RFMT | null;
    STATUS: swsValueStatus;
    SAMPLE_STATUS: (swsValueStatus)[];
    LOCATION: swsLocation;
    PLATFORMS: (string)[];
    SAMPLE_PLATFORM: (number)[];
    NORAD_CAT_IDS: (number)[];
    INSTRUMENT: string | Uint8Array | null;
    CADENCE_S: number;
    SAMPLE_CONVENTION: swsSampleConvention;
    ENERGY_MIN_MEV: number;
    ENERGY_MAX_MEV: number;
    PASSBAND_MIN_NM: number;
    PASSBAND_MAX_NM: number;
    EPOCHS_MS: (bigint)[];
    VALUES: (number)[];
    SIGMAS: (number)[];
    PROPAGATED_EPOCHS_MS: (bigint)[];
    QUALITY: (number)[];
    ACTIVE: (boolean)[];
    SAMPLE_COUNTS: (number)[];
    FLAG_NAMES: (string)[];
    FLAG_VALUES: (number)[];
    NOAA_SCALE_KIND: swsNoaaScale;
    NOAA_SCALE_LEVELS: (number)[];
    FORECAST_ISSUED_AT: string | Uint8Array | null;
    MODEL_RUN_ID: string | Uint8Array | null;
    PROVENANCE: PVNT | null;
    SOURCE_CID: string | Uint8Array | null;
    SOURCE_DIGEST: string | Uint8Array | null;
    RETRIEVED_AT: string | Uint8Array | null;
    constructor(SERIES_ID?: string | Uint8Array | null, QUANTITY?: swsQuantity, QUANTITY_NAME?: string | Uint8Array | null, UNITS?: string | Uint8Array | null, REFERENCE_FRAME?: RFMT | null, STATUS?: swsValueStatus, SAMPLE_STATUS?: (swsValueStatus)[], LOCATION?: swsLocation, PLATFORMS?: (string)[], SAMPLE_PLATFORM?: (number)[], NORAD_CAT_IDS?: (number)[], INSTRUMENT?: string | Uint8Array | null, CADENCE_S?: number, SAMPLE_CONVENTION?: swsSampleConvention, ENERGY_MIN_MEV?: number, ENERGY_MAX_MEV?: number, PASSBAND_MIN_NM?: number, PASSBAND_MAX_NM?: number, EPOCHS_MS?: (bigint)[], VALUES?: (number)[], SIGMAS?: (number)[], PROPAGATED_EPOCHS_MS?: (bigint)[], QUALITY?: (number)[], ACTIVE?: (boolean)[], SAMPLE_COUNTS?: (number)[], FLAG_NAMES?: (string)[], FLAG_VALUES?: (number)[], NOAA_SCALE_KIND?: swsNoaaScale, NOAA_SCALE_LEVELS?: (number)[], FORECAST_ISSUED_AT?: string | Uint8Array | null, MODEL_RUN_ID?: string | Uint8Array | null, PROVENANCE?: PVNT | null, SOURCE_CID?: string | Uint8Array | null, SOURCE_DIGEST?: string | Uint8Array | null, RETRIEVED_AT?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=SWS.d.ts.map