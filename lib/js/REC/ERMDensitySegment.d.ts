import * as flatbuffers from 'flatbuffers';
/**
 * A segment of the density forecast at one lead day.
 */
export declare class ERMDensitySegment implements flatbuffers.IUnpackableObject<ERMDensitySegmentT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): ERMDensitySegment;
    static getRootAsERMDensitySegment(bb: flatbuffers.ByteBuffer, obj?: ERMDensitySegment): ERMDensitySegment;
    static getSizePrefixedRootAsERMDensitySegment(bb: flatbuffers.ByteBuffer, obj?: ERMDensitySegment): ERMDensitySegment;
    FROM_EPOCH(): string | null;
    FROM_EPOCH(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    TO_EPOCH(): string | null;
    TO_EPOCH(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Lead day, 1 to K.
     */
    LEAD(): number;
    static startERMDensitySegment(builder: flatbuffers.Builder): void;
    static addFromEpoch(builder: flatbuffers.Builder, FROM_EPOCHOffset: flatbuffers.Offset): void;
    static addToEpoch(builder: flatbuffers.Builder, TO_EPOCHOffset: flatbuffers.Offset): void;
    static addLead(builder: flatbuffers.Builder, LEAD: number): void;
    static endERMDensitySegment(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createERMDensitySegment(builder: flatbuffers.Builder, FROM_EPOCHOffset: flatbuffers.Offset, TO_EPOCHOffset: flatbuffers.Offset, LEAD: number): flatbuffers.Offset;
    unpack(): ERMDensitySegmentT;
    unpackTo(_o: ERMDensitySegmentT): void;
}
export declare class ERMDensitySegmentT implements flatbuffers.IGeneratedObject {
    FROM_EPOCH: string | Uint8Array | null;
    TO_EPOCH: string | Uint8Array | null;
    LEAD: number;
    constructor(FROM_EPOCH?: string | Uint8Array | null, TO_EPOCH?: string | Uint8Array | null, LEAD?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=ERMDensitySegment.d.ts.map