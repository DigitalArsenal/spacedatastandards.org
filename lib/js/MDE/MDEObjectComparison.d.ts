import * as flatbuffers from 'flatbuffers';
import { MDEPlannedCheck, MDEPlannedCheckT } from './MDEPlannedCheck.js';
import { MDEVersionChange, MDEVersionChangeT } from './MDEVersionChange.js';
/**
 * Comparison results for one object.
 */
export declare class MDEObjectComparison implements flatbuffers.IUnpackableObject<MDEObjectComparisonT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): MDEObjectComparison;
    static getRootAsMDEObjectComparison(bb: flatbuffers.ByteBuffer, obj?: MDEObjectComparison): MDEObjectComparison;
    static getSizePrefixedRootAsMDEObjectComparison(bb: flatbuffers.ByteBuffer, obj?: MDEObjectComparison): MDEObjectComparison;
    OBJECT_KEY(): string | null;
    OBJECT_KEY(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Versions read.
     */
    VERSIONS(): number;
    CHANGES(index: number, obj?: MDEVersionChange): MDEVersionChange | null;
    changesLength(): number;
    PLANNED(index: number, obj?: MDEPlannedCheck): MDEPlannedCheck | null;
    plannedLength(): number;
    static startMDEObjectComparison(builder: flatbuffers.Builder): void;
    static addObjectKey(builder: flatbuffers.Builder, OBJECT_KEYOffset: flatbuffers.Offset): void;
    static addVersions(builder: flatbuffers.Builder, VERSIONS: number): void;
    static addChanges(builder: flatbuffers.Builder, CHANGESOffset: flatbuffers.Offset): void;
    static createChangesVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startChangesVector(builder: flatbuffers.Builder, numElems: number): void;
    static addPlanned(builder: flatbuffers.Builder, PLANNEDOffset: flatbuffers.Offset): void;
    static createPlannedVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startPlannedVector(builder: flatbuffers.Builder, numElems: number): void;
    static endMDEObjectComparison(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createMDEObjectComparison(builder: flatbuffers.Builder, OBJECT_KEYOffset: flatbuffers.Offset, VERSIONS: number, CHANGESOffset: flatbuffers.Offset, PLANNEDOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): MDEObjectComparisonT;
    unpackTo(_o: MDEObjectComparisonT): void;
}
export declare class MDEObjectComparisonT implements flatbuffers.IGeneratedObject {
    OBJECT_KEY: string | Uint8Array | null;
    VERSIONS: number;
    CHANGES: (MDEVersionChangeT)[];
    PLANNED: (MDEPlannedCheckT)[];
    constructor(OBJECT_KEY?: string | Uint8Array | null, VERSIONS?: number, CHANGES?: (MDEVersionChangeT)[], PLANNED?: (MDEPlannedCheckT)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=MDEObjectComparison.d.ts.map