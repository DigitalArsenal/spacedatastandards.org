import * as flatbuffers from 'flatbuffers';
import { keyReferenceAlgorithm } from './keyReferenceAlgorithm.js';
import { keyReferenceRole } from './keyReferenceRole.js';
/**
 * Key Reference Frame
 */
export declare class KRF implements flatbuffers.IUnpackableObject<KRFT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): KRF;
    static getRootAsKRF(bb: flatbuffers.ByteBuffer, obj?: KRF): KRF;
    static getSizePrefixedRootAsKRF(bb: flatbuffers.ByteBuffer, obj?: KRF): KRF;
    static bufferHasIdentifier(bb: flatbuffers.ByteBuffer): boolean;
    /**
     * Logical key identifier used across publication and grant records.
     */
    KEY_ID(): string | null;
    KEY_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Host-managed key slot or key handle identifier.
     */
    SLOT_ID(): string | null;
    SLOT_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Role the referenced key fulfills for the module flow.
     */
    ROLE(): keyReferenceRole;
    /**
     * Algorithm or key family for the referenced key.
     */
    ALGORITHM(): keyReferenceAlgorithm;
    /**
     * Optional public bytes for verification or peer identity binding.
     */
    PUBLIC_KEY(index: number): number | null;
    publicKeyLength(): number;
    publicKeyArray(): Uint8Array | null;
    /**
     * Logical version of the referenced key.
     */
    VERSION(): number;
    /**
     * Expiration time in unix milliseconds, or 0 if unbounded.
     */
    EXPIRES_AT(): bigint;
    /**
     * True when the secret material remains in the host key slot.
     */
    HOST_MANAGED(): boolean;
    static startKRF(builder: flatbuffers.Builder): void;
    static addKeyId(builder: flatbuffers.Builder, KEY_IDOffset: flatbuffers.Offset): void;
    static addSlotId(builder: flatbuffers.Builder, SLOT_IDOffset: flatbuffers.Offset): void;
    static addRole(builder: flatbuffers.Builder, ROLE: keyReferenceRole): void;
    static addAlgorithm(builder: flatbuffers.Builder, ALGORITHM: keyReferenceAlgorithm): void;
    static addPublicKey(builder: flatbuffers.Builder, PUBLIC_KEYOffset: flatbuffers.Offset): void;
    static createPublicKeyVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startPublicKeyVector(builder: flatbuffers.Builder, numElems: number): void;
    static addVersion(builder: flatbuffers.Builder, VERSION: number): void;
    static addExpiresAt(builder: flatbuffers.Builder, EXPIRES_AT: bigint): void;
    static addHostManaged(builder: flatbuffers.Builder, HOST_MANAGED: boolean): void;
    static endKRF(builder: flatbuffers.Builder): flatbuffers.Offset;
    static finishKRFBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static finishSizePrefixedKRFBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static createKRF(builder: flatbuffers.Builder, KEY_IDOffset: flatbuffers.Offset, SLOT_IDOffset: flatbuffers.Offset, ROLE: keyReferenceRole, ALGORITHM: keyReferenceAlgorithm, PUBLIC_KEYOffset: flatbuffers.Offset, VERSION: number, EXPIRES_AT: bigint, HOST_MANAGED: boolean): flatbuffers.Offset;
    unpack(): KRFT;
    unpackTo(_o: KRFT): void;
}
export declare class KRFT implements flatbuffers.IGeneratedObject {
    KEY_ID: string | Uint8Array | null;
    SLOT_ID: string | Uint8Array | null;
    ROLE: keyReferenceRole;
    ALGORITHM: keyReferenceAlgorithm;
    PUBLIC_KEY: (number)[];
    VERSION: number;
    EXPIRES_AT: bigint;
    HOST_MANAGED: boolean;
    constructor(KEY_ID?: string | Uint8Array | null, SLOT_ID?: string | Uint8Array | null, ROLE?: keyReferenceRole, ALGORITHM?: keyReferenceAlgorithm, PUBLIC_KEY?: (number)[], VERSION?: number, EXPIRES_AT?: bigint, HOST_MANAGED?: boolean);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=KRF.d.ts.map