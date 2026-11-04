import * as flatbuffers from 'flatbuffers';
/**
 * Runtime diagnostic version; PLG remains the authoritative manifest identity.
 */
export declare class PRWVersionResult implements flatbuffers.IUnpackableObject<PRWVersionResultT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): PRWVersionResult;
    static getRootAsPRWVersionResult(bb: flatbuffers.ByteBuffer, obj?: PRWVersionResult): PRWVersionResult;
    static getSizePrefixedRootAsPRWVersionResult(bb: flatbuffers.ByteBuffer, obj?: PRWVersionResult): PRWVersionResult;
    VERSION(): string;
    VERSION(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    MODULE_ID(): string;
    MODULE_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    static startPRWVersionResult(builder: flatbuffers.Builder): void;
    static addVersion(builder: flatbuffers.Builder, VERSIONOffset: flatbuffers.Offset): void;
    static addModuleId(builder: flatbuffers.Builder, MODULE_IDOffset: flatbuffers.Offset): void;
    static endPRWVersionResult(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createPRWVersionResult(builder: flatbuffers.Builder, VERSIONOffset: flatbuffers.Offset, MODULE_IDOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): PRWVersionResultT;
    unpackTo(_o: PRWVersionResultT): void;
}
export declare class PRWVersionResultT implements flatbuffers.IGeneratedObject {
    VERSION: string | Uint8Array | null;
    MODULE_ID: string | Uint8Array | null;
    constructor(VERSION?: string | Uint8Array | null, MODULE_ID?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=PRWVersionResult.d.ts.map