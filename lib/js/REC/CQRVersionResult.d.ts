import * as flatbuffers from 'flatbuffers';
export declare class CQRVersionResult implements flatbuffers.IUnpackableObject<CQRVersionResultT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): CQRVersionResult;
    static getRootAsCQRVersionResult(bb: flatbuffers.ByteBuffer, obj?: CQRVersionResult): CQRVersionResult;
    static getSizePrefixedRootAsCQRVersionResult(bb: flatbuffers.ByteBuffer, obj?: CQRVersionResult): CQRVersionResult;
    VERSION(): string;
    VERSION(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    static startCQRVersionResult(builder: flatbuffers.Builder): void;
    static addVersion(builder: flatbuffers.Builder, VERSIONOffset: flatbuffers.Offset): void;
    static endCQRVersionResult(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createCQRVersionResult(builder: flatbuffers.Builder, VERSIONOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): CQRVersionResultT;
    unpackTo(_o: CQRVersionResultT): void;
}
export declare class CQRVersionResultT implements flatbuffers.IGeneratedObject {
    VERSION: string | Uint8Array | null;
    constructor(VERSION?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=CQRVersionResult.d.ts.map