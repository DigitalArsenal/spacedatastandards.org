import * as flatbuffers from 'flatbuffers';
/**
 * 3D Tileset
 */
export declare class CZMTileset implements flatbuffers.IUnpackableObject<CZMTilesetT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): CZMTileset;
    static getRootAsCZMTileset(bb: flatbuffers.ByteBuffer, obj?: CZMTileset): CZMTileset;
    static getSizePrefixedRootAsCZMTileset(bb: flatbuffers.ByteBuffer, obj?: CZMTileset): CZMTileset;
    /**
     * Whether the tileset is displayed
     */
    SHOW(): boolean;
    /**
     * URI to the tileset
     */
    URI(): string | null;
    URI(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Maximum screen space error
     */
    MAXIMUM_SCREEN_SPACE_ERROR(): number;
    static startCZMTileset(builder: flatbuffers.Builder): void;
    static addShow(builder: flatbuffers.Builder, SHOW: boolean): void;
    static addUri(builder: flatbuffers.Builder, URIOffset: flatbuffers.Offset): void;
    static addMaximumScreenSpaceError(builder: flatbuffers.Builder, MAXIMUM_SCREEN_SPACE_ERROR: number): void;
    static endCZMTileset(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createCZMTileset(builder: flatbuffers.Builder, SHOW: boolean, URIOffset: flatbuffers.Offset, MAXIMUM_SCREEN_SPACE_ERROR: number): flatbuffers.Offset;
    unpack(): CZMTilesetT;
    unpackTo(_o: CZMTilesetT): void;
}
export declare class CZMTilesetT implements flatbuffers.IGeneratedObject {
    SHOW: boolean;
    URI: string | Uint8Array | null;
    MAXIMUM_SCREEN_SPACE_ERROR: number;
    constructor(SHOW?: boolean, URI?: string | Uint8Array | null, MAXIMUM_SCREEN_SPACE_ERROR?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=CZMTileset.d.ts.map