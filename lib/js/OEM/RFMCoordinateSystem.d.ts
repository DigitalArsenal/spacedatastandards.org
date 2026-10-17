import * as flatbuffers from 'flatbuffers';
import { RFMLocalAlignedConstrainedAxes, RFMLocalAlignedConstrainedAxesT } from './RFMLocalAlignedConstrainedAxes.js';
import { RFMObjectReferencedAxes, RFMObjectReferencedAxesT } from './RFMObjectReferencedAxes.js';
import { RFMOrigin, RFMOriginT } from './RFMOrigin.js';
import { rfmAxisType } from './rfmAxisType.js';
/**
 * A fully specified coordinate system: an axis set, an origin, and the epoch
 * and time system the axis set is evaluated at. This is the unit a frames
 * consumer needs; the pre-existing RFMUnion members name an axis convention
 * alone and cannot express an origin.
 */
export declare class RFMCoordinateSystem implements flatbuffers.IUnpackableObject<RFMCoordinateSystemT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): RFMCoordinateSystem;
    static getRootAsRFMCoordinateSystem(bb: flatbuffers.ByteBuffer, obj?: RFMCoordinateSystem): RFMCoordinateSystem;
    static getSizePrefixedRootAsRFMCoordinateSystem(bb: flatbuffers.ByteBuffer, obj?: RFMCoordinateSystem): RFMCoordinateSystem;
    /**
     * Stable name for this coordinate system within the producing data set.
     */
    NAME(): string | null;
    NAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Orientation rule.
     */
    AXIS_TYPE(): rfmAxisType;
    /**
     * Centre of the system.
     */
    ORIGIN(obj?: RFMOrigin): RFMOrigin | null;
    /**
     * Ephemeris body code whose equator/rotation defines the axes, for the
     * body-referenced axis types. Independent of ORIGIN.
     */
    AXIS_REFERENCE_BODY_ID(): number;
    /**
     * Reference epoch the axis set is evaluated at, ISO 8601. Required for the
     * of-date and of-epoch axis types; ignored by the inertial ones.
     */
    EPOCH(): string | null;
    EPOCH(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Time system the EPOCH is expressed in, named by the $TIM timingStandard
     * member name (for example "UTC", "TAI", "TT", "TDB", "A1").
     */
    EPOCH_TIME_SYSTEM(): string | null;
    EPOCH_TIME_SYSTEM(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Extra parameters for OBJECT_REFERENCED axes.
     */
    OBJECT_REFERENCED_AXES(obj?: RFMObjectReferencedAxes): RFMObjectReferencedAxes | null;
    /**
     * Extra parameters for LOCAL_ALIGNED_CONSTRAINED axes.
     */
    LOCAL_ALIGNED_CONSTRAINED_AXES(obj?: RFMLocalAlignedConstrainedAxes): RFMLocalAlignedConstrainedAxes | null;
    /**
     * Kernel-declared frame name for EPHEMERIS_KERNEL_DEFINED axes.
     */
    KERNEL_FRAME_NAME(): string | null;
    KERNEL_FRAME_NAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Kernel-declared numeric frame id for EPHEMERIS_KERNEL_DEFINED axes.
     */
    KERNEL_FRAME_ID(): number;
    /**
     * Content identifier of the Earth-orientation data set used to realise
     * this system, when the axis chain requires one. Recorded so that two
     * consumers can prove they used the same table rather than assume it.
     */
    EOP_DATA_SET_CID(): string | null;
    EOP_DATA_SET_CID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * ICRS right ascension of the Galactic center, degrees. NaN means absent.
     * Sgr A*: 17h45m40.0409s (Reid & Brunthaler 2004, ApJ 616, 872).
     */
    GALCEN_RA_DEG(): number;
    /**
     * ICRS declination of the Galactic center, degrees. NaN means absent.
     * Sgr A*: -29d00m28.118s (Reid & Brunthaler 2004, ApJ 616, 872).
     */
    GALCEN_DEC_DEG(): number;
    /**
     * Sun-to-Galactic-center distance R0, parsecs. NaN means absent.
     * Example: 8178 pc (GRAVITY Collaboration 2019, A&A 625, L10).
     */
    GALCEN_DISTANCE_PC(): number;
    /**
     * Solar height above the Galactic midplane, parsecs, positive north.
     * NaN means absent; example: 20.8 pc (Bennett & Bovy 2019, MNRAS 482, 1417).
     */
    Z_SUN_PC(): number;
    /**
     * Roll angle in degrees in the Astropy Galactocentric convention.
     * NaN means absent, not zero. With GALACTIC axes, the five explicit scalar
     * parameters define a derived Galactocentric orientation: X points from
     * the Sun toward the center's projection in the midplane, Y follows
     * Galactic rotation, and Z completes a right-handed triad toward Galactic
     * north. This parameterized orientation is independent of ORIGIN; with
     * GALACTIC_CENTER the Sun lies at X=-sqrt(R0^2-Z_SUN_PC^2), Y=0, Z=Z_SUN_PC.
     * All five scalars must be finite for a spatial Galactocentric transform,
     * with R0 > 0 and abs(Z_SUN_PC) <= R0; none has an assumed default.
     */
    ROLL_DEG(): number;
    /**
     * Total solar velocity [v_X,v_Y,v_Z] in km/s in the resulting Galactocentric
     * axes, including circular motion (not just peculiar U,V,W). Exactly three
     * components when present; omit the vector when unknown, or use NaN for
     * an unknown component. A velocity transform requires all three finite.
     * Schonrich, Binney & Dehnen (2010), MNRAS 403, 1829, constrain peculiar
     * motion; Reid & Brunthaler (2020), ApJ 892, 39, constrain Sgr A* motion.
     * Publishers must state their adopted total velocity; no default is implied.
     */
    V_SUN_KMS(index: number): number | null;
    vSunKmsLength(): number;
    vSunKmsArray(): Float64Array | null;
    static startRFMCoordinateSystem(builder: flatbuffers.Builder): void;
    static addName(builder: flatbuffers.Builder, NAMEOffset: flatbuffers.Offset): void;
    static addAxisType(builder: flatbuffers.Builder, AXIS_TYPE: rfmAxisType): void;
    static addOrigin(builder: flatbuffers.Builder, ORIGINOffset: flatbuffers.Offset): void;
    static addAxisReferenceBodyId(builder: flatbuffers.Builder, AXIS_REFERENCE_BODY_ID: number): void;
    static addEpoch(builder: flatbuffers.Builder, EPOCHOffset: flatbuffers.Offset): void;
    static addEpochTimeSystem(builder: flatbuffers.Builder, EPOCH_TIME_SYSTEMOffset: flatbuffers.Offset): void;
    static addObjectReferencedAxes(builder: flatbuffers.Builder, OBJECT_REFERENCED_AXESOffset: flatbuffers.Offset): void;
    static addLocalAlignedConstrainedAxes(builder: flatbuffers.Builder, LOCAL_ALIGNED_CONSTRAINED_AXESOffset: flatbuffers.Offset): void;
    static addKernelFrameName(builder: flatbuffers.Builder, KERNEL_FRAME_NAMEOffset: flatbuffers.Offset): void;
    static addKernelFrameId(builder: flatbuffers.Builder, KERNEL_FRAME_ID: number): void;
    static addEopDataSetCid(builder: flatbuffers.Builder, EOP_DATA_SET_CIDOffset: flatbuffers.Offset): void;
    static addGalcenRaDeg(builder: flatbuffers.Builder, GALCEN_RA_DEG: number): void;
    static addGalcenDecDeg(builder: flatbuffers.Builder, GALCEN_DEC_DEG: number): void;
    static addGalcenDistancePc(builder: flatbuffers.Builder, GALCEN_DISTANCE_PC: number): void;
    static addZSunPc(builder: flatbuffers.Builder, Z_SUN_PC: number): void;
    static addRollDeg(builder: flatbuffers.Builder, ROLL_DEG: number): void;
    static addVSunKms(builder: flatbuffers.Builder, V_SUN_KMSOffset: flatbuffers.Offset): void;
    static createVSunKmsVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createVSunKmsVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startVSunKmsVector(builder: flatbuffers.Builder, numElems: number): void;
    static endRFMCoordinateSystem(builder: flatbuffers.Builder): flatbuffers.Offset;
    unpack(): RFMCoordinateSystemT;
    unpackTo(_o: RFMCoordinateSystemT): void;
}
export declare class RFMCoordinateSystemT implements flatbuffers.IGeneratedObject {
    NAME: string | Uint8Array | null;
    AXIS_TYPE: rfmAxisType;
    ORIGIN: RFMOriginT | null;
    AXIS_REFERENCE_BODY_ID: number;
    EPOCH: string | Uint8Array | null;
    EPOCH_TIME_SYSTEM: string | Uint8Array | null;
    OBJECT_REFERENCED_AXES: RFMObjectReferencedAxesT | null;
    LOCAL_ALIGNED_CONSTRAINED_AXES: RFMLocalAlignedConstrainedAxesT | null;
    KERNEL_FRAME_NAME: string | Uint8Array | null;
    KERNEL_FRAME_ID: number;
    EOP_DATA_SET_CID: string | Uint8Array | null;
    GALCEN_RA_DEG: number;
    GALCEN_DEC_DEG: number;
    GALCEN_DISTANCE_PC: number;
    Z_SUN_PC: number;
    ROLL_DEG: number;
    V_SUN_KMS: (number)[];
    constructor(NAME?: string | Uint8Array | null, AXIS_TYPE?: rfmAxisType, ORIGIN?: RFMOriginT | null, AXIS_REFERENCE_BODY_ID?: number, EPOCH?: string | Uint8Array | null, EPOCH_TIME_SYSTEM?: string | Uint8Array | null, OBJECT_REFERENCED_AXES?: RFMObjectReferencedAxesT | null, LOCAL_ALIGNED_CONSTRAINED_AXES?: RFMLocalAlignedConstrainedAxesT | null, KERNEL_FRAME_NAME?: string | Uint8Array | null, KERNEL_FRAME_ID?: number, EOP_DATA_SET_CID?: string | Uint8Array | null, GALCEN_RA_DEG?: number, GALCEN_DEC_DEG?: number, GALCEN_DISTANCE_PC?: number, Z_SUN_PC?: number, ROLL_DEG?: number, V_SUN_KMS?: (number)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=RFMCoordinateSystem.d.ts.map