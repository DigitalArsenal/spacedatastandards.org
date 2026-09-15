import * as flatbuffers from 'flatbuffers';
import { ACWConstraint, ACWConstraintT } from './ACWConstraint.js';
import { acwConstraintOperator } from './acwConstraintOperator.js';
/**
 * A boolean composition of constraints and nested sets.
 */
export declare class ACWConstraintSet implements flatbuffers.IUnpackableObject<ACWConstraintSetT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): ACWConstraintSet;
    static getRootAsACWConstraintSet(bb: flatbuffers.ByteBuffer, obj?: ACWConstraintSet): ACWConstraintSet;
    static getSizePrefixedRootAsACWConstraintSet(bb: flatbuffers.ByteBuffer, obj?: ACWConstraintSet): ACWConstraintSet;
    OPERATOR(): acwConstraintOperator;
    CONSTRAINTS(index: number, obj?: ACWConstraint): ACWConstraint | null;
    constraintsLength(): number;
    /**
     * Nested sets, combined with the same OPERATOR.
     */
    SETS(index: number, obj?: ACWConstraintSet): ACWConstraintSet | null;
    setsLength(): number;
    LABEL(): string | null;
    LABEL(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    static startACWConstraintSet(builder: flatbuffers.Builder): void;
    static addOperator(builder: flatbuffers.Builder, OPERATOR: acwConstraintOperator): void;
    static addConstraints(builder: flatbuffers.Builder, CONSTRAINTSOffset: flatbuffers.Offset): void;
    static createConstraintsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startConstraintsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addSets(builder: flatbuffers.Builder, SETSOffset: flatbuffers.Offset): void;
    static createSetsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startSetsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addLabel(builder: flatbuffers.Builder, LABELOffset: flatbuffers.Offset): void;
    static endACWConstraintSet(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createACWConstraintSet(builder: flatbuffers.Builder, OPERATOR: acwConstraintOperator, CONSTRAINTSOffset: flatbuffers.Offset, SETSOffset: flatbuffers.Offset, LABELOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): ACWConstraintSetT;
    unpackTo(_o: ACWConstraintSetT): void;
}
export declare class ACWConstraintSetT implements flatbuffers.IGeneratedObject {
    OPERATOR: acwConstraintOperator;
    CONSTRAINTS: (ACWConstraintT)[];
    SETS: (ACWConstraintSetT)[];
    LABEL: string | Uint8Array | null;
    constructor(OPERATOR?: acwConstraintOperator, CONSTRAINTS?: (ACWConstraintT)[], SETS?: (ACWConstraintSetT)[], LABEL?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=ACWConstraintSet.d.ts.map