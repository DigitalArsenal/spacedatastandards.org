import * as flatbuffers from 'flatbuffers';
import { EOP, EOPT } from './EOP.js';
/**
 * Earth orientation for a propagation: one instantaneous row, or daily rows
 * of one series (same SERIES, IAU_CONVENTION and data-set provenance) with
 * strictly increasing MJD that cover the arc. A provider interpolates as
 * published by the series and does not extrapolate.
 */
export declare class PRWEarthOrientation implements flatbuffers.IUnpackableObject<PRWEarthOrientationT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): PRWEarthOrientation;
    static getRootAsPRWEarthOrientation(bb: flatbuffers.ByteBuffer, obj?: PRWEarthOrientation): PRWEarthOrientation;
    static getSizePrefixedRootAsPRWEarthOrientation(bb: flatbuffers.ByteBuffer, obj?: PRWEarthOrientation): PRWEarthOrientation;
    ROWS(index: number, obj?: EOP): EOP | null;
    rowsLength(): number;
    static startPRWEarthOrientation(builder: flatbuffers.Builder): void;
    static addRows(builder: flatbuffers.Builder, ROWSOffset: flatbuffers.Offset): void;
    static createRowsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startRowsVector(builder: flatbuffers.Builder, numElems: number): void;
    static endPRWEarthOrientation(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createPRWEarthOrientation(builder: flatbuffers.Builder, ROWSOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): PRWEarthOrientationT;
    unpackTo(_o: PRWEarthOrientationT): void;
}
export declare class PRWEarthOrientationT implements flatbuffers.IGeneratedObject {
    ROWS: (EOPT)[];
    constructor(ROWS?: (EOPT)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=PRWEarthOrientation.d.ts.map