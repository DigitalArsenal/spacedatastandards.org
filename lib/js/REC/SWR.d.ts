import * as flatbuffers from 'flatbuffers';
/**
 * Short-Wave Infrared Observation
 */
export declare class SWR implements flatbuffers.IUnpackableObject<SWRT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): SWR;
    static getRootAsSWR(bb: flatbuffers.ByteBuffer, obj?: SWR): SWR;
    static getSizePrefixedRootAsSWR(bb: flatbuffers.ByteBuffer, obj?: SWR): SWR;
    static bufferHasIdentifier(bb: flatbuffers.ByteBuffer): boolean;
    /**
     * Unique identifier
     */
    ID(): string | null;
    ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * On-orbit reference
     */
    ON_ORBIT(): string | null;
    ON_ORBIT(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * International designator
     */
    ORIG_OBJECT_ID(): string | null;
    ORIG_OBJECT_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Satellite catalog number
     */
    SAT_NO(): number;
    /**
     * Observation timestamp (ISO 8601)
     */
    TS(): string | null;
    TS(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Solar phase angle (degrees)
     */
    SOLAR_PHASE_ANGLE(): number;
    /**
     * Sub-observer latitude (degrees)
     */
    LAT(): number;
    /**
     * Sub-observer longitude (degrees)
     */
    LON(): number;
    /**
     * Location name
     */
    LOCATION_NAME(): string | null;
    LOCATION_NAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Bad wavelength flag or identifier
     */
    BAD_WAVE(): string | null;
    BAD_WAVE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Measured wavelengths (micrometers)
     */
    WAVELENGTHS(index: number): number | null;
    wavelengthsLength(): number;
    wavelengthsArray(): Float64Array | null;
    /**
     * Absolute flux values (W/m^2/um)
     */
    ABS_FLUXES(index: number): number | null;
    absFluxesLength(): number;
    absFluxesArray(): Float64Array | null;
    /**
     * Ratio reference wavelengths (micrometers)
     */
    RATIO_WAVELENGTHS(index: number): number | null;
    ratioWavelengthsLength(): number;
    ratioWavelengthsArray(): Float64Array | null;
    /**
     * Flux ratios (normalized)
     */
    FLUX_RATIOS(index: number): number | null;
    fluxRatiosLength(): number;
    fluxRatiosArray(): Float64Array | null;
    /**
     * Effective temperature (Kelvin)
     */
    TEMPERATURE(): number;
    /**
     * Signal-to-noise ratio
     */
    SIGNAL_NOISE_RATIO(): number;
    /**
     * Integration time (seconds)
     */
    INTEGRATION_TIME(): number;
    /**
     * Data quality (0-9, 9=best)
     */
    QUALITY(): number;
    static startSWR(builder: flatbuffers.Builder): void;
    static addId(builder: flatbuffers.Builder, IDOffset: flatbuffers.Offset): void;
    static addOnOrbit(builder: flatbuffers.Builder, ON_ORBITOffset: flatbuffers.Offset): void;
    static addOrigObjectId(builder: flatbuffers.Builder, ORIG_OBJECT_IDOffset: flatbuffers.Offset): void;
    static addSatNo(builder: flatbuffers.Builder, SAT_NO: number): void;
    static addTs(builder: flatbuffers.Builder, TSOffset: flatbuffers.Offset): void;
    static addSolarPhaseAngle(builder: flatbuffers.Builder, SOLAR_PHASE_ANGLE: number): void;
    static addLat(builder: flatbuffers.Builder, LAT: number): void;
    static addLon(builder: flatbuffers.Builder, LON: number): void;
    static addLocationName(builder: flatbuffers.Builder, LOCATION_NAMEOffset: flatbuffers.Offset): void;
    static addBadWave(builder: flatbuffers.Builder, BAD_WAVEOffset: flatbuffers.Offset): void;
    static addWavelengths(builder: flatbuffers.Builder, WAVELENGTHSOffset: flatbuffers.Offset): void;
    static createWavelengthsVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createWavelengthsVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startWavelengthsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addAbsFluxes(builder: flatbuffers.Builder, ABS_FLUXESOffset: flatbuffers.Offset): void;
    static createAbsFluxesVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createAbsFluxesVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startAbsFluxesVector(builder: flatbuffers.Builder, numElems: number): void;
    static addRatioWavelengths(builder: flatbuffers.Builder, RATIO_WAVELENGTHSOffset: flatbuffers.Offset): void;
    static createRatioWavelengthsVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createRatioWavelengthsVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startRatioWavelengthsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addFluxRatios(builder: flatbuffers.Builder, FLUX_RATIOSOffset: flatbuffers.Offset): void;
    static createFluxRatiosVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createFluxRatiosVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startFluxRatiosVector(builder: flatbuffers.Builder, numElems: number): void;
    static addTemperature(builder: flatbuffers.Builder, TEMPERATURE: number): void;
    static addSignalNoiseRatio(builder: flatbuffers.Builder, SIGNAL_NOISE_RATIO: number): void;
    static addIntegrationTime(builder: flatbuffers.Builder, INTEGRATION_TIME: number): void;
    static addQuality(builder: flatbuffers.Builder, QUALITY: number): void;
    static endSWR(builder: flatbuffers.Builder): flatbuffers.Offset;
    static finishSWRBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static finishSizePrefixedSWRBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static createSWR(builder: flatbuffers.Builder, IDOffset: flatbuffers.Offset, ON_ORBITOffset: flatbuffers.Offset, ORIG_OBJECT_IDOffset: flatbuffers.Offset, SAT_NO: number, TSOffset: flatbuffers.Offset, SOLAR_PHASE_ANGLE: number, LAT: number, LON: number, LOCATION_NAMEOffset: flatbuffers.Offset, BAD_WAVEOffset: flatbuffers.Offset, WAVELENGTHSOffset: flatbuffers.Offset, ABS_FLUXESOffset: flatbuffers.Offset, RATIO_WAVELENGTHSOffset: flatbuffers.Offset, FLUX_RATIOSOffset: flatbuffers.Offset, TEMPERATURE: number, SIGNAL_NOISE_RATIO: number, INTEGRATION_TIME: number, QUALITY: number): flatbuffers.Offset;
    unpack(): SWRT;
    unpackTo(_o: SWRT): void;
}
export declare class SWRT implements flatbuffers.IGeneratedObject {
    ID: string | Uint8Array | null;
    ON_ORBIT: string | Uint8Array | null;
    ORIG_OBJECT_ID: string | Uint8Array | null;
    SAT_NO: number;
    TS: string | Uint8Array | null;
    SOLAR_PHASE_ANGLE: number;
    LAT: number;
    LON: number;
    LOCATION_NAME: string | Uint8Array | null;
    BAD_WAVE: string | Uint8Array | null;
    WAVELENGTHS: (number)[];
    ABS_FLUXES: (number)[];
    RATIO_WAVELENGTHS: (number)[];
    FLUX_RATIOS: (number)[];
    TEMPERATURE: number;
    SIGNAL_NOISE_RATIO: number;
    INTEGRATION_TIME: number;
    QUALITY: number;
    constructor(ID?: string | Uint8Array | null, ON_ORBIT?: string | Uint8Array | null, ORIG_OBJECT_ID?: string | Uint8Array | null, SAT_NO?: number, TS?: string | Uint8Array | null, SOLAR_PHASE_ANGLE?: number, LAT?: number, LON?: number, LOCATION_NAME?: string | Uint8Array | null, BAD_WAVE?: string | Uint8Array | null, WAVELENGTHS?: (number)[], ABS_FLUXES?: (number)[], RATIO_WAVELENGTHS?: (number)[], FLUX_RATIOS?: (number)[], TEMPERATURE?: number, SIGNAL_NOISE_RATIO?: number, INTEGRATION_TIME?: number, QUALITY?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=SWR.d.ts.map