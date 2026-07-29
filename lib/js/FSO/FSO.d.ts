import * as flatbuffers from 'flatbuffers';
import { FSOTableBinding, FSOTableBindingT } from './FSOTableBinding.js';
import { flatSqlNodeOperation } from './flatSqlNodeOperation.js';
import { flatSqlNodeStatus } from './flatSqlNodeStatus.js';
/**
 * FlatSQL Operation — generic control, policy, and status record for the
 * independently packaged FlatSQL WASM node.
 *
 * Bulk records, query results, snapshots, and WAL chunks travel separately as
 * FSB frames so operations remain streamable and no host needs to interpret a
 * database payload. SCHEMA_IDL is canonical SDS/FlatBuffers IDL supplied to
 * the node for schema-derived table/index construction.
 */
export declare class FSO implements flatbuffers.IUnpackableObject<FSOT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): FSO;
    static getRootAsFSO(bb: flatbuffers.ByteBuffer, obj?: FSO): FSO;
    static getSizePrefixedRootAsFSO(bb: flatbuffers.ByteBuffer, obj?: FSO): FSO;
    static bufferHasIdentifier(bb: flatbuffers.ByteBuffer): boolean;
    OPERATION(): flatSqlNodeOperation;
    REQUEST_ID(): bigint;
    DATABASE_NAME(): string | null;
    DATABASE_NAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * UTF-8 FlatBuffers IDL bytes. A byte vector is used because the aligned
     * compiler intentionally limits fixed inline strings to 255 bytes.
     */
    SCHEMA_IDL(index: number): number | null;
    schemaIdlLength(): number;
    schemaIdlArray(): Uint8Array | null;
    TABLE_BINDINGS(index: number, obj?: FSOTableBinding): FSOTableBinding | null;
    tableBindingsLength(): number;
    TABLE_NAME(): string | null;
    TABLE_NAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    INDEX_NAME(): string | null;
    INDEX_NAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * UTF-8 index expression bytes.
     */
    INDEX_EXPRESSION(index: number): number | null;
    indexExpressionLength(): number;
    indexExpressionArray(): Uint8Array | null;
    VIEW_NAME(): string | null;
    VIEW_NAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * UTF-8 SQL/query bytes.
     */
    QUERY(index: number): number | null;
    queryLength(): number;
    queryArray(): Uint8Array | null;
    PARAMETERS(index: number): number | null;
    parametersLength(): number;
    parametersArray(): Uint8Array | null;
    PARAMETER_COUNT(): number;
    /**
     * UTF-8 upsert-key expression bytes.
     */
    UPSERT_KEY_EXPRESSION(index: number): number | null;
    upsertKeyExpressionLength(): number;
    upsertKeyExpressionArray(): Uint8Array | null;
    RETENTION_MAX_RECORDS(): bigint;
    RETENTION_MAX_AGE_MILLIS(): bigint;
    COMPACTION_TARGET_BYTES(): bigint;
    STATUS(): flatSqlNodeStatus;
    AFFECTED_RECORDS(): bigint;
    RESULT_BYTES(): bigint;
    ERROR_CODE(): string | null;
    ERROR_CODE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * UTF-8 diagnostic bytes.
     */
    MESSAGE(index: number): number | null;
    messageLength(): number;
    messageArray(): Uint8Array | null;
    static startFSO(builder: flatbuffers.Builder): void;
    static addOperation(builder: flatbuffers.Builder, OPERATION: flatSqlNodeOperation): void;
    static addRequestId(builder: flatbuffers.Builder, REQUEST_ID: bigint): void;
    static addDatabaseName(builder: flatbuffers.Builder, DATABASE_NAMEOffset: flatbuffers.Offset): void;
    static addSchemaIdl(builder: flatbuffers.Builder, SCHEMA_IDLOffset: flatbuffers.Offset): void;
    static createSchemaIdlVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startSchemaIdlVector(builder: flatbuffers.Builder, numElems: number): void;
    static addTableBindings(builder: flatbuffers.Builder, TABLE_BINDINGSOffset: flatbuffers.Offset): void;
    static createTableBindingsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startTableBindingsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addTableName(builder: flatbuffers.Builder, TABLE_NAMEOffset: flatbuffers.Offset): void;
    static addIndexName(builder: flatbuffers.Builder, INDEX_NAMEOffset: flatbuffers.Offset): void;
    static addIndexExpression(builder: flatbuffers.Builder, INDEX_EXPRESSIONOffset: flatbuffers.Offset): void;
    static createIndexExpressionVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startIndexExpressionVector(builder: flatbuffers.Builder, numElems: number): void;
    static addViewName(builder: flatbuffers.Builder, VIEW_NAMEOffset: flatbuffers.Offset): void;
    static addQuery(builder: flatbuffers.Builder, QUERYOffset: flatbuffers.Offset): void;
    static createQueryVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startQueryVector(builder: flatbuffers.Builder, numElems: number): void;
    static addParameters(builder: flatbuffers.Builder, PARAMETERSOffset: flatbuffers.Offset): void;
    static createParametersVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startParametersVector(builder: flatbuffers.Builder, numElems: number): void;
    static addParameterCount(builder: flatbuffers.Builder, PARAMETER_COUNT: number): void;
    static addUpsertKeyExpression(builder: flatbuffers.Builder, UPSERT_KEY_EXPRESSIONOffset: flatbuffers.Offset): void;
    static createUpsertKeyExpressionVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startUpsertKeyExpressionVector(builder: flatbuffers.Builder, numElems: number): void;
    static addRetentionMaxRecords(builder: flatbuffers.Builder, RETENTION_MAX_RECORDS: bigint): void;
    static addRetentionMaxAgeMillis(builder: flatbuffers.Builder, RETENTION_MAX_AGE_MILLIS: bigint): void;
    static addCompactionTargetBytes(builder: flatbuffers.Builder, COMPACTION_TARGET_BYTES: bigint): void;
    static addStatus(builder: flatbuffers.Builder, STATUS: flatSqlNodeStatus): void;
    static addAffectedRecords(builder: flatbuffers.Builder, AFFECTED_RECORDS: bigint): void;
    static addResultBytes(builder: flatbuffers.Builder, RESULT_BYTES: bigint): void;
    static addErrorCode(builder: flatbuffers.Builder, ERROR_CODEOffset: flatbuffers.Offset): void;
    static addMessage(builder: flatbuffers.Builder, MESSAGEOffset: flatbuffers.Offset): void;
    static createMessageVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startMessageVector(builder: flatbuffers.Builder, numElems: number): void;
    static endFSO(builder: flatbuffers.Builder): flatbuffers.Offset;
    static finishFSOBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static finishSizePrefixedFSOBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static createFSO(builder: flatbuffers.Builder, OPERATION: flatSqlNodeOperation, REQUEST_ID: bigint, DATABASE_NAMEOffset: flatbuffers.Offset, SCHEMA_IDLOffset: flatbuffers.Offset, TABLE_BINDINGSOffset: flatbuffers.Offset, TABLE_NAMEOffset: flatbuffers.Offset, INDEX_NAMEOffset: flatbuffers.Offset, INDEX_EXPRESSIONOffset: flatbuffers.Offset, VIEW_NAMEOffset: flatbuffers.Offset, QUERYOffset: flatbuffers.Offset, PARAMETERSOffset: flatbuffers.Offset, PARAMETER_COUNT: number, UPSERT_KEY_EXPRESSIONOffset: flatbuffers.Offset, RETENTION_MAX_RECORDS: bigint, RETENTION_MAX_AGE_MILLIS: bigint, COMPACTION_TARGET_BYTES: bigint, STATUS: flatSqlNodeStatus, AFFECTED_RECORDS: bigint, RESULT_BYTES: bigint, ERROR_CODEOffset: flatbuffers.Offset, MESSAGEOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): FSOT;
    unpackTo(_o: FSOT): void;
}
export declare class FSOT implements flatbuffers.IGeneratedObject {
    OPERATION: flatSqlNodeOperation;
    REQUEST_ID: bigint;
    DATABASE_NAME: string | Uint8Array | null;
    SCHEMA_IDL: (number)[];
    TABLE_BINDINGS: (FSOTableBindingT)[];
    TABLE_NAME: string | Uint8Array | null;
    INDEX_NAME: string | Uint8Array | null;
    INDEX_EXPRESSION: (number)[];
    VIEW_NAME: string | Uint8Array | null;
    QUERY: (number)[];
    PARAMETERS: (number)[];
    PARAMETER_COUNT: number;
    UPSERT_KEY_EXPRESSION: (number)[];
    RETENTION_MAX_RECORDS: bigint;
    RETENTION_MAX_AGE_MILLIS: bigint;
    COMPACTION_TARGET_BYTES: bigint;
    STATUS: flatSqlNodeStatus;
    AFFECTED_RECORDS: bigint;
    RESULT_BYTES: bigint;
    ERROR_CODE: string | Uint8Array | null;
    MESSAGE: (number)[];
    constructor(OPERATION?: flatSqlNodeOperation, REQUEST_ID?: bigint, DATABASE_NAME?: string | Uint8Array | null, SCHEMA_IDL?: (number)[], TABLE_BINDINGS?: (FSOTableBindingT)[], TABLE_NAME?: string | Uint8Array | null, INDEX_NAME?: string | Uint8Array | null, INDEX_EXPRESSION?: (number)[], VIEW_NAME?: string | Uint8Array | null, QUERY?: (number)[], PARAMETERS?: (number)[], PARAMETER_COUNT?: number, UPSERT_KEY_EXPRESSION?: (number)[], RETENTION_MAX_RECORDS?: bigint, RETENTION_MAX_AGE_MILLIS?: bigint, COMPACTION_TARGET_BYTES?: bigint, STATUS?: flatSqlNodeStatus, AFFECTED_RECORDS?: bigint, RESULT_BYTES?: bigint, ERROR_CODE?: string | Uint8Array | null, MESSAGE?: (number)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=FSO.d.ts.map