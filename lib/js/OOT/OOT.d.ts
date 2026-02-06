import * as flatbuffers from 'flatbuffers';
import { thrusterType } from './thrusterType.js';
/**
 * On-Orbit Thruster
 */
export declare class OOT implements flatbuffers.IUnpackableObject<OOTT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): OOT;
    static getRootAsOOT(bb: flatbuffers.ByteBuffer, obj?: OOT): OOT;
    static getSizePrefixedRootAsOOT(bb: flatbuffers.ByteBuffer, obj?: OOT): OOT;
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
     * Reference to thruster specification
     */
    ID_THRUSTER(): string | null;
    ID_THRUSTER(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Thruster name or designation
     */
    NAME(): string | null;
    NAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Thruster type
     */
    TYPE(): thrusterType;
    /**
     * Number of thrusters of this type
     */
    QUANTITY(): number;
    /**
     * Thrust output in Newtons
     */
    THRUST(): number;
    /**
     * Specific impulse in seconds
     */
    ISP(): number;
    /**
     * Propellant type (e.g., HYDRAZINE, XENON, KRYPTON, MMH_NTO, N2, GN2)
     */
    PROPELLANT(): string | null;
    PROPELLANT(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Total propellant mass in kg
     */
    PROPELLANT_MASS(): number;
    /**
     * Remaining propellant mass in kg
     */
    PROPELLANT_REMAINING(): number;
    /**
     * Total delta-V capability in m/s
     */
    DELTA_V_TOTAL(): number;
    /**
     * Remaining delta-V in m/s
     */
    DELTA_V_REMAINING(): number;
    /**
     * Total impulse in Newton-seconds
     */
    TOTAL_IMPULSE(): number;
    /**
     * Thruster dry mass in kg
     */
    MASS(): number;
    /**
     * Purpose (e.g., ORBIT_RAISING, STATION_KEEPING, ATTITUDE_CONTROL, DEORBIT)
     */
    PURPOSE(): string | null;
    PURPOSE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Additional notes
     */
    NOTES(): string | null;
    NOTES(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    static startOOT(builder: flatbuffers.Builder): void;
    static addId(builder: flatbuffers.Builder, IDOffset: flatbuffers.Offset): void;
    static addIdOnOrbit(builder: flatbuffers.Builder, ID_ON_ORBITOffset: flatbuffers.Offset): void;
    static addIdThruster(builder: flatbuffers.Builder, ID_THRUSTEROffset: flatbuffers.Offset): void;
    static addName(builder: flatbuffers.Builder, NAMEOffset: flatbuffers.Offset): void;
    static addType(builder: flatbuffers.Builder, TYPE: thrusterType): void;
    static addQuantity(builder: flatbuffers.Builder, QUANTITY: number): void;
    static addThrust(builder: flatbuffers.Builder, THRUST: number): void;
    static addIsp(builder: flatbuffers.Builder, ISP: number): void;
    static addPropellant(builder: flatbuffers.Builder, PROPELLANTOffset: flatbuffers.Offset): void;
    static addPropellantMass(builder: flatbuffers.Builder, PROPELLANT_MASS: number): void;
    static addPropellantRemaining(builder: flatbuffers.Builder, PROPELLANT_REMAINING: number): void;
    static addDeltaVTotal(builder: flatbuffers.Builder, DELTA_V_TOTAL: number): void;
    static addDeltaVRemaining(builder: flatbuffers.Builder, DELTA_V_REMAINING: number): void;
    static addTotalImpulse(builder: flatbuffers.Builder, TOTAL_IMPULSE: number): void;
    static addMass(builder: flatbuffers.Builder, MASS: number): void;
    static addPurpose(builder: flatbuffers.Builder, PURPOSEOffset: flatbuffers.Offset): void;
    static addNotes(builder: flatbuffers.Builder, NOTESOffset: flatbuffers.Offset): void;
    static endOOT(builder: flatbuffers.Builder): flatbuffers.Offset;
    static finishOOTBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static finishSizePrefixedOOTBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static createOOT(builder: flatbuffers.Builder, IDOffset: flatbuffers.Offset, ID_ON_ORBITOffset: flatbuffers.Offset, ID_THRUSTEROffset: flatbuffers.Offset, NAMEOffset: flatbuffers.Offset, TYPE: thrusterType, QUANTITY: number, THRUST: number, ISP: number, PROPELLANTOffset: flatbuffers.Offset, PROPELLANT_MASS: number, PROPELLANT_REMAINING: number, DELTA_V_TOTAL: number, DELTA_V_REMAINING: number, TOTAL_IMPULSE: number, MASS: number, PURPOSEOffset: flatbuffers.Offset, NOTESOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): OOTT;
    unpackTo(_o: OOTT): void;
}
export declare class OOTT implements flatbuffers.IGeneratedObject {
    ID: string | Uint8Array | null;
    ID_ON_ORBIT: string | Uint8Array | null;
    ID_THRUSTER: string | Uint8Array | null;
    NAME: string | Uint8Array | null;
    TYPE: thrusterType;
    QUANTITY: number;
    THRUST: number;
    ISP: number;
    PROPELLANT: string | Uint8Array | null;
    PROPELLANT_MASS: number;
    PROPELLANT_REMAINING: number;
    DELTA_V_TOTAL: number;
    DELTA_V_REMAINING: number;
    TOTAL_IMPULSE: number;
    MASS: number;
    PURPOSE: string | Uint8Array | null;
    NOTES: string | Uint8Array | null;
    constructor(ID?: string | Uint8Array | null, ID_ON_ORBIT?: string | Uint8Array | null, ID_THRUSTER?: string | Uint8Array | null, NAME?: string | Uint8Array | null, TYPE?: thrusterType, QUANTITY?: number, THRUST?: number, ISP?: number, PROPELLANT?: string | Uint8Array | null, PROPELLANT_MASS?: number, PROPELLANT_REMAINING?: number, DELTA_V_TOTAL?: number, DELTA_V_REMAINING?: number, TOTAL_IMPULSE?: number, MASS?: number, PURPOSE?: string | Uint8Array | null, NOTES?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=OOT.d.ts.map