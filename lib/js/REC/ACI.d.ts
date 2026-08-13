import * as flatbuffers from 'flatbuffers';
import { ACIInterval, ACIIntervalT } from './ACIInterval.js';
import { ACIProvenance, ACIProvenanceT } from './ACIProvenance.js';
import { timingStandard } from './timingStandard.js';
/**
 * Access Interval
 */
export declare class ACI implements flatbuffers.IUnpackableObject<ACIT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): ACI;
    static getRootAsACI(bb: flatbuffers.ByteBuffer, obj?: ACI): ACI;
    static getSizePrefixedRootAsACI(bb: flatbuffers.ByteBuffer, obj?: ACI): ACI;
    static bufferHasIdentifier(bb: flatbuffers.ByteBuffer): boolean;
    /**
     * Stable identifier of this interval set.
     */
    ACI_ID(): string;
    ACI_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    /**
     * Display name.
     */
    NAME(): string | null;
    NAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Analysis or scenario grouping identifier shared with the `$RFL` samples
     * and `$CVP` geometry of the same study.
     */
    SCENARIO_ID(): string | null;
    SCENARIO_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * `$RFL.RFL_ID` these intervals were derived from, when they were derived
     * from a published sample set. Absent for measured or scheduled intervals.
     */
    RFL_ID(): string | null;
    RFL_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * The intervals.
     */
    INTERVALS(index: number, obj?: ACIInterval): ACIInterval | null;
    intervalsLength(): number;
    /**
     * Analysis window, seconds since 1970-01-01T00:00:00 in TIME_SYSTEM. An
     * interval set states its window so "no intervals" can be distinguished
     * from "not analysed".
     */
    WINDOW_START(): number;
    WINDOW_STOP(): number;
    /**
     * Time scale all epochs in this record are expressed in. Defaults to UTC
     * explicitly: `timingStandard` ordinal 0 is GMST.
     */
    TIME_SYSTEM(): timingStandard;
    /**
     * Provenance. Required.
     */
    PROVENANCE(obj?: ACIProvenance): ACIProvenance | null;
    /**
     * Unix ms this record was serialized.
     */
    COMPUTED_AT(): bigint;
    /**
     * `$EPM` identifier of the producing node.
     */
    PRODUCER_ID(): string | null;
    PRODUCER_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Ed25519 signature by the producing `$EPM`.
     */
    SIGNATURE(index: number): number | null;
    signatureLength(): number;
    signatureArray(): Uint8Array | null;
    static startACI(builder: flatbuffers.Builder): void;
    static addAciId(builder: flatbuffers.Builder, ACI_IDOffset: flatbuffers.Offset): void;
    static addName(builder: flatbuffers.Builder, NAMEOffset: flatbuffers.Offset): void;
    static addScenarioId(builder: flatbuffers.Builder, SCENARIO_IDOffset: flatbuffers.Offset): void;
    static addRflId(builder: flatbuffers.Builder, RFL_IDOffset: flatbuffers.Offset): void;
    static addIntervals(builder: flatbuffers.Builder, INTERVALSOffset: flatbuffers.Offset): void;
    static createIntervalsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startIntervalsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addWindowStart(builder: flatbuffers.Builder, WINDOW_START: number): void;
    static addWindowStop(builder: flatbuffers.Builder, WINDOW_STOP: number): void;
    static addTimeSystem(builder: flatbuffers.Builder, TIME_SYSTEM: timingStandard): void;
    static addProvenance(builder: flatbuffers.Builder, PROVENANCEOffset: flatbuffers.Offset): void;
    static addComputedAt(builder: flatbuffers.Builder, COMPUTED_AT: bigint): void;
    static addProducerId(builder: flatbuffers.Builder, PRODUCER_IDOffset: flatbuffers.Offset): void;
    static addSignature(builder: flatbuffers.Builder, SIGNATUREOffset: flatbuffers.Offset): void;
    static createSignatureVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startSignatureVector(builder: flatbuffers.Builder, numElems: number): void;
    static endACI(builder: flatbuffers.Builder): flatbuffers.Offset;
    static finishACIBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static finishSizePrefixedACIBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    unpack(): ACIT;
    unpackTo(_o: ACIT): void;
}
export declare class ACIT implements flatbuffers.IGeneratedObject {
    ACI_ID: string | Uint8Array | null;
    NAME: string | Uint8Array | null;
    SCENARIO_ID: string | Uint8Array | null;
    RFL_ID: string | Uint8Array | null;
    INTERVALS: (ACIIntervalT)[];
    WINDOW_START: number;
    WINDOW_STOP: number;
    TIME_SYSTEM: timingStandard;
    PROVENANCE: ACIProvenanceT | null;
    COMPUTED_AT: bigint;
    PRODUCER_ID: string | Uint8Array | null;
    SIGNATURE: (number)[];
    constructor(ACI_ID?: string | Uint8Array | null, NAME?: string | Uint8Array | null, SCENARIO_ID?: string | Uint8Array | null, RFL_ID?: string | Uint8Array | null, INTERVALS?: (ACIIntervalT)[], WINDOW_START?: number, WINDOW_STOP?: number, TIME_SYSTEM?: timingStandard, PROVENANCE?: ACIProvenanceT | null, COMPUTED_AT?: bigint, PRODUCER_ID?: string | Uint8Array | null, SIGNATURE?: (number)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=ACI.d.ts.map