import * as flatbuffers from 'flatbuffers';
/**
 * Bounds of an object's geocentric radius over a block, km.
 */
export declare class SCRRadiusBand implements flatbuffers.IUnpackableObject<SCRRadiusBandT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): SCRRadiusBand;
    LOW_KM(): number;
    HIGH_KM(): number;
    static sizeOf(): number;
    static createSCRRadiusBand(builder: flatbuffers.Builder, LOW_KM: number, HIGH_KM: number): flatbuffers.Offset;
    unpack(): SCRRadiusBandT;
    unpackTo(_o: SCRRadiusBandT): void;
}
export declare class SCRRadiusBandT implements flatbuffers.IGeneratedObject {
    LOW_KM: number;
    HIGH_KM: number;
    constructor(LOW_KM?: number, HIGH_KM?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=SCRRadiusBand.d.ts.map