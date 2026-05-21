import * as flatbuffers from 'flatbuffers';
import { launchDetectionType } from './launchDetectionType.js';
/**
 * Launch Detection
 */
export declare class LND implements flatbuffers.IUnpackableObject<LNDT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): LND;
    static getRootAsLND(bb: flatbuffers.ByteBuffer, obj?: LND): LND;
    static getSizePrefixedRootAsLND(bb: flatbuffers.ByteBuffer, obj?: LND): LND;
    static bufferHasIdentifier(bb: flatbuffers.ByteBuffer): boolean;
    /**
     * Unique identifier
     */
    ID(): string | null;
    ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Detection event identifier
     */
    EVENT_ID(): string | null;
    EVENT_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Detection type
     */
    DETECTION_TYPE(): launchDetectionType;
    /**
     * Detection message type code
     */
    MESSAGE_TYPE(): string | null;
    MESSAGE_TYPE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Time of launch detection (ISO 8601)
     */
    LAUNCH_TIME(): string | null;
    LAUNCH_TIME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Launch site latitude (degrees)
     */
    LAUNCH_LATITUDE(): number;
    /**
     * Launch site longitude (degrees)
     */
    LAUNCH_LONGITUDE(): number;
    /**
     * Launch azimuth (degrees from north)
     */
    LAUNCH_AZIMUTH(): number;
    /**
     * Estimated RAAN (degrees)
     */
    RAAN(): number;
    /**
     * Estimated inclination (degrees)
     */
    INCLINATION(): number;
    /**
     * Time of trajectory observation (ISO 8601)
     */
    OBSERVATION_TIME(): string | null;
    OBSERVATION_TIME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Observation point latitude (degrees)
     */
    OBSERVATION_LATITUDE(): number;
    /**
     * Observation point longitude (degrees)
     */
    OBSERVATION_LONGITUDE(): number;
    /**
     * Observation point altitude (km)
     */
    OBSERVATION_ALTITUDE(): number;
    /**
     * True if stereo observation (multiple sensors)
     */
    STEREO_FLAG(): boolean;
    /**
     * True if high zenith angle observation
     */
    HIGH_ZENITH_AZIMUTH(): boolean;
    /**
     * Sequence number in detection chain
     */
    SEQUENCE_NUMBER(): number;
    /**
     * Launch site identifier
     */
    LAUNCH_SITE_ID(): string | null;
    LAUNCH_SITE_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Launch vehicle type (if identified)
     */
    LAUNCH_VEHICLE(): string | null;
    LAUNCH_VEHICLE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Estimated trajectory type
     */
    TRAJECTORY_TYPE(): string | null;
    TRAJECTORY_TYPE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Detection confidence (0-1)
     */
    CONFIDENCE(): number;
    /**
     * Event descriptor
     */
    DESCRIPTOR(): string | null;
    DESCRIPTOR(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Associated tags
     */
    TAGS(index: number): string;
    TAGS(index: number, optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    tagsLength(): number;
    static startLND(builder: flatbuffers.Builder): void;
    static addId(builder: flatbuffers.Builder, IDOffset: flatbuffers.Offset): void;
    static addEventId(builder: flatbuffers.Builder, EVENT_IDOffset: flatbuffers.Offset): void;
    static addDetectionType(builder: flatbuffers.Builder, DETECTION_TYPE: launchDetectionType): void;
    static addMessageType(builder: flatbuffers.Builder, MESSAGE_TYPEOffset: flatbuffers.Offset): void;
    static addLaunchTime(builder: flatbuffers.Builder, LAUNCH_TIMEOffset: flatbuffers.Offset): void;
    static addLaunchLatitude(builder: flatbuffers.Builder, LAUNCH_LATITUDE: number): void;
    static addLaunchLongitude(builder: flatbuffers.Builder, LAUNCH_LONGITUDE: number): void;
    static addLaunchAzimuth(builder: flatbuffers.Builder, LAUNCH_AZIMUTH: number): void;
    static addRaan(builder: flatbuffers.Builder, RAAN: number): void;
    static addInclination(builder: flatbuffers.Builder, INCLINATION: number): void;
    static addObservationTime(builder: flatbuffers.Builder, OBSERVATION_TIMEOffset: flatbuffers.Offset): void;
    static addObservationLatitude(builder: flatbuffers.Builder, OBSERVATION_LATITUDE: number): void;
    static addObservationLongitude(builder: flatbuffers.Builder, OBSERVATION_LONGITUDE: number): void;
    static addObservationAltitude(builder: flatbuffers.Builder, OBSERVATION_ALTITUDE: number): void;
    static addStereoFlag(builder: flatbuffers.Builder, STEREO_FLAG: boolean): void;
    static addHighZenithAzimuth(builder: flatbuffers.Builder, HIGH_ZENITH_AZIMUTH: boolean): void;
    static addSequenceNumber(builder: flatbuffers.Builder, SEQUENCE_NUMBER: number): void;
    static addLaunchSiteId(builder: flatbuffers.Builder, LAUNCH_SITE_IDOffset: flatbuffers.Offset): void;
    static addLaunchVehicle(builder: flatbuffers.Builder, LAUNCH_VEHICLEOffset: flatbuffers.Offset): void;
    static addTrajectoryType(builder: flatbuffers.Builder, TRAJECTORY_TYPEOffset: flatbuffers.Offset): void;
    static addConfidence(builder: flatbuffers.Builder, CONFIDENCE: number): void;
    static addDescriptor(builder: flatbuffers.Builder, DESCRIPTOROffset: flatbuffers.Offset): void;
    static addTags(builder: flatbuffers.Builder, TAGSOffset: flatbuffers.Offset): void;
    static createTagsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startTagsVector(builder: flatbuffers.Builder, numElems: number): void;
    static endLND(builder: flatbuffers.Builder): flatbuffers.Offset;
    static finishLNDBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static finishSizePrefixedLNDBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static createLND(builder: flatbuffers.Builder, IDOffset: flatbuffers.Offset, EVENT_IDOffset: flatbuffers.Offset, DETECTION_TYPE: launchDetectionType, MESSAGE_TYPEOffset: flatbuffers.Offset, LAUNCH_TIMEOffset: flatbuffers.Offset, LAUNCH_LATITUDE: number, LAUNCH_LONGITUDE: number, LAUNCH_AZIMUTH: number, RAAN: number, INCLINATION: number, OBSERVATION_TIMEOffset: flatbuffers.Offset, OBSERVATION_LATITUDE: number, OBSERVATION_LONGITUDE: number, OBSERVATION_ALTITUDE: number, STEREO_FLAG: boolean, HIGH_ZENITH_AZIMUTH: boolean, SEQUENCE_NUMBER: number, LAUNCH_SITE_IDOffset: flatbuffers.Offset, LAUNCH_VEHICLEOffset: flatbuffers.Offset, TRAJECTORY_TYPEOffset: flatbuffers.Offset, CONFIDENCE: number, DESCRIPTOROffset: flatbuffers.Offset, TAGSOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): LNDT;
    unpackTo(_o: LNDT): void;
}
export declare class LNDT implements flatbuffers.IGeneratedObject {
    ID: string | Uint8Array | null;
    EVENT_ID: string | Uint8Array | null;
    DETECTION_TYPE: launchDetectionType;
    MESSAGE_TYPE: string | Uint8Array | null;
    LAUNCH_TIME: string | Uint8Array | null;
    LAUNCH_LATITUDE: number;
    LAUNCH_LONGITUDE: number;
    LAUNCH_AZIMUTH: number;
    RAAN: number;
    INCLINATION: number;
    OBSERVATION_TIME: string | Uint8Array | null;
    OBSERVATION_LATITUDE: number;
    OBSERVATION_LONGITUDE: number;
    OBSERVATION_ALTITUDE: number;
    STEREO_FLAG: boolean;
    HIGH_ZENITH_AZIMUTH: boolean;
    SEQUENCE_NUMBER: number;
    LAUNCH_SITE_ID: string | Uint8Array | null;
    LAUNCH_VEHICLE: string | Uint8Array | null;
    TRAJECTORY_TYPE: string | Uint8Array | null;
    CONFIDENCE: number;
    DESCRIPTOR: string | Uint8Array | null;
    TAGS: (string)[];
    constructor(ID?: string | Uint8Array | null, EVENT_ID?: string | Uint8Array | null, DETECTION_TYPE?: launchDetectionType, MESSAGE_TYPE?: string | Uint8Array | null, LAUNCH_TIME?: string | Uint8Array | null, LAUNCH_LATITUDE?: number, LAUNCH_LONGITUDE?: number, LAUNCH_AZIMUTH?: number, RAAN?: number, INCLINATION?: number, OBSERVATION_TIME?: string | Uint8Array | null, OBSERVATION_LATITUDE?: number, OBSERVATION_LONGITUDE?: number, OBSERVATION_ALTITUDE?: number, STEREO_FLAG?: boolean, HIGH_ZENITH_AZIMUTH?: boolean, SEQUENCE_NUMBER?: number, LAUNCH_SITE_ID?: string | Uint8Array | null, LAUNCH_VEHICLE?: string | Uint8Array | null, TRAJECTORY_TYPE?: string | Uint8Array | null, CONFIDENCE?: number, DESCRIPTOR?: string | Uint8Array | null, TAGS?: (string)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=LND.d.ts.map