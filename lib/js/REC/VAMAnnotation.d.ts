import * as flatbuffers from 'flatbuffers';
import { VAMVector3, VAMVector3T } from './VAMVector3.js';
/**
 * Coordinate pin or general structured annotation in canonical model-meter coordinates. POSITION is absent for a general note.
 */
export declare class VAMAnnotation implements flatbuffers.IUnpackableObject<VAMAnnotationT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): VAMAnnotation;
    static getRootAsVAMAnnotation(bb: flatbuffers.ByteBuffer, obj?: VAMAnnotation): VAMAnnotation;
    static getSizePrefixedRootAsVAMAnnotation(bb: flatbuffers.ByteBuffer, obj?: VAMAnnotation): VAMAnnotation;
    ID(): string;
    ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    KIND(): string;
    KIND(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    MESSAGE(): string;
    MESSAGE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    POSITION(obj?: VAMVector3): VAMVector3 | null;
    static startVAMAnnotation(builder: flatbuffers.Builder): void;
    static addId(builder: flatbuffers.Builder, IDOffset: flatbuffers.Offset): void;
    static addKind(builder: flatbuffers.Builder, KINDOffset: flatbuffers.Offset): void;
    static addMessage(builder: flatbuffers.Builder, MESSAGEOffset: flatbuffers.Offset): void;
    static addPosition(builder: flatbuffers.Builder, POSITIONOffset: flatbuffers.Offset): void;
    static endVAMAnnotation(builder: flatbuffers.Builder): flatbuffers.Offset;
    unpack(): VAMAnnotationT;
    unpackTo(_o: VAMAnnotationT): void;
}
export declare class VAMAnnotationT implements flatbuffers.IGeneratedObject {
    ID: string | Uint8Array | null;
    KIND: string | Uint8Array | null;
    MESSAGE: string | Uint8Array | null;
    POSITION: VAMVector3T | null;
    constructor(ID?: string | Uint8Array | null, KIND?: string | Uint8Array | null, MESSAGE?: string | Uint8Array | null, POSITION?: VAMVector3T | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=VAMAnnotation.d.ts.map