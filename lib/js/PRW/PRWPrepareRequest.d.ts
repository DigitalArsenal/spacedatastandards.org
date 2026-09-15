import * as flatbuffers from 'flatbuffers';
import { PRWInstance, PRWInstanceT } from './PRWInstance.js';
import { TIMInstant, TIMInstantT } from './TIMInstant.js';
/**
 * All epochs explicit; duration seconds >=0; empty handles means all resident.
 */
export declare class PRWPrepareRequest implements flatbuffers.IUnpackableObject<PRWPrepareRequestT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): PRWPrepareRequest;
    static getRootAsPRWPrepareRequest(bb: flatbuffers.ByteBuffer, obj?: PRWPrepareRequest): PRWPrepareRequest;
    static getSizePrefixedRootAsPRWPrepareRequest(bb: flatbuffers.ByteBuffer, obj?: PRWPrepareRequest): PRWPrepareRequest;
    INSTANCE(obj?: PRWInstance): PRWInstance | null;
    CATALOG_HANDLE(): number;
    SOURCE_HANDLES(index: number): number | null;
    sourceHandlesLength(): number;
    sourceHandlesArray(): Uint32Array | null;
    START_EPOCH(obj?: TIMInstant): TIMInstant | null;
    DURATION_SECONDS(): number;
    /**
     * Provider-advertised profile name; unrecognized nonempty values fail.
     */
    PROFILE(): string | null;
    PROFILE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    static startPRWPrepareRequest(builder: flatbuffers.Builder): void;
    static addInstance(builder: flatbuffers.Builder, INSTANCEOffset: flatbuffers.Offset): void;
    static addCatalogHandle(builder: flatbuffers.Builder, CATALOG_HANDLE: number): void;
    static addSourceHandles(builder: flatbuffers.Builder, SOURCE_HANDLESOffset: flatbuffers.Offset): void;
    static createSourceHandlesVector(builder: flatbuffers.Builder, data: number[] | Uint32Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createSourceHandlesVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startSourceHandlesVector(builder: flatbuffers.Builder, numElems: number): void;
    static addStartEpoch(builder: flatbuffers.Builder, START_EPOCHOffset: flatbuffers.Offset): void;
    static addDurationSeconds(builder: flatbuffers.Builder, DURATION_SECONDS: number): void;
    static addProfile(builder: flatbuffers.Builder, PROFILEOffset: flatbuffers.Offset): void;
    static endPRWPrepareRequest(builder: flatbuffers.Builder): flatbuffers.Offset;
    unpack(): PRWPrepareRequestT;
    unpackTo(_o: PRWPrepareRequestT): void;
}
export declare class PRWPrepareRequestT implements flatbuffers.IGeneratedObject {
    INSTANCE: PRWInstanceT | null;
    CATALOG_HANDLE: number;
    SOURCE_HANDLES: (number)[];
    START_EPOCH: TIMInstantT | null;
    DURATION_SECONDS: number;
    PROFILE: string | Uint8Array | null;
    constructor(INSTANCE?: PRWInstanceT | null, CATALOG_HANDLE?: number, SOURCE_HANDLES?: (number)[], START_EPOCH?: TIMInstantT | null, DURATION_SECONDS?: number, PROFILE?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=PRWPrepareRequest.d.ts.map