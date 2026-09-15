import * as flatbuffers from 'flatbuffers';
import { PRWInstance, PRWInstanceT } from './PRWInstance.js';
export declare class CQRDestroyRequest implements flatbuffers.IUnpackableObject<CQRDestroyRequestT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): CQRDestroyRequest;
    static getRootAsCQRDestroyRequest(bb: flatbuffers.ByteBuffer, obj?: CQRDestroyRequest): CQRDestroyRequest;
    static getSizePrefixedRootAsCQRDestroyRequest(bb: flatbuffers.ByteBuffer, obj?: CQRDestroyRequest): CQRDestroyRequest;
    INSTANCE(obj?: PRWInstance): PRWInstance | null;
    SCREENING_INDEX_HANDLE(): number;
    static startCQRDestroyRequest(builder: flatbuffers.Builder): void;
    static addInstance(builder: flatbuffers.Builder, INSTANCEOffset: flatbuffers.Offset): void;
    static addScreeningIndexHandle(builder: flatbuffers.Builder, SCREENING_INDEX_HANDLE: number): void;
    static endCQRDestroyRequest(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createCQRDestroyRequest(builder: flatbuffers.Builder, INSTANCEOffset: flatbuffers.Offset, SCREENING_INDEX_HANDLE: number): flatbuffers.Offset;
    unpack(): CQRDestroyRequestT;
    unpackTo(_o: CQRDestroyRequestT): void;
}
export declare class CQRDestroyRequestT implements flatbuffers.IGeneratedObject {
    INSTANCE: PRWInstanceT | null;
    SCREENING_INDEX_HANDLE: number;
    constructor(INSTANCE?: PRWInstanceT | null, SCREENING_INDEX_HANDLE?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=CQRDestroyRequest.d.ts.map