import * as flatbuffers from 'flatbuffers';
import { tbpPeriodicOrbit, tbpPeriodicOrbitT } from './tbpPeriodicOrbit.js';
import { tbpTrajectory, tbpTrajectoryT } from './tbpTrajectory.js';
/**
 * Multi-spacecraft time-phased CR3BP constellation along a periodic orbit.
 */
export declare class tbpConstellation implements flatbuffers.IUnpackableObject<tbpConstellationT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): tbpConstellation;
    static getRootAstbpConstellation(bb: flatbuffers.ByteBuffer, obj?: tbpConstellation): tbpConstellation;
    static getSizePrefixedRootAstbpConstellation(bb: flatbuffers.ByteBuffer, obj?: tbpConstellation): tbpConstellation;
    /**
     * Generating periodic orbit (FAMILY + PETALS + PERIOD or explicit INITIAL_STATE).
     */
    ORBIT(obj?: tbpPeriodicOrbit): tbpPeriodicOrbit | null;
    /**
     * Number of spacecraft in the constellation.
     */
    SATELLITE_COUNT(): number;
    /**
     * Number of orbit revolutions to propagate; 0 = 1.
     */
    REVOLUTIONS(): number;
    /**
     * Non-dimensional phase offsets (length SATELLITE_COUNT); empty = evenly spaced.
     */
    PHASE_OFFSETS(index: number): number | null;
    phaseOffsetsLength(): number;
    phaseOffsetsArray(): Float64Array | null;
    /**
     * Uniform time samples per spacecraft trajectory; 0 = default.
     */
    OUTPUT_POINTS(): number;
    /**
     * Result: propagated trajectory for each spacecraft in the constellation.
     */
    TRAJECTORIES(index: number, obj?: tbpTrajectory): tbpTrajectory | null;
    trajectoriesLength(): number;
    static starttbpConstellation(builder: flatbuffers.Builder): void;
    static addOrbit(builder: flatbuffers.Builder, ORBITOffset: flatbuffers.Offset): void;
    static addSatelliteCount(builder: flatbuffers.Builder, SATELLITE_COUNT: number): void;
    static addRevolutions(builder: flatbuffers.Builder, REVOLUTIONS: number): void;
    static addPhaseOffsets(builder: flatbuffers.Builder, PHASE_OFFSETSOffset: flatbuffers.Offset): void;
    static createPhaseOffsetsVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createPhaseOffsetsVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startPhaseOffsetsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addOutputPoints(builder: flatbuffers.Builder, OUTPUT_POINTS: number): void;
    static addTrajectories(builder: flatbuffers.Builder, TRAJECTORIESOffset: flatbuffers.Offset): void;
    static createTrajectoriesVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startTrajectoriesVector(builder: flatbuffers.Builder, numElems: number): void;
    static endtbpConstellation(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createtbpConstellation(builder: flatbuffers.Builder, ORBITOffset: flatbuffers.Offset, SATELLITE_COUNT: number, REVOLUTIONS: number, PHASE_OFFSETSOffset: flatbuffers.Offset, OUTPUT_POINTS: number, TRAJECTORIESOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): tbpConstellationT;
    unpackTo(_o: tbpConstellationT): void;
}
export declare class tbpConstellationT implements flatbuffers.IGeneratedObject {
    ORBIT: tbpPeriodicOrbitT | null;
    SATELLITE_COUNT: number;
    REVOLUTIONS: number;
    PHASE_OFFSETS: (number)[];
    OUTPUT_POINTS: number;
    TRAJECTORIES: (tbpTrajectoryT)[];
    constructor(ORBIT?: tbpPeriodicOrbitT | null, SATELLITE_COUNT?: number, REVOLUTIONS?: number, PHASE_OFFSETS?: (number)[], OUTPUT_POINTS?: number, TRAJECTORIES?: (tbpTrajectoryT)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=tbpConstellation.d.ts.map