import * as flatbuffers from 'flatbuffers';
import { SDRRadarConfig, SDRRadarConfigT } from './SDRRadarConfig.js';
import { sensorCategory } from './sensorCategory.js';
import { sensorOperationalFlags } from './sensorOperationalFlags.js';
/**
 * Generic sensor configuration.
 */
export declare class SDRSensorConfig implements flatbuffers.IUnpackableObject<SDRSensorConfigT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): SDRSensorConfig;
    static getRootAsSDRSensorConfig(bb: flatbuffers.ByteBuffer, obj?: SDRSensorConfig): SDRSensorConfig;
    static getSizePrefixedRootAsSDRSensorConfig(bb: flatbuffers.ByteBuffer, obj?: SDRSensorConfig): SDRSensorConfig;
    CATEGORY(): sensorCategory;
    /**
     * Sensor position in ECEF (meters) — X.
     */
    POS_X(): number;
    /**
     * Sensor position in ECEF (meters) — Y.
     */
    POS_Y(): number;
    /**
     * Sensor position in ECEF (meters) — Z.
     */
    POS_Z(): number;
    /**
     * Sensor orientation as quaternion (W, X, Y, Z).
     */
    ORIENT_W(): number;
    ORIENT_X(): number;
    ORIENT_Y(): number;
    ORIENT_Z(): number;
    /**
     * Radar-specific config when CATEGORY == RADAR.
     */
    RADAR(obj?: SDRRadarConfig): SDRRadarConfig | null;
    /**
     * Operational flags.
     */
    FLAGS(): sensorOperationalFlags;
    static startSDRSensorConfig(builder: flatbuffers.Builder): void;
    static addCategory(builder: flatbuffers.Builder, CATEGORY: sensorCategory): void;
    static addPosX(builder: flatbuffers.Builder, POS_X: number): void;
    static addPosY(builder: flatbuffers.Builder, POS_Y: number): void;
    static addPosZ(builder: flatbuffers.Builder, POS_Z: number): void;
    static addOrientW(builder: flatbuffers.Builder, ORIENT_W: number): void;
    static addOrientX(builder: flatbuffers.Builder, ORIENT_X: number): void;
    static addOrientY(builder: flatbuffers.Builder, ORIENT_Y: number): void;
    static addOrientZ(builder: flatbuffers.Builder, ORIENT_Z: number): void;
    static addRadar(builder: flatbuffers.Builder, RADAROffset: flatbuffers.Offset): void;
    static addFlags(builder: flatbuffers.Builder, FLAGS: sensorOperationalFlags): void;
    static endSDRSensorConfig(builder: flatbuffers.Builder): flatbuffers.Offset;
    unpack(): SDRSensorConfigT;
    unpackTo(_o: SDRSensorConfigT): void;
}
export declare class SDRSensorConfigT implements flatbuffers.IGeneratedObject {
    CATEGORY: sensorCategory;
    POS_X: number;
    POS_Y: number;
    POS_Z: number;
    ORIENT_W: number;
    ORIENT_X: number;
    ORIENT_Y: number;
    ORIENT_Z: number;
    RADAR: SDRRadarConfigT | null;
    FLAGS: sensorOperationalFlags;
    constructor(CATEGORY?: sensorCategory, POS_X?: number, POS_Y?: number, POS_Z?: number, ORIENT_W?: number, ORIENT_X?: number, ORIENT_Y?: number, ORIENT_Z?: number, RADAR?: SDRRadarConfigT | null, FLAGS?: sensorOperationalFlags);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=SDRSensorConfig.d.ts.map