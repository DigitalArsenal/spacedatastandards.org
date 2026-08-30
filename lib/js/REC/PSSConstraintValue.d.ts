import * as flatbuffers from 'flatbuffers';
export declare class PSSConstraintValue implements flatbuffers.IUnpackableObject<PSSConstraintValueT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): PSSConstraintValue;
    static getRootAsPSSConstraintValue(bb: flatbuffers.ByteBuffer, obj?: PSSConstraintValue): PSSConstraintValue;
    static getSizePrefixedRootAsPSSConstraintValue(bb: flatbuffers.ByteBuffer, obj?: PSSConstraintValue): PSSConstraintValue;
    CONSTRAINT_ID(): string;
    CONSTRAINT_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    VALUE(): number;
    VIOLATION(): number;
    static startPSSConstraintValue(builder: flatbuffers.Builder): void;
    static addConstraintId(builder: flatbuffers.Builder, CONSTRAINT_IDOffset: flatbuffers.Offset): void;
    static addValue(builder: flatbuffers.Builder, VALUE: number): void;
    static addViolation(builder: flatbuffers.Builder, VIOLATION: number): void;
    static endPSSConstraintValue(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createPSSConstraintValue(builder: flatbuffers.Builder, CONSTRAINT_IDOffset: flatbuffers.Offset, VALUE: number, VIOLATION: number): flatbuffers.Offset;
    unpack(): PSSConstraintValueT;
    unpackTo(_o: PSSConstraintValueT): void;
}
export declare class PSSConstraintValueT implements flatbuffers.IGeneratedObject {
    CONSTRAINT_ID: string | Uint8Array | null;
    VALUE: number;
    VIOLATION: number;
    constructor(CONSTRAINT_ID?: string | Uint8Array | null, VALUE?: number, VIOLATION?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=PSSConstraintValue.d.ts.map