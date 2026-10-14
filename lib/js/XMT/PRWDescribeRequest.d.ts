import * as flatbuffers from 'flatbuffers';
import { PRWInstance, PRWInstanceT } from './PRWInstance.js';
export declare class PRWDescribeRequest implements flatbuffers.IUnpackableObject<PRWDescribeRequestT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): PRWDescribeRequest;
    static getRootAsPRWDescribeRequest(bb: flatbuffers.ByteBuffer, obj?: PRWDescribeRequest): PRWDescribeRequest;
    static getSizePrefixedRootAsPRWDescribeRequest(bb: flatbuffers.ByteBuffer, obj?: PRWDescribeRequest): PRWDescribeRequest;
    INSTANCE(obj?: PRWInstance): PRWInstance | null;
    SEGMENT_SET_HANDLE(): number;
    SOURCE_HANDLES(index: number): number | null;
    sourceHandlesLength(): number;
    sourceHandlesArray(): Uint32Array | null;
    static startPRWDescribeRequest(builder: flatbuffers.Builder): void;
    static addInstance(builder: flatbuffers.Builder, INSTANCEOffset: flatbuffers.Offset): void;
    static addSegmentSetHandle(builder: flatbuffers.Builder, SEGMENT_SET_HANDLE: number): void;
    static addSourceHandles(builder: flatbuffers.Builder, SOURCE_HANDLESOffset: flatbuffers.Offset): void;
    static createSourceHandlesVector(builder: flatbuffers.Builder, data: number[] | Uint32Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createSourceHandlesVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startSourceHandlesVector(builder: flatbuffers.Builder, numElems: number): void;
    static endPRWDescribeRequest(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createPRWDescribeRequest(builder: flatbuffers.Builder, INSTANCEOffset: flatbuffers.Offset, SEGMENT_SET_HANDLE: number, SOURCE_HANDLESOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): PRWDescribeRequestT;
    unpackTo(_o: PRWDescribeRequestT): void;
}
export declare class PRWDescribeRequestT implements flatbuffers.IGeneratedObject {
    INSTANCE: PRWInstanceT | null;
    SEGMENT_SET_HANDLE: number;
    SOURCE_HANDLES: (number)[];
    constructor(INSTANCE?: PRWInstanceT | null, SEGMENT_SET_HANDLE?: number, SOURCE_HANDLES?: (number)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=PRWDescribeRequest.d.ts.map