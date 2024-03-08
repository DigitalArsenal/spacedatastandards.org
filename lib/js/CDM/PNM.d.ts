import * as flatbuffers from 'flatbuffers';
import { Detail, DetailT } from './Detail.js';
/**
 * Publish Notification Message
 */
export declare class PNM implements flatbuffers.IUnpackableObject<PNMT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): PNM;
    static getRootAsPNM(bb: flatbuffers.ByteBuffer, obj?: PNM): PNM;
    static getSizePrefixedRootAsPNM(bb: flatbuffers.ByteBuffer, obj?: PNM): PNM;
    /**
     * Unencrypted PNM Details
     * This field contains the details of the Publish Notification Message without encryption.
     */
    FILE(obj?: Detail): Detail | null;
    /**
     * Encrypted PNM Details
     * This field contains the details of the Publish Notification Message with encryption.
     */
    FILE_ENCRYPTED(obj?: Detail): Detail | null;
    static startPNM(builder: flatbuffers.Builder): void;
    static addFile(builder: flatbuffers.Builder, FILEOffset: flatbuffers.Offset): void;
    static addFileEncrypted(builder: flatbuffers.Builder, FILE_ENCRYPTEDOffset: flatbuffers.Offset): void;
    static endPNM(builder: flatbuffers.Builder): flatbuffers.Offset;
    unpack(): PNMT;
    unpackTo(_o: PNMT): void;
}
export declare class PNMT implements flatbuffers.IGeneratedObject {
    FILE: DetailT | null;
    FILE_ENCRYPTED: DetailT | null;
    constructor(FILE?: DetailT | null, FILE_ENCRYPTED?: DetailT | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=PNM.d.ts.map