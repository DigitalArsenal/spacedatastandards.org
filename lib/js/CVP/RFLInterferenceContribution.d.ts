import * as flatbuffers from 'flatbuffers';
/**
 * One interfering contribution to one sample. SPARSE: entries exist only
 * where a contribution was computed, so a dense matrix is never forced into
 * existence to say "no interference computed".
 */
export declare class RFLInterferenceContribution implements flatbuffers.IUnpackableObject<RFLInterferenceContributionT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): RFLInterferenceContribution;
    static getRootAsRFLInterferenceContribution(bb: flatbuffers.ByteBuffer, obj?: RFLInterferenceContribution): RFLInterferenceContribution;
    static getSizePrefixedRootAsRFLInterferenceContribution(bb: flatbuffers.ByteBuffer, obj?: RFLInterferenceContribution): RFLInterferenceContribution;
    /**
     * Index into the sample arrays this contribution applies to.
     */
    SAMPLE_INDEX(): number;
    /**
     * Endpoint identifier of the interfering emitter, when it is an endpoint of
     * this record.
     */
    SOURCE_ENDPOINT_ID(): string | null;
    SOURCE_ENDPOINT_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * `$RFE.ID` of the interfering emitter.
     */
    RFE_ID(): string | null;
    RFE_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * `$RFB.ID` of the interfering emission.
     */
    RFB_ID(): string | null;
    RFB_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Interfering object's catalogue number, 0 when unbound.
     */
    NORAD_CAT_ID(): number;
    /**
     * Received interfering power at the victim receiver, dBW.
     */
    INTERFERENCE_POWER_DBW(): number;
    /**
     * Angular separation between the wanted and interfering paths at the
     * victim receiver, degrees.
     */
    TOPOCENTRIC_SEPARATION_DEG(): number;
    /**
     * Fraction of the victim's bandwidth overlapped by this emission [0-1].
     */
    SPECTRAL_OVERLAP_FRACTION(): number;
    /**
     * Polarization isolation applied to this contribution, dB.
     */
    POLARIZATION_ISOLATION_DB(): number;
    /**
     * Discrimination applied from the victim antenna pattern, dB.
     */
    ANTENNA_DISCRIMINATION_DB(): number;
    static startRFLInterferenceContribution(builder: flatbuffers.Builder): void;
    static addSampleIndex(builder: flatbuffers.Builder, SAMPLE_INDEX: number): void;
    static addSourceEndpointId(builder: flatbuffers.Builder, SOURCE_ENDPOINT_IDOffset: flatbuffers.Offset): void;
    static addRfeId(builder: flatbuffers.Builder, RFE_IDOffset: flatbuffers.Offset): void;
    static addRfbId(builder: flatbuffers.Builder, RFB_IDOffset: flatbuffers.Offset): void;
    static addNoradCatId(builder: flatbuffers.Builder, NORAD_CAT_ID: number): void;
    static addInterferencePowerDbw(builder: flatbuffers.Builder, INTERFERENCE_POWER_DBW: number): void;
    static addTopocentricSeparationDeg(builder: flatbuffers.Builder, TOPOCENTRIC_SEPARATION_DEG: number): void;
    static addSpectralOverlapFraction(builder: flatbuffers.Builder, SPECTRAL_OVERLAP_FRACTION: number): void;
    static addPolarizationIsolationDb(builder: flatbuffers.Builder, POLARIZATION_ISOLATION_DB: number): void;
    static addAntennaDiscriminationDb(builder: flatbuffers.Builder, ANTENNA_DISCRIMINATION_DB: number): void;
    static endRFLInterferenceContribution(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createRFLInterferenceContribution(builder: flatbuffers.Builder, SAMPLE_INDEX: number, SOURCE_ENDPOINT_IDOffset: flatbuffers.Offset, RFE_IDOffset: flatbuffers.Offset, RFB_IDOffset: flatbuffers.Offset, NORAD_CAT_ID: number, INTERFERENCE_POWER_DBW: number, TOPOCENTRIC_SEPARATION_DEG: number, SPECTRAL_OVERLAP_FRACTION: number, POLARIZATION_ISOLATION_DB: number, ANTENNA_DISCRIMINATION_DB: number): flatbuffers.Offset;
    unpack(): RFLInterferenceContributionT;
    unpackTo(_o: RFLInterferenceContributionT): void;
}
export declare class RFLInterferenceContributionT implements flatbuffers.IGeneratedObject {
    SAMPLE_INDEX: number;
    SOURCE_ENDPOINT_ID: string | Uint8Array | null;
    RFE_ID: string | Uint8Array | null;
    RFB_ID: string | Uint8Array | null;
    NORAD_CAT_ID: number;
    INTERFERENCE_POWER_DBW: number;
    TOPOCENTRIC_SEPARATION_DEG: number;
    SPECTRAL_OVERLAP_FRACTION: number;
    POLARIZATION_ISOLATION_DB: number;
    ANTENNA_DISCRIMINATION_DB: number;
    constructor(SAMPLE_INDEX?: number, SOURCE_ENDPOINT_ID?: string | Uint8Array | null, RFE_ID?: string | Uint8Array | null, RFB_ID?: string | Uint8Array | null, NORAD_CAT_ID?: number, INTERFERENCE_POWER_DBW?: number, TOPOCENTRIC_SEPARATION_DEG?: number, SPECTRAL_OVERLAP_FRACTION?: number, POLARIZATION_ISOLATION_DB?: number, ANTENNA_DISCRIMINATION_DB?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=RFLInterferenceContribution.d.ts.map