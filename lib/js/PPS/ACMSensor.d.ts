import * as flatbuffers from 'flatbuffers';
/**
 * One sensor block of an ACM's attitude determination data.
 */
export declare class ACMSensor implements flatbuffers.IUnpackableObject<ACMSensorT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): ACMSensor;
    static getRootAsACMSensor(bb: flatbuffers.ByteBuffer, obj?: ACMSensor): ACMSensor;
    static getSizePrefixedRootAsACMSensor(bb: flatbuffers.ByteBuffer, obj?: ACMSensor): ACMSensor;
    /**
     * SENSOR_NUMBER; it need not be sequential.
     */
    SENSOR_NUMBER(): number;
    /**
     * SENSOR_USED: for example AST, DSS or IMU.
     */
    SENSOR_USED(): string | null;
    SENSOR_USED(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * NUMBER_SENSOR_NOISE_COVARIANCE.
     */
    NUMBER_SENSOR_NOISE_COVARIANCE(): number;
    /**
     * SENSOR_NOISE_STDDEV in deg: one value per noise covariance.
     */
    SENSOR_NOISE_STDDEV(index: number): number | null;
    sensorNoiseStddevLength(): number;
    sensorNoiseStddevArray(): Float64Array | null;
    /**
     * SENSOR_FREQUENCY in Hz, NaN when not stated.
     */
    SENSOR_FREQUENCY(): number;
    static startACMSensor(builder: flatbuffers.Builder): void;
    static addSensorNumber(builder: flatbuffers.Builder, SENSOR_NUMBER: number): void;
    static addSensorUsed(builder: flatbuffers.Builder, SENSOR_USEDOffset: flatbuffers.Offset): void;
    static addNumberSensorNoiseCovariance(builder: flatbuffers.Builder, NUMBER_SENSOR_NOISE_COVARIANCE: number): void;
    static addSensorNoiseStddev(builder: flatbuffers.Builder, SENSOR_NOISE_STDDEVOffset: flatbuffers.Offset): void;
    static createSensorNoiseStddevVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createSensorNoiseStddevVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startSensorNoiseStddevVector(builder: flatbuffers.Builder, numElems: number): void;
    static addSensorFrequency(builder: flatbuffers.Builder, SENSOR_FREQUENCY: number): void;
    static endACMSensor(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createACMSensor(builder: flatbuffers.Builder, SENSOR_NUMBER: number, SENSOR_USEDOffset: flatbuffers.Offset, NUMBER_SENSOR_NOISE_COVARIANCE: number, SENSOR_NOISE_STDDEVOffset: flatbuffers.Offset, SENSOR_FREQUENCY: number): flatbuffers.Offset;
    unpack(): ACMSensorT;
    unpackTo(_o: ACMSensorT): void;
}
export declare class ACMSensorT implements flatbuffers.IGeneratedObject {
    SENSOR_NUMBER: number;
    SENSOR_USED: string | Uint8Array | null;
    NUMBER_SENSOR_NOISE_COVARIANCE: number;
    SENSOR_NOISE_STDDEV: (number)[];
    SENSOR_FREQUENCY: number;
    constructor(SENSOR_NUMBER?: number, SENSOR_USED?: string | Uint8Array | null, NUMBER_SENSOR_NOISE_COVARIANCE?: number, SENSOR_NOISE_STDDEV?: (number)[], SENSOR_FREQUENCY?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=ACMSensor.d.ts.map