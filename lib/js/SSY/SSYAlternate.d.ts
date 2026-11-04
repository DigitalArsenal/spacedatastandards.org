import * as flatbuffers from 'flatbuffers';
import { EXOParameter, EXOParameterT } from './EXOParameter.js';
/**
 * A further value of a quantity the record already carries.
 */
export declare class SSYAlternate implements flatbuffers.IUnpackableObject<SSYAlternateT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): SSYAlternate;
    static getRootAsSSYAlternate(bb: flatbuffers.ByteBuffer, obj?: SSYAlternate): SSYAlternate;
    static getSizePrefixedRootAsSSYAlternate(bb: flatbuffers.ByteBuffer, obj?: SSYAlternate): SSYAlternate;
    /**
     * Name of the SSY field this value is for, exactly, e.g. VLOS_SIGMA.
     */
    FIELD(): string;
    FIELD(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    VALUE(obj?: EXOParameter): EXOParameter | null;
    NOTE(): string | null;
    NOTE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    static startSSYAlternate(builder: flatbuffers.Builder): void;
    static addField(builder: flatbuffers.Builder, FIELDOffset: flatbuffers.Offset): void;
    static addValue(builder: flatbuffers.Builder, VALUEOffset: flatbuffers.Offset): void;
    static addNote(builder: flatbuffers.Builder, NOTEOffset: flatbuffers.Offset): void;
    static endSSYAlternate(builder: flatbuffers.Builder): flatbuffers.Offset;
    unpack(): SSYAlternateT;
    unpackTo(_o: SSYAlternateT): void;
}
export declare class SSYAlternateT implements flatbuffers.IGeneratedObject {
    FIELD: string | Uint8Array | null;
    VALUE: EXOParameterT | null;
    NOTE: string | Uint8Array | null;
    constructor(FIELD?: string | Uint8Array | null, VALUE?: EXOParameterT | null, NOTE?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=SSYAlternate.d.ts.map