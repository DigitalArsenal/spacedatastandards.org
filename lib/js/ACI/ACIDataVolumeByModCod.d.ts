import * as flatbuffers from 'flatbuffers';
/**
 * Data carried by one modulation-and-coding choice during one interval.
 * Entries are explicit rows so FlatSQL and `$RPT` can group volume by link,
 * interval, or choice without decoding a producer-specific map.
 */
export declare class ACIDataVolumeByModCod implements flatbuffers.IUnpackableObject<ACIDataVolumeByModCodT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): ACIDataVolumeByModCod;
    static getRootAsACIDataVolumeByModCod(bb: flatbuffers.ByteBuffer, obj?: ACIDataVolumeByModCod): ACIDataVolumeByModCod;
    static getSizePrefixedRootAsACIDataVolumeByModCod(bb: flatbuffers.ByteBuffer, obj?: ACIDataVolumeByModCod): ACIDataVolumeByModCod;
    /**
     * ACIInterval.INTERVAL_ID this row summarizes.
     */
    INTERVAL_ID(): string;
    INTERVAL_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    /**
     * ACIInterval.LINK_ID / RFLLink.LINK_ID.
     */
    LINK_ID(): string | null;
    LINK_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Index into the link's RFLLink.MODCOD_SET.
     */
    MODCOD_INDEX(): number;
    /**
     * Stable RFLModCod.MODCOD_ID copied for queryability across records.
     */
    MODCOD_ID(): string;
    MODCOD_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    DURATION_S(): number;
    DATA_VOLUME_BITS(): number;
    MEAN_DATA_RATE_BPS(): number;
    SAMPLE_COUNT(): number;
    static startACIDataVolumeByModCod(builder: flatbuffers.Builder): void;
    static addIntervalId(builder: flatbuffers.Builder, INTERVAL_IDOffset: flatbuffers.Offset): void;
    static addLinkId(builder: flatbuffers.Builder, LINK_IDOffset: flatbuffers.Offset): void;
    static addModcodIndex(builder: flatbuffers.Builder, MODCOD_INDEX: number): void;
    static addModcodId(builder: flatbuffers.Builder, MODCOD_IDOffset: flatbuffers.Offset): void;
    static addDurationS(builder: flatbuffers.Builder, DURATION_S: number): void;
    static addDataVolumeBits(builder: flatbuffers.Builder, DATA_VOLUME_BITS: number): void;
    static addMeanDataRateBps(builder: flatbuffers.Builder, MEAN_DATA_RATE_BPS: number): void;
    static addSampleCount(builder: flatbuffers.Builder, SAMPLE_COUNT: number): void;
    static endACIDataVolumeByModCod(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createACIDataVolumeByModCod(builder: flatbuffers.Builder, INTERVAL_IDOffset: flatbuffers.Offset, LINK_IDOffset: flatbuffers.Offset, MODCOD_INDEX: number, MODCOD_IDOffset: flatbuffers.Offset, DURATION_S: number, DATA_VOLUME_BITS: number, MEAN_DATA_RATE_BPS: number, SAMPLE_COUNT: number): flatbuffers.Offset;
    unpack(): ACIDataVolumeByModCodT;
    unpackTo(_o: ACIDataVolumeByModCodT): void;
}
export declare class ACIDataVolumeByModCodT implements flatbuffers.IGeneratedObject {
    INTERVAL_ID: string | Uint8Array | null;
    LINK_ID: string | Uint8Array | null;
    MODCOD_INDEX: number;
    MODCOD_ID: string | Uint8Array | null;
    DURATION_S: number;
    DATA_VOLUME_BITS: number;
    MEAN_DATA_RATE_BPS: number;
    SAMPLE_COUNT: number;
    constructor(INTERVAL_ID?: string | Uint8Array | null, LINK_ID?: string | Uint8Array | null, MODCOD_INDEX?: number, MODCOD_ID?: string | Uint8Array | null, DURATION_S?: number, DATA_VOLUME_BITS?: number, MEAN_DATA_RATE_BPS?: number, SAMPLE_COUNT?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=ACIDataVolumeByModCod.d.ts.map