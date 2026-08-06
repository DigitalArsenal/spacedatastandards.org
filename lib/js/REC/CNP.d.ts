import * as flatbuffers from 'flatbuffers';
import { CNPMetric, CNPMetricT } from './CNPMetric.js';
import { CNPProvenance, CNPProvenanceT } from './CNPProvenance.js';
import { CNPRegion, CNPRegionT } from './CNPRegion.js';
import { cnpPeriod } from './cnpPeriod.js';
/**
 * Constellation Network Performance.
 *
 * Aggregated throughput, latency and availability for one satellite
 * constellation's user network, keyed by CONSTELLATION, ASN, REGION and a
 * closed time window. Built for a broadband LEO consumer-terminal lane
 * (one operator ASN measured via NDT7) and shaped so any operator — another
 * LEO constellation, a GEO VSAT provider — or a terrestrial ASN used as a
 * baseline fits the same record.
 *
 * KEY, NOT MEASUREMENT. One $CNP is an AGGREGATE over a window. It is not a
 * speed test, not a single client's result, and not a per-satellite link
 * state: $LKS carries the instantaneous state and data rate of ONE named
 * link between two endpoints, and no $LKS can express "the p50 download rate
 * observed by 41,000 terminals in Germany during July".
 *
 * NEVER-INVENT-DATA IS ENFORCED BY THE SHAPE. A quantity exists only as a
 * CNPMetric, and CNPMetric carries `UNITS: string (required)` and
 * `PROVENANCE: CNPProvenance (required)`, so there is no encoding for a
 * number that does not state its unit and name its source, query,
 * retrieval time, method and licence. A metric the source did not publish is
 * ABSENT — never zero. `SOURCES` lists every provider consulted for this key,
 * including ones that returned nothing, so a consumer can distinguish "not
 * looked for" from "looked for and empty".
 *
 * LICENCE RIDES PER SOURCE. `CNPProvenance.NON_COMMERCIAL_ONLY` exists
 * because a single record may legitimately carry a CC0 open-measurement lane
 * beside a CC BY-NC cross-check from a restricted publisher; the restriction
 * attaches to the metric that inherited it, never to the record as a whole.
 */
