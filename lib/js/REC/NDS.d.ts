import * as flatbuffers from 'flatbuffers';
import { NDSIngestEvent, NDSIngestEventT } from './NDSIngestEvent.js';
import { NDSModuleStat, NDSModuleStatT } from './NDSModuleStat.js';
import { NDSSchemaStat, NDSSchemaStatT } from './NDSSchemaStat.js';
import { NDSSourceStat, NDSSourceStatT } from './NDSSourceStat.js';
import { NDSTopicStat, NDSTopicStatT } from './NDSTopicStat.js';
import { NDSTrustEngineStat, NDSTrustEngineStatT } from './NDSTrustEngineStat.js';
/**
 * Node Data Statistics - one node's data-plane snapshot.
 */
export declare class NDS implements flatbuffers.IUnpackableObject<NDST> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): NDS;
    static getRootAsNDS(bb: flatbuffers.ByteBuffer, obj?: NDS): NDS;
    static getSizePrefixedRootAsNDS(bb: flatbuffers.ByteBuffer, obj?: NDS): NDS;
    static bufferHasIdentifier(bb: flatbuffers.ByteBuffer): boolean;
    /**
     * Unix seconds when this snapshot was assembled.
     */
    GENERATED_AT(): bigint;
    SCHEMAS(index: number, obj?: NDSSchemaStat): NDSSchemaStat | null;
    schemasLength(): number;
    SOURCES(index: number, obj?: NDSSourceStat): NDSSourceStat | null;
    sourcesLength(): number;
    TOTAL_RECORDS(): bigint;
    TOTAL_BYTES(): bigint;
    /**
     * True when the assembling read hit its store budget and this snapshot
     * carries the last-known-good numbers.
     */
    STALE(): boolean;
    /**
     * Unix seconds the store numbers were last true; 0 = never read.
     */
    AS_OF(): bigint;
    EVENTS(index: number, obj?: NDSIngestEvent): NDSIngestEvent | null;
    eventsLength(): number;
    TOPICS(index: number, obj?: NDSTopicStat): NDSTopicStat | null;
    topicsLength(): number;
    MODULES(index: number, obj?: NDSModuleStat): NDSModuleStat | null;
    modulesLength(): number;
    TRUST_ENGINE(obj?: NDSTrustEngineStat): NDSTrustEngineStat | null;
    /**
     * Bytes still available for writing on the volume that holds the node's
     * data store, as the operating system reports them to the node; 0 =
     * unknown. This is free space on the whole volume, not a quota, so it may
     * be consumed by anything else sharing that volume.
     */
    STORAGE_FREE_BYTES(): bigint;
    /**
     * Total size of the volume that holds the node's data store, as the
     * operating system reports it; 0 = unknown. Used space on that volume is
     * STORAGE_CAPACITY_BYTES - STORAGE_FREE_BYTES, which is never the same as
     * TOTAL_BYTES: the latter counts only the records the node holds.
     */
    STORAGE_CAPACITY_BYTES(): bigint;
    static startNDS(builder: flatbuffers.Builder): void;
    static addGeneratedAt(builder: flatbuffers.Builder, GENERATED_AT: bigint): void;
    static addSchemas(builder: flatbuffers.Builder, SCHEMASOffset: flatbuffers.Offset): void;
    static createSchemasVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startSchemasVector(builder: flatbuffers.Builder, numElems: number): void;
    static addSources(builder: flatbuffers.Builder, SOURCESOffset: flatbuffers.Offset): void;
    static createSourcesVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startSourcesVector(builder: flatbuffers.Builder, numElems: number): void;
    static addTotalRecords(builder: flatbuffers.Builder, TOTAL_RECORDS: bigint): void;
    static addTotalBytes(builder: flatbuffers.Builder, TOTAL_BYTES: bigint): void;
    static addStale(builder: flatbuffers.Builder, STALE: boolean): void;
    static addAsOf(builder: flatbuffers.Builder, AS_OF: bigint): void;
    static addEvents(builder: flatbuffers.Builder, EVENTSOffset: flatbuffers.Offset): void;
    static createEventsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startEventsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addTopics(builder: flatbuffers.Builder, TOPICSOffset: flatbuffers.Offset): void;
    static createTopicsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startTopicsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addModules(builder: flatbuffers.Builder, MODULESOffset: flatbuffers.Offset): void;
    static createModulesVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startModulesVector(builder: flatbuffers.Builder, numElems: number): void;
    static addTrustEngine(builder: flatbuffers.Builder, TRUST_ENGINEOffset: flatbuffers.Offset): void;
    static addStorageFreeBytes(builder: flatbuffers.Builder, STORAGE_FREE_BYTES: bigint): void;
    static addStorageCapacityBytes(builder: flatbuffers.Builder, STORAGE_CAPACITY_BYTES: bigint): void;
    static endNDS(builder: flatbuffers.Builder): flatbuffers.Offset;
    static finishNDSBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static finishSizePrefixedNDSBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    unpack(): NDST;
    unpackTo(_o: NDST): void;
}
export declare class NDST implements flatbuffers.IGeneratedObject {
    GENERATED_AT: bigint;
    SCHEMAS: (NDSSchemaStatT)[];
    SOURCES: (NDSSourceStatT)[];
    TOTAL_RECORDS: bigint;
    TOTAL_BYTES: bigint;
    STALE: boolean;
    AS_OF: bigint;
    EVENTS: (NDSIngestEventT)[];
    TOPICS: (NDSTopicStatT)[];
    MODULES: (NDSModuleStatT)[];
    TRUST_ENGINE: NDSTrustEngineStatT | null;
    STORAGE_FREE_BYTES: bigint;
    STORAGE_CAPACITY_BYTES: bigint;
    constructor(GENERATED_AT?: bigint, SCHEMAS?: (NDSSchemaStatT)[], SOURCES?: (NDSSourceStatT)[], TOTAL_RECORDS?: bigint, TOTAL_BYTES?: bigint, STALE?: boolean, AS_OF?: bigint, EVENTS?: (NDSIngestEventT)[], TOPICS?: (NDSTopicStatT)[], MODULES?: (NDSModuleStatT)[], TRUST_ENGINE?: NDSTrustEngineStatT | null, STORAGE_FREE_BYTES?: bigint, STORAGE_CAPACITY_BYTES?: bigint);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=NDS.d.ts.map