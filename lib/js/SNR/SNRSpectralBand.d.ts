import * as flatbuffers from 'flatbuffers';
import { OPPProvenance, OPPProvenanceT } from './OPPProvenance.js';
import { snrBandDirection } from './snrBandDirection.js';
/**
 * One spectral band of a sensor, in Hz. Hz is the unit for every band, optical
 * included; a consumer that wants wavelength converts (lambda = c / f).
 * Positive quantities use the default 0 for "not stated".
 */
export declare class SNRSpectralBand implements flatbuffers.IUnpackableObject<SNRSpectralBandT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): SNRSpectralBand;
    static getRootAsSNRSpectralBand(bb: flatbuffers.ByteBuffer, obj?: SNRSpectralBand): SNRSpectralBand;
    static getSizePrefixedRootAsSNRSpectralBand(bb: flatbuffers.ByteBuffer, obj?: SNRSpectralBand): SNRSpectralBand;
    /**
     * The band as its source names it: "UHF", "X-band", "VNIR", "Green".
     */
    NAME(): string | null;
    NAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * The designation exactly as the source states it ("UHF", "X", "Ka", "SWIR").
     * Verbatim, never derived from the frequencies. RF designations use $RFB
     * rfBandDesignation spellings. Absent when the source states none.
     */
    DESIGNATION(): string | null;
    DESIGNATION(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Lower edge, Hz. 0 = not stated.
     */
    FREQ_LOW_HZ(): number;
    /**
     * Upper edge, Hz. 0 = not stated.
     */
    FREQ_HIGH_HZ(): number;
    DIRECTION(): snrBandDirection;
    /**
     * Where this band was read, when it differs from the record's PROVENANCE.
     */
    PROVENANCE(obj?: OPPProvenance): OPPProvenance | null;
    static startSNRSpectralBand(builder: flatbuffers.Builder): void;
    static addName(builder: flatbuffers.Builder, NAMEOffset: flatbuffers.Offset): void;
    static addDesignation(builder: flatbuffers.Builder, DESIGNATIONOffset: flatbuffers.Offset): void;
    static addFreqLowHz(builder: flatbuffers.Builder, FREQ_LOW_HZ: number): void;
    static addFreqHighHz(builder: flatbuffers.Builder, FREQ_HIGH_HZ: number): void;
    static addDirection(builder: flatbuffers.Builder, DIRECTION: snrBandDirection): void;
    static addProvenance(builder: flatbuffers.Builder, PROVENANCEOffset: flatbuffers.Offset): void;
    static endSNRSpectralBand(builder: flatbuffers.Builder): flatbuffers.Offset;
    unpack(): SNRSpectralBandT;
    unpackTo(_o: SNRSpectralBandT): void;
}
export declare class SNRSpectralBandT implements flatbuffers.IGeneratedObject {
    NAME: string | Uint8Array | null;
    DESIGNATION: string | Uint8Array | null;
    FREQ_LOW_HZ: number;
    FREQ_HIGH_HZ: number;
    DIRECTION: snrBandDirection;
    PROVENANCE: OPPProvenanceT | null;
    constructor(NAME?: string | Uint8Array | null, DESIGNATION?: string | Uint8Array | null, FREQ_LOW_HZ?: number, FREQ_HIGH_HZ?: number, DIRECTION?: snrBandDirection, PROVENANCE?: OPPProvenanceT | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=SNRSpectralBand.d.ts.map