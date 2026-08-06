import * as flatbuffers from 'flatbuffers';
import { IQCAnnotation, IQCAnnotationT } from './IQCAnnotation.js';
import { IQCExtension, IQCExtensionT } from './IQCExtension.js';
import { IQCGeolocation, IQCGeolocationT } from './IQCGeolocation.js';
import { IQCHardware, IQCHardwareT } from './IQCHardware.js';
import { IQCPayloadRef, IQCPayloadRefT } from './IQCPayloadRef.js';
import { IQCSegment, IQCSegmentT } from './IQCSegment.js';
import { rfBandDesignation } from './rfBandDesignation.js';
/**
 * RF IQ Capture Metadata.
 *
 * The description of ONE raw, un-demodulated complex-baseband recording held
 * in a public archive — a hosted IQ-capture repository, a crowdsourced
 * signal-identification catalog, an institutional dataset repository, an
 * SDR project's capture database, a general-purpose research data archive —
 * normalized onto the SigMF v1 core namespace, which is the only metadata
 * vocabulary these archive classes share.
 *
 * $IQC is a POINTER RECORD. It exists so a capture is discoverable, joinable
 * and verifiable without anyone mirroring its payload: the samples stay where
 * their publisher put them and `PAYLOADS` says where that is, how large it
 * is, and what it hashes to. `iqcCustody.PINNED` is a deliberate per-capture
 * decision for small high-value recordings, never a default.
 *
 * UNITS ARE NORMATIVE AND NAMED IN EVERY FIELD. SigMF publishes frequency and
 * sample rate in HERTZ, so every frequency and rate field here is `_HZ` and
 * carries the Hz value unconverted. This standard deliberately does NOT
 * follow $RFB's MHz convention — silently rescaling a SigMF value on ingest
 * is the exact defect the suffix exists to prevent. A consumer joining $IQC
 * to $RFB divides by 1e6 at the join, explicitly.
 *
 * LICENCE IS NEVER ASSUMED. An empty `LICENSE` means the terms are UNKNOWN.
 * It does not mean public domain, it does not mean permissive, and it does
 * not authorize redistribution. Crowdsourced catalogs and hosted repositories
 * both carry third-party recordings, so licence is per RECORDING, never per
 * archive.
 *
 * Division of labour: $RFO = a sensor's astrometric/RF observation of a
 * tracked object (azimuth, elevation, range); $RFE = the parametric emitter
 * description; $RFB = the emitter's band specification in MHz; $IQC = the
 * archived baseband recording itself. $DPM remains the manifest under which
 * THIS network publishes a shard of $IQC records; it does not describe an
 * upstream third party's capture.
 */
