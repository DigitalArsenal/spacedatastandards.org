import * as flatbuffers from 'flatbuffers';
import { ERMGate, ERMGateT } from './ERMGate.js';
import { ERMStrataSettings, ERMStrataSettingsT } from './ERMStrataSettings.js';
import { ermCoverageMode } from './ermCoverageMode.js';
/**
 * Settings of a propagator covariance coverage run.
 */
export declare class ERMCoverageOptions implements flatbuffers.IUnpackableObject<ERMCoverageOptionsT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): ERMCoverageOptions;
    static getRootAsERMCoverageOptions(bb: flatbuffers.ByteBuffer, obj?: ERMCoverageOptions): ERMCoverageOptions;
    static getSizePrefixedRootAsERMCoverageOptions(bb: flatbuffers.ByteBuffer, obj?: ERMCoverageOptions): ERMCoverageOptions;
    MODE(): ermCoverageMode;
    /**
     * Targets whose epoch is in [start, stop), ISO 8601.
     */
    WINDOW_START(): string | null;
    WINDOW_START(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    WINDOW_STOP(): string | null;
    WINDOW_STOP(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    STRATA_SETTINGS(obj?: ERMStrataSettings): ERMStrataSettings | null;
    GATE(obj?: ERMGate): ERMGate | null;
    /**
     * Robust clip multiple of the epoch fit.
     */
    CLIP_K(): number;
    /**
     * Discretization of the noise fit, s.
     */
    DISCRETIZATION_S(): number;
    static startERMCoverageOptions(builder: flatbuffers.Builder): void;
    static addMode(builder: flatbuffers.Builder, MODE: ermCoverageMode): void;
    static addWindowStart(builder: flatbuffers.Builder, WINDOW_STARTOffset: flatbuffers.Offset): void;
    static addWindowStop(builder: flatbuffers.Builder, WINDOW_STOPOffset: flatbuffers.Offset): void;
    static addStrataSettings(builder: flatbuffers.Builder, STRATA_SETTINGSOffset: flatbuffers.Offset): void;
    static addGate(builder: flatbuffers.Builder, GATEOffset: flatbuffers.Offset): void;
    static addClipK(builder: flatbuffers.Builder, CLIP_K: number): void;
    static addDiscretizationS(builder: flatbuffers.Builder, DISCRETIZATION_S: number): void;
    static endERMCoverageOptions(builder: flatbuffers.Builder): flatbuffers.Offset;
    unpack(): ERMCoverageOptionsT;
    unpackTo(_o: ERMCoverageOptionsT): void;
}
export declare class ERMCoverageOptionsT implements flatbuffers.IGeneratedObject {
    MODE: ermCoverageMode;
    WINDOW_START: string | Uint8Array | null;
    WINDOW_STOP: string | Uint8Array | null;
    STRATA_SETTINGS: ERMStrataSettingsT | null;
    GATE: ERMGateT | null;
    CLIP_K: number;
    DISCRETIZATION_S: number;
    constructor(MODE?: ermCoverageMode, WINDOW_START?: string | Uint8Array | null, WINDOW_STOP?: string | Uint8Array | null, STRATA_SETTINGS?: ERMStrataSettingsT | null, GATE?: ERMGateT | null, CLIP_K?: number, DISCRETIZATION_S?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=ERMCoverageOptions.d.ts.map