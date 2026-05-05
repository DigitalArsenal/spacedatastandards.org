import * as flatbuffers from 'flatbuffers';
import { keyMaterialAlgorithm } from './keyMaterialAlgorithm.js';
import { keyMaterialEncoding } from './keyMaterialEncoding.js';
import { keyMaterialRole } from './keyMaterialRole.js';
/**
 * Key Material Frame
 */
export declare class KMF implements flatbuffers.IUnpackableObject<KMFT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): KMF;
    static getRootAsKMF(bb: flatbuffers.ByteBuffer, obj?: KMF): KMF;
    static getSizePrefixedRootAsKMF(bb: flatbuffers.ByteBuffer, obj?: KMF): KMF;
    static bufferHasIdentifier(bb: flatbuffers.ByteBuffer): boolean;
    /**
     * Logical key identifier used across publication and grant records.
     */
    KEY_ID(): string | null;
    KEY_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Role the key bytes fulfill for the module flow.
     */
    ROLE(): keyMaterialRole;
    /**
     * Algorithm or key family for the key bytes.
     */
    ALGORITHM(): keyMaterialAlgorithm;
    /**
     * Encoding of KEY_BYTES.
     */
    ENCODING(): keyMaterialEncoding;
    /**
     * Explicit key bytes when a module must receive them on a port.
     * This may be field-encrypted using the SDS/da-flatbuffers header-first
     * encryption flow when transported to a specific recipient.
     */
    KEY_BYTES(index: number): number | null;
    keyBytesLength(): number;
    keyBytesArray(): Uint8Array | null;
    /**
     * Logical version of the key material.
     */
    VERSION(): number;
    /**
     * Expiration time in unix milliseconds, or 0 if unbounded.
     */
    EXPIRES_AT(): bigint;
    static startKMF(builder: flatbuffers.Builder): void;
    static addKeyId(builder: flatbuffers.Builder, KEY_IDOffset: flatbuffers.Offset): void;
    static addRole(builder: flatbuffers.Builder, ROLE: keyMaterialRole): void;
    static addAlgorithm(builder: flatbuffers.Builder, ALGORITHM: keyMaterialAlgorithm): void;
    static addEncoding(builder: flatbuffers.Builder, ENCODING: keyMaterialEncoding): void;
    static addKeyBytes(builder: flatbuffers.Builder, KEY_BYTESOffset: flatbuffers.Offset): void;
    static createKeyBytesVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startKeyBytesVector(builder: flatbuffers.Builder, numElems: number): void;
    static addVersion(builder: flatbuffers.Builder, VERSION: number): void;
    static addExpiresAt(builder: flatbuffers.Builder, EXPIRES_AT: bigint): void;
    static endKMF(builder: flatbuffers.Builder): flatbuffers.Offset;
    static finishKMFBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static finishSizePrefixedKMFBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static createKMF(builder: flatbuffers.Builder, KEY_IDOffset: flatbuffers.Offset, ROLE: keyMaterialRole, ALGORITHM: keyMaterialAlgorithm, ENCODING: keyMaterialEncoding, KEY_BYTESOffset: flatbuffers.Offset, VERSION: number, EXPIRES_AT: bigint): flatbuffers.Offset;
    unpack(): KMFT;
    unpackTo(_o: KMFT): void;
}
export declare class KMFT implements flatbuffers.IGeneratedObject {
    KEY_ID: string | Uint8Array | null;
    ROLE: keyMaterialRole;
    ALGORITHM: keyMaterialAlgorithm;
    ENCODING: keyMaterialEncoding;
    KEY_BYTES: (number)[];
    VERSION: number;
    EXPIRES_AT: bigint;
    constructor(KEY_ID?: string | Uint8Array | null, ROLE?: keyMaterialRole, ALGORITHM?: keyMaterialAlgorithm, ENCODING?: keyMaterialEncoding, KEY_BYTES?: (number)[], VERSION?: number, EXPIRES_AT?: bigint);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=KMF.d.ts.map