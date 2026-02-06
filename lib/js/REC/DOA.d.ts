import * as flatbuffers from 'flatbuffers';
import { doaCollectionMode } from './doaCollectionMode.js';
/**
 * Difference of Arrival Geolocation
 */
export declare class DOA implements flatbuffers.IUnpackableObject<DOAT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): DOA;
    static getRootAsDOA(bb: flatbuffers.ByteBuffer, obj?: DOA): DOA;
    static getSizePrefixedRootAsDOA(bb: flatbuffers.ByteBuffer, obj?: DOA): DOA;
    static bufferHasIdentifier(bb: flatbuffers.ByteBuffer): boolean;
    /**
     * Unique identifier
     */
    ID(): string | null;
    ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Observation time (ISO 8601)
     */
    OB_TIME(): string | null;
    OB_TIME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Satellite catalog number
     */
    SAT_NO(): number;
    /**
     * International designator
     */
    ORIG_OBJECT_ID(): string | null;
    ORIG_OBJECT_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * On-orbit reference
     */
    ON_ORBIT(): string | null;
    ON_ORBIT(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * True if uncorrelated target
     */
    UCT(): boolean;
    /**
     * Task identifier
     */
    TASK_ID(): string | null;
    TASK_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Transaction identifier
     */
    TRANSACTION_ID(): string | null;
    TRANSACTION_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Collection mode
     */
    COLLECTION_MODE(): doaCollectionMode;
    /**
     * Sensor 1 identifier
     */
    ID_SENSOR1(): string | null;
    ID_SENSOR1(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Sensor 1 original identifier
     */
    ORIG_SENSOR_ID1(): string | null;
    ORIG_SENSOR_ID1(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Sensor 1 latitude (degrees)
     */
    SENLAT(): number;
    /**
     * Sensor 1 longitude (degrees)
     */
    SENLON(): number;
    /**
     * Sensor 1 altitude (km)
     */
    SENALT(): number;
    /**
     * Sensor 1 processing delay (seconds)
     */
    SENSOR1_DELAY(): number;
    /**
     * Sensor 2 identifier
     */
    ID_SENSOR2(): string | null;
    ID_SENSOR2(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Sensor 2 original identifier
     */
    ORIG_SENSOR_ID2(): string | null;
    ORIG_SENSOR_ID2(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Sensor 2 latitude (degrees)
     */
    SEN2LAT(): number;
    /**
     * Sensor 2 longitude (degrees)
     */
    SEN2LON(): number;
    /**
     * Sensor 2 altitude (km)
     */
    SEN2ALT(): number;
    /**
     * Sensor 2 processing delay (seconds)
     */
    SENSOR2_DELAY(): number;
    /**
     * Measured frequency (MHz)
     */
    FREQUENCY(): number;
    /**
     * Measurement bandwidth (MHz)
     */
    BANDWIDTH(): number;
    /**
     * Signal-to-noise ratio (dB)
     */
    SNR(): number;
    /**
     * Differential range (km)
     */
    DELTA_RANGE(): number;
    /**
     * Differential range uncertainty (km, 1-sigma)
     */
    DELTA_RANGE_UNC(): number;
    /**
     * Differential range rate (km/s)
     */
    DELTA_RANGE_RATE(): number;
    /**
     * Differential range rate uncertainty (km/s, 1-sigma)
     */
    DELTA_RANGE_RATE_UNC(): number;
    /**
     * Time difference of arrival (seconds)
     */
    TDOA(): number;
    /**
     * TDOA uncertainty (seconds, 1-sigma)
     */
    TDOA_UNC(): number;
    /**
     * Frequency difference of arrival (Hz)
     */
    FDOA(): number;
    /**
     * FDOA uncertainty (Hz, 1-sigma)
     */
    FDOA_UNC(): number;
    /**
     * Reference to raw data file
     */
    RAW_FILE_URI(): string | null;
    RAW_FILE_URI(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Event descriptor
     */
    DESCRIPTOR(): string | null;
    DESCRIPTOR(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Associated tags
     */
    TAGS(index: number): string;
    TAGS(index: number, optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    tagsLength(): number;
    static startDOA(builder: flatbuffers.Builder): void;
    static addId(builder: flatbuffers.Builder, IDOffset: flatbuffers.Offset): void;
    static addObTime(builder: flatbuffers.Builder, OB_TIMEOffset: flatbuffers.Offset): void;
    static addSatNo(builder: flatbuffers.Builder, SAT_NO: number): void;
    static addOrigObjectId(builder: flatbuffers.Builder, ORIG_OBJECT_IDOffset: flatbuffers.Offset): void;
    static addOnOrbit(builder: flatbuffers.Builder, ON_ORBITOffset: flatbuffers.Offset): void;
    static addUct(builder: flatbuffers.Builder, UCT: boolean): void;
    static addTaskId(builder: flatbuffers.Builder, TASK_IDOffset: flatbuffers.Offset): void;
    static addTransactionId(builder: flatbuffers.Builder, TRANSACTION_IDOffset: flatbuffers.Offset): void;
    static addCollectionMode(builder: flatbuffers.Builder, COLLECTION_MODE: doaCollectionMode): void;
    static addIdSensor1(builder: flatbuffers.Builder, ID_SENSOR1Offset: flatbuffers.Offset): void;
    static addOrigSensorId1(builder: flatbuffers.Builder, ORIG_SENSOR_ID1Offset: flatbuffers.Offset): void;
    static addSenlat(builder: flatbuffers.Builder, SENLAT: number): void;
    static addSenlon(builder: flatbuffers.Builder, SENLON: number): void;
    static addSenalt(builder: flatbuffers.Builder, SENALT: number): void;
    static addSensor1Delay(builder: flatbuffers.Builder, SENSOR1_DELAY: number): void;
    static addIdSensor2(builder: flatbuffers.Builder, ID_SENSOR2Offset: flatbuffers.Offset): void;
    static addOrigSensorId2(builder: flatbuffers.Builder, ORIG_SENSOR_ID2Offset: flatbuffers.Offset): void;
    static addSen2Lat(builder: flatbuffers.Builder, SEN2LAT: number): void;
    static addSen2Lon(builder: flatbuffers.Builder, SEN2LON: number): void;
    static addSen2Alt(builder: flatbuffers.Builder, SEN2ALT: number): void;
    static addSensor2Delay(builder: flatbuffers.Builder, SENSOR2_DELAY: number): void;
    static addFrequency(builder: flatbuffers.Builder, FREQUENCY: number): void;
    static addBandwidth(builder: flatbuffers.Builder, BANDWIDTH: number): void;
    static addSnr(builder: flatbuffers.Builder, SNR: number): void;
    static addDeltaRange(builder: flatbuffers.Builder, DELTA_RANGE: number): void;
    static addDeltaRangeUnc(builder: flatbuffers.Builder, DELTA_RANGE_UNC: number): void;
    static addDeltaRangeRate(builder: flatbuffers.Builder, DELTA_RANGE_RATE: number): void;
    static addDeltaRangeRateUnc(builder: flatbuffers.Builder, DELTA_RANGE_RATE_UNC: number): void;
    static addTdoa(builder: flatbuffers.Builder, TDOA: number): void;
    static addTdoaUnc(builder: flatbuffers.Builder, TDOA_UNC: number): void;
    static addFdoa(builder: flatbuffers.Builder, FDOA: number): void;
    static addFdoaUnc(builder: flatbuffers.Builder, FDOA_UNC: number): void;
    static addRawFileUri(builder: flatbuffers.Builder, RAW_FILE_URIOffset: flatbuffers.Offset): void;
    static addDescriptor(builder: flatbuffers.Builder, DESCRIPTOROffset: flatbuffers.Offset): void;
    static addTags(builder: flatbuffers.Builder, TAGSOffset: flatbuffers.Offset): void;
    static createTagsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startTagsVector(builder: flatbuffers.Builder, numElems: number): void;
    static endDOA(builder: flatbuffers.Builder): flatbuffers.Offset;
    static finishDOABuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static finishSizePrefixedDOABuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static createDOA(builder: flatbuffers.Builder, IDOffset: flatbuffers.Offset, OB_TIMEOffset: flatbuffers.Offset, SAT_NO: number, ORIG_OBJECT_IDOffset: flatbuffers.Offset, ON_ORBITOffset: flatbuffers.Offset, UCT: boolean, TASK_IDOffset: flatbuffers.Offset, TRANSACTION_IDOffset: flatbuffers.Offset, COLLECTION_MODE: doaCollectionMode, ID_SENSOR1Offset: flatbuffers.Offset, ORIG_SENSOR_ID1Offset: flatbuffers.Offset, SENLAT: number, SENLON: number, SENALT: number, SENSOR1_DELAY: number, ID_SENSOR2Offset: flatbuffers.Offset, ORIG_SENSOR_ID2Offset: flatbuffers.Offset, SEN2LAT: number, SEN2LON: number, SEN2ALT: number, SENSOR2_DELAY: number, FREQUENCY: number, BANDWIDTH: number, SNR: number, DELTA_RANGE: number, DELTA_RANGE_UNC: number, DELTA_RANGE_RATE: number, DELTA_RANGE_RATE_UNC: number, TDOA: number, TDOA_UNC: number, FDOA: number, FDOA_UNC: number, RAW_FILE_URIOffset: flatbuffers.Offset, DESCRIPTOROffset: flatbuffers.Offset, TAGSOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): DOAT;
    unpackTo(_o: DOAT): void;
}
export declare class DOAT implements flatbuffers.IGeneratedObject {
    ID: string | Uint8Array | null;
    OB_TIME: string | Uint8Array | null;
    SAT_NO: number;
    ORIG_OBJECT_ID: string | Uint8Array | null;
    ON_ORBIT: string | Uint8Array | null;
    UCT: boolean;
    TASK_ID: string | Uint8Array | null;
    TRANSACTION_ID: string | Uint8Array | null;
    COLLECTION_MODE: doaCollectionMode;
    ID_SENSOR1: string | Uint8Array | null;
    ORIG_SENSOR_ID1: string | Uint8Array | null;
    SENLAT: number;
    SENLON: number;
    SENALT: number;
    SENSOR1_DELAY: number;
    ID_SENSOR2: string | Uint8Array | null;
    ORIG_SENSOR_ID2: string | Uint8Array | null;
    SEN2LAT: number;
    SEN2LON: number;
    SEN2ALT: number;
    SENSOR2_DELAY: number;
    FREQUENCY: number;
    BANDWIDTH: number;
    SNR: number;
    DELTA_RANGE: number;
    DELTA_RANGE_UNC: number;
    DELTA_RANGE_RATE: number;
    DELTA_RANGE_RATE_UNC: number;
    TDOA: number;
    TDOA_UNC: number;
    FDOA: number;
    FDOA_UNC: number;
    RAW_FILE_URI: string | Uint8Array | null;
    DESCRIPTOR: string | Uint8Array | null;
    TAGS: (string)[];
    constructor(ID?: string | Uint8Array | null, OB_TIME?: string | Uint8Array | null, SAT_NO?: number, ORIG_OBJECT_ID?: string | Uint8Array | null, ON_ORBIT?: string | Uint8Array | null, UCT?: boolean, TASK_ID?: string | Uint8Array | null, TRANSACTION_ID?: string | Uint8Array | null, COLLECTION_MODE?: doaCollectionMode, ID_SENSOR1?: string | Uint8Array | null, ORIG_SENSOR_ID1?: string | Uint8Array | null, SENLAT?: number, SENLON?: number, SENALT?: number, SENSOR1_DELAY?: number, ID_SENSOR2?: string | Uint8Array | null, ORIG_SENSOR_ID2?: string | Uint8Array | null, SEN2LAT?: number, SEN2LON?: number, SEN2ALT?: number, SENSOR2_DELAY?: number, FREQUENCY?: number, BANDWIDTH?: number, SNR?: number, DELTA_RANGE?: number, DELTA_RANGE_UNC?: number, DELTA_RANGE_RATE?: number, DELTA_RANGE_RATE_UNC?: number, TDOA?: number, TDOA_UNC?: number, FDOA?: number, FDOA_UNC?: number, RAW_FILE_URI?: string | Uint8Array | null, DESCRIPTOR?: string | Uint8Array | null, TAGS?: (string)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=DOA.d.ts.map