import * as flatbuffers from 'flatbuffers';
/**
 * Sensor Systems
 */
export declare class SNR implements flatbuffers.IUnpackableObject<SNRT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): SNR;
    static getRootAsSNR(bb: flatbuffers.ByteBuffer, obj?: SNR): SNR;
    static getSizePrefixedRootAsSNR(bb: flatbuffers.ByteBuffer, obj?: SNR): SNR;
    static bufferHasIdentifier(bb: flatbuffers.ByteBuffer): boolean;
    TYPE(): number;
    MODE(): number;
    RESERVED1(): number;
    MAX_RANGE(): number;
    MIN_RANGE(): number;
    FOV_AZIMUTH(): number;
    FOV_ELEVATION(): number;
    ANGULAR_RESOLUTION(): number;
    RANGE_RESOLUTION(): number;
    UPDATE_RATE(): number;
    DETECTION_THRESHOLD(): number;
    AZIMUTH_SCAN_RATE(): number;
    ELEVATION_SCAN_RATE(): number;
    POWER(): number;
    FREQUENCY(): number;
    RESERVED(index: number): number | null;
    reservedLength(): number;
    reservedArray(): Uint8Array | null;
    static startSNR(builder: flatbuffers.Builder): void;
    static addType(builder: flatbuffers.Builder, TYPE: number): void;
    static addMode(builder: flatbuffers.Builder, MODE: number): void;
    static addReserved1(builder: flatbuffers.Builder, RESERVED1: number): void;
    static addMaxRange(builder: flatbuffers.Builder, MAX_RANGE: number): void;
    static addMinRange(builder: flatbuffers.Builder, MIN_RANGE: number): void;
    static addFovAzimuth(builder: flatbuffers.Builder, FOV_AZIMUTH: number): void;
    static addFovElevation(builder: flatbuffers.Builder, FOV_ELEVATION: number): void;
    static addAngularResolution(builder: flatbuffers.Builder, ANGULAR_RESOLUTION: number): void;
    static addRangeResolution(builder: flatbuffers.Builder, RANGE_RESOLUTION: number): void;
    static addUpdateRate(builder: flatbuffers.Builder, UPDATE_RATE: number): void;
    static addDetectionThreshold(builder: flatbuffers.Builder, DETECTION_THRESHOLD: number): void;
    static addAzimuthScanRate(builder: flatbuffers.Builder, AZIMUTH_SCAN_RATE: number): void;
    static addElevationScanRate(builder: flatbuffers.Builder, ELEVATION_SCAN_RATE: number): void;
    static addPower(builder: flatbuffers.Builder, POWER: number): void;
    static addFrequency(builder: flatbuffers.Builder, FREQUENCY: number): void;
    static addReserved(builder: flatbuffers.Builder, RESERVEDOffset: flatbuffers.Offset): void;
    static createReservedVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startReservedVector(builder: flatbuffers.Builder, numElems: number): void;
    static endSNR(builder: flatbuffers.Builder): flatbuffers.Offset;
    static finishSNRBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static finishSizePrefixedSNRBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static createSNR(builder: flatbuffers.Builder, TYPE: number, MODE: number, RESERVED1: number, MAX_RANGE: number, MIN_RANGE: number, FOV_AZIMUTH: number, FOV_ELEVATION: number, ANGULAR_RESOLUTION: number, RANGE_RESOLUTION: number, UPDATE_RATE: number, DETECTION_THRESHOLD: number, AZIMUTH_SCAN_RATE: number, ELEVATION_SCAN_RATE: number, POWER: number, FREQUENCY: number, RESERVEDOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): SNRT;
    unpackTo(_o: SNRT): void;
}
export declare class SNRT implements flatbuffers.IGeneratedObject {
    TYPE: number;
    MODE: number;
    RESERVED1: number;
    MAX_RANGE: number;
    MIN_RANGE: number;
    FOV_AZIMUTH: number;
    FOV_ELEVATION: number;
    ANGULAR_RESOLUTION: number;
    RANGE_RESOLUTION: number;
    UPDATE_RATE: number;
    DETECTION_THRESHOLD: number;
    AZIMUTH_SCAN_RATE: number;
    ELEVATION_SCAN_RATE: number;
    POWER: number;
    FREQUENCY: number;
    RESERVED: (number)[];
    constructor(TYPE?: number, MODE?: number, RESERVED1?: number, MAX_RANGE?: number, MIN_RANGE?: number, FOV_AZIMUTH?: number, FOV_ELEVATION?: number, ANGULAR_RESOLUTION?: number, RANGE_RESOLUTION?: number, UPDATE_RATE?: number, DETECTION_THRESHOLD?: number, AZIMUTH_SCAN_RATE?: number, ELEVATION_SCAN_RATE?: number, POWER?: number, FREQUENCY?: number, RESERVED?: (number)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=SNR.d.ts.map