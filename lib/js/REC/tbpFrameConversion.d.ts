import * as flatbuffers from 'flatbuffers';
import { tbpConversionDirection } from './tbpConversionDirection.js';
import { tbpState, tbpStateT } from './tbpState.js';
/**
 * A state converted between the synodic and inertial frames. The inertial
 * frame is centred on the barycentre with its X axis along the synodic X
 * axis at REFERENCE_EPOCH_MS (elapsed time 0) and Z along the system's
 * angular momentum.
 */
export declare class tbpFrameConversion implements flatbuffers.IUnpackableObject<tbpFrameConversionT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): tbpFrameConversion;
    static getRootAstbpFrameConversion(bb: flatbuffers.ByteBuffer, obj?: tbpFrameConversion): tbpFrameConversion;
    static getSizePrefixedRootAstbpFrameConversion(bb: flatbuffers.ByteBuffer, obj?: tbpFrameConversion): tbpFrameConversion;
    DIRECTION(): tbpConversionDirection;
    /**
     * Unix milliseconds when the two frames are aligned; 0 = relative time
     * only.
     */
    REFERENCE_EPOCH_MS(): bigint;
    /**
     * Seconds from the alignment to the state.
     */
    ELAPSED_S(): number;
    /**
     * The synodic state (input or result), non-dimensional.
     */
    SYNODIC(obj?: tbpState): tbpState | null;
    /**
     * The inertial state (input or result): km and km/s, 6 values.
     */
    INERTIAL(index: number): number | null;
    inertialLength(): number;
    inertialArray(): Float64Array | null;
    /**
     * Reference primary body: 0 = barycenter, 1 = P1 (Earth), 2 = P2 (Moon).
     */
    REFERENCE_PRIMARY(): number;
    /**
     * Epoch Julian date (days) for J2000/ephemeris conversions; 0 = from REFERENCE_EPOCH_MS.
     */
    JULIAN_DATE(): number;
    /**
     * Geodetic/selenodetic coordinates [lat_deg, lon_deg, alt_km] (3 values).
     */
    LLA_DEG_KM(index: number): number | null;
    llaDegKmLength(): number;
    llaDegKmArray(): Float64Array | null;
    /**
     * Classical Keplerian elements [a_km, e, inc_deg, raan_deg, argp_deg, nu_deg] (6 values).
     */
    ORBITAL_ELEMENTS(index: number): number | null;
    orbitalElementsLength(): number;
    orbitalElementsArray(): Float64Array | null;
    /**
     * Batch synodic states (N * 6 values, non-dimensional) for vectorized conversion.
     */
    BATCH_SYNODIC_STATES(index: number): number | null;
    batchSynodicStatesLength(): number;
    batchSynodicStatesArray(): Float64Array | null;
    /**
     * Batch inertial/target states (N * 6 values, km and km/s) for vectorized conversion.
     */
    BATCH_INERTIAL_STATES(index: number): number | null;
    batchInertialStatesLength(): number;
    batchInertialStatesArray(): Float64Array | null;
    static starttbpFrameConversion(builder: flatbuffers.Builder): void;
    static addDirection(builder: flatbuffers.Builder, DIRECTION: tbpConversionDirection): void;
    static addReferenceEpochMs(builder: flatbuffers.Builder, REFERENCE_EPOCH_MS: bigint): void;
    static addElapsedS(builder: flatbuffers.Builder, ELAPSED_S: number): void;
    static addSynodic(builder: flatbuffers.Builder, SYNODICOffset: flatbuffers.Offset): void;
    static addInertial(builder: flatbuffers.Builder, INERTIALOffset: flatbuffers.Offset): void;
    static createInertialVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createInertialVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startInertialVector(builder: flatbuffers.Builder, numElems: number): void;
    static addReferencePrimary(builder: flatbuffers.Builder, REFERENCE_PRIMARY: number): void;
    static addJulianDate(builder: flatbuffers.Builder, JULIAN_DATE: number): void;
    static addLlaDegKm(builder: flatbuffers.Builder, LLA_DEG_KMOffset: flatbuffers.Offset): void;
    static createLlaDegKmVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createLlaDegKmVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startLlaDegKmVector(builder: flatbuffers.Builder, numElems: number): void;
    static addOrbitalElements(builder: flatbuffers.Builder, ORBITAL_ELEMENTSOffset: flatbuffers.Offset): void;
    static createOrbitalElementsVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createOrbitalElementsVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startOrbitalElementsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addBatchSynodicStates(builder: flatbuffers.Builder, BATCH_SYNODIC_STATESOffset: flatbuffers.Offset): void;
    static createBatchSynodicStatesVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createBatchSynodicStatesVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startBatchSynodicStatesVector(builder: flatbuffers.Builder, numElems: number): void;
    static addBatchInertialStates(builder: flatbuffers.Builder, BATCH_INERTIAL_STATESOffset: flatbuffers.Offset): void;
    static createBatchInertialStatesVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createBatchInertialStatesVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startBatchInertialStatesVector(builder: flatbuffers.Builder, numElems: number): void;
    static endtbpFrameConversion(builder: flatbuffers.Builder): flatbuffers.Offset;
    unpack(): tbpFrameConversionT;
    unpackTo(_o: tbpFrameConversionT): void;
}
export declare class tbpFrameConversionT implements flatbuffers.IGeneratedObject {
    DIRECTION: tbpConversionDirection;
    REFERENCE_EPOCH_MS: bigint;
    ELAPSED_S: number;
    SYNODIC: tbpStateT | null;
    INERTIAL: (number)[];
    REFERENCE_PRIMARY: number;
    JULIAN_DATE: number;
    LLA_DEG_KM: (number)[];
    ORBITAL_ELEMENTS: (number)[];
    BATCH_SYNODIC_STATES: (number)[];
    BATCH_INERTIAL_STATES: (number)[];
    constructor(DIRECTION?: tbpConversionDirection, REFERENCE_EPOCH_MS?: bigint, ELAPSED_S?: number, SYNODIC?: tbpStateT | null, INERTIAL?: (number)[], REFERENCE_PRIMARY?: number, JULIAN_DATE?: number, LLA_DEG_KM?: (number)[], ORBITAL_ELEMENTS?: (number)[], BATCH_SYNODIC_STATES?: (number)[], BATCH_INERTIAL_STATES?: (number)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=tbpFrameConversion.d.ts.map