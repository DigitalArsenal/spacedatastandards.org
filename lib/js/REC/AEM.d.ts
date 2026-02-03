import * as flatbuffers from 'flatbuffers';
import { AEMSegment, AEMSegmentT } from './AEMSegment.js';
/**
 * Attitude Ephemeris Message
 */
export declare class AEM implements flatbuffers.IUnpackableObject<AEMT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): AEM;
    static getRootAsAEM(bb: flatbuffers.ByteBuffer, obj?: AEM): AEM;
    static getSizePrefixedRootAsAEM(bb: flatbuffers.ByteBuffer, obj?: AEM): AEM;
    static bufferHasIdentifier(bb: flatbuffers.ByteBuffer): boolean;
    CCSDS_AEM_VERS(): string | null;
    CCSDS_AEM_VERS(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    CREATION_DATE(): string | null;
    CREATION_DATE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    ORIGINATOR(): string | null;
    ORIGINATOR(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    SEGMENTS(index: number, obj?: AEMSegment): AEMSegment | null;
    segmentsLength(): number;
    static startAEM(builder: flatbuffers.Builder): void;
    static addCcsdsAemVers(builder: flatbuffers.Builder, CCSDS_AEM_VERSOffset: flatbuffers.Offset): void;
    static addCreationDate(builder: flatbuffers.Builder, CREATION_DATEOffset: flatbuffers.Offset): void;
    static addOriginator(builder: flatbuffers.Builder, ORIGINATOROffset: flatbuffers.Offset): void;
    static addSegments(builder: flatbuffers.Builder, SEGMENTSOffset: flatbuffers.Offset): void;
    static createSegmentsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startSegmentsVector(builder: flatbuffers.Builder, numElems: number): void;
    static endAEM(builder: flatbuffers.Builder): flatbuffers.Offset;
    static finishAEMBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static finishSizePrefixedAEMBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static createAEM(builder: flatbuffers.Builder, CCSDS_AEM_VERSOffset: flatbuffers.Offset, CREATION_DATEOffset: flatbuffers.Offset, ORIGINATOROffset: flatbuffers.Offset, SEGMENTSOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): AEMT;
    unpackTo(_o: AEMT): void;
}
export declare class AEMT implements flatbuffers.IGeneratedObject {
    CCSDS_AEM_VERS: string | Uint8Array | null;
    CREATION_DATE: string | Uint8Array | null;
    ORIGINATOR: string | Uint8Array | null;
    SEGMENTS: (AEMSegmentT)[];
    constructor(CCSDS_AEM_VERS?: string | Uint8Array | null, CREATION_DATE?: string | Uint8Array | null, ORIGINATOR?: string | Uint8Array | null, SEGMENTS?: (AEMSegmentT)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=AEM.d.ts.map