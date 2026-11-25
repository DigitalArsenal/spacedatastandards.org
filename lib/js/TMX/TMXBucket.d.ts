import * as flatbuffers from 'flatbuffers';
import { tmxBucketKind } from './tmxBucketKind.js';
/**
 * Target aggregation bucket (constellation, shell, plane, asset, or gateway).
 */
export declare class TMXBucket implements flatbuffers.IUnpackableObject<TMXBucketT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): TMXBucket;
    static getRootAsTMXBucket(bb: flatbuffers.ByteBuffer, obj?: TMXBucket): TMXBucket;
    static getSizePrefixedRootAsTMXBucket(bb: flatbuffers.ByteBuffer, obj?: TMXBucket): TMXBucket;
    /**
     * Stable identifier of this bucket within the matrix run.
     */
    BUCKET_ID(): string;
    BUCKET_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    /**
     * Optional parent bucket identifier in the hierarchy.
     */
    PARENT_BUCKET_ID(): string | null;
    PARENT_BUCKET_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Granularity kind of this bucket.
     */
    BUCKET_KIND(): tmxBucketKind;
    /**
     * Human-readable bucket label.
     */
    LABEL(): string;
    LABEL(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    /**
     * Number of assets represented by this bucket.
     */
    ASSET_COUNT(): number;
    /**
     * Member NORAD catalog numbers when enumerated.
     */
    NORAD_CAT_IDS(index: number): number | null;
    noradCatIdsLength(): number;
    noradCatIdsArray(): Uint32Array | null;
    /**
     * Minimum shell altitude in km.
     */
    ALTITUDE_MIN_KM(): number;
    /**
     * Maximum shell altitude in km.
     */
    ALTITUDE_MAX_KM(): number;
    /**
     * Representative orbital inclination in degrees.
     */
    INCLINATION_DEG(): number;
    static startTMXBucket(builder: flatbuffers.Builder): void;
    static addBucketId(builder: flatbuffers.Builder, BUCKET_IDOffset: flatbuffers.Offset): void;
    static addParentBucketId(builder: flatbuffers.Builder, PARENT_BUCKET_IDOffset: flatbuffers.Offset): void;
    static addBucketKind(builder: flatbuffers.Builder, BUCKET_KIND: tmxBucketKind): void;
    static addLabel(builder: flatbuffers.Builder, LABELOffset: flatbuffers.Offset): void;
    static addAssetCount(builder: flatbuffers.Builder, ASSET_COUNT: number): void;
    static addNoradCatIds(builder: flatbuffers.Builder, NORAD_CAT_IDSOffset: flatbuffers.Offset): void;
    static createNoradCatIdsVector(builder: flatbuffers.Builder, data: number[] | Uint32Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createNoradCatIdsVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startNoradCatIdsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addAltitudeMinKm(builder: flatbuffers.Builder, ALTITUDE_MIN_KM: number): void;
    static addAltitudeMaxKm(builder: flatbuffers.Builder, ALTITUDE_MAX_KM: number): void;
    static addInclinationDeg(builder: flatbuffers.Builder, INCLINATION_DEG: number): void;
    static endTMXBucket(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createTMXBucket(builder: flatbuffers.Builder, BUCKET_IDOffset: flatbuffers.Offset, PARENT_BUCKET_IDOffset: flatbuffers.Offset, BUCKET_KIND: tmxBucketKind, LABELOffset: flatbuffers.Offset, ASSET_COUNT: number, NORAD_CAT_IDSOffset: flatbuffers.Offset, ALTITUDE_MIN_KM: number, ALTITUDE_MAX_KM: number, INCLINATION_DEG: number): flatbuffers.Offset;
    unpack(): TMXBucketT;
    unpackTo(_o: TMXBucketT): void;
}
export declare class TMXBucketT implements flatbuffers.IGeneratedObject {
    BUCKET_ID: string | Uint8Array | null;
    PARENT_BUCKET_ID: string | Uint8Array | null;
    BUCKET_KIND: tmxBucketKind;
    LABEL: string | Uint8Array | null;
    ASSET_COUNT: number;
    NORAD_CAT_IDS: (number)[];
    ALTITUDE_MIN_KM: number;
    ALTITUDE_MAX_KM: number;
    INCLINATION_DEG: number;
    constructor(BUCKET_ID?: string | Uint8Array | null, PARENT_BUCKET_ID?: string | Uint8Array | null, BUCKET_KIND?: tmxBucketKind, LABEL?: string | Uint8Array | null, ASSET_COUNT?: number, NORAD_CAT_IDS?: (number)[], ALTITUDE_MIN_KM?: number, ALTITUDE_MAX_KM?: number, INCLINATION_DEG?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=TMXBucket.d.ts.map