import * as flatbuffers from 'flatbuffers';
/**
 * RGBA color
 */
export declare class CZMColor implements flatbuffers.IUnpackableObject<CZMColorT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): CZMColor;
    static getRootAsCZMColor(bb: flatbuffers.ByteBuffer, obj?: CZMColor): CZMColor;
    static getSizePrefixedRootAsCZMColor(bb: flatbuffers.ByteBuffer, obj?: CZMColor): CZMColor;
    /**
     * Red component (0-255)
     */
    RED(): number;
    /**
     * Green component (0-255)
     */
    GREEN(): number;
    /**
     * Blue component (0-255)
     */
    BLUE(): number;
    /**
     * Alpha component (0-255)
     */
    ALPHA(): number;
    static startCZMColor(builder: flatbuffers.Builder): void;
    static addRed(builder: flatbuffers.Builder, RED: number): void;
    static addGreen(builder: flatbuffers.Builder, GREEN: number): void;
    static addBlue(builder: flatbuffers.Builder, BLUE: number): void;
    static addAlpha(builder: flatbuffers.Builder, ALPHA: number): void;
    static endCZMColor(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createCZMColor(builder: flatbuffers.Builder, RED: number, GREEN: number, BLUE: number, ALPHA: number): flatbuffers.Offset;
    unpack(): CZMColorT;
    unpackTo(_o: CZMColorT): void;
}
export declare class CZMColorT implements flatbuffers.IGeneratedObject {
    RED: number;
    GREEN: number;
    BLUE: number;
    ALPHA: number;
    constructor(RED?: number, GREEN?: number, BLUE?: number, ALPHA?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=CZMColor.d.ts.map