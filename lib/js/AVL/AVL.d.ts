import * as flatbuffers from 'flatbuffers';
import { AVLProvenance, AVLProvenanceT } from './AVLProvenance.js';
import { avlAirspaceClass } from './avlAirspaceClass.js';
import { avlRingRole } from './avlRingRole.js';
import { avlVerticalDatum } from './avlVerticalDatum.js';
import { avlVolumeType } from './avlVolumeType.js';
/**
 * Airspace Volume
 */
export declare class AVL implements flatbuffers.IUnpackableObject<AVLT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): AVL;
    static getRootAsAVL(bb: flatbuffers.ByteBuffer, obj?: AVL): AVL;
    static getSizePrefixedRootAsAVL(bb: flatbuffers.ByteBuffer, obj?: AVL): AVL;
    static bufferHasIdentifier(bb: flatbuffers.ByteBuffer): boolean;
    /**
     * Publisher-stable identifier for this volume record. Never the source's
     * own identifier, which rides verbatim in SOURCE.NATIVE_ID.
     */
    ID(): string;
    ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    /**
     * Published designator of the volume, verbatim (e.g. an area designator).
     */
    DESIGNATOR(): string | null;
    DESIGNATOR(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Published display name of the volume, verbatim.
     */
    NAME(): string | null;
    NAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * ICAO airspace class.
     */
    AIRSPACE_CLASS(): avlAirspaceClass;
    /**
     * Kind of volume.
     */
    VOLUME_TYPE(): avlVolumeType;
    /**
     * ISO 3166-1 alpha-2 country code, uppercase, as the source states it.
     */
    COUNTRY_CODE(): string | null;
    COUNTRY_CODE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Lower vertical limit, metres in FLOOR_DATUM (flight-level number when
     * FLOOR_DATUM is FLIGHT_LEVEL; NaN when SURFACE). NaN when unpublished.
     */
    FLOOR_VALUE(): number;
    /**
     * Datum of FLOOR_VALUE.
     */
    FLOOR_DATUM(): avlVerticalDatum;
    /**
     * Upper vertical limit, metres in CEILING_DATUM (flight-level number
     * when FLIGHT_LEVEL; NaN when UNLIMITED). NaN when unpublished.
     */
    CEILING_VALUE(): number;
    /**
     * Datum of CEILING_VALUE.
     */
    CEILING_DATUM(): avlVerticalDatum;
    /**
     * RFC 3339 UTC fixed-millisecond instant this volume becomes effective.
     */
    EFFECTIVE_FROM(): string | null;
    EFFECTIVE_FROM(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * RFC 3339 UTC fixed-millisecond instant this volume ceases. Absent for
     * a volume with no published end.
     */
    EFFECTIVE_TO(): string | null;
    EFFECTIVE_TO(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Activity schedule verbatim as the source publishes it (NOTAM-style
     * text). Never parsed into structure by the publisher: schedule grammar
     * is source-specific and coercion would invent activations.
     */
    TIME_OF_ACTIVITY(): string | null;
    TIME_OF_ACTIVITY(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Vertex longitudes, geodetic degrees in [-180, 180].
     */
    VERTEX_LONGITUDE_DEG(index: number): number | null;
    vertexLongitudeDegLength(): number;
    vertexLongitudeDegArray(): Float64Array;
    /**
     * Vertex latitudes, geodetic degrees in [-90, 90]. Same length as
     * VERTEX_LONGITUDE_DEG.
     */
    VERTEX_LATITUDE_DEG(index: number): number | null;
    vertexLatitudeDegLength(): number;
    vertexLatitudeDegArray(): Float64Array;
    /**
     * Ring start indexes; RING_COUNT + 1 entries, last equals vertex count.
     */
    RING_OFFSETS(index: number): number | null;
    ringOffsetsLength(): number;
    ringOffsetsArray(): Uint32Array;
    /**
     * Polygon each ring belongs to. One entry per ring, so its length is
     * RING_OFFSETS length - 1.
     */
    RING_POLYGON_INDEXES(index: number): number | null;
    ringPolygonIndexesLength(): number;
    ringPolygonIndexesArray(): Uint32Array;
    /**
     * Role of each ring. One entry per ring, so its length is RING_OFFSETS
     * length - 1.
     */
    RING_ROLES(index: number): avlRingRole | null;
    ringRolesLength(): number;
    ringRolesArray(): Int8Array;
    /**
     * Number of polygons; equals max(RING_POLYGON_INDEXES) + 1, published so
     * an empty geometry is distinguishable from an unpopulated record.
     */
    POLYGON_COUNT(): number;
    /**
     * The source's arc or circle boundary segments were densified into the
     * vertices above by the ingest.
     */
    ARC_DENSIFIED(): boolean;
    /**
     * Maximum deviation, metres, between a densified chord and the published
     * arc. Required knowledge when ARC_DENSIFIED; NaN otherwise.
     */
    DENSIFICATION_TOLERANCE_M(): number;
    /**
     * Dataset lineage and licence. Required.
     */
    SOURCE(obj?: AVLProvenance): AVLProvenance | null;
    static startAVL(builder: flatbuffers.Builder): void;
    static addId(builder: flatbuffers.Builder, IDOffset: flatbuffers.Offset): void;
    static addDesignator(builder: flatbuffers.Builder, DESIGNATOROffset: flatbuffers.Offset): void;
    static addName(builder: flatbuffers.Builder, NAMEOffset: flatbuffers.Offset): void;
    static addAirspaceClass(builder: flatbuffers.Builder, AIRSPACE_CLASS: avlAirspaceClass): void;
    static addVolumeType(builder: flatbuffers.Builder, VOLUME_TYPE: avlVolumeType): void;
    static addCountryCode(builder: flatbuffers.Builder, COUNTRY_CODEOffset: flatbuffers.Offset): void;
    static addFloorValue(builder: flatbuffers.Builder, FLOOR_VALUE: number): void;
    static addFloorDatum(builder: flatbuffers.Builder, FLOOR_DATUM: avlVerticalDatum): void;
    static addCeilingValue(builder: flatbuffers.Builder, CEILING_VALUE: number): void;
    static addCeilingDatum(builder: flatbuffers.Builder, CEILING_DATUM: avlVerticalDatum): void;
    static addEffectiveFrom(builder: flatbuffers.Builder, EFFECTIVE_FROMOffset: flatbuffers.Offset): void;
    static addEffectiveTo(builder: flatbuffers.Builder, EFFECTIVE_TOOffset: flatbuffers.Offset): void;
    static addTimeOfActivity(builder: flatbuffers.Builder, TIME_OF_ACTIVITYOffset: flatbuffers.Offset): void;
    static addVertexLongitudeDeg(builder: flatbuffers.Builder, VERTEX_LONGITUDE_DEGOffset: flatbuffers.Offset): void;
    static createVertexLongitudeDegVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createVertexLongitudeDegVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startVertexLongitudeDegVector(builder: flatbuffers.Builder, numElems: number): void;
    static addVertexLatitudeDeg(builder: flatbuffers.Builder, VERTEX_LATITUDE_DEGOffset: flatbuffers.Offset): void;
    static createVertexLatitudeDegVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createVertexLatitudeDegVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startVertexLatitudeDegVector(builder: flatbuffers.Builder, numElems: number): void;
    static addRingOffsets(builder: flatbuffers.Builder, RING_OFFSETSOffset: flatbuffers.Offset): void;
    static createRingOffsetsVector(builder: flatbuffers.Builder, data: number[] | Uint32Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createRingOffsetsVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startRingOffsetsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addRingPolygonIndexes(builder: flatbuffers.Builder, RING_POLYGON_INDEXESOffset: flatbuffers.Offset): void;
    static createRingPolygonIndexesVector(builder: flatbuffers.Builder, data: number[] | Uint32Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createRingPolygonIndexesVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startRingPolygonIndexesVector(builder: flatbuffers.Builder, numElems: number): void;
    static addRingRoles(builder: flatbuffers.Builder, RING_ROLESOffset: flatbuffers.Offset): void;
    static createRingRolesVector(builder: flatbuffers.Builder, data: avlRingRole[]): flatbuffers.Offset;
    static startRingRolesVector(builder: flatbuffers.Builder, numElems: number): void;
    static addPolygonCount(builder: flatbuffers.Builder, POLYGON_COUNT: number): void;
    static addArcDensified(builder: flatbuffers.Builder, ARC_DENSIFIED: boolean): void;
    static addDensificationToleranceM(builder: flatbuffers.Builder, DENSIFICATION_TOLERANCE_M: number): void;
    static addSource(builder: flatbuffers.Builder, SOURCEOffset: flatbuffers.Offset): void;
    static endAVL(builder: flatbuffers.Builder): flatbuffers.Offset;
    static finishAVLBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static finishSizePrefixedAVLBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    unpack(): AVLT;
    unpackTo(_o: AVLT): void;
}
export declare class AVLT implements flatbuffers.IGeneratedObject {
    ID: string | Uint8Array | null;
    DESIGNATOR: string | Uint8Array | null;
    NAME: string | Uint8Array | null;
    AIRSPACE_CLASS: avlAirspaceClass;
    VOLUME_TYPE: avlVolumeType;
    COUNTRY_CODE: string | Uint8Array | null;
    FLOOR_VALUE: number;
    FLOOR_DATUM: avlVerticalDatum;
    CEILING_VALUE: number;
    CEILING_DATUM: avlVerticalDatum;
    EFFECTIVE_FROM: string | Uint8Array | null;
    EFFECTIVE_TO: string | Uint8Array | null;
    TIME_OF_ACTIVITY: string | Uint8Array | null;
    VERTEX_LONGITUDE_DEG: (number)[];
    VERTEX_LATITUDE_DEG: (number)[];
    RING_OFFSETS: (number)[];
    RING_POLYGON_INDEXES: (number)[];
    RING_ROLES: (avlRingRole)[];
    POLYGON_COUNT: number;
    ARC_DENSIFIED: boolean;
    DENSIFICATION_TOLERANCE_M: number;
    SOURCE: AVLProvenanceT | null;
    constructor(ID?: string | Uint8Array | null, DESIGNATOR?: string | Uint8Array | null, NAME?: string | Uint8Array | null, AIRSPACE_CLASS?: avlAirspaceClass, VOLUME_TYPE?: avlVolumeType, COUNTRY_CODE?: string | Uint8Array | null, FLOOR_VALUE?: number, FLOOR_DATUM?: avlVerticalDatum, CEILING_VALUE?: number, CEILING_DATUM?: avlVerticalDatum, EFFECTIVE_FROM?: string | Uint8Array | null, EFFECTIVE_TO?: string | Uint8Array | null, TIME_OF_ACTIVITY?: string | Uint8Array | null, VERTEX_LONGITUDE_DEG?: (number)[], VERTEX_LATITUDE_DEG?: (number)[], RING_OFFSETS?: (number)[], RING_POLYGON_INDEXES?: (number)[], RING_ROLES?: (avlRingRole)[], POLYGON_COUNT?: number, ARC_DENSIFIED?: boolean, DENSIFICATION_TOLERANCE_M?: number, SOURCE?: AVLProvenanceT | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=AVL.d.ts.map