import * as flatbuffers from 'flatbuffers';
import { CZMColor, CZMColorT } from './CZMColor.js';
import { CZMMaterial, CZMMaterialT } from './CZMMaterial.js';
/**
 * Cylinder or cone
 */
export declare class CZMCylinder implements flatbuffers.IUnpackableObject<CZMCylinderT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): CZMCylinder;
    static getRootAsCZMCylinder(bb: flatbuffers.ByteBuffer, obj?: CZMCylinder): CZMCylinder;
    static getSizePrefixedRootAsCZMCylinder(bb: flatbuffers.ByteBuffer, obj?: CZMCylinder): CZMCylinder;
    /**
     * Whether the cylinder is displayed
     */
    SHOW(): boolean;
    /**
     * Length in meters
     */
    LENGTH(): number;
    /**
     * Top radius in meters
     */
    TOP_RADIUS(): number;
    /**
     * Bottom radius in meters
     */
    BOTTOM_RADIUS(): number;
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
     * Number of vertical lines
     */
    NUMBER_OF_VERTICAL_LINES(): number;
    /**
     * Number of slices
     */
    SLICES(): number;
    /**
     * Shadow mode
     */
    SHADOWS(): string | null;
    SHADOWS(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    static startCZMCylinder(builder: flatbuffers.Builder): void;
    static addShow(builder: flatbuffers.Builder, SHOW: boolean): void;
    static addLength(builder: flatbuffers.Builder, LENGTH: number): void;
    static addTopRadius(builder: flatbuffers.Builder, TOP_RADIUS: number): void;
    static addBottomRadius(builder: flatbuffers.Builder, BOTTOM_RADIUS: number): void;
    static addHeightReference(builder: flatbuffers.Builder, HEIGHT_REFERENCEOffset: flatbuffers.Offset): void;
    static addFill(builder: flatbuffers.Builder, FILL: boolean): void;
    static addMaterial(builder: flatbuffers.Builder, MATERIALOffset: flatbuffers.Offset): void;
    static addOutline(builder: flatbuffers.Builder, OUTLINE: boolean): void;
    static addOutlineColor(builder: flatbuffers.Builder, OUTLINE_COLOROffset: flatbuffers.Offset): void;
    static addOutlineWidth(builder: flatbuffers.Builder, OUTLINE_WIDTH: number): void;
    static addNumberOfVerticalLines(builder: flatbuffers.Builder, NUMBER_OF_VERTICAL_LINES: number): void;
    static addSlices(builder: flatbuffers.Builder, SLICES: number): void;
    static addShadows(builder: flatbuffers.Builder, SHADOWSOffset: flatbuffers.Offset): void;
    static endCZMCylinder(builder: flatbuffers.Builder): flatbuffers.Offset;
    unpack(): CZMCylinderT;
    unpackTo(_o: CZMCylinderT): void;
}
export declare class CZMCylinderT implements flatbuffers.IGeneratedObject {
    SHOW: boolean;
    LENGTH: number;
    TOP_RADIUS: number;
    BOTTOM_RADIUS: number;
    HEIGHT_REFERENCE: string | Uint8Array | null;
    FILL: boolean;
    MATERIAL: CZMMaterialT | null;
    OUTLINE: boolean;
    OUTLINE_COLOR: CZMColorT | null;
    OUTLINE_WIDTH: number;
    NUMBER_OF_VERTICAL_LINES: number;
    SLICES: number;
    SHADOWS: string | Uint8Array | null;
    constructor(SHOW?: boolean, LENGTH?: number, TOP_RADIUS?: number, BOTTOM_RADIUS?: number, HEIGHT_REFERENCE?: string | Uint8Array | null, FILL?: boolean, MATERIAL?: CZMMaterialT | null, OUTLINE?: boolean, OUTLINE_COLOR?: CZMColorT | null, OUTLINE_WIDTH?: number, NUMBER_OF_VERTICAL_LINES?: number, SLICES?: number, SHADOWS?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=CZMCylinder.d.ts.map