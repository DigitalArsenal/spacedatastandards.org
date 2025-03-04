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
    isStable(): boolean;
    /**
     * The number of observations
     */
    numObs(): number;
    /**
     * Unique identifier for the object being observed
     */
    objectId(): string | null;
    objectId(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Identifier of the sensor
     */
    idSensor(): string | null;
    idSensor(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Timestamp of data creation
     */
    passStart(): string | null;
    passStart(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Duration of the observation pass in seconds
     */
    passDuration(): number;
    static startOSM(builder: flatbuffers.Builder): void;
    static addIsStable(builder: flatbuffers.Builder, isStable: boolean): void;
    static addNumObs(builder: flatbuffers.Builder, numObs: number): void;
    static addObjectId(builder: flatbuffers.Builder, objectIdOffset: flatbuffers.Offset): void;
    static addIdSensor(builder: flatbuffers.Builder, idSensorOffset: flatbuffers.Offset): void;
    static addPassStart(builder: flatbuffers.Builder, passStartOffset: flatbuffers.Offset): void;
    static addPassDuration(builder: flatbuffers.Builder, passDuration: number): void;
    static endOSM(builder: flatbuffers.Builder): flatbuffers.Offset;
    static finishOSMBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static finishSizePrefixedOSMBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static createOSM(builder: flatbuffers.Builder, isStable: boolean, numObs: number, objectIdOffset: flatbuffers.Offset, idSensorOffset: flatbuffers.Offset, passStartOffset: flatbuffers.Offset, passDuration: number): flatbuffers.Offset;
    unpack(): OSMT;
    unpackTo(_o: OSMT): void;
}
export declare class OSMT implements flatbuffers.IGeneratedObject {
    isStable: boolean;
    numObs: number;
    objectId: string | Uint8Array | null;
    idSensor: string | Uint8Array | null;
    passStart: string | Uint8Array | null;
    passDuration: number;
    constructor(isStable?: boolean, numObs?: number, objectId?: string | Uint8Array | null, idSensor?: string | Uint8Array | null, passStart?: string | Uint8Array | null, passDuration?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=osm.d.ts.map