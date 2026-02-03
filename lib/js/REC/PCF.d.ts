import * as flatbuffers from 'flatbuffers';
/**
 * Propagator Configuration
 */
export declare class PCF implements flatbuffers.IUnpackableObject<PCFT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): PCF;
    static getRootAsPCF(bb: flatbuffers.ByteBuffer, obj?: PCF): PCF;
    static getSizePrefixedRootAsPCF(bb: flatbuffers.ByteBuffer, obj?: PCF): PCF;
    static bufferHasIdentifier(bb: flatbuffers.ByteBuffer): boolean;
    STEP_SIZE(): number;
    TOLERANCE(): number;
    MIN_STEP(): number;
    MAX_STEP(): number;
    MAX_ITERATIONS(): number;
    GRAVITY_DEGREE(): number;
    GRAVITY_ORDER(): number;
    INTEGRATOR(): number;
    OUTPUT_FRAME(): number;
    FORCE_FLAGS(): number;
    DRAG_COEFFICIENT(): number;
    SRP_COEFFICIENT(): number;
    AREA_MASS_RATIO(): number;
    RESERVED(index: number): number | null;
    reservedLength(): number;
    reservedArray(): Uint8Array | null;
    static startPCF(builder: flatbuffers.Builder): void;
    static addStepSize(builder: flatbuffers.Builder, STEP_SIZE: number): void;
    static addTolerance(builder: flatbuffers.Builder, TOLERANCE: number): void;
    static addMinStep(builder: flatbuffers.Builder, MIN_STEP: number): void;
    static addMaxStep(builder: flatbuffers.Builder, MAX_STEP: number): void;
    static addMaxIterations(builder: flatbuffers.Builder, MAX_ITERATIONS: number): void;
    static addGravityDegree(builder: flatbuffers.Builder, GRAVITY_DEGREE: number): void;
    static addGravityOrder(builder: flatbuffers.Builder, GRAVITY_ORDER: number): void;
    static addIntegrator(builder: flatbuffers.Builder, INTEGRATOR: number): void;
    static addOutputFrame(builder: flatbuffers.Builder, OUTPUT_FRAME: number): void;
    static addForceFlags(builder: flatbuffers.Builder, FORCE_FLAGS: number): void;
    static addDragCoefficient(builder: flatbuffers.Builder, DRAG_COEFFICIENT: number): void;
    static addSrpCoefficient(builder: flatbuffers.Builder, SRP_COEFFICIENT: number): void;
    static addAreaMassRatio(builder: flatbuffers.Builder, AREA_MASS_RATIO: number): void;
    static addReserved(builder: flatbuffers.Builder, RESERVEDOffset: flatbuffers.Offset): void;
    static createReservedVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startReservedVector(builder: flatbuffers.Builder, numElems: number): void;
    static endPCF(builder: flatbuffers.Builder): flatbuffers.Offset;
    static finishPCFBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static finishSizePrefixedPCFBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static createPCF(builder: flatbuffers.Builder, STEP_SIZE: number, TOLERANCE: number, MIN_STEP: number, MAX_STEP: number, MAX_ITERATIONS: number, GRAVITY_DEGREE: number, GRAVITY_ORDER: number, INTEGRATOR: number, OUTPUT_FRAME: number, FORCE_FLAGS: number, DRAG_COEFFICIENT: number, SRP_COEFFICIENT: number, AREA_MASS_RATIO: number, RESERVEDOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): PCFT;
    unpackTo(_o: PCFT): void;
}
export declare class PCFT implements flatbuffers.IGeneratedObject {
    STEP_SIZE: number;
    TOLERANCE: number;
    MIN_STEP: number;
    MAX_STEP: number;
    MAX_ITERATIONS: number;
    GRAVITY_DEGREE: number;
    GRAVITY_ORDER: number;
    INTEGRATOR: number;
    OUTPUT_FRAME: number;
    FORCE_FLAGS: number;
    DRAG_COEFFICIENT: number;
    SRP_COEFFICIENT: number;
    AREA_MASS_RATIO: number;
    RESERVED: (number)[];
    constructor(STEP_SIZE?: number, TOLERANCE?: number, MIN_STEP?: number, MAX_STEP?: number, MAX_ITERATIONS?: number, GRAVITY_DEGREE?: number, GRAVITY_ORDER?: number, INTEGRATOR?: number, OUTPUT_FRAME?: number, FORCE_FLAGS?: number, DRAG_COEFFICIENT?: number, SRP_COEFFICIENT?: number, AREA_MASS_RATIO?: number, RESERVED?: (number)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=PCF.d.ts.map