import * as flatbuffers from 'flatbuffers';
import { KMLAltitudeMode } from './KMLAltitudeMode.js';
/**
 * LatLonAltBox for Region
 */
export declare class KMLLatLonAltBox implements flatbuffers.IUnpackableObject<KMLLatLonAltBoxT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): KMLLatLonAltBox;
    static getRootAsKMLLatLonAltBox(bb: flatbuffers.ByteBuffer, obj?: KMLLatLonAltBox): KMLLatLonAltBox;
    static getSizePrefixedRootAsKMLLatLonAltBox(bb: flatbuffers.ByteBuffer, obj?: KMLLatLonAltBox): KMLLatLonAltBox;
    /**
     * North latitude
     */
    NORTH(): number;
    /**
     * South latitude
     */
    SOUTH(): number;
    /**
     * East longitude
     */
    EAST(): number;
    /**
     * West longitude
     */
    WEST(): number;
    /**
     * Minimum altitude
     */
    MIN_ALTITUDE(): number;
    /**
     * Maximum altitude
     */
    MAX_ALTITUDE(): number;
    /**
     * Altitude mode
     */
    ALTITUDE_MODE(): KMLAltitudeMode;
    static startKMLLatLonAltBox(builder: flatbuffers.Builder): void;
    static addNorth(builder: flatbuffers.Builder, NORTH: number): void;
    static addSouth(builder: flatbuffers.Builder, SOUTH: number): void;
    static addEast(builder: flatbuffers.Builder, EAST: number): void;
    static addWest(builder: flatbuffers.Builder, WEST: number): void;
    static addMinAltitude(builder: flatbuffers.Builder, MIN_ALTITUDE: number): void;
    static addMaxAltitude(builder: flatbuffers.Builder, MAX_ALTITUDE: number): void;
    static addAltitudeMode(builder: flatbuffers.Builder, ALTITUDE_MODE: KMLAltitudeMode): void;
    static endKMLLatLonAltBox(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createKMLLatLonAltBox(builder: flatbuffers.Builder, NORTH: number, SOUTH: number, EAST: number, WEST: number, MIN_ALTITUDE: number, MAX_ALTITUDE: number, ALTITUDE_MODE: KMLAltitudeMode): flatbuffers.Offset;
    unpack(): KMLLatLonAltBoxT;
    unpackTo(_o: KMLLatLonAltBoxT): void;
}
export declare class KMLLatLonAltBoxT implements flatbuffers.IGeneratedObject {
    NORTH: number;
    SOUTH: number;
    EAST: number;
    WEST: number;
    MIN_ALTITUDE: number;
    MAX_ALTITUDE: number;
    ALTITUDE_MODE: KMLAltitudeMode;
    constructor(NORTH?: number, SOUTH?: number, EAST?: number, WEST?: number, MIN_ALTITUDE?: number, MAX_ALTITUDE?: number, ALTITUDE_MODE?: KMLAltitudeMode);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=KMLLatLonAltBox.d.ts.map