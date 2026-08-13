import * as flatbuffers from 'flatbuffers';
import { RFSFrequencySample, RFSFrequencySampleT } from './RFSFrequencySample.js';
import { RFSGeometryRef, RFSGeometryRefT } from './RFSGeometryRef.js';
import { RFSProvenance, RFSProvenanceT } from './RFSProvenance.js';
import { RFSReflectionEntry, RFSReflectionEntryT } from './RFSReflectionEntry.js';
import { rfsMaterialClass } from './rfsMaterialClass.js';
import { rfsScatteringClass } from './rfsScatteringClass.js';
/**
 * RF Surface Material
 */
export declare class RFS implements flatbuffers.IUnpackableObject<RFST> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): RFS;
    static getRootAsRFS(bb: flatbuffers.ByteBuffer, obj?: RFS): RFS;
    static getSizePrefixedRootAsRFS(bb: flatbuffers.ByteBuffer, obj?: RFS): RFS;
    static bufferHasIdentifier(bb: flatbuffers.ByteBuffer): boolean;
    /**
     * Stable identifier of this material. Joined by
     * `$RFL.RFLObstruction.MATERIAL_ID` and `$CVP.CVPObstacleRef.MATERIAL_ID`.
     */
    MATERIAL_ID(): string;
    MATERIAL_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    /**
     * Name as its source states it, verbatim.
     */
    NAME(): string | null;
    NAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    MATERIAL_CLASS(): rfsMaterialClass;
    /**
     * Free-text description of the surface, not of its vendor.
     */
    DESCRIPTION(): string | null;
    DESCRIPTION(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Frequency range over which this record's parameters are valid,
     * megahertz. A solver MUST refuse to evaluate outside it rather than
     * extrapolate.
     */
    FREQUENCY_MIN_MHZ(): number;
    FREQUENCY_MAX_MHZ(): number;
    /**
     * relative permittivity = PERMITTIVITY_COEFFICIENT_A * f^PERMITTIVITY_EXPONENT_B
     */
    PERMITTIVITY_COEFFICIENT_A(): number;
    PERMITTIVITY_EXPONENT_B(): number;
    /**
     * conductivity [S/m] = CONDUCTIVITY_COEFFICIENT_C * f^CONDUCTIVITY_EXPONENT_D
     */
    CONDUCTIVITY_COEFFICIENT_C(): number;
    CONDUCTIVITY_EXPONENT_D(): number;
    /**
     * Frequency the scalar values below are stated at, megahertz. Without it
     * they are uninterpretable.
     */
    REFERENCE_FREQUENCY_MHZ(): number;
    RELATIVE_PERMITTIVITY_REAL(): number;
    /**
     * Loss term, stated as a POSITIVE magnitude.
     */
    RELATIVE_PERMITTIVITY_IMAGINARY(): number;
    CONDUCTIVITY_S_PER_M(): number;
    LOSS_TANGENT(): number;
    /**
     * 1.0 and 0.0 for non-magnetic materials — stated, not assumed.
     */
    RELATIVE_PERMEABILITY_REAL(): number;
    RELATIVE_PERMEABILITY_IMAGINARY(): number;
    /**
     * Power reflected at normal incidence as a ratio [0-1].
     */
    REFLECTIVITY(): number;
    /**
     * Reflection loss at normal incidence, dB (positive).
     */
    REFLECTION_LOSS_DB(): number;
    /**
     * Thickness the transmission and penetration losses are stated for, metres.
     * A transmission loss without a thickness cannot be rescaled.
     */
    THICKNESS_M(): number;
    /**
     * Loss through THICKNESS_M at normal incidence, dB (positive).
     */
    TRANSMISSION_LOSS_DB(): number;
    /**
     * Attenuation inside the material, dB per metre.
     */
    ATTENUATION_DB_PER_M(): number;
    /**
     * Fraction of incident power absorbed at normal incidence [0-1].
     */
    ABSORPTION_COEFFICIENT(): number;
    /**
     * RMS surface roughness, metres. Roughness is what decides whether a
     * surface is a mirror or a scatterer at a given wavelength.
     */
    SURFACE_ROUGHNESS_RMS_M(): number;
    /**
     * Correlation length of the roughness, metres.
     */
    ROUGHNESS_CORRELATION_LENGTH_M(): number;
    SCATTERING_CLASS(): rfsScatteringClass;
    /**
     * Fraction of non-absorbed power leaving diffusely [0-1].
     */
    DIFFUSE_SCATTERING_COEFFICIENT(): number;
    /**
     * Backscatter coefficient, dB.
     */
    BACKSCATTER_COEFFICIENT_DB(): number;
    /**
     * Temperature the properties were evaluated at, kelvin.
     */
    TEMPERATURE_K(): number;
    /**
     * Volumetric moisture content [0-1]. Wet concrete and dry concrete are
     * different materials at RF.
     */
    MOISTURE_CONTENT_FRACTION(): number;
    /**
     * Salinity, practical salinity units, for water surfaces.
     */
    SALINITY_PSU(): number;
    /**
     * Per-frequency samples. Where present and covering the frequency, these
     * take precedence over the power law.
     */
    FREQUENCY_SAMPLES(index: number, obj?: RFSFrequencySample): RFSFrequencySample | null;
    frequencySamplesLength(): number;
    /**
     * Angular and polarization dependence.
     */
    REFLECTION_TABLE(index: number, obj?: RFSReflectionEntry): RFSReflectionEntry | null;
    reflectionTableLength(): number;
    /**
     * Geometry this material is attached to. A record may attach one material
     * to several obstacles.
     */
    GEOMETRY(index: number, obj?: RFSGeometryRef): RFSGeometryRef | null;
    geometryLength(): number;
    /**
     * Provenance. Required.
     */
    PROVENANCE(obj?: RFSProvenance): RFSProvenance | null;
    /**
     * Unix ms this record was serialized.
     */
    COMPUTED_AT(): bigint;
    /**
     * `$EPM` identifier of the producing node.
     */
    PRODUCER_ID(): string | null;
    PRODUCER_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Ed25519 signature by the producing `$EPM`.
     */
    SIGNATURE(index: number): number | null;
    signatureLength(): number;
    signatureArray(): Uint8Array | null;
    static startRFS(builder: flatbuffers.Builder): void;
    static addMaterialId(builder: flatbuffers.Builder, MATERIAL_IDOffset: flatbuffers.Offset): void;
    static addName(builder: flatbuffers.Builder, NAMEOffset: flatbuffers.Offset): void;
    static addMaterialClass(builder: flatbuffers.Builder, MATERIAL_CLASS: rfsMaterialClass): void;
    static addDescription(builder: flatbuffers.Builder, DESCRIPTIONOffset: flatbuffers.Offset): void;
    static addFrequencyMinMhz(builder: flatbuffers.Builder, FREQUENCY_MIN_MHZ: number): void;
    static addFrequencyMaxMhz(builder: flatbuffers.Builder, FREQUENCY_MAX_MHZ: number): void;
    static addPermittivityCoefficientA(builder: flatbuffers.Builder, PERMITTIVITY_COEFFICIENT_A: number): void;
    static addPermittivityExponentB(builder: flatbuffers.Builder, PERMITTIVITY_EXPONENT_B: number): void;
    static addConductivityCoefficientC(builder: flatbuffers.Builder, CONDUCTIVITY_COEFFICIENT_C: number): void;
    static addConductivityExponentD(builder: flatbuffers.Builder, CONDUCTIVITY_EXPONENT_D: number): void;
    static addReferenceFrequencyMhz(builder: flatbuffers.Builder, REFERENCE_FREQUENCY_MHZ: number): void;
    static addRelativePermittivityReal(builder: flatbuffers.Builder, RELATIVE_PERMITTIVITY_REAL: number): void;
    static addRelativePermittivityImaginary(builder: flatbuffers.Builder, RELATIVE_PERMITTIVITY_IMAGINARY: number): void;
    static addConductivitySPerM(builder: flatbuffers.Builder, CONDUCTIVITY_S_PER_M: number): void;
    static addLossTangent(builder: flatbuffers.Builder, LOSS_TANGENT: number): void;
    static addRelativePermeabilityReal(builder: flatbuffers.Builder, RELATIVE_PERMEABILITY_REAL: number): void;
    static addRelativePermeabilityImaginary(builder: flatbuffers.Builder, RELATIVE_PERMEABILITY_IMAGINARY: number): void;
    static addReflectivity(builder: flatbuffers.Builder, REFLECTIVITY: number): void;
    static addReflectionLossDb(builder: flatbuffers.Builder, REFLECTION_LOSS_DB: number): void;
    static addThicknessM(builder: flatbuffers.Builder, THICKNESS_M: number): void;
    static addTransmissionLossDb(builder: flatbuffers.Builder, TRANSMISSION_LOSS_DB: number): void;
    static addAttenuationDbPerM(builder: flatbuffers.Builder, ATTENUATION_DB_PER_M: number): void;
    static addAbsorptionCoefficient(builder: flatbuffers.Builder, ABSORPTION_COEFFICIENT: number): void;
    static addSurfaceRoughnessRmsM(builder: flatbuffers.Builder, SURFACE_ROUGHNESS_RMS_M: number): void;
    static addRoughnessCorrelationLengthM(builder: flatbuffers.Builder, ROUGHNESS_CORRELATION_LENGTH_M: number): void;
    static addScatteringClass(builder: flatbuffers.Builder, SCATTERING_CLASS: rfsScatteringClass): void;
    static addDiffuseScatteringCoefficient(builder: flatbuffers.Builder, DIFFUSE_SCATTERING_COEFFICIENT: number): void;
    static addBackscatterCoefficientDb(builder: flatbuffers.Builder, BACKSCATTER_COEFFICIENT_DB: number): void;
    static addTemperatureK(builder: flatbuffers.Builder, TEMPERATURE_K: number): void;
    static addMoistureContentFraction(builder: flatbuffers.Builder, MOISTURE_CONTENT_FRACTION: number): void;
    static addSalinityPsu(builder: flatbuffers.Builder, SALINITY_PSU: number): void;
    static addFrequencySamples(builder: flatbuffers.Builder, FREQUENCY_SAMPLESOffset: flatbuffers.Offset): void;
    static createFrequencySamplesVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startFrequencySamplesVector(builder: flatbuffers.Builder, numElems: number): void;
    static addReflectionTable(builder: flatbuffers.Builder, REFLECTION_TABLEOffset: flatbuffers.Offset): void;
    static createReflectionTableVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startReflectionTableVector(builder: flatbuffers.Builder, numElems: number): void;
    static addGeometry(builder: flatbuffers.Builder, GEOMETRYOffset: flatbuffers.Offset): void;
    static createGeometryVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startGeometryVector(builder: flatbuffers.Builder, numElems: number): void;
    static addProvenance(builder: flatbuffers.Builder, PROVENANCEOffset: flatbuffers.Offset): void;
    static addComputedAt(builder: flatbuffers.Builder, COMPUTED_AT: bigint): void;
    static addProducerId(builder: flatbuffers.Builder, PRODUCER_IDOffset: flatbuffers.Offset): void;
    static addSignature(builder: flatbuffers.Builder, SIGNATUREOffset: flatbuffers.Offset): void;
    static createSignatureVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startSignatureVector(builder: flatbuffers.Builder, numElems: number): void;
    static endRFS(builder: flatbuffers.Builder): flatbuffers.Offset;
    static finishRFSBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static finishSizePrefixedRFSBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    unpack(): RFST;
    unpackTo(_o: RFST): void;
}
export declare class RFST implements flatbuffers.IGeneratedObject {
    MATERIAL_ID: string | Uint8Array | null;
    NAME: string | Uint8Array | null;
    MATERIAL_CLASS: rfsMaterialClass;
    DESCRIPTION: string | Uint8Array | null;
    FREQUENCY_MIN_MHZ: number;
    FREQUENCY_MAX_MHZ: number;
    PERMITTIVITY_COEFFICIENT_A: number;
    PERMITTIVITY_EXPONENT_B: number;
    CONDUCTIVITY_COEFFICIENT_C: number;
    CONDUCTIVITY_EXPONENT_D: number;
    REFERENCE_FREQUENCY_MHZ: number;
    RELATIVE_PERMITTIVITY_REAL: number;
    RELATIVE_PERMITTIVITY_IMAGINARY: number;
    CONDUCTIVITY_S_PER_M: number;
    LOSS_TANGENT: number;
    RELATIVE_PERMEABILITY_REAL: number;
    RELATIVE_PERMEABILITY_IMAGINARY: number;
    REFLECTIVITY: number;
    REFLECTION_LOSS_DB: number;
    THICKNESS_M: number;
    TRANSMISSION_LOSS_DB: number;
    ATTENUATION_DB_PER_M: number;
    ABSORPTION_COEFFICIENT: number;
    SURFACE_ROUGHNESS_RMS_M: number;
    ROUGHNESS_CORRELATION_LENGTH_M: number;
    SCATTERING_CLASS: rfsScatteringClass;
    DIFFUSE_SCATTERING_COEFFICIENT: number;
    BACKSCATTER_COEFFICIENT_DB: number;
    TEMPERATURE_K: number;
    MOISTURE_CONTENT_FRACTION: number;
    SALINITY_PSU: number;
    FREQUENCY_SAMPLES: (RFSFrequencySampleT)[];
    REFLECTION_TABLE: (RFSReflectionEntryT)[];
    GEOMETRY: (RFSGeometryRefT)[];
    PROVENANCE: RFSProvenanceT | null;
    COMPUTED_AT: bigint;
    PRODUCER_ID: string | Uint8Array | null;
    SIGNATURE: (number)[];
    constructor(MATERIAL_ID?: string | Uint8Array | null, NAME?: string | Uint8Array | null, MATERIAL_CLASS?: rfsMaterialClass, DESCRIPTION?: string | Uint8Array | null, FREQUENCY_MIN_MHZ?: number, FREQUENCY_MAX_MHZ?: number, PERMITTIVITY_COEFFICIENT_A?: number, PERMITTIVITY_EXPONENT_B?: number, CONDUCTIVITY_COEFFICIENT_C?: number, CONDUCTIVITY_EXPONENT_D?: number, REFERENCE_FREQUENCY_MHZ?: number, RELATIVE_PERMITTIVITY_REAL?: number, RELATIVE_PERMITTIVITY_IMAGINARY?: number, CONDUCTIVITY_S_PER_M?: number, LOSS_TANGENT?: number, RELATIVE_PERMEABILITY_REAL?: number, RELATIVE_PERMEABILITY_IMAGINARY?: number, REFLECTIVITY?: number, REFLECTION_LOSS_DB?: number, THICKNESS_M?: number, TRANSMISSION_LOSS_DB?: number, ATTENUATION_DB_PER_M?: number, ABSORPTION_COEFFICIENT?: number, SURFACE_ROUGHNESS_RMS_M?: number, ROUGHNESS_CORRELATION_LENGTH_M?: number, SCATTERING_CLASS?: rfsScatteringClass, DIFFUSE_SCATTERING_COEFFICIENT?: number, BACKSCATTER_COEFFICIENT_DB?: number, TEMPERATURE_K?: number, MOISTURE_CONTENT_FRACTION?: number, SALINITY_PSU?: number, FREQUENCY_SAMPLES?: (RFSFrequencySampleT)[], REFLECTION_TABLE?: (RFSReflectionEntryT)[], GEOMETRY?: (RFSGeometryRefT)[], PROVENANCE?: RFSProvenanceT | null, COMPUTED_AT?: bigint, PRODUCER_ID?: string | Uint8Array | null, SIGNATURE?: (number)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=RFS.d.ts.map