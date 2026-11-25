import * as flatbuffers from 'flatbuffers';
import { tmxExecutionHostKind } from './tmxExecutionHostKind.js';
import { tmxPhenomenologyKind } from './tmxPhenomenologyKind.js';
import { tmxPropagatorKind } from './tmxPropagatorKind.js';
/**
 * Invocation request payload carried inside $PIV (PIVRequest.INPUTS) or local execution.
 */
export declare class TMXRequest implements flatbuffers.IUnpackableObject<TMXRequestT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): TMXRequest;
    static getRootAsTMXRequest(bb: flatbuffers.ByteBuffer, obj?: TMXRequest): TMXRequest;
    static getSizePrefixedRootAsTMXRequest(bb: flatbuffers.ByteBuffer, obj?: TMXRequest): TMXRequest;
    /**
     * Unique identifier of this matrix evaluation request.
     */
    REQUEST_ID(): string;
    REQUEST_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    /**
     * Target scope selector (e.g. constellation name, group, or "CUSTOM").
     */
    TARGET_SCOPE(): string;
    TARGET_SCOPE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    /**
     * Explicit NORAD catalog numbers requested for screening.
     */
    TARGET_NORAD_CAT_IDS(index: number): number | null;
    targetNoradCatIdsLength(): number;
    targetNoradCatIdsArray(): Uint32Array | null;
    /**
     * Entity group ($EGP) identifiers requested for screening.
     */
    GROUP_IDS(index: number): string;
    GROUP_IDS(index: number, optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    groupIdsLength(): number;
    /**
     * Catalog revision or snapshot identifier pinned for parity.
     */
    CATALOG_REVISION(): string | null;
    CATALOG_REVISION(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Inclusive analysis window start, RFC 3339 UTC.
     */
    WINDOW_START(): string;
    WINDOW_START(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    /**
     * Exclusive analysis window end, RFC 3339 UTC.
     */
    WINDOW_END(): string;
    WINDOW_END(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    /**
     * Selected propagator theory.
     */
    PROPAGATOR(): tmxPropagatorKind;
    /**
     * Canonical propagator module identifier (e.g. "propagator/sdn-ap").
     */
    PROPAGATOR_ID(): string | null;
    PROPAGATOR_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Target execution host kind.
     */
    EXECUTION_HOST(): tmxExecutionHostKind;
    /**
     * Subset of phenomenologies to evaluate; empty requests all 7.
     */
    PHENOMENOLOGIES_REQUESTED(index: number): tmxPhenomenologyKind | null;
    phenomenologiesRequestedLength(): number;
    phenomenologiesRequestedArray(): Int8Array | null;
    /**
     * Threat profile identifiers ($THP.THP_ID) to include.
     */
    THP_IDS(index: number): string;
    THP_IDS(index: number, optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    thpIdsLength(): number;
    /**
     * Content identifiers pinning exact $THP payloads.
     */
    THP_CIDS(index: number): string;
    THP_CIDS(index: number, optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    thpCidsLength(): number;
    /**
     * Named deterministic scoring profile identifier.
     */
    SCORING_PROFILE_ID(): string | null;
    SCORING_PROFILE_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * True to synthesize and attach defensive COAs alongside matrix output.
     */
    INCLUDE_COAS(): boolean;
    /**
     * Optional serialized parameter overrides for analyst what-if runs.
     */
    WHAT_IF_OVERRIDES_JSON(): string | null;
    WHAT_IF_OVERRIDES_JSON(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    static startTMXRequest(builder: flatbuffers.Builder): void;
    static addRequestId(builder: flatbuffers.Builder, REQUEST_IDOffset: flatbuffers.Offset): void;
    static addTargetScope(builder: flatbuffers.Builder, TARGET_SCOPEOffset: flatbuffers.Offset): void;
    static addTargetNoradCatIds(builder: flatbuffers.Builder, TARGET_NORAD_CAT_IDSOffset: flatbuffers.Offset): void;
    static createTargetNoradCatIdsVector(builder: flatbuffers.Builder, data: number[] | Uint32Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createTargetNoradCatIdsVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startTargetNoradCatIdsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addGroupIds(builder: flatbuffers.Builder, GROUP_IDSOffset: flatbuffers.Offset): void;
    static createGroupIdsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startGroupIdsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addCatalogRevision(builder: flatbuffers.Builder, CATALOG_REVISIONOffset: flatbuffers.Offset): void;
    static addWindowStart(builder: flatbuffers.Builder, WINDOW_STARTOffset: flatbuffers.Offset): void;
    static addWindowEnd(builder: flatbuffers.Builder, WINDOW_ENDOffset: flatbuffers.Offset): void;
    static addPropagator(builder: flatbuffers.Builder, PROPAGATOR: tmxPropagatorKind): void;
    static addPropagatorId(builder: flatbuffers.Builder, PROPAGATOR_IDOffset: flatbuffers.Offset): void;
    static addExecutionHost(builder: flatbuffers.Builder, EXECUTION_HOST: tmxExecutionHostKind): void;
    static addPhenomenologiesRequested(builder: flatbuffers.Builder, PHENOMENOLOGIES_REQUESTEDOffset: flatbuffers.Offset): void;
    static createPhenomenologiesRequestedVector(builder: flatbuffers.Builder, data: tmxPhenomenologyKind[]): flatbuffers.Offset;
    static startPhenomenologiesRequestedVector(builder: flatbuffers.Builder, numElems: number): void;
    static addThpIds(builder: flatbuffers.Builder, THP_IDSOffset: flatbuffers.Offset): void;
    static createThpIdsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startThpIdsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addThpCids(builder: flatbuffers.Builder, THP_CIDSOffset: flatbuffers.Offset): void;
    static createThpCidsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startThpCidsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addScoringProfileId(builder: flatbuffers.Builder, SCORING_PROFILE_IDOffset: flatbuffers.Offset): void;
    static addIncludeCoas(builder: flatbuffers.Builder, INCLUDE_COAS: boolean): void;
    static addWhatIfOverridesJson(builder: flatbuffers.Builder, WHAT_IF_OVERRIDES_JSONOffset: flatbuffers.Offset): void;
    static endTMXRequest(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createTMXRequest(builder: flatbuffers.Builder, REQUEST_IDOffset: flatbuffers.Offset, TARGET_SCOPEOffset: flatbuffers.Offset, TARGET_NORAD_CAT_IDSOffset: flatbuffers.Offset, GROUP_IDSOffset: flatbuffers.Offset, CATALOG_REVISIONOffset: flatbuffers.Offset, WINDOW_STARTOffset: flatbuffers.Offset, WINDOW_ENDOffset: flatbuffers.Offset, PROPAGATOR: tmxPropagatorKind, PROPAGATOR_IDOffset: flatbuffers.Offset, EXECUTION_HOST: tmxExecutionHostKind, PHENOMENOLOGIES_REQUESTEDOffset: flatbuffers.Offset, THP_IDSOffset: flatbuffers.Offset, THP_CIDSOffset: flatbuffers.Offset, SCORING_PROFILE_IDOffset: flatbuffers.Offset, INCLUDE_COAS: boolean, WHAT_IF_OVERRIDES_JSONOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): TMXRequestT;
    unpackTo(_o: TMXRequestT): void;
}
export declare class TMXRequestT implements flatbuffers.IGeneratedObject {
    REQUEST_ID: string | Uint8Array | null;
    TARGET_SCOPE: string | Uint8Array | null;
    TARGET_NORAD_CAT_IDS: (number)[];
    GROUP_IDS: (string)[];
    CATALOG_REVISION: string | Uint8Array | null;
    WINDOW_START: string | Uint8Array | null;
    WINDOW_END: string | Uint8Array | null;
    PROPAGATOR: tmxPropagatorKind;
    PROPAGATOR_ID: string | Uint8Array | null;
    EXECUTION_HOST: tmxExecutionHostKind;
    PHENOMENOLOGIES_REQUESTED: (tmxPhenomenologyKind)[];
    THP_IDS: (string)[];
    THP_CIDS: (string)[];
    SCORING_PROFILE_ID: string | Uint8Array | null;
    INCLUDE_COAS: boolean;
    WHAT_IF_OVERRIDES_JSON: string | Uint8Array | null;
    constructor(REQUEST_ID?: string | Uint8Array | null, TARGET_SCOPE?: string | Uint8Array | null, TARGET_NORAD_CAT_IDS?: (number)[], GROUP_IDS?: (string)[], CATALOG_REVISION?: string | Uint8Array | null, WINDOW_START?: string | Uint8Array | null, WINDOW_END?: string | Uint8Array | null, PROPAGATOR?: tmxPropagatorKind, PROPAGATOR_ID?: string | Uint8Array | null, EXECUTION_HOST?: tmxExecutionHostKind, PHENOMENOLOGIES_REQUESTED?: (tmxPhenomenologyKind)[], THP_IDS?: (string)[], THP_CIDS?: (string)[], SCORING_PROFILE_ID?: string | Uint8Array | null, INCLUDE_COAS?: boolean, WHAT_IF_OVERRIDES_JSON?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=TMXRequest.d.ts.map