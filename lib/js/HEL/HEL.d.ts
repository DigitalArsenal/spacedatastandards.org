import * as flatbuffers from 'flatbuffers';
/**
 * Helicopter Dynamics
 */
export declare class HEL implements flatbuffers.IUnpackableObject<HELT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): HEL;
    static getRootAsHEL(bb: flatbuffers.ByteBuffer, obj?: HEL): HEL;
    static getSizePrefixedRootAsHEL(bb: flatbuffers.ByteBuffer, obj?: HEL): HEL;
    static bufferHasIdentifier(bb: flatbuffers.ByteBuffer): boolean;
    POSITION_X(): number;
    POSITION_Y(): number;
    POSITION_Z(): number;
    VELOCITY_X(): number;
    VELOCITY_Y(): number;
    VELOCITY_Z(): number;
    QUAT_W(): number;
    QUAT_X(): number;
    QUAT_Y(): number;
    QUAT_Z(): number;
    OMEGA_BODY_X(): number;
    OMEGA_BODY_Y(): number;
    OMEGA_BODY_Z(): number;
    MAIN_ROTOR(): string | null;
    MAIN_ROTOR(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    TAIL_ROTOR(): string | null;
    TAIL_ROTOR(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    ENGINE_N1(): number;
    ENGINE_TORQUE(): number;
    FLAGS(): number;
    FUEL_REMAINING(): number;
    static startHEL(builder: flatbuffers.Builder): void;
    static addPositionX(builder: flatbuffers.Builder, POSITION_X: number): void;
    static addPositionY(builder: flatbuffers.Builder, POSITION_Y: number): void;
    static addPositionZ(builder: flatbuffers.Builder, POSITION_Z: number): void;
    static addVelocityX(builder: flatbuffers.Builder, VELOCITY_X: number): void;
    static addVelocityY(builder: flatbuffers.Builder, VELOCITY_Y: number): void;
    static addVelocityZ(builder: flatbuffers.Builder, VELOCITY_Z: number): void;
    static addQuatW(builder: flatbuffers.Builder, QUAT_W: number): void;
    static addQuatX(builder: flatbuffers.Builder, QUAT_X: number): void;
    static addQuatY(builder: flatbuffers.Builder, QUAT_Y: number): void;
    static addQuatZ(builder: flatbuffers.Builder, QUAT_Z: number): void;
    static addOmegaBodyX(builder: flatbuffers.Builder, OMEGA_BODY_X: number): void;
    static addOmegaBodyY(builder: flatbuffers.Builder, OMEGA_BODY_Y: number): void;
    static addOmegaBodyZ(builder: flatbuffers.Builder, OMEGA_BODY_Z: number): void;
    static addMainRotor(builder: flatbuffers.Builder, MAIN_ROTOROffset: flatbuffers.Offset): void;
    static addTailRotor(builder: flatbuffers.Builder, TAIL_ROTOROffset: flatbuffers.Offset): void;
    static addEngineN1(builder: flatbuffers.Builder, ENGINE_N1: number): void;
    static addEngineTorque(builder: flatbuffers.Builder, ENGINE_TORQUE: number): void;
    static addFlags(builder: flatbuffers.Builder, FLAGS: number): void;
    static addFuelRemaining(builder: flatbuffers.Builder, FUEL_REMAINING: number): void;
    static endHEL(builder: flatbuffers.Builder): flatbuffers.Offset;
    static finishHELBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static finishSizePrefixedHELBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static createHEL(builder: flatbuffers.Builder, POSITION_X: number, POSITION_Y: number, POSITION_Z: number, VELOCITY_X: number, VELOCITY_Y: number, VELOCITY_Z: number, QUAT_W: number, QUAT_X: number, QUAT_Y: number, QUAT_Z: number, OMEGA_BODY_X: number, OMEGA_BODY_Y: number, OMEGA_BODY_Z: number, MAIN_ROTOROffset: flatbuffers.Offset, TAIL_ROTOROffset: flatbuffers.Offset, ENGINE_N1: number, ENGINE_TORQUE: number, FLAGS: number, FUEL_REMAINING: number): flatbuffers.Offset;
    unpack(): HELT;
    unpackTo(_o: HELT): void;
}
export declare class HELT implements flatbuffers.IGeneratedObject {
    POSITION_X: number;
    POSITION_Y: number;
    POSITION_Z: number;
    VELOCITY_X: number;
    VELOCITY_Y: number;
    VELOCITY_Z: number;
    QUAT_W: number;
    QUAT_X: number;
    QUAT_Y: number;
    QUAT_Z: number;
    OMEGA_BODY_X: number;
    OMEGA_BODY_Y: number;
    OMEGA_BODY_Z: number;
    MAIN_ROTOR: string | Uint8Array | null;
    TAIL_ROTOR: string | Uint8Array | null;
    ENGINE_N1: number;
    ENGINE_TORQUE: number;
    FLAGS: number;
    FUEL_REMAINING: number;
    constructor(POSITION_X?: number, POSITION_Y?: number, POSITION_Z?: number, VELOCITY_X?: number, VELOCITY_Y?: number, VELOCITY_Z?: number, QUAT_W?: number, QUAT_X?: number, QUAT_Y?: number, QUAT_Z?: number, OMEGA_BODY_X?: number, OMEGA_BODY_Y?: number, OMEGA_BODY_Z?: number, MAIN_ROTOR?: string | Uint8Array | null, TAIL_ROTOR?: string | Uint8Array | null, ENGINE_N1?: number, ENGINE_TORQUE?: number, FLAGS?: number, FUEL_REMAINING?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=HEL.d.ts.map