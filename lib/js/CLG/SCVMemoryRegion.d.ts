import * as flatbuffers from 'flatbuffers';
export declare class SCVMemoryRegion implements flatbuffers.IUnpackableObject<SCVMemoryRegionT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): SCVMemoryRegion;
    static getRootAsSCVMemoryRegion(bb: flatbuffers.ByteBuffer, obj?: SCVMemoryRegion): SCVMemoryRegion;
    static getSizePrefixedRootAsSCVMemoryRegion(bb: flatbuffers.ByteBuffer, obj?: SCVMemoryRegion): SCVMemoryRegion;
    REGION_ID(): number;
    RECORD_INDEX(): number;
    REGION_KEY(): string | null;
    REGION_KEY(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    BYTE_OFFSET(): bigint;
    BYTE_LENGTH(): bigint;
    BYTE_STRIDE(): number;
    ALIGNMENT(): number;
    SHARED(): boolean;
    MUTABLE(): boolean;
    static startSCVMemoryRegion(builder: flatbuffers.Builder): void;
    static addRegionId(builder: flatbuffers.Builder, REGION_ID: number): void;
    static addRecordIndex(builder: flatbuffers.Builder, RECORD_INDEX: number): void;
    static addRegionKey(builder: flatbuffers.Builder, REGION_KEYOffset: flatbuffers.Offset): void;
    static addByteOffset(builder: flatbuffers.Builder, BYTE_OFFSET: bigint): void;
    static addByteLength(builder: flatbuffers.Builder, BYTE_LENGTH: bigint): void;
    static addByteStride(builder: flatbuffers.Builder, BYTE_STRIDE: number): void;
    static addAlignment(builder: flatbuffers.Builder, ALIGNMENT: number): void;
    static addShared(builder: flatbuffers.Builder, SHARED: boolean): void;
    static addMutable(builder: flatbuffers.Builder, MUTABLE: boolean): void;
    static endSCVMemoryRegion(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createSCVMemoryRegion(builder: flatbuffers.Builder, REGION_ID: number, RECORD_INDEX: number, REGION_KEYOffset: flatbuffers.Offset, BYTE_OFFSET: bigint, BYTE_LENGTH: bigint, BYTE_STRIDE: number, ALIGNMENT: number, SHARED: boolean, MUTABLE: boolean): flatbuffers.Offset;
    unpack(): SCVMemoryRegionT;
    unpackTo(_o: SCVMemoryRegionT): void;
}
export declare class SCVMemoryRegionT implements flatbuffers.IGeneratedObject {
    REGION_ID: number;
    RECORD_INDEX: number;
    REGION_KEY: string | Uint8Array | null;
    BYTE_OFFSET: bigint;
    BYTE_LENGTH: bigint;
    BYTE_STRIDE: number;
    ALIGNMENT: number;
    SHARED: boolean;
    MUTABLE: boolean;
    constructor(REGION_ID?: number, RECORD_INDEX?: number, REGION_KEY?: string | Uint8Array | null, BYTE_OFFSET?: bigint, BYTE_LENGTH?: bigint, BYTE_STRIDE?: number, ALIGNMENT?: number, SHARED?: boolean, MUTABLE?: boolean);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=SCVMemoryRegion.d.ts.map