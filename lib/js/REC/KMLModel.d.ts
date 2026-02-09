import * as flatbuffers from 'flatbuffers';
import { KMLAltitudeMode } from './KMLAltitudeMode.js';
import { KMLResourceMapAlias, KMLResourceMapAliasT } from './KMLResourceMapAlias.js';
/**
 * 3D Model geometry
 */
export declare class KMLModel implements flatbuffers.IUnpackableObject<KMLModelT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): KMLModel;
    static getRootAsKMLModel(bb: flatbuffers.ByteBuffer, obj?: KMLModel): KMLModel;
    static getSizePrefixedRootAsKMLModel(bb: flatbuffers.ByteBuffer, obj?: KMLModel): KMLModel;
    /**
     * Altitude mode
     */
    ALTITUDE_MODE(): KMLAltitudeMode;
    /**
     * Location longitude
     */
    LOCATION_LON(): number;
    /**
     * Location latitude
     */
    LOCATION_LAT(): number;
    /**
     * Location altitude
     */
    LOCATION_ALT(): number;
    /**
     * Orientation heading
     */
    ORIENTATION_HEADING(): number;
    /**
     * Orientation tilt
     */
    ORIENTATION_TILT(): number;
    /**
     * Orientation roll
     */
    ORIENTATION_ROLL(): number;
    /**
     * Scale X
     */
    SCALE_X(): number;
    /**
     * Scale Y
     */
    SCALE_Y(): number;
    /**
     * Scale Z
     */
    SCALE_Z(): number;
    /**
     * Link to 3D model file
     */
    LINK_HREF(): string | null;
    LINK_HREF(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Resource map aliases
     */
    RESOURCE_MAP(index: number, obj?: KMLResourceMapAlias): KMLResourceMapAlias | null;
    resourceMapLength(): number;
    static startKMLModel(builder: flatbuffers.Builder): void;
    static addAltitudeMode(builder: flatbuffers.Builder, ALTITUDE_MODE: KMLAltitudeMode): void;
    static addLocationLon(builder: flatbuffers.Builder, LOCATION_LON: number): void;
    static addLocationLat(builder: flatbuffers.Builder, LOCATION_LAT: number): void;
    static addLocationAlt(builder: flatbuffers.Builder, LOCATION_ALT: number): void;
    static addOrientationHeading(builder: flatbuffers.Builder, ORIENTATION_HEADING: number): void;
    static addOrientationTilt(builder: flatbuffers.Builder, ORIENTATION_TILT: number): void;
    static addOrientationRoll(builder: flatbuffers.Builder, ORIENTATION_ROLL: number): void;
    static addScaleX(builder: flatbuffers.Builder, SCALE_X: number): void;
    static addScaleY(builder: flatbuffers.Builder, SCALE_Y: number): void;
    static addScaleZ(builder: flatbuffers.Builder, SCALE_Z: number): void;
    static addLinkHref(builder: flatbuffers.Builder, LINK_HREFOffset: flatbuffers.Offset): void;
    static addResourceMap(builder: flatbuffers.Builder, RESOURCE_MAPOffset: flatbuffers.Offset): void;
    static createResourceMapVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startResourceMapVector(builder: flatbuffers.Builder, numElems: number): void;
    static endKMLModel(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createKMLModel(builder: flatbuffers.Builder, ALTITUDE_MODE: KMLAltitudeMode, LOCATION_LON: number, LOCATION_LAT: number, LOCATION_ALT: number, ORIENTATION_HEADING: number, ORIENTATION_TILT: number, ORIENTATION_ROLL: number, SCALE_X: number, SCALE_Y: number, SCALE_Z: number, LINK_HREFOffset: flatbuffers.Offset, RESOURCE_MAPOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): KMLModelT;
    unpackTo(_o: KMLModelT): void;
}
export declare class KMLModelT implements flatbuffers.IGeneratedObject {
    ALTITUDE_MODE: KMLAltitudeMode;
    LOCATION_LON: number;
    LOCATION_LAT: number;
    LOCATION_ALT: number;
    ORIENTATION_HEADING: number;
    ORIENTATION_TILT: number;
    ORIENTATION_ROLL: number;
    SCALE_X: number;
    SCALE_Y: number;
    SCALE_Z: number;
    LINK_HREF: string | Uint8Array | null;
    RESOURCE_MAP: (KMLResourceMapAliasT)[];
    constructor(ALTITUDE_MODE?: KMLAltitudeMode, LOCATION_LON?: number, LOCATION_LAT?: number, LOCATION_ALT?: number, ORIENTATION_HEADING?: number, ORIENTATION_TILT?: number, ORIENTATION_ROLL?: number, SCALE_X?: number, SCALE_Y?: number, SCALE_Z?: number, LINK_HREF?: string | Uint8Array | null, RESOURCE_MAP?: (KMLResourceMapAliasT)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=KMLModel.d.ts.map