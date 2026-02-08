import * as flatbuffers from 'flatbuffers';
import { CZMColor, CZMColorT } from './CZMColor.js';
import { CZMHeightReference } from './CZMHeightReference.js';
/**
 * Ellipse properties (for ground circles/ellipses)
 */
export declare class CZMEllipse implements flatbuffers.IUnpackableObject<CZMEllipseT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): CZMEllipse;
    static getRootAsCZMEllipse(bb: flatbuffers.ByteBuffer, obj?: CZMEllipse): CZMEllipse;
    static getSizePrefixedRootAsCZMEllipse(bb: flatbuffers.ByteBuffer, obj?: CZMEllipse): CZMEllipse;
    /**
     * Whether the ellipse is displayed
     */
    SHOW(): boolean;
    /**
     * Semi-major axis in meters
     */
    SEMI_MAJOR_AXIS(): number;
    /**
     * Semi-minor axis in meters
     */
    SEMI_MINOR_AXIS(): number;
    /**
     * Rotation from north in radians
     */
    ROTATION(): number;
    /**
     * Fill flag
     */
    FILL(): boolean;
    /**
     * Fill color
     */
    COLOR(obj?: CZMColor): CZMColor | null;
    /**
     * Outline flag
     */
    OUTLINE(): boolean;
    /**
     * Outline color
     */
    OUTLINE_COLOR(obj?: CZMColor): CZMColor | null;
    /**
     * Height in meters
     */
    HEIGHT(): number;
    /**
     * Height reference
     */
    HEIGHT_REFERENCE(): CZMHeightReference;
    static startCZMEllipse(builder: flatbuffers.Builder): void;
    static addShow(builder: flatbuffers.Builder, SHOW: boolean): void;
    static addSemiMajorAxis(builder: flatbuffers.Builder, SEMI_MAJOR_AXIS: number): void;
    static addSemiMinorAxis(builder: flatbuffers.Builder, SEMI_MINOR_AXIS: number): void;
    static addRotation(builder: flatbuffers.Builder, ROTATION: number): void;
    static addFill(builder: flatbuffers.Builder, FILL: boolean): void;
    static addColor(builder: flatbuffers.Builder, COLOROffset: flatbuffers.Offset): void;
    static addOutline(builder: flatbuffers.Builder, OUTLINE: boolean): void;
    static addOutlineColor(builder: flatbuffers.Builder, OUTLINE_COLOROffset: flatbuffers.Offset): void;
    static addHeight(builder: flatbuffers.Builder, HEIGHT: number): void;
    static addHeightReference(builder: flatbuffers.Builder, HEIGHT_REFERENCE: CZMHeightReference): void;
    static endCZMEllipse(builder: flatbuffers.Builder): flatbuffers.Offset;
    unpack(): CZMEllipseT;
    unpackTo(_o: CZMEllipseT): void;
}
export declare class CZMEllipseT implements flatbuffers.IGeneratedObject {
    SHOW: boolean;
    SEMI_MAJOR_AXIS: number;
    SEMI_MINOR_AXIS: number;
    ROTATION: number;
    FILL: boolean;
    COLOR: CZMColorT | null;
    OUTLINE: boolean;
    OUTLINE_COLOR: CZMColorT | null;
    HEIGHT: number;
    HEIGHT_REFERENCE: CZMHeightReference;
    constructor(SHOW?: boolean, SEMI_MAJOR_AXIS?: number, SEMI_MINOR_AXIS?: number, ROTATION?: number, FILL?: boolean, COLOR?: CZMColorT | null, OUTLINE?: boolean, OUTLINE_COLOR?: CZMColorT | null, HEIGHT?: number, HEIGHT_REFERENCE?: CZMHeightReference);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=CZMEllipse.d.ts.map