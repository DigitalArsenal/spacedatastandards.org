import * as flatbuffers from 'flatbuffers';
import { appDataDirection } from './appDataDirection.js';
/**
 * One SDS record type the app produces and/or consumes. Names an existing
 * spacedatastandards.org schema by its established code; the app manifest
 * defines no data schemas of its own.
 */
export declare class APPDataRef implements flatbuffers.IUnpackableObject<APPDataRefT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): APPDataRef;
    static getRootAsAPPDataRef(bb: flatbuffers.ByteBuffer, obj?: APPDataRef): APPDataRef;
    static getSizePrefixedRootAsAPPDataRef(bb: flatbuffers.ByteBuffer, obj?: APPDataRef): APPDataRef;
    /**
     * App-local stable reference for this data binding. Required, unique
     * within the manifest.
     */
    ID(): string;
    ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    /**
     * Existing SDS schema code, for example OMM, CDM, or EPM. Required.
     */
    SDS_TYPE(): string;
    SDS_TYPE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    /**
     * Data flow relative to the app.
     */
    DIRECTION(): appDataDirection;
    /**
     * When present, must equal an APPModuleRef.ID in the same manifest — the
     * member module responsible for this data binding.
     */
    MODULE_ID(): string | null;
    MODULE_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Human-readable summary.
     */
    DESCRIPTION(): string | null;
    DESCRIPTION(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    static startAPPDataRef(builder: flatbuffers.Builder): void;
    static addId(builder: flatbuffers.Builder, IDOffset: flatbuffers.Offset): void;
    static addSdsType(builder: flatbuffers.Builder, SDS_TYPEOffset: flatbuffers.Offset): void;
    static addDirection(builder: flatbuffers.Builder, DIRECTION: appDataDirection): void;
    static addModuleId(builder: flatbuffers.Builder, MODULE_IDOffset: flatbuffers.Offset): void;
    static addDescription(builder: flatbuffers.Builder, DESCRIPTIONOffset: flatbuffers.Offset): void;
    static endAPPDataRef(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createAPPDataRef(builder: flatbuffers.Builder, IDOffset: flatbuffers.Offset, SDS_TYPEOffset: flatbuffers.Offset, DIRECTION: appDataDirection, MODULE_IDOffset: flatbuffers.Offset, DESCRIPTIONOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): APPDataRefT;
    unpackTo(_o: APPDataRefT): void;
}
export declare class APPDataRefT implements flatbuffers.IGeneratedObject {
    ID: string | Uint8Array | null;
    SDS_TYPE: string | Uint8Array | null;
    DIRECTION: appDataDirection;
    MODULE_ID: string | Uint8Array | null;
    DESCRIPTION: string | Uint8Array | null;
    constructor(ID?: string | Uint8Array | null, SDS_TYPE?: string | Uint8Array | null, DIRECTION?: appDataDirection, MODULE_ID?: string | Uint8Array | null, DESCRIPTION?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=APPDataRef.d.ts.map