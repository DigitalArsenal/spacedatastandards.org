import * as flatbuffers from 'flatbuffers';
import { FRMVector3, FRMVector3T } from './FRMVector3.js';
import { TIMInstant, TIMInstantT } from './TIMInstant.js';
import { prwSteeringBasis } from './prwSteeringBasis.js';
/**
 * Impulsive change at TDB epoch; delta velocity is m/s in the named basis.
 */
export declare class PRWImpulse implements flatbuffers.IUnpackableObject<PRWImpulseT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): PRWImpulse;
    static getRootAsPRWImpulse(bb: flatbuffers.ByteBuffer, obj?: PRWImpulse): PRWImpulse;
    static getSizePrefixedRootAsPRWImpulse(bb: flatbuffers.ByteBuffer, obj?: PRWImpulse): PRWImpulse;
    EPOCH(obj?: TIMInstant): TIMInstant | null;
    DELTA_V(obj?: FRMVector3): FRMVector3 | null;
    VECTOR_BASIS(): prwSteeringBasis;
    static startPRWImpulse(builder: flatbuffers.Builder): void;
    static addEpoch(builder: flatbuffers.Builder, EPOCHOffset: flatbuffers.Offset): void;
    static addDeltaV(builder: flatbuffers.Builder, DELTA_VOffset: flatbuffers.Offset): void;
    static addVectorBasis(builder: flatbuffers.Builder, VECTOR_BASIS: prwSteeringBasis): void;
    static endPRWImpulse(builder: flatbuffers.Builder): flatbuffers.Offset;
    unpack(): PRWImpulseT;
    unpackTo(_o: PRWImpulseT): void;
}
export declare class PRWImpulseT implements flatbuffers.IGeneratedObject {
    EPOCH: TIMInstantT | null;
    DELTA_V: FRMVector3T | null;
    VECTOR_BASIS: prwSteeringBasis;
    constructor(EPOCH?: TIMInstantT | null, DELTA_V?: FRMVector3T | null, VECTOR_BASIS?: prwSteeringBasis);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=PRWImpulse.d.ts.map