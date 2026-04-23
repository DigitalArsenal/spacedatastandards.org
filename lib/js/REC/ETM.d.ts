import * as flatbuffers from 'flatbuffers';
import { entityKind } from './entityKind.js';
/**
 * Entity Metadata — generic queryable metadata for a host-local entity.
 * Participates in shared FlatSQL/WASM runtimes where multiple plugins
 * cross-query the same entity collection.
 */
export declare class ETM implements flatbuffers.IUnpackableObject<ETMT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): ETM;
    static getRootAsETM(bb: flatbuffers.ByteBuffer, obj?: ETM): ETM;
    static getSizePrefixedRootAsETM(bb: flatbuffers.ByteBuffer, obj?: ETM): ETM;
    static bufferHasIdentifier(bb: flatbuffers.ByteBuffer): boolean;
    /**
     * Stable host-local entity identifier.
     */
    ENTITY_ID(): string | null;
    ENTITY_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Human-readable entity name used for shared query/search surfaces.
     */
    NAME(): string | null;
    NAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Broad entity category.
     */
    KIND(): entityKind;
    /**
     * More specific runtime subtype or class name.
     */
    SUBTYPE(): string | null;
    SUBTYPE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Optional parent entity id for hierarchy / linkage queries.
     */
    PARENT_ENTITY_ID(): string | null;
    PARENT_ENTITY_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Collection-scoped WASM handle used for batch visibility application.
     */
    WASM_HANDLE(): number;
    /**
     * Optional NORAD catalog id for standards-backed entities.
     */
    NORAD_CAT_ID(): number;
    /**
     * Primary object name surfaced by attached standards metadata.
     */
    OBJECT_NAME(): string | null;
    OBJECT_NAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Primary international / object designator surfaced by attached standards metadata.
     */
    OBJECT_ID(): string | null;
    OBJECT_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Secondary CAT object name when different from the primary object name.
     */
    CAT_OBJECT_NAME(): string | null;
    CAT_OBJECT_NAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Secondary CAT object id when different from the primary object id.
     */
    CAT_OBJECT_ID(): string | null;
    CAT_OBJECT_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Ground / facility subtype metadata for non-space entity search.
     */
    FACILITY_TYPE(): string | null;
    FACILITY_TYPE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Pre-normalized phrase-search text for collection-wide shared queries.
     */
    SEARCH_TEXT(): string | null;
    SEARCH_TEXT(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * CAT owner country code.
     */
    OWNER(): string | null;
    OWNER(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * CAT operational status code.
     */
    STATUS_CODE(): string | null;
    STATUS_CODE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * CAT launch date.
     */
    LAUNCH_DATE(): string | null;
    LAUNCH_DATE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Launch year derived from launch date.
     */
    LAUNCH_YEAR(): string | null;
    LAUNCH_YEAR(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Derived orbit regime classification.
     */
    ORBIT_REGIME(): string | null;
    ORBIT_REGIME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Orbital period in minutes.
     */
    PERIOD(): number;
    /**
     * Inclination in degrees.
     */
    INCLINATION(): number;
    /**
     * Apogee altitude in kilometers.
     */
    APOGEE(): number;
    /**
     * Perigee altitude in kilometers.
     */
    PERIGEE(): number;
    /**
     * Mean motion in revolutions per day.
     */
    MEAN_MOTION(): number;
    /**
     * Orbital eccentricity.
     */
    ECCENTRICITY(): number;
    /**
     * B* drag term from OMM.
     */
    BSTAR(): number;
    /**
     * Whether GP / OMM state is present for the entity.
     */
    HAS_GP(): boolean;
    /**
     * Reserved for forward-compatible growth.
     */
    RESERVED(index: number): number | null;
    reservedLength(): number;
    reservedArray(): Uint8Array | null;
    static startETM(builder: flatbuffers.Builder): void;
    static addEntityId(builder: flatbuffers.Builder, ENTITY_IDOffset: flatbuffers.Offset): void;
    static addName(builder: flatbuffers.Builder, NAMEOffset: flatbuffers.Offset): void;
    static addKind(builder: flatbuffers.Builder, KIND: entityKind): void;
    static addSubtype(builder: flatbuffers.Builder, SUBTYPEOffset: flatbuffers.Offset): void;
    static addParentEntityId(builder: flatbuffers.Builder, PARENT_ENTITY_IDOffset: flatbuffers.Offset): void;
    static addWasmHandle(builder: flatbuffers.Builder, WASM_HANDLE: number): void;
    static addNoradCatId(builder: flatbuffers.Builder, NORAD_CAT_ID: number): void;
    static addObjectName(builder: flatbuffers.Builder, OBJECT_NAMEOffset: flatbuffers.Offset): void;
    static addObjectId(builder: flatbuffers.Builder, OBJECT_IDOffset: flatbuffers.Offset): void;
    static addCatObjectName(builder: flatbuffers.Builder, CAT_OBJECT_NAMEOffset: flatbuffers.Offset): void;
    static addCatObjectId(builder: flatbuffers.Builder, CAT_OBJECT_IDOffset: flatbuffers.Offset): void;
    static addFacilityType(builder: flatbuffers.Builder, FACILITY_TYPEOffset: flatbuffers.Offset): void;
    static addSearchText(builder: flatbuffers.Builder, SEARCH_TEXTOffset: flatbuffers.Offset): void;
    static addOwner(builder: flatbuffers.Builder, OWNEROffset: flatbuffers.Offset): void;
    static addStatusCode(builder: flatbuffers.Builder, STATUS_CODEOffset: flatbuffers.Offset): void;
    static addLaunchDate(builder: flatbuffers.Builder, LAUNCH_DATEOffset: flatbuffers.Offset): void;
    static addLaunchYear(builder: flatbuffers.Builder, LAUNCH_YEAROffset: flatbuffers.Offset): void;
    static addOrbitRegime(builder: flatbuffers.Builder, ORBIT_REGIMEOffset: flatbuffers.Offset): void;
    static addPeriod(builder: flatbuffers.Builder, PERIOD: number): void;
    static addInclination(builder: flatbuffers.Builder, INCLINATION: number): void;
    static addApogee(builder: flatbuffers.Builder, APOGEE: number): void;
    static addPerigee(builder: flatbuffers.Builder, PERIGEE: number): void;
    static addMeanMotion(builder: flatbuffers.Builder, MEAN_MOTION: number): void;
    static addEccentricity(builder: flatbuffers.Builder, ECCENTRICITY: number): void;
    static addBstar(builder: flatbuffers.Builder, BSTAR: number): void;
    static addHasGp(builder: flatbuffers.Builder, HAS_GP: boolean): void;
    static addReserved(builder: flatbuffers.Builder, RESERVEDOffset: flatbuffers.Offset): void;
    static createReservedVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startReservedVector(builder: flatbuffers.Builder, numElems: number): void;
    static endETM(builder: flatbuffers.Builder): flatbuffers.Offset;
    static finishETMBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static finishSizePrefixedETMBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static createETM(builder: flatbuffers.Builder, ENTITY_IDOffset: flatbuffers.Offset, NAMEOffset: flatbuffers.Offset, KIND: entityKind, SUBTYPEOffset: flatbuffers.Offset, PARENT_ENTITY_IDOffset: flatbuffers.Offset, WASM_HANDLE: number, NORAD_CAT_ID: number, OBJECT_NAMEOffset: flatbuffers.Offset, OBJECT_IDOffset: flatbuffers.Offset, CAT_OBJECT_NAMEOffset: flatbuffers.Offset, CAT_OBJECT_IDOffset: flatbuffers.Offset, FACILITY_TYPEOffset: flatbuffers.Offset, SEARCH_TEXTOffset: flatbuffers.Offset, OWNEROffset: flatbuffers.Offset, STATUS_CODEOffset: flatbuffers.Offset, LAUNCH_DATEOffset: flatbuffers.Offset, LAUNCH_YEAROffset: flatbuffers.Offset, ORBIT_REGIMEOffset: flatbuffers.Offset, PERIOD: number, INCLINATION: number, APOGEE: number, PERIGEE: number, MEAN_MOTION: number, ECCENTRICITY: number, BSTAR: number, HAS_GP: boolean, RESERVEDOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): ETMT;
    unpackTo(_o: ETMT): void;
}
export declare class ETMT implements flatbuffers.IGeneratedObject {
    ENTITY_ID: string | Uint8Array | null;
    NAME: string | Uint8Array | null;
    KIND: entityKind;
    SUBTYPE: string | Uint8Array | null;
    PARENT_ENTITY_ID: string | Uint8Array | null;
    WASM_HANDLE: number;
    NORAD_CAT_ID: number;
    OBJECT_NAME: string | Uint8Array | null;
    OBJECT_ID: string | Uint8Array | null;
    CAT_OBJECT_NAME: string | Uint8Array | null;
    CAT_OBJECT_ID: string | Uint8Array | null;
    FACILITY_TYPE: string | Uint8Array | null;
    SEARCH_TEXT: string | Uint8Array | null;
    OWNER: string | Uint8Array | null;
    STATUS_CODE: string | Uint8Array | null;
    LAUNCH_DATE: string | Uint8Array | null;
    LAUNCH_YEAR: string | Uint8Array | null;
    ORBIT_REGIME: string | Uint8Array | null;
    PERIOD: number;
    INCLINATION: number;
    APOGEE: number;
    PERIGEE: number;
    MEAN_MOTION: number;
    ECCENTRICITY: number;
    BSTAR: number;
    HAS_GP: boolean;
    RESERVED: (number)[];
    constructor(ENTITY_ID?: string | Uint8Array | null, NAME?: string | Uint8Array | null, KIND?: entityKind, SUBTYPE?: string | Uint8Array | null, PARENT_ENTITY_ID?: string | Uint8Array | null, WASM_HANDLE?: number, NORAD_CAT_ID?: number, OBJECT_NAME?: string | Uint8Array | null, OBJECT_ID?: string | Uint8Array | null, CAT_OBJECT_NAME?: string | Uint8Array | null, CAT_OBJECT_ID?: string | Uint8Array | null, FACILITY_TYPE?: string | Uint8Array | null, SEARCH_TEXT?: string | Uint8Array | null, OWNER?: string | Uint8Array | null, STATUS_CODE?: string | Uint8Array | null, LAUNCH_DATE?: string | Uint8Array | null, LAUNCH_YEAR?: string | Uint8Array | null, ORBIT_REGIME?: string | Uint8Array | null, PERIOD?: number, INCLINATION?: number, APOGEE?: number, PERIGEE?: number, MEAN_MOTION?: number, ECCENTRICITY?: number, BSTAR?: number, HAS_GP?: boolean, RESERVED?: (number)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=ETM.d.ts.map