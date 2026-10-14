import * as flatbuffers from 'flatbuffers';
import { maneuverStatus } from './maneuverStatus.js';
/**
 * How maneuvers from several sources are merged.
 */
export declare class XMTManeuverPolicy implements flatbuffers.IUnpackableObject<XMTManeuverPolicyT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): XMTManeuverPolicy;
    static getRootAsXMTManeuverPolicy(bb: flatbuffers.ByteBuffer, obj?: XMTManeuverPolicy): XMTManeuverPolicy;
    static getSizePrefixedRootAsXMTManeuverPolicy(bb: flatbuffers.ByteBuffer, obj?: XMTManeuverPolicy): XMTManeuverPolicy;
    /**
     * Reports of one burn from different sources within this time merge, s.
     */
    TIME_TOLERANCE_S(): number;
    /**
     * Absolute delta-v tolerance for merging, km/s; NaN = not compared.
     */
    DELTA_V_TOLERANCE_KM_S(): number;
    /**
     * Relative delta-v tolerance for merging; NaN = not compared.
     */
    DELTA_V_RELATIVE_TOLERANCE(): number;
    /**
     * Statuses that make an object maneuverable.
     */
    MANEUVERABLE_STATUSES(index: number): maneuverStatus | null;
    maneuverableStatusesLength(): number;
    maneuverableStatusesArray(): Int8Array | null;
    /**
     * Statuses that retire the products before the maneuver.
     */
    RETIRING_STATUSES(index: number): maneuverStatus | null;
    retiringStatusesLength(): number;
    retiringStatusesArray(): Int8Array | null;
    static startXMTManeuverPolicy(builder: flatbuffers.Builder): void;
    static addTimeToleranceS(builder: flatbuffers.Builder, TIME_TOLERANCE_S: number): void;
    static addDeltaVToleranceKmS(builder: flatbuffers.Builder, DELTA_V_TOLERANCE_KM_S: number): void;
    static addDeltaVRelativeTolerance(builder: flatbuffers.Builder, DELTA_V_RELATIVE_TOLERANCE: number): void;
    static addManeuverableStatuses(builder: flatbuffers.Builder, MANEUVERABLE_STATUSESOffset: flatbuffers.Offset): void;
    static createManeuverableStatusesVector(builder: flatbuffers.Builder, data: maneuverStatus[]): flatbuffers.Offset;
    static startManeuverableStatusesVector(builder: flatbuffers.Builder, numElems: number): void;
    static addRetiringStatuses(builder: flatbuffers.Builder, RETIRING_STATUSESOffset: flatbuffers.Offset): void;
    static createRetiringStatusesVector(builder: flatbuffers.Builder, data: maneuverStatus[]): flatbuffers.Offset;
    static startRetiringStatusesVector(builder: flatbuffers.Builder, numElems: number): void;
    static endXMTManeuverPolicy(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createXMTManeuverPolicy(builder: flatbuffers.Builder, TIME_TOLERANCE_S: number, DELTA_V_TOLERANCE_KM_S: number, DELTA_V_RELATIVE_TOLERANCE: number, MANEUVERABLE_STATUSESOffset: flatbuffers.Offset, RETIRING_STATUSESOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): XMTManeuverPolicyT;
    unpackTo(_o: XMTManeuverPolicyT): void;
}
export declare class XMTManeuverPolicyT implements flatbuffers.IGeneratedObject {
    TIME_TOLERANCE_S: number;
    DELTA_V_TOLERANCE_KM_S: number;
    DELTA_V_RELATIVE_TOLERANCE: number;
    MANEUVERABLE_STATUSES: (maneuverStatus)[];
    RETIRING_STATUSES: (maneuverStatus)[];
    constructor(TIME_TOLERANCE_S?: number, DELTA_V_TOLERANCE_KM_S?: number, DELTA_V_RELATIVE_TOLERANCE?: number, MANEUVERABLE_STATUSES?: (maneuverStatus)[], RETIRING_STATUSES?: (maneuverStatus)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=XMTManeuverPolicy.d.ts.map