import * as flatbuffers from 'flatbuffers';
/**
 * On-Orbit Battery
 */
export declare class OOB implements flatbuffers.IUnpackableObject<OOBT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): OOB;
    static getRootAsOOB(bb: flatbuffers.ByteBuffer, obj?: OOB): OOB;
    static getSizePrefixedRootAsOOB(bb: flatbuffers.ByteBuffer, obj?: OOB): OOB;
    static bufferHasIdentifier(bb: flatbuffers.ByteBuffer): boolean;
    /**
     * Unique identifier
     */
    ID(): string | null;
    ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Reference to parent on-orbit object
     */
    ID_ON_ORBIT(): string | null;
    ID_ON_ORBIT(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Reference to battery specification
     */
    ID_BATTERY(): string | null;
    ID_BATTERY(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Battery name or designation
     */
    NAME(): string | null;
    NAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Battery chemistry (e.g., LI_ION, NICD, NIMH, LIPO, SILVER_ZINC)
     */
    CHEMISTRY(): string | null;
    CHEMISTRY(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Number of batteries of this type
     */
    QUANTITY(): number;
    /**
     * Nominal voltage in Volts
     */
    VOLTAGE(): number;
    /**
     * Capacity in Amp-hours
     */
    CAPACITY_AH(): number;
    /**
     * Energy capacity in Watt-hours
     */
    ENERGY_WH(): number;
    /**
     * Maximum depth of discharge as fraction (0.0-1.0)
     */
    MAX_DOD(): number;
    /**
     * Number of charge/discharge cycles rated
     */
    CYCLE_LIFE(): number;
    /**
     * Battery mass in kg
     */
    MASS(): number;
    /**
     * Current state of health as fraction (0.0-1.0)
     */
    STATE_OF_HEALTH(): number;
    /**
     * Additional notes
     */
    NOTES(): string | null;
    NOTES(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    static startOOB(builder: flatbuffers.Builder): void;
    static addId(builder: flatbuffers.Builder, IDOffset: flatbuffers.Offset): void;
    static addIdOnOrbit(builder: flatbuffers.Builder, ID_ON_ORBITOffset: flatbuffers.Offset): void;
    static addIdBattery(builder: flatbuffers.Builder, ID_BATTERYOffset: flatbuffers.Offset): void;
    static addName(builder: flatbuffers.Builder, NAMEOffset: flatbuffers.Offset): void;
    static addChemistry(builder: flatbuffers.Builder, CHEMISTRYOffset: flatbuffers.Offset): void;
    static addQuantity(builder: flatbuffers.Builder, QUANTITY: number): void;
    static addVoltage(builder: flatbuffers.Builder, VOLTAGE: number): void;
    static addCapacityAh(builder: flatbuffers.Builder, CAPACITY_AH: number): void;
    static addEnergyWh(builder: flatbuffers.Builder, ENERGY_WH: number): void;
    static addMaxDod(builder: flatbuffers.Builder, MAX_DOD: number): void;
    static addCycleLife(builder: flatbuffers.Builder, CYCLE_LIFE: number): void;
    static addMass(builder: flatbuffers.Builder, MASS: number): void;
    static addStateOfHealth(builder: flatbuffers.Builder, STATE_OF_HEALTH: number): void;
    static addNotes(builder: flatbuffers.Builder, NOTESOffset: flatbuffers.Offset): void;
    static endOOB(builder: flatbuffers.Builder): flatbuffers.Offset;
    static finishOOBBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static finishSizePrefixedOOBBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static createOOB(builder: flatbuffers.Builder, IDOffset: flatbuffers.Offset, ID_ON_ORBITOffset: flatbuffers.Offset, ID_BATTERYOffset: flatbuffers.Offset, NAMEOffset: flatbuffers.Offset, CHEMISTRYOffset: flatbuffers.Offset, QUANTITY: number, VOLTAGE: number, CAPACITY_AH: number, ENERGY_WH: number, MAX_DOD: number, CYCLE_LIFE: number, MASS: number, STATE_OF_HEALTH: number, NOTESOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): OOBT;
    unpackTo(_o: OOBT): void;
}
export declare class OOBT implements flatbuffers.IGeneratedObject {
    ID: string | Uint8Array | null;
    ID_ON_ORBIT: string | Uint8Array | null;
    ID_BATTERY: string | Uint8Array | null;
    NAME: string | Uint8Array | null;
    CHEMISTRY: string | Uint8Array | null;
    QUANTITY: number;
    VOLTAGE: number;
    CAPACITY_AH: number;
    ENERGY_WH: number;
    MAX_DOD: number;
    CYCLE_LIFE: number;
    MASS: number;
    STATE_OF_HEALTH: number;
    NOTES: string | Uint8Array | null;
    constructor(ID?: string | Uint8Array | null, ID_ON_ORBIT?: string | Uint8Array | null, ID_BATTERY?: string | Uint8Array | null, NAME?: string | Uint8Array | null, CHEMISTRY?: string | Uint8Array | null, QUANTITY?: number, VOLTAGE?: number, CAPACITY_AH?: number, ENERGY_WH?: number, MAX_DOD?: number, CYCLE_LIFE?: number, MASS?: number, STATE_OF_HEALTH?: number, NOTES?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=OOB.d.ts.map