export declare class CNP implements flatbuffers.IUnpackableObject<CNPT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): CNP;
    static getRootAsCNP(bb: flatbuffers.ByteBuffer, obj?: CNP): CNP;
    static getSizePrefixedRootAsCNP(bb: flatbuffers.ByteBuffer, obj?: CNP): CNP;
    static bufferHasIdentifier(bb: flatbuffers.ByteBuffer): boolean;
    /**
     * Stable identifier for this record.
     */
    ID(): string | null;
    ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Constellation or network name, carried verbatim as its operator states
     * it. Empty when the record is a terrestrial baseline. Joins to
     * $LKS.CONSTELLATION and to $CAT by the same name.
     */
    CONSTELLATION(): string | null;
    CONSTELLATION(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Operating company, when it differs usefully from CONSTELLATION.
     */
    OPERATOR(): string | null;
    OPERATOR(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Autonomous system number of the measured client network, as allocated in
     * the public routing registry. 0 means the aggregate is not keyed by ASN;
     * AS 0 is reserved and is never a real measurement key.
     */
    ASN(): number;
    /**
     * Autonomous system name as the routing registry publishes it.
     */
    AS_NAME(): string | null;
    AS_NAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Service tier the source distinguishes, verbatim ("Residential",
     * "Roam", "Business", "Maritime"). Empty when the source does not
     * separate tiers — never guessed from the throughput.
     */
    SERVICE_TIER(): string | null;
    SERVICE_TIER(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Geography this aggregate is keyed to. Absent when the source published
     * no geographic key at all.
     */
    REGION(obj?: CNPRegion): CNPRegion | null;
    /**
     * ISO 8601 UTC inclusive start of the aggregation window.
     */
    WINDOW_START(): string | null;
    WINDOW_START(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * ISO 8601 UTC exclusive end of the aggregation window.
     */
    WINDOW_STOP(): string | null;
    WINDOW_STOP(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Calendar span the window represents.
     */
    AGGREGATION_PERIOD(): cnpPeriod;
    /**
     * The aggregated quantities.
     */
    METRICS(index: number, obj?: CNPMetric): CNPMetric | null;
    metricsLength(): number;
    /**
     * Every source consulted for this key, including those that returned no
     * metric.
     */
    SOURCES(index: number, obj?: CNPProvenance): CNPProvenance | null;
    sourcesLength(): number;
    /**
     * ISO 8601 UTC creation time of this record.
     */
    CREATED_AT(): string | null;
    CREATED_AT(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * ISO 8601 UTC last-update time of this record.
     */
    UPDATED_AT(): string | null;
    UPDATED_AT(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * CID of the $CNP this record replaces when a source restates a window.
     */
    SUPERSEDES_CNP_CID(): string | null;
    SUPERSEDES_CNP_CID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    static startCNP(builder: flatbuffers.Builder): void;
    static addId(builder: flatbuffers.Builder, IDOffset: flatbuffers.Offset): void;
    static addConstellation(builder: flatbuffers.Builder, CONSTELLATIONOffset: flatbuffers.Offset): void;
    static addOperator(builder: flatbuffers.Builder, OPERATOROffset: flatbuffers.Offset): void;
    static addAsn(builder: flatbuffers.Builder, ASN: number): void;
    static addAsName(builder: flatbuffers.Builder, AS_NAMEOffset: flatbuffers.Offset): void;
    static addServiceTier(builder: flatbuffers.Builder, SERVICE_TIEROffset: flatbuffers.Offset): void;
    static addRegion(builder: flatbuffers.Builder, REGIONOffset: flatbuffers.Offset): void;
    static addWindowStart(builder: flatbuffers.Builder, WINDOW_STARTOffset: flatbuffers.Offset): void;
    static addWindowStop(builder: flatbuffers.Builder, WINDOW_STOPOffset: flatbuffers.Offset): void;
    static addAggregationPeriod(builder: flatbuffers.Builder, AGGREGATION_PERIOD: cnpPeriod): void;
    static addMetrics(builder: flatbuffers.Builder, METRICSOffset: flatbuffers.Offset): void;
    static createMetricsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startMetricsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addSources(builder: flatbuffers.Builder, SOURCESOffset: flatbuffers.Offset): void;
    static createSourcesVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startSourcesVector(builder: flatbuffers.Builder, numElems: number): void;
    static addCreatedAt(builder: flatbuffers.Builder, CREATED_ATOffset: flatbuffers.Offset): void;
    static addUpdatedAt(builder: flatbuffers.Builder, UPDATED_ATOffset: flatbuffers.Offset): void;
    static addSupersedesCnpCid(builder: flatbuffers.Builder, SUPERSEDES_CNP_CIDOffset: flatbuffers.Offset): void;
    static endCNP(builder: flatbuffers.Builder): flatbuffers.Offset;
    static finishCNPBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static finishSizePrefixedCNPBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    unpack(): CNPT;
    unpackTo(_o: CNPT): void;
}
export declare class CNPT implements flatbuffers.IGeneratedObject {
    ID: string | Uint8Array | null;
    CONSTELLATION: string | Uint8Array | null;
    OPERATOR: string | Uint8Array | null;
    ASN: number;
    AS_NAME: string | Uint8Array | null;
    SERVICE_TIER: string | Uint8Array | null;
    REGION: CNPRegionT | null;
    WINDOW_START: string | Uint8Array | null;
    WINDOW_STOP: string | Uint8Array | null;
    AGGREGATION_PERIOD: cnpPeriod;
    METRICS: (CNPMetricT)[];
    SOURCES: (CNPProvenanceT)[];
    CREATED_AT: string | Uint8Array | null;
    UPDATED_AT: string | Uint8Array | null;
    SUPERSEDES_CNP_CID: string | Uint8Array | null;
    constructor(ID?: string | Uint8Array | null, CONSTELLATION?: string | Uint8Array | null, OPERATOR?: string | Uint8Array | null, ASN?: number, AS_NAME?: string | Uint8Array | null, SERVICE_TIER?: string | Uint8Array | null, REGION?: CNPRegionT | null, WINDOW_START?: string | Uint8Array | null, WINDOW_STOP?: string | Uint8Array | null, AGGREGATION_PERIOD?: cnpPeriod, METRICS?: (CNPMetricT)[], SOURCES?: (CNPProvenanceT)[], CREATED_AT?: string | Uint8Array | null, UPDATED_AT?: string | Uint8Array | null, SUPERSEDES_CNP_CID?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=CNP.d.ts.map