export declare class IQC implements flatbuffers.IUnpackableObject<IQCT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): IQC;
    static getRootAsIQC(bb: flatbuffers.ByteBuffer, obj?: IQC): IQC;
    static getSizePrefixedRootAsIQC(bb: flatbuffers.ByteBuffer, obj?: IQC): IQC;
    static bufferHasIdentifier(bb: flatbuffers.ByteBuffer): boolean;
    /**
     * Stable identifier for this record.
     */
    ID(): string | null;
    ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * The upstream archive's own identifier for this capture, verbatim.
     */
    CAPTURE_ID(): string | null;
    CAPTURE_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Name of the archive that publishes the capture, carried verbatim as that
     * archive states it. A string rather than an enum so a new archive lane
     * never requires a schema release.
     */
    SOURCE_NAME(): string | null;
    SOURCE_NAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Landing page for the capture at the source.
     */
    SOURCE_URL(): string | null;
    SOURCE_URL(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Identifier of the source record this was normalized from, when the
     * source exposes one distinct from CAPTURE_ID.
     */
    SOURCE_RECORD_ID(): string | null;
    SOURCE_RECORD_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * SHA-256 of the raw upstream metadata bytes that produced this record,
     * lowercase hex. Makes the normalization auditable.
     */
    SOURCE_SHA256(): string | null;
    SOURCE_SHA256(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * ISO 8601 UTC time the source metadata was retrieved.
     */
    RETRIEVED_AT(): string | null;
    RETRIEVED_AT(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Human title of the capture.
     */
    TITLE(): string | null;
    TITLE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * SigMF `core:description`.
     */
    DESCRIPTION(): string | null;
    DESCRIPTION(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * SigMF `core:author`.
     */
    AUTHOR(): string | null;
    AUTHOR(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * SigMF `core:version` — the SigMF specification version the upstream
     * metadata declares. Empty for captures normalized from a non-SigMF
     * source; that emptiness is itself informative.
     */
    SIGMF_VERSION(): string | null;
    SIGMF_VERSION(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * SigMF `core:collection` — identifier of the collection this recording
     * belongs to.
     */
    COLLECTION(): string | null;
    COLLECTION(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * SigMF `core:extensions`.
     */
    EXTENSIONS(index: number, obj?: IQCExtension): IQCExtension | null;
    extensionsLength(): number;
    /**
     * SigMF `core:datatype` VERBATIM, e.g. "cf32_le", "ci16_le", "ru8". Never
     * re-spelled, never normalized to another vocabulary. A consumer that
     * cannot parse the token MUST refuse the samples rather than assume a
     * layout.
     */
    DATATYPE(): string | null;
    DATATYPE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * SigMF `core:sample_rate`, HERTZ (complex samples per second).
     */
    SAMPLE_RATE_HZ(): number;
    /**
     * SigMF `core:num_channels`. 0 means unstated; 1 is the SigMF default and
     * MUST be written explicitly when known.
     */
    NUM_CHANNELS(): number;
    /**
     * Centre frequency of the FIRST capture segment, HERTZ, copied here for
     * indexing. `SEGMENTS` is normative whenever it is present.
     */
    CENTER_FREQ_HZ(): number;
    /**
     * Lowest occupied frequency across the recording, HERTZ, when the source
     * states it or its annotations bound it.
     */
    FREQ_LOWER_EDGE_HZ(): number;
    /**
     * Highest occupied frequency across the recording, HERTZ.
     */
    FREQ_UPPER_EDGE_HZ(): number;
    /**
     * Total complex samples in the recording. 0 means unstated — it is NOT to
     * be back-computed from BYTE_LENGTH unless DATATYPE and any header bytes
     * are both known.
     */
    SAMPLE_COUNT(): bigint;
    /**
     * Recording length in seconds, when stated or exactly derivable from
     * SAMPLE_COUNT and SAMPLE_RATE_HZ.
     */
    DURATION_SECONDS(): number;
    /**
     * SigMF `core:offset` — index of the first sample in the recording's own
     * numbering.
     */
    SAMPLE_OFFSET(): bigint;
    /**
     * SigMF `core:metadata_only` — true when no dataset file accompanies the
     * metadata.
     */
    METADATA_ONLY(): boolean;
    /**
     * SigMF `core:trailing_bytes` — non-sample bytes at the end of the data
     * file.
     */
    TRAILING_BYTES(): bigint;
    /**
     * ISO 8601 UTC start of the recording (the first segment's
     * `core:datetime`).
     */
    CAPTURE_START(): string | null;
    CAPTURE_START(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * ISO 8601 UTC end of the recording, when stated or exactly derivable.
     */
    CAPTURE_STOP(): string | null;
    CAPTURE_STOP(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Per-segment tuning history.
     */
    SEGMENTS(index: number, obj?: IQCSegment): IQCSegment | null;
    segmentsLength(): number;
    /**
     * Labelled time/frequency regions.
     */
    ANNOTATIONS(index: number, obj?: IQCAnnotation): IQCAnnotation | null;
    annotationsLength(): number;
    /**
     * Archive-level tags, categories or keywords, carried verbatim in whatever
     * vocabulary the publishing archive uses.
     */
    LABELS(index: number): string;
    LABELS(index: number, optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    labelsLength(): number;
    /**
     * Receiver position. Absent when the source published none.
     */
    GEOLOCATION(obj?: IQCGeolocation): IQCGeolocation | null;
    /**
     * Receive chain.
     */
    HARDWARE(obj?: IQCHardware): IQCHardware | null;
    /**
     * Signal designation the source states, verbatim ("LoRa", "DVB-S2",
     * "ADS-B", "VOR"). Not an enum: these archives catalogue the whole radio
     * world, and $RFE's `signalModulation` is a radar-emitter vocabulary that
     * would force every civil waveform into UNKNOWN.
     */
    SIGNAL_NAME(): string | null;
    SIGNAL_NAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Modulation the source states, verbatim. Never inferred from the samples.
     */
    MODULATION(): string | null;
    MODULATION(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Band designation the source states. Shares $RFB's `rfBandDesignation`, so
     * an HF or VHF capture is designated identically on both records.
     */
    BAND(): rfBandDesignation;
    /**
     * NORAD catalogue number of the transmitting spacecraft when the capture
     * is of a known space object. Joins to $CAT.NORAD_CAT_ID. 0 when unbound.
     */
    NORAD_CAT_ID(): number;
    /**
     * International designator of the transmitting spacecraft, when known.
     */
    OBJECT_ID(): string | null;
    OBJECT_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * $RFE.ID of the emitter this capture is of, when identified.
     */
    EMITTER_ID(): string | null;
    EMITTER_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * $RFB.ID of the band specification this capture exercises, when
     * identified.
     */
    RFB_ID(): string | null;
    RFB_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * SPDX identifier when the source states one, otherwise the source's
     * licence name verbatim. EMPTY MEANS UNKNOWN TERMS — never public domain.
     */
    LICENSE(): string | null;
    LICENSE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * URL of the licence text the source points at.
     */
    LICENSE_URL(): string | null;
    LICENSE_URL(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Attribution/citation string the licence requires this record and any
     * derived product to carry downstream.
     */
    ATTRIBUTION(): string | null;
    ATTRIBUTION(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * SigMF `core:meta_doi` — DOI of the metadata.
     */
    META_DOI(): string | null;
    META_DOI(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * SigMF `core:data_doi` — DOI of the dataset.
     */
    DATA_DOI(): string | null;
    DATA_DOI(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Retrievable files for this capture.
     */
    PAYLOADS(index: number, obj?: IQCPayloadRef): IQCPayloadRef | null;
    payloadsLength(): number;
    /**
     * ISO 8601 UTC creation time of this record.
     */
    CREATED_AT(): string | null;
    CREATED_AT(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * ISO 8601 UTC last-update time of this record.
     */
    UPDATED_AT(): string | null;
    UPDATED_AT(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * CID of the $IQC this record replaces, when the upstream capture's
     * metadata changed.
     */
    SUPERSEDES_IQC_CID(): string | null;
    SUPERSEDES_IQC_CID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    static startIQC(builder: flatbuffers.Builder): void;
    static addId(builder: flatbuffers.Builder, IDOffset: flatbuffers.Offset): void;
    static addCaptureId(builder: flatbuffers.Builder, CAPTURE_IDOffset: flatbuffers.Offset): void;
    static addSourceName(builder: flatbuffers.Builder, SOURCE_NAMEOffset: flatbuffers.Offset): void;
    static addSourceUrl(builder: flatbuffers.Builder, SOURCE_URLOffset: flatbuffers.Offset): void;
    static addSourceRecordId(builder: flatbuffers.Builder, SOURCE_RECORD_IDOffset: flatbuffers.Offset): void;
    static addSourceSha256(builder: flatbuffers.Builder, SOURCE_SHA256Offset: flatbuffers.Offset): void;
    static addRetrievedAt(builder: flatbuffers.Builder, RETRIEVED_ATOffset: flatbuffers.Offset): void;
    static addTitle(builder: flatbuffers.Builder, TITLEOffset: flatbuffers.Offset): void;
    static addDescription(builder: flatbuffers.Builder, DESCRIPTIONOffset: flatbuffers.Offset): void;
    static addAuthor(builder: flatbuffers.Builder, AUTHOROffset: flatbuffers.Offset): void;
    static addSigmfVersion(builder: flatbuffers.Builder, SIGMF_VERSIONOffset: flatbuffers.Offset): void;
    static addCollection(builder: flatbuffers.Builder, COLLECTIONOffset: flatbuffers.Offset): void;
    static addExtensions(builder: flatbuffers.Builder, EXTENSIONSOffset: flatbuffers.Offset): void;
    static createExtensionsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startExtensionsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addDatatype(builder: flatbuffers.Builder, DATATYPEOffset: flatbuffers.Offset): void;
    static addSampleRateHz(builder: flatbuffers.Builder, SAMPLE_RATE_HZ: number): void;
    static addNumChannels(builder: flatbuffers.Builder, NUM_CHANNELS: number): void;
    static addCenterFreqHz(builder: flatbuffers.Builder, CENTER_FREQ_HZ: number): void;
    static addFreqLowerEdgeHz(builder: flatbuffers.Builder, FREQ_LOWER_EDGE_HZ: number): void;
    static addFreqUpperEdgeHz(builder: flatbuffers.Builder, FREQ_UPPER_EDGE_HZ: number): void;
    static addSampleCount(builder: flatbuffers.Builder, SAMPLE_COUNT: bigint): void;
    static addDurationSeconds(builder: flatbuffers.Builder, DURATION_SECONDS: number): void;
    static addSampleOffset(builder: flatbuffers.Builder, SAMPLE_OFFSET: bigint): void;
    static addMetadataOnly(builder: flatbuffers.Builder, METADATA_ONLY: boolean): void;
    static addTrailingBytes(builder: flatbuffers.Builder, TRAILING_BYTES: bigint): void;
    static addCaptureStart(builder: flatbuffers.Builder, CAPTURE_STARTOffset: flatbuffers.Offset): void;
    static addCaptureStop(builder: flatbuffers.Builder, CAPTURE_STOPOffset: flatbuffers.Offset): void;
    static addSegments(builder: flatbuffers.Builder, SEGMENTSOffset: flatbuffers.Offset): void;
    static createSegmentsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startSegmentsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addAnnotations(builder: flatbuffers.Builder, ANNOTATIONSOffset: flatbuffers.Offset): void;
    static createAnnotationsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startAnnotationsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addLabels(builder: flatbuffers.Builder, LABELSOffset: flatbuffers.Offset): void;
    static createLabelsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startLabelsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addGeolocation(builder: flatbuffers.Builder, GEOLOCATIONOffset: flatbuffers.Offset): void;
    static addHardware(builder: flatbuffers.Builder, HARDWAREOffset: flatbuffers.Offset): void;
    static addSignalName(builder: flatbuffers.Builder, SIGNAL_NAMEOffset: flatbuffers.Offset): void;
    static addModulation(builder: flatbuffers.Builder, MODULATIONOffset: flatbuffers.Offset): void;
    static addBand(builder: flatbuffers.Builder, BAND: rfBandDesignation): void;
    static addNoradCatId(builder: flatbuffers.Builder, NORAD_CAT_ID: number): void;
    static addObjectId(builder: flatbuffers.Builder, OBJECT_IDOffset: flatbuffers.Offset): void;
    static addEmitterId(builder: flatbuffers.Builder, EMITTER_IDOffset: flatbuffers.Offset): void;
    static addRfbId(builder: flatbuffers.Builder, RFB_IDOffset: flatbuffers.Offset): void;
    static addLicense(builder: flatbuffers.Builder, LICENSEOffset: flatbuffers.Offset): void;
    static addLicenseUrl(builder: flatbuffers.Builder, LICENSE_URLOffset: flatbuffers.Offset): void;
    static addAttribution(builder: flatbuffers.Builder, ATTRIBUTIONOffset: flatbuffers.Offset): void;
    static addMetaDoi(builder: flatbuffers.Builder, META_DOIOffset: flatbuffers.Offset): void;
    static addDataDoi(builder: flatbuffers.Builder, DATA_DOIOffset: flatbuffers.Offset): void;
    static addPayloads(builder: flatbuffers.Builder, PAYLOADSOffset: flatbuffers.Offset): void;
    static createPayloadsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startPayloadsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addCreatedAt(builder: flatbuffers.Builder, CREATED_ATOffset: flatbuffers.Offset): void;
    static addUpdatedAt(builder: flatbuffers.Builder, UPDATED_ATOffset: flatbuffers.Offset): void;
    static addSupersedesIqcCid(builder: flatbuffers.Builder, SUPERSEDES_IQC_CIDOffset: flatbuffers.Offset): void;
    static endIQC(builder: flatbuffers.Builder): flatbuffers.Offset;
    static finishIQCBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static finishSizePrefixedIQCBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    unpack(): IQCT;
    unpackTo(_o: IQCT): void;
}
export declare class IQCT implements flatbuffers.IGeneratedObject {
    ID: string | Uint8Array | null;
    CAPTURE_ID: string | Uint8Array | null;
    SOURCE_NAME: string | Uint8Array | null;
    SOURCE_URL: string | Uint8Array | null;
    SOURCE_RECORD_ID: string | Uint8Array | null;
    SOURCE_SHA256: string | Uint8Array | null;
    RETRIEVED_AT: string | Uint8Array | null;
    TITLE: string | Uint8Array | null;
    DESCRIPTION: string | Uint8Array | null;
    AUTHOR: string | Uint8Array | null;
    SIGMF_VERSION: string | Uint8Array | null;
    COLLECTION: string | Uint8Array | null;
    EXTENSIONS: (IQCExtensionT)[];
    DATATYPE: string | Uint8Array | null;
    SAMPLE_RATE_HZ: number;
    NUM_CHANNELS: number;
    CENTER_FREQ_HZ: number;
    FREQ_LOWER_EDGE_HZ: number;
    FREQ_UPPER_EDGE_HZ: number;
    SAMPLE_COUNT: bigint;
    DURATION_SECONDS: number;
    SAMPLE_OFFSET: bigint;
    METADATA_ONLY: boolean;
    TRAILING_BYTES: bigint;
    CAPTURE_START: string | Uint8Array | null;
    CAPTURE_STOP: string | Uint8Array | null;
    SEGMENTS: (IQCSegmentT)[];
    ANNOTATIONS: (IQCAnnotationT)[];
    LABELS: (string)[];
    GEOLOCATION: IQCGeolocationT | null;
    HARDWARE: IQCHardwareT | null;
    SIGNAL_NAME: string | Uint8Array | null;
    MODULATION: string | Uint8Array | null;
    BAND: rfBandDesignation;
    NORAD_CAT_ID: number;
    OBJECT_ID: string | Uint8Array | null;
    EMITTER_ID: string | Uint8Array | null;
    RFB_ID: string | Uint8Array | null;
    LICENSE: string | Uint8Array | null;
    LICENSE_URL: string | Uint8Array | null;
    ATTRIBUTION: string | Uint8Array | null;
    META_DOI: string | Uint8Array | null;
    DATA_DOI: string | Uint8Array | null;
    PAYLOADS: (IQCPayloadRefT)[];
    CREATED_AT: string | Uint8Array | null;
    UPDATED_AT: string | Uint8Array | null;
    SUPERSEDES_IQC_CID: string | Uint8Array | null;
    constructor(ID?: string | Uint8Array | null, CAPTURE_ID?: string | Uint8Array | null, SOURCE_NAME?: string | Uint8Array | null, SOURCE_URL?: string | Uint8Array | null, SOURCE_RECORD_ID?: string | Uint8Array | null, SOURCE_SHA256?: string | Uint8Array | null, RETRIEVED_AT?: string | Uint8Array | null, TITLE?: string | Uint8Array | null, DESCRIPTION?: string | Uint8Array | null, AUTHOR?: string | Uint8Array | null, SIGMF_VERSION?: string | Uint8Array | null, COLLECTION?: string | Uint8Array | null, EXTENSIONS?: (IQCExtensionT)[], DATATYPE?: string | Uint8Array | null, SAMPLE_RATE_HZ?: number, NUM_CHANNELS?: number, CENTER_FREQ_HZ?: number, FREQ_LOWER_EDGE_HZ?: number, FREQ_UPPER_EDGE_HZ?: number, SAMPLE_COUNT?: bigint, DURATION_SECONDS?: number, SAMPLE_OFFSET?: bigint, METADATA_ONLY?: boolean, TRAILING_BYTES?: bigint, CAPTURE_START?: string | Uint8Array | null, CAPTURE_STOP?: string | Uint8Array | null, SEGMENTS?: (IQCSegmentT)[], ANNOTATIONS?: (IQCAnnotationT)[], LABELS?: (string)[], GEOLOCATION?: IQCGeolocationT | null, HARDWARE?: IQCHardwareT | null, SIGNAL_NAME?: string | Uint8Array | null, MODULATION?: string | Uint8Array | null, BAND?: rfBandDesignation, NORAD_CAT_ID?: number, OBJECT_ID?: string | Uint8Array | null, EMITTER_ID?: string | Uint8Array | null, RFB_ID?: string | Uint8Array | null, LICENSE?: string | Uint8Array | null, LICENSE_URL?: string | Uint8Array | null, ATTRIBUTION?: string | Uint8Array | null, META_DOI?: string | Uint8Array | null, DATA_DOI?: string | Uint8Array | null, PAYLOADS?: (IQCPayloadRefT)[], CREATED_AT?: string | Uint8Array | null, UPDATED_AT?: string | Uint8Array | null, SUPERSEDES_IQC_CID?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=IQC.d.ts.map