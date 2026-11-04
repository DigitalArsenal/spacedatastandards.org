import * as flatbuffers from 'flatbuffers';
import { pcfBlendShape } from './pcfBlendShape.js';
import { pcfEpochSelection } from './pcfEpochSelection.js';
import { pcfTheory } from './pcfTheory.js';
/**
 * The multi-epoch element store of SDN-AP and the sync harness that fills it:
 * how many days of element sets are kept, which set answers a request time and
 * how consecutive sets are blended across a handover. Absent: every default below.
 */
export declare class PCFEpochStore implements flatbuffers.IUnpackableObject<PCFEpochStoreT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): PCFEpochStore;
    static getRootAsPCFEpochStore(bb: flatbuffers.ByteBuffer, obj?: PCFEpochStore): PCFEpochStore;
    static getSizePrefixedRootAsPCFEpochStore(bb: flatbuffers.ByteBuffer, obj?: PCFEpochStore): PCFEpochStore;
    /**
     * Days of element sets kept, counted back from now by epoch. Default 7.
     */
    CACHE_DAYS(): number;
    /**
     * Most sets kept per object and theory, the oldest epochs dropping first.
     * Default 0 (no cap beyond CACHE_DAYS).
     */
    MAX_SETS_PER_OBJECT(): number;
    /**
     * Which set answers a request time. Default NEAREST.
     */
    SELECTION(): pcfEpochSelection;
    /**
     * Width, seconds, of the blend window centered on the midpoint between two
     * consecutive sets; 0 switches sets without a blend. Default 3600.
     */
    BLEND_WINDOW_SECONDS(): number;
    /**
     * The weight curve across the blend window. Default SMOOTHSTEP.
     */
    BLEND_SHAPE(): pcfBlendShape;
    /**
     * Theories whose sets are stored (SGP4, SGP4XP). Default empty: all.
     */
    THEORIES(index: number): pcfTheory | null;
    theoriesLength(): number;
    theoriesArray(): Uint8Array | null;
    static startPCFEpochStore(builder: flatbuffers.Builder): void;
    static addCacheDays(builder: flatbuffers.Builder, CACHE_DAYS: number): void;
    static addMaxSetsPerObject(builder: flatbuffers.Builder, MAX_SETS_PER_OBJECT: number): void;
    static addSelection(builder: flatbuffers.Builder, SELECTION: pcfEpochSelection): void;
    static addBlendWindowSeconds(builder: flatbuffers.Builder, BLEND_WINDOW_SECONDS: number): void;
    static addBlendShape(builder: flatbuffers.Builder, BLEND_SHAPE: pcfBlendShape): void;
    static addTheories(builder: flatbuffers.Builder, THEORIESOffset: flatbuffers.Offset): void;
    static createTheoriesVector(builder: flatbuffers.Builder, data: pcfTheory[]): flatbuffers.Offset;
    static startTheoriesVector(builder: flatbuffers.Builder, numElems: number): void;
    static endPCFEpochStore(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createPCFEpochStore(builder: flatbuffers.Builder, CACHE_DAYS: number, MAX_SETS_PER_OBJECT: number, SELECTION: pcfEpochSelection, BLEND_WINDOW_SECONDS: number, BLEND_SHAPE: pcfBlendShape, THEORIESOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): PCFEpochStoreT;
    unpackTo(_o: PCFEpochStoreT): void;
}
export declare class PCFEpochStoreT implements flatbuffers.IGeneratedObject {
    CACHE_DAYS: number;
    MAX_SETS_PER_OBJECT: number;
    SELECTION: pcfEpochSelection;
    BLEND_WINDOW_SECONDS: number;
    BLEND_SHAPE: pcfBlendShape;
    THEORIES: (pcfTheory)[];
    constructor(CACHE_DAYS?: number, MAX_SETS_PER_OBJECT?: number, SELECTION?: pcfEpochSelection, BLEND_WINDOW_SECONDS?: number, BLEND_SHAPE?: pcfBlendShape, THEORIES?: (pcfTheory)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=PCFEpochStore.d.ts.map