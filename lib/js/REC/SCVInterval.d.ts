import * as flatbuffers from 'flatbuffers';
import { scvIntervalCategory } from './scvIntervalCategory.js';
export declare class SCVInterval implements flatbuffers.IUnpackableObject<SCVIntervalT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): SCVInterval;
    static getRootAsSCVInterval(bb: flatbuffers.ByteBuffer, obj?: SCVInterval): SCVInterval;
    static getSizePrefixedRootAsSCVInterval(bb: flatbuffers.ByteBuffer, obj?: SCVInterval): SCVInterval;
    SENSOR_ID(): number;
    TARGET_ID(): number;
    INTERVAL_KIND(): scvIntervalCategory;
    START_OFFSET_SEC(): number;
    STOP_OFFSET_SEC(): number;
    DURATION_SEC(): number;
    MIN_RANGE_M(): number;
    MAX_ELEVATION_DEG(): number;
    CELL_ID(): number;
    static startSCVInterval(builder: flatbuffers.Builder): void;
    static addSensorId(builder: flatbuffers.Builder, SENSOR_ID: number): void;
    static addTargetId(builder: flatbuffers.Builder, TARGET_ID: number): void;
    static addIntervalKind(builder: flatbuffers.Builder, INTERVAL_KIND: scvIntervalCategory): void;
    static addStartOffsetSec(builder: flatbuffers.Builder, START_OFFSET_SEC: number): void;
    static addStopOffsetSec(builder: flatbuffers.Builder, STOP_OFFSET_SEC: number): void;
    static addDurationSec(builder: flatbuffers.Builder, DURATION_SEC: number): void;
    static addMinRangeM(builder: flatbuffers.Builder, MIN_RANGE_M: number): void;
    static addMaxElevationDeg(builder: flatbuffers.Builder, MAX_ELEVATION_DEG: number): void;
    static addCellId(builder: flatbuffers.Builder, CELL_ID: number): void;
    static endSCVInterval(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createSCVInterval(builder: flatbuffers.Builder, SENSOR_ID: number, TARGET_ID: number, INTERVAL_KIND: scvIntervalCategory, START_OFFSET_SEC: number, STOP_OFFSET_SEC: number, DURATION_SEC: number, MIN_RANGE_M: number, MAX_ELEVATION_DEG: number, CELL_ID: number): flatbuffers.Offset;
    unpack(): SCVIntervalT;
    unpackTo(_o: SCVIntervalT): void;
}
export declare class SCVIntervalT implements flatbuffers.IGeneratedObject {
    SENSOR_ID: number;
    TARGET_ID: number;
    INTERVAL_KIND: scvIntervalCategory;
    START_OFFSET_SEC: number;
    STOP_OFFSET_SEC: number;
    DURATION_SEC: number;
    MIN_RANGE_M: number;
    MAX_ELEVATION_DEG: number;
    CELL_ID: number;
    constructor(SENSOR_ID?: number, TARGET_ID?: number, INTERVAL_KIND?: scvIntervalCategory, START_OFFSET_SEC?: number, STOP_OFFSET_SEC?: number, DURATION_SEC?: number, MIN_RANGE_M?: number, MAX_ELEVATION_DEG?: number, CELL_ID?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=SCVInterval.d.ts.map