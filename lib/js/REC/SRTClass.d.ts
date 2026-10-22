import * as flatbuffers from 'flatbuffers';
/**
 * One class of a categorical raster.
 */
export declare class SRTClass implements flatbuffers.IUnpackableObject<SRTClassT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): SRTClass;
    static getRootAsSRTClass(bb: flatbuffers.ByteBuffer, obj?: SRTClass): SRTClass;
    static getSizePrefixedRootAsSRTClass(bb: flatbuffers.ByteBuffer, obj?: SRTClass): SRTClass;
    /**
     * Sample value of the class.
     */
    CODE(): number;
    /**
     * Source label, verbatim.
     */
    LABEL(): string;
    LABEL(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    /**
     * Source display color, 0xRRGGBBAA.
     */
    COLOR_RGBA(): number;
    static startSRTClass(builder: flatbuffers.Builder): void;
    static addCode(builder: flatbuffers.Builder, CODE: number): void;
    static addLabel(builder: flatbuffers.Builder, LABELOffset: flatbuffers.Offset): void;
    static addColorRgba(builder: flatbuffers.Builder, COLOR_RGBA: number): void;
    static endSRTClass(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createSRTClass(builder: flatbuffers.Builder, CODE: number, LABELOffset: flatbuffers.Offset, COLOR_RGBA: number): flatbuffers.Offset;
    unpack(): SRTClassT;
    unpackTo(_o: SRTClassT): void;
}
export declare class SRTClassT implements flatbuffers.IGeneratedObject {
    CODE: number;
    LABEL: string | Uint8Array | null;
    COLOR_RGBA: number;
    constructor(CODE?: number, LABEL?: string | Uint8Array | null, COLOR_RGBA?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=SRTClass.d.ts.map