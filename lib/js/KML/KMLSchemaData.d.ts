import * as flatbuffers from 'flatbuffers';
import { KMLSimpleData, KMLSimpleDataT } from './KMLSimpleData.js';
/**
 * Schema data reference
 */
export declare class KMLSchemaData implements flatbuffers.IUnpackableObject<KMLSchemaDataT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): KMLSchemaData;
    static getRootAsKMLSchemaData(bb: flatbuffers.ByteBuffer, obj?: KMLSchemaData): KMLSchemaData;
    static getSizePrefixedRootAsKMLSchemaData(bb: flatbuffers.ByteBuffer, obj?: KMLSchemaData): KMLSchemaData;
    /**
     * Schema URL reference
     */
    SCHEMA_URL(): string | null;
    SCHEMA_URL(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Simple data values
     */
    SIMPLE_DATA(index: number, obj?: KMLSimpleData): KMLSimpleData | null;
    simpleDataLength(): number;
    static startKMLSchemaData(builder: flatbuffers.Builder): void;
    static addSchemaUrl(builder: flatbuffers.Builder, SCHEMA_URLOffset: flatbuffers.Offset): void;
    static addSimpleData(builder: flatbuffers.Builder, SIMPLE_DATAOffset: flatbuffers.Offset): void;
    static createSimpleDataVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startSimpleDataVector(builder: flatbuffers.Builder, numElems: number): void;
    static endKMLSchemaData(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createKMLSchemaData(builder: flatbuffers.Builder, SCHEMA_URLOffset: flatbuffers.Offset, SIMPLE_DATAOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): KMLSchemaDataT;
    unpackTo(_o: KMLSchemaDataT): void;
}
export declare class KMLSchemaDataT implements flatbuffers.IGeneratedObject {
    SCHEMA_URL: string | Uint8Array | null;
    SIMPLE_DATA: (KMLSimpleDataT)[];
    constructor(SCHEMA_URL?: string | Uint8Array | null, SIMPLE_DATA?: (KMLSimpleDataT)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=KMLSchemaData.d.ts.map