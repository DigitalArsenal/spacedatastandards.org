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
     * Nonnegative meters added to EACH ellipsoid semiaxis for space-to-space
     * LOS only; not geodetic altitude. Never applied to a surface-station pair.
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
    /**
     * Value presence: false means omitted; true precedes value validation.
     */
    HAS_KIND(): boolean;
    HAS_THRESHOLD_RAD(): boolean;
    HAS_MIN_RANGE_M(): boolean;
    HAS_MAX_RANGE_M(): boolean;
    HAS_LIGHTING(): boolean;
    HAS_OCCULTATION_ATMOSPHERE_HEIGHT_M(): boolean;
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
    static addHasKind(builder: flatbuffers.Builder, HAS_KIND: boolean): void;
    static addHasThresholdRad(builder: flatbuffers.Builder, HAS_THRESHOLD_RAD: boolean): void;
    static addHasMinRangeM(builder: flatbuffers.Builder, HAS_MIN_RANGE_M: boolean): void;
    static addHasMaxRangeM(builder: flatbuffers.Builder, HAS_MAX_RANGE_M: boolean): void;
    static addHasLighting(builder: flatbuffers.Builder, HAS_LIGHTING: boolean): void;
    static addHasOccultationAtmosphereHeightM(builder: flatbuffers.Builder, HAS_OCCULTATION_ATMOSPHERE_HEIGHT_M: boolean): void;
    static endACWConstraint(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createACWConstraint(builder: flatbuffers.Builder, KIND: acwConstraintKind, THRESHOLD_RAD: number, MIN_RANGE_M: number, MAX_RANGE_M: number, LIGHTING: acwLightingCondition, OCCULTATION_ATMOSPHERE_HEIGHT_M: number, MASKOffset: flatbuffers.Offset, LABELOffset: flatbuffers.Offset, HAS_KIND: boolean, HAS_THRESHOLD_RAD: boolean, HAS_MIN_RANGE_M: boolean, HAS_MAX_RANGE_M: boolean, HAS_LIGHTING: boolean, HAS_OCCULTATION_ATMOSPHERE_HEIGHT_M: boolean): flatbuffers.Offset;
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
    HAS_KIND: boolean;
    HAS_THRESHOLD_RAD: boolean;
    HAS_MIN_RANGE_M: boolean;
    HAS_MAX_RANGE_M: boolean;
    HAS_LIGHTING: boolean;
    HAS_OCCULTATION_ATMOSPHERE_HEIGHT_M: boolean;
    constructor(KIND?: acwConstraintKind, THRESHOLD_RAD?: number, MIN_RANGE_M?: number, MAX_RANGE_M?: number, LIGHTING?: acwLightingCondition, OCCULTATION_ATMOSPHERE_HEIGHT_M?: number, MASK?: (ACWElevationMaskPointT)[], LABEL?: string | Uint8Array | null, HAS_KIND?: boolean, HAS_THRESHOLD_RAD?: boolean, HAS_MIN_RANGE_M?: boolean, HAS_MAX_RANGE_M?: boolean, HAS_LIGHTING?: boolean, HAS_OCCULTATION_ATMOSPHERE_HEIGHT_M?: boolean);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=ACWConstraint.d.ts.map