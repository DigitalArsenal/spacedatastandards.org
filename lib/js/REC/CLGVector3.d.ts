import * as flatbuffers from 'flatbuffers';
export declare class CLGVector3 implements flatbuffers.IUnpackableObject<CLGVector3T> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): CLGVector3;
    X(): number;
    Y(): number;
    Z(): number;
    HAS_VALUES(): boolean;
    static sizeOf(): number;
    static createCLGVector3(builder: flatbuffers.Builder, X: number, Y: number, Z: number, HAS_VALUES: boolean): flatbuffers.Offset;
    unpack(): CLGVector3T;
    unpackTo(_o: CLGVector3T): void;
}
export declare class CLGVector3T implements flatbuffers.IGeneratedObject {
    X: number;
    Y: number;
    Z: number;
    HAS_VALUES: boolean;
    constructor(X?: number, Y?: number, Z?: number, HAS_VALUES?: boolean);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=CLGVector3.d.ts.map