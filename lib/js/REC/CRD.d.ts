import * as flatbuffers from 'flatbuffers';
/**
 * Coordinate Systems
 */
export declare class CRD implements flatbuffers.IUnpackableObject<CRDT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): CRD;
    static getRootAsCRD(bb: flatbuffers.ByteBuffer, obj?: CRD): CRD;
    static getSizePrefixedRootAsCRD(bb: flatbuffers.ByteBuffer, obj?: CRD): CRD;
    static bufferHasIdentifier(bb: flatbuffers.ByteBuffer): boolean;
    X(): number;
    Y(): number;
    Z(): number;
    VX(): number;
    VY(): number;
    VZ(): number;
    FRAME(): number;
    ELLIPSOID(): number;
    RESERVED(index: number): number | null;
    reservedLength(): number;
    reservedArray(): Uint8Array | null;
    static startCRD(builder: flatbuffers.Builder): void;
    static addX(builder: flatbuffers.Builder, X: number): void;
    static addY(builder: flatbuffers.Builder, Y: number): void;
    static addZ(builder: flatbuffers.Builder, Z: number): void;
    static addVx(builder: flatbuffers.Builder, VX: number): void;
    static addVy(builder: flatbuffers.Builder, VY: number): void;
    static addVz(builder: flatbuffers.Builder, VZ: number): void;
    static addFrame(builder: flatbuffers.Builder, FRAME: number): void;
    static addEllipsoid(builder: flatbuffers.Builder, ELLIPSOID: number): void;
    static addReserved(builder: flatbuffers.Builder, RESERVEDOffset: flatbuffers.Offset): void;
    static createReservedVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startReservedVector(builder: flatbuffers.Builder, numElems: number): void;
    static endCRD(builder: flatbuffers.Builder): flatbuffers.Offset;
    static finishCRDBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static finishSizePrefixedCRDBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static createCRD(builder: flatbuffers.Builder, X: number, Y: number, Z: number, VX: number, VY: number, VZ: number, FRAME: number, ELLIPSOID: number, RESERVEDOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): CRDT;
    unpackTo(_o: CRDT): void;
}
export declare class CRDT implements flatbuffers.IGeneratedObject {
    X: number;
    Y: number;
    Z: number;
    VX: number;
    VY: number;
    VZ: number;
    FRAME: number;
    ELLIPSOID: number;
    RESERVED: (number)[];
    constructor(X?: number, Y?: number, Z?: number, VX?: number, VY?: number, VZ?: number, FRAME?: number, ELLIPSOID?: number, RESERVED?: (number)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=CRD.d.ts.map