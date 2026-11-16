import * as flatbuffers from 'flatbuffers';
import { CLGAdjacency, CLGAdjacencyT } from './CLGAdjacency.js';
import { CLGBoundary, CLGBoundaryT } from './CLGBoundary.js';
import { CLGInterval, CLGIntervalT } from './CLGInterval.js';
import { CLGLink, CLGLinkT } from './CLGLink.js';
import { CLGPair, CLGPairT } from './CLGPair.js';
import { CLGProvenance, CLGProvenanceT } from './CLGProvenance.js';
import { CLGRecordRef, CLGRecordRefT } from './CLGRecordRef.js';
import { CLGTransition, CLGTransitionT } from './CLGTransition.js';
import { PVN, PVNT } from './PVN.js';
import { clgComputationState } from './clgComputationState.js';
export declare class CLGResult implements flatbuffers.IUnpackableObject<CLGResultT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): CLGResult;
    static getRootAsCLGResult(bb: flatbuffers.ByteBuffer, obj?: CLGResult): CLGResult;
    static getSizePrefixedRootAsCLGResult(bb: flatbuffers.ByteBuffer, obj?: CLGResult): CLGResult;
    STATUS(): clgComputationState;
    ERROR_CODE(): string | null;
    ERROR_CODE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    ERROR_MESSAGE(): string | null;
    ERROR_MESSAGE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    CHUNK_INDEX(): number;
    CHUNK_COUNT(): number;
    DEFINITION_REF(obj?: CLGRecordRef): CLGRecordRef | null;
    /**
     * Global dictionaries in chunk zero only, bounded to 64 MiB together.
     */
    PAIRS(index: number, obj?: CLGPair): CLGPair | null;
    pairsLength(): number;
    LINKS(index: number, obj?: CLGLink): CLGLink | null;
    linksLength(): number;
    /**
     * Each interval and its boundary records live together in exactly one chunk.
     */
    BOUNDARIES(index: number, obj?: CLGBoundary): CLGBoundary | null;
    boundariesLength(): number;
    INTERVALS(index: number, obj?: CLGInterval): CLGInterval | null;
    intervalsLength(): number;
    TRANSITIONS(index: number, obj?: CLGTransition): CLGTransition | null;
    transitionsLength(): number;
    ADJACENCY(index: number, obj?: CLGAdjacency): CLGAdjacency | null;
    adjacencyLength(): number;
    /**
     * Sorted unique TT emission epochs where the directed (src,dst,link) set
     * changes after atomic transitions; always includes START_OFFSET_S.
     * Each has a mandatory adjacency, independent of EMIT_EVENT_SNAPSHOTS.
     * Chunk-local entries correspond to this chunk's snapshots; concatenate.
     */
    TOPOLOGY_CHANGE_EPOCHS_S(index: number): number | null;
    topologyChangeEpochsSLength(): number;
    topologyChangeEpochsSArray(): Float64Array | null;
    PROVENANCE(obj?: CLGProvenance): CLGProvenance | null;
    /**
     * Host stamps PRODUCER_SHA256 from loaded artifact before durable COMPLETE.
     */
    PRODUCER(obj?: PVN): PVN | null;
    /**
     * Value presence: false means omitted; true precedes value validation.
     */
    HAS_STATUS(): boolean;
    HAS_CHUNK_INDEX(): boolean;
    HAS_CHUNK_COUNT(): boolean;
    static startCLGResult(builder: flatbuffers.Builder): void;
    static addStatus(builder: flatbuffers.Builder, STATUS: clgComputationState): void;
    static addErrorCode(builder: flatbuffers.Builder, ERROR_CODEOffset: flatbuffers.Offset): void;
    static addErrorMessage(builder: flatbuffers.Builder, ERROR_MESSAGEOffset: flatbuffers.Offset): void;
    static addChunkIndex(builder: flatbuffers.Builder, CHUNK_INDEX: number): void;
    static addChunkCount(builder: flatbuffers.Builder, CHUNK_COUNT: number): void;
    static addDefinitionRef(builder: flatbuffers.Builder, DEFINITION_REFOffset: flatbuffers.Offset): void;
    static addPairs(builder: flatbuffers.Builder, PAIRSOffset: flatbuffers.Offset): void;
    static startPairsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addLinks(builder: flatbuffers.Builder, LINKSOffset: flatbuffers.Offset): void;
    static startLinksVector(builder: flatbuffers.Builder, numElems: number): void;
    static addBoundaries(builder: flatbuffers.Builder, BOUNDARIESOffset: flatbuffers.Offset): void;
    static createBoundariesVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startBoundariesVector(builder: flatbuffers.Builder, numElems: number): void;
    static addIntervals(builder: flatbuffers.Builder, INTERVALSOffset: flatbuffers.Offset): void;
    static startIntervalsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addTransitions(builder: flatbuffers.Builder, TRANSITIONSOffset: flatbuffers.Offset): void;
    static startTransitionsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addAdjacency(builder: flatbuffers.Builder, ADJACENCYOffset: flatbuffers.Offset): void;
    static createAdjacencyVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startAdjacencyVector(builder: flatbuffers.Builder, numElems: number): void;
    static addTopologyChangeEpochsS(builder: flatbuffers.Builder, TOPOLOGY_CHANGE_EPOCHS_SOffset: flatbuffers.Offset): void;
    static createTopologyChangeEpochsSVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createTopologyChangeEpochsSVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startTopologyChangeEpochsSVector(builder: flatbuffers.Builder, numElems: number): void;
    static addProvenance(builder: flatbuffers.Builder, PROVENANCEOffset: flatbuffers.Offset): void;
    static addProducer(builder: flatbuffers.Builder, PRODUCEROffset: flatbuffers.Offset): void;
    static addHasStatus(builder: flatbuffers.Builder, HAS_STATUS: boolean): void;
    static addHasChunkIndex(builder: flatbuffers.Builder, HAS_CHUNK_INDEX: boolean): void;
    static addHasChunkCount(builder: flatbuffers.Builder, HAS_CHUNK_COUNT: boolean): void;
    static endCLGResult(builder: flatbuffers.Builder): flatbuffers.Offset;
    unpack(): CLGResultT;
    unpackTo(_o: CLGResultT): void;
}
export declare class CLGResultT implements flatbuffers.IGeneratedObject {
    STATUS: clgComputationState;
    ERROR_CODE: string | Uint8Array | null;
    ERROR_MESSAGE: string | Uint8Array | null;
    CHUNK_INDEX: number;
    CHUNK_COUNT: number;
    DEFINITION_REF: CLGRecordRefT | null;
    PAIRS: (CLGPairT)[];
    LINKS: (CLGLinkT)[];
    BOUNDARIES: (CLGBoundaryT)[];
    INTERVALS: (CLGIntervalT)[];
    TRANSITIONS: (CLGTransitionT)[];
    ADJACENCY: (CLGAdjacencyT)[];
    TOPOLOGY_CHANGE_EPOCHS_S: (number)[];
    PROVENANCE: CLGProvenanceT | null;
    PRODUCER: PVNT | null;
    HAS_STATUS: boolean;
    HAS_CHUNK_INDEX: boolean;
    HAS_CHUNK_COUNT: boolean;
    constructor(STATUS?: clgComputationState, ERROR_CODE?: string | Uint8Array | null, ERROR_MESSAGE?: string | Uint8Array | null, CHUNK_INDEX?: number, CHUNK_COUNT?: number, DEFINITION_REF?: CLGRecordRefT | null, PAIRS?: (CLGPairT)[], LINKS?: (CLGLinkT)[], BOUNDARIES?: (CLGBoundaryT)[], INTERVALS?: (CLGIntervalT)[], TRANSITIONS?: (CLGTransitionT)[], ADJACENCY?: (CLGAdjacencyT)[], TOPOLOGY_CHANGE_EPOCHS_S?: (number)[], PROVENANCE?: CLGProvenanceT | null, PRODUCER?: PVNT | null, HAS_STATUS?: boolean, HAS_CHUNK_INDEX?: boolean, HAS_CHUNK_COUNT?: boolean);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=CLGResult.d.ts.map