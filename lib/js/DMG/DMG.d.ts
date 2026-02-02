import * as flatbuffers from 'flatbuffers';
/**
 * Damage Models
 */
export declare class DMG implements flatbuffers.IUnpackableObject<DMGT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): DMG;
    static getRootAsDMG(bb: flatbuffers.ByteBuffer, obj?: DMG): DMG;
    static getSizePrefixedRootAsDMG(bb: flatbuffers.ByteBuffer, obj?: DMG): DMG;
    static bufferHasIdentifier(bb: flatbuffers.ByteBuffer): boolean;
    OVERALL_HEALTH(): number;
    MOBILITY(): number;
    FIREPOWER(): number;
    MODULE_COUNT(): number;
    CREW_COUNT(): number;
    FIRE_COUNT(): number;
    FLOOD_COUNT(): number;
    IS_DESTROYED(): number;
    DESTRUCTION_CAUSE(): number;
    EXTINGUISHERS(): number;
    REPAIR_ACTIVE(): number;
    RELOAD_MULTIPLIER(): number;
    ACCURACY_MULTIPLIER(): number;
    CREW_ALIVE(): number;
    CREW_WOUNDED(): number;
    RESERVED(index: number): number | null;
    reservedLength(): number;
    reservedArray(): Uint8Array | null;
    static startDMG(builder: flatbuffers.Builder): void;
    static addOverallHealth(builder: flatbuffers.Builder, OVERALL_HEALTH: number): void;
    static addMobility(builder: flatbuffers.Builder, MOBILITY: number): void;
    static addFirepower(builder: flatbuffers.Builder, FIREPOWER: number): void;
    static addModuleCount(builder: flatbuffers.Builder, MODULE_COUNT: number): void;
    static addCrewCount(builder: flatbuffers.Builder, CREW_COUNT: number): void;
    static addFireCount(builder: flatbuffers.Builder, FIRE_COUNT: number): void;
    static addFloodCount(builder: flatbuffers.Builder, FLOOD_COUNT: number): void;
    static addIsDestroyed(builder: flatbuffers.Builder, IS_DESTROYED: number): void;
    static addDestructionCause(builder: flatbuffers.Builder, DESTRUCTION_CAUSE: number): void;
    static addExtinguishers(builder: flatbuffers.Builder, EXTINGUISHERS: number): void;
    static addRepairActive(builder: flatbuffers.Builder, REPAIR_ACTIVE: number): void;
    static addReloadMultiplier(builder: flatbuffers.Builder, RELOAD_MULTIPLIER: number): void;
    static addAccuracyMultiplier(builder: flatbuffers.Builder, ACCURACY_MULTIPLIER: number): void;
    static addCrewAlive(builder: flatbuffers.Builder, CREW_ALIVE: number): void;
    static addCrewWounded(builder: flatbuffers.Builder, CREW_WOUNDED: number): void;
    static addReserved(builder: flatbuffers.Builder, RESERVEDOffset: flatbuffers.Offset): void;
    static createReservedVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startReservedVector(builder: flatbuffers.Builder, numElems: number): void;
    static endDMG(builder: flatbuffers.Builder): flatbuffers.Offset;
    static finishDMGBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static finishSizePrefixedDMGBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static createDMG(builder: flatbuffers.Builder, OVERALL_HEALTH: number, MOBILITY: number, FIREPOWER: number, MODULE_COUNT: number, CREW_COUNT: number, FIRE_COUNT: number, FLOOD_COUNT: number, IS_DESTROYED: number, DESTRUCTION_CAUSE: number, EXTINGUISHERS: number, REPAIR_ACTIVE: number, RELOAD_MULTIPLIER: number, ACCURACY_MULTIPLIER: number, CREW_ALIVE: number, CREW_WOUNDED: number, RESERVEDOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): DMGT;
    unpackTo(_o: DMGT): void;
}
export declare class DMGT implements flatbuffers.IGeneratedObject {
    OVERALL_HEALTH: number;
    MOBILITY: number;
    FIREPOWER: number;
    MODULE_COUNT: number;
    CREW_COUNT: number;
    FIRE_COUNT: number;
    FLOOD_COUNT: number;
    IS_DESTROYED: number;
    DESTRUCTION_CAUSE: number;
    EXTINGUISHERS: number;
    REPAIR_ACTIVE: number;
    RELOAD_MULTIPLIER: number;
    ACCURACY_MULTIPLIER: number;
    CREW_ALIVE: number;
    CREW_WOUNDED: number;
    RESERVED: (number)[];
    constructor(OVERALL_HEALTH?: number, MOBILITY?: number, FIREPOWER?: number, MODULE_COUNT?: number, CREW_COUNT?: number, FIRE_COUNT?: number, FLOOD_COUNT?: number, IS_DESTROYED?: number, DESTRUCTION_CAUSE?: number, EXTINGUISHERS?: number, REPAIR_ACTIVE?: number, RELOAD_MULTIPLIER?: number, ACCURACY_MULTIPLIER?: number, CREW_ALIVE?: number, CREW_WOUNDED?: number, RESERVED?: (number)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=DMG.d.ts.map