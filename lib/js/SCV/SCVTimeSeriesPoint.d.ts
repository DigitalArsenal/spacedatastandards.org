import * as flatbuffers from 'flatbuffers';
import { scvMetricSeriesKind } from './scvMetricSeriesKind.js';
export declare class SCVTimeSeriesPoint implements flatbuffers.IUnpackableObject<SCVTimeSeriesPointT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): SCVTimeSeriesPoint;
    static getRootAsSCVTimeSeriesPoint(bb: flatbuffers.ByteBuffer, obj?: SCVTimeSeriesPoint): SCVTimeSeriesPoint;
    static getSizePrefixedRootAsSCVTimeSeriesPoint(bb: flatbuffers.ByteBuffer, obj?: SCVTimeSeriesPoint): SCVTimeSeriesPoint;
    METRIC_KIND(): scvMetricSeriesKind;
    TIME_OFFSET_SEC(): number;
    WINDOW_INDEX(): number;
    VALUE(): number;
    SENSOR_ID(): number;
    CELL_ID(): number;
    static startSCVTimeSeriesPoint(builder: flatbuffers.Builder): void;
    static addMetricKind(builder: flatbuffers.Builder, METRIC_KIND: scvMetricSeriesKind): void;
    static addTimeOffsetSec(builder: flatbuffers.Builder, TIME_OFFSET_SEC: number): void;
    static addWindowIndex(builder: flatbuffers.Builder, WINDOW_INDEX: number): void;
    static addValue(builder: flatbuffers.Builder, VALUE: number): void;
    static addSensorId(builder: flatbuffers.Builder, SENSOR_ID: number): void;
    static addCellId(builder: flatbuffers.Builder, CELL_ID: number): void;
    static endSCVTimeSeriesPoint(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createSCVTimeSeriesPoint(builder: flatbuffers.Builder, METRIC_KIND: scvMetricSeriesKind, TIME_OFFSET_SEC: number, WINDOW_INDEX: number, VALUE: number, SENSOR_ID: number, CELL_ID: number): flatbuffers.Offset;
    unpack(): SCVTimeSeriesPointT;
    unpackTo(_o: SCVTimeSeriesPointT): void;
}
export declare class SCVTimeSeriesPointT implements flatbuffers.IGeneratedObject {
    METRIC_KIND: scvMetricSeriesKind;
    TIME_OFFSET_SEC: number;
    WINDOW_INDEX: number;
    VALUE: number;
    SENSOR_ID: number;
    CELL_ID: number;
    constructor(METRIC_KIND?: scvMetricSeriesKind, TIME_OFFSET_SEC?: number, WINDOW_INDEX?: number, VALUE?: number, SENSOR_ID?: number, CELL_ID?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=SCVTimeSeriesPoint.d.ts.map