import * as flatbuffers from 'flatbuffers';
/**
 * An inertia tensor of an APM (INERTIA_START block), in kg*m**2.
 */
export declare class APMInertia implements flatbuffers.IUnpackableObject<APMInertiaT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): APMInertia;
    static getRootAsAPMInertia(bb: flatbuffers.ByteBuffer, obj?: APMInertia): APMInertia;
    static getSizePrefixedRootAsAPMInertia(bb: flatbuffers.ByteBuffer, obj?: APMInertia): APMInertia;
    /**
     * COMMENT lines of this block, joined by a line feed.
     */
    COMMENT(): string | null;
    COMMENT(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * INERTIA_REF_FRAME: the frame the tensor is in.
     */
    INERTIA_REF_FRAME(): string | null;
    INERTIA_REF_FRAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * IXX: moment about X.
     */
    IXX(): number;
    /**
     * IYY: moment about Y.
     */
    IYY(): number;
    /**
     * IZZ: moment about Z.
     */
    IZZ(): number;
    /**
     * IXY: cross product X-Y.
     */
    IXY(): number;
    /**
     * IXZ: cross product X-Z.
     */
    IXZ(): number;
    /**
     * IYZ: cross product Y-Z.
     */
    IYZ(): number;
    static startAPMInertia(builder: flatbuffers.Builder): void;
    static addComment(builder: flatbuffers.Builder, COMMENTOffset: flatbuffers.Offset): void;
    static addInertiaRefFrame(builder: flatbuffers.Builder, INERTIA_REF_FRAMEOffset: flatbuffers.Offset): void;
    static addIxx(builder: flatbuffers.Builder, IXX: number): void;
    static addIyy(builder: flatbuffers.Builder, IYY: number): void;
    static addIzz(builder: flatbuffers.Builder, IZZ: number): void;
    static addIxy(builder: flatbuffers.Builder, IXY: number): void;
    static addIxz(builder: flatbuffers.Builder, IXZ: number): void;
    static addIyz(builder: flatbuffers.Builder, IYZ: number): void;
    static endAPMInertia(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createAPMInertia(builder: flatbuffers.Builder, COMMENTOffset: flatbuffers.Offset, INERTIA_REF_FRAMEOffset: flatbuffers.Offset, IXX: number, IYY: number, IZZ: number, IXY: number, IXZ: number, IYZ: number): flatbuffers.Offset;
    unpack(): APMInertiaT;
    unpackTo(_o: APMInertiaT): void;
}
export declare class APMInertiaT implements flatbuffers.IGeneratedObject {
    COMMENT: string | Uint8Array | null;
    INERTIA_REF_FRAME: string | Uint8Array | null;
    IXX: number;
    IYY: number;
    IZZ: number;
    IXY: number;
    IXZ: number;
    IYZ: number;
    constructor(COMMENT?: string | Uint8Array | null, INERTIA_REF_FRAME?: string | Uint8Array | null, IXX?: number, IYY?: number, IZZ?: number, IXY?: number, IXZ?: number, IYZ?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=APMInertia.d.ts.map