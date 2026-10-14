import * as flatbuffers from 'flatbuffers';
import { ERMResidualStatistics, ERMResidualStatisticsT } from './ERMResidualStatistics.js';
/**
 * A residual request.
 */
export declare class ERMResidualRequest implements flatbuffers.IUnpackableObject<ERMResidualRequestT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): ERMResidualRequest;
    static getRootAsERMResidualRequest(bb: flatbuffers.ByteBuffer, obj?: ERMResidualRequest): ERMResidualRequest;
    static getSizePrefixedRootAsERMResidualRequest(bb: flatbuffers.ByteBuffer, obj?: ERMResidualRequest): ERMResidualRequest;
    NORAD_CAT_ID(): number;
    /**
     * Element-set epoch.
     */
    SET_EPOCH(): string | null;
    SET_EPOCH(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    WINDOWS(index: number, obj?: ERMResidualStatistics): ERMResidualStatistics | null;
    windowsLength(): number;
    STEP_S(): number;
    EPHEMERIS_STREAM(): number;
    LABEL(): string | null;
    LABEL(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    static startERMResidualRequest(builder: flatbuffers.Builder): void;
    static addNoradCatId(builder: flatbuffers.Builder, NORAD_CAT_ID: number): void;
    static addSetEpoch(builder: flatbuffers.Builder, SET_EPOCHOffset: flatbuffers.Offset): void;
    static addWindows(builder: flatbuffers.Builder, WINDOWSOffset: flatbuffers.Offset): void;
    static createWindowsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startWindowsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addStepS(builder: flatbuffers.Builder, STEP_S: number): void;
    static addEphemerisStream(builder: flatbuffers.Builder, EPHEMERIS_STREAM: number): void;
    static addLabel(builder: flatbuffers.Builder, LABELOffset: flatbuffers.Offset): void;
    static endERMResidualRequest(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createERMResidualRequest(builder: flatbuffers.Builder, NORAD_CAT_ID: number, SET_EPOCHOffset: flatbuffers.Offset, WINDOWSOffset: flatbuffers.Offset, STEP_S: number, EPHEMERIS_STREAM: number, LABELOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): ERMResidualRequestT;
    unpackTo(_o: ERMResidualRequestT): void;
}
export declare class ERMResidualRequestT implements flatbuffers.IGeneratedObject {
    NORAD_CAT_ID: number;
    SET_EPOCH: string | Uint8Array | null;
    WINDOWS: (ERMResidualStatisticsT)[];
    STEP_S: number;
    EPHEMERIS_STREAM: number;
    LABEL: string | Uint8Array | null;
    constructor(NORAD_CAT_ID?: number, SET_EPOCH?: string | Uint8Array | null, WINDOWS?: (ERMResidualStatisticsT)[], STEP_S?: number, EPHEMERIS_STREAM?: number, LABEL?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=ERMResidualRequest.d.ts.map