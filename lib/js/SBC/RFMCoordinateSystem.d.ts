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
    constructor(NAME?: string | Uint8Array | null, AXIS_TYPE?: rfmAxisType, ORIGIN?: RFMOriginT | null, AXIS_REFERENCE_BODY_ID?: number, EPOCH?: string | Uint8Array | null, EPOCH_TIME_SYSTEM?: string | Uint8Array | null, OBJECT_REFERENCED_AXES?: RFMObjectReferencedAxesT | null, LOCAL_ALIGNED_CONSTRAINED_AXES?: RFMLocalAlignedConstrainedAxesT | null, KERNEL_FRAME_NAME?: string | Uint8Array | null, KERNEL_FRAME_ID?: number, EOP_DATA_SET_CID?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=RFMCoordinateSystem.d.ts.map