import * as flatbuffers from 'flatbuffers';
import { ERMScreeningCase, ERMScreeningCaseT } from './ERMScreeningCase.js';
/**
 * Caller-supplied screening cases.
 */
export declare class ERMScreeningCases implements flatbuffers.IUnpackableObject<ERMScreeningCasesT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): ERMScreeningCases;
    static getRootAsERMScreeningCases(bb: flatbuffers.ByteBuffer, obj?: ERMScreeningCases): ERMScreeningCases;
    static getSizePrefixedRootAsERMScreeningCases(bb: flatbuffers.ByteBuffer, obj?: ERMScreeningCases): ERMScreeningCases;
    CASES(index: number, obj?: ERMScreeningCase): ERMScreeningCase | null;
    casesLength(): number;
    static startERMScreeningCases(builder: flatbuffers.Builder): void;
    static addCases(builder: flatbuffers.Builder, CASESOffset: flatbuffers.Offset): void;
    static createCasesVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startCasesVector(builder: flatbuffers.Builder, numElems: number): void;
    static endERMScreeningCases(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createERMScreeningCases(builder: flatbuffers.Builder, CASESOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): ERMScreeningCasesT;
    unpackTo(_o: ERMScreeningCasesT): void;
}
export declare class ERMScreeningCasesT implements flatbuffers.IGeneratedObject {
    CASES: (ERMScreeningCaseT)[];
    constructor(CASES?: (ERMScreeningCaseT)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=ERMScreeningCases.d.ts.map