import * as flatbuffers from 'flatbuffers';
/**
 * Armor and Protection
 */
export declare class ARM implements flatbuffers.IUnpackableObject<ARMT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): ARM;
    static getRootAsARM(bb: flatbuffers.ByteBuffer, obj?: ARM): ARM;
    static getSizePrefixedRootAsARM(bb: flatbuffers.ByteBuffer, obj?: ARM): ARM;
    static bufferHasIdentifier(bb: flatbuffers.ByteBuffer): boolean;
    THICKNESS(): number;
    ANGLE(): number;
    MATERIAL(): number;
    HARDNESS(): number;
    QUALITY(): number;
    ERA_TYPE(): number;
    ERA_EFFECTIVENESS(): number;
    ERA_VS_KE(): number;
    RHA_EQUIVALENT(): number;
    NORMAL_X(): number;
    NORMAL_Y(): number;
    NORMAL_Z(): number;
    RESERVED(index: number): number | null;
    reservedLength(): number;
    reservedArray(): Uint8Array | null;
    static startARM(builder: flatbuffers.Builder): void;
    static addThickness(builder: flatbuffers.Builder, THICKNESS: number): void;
    static addAngle(builder: flatbuffers.Builder, ANGLE: number): void;
    static addMaterial(builder: flatbuffers.Builder, MATERIAL: number): void;
    static addHardness(builder: flatbuffers.Builder, HARDNESS: number): void;
    static addQuality(builder: flatbuffers.Builder, QUALITY: number): void;
    static addEraType(builder: flatbuffers.Builder, ERA_TYPE: number): void;
    static addEraEffectiveness(builder: flatbuffers.Builder, ERA_EFFECTIVENESS: number): void;
    static addEraVsKe(builder: flatbuffers.Builder, ERA_VS_KE: number): void;
    static addRhaEquivalent(builder: flatbuffers.Builder, RHA_EQUIVALENT: number): void;
    static addNormalX(builder: flatbuffers.Builder, NORMAL_X: number): void;
    static addNormalY(builder: flatbuffers.Builder, NORMAL_Y: number): void;
    static addNormalZ(builder: flatbuffers.Builder, NORMAL_Z: number): void;
    static addReserved(builder: flatbuffers.Builder, RESERVEDOffset: flatbuffers.Offset): void;
    static createReservedVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startReservedVector(builder: flatbuffers.Builder, numElems: number): void;
    static endARM(builder: flatbuffers.Builder): flatbuffers.Offset;
    static finishARMBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static finishSizePrefixedARMBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static createARM(builder: flatbuffers.Builder, THICKNESS: number, ANGLE: number, MATERIAL: number, HARDNESS: number, QUALITY: number, ERA_TYPE: number, ERA_EFFECTIVENESS: number, ERA_VS_KE: number, RHA_EQUIVALENT: number, NORMAL_X: number, NORMAL_Y: number, NORMAL_Z: number, RESERVEDOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): ARMT;
    unpackTo(_o: ARMT): void;
}
export declare class ARMT implements flatbuffers.IGeneratedObject {
    THICKNESS: number;
    ANGLE: number;
    MATERIAL: number;
    HARDNESS: number;
    QUALITY: number;
    ERA_TYPE: number;
    ERA_EFFECTIVENESS: number;
    ERA_VS_KE: number;
    RHA_EQUIVALENT: number;
    NORMAL_X: number;
    NORMAL_Y: number;
    NORMAL_Z: number;
    RESERVED: (number)[];
    constructor(THICKNESS?: number, ANGLE?: number, MATERIAL?: number, HARDNESS?: number, QUALITY?: number, ERA_TYPE?: number, ERA_EFFECTIVENESS?: number, ERA_VS_KE?: number, RHA_EQUIVALENT?: number, NORMAL_X?: number, NORMAL_Y?: number, NORMAL_Z?: number, RESERVED?: (number)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=ARM.d.ts.map