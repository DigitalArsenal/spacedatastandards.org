import * as flatbuffers from 'flatbuffers';
import { OPPProvenance, OPPProvenanceT } from './OPPProvenance.js';
import { rfPolarization } from './rfPolarization.js';
import { snrAntennaPattern } from './snrAntennaPattern.js';
/**
 * Radio-frequency parameters. Positive quantities use 0 for "not stated";
 * ANTENNA_GAIN_DBI is signed and uses NaN.
 */
export declare class SNRRfParameters implements flatbuffers.IUnpackableObject<SNRRfParametersT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): SNRRfParameters;
    static getRootAsSNRRfParameters(bb: flatbuffers.ByteBuffer, obj?: SNRRfParameters): SNRRfParameters;
    static getSizePrefixedRootAsSNRRfParameters(bb: flatbuffers.ByteBuffer, obj?: SNRRfParameters): SNRRfParameters;
    ANTENNA_PATTERN(): snrAntennaPattern;
    /**
     * Peak transmit power, W.
     */
    PEAK_POWER_W(): number;
    /**
     * Antenna gain, dBi. NaN = not stated.
     */
    ANTENNA_GAIN_DBI(): number;
    /**
     * 3 dB beamwidth in azimuth, degrees.
     */
    BEAMWIDTH_AZIMUTH_DEG(): number;
    /**
     * 3 dB beamwidth in elevation, degrees.
     */
    BEAMWIDTH_ELEVATION_DEG(): number;
    /**
     * Instantaneous bandwidth, Hz.
     */
    BANDWIDTH_HZ(): number;
    POLARIZATION(): rfPolarization;
    /**
     * Pulse repetition frequency, Hz (radar).
     */
    PRF_HZ(): number;
    /**
     * Pulse width, seconds (radar).
     */
    PULSE_WIDTH_S(): number;
    /**
     * Where these values were read, when it differs from the record's PROVENANCE.
     */
    PROVENANCE(obj?: OPPProvenance): OPPProvenance | null;
    static startSNRRfParameters(builder: flatbuffers.Builder): void;
    static addAntennaPattern(builder: flatbuffers.Builder, ANTENNA_PATTERN: snrAntennaPattern): void;
    static addPeakPowerW(builder: flatbuffers.Builder, PEAK_POWER_W: number): void;
    static addAntennaGainDbi(builder: flatbuffers.Builder, ANTENNA_GAIN_DBI: number): void;
    static addBeamwidthAzimuthDeg(builder: flatbuffers.Builder, BEAMWIDTH_AZIMUTH_DEG: number): void;
    static addBeamwidthElevationDeg(builder: flatbuffers.Builder, BEAMWIDTH_ELEVATION_DEG: number): void;
    static addBandwidthHz(builder: flatbuffers.Builder, BANDWIDTH_HZ: number): void;
    static addPolarization(builder: flatbuffers.Builder, POLARIZATION: rfPolarization): void;
    static addPrfHz(builder: flatbuffers.Builder, PRF_HZ: number): void;
    static addPulseWidthS(builder: flatbuffers.Builder, PULSE_WIDTH_S: number): void;
    static addProvenance(builder: flatbuffers.Builder, PROVENANCEOffset: flatbuffers.Offset): void;
    static endSNRRfParameters(builder: flatbuffers.Builder): flatbuffers.Offset;
    unpack(): SNRRfParametersT;
    unpackTo(_o: SNRRfParametersT): void;
}
export declare class SNRRfParametersT implements flatbuffers.IGeneratedObject {
    ANTENNA_PATTERN: snrAntennaPattern;
    PEAK_POWER_W: number;
    ANTENNA_GAIN_DBI: number;
    BEAMWIDTH_AZIMUTH_DEG: number;
    BEAMWIDTH_ELEVATION_DEG: number;
    BANDWIDTH_HZ: number;
    POLARIZATION: rfPolarization;
    PRF_HZ: number;
    PULSE_WIDTH_S: number;
    PROVENANCE: OPPProvenanceT | null;
    constructor(ANTENNA_PATTERN?: snrAntennaPattern, PEAK_POWER_W?: number, ANTENNA_GAIN_DBI?: number, BEAMWIDTH_AZIMUTH_DEG?: number, BEAMWIDTH_ELEVATION_DEG?: number, BANDWIDTH_HZ?: number, POLARIZATION?: rfPolarization, PRF_HZ?: number, PULSE_WIDTH_S?: number, PROVENANCE?: OPPProvenanceT | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=SNRRfParameters.d.ts.map