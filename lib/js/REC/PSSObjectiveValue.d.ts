import * as flatbuffers from 'flatbuffers';
export declare class PSSObjectiveValue implements flatbuffers.IUnpackableObject<PSSObjectiveValueT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): PSSObjectiveValue;
    static getRootAsPSSObjectiveValue(bb: flatbuffers.ByteBuffer, obj?: PSSObjectiveValue): PSSObjectiveValue;
    static getSizePrefixedRootAsPSSObjectiveValue(bb: flatbuffers.ByteBuffer, obj?: PSSObjectiveValue): PSSObjectiveValue;
    OBJECTIVE_ID(): string;
    OBJECTIVE_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    VALUE(): number;
    static startPSSObjectiveValue(builder: flatbuffers.Builder): void;
    static addObjectiveId(builder: flatbuffers.Builder, OBJECTIVE_IDOffset: flatbuffers.Offset): void;
    static addValue(builder: flatbuffers.Builder, VALUE: number): void;
    static endPSSObjectiveValue(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createPSSObjectiveValue(builder: flatbuffers.Builder, OBJECTIVE_IDOffset: flatbuffers.Offset, VALUE: number): flatbuffers.Offset;
    unpack(): PSSObjectiveValueT;
    unpackTo(_o: PSSObjectiveValueT): void;
}
export declare class PSSObjectiveValueT implements flatbuffers.IGeneratedObject {
    OBJECTIVE_ID: string | Uint8Array | null;
    VALUE: number;
    constructor(OBJECTIVE_ID?: string | Uint8Array | null, VALUE?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=PSSObjectiveValue.d.ts.map