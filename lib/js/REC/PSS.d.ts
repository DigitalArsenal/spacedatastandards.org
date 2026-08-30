import * as flatbuffers from 'flatbuffers';
import { PSSAttestation, PSSAttestationT } from './PSSAttestation.js';
import { PSSSolution, PSSSolutionT } from './PSSSolution.js';
export declare class PSS implements flatbuffers.IUnpackableObject<PSST> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): PSS;
    static getRootAsPSS(bb: flatbuffers.ByteBuffer, obj?: PSS): PSS;
    static getSizePrefixedRootAsPSS(bb: flatbuffers.ByteBuffer, obj?: PSS): PSS;
    static bufferHasIdentifier(bb: flatbuffers.ByteBuffer): boolean;
    SOLUTION_SET_ID(): string;
    SOLUTION_SET_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    PROBLEM_ID(): string;
    PROBLEM_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    OBJECTIVE_IDS(index: number): string;
    OBJECTIVE_IDS(index: number, optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    objectiveIdsLength(): number;
    SOLUTIONS(index: number, obj?: PSSSolution): PSSSolution | null;
    solutionsLength(): number;
    GENERATED_AT(): string | null;
    GENERATED_AT(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    ATTESTATION(obj?: PSSAttestation): PSSAttestation | null;
    static startPSS(builder: flatbuffers.Builder): void;
    static addSolutionSetId(builder: flatbuffers.Builder, SOLUTION_SET_IDOffset: flatbuffers.Offset): void;
    static addProblemId(builder: flatbuffers.Builder, PROBLEM_IDOffset: flatbuffers.Offset): void;
    static addObjectiveIds(builder: flatbuffers.Builder, OBJECTIVE_IDSOffset: flatbuffers.Offset): void;
    static createObjectiveIdsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startObjectiveIdsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addSolutions(builder: flatbuffers.Builder, SOLUTIONSOffset: flatbuffers.Offset): void;
    static createSolutionsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startSolutionsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addGeneratedAt(builder: flatbuffers.Builder, GENERATED_ATOffset: flatbuffers.Offset): void;
    static addAttestation(builder: flatbuffers.Builder, ATTESTATIONOffset: flatbuffers.Offset): void;
    static endPSS(builder: flatbuffers.Builder): flatbuffers.Offset;
    static finishPSSBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static finishSizePrefixedPSSBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    unpack(): PSST;
    unpackTo(_o: PSST): void;
}
export declare class PSST implements flatbuffers.IGeneratedObject {
    SOLUTION_SET_ID: string | Uint8Array | null;
    PROBLEM_ID: string | Uint8Array | null;
    OBJECTIVE_IDS: (string)[];
    SOLUTIONS: (PSSSolutionT)[];
    GENERATED_AT: string | Uint8Array | null;
    ATTESTATION: PSSAttestationT | null;
    constructor(SOLUTION_SET_ID?: string | Uint8Array | null, PROBLEM_ID?: string | Uint8Array | null, OBJECTIVE_IDS?: (string)[], SOLUTIONS?: (PSSSolutionT)[], GENERATED_AT?: string | Uint8Array | null, ATTESTATION?: PSSAttestationT | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=PSS.d.ts.map