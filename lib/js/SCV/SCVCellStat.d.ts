import * as flatbuffers from 'flatbuffers';
export declare class SCVCellStat implements flatbuffers.IUnpackableObject<SCVCellStatT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): SCVCellStat;
    static getRootAsSCVCellStat(bb: flatbuffers.ByteBuffer, obj?: SCVCellStat): SCVCellStat;
    static getSizePrefixedRootAsSCVCellStat(bb: flatbuffers.ByteBuffer, obj?: SCVCellStat): SCVCellStat;
    CELL_ID(): number;
    LATITUDE_DEG(): number;
    LONGITUDE_DEG(): number;
    ALTITUDE_M(): number;
    COVERED_WINDOW_COUNT(): number;
    TOTAL_WINDOW_COUNT(): number;
    COVERAGE_FRACTION(): number;
    MEAN_REVISIT_SEC(): number;
    MAX_GAP_SEC(): number;
    MEAN_GAP_SEC(): number;
    REDUNDANCY(): number;
    SENSOR_IDS(index: number): number | null;
    sensorIdsLength(): number;
    sensorIdsArray(): Uint32Array | null;
    SENSOR_BITSET_WORDS(index: number): bigint | null;
    sensorBitsetWordsLength(): number;
    static startSCVCellStat(builder: flatbuffers.Builder): void;
    static addCellId(builder: flatbuffers.Builder, CELL_ID: number): void;
    static addLatitudeDeg(builder: flatbuffers.Builder, LATITUDE_DEG: number): void;
    static addLongitudeDeg(builder: flatbuffers.Builder, LONGITUDE_DEG: number): void;
    static addAltitudeM(builder: flatbuffers.Builder, ALTITUDE_M: number): void;
    static addCoveredWindowCount(builder: flatbuffers.Builder, COVERED_WINDOW_COUNT: number): void;
    static addTotalWindowCount(builder: flatbuffers.Builder, TOTAL_WINDOW_COUNT: number): void;
    static addCoverageFraction(builder: flatbuffers.Builder, COVERAGE_FRACTION: number): void;
    static addMeanRevisitSec(builder: flatbuffers.Builder, MEAN_REVISIT_SEC: number): void;
    static addMaxGapSec(builder: flatbuffers.Builder, MAX_GAP_SEC: number): void;
    static addMeanGapSec(builder: flatbuffers.Builder, MEAN_GAP_SEC: number): void;
    static addRedundancy(builder: flatbuffers.Builder, REDUNDANCY: number): void;
    static addSensorIds(builder: flatbuffers.Builder, SENSOR_IDSOffset: flatbuffers.Offset): void;
    static createSensorIdsVector(builder: flatbuffers.Builder, data: number[] | Uint32Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createSensorIdsVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startSensorIdsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addSensorBitsetWords(builder: flatbuffers.Builder, SENSOR_BITSET_WORDSOffset: flatbuffers.Offset): void;
    static createSensorBitsetWordsVector(builder: flatbuffers.Builder, data: bigint[]): flatbuffers.Offset;
    static startSensorBitsetWordsVector(builder: flatbuffers.Builder, numElems: number): void;
    static endSCVCellStat(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createSCVCellStat(builder: flatbuffers.Builder, CELL_ID: number, LATITUDE_DEG: number, LONGITUDE_DEG: number, ALTITUDE_M: number, COVERED_WINDOW_COUNT: number, TOTAL_WINDOW_COUNT: number, COVERAGE_FRACTION: number, MEAN_REVISIT_SEC: number, MAX_GAP_SEC: number, MEAN_GAP_SEC: number, REDUNDANCY: number, SENSOR_IDSOffset: flatbuffers.Offset, SENSOR_BITSET_WORDSOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): SCVCellStatT;
    unpackTo(_o: SCVCellStatT): void;
}
export declare class SCVCellStatT implements flatbuffers.IGeneratedObject {
    CELL_ID: number;
    LATITUDE_DEG: number;
    LONGITUDE_DEG: number;
    ALTITUDE_M: number;
    COVERED_WINDOW_COUNT: number;
    TOTAL_WINDOW_COUNT: number;
    COVERAGE_FRACTION: number;
    MEAN_REVISIT_SEC: number;
    MAX_GAP_SEC: number;
    MEAN_GAP_SEC: number;
    REDUNDANCY: number;
    SENSOR_IDS: (number)[];
    SENSOR_BITSET_WORDS: (bigint)[];
    constructor(CELL_ID?: number, LATITUDE_DEG?: number, LONGITUDE_DEG?: number, ALTITUDE_M?: number, COVERED_WINDOW_COUNT?: number, TOTAL_WINDOW_COUNT?: number, COVERAGE_FRACTION?: number, MEAN_REVISIT_SEC?: number, MAX_GAP_SEC?: number, MEAN_GAP_SEC?: number, REDUNDANCY?: number, SENSOR_IDS?: (number)[], SENSOR_BITSET_WORDS?: (bigint)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=SCVCellStat.d.ts.map