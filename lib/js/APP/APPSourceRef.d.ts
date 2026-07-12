import * as flatbuffers from 'flatbuffers';
import { appSourceKind } from './appSourceKind.js';
/**
 * One upstream data source the app depends on.
 */
export declare class APPSourceRef implements flatbuffers.IUnpackableObject<APPSourceRefT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): APPSourceRef;
    static getRootAsAPPSourceRef(bb: flatbuffers.ByteBuffer, obj?: APPSourceRef): APPSourceRef;
    static getSizePrefixedRootAsAPPSourceRef(bb: flatbuffers.ByteBuffer, obj?: APPSourceRef): APPSourceRef;
    /**
     * App-local stable reference for this source. Required, unique within
     * the manifest.
     */
    ID(): string;
    ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    /**
     * Classifies REF.
     */
    KIND(): appSourceKind;
    /**
     * Source identifier: an APPModuleRef.ID when KIND is MODULE, otherwise a
     * URL or dataset identifier. Required.
     */
    REF(): string;
    REF(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    /**
     * Human-readable summary.
     */
    DESCRIPTION(): string | null;
    DESCRIPTION(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    static startAPPSourceRef(builder: flatbuffers.Builder): void;
    static addId(builder: flatbuffers.Builder, IDOffset: flatbuffers.Offset): void;
    static addKind(builder: flatbuffers.Builder, KIND: appSourceKind): void;
    static addRef(builder: flatbuffers.Builder, REFOffset: flatbuffers.Offset): void;
    static addDescription(builder: flatbuffers.Builder, DESCRIPTIONOffset: flatbuffers.Offset): void;
    static endAPPSourceRef(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createAPPSourceRef(builder: flatbuffers.Builder, IDOffset: flatbuffers.Offset, KIND: appSourceKind, REFOffset: flatbuffers.Offset, DESCRIPTIONOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): APPSourceRefT;
    unpackTo(_o: APPSourceRefT): void;
}
export declare class APPSourceRefT implements flatbuffers.IGeneratedObject {
    ID: string | Uint8Array | null;
    KIND: appSourceKind;
    REF: string | Uint8Array | null;
    DESCRIPTION: string | Uint8Array | null;
    constructor(ID?: string | Uint8Array | null, KIND?: appSourceKind, REF?: string | Uint8Array | null, DESCRIPTION?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=APPSourceRef.d.ts.map