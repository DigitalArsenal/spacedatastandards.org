import * as flatbuffers from 'flatbuffers';
import { TIMInstant, TIMInstantT } from './TIMInstant.js';
/**
 * Instantaneous space weather, held for an arc when WEATHER_SOURCE selects it.
 * The TIM epoch is UTC; flux is in SFU (1e-22 W/m2/Hz).
 */
export declare class PCFSpaceWeather implements flatbuffers.IUnpackableObject<PCFSpaceWeatherT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): PCFSpaceWeather;
    static getRootAsPCFSpaceWeather(bb: flatbuffers.ByteBuffer, obj?: PCFSpaceWeather): PCFSpaceWeather;
    static getSizePrefixedRootAsPCFSpaceWeather(bb: flatbuffers.ByteBuffer, obj?: PCFSpaceWeather): PCFSpaceWeather;
    /**
     * Epoch the values apply to. Required; no default.
     */
    EPOCH(obj?: TIMInstant): TIMInstant | null;
    /**
     * Daily F10.7 solar radio flux, SFU. Default 150.
     */
    F107(): number;
    /**
     * Centered 81-day average of F10.7, SFU. Default 150.
     */
    F107_AVERAGE(): number;
    /**
     * Conventional daily Ap index value, dimensionless (not an acceleration).
     * Default 15.
     */
    AP_INDEX(): number;
    /**
     * Conventional three-hour Kp index value, dimensionless (not an
     * acceleration). Default 3.
     */
    KP_INDEX(): number;
    static startPCFSpaceWeather(builder: flatbuffers.Builder): void;
    static addEpoch(builder: flatbuffers.Builder, EPOCHOffset: flatbuffers.Offset): void;
    static addF107(builder: flatbuffers.Builder, F107: number): void;
    static addF107Average(builder: flatbuffers.Builder, F107_AVERAGE: number): void;
    static addApIndex(builder: flatbuffers.Builder, AP_INDEX: number): void;
    static addKpIndex(builder: flatbuffers.Builder, KP_INDEX: number): void;
    static endPCFSpaceWeather(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createPCFSpaceWeather(builder: flatbuffers.Builder, EPOCHOffset: flatbuffers.Offset, F107: number, F107_AVERAGE: number, AP_INDEX: number, KP_INDEX: number): flatbuffers.Offset;
    unpack(): PCFSpaceWeatherT;
    unpackTo(_o: PCFSpaceWeatherT): void;
}
export declare class PCFSpaceWeatherT implements flatbuffers.IGeneratedObject {
    EPOCH: TIMInstantT | null;
    F107: number;
    F107_AVERAGE: number;
    AP_INDEX: number;
    KP_INDEX: number;
    constructor(EPOCH?: TIMInstantT | null, F107?: number, F107_AVERAGE?: number, AP_INDEX?: number, KP_INDEX?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=PCFSpaceWeather.d.ts.map