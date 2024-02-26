import * as flatbuffers from 'flatbuffers';
import { LDIFAttributeType } from './LDIFAttributeType.js';
/**
 * Represents a component of a Distinguished Name (DN) in LDAP
 */
export declare class DNComponent implements flatbuffers.IUnpackableObject<DNComponentT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): DNComponent;
    static getRootAsDNComponent(bb: flatbuffers.ByteBuffer, obj?: DNComponent): DNComponent;
    static getSizePrefixedRootAsDNComponent(bb: flatbuffers.ByteBuffer, obj?: DNComponent): DNComponent;
    /**
     * The type of the DN component
     */
    TYPE(): LDIFAttributeType;
    /**
     * The value of the DN component
     */
    VALUE(): string | null;
    VALUE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    static startDNComponent(builder: flatbuffers.Builder): void;
    static addType(builder: flatbuffers.Builder, TYPE: LDIFAttributeType): void;
    static addValue(builder: flatbuffers.Builder, VALUEOffset: flatbuffers.Offset): void;
    static endDNComponent(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createDNComponent(builder: flatbuffers.Builder, TYPE: LDIFAttributeType, VALUEOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): DNComponentT;
    unpackTo(_o: DNComponentT): void;
}
export declare class DNComponentT implements flatbuffers.IGeneratedObject {
    TYPE: LDIFAttributeType;
    VALUE: string | Uint8Array | null;
    constructor(TYPE?: LDIFAttributeType, VALUE?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=DNComponent.d.ts.map