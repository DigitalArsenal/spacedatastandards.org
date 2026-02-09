import * as flatbuffers from 'flatbuffers';
import { CZMColor, CZMColorT } from './CZMColor.js';
import { CZMMaterial, CZMMaterialT } from './CZMMaterial.js';
/**
 * Box (rectangular cuboid)
 */
export declare class CZMBox implements flatbuffers.IUnpackableObject<CZMBoxT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): CZMBox;
    static getRootAsCZMBox(bb: flatbuffers.ByteBuffer, obj?: CZMBox): CZMBox;
    static getSizePrefixedRootAsCZMBox(bb: flatbuffers.ByteBuffer, obj?: CZMBox): CZMBox;
    /**
     * Whether the box is displayed
     */
    SHOW(): boolean;
    /**
     * Width (X) in meters
     */
    DIMENSIONS_X(): number;
    /**
     * Depth (Y) in meters
     */
    DIMENSIONS_Y(): number;
    /**
     * Height (Z) in meters
     */
    DIMENSIONS_Z(): number;
    /**
     * Height reference
     */
    HEIGHT_REFERENCE(): string | null;
    HEIGHT_REFERENCE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Fill flag
     */
    FILL(): boolean;
    /**
     * Surface material
     */
    MATERIAL(obj?: CZMMaterial): CZMMaterial | null;
    /**
     * Outline flag
     */
    OUTLINE(): boolean;
    /**
     * Outline color
     */
    OUTLINE_COLOR(obj?: CZMColor): CZMColor | null;
    /**
     * Outline width
     */
    OUTLINE_WIDTH(): number;
    /**
     * Shadow mode
     */
    SHADOWS(): string | null;
    SHADOWS(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Distance display condition near
     */
    DISTANCE_DISPLAY_CONDITION_NEAR(): number;
    /**
     * Distance display condition far
     */
    DISTANCE_DISPLAY_CONDITION_FAR(): number;
    static startCZMBox(builder: flatbuffers.Builder): void;
    static addShow(builder: flatbuffers.Builder, SHOW: boolean): void;
    static addDimensionsX(builder: flatbuffers.Builder, DIMENSIONS_X: number): void;
    static addDimensionsY(builder: flatbuffers.Builder, DIMENSIONS_Y: number): void;
    static addDimensionsZ(builder: flatbuffers.Builder, DIMENSIONS_Z: number): void;
    static addHeightReference(builder: flatbuffers.Builder, HEIGHT_REFERENCEOffset: flatbuffers.Offset): void;
    static addFill(builder: flatbuffers.Builder, FILL: boolean): void;
    static addMaterial(builder: flatbuffers.Builder, MATERIALOffset: flatbuffers.Offset): void;
    static addOutline(builder: flatbuffers.Builder, OUTLINE: boolean): void;
    static addOutlineColor(builder: flatbuffers.Builder, OUTLINE_COLOROffset: flatbuffers.Offset): void;
    static addOutlineWidth(builder: flatbuffers.Builder, OUTLINE_WIDTH: number): void;
    static addShadows(builder: flatbuffers.Builder, SHADOWSOffset: flatbuffers.Offset): void;
    static addDistanceDisplayConditionNear(builder: flatbuffers.Builder, DISTANCE_DISPLAY_CONDITION_NEAR: number): void;
    static addDistanceDisplayConditionFar(builder: flatbuffers.Builder, DISTANCE_DISPLAY_CONDITION_FAR: number): void;
    static endCZMBox(builder: flatbuffers.Builder): flatbuffers.Offset;
    unpack(): CZMBoxT;
    unpackTo(_o: CZMBoxT): void;
}
export declare class CZMBoxT implements flatbuffers.IGeneratedObject {
    SHOW: boolean;
    DIMENSIONS_X: number;
    DIMENSIONS_Y: number;
    DIMENSIONS_Z: number;
    HEIGHT_REFERENCE: string | Uint8Array | null;
    FILL: boolean;
    MATERIAL: CZMMaterialT | null;
    OUTLINE: boolean;
    OUTLINE_COLOR: CZMColorT | null;
    OUTLINE_WIDTH: number;
    SHADOWS: string | Uint8Array | null;
    DISTANCE_DISPLAY_CONDITION_NEAR: number;
    DISTANCE_DISPLAY_CONDITION_FAR: number;
    constructor(SHOW?: boolean, DIMENSIONS_X?: number, DIMENSIONS_Y?: number, DIMENSIONS_Z?: number, HEIGHT_REFERENCE?: string | Uint8Array | null, FILL?: boolean, MATERIAL?: CZMMaterialT | null, OUTLINE?: boolean, OUTLINE_COLOR?: CZMColorT | null, OUTLINE_WIDTH?: number, SHADOWS?: string | Uint8Array | null, DISTANCE_DISPLAY_CONDITION_NEAR?: number, DISTANCE_DISPLAY_CONDITION_FAR?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=CZMBox.d.ts.map