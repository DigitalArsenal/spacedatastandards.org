import * as flatbuffers from 'flatbuffers';
import { KMLAltitudeMode } from './KMLAltitudeMode.js';
/**
 * LookAt viewpoint
 */
export declare class KMLLookAt implements flatbuffers.IUnpackableObject<KMLLookAtT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): KMLLookAt;
    static getRootAsKMLLookAt(bb: flatbuffers.ByteBuffer, obj?: KMLLookAt): KMLLookAt;
    static getSizePrefixedRootAsKMLLookAt(bb: flatbuffers.ByteBuffer, obj?: KMLLookAt): KMLLookAt;
    /**
     * Longitude of the point being looked at
     */
    LONGITUDE(): number;
    /**
     * Latitude of the point being looked at
     */
    LATITUDE(): number;
    /**
     * Altitude of the point being looked at
     */
    ALTITUDE(): number;
    /**
     * Heading in degrees (0=North)
     */
    HEADING(): number;
    /**
     * Tilt in degrees from vertical (0=straight down)
     */
    TILT(): number;
    /**
     * Range in meters from the point
     */
    RANGE(): number;
    /**
     * Altitude mode
     */
    ALTITUDE_MODE(): KMLAltitudeMode;
    static startKMLLookAt(builder: flatbuffers.Builder): void;
    static addLongitude(builder: flatbuffers.Builder, LONGITUDE: number): void;
    static addLatitude(builder: flatbuffers.Builder, LATITUDE: number): void;
    static addAltitude(builder: flatbuffers.Builder, ALTITUDE: number): void;
    static addHeading(builder: flatbuffers.Builder, HEADING: number): void;
    static addTilt(builder: flatbuffers.Builder, TILT: number): void;
    static addRange(builder: flatbuffers.Builder, RANGE: number): void;
    static addAltitudeMode(builder: flatbuffers.Builder, ALTITUDE_MODE: KMLAltitudeMode): void;
    static endKMLLookAt(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createKMLLookAt(builder: flatbuffers.Builder, LONGITUDE: number, LATITUDE: number, ALTITUDE: number, HEADING: number, TILT: number, RANGE: number, ALTITUDE_MODE: KMLAltitudeMode): flatbuffers.Offset;
    unpack(): KMLLookAtT;
    unpackTo(_o: KMLLookAtT): void;
}
export declare class KMLLookAtT implements flatbuffers.IGeneratedObject {
    LONGITUDE: number;
    LATITUDE: number;
    ALTITUDE: number;
    HEADING: number;
    TILT: number;
    RANGE: number;
    ALTITUDE_MODE: KMLAltitudeMode;
    constructor(LONGITUDE?: number, LATITUDE?: number, ALTITUDE?: number, HEADING?: number, TILT?: number, RANGE?: number, ALTITUDE_MODE?: KMLAltitudeMode);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=KMLLookAt.d.ts.map