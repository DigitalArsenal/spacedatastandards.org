import * as flatbuffers from 'flatbuffers';
import { rflEndpointKind } from './rflEndpointKind.js';
/**
 * Stable reference to one endpoint of the assessment.
 */
export declare class EMCEndpointRef implements flatbuffers.IUnpackableObject<EMCEndpointRefT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): EMCEndpointRef;
    static getRootAsEMCEndpointRef(bb: flatbuffers.ByteBuffer, obj?: EMCEndpointRef): EMCEndpointRef;
    static getSizePrefixedRootAsEMCEndpointRef(bb: flatbuffers.ByteBuffer, obj?: EMCEndpointRef): EMCEndpointRef;
    ENDPOINT_ID(): string;
    ENDPOINT_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    ENDPOINT_KIND(): rflEndpointKind;
    RFE_ID(): string | null;
    RFE_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    RFB_ID(): string | null;
    RFB_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    NORAD_CAT_ID(): number;
    OBJECT_ID(): string | null;
    OBJECT_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    BEM_ID(): string | null;
    BEM_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    PAP_ID(): string | null;
    PAP_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    CHANNEL_ID(): string | null;
    CHANNEL_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    static startEMCEndpointRef(builder: flatbuffers.Builder): void;
    static addEndpointId(builder: flatbuffers.Builder, ENDPOINT_IDOffset: flatbuffers.Offset): void;
    static addEndpointKind(builder: flatbuffers.Builder, ENDPOINT_KIND: rflEndpointKind): void;
    static addRfeId(builder: flatbuffers.Builder, RFE_IDOffset: flatbuffers.Offset): void;
    static addRfbId(builder: flatbuffers.Builder, RFB_IDOffset: flatbuffers.Offset): void;
    static addNoradCatId(builder: flatbuffers.Builder, NORAD_CAT_ID: number): void;
    static addObjectId(builder: flatbuffers.Builder, OBJECT_IDOffset: flatbuffers.Offset): void;
    static addBemId(builder: flatbuffers.Builder, BEM_IDOffset: flatbuffers.Offset): void;
    static addPapId(builder: flatbuffers.Builder, PAP_IDOffset: flatbuffers.Offset): void;
    static addChannelId(builder: flatbuffers.Builder, CHANNEL_IDOffset: flatbuffers.Offset): void;
    static endEMCEndpointRef(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createEMCEndpointRef(builder: flatbuffers.Builder, ENDPOINT_IDOffset: flatbuffers.Offset, ENDPOINT_KIND: rflEndpointKind, RFE_IDOffset: flatbuffers.Offset, RFB_IDOffset: flatbuffers.Offset, NORAD_CAT_ID: number, OBJECT_IDOffset: flatbuffers.Offset, BEM_IDOffset: flatbuffers.Offset, PAP_IDOffset: flatbuffers.Offset, CHANNEL_IDOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): EMCEndpointRefT;
    unpackTo(_o: EMCEndpointRefT): void;
}
export declare class EMCEndpointRefT implements flatbuffers.IGeneratedObject {
    ENDPOINT_ID: string | Uint8Array | null;
    ENDPOINT_KIND: rflEndpointKind;
    RFE_ID: string | Uint8Array | null;
    RFB_ID: string | Uint8Array | null;
    NORAD_CAT_ID: number;
    OBJECT_ID: string | Uint8Array | null;
    BEM_ID: string | Uint8Array | null;
    PAP_ID: string | Uint8Array | null;
    CHANNEL_ID: string | Uint8Array | null;
    constructor(ENDPOINT_ID?: string | Uint8Array | null, ENDPOINT_KIND?: rflEndpointKind, RFE_ID?: string | Uint8Array | null, RFB_ID?: string | Uint8Array | null, NORAD_CAT_ID?: number, OBJECT_ID?: string | Uint8Array | null, BEM_ID?: string | Uint8Array | null, PAP_ID?: string | Uint8Array | null, CHANNEL_ID?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=EMCEndpointRef.d.ts.map