import * as flatbuffers from 'flatbuffers';
export declare class CLGQuaternion implements flatbuffers.IUnpackableObject<CLGQuaternionT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): CLGQuaternion;
    X(): number;
    Y(): number;
    Z(): number;
    W(): number;
    HAS_VALUES(): boolean;
    static sizeOf(): number;
    static createCLGQuaternion(builder: flatbuffers.Builder, X: number, Y: number, Z: number, W: number, HAS_VALUES: boolean): flatbuffers.Offset;
    unpack(): CLGQuaternionT;
    unpackTo(_o: CLGQuaternionT): void;
}
export declare class CLGQuaternionT implements flatbuffers.IGeneratedObject {
    X: number;
    Y: number;
    Z: number;
    W: number;
    HAS_VALUES: boolean;
    constructor(X?: number, Y?: number, Z?: number, W?: number, HAS_VALUES?: boolean);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=CLGQuaternion.d.ts.map