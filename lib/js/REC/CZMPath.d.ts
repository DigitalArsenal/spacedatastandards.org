import * as flatbuffers from 'flatbuffers';
import { CZMColor, CZMColorT } from './CZMColor.js';
/**
 * Path properties (orbit trail)
 */
export declare class CZMPath implements flatbuffers.IUnpackableObject<CZMPathT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): CZMPath;
    static getRootAsCZMPath(bb: flatbuffers.ByteBuffer, obj?: CZMPath): CZMPath;
    static getSizePrefixedRootAsCZMPath(bb: flatbuffers.ByteBuffer, obj?: CZMPath): CZMPath;
    /**
     * Whether the path is displayed
     */
    SHOW(): boolean;
    /**
     * Trail time in seconds (how far behind)
     */
    LEAD_TIME(): number;
    /**
     * Lead time in seconds (how far ahead)
     */
    TRAIL_TIME(): number;
    /**
     * Line width in pixels
     */
    WIDTH(): number;
    /**
     * Path color
     */
    COLOR(obj?: CZMColor): CZMColor | null;
    /**
     * Resolution in seconds
     */
    RESOLUTION(): number;
    static startCZMPath(builder: flatbuffers.Builder): void;
    static addShow(builder: flatbuffers.Builder, SHOW: boolean): void;
    static addLeadTime(builder: flatbuffers.Builder, LEAD_TIME: number): void;
    static addTrailTime(builder: flatbuffers.Builder, TRAIL_TIME: number): void;
    static addWidth(builder: flatbuffers.Builder, WIDTH: number): void;
    static addColor(builder: flatbuffers.Builder, COLOROffset: flatbuffers.Offset): void;
    static addResolution(builder: flatbuffers.Builder, RESOLUTION: number): void;
    static endCZMPath(builder: flatbuffers.Builder): flatbuffers.Offset;
    unpack(): CZMPathT;
    unpackTo(_o: CZMPathT): void;
}
export declare class CZMPathT implements flatbuffers.IGeneratedObject {
    SHOW: boolean;
    LEAD_TIME: number;
    TRAIL_TIME: number;
    WIDTH: number;
    COLOR: CZMColorT | null;
    RESOLUTION: number;
    constructor(SHOW?: boolean, LEAD_TIME?: number, TRAIL_TIME?: number, WIDTH?: number, COLOR?: CZMColorT | null, RESOLUTION?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=CZMPath.d.ts.map