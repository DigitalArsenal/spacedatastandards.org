import * as flatbuffers from 'flatbuffers';
export declare class CLGIndex implements flatbuffers.IUnpackableObject<CLGIndexT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): CLGIndex;
    VALUE(): number;
    HAS_VALUE(): boolean;
    static sizeOf(): number;
    static createCLGIndex(builder: flatbuffers.Builder, VALUE: number, HAS_VALUE: boolean): flatbuffers.Offset;
    unpack(): CLGIndexT;
    unpackTo(_o: CLGIndexT): void;
}
export declare class CLGIndexT implements flatbuffers.IGeneratedObject {
    VALUE: number;
    HAS_VALUE: boolean;
    constructor(VALUE?: number, HAS_VALUE?: boolean);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=CLGIndex.d.ts.map