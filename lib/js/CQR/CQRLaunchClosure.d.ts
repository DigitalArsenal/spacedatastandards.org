import * as flatbuffers from 'flatbuffers';
import { TIMInstant, TIMInstantT } from './TIMInstant.js';
/**
 * Liftoff times that violate at least one criterion, half-open [START, END),
 * widened by the liftoff step and CLOSURE_PAD_SECONDS and merged.
 */
export declare class CQRLaunchClosure implements flatbuffers.IUnpackableObject<CQRLaunchClosureT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): CQRLaunchClosure;
    static getRootAsCQRLaunchClosure(bb: flatbuffers.ByteBuffer, obj?: CQRLaunchClosure): CQRLaunchClosure;
    static getSizePrefixedRootAsCQRLaunchClosure(bb: flatbuffers.ByteBuffer, obj?: CQRLaunchClosure): CQRLaunchClosure;
    START(obj?: TIMInstant): TIMInstant | null;
    END(obj?: TIMInstant): TIMInstant | null;
    /**
     * Orbiting objects that cause this closure.
     */
    OBJECT_IDS(index: number): string;
    OBJECT_IDS(index: number, optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    objectIdsLength(): number;
    /**
     * Segments involved.
     */
    SEGMENT_IDS(index: number): string;
    SEGMENT_IDS(index: number, optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    segmentIdsLength(): number;
    static startCQRLaunchClosure(builder: flatbuffers.Builder): void;
    static addStart(builder: flatbuffers.Builder, STARTOffset: flatbuffers.Offset): void;
    static addEnd(builder: flatbuffers.Builder, ENDOffset: flatbuffers.Offset): void;
    static addObjectIds(builder: flatbuffers.Builder, OBJECT_IDSOffset: flatbuffers.Offset): void;
    static createObjectIdsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startObjectIdsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addSegmentIds(builder: flatbuffers.Builder, SEGMENT_IDSOffset: flatbuffers.Offset): void;
    static createSegmentIdsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startSegmentIdsVector(builder: flatbuffers.Builder, numElems: number): void;
    static endCQRLaunchClosure(builder: flatbuffers.Builder): flatbuffers.Offset;
    unpack(): CQRLaunchClosureT;
    unpackTo(_o: CQRLaunchClosureT): void;
}
export declare class CQRLaunchClosureT implements flatbuffers.IGeneratedObject {
    START: TIMInstantT | null;
    END: TIMInstantT | null;
    OBJECT_IDS: (string)[];
    SEGMENT_IDS: (string)[];
    constructor(START?: TIMInstantT | null, END?: TIMInstantT | null, OBJECT_IDS?: (string)[], SEGMENT_IDS?: (string)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=CQRLaunchClosure.d.ts.map