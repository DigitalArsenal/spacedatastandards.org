import * as flatbuffers from 'flatbuffers';
import { RFLProvenance, RFLProvenanceT } from './RFLProvenance.js';
import { rsdIntegrationStrategy } from './rsdIntegrationStrategy.js';
import { rsdTargetFluctuation } from './rsdTargetFluctuation.js';
import { rsdThresholdStrategy } from './rsdThresholdStrategy.js';
import { rsdWaveformClass } from './rsdWaveformClass.js';
/**
 * Radar Sensitivity and Detection Performance
 */
export declare class RSD implements flatbuffers.IUnpackableObject<RSDT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): RSD;
    static getRootAsRSD(bb: flatbuffers.ByteBuffer, obj?: RSD): RSD;
    static getSizePrefixedRootAsRSD(bb: flatbuffers.ByteBuffer, obj?: RSD): RSD;
    static bufferHasIdentifier(bb: flatbuffers.ByteBuffer): boolean;
    RSD_ID(): string;
    RSD_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    NAME(): string | null;
    NAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    SCENARIO_ID(): string | null;
    SCENARIO_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    SENSOR_ID(): string | null;
    SENSOR_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    SNR_ID(): string | null;
    SNR_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    SDR_ID(): string | null;
    SDR_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * `$APL.APL_ID` supplying the propagation-loss statistics.
     */
    APL_ID(): string | null;
    APL_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    WAVEFORM(): rsdWaveformClass;
    INTEGRATION(): rsdIntegrationStrategy;
    CFAR(): rsdThresholdStrategy;
    TARGET_MODEL(): rsdTargetFluctuation;
    PULSE_COUNT(): number;
    CFAR_REFERENCE_CELL_COUNT(): number;
    CFAR_GUARD_CELL_COUNT(): number;
    CFAR_LOSS_DB(): number;
    TARGET_RCS_M2(): number;
    FALSE_ALARM_PROBABILITY_REQUIREMENT(): number;
    DETECTION_PROBABILITY_REQUIREMENT(): number;
    /**
     * Parallel detection-performance curve arrays.
     */
    RANGE_M(index: number): number | null;
    rangeMLength(): number;
    rangeMArray(): Float64Array;
    DETECTION_PROBABILITY(index: number): number | null;
    detectionProbabilityLength(): number;
    detectionProbabilityArray(): Float64Array;
    FALSE_ALARM_PROBABILITY(index: number): number | null;
    falseAlarmProbabilityLength(): number;
    falseAlarmProbabilityArray(): Float64Array;
    SNR_DB(index: number): number | null;
    snrDbLength(): number;
    snrDbArray(): Float64Array;
    MAXIMUM_DETECTION_RANGE_M(): number;
    MINIMUM_DETECTABLE_RCS_M2(): number;
    RANGE_AT_PD_0P5_M(): number;
    RANGE_AT_PD_0P9_M(): number;
    CLUTTER_TO_NOISE_DB(): number;
    PROPAGATION_LOSS_DB(): number;
    JAMMING_TO_SIGNAL_DB(): number;
    BURN_THROUGH_RANGE_M(): number;
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
    static startRSD(builder: flatbuffers.Builder): void;
    static addRsdId(builder: flatbuffers.Builder, RSD_IDOffset: flatbuffers.Offset): void;
    static addName(builder: flatbuffers.Builder, NAMEOffset: flatbuffers.Offset): void;
    static addScenarioId(builder: flatbuffers.Builder, SCENARIO_IDOffset: flatbuffers.Offset): void;
    static addSensorId(builder: flatbuffers.Builder, SENSOR_IDOffset: flatbuffers.Offset): void;
    static addSnrId(builder: flatbuffers.Builder, SNR_IDOffset: flatbuffers.Offset): void;
    static addSdrId(builder: flatbuffers.Builder, SDR_IDOffset: flatbuffers.Offset): void;
    static addAplId(builder: flatbuffers.Builder, APL_IDOffset: flatbuffers.Offset): void;
    static addWaveform(builder: flatbuffers.Builder, WAVEFORM: rsdWaveformClass): void;
    static addIntegration(builder: flatbuffers.Builder, INTEGRATION: rsdIntegrationStrategy): void;
    static addCfar(builder: flatbuffers.Builder, CFAR: rsdThresholdStrategy): void;
    static addTargetModel(builder: flatbuffers.Builder, TARGET_MODEL: rsdTargetFluctuation): void;
    static addPulseCount(builder: flatbuffers.Builder, PULSE_COUNT: number): void;
    static addCfarReferenceCellCount(builder: flatbuffers.Builder, CFAR_REFERENCE_CELL_COUNT: number): void;
    static addCfarGuardCellCount(builder: flatbuffers.Builder, CFAR_GUARD_CELL_COUNT: number): void;
    static addCfarLossDb(builder: flatbuffers.Builder, CFAR_LOSS_DB: number): void;
    static addTargetRcsM2(builder: flatbuffers.Builder, TARGET_RCS_M2: number): void;
    static addFalseAlarmProbabilityRequirement(builder: flatbuffers.Builder, FALSE_ALARM_PROBABILITY_REQUIREMENT: number): void;
    static addDetectionProbabilityRequirement(builder: flatbuffers.Builder, DETECTION_PROBABILITY_REQUIREMENT: number): void;
    static addRangeM(builder: flatbuffers.Builder, RANGE_MOffset: flatbuffers.Offset): void;
    static createRangeMVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createRangeMVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startRangeMVector(builder: flatbuffers.Builder, numElems: number): void;
    static addDetectionProbability(builder: flatbuffers.Builder, DETECTION_PROBABILITYOffset: flatbuffers.Offset): void;
    static createDetectionProbabilityVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createDetectionProbabilityVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startDetectionProbabilityVector(builder: flatbuffers.Builder, numElems: number): void;
    static addFalseAlarmProbability(builder: flatbuffers.Builder, FALSE_ALARM_PROBABILITYOffset: flatbuffers.Offset): void;
    static createFalseAlarmProbabilityVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createFalseAlarmProbabilityVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startFalseAlarmProbabilityVector(builder: flatbuffers.Builder, numElems: number): void;
    static addSnrDb(builder: flatbuffers.Builder, SNR_DBOffset: flatbuffers.Offset): void;
    static createSnrDbVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createSnrDbVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startSnrDbVector(builder: flatbuffers.Builder, numElems: number): void;
    static addMaximumDetectionRangeM(builder: flatbuffers.Builder, MAXIMUM_DETECTION_RANGE_M: number): void;
    static addMinimumDetectableRcsM2(builder: flatbuffers.Builder, MINIMUM_DETECTABLE_RCS_M2: number): void;
    static addRangeAtPd0P5M(builder: flatbuffers.Builder, RANGE_AT_PD_0P5_M: number): void;
    static addRangeAtPd0P9M(builder: flatbuffers.Builder, RANGE_AT_PD_0P9_M: number): void;
    static addClutterToNoiseDb(builder: flatbuffers.Builder, CLUTTER_TO_NOISE_DB: number): void;
    static addPropagationLossDb(builder: flatbuffers.Builder, PROPAGATION_LOSS_DB: number): void;
    static addJammingToSignalDb(builder: flatbuffers.Builder, JAMMING_TO_SIGNAL_DB: number): void;
    static addBurnThroughRangeM(builder: flatbuffers.Builder, BURN_THROUGH_RANGE_M: number): void;
    static addProvenance(builder: flatbuffers.Builder, PROVENANCEOffset: flatbuffers.Offset): void;
    static addComputedAt(builder: flatbuffers.Builder, COMPUTED_AT: bigint): void;
    static addProducerId(builder: flatbuffers.Builder, PRODUCER_IDOffset: flatbuffers.Offset): void;
    static addSignature(builder: flatbuffers.Builder, SIGNATUREOffset: flatbuffers.Offset): void;
    static createSignatureVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startSignatureVector(builder: flatbuffers.Builder, numElems: number): void;
    static addCanonicalJsonSignature(builder: flatbuffers.Builder, CANONICAL_JSON_SIGNATUREOffset: flatbuffers.Offset): void;
    static createCanonicalJsonSignatureVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startCanonicalJsonSignatureVector(builder: flatbuffers.Builder, numElems: number): void;
    static endRSD(builder: flatbuffers.Builder): flatbuffers.Offset;
    static finishRSDBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static finishSizePrefixedRSDBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    unpack(): RSDT;
    unpackTo(_o: RSDT): void;
}
export declare class RSDT implements flatbuffers.IGeneratedObject {
    RSD_ID: string | Uint8Array | null;
    NAME: string | Uint8Array | null;
    SCENARIO_ID: string | Uint8Array | null;
    SENSOR_ID: string | Uint8Array | null;
    SNR_ID: string | Uint8Array | null;
    SDR_ID: string | Uint8Array | null;
    APL_ID: string | Uint8Array | null;
    WAVEFORM: rsdWaveformClass;
    INTEGRATION: rsdIntegrationStrategy;
    CFAR: rsdThresholdStrategy;
    TARGET_MODEL: rsdTargetFluctuation;
    PULSE_COUNT: number;
    CFAR_REFERENCE_CELL_COUNT: number;
    CFAR_GUARD_CELL_COUNT: number;
    CFAR_LOSS_DB: number;
    TARGET_RCS_M2: number;
    FALSE_ALARM_PROBABILITY_REQUIREMENT: number;
    DETECTION_PROBABILITY_REQUIREMENT: number;
    RANGE_M: (number)[];
    DETECTION_PROBABILITY: (number)[];
    FALSE_ALARM_PROBABILITY: (number)[];
    SNR_DB: (number)[];
    MAXIMUM_DETECTION_RANGE_M: number;
    MINIMUM_DETECTABLE_RCS_M2: number;
    RANGE_AT_PD_0P5_M: number;
    RANGE_AT_PD_0P9_M: number;
    CLUTTER_TO_NOISE_DB: number;
    PROPAGATION_LOSS_DB: number;
    JAMMING_TO_SIGNAL_DB: number;
    BURN_THROUGH_RANGE_M: number;
    PROVENANCE: RFLProvenanceT | null;
    COMPUTED_AT: bigint;
    PRODUCER_ID: string | Uint8Array | null;
    SIGNATURE: (number)[];
    CANONICAL_JSON_SIGNATURE: (number)[];
    constructor(RSD_ID?: string | Uint8Array | null, NAME?: string | Uint8Array | null, SCENARIO_ID?: string | Uint8Array | null, SENSOR_ID?: string | Uint8Array | null, SNR_ID?: string | Uint8Array | null, SDR_ID?: string | Uint8Array | null, APL_ID?: string | Uint8Array | null, WAVEFORM?: rsdWaveformClass, INTEGRATION?: rsdIntegrationStrategy, CFAR?: rsdThresholdStrategy, TARGET_MODEL?: rsdTargetFluctuation, PULSE_COUNT?: number, CFAR_REFERENCE_CELL_COUNT?: number, CFAR_GUARD_CELL_COUNT?: number, CFAR_LOSS_DB?: number, TARGET_RCS_M2?: number, FALSE_ALARM_PROBABILITY_REQUIREMENT?: number, DETECTION_PROBABILITY_REQUIREMENT?: number, RANGE_M?: (number)[], DETECTION_PROBABILITY?: (number)[], FALSE_ALARM_PROBABILITY?: (number)[], SNR_DB?: (number)[], MAXIMUM_DETECTION_RANGE_M?: number, MINIMUM_DETECTABLE_RCS_M2?: number, RANGE_AT_PD_0P5_M?: number, RANGE_AT_PD_0P9_M?: number, CLUTTER_TO_NOISE_DB?: number, PROPAGATION_LOSS_DB?: number, JAMMING_TO_SIGNAL_DB?: number, BURN_THROUGH_RANGE_M?: number, PROVENANCE?: RFLProvenanceT | null, COMPUTED_AT?: bigint, PRODUCER_ID?: string | Uint8Array | null, SIGNATURE?: (number)[], CANONICAL_JSON_SIGNATURE?: (number)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=RSD.d.ts.map