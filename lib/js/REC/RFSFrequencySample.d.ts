import * as flatbuffers from 'flatbuffers';
/**
 * The material's electromagnetic properties at ONE frequency. A table of
 * these beats the power-law fit wherever it covers the frequency.
 */
export declare class RFSFrequencySample implements flatbuffers.IUnpackableObject<RFSFrequencySampleT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): RFSFrequencySample;
    static getRootAsRFSFrequencySample(bb: flatbuffers.ByteBuffer, obj?: RFSFrequencySample): RFSFrequencySample;
    static getSizePrefixedRootAsRFSFrequencySample(bb: flatbuffers.ByteBuffer, obj?: RFSFrequencySample): RFSFrequencySample;
    /**
     * Frequency this sample is stated at, megahertz — the `$RFB` MHz
     * convention. A join to `$IQC` (hertz) converts explicitly at the join.
     */
    FREQUENCY_MHZ(): number;
    /**
     * Real part of the relative permittivity.
     */
    RELATIVE_PERMITTIVITY_REAL(): number;
    /**
     * Imaginary part of the relative permittivity (loss term), stated as a
     * POSITIVE magnitude.
     */
    RELATIVE_PERMITTIVITY_IMAGINARY(): number;
    /**
     * Conductivity, siemens per metre.
     */
    CONDUCTIVITY_S_PER_M(): number;
    /**
     * Loss tangent, dimensionless.
     */
    LOSS_TANGENT(): number;
    /**
     * Real and imaginary relative permeability. 1.0 and 0.0 for non-magnetic
     * materials — stated, not assumed.
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
     * Loss through the material at THICKNESS_M, dB (positive).
     */
    TRANSMISSION_LOSS_DB(): number;
    /**
     * Attenuation inside the material, dB per metre.
     */
    ATTENUATION_DB_PER_M(): number;
    static startRFSFrequencySample(builder: flatbuffers.Builder): void;
    static addFrequencyMhz(builder: flatbuffers.Builder, FREQUENCY_MHZ: number): void;
    static addRelativePermittivityReal(builder: flatbuffers.Builder, RELATIVE_PERMITTIVITY_REAL: number): void;
    static addRelativePermittivityImaginary(builder: flatbuffers.Builder, RELATIVE_PERMITTIVITY_IMAGINARY: number): void;
    static addConductivitySPerM(builder: flatbuffers.Builder, CONDUCTIVITY_S_PER_M: number): void;
    static addLossTangent(builder: flatbuffers.Builder, LOSS_TANGENT: number): void;
    static addRelativePermeabilityReal(builder: flatbuffers.Builder, RELATIVE_PERMEABILITY_REAL: number): void;
    static addRelativePermeabilityImaginary(builder: flatbuffers.Builder, RELATIVE_PERMEABILITY_IMAGINARY: number): void;
    static addReflectivity(builder: flatbuffers.Builder, REFLECTIVITY: number): void;
    static addReflectionLossDb(builder: flatbuffers.Builder, REFLECTION_LOSS_DB: number): void;
    static addTransmissionLossDb(builder: flatbuffers.Builder, TRANSMISSION_LOSS_DB: number): void;
    static addAttenuationDbPerM(builder: flatbuffers.Builder, ATTENUATION_DB_PER_M: number): void;
    static endRFSFrequencySample(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createRFSFrequencySample(builder: flatbuffers.Builder, FREQUENCY_MHZ: number, RELATIVE_PERMITTIVITY_REAL: number, RELATIVE_PERMITTIVITY_IMAGINARY: number, CONDUCTIVITY_S_PER_M: number, LOSS_TANGENT: number, RELATIVE_PERMEABILITY_REAL: number, RELATIVE_PERMEABILITY_IMAGINARY: number, REFLECTIVITY: number, REFLECTION_LOSS_DB: number, TRANSMISSION_LOSS_DB: number, ATTENUATION_DB_PER_M: number): flatbuffers.Offset;
    unpack(): RFSFrequencySampleT;
    unpackTo(_o: RFSFrequencySampleT): void;
}
export declare class RFSFrequencySampleT implements flatbuffers.IGeneratedObject {
    FREQUENCY_MHZ: number;
    RELATIVE_PERMITTIVITY_REAL: number;
    RELATIVE_PERMITTIVITY_IMAGINARY: number;
    CONDUCTIVITY_S_PER_M: number;
    LOSS_TANGENT: number;
    RELATIVE_PERMEABILITY_REAL: number;
    RELATIVE_PERMEABILITY_IMAGINARY: number;
    REFLECTIVITY: number;
    REFLECTION_LOSS_DB: number;
    TRANSMISSION_LOSS_DB: number;
    ATTENUATION_DB_PER_M: number;
    constructor(FREQUENCY_MHZ?: number, RELATIVE_PERMITTIVITY_REAL?: number, RELATIVE_PERMITTIVITY_IMAGINARY?: number, CONDUCTIVITY_S_PER_M?: number, LOSS_TANGENT?: number, RELATIVE_PERMEABILITY_REAL?: number, RELATIVE_PERMEABILITY_IMAGINARY?: number, REFLECTIVITY?: number, REFLECTION_LOSS_DB?: number, TRANSMISSION_LOSS_DB?: number, ATTENUATION_DB_PER_M?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=RFSFrequencySample.d.ts.map