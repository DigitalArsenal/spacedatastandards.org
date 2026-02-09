import * as flatbuffers from 'flatbuffers';
import { CZMColor, CZMColorT } from './CZMColor.js';
import { CZMMaterial, CZMMaterialT } from './CZMMaterial.js';
/**
 * Ellipsoid (3D shape)
 */
export declare class CZMEllipsoid implements flatbuffers.IUnpackableObject<CZMEllipsoidT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): CZMEllipsoid;
    static getRootAsCZMEllipsoid(bb: flatbuffers.ByteBuffer, obj?: CZMEllipsoid): CZMEllipsoid;
    static getSizePrefixedRootAsCZMEllipsoid(bb: flatbuffers.ByteBuffer, obj?: CZMEllipsoid): CZMEllipsoid;
    /**
     * Whether the ellipsoid is displayed
     */
    SHOW(): boolean;
    /**
     * X radius in meters
     */
    RADII_X(): number;
    /**
     * Y radius in meters
     */
    RADII_Y(): number;
    /**
     * Z radius in meters
     */
    RADII_Z(): number;
    /**
     * Inner X radius
     */
    INNER_RADII_X(): number;
    /**
     * Inner Y radius
     */
    INNER_RADII_Y(): number;
    /**
     * Inner Z radius
     */
    INNER_RADII_Z(): number;
    /**
     * Minimum clock angle in radians
     */
    MINIMUM_CLOCK(): number;
    /**
     * Maximum clock angle in radians
     */
    MAXIMUM_CLOCK(): number;
    /**
     * Minimum cone angle in radians
     */
    MINIMUM_CONE(): number;
    /**
     * Maximum cone angle in radians
     */
    MAXIMUM_CONE(): number;
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
     * Stack partitions
     */
    STACK_PARTITIONS(): number;
    /**
     * Slice partitions
     */
    SLICE_PARTITIONS(): number;
    /**
     * Subdivisions
     */
    SUBDIVISIONS(): number;
    /**
     * Shadow mode
     */
    SHADOWS(): string | null;
    SHADOWS(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    static startCZMEllipsoid(builder: flatbuffers.Builder): void;
    static addShow(builder: flatbuffers.Builder, SHOW: boolean): void;
    static addRadiiX(builder: flatbuffers.Builder, RADII_X: number): void;
    static addRadiiY(builder: flatbuffers.Builder, RADII_Y: number): void;
    static addRadiiZ(builder: flatbuffers.Builder, RADII_Z: number): void;
    static addInnerRadiiX(builder: flatbuffers.Builder, INNER_RADII_X: number): void;
    static addInnerRadiiY(builder: flatbuffers.Builder, INNER_RADII_Y: number): void;
    static addInnerRadiiZ(builder: flatbuffers.Builder, INNER_RADII_Z: number): void;
    static addMinimumClock(builder: flatbuffers.Builder, MINIMUM_CLOCK: number): void;
    static addMaximumClock(builder: flatbuffers.Builder, MAXIMUM_CLOCK: number): void;
    static addMinimumCone(builder: flatbuffers.Builder, MINIMUM_CONE: number): void;
    static addMaximumCone(builder: flatbuffers.Builder, MAXIMUM_CONE: number): void;
    static addHeightReference(builder: flatbuffers.Builder, HEIGHT_REFERENCEOffset: flatbuffers.Offset): void;
    static addFill(builder: flatbuffers.Builder, FILL: boolean): void;
    static addMaterial(builder: flatbuffers.Builder, MATERIALOffset: flatbuffers.Offset): void;
    static addOutline(builder: flatbuffers.Builder, OUTLINE: boolean): void;
    static addOutlineColor(builder: flatbuffers.Builder, OUTLINE_COLOROffset: flatbuffers.Offset): void;
    static addOutlineWidth(builder: flatbuffers.Builder, OUTLINE_WIDTH: number): void;
    static addStackPartitions(builder: flatbuffers.Builder, STACK_PARTITIONS: number): void;
    static addSlicePartitions(builder: flatbuffers.Builder, SLICE_PARTITIONS: number): void;
    static addSubdivisions(builder: flatbuffers.Builder, SUBDIVISIONS: number): void;
    static addShadows(builder: flatbuffers.Builder, SHADOWSOffset: flatbuffers.Offset): void;
    static endCZMEllipsoid(builder: flatbuffers.Builder): flatbuffers.Offset;
    unpack(): CZMEllipsoidT;
    unpackTo(_o: CZMEllipsoidT): void;
}
export declare class CZMEllipsoidT implements flatbuffers.IGeneratedObject {
    SHOW: boolean;
    RADII_X: number;
    RADII_Y: number;
    RADII_Z: number;
    INNER_RADII_X: number;
    INNER_RADII_Y: number;
    INNER_RADII_Z: number;
    MINIMUM_CLOCK: number;
    MAXIMUM_CLOCK: number;
    MINIMUM_CONE: number;
    MAXIMUM_CONE: number;
    HEIGHT_REFERENCE: string | Uint8Array | null;
    FILL: boolean;
    MATERIAL: CZMMaterialT | null;
    OUTLINE: boolean;
    OUTLINE_COLOR: CZMColorT | null;
    OUTLINE_WIDTH: number;
    STACK_PARTITIONS: number;
    SLICE_PARTITIONS: number;
    SUBDIVISIONS: number;
    SHADOWS: string | Uint8Array | null;
    constructor(SHOW?: boolean, RADII_X?: number, RADII_Y?: number, RADII_Z?: number, INNER_RADII_X?: number, INNER_RADII_Y?: number, INNER_RADII_Z?: number, MINIMUM_CLOCK?: number, MAXIMUM_CLOCK?: number, MINIMUM_CONE?: number, MAXIMUM_CONE?: number, HEIGHT_REFERENCE?: string | Uint8Array | null, FILL?: boolean, MATERIAL?: CZMMaterialT | null, OUTLINE?: boolean, OUTLINE_COLOR?: CZMColorT | null, OUTLINE_WIDTH?: number, STACK_PARTITIONS?: number, SLICE_PARTITIONS?: number, SUBDIVISIONS?: number, SHADOWS?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=CZMEllipsoid.d.ts.map