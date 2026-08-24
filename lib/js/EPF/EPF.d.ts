import * as flatbuffers from 'flatbuffers';
import { EPFContributor, EPFContributorT } from './EPFContributor.js';
import { EPFVerdict, EPFVerdictT } from './EPFVerdict.js';
import { RFLProvenance, RFLProvenanceT } from './RFLProvenance.js';
import { epfLimitCategory } from './epfLimitCategory.js';
/**
 * Aggregate Interference and Flux-Density Compliance
 */
export declare class EPF implements flatbuffers.IUnpackableObject<EPFT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): EPF;
    static getRootAsEPF(bb: flatbuffers.ByteBuffer, obj?: EPF): EPF;
    static getSizePrefixedRootAsEPF(bb: flatbuffers.ByteBuffer, obj?: EPF): EPF;
    static bufferHasIdentifier(bb: flatbuffers.ByteBuffer): boolean;
    EPF_ID(): string;
    EPF_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    NAME(): string | null;
    NAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    SCENARIO_ID(): string | null;
    SCENARIO_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    RFL_ID(): string | null;
    RFL_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    ACI_ID(): string | null;
    ACI_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    VICTIM_ENDPOINT_ID(): string | null;
    VICTIM_ENDPOINT_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    LIMIT_KIND(): epfLimitCategory;
    LIMIT_MODEL_NAME(): string | null;
    LIMIT_MODEL_NAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    VALUE_UNITS(): string;
    VALUE_UNITS(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    SAMPLE_COUNT(): number;
    SAMPLE_EPOCHS(index: number): number | null;
    sampleEpochsLength(): number;
    sampleEpochsArray(): Float64Array;
    SAMPLE_VALUES(index: number): number | null;
    sampleValuesLength(): number;
    sampleValuesArray(): Float64Array;
    SAMPLE_LIMIT_VALUES(index: number): number | null;
    sampleLimitValuesLength(): number;
    sampleLimitValuesArray(): Float64Array;
    /**
     * Positive means the sample complies with its limit.
     */
    SAMPLE_MARGIN_DB(index: number): number | null;
    sampleMarginDbLength(): number;
    sampleMarginDbArray(): Float64Array;
    SAMPLE_EXCEEDS_LIMIT(index: number): boolean | null;
    sampleExceedsLimitLength(): number;
    sampleExceedsLimitArray(): Int8Array;
    CONTRIBUTORS(index: number, obj?: EPFContributor): EPFContributor | null;
    contributorsLength(): number;
    /**
     * Empirical distribution values and their percent-time exceedance. Arrays
     * are index-aligned and ordered as stated by provenance.
     */
    CDF_VALUES(index: number): number | null;
    cdfValuesLength(): number;
    cdfValuesArray(): Float64Array;
    CDF_PERCENT_TIME_EXCEEDED(index: number): number | null;
    cdfPercentTimeExceededLength(): number;
    cdfPercentTimeExceededArray(): Float64Array;
    VERDICT(obj?: EPFVerdict): EPFVerdict | null;
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
    static startEPF(builder: flatbuffers.Builder): void;
    static addEpfId(builder: flatbuffers.Builder, EPF_IDOffset: flatbuffers.Offset): void;
    static addName(builder: flatbuffers.Builder, NAMEOffset: flatbuffers.Offset): void;
    static addScenarioId(builder: flatbuffers.Builder, SCENARIO_IDOffset: flatbuffers.Offset): void;
    static addRflId(builder: flatbuffers.Builder, RFL_IDOffset: flatbuffers.Offset): void;
    static addAciId(builder: flatbuffers.Builder, ACI_IDOffset: flatbuffers.Offset): void;
    static addVictimEndpointId(builder: flatbuffers.Builder, VICTIM_ENDPOINT_IDOffset: flatbuffers.Offset): void;
    static addLimitKind(builder: flatbuffers.Builder, LIMIT_KIND: epfLimitCategory): void;
    static addLimitModelName(builder: flatbuffers.Builder, LIMIT_MODEL_NAMEOffset: flatbuffers.Offset): void;
    static addValueUnits(builder: flatbuffers.Builder, VALUE_UNITSOffset: flatbuffers.Offset): void;
    static addSampleCount(builder: flatbuffers.Builder, SAMPLE_COUNT: number): void;
    static addSampleEpochs(builder: flatbuffers.Builder, SAMPLE_EPOCHSOffset: flatbuffers.Offset): void;
    static createSampleEpochsVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createSampleEpochsVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startSampleEpochsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addSampleValues(builder: flatbuffers.Builder, SAMPLE_VALUESOffset: flatbuffers.Offset): void;
    static createSampleValuesVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createSampleValuesVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startSampleValuesVector(builder: flatbuffers.Builder, numElems: number): void;
    static addSampleLimitValues(builder: flatbuffers.Builder, SAMPLE_LIMIT_VALUESOffset: flatbuffers.Offset): void;
    static createSampleLimitValuesVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createSampleLimitValuesVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startSampleLimitValuesVector(builder: flatbuffers.Builder, numElems: number): void;
    static addSampleMarginDb(builder: flatbuffers.Builder, SAMPLE_MARGIN_DBOffset: flatbuffers.Offset): void;
    static createSampleMarginDbVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createSampleMarginDbVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startSampleMarginDbVector(builder: flatbuffers.Builder, numElems: number): void;
    static addSampleExceedsLimit(builder: flatbuffers.Builder, SAMPLE_EXCEEDS_LIMITOffset: flatbuffers.Offset): void;
    static createSampleExceedsLimitVector(builder: flatbuffers.Builder, data: boolean[]): flatbuffers.Offset;
    static startSampleExceedsLimitVector(builder: flatbuffers.Builder, numElems: number): void;
    static addContributors(builder: flatbuffers.Builder, CONTRIBUTORSOffset: flatbuffers.Offset): void;
    static createContributorsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startContributorsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addCdfValues(builder: flatbuffers.Builder, CDF_VALUESOffset: flatbuffers.Offset): void;
    static createCdfValuesVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createCdfValuesVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startCdfValuesVector(builder: flatbuffers.Builder, numElems: number): void;
    static addCdfPercentTimeExceeded(builder: flatbuffers.Builder, CDF_PERCENT_TIME_EXCEEDEDOffset: flatbuffers.Offset): void;
    static createCdfPercentTimeExceededVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createCdfPercentTimeExceededVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startCdfPercentTimeExceededVector(builder: flatbuffers.Builder, numElems: number): void;
    static addVerdict(builder: flatbuffers.Builder, VERDICTOffset: flatbuffers.Offset): void;
    static addProvenance(builder: flatbuffers.Builder, PROVENANCEOffset: flatbuffers.Offset): void;
    static addComputedAt(builder: flatbuffers.Builder, COMPUTED_AT: bigint): void;
    static addProducerId(builder: flatbuffers.Builder, PRODUCER_IDOffset: flatbuffers.Offset): void;
    static addSignature(builder: flatbuffers.Builder, SIGNATUREOffset: flatbuffers.Offset): void;
    static createSignatureVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startSignatureVector(builder: flatbuffers.Builder, numElems: number): void;
    static addCanonicalJsonSignature(builder: flatbuffers.Builder, CANONICAL_JSON_SIGNATUREOffset: flatbuffers.Offset): void;
    static createCanonicalJsonSignatureVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startCanonicalJsonSignatureVector(builder: flatbuffers.Builder, numElems: number): void;
    static endEPF(builder: flatbuffers.Builder): flatbuffers.Offset;
    static finishEPFBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static finishSizePrefixedEPFBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    unpack(): EPFT;
    unpackTo(_o: EPFT): void;
}
export declare class EPFT implements flatbuffers.IGeneratedObject {
    EPF_ID: string | Uint8Array | null;
    NAME: string | Uint8Array | null;
    SCENARIO_ID: string | Uint8Array | null;
    RFL_ID: string | Uint8Array | null;
    ACI_ID: string | Uint8Array | null;
    VICTIM_ENDPOINT_ID: string | Uint8Array | null;
    LIMIT_KIND: epfLimitCategory;
    LIMIT_MODEL_NAME: string | Uint8Array | null;
    VALUE_UNITS: string | Uint8Array | null;
    SAMPLE_COUNT: number;
    SAMPLE_EPOCHS: (number)[];
    SAMPLE_VALUES: (number)[];
    SAMPLE_LIMIT_VALUES: (number)[];
    SAMPLE_MARGIN_DB: (number)[];
    SAMPLE_EXCEEDS_LIMIT: (boolean)[];
    CONTRIBUTORS: (EPFContributorT)[];
    CDF_VALUES: (number)[];
    CDF_PERCENT_TIME_EXCEEDED: (number)[];
    VERDICT: EPFVerdictT | null;
    PROVENANCE: RFLProvenanceT | null;
    COMPUTED_AT: bigint;
    PRODUCER_ID: string | Uint8Array | null;
    SIGNATURE: (number)[];
    CANONICAL_JSON_SIGNATURE: (number)[];
    constructor(EPF_ID?: string | Uint8Array | null, NAME?: string | Uint8Array | null, SCENARIO_ID?: string | Uint8Array | null, RFL_ID?: string | Uint8Array | null, ACI_ID?: string | Uint8Array | null, VICTIM_ENDPOINT_ID?: string | Uint8Array | null, LIMIT_KIND?: epfLimitCategory, LIMIT_MODEL_NAME?: string | Uint8Array | null, VALUE_UNITS?: string | Uint8Array | null, SAMPLE_COUNT?: number, SAMPLE_EPOCHS?: (number)[], SAMPLE_VALUES?: (number)[], SAMPLE_LIMIT_VALUES?: (number)[], SAMPLE_MARGIN_DB?: (number)[], SAMPLE_EXCEEDS_LIMIT?: (boolean)[], CONTRIBUTORS?: (EPFContributorT)[], CDF_VALUES?: (number)[], CDF_PERCENT_TIME_EXCEEDED?: (number)[], VERDICT?: EPFVerdictT | null, PROVENANCE?: RFLProvenanceT | null, COMPUTED_AT?: bigint, PRODUCER_ID?: string | Uint8Array | null, SIGNATURE?: (number)[], CANONICAL_JSON_SIGNATURE?: (number)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=EPF.d.ts.map