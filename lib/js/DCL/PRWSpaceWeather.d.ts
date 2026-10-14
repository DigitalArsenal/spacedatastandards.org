import * as flatbuffers from 'flatbuffers';
import { TIMInstant, TIMInstantT } from './TIMInstant.js';
/**
 * Instantaneous space weather. TIM epoch is UTC; flux in SFU (1e-22 W/m2/Hz).
 */
export declare class PRWSpaceWeather implements flatbuffers.IUnpackableObject<PRWSpaceWeatherT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): PRWSpaceWeather;
    static getRootAsPRWSpaceWeather(bb: flatbuffers.ByteBuffer, obj?: PRWSpaceWeather): PRWSpaceWeather;
    static getSizePrefixedRootAsPRWSpaceWeather(bb: flatbuffers.ByteBuffer, obj?: PRWSpaceWeather): PRWSpaceWeather;
    EPOCH(obj?: TIMInstant): TIMInstant | null;
    F107(): number;
    F107_AVERAGE(): number;
    /**
     * Conventional daily Ap and three-hour Kp index values; not accelerations.
     */
    AP_INDEX(): number;
    KP_INDEX(): number;
    static startPRWSpaceWeather(builder: flatbuffers.Builder): void;
    static addEpoch(builder: flatbuffers.Builder, EPOCHOffset: flatbuffers.Offset): void;
    static addF107(builder: flatbuffers.Builder, F107: number): void;
    static addF107Average(builder: flatbuffers.Builder, F107_AVERAGE: number): void;
    static addApIndex(builder: flatbuffers.Builder, AP_INDEX: number): void;
    static addKpIndex(builder: flatbuffers.Builder, KP_INDEX: number): void;
    static endPRWSpaceWeather(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createPRWSpaceWeather(builder: flatbuffers.Builder, EPOCHOffset: flatbuffers.Offset, F107: number, F107_AVERAGE: number, AP_INDEX: number, KP_INDEX: number): flatbuffers.Offset;
    unpack(): PRWSpaceWeatherT;
    unpackTo(_o: PRWSpaceWeatherT): void;
}
export declare class PRWSpaceWeatherT implements flatbuffers.IGeneratedObject {
    EPOCH: TIMInstantT | null;
    F107: number;
    F107_AVERAGE: number;
    AP_INDEX: number;
    KP_INDEX: number;
    constructor(EPOCH?: TIMInstantT | null, F107?: number, F107_AVERAGE?: number, AP_INDEX?: number, KP_INDEX?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=PRWSpaceWeather.d.ts.map