import * as flatbuffers from 'flatbuffers';
import { RFLProvenance, RFLProvenanceT } from './RFLProvenance.js';
import { timingStandard } from './timingStandard.js';
/**
 * Atmospheric Propagation Loss Statistics
 */
export declare class APL implements flatbuffers.IUnpackableObject<APLT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): APL;
    static getRootAsAPL(bb: flatbuffers.ByteBuffer, obj?: APL): APL;
    static getSizePrefixedRootAsAPL(bb: flatbuffers.ByteBuffer, obj?: APL): APL;
    static bufferHasIdentifier(bb: flatbuffers.ByteBuffer): boolean;
    APL_ID(): string;
    APL_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    NAME(): string | null;
    NAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    SCENARIO_ID(): string | null;
    SCENARIO_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    RFL_ID(): string | null;
    RFL_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    LINK_ID(): string | null;
    LINK_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    WINDOW_START(): number;
    WINDOW_STOP(): number;
    TIME_SYSTEM(): timingStandard;
    /**
     * Percent of time a loss value is exceeded, in descending or ascending
     * order as stated by PROVENANCE. Every curve below has this length.
     */
    EXCEEDANCE_PERCENT(index: number): number | null;
    exceedancePercentLength(): number;
    exceedancePercentArray(): Float64Array;
    RAIN_LOSS_DB(index: number): number | null;
    rainLossDbLength(): number;
    rainLossDbArray(): Float64Array;
    GASEOUS_ABSORPTION_LOSS_DB(index: number): number | null;
    gaseousAbsorptionLossDbLength(): number;
    gaseousAbsorptionLossDbArray(): Float64Array;
    CLOUD_FOG_LOSS_DB(index: number): number | null;
    cloudFogLossDbLength(): number;
    cloudFogLossDbArray(): Float64Array;
    SCINTILLATION_LOSS_DB(index: number): number | null;
    scintillationLossDbLength(): number;
    scintillationLossDbArray(): Float64Array;
    TOTAL_LOSS_DB(index: number): number | null;
    totalLossDbLength(): number;
    totalLossDbArray(): Float64Array;
    /**
     * Cross-polarization discrimination at each exceedance percentage, dB.
     */
    XPD_DB(index: number): number | null;
    xpdDbLength(): number;
    xpdDbArray(): Float64Array;
    /**
     * Exceedance percentage used for the worst-month summary.
     */
    WORST_MONTH_EXCEEDANCE_PERCENT(): number;
    WORST_MONTH_TOTAL_LOSS_DB(): number;
    WORST_MONTH_XPD_DB(): number;
    /**
     * Percentage of the analysis window meeting the stated link requirement.
     */
    AVAILABILITY_PERCENT(): number;
    /**
     * Annualized minutes not meeting the stated link requirement.
     */
    OUTAGE_MINUTES_PER_YEAR(): number;
    /**
     * Worst-month outage minutes for the analysis window's month length.
     */
    WORST_MONTH_OUTAGE_MINUTES(): number;
    PROVENANCE(obj?: RFLProvenance): RFLProvenance | null;
    COMPUTED_AT(): bigint;
    PRODUCER_ID(): string;
    PRODUCER_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    /**
     * Ed25519 signature over the size-prefixed FlatBuffer with both 64-byte
     * signature payloads zeroed while preserving their vectors and offsets.
     */
    SIGNATURE(index: number): number | null;
    signatureLength(): number;
    signatureArray(): Uint8Array;
    /**
     * Ed25519 signature over canonical JSON with IDL field order and
     * capitalization, no insignificant whitespace, and both signature fields
     * omitted.
     */
    CANONICAL_JSON_SIGNATURE(index: number): number | null;
    canonicalJsonSignatureLength(): number;
    canonicalJsonSignatureArray(): Uint8Array;
    static startAPL(builder: flatbuffers.Builder): void;
    static addAplId(builder: flatbuffers.Builder, APL_IDOffset: flatbuffers.Offset): void;
    static addName(builder: flatbuffers.Builder, NAMEOffset: flatbuffers.Offset): void;
    static addScenarioId(builder: flatbuffers.Builder, SCENARIO_IDOffset: flatbuffers.Offset): void;
    static addRflId(builder: flatbuffers.Builder, RFL_IDOffset: flatbuffers.Offset): void;
    static addLinkId(builder: flatbuffers.Builder, LINK_IDOffset: flatbuffers.Offset): void;
    static addWindowStart(builder: flatbuffers.Builder, WINDOW_START: number): void;
    static addWindowStop(builder: flatbuffers.Builder, WINDOW_STOP: number): void;
    static addTimeSystem(builder: flatbuffers.Builder, TIME_SYSTEM: timingStandard): void;
    static addExceedancePercent(builder: flatbuffers.Builder, EXCEEDANCE_PERCENTOffset: flatbuffers.Offset): void;
    static createExceedancePercentVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createExceedancePercentVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startExceedancePercentVector(builder: flatbuffers.Builder, numElems: number): void;
    static addRainLossDb(builder: flatbuffers.Builder, RAIN_LOSS_DBOffset: flatbuffers.Offset): void;
    static createRainLossDbVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createRainLossDbVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startRainLossDbVector(builder: flatbuffers.Builder, numElems: number): void;
    static addGaseousAbsorptionLossDb(builder: flatbuffers.Builder, GASEOUS_ABSORPTION_LOSS_DBOffset: flatbuffers.Offset): void;
    static createGaseousAbsorptionLossDbVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createGaseousAbsorptionLossDbVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startGaseousAbsorptionLossDbVector(builder: flatbuffers.Builder, numElems: number): void;
    static addCloudFogLossDb(builder: flatbuffers.Builder, CLOUD_FOG_LOSS_DBOffset: flatbuffers.Offset): void;
    static createCloudFogLossDbVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createCloudFogLossDbVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startCloudFogLossDbVector(builder: flatbuffers.Builder, numElems: number): void;
    static addScintillationLossDb(builder: flatbuffers.Builder, SCINTILLATION_LOSS_DBOffset: flatbuffers.Offset): void;
    static createScintillationLossDbVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createScintillationLossDbVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startScintillationLossDbVector(builder: flatbuffers.Builder, numElems: number): void;
    static addTotalLossDb(builder: flatbuffers.Builder, TOTAL_LOSS_DBOffset: flatbuffers.Offset): void;
    static createTotalLossDbVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createTotalLossDbVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startTotalLossDbVector(builder: flatbuffers.Builder, numElems: number): void;
    static addXpdDb(builder: flatbuffers.Builder, XPD_DBOffset: flatbuffers.Offset): void;
    static createXpdDbVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createXpdDbVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startXpdDbVector(builder: flatbuffers.Builder, numElems: number): void;
    static addWorstMonthExceedancePercent(builder: flatbuffers.Builder, WORST_MONTH_EXCEEDANCE_PERCENT: number): void;
    static addWorstMonthTotalLossDb(builder: flatbuffers.Builder, WORST_MONTH_TOTAL_LOSS_DB: number): void;
    static addWorstMonthXpdDb(builder: flatbuffers.Builder, WORST_MONTH_XPD_DB: number): void;
    static addAvailabilityPercent(builder: flatbuffers.Builder, AVAILABILITY_PERCENT: number): void;
    static addOutageMinutesPerYear(builder: flatbuffers.Builder, OUTAGE_MINUTES_PER_YEAR: number): void;
    static addWorstMonthOutageMinutes(builder: flatbuffers.Builder, WORST_MONTH_OUTAGE_MINUTES: number): void;
    static addProvenance(builder: flatbuffers.Builder, PROVENANCEOffset: flatbuffers.Offset): void;
    static addComputedAt(builder: flatbuffers.Builder, COMPUTED_AT: bigint): void;
    static addProducerId(builder: flatbuffers.Builder, PRODUCER_IDOffset: flatbuffers.Offset): void;
    static addSignature(builder: flatbuffers.Builder, SIGNATUREOffset: flatbuffers.Offset): void;
    static createSignatureVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startSignatureVector(builder: flatbuffers.Builder, numElems: number): void;
    static addCanonicalJsonSignature(builder: flatbuffers.Builder, CANONICAL_JSON_SIGNATUREOffset: flatbuffers.Offset): void;
    static createCanonicalJsonSignatureVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startCanonicalJsonSignatureVector(builder: flatbuffers.Builder, numElems: number): void;
    static endAPL(builder: flatbuffers.Builder): flatbuffers.Offset;
    static finishAPLBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static finishSizePrefixedAPLBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    unpack(): APLT;
    unpackTo(_o: APLT): void;
}
export declare class APLT implements flatbuffers.IGeneratedObject {
    APL_ID: string | Uint8Array | null;
    NAME: string | Uint8Array | null;
    SCENARIO_ID: string | Uint8Array | null;
    RFL_ID: string | Uint8Array | null;
    LINK_ID: string | Uint8Array | null;
    WINDOW_START: number;
    WINDOW_STOP: number;
    TIME_SYSTEM: timingStandard;
    EXCEEDANCE_PERCENT: (number)[];
    RAIN_LOSS_DB: (number)[];
    GASEOUS_ABSORPTION_LOSS_DB: (number)[];
    CLOUD_FOG_LOSS_DB: (number)[];
    SCINTILLATION_LOSS_DB: (number)[];
    TOTAL_LOSS_DB: (number)[];
    XPD_DB: (number)[];
    WORST_MONTH_EXCEEDANCE_PERCENT: number;
    WORST_MONTH_TOTAL_LOSS_DB: number;
    WORST_MONTH_XPD_DB: number;
    AVAILABILITY_PERCENT: number;
    OUTAGE_MINUTES_PER_YEAR: number;
    WORST_MONTH_OUTAGE_MINUTES: number;
    PROVENANCE: RFLProvenanceT | null;
    COMPUTED_AT: bigint;
    PRODUCER_ID: string | Uint8Array | null;
    SIGNATURE: (number)[];
    CANONICAL_JSON_SIGNATURE: (number)[];
    constructor(APL_ID?: string | Uint8Array | null, NAME?: string | Uint8Array | null, SCENARIO_ID?: string | Uint8Array | null, RFL_ID?: string | Uint8Array | null, LINK_ID?: string | Uint8Array | null, WINDOW_START?: number, WINDOW_STOP?: number, TIME_SYSTEM?: timingStandard, EXCEEDANCE_PERCENT?: (number)[], RAIN_LOSS_DB?: (number)[], GASEOUS_ABSORPTION_LOSS_DB?: (number)[], CLOUD_FOG_LOSS_DB?: (number)[], SCINTILLATION_LOSS_DB?: (number)[], TOTAL_LOSS_DB?: (number)[], XPD_DB?: (number)[], WORST_MONTH_EXCEEDANCE_PERCENT?: number, WORST_MONTH_TOTAL_LOSS_DB?: number, WORST_MONTH_XPD_DB?: number, AVAILABILITY_PERCENT?: number, OUTAGE_MINUTES_PER_YEAR?: number, WORST_MONTH_OUTAGE_MINUTES?: number, PROVENANCE?: RFLProvenanceT | null, COMPUTED_AT?: bigint, PRODUCER_ID?: string | Uint8Array | null, SIGNATURE?: (number)[], CANONICAL_JSON_SIGNATURE?: (number)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=APL.d.ts.map