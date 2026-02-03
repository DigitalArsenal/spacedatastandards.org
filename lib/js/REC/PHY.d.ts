import * as flatbuffers from 'flatbuffers';
/**
 * Physics and Rigid Body Dynamics
 */
export declare class PHY implements flatbuffers.IUnpackableObject<PHYT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): PHY;
    static getRootAsPHY(bb: flatbuffers.ByteBuffer, obj?: PHY): PHY;
    static getSizePrefixedRootAsPHY(bb: flatbuffers.ByteBuffer, obj?: PHY): PHY;
    static bufferHasIdentifier(bb: flatbuffers.ByteBuffer): boolean;
    COMMAND(): string | null;
    COMMAND(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    SIMULATION_STEP(): string | null;
    SIMULATION_STEP(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    RIGID_BODY(): string | null;
    RIGID_BODY(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    INTEGRATION_CONFIG(): string | null;
    INTEGRATION_CONFIG(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    COLLISION_QUERY_A(): string | null;
    COLLISION_QUERY_A(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    COLLISION_QUERY_B(): string | null;
    COLLISION_QUERY_B(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    TRANSFORM_A(): string | null;
    TRANSFORM_A(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    TRANSFORM_B(): string | null;
    TRANSFORM_B(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    POSITION_A(): string | null;
    POSITION_A(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    POSITION_B(): string | null;
    POSITION_B(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    FLUID(): string | null;
    FLUID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    AERO_QUERY(): string | null;
    AERO_QUERY(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    DRAG_MODEL(): string | null;
    DRAG_MODEL(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    THERMAL_STATE(): string | null;
    THERMAL_STATE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    static startPHY(builder: flatbuffers.Builder): void;
    static addCommand(builder: flatbuffers.Builder, COMMANDOffset: flatbuffers.Offset): void;
    static addSimulationStep(builder: flatbuffers.Builder, SIMULATION_STEPOffset: flatbuffers.Offset): void;
    static addRigidBody(builder: flatbuffers.Builder, RIGID_BODYOffset: flatbuffers.Offset): void;
    static addIntegrationConfig(builder: flatbuffers.Builder, INTEGRATION_CONFIGOffset: flatbuffers.Offset): void;
    static addCollisionQueryA(builder: flatbuffers.Builder, COLLISION_QUERY_AOffset: flatbuffers.Offset): void;
    static addCollisionQueryB(builder: flatbuffers.Builder, COLLISION_QUERY_BOffset: flatbuffers.Offset): void;
    static addTransformA(builder: flatbuffers.Builder, TRANSFORM_AOffset: flatbuffers.Offset): void;
    static addTransformB(builder: flatbuffers.Builder, TRANSFORM_BOffset: flatbuffers.Offset): void;
    static addPositionA(builder: flatbuffers.Builder, POSITION_AOffset: flatbuffers.Offset): void;
    static addPositionB(builder: flatbuffers.Builder, POSITION_BOffset: flatbuffers.Offset): void;
    static addFluid(builder: flatbuffers.Builder, FLUIDOffset: flatbuffers.Offset): void;
    static addAeroQuery(builder: flatbuffers.Builder, AERO_QUERYOffset: flatbuffers.Offset): void;
    static addDragModel(builder: flatbuffers.Builder, DRAG_MODELOffset: flatbuffers.Offset): void;
    static addThermalState(builder: flatbuffers.Builder, THERMAL_STATEOffset: flatbuffers.Offset): void;
    static endPHY(builder: flatbuffers.Builder): flatbuffers.Offset;
    static finishPHYBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static finishSizePrefixedPHYBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static createPHY(builder: flatbuffers.Builder, COMMANDOffset: flatbuffers.Offset, SIMULATION_STEPOffset: flatbuffers.Offset, RIGID_BODYOffset: flatbuffers.Offset, INTEGRATION_CONFIGOffset: flatbuffers.Offset, COLLISION_QUERY_AOffset: flatbuffers.Offset, COLLISION_QUERY_BOffset: flatbuffers.Offset, TRANSFORM_AOffset: flatbuffers.Offset, TRANSFORM_BOffset: flatbuffers.Offset, POSITION_AOffset: flatbuffers.Offset, POSITION_BOffset: flatbuffers.Offset, FLUIDOffset: flatbuffers.Offset, AERO_QUERYOffset: flatbuffers.Offset, DRAG_MODELOffset: flatbuffers.Offset, THERMAL_STATEOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): PHYT;
    unpackTo(_o: PHYT): void;
}
export declare class PHYT implements flatbuffers.IGeneratedObject {
    COMMAND: string | Uint8Array | null;
    SIMULATION_STEP: string | Uint8Array | null;
    RIGID_BODY: string | Uint8Array | null;
    INTEGRATION_CONFIG: string | Uint8Array | null;
    COLLISION_QUERY_A: string | Uint8Array | null;
    COLLISION_QUERY_B: string | Uint8Array | null;
    TRANSFORM_A: string | Uint8Array | null;
    TRANSFORM_B: string | Uint8Array | null;
    POSITION_A: string | Uint8Array | null;
    POSITION_B: string | Uint8Array | null;
    FLUID: string | Uint8Array | null;
    AERO_QUERY: string | Uint8Array | null;
    DRAG_MODEL: string | Uint8Array | null;
    THERMAL_STATE: string | Uint8Array | null;
    constructor(COMMAND?: string | Uint8Array | null, SIMULATION_STEP?: string | Uint8Array | null, RIGID_BODY?: string | Uint8Array | null, INTEGRATION_CONFIG?: string | Uint8Array | null, COLLISION_QUERY_A?: string | Uint8Array | null, COLLISION_QUERY_B?: string | Uint8Array | null, TRANSFORM_A?: string | Uint8Array | null, TRANSFORM_B?: string | Uint8Array | null, POSITION_A?: string | Uint8Array | null, POSITION_B?: string | Uint8Array | null, FLUID?: string | Uint8Array | null, AERO_QUERY?: string | Uint8Array | null, DRAG_MODEL?: string | Uint8Array | null, THERMAL_STATE?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=PHY.d.ts.map