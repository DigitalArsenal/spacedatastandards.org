declare function deriveCounter(ctx: Uint8Array, fieldOffset: number): Uint8Array;
declare function encryptBytes(data: Uint8Array, ctx: Uint8Array, fieldOffset: number): Promise<Uint8Array>;
declare function decryptBytes(data: Uint8Array, ctx: Uint8Array, fieldOffset: number): Promise<Uint8Array>;
export declare class FlatbuffersEncryption {
    static decryptScalarAsync<T extends number>(value: T, ctx: Uint8Array | null, fieldOffset: number): Promise<T>;
    static decryptStringAsync(data: Uint8Array | null, ctx: Uint8Array | null, fieldOffset: number): Promise<Uint8Array | null>;
    static encryptBytes(data: Uint8Array, ctx: Uint8Array, fieldOffset: number): Promise<Uint8Array>;
    static decryptBytes(data: Uint8Array, ctx: Uint8Array, fieldOffset: number): Promise<Uint8Array>;
    /** @deprecated Use decryptScalarAsync instead */
    static decryptScalar<T extends number>(value: T, ctx: Uint8Array | null, fieldOffset: number): T;
    /** @deprecated Use decryptStringAsync instead */
    static decryptString(data: Uint8Array | null, ctx: Uint8Array | null, fieldOffset: number): Uint8Array | null;
}
export { encryptBytes, decryptBytes, deriveCounter };
//# sourceMappingURL=flatbuffers-encryption.d.ts.map