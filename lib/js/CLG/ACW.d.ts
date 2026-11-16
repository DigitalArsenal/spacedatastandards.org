import * as flatbuffers from 'flatbuffers';
import { ACWRequest, ACWRequestT } from './ACWRequest.js';
import { ACWResult, ACWResultT } from './ACWResult.js';
import { BodyDescriptor, BodyDescriptorT } from './BodyDescriptor.js';
/**
 * Access-window analysis envelope.
 */
export declare class ACW implements flatbuffers.IUnpackableObject<ACWT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): ACW;
    static getRootAsACW(bb: flatbuffers.ByteBuffer, obj?: ACW): ACW;
    static getSizePrefixedRootAsACW(bb: flatbuffers.ByteBuffer, obj?: ACW): ACW;
    static bufferHasIdentifier(bb: flatbuffers.ByteBuffer): boolean;
    REQUEST(obj?: ACWRequest): ACWRequest | null;
    RESULT(obj?: ACWResult): ACWResult | null;
    /**
     * Appended slot 2. Mandatory in every new request and successful result.
     * Request OPERATION must be 3 (access) or 4 (simulation); old modules reject
     * these codes. Missing body fails acw-body-required; absence never means
     * Earth. Operations 1/2 are archival only and are rejected by new runtimes.
     * Result must echo the exact descriptor field values, including optional
     * presence; requester rejects a missing/different echo. Raw table offsets
     * are not identity. Explicit one-time archive conversion is outside runtime.
     */
    CENTRAL_BODY(obj?: BodyDescriptor): BodyDescriptor | null;
    static startACW(builder: flatbuffers.Builder): void;
    static addRequest(builder: flatbuffers.Builder, REQUESTOffset: flatbuffers.Offset): void;
    static addResult(builder: flatbuffers.Builder, RESULTOffset: flatbuffers.Offset): void;
    static addCentralBody(builder: flatbuffers.Builder, CENTRAL_BODYOffset: flatbuffers.Offset): void;
    static endACW(builder: flatbuffers.Builder): flatbuffers.Offset;
    static finishACWBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static finishSizePrefixedACWBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    unpack(): ACWT;
    unpackTo(_o: ACWT): void;
}
export declare class ACWT implements flatbuffers.IGeneratedObject {
    REQUEST: ACWRequestT | null;
    RESULT: ACWResultT | null;
    CENTRAL_BODY: BodyDescriptorT | null;
    constructor(REQUEST?: ACWRequestT | null, RESULT?: ACWResultT | null, CENTRAL_BODY?: BodyDescriptorT | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=ACW.d.ts.map