import * as flatbuffers from 'flatbuffers';
import { CAT, CATT } from './cat.js';
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
    object1(obj?: CAT): CAT | null;
    /**
     * Days since epoch for the first object
     */
    dse1(): number;
    /**
     * Satellite name for the second object
     */
    object2(obj?: CAT): CAT | null;
    /**
     * Days since epoch for the second object
     */
    dse2(): number;
    /**
     * Time of closest approach as a Unix timestamp
     */
    tca(): number;
    /**
     * The distance or range between the two objects at TCA
     */
    tcaRange(): number;
    /**
     * The magnitude of the relative velocity at TCA
     */
    tcaRelativeSpeed(): number;
    /**
     * Maximum probability
     */
    maxProb(): number;
    /**
     * Standard deviation that produces the maximum probability
     */
    dilution(): number;
    static startCSM(builder: flatbuffers.Builder): void;
    static addObject1(builder: flatbuffers.Builder, object1Offset: flatbuffers.Offset): void;
    static addDse1(builder: flatbuffers.Builder, dse1: number): void;
    static addObject2(builder: flatbuffers.Builder, object2Offset: flatbuffers.Offset): void;
    static addDse2(builder: flatbuffers.Builder, dse2: number): void;
    static addTca(builder: flatbuffers.Builder, tca: number): void;
    static addTcaRange(builder: flatbuffers.Builder, tcaRange: number): void;
    static addTcaRelativeSpeed(builder: flatbuffers.Builder, tcaRelativeSpeed: number): void;
    static addMaxProb(builder: flatbuffers.Builder, maxProb: number): void;
    static addDilution(builder: flatbuffers.Builder, dilution: number): void;
    static endCSM(builder: flatbuffers.Builder): flatbuffers.Offset;
    static finishCSMBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static finishSizePrefixedCSMBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    unpack(): CSMT;
    unpackTo(_o: CSMT): void;
}
export declare class CSMT implements flatbuffers.IGeneratedObject {
    object1: CATT | null;
    dse1: number;
    object2: CATT | null;
    dse2: number;
    tca: number;
    tcaRange: number;
    tcaRelativeSpeed: number;
    maxProb: number;
    dilution: number;
    constructor(object1?: CATT | null, dse1?: number, object2?: CATT | null, dse2?: number, tca?: number, tcaRange?: number, tcaRelativeSpeed?: number, maxProb?: number, dilution?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=csm.d.ts.map