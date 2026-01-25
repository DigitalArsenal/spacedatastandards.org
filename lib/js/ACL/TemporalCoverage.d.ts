import * as flatbuffers from 'flatbuffers';
/**
 * Temporal coverage definition
 */
export declare class TemporalCoverage implements flatbuffers.IUnpackableObject<TemporalCoverageT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): TemporalCoverage;
    static getRootAsTemporalCoverage(bb: flatbuffers.ByteBuffer, obj?: TemporalCoverage): TemporalCoverage;
    static getSizePrefixedRootAsTemporalCoverage(bb: flatbuffers.ByteBuffer, obj?: TemporalCoverage): TemporalCoverage;
    /**
     * Start epoch in ISO 8601 format
     */
    START_EPOCH(): string | null;
    START_EPOCH(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * End epoch in ISO 8601 format
     */
    END_EPOCH(): string | null;
    END_EPOCH(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Update frequency: "realtime", "hourly", "daily"
     */
    UPDATE_FREQUENCY(): string | null;
    UPDATE_FREQUENCY(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Days of historical data available
     */
    HISTORICAL_DEPTH(): number;
    static startTemporalCoverage(builder: flatbuffers.Builder): void;
    static addStartEpoch(builder: flatbuffers.Builder, START_EPOCHOffset: flatbuffers.Offset): void;
    static addEndEpoch(builder: flatbuffers.Builder, END_EPOCHOffset: flatbuffers.Offset): void;
    static addUpdateFrequency(builder: flatbuffers.Builder, UPDATE_FREQUENCYOffset: flatbuffers.Offset): void;
    static addHistoricalDepth(builder: flatbuffers.Builder, HISTORICAL_DEPTH: number): void;
    static endTemporalCoverage(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createTemporalCoverage(builder: flatbuffers.Builder, START_EPOCHOffset: flatbuffers.Offset, END_EPOCHOffset: flatbuffers.Offset, UPDATE_FREQUENCYOffset: flatbuffers.Offset, HISTORICAL_DEPTH: number): flatbuffers.Offset;
    unpack(): TemporalCoverageT;
    unpackTo(_o: TemporalCoverageT): void;
}
export declare class TemporalCoverageT implements flatbuffers.IGeneratedObject {
    START_EPOCH: string | Uint8Array | null;
    END_EPOCH: string | Uint8Array | null;
    UPDATE_FREQUENCY: string | Uint8Array | null;
    HISTORICAL_DEPTH: number;
    constructor(START_EPOCH?: string | Uint8Array | null, END_EPOCH?: string | Uint8Array | null, UPDATE_FREQUENCY?: string | Uint8Array | null, HISTORICAL_DEPTH?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=TemporalCoverage.d.ts.map