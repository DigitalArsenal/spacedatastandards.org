import * as flatbuffers from 'flatbuffers';
/**
 * One replenishment option: how the energy store is reset.
 */
export declare class VEPReplenishment implements flatbuffers.IUnpackableObject<VEPReplenishmentT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): VEPReplenishment;
    static getRootAsVEPReplenishment(bb: flatbuffers.ByteBuffer, obj?: VEPReplenishment): VEPReplenishment;
    static getSizePrefixedRootAsVEPReplenishment(bb: flatbuffers.ByteBuffer, obj?: VEPReplenishment): VEPReplenishment;
    /**
     * `$TFN.ID` of a facility where this replenishment is available. Absent
     * for a replenishment that is not facility-bound.
     */
    FACILITY_ID(): string | null;
    FACILITY_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Typical duration of the replenishment, seconds.
     */
    DURATION_S(): number;
    /**
     * Transfer rate, in TRANSFER_RATE_UNITS.
     */
    TRANSFER_RATE_VALUE(): number;
    /**
     * Units of TRANSFER_RATE_VALUE, verbatim.
     */
    TRANSFER_RATE_UNITS(): string | null;
    TRANSFER_RATE_UNITS(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Replenishment happens while the vehicle is underway (aerial
     * refuelling, underway replenishment).
     */
    IN_MOTION(): boolean;
    static startVEPReplenishment(builder: flatbuffers.Builder): void;
    static addFacilityId(builder: flatbuffers.Builder, FACILITY_IDOffset: flatbuffers.Offset): void;
    static addDurationS(builder: flatbuffers.Builder, DURATION_S: number): void;
    static addTransferRateValue(builder: flatbuffers.Builder, TRANSFER_RATE_VALUE: number): void;
    static addTransferRateUnits(builder: flatbuffers.Builder, TRANSFER_RATE_UNITSOffset: flatbuffers.Offset): void;
    static addInMotion(builder: flatbuffers.Builder, IN_MOTION: boolean): void;
    static endVEPReplenishment(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createVEPReplenishment(builder: flatbuffers.Builder, FACILITY_IDOffset: flatbuffers.Offset, DURATION_S: number, TRANSFER_RATE_VALUE: number, TRANSFER_RATE_UNITSOffset: flatbuffers.Offset, IN_MOTION: boolean): flatbuffers.Offset;
    unpack(): VEPReplenishmentT;
    unpackTo(_o: VEPReplenishmentT): void;
}
export declare class VEPReplenishmentT implements flatbuffers.IGeneratedObject {
    FACILITY_ID: string | Uint8Array | null;
    DURATION_S: number;
    TRANSFER_RATE_VALUE: number;
    TRANSFER_RATE_UNITS: string | Uint8Array | null;
    IN_MOTION: boolean;
    constructor(FACILITY_ID?: string | Uint8Array | null, DURATION_S?: number, TRANSFER_RATE_VALUE?: number, TRANSFER_RATE_UNITS?: string | Uint8Array | null, IN_MOTION?: boolean);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=VEPReplenishment.d.ts.map