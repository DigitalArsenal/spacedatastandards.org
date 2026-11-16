import * as flatbuffers from 'flatbuffers';
import { scvMetricSeriesKind } from './scvMetricSeriesKind.js';
export declare class SCVHistogramBin implements flatbuffers.IUnpackableObject<SCVHistogramBinT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): SCVHistogramBin;
    static getRootAsSCVHistogramBin(bb: flatbuffers.ByteBuffer, obj?: SCVHistogramBin): SCVHistogramBin;
    static getSizePrefixedRootAsSCVHistogramBin(bb: flatbuffers.ByteBuffer, obj?: SCVHistogramBin): SCVHistogramBin;
    METRIC_KIND(): scvMetricSeriesKind;
    MIN_VALUE(): number;
    MAX_VALUE(): number;
    COUNT(): number;
    WEIGHT(): number;
    static startSCVHistogramBin(builder: flatbuffers.Builder): void;
    static addMetricKind(builder: flatbuffers.Builder, METRIC_KIND: scvMetricSeriesKind): void;
    static addMinValue(builder: flatbuffers.Builder, MIN_VALUE: number): void;
    static addMaxValue(builder: flatbuffers.Builder, MAX_VALUE: number): void;
    static addCount(builder: flatbuffers.Builder, COUNT: number): void;
    static addWeight(builder: flatbuffers.Builder, WEIGHT: number): void;
    static endSCVHistogramBin(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createSCVHistogramBin(builder: flatbuffers.Builder, METRIC_KIND: scvMetricSeriesKind, MIN_VALUE: number, MAX_VALUE: number, COUNT: number, WEIGHT: number): flatbuffers.Offset;
    unpack(): SCVHistogramBinT;
    unpackTo(_o: SCVHistogramBinT): void;
}
export declare class SCVHistogramBinT implements flatbuffers.IGeneratedObject {
    METRIC_KIND: scvMetricSeriesKind;
    MIN_VALUE: number;
    MAX_VALUE: number;
    COUNT: number;
    WEIGHT: number;
    constructor(METRIC_KIND?: scvMetricSeriesKind, MIN_VALUE?: number, MAX_VALUE?: number, COUNT?: number, WEIGHT?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=SCVHistogramBin.d.ts.map