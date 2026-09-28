import * as flatbuffers from 'flatbuffers';
import { CQRLaunchApproach, CQRLaunchApproachT } from './CQRLaunchApproach.js';
import { CQRLaunchClosure, CQRLaunchClosureT } from './CQRLaunchClosure.js';
import { CQRScreeningStatistics, CQRScreeningStatisticsT } from './CQRScreeningStatistics.js';
import { TIMInstant, TIMInstantT } from './TIMInstant.js';
export declare class CQRLaunchResult implements flatbuffers.IUnpackableObject<CQRLaunchResultT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): CQRLaunchResult;
    static getRootAsCQRLaunchResult(bb: flatbuffers.ByteBuffer, obj?: CQRLaunchResult): CQRLaunchResult;
    static getSizePrefixedRootAsCQRLaunchResult(bb: flatbuffers.ByteBuffer, obj?: CQRLaunchResult): CQRLaunchResult;
    MISSION_NAME(): string | null;
    MISSION_NAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    WINDOW_OPEN(obj?: TIMInstant): TIMInstant | null;
    WINDOW_CLOSE(obj?: TIMInstant): TIMInstant | null;
    LIFTOFF_STEP_SECONDS(): number;
    LIFTOFF_TIMES_EVALUATED(): bigint;
    /**
     * Ordered by START.
     */
    CLOSURES(index: number, obj?: CQRLaunchClosure): CQRLaunchClosure | null;
    closuresLength(): number;
    /**
     * Ordered by LIFTOFF, then segment and object identity.
     */
    APPROACHES(index: number, obj?: CQRLaunchApproach): CQRLaunchApproach | null;
    approachesLength(): number;
    STATISTICS(obj?: CQRScreeningStatistics): CQRScreeningStatistics | null;
    static startCQRLaunchResult(builder: flatbuffers.Builder): void;
    static addMissionName(builder: flatbuffers.Builder, MISSION_NAMEOffset: flatbuffers.Offset): void;
    static addWindowOpen(builder: flatbuffers.Builder, WINDOW_OPENOffset: flatbuffers.Offset): void;
    static addWindowClose(builder: flatbuffers.Builder, WINDOW_CLOSEOffset: flatbuffers.Offset): void;
    static addLiftoffStepSeconds(builder: flatbuffers.Builder, LIFTOFF_STEP_SECONDS: number): void;
    static addLiftoffTimesEvaluated(builder: flatbuffers.Builder, LIFTOFF_TIMES_EVALUATED: bigint): void;
    static addClosures(builder: flatbuffers.Builder, CLOSURESOffset: flatbuffers.Offset): void;
    static createClosuresVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startClosuresVector(builder: flatbuffers.Builder, numElems: number): void;
    static addApproaches(builder: flatbuffers.Builder, APPROACHESOffset: flatbuffers.Offset): void;
    static createApproachesVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startApproachesVector(builder: flatbuffers.Builder, numElems: number): void;
    static addStatistics(builder: flatbuffers.Builder, STATISTICSOffset: flatbuffers.Offset): void;
    static endCQRLaunchResult(builder: flatbuffers.Builder): flatbuffers.Offset;
    unpack(): CQRLaunchResultT;
    unpackTo(_o: CQRLaunchResultT): void;
}
export declare class CQRLaunchResultT implements flatbuffers.IGeneratedObject {
    MISSION_NAME: string | Uint8Array | null;
    WINDOW_OPEN: TIMInstantT | null;
    WINDOW_CLOSE: TIMInstantT | null;
    LIFTOFF_STEP_SECONDS: number;
    LIFTOFF_TIMES_EVALUATED: bigint;
    CLOSURES: (CQRLaunchClosureT)[];
    APPROACHES: (CQRLaunchApproachT)[];
    STATISTICS: CQRScreeningStatisticsT | null;
    constructor(MISSION_NAME?: string | Uint8Array | null, WINDOW_OPEN?: TIMInstantT | null, WINDOW_CLOSE?: TIMInstantT | null, LIFTOFF_STEP_SECONDS?: number, LIFTOFF_TIMES_EVALUATED?: bigint, CLOSURES?: (CQRLaunchClosureT)[], APPROACHES?: (CQRLaunchApproachT)[], STATISTICS?: CQRScreeningStatisticsT | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=CQRLaunchResult.d.ts.map