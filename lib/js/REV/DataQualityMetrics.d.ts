import * as flatbuffers from 'flatbuffers';
/**
 * Data quality metrics attached to a review.
 */
export declare class DataQualityMetrics implements flatbuffers.IUnpackableObject<DataQualityMetricsT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): DataQualityMetrics;
    static getRootAsDataQualityMetrics(bb: flatbuffers.ByteBuffer, obj?: DataQualityMetrics): DataQualityMetrics;
    static getSizePrefixedRootAsDataQualityMetrics(bb: flatbuffers.ByteBuffer, obj?: DataQualityMetrics): DataQualityMetrics;
    SCHEMA_COMPLIANCE(): number;
    DATA_FRESHNESS(): number;
    COVERAGE_ACCURACY(): number;
    DELIVERY_RELIABILITY(): number;
    static startDataQualityMetrics(builder: flatbuffers.Builder): void;
    static addSchemaCompliance(builder: flatbuffers.Builder, SCHEMA_COMPLIANCE: number): void;
    static addDataFreshness(builder: flatbuffers.Builder, DATA_FRESHNESS: number): void;
    static addCoverageAccuracy(builder: flatbuffers.Builder, COVERAGE_ACCURACY: number): void;
    static addDeliveryReliability(builder: flatbuffers.Builder, DELIVERY_RELIABILITY: number): void;
    static endDataQualityMetrics(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createDataQualityMetrics(builder: flatbuffers.Builder, SCHEMA_COMPLIANCE: number, DATA_FRESHNESS: number, COVERAGE_ACCURACY: number, DELIVERY_RELIABILITY: number): flatbuffers.Offset;
    unpack(): DataQualityMetricsT;
    unpackTo(_o: DataQualityMetricsT): void;
}
export declare class DataQualityMetricsT implements flatbuffers.IGeneratedObject {
    SCHEMA_COMPLIANCE: number;
    DATA_FRESHNESS: number;
    COVERAGE_ACCURACY: number;
    DELIVERY_RELIABILITY: number;
    constructor(SCHEMA_COMPLIANCE?: number, DATA_FRESHNESS?: number, COVERAGE_ACCURACY?: number, DELIVERY_RELIABILITY?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=DataQualityMetrics.d.ts.map