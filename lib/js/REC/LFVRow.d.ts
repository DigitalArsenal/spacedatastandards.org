import * as flatbuffers from 'flatbuffers';
import { OMM, OMMT } from './OMM.js';
import { lfvRole } from './lfvRole.js';
/**
 * One labelled feature vector.
 */
export declare class LFVRow implements flatbuffers.IUnpackableObject<LFVRowT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): LFVRow;
    static getRootAsLFVRow(bb: flatbuffers.ByteBuffer, obj?: LFVRow): LFVRow;
    static getSizePrefixedRootAsLFVRow(bb: flatbuffers.ByteBuffer, obj?: LFVRow): LFVRow;
    /**
     * Identifier of what the row was computed from: an object (catalog number
     * or international designator), a history, or an element set (an $OMM
     * MESSAGE_ID or OBJECT_ID plus ELEMENT_SET_NO).
     */
    SOURCE_ID(): string | null;
    SOURCE_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Group the row belongs to, e.g. the real object a decoy stands in for;
     * rows are split and ranked by group. Empty = SOURCE_ID.
     */
    TARGET(): string | null;
    TARGET(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    ROLE(): lfvRole;
    /**
     * Generator that made a synthetic row, e.g. "rotated", "chained"; empty
     * for real rows.
     */
    GENERATOR(): string | null;
    GENERATOR(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Class label, e.g. an orbit regime or object type; empty = none.
     */
    CLASS_LABEL(): string | null;
    CLASS_LABEL(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Feature values in FEATURE_NAMES order, in the units FEATURE_UNITS gives;
     * NaN = not computable for this row.
     */
    VALUES(index: number): number | null;
    valuesLength(): number;
    valuesArray(): Float64Array | null;
    /**
     * Score a classifier gave the row (higher = more likely Real); NaN or
     * absent when not scored.
     */
    SCORE(): number;
    /**
     * Element sets the row was computed from, when carried alongside.
     */
    ELEMENT_SETS(index: number, obj?: OMM): OMM | null;
    elementSetsLength(): number;
    static startLFVRow(builder: flatbuffers.Builder): void;
    static addSourceId(builder: flatbuffers.Builder, SOURCE_IDOffset: flatbuffers.Offset): void;
    static addTarget(builder: flatbuffers.Builder, TARGETOffset: flatbuffers.Offset): void;
    static addRole(builder: flatbuffers.Builder, ROLE: lfvRole): void;
    static addGenerator(builder: flatbuffers.Builder, GENERATOROffset: flatbuffers.Offset): void;
    static addClassLabel(builder: flatbuffers.Builder, CLASS_LABELOffset: flatbuffers.Offset): void;
    static addValues(builder: flatbuffers.Builder, VALUESOffset: flatbuffers.Offset): void;
    static createValuesVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createValuesVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startValuesVector(builder: flatbuffers.Builder, numElems: number): void;
    static addScore(builder: flatbuffers.Builder, SCORE: number): void;
    static addElementSets(builder: flatbuffers.Builder, ELEMENT_SETSOffset: flatbuffers.Offset): void;
    static createElementSetsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startElementSetsVector(builder: flatbuffers.Builder, numElems: number): void;
    static endLFVRow(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createLFVRow(builder: flatbuffers.Builder, SOURCE_IDOffset: flatbuffers.Offset, TARGETOffset: flatbuffers.Offset, ROLE: lfvRole, GENERATOROffset: flatbuffers.Offset, CLASS_LABELOffset: flatbuffers.Offset, VALUESOffset: flatbuffers.Offset, SCORE: number, ELEMENT_SETSOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): LFVRowT;
    unpackTo(_o: LFVRowT): void;
}
export declare class LFVRowT implements flatbuffers.IGeneratedObject {
    SOURCE_ID: string | Uint8Array | null;
    TARGET: string | Uint8Array | null;
    ROLE: lfvRole;
    GENERATOR: string | Uint8Array | null;
    CLASS_LABEL: string | Uint8Array | null;
    VALUES: (number)[];
    SCORE: number;
    ELEMENT_SETS: (OMMT)[];
    constructor(SOURCE_ID?: string | Uint8Array | null, TARGET?: string | Uint8Array | null, ROLE?: lfvRole, GENERATOR?: string | Uint8Array | null, CLASS_LABEL?: string | Uint8Array | null, VALUES?: (number)[], SCORE?: number, ELEMENT_SETS?: (OMMT)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=LFVRow.d.ts.map