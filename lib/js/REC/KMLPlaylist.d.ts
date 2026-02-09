import * as flatbuffers from 'flatbuffers';
import { KMLTourPrimitive, KMLTourPrimitiveT } from './KMLTourPrimitive.js';
/**
 * gx:Playlist
 */
export declare class KMLPlaylist implements flatbuffers.IUnpackableObject<KMLPlaylistT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): KMLPlaylist;
    static getRootAsKMLPlaylist(bb: flatbuffers.ByteBuffer, obj?: KMLPlaylist): KMLPlaylist;
    static getSizePrefixedRootAsKMLPlaylist(bb: flatbuffers.ByteBuffer, obj?: KMLPlaylist): KMLPlaylist;
    /**
     * Tour primitives
     */
    PRIMITIVES(index: number, obj?: KMLTourPrimitive): KMLTourPrimitive | null;
    primitivesLength(): number;
    static startKMLPlaylist(builder: flatbuffers.Builder): void;
    static addPrimitives(builder: flatbuffers.Builder, PRIMITIVESOffset: flatbuffers.Offset): void;
    static createPrimitivesVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startPrimitivesVector(builder: flatbuffers.Builder, numElems: number): void;
    static endKMLPlaylist(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createKMLPlaylist(builder: flatbuffers.Builder, PRIMITIVESOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): KMLPlaylistT;
    unpackTo(_o: KMLPlaylistT): void;
}
export declare class KMLPlaylistT implements flatbuffers.IGeneratedObject {
    PRIMITIVES: (KMLTourPrimitiveT)[];
    constructor(PRIMITIVES?: (KMLTourPrimitiveT)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=KMLPlaylist.d.ts.map