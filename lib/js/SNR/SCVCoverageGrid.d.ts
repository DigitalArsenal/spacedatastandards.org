import * as flatbuffers from 'flatbuffers';
import { scvCoordinateFrame } from './scvCoordinateFrame.js';
import { scvGeometryDomain } from './scvGeometryDomain.js';
export declare class SCVCoverageGrid implements flatbuffers.IUnpackableObject<SCVCoverageGridT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): SCVCoverageGrid;
    static getRootAsSCVCoverageGrid(bb: flatbuffers.ByteBuffer, obj?: SCVCoverageGrid): SCVCoverageGrid;
    static getSizePrefixedRootAsSCVCoverageGrid(bb: flatbuffers.ByteBuffer, obj?: SCVCoverageGrid): SCVCoverageGrid;
    GRID_ID(): string | null;
    GRID_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    DOMAIN(): scvGeometryDomain;
    FRAME(): scvCoordinateFrame;
    MIN_LAT_DEG(): number;
    MAX_LAT_DEG(): number;
    MIN_LON_DEG(): number;
    MAX_LON_DEG(): number;
    LAT_STEP_DEG(): number;
    LON_STEP_DEG(): number;
    ALTITUDE_M(): number;
    CELL_COUNT(): number;
    RESOLUTION_DEG(): number;
    static startSCVCoverageGrid(builder: flatbuffers.Builder): void;
    static addGridId(builder: flatbuffers.Builder, GRID_IDOffset: flatbuffers.Offset): void;
    static addDomain(builder: flatbuffers.Builder, DOMAIN: scvGeometryDomain): void;
    static addFrame(builder: flatbuffers.Builder, FRAME: scvCoordinateFrame): void;
    static addMinLatDeg(builder: flatbuffers.Builder, MIN_LAT_DEG: number): void;
    static addMaxLatDeg(builder: flatbuffers.Builder, MAX_LAT_DEG: number): void;
    static addMinLonDeg(builder: flatbuffers.Builder, MIN_LON_DEG: number): void;
    static addMaxLonDeg(builder: flatbuffers.Builder, MAX_LON_DEG: number): void;
    static addLatStepDeg(builder: flatbuffers.Builder, LAT_STEP_DEG: number): void;
    static addLonStepDeg(builder: flatbuffers.Builder, LON_STEP_DEG: number): void;
    static addAltitudeM(builder: flatbuffers.Builder, ALTITUDE_M: number): void;
    static addCellCount(builder: flatbuffers.Builder, CELL_COUNT: number): void;
    static addResolutionDeg(builder: flatbuffers.Builder, RESOLUTION_DEG: number): void;
    static endSCVCoverageGrid(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createSCVCoverageGrid(builder: flatbuffers.Builder, GRID_IDOffset: flatbuffers.Offset, DOMAIN: scvGeometryDomain, FRAME: scvCoordinateFrame, MIN_LAT_DEG: number, MAX_LAT_DEG: number, MIN_LON_DEG: number, MAX_LON_DEG: number, LAT_STEP_DEG: number, LON_STEP_DEG: number, ALTITUDE_M: number, CELL_COUNT: number, RESOLUTION_DEG: number): flatbuffers.Offset;
    unpack(): SCVCoverageGridT;
    unpackTo(_o: SCVCoverageGridT): void;
}
export declare class SCVCoverageGridT implements flatbuffers.IGeneratedObject {
    GRID_ID: string | Uint8Array | null;
    DOMAIN: scvGeometryDomain;
    FRAME: scvCoordinateFrame;
    MIN_LAT_DEG: number;
    MAX_LAT_DEG: number;
    MIN_LON_DEG: number;
    MAX_LON_DEG: number;
    LAT_STEP_DEG: number;
    LON_STEP_DEG: number;
    ALTITUDE_M: number;
    CELL_COUNT: number;
    RESOLUTION_DEG: number;
    constructor(GRID_ID?: string | Uint8Array | null, DOMAIN?: scvGeometryDomain, FRAME?: scvCoordinateFrame, MIN_LAT_DEG?: number, MAX_LAT_DEG?: number, MIN_LON_DEG?: number, MAX_LON_DEG?: number, LAT_STEP_DEG?: number, LON_STEP_DEG?: number, ALTITUDE_M?: number, CELL_COUNT?: number, RESOLUTION_DEG?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=SCVCoverageGrid.d.ts.map