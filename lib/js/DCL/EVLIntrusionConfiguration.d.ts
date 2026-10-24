import * as flatbuffers from 'flatbuffers';
import { FRMVector3, FRMVector3T } from './FRMVector3.js';
import { evlFieldOfViewShape } from './evlFieldOfViewShape.js';
/**
 * Configuration for INTRUSION.
 */
export declare class EVLIntrusionConfiguration implements flatbuffers.IUnpackableObject<EVLIntrusionConfigurationT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): EVLIntrusionConfiguration;
    static getRootAsEVLIntrusionConfiguration(bb: flatbuffers.ByteBuffer, obj?: EVLIntrusionConfiguration): EVLIntrusionConfiguration;
    static getSizePrefixedRootAsEVLIntrusionConfiguration(bb: flatbuffers.ByteBuffer, obj?: EVLIntrusionConfiguration): EVLIntrusionConfiguration;
    /**
     * Identifier of the sensor whose field of view is tested; resolves against
     * $SEN.ID. The sensor's site data is NOT restated here.
     */
    SENSOR_ID(): string | null;
    SENSOR_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    FIELD_OF_VIEW_SHAPE(): evlFieldOfViewShape;
    /**
     * Boresight direction, expressed in BORESIGHT_COORDINATE_SYSTEM_NAME.
     */
    BORESIGHT(obj?: FRMVector3): FRMVector3 | null;
    /**
     * Coordinate system BORESIGHT is expressed in; resolves against
     * RFMCoordinateSystem.NAME on the request context.
     */
    BORESIGHT_COORDINATE_SYSTEM_NAME(): string | null;
    BORESIGHT_COORDINATE_SYSTEM_NAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Half-angle of a CONIC field of view, radians.
     */
    CONE_HALF_ANGLE_RAD(): number;
    /**
     * Half-angles of a RECTANGULAR field of view about the boresight, radians.
     */
    RECTANGULAR_HALF_ANGLE_X_RAD(): number;
    RECTANGULAR_HALF_ANGLE_Y_RAD(): number;
    /**
     * Boundary of a CUSTOM_MASK field of view as clock and cone angle pairs
     * about the boresight, radians: [clock0, cone0, clock1, cone1, ...]. An
     * odd length is INVALID_INPUT.
     */
    CUSTOM_MASK_RAD(index: number): number | null;
    customMaskRadLength(): number;
    customMaskRadArray(): Float64Array | null;
    /**
     * Ephemeris body codes of the bodies tested for intrusion.
     */
    INTRUDING_BODY_IDS(index: number): number | null;
    intrudingBodyIdsLength(): number;
    intrudingBodyIdsArray(): Int32Array | null;
    /**
     * Identifiers of the tracked objects tested for intrusion.
     */
    INTRUDING_OBJECT_IDS(index: number): string;
    INTRUDING_OBJECT_IDS(index: number, optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    intrudingObjectIdsLength(): number;
    /**
     * Test the intruder's apparent disc rather than its centre, so an event
     * begins when the limb enters the field of view.
     */
    USE_APPARENT_BODY_RADIUS(): boolean;
    MINIMUM_DURATION_SECONDS(): number;
    static startEVLIntrusionConfiguration(builder: flatbuffers.Builder): void;
    static addSensorId(builder: flatbuffers.Builder, SENSOR_IDOffset: flatbuffers.Offset): void;
    static addFieldOfViewShape(builder: flatbuffers.Builder, FIELD_OF_VIEW_SHAPE: evlFieldOfViewShape): void;
    static addBoresight(builder: flatbuffers.Builder, BORESIGHTOffset: flatbuffers.Offset): void;
    static addBoresightCoordinateSystemName(builder: flatbuffers.Builder, BORESIGHT_COORDINATE_SYSTEM_NAMEOffset: flatbuffers.Offset): void;
    static addConeHalfAngleRad(builder: flatbuffers.Builder, CONE_HALF_ANGLE_RAD: number): void;
    static addRectangularHalfAngleXRad(builder: flatbuffers.Builder, RECTANGULAR_HALF_ANGLE_X_RAD: number): void;
    static addRectangularHalfAngleYRad(builder: flatbuffers.Builder, RECTANGULAR_HALF_ANGLE_Y_RAD: number): void;
    static addCustomMaskRad(builder: flatbuffers.Builder, CUSTOM_MASK_RADOffset: flatbuffers.Offset): void;
    static createCustomMaskRadVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createCustomMaskRadVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startCustomMaskRadVector(builder: flatbuffers.Builder, numElems: number): void;
    static addIntrudingBodyIds(builder: flatbuffers.Builder, INTRUDING_BODY_IDSOffset: flatbuffers.Offset): void;
    static createIntrudingBodyIdsVector(builder: flatbuffers.Builder, data: number[] | Int32Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createIntrudingBodyIdsVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startIntrudingBodyIdsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addIntrudingObjectIds(builder: flatbuffers.Builder, INTRUDING_OBJECT_IDSOffset: flatbuffers.Offset): void;
    static createIntrudingObjectIdsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startIntrudingObjectIdsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addUseApparentBodyRadius(builder: flatbuffers.Builder, USE_APPARENT_BODY_RADIUS: boolean): void;
    static addMinimumDurationSeconds(builder: flatbuffers.Builder, MINIMUM_DURATION_SECONDS: number): void;
    static endEVLIntrusionConfiguration(builder: flatbuffers.Builder): flatbuffers.Offset;
    unpack(): EVLIntrusionConfigurationT;
    unpackTo(_o: EVLIntrusionConfigurationT): void;
}
export declare class EVLIntrusionConfigurationT implements flatbuffers.IGeneratedObject {
    SENSOR_ID: string | Uint8Array | null;
    FIELD_OF_VIEW_SHAPE: evlFieldOfViewShape;
    BORESIGHT: FRMVector3T | null;
    BORESIGHT_COORDINATE_SYSTEM_NAME: string | Uint8Array | null;
    CONE_HALF_ANGLE_RAD: number;
    RECTANGULAR_HALF_ANGLE_X_RAD: number;
    RECTANGULAR_HALF_ANGLE_Y_RAD: number;
    CUSTOM_MASK_RAD: (number)[];
    INTRUDING_BODY_IDS: (number)[];
    INTRUDING_OBJECT_IDS: (string)[];
    USE_APPARENT_BODY_RADIUS: boolean;
    MINIMUM_DURATION_SECONDS: number;
    constructor(SENSOR_ID?: string | Uint8Array | null, FIELD_OF_VIEW_SHAPE?: evlFieldOfViewShape, BORESIGHT?: FRMVector3T | null, BORESIGHT_COORDINATE_SYSTEM_NAME?: string | Uint8Array | null, CONE_HALF_ANGLE_RAD?: number, RECTANGULAR_HALF_ANGLE_X_RAD?: number, RECTANGULAR_HALF_ANGLE_Y_RAD?: number, CUSTOM_MASK_RAD?: (number)[], INTRUDING_BODY_IDS?: (number)[], INTRUDING_OBJECT_IDS?: (string)[], USE_APPARENT_BODY_RADIUS?: boolean, MINIMUM_DURATION_SECONDS?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=EVLIntrusionConfiguration.d.ts.map