import * as flatbuffers from 'flatbuffers';
import { tbpConstellation, tbpConstellationT } from './tbpConstellation.js';
import { tbpContinuationRequest, tbpContinuationRequestT } from './tbpContinuationRequest.js';
import { tbpFrameConversion, tbpFrameConversionT } from './tbpFrameConversion.js';
import { tbpLibrationPoint, tbpLibrationPointT } from './tbpLibrationPoint.js';
import { tbpManifolds, tbpManifoldsT } from './tbpManifolds.js';
import { tbpPeriodicOrbit, tbpPeriodicOrbitT } from './tbpPeriodicOrbit.js';
import { tbpProblem } from './tbpProblem.js';
import { tbpPropagationRequest, tbpPropagationRequestT } from './tbpPropagationRequest.js';
import { tbpState, tbpStateT } from './tbpState.js';
import { tbpStationKeeping, tbpStationKeepingT } from './tbpStationKeeping.js';
import { tbpStatus } from './tbpStatus.js';
import { tbpSurfaceAnalysis, tbpSurfaceAnalysisT } from './tbpSurfaceAnalysis.js';
import { tbpSystem, tbpSystemT } from './tbpSystem.js';
import { tbpTrajectory, tbpTrajectoryT } from './tbpTrajectory.js';
import { tbpTransfer, tbpTransferT } from './tbpTransfer.js';
/**
 * Three-Body Problem - a CR3BP system and one answer about it.
 */
