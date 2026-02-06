import * as flatbuffers from 'flatbuffers';
import { irBand } from './irBand.js';
import { irDetectionType } from './irDetectionType.js';
/**
 * Infrared Observation
 */
export declare class IRO implements flatbuffers.IUnpackableObject<IROT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): IRO;
    static getRootAsIRO(bb: flatbuffers.ByteBuffer, obj?: IRO): IRO;
    static getSizePrefixedRootAsIRO(bb: flatbuffers.ByteBuffer, obj?: IRO): IRO;
    static bufferHasIdentifier(bb: flatbuffers.ByteBuffer): boolean;
    /**
     * Unique identifier
     */
    ID(): string | null;
    ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Reference to source entity
     */
    ID_ENTITY(): string | null;
    ID_ENTITY(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Sensor or observation name
     */
    NAME(): string | null;
    NAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Description of observation
     */
    DESCRIPTION(): string | null;
    DESCRIPTION(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Source entity designator
     */
    ENTITY(): string | null;
    ENTITY(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Observation epoch (ISO 8601)
     */
    EPOCH(): string | null;
    EPOCH(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Sensor identifier
     */
    SENSOR_ID(): string | null;
    SENSOR_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Target satellite number (if identified)
     */
    SAT_NO(): number;
    /**
     * Target object designator
     */
    OBJECT_DESIGNATOR(): string | null;
    OBJECT_DESIGNATOR(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * IR spectral band
     */
    BAND(): irBand;
    /**
     * Detection type
     */
    DETECTION_TYPE(): irDetectionType;
    /**
     * Right ascension in degrees
     */
    RA(): number;
    /**
     * Declination in degrees
     */
    DEC(): number;
    /**
     * Right ascension uncertainty in arcseconds
     */
    RA_UNC(): number;
    /**
     * Declination uncertainty in arcseconds
     */
    DEC_UNC(): number;
    /**
     * Azimuth angle in degrees
     */
    AZIMUTH(): number;
    /**
     * Elevation angle in degrees
     */
    ELEVATION(): number;
    /**
     * Range in km (if available)
     */
    RANGE(): number;
    /**
     * Irradiance in W/m^2
     */
    IRRADIANCE(): number;
    /**
     * Irradiance uncertainty in W/m^2
     */
    IRRADIANCE_UNC(): number;
    /**
     * Apparent IR magnitude
     */
    IR_MAG(): number;
    /**
     * Magnitude uncertainty
     */
    MAG_UNC(): number;
    /**
     * Effective temperature in Kelvin
     */
    TEMPERATURE(): number;
    /**
     * Integration time in seconds
     */
    INTEGRATION_TIME(): number;
    /**
     * Background irradiance in W/m^2/sr
     */
    BACKGROUND(): number;
    /**
     * Signal-to-noise ratio
     */
    SNR(): number;
    /**
     * Spectral data wavelengths in micrometers
     */
    WAVELENGTHS(index: number): number | null;
    wavelengthsLength(): number;
    wavelengthsArray(): Float64Array | null;
    /**
     * Spectral data values in W/m^2/um
     */
    SPECTRAL_VALUES(index: number): number | null;
    spectralValuesLength(): number;
    spectralValuesArray(): Float64Array | null;
    /**
     * Data quality indicator (0-9, 9=best)
     */
    QUALITY(): number;
    /**
     * Additional notes
     */
    NOTES(): string | null;
    NOTES(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    static startIRO(builder: flatbuffers.Builder): void;
    static addId(builder: flatbuffers.Builder, IDOffset: flatbuffers.Offset): void;
    static addIdEntity(builder: flatbuffers.Builder, ID_ENTITYOffset: flatbuffers.Offset): void;
    static addName(builder: flatbuffers.Builder, NAMEOffset: flatbuffers.Offset): void;
    static addDescription(builder: flatbuffers.Builder, DESCRIPTIONOffset: flatbuffers.Offset): void;
    static addEntity(builder: flatbuffers.Builder, ENTITYOffset: flatbuffers.Offset): void;
    static addEpoch(builder: flatbuffers.Builder, EPOCHOffset: flatbuffers.Offset): void;
    static addSensorId(builder: flatbuffers.Builder, SENSOR_IDOffset: flatbuffers.Offset): void;
    static addSatNo(builder: flatbuffers.Builder, SAT_NO: number): void;
    static addObjectDesignator(builder: flatbuffers.Builder, OBJECT_DESIGNATOROffset: flatbuffers.Offset): void;
    static addBand(builder: flatbuffers.Builder, BAND: irBand): void;
    static addDetectionType(builder: flatbuffers.Builder, DETECTION_TYPE: irDetectionType): void;
    static addRa(builder: flatbuffers.Builder, RA: number): void;
    static addDec(builder: flatbuffers.Builder, DEC: number): void;
    static addRaUnc(builder: flatbuffers.Builder, RA_UNC: number): void;
    static addDecUnc(builder: flatbuffers.Builder, DEC_UNC: number): void;
    static addAzimuth(builder: flatbuffers.Builder, AZIMUTH: number): void;
    static addElevation(builder: flatbuffers.Builder, ELEVATION: number): void;
    static addRange(builder: flatbuffers.Builder, RANGE: number): void;
    static addIrradiance(builder: flatbuffers.Builder, IRRADIANCE: number): void;
    static addIrradianceUnc(builder: flatbuffers.Builder, IRRADIANCE_UNC: number): void;
    static addIrMag(builder: flatbuffers.Builder, IR_MAG: number): void;
    static addMagUnc(builder: flatbuffers.Builder, MAG_UNC: number): void;
    static addTemperature(builder: flatbuffers.Builder, TEMPERATURE: number): void;
    static addIntegrationTime(builder: flatbuffers.Builder, INTEGRATION_TIME: number): void;
    static addBackground(builder: flatbuffers.Builder, BACKGROUND: number): void;
    static addSnr(builder: flatbuffers.Builder, SNR: number): void;
    static addWavelengths(builder: flatbuffers.Builder, WAVELENGTHSOffset: flatbuffers.Offset): void;
    static createWavelengthsVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createWavelengthsVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startWavelengthsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addSpectralValues(builder: flatbuffers.Builder, SPECTRAL_VALUESOffset: flatbuffers.Offset): void;
    static createSpectralValuesVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createSpectralValuesVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startSpectralValuesVector(builder: flatbuffers.Builder, numElems: number): void;
    static addQuality(builder: flatbuffers.Builder, QUALITY: number): void;
    static addNotes(builder: flatbuffers.Builder, NOTESOffset: flatbuffers.Offset): void;
    static endIRO(builder: flatbuffers.Builder): flatbuffers.Offset;
    static finishIROBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static finishSizePrefixedIROBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static createIRO(builder: flatbuffers.Builder, IDOffset: flatbuffers.Offset, ID_ENTITYOffset: flatbuffers.Offset, NAMEOffset: flatbuffers.Offset, DESCRIPTIONOffset: flatbuffers.Offset, ENTITYOffset: flatbuffers.Offset, EPOCHOffset: flatbuffers.Offset, SENSOR_IDOffset: flatbuffers.Offset, SAT_NO: number, OBJECT_DESIGNATOROffset: flatbuffers.Offset, BAND: irBand, DETECTION_TYPE: irDetectionType, RA: number, DEC: number, RA_UNC: number, DEC_UNC: number, AZIMUTH: number, ELEVATION: number, RANGE: number, IRRADIANCE: number, IRRADIANCE_UNC: number, IR_MAG: number, MAG_UNC: number, TEMPERATURE: number, INTEGRATION_TIME: number, BACKGROUND: number, SNR: number, WAVELENGTHSOffset: flatbuffers.Offset, SPECTRAL_VALUESOffset: flatbuffers.Offset, QUALITY: number, NOTESOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): IROT;
    unpackTo(_o: IROT): void;
}
export declare class IROT implements flatbuffers.IGeneratedObject {
    ID: string | Uint8Array | null;
    ID_ENTITY: string | Uint8Array | null;
    NAME: string | Uint8Array | null;
    DESCRIPTION: string | Uint8Array | null;
    ENTITY: string | Uint8Array | null;
    EPOCH: string | Uint8Array | null;
    SENSOR_ID: string | Uint8Array | null;
    SAT_NO: number;
    OBJECT_DESIGNATOR: string | Uint8Array | null;
    BAND: irBand;
    DETECTION_TYPE: irDetectionType;
    RA: number;
    DEC: number;
    RA_UNC: number;
    DEC_UNC: number;
    AZIMUTH: number;
    ELEVATION: number;
    RANGE: number;
    IRRADIANCE: number;
    IRRADIANCE_UNC: number;
    IR_MAG: number;
    MAG_UNC: number;
    TEMPERATURE: number;
    INTEGRATION_TIME: number;
    BACKGROUND: number;
    SNR: number;
    WAVELENGTHS: (number)[];
    SPECTRAL_VALUES: (number)[];
    QUALITY: number;
    NOTES: string | Uint8Array | null;
    constructor(ID?: string | Uint8Array | null, ID_ENTITY?: string | Uint8Array | null, NAME?: string | Uint8Array | null, DESCRIPTION?: string | Uint8Array | null, ENTITY?: string | Uint8Array | null, EPOCH?: string | Uint8Array | null, SENSOR_ID?: string | Uint8Array | null, SAT_NO?: number, OBJECT_DESIGNATOR?: string | Uint8Array | null, BAND?: irBand, DETECTION_TYPE?: irDetectionType, RA?: number, DEC?: number, RA_UNC?: number, DEC_UNC?: number, AZIMUTH?: number, ELEVATION?: number, RANGE?: number, IRRADIANCE?: number, IRRADIANCE_UNC?: number, IR_MAG?: number, MAG_UNC?: number, TEMPERATURE?: number, INTEGRATION_TIME?: number, BACKGROUND?: number, SNR?: number, WAVELENGTHS?: (number)[], SPECTRAL_VALUES?: (number)[], QUALITY?: number, NOTES?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=IRO.d.ts.map