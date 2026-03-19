import * as flatbuffers from 'flatbuffers';
import { legacyCountryCode } from './legacyCountryCode.js';
/**
 * Legacy Country Code
 */
export declare class LCC implements flatbuffers.IUnpackableObject<LCCT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): LCC;
    static getRootAsLCC(bb: flatbuffers.ByteBuffer, obj?: LCC): LCC;
    static getSizePrefixedRootAsLCC(bb: flatbuffers.ByteBuffer, obj?: LCC): LCC;
    static bufferHasIdentifier(bb: flatbuffers.ByteBuffer): boolean;
    OWNER(): legacyCountryCode;
    static startLCC(builder: flatbuffers.Builder): void;
    static addOwner(builder: flatbuffers.Builder, OWNER: legacyCountryCode): void;
    static endLCC(builder: flatbuffers.Builder): flatbuffers.Offset;
    static finishLCCBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static finishSizePrefixedLCCBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static createLCC(builder: flatbuffers.Builder, OWNER: legacyCountryCode): flatbuffers.Offset;
    unpack(): LCCT;
    unpackTo(_o: LCCT): void;
}
export declare class LCCT implements flatbuffers.IGeneratedObject {
    OWNER: legacyCountryCode;
    constructor(OWNER?: legacyCountryCode);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=LCC.d.ts.map