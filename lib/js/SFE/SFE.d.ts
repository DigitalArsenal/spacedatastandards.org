import * as flatbuffers from 'flatbuffers';
import { PVN, PVNT } from './PVN.js';
import { sfeEventKind } from './sfeEventKind.js';
/**
 * Solar Flare Event
 */
export declare class SFE implements flatbuffers.IUnpackableObject<SFET> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): SFE;
    static getRootAsSFE(bb: flatbuffers.ByteBuffer, obj?: SFE): SFE;
    static getSizePrefixedRootAsSFE(bb: flatbuffers.ByteBuffer, obj?: SFE): SFE;
    static bufferHasIdentifier(bb: flatbuffers.ByteBuffer): boolean;
    /**
     * The source's own event identity, verbatim.
     */
    EVENT_ID(): string;
    EVENT_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    /**
     * Source product name, verbatim.
     */
    PRODUCT(): string | null;
    PRODUCT(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Reporting observatory, verbatim.
     */
    OBSERVATORY(): string | null;
    OBSERVATORY(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Observing platform or satellite, verbatim.
     */
    PLATFORM(): string | null;
    PLATFORM(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Observing domain.
     */
    EVENT_KIND(): sfeEventKind;
    /**
     * Source event type code, verbatim (e.g. XRA, FLA).
     */
    EVENT_TYPE_CODE(): string | null;
    EVENT_TYPE_CODE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Event begin time, RFC 3339 UTC.
     */
    BEGIN_TIME(): string | null;
    BEGIN_TIME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Event peak time, RFC 3339 UTC.
     */
    PEAK_TIME(): string | null;
    PEAK_TIME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Event end time, RFC 3339 UTC.
     */
    END_TIME(): string | null;
    END_TIME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Qualifier on BEGIN_TIME, verbatim (e.g. B for before).
     */
    BEGIN_QUALIFIER(): string | null;
    BEGIN_QUALIFIER(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Qualifier on PEAK_TIME, verbatim.
     */
    PEAK_QUALIFIER(): string | null;
    PEAK_QUALIFIER(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Qualifier on END_TIME, verbatim (e.g. A for after).
     */
    END_QUALIFIER(): string | null;
    END_QUALIFIER(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Soft X-ray class, verbatim (e.g. C1.4).
     */
    XRAY_CLASS(): string | null;
    XRAY_CLASS(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Optical importance, verbatim (e.g. SF).
     */
    OPTICAL_IMPORTANCE(): string | null;
    OPTICAL_IMPORTANCE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Peak flux in W/m^2.
     */
    PEAK_FLUX_W_M2(): number;
    /**
     * Integrated flux (fluence) in J/m^2.
     */
    INTEGRATED_FLUX_J_M2(): number;
    /**
     * Lower edge of the observing passband in nm.
     */
    PASSBAND_MIN_NM(): number;
    /**
     * Upper edge of the observing passband in nm.
     */
    PASSBAND_MAX_NM(): number;
    /**
     * Associated region number; meaningful only when HAS_REGION_NUMBER.
     */
    REGION_NUMBER(): number;
    /**
     * True only when the source explicitly states the region association.
     */
    HAS_REGION_NUMBER(): boolean;
    /**
     * Heliographic latitude in degrees, north positive, when stated.
     */
    HG_LATITUDE_DEG(): number;
    /**
     * Stonyhurst heliographic longitude in degrees, west positive, when stated.
     */
    HG_LONGITUDE_DEG(): number;
    /**
     * Source status of the report, verbatim.
     */
    STATUS(): string | null;
    STATUS(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Source revision or change flag, verbatim.
     */
    REVISION(): string | null;
    REVISION(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
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
    static startSFE(builder: flatbuffers.Builder): void;
    static addEventId(builder: flatbuffers.Builder, EVENT_IDOffset: flatbuffers.Offset): void;
    static addProduct(builder: flatbuffers.Builder, PRODUCTOffset: flatbuffers.Offset): void;
    static addObservatory(builder: flatbuffers.Builder, OBSERVATORYOffset: flatbuffers.Offset): void;
    static addPlatform(builder: flatbuffers.Builder, PLATFORMOffset: flatbuffers.Offset): void;
    static addEventKind(builder: flatbuffers.Builder, EVENT_KIND: sfeEventKind): void;
    static addEventTypeCode(builder: flatbuffers.Builder, EVENT_TYPE_CODEOffset: flatbuffers.Offset): void;
    static addBeginTime(builder: flatbuffers.Builder, BEGIN_TIMEOffset: flatbuffers.Offset): void;
    static addPeakTime(builder: flatbuffers.Builder, PEAK_TIMEOffset: flatbuffers.Offset): void;
    static addEndTime(builder: flatbuffers.Builder, END_TIMEOffset: flatbuffers.Offset): void;
    static addBeginQualifier(builder: flatbuffers.Builder, BEGIN_QUALIFIEROffset: flatbuffers.Offset): void;
    static addPeakQualifier(builder: flatbuffers.Builder, PEAK_QUALIFIEROffset: flatbuffers.Offset): void;
    static addEndQualifier(builder: flatbuffers.Builder, END_QUALIFIEROffset: flatbuffers.Offset): void;
    static addXrayClass(builder: flatbuffers.Builder, XRAY_CLASSOffset: flatbuffers.Offset): void;
    static addOpticalImportance(builder: flatbuffers.Builder, OPTICAL_IMPORTANCEOffset: flatbuffers.Offset): void;
    static addPeakFluxWM2(builder: flatbuffers.Builder, PEAK_FLUX_W_M2: number): void;
    static addIntegratedFluxJM2(builder: flatbuffers.Builder, INTEGRATED_FLUX_J_M2: number): void;
    static addPassbandMinNm(builder: flatbuffers.Builder, PASSBAND_MIN_NM: number): void;
    static addPassbandMaxNm(builder: flatbuffers.Builder, PASSBAND_MAX_NM: number): void;
    static addRegionNumber(builder: flatbuffers.Builder, REGION_NUMBER: number): void;
    static addHasRegionNumber(builder: flatbuffers.Builder, HAS_REGION_NUMBER: boolean): void;
    static addHgLatitudeDeg(builder: flatbuffers.Builder, HG_LATITUDE_DEG: number): void;
    static addHgLongitudeDeg(builder: flatbuffers.Builder, HG_LONGITUDE_DEG: number): void;
    static addStatus(builder: flatbuffers.Builder, STATUSOffset: flatbuffers.Offset): void;
    static addRevision(builder: flatbuffers.Builder, REVISIONOffset: flatbuffers.Offset): void;
    static addProvenance(builder: flatbuffers.Builder, PROVENANCEOffset: flatbuffers.Offset): void;
    static addSourceCid(builder: flatbuffers.Builder, SOURCE_CIDOffset: flatbuffers.Offset): void;
    static addSourceDigest(builder: flatbuffers.Builder, SOURCE_DIGESTOffset: flatbuffers.Offset): void;
    static addRetrievedAt(builder: flatbuffers.Builder, RETRIEVED_ATOffset: flatbuffers.Offset): void;
    static endSFE(builder: flatbuffers.Builder): flatbuffers.Offset;
    static finishSFEBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static finishSizePrefixedSFEBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    unpack(): SFET;
    unpackTo(_o: SFET): void;
}
export declare class SFET implements flatbuffers.IGeneratedObject {
    EVENT_ID: string | Uint8Array | null;
    PRODUCT: string | Uint8Array | null;
    OBSERVATORY: string | Uint8Array | null;
    PLATFORM: string | Uint8Array | null;
    EVENT_KIND: sfeEventKind;
    EVENT_TYPE_CODE: string | Uint8Array | null;
    BEGIN_TIME: string | Uint8Array | null;
    PEAK_TIME: string | Uint8Array | null;
    END_TIME: string | Uint8Array | null;
    BEGIN_QUALIFIER: string | Uint8Array | null;
    PEAK_QUALIFIER: string | Uint8Array | null;
    END_QUALIFIER: string | Uint8Array | null;
    XRAY_CLASS: string | Uint8Array | null;
    OPTICAL_IMPORTANCE: string | Uint8Array | null;
    PEAK_FLUX_W_M2: number;
    INTEGRATED_FLUX_J_M2: number;
    PASSBAND_MIN_NM: number;
    PASSBAND_MAX_NM: number;
    REGION_NUMBER: number;
    HAS_REGION_NUMBER: boolean;
    HG_LATITUDE_DEG: number;
    HG_LONGITUDE_DEG: number;
    STATUS: string | Uint8Array | null;
    REVISION: string | Uint8Array | null;
    PROVENANCE: PVNT | null;
    SOURCE_CID: string | Uint8Array | null;
    SOURCE_DIGEST: string | Uint8Array | null;
    RETRIEVED_AT: string | Uint8Array | null;
    constructor(EVENT_ID?: string | Uint8Array | null, PRODUCT?: string | Uint8Array | null, OBSERVATORY?: string | Uint8Array | null, PLATFORM?: string | Uint8Array | null, EVENT_KIND?: sfeEventKind, EVENT_TYPE_CODE?: string | Uint8Array | null, BEGIN_TIME?: string | Uint8Array | null, PEAK_TIME?: string | Uint8Array | null, END_TIME?: string | Uint8Array | null, BEGIN_QUALIFIER?: string | Uint8Array | null, PEAK_QUALIFIER?: string | Uint8Array | null, END_QUALIFIER?: string | Uint8Array | null, XRAY_CLASS?: string | Uint8Array | null, OPTICAL_IMPORTANCE?: string | Uint8Array | null, PEAK_FLUX_W_M2?: number, INTEGRATED_FLUX_J_M2?: number, PASSBAND_MIN_NM?: number, PASSBAND_MAX_NM?: number, REGION_NUMBER?: number, HAS_REGION_NUMBER?: boolean, HG_LATITUDE_DEG?: number, HG_LONGITUDE_DEG?: number, STATUS?: string | Uint8Array | null, REVISION?: string | Uint8Array | null, PROVENANCE?: PVNT | null, SOURCE_CID?: string | Uint8Array | null, SOURCE_DIGEST?: string | Uint8Array | null, RETRIEVED_AT?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=SFE.d.ts.map