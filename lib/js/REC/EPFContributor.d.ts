import * as flatbuffers from 'flatbuffers';
/**
 * One source's contribution to one sample.
 */
export declare class EPFContributor implements flatbuffers.IUnpackableObject<EPFContributorT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): EPFContributor;
    static getRootAsEPFContributor(bb: flatbuffers.ByteBuffer, obj?: EPFContributor): EPFContributor;
    static getSizePrefixedRootAsEPFContributor(bb: flatbuffers.ByteBuffer, obj?: EPFContributor): EPFContributor;
    CONTRIBUTOR_ID(): string;
    CONTRIBUTOR_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    SAMPLE_INDEX(): number;
    SOURCE_ENDPOINT_ID(): string | null;
    SOURCE_ENDPOINT_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    RFE_ID(): string | null;
    RFE_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    RFB_ID(): string | null;
    RFB_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    PAP_ID(): string | null;
    PAP_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    NORAD_CAT_ID(): number;
    INTERFERENCE_POWER_DBW(): number;
    /**
     * Pattern discrimination applied in the victim direction, dB.
     */
    ANTENNA_DISCRIMINATION_DB(): number;
    /**
     * Fraction of the victim measurement bandwidth overlapped [0-1].
     */
    SPECTRAL_OVERLAP_FRACTION(): number;
    CONTRIBUTION_VALUE(): number;
    CONTRIBUTION_UNITS(): string | null;
    CONTRIBUTION_UNITS(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    static startEPFContributor(builder: flatbuffers.Builder): void;
    static addContributorId(builder: flatbuffers.Builder, CONTRIBUTOR_IDOffset: flatbuffers.Offset): void;
    static addSampleIndex(builder: flatbuffers.Builder, SAMPLE_INDEX: number): void;
    static addSourceEndpointId(builder: flatbuffers.Builder, SOURCE_ENDPOINT_IDOffset: flatbuffers.Offset): void;
    static addRfeId(builder: flatbuffers.Builder, RFE_IDOffset: flatbuffers.Offset): void;
    static addRfbId(builder: flatbuffers.Builder, RFB_IDOffset: flatbuffers.Offset): void;
    static addPapId(builder: flatbuffers.Builder, PAP_IDOffset: flatbuffers.Offset): void;
    static addNoradCatId(builder: flatbuffers.Builder, NORAD_CAT_ID: number): void;
    static addInterferencePowerDbw(builder: flatbuffers.Builder, INTERFERENCE_POWER_DBW: number): void;
    static addAntennaDiscriminationDb(builder: flatbuffers.Builder, ANTENNA_DISCRIMINATION_DB: number): void;
    static addSpectralOverlapFraction(builder: flatbuffers.Builder, SPECTRAL_OVERLAP_FRACTION: number): void;
    static addContributionValue(builder: flatbuffers.Builder, CONTRIBUTION_VALUE: number): void;
    static addContributionUnits(builder: flatbuffers.Builder, CONTRIBUTION_UNITSOffset: flatbuffers.Offset): void;
    static endEPFContributor(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createEPFContributor(builder: flatbuffers.Builder, CONTRIBUTOR_IDOffset: flatbuffers.Offset, SAMPLE_INDEX: number, SOURCE_ENDPOINT_IDOffset: flatbuffers.Offset, RFE_IDOffset: flatbuffers.Offset, RFB_IDOffset: flatbuffers.Offset, PAP_IDOffset: flatbuffers.Offset, NORAD_CAT_ID: number, INTERFERENCE_POWER_DBW: number, ANTENNA_DISCRIMINATION_DB: number, SPECTRAL_OVERLAP_FRACTION: number, CONTRIBUTION_VALUE: number, CONTRIBUTION_UNITSOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): EPFContributorT;
    unpackTo(_o: EPFContributorT): void;
}
export declare class EPFContributorT implements flatbuffers.IGeneratedObject {
    CONTRIBUTOR_ID: string | Uint8Array | null;
    SAMPLE_INDEX: number;
    SOURCE_ENDPOINT_ID: string | Uint8Array | null;
    RFE_ID: string | Uint8Array | null;
    RFB_ID: string | Uint8Array | null;
    PAP_ID: string | Uint8Array | null;
    NORAD_CAT_ID: number;
    INTERFERENCE_POWER_DBW: number;
    ANTENNA_DISCRIMINATION_DB: number;
    SPECTRAL_OVERLAP_FRACTION: number;
    CONTRIBUTION_VALUE: number;
    CONTRIBUTION_UNITS: string | Uint8Array | null;
    constructor(CONTRIBUTOR_ID?: string | Uint8Array | null, SAMPLE_INDEX?: number, SOURCE_ENDPOINT_ID?: string | Uint8Array | null, RFE_ID?: string | Uint8Array | null, RFB_ID?: string | Uint8Array | null, PAP_ID?: string | Uint8Array | null, NORAD_CAT_ID?: number, INTERFERENCE_POWER_DBW?: number, ANTENNA_DISCRIMINATION_DB?: number, SPECTRAL_OVERLAP_FRACTION?: number, CONTRIBUTION_VALUE?: number, CONTRIBUTION_UNITS?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=EPFContributor.d.ts.map