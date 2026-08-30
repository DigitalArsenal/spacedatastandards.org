import * as flatbuffers from 'flatbuffers';
import { PSSConstraintValue, PSSConstraintValueT } from './PSSConstraintValue.js';
import { PSSObjectiveValue, PSSObjectiveValueT } from './PSSObjectiveValue.js';
import { PSSProvenance, PSSProvenanceT } from './PSSProvenance.js';
import { PSSVariableValue, PSSVariableValueT } from './PSSVariableValue.js';
import { pssSolutionStatus } from './pssSolutionStatus.js';
export declare class PSSSolution implements flatbuffers.IUnpackableObject<PSSSolutionT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): PSSSolution;
    static getRootAsPSSSolution(bb: flatbuffers.ByteBuffer, obj?: PSSSolution): PSSSolution;
    static getSizePrefixedRootAsPSSSolution(bb: flatbuffers.ByteBuffer, obj?: PSSSolution): PSSSolution;
    SOLUTION_ID(): string;
    SOLUTION_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    STATUS(): pssSolutionStatus;
    VARIABLES(index: number, obj?: PSSVariableValue): PSSVariableValue | null;
    variablesLength(): number;
    OBJECTIVES(index: number, obj?: PSSObjectiveValue): PSSObjectiveValue | null;
    objectivesLength(): number;
    CONSTRAINTS(index: number, obj?: PSSConstraintValue): PSSConstraintValue | null;
    constraintsLength(): number;
    DOMINANCE_RANK(): number;
    CROWDING_DISTANCE(): number;
    VERIFY_BY_PROPAGATION_RESIDUAL(): number;
    PROVENANCE(obj?: PSSProvenance): PSSProvenance | null;
    static startPSSSolution(builder: flatbuffers.Builder): void;
    static addSolutionId(builder: flatbuffers.Builder, SOLUTION_IDOffset: flatbuffers.Offset): void;
    static addStatus(builder: flatbuffers.Builder, STATUS: pssSolutionStatus): void;
    static addVariables(builder: flatbuffers.Builder, VARIABLESOffset: flatbuffers.Offset): void;
    static createVariablesVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startVariablesVector(builder: flatbuffers.Builder, numElems: number): void;
    static addObjectives(builder: flatbuffers.Builder, OBJECTIVESOffset: flatbuffers.Offset): void;
    static createObjectivesVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startObjectivesVector(builder: flatbuffers.Builder, numElems: number): void;
    static addConstraints(builder: flatbuffers.Builder, CONSTRAINTSOffset: flatbuffers.Offset): void;
    static createConstraintsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startConstraintsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addDominanceRank(builder: flatbuffers.Builder, DOMINANCE_RANK: number): void;
    static addCrowdingDistance(builder: flatbuffers.Builder, CROWDING_DISTANCE: number): void;
    static addVerifyByPropagationResidual(builder: flatbuffers.Builder, VERIFY_BY_PROPAGATION_RESIDUAL: number): void;
    static addProvenance(builder: flatbuffers.Builder, PROVENANCEOffset: flatbuffers.Offset): void;
    static endPSSSolution(builder: flatbuffers.Builder): flatbuffers.Offset;
    unpack(): PSSSolutionT;
    unpackTo(_o: PSSSolutionT): void;
}
export declare class PSSSolutionT implements flatbuffers.IGeneratedObject {
    SOLUTION_ID: string | Uint8Array | null;
    STATUS: pssSolutionStatus;
    VARIABLES: (PSSVariableValueT)[];
    OBJECTIVES: (PSSObjectiveValueT)[];
    CONSTRAINTS: (PSSConstraintValueT)[];
    DOMINANCE_RANK: number;
    CROWDING_DISTANCE: number;
    VERIFY_BY_PROPAGATION_RESIDUAL: number;
    PROVENANCE: PSSProvenanceT | null;
    constructor(SOLUTION_ID?: string | Uint8Array | null, STATUS?: pssSolutionStatus, VARIABLES?: (PSSVariableValueT)[], OBJECTIVES?: (PSSObjectiveValueT)[], CONSTRAINTS?: (PSSConstraintValueT)[], DOMINANCE_RANK?: number, CROWDING_DISTANCE?: number, VERIFY_BY_PROPAGATION_RESIDUAL?: number, PROVENANCE?: PSSProvenanceT | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=PSSSolution.d.ts.map