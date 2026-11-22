import * as flatbuffers from 'flatbuffers';
import { catalogProductKind } from './catalogProductKind.js';
/**
 * The product the catalog recommends for the object over a span of
 * prediction lead, chosen by a stated rule from the object's data-source type,
 * orbit regime and lead.
 */
export declare class CATRecommendation implements flatbuffers.IUnpackableObject<CATRecommendationT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): CATRecommendation;
    static getRootAsCATRecommendation(bb: flatbuffers.ByteBuffer, obj?: CATRecommendation): CATRecommendation;
    static getSizePrefixedRootAsCATRecommendation(bb: flatbuffers.ByteBuffer, obj?: CATRecommendation): CATRecommendation;
    /**
     * The recommended product's KIND: the entry of PRODUCTS with this KIND.
     */
    KIND(): catalogProductKind;
    /**
     * Start of the span, hours after PRODUCTS_AS_OF (inclusive).
     */
    LEAD_START_HOURS(): number;
    /**
     * End of the span, hours after PRODUCTS_AS_OF (exclusive).
     */
    LEAD_END_HOURS(): number;
    /**
     * The rule that chose the product: its name and version, then the rule's
     * cell the object fell in (for example "catalog-serve/2 public/meo").
     */
    RULE(): string | null;
    RULE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * True when the rule's choice for that cell was measured on held-out tests
     * against a stated truth; false when the rule's stated default was applied
     * without such a measurement.
     */
    MEASURED(): boolean;
    static startCATRecommendation(builder: flatbuffers.Builder): void;
    static addKind(builder: flatbuffers.Builder, KIND: catalogProductKind): void;
    static addLeadStartHours(builder: flatbuffers.Builder, LEAD_START_HOURS: number): void;
    static addLeadEndHours(builder: flatbuffers.Builder, LEAD_END_HOURS: number): void;
    static addRule(builder: flatbuffers.Builder, RULEOffset: flatbuffers.Offset): void;
    static addMeasured(builder: flatbuffers.Builder, MEASURED: boolean): void;
    static endCATRecommendation(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createCATRecommendation(builder: flatbuffers.Builder, KIND: catalogProductKind, LEAD_START_HOURS: number, LEAD_END_HOURS: number, RULEOffset: flatbuffers.Offset, MEASURED: boolean): flatbuffers.Offset;
    unpack(): CATRecommendationT;
    unpackTo(_o: CATRecommendationT): void;
}
export declare class CATRecommendationT implements flatbuffers.IGeneratedObject {
    KIND: catalogProductKind;
    LEAD_START_HOURS: number;
    LEAD_END_HOURS: number;
    RULE: string | Uint8Array | null;
    MEASURED: boolean;
    constructor(KIND?: catalogProductKind, LEAD_START_HOURS?: number, LEAD_END_HOURS?: number, RULE?: string | Uint8Array | null, MEASURED?: boolean);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=CATRecommendation.d.ts.map