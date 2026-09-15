import * as flatbuffers from 'flatbuffers';
import { CQRObjectSource, CQRObjectSourceT } from './CQRObjectSource.js';
import { PRWDescribeResult, PRWDescribeResultT } from './PRWDescribeResult.js';
import { PRWInstance, PRWInstanceT } from './PRWInstance.js';
import { cqrIndexRepresentation } from './cqrIndexRepresentation.js';
import { cqrRefinementStrategy } from './cqrRefinementStrategy.js';
/**
 * Resident index construction reuses canonical sources, samples and PPE.
 * SAMPLED_STATES consumes sampled OEM records in SOURCES[].EPHEMERIS;
 * POLYNOMIAL_SEGMENTS consumes SEGMENTS/PPE. Handles are validated against
 * INSTANCE identity/generation; they are never persisted process addresses.
 */
export declare class CQRIndexRequest implements flatbuffers.IUnpackableObject<CQRIndexRequestT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): CQRIndexRequest;
    static getRootAsCQRIndexRequest(bb: flatbuffers.ByteBuffer, obj?: CQRIndexRequest): CQRIndexRequest;
    static getSizePrefixedRootAsCQRIndexRequest(bb: flatbuffers.ByteBuffer, obj?: CQRIndexRequest): CQRIndexRequest;
    INSTANCE(obj?: PRWInstance): PRWInstance | null;
    CATALOG_HANDLE(): number;
    SOURCE_HANDLES(index: number): number | null;
    sourceHandlesLength(): number;
    sourceHandlesArray(): Uint32Array | null;
    SEGMENT_SET_HANDLE(): number;
    PRIMARY_SOURCE_HANDLES(index: number): number | null;
    primarySourceHandlesLength(): number;
    primarySourceHandlesArray(): Uint32Array | null;
    INDEX_CONTENT(): cqrIndexRepresentation;
    REFINEMENT_MODE(): cqrRefinementStrategy;
    SOURCES(index: number, obj?: CQRObjectSource): CQRObjectSource | null;
    sourcesLength(): number;
    SEGMENTS(obj?: PRWDescribeResult): PRWDescribeResult | null;
    static startCQRIndexRequest(builder: flatbuffers.Builder): void;
    static addInstance(builder: flatbuffers.Builder, INSTANCEOffset: flatbuffers.Offset): void;
    static addCatalogHandle(builder: flatbuffers.Builder, CATALOG_HANDLE: number): void;
    static addSourceHandles(builder: flatbuffers.Builder, SOURCE_HANDLESOffset: flatbuffers.Offset): void;
    static createSourceHandlesVector(builder: flatbuffers.Builder, data: number[] | Uint32Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createSourceHandlesVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startSourceHandlesVector(builder: flatbuffers.Builder, numElems: number): void;
    static addSegmentSetHandle(builder: flatbuffers.Builder, SEGMENT_SET_HANDLE: number): void;
    static addPrimarySourceHandles(builder: flatbuffers.Builder, PRIMARY_SOURCE_HANDLESOffset: flatbuffers.Offset): void;
    static createPrimarySourceHandlesVector(builder: flatbuffers.Builder, data: number[] | Uint32Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createPrimarySourceHandlesVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startPrimarySourceHandlesVector(builder: flatbuffers.Builder, numElems: number): void;
    static addIndexContent(builder: flatbuffers.Builder, INDEX_CONTENT: cqrIndexRepresentation): void;
    static addRefinementMode(builder: flatbuffers.Builder, REFINEMENT_MODE: cqrRefinementStrategy): void;
    static addSources(builder: flatbuffers.Builder, SOURCESOffset: flatbuffers.Offset): void;
    static createSourcesVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startSourcesVector(builder: flatbuffers.Builder, numElems: number): void;
    static addSegments(builder: flatbuffers.Builder, SEGMENTSOffset: flatbuffers.Offset): void;
    static endCQRIndexRequest(builder: flatbuffers.Builder): flatbuffers.Offset;
    unpack(): CQRIndexRequestT;
    unpackTo(_o: CQRIndexRequestT): void;
}
export declare class CQRIndexRequestT implements flatbuffers.IGeneratedObject {
    INSTANCE: PRWInstanceT | null;
    CATALOG_HANDLE: number;
    SOURCE_HANDLES: (number)[];
    SEGMENT_SET_HANDLE: number;
    PRIMARY_SOURCE_HANDLES: (number)[];
    INDEX_CONTENT: cqrIndexRepresentation;
    REFINEMENT_MODE: cqrRefinementStrategy;
    SOURCES: (CQRObjectSourceT)[];
    SEGMENTS: PRWDescribeResultT | null;
    constructor(INSTANCE?: PRWInstanceT | null, CATALOG_HANDLE?: number, SOURCE_HANDLES?: (number)[], SEGMENT_SET_HANDLE?: number, PRIMARY_SOURCE_HANDLES?: (number)[], INDEX_CONTENT?: cqrIndexRepresentation, REFINEMENT_MODE?: cqrRefinementStrategy, SOURCES?: (CQRObjectSourceT)[], SEGMENTS?: PRWDescribeResultT | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=CQRIndexRequest.d.ts.map