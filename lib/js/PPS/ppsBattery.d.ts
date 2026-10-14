import * as flatbuffers from 'flatbuffers';
/**
 * The battery.
 */
export declare class ppsBattery implements flatbuffers.IUnpackableObject<ppsBatteryT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): ppsBattery;
    static getRootAsppsBattery(bb: flatbuffers.ByteBuffer, obj?: ppsBattery): ppsBattery;
    static getSizePrefixedRootAsppsBattery(bb: flatbuffers.ByteBuffer, obj?: ppsBattery): ppsBattery;
    /**
     * Usable capacity, Wh; 0 = from BUS_SPECIFICATION.BATTERY_CAPACITY, else the
     * simulator's default.
     */
    CAPACITY_WH(): number;
    /**
     * State of charge at the start, 0-1; NaN = the simulator's default.
     */
    INITIAL_STATE_OF_CHARGE(): number;
    /**
     * Lowest state of charge allowed, 0-1; 0 = none.
     */
    MIN_STATE_OF_CHARGE(): number;
    /**
     * Charge and discharge efficiency, 0-1; 0 = 1.
     */
    CHARGE_EFFICIENCY(): number;
    DISCHARGE_EFFICIENCY(): number;
    static startppsBattery(builder: flatbuffers.Builder): void;
    static addCapacityWh(builder: flatbuffers.Builder, CAPACITY_WH: number): void;
    static addInitialStateOfCharge(builder: flatbuffers.Builder, INITIAL_STATE_OF_CHARGE: number): void;
    static addMinStateOfCharge(builder: flatbuffers.Builder, MIN_STATE_OF_CHARGE: number): void;
    static addChargeEfficiency(builder: flatbuffers.Builder, CHARGE_EFFICIENCY: number): void;
    static addDischargeEfficiency(builder: flatbuffers.Builder, DISCHARGE_EFFICIENCY: number): void;
    static endppsBattery(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createppsBattery(builder: flatbuffers.Builder, CAPACITY_WH: number, INITIAL_STATE_OF_CHARGE: number, MIN_STATE_OF_CHARGE: number, CHARGE_EFFICIENCY: number, DISCHARGE_EFFICIENCY: number): flatbuffers.Offset;
    unpack(): ppsBatteryT;
    unpackTo(_o: ppsBatteryT): void;
}
export declare class ppsBatteryT implements flatbuffers.IGeneratedObject {
    CAPACITY_WH: number;
    INITIAL_STATE_OF_CHARGE: number;
    MIN_STATE_OF_CHARGE: number;
    CHARGE_EFFICIENCY: number;
    DISCHARGE_EFFICIENCY: number;
    constructor(CAPACITY_WH?: number, INITIAL_STATE_OF_CHARGE?: number, MIN_STATE_OF_CHARGE?: number, CHARGE_EFFICIENCY?: number, DISCHARGE_EFFICIENCY?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=ppsBattery.d.ts.map