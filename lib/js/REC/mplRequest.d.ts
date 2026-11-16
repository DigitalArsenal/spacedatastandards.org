import * as flatbuffers from 'flatbuffers';
import { mplGeometryRequest, mplGeometryRequestT } from './mplGeometryRequest.js';
import { mplLambertRequest, mplLambertRequestT } from './mplLambertRequest.js';
import { mplPhasingRequest, mplPhasingRequestT } from './mplPhasingRequest.js';
import { mplRelativeRequest, mplRelativeRequestT } from './mplRelativeRequest.js';
import { mplRendezvousRequest, mplRendezvousRequestT } from './mplRendezvousRequest.js';
import { mplTransferRequest, mplTransferRequestT } from './mplTransferRequest.js';
/**
 * The question: which problem and its inputs. Only the sub-table matching
 * PROBLEM is read.
 */
export declare class mplRequest implements flatbuffers.IUnpackableObject<mplRequestT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): mplRequest;
    static getRootAsmplRequest(bb: flatbuffers.ByteBuffer, obj?: mplRequest): mplRequest;
    static getSizePrefixedRootAsmplRequest(bb: flatbuffers.ByteBuffer, obj?: mplRequest): mplRequest;
    /**
     * Gravitational parameter of the central body, km^3/s^2; 0 = Earth
     * (398600.4418).
     */
    MU_KM3_S2(): number;
    TRANSFER(obj?: mplTransferRequest): mplTransferRequest | null;
    LAMBERT(obj?: mplLambertRequest): mplLambertRequest | null;
    PHASING(obj?: mplPhasingRequest): mplPhasingRequest | null;
    RELATIVE(obj?: mplRelativeRequest): mplRelativeRequest | null;
    RENDEZVOUS(obj?: mplRendezvousRequest): mplRendezvousRequest | null;
    GEOMETRY(obj?: mplGeometryRequest): mplGeometryRequest | null;
    /**
     * Mass of the spacecraft at the plan's start, before its first burn, kg;
     * 0 = not stated.
     */
    INITIAL_MASS_KG(): number;
    /**
     * Specific impulse of the engine that flies the plan's burns, s; 0 = not
     * stated.
     *
     * With INITIAL_MASS_KG and SPECIFIC_IMPULSE_S both stated, the planner
     * fills each burn's DELTA_MASS_KG and the plan's TOTAL_DELTA_MASS_KG from
     * the ideal rocket equation: taking BURNS in plan order from INITIAL_MASS_KG,
     * a burn leaving mass m (kg) consumes
     * m * (1 - exp(-dv / (SPECIFIC_IMPULSE_S * g0))) kg, where dv is the burn's
     * delta-v in m/s (MAGNITUDE_KM_S * 1000) and g0 = 9.80665 m/s^2 exactly,
     * and the next burn starts from what is left; TOTAL_DELTA_MASS_KG is the
     * sum. A burn of nonzero DURATION_S is taken the same way, with
     * MAGNITUDE_KM_S as the delta-v its thrust delivers (exact for a constant
     * specific impulse). With either input not stated, DELTA_MASS_KG and
     * TOTAL_DELTA_MASS_KG stay 0 (not computed). A negative value is an
     * InvalidRequest.
     */
    SPECIFIC_IMPULSE_S(): number;
    static startmplRequest(builder: flatbuffers.Builder): void;
    static addMuKm3S2(builder: flatbuffers.Builder, MU_KM3_S2: number): void;
    static addTransfer(builder: flatbuffers.Builder, TRANSFEROffset: flatbuffers.Offset): void;
    static addLambert(builder: flatbuffers.Builder, LAMBERTOffset: flatbuffers.Offset): void;
    static addPhasing(builder: flatbuffers.Builder, PHASINGOffset: flatbuffers.Offset): void;
    static addRelative(builder: flatbuffers.Builder, RELATIVEOffset: flatbuffers.Offset): void;
    static addRendezvous(builder: flatbuffers.Builder, RENDEZVOUSOffset: flatbuffers.Offset): void;
    static addGeometry(builder: flatbuffers.Builder, GEOMETRYOffset: flatbuffers.Offset): void;
    static addInitialMassKg(builder: flatbuffers.Builder, INITIAL_MASS_KG: number): void;
    static addSpecificImpulseS(builder: flatbuffers.Builder, SPECIFIC_IMPULSE_S: number): void;
    static endmplRequest(builder: flatbuffers.Builder): flatbuffers.Offset;
    unpack(): mplRequestT;
    unpackTo(_o: mplRequestT): void;
}
export declare class mplRequestT implements flatbuffers.IGeneratedObject {
    MU_KM3_S2: number;
    TRANSFER: mplTransferRequestT | null;
    LAMBERT: mplLambertRequestT | null;
    PHASING: mplPhasingRequestT | null;
    RELATIVE: mplRelativeRequestT | null;
    RENDEZVOUS: mplRendezvousRequestT | null;
    GEOMETRY: mplGeometryRequestT | null;
    INITIAL_MASS_KG: number;
    SPECIFIC_IMPULSE_S: number;
    constructor(MU_KM3_S2?: number, TRANSFER?: mplTransferRequestT | null, LAMBERT?: mplLambertRequestT | null, PHASING?: mplPhasingRequestT | null, RELATIVE?: mplRelativeRequestT | null, RENDEZVOUS?: mplRendezvousRequestT | null, GEOMETRY?: mplGeometryRequestT | null, INITIAL_MASS_KG?: number, SPECIFIC_IMPULSE_S?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=mplRequest.d.ts.map