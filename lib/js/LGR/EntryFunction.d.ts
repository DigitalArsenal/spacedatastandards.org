import * as flatbuffers from 'flatbuffers';
/**
 * Plugin entry point function definition
 */
export declare class EntryFunction implements flatbuffers.IUnpackableObject<EntryFunctionT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): EntryFunction;
    static getRootAsEntryFunction(bb: flatbuffers.ByteBuffer, obj?: EntryFunction): EntryFunction;
    static getSizePrefixedRootAsEntryFunction(bb: flatbuffers.ByteBuffer, obj?: EntryFunction): EntryFunction;
    /**
     * Function name as exported from WASM
     */
    NAME(): string | null;
    NAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Human-readable description
     */
    DESCRIPTION(): string | null;
    DESCRIPTION(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Input parameter types (FlatBuffer schema names)
     */
    INPUT_SCHEMAS(index: number): string;
    INPUT_SCHEMAS(index: number, optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    inputSchemasLength(): number;
    /**
     * Output type (FlatBuffer schema name)
     */
    OUTPUT_SCHEMA(): string | null;
    OUTPUT_SCHEMA(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    static startEntryFunction(builder: flatbuffers.Builder): void;
    static addName(builder: flatbuffers.Builder, NAMEOffset: flatbuffers.Offset): void;
    static addDescription(builder: flatbuffers.Builder, DESCRIPTIONOffset: flatbuffers.Offset): void;
    static addInputSchemas(builder: flatbuffers.Builder, INPUT_SCHEMASOffset: flatbuffers.Offset): void;
    static createInputSchemasVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startInputSchemasVector(builder: flatbuffers.Builder, numElems: number): void;
    static addOutputSchema(builder: flatbuffers.Builder, OUTPUT_SCHEMAOffset: flatbuffers.Offset): void;
    static endEntryFunction(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createEntryFunction(builder: flatbuffers.Builder, NAMEOffset: flatbuffers.Offset, DESCRIPTIONOffset: flatbuffers.Offset, INPUT_SCHEMASOffset: flatbuffers.Offset, OUTPUT_SCHEMAOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): EntryFunctionT;
    unpackTo(_o: EntryFunctionT): void;
}
export declare class EntryFunctionT implements flatbuffers.IGeneratedObject {
    NAME: string | Uint8Array | null;
    DESCRIPTION: string | Uint8Array | null;
    INPUT_SCHEMAS: (string)[];
    OUTPUT_SCHEMA: string | Uint8Array | null;
    constructor(NAME?: string | Uint8Array | null, DESCRIPTION?: string | Uint8Array | null, INPUT_SCHEMAS?: (string)[], OUTPUT_SCHEMA?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=EntryFunction.d.ts.map