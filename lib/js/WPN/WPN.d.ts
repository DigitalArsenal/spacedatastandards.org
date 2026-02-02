import * as flatbuffers from 'flatbuffers';
/**
 * Weapons and Munitions
 */
export declare class WPN implements flatbuffers.IUnpackableObject<WPNT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): WPN;
    static getRootAsWPN(bb: flatbuffers.ByteBuffer, obj?: WPN): WPN;
    static getSizePrefixedRootAsWPN(bb: flatbuffers.ByteBuffer, obj?: WPN): WPN;
    static bufferHasIdentifier(bb: flatbuffers.ByteBuffer): boolean;
    CALIBER(): number;
    MUZZLE_VELOCITY(): number;
    RATE_OF_FIRE(): number;
    DISPERSION(): number;
    AMMO_CAPACITY(): number;
    BURST_LENGTH(): number;
    RELOAD_TIME(): number;
    OVERHEAT_ROUNDS(): number;
    COOLDOWN_RATE(): number;
    ELEVATION_MIN(): number;
    ELEVATION_MAX(): number;
    TRAVERSE_MIN(): number;
    TRAVERSE_MAX(): number;
    SLEW_RATE(): number;
    WEAPON_TYPE(): number;
    FUZE_TYPE(): number;
    RESERVED(index: number): number | null;
    reservedLength(): number;
    reservedArray(): Uint8Array | null;
    static startWPN(builder: flatbuffers.Builder): void;
    static addCaliber(builder: flatbuffers.Builder, CALIBER: number): void;
    static addMuzzleVelocity(builder: flatbuffers.Builder, MUZZLE_VELOCITY: number): void;
    static addRateOfFire(builder: flatbuffers.Builder, RATE_OF_FIRE: number): void;
    static addDispersion(builder: flatbuffers.Builder, DISPERSION: number): void;
    static addAmmoCapacity(builder: flatbuffers.Builder, AMMO_CAPACITY: number): void;
    static addBurstLength(builder: flatbuffers.Builder, BURST_LENGTH: number): void;
    static addReloadTime(builder: flatbuffers.Builder, RELOAD_TIME: number): void;
    static addOverheatRounds(builder: flatbuffers.Builder, OVERHEAT_ROUNDS: number): void;
    static addCooldownRate(builder: flatbuffers.Builder, COOLDOWN_RATE: number): void;
    static addElevationMin(builder: flatbuffers.Builder, ELEVATION_MIN: number): void;
    static addElevationMax(builder: flatbuffers.Builder, ELEVATION_MAX: number): void;
    static addTraverseMin(builder: flatbuffers.Builder, TRAVERSE_MIN: number): void;
    static addTraverseMax(builder: flatbuffers.Builder, TRAVERSE_MAX: number): void;
    static addSlewRate(builder: flatbuffers.Builder, SLEW_RATE: number): void;
    static addWeaponType(builder: flatbuffers.Builder, WEAPON_TYPE: number): void;
    static addFuzeType(builder: flatbuffers.Builder, FUZE_TYPE: number): void;
    static addReserved(builder: flatbuffers.Builder, RESERVEDOffset: flatbuffers.Offset): void;
    static createReservedVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startReservedVector(builder: flatbuffers.Builder, numElems: number): void;
    static endWPN(builder: flatbuffers.Builder): flatbuffers.Offset;
    static finishWPNBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static finishSizePrefixedWPNBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static createWPN(builder: flatbuffers.Builder, CALIBER: number, MUZZLE_VELOCITY: number, RATE_OF_FIRE: number, DISPERSION: number, AMMO_CAPACITY: number, BURST_LENGTH: number, RELOAD_TIME: number, OVERHEAT_ROUNDS: number, COOLDOWN_RATE: number, ELEVATION_MIN: number, ELEVATION_MAX: number, TRAVERSE_MIN: number, TRAVERSE_MAX: number, SLEW_RATE: number, WEAPON_TYPE: number, FUZE_TYPE: number, RESERVEDOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): WPNT;
    unpackTo(_o: WPNT): void;
}
export declare class WPNT implements flatbuffers.IGeneratedObject {
    CALIBER: number;
    MUZZLE_VELOCITY: number;
    RATE_OF_FIRE: number;
    DISPERSION: number;
    AMMO_CAPACITY: number;
    BURST_LENGTH: number;
    RELOAD_TIME: number;
    OVERHEAT_ROUNDS: number;
    COOLDOWN_RATE: number;
    ELEVATION_MIN: number;
    ELEVATION_MAX: number;
    TRAVERSE_MIN: number;
    TRAVERSE_MAX: number;
    SLEW_RATE: number;
    WEAPON_TYPE: number;
    FUZE_TYPE: number;
    RESERVED: (number)[];
    constructor(CALIBER?: number, MUZZLE_VELOCITY?: number, RATE_OF_FIRE?: number, DISPERSION?: number, AMMO_CAPACITY?: number, BURST_LENGTH?: number, RELOAD_TIME?: number, OVERHEAT_ROUNDS?: number, COOLDOWN_RATE?: number, ELEVATION_MIN?: number, ELEVATION_MAX?: number, TRAVERSE_MIN?: number, TRAVERSE_MAX?: number, SLEW_RATE?: number, WEAPON_TYPE?: number, FUZE_TYPE?: number, RESERVED?: (number)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=WPN.d.ts.map