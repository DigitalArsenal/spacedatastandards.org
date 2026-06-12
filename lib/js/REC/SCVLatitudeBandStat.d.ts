import * as flatbuffers from 'flatbuffers';
export declare class SCVLatitudeBandStat implements flatbuffers.IUnpackableObject<SCVLatitudeBandStatT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): SCVLatitudeBandStat;
    static getRootAsSCVLatitudeBandStat(bb: flatbuffers.ByteBuffer, obj?: SCVLatitudeBandStat): SCVLatitudeBandStat;
    static getSizePrefixedRootAsSCVLatitudeBandStat(bb: flatbuffers.ByteBuffer, obj?: SCVLatitudeBandStat): SCVLatitudeBandStat;
    MIN_LAT_DEG(): number;
    MAX_LAT_DEG(): number;
    COVERAGE_FRACTION(): number;
    MEAN_REVISIT_SEC(): number;
    MAX_GAP_SEC(): number;
    MEAN_REDUNDANCY(): number;
    static startSCVLatitudeBandStat(builder: flatbuffers.Builder): void;
    static addMinLatDeg(builder: flatbuffers.Builder, MIN_LAT_DEG: number): void;
    static addMaxLatDeg(builder: flatbuffers.Builder, MAX_LAT_DEG: number): void;
    static addCoverageFraction(builder: flatbuffers.Builder, COVERAGE_FRACTION: number): void;
    static addMeanRevisitSec(builder: flatbuffers.Builder, MEAN_REVISIT_SEC: number): void;
    static addMaxGapSec(builder: flatbuffers.Builder, MAX_GAP_SEC: number): void;
    static addMeanRedundancy(builder: flatbuffers.Builder, MEAN_REDUNDANCY: number): void;
    static endSCVLatitudeBandStat(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createSCVLatitudeBandStat(builder: flatbuffers.Builder, MIN_LAT_DEG: number, MAX_LAT_DEG: number, COVERAGE_FRACTION: number, MEAN_REVISIT_SEC: number, MAX_GAP_SEC: number, MEAN_REDUNDANCY: number): flatbuffers.Offset;
    unpack(): SCVLatitudeBandStatT;
    unpackTo(_o: SCVLatitudeBandStatT): void;
}
export declare class SCVLatitudeBandStatT implements flatbuffers.IGeneratedObject {
    MIN_LAT_DEG: number;
    MAX_LAT_DEG: number;
    COVERAGE_FRACTION: number;
    MEAN_REVISIT_SEC: number;
    MAX_GAP_SEC: number;
    MEAN_REDUNDANCY: number;
    constructor(MIN_LAT_DEG?: number, MAX_LAT_DEG?: number, COVERAGE_FRACTION?: number, MEAN_REVISIT_SEC?: number, MAX_GAP_SEC?: number, MEAN_REDUNDANCY?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=SCVLatitudeBandStat.d.ts.map