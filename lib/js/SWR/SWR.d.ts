import * as flatbuffers from 'flatbuffers';
/**
 * Short-Wave Infrared
 */
export declare class SWR implements flatbuffers.IUnpackableObject<SWRT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): SWR;
    static getRootAsSWR(bb: flatbuffers.ByteBuffer, obj?: SWR): SWR;
    static getSizePrefixedRootAsSWR(bb: flatbuffers.ByteBuffer, obj?: SWR): SWR;
    static bufferHasIdentifier(bb: flatbuffers.ByteBuffer): boolean;
    ID(): string | null;
    ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    ON_ORBIT(): string | null;
    ON_ORBIT(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    TS(): string | null;
    TS(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    SOLAR_PHASE_ANGLE(): number;
    LAT(): number;
    LON(): number;
    LOCATION_NAME(): string | null;
    LOCATION_NAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    BAD_WAVE(): string | null;
    BAD_WAVE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    WAVELENGTHS(index: number): string;
    WAVELENGTHS(index: number, optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    wavelengthsLength(): number;
    ABS_FLUXES(index: number): string;
    ABS_FLUXES(index: number, optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    absFluxesLength(): number;
    RATIO_WAVELENGTHS(index: number): string;
    RATIO_WAVELENGTHS(index: number, optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    ratioWavelengthsLength(): number;
    FLUX_RATIOS(index: number): string;
    FLUX_RATIOS(index: number, optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    fluxRatiosLength(): number;
    ORIG_OBJECT_ID(): string | null;
    ORIG_OBJECT_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    SAT_NO(): number;
    static startSWR(builder: flatbuffers.Builder): void;
    static addId(builder: flatbuffers.Builder, IDOffset: flatbuffers.Offset): void;
    static addOnOrbit(builder: flatbuffers.Builder, ON_ORBITOffset: flatbuffers.Offset): void;
    static addTs(builder: flatbuffers.Builder, TSOffset: flatbuffers.Offset): void;
    static addSolarPhaseAngle(builder: flatbuffers.Builder, SOLAR_PHASE_ANGLE: number): void;
    static addLat(builder: flatbuffers.Builder, LAT: number): void;
    static addLon(builder: flatbuffers.Builder, LON: number): void;
    static addLocationName(builder: flatbuffers.Builder, LOCATION_NAMEOffset: flatbuffers.Offset): void;
    static addBadWave(builder: flatbuffers.Builder, BAD_WAVEOffset: flatbuffers.Offset): void;
    static addWavelengths(builder: flatbuffers.Builder, WAVELENGTHSOffset: flatbuffers.Offset): void;
    static createWavelengthsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startWavelengthsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addAbsFluxes(builder: flatbuffers.Builder, ABS_FLUXESOffset: flatbuffers.Offset): void;
    static createAbsFluxesVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startAbsFluxesVector(builder: flatbuffers.Builder, numElems: number): void;
    static addRatioWavelengths(builder: flatbuffers.Builder, RATIO_WAVELENGTHSOffset: flatbuffers.Offset): void;
    static createRatioWavelengthsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startRatioWavelengthsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addFluxRatios(builder: flatbuffers.Builder, FLUX_RATIOSOffset: flatbuffers.Offset): void;
    static createFluxRatiosVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startFluxRatiosVector(builder: flatbuffers.Builder, numElems: number): void;
    static addOrigObjectId(builder: flatbuffers.Builder, ORIG_OBJECT_IDOffset: flatbuffers.Offset): void;
    static addSatNo(builder: flatbuffers.Builder, SAT_NO: number): void;
    static endSWR(builder: flatbuffers.Builder): flatbuffers.Offset;
    static finishSWRBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static finishSizePrefixedSWRBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static createSWR(builder: flatbuffers.Builder, IDOffset: flatbuffers.Offset, ON_ORBITOffset: flatbuffers.Offset, TSOffset: flatbuffers.Offset, SOLAR_PHASE_ANGLE: number, LAT: number, LON: number, LOCATION_NAMEOffset: flatbuffers.Offset, BAD_WAVEOffset: flatbuffers.Offset, WAVELENGTHSOffset: flatbuffers.Offset, ABS_FLUXESOffset: flatbuffers.Offset, RATIO_WAVELENGTHSOffset: flatbuffers.Offset, FLUX_RATIOSOffset: flatbuffers.Offset, ORIG_OBJECT_IDOffset: flatbuffers.Offset, SAT_NO: number): flatbuffers.Offset;
    unpack(): SWRT;
    unpackTo(_o: SWRT): void;
}
export declare class SWRT implements flatbuffers.IGeneratedObject {
    ID: string | Uint8Array | null;
    ON_ORBIT: string | Uint8Array | null;
    TS: string | Uint8Array | null;
    SOLAR_PHASE_ANGLE: number;
    LAT: number;
    LON: number;
    LOCATION_NAME: string | Uint8Array | null;
    BAD_WAVE: string | Uint8Array | null;
    WAVELENGTHS: (string)[];
    ABS_FLUXES: (string)[];
    RATIO_WAVELENGTHS: (string)[];
    FLUX_RATIOS: (string)[];
    ORIG_OBJECT_ID: string | Uint8Array | null;
    SAT_NO: number;
    constructor(ID?: string | Uint8Array | null, ON_ORBIT?: string | Uint8Array | null, TS?: string | Uint8Array | null, SOLAR_PHASE_ANGLE?: number, LAT?: number, LON?: number, LOCATION_NAME?: string | Uint8Array | null, BAD_WAVE?: string | Uint8Array | null, WAVELENGTHS?: (string)[], ABS_FLUXES?: (string)[], RATIO_WAVELENGTHS?: (string)[], FLUX_RATIOS?: (string)[], ORIG_OBJECT_ID?: string | Uint8Array | null, SAT_NO?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=SWR.d.ts.map