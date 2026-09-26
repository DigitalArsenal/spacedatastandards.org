import * as flatbuffers from 'flatbuffers';
import { phbBoundKind } from './phbBoundKind.js';
import { phbDerivation } from './phbDerivation.js';
import { phbMagnitudeSystem } from './phbMagnitudeSystem.js';
import { phbQuantity } from './phbQuantity.js';
import { phbSpectralRegime } from './phbSpectralRegime.js';
/**
 * One source's brightness in one band.
 */
export declare class PHBMeasurement implements flatbuffers.IUnpackableObject<PHBMeasurementT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): PHBMeasurement;
    static getRootAsPHBMeasurement(bb: flatbuffers.ByteBuffer, obj?: PHBMeasurement): PHBMeasurement;
    static getSizePrefixedRootAsPHBMeasurement(bb: flatbuffers.ByteBuffer, obj?: PHBMeasurement): PHBMeasurement;
    /**
     * Band identifier; resolves to a `$PHB` BAND_ID.
     */
    BAND_ID(): string | null;
    BAND_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Coarse region of the band, copied from its descriptor so a consumer
     * can select a mode without resolving the band.
     */
    SPECTRAL_REGIME(): phbSpectralRegime;
    /**
     * Effective wavelength of the band, nanometres (vacuum). Copied from the
     * descriptor; required for synthesis when the descriptor is not at hand.
     */
    WAVELENGTH_EFF_NM(): number;
    /**
     * Quantity VALUE states.
     */
    QUANTITY(): phbQuantity;
    /**
     * Calibration system when QUANTITY is MAGNITUDE.
     */
    MAGNITUDE_SYSTEM(): phbMagnitudeSystem;
    /**
     * The measurement, in QUANTITY's units.
     */
    VALUE(): number;
    /**
     * One-sigma uncertainty of VALUE, same units.
     */
    UNCERTAINTY(): number;
    /**
     * Detection or bound.
     */
    BOUND(): phbBoundKind;
    /**
     * How the value was obtained.
     */
    DERIVATION(): phbDerivation;
    /**
     * Mid-time of the observation, Modified Julian Date (TT), for sources
     * whose brightness varies. Absent for a catalogue mean.
     */
    EPOCH_MJD(): number;
    /**
     * Number of observations averaged into VALUE; 0 when unstated.
     */
    OBSERVATION_COUNT(): number;
    static startPHBMeasurement(builder: flatbuffers.Builder): void;
    static addBandId(builder: flatbuffers.Builder, BAND_IDOffset: flatbuffers.Offset): void;
    static addSpectralRegime(builder: flatbuffers.Builder, SPECTRAL_REGIME: phbSpectralRegime): void;
    static addWavelengthEffNm(builder: flatbuffers.Builder, WAVELENGTH_EFF_NM: number): void;
    static addQuantity(builder: flatbuffers.Builder, QUANTITY: phbQuantity): void;
    static addMagnitudeSystem(builder: flatbuffers.Builder, MAGNITUDE_SYSTEM: phbMagnitudeSystem): void;
    static addValue(builder: flatbuffers.Builder, VALUE: number): void;
    static addUncertainty(builder: flatbuffers.Builder, UNCERTAINTY: number): void;
    static addBound(builder: flatbuffers.Builder, BOUND: phbBoundKind): void;
    static addDerivation(builder: flatbuffers.Builder, DERIVATION: phbDerivation): void;
    static addEpochMjd(builder: flatbuffers.Builder, EPOCH_MJD: number): void;
    static addObservationCount(builder: flatbuffers.Builder, OBSERVATION_COUNT: number): void;
    static endPHBMeasurement(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createPHBMeasurement(builder: flatbuffers.Builder, BAND_IDOffset: flatbuffers.Offset, SPECTRAL_REGIME: phbSpectralRegime, WAVELENGTH_EFF_NM: number, QUANTITY: phbQuantity, MAGNITUDE_SYSTEM: phbMagnitudeSystem, VALUE: number, UNCERTAINTY: number, BOUND: phbBoundKind, DERIVATION: phbDerivation, EPOCH_MJD: number, OBSERVATION_COUNT: number): flatbuffers.Offset;
    unpack(): PHBMeasurementT;
    unpackTo(_o: PHBMeasurementT): void;
}
export declare class PHBMeasurementT implements flatbuffers.IGeneratedObject {
    BAND_ID: string | Uint8Array | null;
    SPECTRAL_REGIME: phbSpectralRegime;
    WAVELENGTH_EFF_NM: number;
    QUANTITY: phbQuantity;
    MAGNITUDE_SYSTEM: phbMagnitudeSystem;
    VALUE: number;
    UNCERTAINTY: number;
    BOUND: phbBoundKind;
    DERIVATION: phbDerivation;
    EPOCH_MJD: number;
    OBSERVATION_COUNT: number;
    constructor(BAND_ID?: string | Uint8Array | null, SPECTRAL_REGIME?: phbSpectralRegime, WAVELENGTH_EFF_NM?: number, QUANTITY?: phbQuantity, MAGNITUDE_SYSTEM?: phbMagnitudeSystem, VALUE?: number, UNCERTAINTY?: number, BOUND?: phbBoundKind, DERIVATION?: phbDerivation, EPOCH_MJD?: number, OBSERVATION_COUNT?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=PHBMeasurement.d.ts.map