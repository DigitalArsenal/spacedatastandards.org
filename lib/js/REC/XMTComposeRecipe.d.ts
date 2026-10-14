import * as flatbuffers from 'flatbuffers';
import { XMTLayer, XMTLayerT } from './XMTLayer.js';
import { XMTObjectOverride, XMTObjectOverrideT } from './XMTObjectOverride.js';
import { XMTSourceCoverage, XMTSourceCoverageT } from './XMTSourceCoverage.js';
import { XMTStateCandidate, XMTStateCandidateT } from './XMTStateCandidate.js';
import { xmtIdentityRule } from './xmtIdentityRule.js';
/**
 * Recipe of a catalog composition.
 */
export declare class XMTComposeRecipe implements flatbuffers.IUnpackableObject<XMTComposeRecipeT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): XMTComposeRecipe;
    static getRootAsXMTComposeRecipe(bb: flatbuffers.ByteBuffer, obj?: XMTComposeRecipe): XMTComposeRecipe;
    static getSizePrefixedRootAsXMTComposeRecipe(bb: flatbuffers.ByteBuffer, obj?: XMTComposeRecipe): XMTComposeRecipe;
    IDENTITY_RULE(): xmtIdentityRule;
    /**
     * Unix milliseconds the composition is as of.
     */
    AS_OF_MS(): bigint;
    /**
     * Maximum age of a selected state, s; +Infinity = no limit.
     */
    MAX_AGE_S(): number;
    /**
     * Catalog layers in priority order, one per catalog input.
     */
    LAYERS(index: number, obj?: XMTLayer): XMTLayer | null;
    layersLength(): number;
    /**
     * State sources in preference order.
     */
    STATE_SOURCES(index: number): string;
    STATE_SOURCES(index: number, optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    stateSourcesLength(): number;
    OVERRIDES(index: number, obj?: XMTObjectOverride): XMTObjectOverride | null;
    overridesLength(): number;
    STATE_CANDIDATES(index: number, obj?: XMTStateCandidate): XMTStateCandidate | null;
    stateCandidatesLength(): number;
    COVERAGE(index: number, obj?: XMTSourceCoverage): XMTSourceCoverage | null;
    coverageLength(): number;
    static startXMTComposeRecipe(builder: flatbuffers.Builder): void;
    static addIdentityRule(builder: flatbuffers.Builder, IDENTITY_RULE: xmtIdentityRule): void;
    static addAsOfMs(builder: flatbuffers.Builder, AS_OF_MS: bigint): void;
    static addMaxAgeS(builder: flatbuffers.Builder, MAX_AGE_S: number): void;
    static addLayers(builder: flatbuffers.Builder, LAYERSOffset: flatbuffers.Offset): void;
    static createLayersVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startLayersVector(builder: flatbuffers.Builder, numElems: number): void;
    static addStateSources(builder: flatbuffers.Builder, STATE_SOURCESOffset: flatbuffers.Offset): void;
    static createStateSourcesVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startStateSourcesVector(builder: flatbuffers.Builder, numElems: number): void;
    static addOverrides(builder: flatbuffers.Builder, OVERRIDESOffset: flatbuffers.Offset): void;
    static createOverridesVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startOverridesVector(builder: flatbuffers.Builder, numElems: number): void;
    static addStateCandidates(builder: flatbuffers.Builder, STATE_CANDIDATESOffset: flatbuffers.Offset): void;
    static createStateCandidatesVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startStateCandidatesVector(builder: flatbuffers.Builder, numElems: number): void;
    static addCoverage(builder: flatbuffers.Builder, COVERAGEOffset: flatbuffers.Offset): void;
    static createCoverageVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startCoverageVector(builder: flatbuffers.Builder, numElems: number): void;
    static endXMTComposeRecipe(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createXMTComposeRecipe(builder: flatbuffers.Builder, IDENTITY_RULE: xmtIdentityRule, AS_OF_MS: bigint, MAX_AGE_S: number, LAYERSOffset: flatbuffers.Offset, STATE_SOURCESOffset: flatbuffers.Offset, OVERRIDESOffset: flatbuffers.Offset, STATE_CANDIDATESOffset: flatbuffers.Offset, COVERAGEOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): XMTComposeRecipeT;
    unpackTo(_o: XMTComposeRecipeT): void;
}
export declare class XMTComposeRecipeT implements flatbuffers.IGeneratedObject {
    IDENTITY_RULE: xmtIdentityRule;
    AS_OF_MS: bigint;
    MAX_AGE_S: number;
    LAYERS: (XMTLayerT)[];
    STATE_SOURCES: (string)[];
    OVERRIDES: (XMTObjectOverrideT)[];
    STATE_CANDIDATES: (XMTStateCandidateT)[];
    COVERAGE: (XMTSourceCoverageT)[];
    constructor(IDENTITY_RULE?: xmtIdentityRule, AS_OF_MS?: bigint, MAX_AGE_S?: number, LAYERS?: (XMTLayerT)[], STATE_SOURCES?: (string)[], OVERRIDES?: (XMTObjectOverrideT)[], STATE_CANDIDATES?: (XMTStateCandidateT)[], COVERAGE?: (XMTSourceCoverageT)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=XMTComposeRecipe.d.ts.map