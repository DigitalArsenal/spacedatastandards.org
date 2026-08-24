import * as flatbuffers from 'flatbuffers';
import { BEMHopSlot, BEMHopSlotT } from './BEMHopSlot.js';
import { BEMProvenance, BEMProvenanceT } from './BEMProvenance.js';
/**
 * Periodic beam-hopping schedule carried by a deployed beam descriptor.
 */
export declare class BEMHopSchedule implements flatbuffers.IUnpackableObject<BEMHopScheduleT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): BEMHopSchedule;
    static getRootAsBEMHopSchedule(bb: flatbuffers.ByteBuffer, obj?: BEMHopSchedule): BEMHopSchedule;
    static getSizePrefixedRootAsBEMHopSchedule(bb: flatbuffers.ByteBuffer, obj?: BEMHopSchedule): BEMHopSchedule;
    SCHEDULE_ID(): string;
    SCHEDULE_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    /**
     * Seconds since 1970-01-01T00:00:00 UTC at which slot offsets begin.
     */
    EPOCH(): number;
    PERIOD_S(): number;
    REPEATS(): boolean;
    SLOTS(index: number, obj?: BEMHopSlot): BEMHopSlot | null;
    slotsLength(): number;
    PROVENANCE(obj?: BEMProvenance): BEMProvenance | null;
    static startBEMHopSchedule(builder: flatbuffers.Builder): void;
    static addScheduleId(builder: flatbuffers.Builder, SCHEDULE_IDOffset: flatbuffers.Offset): void;
    static addEpoch(builder: flatbuffers.Builder, EPOCH: number): void;
    static addPeriodS(builder: flatbuffers.Builder, PERIOD_S: number): void;
    static addRepeats(builder: flatbuffers.Builder, REPEATS: boolean): void;
    static addSlots(builder: flatbuffers.Builder, SLOTSOffset: flatbuffers.Offset): void;
    static createSlotsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startSlotsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addProvenance(builder: flatbuffers.Builder, PROVENANCEOffset: flatbuffers.Offset): void;
    static endBEMHopSchedule(builder: flatbuffers.Builder): flatbuffers.Offset;
    unpack(): BEMHopScheduleT;
    unpackTo(_o: BEMHopScheduleT): void;
}
export declare class BEMHopScheduleT implements flatbuffers.IGeneratedObject {
    SCHEDULE_ID: string | Uint8Array | null;
    EPOCH: number;
    PERIOD_S: number;
    REPEATS: boolean;
    SLOTS: (BEMHopSlotT)[];
    PROVENANCE: BEMProvenanceT | null;
    constructor(SCHEDULE_ID?: string | Uint8Array | null, EPOCH?: number, PERIOD_S?: number, REPEATS?: boolean, SLOTS?: (BEMHopSlotT)[], PROVENANCE?: BEMProvenanceT | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=BEMHopSchedule.d.ts.map