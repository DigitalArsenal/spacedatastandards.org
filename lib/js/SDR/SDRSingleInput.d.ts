import * as flatbuffers from 'flatbuffers';
/**
 * Compact single-frame detection input used by pluggable sensor models that
 * do not drive arena-backed batches.
 */
export declare class SDRSingleInput implements flatbuffers.IUnpackableObject<SDRSingleInputT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): SDRSingleInput;
    static getRootAsSDRSingleInput(bb: flatbuffers.ByteBuffer, obj?: SDRSingleInput): SDRSingleInput;
    static getSizePrefixedRootAsSDRSingleInput(bb: flatbuffers.ByteBuffer, obj?: SDRSingleInput): SDRSingleInput;
    /**
     * Target position in ECEF (meters) — X.
     */
    TARGET_POS_X(): number;
    TARGET_POS_Y(): number;
    TARGET_POS_Z(): number;
    /**
     * Sensor position in ECEF (meters) — X.
     */
    SENSOR_POS_X(): number;
    SENSOR_POS_Y(): number;
    SENSOR_POS_Z(): number;
    /**
     * Radar cross section (m^2).
     */
    RCS(): number;
    /**
     * Sensor operating frequency (Hz).
     */
    FREQUENCY(): number;
    /**
     * Transmit power (W).
     */
    TX_POWER(): number;
    /**
     * Unix timestamp (milliseconds since epoch).
     */
    TIMESTAMP_MS(): bigint;
    static startSDRSingleInput(builder: flatbuffers.Builder): void;
    static addTargetPosX(builder: flatbuffers.Builder, TARGET_POS_X: number): void;
    static addTargetPosY(builder: flatbuffers.Builder, TARGET_POS_Y: number): void;
    static addTargetPosZ(builder: flatbuffers.Builder, TARGET_POS_Z: number): void;
    static addSensorPosX(builder: flatbuffers.Builder, SENSOR_POS_X: number): void;
    static addSensorPosY(builder: flatbuffers.Builder, SENSOR_POS_Y: number): void;
    static addSensorPosZ(builder: flatbuffers.Builder, SENSOR_POS_Z: number): void;
    static addRcs(builder: flatbuffers.Builder, RCS: number): void;
    static addFrequency(builder: flatbuffers.Builder, FREQUENCY: number): void;
    static addTxPower(builder: flatbuffers.Builder, TX_POWER: number): void;
    static addTimestampMs(builder: flatbuffers.Builder, TIMESTAMP_MS: bigint): void;
    static endSDRSingleInput(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createSDRSingleInput(builder: flatbuffers.Builder, TARGET_POS_X: number, TARGET_POS_Y: number, TARGET_POS_Z: number, SENSOR_POS_X: number, SENSOR_POS_Y: number, SENSOR_POS_Z: number, RCS: number, FREQUENCY: number, TX_POWER: number, TIMESTAMP_MS: bigint): flatbuffers.Offset;
    unpack(): SDRSingleInputT;
    unpackTo(_o: SDRSingleInputT): void;
}
export declare class SDRSingleInputT implements flatbuffers.IGeneratedObject {
    TARGET_POS_X: number;
    TARGET_POS_Y: number;
    TARGET_POS_Z: number;
    SENSOR_POS_X: number;
    SENSOR_POS_Y: number;
    SENSOR_POS_Z: number;
    RCS: number;
    FREQUENCY: number;
    TX_POWER: number;
    TIMESTAMP_MS: bigint;
    constructor(TARGET_POS_X?: number, TARGET_POS_Y?: number, TARGET_POS_Z?: number, SENSOR_POS_X?: number, SENSOR_POS_Y?: number, SENSOR_POS_Z?: number, RCS?: number, FREQUENCY?: number, TX_POWER?: number, TIMESTAMP_MS?: bigint);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=SDRSingleInput.d.ts.map