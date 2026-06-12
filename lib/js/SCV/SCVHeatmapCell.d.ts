import * as flatbuffers from 'flatbuffers';
import { scvMetricSeriesKind } from './scvMetricSeriesKind.js';
export declare class SCVHeatmapCell implements flatbuffers.IUnpackableObject<SCVHeatmapCellT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): SCVHeatmapCell;
    static getRootAsSCVHeatmapCell(bb: flatbuffers.ByteBuffer, obj?: SCVHeatmapCell): SCVHeatmapCell;
    static getSizePrefixedRootAsSCVHeatmapCell(bb: flatbuffers.ByteBuffer, obj?: SCVHeatmapCell): SCVHeatmapCell;
    METRIC_KIND(): scvMetricSeriesKind;
    X_INDEX(): number;
    Y_INDEX(): number;
    VALUE(): number;
    SENSOR_COUNT(): number;
    static startSCVHeatmapCell(builder: flatbuffers.Builder): void;
    static addMetricKind(builder: flatbuffers.Builder, METRIC_KIND: scvMetricSeriesKind): void;
    static addXIndex(builder: flatbuffers.Builder, X_INDEX: number): void;
    static addYIndex(builder: flatbuffers.Builder, Y_INDEX: number): void;
    static addValue(builder: flatbuffers.Builder, VALUE: number): void;
    static addSensorCount(builder: flatbuffers.Builder, SENSOR_COUNT: number): void;
    static endSCVHeatmapCell(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createSCVHeatmapCell(builder: flatbuffers.Builder, METRIC_KIND: scvMetricSeriesKind, X_INDEX: number, Y_INDEX: number, VALUE: number, SENSOR_COUNT: number): flatbuffers.Offset;
    unpack(): SCVHeatmapCellT;
    unpackTo(_o: SCVHeatmapCellT): void;
}
export declare class SCVHeatmapCellT implements flatbuffers.IGeneratedObject {
    METRIC_KIND: scvMetricSeriesKind;
    X_INDEX: number;
    Y_INDEX: number;
    VALUE: number;
    SENSOR_COUNT: number;
    constructor(METRIC_KIND?: scvMetricSeriesKind, X_INDEX?: number, Y_INDEX?: number, VALUE?: number, SENSOR_COUNT?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=SCVHeatmapCell.d.ts.map