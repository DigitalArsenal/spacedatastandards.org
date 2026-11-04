import * as flatbuffers from 'flatbuffers';
import { RFMOrigin, RFMOriginT } from './RFMOrigin.js';
import { evlAberrationCorrection } from './evlAberrationCorrection.js';
/**
 * Configuration for CONTACT.
 */
export declare class EVLContactConfiguration implements flatbuffers.IUnpackableObject<EVLContactConfigurationT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): EVLContactConfiguration;
    static getRootAsEVLContactConfiguration(bb: flatbuffers.ByteBuffer, obj?: EVLContactConfiguration): EVLContactConfiguration;
    static getSizePrefixedRootAsEVLContactConfiguration(bb: flatbuffers.ByteBuffer, obj?: EVLContactConfiguration): EVLContactConfiguration;
    /**
     * The observing point, normally a GROUND_SITE origin.
     */
    OBSERVER(obj?: RFMOrigin): RFMOrigin | null;
    /**
     * Identifier of the observing site or sensor; resolves against $SEN.ID
     * when the observer is an instrumented site.
     */
    SENSOR_ID(): string | null;
    SENSOR_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Elevation the target must exceed, radians, when no mask is supplied.
     */
    MINIMUM_ELEVATION_RAD(): number;
    /**
     * Horizon mask as azimuth and minimum-elevation pairs, radians, in
     * ascending azimuth: [az0, el0, az1, el1, ...]. Present, it supersedes
     * MINIMUM_ELEVATION_RAD. An odd length is INVALID_INPUT.
     */
    AZIMUTH_ELEVATION_MASK_RAD(index: number): number | null;
    azimuthElevationMaskRadLength(): number;
    azimuthElevationMaskRadArray(): Float64Array | null;
    /**
     * Bodies allowed to block the line of sight.
     */
    OCCULTING_BODY_IDS(index: number): number | null;
    occultingBodyIdsLength(): number;
    occultingBodyIdsArray(): Int32Array | null;
    ABERRATION_CORRECTION(): evlAberrationCorrection;
    /**
     * Events shorter than this are not reported.
     */
    MINIMUM_DURATION_SECONDS(): number;
    static startEVLContactConfiguration(builder: flatbuffers.Builder): void;
    static addObserver(builder: flatbuffers.Builder, OBSERVEROffset: flatbuffers.Offset): void;
    static addSensorId(builder: flatbuffers.Builder, SENSOR_IDOffset: flatbuffers.Offset): void;
    static addMinimumElevationRad(builder: flatbuffers.Builder, MINIMUM_ELEVATION_RAD: number): void;
    static addAzimuthElevationMaskRad(builder: flatbuffers.Builder, AZIMUTH_ELEVATION_MASK_RADOffset: flatbuffers.Offset): void;
    static createAzimuthElevationMaskRadVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createAzimuthElevationMaskRadVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startAzimuthElevationMaskRadVector(builder: flatbuffers.Builder, numElems: number): void;
    static addOccultingBodyIds(builder: flatbuffers.Builder, OCCULTING_BODY_IDSOffset: flatbuffers.Offset): void;
    static createOccultingBodyIdsVector(builder: flatbuffers.Builder, data: number[] | Int32Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createOccultingBodyIdsVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startOccultingBodyIdsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addAberrationCorrection(builder: flatbuffers.Builder, ABERRATION_CORRECTION: evlAberrationCorrection): void;
    static addMinimumDurationSeconds(builder: flatbuffers.Builder, MINIMUM_DURATION_SECONDS: number): void;
    static endEVLContactConfiguration(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createEVLContactConfiguration(builder: flatbuffers.Builder, OBSERVEROffset: flatbuffers.Offset, SENSOR_IDOffset: flatbuffers.Offset, MINIMUM_ELEVATION_RAD: number, AZIMUTH_ELEVATION_MASK_RADOffset: flatbuffers.Offset, OCCULTING_BODY_IDSOffset: flatbuffers.Offset, ABERRATION_CORRECTION: evlAberrationCorrection, MINIMUM_DURATION_SECONDS: number): flatbuffers.Offset;
    unpack(): EVLContactConfigurationT;
    unpackTo(_o: EVLContactConfigurationT): void;
}
export declare class EVLContactConfigurationT implements flatbuffers.IGeneratedObject {
    OBSERVER: RFMOriginT | null;
    SENSOR_ID: string | Uint8Array | null;
    MINIMUM_ELEVATION_RAD: number;
    AZIMUTH_ELEVATION_MASK_RAD: (number)[];
    OCCULTING_BODY_IDS: (number)[];
    ABERRATION_CORRECTION: evlAberrationCorrection;
    MINIMUM_DURATION_SECONDS: number;
    constructor(OBSERVER?: RFMOriginT | null, SENSOR_ID?: string | Uint8Array | null, MINIMUM_ELEVATION_RAD?: number, AZIMUTH_ELEVATION_MASK_RAD?: (number)[], OCCULTING_BODY_IDS?: (number)[], ABERRATION_CORRECTION?: evlAberrationCorrection, MINIMUM_DURATION_SECONDS?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=EVLContactConfiguration.d.ts.map