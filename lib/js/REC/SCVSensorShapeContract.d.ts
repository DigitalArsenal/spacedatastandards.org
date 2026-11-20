import * as flatbuffers from 'flatbuffers';
import { SCVAzElMaskPoint, SCVAzElMaskPointT } from './SCVAzElMaskPoint.js';
import { SCVEllipsoid, SCVEllipsoidT } from './SCVEllipsoid.js';
import { SCVVec3, SCVVec3T } from './SCVVec3.js';
import { scvCoordinateFrame } from './scvCoordinateFrame.js';
import { scvSensorAxisConvention } from './scvSensorAxisConvention.js';
import { scvSensorRangeBoundaryKind } from './scvSensorRangeBoundaryKind.js';
import { scvSensorShapeKind } from './scvSensorShapeKind.js';
/**
 * The field-of-view shape of one sensor. $SCV carries it in SCVSensor; $SNR
 * carries the same table as the sensor definition's FIELD_OF_VIEW, so a
 * definition and an analysis request never describe a shape in two types.
 */
export declare class SCVSensorShapeContract implements flatbuffers.IUnpackableObject<SCVSensorShapeContractT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): SCVSensorShapeContract;
    static getRootAsSCVSensorShapeContract(bb: flatbuffers.ByteBuffer, obj?: SCVSensorShapeContract): SCVSensorShapeContract;
    static getSizePrefixedRootAsSCVSensorShapeContract(bb: flatbuffers.ByteBuffer, obj?: SCVSensorShapeContract): SCVSensorShapeContract;
    SHAPE_KIND(): scvSensorShapeKind;
    AXIS_CONVENTION(): scvSensorAxisConvention;
    RANGE_BOUNDARY(): scvSensorRangeBoundaryKind;
    OUTER_HALF_ANGLE_DEG(): number;
    INNER_HALF_ANGLE_DEG(): number;
    MIN_CLOCK_ANGLE_DEG(): number;
    MAX_CLOCK_ANGLE_DEG(): number;
    X_HALF_ANGLE_DEG(): number;
    Y_HALF_ANGLE_DEG(): number;
    INNER_LOOK_ANGLE_DEG(): number;
    OUTER_LOOK_ANGLE_DEG(): number;
    SAR_SAMPLING_DENSITY(): number;
    MIN_RANGE_M(): number;
    MAX_RANGE_M(): number;
    POLYGON_VERTICES(index: number, obj?: SCVVec3): SCVVec3 | null;
    polygonVerticesLength(): number;
    POLYGON_FRAME(): scvCoordinateFrame;
    /**
     * Azimuth/elevation mask of a ground sensor, empty when the sensor has none.
     * Clips the shape: a direction below the mask is outside the field of view.
     */
    AZ_EL_MASK(index: number, obj?: SCVAzElMaskPoint): SCVAzElMaskPoint | null;
    azElMaskLength(): number;
    /**
     * For RANGE_BOUNDARY ALTITUDE_SHELL: the altitude ceiling, meters above ALTITUDE_REFERENCE. The ceiling surface is
     * the reference ellipsoid with every semi-axis made MAX_ALTITUDE_M longer, centered on the body and in its fixed
     * frame: on a sphere exactly MAX_ALTITUDE_M above it; on WGS84 within 3 m of the geodetic height up to 2,000 km.
     */
    MAX_ALTITUDE_M(): number;
    /**
     * The surface MAX_ALTITUDE_M is measured from. Absent: the standard ellipsoid of the body the sensor is on (WGS84
     * on the Earth). SEMI_INTERMEDIATE_M 0 is SEMI_MAJOR_M (an ellipsoid of revolution); a sphere has equal semi-axes.
     */
    ALTITUDE_REFERENCE(obj?: SCVEllipsoid): SCVEllipsoid | null;
    static startSCVSensorShapeContract(builder: flatbuffers.Builder): void;
    static addShapeKind(builder: flatbuffers.Builder, SHAPE_KIND: scvSensorShapeKind): void;
    static addAxisConvention(builder: flatbuffers.Builder, AXIS_CONVENTION: scvSensorAxisConvention): void;
    static addRangeBoundary(builder: flatbuffers.Builder, RANGE_BOUNDARY: scvSensorRangeBoundaryKind): void;
    static addOuterHalfAngleDeg(builder: flatbuffers.Builder, OUTER_HALF_ANGLE_DEG: number): void;
    static addInnerHalfAngleDeg(builder: flatbuffers.Builder, INNER_HALF_ANGLE_DEG: number): void;
    static addMinClockAngleDeg(builder: flatbuffers.Builder, MIN_CLOCK_ANGLE_DEG: number): void;
    static addMaxClockAngleDeg(builder: flatbuffers.Builder, MAX_CLOCK_ANGLE_DEG: number): void;
    static addXHalfAngleDeg(builder: flatbuffers.Builder, X_HALF_ANGLE_DEG: number): void;
    static addYHalfAngleDeg(builder: flatbuffers.Builder, Y_HALF_ANGLE_DEG: number): void;
    static addInnerLookAngleDeg(builder: flatbuffers.Builder, INNER_LOOK_ANGLE_DEG: number): void;
    static addOuterLookAngleDeg(builder: flatbuffers.Builder, OUTER_LOOK_ANGLE_DEG: number): void;
    static addSarSamplingDensity(builder: flatbuffers.Builder, SAR_SAMPLING_DENSITY: number): void;
    static addMinRangeM(builder: flatbuffers.Builder, MIN_RANGE_M: number): void;
    static addMaxRangeM(builder: flatbuffers.Builder, MAX_RANGE_M: number): void;
    static addPolygonVertices(builder: flatbuffers.Builder, POLYGON_VERTICESOffset: flatbuffers.Offset): void;
    static createPolygonVerticesVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startPolygonVerticesVector(builder: flatbuffers.Builder, numElems: number): void;
    static addPolygonFrame(builder: flatbuffers.Builder, POLYGON_FRAME: scvCoordinateFrame): void;
    static addAzElMask(builder: flatbuffers.Builder, AZ_EL_MASKOffset: flatbuffers.Offset): void;
    static createAzElMaskVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startAzElMaskVector(builder: flatbuffers.Builder, numElems: number): void;
    static addMaxAltitudeM(builder: flatbuffers.Builder, MAX_ALTITUDE_M: number): void;
    static addAltitudeReference(builder: flatbuffers.Builder, ALTITUDE_REFERENCEOffset: flatbuffers.Offset): void;
    static endSCVSensorShapeContract(builder: flatbuffers.Builder): flatbuffers.Offset;
    unpack(): SCVSensorShapeContractT;
    unpackTo(_o: SCVSensorShapeContractT): void;
}
export declare class SCVSensorShapeContractT implements flatbuffers.IGeneratedObject {
    SHAPE_KIND: scvSensorShapeKind;
    AXIS_CONVENTION: scvSensorAxisConvention;
    RANGE_BOUNDARY: scvSensorRangeBoundaryKind;
    OUTER_HALF_ANGLE_DEG: number;
    INNER_HALF_ANGLE_DEG: number;
    MIN_CLOCK_ANGLE_DEG: number;
    MAX_CLOCK_ANGLE_DEG: number;
    X_HALF_ANGLE_DEG: number;
    Y_HALF_ANGLE_DEG: number;
    INNER_LOOK_ANGLE_DEG: number;
    OUTER_LOOK_ANGLE_DEG: number;
    SAR_SAMPLING_DENSITY: number;
    MIN_RANGE_M: number;
    MAX_RANGE_M: number;
    POLYGON_VERTICES: (SCVVec3T)[];
    POLYGON_FRAME: scvCoordinateFrame;
    AZ_EL_MASK: (SCVAzElMaskPointT)[];
    MAX_ALTITUDE_M: number;
    ALTITUDE_REFERENCE: SCVEllipsoidT | null;
    constructor(SHAPE_KIND?: scvSensorShapeKind, AXIS_CONVENTION?: scvSensorAxisConvention, RANGE_BOUNDARY?: scvSensorRangeBoundaryKind, OUTER_HALF_ANGLE_DEG?: number, INNER_HALF_ANGLE_DEG?: number, MIN_CLOCK_ANGLE_DEG?: number, MAX_CLOCK_ANGLE_DEG?: number, X_HALF_ANGLE_DEG?: number, Y_HALF_ANGLE_DEG?: number, INNER_LOOK_ANGLE_DEG?: number, OUTER_LOOK_ANGLE_DEG?: number, SAR_SAMPLING_DENSITY?: number, MIN_RANGE_M?: number, MAX_RANGE_M?: number, POLYGON_VERTICES?: (SCVVec3T)[], POLYGON_FRAME?: scvCoordinateFrame, AZ_EL_MASK?: (SCVAzElMaskPointT)[], MAX_ALTITUDE_M?: number, ALTITUDE_REFERENCE?: SCVEllipsoidT | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=SCVSensorShapeContract.d.ts.map