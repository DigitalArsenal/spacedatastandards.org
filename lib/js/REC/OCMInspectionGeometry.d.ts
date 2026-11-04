import * as flatbuffers from 'flatbuffers';
import { OCMRadarInputs, OCMRadarInputsT } from './OCMRadarInputs.js';
/**
 * Inspection geometry of a chaser about a target on the time grid of the
 * message (SDS addition; CCSDS 502.0-B-3 has none). Every vector holds one
 * entry per time, in order: entry i is at STATE_EPOCHS[i], or at
 * Metadata.START_TIME + i * STATE_STEP_SIZE. The target is CENTER_NAME. The
 * Earth shadow is the conical model of a spherical Earth (6378.137 km) and a
 * spherical Sun (695700 km); the target's nadir is -r / |r|; the along-track
 * direction is the Earth-relative velocity perpendicular to r; right is nadir
 * x along-track.
 */
export declare class OCMInspectionGeometry implements flatbuffers.IUnpackableObject<OCMInspectionGeometryT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): OCMInspectionGeometry;
    static getRootAsOCMInspectionGeometry(bb: flatbuffers.ByteBuffer, obj?: OCMInspectionGeometry): OCMInspectionGeometry;
    static getSizePrefixedRootAsOCMInspectionGeometry(bb: flatbuffers.ByteBuffer, obj?: OCMInspectionGeometry): OCMInspectionGeometry;
    /**
     * Angle at the target between the Sun and the chaser, deg.
     */
    PHASE_ANGLE_DEG(index: number): number | null;
    phaseAngleDegLength(): number;
    phaseAngleDegArray(): Float64Array | null;
    /**
     * Fraction of the Sun's disk the target sees: 0 umbra, 1 sunlit.
     */
    TARGET_SUNLIT(index: number): number | null;
    targetSunlitLength(): number;
    targetSunlitArray(): Float64Array | null;
    /**
     * The same for the chaser.
     */
    CHASER_SUNLIT(index: number): number | null;
    chaserSunlitLength(): number;
    chaserSunlitArray(): Float64Array | null;
    /**
     * True when the chaser-target segment clears a sphere of 6378.137 km.
     */
    LINE_OF_SIGHT(index: number): boolean | null;
    lineOfSightLength(): number;
    lineOfSightArray(): Int8Array | null;
    /**
     * TARGET_SUNLIT times LINE_OF_SIGHT.
     */
    TARGET_LIT_FROM_CHASER(index: number): number | null;
    targetLitFromChaserLength(): number;
    targetLitFromChaserArray(): Float64Array | null;
    /**
     * Angle at the chaser between the target and the Sun, deg.
     */
    SUN_FROM_LINE_OF_SIGHT_DEG(index: number): number | null;
    sunFromLineOfSightDegLength(): number;
    sunFromLineOfSightDegArray(): Float64Array | null;
    /**
     * Chaser-target distance, km.
     */
    RANGE_KM(index: number): number | null;
    rangeKmLength(): number;
    rangeKmArray(): Float64Array | null;
    /**
     * Angle at the target between its nadir and the chaser, deg.
     */
    CHASER_OFF_NADIR_DEG(index: number): number | null;
    chaserOffNadirDegLength(): number;
    chaserOffNadirDegArray(): Float64Array | null;
    /**
     * The chaser's clock angle about the target's nadir, deg, from along-track
     * toward right (90 right of the track, 270 left).
     */
    CHASER_CLOCK_DEG(index: number): number | null;
    chaserClockDegLength(): number;
    chaserClockDegArray(): Float64Array | null;
    /**
     * True when the chaser is inside the target radar's field of regard on that
     * side: off-nadir between the look angles of the incidence band, within half
     * the azimuth beamwidth (0.886 wavelength / aperture length, -3 dB, uniform
     * aperture) of the broadside plane. Empty without RADAR.
     */
    IN_SAR_RIGHT(index: number): boolean | null;
    inSarRightLength(): number;
    inSarRightArray(): Int8Array | null;
    IN_SAR_LEFT(index: number): boolean | null;
    inSarLeftLength(): number;
    inSarLeftArray(): Int8Array | null;
    /**
     * The radar. Absent when no radar was given.
     */
    RADAR(obj?: OCMRadarInputs): OCMRadarInputs | null;
    static startOCMInspectionGeometry(builder: flatbuffers.Builder): void;
    static addPhaseAngleDeg(builder: flatbuffers.Builder, PHASE_ANGLE_DEGOffset: flatbuffers.Offset): void;
    static createPhaseAngleDegVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createPhaseAngleDegVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startPhaseAngleDegVector(builder: flatbuffers.Builder, numElems: number): void;
    static addTargetSunlit(builder: flatbuffers.Builder, TARGET_SUNLITOffset: flatbuffers.Offset): void;
    static createTargetSunlitVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createTargetSunlitVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startTargetSunlitVector(builder: flatbuffers.Builder, numElems: number): void;
    static addChaserSunlit(builder: flatbuffers.Builder, CHASER_SUNLITOffset: flatbuffers.Offset): void;
    static createChaserSunlitVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createChaserSunlitVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startChaserSunlitVector(builder: flatbuffers.Builder, numElems: number): void;
    static addLineOfSight(builder: flatbuffers.Builder, LINE_OF_SIGHTOffset: flatbuffers.Offset): void;
    static createLineOfSightVector(builder: flatbuffers.Builder, data: boolean[]): flatbuffers.Offset;
    static startLineOfSightVector(builder: flatbuffers.Builder, numElems: number): void;
    static addTargetLitFromChaser(builder: flatbuffers.Builder, TARGET_LIT_FROM_CHASEROffset: flatbuffers.Offset): void;
    static createTargetLitFromChaserVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createTargetLitFromChaserVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startTargetLitFromChaserVector(builder: flatbuffers.Builder, numElems: number): void;
    static addSunFromLineOfSightDeg(builder: flatbuffers.Builder, SUN_FROM_LINE_OF_SIGHT_DEGOffset: flatbuffers.Offset): void;
    static createSunFromLineOfSightDegVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createSunFromLineOfSightDegVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startSunFromLineOfSightDegVector(builder: flatbuffers.Builder, numElems: number): void;
    static addRangeKm(builder: flatbuffers.Builder, RANGE_KMOffset: flatbuffers.Offset): void;
    static createRangeKmVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createRangeKmVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startRangeKmVector(builder: flatbuffers.Builder, numElems: number): void;
    static addChaserOffNadirDeg(builder: flatbuffers.Builder, CHASER_OFF_NADIR_DEGOffset: flatbuffers.Offset): void;
    static createChaserOffNadirDegVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createChaserOffNadirDegVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startChaserOffNadirDegVector(builder: flatbuffers.Builder, numElems: number): void;
    static addChaserClockDeg(builder: flatbuffers.Builder, CHASER_CLOCK_DEGOffset: flatbuffers.Offset): void;
    static createChaserClockDegVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createChaserClockDegVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startChaserClockDegVector(builder: flatbuffers.Builder, numElems: number): void;
    static addInSarRight(builder: flatbuffers.Builder, IN_SAR_RIGHTOffset: flatbuffers.Offset): void;
    static createInSarRightVector(builder: flatbuffers.Builder, data: boolean[]): flatbuffers.Offset;
    static startInSarRightVector(builder: flatbuffers.Builder, numElems: number): void;
    static addInSarLeft(builder: flatbuffers.Builder, IN_SAR_LEFTOffset: flatbuffers.Offset): void;
    static createInSarLeftVector(builder: flatbuffers.Builder, data: boolean[]): flatbuffers.Offset;
    static startInSarLeftVector(builder: flatbuffers.Builder, numElems: number): void;
    static addRadar(builder: flatbuffers.Builder, RADAROffset: flatbuffers.Offset): void;
    static endOCMInspectionGeometry(builder: flatbuffers.Builder): flatbuffers.Offset;
    unpack(): OCMInspectionGeometryT;
    unpackTo(_o: OCMInspectionGeometryT): void;
}
export declare class OCMInspectionGeometryT implements flatbuffers.IGeneratedObject {
    PHASE_ANGLE_DEG: (number)[];
    TARGET_SUNLIT: (number)[];
    CHASER_SUNLIT: (number)[];
    LINE_OF_SIGHT: (boolean)[];
    TARGET_LIT_FROM_CHASER: (number)[];
    SUN_FROM_LINE_OF_SIGHT_DEG: (number)[];
    RANGE_KM: (number)[];
    CHASER_OFF_NADIR_DEG: (number)[];
    CHASER_CLOCK_DEG: (number)[];
    IN_SAR_RIGHT: (boolean)[];
    IN_SAR_LEFT: (boolean)[];
    RADAR: OCMRadarInputsT | null;
    constructor(PHASE_ANGLE_DEG?: (number)[], TARGET_SUNLIT?: (number)[], CHASER_SUNLIT?: (number)[], LINE_OF_SIGHT?: (boolean)[], TARGET_LIT_FROM_CHASER?: (number)[], SUN_FROM_LINE_OF_SIGHT_DEG?: (number)[], RANGE_KM?: (number)[], CHASER_OFF_NADIR_DEG?: (number)[], CHASER_CLOCK_DEG?: (number)[], IN_SAR_RIGHT?: (boolean)[], IN_SAR_LEFT?: (boolean)[], RADAR?: OCMRadarInputsT | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=OCMInspectionGeometry.d.ts.map