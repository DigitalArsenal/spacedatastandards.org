/** The field-encryption format this helper reads and writes. */
export declare const FIELD_ENCRYPTION_VERSION = 3;
export declare class FlatbuffersEncryption {
    /**
     * K = HKDF-SHA256(key, no salt, "flatbuffers-buffer-v3" || BE32(recordIndex)).
     */
    static bufferKey(key: Uint8Array, recordIndex?: number): Promise<Uint8Array>;
    /**
     * Encrypts, or decrypts (the same operation), every (encrypted) field
     * instance of `buffer` in place by a table's walk program, and returns
     * `buffer`. `buffer` is the FlatBuffer without a size prefix. Rejects,
     * before any byte changes, a key that is not 32 bytes, a record index that
     * does not fit in 32 bits, or a malformed buffer.
     */
    static cryptBuffer(buffer: Uint8Array, key: Uint8Array, recordIndex: number, program: readonly number[]): Promise<Uint8Array>;
    private static checkKey;
}
/**
 * The walk program flatc emits for each table that has an (encrypted) field
 * or reaches one through a table, a vector of tables or a union.
 */
export declare const FLATBUFFERS_ENCRYPTION_PROGRAMS: Readonly<Record<string, readonly number[]>>;
/** Encrypts the (encrypted) fields of a KMF buffer in place (key: 32 bytes; recordIndex: unique per buffer under the key). */
export declare function encryptKMFBuffer(buffer: Uint8Array, key: Uint8Array, recordIndex?: number): Promise<Uint8Array>;
/** Decrypts the (encrypted) fields of a KMF buffer in place (key: 32 bytes; recordIndex: the one it was encrypted with). */
export declare function decryptKMFBuffer(buffer: Uint8Array, key: Uint8Array, recordIndex?: number): Promise<Uint8Array>;
/** Encrypts the (encrypted) fields of a REC buffer in place (key: 32 bytes; recordIndex: unique per buffer under the key). */
export declare function encryptRECBuffer(buffer: Uint8Array, key: Uint8Array, recordIndex?: number): Promise<Uint8Array>;
/** Decrypts the (encrypted) fields of a REC buffer in place (key: 32 bytes; recordIndex: the one it was encrypted with). */
export declare function decryptRECBuffer(buffer: Uint8Array, key: Uint8Array, recordIndex?: number): Promise<Uint8Array>;
/** Encrypts the (encrypted) fields of a Record buffer in place (key: 32 bytes; recordIndex: unique per buffer under the key). */
export declare function encryptRecordBuffer(buffer: Uint8Array, key: Uint8Array, recordIndex?: number): Promise<Uint8Array>;
/** Decrypts the (encrypted) fields of a Record buffer in place (key: 32 bytes; recordIndex: the one it was encrypted with). */
export declare function decryptRecordBuffer(buffer: Uint8Array, key: Uint8Array, recordIndex?: number): Promise<Uint8Array>;
//# sourceMappingURL=flatbuffers-encryption.d.ts.map