import * as flatbuffers from 'flatbuffers';
/**
 * One independently addressed segment inside a native container.
 *
 * A segmented binary ephemeris is not a single span: each segment has its own
 * body pair, frame, numeric type and time bounds, and a reader must choose
 * among them. $OEM carries the STATES; this carries the segment DESCRIPTOR
 * that says which states came from where and what must be written back.
 */
export declare class NCDSegmentDescriptor implements flatbuffers.IUnpackableObject<NCDSegmentDescriptorT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): NCDSegmentDescriptor;
    static getRootAsNCDSegmentDescriptor(bb: flatbuffers.ByteBuffer, obj?: NCDSegmentDescriptor): NCDSegmentDescriptor;
    static getSizePrefixedRootAsNCDSegmentDescriptor(bb: flatbuffers.ByteBuffer, obj?: NCDSegmentDescriptor): NCDSegmentDescriptor;
    /**
     * Segment name as recorded in the container.
     */
    NAME(): string | null;
    NAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Integer body code of the segment target.
     */
    TARGET_NAIF_ID(): number;
    /**
     * Integer body code of the segment centre.
     */
    CENTER_NAIF_ID(): number;
    /**
     * Integer reference frame code of the segment.
     */
    FRAME_NAIF_ID(): number;
    /**
     * Reference frame name as recorded in the container.
     */
    FRAME_NAME(): string | null;
    FRAME_NAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Numeric segment data type, verbatim. The evaluation rule is a property of
     * this number (for example, Chebyshev position with fixed interval, or
     * discrete states with Lagrange interpolation); it is carried as the
     * container's own integer so a rewrite is exact.
     */
    SEGMENT_TYPE(): number;
    /**
     * Segment coverage start, ISO 8601.
     */
    START_EPOCH(): string | null;
    START_EPOCH(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Segment coverage stop, ISO 8601.
     */
    STOP_EPOCH(): string | null;
    STOP_EPOCH(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Segment coverage start, seconds past J2000 in the barycentric dynamical
     * time scale, as stored in the container.
     */
    START_SECONDS_PAST_J2000_TDB(): number;
    /**
     * Segment coverage stop, same scale.
     */
    STOP_SECONDS_PAST_J2000_TDB(): number;
    /**
     * First addressed element of the segment inside the file.
     */
    INITIAL_ADDRESS(): bigint;
    /**
     * Last addressed element of the segment inside the file.
     */
    FINAL_ADDRESS(): bigint;
    /**
     * Polynomial degree or record size the segment type parameterises, when the
     * type carries one.
     */
    POLYNOMIAL_DEGREE(): number;
    static startNCDSegmentDescriptor(builder: flatbuffers.Builder): void;
    static addName(builder: flatbuffers.Builder, NAMEOffset: flatbuffers.Offset): void;
    static addTargetNaifId(builder: flatbuffers.Builder, TARGET_NAIF_ID: number): void;
    static addCenterNaifId(builder: flatbuffers.Builder, CENTER_NAIF_ID: number): void;
    static addFrameNaifId(builder: flatbuffers.Builder, FRAME_NAIF_ID: number): void;
    static addFrameName(builder: flatbuffers.Builder, FRAME_NAMEOffset: flatbuffers.Offset): void;
    static addSegmentType(builder: flatbuffers.Builder, SEGMENT_TYPE: number): void;
    static addStartEpoch(builder: flatbuffers.Builder, START_EPOCHOffset: flatbuffers.Offset): void;
    static addStopEpoch(builder: flatbuffers.Builder, STOP_EPOCHOffset: flatbuffers.Offset): void;
    static addStartSecondsPastJ2000Tdb(builder: flatbuffers.Builder, START_SECONDS_PAST_J2000_TDB: number): void;
    static addStopSecondsPastJ2000Tdb(builder: flatbuffers.Builder, STOP_SECONDS_PAST_J2000_TDB: number): void;
    static addInitialAddress(builder: flatbuffers.Builder, INITIAL_ADDRESS: bigint): void;
    static addFinalAddress(builder: flatbuffers.Builder, FINAL_ADDRESS: bigint): void;
    static addPolynomialDegree(builder: flatbuffers.Builder, POLYNOMIAL_DEGREE: number): void;
    static endNCDSegmentDescriptor(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createNCDSegmentDescriptor(builder: flatbuffers.Builder, NAMEOffset: flatbuffers.Offset, TARGET_NAIF_ID: number, CENTER_NAIF_ID: number, FRAME_NAIF_ID: number, FRAME_NAMEOffset: flatbuffers.Offset, SEGMENT_TYPE: number, START_EPOCHOffset: flatbuffers.Offset, STOP_EPOCHOffset: flatbuffers.Offset, START_SECONDS_PAST_J2000_TDB: number, STOP_SECONDS_PAST_J2000_TDB: number, INITIAL_ADDRESS: bigint, FINAL_ADDRESS: bigint, POLYNOMIAL_DEGREE: number): flatbuffers.Offset;
    unpack(): NCDSegmentDescriptorT;
    unpackTo(_o: NCDSegmentDescriptorT): void;
}
export declare class NCDSegmentDescriptorT implements flatbuffers.IGeneratedObject {
    NAME: string | Uint8Array | null;
    TARGET_NAIF_ID: number;
    CENTER_NAIF_ID: number;
    FRAME_NAIF_ID: number;
    FRAME_NAME: string | Uint8Array | null;
    SEGMENT_TYPE: number;
    START_EPOCH: string | Uint8Array | null;
    STOP_EPOCH: string | Uint8Array | null;
    START_SECONDS_PAST_J2000_TDB: number;
    STOP_SECONDS_PAST_J2000_TDB: number;
    INITIAL_ADDRESS: bigint;
    FINAL_ADDRESS: bigint;
    POLYNOMIAL_DEGREE: number;
    constructor(NAME?: string | Uint8Array | null, TARGET_NAIF_ID?: number, CENTER_NAIF_ID?: number, FRAME_NAIF_ID?: number, FRAME_NAME?: string | Uint8Array | null, SEGMENT_TYPE?: number, START_EPOCH?: string | Uint8Array | null, STOP_EPOCH?: string | Uint8Array | null, START_SECONDS_PAST_J2000_TDB?: number, STOP_SECONDS_PAST_J2000_TDB?: number, INITIAL_ADDRESS?: bigint, FINAL_ADDRESS?: bigint, POLYNOMIAL_DEGREE?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=NCDSegmentDescriptor.d.ts.map