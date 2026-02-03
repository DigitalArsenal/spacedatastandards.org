import * as flatbuffers from 'flatbuffers';
/**
 * State Vector
 */
export declare class STV implements flatbuffers.IUnpackableObject<STVT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): STV;
    static getRootAsSTV(bb: flatbuffers.ByteBuffer, obj?: STV): STV;
    static getSizePrefixedRootAsSTV(bb: flatbuffers.ByteBuffer, obj?: STV): STV;
    static bufferHasIdentifier(bb: flatbuffers.ByteBuffer): boolean;
    EPOCH(): number;
    POS_X(): number;
    POS_Y(): number;
    POS_Z(): number;
    VEL_X(): number;
    VEL_Y(): number;
    VEL_Z(): number;
    REF_FRAME(): number;
    FLAGS(): number;
    RESERVED(index: number): number | null;
    reservedLength(): number;
    reservedArray(): Uint8Array | null;
    static startSTV(builder: flatbuffers.Builder): void;
    static addEpoch(builder: flatbuffers.Builder, EPOCH: number): void;
    static addPosX(builder: flatbuffers.Builder, POS_X: number): void;
    static addPosY(builder: flatbuffers.Builder, POS_Y: number): void;
    static addPosZ(builder: flatbuffers.Builder, POS_Z: number): void;
    static addVelX(builder: flatbuffers.Builder, VEL_X: number): void;
    static addVelY(builder: flatbuffers.Builder, VEL_Y: number): void;
    static addVelZ(builder: flatbuffers.Builder, VEL_Z: number): void;
    static addRefFrame(builder: flatbuffers.Builder, REF_FRAME: number): void;
    static addFlags(builder: flatbuffers.Builder, FLAGS: number): void;
    static addReserved(builder: flatbuffers.Builder, RESERVEDOffset: flatbuffers.Offset): void;
    static createReservedVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startReservedVector(builder: flatbuffers.Builder, numElems: number): void;
    static endSTV(builder: flatbuffers.Builder): flatbuffers.Offset;
    static finishSTVBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static finishSizePrefixedSTVBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static createSTV(builder: flatbuffers.Builder, EPOCH: number, POS_X: number, POS_Y: number, POS_Z: number, VEL_X: number, VEL_Y: number, VEL_Z: number, REF_FRAME: number, FLAGS: number, RESERVEDOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): STVT;
    unpackTo(_o: STVT): void;
}
export declare class STVT implements flatbuffers.IGeneratedObject {
    EPOCH: number;
    POS_X: number;
    POS_Y: number;
    POS_Z: number;
    VEL_X: number;
    VEL_Y: number;
    VEL_Z: number;
    REF_FRAME: number;
    FLAGS: number;
    RESERVED: (number)[];
    constructor(EPOCH?: number, POS_X?: number, POS_Y?: number, POS_Z?: number, VEL_X?: number, VEL_Y?: number, VEL_Z?: number, REF_FRAME?: number, FLAGS?: number, RESERVED?: (number)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=STV.d.ts.map