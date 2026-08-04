import * as flatbuffers from 'flatbuffers';
import { CNPProvenance, CNPProvenanceT } from './CNPProvenance.js';
import { CNPStatistic, CNPStatisticT } from './CNPStatistic.js';
import { cnpMetricKind } from './cnpMetricKind.js';
/**
 * One aggregated quantity for the parent record's key.
 *
 * A metric is a DISTRIBUTION, not a scalar. There is deliberately no
 * `VALUE: double` on this table: a source that publishes only a median
 * encodes exactly one CNPStatistic with STATISTIC MEDIAN, and a consumer can
 * then never mistake it for a mean.
 */
export declare class CNPMetric implements flatbuffers.IUnpackableObject<CNPMetricT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): CNPMetric;
    static getRootAsCNPMetric(bb: flatbuffers.ByteBuffer, obj?: CNPMetric): CNPMetric;
    static getSizePrefixedRootAsCNPMetric(bb: flatbuffers.ByteBuffer, obj?: CNPMetric): CNPMetric;
    /**
     * Quantity aggregated.
     */
    KIND(): cnpMetricKind;
    /**
     * The source's own name for this metric, verbatim. REQUIRED to be
     * non-empty when KIND is OTHER; recommended always, because it is what
     * makes the mapping auditable.
     */
    SOURCE_METRIC_NAME(): string | null;
    SOURCE_METRIC_NAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Units of every VALUE under STATISTICS. NORMATIVE and required: "Mbps",
     * "kbps", "ms", "percent", "fraction", "count". Units are never silently
     * converted on ingest; a source publishing kbps encodes kbps.
     */
    UNITS(): string;
    UNITS(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    /**
     * The distribution. At least one entry; a metric with none is malformed.
     */
    STATISTICS(index: number, obj?: CNPStatistic): CNPStatistic | null;
    statisticsLength(): number;
    /**
     * Number of individual measurements aggregated. 0 means the source did
     * not publish a sample count — it never means zero measurements.
     */
    SAMPLE_COUNT(): bigint;
    /**
     * Number of distinct clients, terminals or probes contributing. 0 means
     * unpublished.
     */
    CLIENT_COUNT(): bigint;
    /**
     * Where this metric came from and under what terms.
     */
    PROVENANCE(obj?: CNPProvenance): CNPProvenance | null;
    static startCNPMetric(builder: flatbuffers.Builder): void;
    static addKind(builder: flatbuffers.Builder, KIND: cnpMetricKind): void;
    static addSourceMetricName(builder: flatbuffers.Builder, SOURCE_METRIC_NAMEOffset: flatbuffers.Offset): void;
    static addUnits(builder: flatbuffers.Builder, UNITSOffset: flatbuffers.Offset): void;
    static addStatistics(builder: flatbuffers.Builder, STATISTICSOffset: flatbuffers.Offset): void;
    static createStatisticsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startStatisticsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addSampleCount(builder: flatbuffers.Builder, SAMPLE_COUNT: bigint): void;
    static addClientCount(builder: flatbuffers.Builder, CLIENT_COUNT: bigint): void;
    static addProvenance(builder: flatbuffers.Builder, PROVENANCEOffset: flatbuffers.Offset): void;
    static endCNPMetric(builder: flatbuffers.Builder): flatbuffers.Offset;
    unpack(): CNPMetricT;
    unpackTo(_o: CNPMetricT): void;
}
export declare class CNPMetricT implements flatbuffers.IGeneratedObject {
    KIND: cnpMetricKind;
    SOURCE_METRIC_NAME: string | Uint8Array | null;
    UNITS: string | Uint8Array | null;
    STATISTICS: (CNPStatisticT)[];
    SAMPLE_COUNT: bigint;
    CLIENT_COUNT: bigint;
    PROVENANCE: CNPProvenanceT | null;
    constructor(KIND?: cnpMetricKind, SOURCE_METRIC_NAME?: string | Uint8Array | null, UNITS?: string | Uint8Array | null, STATISTICS?: (CNPStatisticT)[], SAMPLE_COUNT?: bigint, CLIENT_COUNT?: bigint, PROVENANCE?: CNPProvenanceT | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=CNPMetric.d.ts.map