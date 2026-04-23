import * as flatbuffers from 'flatbuffers';
import { SHWCompileRequest, SHWCompileRequestT } from './SHWCompileRequest.js';
import { SHWCompileResponse, SHWCompileResponseT } from './SHWCompileResponse.js';
/**
 * Shader Wire envelope — carries either a compile request or a compile
 * response across the runtime boundary.
 */
export declare class SHW implements flatbuffers.IUnpackableObject<SHWT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): SHW;
    static getRootAsSHW(bb: flatbuffers.ByteBuffer, obj?: SHW): SHW;
    static getSizePrefixedRootAsSHW(bb: flatbuffers.ByteBuffer, obj?: SHW): SHW;
    static bufferHasIdentifier(bb: flatbuffers.ByteBuffer): boolean;
    COMPILE_REQUEST(obj?: SHWCompileRequest): SHWCompileRequest | null;
    COMPILE_RESPONSE(obj?: SHWCompileResponse): SHWCompileResponse | null;
    static startSHW(builder: flatbuffers.Builder): void;
    static addCompileRequest(builder: flatbuffers.Builder, COMPILE_REQUESTOffset: flatbuffers.Offset): void;
    static addCompileResponse(builder: flatbuffers.Builder, COMPILE_RESPONSEOffset: flatbuffers.Offset): void;
    static endSHW(builder: flatbuffers.Builder): flatbuffers.Offset;
    static finishSHWBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static finishSizePrefixedSHWBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    unpack(): SHWT;
    unpackTo(_o: SHWT): void;
}
export declare class SHWT implements flatbuffers.IGeneratedObject {
    COMPILE_REQUEST: SHWCompileRequestT | null;
    COMPILE_RESPONSE: SHWCompileResponseT | null;
    constructor(COMPILE_REQUEST?: SHWCompileRequestT | null, COMPILE_RESPONSE?: SHWCompileResponseT | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=SHW.d.ts.map