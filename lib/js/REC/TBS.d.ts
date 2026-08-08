import * as flatbuffers from 'flatbuffers';
import { TBSConsensus, TBSConsensusT } from './TBSConsensus.js';
import { TBSProvenance, TBSProvenanceT } from './TBSProvenance.js';
import { tbsRadioClass } from './tbsRadioClass.js';
/**
 * Terrestrial Base Station Site.
 *
 * One record describes ONE terrestrial cellular base-station site as
 * reconciled from every provider the publisher consulted. It is the wire
 * record for terrestrial mobile-network infrastructure, and it is not an
 * emitter model ($RFE), a band specification ($RFB), a geodetic tracking
 * station ($GST), a satellite ground station ($SIT), or an observation.
 *
 * A site cannot be re-serialized unattributed. SOURCES and CONSENSUS are both
 * required, so every published position carries the providers it came from and
 * the rule that reconciled them; a consumer that strips attribution has to
 * leave the standard to do it. Unknown values are ABSENT — never zero, never a
 * placeholder, never carried across from a neighbouring site.
 *
 * Identity is ID, the publisher's own. The network addressing fields are the
 * mobile network's, are assigned by its operator, and are reused worldwide;
 * none of them is a global key on its own.
 */
export declare class TBS implements flatbuffers.IUnpackableObject<TBST> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): TBS;
    static getRootAsTBS(bb: flatbuffers.ByteBuffer, obj?: TBS): TBS;
    static getSizePrefixedRootAsTBS(bb: flatbuffers.ByteBuffer, obj?: TBS): TBS;
    static bufferHasIdentifier(bb: flatbuffers.ByteBuffer): boolean;
    /**
     * Publisher-stable identifier for this site, unique within its record set.
     * Recommended form: "<mcc>-<mnc>-<area-code>-<cell-id>".
     */
    ID(): string;
    ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    /**
     * Winning provider's native site identifier, copied verbatim from the
     * SOURCES entry named by CONSENSUS.WINNING_PROVIDER_ID. Never a substitute
     * for ID and never stable across providers.
     */
    NATIVE_ID(): string | null;
    NATIVE_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    RADIO(): tbsRadioClass;
    /**
     * Mobile country code from the international mobile-subscriber identity
     * numbering plan. Zero means the source published none.
     */
    MCC(): number;
    /**
     * Mobile network code within MCC. Carried as an integer, so decimal leading
     * zeros are NOT preserved: a two- versus three-digit network code is
     * distinguished by the numbering plan of MCC, and the source's own text is
     * retained verbatim in TBSProvenance.NATIVE_ID. Zero means unpublished.
     */
    MNC(): number;
    /**
     * Location area code, used by GSM-, CDMA- and UMTS-class access. Zero means
     * unpublished. A site published with a location area code does not also
     * carry a tracking area code; publishing both asserts two access
     * generations for one cell.
     */
    LAC(): number;
    /**
     * Tracking area code, used by LTE- and NR-class access. Zero means
     * unpublished.
     */
    TAC(): number;
    /**
     * Cell identity verbatim from the source. A string because width, radix and
     * leading zeros are significant and differ by access class: a 16-bit cell
     * identity, a 28-bit evolved cell identity and a 36-bit new-radio cell
     * identity are not interchangeable integers, and this field never converts
     * between them.
     */
    CELL_ID(): string | null;
    CELL_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Reconciled site position in decimal degrees on WGS 84, produced by the
     * merge described in CONSENSUS. Per-provider positions before
     * reconciliation live in SOURCES[].REPORTED_LATITUDE/REPORTED_LONGITUDE and
     * are never overwritten by this value.
     */
    LATITUDE(): number;
    LONGITUDE(): number;
    /**
     * Radius in metres of the area within which the site's observations were
     * collected — a positional-uncertainty envelope, not a transmission range,
     * not a coverage guarantee, and never converted from another unit. Zero
     * means unpublished.
     */
    RANGE_M(): number;
    /**
     * Independent observations behind the winning report. Zero means the source
     * publishes no observation count, never that the site was never observed.
     */
    SAMPLES(): number;
    /**
     * Mean received signal strength in dBm across those observations, as the
     * source publishes it. Carried in dBm unconverted; a consumer needing watts
     * converts at the join, explicitly. Zero means unpublished.
     */
    AVERAGE_SIGNAL_DBM(): number;
    /**
     * RFC 3339 UTC fixed-millisecond bounds of the observation window backing
     * the winning report.
     */
    FIRST_OBSERVED(): string | null;
    FIRST_OBSERVED(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    LAST_OBSERVED(): string | null;
    LAST_OBSERVED(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Network operator name verbatim as the cited source states it. A display
     * name, never an identifier: consumers must not treat it as a stable key.
     */
    OPERATOR(): string | null;
    OPERATOR(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Operating centre frequency in MHz, following the $RFB convention. A
     * consumer joining to $IQC, which carries hertz, converts at the join,
     * explicitly. Zero means unpublished.
     */
    FREQUENCY_MHZ(): number;
    /**
     * Site or structure name verbatim when the source publishes one. Never
     * synthesized from coordinates, operator, or cell identity.
     */
    SITE_NAME(): string | null;
    SITE_NAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * ISO 3166-1 alpha-2 country code, uppercase, as the source states it.
     * Derived from MCC only when the source itself derives it.
     */
    COUNTRY_CODE(): string | null;
    COUNTRY_CODE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Every provider consulted for this site, including providers that returned
     * nothing. Required: a site with no named sources is not publishable.
     */
    SOURCES(index: number, obj?: TBSProvenance): TBSProvenance | null;
    sourcesLength(): number;
    /**
     * How the entries in SOURCES were reduced to LATITUDE/LONGITUDE. Required:
     * a published position always states the rule that produced it, including
     * SINGLE_SOURCE.
     */
    CONSENSUS(obj?: TBSConsensus): TBSConsensus | null;
    static startTBS(builder: flatbuffers.Builder): void;
    static addId(builder: flatbuffers.Builder, IDOffset: flatbuffers.Offset): void;
    static addNativeId(builder: flatbuffers.Builder, NATIVE_IDOffset: flatbuffers.Offset): void;
    static addRadio(builder: flatbuffers.Builder, RADIO: tbsRadioClass): void;
    static addMcc(builder: flatbuffers.Builder, MCC: number): void;
    static addMnc(builder: flatbuffers.Builder, MNC: number): void;
    static addLac(builder: flatbuffers.Builder, LAC: number): void;
    static addTac(builder: flatbuffers.Builder, TAC: number): void;
    static addCellId(builder: flatbuffers.Builder, CELL_IDOffset: flatbuffers.Offset): void;
    static addLatitude(builder: flatbuffers.Builder, LATITUDE: number): void;
    static addLongitude(builder: flatbuffers.Builder, LONGITUDE: number): void;
    static addRangeM(builder: flatbuffers.Builder, RANGE_M: number): void;
    static addSamples(builder: flatbuffers.Builder, SAMPLES: number): void;
    static addAverageSignalDbm(builder: flatbuffers.Builder, AVERAGE_SIGNAL_DBM: number): void;
    static addFirstObserved(builder: flatbuffers.Builder, FIRST_OBSERVEDOffset: flatbuffers.Offset): void;
    static addLastObserved(builder: flatbuffers.Builder, LAST_OBSERVEDOffset: flatbuffers.Offset): void;
    static addOperator(builder: flatbuffers.Builder, OPERATOROffset: flatbuffers.Offset): void;
    static addFrequencyMhz(builder: flatbuffers.Builder, FREQUENCY_MHZ: number): void;
    static addSiteName(builder: flatbuffers.Builder, SITE_NAMEOffset: flatbuffers.Offset): void;
    static addCountryCode(builder: flatbuffers.Builder, COUNTRY_CODEOffset: flatbuffers.Offset): void;
    static addSources(builder: flatbuffers.Builder, SOURCESOffset: flatbuffers.Offset): void;
    static createSourcesVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startSourcesVector(builder: flatbuffers.Builder, numElems: number): void;
    static addConsensus(builder: flatbuffers.Builder, CONSENSUSOffset: flatbuffers.Offset): void;
    static endTBS(builder: flatbuffers.Builder): flatbuffers.Offset;
    static finishTBSBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static finishSizePrefixedTBSBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    unpack(): TBST;
    unpackTo(_o: TBST): void;
}
export declare class TBST implements flatbuffers.IGeneratedObject {
    ID: string | Uint8Array | null;
    NATIVE_ID: string | Uint8Array | null;
    RADIO: tbsRadioClass;
    MCC: number;
    MNC: number;
    LAC: number;
    TAC: number;
    CELL_ID: string | Uint8Array | null;
    LATITUDE: number;
    LONGITUDE: number;
    RANGE_M: number;
    SAMPLES: number;
    AVERAGE_SIGNAL_DBM: number;
    FIRST_OBSERVED: string | Uint8Array | null;
    LAST_OBSERVED: string | Uint8Array | null;
    OPERATOR: string | Uint8Array | null;
    FREQUENCY_MHZ: number;
    SITE_NAME: string | Uint8Array | null;
    COUNTRY_CODE: string | Uint8Array | null;
    SOURCES: (TBSProvenanceT)[];
    CONSENSUS: TBSConsensusT | null;
    constructor(ID?: string | Uint8Array | null, NATIVE_ID?: string | Uint8Array | null, RADIO?: tbsRadioClass, MCC?: number, MNC?: number, LAC?: number, TAC?: number, CELL_ID?: string | Uint8Array | null, LATITUDE?: number, LONGITUDE?: number, RANGE_M?: number, SAMPLES?: number, AVERAGE_SIGNAL_DBM?: number, FIRST_OBSERVED?: string | Uint8Array | null, LAST_OBSERVED?: string | Uint8Array | null, OPERATOR?: string | Uint8Array | null, FREQUENCY_MHZ?: number, SITE_NAME?: string | Uint8Array | null, COUNTRY_CODE?: string | Uint8Array | null, SOURCES?: (TBSProvenanceT)[], CONSENSUS?: TBSConsensusT | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=TBS.d.ts.map