import * as flatbuffers from 'flatbuffers';
import { TIMInstant, TIMInstantT } from './TIMInstant.js';
import { prwAtmosphereFamily } from './prwAtmosphereFamily.js';
/**
 * Diagnostic atmosphere request; UTC instant replaces ambiguous DOY/year=0.
 */
export declare class PRWAtmosphereRequest implements flatbuffers.IUnpackableObject<PRWAtmosphereRequestT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): PRWAtmosphereRequest;
    static getRootAsPRWAtmosphereRequest(bb: flatbuffers.ByteBuffer, obj?: PRWAtmosphereRequest): PRWAtmosphereRequest;
    static getSizePrefixedRootAsPRWAtmosphereRequest(bb: flatbuffers.ByteBuffer, obj?: PRWAtmosphereRequest): PRWAtmosphereRequest;
    ATMOSPHERE_MODEL(): prwAtmosphereFamily;
    EPOCH(obj?: TIMInstant): TIMInstant | null;
    ALTITUDE_M(): number;
    LATITUDE_RAD(): number;
    LONGITUDE_RAD(): number;
    /**
     * Optional local solar time; hours [0,24); absent derives from UTC/longitude.
     */
    LOCAL_SOLAR_TIME_HOURS(): number;
    /**
     * True when LOCAL_SOLAR_TIME_HOURS carries a value; false means absent.
     */
    HAS_LOCAL_SOLAR_TIME_HOURS(): boolean;
    F107(): number;
    F107_AVERAGE(): number;
    AP_INDEX(): number;
    INCLUDE_ANOMALOUS_OXYGEN(): boolean;
    static startPRWAtmosphereRequest(builder: flatbuffers.Builder): void;
    static addAtmosphereModel(builder: flatbuffers.Builder, ATMOSPHERE_MODEL: prwAtmosphereFamily): void;
    static addEpoch(builder: flatbuffers.Builder, EPOCHOffset: flatbuffers.Offset): void;
    static addAltitudeM(builder: flatbuffers.Builder, ALTITUDE_M: number): void;
    static addLatitudeRad(builder: flatbuffers.Builder, LATITUDE_RAD: number): void;
    static addLongitudeRad(builder: flatbuffers.Builder, LONGITUDE_RAD: number): void;
    static addLocalSolarTimeHours(builder: flatbuffers.Builder, LOCAL_SOLAR_TIME_HOURS: number): void;
    static addHasLocalSolarTimeHours(builder: flatbuffers.Builder, HAS_LOCAL_SOLAR_TIME_HOURS: boolean): void;
    static addF107(builder: flatbuffers.Builder, F107: number): void;
    static addF107Average(builder: flatbuffers.Builder, F107_AVERAGE: number): void;
    static addApIndex(builder: flatbuffers.Builder, AP_INDEX: number): void;
    static addIncludeAnomalousOxygen(builder: flatbuffers.Builder, INCLUDE_ANOMALOUS_OXYGEN: boolean): void;
    static endPRWAtmosphereRequest(builder: flatbuffers.Builder): flatbuffers.Offset;
    unpack(): PRWAtmosphereRequestT;
    unpackTo(_o: PRWAtmosphereRequestT): void;
}
export declare class PRWAtmosphereRequestT implements flatbuffers.IGeneratedObject {
    ATMOSPHERE_MODEL: prwAtmosphereFamily;
    EPOCH: TIMInstantT | null;
    ALTITUDE_M: number;
    LATITUDE_RAD: number;
    LONGITUDE_RAD: number;
    LOCAL_SOLAR_TIME_HOURS: number;
    HAS_LOCAL_SOLAR_TIME_HOURS: boolean;
    F107: number;
    F107_AVERAGE: number;
    AP_INDEX: number;
    INCLUDE_ANOMALOUS_OXYGEN: boolean;
    constructor(ATMOSPHERE_MODEL?: prwAtmosphereFamily, EPOCH?: TIMInstantT | null, ALTITUDE_M?: number, LATITUDE_RAD?: number, LONGITUDE_RAD?: number, LOCAL_SOLAR_TIME_HOURS?: number, HAS_LOCAL_SOLAR_TIME_HOURS?: boolean, F107?: number, F107_AVERAGE?: number, AP_INDEX?: number, INCLUDE_ANOMALOUS_OXYGEN?: boolean);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=PRWAtmosphereRequest.d.ts.map