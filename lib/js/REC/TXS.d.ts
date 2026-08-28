import * as flatbuffers from 'flatbuffers';
import { TXSConsensus, TXSConsensusT } from './TXSConsensus.js';
import { TXSEmission, TXSEmissionT } from './TXSEmission.js';
import { TXSPriorPosition, TXSPriorPositionT } from './TXSPriorPosition.js';
import { TXSProvenance, TXSProvenanceT } from './TXSProvenance.js';
import { txsOperationalStatus } from './txsOperationalStatus.js';
import { txsPositionAuthorityClass } from './txsPositionAuthorityClass.js';
import { txsServiceClass } from './txsServiceClass.js';
import { txsStructureClass } from './txsStructureClass.js';
/**
 * Terrestrial Transmitter Site.
 */
export declare class TXS implements flatbuffers.IUnpackableObject<TXST> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): TXS;
    static getRootAsTXS(bb: flatbuffers.ByteBuffer, obj?: TXS): TXS;
    static getSizePrefixedRootAsTXS(bb: flatbuffers.ByteBuffer, obj?: TXS): TXS;
    static bufferHasIdentifier(bb: flatbuffers.ByteBuffer): boolean;
    /**
     * Publisher-stable identifier for this facility, unique within its record
     * set. Never a source's own identifier and never a coordinate string.
     */
    ID(): string;
    ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    /**
     * Winning source's native facility identifier, copied verbatim from the
     * SOURCES entry named by CONSENSUS.WINNING_PROVIDER_ID. Never a substitute
     * for ID and never stable across sources.
     */
    NATIVE_ID(): string | null;
    NATIVE_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Facility or structure name verbatim when a source publishes one. Never
     * synthesized from coordinates, licensee, or nearest settlement.
     */
    SITE_NAME(): string | null;
    SITE_NAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Station identification the facility as a whole answers to, verbatim: a
     * callsign, an assigned station identifier, or the identifier an observer
     * community records. Per-emission identity lives in
     * EMISSIONS[].STATION_IDENTITY.
     */
    STATION_IDENTITY(): string | null;
    STATION_IDENTITY(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Licensee, operator or responsible administration name verbatim as the
     * cited source states it. A display name, never an identifier: consumers
     * must not treat it as a stable key.
     */
    LICENSEE(): string | null;
    LICENSEE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Licence, assignment or authorization identifier verbatim.
     */
    LICENSE_ID(): string | null;
    LICENSE_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Primary service class of the facility. Individual emissions may state
     * their own.
     */
    SERVICE(): txsServiceClass;
    STATUS(): txsOperationalStatus;
    /**
     * ISO 3166-1 alpha-2 country code, uppercase, as the source states it.
     */
    COUNTRY_CODE(): string | null;
    COUNTRY_CODE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Administrative subdivision or locality verbatim as the source states it.
     */
    ADMIN_AREA(): string | null;
    ADMIN_AREA(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Published facility position, decimal degrees on WGS 84, produced by the
     * merge described in CONSENSUS. ABSENT when no source publishes a position:
     * a region centroid is never substituted. Per-source positions before
     * reconciliation live in SOURCES[].REPORTED_LATITUDE/REPORTED_LONGITUDE and
     * are never overwritten by this value.
     */
    LATITUDE(): number;
    LONGITUDE(): number;
    /**
     * The class of authority behind LATITUDE/LONGITUDE. A consumer that renders
     * a position without reading this field is rendering an unlabelled claim.
     */
    POSITION_AUTHORITY(): txsPositionAuthorityClass;
    /**
     * Horizontal envelope in metres within which the facility is asserted to
     * lie, as the publisher states it. Zero means unpublished — never that the
     * position is exact.
     */
    POSITION_UNCERTAINTY_M(): number;
    /**
     * Credible consulted sources place the facility in materially different
     * locations, or a source states the position is contested. The published
     * coordinate remains the publisher's best merge; this flag forbids a
     * consumer from presenting it as settled.
     */
    POSITION_DISPUTED(): boolean;
    /**
     * Positions the facility is asserted to have vacated, most recent first.
     */
    PRIOR_POSITIONS(index: number, obj?: TXSPriorPosition): TXSPriorPosition | null;
    priorPositionsLength(): number;
    /**
     * Ground elevation at the facility, metres above mean sea level as the
     * source states it. Zero means unpublished.
     */
    GROUND_ELEVATION_AMSL_M(): number;
    /**
     * Overall height of the antenna-supporting structure above ground level,
     * metres. Distinct from any emission's antenna height. Zero means
     * unpublished.
     */
    STRUCTURE_HEIGHT_AGL_M(): number;
    STRUCTURE(): txsStructureClass;
    /**
     * Number of antenna-supporting structures at the facility. Zero means
     * unpublished.
     */
    STRUCTURE_COUNT(): number;
    /**
     * Every emission the facility is documented to radiate.
     */
    EMISSIONS(index: number, obj?: TXSEmission): TXSEmission | null;
    emissionsLength(): number;
    /**
     * RFC 3339 UTC fixed-millisecond bounds of the documentation or observation
     * window backing the published record.
     */
    FIRST_OBSERVED(): string | null;
    FIRST_OBSERVED(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    LAST_OBSERVED(): string | null;
    LAST_OBSERVED(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Every source consulted for this facility, including sources that returned
     * nothing. Required: a facility with no named sources is not publishable.
     */
    SOURCES(index: number, obj?: TXSProvenance): TXSProvenance | null;
    sourcesLength(): number;
    /**
     * How the entries in SOURCES were reduced to the published position.
     * Required: a published position always states the rule that produced it,
     * including SINGLE_SOURCE.
     */
    CONSENSUS(obj?: TXSConsensus): TXSConsensus | null;
    static startTXS(builder: flatbuffers.Builder): void;
    static addId(builder: flatbuffers.Builder, IDOffset: flatbuffers.Offset): void;
    static addNativeId(builder: flatbuffers.Builder, NATIVE_IDOffset: flatbuffers.Offset): void;
    static addSiteName(builder: flatbuffers.Builder, SITE_NAMEOffset: flatbuffers.Offset): void;
    static addStationIdentity(builder: flatbuffers.Builder, STATION_IDENTITYOffset: flatbuffers.Offset): void;
    static addLicensee(builder: flatbuffers.Builder, LICENSEEOffset: flatbuffers.Offset): void;
    static addLicenseId(builder: flatbuffers.Builder, LICENSE_IDOffset: flatbuffers.Offset): void;
    static addService(builder: flatbuffers.Builder, SERVICE: txsServiceClass): void;
    static addStatus(builder: flatbuffers.Builder, STATUS: txsOperationalStatus): void;
    static addCountryCode(builder: flatbuffers.Builder, COUNTRY_CODEOffset: flatbuffers.Offset): void;
    static addAdminArea(builder: flatbuffers.Builder, ADMIN_AREAOffset: flatbuffers.Offset): void;
    static addLatitude(builder: flatbuffers.Builder, LATITUDE: number): void;
    static addLongitude(builder: flatbuffers.Builder, LONGITUDE: number): void;
    static addPositionAuthority(builder: flatbuffers.Builder, POSITION_AUTHORITY: txsPositionAuthorityClass): void;
    static addPositionUncertaintyM(builder: flatbuffers.Builder, POSITION_UNCERTAINTY_M: number): void;
    static addPositionDisputed(builder: flatbuffers.Builder, POSITION_DISPUTED: boolean): void;
    static addPriorPositions(builder: flatbuffers.Builder, PRIOR_POSITIONSOffset: flatbuffers.Offset): void;
    static createPriorPositionsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startPriorPositionsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addGroundElevationAmslM(builder: flatbuffers.Builder, GROUND_ELEVATION_AMSL_M: number): void;
    static addStructureHeightAglM(builder: flatbuffers.Builder, STRUCTURE_HEIGHT_AGL_M: number): void;
    static addStructure(builder: flatbuffers.Builder, STRUCTURE: txsStructureClass): void;
    static addStructureCount(builder: flatbuffers.Builder, STRUCTURE_COUNT: number): void;
    static addEmissions(builder: flatbuffers.Builder, EMISSIONSOffset: flatbuffers.Offset): void;
    static createEmissionsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startEmissionsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addFirstObserved(builder: flatbuffers.Builder, FIRST_OBSERVEDOffset: flatbuffers.Offset): void;
    static addLastObserved(builder: flatbuffers.Builder, LAST_OBSERVEDOffset: flatbuffers.Offset): void;
    static addSources(builder: flatbuffers.Builder, SOURCESOffset: flatbuffers.Offset): void;
    static createSourcesVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startSourcesVector(builder: flatbuffers.Builder, numElems: number): void;
    static addConsensus(builder: flatbuffers.Builder, CONSENSUSOffset: flatbuffers.Offset): void;
    static endTXS(builder: flatbuffers.Builder): flatbuffers.Offset;
    static finishTXSBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static finishSizePrefixedTXSBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    unpack(): TXST;
    unpackTo(_o: TXST): void;
}
export declare class TXST implements flatbuffers.IGeneratedObject {
    ID: string | Uint8Array | null;
    NATIVE_ID: string | Uint8Array | null;
    SITE_NAME: string | Uint8Array | null;
    STATION_IDENTITY: string | Uint8Array | null;
    LICENSEE: string | Uint8Array | null;
    LICENSE_ID: string | Uint8Array | null;
    SERVICE: txsServiceClass;
    STATUS: txsOperationalStatus;
    COUNTRY_CODE: string | Uint8Array | null;
    ADMIN_AREA: string | Uint8Array | null;
    LATITUDE: number;
    LONGITUDE: number;
    POSITION_AUTHORITY: txsPositionAuthorityClass;
    POSITION_UNCERTAINTY_M: number;
    POSITION_DISPUTED: boolean;
    PRIOR_POSITIONS: (TXSPriorPositionT)[];
    GROUND_ELEVATION_AMSL_M: number;
    STRUCTURE_HEIGHT_AGL_M: number;
    STRUCTURE: txsStructureClass;
    STRUCTURE_COUNT: number;
    EMISSIONS: (TXSEmissionT)[];
    FIRST_OBSERVED: string | Uint8Array | null;
    LAST_OBSERVED: string | Uint8Array | null;
    SOURCES: (TXSProvenanceT)[];
    CONSENSUS: TXSConsensusT | null;
    constructor(ID?: string | Uint8Array | null, NATIVE_ID?: string | Uint8Array | null, SITE_NAME?: string | Uint8Array | null, STATION_IDENTITY?: string | Uint8Array | null, LICENSEE?: string | Uint8Array | null, LICENSE_ID?: string | Uint8Array | null, SERVICE?: txsServiceClass, STATUS?: txsOperationalStatus, COUNTRY_CODE?: string | Uint8Array | null, ADMIN_AREA?: string | Uint8Array | null, LATITUDE?: number, LONGITUDE?: number, POSITION_AUTHORITY?: txsPositionAuthorityClass, POSITION_UNCERTAINTY_M?: number, POSITION_DISPUTED?: boolean, PRIOR_POSITIONS?: (TXSPriorPositionT)[], GROUND_ELEVATION_AMSL_M?: number, STRUCTURE_HEIGHT_AGL_M?: number, STRUCTURE?: txsStructureClass, STRUCTURE_COUNT?: number, EMISSIONS?: (TXSEmissionT)[], FIRST_OBSERVED?: string | Uint8Array | null, LAST_OBSERVED?: string | Uint8Array | null, SOURCES?: (TXSProvenanceT)[], CONSENSUS?: TXSConsensusT | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=TXS.d.ts.map