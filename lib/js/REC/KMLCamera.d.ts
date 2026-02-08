import * as flatbuffers from 'flatbuffers';
import { KMLAltitudeMode } from './KMLAltitudeMode.js';
/**
 * Camera viewpoint
 */
export declare class KMLCamera implements flatbuffers.IUnpackableObject<KMLCameraT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): KMLCamera;
    static getRootAsKMLCamera(bb: flatbuffers.ByteBuffer, obj?: KMLCamera): KMLCamera;
    static getSizePrefixedRootAsKMLCamera(bb: flatbuffers.ByteBuffer, obj?: KMLCamera): KMLCamera;
    /**
     * Camera longitude
     */
    LONGITUDE(): number;
    /**
     * Camera latitude
     */
    LATITUDE(): number;
    /**
     * Camera altitude
     */
    ALTITUDE(): number;
    /**
     * Heading in degrees (0=North)
     */
    HEADING(): number;
    /**
     * Tilt in degrees from vertical
     */
    TILT(): number;
    /**
     * Roll in degrees
     */
    ROLL(): number;
    /**
     * Altitude mode
     */
    ALTITUDE_MODE(): KMLAltitudeMode;
    static startKMLCamera(builder: flatbuffers.Builder): void;
    static addLongitude(builder: flatbuffers.Builder, LONGITUDE: number): void;
    static addLatitude(builder: flatbuffers.Builder, LATITUDE: number): void;
    static addAltitude(builder: flatbuffers.Builder, ALTITUDE: number): void;
    static addHeading(builder: flatbuffers.Builder, HEADING: number): void;
    static addTilt(builder: flatbuffers.Builder, TILT: number): void;
    static addRoll(builder: flatbuffers.Builder, ROLL: number): void;
    static addAltitudeMode(builder: flatbuffers.Builder, ALTITUDE_MODE: KMLAltitudeMode): void;
    static endKMLCamera(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createKMLCamera(builder: flatbuffers.Builder, LONGITUDE: number, LATITUDE: number, ALTITUDE: number, HEADING: number, TILT: number, ROLL: number, ALTITUDE_MODE: KMLAltitudeMode): flatbuffers.Offset;
    unpack(): KMLCameraT;
    unpackTo(_o: KMLCameraT): void;
}
export declare class KMLCameraT implements flatbuffers.IGeneratedObject {
    LONGITUDE: number;
    LATITUDE: number;
    ALTITUDE: number;
    HEADING: number;
    TILT: number;
    ROLL: number;
    ALTITUDE_MODE: KMLAltitudeMode;
    constructor(LONGITUDE?: number, LATITUDE?: number, ALTITUDE?: number, HEADING?: number, TILT?: number, ROLL?: number, ALTITUDE_MODE?: KMLAltitudeMode);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=KMLCamera.d.ts.map