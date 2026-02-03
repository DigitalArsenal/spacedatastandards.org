import * as flatbuffers from 'flatbuffers';
import { TerrainDataSource } from './TerrainDataSource.js';
import { TerrainInterpolation } from './TerrainInterpolation.js';
/**
 * Terrain Models
 */
export declare class TRN implements flatbuffers.IUnpackableObject<TRNT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): TRN;
    static getRootAsTRN(bb: flatbuffers.ByteBuffer, obj?: TRN): TRN;
    static getSizePrefixedRootAsTRN(bb: flatbuffers.ByteBuffer, obj?: TRN): TRN;
    static bufferHasIdentifier(bb: flatbuffers.ByteBuffer): boolean;
    SOURCES(index: number): TerrainDataSource | null;
    sourcesLength(): number;
    sourcesArray(): Int8Array | null;
    INTERPOLATION(): TerrainInterpolation;
    CACHE_ENABLED(): boolean;
    MAX_CACHE_TILES(): number;
    VERTICAL_EXAGGERATION(): number;
    static startTRN(builder: flatbuffers.Builder): void;
    static addSources(builder: flatbuffers.Builder, SOURCESOffset: flatbuffers.Offset): void;
    static createSourcesVector(builder: flatbuffers.Builder, data: TerrainDataSource[]): flatbuffers.Offset;
    static startSourcesVector(builder: flatbuffers.Builder, numElems: number): void;
    static addInterpolation(builder: flatbuffers.Builder, INTERPOLATION: TerrainInterpolation): void;
    static addCacheEnabled(builder: flatbuffers.Builder, CACHE_ENABLED: boolean): void;
    static addMaxCacheTiles(builder: flatbuffers.Builder, MAX_CACHE_TILES: number): void;
    static addVerticalExaggeration(builder: flatbuffers.Builder, VERTICAL_EXAGGERATION: number): void;
    static endTRN(builder: flatbuffers.Builder): flatbuffers.Offset;
    static finishTRNBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static finishSizePrefixedTRNBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static createTRN(builder: flatbuffers.Builder, SOURCESOffset: flatbuffers.Offset, INTERPOLATION: TerrainInterpolation, CACHE_ENABLED: boolean, MAX_CACHE_TILES: number, VERTICAL_EXAGGERATION: number): flatbuffers.Offset;
    unpack(): TRNT;
    unpackTo(_o: TRNT): void;
}
export declare class TRNT implements flatbuffers.IGeneratedObject {
    SOURCES: (TerrainDataSource)[];
    INTERPOLATION: TerrainInterpolation;
    CACHE_ENABLED: boolean;
    MAX_CACHE_TILES: number;
    VERTICAL_EXAGGERATION: number;
    constructor(SOURCES?: (TerrainDataSource)[], INTERPOLATION?: TerrainInterpolation, CACHE_ENABLED?: boolean, MAX_CACHE_TILES?: number, VERTICAL_EXAGGERATION?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=TRN.d.ts.map