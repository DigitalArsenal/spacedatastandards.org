import * as flatbuffers from 'flatbuffers';
import { tmxPhenomenologyKind } from './tmxPhenomenologyKind.js';
/**
 * Deterministic compound-overlap scoring rule across co-occurring phenomenologies.
 */
export declare class TMXCompoundRule implements flatbuffers.IUnpackableObject<TMXCompoundRuleT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): TMXCompoundRule;
    static getRootAsTMXCompoundRule(bb: flatbuffers.ByteBuffer, obj?: TMXCompoundRule): TMXCompoundRule;
    static getSizePrefixedRootAsTMXCompoundRule(bb: flatbuffers.ByteBuffer, obj?: TMXCompoundRule): TMXCompoundRule;
    /**
     * Stable rule identifier.
     */
    RULE_ID(): string;
    RULE_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    /**
     * Set of phenomenologies whose temporal/spatial overlap triggers this rule.
     */
    PHENOMENOLOGIES(index: number): tmxPhenomenologyKind | null;
    phenomenologiesLength(): number;
    phenomenologiesArray(): Int8Array | null;
    /**
     * Additive bonus in basis points (0..2500).
     */
    BONUS_BPS(): number;
    /**
     * Multiplicative factor in basis points (e.g. 10000 = 1.00x, 12500 = 1.25x).
     */
    MULTIPLIER_BPS(): number;
    static startTMXCompoundRule(builder: flatbuffers.Builder): void;
    static addRuleId(builder: flatbuffers.Builder, RULE_IDOffset: flatbuffers.Offset): void;
    static addPhenomenologies(builder: flatbuffers.Builder, PHENOMENOLOGIESOffset: flatbuffers.Offset): void;
    static createPhenomenologiesVector(builder: flatbuffers.Builder, data: tmxPhenomenologyKind[]): flatbuffers.Offset;
    static startPhenomenologiesVector(builder: flatbuffers.Builder, numElems: number): void;
    static addBonusBps(builder: flatbuffers.Builder, BONUS_BPS: number): void;
    static addMultiplierBps(builder: flatbuffers.Builder, MULTIPLIER_BPS: number): void;
    static endTMXCompoundRule(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createTMXCompoundRule(builder: flatbuffers.Builder, RULE_IDOffset: flatbuffers.Offset, PHENOMENOLOGIESOffset: flatbuffers.Offset, BONUS_BPS: number, MULTIPLIER_BPS: number): flatbuffers.Offset;
    unpack(): TMXCompoundRuleT;
    unpackTo(_o: TMXCompoundRuleT): void;
}
export declare class TMXCompoundRuleT implements flatbuffers.IGeneratedObject {
    RULE_ID: string | Uint8Array | null;
    PHENOMENOLOGIES: (tmxPhenomenologyKind)[];
    BONUS_BPS: number;
    MULTIPLIER_BPS: number;
    constructor(RULE_ID?: string | Uint8Array | null, PHENOMENOLOGIES?: (tmxPhenomenologyKind)[], BONUS_BPS?: number, MULTIPLIER_BPS?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=TMXCompoundRule.d.ts.map