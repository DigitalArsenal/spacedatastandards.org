import * as flatbuffers from 'flatbuffers';
import { bemHopSlotState } from './bemHopSlotState.js';
/**
 * One time slice of a periodic beam-hopping plan.
 */
export declare class BEMHopSlot implements flatbuffers.IUnpackableObject<BEMHopSlotT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): BEMHopSlot;
    static getRootAsBEMHopSlot(bb: flatbuffers.ByteBuffer, obj?: BEMHopSlot): BEMHopSlot;
    static getSizePrefixedRootAsBEMHopSlot(bb: flatbuffers.ByteBuffer, obj?: BEMHopSlot): BEMHopSlot;
    SLOT_ID(): string;
    SLOT_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    /**
     * Offset from BEMHopSchedule.EPOCH in seconds.
     */
    START_OFFSET_S(): number;
    DURATION_S(): number;
    STATE(): bemHopSlotState;
    /**
     * Beam activated in this slot. May name this BEM.ID or another beam in a
     * coordinated schedule.
     */
    BEAM_ID(): string;
    BEAM_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    TARGET_CELL_ID(): string | null;
    TARGET_CELL_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    TARGET_CENTER_LATITUDE_DEG(): number;
    TARGET_CENTER_LONGITUDE_DEG(): number;
    CENTER_FREQUENCY_HZ(): number;
    EIRP_DBW(): number;
    PRIORITY(): number;
    static startBEMHopSlot(builder: flatbuffers.Builder): void;
    static addSlotId(builder: flatbuffers.Builder, SLOT_IDOffset: flatbuffers.Offset): void;
    static addStartOffsetS(builder: flatbuffers.Builder, START_OFFSET_S: number): void;
    static addDurationS(builder: flatbuffers.Builder, DURATION_S: number): void;
    static addState(builder: flatbuffers.Builder, STATE: bemHopSlotState): void;
    static addBeamId(builder: flatbuffers.Builder, BEAM_IDOffset: flatbuffers.Offset): void;
    static addTargetCellId(builder: flatbuffers.Builder, TARGET_CELL_IDOffset: flatbuffers.Offset): void;
    static addTargetCenterLatitudeDeg(builder: flatbuffers.Builder, TARGET_CENTER_LATITUDE_DEG: number): void;
    static addTargetCenterLongitudeDeg(builder: flatbuffers.Builder, TARGET_CENTER_LONGITUDE_DEG: number): void;
    static addCenterFrequencyHz(builder: flatbuffers.Builder, CENTER_FREQUENCY_HZ: number): void;
    static addEirpDbw(builder: flatbuffers.Builder, EIRP_DBW: number): void;
    static addPriority(builder: flatbuffers.Builder, PRIORITY: number): void;
    static endBEMHopSlot(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createBEMHopSlot(builder: flatbuffers.Builder, SLOT_IDOffset: flatbuffers.Offset, START_OFFSET_S: number, DURATION_S: number, STATE: bemHopSlotState, BEAM_IDOffset: flatbuffers.Offset, TARGET_CELL_IDOffset: flatbuffers.Offset, TARGET_CENTER_LATITUDE_DEG: number, TARGET_CENTER_LONGITUDE_DEG: number, CENTER_FREQUENCY_HZ: number, EIRP_DBW: number, PRIORITY: number): flatbuffers.Offset;
    unpack(): BEMHopSlotT;
    unpackTo(_o: BEMHopSlotT): void;
}
export declare class BEMHopSlotT implements flatbuffers.IGeneratedObject {
    SLOT_ID: string | Uint8Array | null;
    START_OFFSET_S: number;
    DURATION_S: number;
    STATE: bemHopSlotState;
    BEAM_ID: string | Uint8Array | null;
    TARGET_CELL_ID: string | Uint8Array | null;
    TARGET_CENTER_LATITUDE_DEG: number;
    TARGET_CENTER_LONGITUDE_DEG: number;
    CENTER_FREQUENCY_HZ: number;
    EIRP_DBW: number;
    PRIORITY: number;
    constructor(SLOT_ID?: string | Uint8Array | null, START_OFFSET_S?: number, DURATION_S?: number, STATE?: bemHopSlotState, BEAM_ID?: string | Uint8Array | null, TARGET_CELL_ID?: string | Uint8Array | null, TARGET_CENTER_LATITUDE_DEG?: number, TARGET_CENTER_LONGITUDE_DEG?: number, CENTER_FREQUENCY_HZ?: number, EIRP_DBW?: number, PRIORITY?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=BEMHopSlot.d.ts.map