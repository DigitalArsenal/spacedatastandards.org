import * as flatbuffers from 'flatbuffers';
/**
 * Provider reputation summary surfaced in marketplace listings.
 */
export declare class ProviderReputation implements flatbuffers.IUnpackableObject<ProviderReputationT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): ProviderReputation;
    static getRootAsProviderReputation(bb: flatbuffers.ByteBuffer, obj?: ProviderReputation): ProviderReputation;
    static getSizePrefixedRootAsProviderReputation(bb: flatbuffers.ByteBuffer, obj?: ProviderReputation): ProviderReputation;
    TOTAL_SALES(): bigint;
    AVERAGE_RATING_X10(): number;
    TOTAL_RATINGS(): number;
    UPTIME_PERCENTAGE_X100(): number;
    AVG_DELIVERY_LATENCY_MS(): number;
    DISPUTE_COUNT(): number;
    PROVIDER_SINCE(): bigint;
    static startProviderReputation(builder: flatbuffers.Builder): void;
    static addTotalSales(builder: flatbuffers.Builder, TOTAL_SALES: bigint): void;
    static addAverageRatingX10(builder: flatbuffers.Builder, AVERAGE_RATING_X10: number): void;
    static addTotalRatings(builder: flatbuffers.Builder, TOTAL_RATINGS: number): void;
    static addUptimePercentageX100(builder: flatbuffers.Builder, UPTIME_PERCENTAGE_X100: number): void;
    static addAvgDeliveryLatencyMs(builder: flatbuffers.Builder, AVG_DELIVERY_LATENCY_MS: number): void;
    static addDisputeCount(builder: flatbuffers.Builder, DISPUTE_COUNT: number): void;
    static addProviderSince(builder: flatbuffers.Builder, PROVIDER_SINCE: bigint): void;
    static endProviderReputation(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createProviderReputation(builder: flatbuffers.Builder, TOTAL_SALES: bigint, AVERAGE_RATING_X10: number, TOTAL_RATINGS: number, UPTIME_PERCENTAGE_X100: number, AVG_DELIVERY_LATENCY_MS: number, DISPUTE_COUNT: number, PROVIDER_SINCE: bigint): flatbuffers.Offset;
    unpack(): ProviderReputationT;
    unpackTo(_o: ProviderReputationT): void;
}
export declare class ProviderReputationT implements flatbuffers.IGeneratedObject {
    TOTAL_SALES: bigint;
    AVERAGE_RATING_X10: number;
    TOTAL_RATINGS: number;
    UPTIME_PERCENTAGE_X100: number;
    AVG_DELIVERY_LATENCY_MS: number;
    DISPUTE_COUNT: number;
    PROVIDER_SINCE: bigint;
    constructor(TOTAL_SALES?: bigint, AVERAGE_RATING_X10?: number, TOTAL_RATINGS?: number, UPTIME_PERCENTAGE_X100?: number, AVG_DELIVERY_LATENCY_MS?: number, DISPUTE_COUNT?: number, PROVIDER_SINCE?: bigint);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=ProviderReputation.d.ts.map