import * as flatbuffers from 'flatbuffers';
import { F107DataType } from './F107DataType.js';
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
    DATE(): string | null;
    DATE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Bartels Solar Rotation Number
     */
    BSRN(): number;
    /**
     * Day within Bartels cycle (1-27)
     */
    ND(): number;
    /**
     * Planetary 3-hour Range Index (Kp) for 0000-0300 UT, multiplied by 10
     */
    KP1(): number;
    /**
     * Planetary 3-hour Range Index (Kp) for 0300-0600 UT, multiplied by 10
     */
    KP2(): number;
    /**
     * Planetary 3-hour Range Index (Kp) for 0600-0900 UT, multiplied by 10
     */
    KP3(): number;
    /**
     * Planetary 3-hour Range Index (Kp) for 0900-1200 UT, multiplied by 10
     */
    KP4(): number;
    /**
     * Planetary 3-hour Range Index (Kp) for 1200-1500 UT, multiplied by 10
     */
    KP5(): number;
    /**
     * Planetary 3-hour Range Index (Kp) for 1500-1800 UT, multiplied by 10
     */
    KP6(): number;
    /**
     * Planetary 3-hour Range Index (Kp) for 1800-2100 UT, multiplied by 10
     */
    KP7(): number;
    /**
     * Planetary 3-hour Range Index (Kp) for 2100-0000 UT, multiplied by 10
     */
    KP8(): number;
    /**
     * Sum of the 8 Kp indices for the day
     */
    KP_SUM(): number;
    /**
     * Planetary Equivalent Amplitude (Ap) for 0000-0300 UT
     */
    AP1(): number;
    /**
     * Planetary Equivalent Amplitude (Ap) for 0300-0600 UT
     */
    AP2(): number;
    /**
     * Planetary Equivalent Amplitude (Ap) for 0600-0900 UT
     */
    AP3(): number;
    /**
     * Planetary Equivalent Amplitude (Ap) for 0900-1200 UT
     */
    AP4(): number;
    /**
     * Planetary Equivalent Amplitude (Ap) for 1200-1500 UT
     */
    AP5(): number;
    /**
     * Planetary Equivalent Amplitude (Ap) for 1500-1800 UT
     */
    AP6(): number;
    /**
     * Planetary Equivalent Amplitude (Ap) for 1800-2100 UT
     */
    AP7(): number;
    /**
     * Planetary Equivalent Amplitude (Ap) for 2100-0000 UT
     */
    AP8(): number;
    /**
     * Arithmetic average of the 8 Ap indices for the day
     */
    AP_AVG(): number;
    /**
     * Planetary Daily Character Figure (0.0 to 2.5)
     */
    CP(): number;
    /**
     * C9 index (0-9)
     */
    C9(): number;
    /**
     * International Sunspot Number
     */
    ISN(): number;
    /**
     * Observed 10.7cm Solar Radio Flux
     */
    F107_OBS(): number;
    /**
     * Adjusted 10.7cm Solar Radio Flux (to 1 AU)
     */
    F107_ADJ(): number;
    /**
     * F10.7 Data Type
     */
    F107_DATA_TYPE(): F107DataType;
    /**
     * 81-day centered average of observed F10.7
     */
    F107_OBS_CENTER81(): number;
    /**
     * 81-day trailing average of observed F10.7
     */
    F107_OBS_LAST81(): number;
    /**
     * 81-day centered average of adjusted F10.7
     */
    F107_ADJ_CENTER81(): number;
    /**
     * 81-day trailing average of adjusted F10.7
     */
    F107_ADJ_LAST81(): number;
    static startSPW(builder: flatbuffers.Builder): void;
    static addDate(builder: flatbuffers.Builder, DATEOffset: flatbuffers.Offset): void;
    static addBsrn(builder: flatbuffers.Builder, BSRN: number): void;
    static addNd(builder: flatbuffers.Builder, ND: number): void;
    static addKp1(builder: flatbuffers.Builder, KP1: number): void;
    static addKp2(builder: flatbuffers.Builder, KP2: number): void;
    static addKp3(builder: flatbuffers.Builder, KP3: number): void;
    static addKp4(builder: flatbuffers.Builder, KP4: number): void;
    static addKp5(builder: flatbuffers.Builder, KP5: number): void;
    static addKp6(builder: flatbuffers.Builder, KP6: number): void;
    static addKp7(builder: flatbuffers.Builder, KP7: number): void;
    static addKp8(builder: flatbuffers.Builder, KP8: number): void;
    static addKpSum(builder: flatbuffers.Builder, KP_SUM: number): void;
    static addAp1(builder: flatbuffers.Builder, AP1: number): void;
    static addAp2(builder: flatbuffers.Builder, AP2: number): void;
    static addAp3(builder: flatbuffers.Builder, AP3: number): void;
    static addAp4(builder: flatbuffers.Builder, AP4: number): void;
    static addAp5(builder: flatbuffers.Builder, AP5: number): void;
    static addAp6(builder: flatbuffers.Builder, AP6: number): void;
    static addAp7(builder: flatbuffers.Builder, AP7: number): void;
    static addAp8(builder: flatbuffers.Builder, AP8: number): void;
    static addApAvg(builder: flatbuffers.Builder, AP_AVG: number): void;
    static addCp(builder: flatbuffers.Builder, CP: number): void;
    static addC9(builder: flatbuffers.Builder, C9: number): void;
    static addIsn(builder: flatbuffers.Builder, ISN: number): void;
    static addF107Obs(builder: flatbuffers.Builder, F107_OBS: number): void;
    static addF107Adj(builder: flatbuffers.Builder, F107_ADJ: number): void;
    static addF107DataType(builder: flatbuffers.Builder, F107_DATA_TYPE: F107DataType): void;
    static addF107ObsCenter81(builder: flatbuffers.Builder, F107_OBS_CENTER81: number): void;
    static addF107ObsLast81(builder: flatbuffers.Builder, F107_OBS_LAST81: number): void;
    static addF107AdjCenter81(builder: flatbuffers.Builder, F107_ADJ_CENTER81: number): void;
    static addF107AdjLast81(builder: flatbuffers.Builder, F107_ADJ_LAST81: number): void;
    static endSPW(builder: flatbuffers.Builder): flatbuffers.Offset;
    static finishSPWBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static finishSizePrefixedSPWBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static createSPW(builder: flatbuffers.Builder, DATEOffset: flatbuffers.Offset, BSRN: number, ND: number, KP1: number, KP2: number, KP3: number, KP4: number, KP5: number, KP6: number, KP7: number, KP8: number, KP_SUM: number, AP1: number, AP2: number, AP3: number, AP4: number, AP5: number, AP6: number, AP7: number, AP8: number, AP_AVG: number, CP: number, C9: number, ISN: number, F107_OBS: number, F107_ADJ: number, F107_DATA_TYPE: F107DataType, F107_OBS_CENTER81: number, F107_OBS_LAST81: number, F107_ADJ_CENTER81: number, F107_ADJ_LAST81: number): flatbuffers.Offset;
    unpack(): SPWT;
    unpackTo(_o: SPWT): void;
}
export declare class SPWT implements flatbuffers.IGeneratedObject {
    DATE: string | Uint8Array | null;
    BSRN: number;
    ND: number;
    KP1: number;
    KP2: number;
    KP3: number;
    KP4: number;
    KP5: number;
    KP6: number;
    KP7: number;
    KP8: number;
    KP_SUM: number;
    AP1: number;
    AP2: number;
    AP3: number;
    AP4: number;
    AP5: number;
    AP6: number;
    AP7: number;
    AP8: number;
    AP_AVG: number;
    CP: number;
    C9: number;
    ISN: number;
    F107_OBS: number;
    F107_ADJ: number;
    F107_DATA_TYPE: F107DataType;
    F107_OBS_CENTER81: number;
    F107_OBS_LAST81: number;
    F107_ADJ_CENTER81: number;
    F107_ADJ_LAST81: number;
    constructor(DATE?: string | Uint8Array | null, BSRN?: number, ND?: number, KP1?: number, KP2?: number, KP3?: number, KP4?: number, KP5?: number, KP6?: number, KP7?: number, KP8?: number, KP_SUM?: number, AP1?: number, AP2?: number, AP3?: number, AP4?: number, AP5?: number, AP6?: number, AP7?: number, AP8?: number, AP_AVG?: number, CP?: number, C9?: number, ISN?: number, F107_OBS?: number, F107_ADJ?: number, F107_DATA_TYPE?: F107DataType, F107_OBS_CENTER81?: number, F107_OBS_LAST81?: number, F107_ADJ_CENTER81?: number, F107_ADJ_LAST81?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=SPW.d.ts.map