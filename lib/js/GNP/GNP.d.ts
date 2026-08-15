import * as flatbuffers from 'flatbuffers';
import { GNPName, GNPNameT } from './GNPName.js';
import { GNPProvenance, GNPProvenanceT } from './GNPProvenance.js';
import { gnpFeatureClass } from './gnpFeatureClass.js';
/**
 * Gazetteer Named Place
 *
 * One named geographic place as a gazetteer publishes it: its names, its
 * position on WGS 84, its feature classification, its administrative
 * containment, and the dataset edition and licence it was redistributed
 * under. The record is a NAME-TO-PLACE lookup surface — place search,
 * geocoding, and administrative resolution — and is deliberately not a
 * facility, station, or emitter record: $SIT carries an operational
 * facility, $GST a geodetic tracking station, $TBS a terrestrial base-station
 * site. A place gains meaning from those records by being joined to, never by
 * being conflated with them.
 *
 * Positions are decimal degrees on WGS 84 and elevations are metres,
 * unconverted. A consumer needing other units converts at the join,
 * explicitly.
 */
export declare class GNP implements flatbuffers.IUnpackableObject<GNPT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): GNP;
    static getRootAsGNP(bb: flatbuffers.ByteBuffer, obj?: GNP): GNP;
    static getSizePrefixedRootAsGNP(bb: flatbuffers.ByteBuffer, obj?: GNP): GNP;
    static bufferHasIdentifier(bb: flatbuffers.ByteBuffer): boolean;
    /**
     * Publisher-stable identifier for this place record. Never the gazetteer's
     * own row identifier, which rides verbatim in SOURCE.NATIVE_ID.
     */
    ID(): string;
    ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    /**
     * Primary name of the place, verbatim in its own script, unnormalized.
     */
    NAME(): string;
    NAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    /**
     * Plain-ASCII rendering of NAME when the gazetteer publishes one. A search
     * and sort convenience, never a substitute for NAME.
     */
    ASCII_NAME(): string | null;
    ASCII_NAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Every other name the gazetteer publishes for this place.
     */
    ALTERNATE_NAMES(index: number, obj?: GNPName): GNPName | null;
    alternateNamesLength(): number;
    /**
     * Latitude in decimal degrees on WGS 84, positive north.
     */
    LATITUDE(): number;
    /**
     * Longitude in decimal degrees on WGS 84, positive east.
     */
    LONGITUDE(): number;
    /**
     * Elevation in metres above the WGS 84 ellipsoid-referenced vertical datum
     * the gazetteer states, as published. Zero means unpublished, never sea
     * level; a place at sea level is distinguished by ELEVATION_PUBLISHED.
     */
    ELEVATION_M(): number;
    /**
     * ELEVATION_M carries a published value. False marks a gazetteer that
     * publishes no elevation for this place.
     */
    ELEVATION_PUBLISHED(): boolean;
    /**
     * Elevation in metres sampled from a digital elevation model, when the
     * gazetteer publishes a model-derived value beside or instead of a surveyed
     * one. Kept separate: a model sample is not a survey and the two must never
     * silently substitute for one another.
     */
    DEM_ELEVATION_M(): number;
    /**
     * Name of the digital elevation model DEM_ELEVATION_M was sampled from,
     * verbatim as the gazetteer states it.
     */
    DEM_MODEL(): string | null;
    DEM_MODEL(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Broad feature class this gazetteer assigns.
     */
    FEATURE_CLASS(): gnpFeatureClass;
    /**
     * The gazetteer's own class token, verbatim, so a class outside
     * gnpFeatureClass survives a round trip.
     */
    FEATURE_CLASS_CODE(): string | null;
    FEATURE_CLASS_CODE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * The gazetteer's fine-grained feature code, verbatim.
     */
    FEATURE_CODE(): string | null;
    FEATURE_CODE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Human-readable expansion of FEATURE_CODE, as the gazetteer publishes it.
     * A display string, never a key.
     */
    FEATURE_NAME(): string | null;
    FEATURE_NAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * ISO 3166-1 alpha-2 country code, uppercase, as the gazetteer states it.
     */
    COUNTRY_CODE(): string | null;
    COUNTRY_CODE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Country name as the gazetteer publishes it. A display name, never a key:
     * consumers key on COUNTRY_CODE.
     */
    COUNTRY_NAME(): string | null;
    COUNTRY_NAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Further ISO 3166-1 alpha-2 codes for places the gazetteer reports as
     * spanning or being disputed between several countries. Order carries no
     * precedence and no sovereignty claim.
     */
    ALTERNATE_COUNTRY_CODES(index: number): string;
    ALTERNATE_COUNTRY_CODES(index: number, optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    alternateCountryCodesLength(): number;
    /**
     * First-order administrative division code within COUNTRY_CODE, verbatim.
     */
    ADMIN1_CODE(): string | null;
    ADMIN1_CODE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Resolved name of that division. Carried beside the code so a consumer
     * need not hold the division tables to render a place.
     */
    ADMIN1_NAME(): string | null;
    ADMIN1_NAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Second-order administrative division code, verbatim.
     */
    ADMIN2_CODE(): string | null;
    ADMIN2_CODE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Resolved name of that division.
     */
    ADMIN2_NAME(): string | null;
    ADMIN2_NAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Third- and fourth-order division codes, verbatim. Gazetteers publish
     * these as codes only; a name is carried when one is published.
     */
    ADMIN3_CODE(): string | null;
    ADMIN3_CODE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    ADMIN3_NAME(): string | null;
    ADMIN3_NAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    ADMIN4_CODE(): string | null;
    ADMIN4_CODE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    ADMIN4_NAME(): string | null;
    ADMIN4_NAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Population as the gazetteer publishes it. Zero means unpublished, never
     * uninhabited.
     */
    POPULATION(): bigint;
    /**
     * IANA time zone identifier for the place, verbatim.
     */
    TIME_ZONE_ID(): string | null;
    TIME_ZONE_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Offset from UTC in hours the gazetteer states for that zone outside
     * daylight saving, and under it. Carried as published; a consumer needing
     * an instant-correct offset resolves TIME_ZONE_ID against a current tz
     * database rather than trusting these.
     */
    TIME_ZONE_UTC_OFFSET_H(): number;
    /**
     * Offset from UTC in hours under daylight saving.
     */
    TIME_ZONE_DST_OFFSET_H(): number;
    /**
     * Dataset lineage and redistribution terms. Required: a place with no named
     * dataset, epoch, and licence is not publishable.
     */
    SOURCE(obj?: GNPProvenance): GNPProvenance | null;
    static startGNP(builder: flatbuffers.Builder): void;
    static addId(builder: flatbuffers.Builder, IDOffset: flatbuffers.Offset): void;
    static addName(builder: flatbuffers.Builder, NAMEOffset: flatbuffers.Offset): void;
    static addAsciiName(builder: flatbuffers.Builder, ASCII_NAMEOffset: flatbuffers.Offset): void;
    static addAlternateNames(builder: flatbuffers.Builder, ALTERNATE_NAMESOffset: flatbuffers.Offset): void;
    static createAlternateNamesVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startAlternateNamesVector(builder: flatbuffers.Builder, numElems: number): void;
    static addLatitude(builder: flatbuffers.Builder, LATITUDE: number): void;
    static addLongitude(builder: flatbuffers.Builder, LONGITUDE: number): void;
    static addElevationM(builder: flatbuffers.Builder, ELEVATION_M: number): void;
    static addElevationPublished(builder: flatbuffers.Builder, ELEVATION_PUBLISHED: boolean): void;
    static addDemElevationM(builder: flatbuffers.Builder, DEM_ELEVATION_M: number): void;
    static addDemModel(builder: flatbuffers.Builder, DEM_MODELOffset: flatbuffers.Offset): void;
    static addFeatureClass(builder: flatbuffers.Builder, FEATURE_CLASS: gnpFeatureClass): void;
    static addFeatureClassCode(builder: flatbuffers.Builder, FEATURE_CLASS_CODEOffset: flatbuffers.Offset): void;
    static addFeatureCode(builder: flatbuffers.Builder, FEATURE_CODEOffset: flatbuffers.Offset): void;
    static addFeatureName(builder: flatbuffers.Builder, FEATURE_NAMEOffset: flatbuffers.Offset): void;
    static addCountryCode(builder: flatbuffers.Builder, COUNTRY_CODEOffset: flatbuffers.Offset): void;
    static addCountryName(builder: flatbuffers.Builder, COUNTRY_NAMEOffset: flatbuffers.Offset): void;
    static addAlternateCountryCodes(builder: flatbuffers.Builder, ALTERNATE_COUNTRY_CODESOffset: flatbuffers.Offset): void;
    static createAlternateCountryCodesVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startAlternateCountryCodesVector(builder: flatbuffers.Builder, numElems: number): void;
    static addAdmin1Code(builder: flatbuffers.Builder, ADMIN1_CODEOffset: flatbuffers.Offset): void;
    static addAdmin1Name(builder: flatbuffers.Builder, ADMIN1_NAMEOffset: flatbuffers.Offset): void;
    static addAdmin2Code(builder: flatbuffers.Builder, ADMIN2_CODEOffset: flatbuffers.Offset): void;
    static addAdmin2Name(builder: flatbuffers.Builder, ADMIN2_NAMEOffset: flatbuffers.Offset): void;
    static addAdmin3Code(builder: flatbuffers.Builder, ADMIN3_CODEOffset: flatbuffers.Offset): void;
    static addAdmin3Name(builder: flatbuffers.Builder, ADMIN3_NAMEOffset: flatbuffers.Offset): void;
    static addAdmin4Code(builder: flatbuffers.Builder, ADMIN4_CODEOffset: flatbuffers.Offset): void;
    static addAdmin4Name(builder: flatbuffers.Builder, ADMIN4_NAMEOffset: flatbuffers.Offset): void;
    static addPopulation(builder: flatbuffers.Builder, POPULATION: bigint): void;
    static addTimeZoneId(builder: flatbuffers.Builder, TIME_ZONE_IDOffset: flatbuffers.Offset): void;
    static addTimeZoneUtcOffsetH(builder: flatbuffers.Builder, TIME_ZONE_UTC_OFFSET_H: number): void;
    static addTimeZoneDstOffsetH(builder: flatbuffers.Builder, TIME_ZONE_DST_OFFSET_H: number): void;
    static addSource(builder: flatbuffers.Builder, SOURCEOffset: flatbuffers.Offset): void;
    static endGNP(builder: flatbuffers.Builder): flatbuffers.Offset;
    static finishGNPBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static finishSizePrefixedGNPBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    unpack(): GNPT;
    unpackTo(_o: GNPT): void;
}
export declare class GNPT implements flatbuffers.IGeneratedObject {
    ID: string | Uint8Array | null;
    NAME: string | Uint8Array | null;
    ASCII_NAME: string | Uint8Array | null;
    ALTERNATE_NAMES: (GNPNameT)[];
    LATITUDE: number;
    LONGITUDE: number;
    ELEVATION_M: number;
    ELEVATION_PUBLISHED: boolean;
    DEM_ELEVATION_M: number;
    DEM_MODEL: string | Uint8Array | null;
    FEATURE_CLASS: gnpFeatureClass;
    FEATURE_CLASS_CODE: string | Uint8Array | null;
    FEATURE_CODE: string | Uint8Array | null;
    FEATURE_NAME: string | Uint8Array | null;
    COUNTRY_CODE: string | Uint8Array | null;
    COUNTRY_NAME: string | Uint8Array | null;
    ALTERNATE_COUNTRY_CODES: (string)[];
    ADMIN1_CODE: string | Uint8Array | null;
    ADMIN1_NAME: string | Uint8Array | null;
    ADMIN2_CODE: string | Uint8Array | null;
    ADMIN2_NAME: string | Uint8Array | null;
    ADMIN3_CODE: string | Uint8Array | null;
    ADMIN3_NAME: string | Uint8Array | null;
    ADMIN4_CODE: string | Uint8Array | null;
    ADMIN4_NAME: string | Uint8Array | null;
    POPULATION: bigint;
    TIME_ZONE_ID: string | Uint8Array | null;
    TIME_ZONE_UTC_OFFSET_H: number;
    TIME_ZONE_DST_OFFSET_H: number;
    SOURCE: GNPProvenanceT | null;
    constructor(ID?: string | Uint8Array | null, NAME?: string | Uint8Array | null, ASCII_NAME?: string | Uint8Array | null, ALTERNATE_NAMES?: (GNPNameT)[], LATITUDE?: number, LONGITUDE?: number, ELEVATION_M?: number, ELEVATION_PUBLISHED?: boolean, DEM_ELEVATION_M?: number, DEM_MODEL?: string | Uint8Array | null, FEATURE_CLASS?: gnpFeatureClass, FEATURE_CLASS_CODE?: string | Uint8Array | null, FEATURE_CODE?: string | Uint8Array | null, FEATURE_NAME?: string | Uint8Array | null, COUNTRY_CODE?: string | Uint8Array | null, COUNTRY_NAME?: string | Uint8Array | null, ALTERNATE_COUNTRY_CODES?: (string)[], ADMIN1_CODE?: string | Uint8Array | null, ADMIN1_NAME?: string | Uint8Array | null, ADMIN2_CODE?: string | Uint8Array | null, ADMIN2_NAME?: string | Uint8Array | null, ADMIN3_CODE?: string | Uint8Array | null, ADMIN3_NAME?: string | Uint8Array | null, ADMIN4_CODE?: string | Uint8Array | null, ADMIN4_NAME?: string | Uint8Array | null, POPULATION?: bigint, TIME_ZONE_ID?: string | Uint8Array | null, TIME_ZONE_UTC_OFFSET_H?: number, TIME_ZONE_DST_OFFSET_H?: number, SOURCE?: GNPProvenanceT | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=GNP.d.ts.map