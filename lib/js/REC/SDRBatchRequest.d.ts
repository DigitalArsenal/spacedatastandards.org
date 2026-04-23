import * as flatbuffers from 'flatbuffers';
/**
 * Batch detection request (arena-addressed, zero-copy).
 */
export declare class SDRBatchRequest implements flatbuffers.IUnpackableObject<SDRBatchRequestT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): SDRBatchRequest;
    static getRootAsSDRBatchRequest(bb: flatbuffers.ByteBuffer, obj?: SDRBatchRequest): SDRBatchRequest;
    static getSizePrefixedRootAsSDRBatchRequest(bb: flatbuffers.ByteBuffer, obj?: SDRBatchRequest): SDRBatchRequest;
    /**
     * Sensor position in ECEF (meters) — X.
     */
    SENSOR_POS_X(): number;
    SENSOR_POS_Y(): number;
    SENSOR_POS_Z(): number;
    /**
     * Sensor orientation as quaternion (W, X, Y, Z).
     */
    SENSOR_ORIENT_W(): number;
    SENSOR_ORIENT_X(): number;
    SENSOR_ORIENT_Y(): number;
    SENSOR_ORIENT_Z(): number;
    /**
     * Input buffer offset where targetState[] starts.
     */
    INPUT_OFFSET(): number;
    /**
     * Number of targets in the input buffer.
     */
    TARGET_COUNT(): number;
    /**
     * Output buffer offset where detectionResult[] is written.
     */
    OUTPUT_OFFSET(): number;
    /**
     * Current time as a Julian date.
     */
    EPOCH(): number;
    static startSDRBatchRequest(builder: flatbuffers.Builder): void;
    static addSensorPosX(builder: flatbuffers.Builder, SENSOR_POS_X: number): void;
    static addSensorPosY(builder: flatbuffers.Builder, SENSOR_POS_Y: number): void;
    static addSensorPosZ(builder: flatbuffers.Builder, SENSOR_POS_Z: number): void;
    static addSensorOrientW(builder: flatbuffers.Builder, SENSOR_ORIENT_W: number): void;
    static addSensorOrientX(builder: flatbuffers.Builder, SENSOR_ORIENT_X: number): void;
    static addSensorOrientY(builder: flatbuffers.Builder, SENSOR_ORIENT_Y: number): void;
    static addSensorOrientZ(builder: flatbuffers.Builder, SENSOR_ORIENT_Z: number): void;
    static addInputOffset(builder: flatbuffers.Builder, INPUT_OFFSET: number): void;
    static addTargetCount(builder: flatbuffers.Builder, TARGET_COUNT: number): void;
    static addOutputOffset(builder: flatbuffers.Builder, OUTPUT_OFFSET: number): void;
    static addEpoch(builder: flatbuffers.Builder, EPOCH: number): void;
    static endSDRBatchRequest(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createSDRBatchRequest(builder: flatbuffers.Builder, SENSOR_POS_X: number, SENSOR_POS_Y: number, SENSOR_POS_Z: number, SENSOR_ORIENT_W: number, SENSOR_ORIENT_X: number, SENSOR_ORIENT_Y: number, SENSOR_ORIENT_Z: number, INPUT_OFFSET: number, TARGET_COUNT: number, OUTPUT_OFFSET: number, EPOCH: number): flatbuffers.Offset;
    unpack(): SDRBatchRequestT;
    unpackTo(_o: SDRBatchRequestT): void;
}
export declare class SDRBatchRequestT implements flatbuffers.IGeneratedObject {
    SENSOR_POS_X: number;
    SENSOR_POS_Y: number;
    SENSOR_POS_Z: number;
    SENSOR_ORIENT_W: number;
    SENSOR_ORIENT_X: number;
    SENSOR_ORIENT_Y: number;
    SENSOR_ORIENT_Z: number;
    INPUT_OFFSET: number;
    TARGET_COUNT: number;
    OUTPUT_OFFSET: number;
    EPOCH: number;
    constructor(SENSOR_POS_X?: number, SENSOR_POS_Y?: number, SENSOR_POS_Z?: number, SENSOR_ORIENT_W?: number, SENSOR_ORIENT_X?: number, SENSOR_ORIENT_Y?: number, SENSOR_ORIENT_Z?: number, INPUT_OFFSET?: number, TARGET_COUNT?: number, OUTPUT_OFFSET?: number, EPOCH?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=SDRBatchRequest.d.ts.map