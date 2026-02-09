import * as flatbuffers from 'flatbuffers';
import { KMLAltitudeMode } from './KMLAltitudeMode.js';
import { KMLTrack, KMLTrackT } from './KMLTrack.js';
/**
 * gx:MultiTrack
 */
export declare class KMLMultiTrack implements flatbuffers.IUnpackableObject<KMLMultiTrackT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): KMLMultiTrack;
    static getRootAsKMLMultiTrack(bb: flatbuffers.ByteBuffer, obj?: KMLMultiTrack): KMLMultiTrack;
    static getSizePrefixedRootAsKMLMultiTrack(bb: flatbuffers.ByteBuffer, obj?: KMLMultiTrack): KMLMultiTrack;
    /**
     * Altitude mode
     */
    ALTITUDE_MODE(): KMLAltitudeMode;
    /**
     * Whether to interpolate between tracks
     */
    INTERPOLATE(): boolean;
    /**
     * Child tracks
     */
    TRACKS(index: number, obj?: KMLTrack): KMLTrack | null;
    tracksLength(): number;
    static startKMLMultiTrack(builder: flatbuffers.Builder): void;
    static addAltitudeMode(builder: flatbuffers.Builder, ALTITUDE_MODE: KMLAltitudeMode): void;
    static addInterpolate(builder: flatbuffers.Builder, INTERPOLATE: boolean): void;
    static addTracks(builder: flatbuffers.Builder, TRACKSOffset: flatbuffers.Offset): void;
    static createTracksVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startTracksVector(builder: flatbuffers.Builder, numElems: number): void;
    static endKMLMultiTrack(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createKMLMultiTrack(builder: flatbuffers.Builder, ALTITUDE_MODE: KMLAltitudeMode, INTERPOLATE: boolean, TRACKSOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): KMLMultiTrackT;
    unpackTo(_o: KMLMultiTrackT): void;
}
export declare class KMLMultiTrackT implements flatbuffers.IGeneratedObject {
    ALTITUDE_MODE: KMLAltitudeMode;
    INTERPOLATE: boolean;
    TRACKS: (KMLTrackT)[];
    constructor(ALTITUDE_MODE?: KMLAltitudeMode, INTERPOLATE?: boolean, TRACKS?: (KMLTrackT)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=KMLMultiTrack.d.ts.map