import * as flatbuffers from 'flatbuffers';
import { ephemerisDataLine, ephemerisDataLineT } from './ephemerisDataLine.js';
import { mplBurn, mplBurnT } from './mplBurn.js';
import { mplElements, mplElementsT } from './mplElements.js';
/**
 * Orbit-geometry detail.
 */
export declare class mplGeometrySolution implements flatbuffers.IUnpackableObject<mplGeometrySolutionT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): mplGeometrySolution;
    static getRootAsmplGeometrySolution(bb: flatbuffers.ByteBuffer, obj?: mplGeometrySolution): mplGeometrySolution;
    static getSizePrefixedRootAsmplGeometrySolution(bb: flatbuffers.ByteBuffer, obj?: mplGeometrySolution): mplGeometrySolution;
    /**
     * OrbitGeometry: the inertial state at the evaluated point (after BURN).
     */
    STATE(obj?: ephemerisDataLine): ephemerisDataLine | null;
    /**
     * OrbitGeometry: elements at the point (all anomalies and derived fields
     * filled); AnomalyConversion: the three anomalies.
     */
    ELEMENTS(obj?: mplElements): mplElements | null;
    /**
     * Distance from the body centre, km.
     */
    RADIUS_KM(): number;
    /**
     * The RIC axes at the point, before the burn, as three inertial unit
     * vectors R, I, C (9 values, row by row).
     */
    RIC_BASIS(index: number): number | null;
    ricBasisLength(): number;
    ricBasisArray(): Float64Array | null;
    /**
     * The VNC axes at the point, before the burn: V, N, C (9 values).
     */
    VNC_BASIS(index: number): number | null;
    vncBasisLength(): number;
    vncBasisArray(): Float64Array | null;
    /**
     * TimeOfFlight: forward time between the anomalies, s.
     */
    TIME_OF_FLIGHT_S(): number;
    /**
     * DeltaVTransform: the rotated delta-v (its AXES the target axes).
     */
    BURN(obj?: mplBurn): mplBurn | null;
    static startmplGeometrySolution(builder: flatbuffers.Builder): void;
    static addState(builder: flatbuffers.Builder, STATEOffset: flatbuffers.Offset): void;
    static addElements(builder: flatbuffers.Builder, ELEMENTSOffset: flatbuffers.Offset): void;
    static addRadiusKm(builder: flatbuffers.Builder, RADIUS_KM: number): void;
    static addRicBasis(builder: flatbuffers.Builder, RIC_BASISOffset: flatbuffers.Offset): void;
    static createRicBasisVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createRicBasisVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startRicBasisVector(builder: flatbuffers.Builder, numElems: number): void;
    static addVncBasis(builder: flatbuffers.Builder, VNC_BASISOffset: flatbuffers.Offset): void;
    static createVncBasisVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createVncBasisVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startVncBasisVector(builder: flatbuffers.Builder, numElems: number): void;
    static addTimeOfFlightS(builder: flatbuffers.Builder, TIME_OF_FLIGHT_S: number): void;
    static addBurn(builder: flatbuffers.Builder, BURNOffset: flatbuffers.Offset): void;
    static endmplGeometrySolution(builder: flatbuffers.Builder): flatbuffers.Offset;
    unpack(): mplGeometrySolutionT;
    unpackTo(_o: mplGeometrySolutionT): void;
}
export declare class mplGeometrySolutionT implements flatbuffers.IGeneratedObject {
    STATE: ephemerisDataLineT | null;
    ELEMENTS: mplElementsT | null;
    RADIUS_KM: number;
    RIC_BASIS: (number)[];
    VNC_BASIS: (number)[];
    TIME_OF_FLIGHT_S: number;
    BURN: mplBurnT | null;
    constructor(STATE?: ephemerisDataLineT | null, ELEMENTS?: mplElementsT | null, RADIUS_KM?: number, RIC_BASIS?: (number)[], VNC_BASIS?: (number)[], TIME_OF_FLIGHT_S?: number, BURN?: mplBurnT | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=mplGeometrySolution.d.ts.map