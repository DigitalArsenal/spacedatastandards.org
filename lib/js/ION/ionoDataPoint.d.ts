import * as flatbuffers from 'flatbuffers';
import { ionoLayer } from './ionoLayer.js';
/**
 * Ionospheric Observation Data Point
 */
export declare class ionoDataPoint implements flatbuffers.IUnpackableObject<ionoDataPointT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): ionoDataPoint;
    static getRootAsionoDataPoint(bb: flatbuffers.ByteBuffer, obj?: ionoDataPoint): ionoDataPoint;
    static getSizePrefixedRootAsionoDataPoint(bb: flatbuffers.ByteBuffer, obj?: ionoDataPoint): ionoDataPoint;
    /**
     * Observation epoch (ISO 8601)
     */
    EPOCH(): string | null;
    EPOCH(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Ionospheric layer
     */
    LAYER(): ionoLayer;
    /**
     * Critical frequency in MHz
     */
    CRITICAL_FREQ(): number;
    /**
     * Virtual height in km
     */
    VIRTUAL_HEIGHT(): number;
    /**
     * True height in km
     */
    TRUE_HEIGHT(): number;
    /**
     * Peak electron density in electrons/m^3
     */
    PEAK_DENSITY(): number;
    /**
     * Total electron content in TECU
     */
    TEC(): number;
    /**
     * TEC uncertainty in TECU
     */
    TEC_UNCERTAINTY(): number;
    static startionoDataPoint(builder: flatbuffers.Builder): void;
    static addEpoch(builder: flatbuffers.Builder, EPOCHOffset: flatbuffers.Offset): void;
    static addLayer(builder: flatbuffers.Builder, LAYER: ionoLayer): void;
    static addCriticalFreq(builder: flatbuffers.Builder, CRITICAL_FREQ: number): void;
    static addVirtualHeight(builder: flatbuffers.Builder, VIRTUAL_HEIGHT: number): void;
    static addTrueHeight(builder: flatbuffers.Builder, TRUE_HEIGHT: number): void;
    static addPeakDensity(builder: flatbuffers.Builder, PEAK_DENSITY: number): void;
    static addTec(builder: flatbuffers.Builder, TEC: number): void;
    static addTecUncertainty(builder: flatbuffers.Builder, TEC_UNCERTAINTY: number): void;
    static endionoDataPoint(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createionoDataPoint(builder: flatbuffers.Builder, EPOCHOffset: flatbuffers.Offset, LAYER: ionoLayer, CRITICAL_FREQ: number, VIRTUAL_HEIGHT: number, TRUE_HEIGHT: number, PEAK_DENSITY: number, TEC: number, TEC_UNCERTAINTY: number): flatbuffers.Offset;
    unpack(): ionoDataPointT;
    unpackTo(_o: ionoDataPointT): void;
}
export declare class ionoDataPointT implements flatbuffers.IGeneratedObject {
    EPOCH: string | Uint8Array | null;
    LAYER: ionoLayer;
    CRITICAL_FREQ: number;
    VIRTUAL_HEIGHT: number;
    TRUE_HEIGHT: number;
    PEAK_DENSITY: number;
    TEC: number;
    TEC_UNCERTAINTY: number;
    constructor(EPOCH?: string | Uint8Array | null, LAYER?: ionoLayer, CRITICAL_FREQ?: number, VIRTUAL_HEIGHT?: number, TRUE_HEIGHT?: number, PEAK_DENSITY?: number, TEC?: number, TEC_UNCERTAINTY?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=ionoDataPoint.d.ts.map