import * as flatbuffers from 'flatbuffers';
/**
 * One SigMF capture segment: the point in the sample stream at which the
 * listed tuning took effect. A retuned or frequency-hopped recording has
 * several; a single-tune recording has one.
 */
export declare class IQCSegment implements flatbuffers.IUnpackableObject<IQCSegmentT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): IQCSegment;
    static getRootAsIQCSegment(bb: flatbuffers.ByteBuffer, obj?: IQCSegment): IQCSegment;
    static getSizePrefixedRootAsIQCSegment(bb: flatbuffers.ByteBuffer, obj?: IQCSegment): IQCSegment;
    /**
     * SigMF `core:sample_start` — index of the first sample of this segment.
     */
    SAMPLE_START(): bigint;
    /**
     * SigMF `core:global_index` — index of this sample in the receiver's
     * free-running sample counter.
     */
    GLOBAL_INDEX(): bigint;
    /**
     * SigMF `core:header_bytes` — bytes preceding this segment in the data
     * file.
     */
    HEADER_BYTES(): bigint;
    /**
     * SigMF `core:frequency` — centre frequency of this segment, HERTZ.
     */
    CENTER_FREQ_HZ(): number;
    /**
     * SigMF `core:datetime` — ISO 8601 UTC timestamp of SAMPLE_START.
     */
    DATETIME(): string | null;
    DATETIME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    static startIQCSegment(builder: flatbuffers.Builder): void;
    static addSampleStart(builder: flatbuffers.Builder, SAMPLE_START: bigint): void;
    static addGlobalIndex(builder: flatbuffers.Builder, GLOBAL_INDEX: bigint): void;
    static addHeaderBytes(builder: flatbuffers.Builder, HEADER_BYTES: bigint): void;
    static addCenterFreqHz(builder: flatbuffers.Builder, CENTER_FREQ_HZ: number): void;
    static addDatetime(builder: flatbuffers.Builder, DATETIMEOffset: flatbuffers.Offset): void;
    static endIQCSegment(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createIQCSegment(builder: flatbuffers.Builder, SAMPLE_START: bigint, GLOBAL_INDEX: bigint, HEADER_BYTES: bigint, CENTER_FREQ_HZ: number, DATETIMEOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): IQCSegmentT;
    unpackTo(_o: IQCSegmentT): void;
}
export declare class IQCSegmentT implements flatbuffers.IGeneratedObject {
    SAMPLE_START: bigint;
    GLOBAL_INDEX: bigint;
    HEADER_BYTES: bigint;
    CENTER_FREQ_HZ: number;
    DATETIME: string | Uint8Array | null;
    constructor(SAMPLE_START?: bigint, GLOBAL_INDEX?: bigint, HEADER_BYTES?: bigint, CENTER_FREQ_HZ?: number, DATETIME?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=IQCSegment.d.ts.map