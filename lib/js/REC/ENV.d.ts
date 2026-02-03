import * as flatbuffers from 'flatbuffers';
/**
 * Atmosphere and Environment
 */
export declare class ENV implements flatbuffers.IUnpackableObject<ENVT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): ENV;
    static getRootAsENV(bb: flatbuffers.ByteBuffer, obj?: ENV): ENV;
    static getSizePrefixedRootAsENV(bb: flatbuffers.ByteBuffer, obj?: ENV): ENV;
    static bufferHasIdentifier(bb: flatbuffers.ByteBuffer): boolean;
    ATMOSPHERE(): string | null;
    ATMOSPHERE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    WEATHER(): string | null;
    WEATHER(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    TIME_UTC(): number;
    LATITUDE(): number;
    LONGITUDE(): number;
    SUN_AZIMUTH(): number;
    SUN_ELEVATION(): number;
    MOON_PHASE(): number;
    ILLUMINATION(): number;
    MAGNETIC_DECLINATION(): number;
    MAGNETIC_INCLINATION(): number;
    RESERVED(index: number): number | null;
    reservedLength(): number;
    reservedArray(): Uint8Array | null;
    static startENV(builder: flatbuffers.Builder): void;
    static addAtmosphere(builder: flatbuffers.Builder, ATMOSPHEREOffset: flatbuffers.Offset): void;
    static addWeather(builder: flatbuffers.Builder, WEATHEROffset: flatbuffers.Offset): void;
    static addTimeUtc(builder: flatbuffers.Builder, TIME_UTC: number): void;
    static addLatitude(builder: flatbuffers.Builder, LATITUDE: number): void;
    static addLongitude(builder: flatbuffers.Builder, LONGITUDE: number): void;
    static addSunAzimuth(builder: flatbuffers.Builder, SUN_AZIMUTH: number): void;
    static addSunElevation(builder: flatbuffers.Builder, SUN_ELEVATION: number): void;
    static addMoonPhase(builder: flatbuffers.Builder, MOON_PHASE: number): void;
    static addIllumination(builder: flatbuffers.Builder, ILLUMINATION: number): void;
    static addMagneticDeclination(builder: flatbuffers.Builder, MAGNETIC_DECLINATION: number): void;
    static addMagneticInclination(builder: flatbuffers.Builder, MAGNETIC_INCLINATION: number): void;
    static addReserved(builder: flatbuffers.Builder, RESERVEDOffset: flatbuffers.Offset): void;
    static createReservedVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startReservedVector(builder: flatbuffers.Builder, numElems: number): void;
    static endENV(builder: flatbuffers.Builder): flatbuffers.Offset;
    static finishENVBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static finishSizePrefixedENVBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static createENV(builder: flatbuffers.Builder, ATMOSPHEREOffset: flatbuffers.Offset, WEATHEROffset: flatbuffers.Offset, TIME_UTC: number, LATITUDE: number, LONGITUDE: number, SUN_AZIMUTH: number, SUN_ELEVATION: number, MOON_PHASE: number, ILLUMINATION: number, MAGNETIC_DECLINATION: number, MAGNETIC_INCLINATION: number, RESERVEDOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): ENVT;
    unpackTo(_o: ENVT): void;
}
export declare class ENVT implements flatbuffers.IGeneratedObject {
    ATMOSPHERE: string | Uint8Array | null;
    WEATHER: string | Uint8Array | null;
    TIME_UTC: number;
    LATITUDE: number;
    LONGITUDE: number;
    SUN_AZIMUTH: number;
    SUN_ELEVATION: number;
    MOON_PHASE: number;
    ILLUMINATION: number;
    MAGNETIC_DECLINATION: number;
    MAGNETIC_INCLINATION: number;
    RESERVED: (number)[];
    constructor(ATMOSPHERE?: string | Uint8Array | null, WEATHER?: string | Uint8Array | null, TIME_UTC?: number, LATITUDE?: number, LONGITUDE?: number, SUN_AZIMUTH?: number, SUN_ELEVATION?: number, MOON_PHASE?: number, ILLUMINATION?: number, MAGNETIC_DECLINATION?: number, MAGNETIC_INCLINATION?: number, RESERVED?: (number)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=ENV.d.ts.map