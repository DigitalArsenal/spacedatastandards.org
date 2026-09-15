import * as flatbuffers from 'flatbuffers';
import { prwDensitySpecies } from './prwDensitySpecies.js';
export declare class PRWSpeciesDensity implements flatbuffers.IUnpackableObject<PRWSpeciesDensityT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): PRWSpeciesDensity;
    static getRootAsPRWSpeciesDensity(bb: flatbuffers.ByteBuffer, obj?: PRWSpeciesDensity): PRWSpeciesDensity;
    static getSizePrefixedRootAsPRWSpeciesDensity(bb: flatbuffers.ByteBuffer, obj?: PRWSpeciesDensity): PRWSpeciesDensity;
    CONSTITUENT(): prwDensitySpecies;
    NUMBER_PER_M3(): number;
    static startPRWSpeciesDensity(builder: flatbuffers.Builder): void;
    static addConstituent(builder: flatbuffers.Builder, CONSTITUENT: prwDensitySpecies): void;
    static addNumberPerM3(builder: flatbuffers.Builder, NUMBER_PER_M3: number): void;
    static endPRWSpeciesDensity(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createPRWSpeciesDensity(builder: flatbuffers.Builder, CONSTITUENT: prwDensitySpecies, NUMBER_PER_M3: number): flatbuffers.Offset;
    unpack(): PRWSpeciesDensityT;
    unpackTo(_o: PRWSpeciesDensityT): void;
}
export declare class PRWSpeciesDensityT implements flatbuffers.IGeneratedObject {
    CONSTITUENT: prwDensitySpecies;
    NUMBER_PER_M3: number;
    constructor(CONSTITUENT?: prwDensitySpecies, NUMBER_PER_M3?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=PRWSpeciesDensity.d.ts.map