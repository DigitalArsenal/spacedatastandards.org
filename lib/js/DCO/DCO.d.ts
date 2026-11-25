import * as flatbuffers from 'flatbuffers';
import { DCOModuleAttribution, DCOModuleAttributionT } from './DCOModuleAttribution.js';
import { DCOThreatRef, DCOThreatRefT } from './DCOThreatRef.js';
import { dcoActionKind } from './dcoActionKind.js';
import { dcoRecheckOutcome } from './dcoRecheckOutcome.js';
import { dcoSeverityLevel } from './dcoSeverityLevel.js';
/**
 * Defensive COA Trade & Conflict-Recheck
 */
export declare class DCO implements flatbuffers.IUnpackableObject<DCOT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): DCO;
    static getRootAsDCO(bb: flatbuffers.ByteBuffer, obj?: DCO): DCO;
    static getSizePrefixedRootAsDCO(bb: flatbuffers.ByteBuffer, obj?: DCO): DCO;
    static bufferHasIdentifier(bb: flatbuffers.ByteBuffer): boolean;
    /**
     * Unique identifier of this defensive COA evaluation record.
     */
    DCO_ID(): string;
    DCO_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    /**
     * Identifier of the input $COA record ($COA.ID).
     */
    COA_ID(): string;
    COA_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    /**
     * Identifier of the $TMX assessment run ($TMX.RUN_ID).
     */
    TMX_RUN_ID(): string;
    TMX_RUN_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    /**
     * Evaluation timestamp, RFC 3339 UTC.
     */
    CREATED_UTC(): string;
    CREATED_UTC(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    /**
     * Primary threat or compound event answered by this COA.
     */
    THREAT_REF(obj?: DCOThreatRef): DCOThreatRef | null;
    /**
     * Specific defensive action modeled in this evaluation.
     */
    ACTION_KIND(): dcoActionKind;
    /**
     * NORAD catalog number of the defended object (0 when GROUP_ID is used).
     */
    NORAD_CAT_ID(): number;
    /**
     * Entity group identifier ($EGP.GROUP_ID) when the COA applies to a group.
     */
    GROUP_ID(): string | null;
    GROUP_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Computed maneuver delta-v cost in m/s.
     */
    DELTA_V_MPS(): number;
    /**
     * Computed propellant mass consumed in kg.
     */
    PROPELLANT_KG(): number;
    /**
     * Estimated mission life impact in days.
     */
    MISSION_LIFE_DAYS(): number;
    /**
     * Service or payload outage duration in hours.
     */
    OUTAGE_HOURS(): number;
    /**
     * Constellation or regional coverage impact in percent.
     */
    COVERAGE_IMPACT_PCT(): number;
    /**
     * RF link margin gain achieved in dB.
     */
    MARGIN_GAIN_DB(): number;
    /**
     * Threat exposure time reduced in minutes.
     */
    EXPOSURE_REDUCED_MIN(): number;
    /**
     * Baseline severity score before the COA in basis points (0..10000).
     */
    BASELINE_SCORE(): number;
    /**
     * Residual severity score after applying the COA in basis points (0..10000).
     */
    RESIDUAL_SCORE(): number;
    /**
     * Residual severity tier after applying the COA.
     */
    RESIDUAL_TIER(): dcoSeverityLevel;
    /**
     * Identifiers of other $COA records that conflict with this action.
     */
    CONFLICTS_WITH_COA_IDS(index: number): string;
    CONFLICTS_WITH_COA_IDS(index: number, optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    conflictsWithCoaIdsLength(): number;
    /**
     * Secondary threats introduced by this action (e.g. post-maneuver conjunction or drag).
     */
    SECONDARY_THREATS_INTRODUCED(index: number, obj?: DCOThreatRef): DCOThreatRef | null;
    secondaryThreatsIntroducedLength(): number;
    /**
     * True once full multi-phenomenology conflict re-screening has been executed.
     */
    RECHECKED(): boolean;
    /**
     * Outcome status of the multi-phenomenology conflict re-screen.
     */
    RECHECK_STATUS(): dcoRecheckOutcome;
    /**
     * Human-readable diagnostics from conflict re-screening.
     */
    RECHECK_NOTES(): string | null;
    RECHECK_NOTES(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Per-metric module provenance attributions.
     */
    ATTRIBUTIONS(index: number, obj?: DCOModuleAttribution): DCOModuleAttribution | null;
    attributionsLength(): number;
    static startDCO(builder: flatbuffers.Builder): void;
    static addDcoId(builder: flatbuffers.Builder, DCO_IDOffset: flatbuffers.Offset): void;
    static addCoaId(builder: flatbuffers.Builder, COA_IDOffset: flatbuffers.Offset): void;
    static addTmxRunId(builder: flatbuffers.Builder, TMX_RUN_IDOffset: flatbuffers.Offset): void;
    static addCreatedUtc(builder: flatbuffers.Builder, CREATED_UTCOffset: flatbuffers.Offset): void;
    static addThreatRef(builder: flatbuffers.Builder, THREAT_REFOffset: flatbuffers.Offset): void;
    static addActionKind(builder: flatbuffers.Builder, ACTION_KIND: dcoActionKind): void;
    static addNoradCatId(builder: flatbuffers.Builder, NORAD_CAT_ID: number): void;
    static addGroupId(builder: flatbuffers.Builder, GROUP_IDOffset: flatbuffers.Offset): void;
    static addDeltaVMps(builder: flatbuffers.Builder, DELTA_V_MPS: number): void;
    static addPropellantKg(builder: flatbuffers.Builder, PROPELLANT_KG: number): void;
    static addMissionLifeDays(builder: flatbuffers.Builder, MISSION_LIFE_DAYS: number): void;
    static addOutageHours(builder: flatbuffers.Builder, OUTAGE_HOURS: number): void;
    static addCoverageImpactPct(builder: flatbuffers.Builder, COVERAGE_IMPACT_PCT: number): void;
    static addMarginGainDb(builder: flatbuffers.Builder, MARGIN_GAIN_DB: number): void;
    static addExposureReducedMin(builder: flatbuffers.Builder, EXPOSURE_REDUCED_MIN: number): void;
    static addBaselineScore(builder: flatbuffers.Builder, BASELINE_SCORE: number): void;
    static addResidualScore(builder: flatbuffers.Builder, RESIDUAL_SCORE: number): void;
    static addResidualTier(builder: flatbuffers.Builder, RESIDUAL_TIER: dcoSeverityLevel): void;
    static addConflictsWithCoaIds(builder: flatbuffers.Builder, CONFLICTS_WITH_COA_IDSOffset: flatbuffers.Offset): void;
    static createConflictsWithCoaIdsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startConflictsWithCoaIdsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addSecondaryThreatsIntroduced(builder: flatbuffers.Builder, SECONDARY_THREATS_INTRODUCEDOffset: flatbuffers.Offset): void;
    static createSecondaryThreatsIntroducedVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startSecondaryThreatsIntroducedVector(builder: flatbuffers.Builder, numElems: number): void;
    static addRechecked(builder: flatbuffers.Builder, RECHECKED: boolean): void;
    static addRecheckStatus(builder: flatbuffers.Builder, RECHECK_STATUS: dcoRecheckOutcome): void;
    static addRecheckNotes(builder: flatbuffers.Builder, RECHECK_NOTESOffset: flatbuffers.Offset): void;
    static addAttributions(builder: flatbuffers.Builder, ATTRIBUTIONSOffset: flatbuffers.Offset): void;
    static createAttributionsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startAttributionsVector(builder: flatbuffers.Builder, numElems: number): void;
    static endDCO(builder: flatbuffers.Builder): flatbuffers.Offset;
    static finishDCOBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static finishSizePrefixedDCOBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    unpack(): DCOT;
    unpackTo(_o: DCOT): void;
}
export declare class DCOT implements flatbuffers.IGeneratedObject {
    DCO_ID: string | Uint8Array | null;
    COA_ID: string | Uint8Array | null;
    TMX_RUN_ID: string | Uint8Array | null;
    CREATED_UTC: string | Uint8Array | null;
    THREAT_REF: DCOThreatRefT | null;
    ACTION_KIND: dcoActionKind;
    NORAD_CAT_ID: number;
    GROUP_ID: string | Uint8Array | null;
    DELTA_V_MPS: number;
    PROPELLANT_KG: number;
    MISSION_LIFE_DAYS: number;
    OUTAGE_HOURS: number;
    COVERAGE_IMPACT_PCT: number;
    MARGIN_GAIN_DB: number;
    EXPOSURE_REDUCED_MIN: number;
    BASELINE_SCORE: number;
    RESIDUAL_SCORE: number;
    RESIDUAL_TIER: dcoSeverityLevel;
    CONFLICTS_WITH_COA_IDS: (string)[];
    SECONDARY_THREATS_INTRODUCED: (DCOThreatRefT)[];
    RECHECKED: boolean;
    RECHECK_STATUS: dcoRecheckOutcome;
    RECHECK_NOTES: string | Uint8Array | null;
    ATTRIBUTIONS: (DCOModuleAttributionT)[];
    constructor(DCO_ID?: string | Uint8Array | null, COA_ID?: string | Uint8Array | null, TMX_RUN_ID?: string | Uint8Array | null, CREATED_UTC?: string | Uint8Array | null, THREAT_REF?: DCOThreatRefT | null, ACTION_KIND?: dcoActionKind, NORAD_CAT_ID?: number, GROUP_ID?: string | Uint8Array | null, DELTA_V_MPS?: number, PROPELLANT_KG?: number, MISSION_LIFE_DAYS?: number, OUTAGE_HOURS?: number, COVERAGE_IMPACT_PCT?: number, MARGIN_GAIN_DB?: number, EXPOSURE_REDUCED_MIN?: number, BASELINE_SCORE?: number, RESIDUAL_SCORE?: number, RESIDUAL_TIER?: dcoSeverityLevel, CONFLICTS_WITH_COA_IDS?: (string)[], SECONDARY_THREATS_INTRODUCED?: (DCOThreatRefT)[], RECHECKED?: boolean, RECHECK_STATUS?: dcoRecheckOutcome, RECHECK_NOTES?: string | Uint8Array | null, ATTRIBUTIONS?: (DCOModuleAttributionT)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=DCO.d.ts.map