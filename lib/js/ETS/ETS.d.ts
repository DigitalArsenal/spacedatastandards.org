import * as flatbuffers from 'flatbuffers';
import { ETSIdentifier, ETSIdentifierT } from './ETSIdentifier.js';
import { ETSProvenance, ETSProvenanceT } from './ETSProvenance.js';
import { etsAltitudeDatum } from './etsAltitudeDatum.js';
import { etsCodec } from './etsCodec.js';
import { trackEnvironment } from './trackEnvironment.js';
/**
 * Encoded Track Segment
 */
export declare class ETS implements flatbuffers.IUnpackableObject<ETST> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): ETS;
    static getRootAsETS(bb: flatbuffers.ByteBuffer, obj?: ETS): ETS;
    static getSizePrefixedRootAsETS(bb: flatbuffers.ByteBuffer, obj?: ETS): ETS;
    static bufferHasIdentifier(bb: flatbuffers.ByteBuffer): boolean;
    /**
     * Publisher-stable identifier of the continuous track this segment belongs
     * to, held constant across every segment of the same track. Joins to
     * `TMS.TRACK_ID`. Not an object identifier: one object has many tracks.
     */
    TRACK_ID(): string;
    TRACK_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    /**
     * Zero-based position of this window within its track. Consecutive
     * segments of a track differ by 1; a jump is a missing window.
     */
    SEGMENT_SEQ(): number;
    /**
     * True only when the publisher knows no later segment of this track will
     * exist (a complete historical track, or a live track it has ended). False
     * means more may follow or the publisher does not know.
     */
    TRACK_CLOSED(): boolean;
    /**
     * Every identity the tracked object is known by, scheme-tagged.
     */
    IDENTIFIERS(index: number, obj?: ETSIdentifier): ETSIdentifier | null;
    identifiersLength(): number;
    /**
     * Domain the object moves in. The `$TRK` enum reused verbatim; ordinal 0 is
     * SPACE, so it is defaulted to UNKNOWN explicitly. SPACE is invalid here:
     * the codec's frame is geodetic WGS 84, and orbital state belongs to the
     * orbit standards.
     */
    ENVIRONMENT(): trackEnvironment;
    /**
     * RFC 3339 UTC fixed-millisecond instant of the FIRST observation in this
     * segment: the segment's start and its store epoch. Equals the instant in
     * the PAYLOAD header. Fixed-millisecond UTC strings sort chronologically
     * as text.
     */
    EPOCH(): string;
    EPOCH(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    /**
     * RFC 3339 UTC fixed-millisecond instant of the LAST knot in this segment
     * (the last observation is always a knot). EPOCH <= END_EPOCH. The
     * segment is covered over the closed interval [EPOCH, END_EPOCH]; the
     * codec rejects times outside it.
     */
    END_EPOCH(): string;
    END_EPOCH(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    /**
     * Observations the writer encoded, before simplification.
     */
    OBSERVATION_COUNT(): number;
    /**
     * Knots retained in PAYLOAD. At least 2 for a decodable segment.
     */
    KNOT_COUNT(): number;
    /**
     * Bounding box of the DECODED path: it contains the decoded position at
     * every knot and at the midpoint between every pair of knots, as the
     * writer evaluated the decoder. It is a prefilter, not an error bound: a
     * source observation may lie outside by up to ACHIEVED_MAX_ERROR_H_M.
     * Degrees on WGS 84. WEST_DEG > EAST_DEG means the box crosses the
     * antimeridian (longitudes in [-180, 180]).
     */
    SOUTH_DEG(): number;
    NORTH_DEG(): number;
    WEST_DEG(): number;
    EAST_DEG(): number;
    /**
     * Vertical datum of the altitude channel; NONE for a 2-D track.
     */
    ALTITUDE_REFERENCE(): etsAltitudeDatum;
    /**
     * Lowest and highest decoded altitude of the same evaluation, metres in
     * ALTITUDE_REFERENCE. NaN for a 2-D track.
     */
    ALTITUDE_MIN_M(): number;
    ALTITUDE_MAX_M(): number;
    /**
     * Horizontal tolerance the writer was asked to meet, metres. The bound is
     * the Euclidean east-north distance in the local WGS 84 east-north-up
     * frame between the decoded and the source position, at each source
     * observation instant.
     */
    TOLERANCE_H_M(): number;
    /**
     * Vertical tolerance the writer was asked to meet, metres: the absolute
     * altitude difference at each observation instant. NaN for a 2-D track.
     */
    TOLERANCE_V_M(): number;
    /**
     * Largest horizontal error the writer MEASURED by decoding PAYLOAD and
     * comparing with every source observation. Never above TOLERANCE_H_M.
     */
    ACHIEVED_MAX_ERROR_H_M(): number;
    /**
     * Largest vertical error measured the same way. NaN for a 2-D track.
     */
    ACHIEVED_MAX_ERROR_V_M(): number;
    /**
     * Codec that produced PAYLOAD.
     */
    CODEC(): etsCodec;
    /**
     * Revision of the codec's DECODING SEMANTICS within the codec named by
     * CODEC. Starts at 1. It increases whenever the same payload bytes would
     * decode to different positions; a layout change is a new codec member,
     * never a new revision. A reader MUST refuse to decode a revision newer
     * than its decoder supports.
     */
    CODEC_VERSION(): number;
    /**
     * The codec bitstream, verbatim and opaque. Little-endian; begins with the
     * codec's magic (see etsCodec). Decodable only by the codec's decoder.
     */
    PAYLOAD(index: number): number | null;
    payloadLength(): number;
    payloadArray(): Uint8Array;
    /**
     * Feed lineage and licence. Absent in a per-source store table, which
     * carries it; filled when the record leaves the store (export or sharing
     * by content identifier). See ETSProvenance.
     */
    SOURCE(obj?: ETSProvenance): ETSProvenance | null;
    static startETS(builder: flatbuffers.Builder): void;
    static addTrackId(builder: flatbuffers.Builder, TRACK_IDOffset: flatbuffers.Offset): void;
    static addSegmentSeq(builder: flatbuffers.Builder, SEGMENT_SEQ: number): void;
    static addTrackClosed(builder: flatbuffers.Builder, TRACK_CLOSED: boolean): void;
    static addIdentifiers(builder: flatbuffers.Builder, IDENTIFIERSOffset: flatbuffers.Offset): void;
    static createIdentifiersVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startIdentifiersVector(builder: flatbuffers.Builder, numElems: number): void;
    static addEnvironment(builder: flatbuffers.Builder, ENVIRONMENT: trackEnvironment): void;
    static addEpoch(builder: flatbuffers.Builder, EPOCHOffset: flatbuffers.Offset): void;
    static addEndEpoch(builder: flatbuffers.Builder, END_EPOCHOffset: flatbuffers.Offset): void;
    static addObservationCount(builder: flatbuffers.Builder, OBSERVATION_COUNT: number): void;
    static addKnotCount(builder: flatbuffers.Builder, KNOT_COUNT: number): void;
    static addSouthDeg(builder: flatbuffers.Builder, SOUTH_DEG: number): void;
    static addNorthDeg(builder: flatbuffers.Builder, NORTH_DEG: number): void;
    static addWestDeg(builder: flatbuffers.Builder, WEST_DEG: number): void;
    static addEastDeg(builder: flatbuffers.Builder, EAST_DEG: number): void;
    static addAltitudeReference(builder: flatbuffers.Builder, ALTITUDE_REFERENCE: etsAltitudeDatum): void;
    static addAltitudeMinM(builder: flatbuffers.Builder, ALTITUDE_MIN_M: number): void;
    static addAltitudeMaxM(builder: flatbuffers.Builder, ALTITUDE_MAX_M: number): void;
    static addToleranceHM(builder: flatbuffers.Builder, TOLERANCE_H_M: number): void;
    static addToleranceVM(builder: flatbuffers.Builder, TOLERANCE_V_M: number): void;
    static addAchievedMaxErrorHM(builder: flatbuffers.Builder, ACHIEVED_MAX_ERROR_H_M: number): void;
    static addAchievedMaxErrorVM(builder: flatbuffers.Builder, ACHIEVED_MAX_ERROR_V_M: number): void;
    static addCodec(builder: flatbuffers.Builder, CODEC: etsCodec): void;
    static addCodecVersion(builder: flatbuffers.Builder, CODEC_VERSION: number): void;
    static addPayload(builder: flatbuffers.Builder, PAYLOADOffset: flatbuffers.Offset): void;
    static createPayloadVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startPayloadVector(builder: flatbuffers.Builder, numElems: number): void;
    static addSource(builder: flatbuffers.Builder, SOURCEOffset: flatbuffers.Offset): void;
    static endETS(builder: flatbuffers.Builder): flatbuffers.Offset;
    static finishETSBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static finishSizePrefixedETSBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    unpack(): ETST;
    unpackTo(_o: ETST): void;
}
export declare class ETST implements flatbuffers.IGeneratedObject {
    TRACK_ID: string | Uint8Array | null;
    SEGMENT_SEQ: number;
    TRACK_CLOSED: boolean;
    IDENTIFIERS: (ETSIdentifierT)[];
    ENVIRONMENT: trackEnvironment;
    EPOCH: string | Uint8Array | null;
    END_EPOCH: string | Uint8Array | null;
    OBSERVATION_COUNT: number;
    KNOT_COUNT: number;
    SOUTH_DEG: number;
    NORTH_DEG: number;
    WEST_DEG: number;
    EAST_DEG: number;
    ALTITUDE_REFERENCE: etsAltitudeDatum;
    ALTITUDE_MIN_M: number;
    ALTITUDE_MAX_M: number;
    TOLERANCE_H_M: number;
    TOLERANCE_V_M: number;
    ACHIEVED_MAX_ERROR_H_M: number;
    ACHIEVED_MAX_ERROR_V_M: number;
    CODEC: etsCodec;
    CODEC_VERSION: number;
    PAYLOAD: (number)[];
    SOURCE: ETSProvenanceT | null;
    constructor(TRACK_ID?: string | Uint8Array | null, SEGMENT_SEQ?: number, TRACK_CLOSED?: boolean, IDENTIFIERS?: (ETSIdentifierT)[], ENVIRONMENT?: trackEnvironment, EPOCH?: string | Uint8Array | null, END_EPOCH?: string | Uint8Array | null, OBSERVATION_COUNT?: number, KNOT_COUNT?: number, SOUTH_DEG?: number, NORTH_DEG?: number, WEST_DEG?: number, EAST_DEG?: number, ALTITUDE_REFERENCE?: etsAltitudeDatum, ALTITUDE_MIN_M?: number, ALTITUDE_MAX_M?: number, TOLERANCE_H_M?: number, TOLERANCE_V_M?: number, ACHIEVED_MAX_ERROR_H_M?: number, ACHIEVED_MAX_ERROR_V_M?: number, CODEC?: etsCodec, CODEC_VERSION?: number, PAYLOAD?: (number)[], SOURCE?: ETSProvenanceT | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=ETS.d.ts.map