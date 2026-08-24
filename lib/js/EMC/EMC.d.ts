import * as flatbuffers from 'flatbuffers';
import { EMCEndpointRef, EMCEndpointRefT } from './EMCEndpointRef.js';
import { EMCIntermodulationTerm, EMCIntermodulationTermT } from './EMCIntermodulationTerm.js';
import { RFLProvenance, RFLProvenanceT } from './RFLProvenance.js';
import { emcCouplingPath } from './emcCouplingPath.js';
import { emcMechanismCategory } from './emcMechanismCategory.js';
import { emcResolutionState } from './emcResolutionState.js';
import { rfsMaterialClass } from './rfsMaterialClass.js';
/**
 * Electromagnetic Compatibility Assessment
 */
export declare class EMC implements flatbuffers.IUnpackableObject<EMCT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): EMC;
    static getRootAsEMC(bb: flatbuffers.ByteBuffer, obj?: EMC): EMC;
    static getSizePrefixedRootAsEMC(bb: flatbuffers.ByteBuffer, obj?: EMC): EMC;
    static bufferHasIdentifier(bb: flatbuffers.ByteBuffer): boolean;
    EMC_ID(): string;
    EMC_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    NAME(): string | null;
    NAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    SCENARIO_ID(): string | null;
    SCENARIO_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    RFL_ID(): string | null;
    RFL_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    VICTIM_ENDPOINT(obj?: EMCEndpointRef): EMCEndpointRef | null;
    AGGRESSOR_ENDPOINT(obj?: EMCEndpointRef): EMCEndpointRef | null;
    COUPLING_MECHANISM(): emcCouplingPath;
    MECHANISM_CLASS(): emcMechanismCategory;
    /**
     * Order of the active or passive intermodulation product. 0 when the
     * mechanism is not intermodulation.
     */
    INTERMODULATION_ORDER(): number;
    INTERMODULATION_TERMS(index: number, obj?: EMCIntermodulationTerm): EMCIntermodulationTerm | null;
    intermodulationTermsLength(): number;
    INTERMODULATION_PRODUCT_FREQUENCY_HZ(): number;
    HARMONIC_ORDER(): number;
    /**
     * RFEEmissionMask.MASK_ID used for an emission-limit comparison.
     */
    EMISSION_MASK_ID(): string | null;
    EMISSION_MASK_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * `$RFS.MATERIAL_ID` and class used for structural coupling.
     */
    RFS_MATERIAL_ID(): string | null;
    RFS_MATERIAL_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    RFS_MATERIAL_CLASS(): rfsMaterialClass;
    ISOLATION_DB(): number;
    COUPLED_POWER_DBW(): number;
    VICTIM_LIMIT_DBW(): number;
    MARGIN_DB(): number;
    /**
     * Positive when the victim limit is exceeded.
     */
    EXCEEDANCE_DB(): number;
    EXCEEDS_LIMIT(): boolean;
    RESOLUTION(): emcResolutionState;
    RESOLUTION_NOTE(): string | null;
    RESOLUTION_NOTE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
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
    static startEMC(builder: flatbuffers.Builder): void;
    static addEmcId(builder: flatbuffers.Builder, EMC_IDOffset: flatbuffers.Offset): void;
    static addName(builder: flatbuffers.Builder, NAMEOffset: flatbuffers.Offset): void;
    static addScenarioId(builder: flatbuffers.Builder, SCENARIO_IDOffset: flatbuffers.Offset): void;
    static addRflId(builder: flatbuffers.Builder, RFL_IDOffset: flatbuffers.Offset): void;
    static addVictimEndpoint(builder: flatbuffers.Builder, VICTIM_ENDPOINTOffset: flatbuffers.Offset): void;
    static addAggressorEndpoint(builder: flatbuffers.Builder, AGGRESSOR_ENDPOINTOffset: flatbuffers.Offset): void;
    static addCouplingMechanism(builder: flatbuffers.Builder, COUPLING_MECHANISM: emcCouplingPath): void;
    static addMechanismClass(builder: flatbuffers.Builder, MECHANISM_CLASS: emcMechanismCategory): void;
    static addIntermodulationOrder(builder: flatbuffers.Builder, INTERMODULATION_ORDER: number): void;
    static addIntermodulationTerms(builder: flatbuffers.Builder, INTERMODULATION_TERMSOffset: flatbuffers.Offset): void;
    static createIntermodulationTermsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startIntermodulationTermsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addIntermodulationProductFrequencyHz(builder: flatbuffers.Builder, INTERMODULATION_PRODUCT_FREQUENCY_HZ: number): void;
    static addHarmonicOrder(builder: flatbuffers.Builder, HARMONIC_ORDER: number): void;
    static addEmissionMaskId(builder: flatbuffers.Builder, EMISSION_MASK_IDOffset: flatbuffers.Offset): void;
    static addRfsMaterialId(builder: flatbuffers.Builder, RFS_MATERIAL_IDOffset: flatbuffers.Offset): void;
    static addRfsMaterialClass(builder: flatbuffers.Builder, RFS_MATERIAL_CLASS: rfsMaterialClass): void;
    static addIsolationDb(builder: flatbuffers.Builder, ISOLATION_DB: number): void;
    static addCoupledPowerDbw(builder: flatbuffers.Builder, COUPLED_POWER_DBW: number): void;
    static addVictimLimitDbw(builder: flatbuffers.Builder, VICTIM_LIMIT_DBW: number): void;
    static addMarginDb(builder: flatbuffers.Builder, MARGIN_DB: number): void;
    static addExceedanceDb(builder: flatbuffers.Builder, EXCEEDANCE_DB: number): void;
    static addExceedsLimit(builder: flatbuffers.Builder, EXCEEDS_LIMIT: boolean): void;
    static addResolution(builder: flatbuffers.Builder, RESOLUTION: emcResolutionState): void;
    static addResolutionNote(builder: flatbuffers.Builder, RESOLUTION_NOTEOffset: flatbuffers.Offset): void;
    static addProvenance(builder: flatbuffers.Builder, PROVENANCEOffset: flatbuffers.Offset): void;
    static addComputedAt(builder: flatbuffers.Builder, COMPUTED_AT: bigint): void;
    static addProducerId(builder: flatbuffers.Builder, PRODUCER_IDOffset: flatbuffers.Offset): void;
    static addSignature(builder: flatbuffers.Builder, SIGNATUREOffset: flatbuffers.Offset): void;
    static createSignatureVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startSignatureVector(builder: flatbuffers.Builder, numElems: number): void;
    static addCanonicalJsonSignature(builder: flatbuffers.Builder, CANONICAL_JSON_SIGNATUREOffset: flatbuffers.Offset): void;
    static createCanonicalJsonSignatureVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startCanonicalJsonSignatureVector(builder: flatbuffers.Builder, numElems: number): void;
    static endEMC(builder: flatbuffers.Builder): flatbuffers.Offset;
    static finishEMCBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static finishSizePrefixedEMCBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    unpack(): EMCT;
    unpackTo(_o: EMCT): void;
}
export declare class EMCT implements flatbuffers.IGeneratedObject {
    EMC_ID: string | Uint8Array | null;
    NAME: string | Uint8Array | null;
    SCENARIO_ID: string | Uint8Array | null;
    RFL_ID: string | Uint8Array | null;
    VICTIM_ENDPOINT: EMCEndpointRefT | null;
    AGGRESSOR_ENDPOINT: EMCEndpointRefT | null;
    COUPLING_MECHANISM: emcCouplingPath;
    MECHANISM_CLASS: emcMechanismCategory;
    INTERMODULATION_ORDER: number;
    INTERMODULATION_TERMS: (EMCIntermodulationTermT)[];
    INTERMODULATION_PRODUCT_FREQUENCY_HZ: number;
    HARMONIC_ORDER: number;
    EMISSION_MASK_ID: string | Uint8Array | null;
    RFS_MATERIAL_ID: string | Uint8Array | null;
    RFS_MATERIAL_CLASS: rfsMaterialClass;
    ISOLATION_DB: number;
    COUPLED_POWER_DBW: number;
    VICTIM_LIMIT_DBW: number;
    MARGIN_DB: number;
    EXCEEDANCE_DB: number;
    EXCEEDS_LIMIT: boolean;
    RESOLUTION: emcResolutionState;
    RESOLUTION_NOTE: string | Uint8Array | null;
    PROVENANCE: RFLProvenanceT | null;
    COMPUTED_AT: bigint;
    PRODUCER_ID: string | Uint8Array | null;
    SIGNATURE: (number)[];
    CANONICAL_JSON_SIGNATURE: (number)[];
    constructor(EMC_ID?: string | Uint8Array | null, NAME?: string | Uint8Array | null, SCENARIO_ID?: string | Uint8Array | null, RFL_ID?: string | Uint8Array | null, VICTIM_ENDPOINT?: EMCEndpointRefT | null, AGGRESSOR_ENDPOINT?: EMCEndpointRefT | null, COUPLING_MECHANISM?: emcCouplingPath, MECHANISM_CLASS?: emcMechanismCategory, INTERMODULATION_ORDER?: number, INTERMODULATION_TERMS?: (EMCIntermodulationTermT)[], INTERMODULATION_PRODUCT_FREQUENCY_HZ?: number, HARMONIC_ORDER?: number, EMISSION_MASK_ID?: string | Uint8Array | null, RFS_MATERIAL_ID?: string | Uint8Array | null, RFS_MATERIAL_CLASS?: rfsMaterialClass, ISOLATION_DB?: number, COUPLED_POWER_DBW?: number, VICTIM_LIMIT_DBW?: number, MARGIN_DB?: number, EXCEEDANCE_DB?: number, EXCEEDS_LIMIT?: boolean, RESOLUTION?: emcResolutionState, RESOLUTION_NOTE?: string | Uint8Array | null, PROVENANCE?: RFLProvenanceT | null, COMPUTED_AT?: bigint, PRODUCER_ID?: string | Uint8Array | null, SIGNATURE?: (number)[], CANONICAL_JSON_SIGNATURE?: (number)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=EMC.d.ts.map