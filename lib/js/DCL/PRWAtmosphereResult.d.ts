import * as flatbuffers from 'flatbuffers';
import { PRWSpeciesDensity, PRWSpeciesDensityT } from './PRWSpeciesDensity.js';
import { prwAtmosphereFamily } from './prwAtmosphereFamily.js';
export declare class PRWAtmosphereResult implements flatbuffers.IUnpackableObject<PRWAtmosphereResultT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): PRWAtmosphereResult;
    static getRootAsPRWAtmosphereResult(bb: flatbuffers.ByteBuffer, obj?: PRWAtmosphereResult): PRWAtmosphereResult;
    static getSizePrefixedRootAsPRWAtmosphereResult(bb: flatbuffers.ByteBuffer, obj?: PRWAtmosphereResult): PRWAtmosphereResult;
    ATMOSPHERE_MODEL(): prwAtmosphereFamily;
    VARIANT(): string | null;
    VARIANT(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    ALTITUDE_M(): number;
    DENSITY_KG_M3(): number;
    TEMPERATURE_K(): number;
    /**
     * True when TEMPERATURE_K carries a value; false means absent.
     */
    HAS_TEMPERATURE_K(): boolean;
    EXOSPHERIC_TEMPERATURE_K(): number;
    /**
     * True when EXOSPHERIC_TEMPERATURE_K carries a value; false means absent.
     */
    HAS_EXOSPHERIC_TEMPERATURE_K(): boolean;
    SCALE_HEIGHT_M(): number;
    /**
     * True when SCALE_HEIGHT_M carries a value; false means absent.
     */
    HAS_SCALE_HEIGHT_M(): boolean;
    NUMBER_DENSITIES(index: number, obj?: PRWSpeciesDensity): PRWSpeciesDensity | null;
    numberDensitiesLength(): number;
    static startPRWAtmosphereResult(builder: flatbuffers.Builder): void;
    static addAtmosphereModel(builder: flatbuffers.Builder, ATMOSPHERE_MODEL: prwAtmosphereFamily): void;
    static addVariant(builder: flatbuffers.Builder, VARIANTOffset: flatbuffers.Offset): void;
    static addAltitudeM(builder: flatbuffers.Builder, ALTITUDE_M: number): void;
    static addDensityKgM3(builder: flatbuffers.Builder, DENSITY_KG_M3: number): void;
    static addTemperatureK(builder: flatbuffers.Builder, TEMPERATURE_K: number): void;
    static addHasTemperatureK(builder: flatbuffers.Builder, HAS_TEMPERATURE_K: boolean): void;
    static addExosphericTemperatureK(builder: flatbuffers.Builder, EXOSPHERIC_TEMPERATURE_K: number): void;
    static addHasExosphericTemperatureK(builder: flatbuffers.Builder, HAS_EXOSPHERIC_TEMPERATURE_K: boolean): void;
    static addScaleHeightM(builder: flatbuffers.Builder, SCALE_HEIGHT_M: number): void;
    static addHasScaleHeightM(builder: flatbuffers.Builder, HAS_SCALE_HEIGHT_M: boolean): void;
    static addNumberDensities(builder: flatbuffers.Builder, NUMBER_DENSITIESOffset: flatbuffers.Offset): void;
    static createNumberDensitiesVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startNumberDensitiesVector(builder: flatbuffers.Builder, numElems: number): void;
    static endPRWAtmosphereResult(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createPRWAtmosphereResult(builder: flatbuffers.Builder, ATMOSPHERE_MODEL: prwAtmosphereFamily, VARIANTOffset: flatbuffers.Offset, ALTITUDE_M: number, DENSITY_KG_M3: number, TEMPERATURE_K: number, HAS_TEMPERATURE_K: boolean, EXOSPHERIC_TEMPERATURE_K: number, HAS_EXOSPHERIC_TEMPERATURE_K: boolean, SCALE_HEIGHT_M: number, HAS_SCALE_HEIGHT_M: boolean, NUMBER_DENSITIESOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): PRWAtmosphereResultT;
    unpackTo(_o: PRWAtmosphereResultT): void;
}
export declare class PRWAtmosphereResultT implements flatbuffers.IGeneratedObject {
    ATMOSPHERE_MODEL: prwAtmosphereFamily;
    VARIANT: string | Uint8Array | null;
    ALTITUDE_M: number;
    DENSITY_KG_M3: number;
    TEMPERATURE_K: number;
    HAS_TEMPERATURE_K: boolean;
    EXOSPHERIC_TEMPERATURE_K: number;
    HAS_EXOSPHERIC_TEMPERATURE_K: boolean;
    SCALE_HEIGHT_M: number;
    HAS_SCALE_HEIGHT_M: boolean;
    NUMBER_DENSITIES: (PRWSpeciesDensityT)[];
    constructor(ATMOSPHERE_MODEL?: prwAtmosphereFamily, VARIANT?: string | Uint8Array | null, ALTITUDE_M?: number, DENSITY_KG_M3?: number, TEMPERATURE_K?: number, HAS_TEMPERATURE_K?: boolean, EXOSPHERIC_TEMPERATURE_K?: number, HAS_EXOSPHERIC_TEMPERATURE_K?: boolean, SCALE_HEIGHT_M?: number, HAS_SCALE_HEIGHT_M?: boolean, NUMBER_DENSITIES?: (PRWSpeciesDensityT)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=PRWAtmosphereResult.d.ts.map