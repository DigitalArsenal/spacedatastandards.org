import * as flatbuffers from 'flatbuffers';
import { ACWElevationMaskPoint, ACWElevationMaskPointT } from './ACWElevationMaskPoint.js';
import { acwConstraintKind } from './acwConstraintKind.js';
import { acwLightingCondition } from './acwLightingCondition.js';
/**
 * One access constraint. Fields not used by KIND are ignored.
 */
export declare class ACWConstraint implements flatbuffers.IUnpackableObject<ACWConstraintT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): ACWConstraint;
    static getRootAsACWConstraint(bb: flatbuffers.ByteBuffer, obj?: ACWConstraint): ACWConstraint;
    static getSizePrefixedRootAsACWConstraint(bb: flatbuffers.ByteBuffer, obj?: ACWConstraint): ACWConstraint;
    KIND(): acwConstraintKind;
    /**
     * Angular threshold, radians (MIN_ELEVATION, SUN_EXCLUSION, MOON_EXCLUSION).
     */
    THRESHOLD_RAD(): number;
    /**
     * Range bounds, meters (MIN_RANGE, MAX_RANGE).
     */
    MIN_RANGE_M(): number;
    MAX_RANGE_M(): number;
    /**
     * Required target lighting (TARGET_LIGHTING).
     */
    LIGHTING(): acwLightingCondition;
    /**
     * Central-body radius offset for line-of-sight occultation, meters
     * (LINE_OF_SIGHT); 0 grazes the ellipsoid surface.
     */
    OCCULTATION_ATMOSPHERE_HEIGHT_M(): number;
    /**
     * Azimuth-dependent mask (ELEVATION_MASK).
     */
    MASK(index: number, obj?: ACWElevationMaskPoint): ACWElevationMaskPoint | null;
    maskLength(): number;
    /**
     * Producer label echoed in window attribution.
     */
    LABEL(): string | null;
    LABEL(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    static startACWConstraint(builder: flatbuffers.Builder): void;
    static addKind(builder: flatbuffers.Builder, KIND: acwConstraintKind): void;
    static addThresholdRad(builder: flatbuffers.Builder, THRESHOLD_RAD: number): void;
    static addMinRangeM(builder: flatbuffers.Builder, MIN_RANGE_M: number): void;
    static addMaxRangeM(builder: flatbuffers.Builder, MAX_RANGE_M: number): void;
    static addLighting(builder: flatbuffers.Builder, LIGHTING: acwLightingCondition): void;
    static addOccultationAtmosphereHeightM(builder: flatbuffers.Builder, OCCULTATION_ATMOSPHERE_HEIGHT_M: number): void;
    static addMask(builder: flatbuffers.Builder, MASKOffset: flatbuffers.Offset): void;
    static createMaskVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startMaskVector(builder: flatbuffers.Builder, numElems: number): void;
    static addLabel(builder: flatbuffers.Builder, LABELOffset: flatbuffers.Offset): void;
    static endACWConstraint(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createACWConstraint(builder: flatbuffers.Builder, KIND: acwConstraintKind, THRESHOLD_RAD: number, MIN_RANGE_M: number, MAX_RANGE_M: number, LIGHTING: acwLightingCondition, OCCULTATION_ATMOSPHERE_HEIGHT_M: number, MASKOffset: flatbuffers.Offset, LABELOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): ACWConstraintT;
    unpackTo(_o: ACWConstraintT): void;
}
export declare class ACWConstraintT implements flatbuffers.IGeneratedObject {
    KIND: acwConstraintKind;
    THRESHOLD_RAD: number;
    MIN_RANGE_M: number;
    MAX_RANGE_M: number;
    LIGHTING: acwLightingCondition;
    OCCULTATION_ATMOSPHERE_HEIGHT_M: number;
    MASK: (ACWElevationMaskPointT)[];
    LABEL: string | Uint8Array | null;
    constructor(KIND?: acwConstraintKind, THRESHOLD_RAD?: number, MIN_RANGE_M?: number, MAX_RANGE_M?: number, LIGHTING?: acwLightingCondition, OCCULTATION_ATMOSPHERE_HEIGHT_M?: number, MASK?: (ACWElevationMaskPointT)[], LABEL?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=ACWConstraint.d.ts.map