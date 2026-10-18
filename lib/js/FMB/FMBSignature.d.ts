import * as flatbuffers from 'flatbuffers';
/**
 * A row's signature bytes.
 */
export declare class FMBSignature implements flatbuffers.IUnpackableObject<FMBSignatureT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): FMBSignature;
    static getRootAsFMBSignature(bb: flatbuffers.ByteBuffer, obj?: FMBSignature): FMBSignature;
    static getSizePrefixedRootAsFMBSignature(bb: flatbuffers.ByteBuffer, obj?: FMBSignature): FMBSignature;
    /**
     * Index into FMB.ROWS.
     */
    ROW(): number;
    BYTES(index: number): number | null;
    bytesLength(): number;
    bytesArray(): Uint8Array | null;
    static startFMBSignature(builder: flatbuffers.Builder): void;
    static addRow(builder: flatbuffers.Builder, ROW: number): void;
    static addBytes(builder: flatbuffers.Builder, BYTESOffset: flatbuffers.Offset): void;
    static createBytesVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startBytesVector(builder: flatbuffers.Builder, numElems: number): void;
    static endFMBSignature(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createFMBSignature(builder: flatbuffers.Builder, ROW: number, BYTESOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): FMBSignatureT;
    unpackTo(_o: FMBSignatureT): void;
}
export declare class FMBSignatureT implements flatbuffers.IGeneratedObject {
    ROW: number;
    BYTES: (number)[];
    constructor(ROW?: number, BYTES?: (number)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=FMBSignature.d.ts.map