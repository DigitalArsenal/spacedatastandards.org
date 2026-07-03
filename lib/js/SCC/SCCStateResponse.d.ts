import * as flatbuffers from 'flatbuffers';
import { SCN, SCNT } from './SCN.js';
import { SCNReference, SCNReferenceT } from './SCNReference.js';
import { stateRequestKind } from './stateRequestKind.js';
/**
 * State response. SCENARIO carries full scenario state; REFERENCES can carry
 * the lighter reference-list response for reference-only requests.
 */
export declare class SCCStateResponse implements flatbuffers.IUnpackableObject<SCCStateResponseT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): SCCStateResponse;
    static getRootAsSCCStateResponse(bb: flatbuffers.ByteBuffer, obj?: SCCStateResponse): SCCStateResponse;
    static getSizePrefixedRootAsSCCStateResponse(bb: flatbuffers.ByteBuffer, obj?: SCCStateResponse): SCCStateResponse;
    /**
     * Request correlation id from the matching state request.
     */
    REQUEST_ID(): string | null;
    REQUEST_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * State payload represented by this response.
     */
    REQUEST_KIND(): stateRequestKind;
    /**
     * Full scenario state for scenario-state responses.
     */
    SCENARIO(obj?: SCN): SCN | null;
    /**
     * Reference-list payload for reference-only responses.
     */
    REFERENCES(index: number, obj?: SCNReference): SCNReference | null;
    referencesLength(): number;
    /**
     * Zero-based focused reference index, or -1 when no index is focused.
     */
    FOCUSED_REFERENCE_INDEX(): number;
    /**
     * Human-readable error message when state cannot be returned.
     */
    ERROR_MESSAGE(): string | null;
    ERROR_MESSAGE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    static startSCCStateResponse(builder: flatbuffers.Builder): void;
    static addRequestId(builder: flatbuffers.Builder, REQUEST_IDOffset: flatbuffers.Offset): void;
    static addRequestKind(builder: flatbuffers.Builder, REQUEST_KIND: stateRequestKind): void;
    static addScenario(builder: flatbuffers.Builder, SCENARIOOffset: flatbuffers.Offset): void;
    static addReferences(builder: flatbuffers.Builder, REFERENCESOffset: flatbuffers.Offset): void;
    static createReferencesVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startReferencesVector(builder: flatbuffers.Builder, numElems: number): void;
    static addFocusedReferenceIndex(builder: flatbuffers.Builder, FOCUSED_REFERENCE_INDEX: number): void;
    static addErrorMessage(builder: flatbuffers.Builder, ERROR_MESSAGEOffset: flatbuffers.Offset): void;
    static endSCCStateResponse(builder: flatbuffers.Builder): flatbuffers.Offset;
    unpack(): SCCStateResponseT;
    unpackTo(_o: SCCStateResponseT): void;
}
export declare class SCCStateResponseT implements flatbuffers.IGeneratedObject {
    REQUEST_ID: string | Uint8Array | null;
    REQUEST_KIND: stateRequestKind;
    SCENARIO: SCNT | null;
    REFERENCES: (SCNReferenceT)[];
    FOCUSED_REFERENCE_INDEX: number;
    ERROR_MESSAGE: string | Uint8Array | null;
    constructor(REQUEST_ID?: string | Uint8Array | null, REQUEST_KIND?: stateRequestKind, SCENARIO?: SCNT | null, REFERENCES?: (SCNReferenceT)[], FOCUSED_REFERENCE_INDEX?: number, ERROR_MESSAGE?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=SCCStateResponse.d.ts.map