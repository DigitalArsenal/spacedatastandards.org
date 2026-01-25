import * as flatbuffers from 'flatbuffers';
/**
 * Enumeration value mapping
 */
export declare class EnumerationValue implements flatbuffers.IUnpackableObject<EnumerationValueT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): EnumerationValue;
    static getRootAsEnumerationValue(bb: flatbuffers.ByteBuffer, obj?: EnumerationValue): EnumerationValue;
    static getSizePrefixedRootAsEnumerationValue(bb: flatbuffers.ByteBuffer, obj?: EnumerationValue): EnumerationValue;
    /**
     * Label/name for this value
     */
    LABEL(): string | null;
    LABEL(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Numeric value
     */
    VALUE(): bigint;
    /**
     * Maximum value (for ranges)
     */
    MAX_VALUE(): bigint;
    /**
     * Description of this enumeration value
     */
    DESCRIPTION(): string | null;
    DESCRIPTION(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    static startEnumerationValue(builder: flatbuffers.Builder): void;
    static addLabel(builder: flatbuffers.Builder, LABELOffset: flatbuffers.Offset): void;
    static addValue(builder: flatbuffers.Builder, VALUE: bigint): void;
    static addMaxValue(builder: flatbuffers.Builder, MAX_VALUE: bigint): void;
    static addDescription(builder: flatbuffers.Builder, DESCRIPTIONOffset: flatbuffers.Offset): void;
    static endEnumerationValue(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createEnumerationValue(builder: flatbuffers.Builder, LABELOffset: flatbuffers.Offset, VALUE: bigint, MAX_VALUE: bigint, DESCRIPTIONOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): EnumerationValueT;
    unpackTo(_o: EnumerationValueT): void;
}
export declare class EnumerationValueT implements flatbuffers.IGeneratedObject {
    LABEL: string | Uint8Array | null;
    VALUE: bigint;
    MAX_VALUE: bigint;
    DESCRIPTION: string | Uint8Array | null;
    constructor(LABEL?: string | Uint8Array | null, VALUE?: bigint, MAX_VALUE?: bigint, DESCRIPTION?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=EnumerationValue.d.ts.map