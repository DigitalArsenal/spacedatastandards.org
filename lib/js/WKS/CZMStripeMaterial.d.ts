import * as flatbuffers from 'flatbuffers';
import { CZMColor, CZMColorT } from './CZMColor.js';
/**
 * Stripe material
 */
export declare class CZMStripeMaterial implements flatbuffers.IUnpackableObject<CZMStripeMaterialT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): CZMStripeMaterial;
    static getRootAsCZMStripeMaterial(bb: flatbuffers.ByteBuffer, obj?: CZMStripeMaterial): CZMStripeMaterial;
    static getSizePrefixedRootAsCZMStripeMaterial(bb: flatbuffers.ByteBuffer, obj?: CZMStripeMaterial): CZMStripeMaterial;
    /**
     * Stripe orientation
     */
    ORIENTATION(): string | null;
    ORIENTATION(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Even color
     */
    EVEN_COLOR(obj?: CZMColor): CZMColor | null;
    /**
     * Odd color
     */
    ODD_COLOR(obj?: CZMColor): CZMColor | null;
    /**
     * Offset
     */
    OFFSET(): number;
    /**
     * Number of times to repeat
     */
    REPEAT_COUNT(): number;
    static startCZMStripeMaterial(builder: flatbuffers.Builder): void;
    static addOrientation(builder: flatbuffers.Builder, ORIENTATIONOffset: flatbuffers.Offset): void;
    static addEvenColor(builder: flatbuffers.Builder, EVEN_COLOROffset: flatbuffers.Offset): void;
    static addOddColor(builder: flatbuffers.Builder, ODD_COLOROffset: flatbuffers.Offset): void;
    static addOffset(builder: flatbuffers.Builder, OFFSET: number): void;
    static addRepeatCount(builder: flatbuffers.Builder, REPEAT_COUNT: number): void;
    static endCZMStripeMaterial(builder: flatbuffers.Builder): flatbuffers.Offset;
    unpack(): CZMStripeMaterialT;
    unpackTo(_o: CZMStripeMaterialT): void;
}
export declare class CZMStripeMaterialT implements flatbuffers.IGeneratedObject {
    ORIENTATION: string | Uint8Array | null;
    EVEN_COLOR: CZMColorT | null;
    ODD_COLOR: CZMColorT | null;
    OFFSET: number;
    REPEAT_COUNT: number;
    constructor(ORIENTATION?: string | Uint8Array | null, EVEN_COLOR?: CZMColorT | null, ODD_COLOR?: CZMColorT | null, OFFSET?: number, REPEAT_COUNT?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=CZMStripeMaterial.d.ts.map