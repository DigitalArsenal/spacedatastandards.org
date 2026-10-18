import * as flatbuffers from 'flatbuffers';
/**
 * An ingest identity registered by a row (32-byte hash).
 */
export declare class FMBIdentity implements flatbuffers.IUnpackableObject<FMBIdentityT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): FMBIdentity;
    static getRootAsFMBIdentity(bb: flatbuffers.ByteBuffer, obj?: FMBIdentity): FMBIdentity;
    static getSizePrefixedRootAsFMBIdentity(bb: flatbuffers.ByteBuffer, obj?: FMBIdentity): FMBIdentity;
    /**
     * Index into FMB.ROWS.
     */
    ROW(): number;
    HASH(index: number): number | null;
    hashLength(): number;
    hashArray(): Uint8Array | null;
    static startFMBIdentity(builder: flatbuffers.Builder): void;
    static addRow(builder: flatbuffers.Builder, ROW: number): void;
    static addHash(builder: flatbuffers.Builder, HASHOffset: flatbuffers.Offset): void;
    static createHashVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startHashVector(builder: flatbuffers.Builder, numElems: number): void;
    static endFMBIdentity(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createFMBIdentity(builder: flatbuffers.Builder, ROW: number, HASHOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): FMBIdentityT;
    unpackTo(_o: FMBIdentityT): void;
}
export declare class FMBIdentityT implements flatbuffers.IGeneratedObject {
    ROW: number;
    HASH: (number)[];
    constructor(ROW?: number, HASH?: (number)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=FMBIdentity.d.ts.map