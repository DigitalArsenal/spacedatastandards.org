import * as flatbuffers from 'flatbuffers';
import { COAStep, COAStepT } from './COAStep.js';
import { coaKind } from './coaKind.js';
/**
 * Course of Action
 */
export declare class COA implements flatbuffers.IUnpackableObject<COAT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): COA;
    static getRootAsCOA(bb: flatbuffers.ByteBuffer, obj?: COA): COA;
    static getSizePrefixedRootAsCOA(bb: flatbuffers.ByteBuffer, obj?: COA): COA;
    static bufferHasIdentifier(bb: flatbuffers.ByteBuffer): boolean;
    /**
     * Identifier of the course of action, unique within its record set.
     */
    ID(): string;
    ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    /**
     * Display name, for example "Plan A".
     */
    NAME(): string | null;
    NAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    KIND(): coaKind;
    /**
     * Catalog number of the object acted on; 0 when GROUP_ID names a group.
     */
    NORAD_CAT_ID(): number;
    /**
     * GROUP_ID of the $EGP acted on, when the course of action is for a group.
     */
    GROUP_ID(): string | null;
    GROUP_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Four-character standard code of the event answered, "$" included; never a union ordinal.
     */
    EVENT_STANDARD(): string | null;
    EVENT_STANDARD(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * ID of the event's record; empty for an event that is computed again rather than stored.
     */
    EVENT_ID(): string | null;
    EVENT_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Time of the event, ISO 8601 UTC.
     */
    EVENT_EPOCH(): string | null;
    EVENT_EPOCH(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * MANEUVER: made this long before EVENT_EPOCH, s.
     */
    LEAD_SECONDS(): number;
    /**
     * MANEUVER: back in place within this long after the maneuver, s.
     */
    RETURN_WITHIN_SECONDS(): number;
    /**
     * Time out of service before a maneuver, s.
     */
    PREPARATION_SECONDS(): number;
    /**
     * Time out of service after a maneuver, s.
     */
    CHECKOUT_SECONDS(): number;
    /**
     * Delta-v the operator allows the object each year, m/s per year; 0 = not stated.
     */
    DELTA_V_BUDGET_M_S_PER_YEAR(): number;
    /**
     * RECOVERY: the steps, in order.
     */
    STEPS(index: number, obj?: COAStep): COAStep | null;
    stepsLength(): number;
    /**
     * ID of the $MPL plan request that carries the maneuver, when one is stored.
     */
    PLAN_ID(): string | null;
    PLAN_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    static startCOA(builder: flatbuffers.Builder): void;
    static addId(builder: flatbuffers.Builder, IDOffset: flatbuffers.Offset): void;
    static addName(builder: flatbuffers.Builder, NAMEOffset: flatbuffers.Offset): void;
    static addKind(builder: flatbuffers.Builder, KIND: coaKind): void;
    static addNoradCatId(builder: flatbuffers.Builder, NORAD_CAT_ID: number): void;
    static addGroupId(builder: flatbuffers.Builder, GROUP_IDOffset: flatbuffers.Offset): void;
    static addEventStandard(builder: flatbuffers.Builder, EVENT_STANDARDOffset: flatbuffers.Offset): void;
    static addEventId(builder: flatbuffers.Builder, EVENT_IDOffset: flatbuffers.Offset): void;
    static addEventEpoch(builder: flatbuffers.Builder, EVENT_EPOCHOffset: flatbuffers.Offset): void;
    static addLeadSeconds(builder: flatbuffers.Builder, LEAD_SECONDS: number): void;
    static addReturnWithinSeconds(builder: flatbuffers.Builder, RETURN_WITHIN_SECONDS: number): void;
    static addPreparationSeconds(builder: flatbuffers.Builder, PREPARATION_SECONDS: number): void;
    static addCheckoutSeconds(builder: flatbuffers.Builder, CHECKOUT_SECONDS: number): void;
    static addDeltaVBudgetMSPerYear(builder: flatbuffers.Builder, DELTA_V_BUDGET_M_S_PER_YEAR: number): void;
    static addSteps(builder: flatbuffers.Builder, STEPSOffset: flatbuffers.Offset): void;
    static createStepsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startStepsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addPlanId(builder: flatbuffers.Builder, PLAN_IDOffset: flatbuffers.Offset): void;
    static endCOA(builder: flatbuffers.Builder): flatbuffers.Offset;
    static finishCOABuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static finishSizePrefixedCOABuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static createCOA(builder: flatbuffers.Builder, IDOffset: flatbuffers.Offset, NAMEOffset: flatbuffers.Offset, KIND: coaKind, NORAD_CAT_ID: number, GROUP_IDOffset: flatbuffers.Offset, EVENT_STANDARDOffset: flatbuffers.Offset, EVENT_IDOffset: flatbuffers.Offset, EVENT_EPOCHOffset: flatbuffers.Offset, LEAD_SECONDS: number, RETURN_WITHIN_SECONDS: number, PREPARATION_SECONDS: number, CHECKOUT_SECONDS: number, DELTA_V_BUDGET_M_S_PER_YEAR: number, STEPSOffset: flatbuffers.Offset, PLAN_IDOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): COAT;
    unpackTo(_o: COAT): void;
}
export declare class COAT implements flatbuffers.IGeneratedObject {
    ID: string | Uint8Array | null;
    NAME: string | Uint8Array | null;
    KIND: coaKind;
    NORAD_CAT_ID: number;
    GROUP_ID: string | Uint8Array | null;
    EVENT_STANDARD: string | Uint8Array | null;
    EVENT_ID: string | Uint8Array | null;
    EVENT_EPOCH: string | Uint8Array | null;
    LEAD_SECONDS: number;
    RETURN_WITHIN_SECONDS: number;
    PREPARATION_SECONDS: number;
    CHECKOUT_SECONDS: number;
    DELTA_V_BUDGET_M_S_PER_YEAR: number;
    STEPS: (COAStepT)[];
    PLAN_ID: string | Uint8Array | null;
    constructor(ID?: string | Uint8Array | null, NAME?: string | Uint8Array | null, KIND?: coaKind, NORAD_CAT_ID?: number, GROUP_ID?: string | Uint8Array | null, EVENT_STANDARD?: string | Uint8Array | null, EVENT_ID?: string | Uint8Array | null, EVENT_EPOCH?: string | Uint8Array | null, LEAD_SECONDS?: number, RETURN_WITHIN_SECONDS?: number, PREPARATION_SECONDS?: number, CHECKOUT_SECONDS?: number, DELTA_V_BUDGET_M_S_PER_YEAR?: number, STEPS?: (COAStepT)[], PLAN_ID?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=COA.d.ts.map