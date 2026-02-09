import * as flatbuffers from 'flatbuffers';
import { KMLAltitudeMode } from './KMLAltitudeMode.js';
import { KMLCoordinate, KMLCoordinateT } from './KMLCoordinate.js';
import { KMLModel, KMLModelT } from './KMLModel.js';
/**
 * gx:Track — time-stamped position track
 */
export declare class KMLTrack implements flatbuffers.IUnpackableObject<KMLTrackT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): KMLTrack;
    static getRootAsKMLTrack(bb: flatbuffers.ByteBuffer, obj?: KMLTrack): KMLTrack;
    static getSizePrefixedRootAsKMLTrack(bb: flatbuffers.ByteBuffer, obj?: KMLTrack): KMLTrack;
    /**
     * Whether to extrude
     */
    EXTRUDE(): boolean;
    /**
     * Whether to tessellate
     */
    TESSELLATE(): boolean;
    /**
     * Altitude mode
     */
    ALTITUDE_MODE(): KMLAltitudeMode;
    /**
     * Time stamps (ISO 8601)
     */
    WHEN(index: number): string;
    WHEN(index: number, optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    whenLength(): number;
    /**
     * Coordinates (lon lat alt per entry)
     */
    COORDS(index: number, obj?: KMLCoordinate): KMLCoordinate | null;
    coordsLength(): number;
    /**
     * Angles (heading tilt roll per entry)
     */
    ANGLES(index: number, obj?: KMLCoordinate): KMLCoordinate | null;
    anglesLength(): number;
    /**
     * Model for track visualization
     */
    MODEL(obj?: KMLModel): KMLModel | null;
    static startKMLTrack(builder: flatbuffers.Builder): void;
    static addExtrude(builder: flatbuffers.Builder, EXTRUDE: boolean): void;
    static addTessellate(builder: flatbuffers.Builder, TESSELLATE: boolean): void;
    static addAltitudeMode(builder: flatbuffers.Builder, ALTITUDE_MODE: KMLAltitudeMode): void;
    static addWhen(builder: flatbuffers.Builder, WHENOffset: flatbuffers.Offset): void;
    static createWhenVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startWhenVector(builder: flatbuffers.Builder, numElems: number): void;
    static addCoords(builder: flatbuffers.Builder, COORDSOffset: flatbuffers.Offset): void;
    static createCoordsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startCoordsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addAngles(builder: flatbuffers.Builder, ANGLESOffset: flatbuffers.Offset): void;
    static createAnglesVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startAnglesVector(builder: flatbuffers.Builder, numElems: number): void;
    static addModel(builder: flatbuffers.Builder, MODELOffset: flatbuffers.Offset): void;
    static endKMLTrack(builder: flatbuffers.Builder): flatbuffers.Offset;
    unpack(): KMLTrackT;
    unpackTo(_o: KMLTrackT): void;
}
export declare class KMLTrackT implements flatbuffers.IGeneratedObject {
    EXTRUDE: boolean;
    TESSELLATE: boolean;
    ALTITUDE_MODE: KMLAltitudeMode;
    WHEN: (string)[];
    COORDS: (KMLCoordinateT)[];
    ANGLES: (KMLCoordinateT)[];
    MODEL: KMLModelT | null;
    constructor(EXTRUDE?: boolean, TESSELLATE?: boolean, ALTITUDE_MODE?: KMLAltitudeMode, WHEN?: (string)[], COORDS?: (KMLCoordinateT)[], ANGLES?: (KMLCoordinateT)[], MODEL?: KMLModelT | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=KMLTrack.d.ts.map