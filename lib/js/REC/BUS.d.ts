import * as flatbuffers from 'flatbuffers';
import { BusStabilizationType } from './BusStabilizationType.js';
import { busSize } from './busSize.js';
/**
 * Satellite Bus Specification
 */
export declare class BUS implements flatbuffers.IUnpackableObject<BUST> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): BUS;
    static getRootAsBUS(bb: flatbuffers.ByteBuffer, obj?: BUS): BUS;
    static getSizePrefixedRootAsBUS(bb: flatbuffers.ByteBuffer, obj?: BUS): BUS;
    static bufferHasIdentifier(bb: flatbuffers.ByteBuffer): boolean;
    /**
     * Unique identifier
     */
    ID(): string | null;
    ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Bus name or model
     */
    NAME(): string | null;
    NAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Manufacturer
     */
    MANUFACTURER(): string | null;
    MANUFACTURER(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Bus size category
     */
    SIZE(): busSize;
    /**
     * Dry mass in kg
     */
    DRY_MASS(): number;
    /**
     * Maximum wet mass (with propellant) in kg
     */
    WET_MASS(): number;
    /**
     * Maximum payload mass in kg
     */
    PAYLOAD_MASS(): number;
    /**
     * Bus dimensions X in meters
     */
    DIM_X(): number;
    /**
     * Bus dimensions Y in meters
     */
    DIM_Y(): number;
    /**
     * Bus dimensions Z in meters
     */
    DIM_Z(): number;
    /**
     * Stowed dimensions X in meters
     */
    STOWED_X(): number;
    /**
     * Stowed dimensions Y in meters
     */
    STOWED_Y(): number;
    /**
     * Stowed dimensions Z in meters
     */
    STOWED_Z(): number;
    /**
     * Total power generation in Watts
     */
    POWER_GENERATION(): number;
    /**
     * Available payload power in Watts
     */
    PAYLOAD_POWER(): number;
    /**
     * Battery capacity in Watt-hours
     */
    BATTERY_CAPACITY(): number;
    /**
     * Stabilization method
     */
    STABILIZATION(): BusStabilizationType;
    /**
     * Pointing accuracy in degrees
     */
    POINTING_ACCURACY(): number;
    /**
     * Pointing knowledge in degrees
     */
    POINTING_KNOWLEDGE(): number;
    /**
     * Design life in years
     */
    DESIGN_LIFE(): number;
    /**
     * Data storage capacity in Gbits
     */
    DATA_STORAGE(): number;
    /**
     * Downlink data rate in Mbps
     */
    DOWNLINK_RATE(): number;
    /**
     * Number of payload slots/interfaces
     */
    PAYLOAD_SLOTS(): number;
    /**
     * Heritage missions count
     */
    HERITAGE_COUNT(): number;
    /**
     * Additional notes
     */
    NOTES(): string | null;
    NOTES(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    static startBUS(builder: flatbuffers.Builder): void;
    static addId(builder: flatbuffers.Builder, IDOffset: flatbuffers.Offset): void;
    static addName(builder: flatbuffers.Builder, NAMEOffset: flatbuffers.Offset): void;
    static addManufacturer(builder: flatbuffers.Builder, MANUFACTUREROffset: flatbuffers.Offset): void;
    static addSize(builder: flatbuffers.Builder, SIZE: busSize): void;
    static addDryMass(builder: flatbuffers.Builder, DRY_MASS: number): void;
    static addWetMass(builder: flatbuffers.Builder, WET_MASS: number): void;
    static addPayloadMass(builder: flatbuffers.Builder, PAYLOAD_MASS: number): void;
    static addDimX(builder: flatbuffers.Builder, DIM_X: number): void;
    static addDimY(builder: flatbuffers.Builder, DIM_Y: number): void;
    static addDimZ(builder: flatbuffers.Builder, DIM_Z: number): void;
    static addStowedX(builder: flatbuffers.Builder, STOWED_X: number): void;
    static addStowedY(builder: flatbuffers.Builder, STOWED_Y: number): void;
    static addStowedZ(builder: flatbuffers.Builder, STOWED_Z: number): void;
    static addPowerGeneration(builder: flatbuffers.Builder, POWER_GENERATION: number): void;
    static addPayloadPower(builder: flatbuffers.Builder, PAYLOAD_POWER: number): void;
    static addBatteryCapacity(builder: flatbuffers.Builder, BATTERY_CAPACITY: number): void;
    static addStabilization(builder: flatbuffers.Builder, STABILIZATION: BusStabilizationType): void;
    static addPointingAccuracy(builder: flatbuffers.Builder, POINTING_ACCURACY: number): void;
    static addPointingKnowledge(builder: flatbuffers.Builder, POINTING_KNOWLEDGE: number): void;
    static addDesignLife(builder: flatbuffers.Builder, DESIGN_LIFE: number): void;
    static addDataStorage(builder: flatbuffers.Builder, DATA_STORAGE: number): void;
    static addDownlinkRate(builder: flatbuffers.Builder, DOWNLINK_RATE: number): void;
    static addPayloadSlots(builder: flatbuffers.Builder, PAYLOAD_SLOTS: number): void;
    static addHeritageCount(builder: flatbuffers.Builder, HERITAGE_COUNT: number): void;
    static addNotes(builder: flatbuffers.Builder, NOTESOffset: flatbuffers.Offset): void;
    static endBUS(builder: flatbuffers.Builder): flatbuffers.Offset;
    static finishBUSBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static finishSizePrefixedBUSBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static createBUS(builder: flatbuffers.Builder, IDOffset: flatbuffers.Offset, NAMEOffset: flatbuffers.Offset, MANUFACTUREROffset: flatbuffers.Offset, SIZE: busSize, DRY_MASS: number, WET_MASS: number, PAYLOAD_MASS: number, DIM_X: number, DIM_Y: number, DIM_Z: number, STOWED_X: number, STOWED_Y: number, STOWED_Z: number, POWER_GENERATION: number, PAYLOAD_POWER: number, BATTERY_CAPACITY: number, STABILIZATION: BusStabilizationType, POINTING_ACCURACY: number, POINTING_KNOWLEDGE: number, DESIGN_LIFE: number, DATA_STORAGE: number, DOWNLINK_RATE: number, PAYLOAD_SLOTS: number, HERITAGE_COUNT: number, NOTESOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): BUST;
    unpackTo(_o: BUST): void;
}
export declare class BUST implements flatbuffers.IGeneratedObject {
    ID: string | Uint8Array | null;
    NAME: string | Uint8Array | null;
    MANUFACTURER: string | Uint8Array | null;
    SIZE: busSize;
    DRY_MASS: number;
    WET_MASS: number;
    PAYLOAD_MASS: number;
    DIM_X: number;
    DIM_Y: number;
    DIM_Z: number;
    STOWED_X: number;
    STOWED_Y: number;
    STOWED_Z: number;
    POWER_GENERATION: number;
    PAYLOAD_POWER: number;
    BATTERY_CAPACITY: number;
    STABILIZATION: BusStabilizationType;
    POINTING_ACCURACY: number;
    POINTING_KNOWLEDGE: number;
    DESIGN_LIFE: number;
    DATA_STORAGE: number;
    DOWNLINK_RATE: number;
    PAYLOAD_SLOTS: number;
    HERITAGE_COUNT: number;
    NOTES: string | Uint8Array | null;
    constructor(ID?: string | Uint8Array | null, NAME?: string | Uint8Array | null, MANUFACTURER?: string | Uint8Array | null, SIZE?: busSize, DRY_MASS?: number, WET_MASS?: number, PAYLOAD_MASS?: number, DIM_X?: number, DIM_Y?: number, DIM_Z?: number, STOWED_X?: number, STOWED_Y?: number, STOWED_Z?: number, POWER_GENERATION?: number, PAYLOAD_POWER?: number, BATTERY_CAPACITY?: number, STABILIZATION?: BusStabilizationType, POINTING_ACCURACY?: number, POINTING_KNOWLEDGE?: number, DESIGN_LIFE?: number, DATA_STORAGE?: number, DOWNLINK_RATE?: number, PAYLOAD_SLOTS?: number, HERITAGE_COUNT?: number, NOTES?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=BUS.d.ts.map