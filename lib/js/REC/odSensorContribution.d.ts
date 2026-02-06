import * as flatbuffers from 'flatbuffers';
/**
 * Sensor contribution to an orbit determination solution
 */
export declare class odSensorContribution implements flatbuffers.IUnpackableObject<odSensorContributionT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): odSensorContribution;
    static getRootAsodSensorContribution(bb: flatbuffers.ByteBuffer, obj?: odSensorContribution): odSensorContribution;
    static getSizePrefixedRootAsodSensorContribution(bb: flatbuffers.ByteBuffer, obj?: odSensorContribution): odSensorContribution;
    /**
     * Sensor identifier
     */
    SENSOR_ID(): string | null;
    SENSOR_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Original sensor identifier
     */
    ORIG_SENSOR_ID(): string | null;
    ORIG_SENSOR_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Number of accepted observations from this sensor
     */
    NUM_ACCEPTED(): number;
    /**
     * Number of rejected observations from this sensor
     */
    NUM_REJECTED(): number;
    /**
     * Weighted RMS for this sensor's observations
     */
    WRMS(): number;
    /**
     * Observation types from this sensor
     */
    OB_TYPES(index: number): string;
    OB_TYPES(index: number, optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    obTypesLength(): number;
    static startodSensorContribution(builder: flatbuffers.Builder): void;
    static addSensorId(builder: flatbuffers.Builder, SENSOR_IDOffset: flatbuffers.Offset): void;
    static addOrigSensorId(builder: flatbuffers.Builder, ORIG_SENSOR_IDOffset: flatbuffers.Offset): void;
    static addNumAccepted(builder: flatbuffers.Builder, NUM_ACCEPTED: number): void;
    static addNumRejected(builder: flatbuffers.Builder, NUM_REJECTED: number): void;
    static addWrms(builder: flatbuffers.Builder, WRMS: number): void;
    static addObTypes(builder: flatbuffers.Builder, OB_TYPESOffset: flatbuffers.Offset): void;
    static createObTypesVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startObTypesVector(builder: flatbuffers.Builder, numElems: number): void;
    static endodSensorContribution(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createodSensorContribution(builder: flatbuffers.Builder, SENSOR_IDOffset: flatbuffers.Offset, ORIG_SENSOR_IDOffset: flatbuffers.Offset, NUM_ACCEPTED: number, NUM_REJECTED: number, WRMS: number, OB_TYPESOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): odSensorContributionT;
    unpackTo(_o: odSensorContributionT): void;
}
export declare class odSensorContributionT implements flatbuffers.IGeneratedObject {
    SENSOR_ID: string | Uint8Array | null;
    ORIG_SENSOR_ID: string | Uint8Array | null;
    NUM_ACCEPTED: number;
    NUM_REJECTED: number;
    WRMS: number;
    OB_TYPES: (string)[];
    constructor(SENSOR_ID?: string | Uint8Array | null, ORIG_SENSOR_ID?: string | Uint8Array | null, NUM_ACCEPTED?: number, NUM_REJECTED?: number, WRMS?: number, OB_TYPES?: (string)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=odSensorContribution.d.ts.map