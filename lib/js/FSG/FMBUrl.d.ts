import * as flatbuffers from 'flatbuffers';
/**
 * A repeat delivery that moves a row's url.
 */
export declare class FMBUrl implements flatbuffers.IUnpackableObject<FMBUrlT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): FMBUrl;
    SEQ(): bigint;
    ROW_J(): number;
    URL_ID(): number;
    static sizeOf(): number;
    static createFMBUrl(builder: flatbuffers.Builder, SEQ: bigint, ROW_J: number, URL_ID: number): flatbuffers.Offset;
    unpack(): FMBUrlT;
    unpackTo(_o: FMBUrlT): void;
}
export declare class FMBUrlT implements flatbuffers.IGeneratedObject {
    SEQ: bigint;
    ROW_J: number;
    URL_ID: number;
    constructor(SEQ?: bigint, ROW_J?: number, URL_ID?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=FMBUrl.d.ts.map