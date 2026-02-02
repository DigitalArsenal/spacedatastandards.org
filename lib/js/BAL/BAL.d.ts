import * as flatbuffers from 'flatbuffers';
/**
 * Ballistics
 */
export declare class BAL implements flatbuffers.IUnpackableObject<BALT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): BAL;
    static getRootAsBAL(bb: flatbuffers.ByteBuffer, obj?: BAL): BAL;
    static getSizePrefixedRootAsBAL(bb: flatbuffers.ByteBuffer, obj?: BAL): BAL;
    static bufferHasIdentifier(bb: flatbuffers.ByteBuffer): boolean;
    COMMAND(): string | null;
    COMMAND(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    TRAJECTORY_REQUEST(): string | null;
    TRAJECTORY_REQUEST(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    TABLE_REQUEST(): string | null;
    TABLE_REQUEST(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    FIRE_CONTROL(): string | null;
    FIRE_CONTROL(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    PENETRATION_PROJECTILE(): string | null;
    PENETRATION_PROJECTILE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    PENETRATION_ARMOR(): string | null;
    PENETRATION_ARMOR(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    IMPACT_VELOCITY_MPS(): number;
    IMPACT_ANGLE_DEG(): number;
    static startBAL(builder: flatbuffers.Builder): void;
    static addCommand(builder: flatbuffers.Builder, COMMANDOffset: flatbuffers.Offset): void;
    static addTrajectoryRequest(builder: flatbuffers.Builder, TRAJECTORY_REQUESTOffset: flatbuffers.Offset): void;
    static addTableRequest(builder: flatbuffers.Builder, TABLE_REQUESTOffset: flatbuffers.Offset): void;
    static addFireControl(builder: flatbuffers.Builder, FIRE_CONTROLOffset: flatbuffers.Offset): void;
    static addPenetrationProjectile(builder: flatbuffers.Builder, PENETRATION_PROJECTILEOffset: flatbuffers.Offset): void;
    static addPenetrationArmor(builder: flatbuffers.Builder, PENETRATION_ARMOROffset: flatbuffers.Offset): void;
    static addImpactVelocityMps(builder: flatbuffers.Builder, IMPACT_VELOCITY_MPS: number): void;
    static addImpactAngleDeg(builder: flatbuffers.Builder, IMPACT_ANGLE_DEG: number): void;
    static endBAL(builder: flatbuffers.Builder): flatbuffers.Offset;
    static finishBALBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static finishSizePrefixedBALBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static createBAL(builder: flatbuffers.Builder, COMMANDOffset: flatbuffers.Offset, TRAJECTORY_REQUESTOffset: flatbuffers.Offset, TABLE_REQUESTOffset: flatbuffers.Offset, FIRE_CONTROLOffset: flatbuffers.Offset, PENETRATION_PROJECTILEOffset: flatbuffers.Offset, PENETRATION_ARMOROffset: flatbuffers.Offset, IMPACT_VELOCITY_MPS: number, IMPACT_ANGLE_DEG: number): flatbuffers.Offset;
    unpack(): BALT;
    unpackTo(_o: BALT): void;
}
export declare class BALT implements flatbuffers.IGeneratedObject {
    COMMAND: string | Uint8Array | null;
    TRAJECTORY_REQUEST: string | Uint8Array | null;
    TABLE_REQUEST: string | Uint8Array | null;
    FIRE_CONTROL: string | Uint8Array | null;
    PENETRATION_PROJECTILE: string | Uint8Array | null;
    PENETRATION_ARMOR: string | Uint8Array | null;
    IMPACT_VELOCITY_MPS: number;
    IMPACT_ANGLE_DEG: number;
    constructor(COMMAND?: string | Uint8Array | null, TRAJECTORY_REQUEST?: string | Uint8Array | null, TABLE_REQUEST?: string | Uint8Array | null, FIRE_CONTROL?: string | Uint8Array | null, PENETRATION_PROJECTILE?: string | Uint8Array | null, PENETRATION_ARMOR?: string | Uint8Array | null, IMPACT_VELOCITY_MPS?: number, IMPACT_ANGLE_DEG?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=BAL.d.ts.map