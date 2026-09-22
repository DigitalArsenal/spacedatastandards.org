import * as flatbuffers from 'flatbuffers';
/**
 * Plaintext carried, size-prefixed, inside RPC.CIPHERTEXT.
 */
export declare class RPCBody implements flatbuffers.IUnpackableObject<RPCBodyT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): RPCBody;
    static getRootAsRPCBody(bb: flatbuffers.ByteBuffer, obj?: RPCBody): RPCBody;
    static getSizePrefixedRootAsRPCBody(bb: flatbuffers.ByteBuffer, obj?: RPCBody): RPCBody;
    /**
     * Request method verb (for example GET, POST). Empty on a response.
     */
    METHOD(): string | null;
    METHOD(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Request route, path plus optional query. Empty on a response.
     */
    ROUTE(): string | null;
    ROUTE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Request or response payload bytes.
     */
    BODY(index: number): number | null;
    bodyLength(): number;
    bodyArray(): Uint8Array | null;
    /**
     * Four-character file identifier of BODY when BODY is a FlatBuffer,
     * `$` included (for example "$EPM"). Empty when BODY is not a FlatBuffer.
     */
    BODY_FILE_ID(): string | null;
    BODY_FILE_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Response status code. Zero on a request.
     */
    STATUS(): number;
    /**
     * Identifier of the signer's key; MUST identify RPC.SIGNER_PUBLIC_KEY.
     */
    SIGNER_KEY_ID(index: number): number | null;
    signerKeyIdLength(): number;
    signerKeyIdArray(): Uint8Array | null;
    /**
     * Request only: public key the response is sealed to.
     */
    REPLY_KEY(index: number): number | null;
    replyKeyLength(): number;
    replyKeyArray(): Uint8Array | null;
    /**
     * Response only: RPC.NONCE of the request being answered.
     */
    REQUEST_NONCE(index: number): number | null;
    requestNonceLength(): number;
    requestNonceArray(): Uint8Array | null;
    /**
     * Response only: SHA-256 (32 bytes) of the complete size-prefixed request
     * RPC FlatBuffer as received, signatures included.
     */
    REQUEST_DIGEST(index: number): number | null;
    requestDigestLength(): number;
    requestDigestArray(): Uint8Array | null;
    static startRPCBody(builder: flatbuffers.Builder): void;
    static addMethod(builder: flatbuffers.Builder, METHODOffset: flatbuffers.Offset): void;
    static addRoute(builder: flatbuffers.Builder, ROUTEOffset: flatbuffers.Offset): void;
    static addBody(builder: flatbuffers.Builder, BODYOffset: flatbuffers.Offset): void;
    static createBodyVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startBodyVector(builder: flatbuffers.Builder, numElems: number): void;
    static addBodyFileId(builder: flatbuffers.Builder, BODY_FILE_IDOffset: flatbuffers.Offset): void;
    static addStatus(builder: flatbuffers.Builder, STATUS: number): void;
    static addSignerKeyId(builder: flatbuffers.Builder, SIGNER_KEY_IDOffset: flatbuffers.Offset): void;
    static createSignerKeyIdVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startSignerKeyIdVector(builder: flatbuffers.Builder, numElems: number): void;
    static addReplyKey(builder: flatbuffers.Builder, REPLY_KEYOffset: flatbuffers.Offset): void;
    static createReplyKeyVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startReplyKeyVector(builder: flatbuffers.Builder, numElems: number): void;
    static addRequestNonce(builder: flatbuffers.Builder, REQUEST_NONCEOffset: flatbuffers.Offset): void;
    static createRequestNonceVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startRequestNonceVector(builder: flatbuffers.Builder, numElems: number): void;
    static addRequestDigest(builder: flatbuffers.Builder, REQUEST_DIGESTOffset: flatbuffers.Offset): void;
    static createRequestDigestVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startRequestDigestVector(builder: flatbuffers.Builder, numElems: number): void;
    static endRPCBody(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createRPCBody(builder: flatbuffers.Builder, METHODOffset: flatbuffers.Offset, ROUTEOffset: flatbuffers.Offset, BODYOffset: flatbuffers.Offset, BODY_FILE_IDOffset: flatbuffers.Offset, STATUS: number, SIGNER_KEY_IDOffset: flatbuffers.Offset, REPLY_KEYOffset: flatbuffers.Offset, REQUEST_NONCEOffset: flatbuffers.Offset, REQUEST_DIGESTOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): RPCBodyT;
    unpackTo(_o: RPCBodyT): void;
}
export declare class RPCBodyT implements flatbuffers.IGeneratedObject {
    METHOD: string | Uint8Array | null;
    ROUTE: string | Uint8Array | null;
    BODY: (number)[];
    BODY_FILE_ID: string | Uint8Array | null;
    STATUS: number;
    SIGNER_KEY_ID: (number)[];
    REPLY_KEY: (number)[];
    REQUEST_NONCE: (number)[];
    REQUEST_DIGEST: (number)[];
    constructor(METHOD?: string | Uint8Array | null, ROUTE?: string | Uint8Array | null, BODY?: (number)[], BODY_FILE_ID?: string | Uint8Array | null, STATUS?: number, SIGNER_KEY_ID?: (number)[], REPLY_KEY?: (number)[], REQUEST_NONCE?: (number)[], REQUEST_DIGEST?: (number)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=RPCBody.d.ts.map