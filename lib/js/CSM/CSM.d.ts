import * as flatbuffers from 'flatbuffers';
import { CAT, CATT } from './CAT.js';
/**
 * Conjunction Summary Message
 */
export declare class CSM implements flatbuffers.IUnpackableObject<CSMT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): CSM;
    static getRootAsCSM(bb: flatbuffers.ByteBuffer, obj?: CSM): CSM;
    static getSizePrefixedRootAsCSM(bb: flatbuffers.ByteBuffer, obj?: CSM): CSM;
    static bufferHasIdentifier(bb: flatbuffers.ByteBuffer): boolean;
    /**
     * Satellite name for the first object
     */
    OBJECT_1(obj?: CAT): CAT | null;
    /**
     * Days since epoch for the first object
     */
    DSE_1(): number;
    /**
     * Satellite name for the second object
     */
    OBJECT_2(obj?: CAT): CAT | null;
    /**
     * Days since epoch for the second object
     */
    DSE_2(): number;
    /**
     * Time of closest approach as a Unix timestamp
     */
    TCA(): number;
    /**
     * The distance or range between the two objects at TCA
     */
    TCA_RANGE(): number;
    /**
     * The magnitude of the relative velocity at TCA
     */
    TCA_RELATIVE_SPEED(): number;
    /**
     * Maximum probability
     */
    MAX_PROB(): number;
    /**
     * Standard deviation that produces the maximum probability
     */
    DILUTION(): number;
    static startCSM(builder: flatbuffers.Builder): void;
    static addObject1(builder: flatbuffers.Builder, OBJECT_1Offset: flatbuffers.Offset): void;
    static addDse1(builder: flatbuffers.Builder, DSE_1: number): void;
    static addObject2(builder: flatbuffers.Builder, OBJECT_2Offset: flatbuffers.Offset): void;
    static addDse2(builder: flatbuffers.Builder, DSE_2: number): void;
    static addTca(builder: flatbuffers.Builder, TCA: number): void;
    static addTcaRange(builder: flatbuffers.Builder, TCA_RANGE: number): void;
    static addTcaRelativeSpeed(builder: flatbuffers.Builder, TCA_RELATIVE_SPEED: number): void;
    static addMaxProb(builder: flatbuffers.Builder, MAX_PROB: number): void;
    static addDilution(builder: flatbuffers.Builder, DILUTION: number): void;
    static endCSM(builder: flatbuffers.Builder): flatbuffers.Offset;
    static finishCSMBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static finishSizePrefixedCSMBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    unpack(): CSMT;
    unpackTo(_o: CSMT): void;
}
export declare class CSMT implements flatbuffers.IGeneratedObject {
    OBJECT_1: CATT | null;
    DSE_1: number;
    OBJECT_2: CATT | null;
    DSE_2: number;
    TCA: number;
    TCA_RANGE: number;
    TCA_RELATIVE_SPEED: number;
    MAX_PROB: number;
    DILUTION: number;
    constructor(OBJECT_1?: CATT | null, DSE_1?: number, OBJECT_2?: CATT | null, DSE_2?: number, TCA?: number, TCA_RANGE?: number, TCA_RELATIVE_SPEED?: number, MAX_PROB?: number, DILUTION?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=CSM.d.ts.map