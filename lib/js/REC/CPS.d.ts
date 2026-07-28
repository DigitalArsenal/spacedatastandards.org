import * as flatbuffers from 'flatbuffers';
import { packetCompressionAlgorithm } from './packetCompressionAlgorithm.js';
/**
 * Compressed Packet Stream — a run of fixed-length CCSDS packets losslessly
 * compressed as one stateful stream (CCSDS 124.0-B-1 POCKET+). Decoded output
 * is a sequence of PACKET_COUNT packets of PACKET_LENGTH bytes, each of which
 * projects to an $SPP record. This record carries a compressed packet stream
 * only; it is not a general-purpose compression envelope for SDS records.
 */
export declare class CPS implements flatbuffers.IUnpackableObject<CPST> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): CPS;
    static getRootAsCPS(bb: flatbuffers.ByteBuffer, obj?: CPS): CPS;
    static getSizePrefixedRootAsCPS(bb: flatbuffers.ByteBuffer, obj?: CPS): CPS;
    static bufferHasIdentifier(bb: flatbuffers.ByteBuffer): boolean;
    /**
     * Compression algorithm used to produce COMPRESSED_DATA.
     */
    ALGORITHM(): packetCompressionAlgorithm;
    /**
     * Uncompressed length in bytes of EVERY packet in the stream. POCKET+ is
     * defined only for a fixed packet length; a length change starts a new
     * stream and therefore a new $CPS record.
     */
    PACKET_LENGTH(): number;
    /**
     * Number of uncompressed packets encoded in COMPRESSED_DATA. NORMATIVE:
     * this is the only output-size bound a decoder has. The compressed
     * bitstream alone does not bound the decoded size, and a compression-ratio
     * guess is unsafe in both directions. Decoders MUST reject a record whose
     * PACKET_COUNT is zero, and MUST allocate exactly
     * PACKET_COUNT * PACKET_LENGTH bytes of output.
     */
    PACKET_COUNT(): number;
    /**
     * POCKET+ robustness level: the window depth in PACKETS, range 0-7. This is
     * a window depth, NOT a retransmission interval — it does not by itself
     * configure a decoder. See MASK_UPDATE_PERIOD / MASK_SEND_PERIOD /
     * REFERENCE_PERIOD, which are three independent periods.
     */
    ROBUSTNESS(): number;
    /**
     * POCKET+ mask update period (pt), in packets. Independent of ROBUSTNESS,
     * MASK_SEND_PERIOD, and REFERENCE_PERIOD.
     */
    MASK_UPDATE_PERIOD(): number;
    /**
     * POCKET+ mask send period (ft), in packets — how often the change mask is
     * transmitted. Independent of ROBUSTNESS, MASK_UPDATE_PERIOD, and
     * REFERENCE_PERIOD.
     */
    MASK_SEND_PERIOD(): number;
    /**
     * POCKET+ reference packet retransmission period (rt), in packets.
     * Independent of ROBUSTNESS, MASK_UPDATE_PERIOD, and MASK_SEND_PERIOD.
     */
    REFERENCE_PERIOD(): number;
    /**
     * True only when the FIRST packet of COMPRESSED_DATA carries both rt=1 and
     * ft=1, i.e. it transmits a full reference packet and a full mask, so this
     * record decodes standalone without its predecessor. There is no
     * synchronization flag in the POCKET+ bitstream itself: this field is the
     * producer's assertion about the first packet, and defaults to false.
     */
    SELF_SYNCHRONIZING(): boolean;
    /**
     * Producer-defined stream identity. Records sharing STREAM_ID decode in
     * SEGMENT_INDEX order as one continuous POCKET+ stream. A missing segment
     * poisons every subsequent segment up to the next segment with
     * SELF_SYNCHRONIZING = true.
     */
    STREAM_ID(): string | null;
    STREAM_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Zero-based index of this segment within STREAM_ID.
     */
    SEGMENT_INDEX(): number;
    /**
     * CCSDS Application Process Identifier of the packets, when known.
     */
    APID(): number;
    /**
     * Spacecraft identifier of the packets, when known.
     */
    SPACECRAFT_ID(): number;
    /**
     * UTC epoch of the first packet in the segment, ISO 8601.
     */
    START_EPOCH(): string | null;
    START_EPOCH(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * UTC epoch of the last packet in the segment, ISO 8601.
     */
    STOP_EPOCH(): string | null;
    STOP_EPOCH(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * The POCKET+ compressed bitstream per CCSDS 124.0-B-1. Each compressed
     * packet is individually octet-aligned; padding is per PACKET, never per
     * stream. Bit-concatenating packets diverges from the reference
     * implementation and MUST NOT be done.
     */
    COMPRESSED_DATA(index: number): number | null;
    compressedDataLength(): number;
    compressedDataArray(): Uint8Array;
    /**
     * PACKET_LENGTH * PACKET_COUNT. Carried so a decoder can check its decoded
     * output length without recomputing the product from a corrupt header.
     */
    UNCOMPRESSED_LENGTH(): number;
    /**
     * CRC-32 (IEEE 802.3) over the concatenated decompressed packets.
     */
    UNCOMPRESSED_CRC32(): number;
    static startCPS(builder: flatbuffers.Builder): void;
    static addAlgorithm(builder: flatbuffers.Builder, ALGORITHM: packetCompressionAlgorithm): void;
    static addPacketLength(builder: flatbuffers.Builder, PACKET_LENGTH: number): void;
    static addPacketCount(builder: flatbuffers.Builder, PACKET_COUNT: number): void;
    static addRobustness(builder: flatbuffers.Builder, ROBUSTNESS: number): void;
    static addMaskUpdatePeriod(builder: flatbuffers.Builder, MASK_UPDATE_PERIOD: number): void;
    static addMaskSendPeriod(builder: flatbuffers.Builder, MASK_SEND_PERIOD: number): void;
    static addReferencePeriod(builder: flatbuffers.Builder, REFERENCE_PERIOD: number): void;
    static addSelfSynchronizing(builder: flatbuffers.Builder, SELF_SYNCHRONIZING: boolean): void;
    static addStreamId(builder: flatbuffers.Builder, STREAM_IDOffset: flatbuffers.Offset): void;
    static addSegmentIndex(builder: flatbuffers.Builder, SEGMENT_INDEX: number): void;
    static addApid(builder: flatbuffers.Builder, APID: number): void;
    static addSpacecraftId(builder: flatbuffers.Builder, SPACECRAFT_ID: number): void;
    static addStartEpoch(builder: flatbuffers.Builder, START_EPOCHOffset: flatbuffers.Offset): void;
    static addStopEpoch(builder: flatbuffers.Builder, STOP_EPOCHOffset: flatbuffers.Offset): void;
    static addCompressedData(builder: flatbuffers.Builder, COMPRESSED_DATAOffset: flatbuffers.Offset): void;
    static createCompressedDataVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startCompressedDataVector(builder: flatbuffers.Builder, numElems: number): void;
    static addUncompressedLength(builder: flatbuffers.Builder, UNCOMPRESSED_LENGTH: number): void;
    static addUncompressedCrc32(builder: flatbuffers.Builder, UNCOMPRESSED_CRC32: number): void;
    static endCPS(builder: flatbuffers.Builder): flatbuffers.Offset;
    static finishCPSBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static finishSizePrefixedCPSBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static createCPS(builder: flatbuffers.Builder, ALGORITHM: packetCompressionAlgorithm, PACKET_LENGTH: number, PACKET_COUNT: number, ROBUSTNESS: number, MASK_UPDATE_PERIOD: number, MASK_SEND_PERIOD: number, REFERENCE_PERIOD: number, SELF_SYNCHRONIZING: boolean, STREAM_IDOffset: flatbuffers.Offset, SEGMENT_INDEX: number, APID: number, SPACECRAFT_ID: number, START_EPOCHOffset: flatbuffers.Offset, STOP_EPOCHOffset: flatbuffers.Offset, COMPRESSED_DATAOffset: flatbuffers.Offset, UNCOMPRESSED_LENGTH: number, UNCOMPRESSED_CRC32: number): flatbuffers.Offset;
    unpack(): CPST;
    unpackTo(_o: CPST): void;
}
export declare class CPST implements flatbuffers.IGeneratedObject {
    ALGORITHM: packetCompressionAlgorithm;
    PACKET_LENGTH: number;
    PACKET_COUNT: number;
    ROBUSTNESS: number;
    MASK_UPDATE_PERIOD: number;
    MASK_SEND_PERIOD: number;
    REFERENCE_PERIOD: number;
    SELF_SYNCHRONIZING: boolean;
    STREAM_ID: string | Uint8Array | null;
    SEGMENT_INDEX: number;
    APID: number;
    SPACECRAFT_ID: number;
    START_EPOCH: string | Uint8Array | null;
    STOP_EPOCH: string | Uint8Array | null;
    COMPRESSED_DATA: (number)[];
    UNCOMPRESSED_LENGTH: number;
    UNCOMPRESSED_CRC32: number;
    constructor(ALGORITHM?: packetCompressionAlgorithm, PACKET_LENGTH?: number, PACKET_COUNT?: number, ROBUSTNESS?: number, MASK_UPDATE_PERIOD?: number, MASK_SEND_PERIOD?: number, REFERENCE_PERIOD?: number, SELF_SYNCHRONIZING?: boolean, STREAM_ID?: string | Uint8Array | null, SEGMENT_INDEX?: number, APID?: number, SPACECRAFT_ID?: number, START_EPOCH?: string | Uint8Array | null, STOP_EPOCH?: string | Uint8Array | null, COMPRESSED_DATA?: (number)[], UNCOMPRESSED_LENGTH?: number, UNCOMPRESSED_CRC32?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=CPS.d.ts.map