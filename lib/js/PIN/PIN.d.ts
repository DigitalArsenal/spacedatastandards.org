import * as flatbuffers from 'flatbuffers';
import { PINRule, PINRuleT } from './PINRule.js';
export declare class PIN implements flatbuffers.IUnpackableObject<PINT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): PIN;
    static getRootAsPIN(bb: flatbuffers.ByteBuffer, obj?: PIN): PIN;
    static getSizePrefixedRootAsPIN(bb: flatbuffers.ByteBuffer, obj?: PIN): PIN;
    static bufferHasIdentifier(bb: flatbuffers.ByteBuffer): boolean;
    RULES(index: number, obj?: PINRule): PINRule | null;
    rulesLength(): number;
    /**
     * Unix milliseconds of the last change to the policy; 0 = never changed.
     */
    UPDATED_AT(): bigint;
    static startPIN(builder: flatbuffers.Builder): void;
    static addRules(builder: flatbuffers.Builder, RULESOffset: flatbuffers.Offset): void;
    static createRulesVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startRulesVector(builder: flatbuffers.Builder, numElems: number): void;
    static addUpdatedAt(builder: flatbuffers.Builder, UPDATED_AT: bigint): void;
    static endPIN(builder: flatbuffers.Builder): flatbuffers.Offset;
    static finishPINBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static finishSizePrefixedPINBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static createPIN(builder: flatbuffers.Builder, RULESOffset: flatbuffers.Offset, UPDATED_AT: bigint): flatbuffers.Offset;
    unpack(): PINT;
    unpackTo(_o: PINT): void;
}
export declare class PINT implements flatbuffers.IGeneratedObject {
    RULES: (PINRuleT)[];
    UPDATED_AT: bigint;
    constructor(RULES?: (PINRuleT)[], UPDATED_AT?: bigint);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=PIN.d.ts.map