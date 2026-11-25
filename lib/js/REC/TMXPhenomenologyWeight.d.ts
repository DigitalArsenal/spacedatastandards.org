import * as flatbuffers from 'flatbuffers';
import { tmxPhenomenologyKind } from './tmxPhenomenologyKind.js';
/**
 * Deterministic weight and severity thresholds for one phenomenology (in basis points 0..10000).
 */
export declare class TMXPhenomenologyWeight implements flatbuffers.IUnpackableObject<TMXPhenomenologyWeightT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): TMXPhenomenologyWeight;
    static getRootAsTMXPhenomenologyWeight(bb: flatbuffers.ByteBuffer, obj?: TMXPhenomenologyWeight): TMXPhenomenologyWeight;
    static getSizePrefixedRootAsTMXPhenomenologyWeight(bb: flatbuffers.ByteBuffer, obj?: TMXPhenomenologyWeight): TMXPhenomenologyWeight;
    /**
     * Phenomenology configured by this entry.
     */
    PHENOMENOLOGY(): tmxPhenomenologyKind;
    /**
     * Composite rollup weight in basis points (nominal sum across evaluated phenomenologies = 10000).
     */
    WEIGHT_BPS(): number;
    /**
     * Score threshold in basis points for CRITICAL tier.
     */
    CRITICAL_THRESHOLD_BPS(): number;
    /**
     * Score threshold in basis points for HIGH tier.
     */
    HIGH_THRESHOLD_BPS(): number;
    /**
     * Score threshold in basis points for WATCH tier.
     */
    WATCH_THRESHOLD_BPS(): number;
    static startTMXPhenomenologyWeight(builder: flatbuffers.Builder): void;
    static addPhenomenology(builder: flatbuffers.Builder, PHENOMENOLOGY: tmxPhenomenologyKind): void;
    static addWeightBps(builder: flatbuffers.Builder, WEIGHT_BPS: number): void;
    static addCriticalThresholdBps(builder: flatbuffers.Builder, CRITICAL_THRESHOLD_BPS: number): void;
    static addHighThresholdBps(builder: flatbuffers.Builder, HIGH_THRESHOLD_BPS: number): void;
    static addWatchThresholdBps(builder: flatbuffers.Builder, WATCH_THRESHOLD_BPS: number): void;
    static endTMXPhenomenologyWeight(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createTMXPhenomenologyWeight(builder: flatbuffers.Builder, PHENOMENOLOGY: tmxPhenomenologyKind, WEIGHT_BPS: number, CRITICAL_THRESHOLD_BPS: number, HIGH_THRESHOLD_BPS: number, WATCH_THRESHOLD_BPS: number): flatbuffers.Offset;
    unpack(): TMXPhenomenologyWeightT;
    unpackTo(_o: TMXPhenomenologyWeightT): void;
}
export declare class TMXPhenomenologyWeightT implements flatbuffers.IGeneratedObject {
    PHENOMENOLOGY: tmxPhenomenologyKind;
    WEIGHT_BPS: number;
    CRITICAL_THRESHOLD_BPS: number;
    HIGH_THRESHOLD_BPS: number;
    WATCH_THRESHOLD_BPS: number;
    constructor(PHENOMENOLOGY?: tmxPhenomenologyKind, WEIGHT_BPS?: number, CRITICAL_THRESHOLD_BPS?: number, HIGH_THRESHOLD_BPS?: number, WATCH_THRESHOLD_BPS?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=TMXPhenomenologyWeight.d.ts.map