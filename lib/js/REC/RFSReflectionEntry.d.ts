import * as flatbuffers from 'flatbuffers';
import { rfsIncidencePolarization } from './rfsIncidencePolarization.js';
/**
 * Reflection and transmission at one incidence angle and polarization. The
 * angular dependence of a real surface cannot be carried by a single
 * normal-incidence number.
 */
export declare class RFSReflectionEntry implements flatbuffers.IUnpackableObject<RFSReflectionEntryT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): RFSReflectionEntry;
    static getRootAsRFSReflectionEntry(bb: flatbuffers.ByteBuffer, obj?: RFSReflectionEntry): RFSReflectionEntry;
    static getSizePrefixedRootAsRFSReflectionEntry(bb: flatbuffers.ByteBuffer, obj?: RFSReflectionEntry): RFSReflectionEntry;
    /**
     * Frequency this entry is stated at, megahertz.
     */
    FREQUENCY_MHZ(): number;
    /**
     * Angle from the surface normal, degrees [0-90).
     */
    INCIDENCE_ANGLE_DEG(): number;
    POLARIZATION(): rfsIncidencePolarization;
    /**
     * Magnitude of the field reflection coefficient [0-1].
     */
    REFLECTION_COEFFICIENT_MAGNITUDE(): number;
    /**
     * Phase of the field reflection coefficient, degrees.
     */
    REFLECTION_COEFFICIENT_PHASE_DEG(): number;
    /**
     * Reflection loss, dB (positive).
     */
    REFLECTION_LOSS_DB(): number;
    /**
     * Loss through the material at this angle, dB (positive).
     */
    TRANSMISSION_LOSS_DB(): number;
    /**
     * Power removed from the specular direction by surface roughness, dB.
     */
    SCATTERING_LOSS_DB(): number;
    static startRFSReflectionEntry(builder: flatbuffers.Builder): void;
    static addFrequencyMhz(builder: flatbuffers.Builder, FREQUENCY_MHZ: number): void;
    static addIncidenceAngleDeg(builder: flatbuffers.Builder, INCIDENCE_ANGLE_DEG: number): void;
    static addPolarization(builder: flatbuffers.Builder, POLARIZATION: rfsIncidencePolarization): void;
    static addReflectionCoefficientMagnitude(builder: flatbuffers.Builder, REFLECTION_COEFFICIENT_MAGNITUDE: number): void;
    static addReflectionCoefficientPhaseDeg(builder: flatbuffers.Builder, REFLECTION_COEFFICIENT_PHASE_DEG: number): void;
    static addReflectionLossDb(builder: flatbuffers.Builder, REFLECTION_LOSS_DB: number): void;
    static addTransmissionLossDb(builder: flatbuffers.Builder, TRANSMISSION_LOSS_DB: number): void;
    static addScatteringLossDb(builder: flatbuffers.Builder, SCATTERING_LOSS_DB: number): void;
    static endRFSReflectionEntry(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createRFSReflectionEntry(builder: flatbuffers.Builder, FREQUENCY_MHZ: number, INCIDENCE_ANGLE_DEG: number, POLARIZATION: rfsIncidencePolarization, REFLECTION_COEFFICIENT_MAGNITUDE: number, REFLECTION_COEFFICIENT_PHASE_DEG: number, REFLECTION_LOSS_DB: number, TRANSMISSION_LOSS_DB: number, SCATTERING_LOSS_DB: number): flatbuffers.Offset;
    unpack(): RFSReflectionEntryT;
    unpackTo(_o: RFSReflectionEntryT): void;
}
export declare class RFSReflectionEntryT implements flatbuffers.IGeneratedObject {
    FREQUENCY_MHZ: number;
    INCIDENCE_ANGLE_DEG: number;
    POLARIZATION: rfsIncidencePolarization;
    REFLECTION_COEFFICIENT_MAGNITUDE: number;
    REFLECTION_COEFFICIENT_PHASE_DEG: number;
    REFLECTION_LOSS_DB: number;
    TRANSMISSION_LOSS_DB: number;
    SCATTERING_LOSS_DB: number;
    constructor(FREQUENCY_MHZ?: number, INCIDENCE_ANGLE_DEG?: number, POLARIZATION?: rfsIncidencePolarization, REFLECTION_COEFFICIENT_MAGNITUDE?: number, REFLECTION_COEFFICIENT_PHASE_DEG?: number, REFLECTION_LOSS_DB?: number, TRANSMISSION_LOSS_DB?: number, SCATTERING_LOSS_DB?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=RFSReflectionEntry.d.ts.map