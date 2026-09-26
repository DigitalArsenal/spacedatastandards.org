import * as flatbuffers from 'flatbuffers';
import { phbMagnitudeSystem } from './phbMagnitudeSystem.js';
import { phbSpectralRegime } from './phbSpectralRegime.js';
/**
 * Photometric Band: one passband's place on the spectrum and its calibration.
 */
export declare class PHB implements flatbuffers.IUnpackableObject<PHBT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): PHB;
    static getRootAsPHB(bb: flatbuffers.ByteBuffer, obj?: PHB): PHB;
    static getSizePrefixedRootAsPHB(bb: flatbuffers.ByteBuffer, obj?: PHB): PHB;
    static bufferHasIdentifier(bb: flatbuffers.ByteBuffer): boolean;
    /**
     * Stable band identifier, unique within the publishing catalogue, e.g.
     * "V", "Ks", "0.5-2keV", "1.4GHz". Measurements refer to it.
     */
    BAND_ID(): string;
    BAND_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    /**
     * Human-readable name.
     */
    NAME(): string | null;
    NAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Name of the photometric system the band belongs to, as the defining
     * publication states it.
     */
    SYSTEM_NAME(): string | null;
    SYSTEM_NAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Coarse spectral region, by WAVELENGTH_EFF_NM.
     */
    SPECTRAL_REGIME(): phbSpectralRegime;
    /**
     * Effective (pivot) wavelength, nanometres, vacuum.
     */
    WAVELENGTH_EFF_NM(): number;
    /**
     * Short edge of the band at half maximum response, nanometres.
     */
    WAVELENGTH_MIN_NM(): number;
    /**
     * Long edge of the band at half maximum response, nanometres.
     */
    WAVELENGTH_MAX_NM(): number;
    /**
     * Calibration system of magnitudes stated in the band.
     */
    MAGNITUDE_SYSTEM(): phbMagnitudeSystem;
    /**
     * Flux density at the effective wavelength of a zero-magnitude source,
     * janskys.
     */
    ZERO_POINT_JY(): number;
    /**
     * Wavelengths the response curve is sampled at, nanometres, ascending.
     */
    RESPONSE_WAVELENGTH_NM(index: number): number | null;
    responseWavelengthNmLength(): number;
    responseWavelengthNmArray(): Float64Array | null;
    /**
     * Relative system response at each RESPONSE_WAVELENGTH_NM sample,
     * peak-normalised to 1. Photon-counting unless RESPONSE_IS_ENERGY.
     */
    RESPONSE(index: number): number | null;
    responseLength(): number;
    responseArray(): Float32Array | null;
    /**
     * True when RESPONSE is an energy-counting response.
     */
    RESPONSE_IS_ENERGY(): boolean;
    /**
     * Reference to the publication that defines the band.
     */
    CITATION(): string | null;
    CITATION(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * URL of the band's defining document or response table.
     */
    DEFINITION_URL(): string | null;
    DEFINITION_URL(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    static startPHB(builder: flatbuffers.Builder): void;
    static addBandId(builder: flatbuffers.Builder, BAND_IDOffset: flatbuffers.Offset): void;
    static addName(builder: flatbuffers.Builder, NAMEOffset: flatbuffers.Offset): void;
    static addSystemName(builder: flatbuffers.Builder, SYSTEM_NAMEOffset: flatbuffers.Offset): void;
    static addSpectralRegime(builder: flatbuffers.Builder, SPECTRAL_REGIME: phbSpectralRegime): void;
    static addWavelengthEffNm(builder: flatbuffers.Builder, WAVELENGTH_EFF_NM: number): void;
    static addWavelengthMinNm(builder: flatbuffers.Builder, WAVELENGTH_MIN_NM: number): void;
    static addWavelengthMaxNm(builder: flatbuffers.Builder, WAVELENGTH_MAX_NM: number): void;
    static addMagnitudeSystem(builder: flatbuffers.Builder, MAGNITUDE_SYSTEM: phbMagnitudeSystem): void;
    static addZeroPointJy(builder: flatbuffers.Builder, ZERO_POINT_JY: number): void;
    static addResponseWavelengthNm(builder: flatbuffers.Builder, RESPONSE_WAVELENGTH_NMOffset: flatbuffers.Offset): void;
    static createResponseWavelengthNmVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createResponseWavelengthNmVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startResponseWavelengthNmVector(builder: flatbuffers.Builder, numElems: number): void;
    static addResponse(builder: flatbuffers.Builder, RESPONSEOffset: flatbuffers.Offset): void;
    static createResponseVector(builder: flatbuffers.Builder, data: number[] | Float32Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createResponseVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startResponseVector(builder: flatbuffers.Builder, numElems: number): void;
    static addResponseIsEnergy(builder: flatbuffers.Builder, RESPONSE_IS_ENERGY: boolean): void;
    static addCitation(builder: flatbuffers.Builder, CITATIONOffset: flatbuffers.Offset): void;
    static addDefinitionUrl(builder: flatbuffers.Builder, DEFINITION_URLOffset: flatbuffers.Offset): void;
    static endPHB(builder: flatbuffers.Builder): flatbuffers.Offset;
    static finishPHBBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static finishSizePrefixedPHBBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static createPHB(builder: flatbuffers.Builder, BAND_IDOffset: flatbuffers.Offset, NAMEOffset: flatbuffers.Offset, SYSTEM_NAMEOffset: flatbuffers.Offset, SPECTRAL_REGIME: phbSpectralRegime, WAVELENGTH_EFF_NM: number, WAVELENGTH_MIN_NM: number, WAVELENGTH_MAX_NM: number, MAGNITUDE_SYSTEM: phbMagnitudeSystem, ZERO_POINT_JY: number, RESPONSE_WAVELENGTH_NMOffset: flatbuffers.Offset, RESPONSEOffset: flatbuffers.Offset, RESPONSE_IS_ENERGY: boolean, CITATIONOffset: flatbuffers.Offset, DEFINITION_URLOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): PHBT;
    unpackTo(_o: PHBT): void;
}
export declare class PHBT implements flatbuffers.IGeneratedObject {
    BAND_ID: string | Uint8Array | null;
    NAME: string | Uint8Array | null;
    SYSTEM_NAME: string | Uint8Array | null;
    SPECTRAL_REGIME: phbSpectralRegime;
    WAVELENGTH_EFF_NM: number;
    WAVELENGTH_MIN_NM: number;
    WAVELENGTH_MAX_NM: number;
    MAGNITUDE_SYSTEM: phbMagnitudeSystem;
    ZERO_POINT_JY: number;
    RESPONSE_WAVELENGTH_NM: (number)[];
    RESPONSE: (number)[];
    RESPONSE_IS_ENERGY: boolean;
    CITATION: string | Uint8Array | null;
    DEFINITION_URL: string | Uint8Array | null;
    constructor(BAND_ID?: string | Uint8Array | null, NAME?: string | Uint8Array | null, SYSTEM_NAME?: string | Uint8Array | null, SPECTRAL_REGIME?: phbSpectralRegime, WAVELENGTH_EFF_NM?: number, WAVELENGTH_MIN_NM?: number, WAVELENGTH_MAX_NM?: number, MAGNITUDE_SYSTEM?: phbMagnitudeSystem, ZERO_POINT_JY?: number, RESPONSE_WAVELENGTH_NM?: (number)[], RESPONSE?: (number)[], RESPONSE_IS_ENERGY?: boolean, CITATION?: string | Uint8Array | null, DEFINITION_URL?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=PHB.d.ts.map