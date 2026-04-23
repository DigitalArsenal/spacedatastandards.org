import * as flatbuffers from 'flatbuffers';
/**
 * Batch target detection request.
 *
 * Sensor position and orientation are passed inline (not via an arena
 * offset) because they are small and uniform across a batch. The target
 * stream lives at INPUT_OFFSET as a tightly packed array of `targetState`
 * structs from SDR; the output detection stream is written to
 * OUTPUT_OFFSET as a tightly packed array of SDR `detectionResult` structs.
 */
export declare class SNWBatchRequest implements flatbuffers.IUnpackableObject<SNWBatchRequestT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): SNWBatchRequest;
    static getRootAsSNWBatchRequest(bb: flatbuffers.ByteBuffer, obj?: SNWBatchRequest): SNWBatchRequest;
    static getSizePrefixedRootAsSNWBatchRequest(bb: flatbuffers.ByteBuffer, obj?: SNWBatchRequest): SNWBatchRequest;
    /**
     * Sensor-configuration identifier assigned during sensor registration.
     */
    SENSOR_ID(): number;
    /**
     * Sensor position in ECEF (meters).
     */
    SENSOR_POS_X(): number;
    SENSOR_POS_Y(): number;
    SENSOR_POS_Z(): number;
    /**
     * Sensor orientation as a unit quaternion (W, X, Y, Z).
     */
    SENSOR_ORIENT_W(): number;
    SENSOR_ORIENT_X(): number;
    SENSOR_ORIENT_Y(): number;
    SENSOR_ORIENT_Z(): number;
    /**
     * Byte offset in the arena where the targetState[] input stream begins.
     */
    INPUT_OFFSET(): number;
    /**
     * Required start alignment for INPUT_OFFSET (bytes).
     */
    INPUT_ALIGNMENT(): number;
    /**
     * Number of target records at INPUT_OFFSET.
     */
    TARGET_COUNT(): number;
    /**
     * Byte offset in the arena where the detectionResult[] output stream
     * will be written.
     */
    OUTPUT_OFFSET(): number;
    /**
     * Required start alignment for OUTPUT_OFFSET (bytes).
     */
    OUTPUT_ALIGNMENT(): number;
    /**
     * Current time as a Julian date.
     */
    EPOCH(): number;
    static startSNWBatchRequest(builder: flatbuffers.Builder): void;
    static addSensorId(builder: flatbuffers.Builder, SENSOR_ID: number): void;
    static addSensorPosX(builder: flatbuffers.Builder, SENSOR_POS_X: number): void;
    static addSensorPosY(builder: flatbuffers.Builder, SENSOR_POS_Y: number): void;
    static addSensorPosZ(builder: flatbuffers.Builder, SENSOR_POS_Z: number): void;
    static addSensorOrientW(builder: flatbuffers.Builder, SENSOR_ORIENT_W: number): void;
    static addSensorOrientX(builder: flatbuffers.Builder, SENSOR_ORIENT_X: number): void;
    static addSensorOrientY(builder: flatbuffers.Builder, SENSOR_ORIENT_Y: number): void;
    static addSensorOrientZ(builder: flatbuffers.Builder, SENSOR_ORIENT_Z: number): void;
    static addInputOffset(builder: flatbuffers.Builder, INPUT_OFFSET: number): void;
    static addInputAlignment(builder: flatbuffers.Builder, INPUT_ALIGNMENT: number): void;
    static addTargetCount(builder: flatbuffers.Builder, TARGET_COUNT: number): void;
    static addOutputOffset(builder: flatbuffers.Builder, OUTPUT_OFFSET: number): void;
    static addOutputAlignment(builder: flatbuffers.Builder, OUTPUT_ALIGNMENT: number): void;
    static addEpoch(builder: flatbuffers.Builder, EPOCH: number): void;
    static endSNWBatchRequest(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createSNWBatchRequest(builder: flatbuffers.Builder, SENSOR_ID: number, SENSOR_POS_X: number, SENSOR_POS_Y: number, SENSOR_POS_Z: number, SENSOR_ORIENT_W: number, SENSOR_ORIENT_X: number, SENSOR_ORIENT_Y: number, SENSOR_ORIENT_Z: number, INPUT_OFFSET: number, INPUT_ALIGNMENT: number, TARGET_COUNT: number, OUTPUT_OFFSET: number, OUTPUT_ALIGNMENT: number, EPOCH: number): flatbuffers.Offset;
    unpack(): SNWBatchRequestT;
    unpackTo(_o: SNWBatchRequestT): void;
}
export declare class SNWBatchRequestT implements flatbuffers.IGeneratedObject {
    SENSOR_ID: number;
    SENSOR_POS_X: number;
    SENSOR_POS_Y: number;
    SENSOR_POS_Z: number;
    SENSOR_ORIENT_W: number;
    SENSOR_ORIENT_X: number;
    SENSOR_ORIENT_Y: number;
    SENSOR_ORIENT_Z: number;
    INPUT_OFFSET: number;
    INPUT_ALIGNMENT: number;
    TARGET_COUNT: number;
    OUTPUT_OFFSET: number;
    OUTPUT_ALIGNMENT: number;
    EPOCH: number;
    constructor(SENSOR_ID?: number, SENSOR_POS_X?: number, SENSOR_POS_Y?: number, SENSOR_POS_Z?: number, SENSOR_ORIENT_W?: number, SENSOR_ORIENT_X?: number, SENSOR_ORIENT_Y?: number, SENSOR_ORIENT_Z?: number, INPUT_OFFSET?: number, INPUT_ALIGNMENT?: number, TARGET_COUNT?: number, OUTPUT_OFFSET?: number, OUTPUT_ALIGNMENT?: number, EPOCH?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=SNWBatchRequest.d.ts.map