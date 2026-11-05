import * as flatbuffers from 'flatbuffers';
export declare class SCVTimeGrid implements flatbuffers.IUnpackableObject<SCVTimeGridT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): SCVTimeGrid;
    static getRootAsSCVTimeGrid(bb: flatbuffers.ByteBuffer, obj?: SCVTimeGrid): SCVTimeGrid;
    static getSizePrefixedRootAsSCVTimeGrid(bb: flatbuffers.ByteBuffer, obj?: SCVTimeGrid): SCVTimeGrid;
    EPOCH_ISO(): string | null;
    EPOCH_ISO(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    EPOCH_JULIAN_DATE(): number;
    START_OFFSET_SEC(): number;
    STOP_OFFSET_SEC(): number;
    STEP_SEC(): number;
    GRID_INDEX_START(): number;
    GRID_INDEX_COUNT(): number;
    static startSCVTimeGrid(builder: flatbuffers.Builder): void;
    static addEpochIso(builder: flatbuffers.Builder, EPOCH_ISOOffset: flatbuffers.Offset): void;
    static addEpochJulianDate(builder: flatbuffers.Builder, EPOCH_JULIAN_DATE: number): void;
    static addStartOffsetSec(builder: flatbuffers.Builder, START_OFFSET_SEC: number): void;
    static addStopOffsetSec(builder: flatbuffers.Builder, STOP_OFFSET_SEC: number): void;
    static addStepSec(builder: flatbuffers.Builder, STEP_SEC: number): void;
    static addGridIndexStart(builder: flatbuffers.Builder, GRID_INDEX_START: number): void;
    static addGridIndexCount(builder: flatbuffers.Builder, GRID_INDEX_COUNT: number): void;
    static endSCVTimeGrid(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createSCVTimeGrid(builder: flatbuffers.Builder, EPOCH_ISOOffset: flatbuffers.Offset, EPOCH_JULIAN_DATE: number, START_OFFSET_SEC: number, STOP_OFFSET_SEC: number, STEP_SEC: number, GRID_INDEX_START: number, GRID_INDEX_COUNT: number): flatbuffers.Offset;
    unpack(): SCVTimeGridT;
    unpackTo(_o: SCVTimeGridT): void;
}
export declare class SCVTimeGridT implements flatbuffers.IGeneratedObject {
    EPOCH_ISO: string | Uint8Array | null;
    EPOCH_JULIAN_DATE: number;
    START_OFFSET_SEC: number;
    STOP_OFFSET_SEC: number;
    STEP_SEC: number;
    GRID_INDEX_START: number;
    GRID_INDEX_COUNT: number;
    constructor(EPOCH_ISO?: string | Uint8Array | null, EPOCH_JULIAN_DATE?: number, START_OFFSET_SEC?: number, STOP_OFFSET_SEC?: number, STEP_SEC?: number, GRID_INDEX_START?: number, GRID_INDEX_COUNT?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=SCVTimeGrid.d.ts.map