import * as flatbuffers from 'flatbuffers';
import { KMLSimpleField, KMLSimpleFieldT } from './KMLSimpleField.js';
/**
 * Schema definition
 */
export declare class KMLSchema implements flatbuffers.IUnpackableObject<KMLSchemaT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): KMLSchema;
    static getRootAsKMLSchema(bb: flatbuffers.ByteBuffer, obj?: KMLSchema): KMLSchema;
    static getSizePrefixedRootAsKMLSchema(bb: flatbuffers.ByteBuffer, obj?: KMLSchema): KMLSchema;
    /**
     * Schema name
     */
    NAME(): string | null;
    NAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Schema ID
     */
    ID(): string | null;
    ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Simple field definitions
     */
    SIMPLE_FIELDS(index: number, obj?: KMLSimpleField): KMLSimpleField | null;
    simpleFieldsLength(): number;
    static startKMLSchema(builder: flatbuffers.Builder): void;
    static addName(builder: flatbuffers.Builder, NAMEOffset: flatbuffers.Offset): void;
    static addId(builder: flatbuffers.Builder, IDOffset: flatbuffers.Offset): void;
    static addSimpleFields(builder: flatbuffers.Builder, SIMPLE_FIELDSOffset: flatbuffers.Offset): void;
    static createSimpleFieldsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startSimpleFieldsVector(builder: flatbuffers.Builder, numElems: number): void;
    static endKMLSchema(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createKMLSchema(builder: flatbuffers.Builder, NAMEOffset: flatbuffers.Offset, IDOffset: flatbuffers.Offset, SIMPLE_FIELDSOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): KMLSchemaT;
    unpackTo(_o: KMLSchemaT): void;
}
export declare class KMLSchemaT implements flatbuffers.IGeneratedObject {
    NAME: string | Uint8Array | null;
    ID: string | Uint8Array | null;
    SIMPLE_FIELDS: (KMLSimpleFieldT)[];
    constructor(NAME?: string | Uint8Array | null, ID?: string | Uint8Array | null, SIMPLE_FIELDS?: (KMLSimpleFieldT)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=KMLSchema.d.ts.map