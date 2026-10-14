import * as flatbuffers from 'flatbuffers';
import { PRWInitSource, PRWInitSourceT } from './PRWInitSource.js';
/**
 * Propagator initialization request — assigns TLE / OMM / Keplerian /
 * polynomial inputs to entity handles.
 *
 * The actual per-entity source record is carried inline as raw bytes
 * tagged with SOURCE_KIND and, where useful, a SDS file_identifier.
 * Callers encode `OMM`, `OCM`, or a one-off Keplerian set and pass the
 * bytes verbatim; the propagator uses SOURCE_KIND to decide how to
 * consume them.
 */
export declare class PRWInit implements flatbuffers.IUnpackableObject<PRWInitT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): PRWInit;
    static getRootAsPRWInit(bb: flatbuffers.ByteBuffer, obj?: PRWInit): PRWInit;
    static getSizePrefixedRootAsPRWInit(bb: flatbuffers.ByteBuffer, obj?: PRWInit): PRWInit;
    /**
     * Entity handles to assign results to (same order as SOURCES[]).
     */
    ENTITY_HANDLES(index: number): number | null;
    entityHandlesLength(): number;
    entityHandlesArray(): Uint32Array | null;
    /**
     * Per-entity source records, encoded as SDS FlatBuffers.
     */
    SOURCES(index: number, obj?: PRWInitSource): PRWInitSource | null;
    sourcesLength(): number;
    static startPRWInit(builder: flatbuffers.Builder): void;
    static addEntityHandles(builder: flatbuffers.Builder, ENTITY_HANDLESOffset: flatbuffers.Offset): void;
    static createEntityHandlesVector(builder: flatbuffers.Builder, data: number[] | Uint32Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createEntityHandlesVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startEntityHandlesVector(builder: flatbuffers.Builder, numElems: number): void;
    static addSources(builder: flatbuffers.Builder, SOURCESOffset: flatbuffers.Offset): void;
    static createSourcesVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startSourcesVector(builder: flatbuffers.Builder, numElems: number): void;
    static endPRWInit(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createPRWInit(builder: flatbuffers.Builder, ENTITY_HANDLESOffset: flatbuffers.Offset, SOURCESOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): PRWInitT;
    unpackTo(_o: PRWInitT): void;
}
export declare class PRWInitT implements flatbuffers.IGeneratedObject {
    ENTITY_HANDLES: (number)[];
    SOURCES: (PRWInitSourceT)[];
    constructor(ENTITY_HANDLES?: (number)[], SOURCES?: (PRWInitSourceT)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=PRWInit.d.ts.map