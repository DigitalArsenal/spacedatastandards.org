import * as flatbuffers from 'flatbuffers';
import { ERMResidualStatistics, ERMResidualStatisticsT } from './ERMResidualStatistics.js';
/**
 * Residuals of one request.
 */
export declare class ERMResidualResult implements flatbuffers.IUnpackableObject<ERMResidualResultT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): ERMResidualResult;
    static getRootAsERMResidualResult(bb: flatbuffers.ByteBuffer, obj?: ERMResidualResult): ERMResidualResult;
    static getSizePrefixedRootAsERMResidualResult(bb: flatbuffers.ByteBuffer, obj?: ERMResidualResult): ERMResidualResult;
    NORAD_CAT_ID(): number;
    SET_EPOCH(): string | null;
    SET_EPOCH(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    LABEL(): string | null;
    LABEL(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    ERROR(): string | null;
    ERROR(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    WINDOWS(index: number, obj?: ERMResidualStatistics): ERMResidualStatistics | null;
    windowsLength(): number;
    static startERMResidualResult(builder: flatbuffers.Builder): void;
    static addNoradCatId(builder: flatbuffers.Builder, NORAD_CAT_ID: number): void;
    static addSetEpoch(builder: flatbuffers.Builder, SET_EPOCHOffset: flatbuffers.Offset): void;
    static addLabel(builder: flatbuffers.Builder, LABELOffset: flatbuffers.Offset): void;
    static addError(builder: flatbuffers.Builder, ERROROffset: flatbuffers.Offset): void;
    static addWindows(builder: flatbuffers.Builder, WINDOWSOffset: flatbuffers.Offset): void;
    static createWindowsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startWindowsVector(builder: flatbuffers.Builder, numElems: number): void;
    static endERMResidualResult(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createERMResidualResult(builder: flatbuffers.Builder, NORAD_CAT_ID: number, SET_EPOCHOffset: flatbuffers.Offset, LABELOffset: flatbuffers.Offset, ERROROffset: flatbuffers.Offset, WINDOWSOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): ERMResidualResultT;
    unpackTo(_o: ERMResidualResultT): void;
}
export declare class ERMResidualResultT implements flatbuffers.IGeneratedObject {
    NORAD_CAT_ID: number;
    SET_EPOCH: string | Uint8Array | null;
    LABEL: string | Uint8Array | null;
    ERROR: string | Uint8Array | null;
    WINDOWS: (ERMResidualStatisticsT)[];
    constructor(NORAD_CAT_ID?: number, SET_EPOCH?: string | Uint8Array | null, LABEL?: string | Uint8Array | null, ERROR?: string | Uint8Array | null, WINDOWS?: (ERMResidualStatisticsT)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=ERMResidualResult.d.ts.map