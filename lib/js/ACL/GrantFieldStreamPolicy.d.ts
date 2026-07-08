import * as flatbuffers from 'flatbuffers';
/**
 * Field-level stream policy bound into protected delivery and grants.
 */
export declare class GrantFieldStreamPolicy implements flatbuffers.IUnpackableObject<GrantFieldStreamPolicyT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): GrantFieldStreamPolicy;
    static getRootAsGrantFieldStreamPolicy(bb: flatbuffers.ByteBuffer, obj?: GrantFieldStreamPolicy): GrantFieldStreamPolicy;
    static getSizePrefixedRootAsGrantFieldStreamPolicy(bb: flatbuffers.ByteBuffer, obj?: GrantFieldStreamPolicy): GrantFieldStreamPolicy;
    POLICY_ID(): string | null;
    POLICY_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    POLICY_VERSION(): number;
    STREAM_ID(): string | null;
    STREAM_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    SCHEMA_CODE(): string | null;
    SCHEMA_CODE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    ALLOWED_FIELD_PATHS(index: number): string;
    ALLOWED_FIELD_PATHS(index: number, optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    allowedFieldPathsLength(): number;
    REDACTED_FIELD_PATHS(index: number): string;
    REDACTED_FIELD_PATHS(index: number, optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    redactedFieldPathsLength(): number;
    KEY_EPOCH(): string | null;
    KEY_EPOCH(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    GRANT_SCOPE(): string | null;
    GRANT_SCOPE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    ALLOWED_OPERATIONS(index: number): string;
    ALLOWED_OPERATIONS(index: number, optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    allowedOperationsLength(): number;
    static startGrantFieldStreamPolicy(builder: flatbuffers.Builder): void;
    static addPolicyId(builder: flatbuffers.Builder, POLICY_IDOffset: flatbuffers.Offset): void;
    static addPolicyVersion(builder: flatbuffers.Builder, POLICY_VERSION: number): void;
    static addStreamId(builder: flatbuffers.Builder, STREAM_IDOffset: flatbuffers.Offset): void;
    static addSchemaCode(builder: flatbuffers.Builder, SCHEMA_CODEOffset: flatbuffers.Offset): void;
    static addAllowedFieldPaths(builder: flatbuffers.Builder, ALLOWED_FIELD_PATHSOffset: flatbuffers.Offset): void;
    static createAllowedFieldPathsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startAllowedFieldPathsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addRedactedFieldPaths(builder: flatbuffers.Builder, REDACTED_FIELD_PATHSOffset: flatbuffers.Offset): void;
    static createRedactedFieldPathsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startRedactedFieldPathsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addKeyEpoch(builder: flatbuffers.Builder, KEY_EPOCHOffset: flatbuffers.Offset): void;
    static addGrantScope(builder: flatbuffers.Builder, GRANT_SCOPEOffset: flatbuffers.Offset): void;
    static addAllowedOperations(builder: flatbuffers.Builder, ALLOWED_OPERATIONSOffset: flatbuffers.Offset): void;
    static createAllowedOperationsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startAllowedOperationsVector(builder: flatbuffers.Builder, numElems: number): void;
    static endGrantFieldStreamPolicy(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createGrantFieldStreamPolicy(builder: flatbuffers.Builder, POLICY_IDOffset: flatbuffers.Offset, POLICY_VERSION: number, STREAM_IDOffset: flatbuffers.Offset, SCHEMA_CODEOffset: flatbuffers.Offset, ALLOWED_FIELD_PATHSOffset: flatbuffers.Offset, REDACTED_FIELD_PATHSOffset: flatbuffers.Offset, KEY_EPOCHOffset: flatbuffers.Offset, GRANT_SCOPEOffset: flatbuffers.Offset, ALLOWED_OPERATIONSOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): GrantFieldStreamPolicyT;
    unpackTo(_o: GrantFieldStreamPolicyT): void;
}
export declare class GrantFieldStreamPolicyT implements flatbuffers.IGeneratedObject {
    POLICY_ID: string | Uint8Array | null;
    POLICY_VERSION: number;
    STREAM_ID: string | Uint8Array | null;
    SCHEMA_CODE: string | Uint8Array | null;
    ALLOWED_FIELD_PATHS: (string)[];
    REDACTED_FIELD_PATHS: (string)[];
    KEY_EPOCH: string | Uint8Array | null;
    GRANT_SCOPE: string | Uint8Array | null;
    ALLOWED_OPERATIONS: (string)[];
    constructor(POLICY_ID?: string | Uint8Array | null, POLICY_VERSION?: number, STREAM_ID?: string | Uint8Array | null, SCHEMA_CODE?: string | Uint8Array | null, ALLOWED_FIELD_PATHS?: (string)[], REDACTED_FIELD_PATHS?: (string)[], KEY_EPOCH?: string | Uint8Array | null, GRANT_SCOPE?: string | Uint8Array | null, ALLOWED_OPERATIONS?: (string)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=GrantFieldStreamPolicy.d.ts.map