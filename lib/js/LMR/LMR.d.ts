import * as flatbuffers from 'flatbuffers';
import { licensingModuleRequestAction } from './licensingModuleRequestAction.js';
/**
 * Module fetch/register/load control message
 */
export declare class LMR implements flatbuffers.IUnpackableObject<LMRT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): LMR;
    static getRootAsLMR(bb: flatbuffers.ByteBuffer, obj?: LMR): LMR;
    static getSizePrefixedRootAsLMR(bb: flatbuffers.ByteBuffer, obj?: LMR): LMR;
    static bufferHasIdentifier(bb: flatbuffers.ByteBuffer): boolean;
    /**
     * Action being requested or reported
     */
    ACTION(): licensingModuleRequestAction;
    /**
     * Unique request identifier
     */
    REQUEST_ID(): string;
    REQUEST_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    /**
     * Canonical module identifier
     */
    MODULE_ID(): string;
    MODULE_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    /**
     * Optional module version
     */
    MODULE_VERSION(): string | null;
    MODULE_VERSION(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * IPFS CID of the encrypted module artifact
     */
    WASM_CID(): string | null;
    WASM_CID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * SHA-256 hash of the decrypted module bytes
     */
    MODULE_HASH(index: number): number | null;
    moduleHashLength(): number;
    moduleHashArray(): Uint8Array | null;
    /**
     * Human-readable status
     */
    STATUS(): string | null;
    STATUS(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Structured error code
     */
    ERROR_CODE(): string | null;
    ERROR_CODE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Structured error message
     */
    ERROR_MESSAGE(): string | null;
    ERROR_MESSAGE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    static startLMR(builder: flatbuffers.Builder): void;
    static addAction(builder: flatbuffers.Builder, ACTION: licensingModuleRequestAction): void;
    static addRequestId(builder: flatbuffers.Builder, REQUEST_IDOffset: flatbuffers.Offset): void;
    static addModuleId(builder: flatbuffers.Builder, MODULE_IDOffset: flatbuffers.Offset): void;
    static addModuleVersion(builder: flatbuffers.Builder, MODULE_VERSIONOffset: flatbuffers.Offset): void;
    static addWasmCid(builder: flatbuffers.Builder, WASM_CIDOffset: flatbuffers.Offset): void;
    static addModuleHash(builder: flatbuffers.Builder, MODULE_HASHOffset: flatbuffers.Offset): void;
    static createModuleHashVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startModuleHashVector(builder: flatbuffers.Builder, numElems: number): void;
    static addStatus(builder: flatbuffers.Builder, STATUSOffset: flatbuffers.Offset): void;
    static addErrorCode(builder: flatbuffers.Builder, ERROR_CODEOffset: flatbuffers.Offset): void;
    static addErrorMessage(builder: flatbuffers.Builder, ERROR_MESSAGEOffset: flatbuffers.Offset): void;
    static endLMR(builder: flatbuffers.Builder): flatbuffers.Offset;
    static finishLMRBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static finishSizePrefixedLMRBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static createLMR(builder: flatbuffers.Builder, ACTION: licensingModuleRequestAction, REQUEST_IDOffset: flatbuffers.Offset, MODULE_IDOffset: flatbuffers.Offset, MODULE_VERSIONOffset: flatbuffers.Offset, WASM_CIDOffset: flatbuffers.Offset, MODULE_HASHOffset: flatbuffers.Offset, STATUSOffset: flatbuffers.Offset, ERROR_CODEOffset: flatbuffers.Offset, ERROR_MESSAGEOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): LMRT;
    unpackTo(_o: LMRT): void;
}
export declare class LMRT implements flatbuffers.IGeneratedObject {
    ACTION: licensingModuleRequestAction;
    REQUEST_ID: string | Uint8Array | null;
    MODULE_ID: string | Uint8Array | null;
    MODULE_VERSION: string | Uint8Array | null;
    WASM_CID: string | Uint8Array | null;
    MODULE_HASH: (number)[];
    STATUS: string | Uint8Array | null;
    ERROR_CODE: string | Uint8Array | null;
    ERROR_MESSAGE: string | Uint8Array | null;
    constructor(ACTION?: licensingModuleRequestAction, REQUEST_ID?: string | Uint8Array | null, MODULE_ID?: string | Uint8Array | null, MODULE_VERSION?: string | Uint8Array | null, WASM_CID?: string | Uint8Array | null, MODULE_HASH?: (number)[], STATUS?: string | Uint8Array | null, ERROR_CODE?: string | Uint8Array | null, ERROR_MESSAGE?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=LMR.d.ts.map