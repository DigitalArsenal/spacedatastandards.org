import * as flatbuffers from 'flatbuffers';
import { GCTDensityVolume, GCTDensityVolumeT } from './GCTDensityVolume.js';
import { GCTDistanceField, GCTDistanceFieldT } from './GCTDistanceField.js';
import { GCTLevel, GCTLevelT } from './GCTLevel.js';
import { gctCloudGenus } from './gctCloudGenus.js';
import { gctVariantScope } from './gctVariantScope.js';
/**
 * One variant: one cloud (or one tile's merged mixture) as a chain of
 * levels of detail in its own frame. Instances place variants in the tile.
 */
export declare class GCTVariant implements flatbuffers.IUnpackableObject<GCTVariantT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): GCTVariant;
    static getRootAsGCTVariant(bb: flatbuffers.ByteBuffer, obj?: GCTVariant): GCTVariant;
    static getSizePrefixedRootAsGCTVariant(bb: flatbuffers.ByteBuffer, obj?: GCTVariant): GCTVariant;
    /**
     * Producer-stable identifier of the variant within FIELD_ID.
     */
    VARIANT_ID(): string;
    VARIANT_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    /**
     * Where the levels live.
     */
    SCOPE(): gctVariantScope;
    /**
     * Content identifier of the variant's levels when SCOPE is
     * SHARED_LIBRARY. Two references with equal VARIANT_CID are the same
     * bytes.
     */
    VARIANT_CID(): string | null;
    VARIANT_CID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Genus, where classified.
     */
    GENUS(): gctCloudGenus;
    /**
     * Levels of detail, finest first, each conserving the mass of the one
     * before it. Absent when SCOPE is SHARED_LIBRARY.
     */
    LEVELS(index: number, obj?: GCTLevel): GCTLevel | null;
    levelsLength(): number;
    /**
     * Axis-aligned bounds of the finest level's support in the variant
     * frame, metres: min x, y, z (3 values).
     */
    BOUNDS_MIN_M(index: number): number | null;
    boundsMinMLength(): number;
    boundsMinMArray(): Float32Array | null;
    /**
     * Axis-aligned bounds, max x, y, z (3 values).
     */
    BOUNDS_MAX_M(index: number): number | null;
    boundsMaxMLength(): number;
    boundsMaxMArray(): Float32Array | null;
    /**
     * Total mass of the finest level: the integral of amplitude over space,
     * AMPLITUDE_UNITS times cubic metres. Every level MUST match it within
     * MASS_TOLERANCE.
     */
    MASS(): number;
    /**
     * Signed distance field of the surface. Optional.
     */
    DISTANCE_FIELD(obj?: GCTDistanceField): GCTDistanceField | null;
    /**
     * Baked density volume for ray marching. Optional.
     */
    DENSITY_VOLUME(obj?: GCTDensityVolume): GCTDensityVolume | null;
    /**
     * Seed the producer authored the variant from, for reproducibility.
     */
    AUTHORING_SEED(): number;
    static startGCTVariant(builder: flatbuffers.Builder): void;
    static addVariantId(builder: flatbuffers.Builder, VARIANT_IDOffset: flatbuffers.Offset): void;
    static addScope(builder: flatbuffers.Builder, SCOPE: gctVariantScope): void;
    static addVariantCid(builder: flatbuffers.Builder, VARIANT_CIDOffset: flatbuffers.Offset): void;
    static addGenus(builder: flatbuffers.Builder, GENUS: gctCloudGenus): void;
    static addLevels(builder: flatbuffers.Builder, LEVELSOffset: flatbuffers.Offset): void;
    static createLevelsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startLevelsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addBoundsMinM(builder: flatbuffers.Builder, BOUNDS_MIN_MOffset: flatbuffers.Offset): void;
    static createBoundsMinMVector(builder: flatbuffers.Builder, data: number[] | Float32Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createBoundsMinMVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startBoundsMinMVector(builder: flatbuffers.Builder, numElems: number): void;
    static addBoundsMaxM(builder: flatbuffers.Builder, BOUNDS_MAX_MOffset: flatbuffers.Offset): void;
    static createBoundsMaxMVector(builder: flatbuffers.Builder, data: number[] | Float32Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createBoundsMaxMVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startBoundsMaxMVector(builder: flatbuffers.Builder, numElems: number): void;
    static addMass(builder: flatbuffers.Builder, MASS: number): void;
    static addDistanceField(builder: flatbuffers.Builder, DISTANCE_FIELDOffset: flatbuffers.Offset): void;
    static addDensityVolume(builder: flatbuffers.Builder, DENSITY_VOLUMEOffset: flatbuffers.Offset): void;
    static addAuthoringSeed(builder: flatbuffers.Builder, AUTHORING_SEED: number): void;
    static endGCTVariant(builder: flatbuffers.Builder): flatbuffers.Offset;
    unpack(): GCTVariantT;
    unpackTo(_o: GCTVariantT): void;
}
export declare class GCTVariantT implements flatbuffers.IGeneratedObject {
    VARIANT_ID: string | Uint8Array | null;
    SCOPE: gctVariantScope;
    VARIANT_CID: string | Uint8Array | null;
    GENUS: gctCloudGenus;
    LEVELS: (GCTLevelT)[];
    BOUNDS_MIN_M: (number)[];
    BOUNDS_MAX_M: (number)[];
    MASS: number;
    DISTANCE_FIELD: GCTDistanceFieldT | null;
    DENSITY_VOLUME: GCTDensityVolumeT | null;
    AUTHORING_SEED: number;
    constructor(VARIANT_ID?: string | Uint8Array | null, SCOPE?: gctVariantScope, VARIANT_CID?: string | Uint8Array | null, GENUS?: gctCloudGenus, LEVELS?: (GCTLevelT)[], BOUNDS_MIN_M?: (number)[], BOUNDS_MAX_M?: (number)[], MASS?: number, DISTANCE_FIELD?: GCTDistanceFieldT | null, DENSITY_VOLUME?: GCTDensityVolumeT | null, AUTHORING_SEED?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=GCTVariant.d.ts.map