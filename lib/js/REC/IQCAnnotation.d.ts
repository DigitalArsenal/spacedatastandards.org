import * as flatbuffers from 'flatbuffers';
/**
 * One labelled region of the capture in time and frequency.
 */
export declare class IQCAnnotation implements flatbuffers.IUnpackableObject<IQCAnnotationT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): IQCAnnotation;
    static getRootAsIQCAnnotation(bb: flatbuffers.ByteBuffer, obj?: IQCAnnotation): IQCAnnotation;
    static getSizePrefixedRootAsIQCAnnotation(bb: flatbuffers.ByteBuffer, obj?: IQCAnnotation): IQCAnnotation;
    /**
     * SigMF `core:sample_start` — first sample of the annotated region.
     */
    SAMPLE_START(): bigint;
    /**
     * SigMF `core:sample_count` — length of the annotated region in samples.
     */
    SAMPLE_COUNT(): bigint;
    /**
     * SigMF `core:freq_lower_edge` — lower edge of the annotated band, HERTZ.
     */
    FREQ_LOWER_EDGE_HZ(): number;
    /**
     * SigMF `core:freq_upper_edge` — upper edge of the annotated band, HERTZ.
     */
    FREQ_UPPER_EDGE_HZ(): number;
    /**
     * SigMF `core:label` — the short human label ("LoRa", "ADS-B", "AIS").
     */
    LABEL(): string | null;
    LABEL(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * SigMF `core:comment` — free-text note.
     */
    COMMENT(): string | null;
    COMMENT(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * SigMF `core:generator` — the tool or person that produced the
     * annotation. An annotation asserted by an automatic classifier and one
     * asserted by a human are not interchangeable evidence; this field is how
     * a consumer tells them apart.
     */
    GENERATOR(): string | null;
    GENERATOR(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * SigMF `core:uuid` — the annotation's own identifier, when present.
     */
    UUID(): string | null;
    UUID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    static startIQCAnnotation(builder: flatbuffers.Builder): void;
    static addSampleStart(builder: flatbuffers.Builder, SAMPLE_START: bigint): void;
    static addSampleCount(builder: flatbuffers.Builder, SAMPLE_COUNT: bigint): void;
    static addFreqLowerEdgeHz(builder: flatbuffers.Builder, FREQ_LOWER_EDGE_HZ: number): void;
    static addFreqUpperEdgeHz(builder: flatbuffers.Builder, FREQ_UPPER_EDGE_HZ: number): void;
    static addLabel(builder: flatbuffers.Builder, LABELOffset: flatbuffers.Offset): void;
    static addComment(builder: flatbuffers.Builder, COMMENTOffset: flatbuffers.Offset): void;
    static addGenerator(builder: flatbuffers.Builder, GENERATOROffset: flatbuffers.Offset): void;
    static addUuid(builder: flatbuffers.Builder, UUIDOffset: flatbuffers.Offset): void;
    static endIQCAnnotation(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createIQCAnnotation(builder: flatbuffers.Builder, SAMPLE_START: bigint, SAMPLE_COUNT: bigint, FREQ_LOWER_EDGE_HZ: number, FREQ_UPPER_EDGE_HZ: number, LABELOffset: flatbuffers.Offset, COMMENTOffset: flatbuffers.Offset, GENERATOROffset: flatbuffers.Offset, UUIDOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): IQCAnnotationT;
    unpackTo(_o: IQCAnnotationT): void;
}
export declare class IQCAnnotationT implements flatbuffers.IGeneratedObject {
    SAMPLE_START: bigint;
    SAMPLE_COUNT: bigint;
    FREQ_LOWER_EDGE_HZ: number;
    FREQ_UPPER_EDGE_HZ: number;
    LABEL: string | Uint8Array | null;
    COMMENT: string | Uint8Array | null;
    GENERATOR: string | Uint8Array | null;
    UUID: string | Uint8Array | null;
    constructor(SAMPLE_START?: bigint, SAMPLE_COUNT?: bigint, FREQ_LOWER_EDGE_HZ?: number, FREQ_UPPER_EDGE_HZ?: number, LABEL?: string | Uint8Array | null, COMMENT?: string | Uint8Array | null, GENERATOR?: string | Uint8Array | null, UUID?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=IQCAnnotation.d.ts.map