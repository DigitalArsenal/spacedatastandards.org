import * as flatbuffers from 'flatbuffers';
import { SPW, SPWT } from './SPW.js';
/**
 * Daily space weather for a propagation, as published (`SPW`), with strictly
 * increasing DATE covering the arc plus what the atmosphere model reads
 * before it (NRLMSISE-00 reads the previous day's F10.7). A provider derives
 * its model inputs from these rows and reports which ones it reads.
 */
export declare class PRWSpaceWeatherTable implements flatbuffers.IUnpackableObject<PRWSpaceWeatherTableT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): PRWSpaceWeatherTable;
    static getRootAsPRWSpaceWeatherTable(bb: flatbuffers.ByteBuffer, obj?: PRWSpaceWeatherTable): PRWSpaceWeatherTable;
    static getSizePrefixedRootAsPRWSpaceWeatherTable(bb: flatbuffers.ByteBuffer, obj?: PRWSpaceWeatherTable): PRWSpaceWeatherTable;
    ROWS(index: number, obj?: SPW): SPW | null;
    rowsLength(): number;
    static startPRWSpaceWeatherTable(builder: flatbuffers.Builder): void;
    static addRows(builder: flatbuffers.Builder, ROWSOffset: flatbuffers.Offset): void;
    static createRowsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startRowsVector(builder: flatbuffers.Builder, numElems: number): void;
    static endPRWSpaceWeatherTable(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createPRWSpaceWeatherTable(builder: flatbuffers.Builder, ROWSOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): PRWSpaceWeatherTableT;
    unpackTo(_o: PRWSpaceWeatherTableT): void;
}
export declare class PRWSpaceWeatherTableT implements flatbuffers.IGeneratedObject {
    ROWS: (SPWT)[];
    constructor(ROWS?: (SPWT)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=PRWSpaceWeatherTable.d.ts.map