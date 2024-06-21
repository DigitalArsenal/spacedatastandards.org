import * as flatbuffers from 'flatbuffers';
/**
 * Observation Stability Message
 */
export declare class OSM implements flatbuffers.IUnpackableObject<OSMT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): OSM;
    static getRootAsOSM(bb: flatbuffers.ByteBuffer, obj?: OSM): OSM;
    static getSizePrefixedRootAsOSM(bb: flatbuffers.ByteBuffer, obj?: OSM): OSM;
    static bufferHasIdentifier(bb: flatbuffers.ByteBuffer): boolean;
    /**
     * Indicates whether the observation is stable or not
     */
    IS_STABLE(): boolean;
    /**
     * The number of observations
     */
    NUM_OBS(): number;
    /**
     * Unique identifier for the object being observed
     */
    OBJECT_ID(): string | null;
    OBJECT_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Identifier of the sensor
     */
    ID_SENSOR(): string | null;
    ID_SENSOR(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Timestamp of data creation
     */
    PASS_START(): string | null;
    PASS_START(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Duration of the observation pass in seconds
     */
    PASS_DURATION(): number;
    static startOSM(builder: flatbuffers.Builder): void;
    static addIsStable(builder: flatbuffers.Builder, IS_STABLE: boolean): void;
    static addNumObs(builder: flatbuffers.Builder, NUM_OBS: number): void;
    static addObjectId(builder: flatbuffers.Builder, OBJECT_IDOffset: flatbuffers.Offset): void;
    static addIdSensor(builder: flatbuffers.Builder, ID_SENSOROffset: flatbuffers.Offset): void;
    static addPassStart(builder: flatbuffers.Builder, PASS_STARTOffset: flatbuffers.Offset): void;
    static addPassDuration(builder: flatbuffers.Builder, PASS_DURATION: number): void;
    static endOSM(builder: flatbuffers.Builder): flatbuffers.Offset;
    static finishOSMBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static finishSizePrefixedOSMBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static createOSM(builder: flatbuffers.Builder, IS_STABLE: boolean, NUM_OBS: number, OBJECT_IDOffset: flatbuffers.Offset, ID_SENSOROffset: flatbuffers.Offset, PASS_STARTOffset: flatbuffers.Offset, PASS_DURATION: number): flatbuffers.Offset;
    unpack(): OSMT;
    unpackTo(_o: OSMT): void;
}
export declare class OSMT implements flatbuffers.IGeneratedObject {
    IS_STABLE: boolean;
    NUM_OBS: number;
    OBJECT_ID: string | Uint8Array | null;
    ID_SENSOR: string | Uint8Array | null;
    PASS_START: string | Uint8Array | null;
    PASS_DURATION: number;
    constructor(IS_STABLE?: boolean, NUM_OBS?: number, OBJECT_ID?: string | Uint8Array | null, ID_SENSOR?: string | Uint8Array | null, PASS_START?: string | Uint8Array | null, PASS_DURATION?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=OSM.d.ts.map