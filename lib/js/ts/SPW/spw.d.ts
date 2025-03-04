import * as flatbuffers from 'flatbuffers';
import { F107DataType } from './f107-data-type.js';
/**
 * Space Weather Data Record
 */
export declare class SPW implements flatbuffers.IUnpackableObject<SPWT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): SPW;
    static getRootAsSPW(bb: flatbuffers.ByteBuffer, obj?: SPW): SPW;
    static getSizePrefixedRootAsSPW(bb: flatbuffers.ByteBuffer, obj?: SPW): SPW;
    static bufferHasIdentifier(bb: flatbuffers.ByteBuffer): boolean;
    /**
     * Date in ISO 8601 format
     */
    date(): string | null;
    date(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Bartels Solar Rotation Number
     */
    bsrn(): number;
    /**
     * Day within Bartels cycle (1-27)
     */
    nd(): number;
    /**
     * Planetary 3-hour Range Index (Kp) for 0000-0300 UT, multiplied by 10
     */
    kp1(): number;
    /**
     * Planetary 3-hour Range Index (Kp) for 0300-0600 UT, multiplied by 10
     */
    kp2(): number;
    /**
     * Planetary 3-hour Range Index (Kp) for 0600-0900 UT, multiplied by 10
     */
    kp3(): number;
    /**
     * Planetary 3-hour Range Index (Kp) for 0900-1200 UT, multiplied by 10
     */
    kp4(): number;
    /**
     * Planetary 3-hour Range Index (Kp) for 1200-1500 UT, multiplied by 10
     */
    kp5(): number;
    /**
     * Planetary 3-hour Range Index (Kp) for 1500-1800 UT, multiplied by 10
     */
    kp6(): number;
    /**
     * Planetary 3-hour Range Index (Kp) for 1800-2100 UT, multiplied by 10
     */
    kp7(): number;
    /**
     * Planetary 3-hour Range Index (Kp) for 2100-0000 UT, multiplied by 10
     */
    kp8(): number;
    /**
     * Sum of the 8 Kp indices for the day
     */
    kpSum(): number;
    /**
     * Planetary Equivalent Amplitude (Ap) for 0000-0300 UT
     */
    ap1(): number;
    /**
     * Planetary Equivalent Amplitude (Ap) for 0300-0600 UT
     */
    ap2(): number;
    /**
     * Planetary Equivalent Amplitude (Ap) for 0600-0900 UT
     */
    ap3(): number;
    /**
     * Planetary Equivalent Amplitude (Ap) for 0900-1200 UT
     */
    ap4(): number;
    /**
     * Planetary Equivalent Amplitude (Ap) for 1200-1500 UT
     */
    ap5(): number;
    /**
     * Planetary Equivalent Amplitude (Ap) for 1500-1800 UT
     */
    ap6(): number;
    /**
     * Planetary Equivalent Amplitude (Ap) for 1800-2100 UT
     */
    ap7(): number;
    /**
     * Planetary Equivalent Amplitude (Ap) for 2100-0000 UT
     */
    ap8(): number;
    /**
     * Arithmetic average of the 8 Ap indices for the day
     */
    apAvg(): number;
    /**
     * Planetary Daily Character Figure (0.0 to 2.5)
     */
    cp(): number;
    /**
     * C9 index (0-9)
     */
    c9(): number;
    /**
     * International Sunspot Number
     */
    isn(): number;
    /**
     * Observed 10.7cm Solar Radio Flux
     */
    f107Obs(): number;
    /**
     * Adjusted 10.7cm Solar Radio Flux (to 1 AU)
     */
    f107Adj(): number;
    /**
     * F10.7 Data Type
     */
    f107DataType(): F107DataType;
    /**
     * 81-day centered average of observed F10.7
     */
    f107ObsCenter81(): number;
    /**
     * 81-day trailing average of observed F10.7
     */
    f107ObsLast81(): number;
    /**
     * 81-day centered average of adjusted F10.7
     */
    f107AdjCenter81(): number;
    /**
     * 81-day trailing average of adjusted F10.7
     */
    f107AdjLast81(): number;
    static startSPW(builder: flatbuffers.Builder): void;
    static addDate(builder: flatbuffers.Builder, dateOffset: flatbuffers.Offset): void;
    static addBsrn(builder: flatbuffers.Builder, bsrn: number): void;
    static addNd(builder: flatbuffers.Builder, nd: number): void;
    static addKp1(builder: flatbuffers.Builder, kp1: number): void;
    static addKp2(builder: flatbuffers.Builder, kp2: number): void;
    static addKp3(builder: flatbuffers.Builder, kp3: number): void;
    static addKp4(builder: flatbuffers.Builder, kp4: number): void;
    static addKp5(builder: flatbuffers.Builder, kp5: number): void;
    static addKp6(builder: flatbuffers.Builder, kp6: number): void;
    static addKp7(builder: flatbuffers.Builder, kp7: number): void;
    static addKp8(builder: flatbuffers.Builder, kp8: number): void;
    static addKpSum(builder: flatbuffers.Builder, kpSum: number): void;
    static addAp1(builder: flatbuffers.Builder, ap1: number): void;
    static addAp2(builder: flatbuffers.Builder, ap2: number): void;
    static addAp3(builder: flatbuffers.Builder, ap3: number): void;
    static addAp4(builder: flatbuffers.Builder, ap4: number): void;
    static addAp5(builder: flatbuffers.Builder, ap5: number): void;
    static addAp6(builder: flatbuffers.Builder, ap6: number): void;
    static addAp7(builder: flatbuffers.Builder, ap7: number): void;
    static addAp8(builder: flatbuffers.Builder, ap8: number): void;
    static addApAvg(builder: flatbuffers.Builder, apAvg: number): void;
    static addCp(builder: flatbuffers.Builder, cp: number): void;
    static addC9(builder: flatbuffers.Builder, c9: number): void;
    static addIsn(builder: flatbuffers.Builder, isn: number): void;
    static addF107Obs(builder: flatbuffers.Builder, f107Obs: number): void;
    static addF107Adj(builder: flatbuffers.Builder, f107Adj: number): void;
    static addF107DataType(builder: flatbuffers.Builder, f107DataType: F107DataType): void;
    static addF107ObsCenter81(builder: flatbuffers.Builder, f107ObsCenter81: number): void;
    static addF107ObsLast81(builder: flatbuffers.Builder, f107ObsLast81: number): void;
    static addF107AdjCenter81(builder: flatbuffers.Builder, f107AdjCenter81: number): void;
    static addF107AdjLast81(builder: flatbuffers.Builder, f107AdjLast81: number): void;
    static endSPW(builder: flatbuffers.Builder): flatbuffers.Offset;
    static finishSPWBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static finishSizePrefixedSPWBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static createSPW(builder: flatbuffers.Builder, dateOffset: flatbuffers.Offset, bsrn: number, nd: number, kp1: number, kp2: number, kp3: number, kp4: number, kp5: number, kp6: number, kp7: number, kp8: number, kpSum: number, ap1: number, ap2: number, ap3: number, ap4: number, ap5: number, ap6: number, ap7: number, ap8: number, apAvg: number, cp: number, c9: number, isn: number, f107Obs: number, f107Adj: number, f107DataType: F107DataType, f107ObsCenter81: number, f107ObsLast81: number, f107AdjCenter81: number, f107AdjLast81: number): flatbuffers.Offset;
    unpack(): SPWT;
    unpackTo(_o: SPWT): void;
}
export declare class SPWT implements flatbuffers.IGeneratedObject {
    date: string | Uint8Array | null;
    bsrn: number;
    nd: number;
    kp1: number;
    kp2: number;
    kp3: number;
    kp4: number;
    kp5: number;
    kp6: number;
    kp7: number;
    kp8: number;
    kpSum: number;
    ap1: number;
    ap2: number;
    ap3: number;
    ap4: number;
    ap5: number;
    ap6: number;
    ap7: number;
    ap8: number;
    apAvg: number;
    cp: number;
    c9: number;
    isn: number;
    f107Obs: number;
    f107Adj: number;
    f107DataType: F107DataType;
    f107ObsCenter81: number;
    f107ObsLast81: number;
    f107AdjCenter81: number;
    f107AdjLast81: number;
    constructor(date?: string | Uint8Array | null, bsrn?: number, nd?: number, kp1?: number, kp2?: number, kp3?: number, kp4?: number, kp5?: number, kp6?: number, kp7?: number, kp8?: number, kpSum?: number, ap1?: number, ap2?: number, ap3?: number, ap4?: number, ap5?: number, ap6?: number, ap7?: number, ap8?: number, apAvg?: number, cp?: number, c9?: number, isn?: number, f107Obs?: number, f107Adj?: number, f107DataType?: F107DataType, f107ObsCenter81?: number, f107ObsLast81?: number, f107AdjCenter81?: number, f107AdjLast81?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=spw.d.ts.map