import * as flatbuffers from 'flatbuffers';
import { DataType } from './DataType.js';
/**
 * Earth Orientation Parameters
 */
export declare class EOP implements flatbuffers.IUnpackableObject<EOPT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): EOP;
    static getRootAsEOP(bb: flatbuffers.ByteBuffer, obj?: EOP): EOP;
    static getSizePrefixedRootAsEOP(bb: flatbuffers.ByteBuffer, obj?: EOP): EOP;
    static bufferHasIdentifier(bb: flatbuffers.ByteBuffer): boolean;
    /**
     * Date in ISO 8601 format
     */
    DATE(): string | null;
    DATE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Modified Julian Date
     */
    MJD(): number;
    /**
     * x pole coordinate in arcseconds
     */
    X(): number;
    /**
     * y pole coordinate in arcseconds
     */
    Y(): number;
    /**
     * UT1-UTC in seconds
     */
    UT1_MINUS_UTC(): number;
    /**
     * Length of Day correction in seconds
     */
    LOD(): number;
    /**
     * Nutation correction in longitude (δΔψ) in arcseconds
     */
    DPSI(): number;
    /**
     * Nutation correction in obliquity (δΔε) in arcseconds
     */
    DEPS(): number;
    /**
     * Celestial pole offset in x (δX) in arcseconds
     */
    DX(): number;
    /**
     * Celestial pole offset in y (δY) in arcseconds
     */
    DY(): number;
    /**
     * Delta Atomic Time (TAI-UTC) in seconds
     */
    DAT(): number;
    /**
     * Data type (O = Observed, P = Predicted)
     */
    DATA_TYPE(): DataType;
    static startEOP(builder: flatbuffers.Builder): void;
    static addDate(builder: flatbuffers.Builder, DATEOffset: flatbuffers.Offset): void;
    static addMjd(builder: flatbuffers.Builder, MJD: number): void;
    static addX(builder: flatbuffers.Builder, X: number): void;
    static addY(builder: flatbuffers.Builder, Y: number): void;
    static addUt1MinusUtc(builder: flatbuffers.Builder, UT1_MINUS_UTC: number): void;
    static addLod(builder: flatbuffers.Builder, LOD: number): void;
    static addDpsi(builder: flatbuffers.Builder, DPSI: number): void;
    static addDeps(builder: flatbuffers.Builder, DEPS: number): void;
    static addDx(builder: flatbuffers.Builder, DX: number): void;
    static addDy(builder: flatbuffers.Builder, DY: number): void;
    static addDat(builder: flatbuffers.Builder, DAT: number): void;
    static addDataType(builder: flatbuffers.Builder, DATA_TYPE: DataType): void;
    static endEOP(builder: flatbuffers.Builder): flatbuffers.Offset;
    static finishEOPBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static finishSizePrefixedEOPBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static createEOP(builder: flatbuffers.Builder, DATEOffset: flatbuffers.Offset, MJD: number, X: number, Y: number, UT1_MINUS_UTC: number, LOD: number, DPSI: number, DEPS: number, DX: number, DY: number, DAT: number, DATA_TYPE: DataType): flatbuffers.Offset;
    unpack(): EOPT;
    unpackTo(_o: EOPT): void;
}
export declare class EOPT implements flatbuffers.IGeneratedObject {
    DATE: string | Uint8Array | null;
    MJD: number;
    X: number;
    Y: number;
    UT1_MINUS_UTC: number;
    LOD: number;
    DPSI: number;
    DEPS: number;
    DX: number;
    DY: number;
    DAT: number;
    DATA_TYPE: DataType;
    constructor(DATE?: string | Uint8Array | null, MJD?: number, X?: number, Y?: number, UT1_MINUS_UTC?: number, LOD?: number, DPSI?: number, DEPS?: number, DX?: number, DY?: number, DAT?: number, DATA_TYPE?: DataType);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=EOP.d.ts.map