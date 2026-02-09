import * as flatbuffers from 'flatbuffers';
import { KMLPlaylist, KMLPlaylistT } from './KMLPlaylist.js';
/**
 * gx:Tour
 */
export declare class KMLTour implements flatbuffers.IUnpackableObject<KMLTourT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): KMLTour;
    static getRootAsKMLTour(bb: flatbuffers.ByteBuffer, obj?: KMLTour): KMLTour;
    static getSizePrefixedRootAsKMLTour(bb: flatbuffers.ByteBuffer, obj?: KMLTour): KMLTour;
    /**
     * Tour name
     */
    NAME(): string | null;
    NAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Description
     */
    DESCRIPTION(): string | null;
    DESCRIPTION(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Visibility
     */
    VISIBILITY(): boolean;
    /**
     * Playlist
     */
    PLAYLIST(obj?: KMLPlaylist): KMLPlaylist | null;
    static startKMLTour(builder: flatbuffers.Builder): void;
    static addName(builder: flatbuffers.Builder, NAMEOffset: flatbuffers.Offset): void;
    static addDescription(builder: flatbuffers.Builder, DESCRIPTIONOffset: flatbuffers.Offset): void;
    static addVisibility(builder: flatbuffers.Builder, VISIBILITY: boolean): void;
    static addPlaylist(builder: flatbuffers.Builder, PLAYLISTOffset: flatbuffers.Offset): void;
    static endKMLTour(builder: flatbuffers.Builder): flatbuffers.Offset;
    unpack(): KMLTourT;
    unpackTo(_o: KMLTourT): void;
}
export declare class KMLTourT implements flatbuffers.IGeneratedObject {
    NAME: string | Uint8Array | null;
    DESCRIPTION: string | Uint8Array | null;
    VISIBILITY: boolean;
    PLAYLIST: KMLPlaylistT | null;
    constructor(NAME?: string | Uint8Array | null, DESCRIPTION?: string | Uint8Array | null, VISIBILITY?: boolean, PLAYLIST?: KMLPlaylistT | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=KMLTour.d.ts.map