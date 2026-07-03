import * as flatbuffers from 'flatbuffers';
import { stateRequestKind } from './stateRequestKind.js';
/**
 * Request current state from a scenario controls host.
 */
export declare class SCCRequestState implements flatbuffers.IUnpackableObject<SCCRequestStateT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): SCCRequestState;
    static getRootAsSCCRequestState(bb: flatbuffers.ByteBuffer, obj?: SCCRequestState): SCCRequestState;
    static getSizePrefixedRootAsSCCRequestState(bb: flatbuffers.ByteBuffer, obj?: SCCRequestState): SCCRequestState;
    REQUEST_ID(): string | null;
    REQUEST_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    REQUEST_KIND(): stateRequestKind;
    static startSCCRequestState(builder: flatbuffers.Builder): void;
    static addRequestId(builder: flatbuffers.Builder, REQUEST_IDOffset: flatbuffers.Offset): void;
    static addRequestKind(builder: flatbuffers.Builder, REQUEST_KIND: stateRequestKind): void;
    static endSCCRequestState(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createSCCRequestState(builder: flatbuffers.Builder, REQUEST_IDOffset: flatbuffers.Offset, REQUEST_KIND: stateRequestKind): flatbuffers.Offset;
    unpack(): SCCRequestStateT;
    unpackTo(_o: SCCRequestStateT): void;
}
export declare class SCCRequestStateT implements flatbuffers.IGeneratedObject {
    REQUEST_ID: string | Uint8Array | null;
    REQUEST_KIND: stateRequestKind;
    constructor(REQUEST_ID?: string | Uint8Array | null, REQUEST_KIND?: stateRequestKind);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=SCCRequestState.d.ts.map