export declare class TBP implements flatbuffers.IUnpackableObject<TBPT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): TBP;
    static getRootAsTBP(bb: flatbuffers.ByteBuffer, obj?: TBP): TBP;
    static getSizePrefixedRootAsTBP(bb: flatbuffers.ByteBuffer, obj?: TBP): TBP;
    static bufferHasIdentifier(bb: flatbuffers.ByteBuffer): boolean;
    /**
     * Identifier of the record; empty = not assigned.
     */
    ID(): string | null;
    ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Unix milliseconds the record was produced.
     */
    CREATED_AT_MS(): bigint;
    /**
     * Identifier of the producing service or tool.
     */
    PRODUCER(): string | null;
    PRODUCER(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    PROBLEM(): tbpProblem;
    SYSTEM(obj?: tbpSystem): tbpSystem | null;
    STATUS(): tbpStatus;
    /**
     * Stable machine-readable reason when STATUS is not Solved.
     */
    ERROR_CODE(): string | null;
    ERROR_CODE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    ERROR_MESSAGE(): string | null;
    ERROR_MESSAGE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Propagation: the request, and the propagated trajectory.
     */
    PROPAGATION(obj?: tbpPropagationRequest): tbpPropagationRequest | null;
    TRAJECTORY(obj?: tbpTrajectory): tbpTrajectory | null;
    /**
     * LibrationPoints: L1 to L5.
     */
    LIBRATION_POINTS(index: number, obj?: tbpLibrationPoint): tbpLibrationPoint | null;
    librationPointsLength(): number;
    /**
     * JacobiConstant: the state, and its Jacobi constant.
     */
    STATE(obj?: tbpState): tbpState | null;
    JACOBI(): number;
    /**
     * PeriodicOrbit, HaloFirstGuess, NearRectilinearHalo, OrbitProperties: the
     * request fields (FAMILY, LIBRATION_POINT, AMPLITUDE, PETALS, or
     * perilune/apolune, TOLERANCE, MAX_ITERATIONS) and the result. Family and
     * Continuation: the members ordered along the continuation parameter.
     */
    ORBITS(index: number, obj?: tbpPeriodicOrbit): tbpPeriodicOrbit | null;
    orbitsLength(): number;
    TRANSFER(obj?: tbpTransfer): tbpTransfer | null;
    STATION_KEEPING(obj?: tbpStationKeeping): tbpStationKeeping | null;
    FRAME_CONVERSION(obj?: tbpFrameConversion): tbpFrameConversion | null;
    /**
     * Continuation: pseudo-arclength or natural-parameter continuation request.
     */
    CONTINUATION(obj?: tbpContinuationRequest): tbpContinuationRequest | null;
    /**
     * Manifolds: invariant stable/unstable manifold request and branches.
     */
    MANIFOLDS(obj?: tbpManifolds): tbpManifolds | null;
    /**
     * Constellation: time-phased multi-spacecraft CR3BP constellation.
     */
    CONSTELLATION(obj?: tbpConstellation): tbpConstellation | null;
    /**
     * SurfaceAnalysis: surface coverage gaps, elevation, occultations, and DOP.
     */
    SURFACE_ANALYSIS(obj?: tbpSurfaceAnalysis): tbpSurfaceAnalysis | null;
    static startTBP(builder: flatbuffers.Builder): void;
    static addId(builder: flatbuffers.Builder, IDOffset: flatbuffers.Offset): void;
    static addCreatedAtMs(builder: flatbuffers.Builder, CREATED_AT_MS: bigint): void;
    static addProducer(builder: flatbuffers.Builder, PRODUCEROffset: flatbuffers.Offset): void;
    static addProblem(builder: flatbuffers.Builder, PROBLEM: tbpProblem): void;
    static addSystem(builder: flatbuffers.Builder, SYSTEMOffset: flatbuffers.Offset): void;
    static addStatus(builder: flatbuffers.Builder, STATUS: tbpStatus): void;
    static addErrorCode(builder: flatbuffers.Builder, ERROR_CODEOffset: flatbuffers.Offset): void;
    static addErrorMessage(builder: flatbuffers.Builder, ERROR_MESSAGEOffset: flatbuffers.Offset): void;
    static addPropagation(builder: flatbuffers.Builder, PROPAGATIONOffset: flatbuffers.Offset): void;
    static addTrajectory(builder: flatbuffers.Builder, TRAJECTORYOffset: flatbuffers.Offset): void;
    static addLibrationPoints(builder: flatbuffers.Builder, LIBRATION_POINTSOffset: flatbuffers.Offset): void;
    static createLibrationPointsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startLibrationPointsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addState(builder: flatbuffers.Builder, STATEOffset: flatbuffers.Offset): void;
    static addJacobi(builder: flatbuffers.Builder, JACOBI: number): void;
    static addOrbits(builder: flatbuffers.Builder, ORBITSOffset: flatbuffers.Offset): void;
    static createOrbitsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startOrbitsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addTransfer(builder: flatbuffers.Builder, TRANSFEROffset: flatbuffers.Offset): void;
    static addStationKeeping(builder: flatbuffers.Builder, STATION_KEEPINGOffset: flatbuffers.Offset): void;
    static addFrameConversion(builder: flatbuffers.Builder, FRAME_CONVERSIONOffset: flatbuffers.Offset): void;
    static addContinuation(builder: flatbuffers.Builder, CONTINUATIONOffset: flatbuffers.Offset): void;
    static addManifolds(builder: flatbuffers.Builder, MANIFOLDSOffset: flatbuffers.Offset): void;
    static addConstellation(builder: flatbuffers.Builder, CONSTELLATIONOffset: flatbuffers.Offset): void;
    static addSurfaceAnalysis(builder: flatbuffers.Builder, SURFACE_ANALYSISOffset: flatbuffers.Offset): void;
    static endTBP(builder: flatbuffers.Builder): flatbuffers.Offset;
    static finishTBPBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static finishSizePrefixedTBPBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    unpack(): TBPT;
    unpackTo(_o: TBPT): void;
}
export declare class TBPT implements flatbuffers.IGeneratedObject {
    ID: string | Uint8Array | null;
    CREATED_AT_MS: bigint;
    PRODUCER: string | Uint8Array | null;
    PROBLEM: tbpProblem;
    SYSTEM: tbpSystemT | null;
    STATUS: tbpStatus;
    ERROR_CODE: string | Uint8Array | null;
    ERROR_MESSAGE: string | Uint8Array | null;
    PROPAGATION: tbpPropagationRequestT | null;
    TRAJECTORY: tbpTrajectoryT | null;
    LIBRATION_POINTS: (tbpLibrationPointT)[];
    STATE: tbpStateT | null;
    JACOBI: number;
    ORBITS: (tbpPeriodicOrbitT)[];
    TRANSFER: tbpTransferT | null;
    STATION_KEEPING: tbpStationKeepingT | null;
    FRAME_CONVERSION: tbpFrameConversionT | null;
    CONTINUATION: tbpContinuationRequestT | null;
    MANIFOLDS: tbpManifoldsT | null;
    CONSTELLATION: tbpConstellationT | null;
    SURFACE_ANALYSIS: tbpSurfaceAnalysisT | null;
    constructor(ID?: string | Uint8Array | null, CREATED_AT_MS?: bigint, PRODUCER?: string | Uint8Array | null, PROBLEM?: tbpProblem, SYSTEM?: tbpSystemT | null, STATUS?: tbpStatus, ERROR_CODE?: string | Uint8Array | null, ERROR_MESSAGE?: string | Uint8Array | null, PROPAGATION?: tbpPropagationRequestT | null, TRAJECTORY?: tbpTrajectoryT | null, LIBRATION_POINTS?: (tbpLibrationPointT)[], STATE?: tbpStateT | null, JACOBI?: number, ORBITS?: (tbpPeriodicOrbitT)[], TRANSFER?: tbpTransferT | null, STATION_KEEPING?: tbpStationKeepingT | null, FRAME_CONVERSION?: tbpFrameConversionT | null, CONTINUATION?: tbpContinuationRequestT | null, MANIFOLDS?: tbpManifoldsT | null, CONSTELLATION?: tbpConstellationT | null, SURFACE_ANALYSIS?: tbpSurfaceAnalysisT | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=TBP.d.ts.map