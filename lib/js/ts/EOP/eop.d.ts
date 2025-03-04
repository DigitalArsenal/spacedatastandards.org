import * as flatbuffers from 'flatbuffers';
import { DataType } from './data-type.js';
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
    date(): string | null;
    date(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Modified Julian Date
     */
    mjd(): number;
    /**
     * x pole coordinate in arcseconds
     */
    x(): number;
    /**
     * y pole coordinate in arcseconds
     */
    y(): number;
    /**
     * UT1-UTC in seconds
     */
    ut1MinusUtc(): number;
    /**
     * Length of Day correction in seconds
     */
    lod(): number;
    /**
     * Nutation correction in longitude (δΔψ) in arcseconds
     */
    dpsi(): number;
    /**
     * Nutation correction in obliquity (δΔε) in arcseconds
     */
    deps(): number;
    /**
     * Celestial pole offset in x (δX) in arcseconds
     */
    dx(): number;
    /**
     * Celestial pole offset in y (δY) in arcseconds
     */
    dy(): number;
    /**
     * Delta Atomic Time (TAI-UTC) in seconds
     */
    dat(): number;
    /**
     * Data type (O = Observed, P = Predicted)
     */
    dataType(): DataType;
    static startEOP(builder: flatbuffers.Builder): void;
    static addDate(builder: flatbuffers.Builder, dateOffset: flatbuffers.Offset): void;
    static addMjd(builder: flatbuffers.Builder, mjd: number): void;
    static addX(builder: flatbuffers.Builder, x: number): void;
    static addY(builder: flatbuffers.Builder, y: number): void;
    static addUt1MinusUtc(builder: flatbuffers.Builder, ut1MinusUtc: number): void;
    static addLod(builder: flatbuffers.Builder, lod: number): void;
    static addDpsi(builder: flatbuffers.Builder, dpsi: number): void;
    static addDeps(builder: flatbuffers.Builder, deps: number): void;
    static addDx(builder: flatbuffers.Builder, dx: number): void;
    static addDy(builder: flatbuffers.Builder, dy: number): void;
    static addDat(builder: flatbuffers.Builder, dat: number): void;
    static addDataType(builder: flatbuffers.Builder, dataType: DataType): void;
    static endEOP(builder: flatbuffers.Builder): flatbuffers.Offset;
    static finishEOPBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static finishSizePrefixedEOPBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static createEOP(builder: flatbuffers.Builder, dateOffset: flatbuffers.Offset, mjd: number, x: number, y: number, ut1MinusUtc: number, lod: number, dpsi: number, deps: number, dx: number, dy: number, dat: number, dataType: DataType): flatbuffers.Offset;
    unpack(): EOPT;
    unpackTo(_o: EOPT): void;
}
export declare class EOPT implements flatbuffers.IGeneratedObject {
    date: string | Uint8Array | null;
    mjd: number;
    x: number;
    y: number;
    ut1MinusUtc: number;
    lod: number;
    dpsi: number;
    deps: number;
    dx: number;
    dy: number;
    dat: number;
    dataType: DataType;
    constructor(date?: string | Uint8Array | null, mjd?: number, x?: number, y?: number, ut1MinusUtc?: number, lod?: number, dpsi?: number, deps?: number, dx?: number, dy?: number, dat?: number, dataType?: DataType);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=eop.d.ts.map