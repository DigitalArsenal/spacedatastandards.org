import * as flatbuffers from 'flatbuffers';
import { PVN, PVNT } from './PVN.js';
import { sroRegionKind } from './sroRegionKind.js';
/**
 * Solar Region Observation
 */
export declare class SRO implements flatbuffers.IUnpackableObject<SROT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): SRO;
    static getRootAsSRO(bb: flatbuffers.ByteBuffer, obj?: SRO): SRO;
    static getSizePrefixedRootAsSRO(bb: flatbuffers.ByteBuffer, obj?: SRO): SRO;
    static bufferHasIdentifier(bb: flatbuffers.ByteBuffer): boolean;
    /**
     * Region number, verbatim, with no solar cycle prefix added or removed.
     */
    REGION_NUMBER(): number;
    /**
     * The numbering authority, verbatim (e.g. NOAA/SWPC).
     */
    REGION_AUTHORITY(): string | null;
    REGION_AUTHORITY(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * When the source issued this report, RFC 3339 UTC.
     */
    ISSUED_AT(): string | null;
    ISSUED_AT(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * The source's observation date label, verbatim.
     */
    OBSERVED_DATE(): string | null;
    OBSERVED_DATE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * The instant the position below refers to, RFC 3339 UTC.
     */
    POSITION_EPOCH(): string;
    POSITION_EPOCH(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    /**
     * Region kind as listed by the source.
     */
    REGION_KIND(): sroRegionKind;
    /**
     * Heliographic location token, verbatim (e.g. N14W32).
     */
    LOCATION_TOKEN(): string | null;
    LOCATION_TOKEN(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Heliographic latitude in degrees, north positive.
     */
    HG_LATITUDE_DEG(): number;
    /**
     * Stonyhurst heliographic longitude in degrees: 0 is the central meridian
     * as seen from Earth, west positive.
     */
    HG_LONGITUDE_DEG(): number;
    /**
     * Carrington longitude in degrees.
     */
    CARRINGTON_LONGITUDE_DEG(): number;
    /**
     * Corrected area in millionths of the solar hemisphere.
     */
    AREA_MSH(): number;
    /**
     * Longitudinal extent in degrees.
     */
    LONGITUDINAL_EXTENT_DEG(): number;
    /**
     * Number of spots in the region; meaningful only when HAS_SPOT_COUNT.
     */
    SPOT_COUNT(): number;
    /**
     * True when the source states SPOT_COUNT.
     */
    HAS_SPOT_COUNT(): boolean;
    /**
     * McIntosh classification, verbatim (e.g. Dao).
     */
    MCINTOSH_CLASS(): string | null;
    MCINTOSH_CLASS(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Mount Wilson magnetic classification, verbatim (e.g. Beta-Gamma).
     */
    MAGNETIC_CLASS(): string | null;
    MAGNETIC_CLASS(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
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
    static startSRO(builder: flatbuffers.Builder): void;
    static addRegionNumber(builder: flatbuffers.Builder, REGION_NUMBER: number): void;
    static addRegionAuthority(builder: flatbuffers.Builder, REGION_AUTHORITYOffset: flatbuffers.Offset): void;
    static addIssuedAt(builder: flatbuffers.Builder, ISSUED_ATOffset: flatbuffers.Offset): void;
    static addObservedDate(builder: flatbuffers.Builder, OBSERVED_DATEOffset: flatbuffers.Offset): void;
    static addPositionEpoch(builder: flatbuffers.Builder, POSITION_EPOCHOffset: flatbuffers.Offset): void;
    static addRegionKind(builder: flatbuffers.Builder, REGION_KIND: sroRegionKind): void;
    static addLocationToken(builder: flatbuffers.Builder, LOCATION_TOKENOffset: flatbuffers.Offset): void;
    static addHgLatitudeDeg(builder: flatbuffers.Builder, HG_LATITUDE_DEG: number): void;
    static addHgLongitudeDeg(builder: flatbuffers.Builder, HG_LONGITUDE_DEG: number): void;
    static addCarringtonLongitudeDeg(builder: flatbuffers.Builder, CARRINGTON_LONGITUDE_DEG: number): void;
    static addAreaMsh(builder: flatbuffers.Builder, AREA_MSH: number): void;
    static addLongitudinalExtentDeg(builder: flatbuffers.Builder, LONGITUDINAL_EXTENT_DEG: number): void;
    static addSpotCount(builder: flatbuffers.Builder, SPOT_COUNT: number): void;
    static addHasSpotCount(builder: flatbuffers.Builder, HAS_SPOT_COUNT: boolean): void;
    static addMcintoshClass(builder: flatbuffers.Builder, MCINTOSH_CLASSOffset: flatbuffers.Offset): void;
    static addMagneticClass(builder: flatbuffers.Builder, MAGNETIC_CLASSOffset: flatbuffers.Offset): void;
    static addProvenance(builder: flatbuffers.Builder, PROVENANCEOffset: flatbuffers.Offset): void;
    static addSourceCid(builder: flatbuffers.Builder, SOURCE_CIDOffset: flatbuffers.Offset): void;
    static addSourceDigest(builder: flatbuffers.Builder, SOURCE_DIGESTOffset: flatbuffers.Offset): void;
    static addRetrievedAt(builder: flatbuffers.Builder, RETRIEVED_ATOffset: flatbuffers.Offset): void;
    static endSRO(builder: flatbuffers.Builder): flatbuffers.Offset;
    static finishSROBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static finishSizePrefixedSROBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    unpack(): SROT;
    unpackTo(_o: SROT): void;
}
export declare class SROT implements flatbuffers.IGeneratedObject {
    REGION_NUMBER: number;
    REGION_AUTHORITY: string | Uint8Array | null;
    ISSUED_AT: string | Uint8Array | null;
    OBSERVED_DATE: string | Uint8Array | null;
    POSITION_EPOCH: string | Uint8Array | null;
    REGION_KIND: sroRegionKind;
    LOCATION_TOKEN: string | Uint8Array | null;
    HG_LATITUDE_DEG: number;
    HG_LONGITUDE_DEG: number;
    CARRINGTON_LONGITUDE_DEG: number;
    AREA_MSH: number;
    LONGITUDINAL_EXTENT_DEG: number;
    SPOT_COUNT: number;
    HAS_SPOT_COUNT: boolean;
    MCINTOSH_CLASS: string | Uint8Array | null;
    MAGNETIC_CLASS: string | Uint8Array | null;
    PROVENANCE: PVNT | null;
    SOURCE_CID: string | Uint8Array | null;
    SOURCE_DIGEST: string | Uint8Array | null;
    RETRIEVED_AT: string | Uint8Array | null;
    constructor(REGION_NUMBER?: number, REGION_AUTHORITY?: string | Uint8Array | null, ISSUED_AT?: string | Uint8Array | null, OBSERVED_DATE?: string | Uint8Array | null, POSITION_EPOCH?: string | Uint8Array | null, REGION_KIND?: sroRegionKind, LOCATION_TOKEN?: string | Uint8Array | null, HG_LATITUDE_DEG?: number, HG_LONGITUDE_DEG?: number, CARRINGTON_LONGITUDE_DEG?: number, AREA_MSH?: number, LONGITUDINAL_EXTENT_DEG?: number, SPOT_COUNT?: number, HAS_SPOT_COUNT?: boolean, MCINTOSH_CLASS?: string | Uint8Array | null, MAGNETIC_CLASS?: string | Uint8Array | null, PROVENANCE?: PVNT | null, SOURCE_CID?: string | Uint8Array | null, SOURCE_DIGEST?: string | Uint8Array | null, RETRIEVED_AT?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=SRO.d.ts.map