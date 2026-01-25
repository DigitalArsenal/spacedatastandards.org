import * as flatbuffers from 'flatbuffers';
import { DataSourceType } from './DataSourceType.js';
import { MatchCriteria, MatchCriteriaT } from './MatchCriteria.js';
/**
 * Parameter properties
 */
export declare class ParameterProperties implements flatbuffers.IUnpackableObject<ParameterPropertiesT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): ParameterProperties;
    static getRootAsParameterProperties(bb: flatbuffers.ByteBuffer, obj?: ParameterProperties): ParameterProperties;
    static getSizePrefixedRootAsParameterProperties(bb: flatbuffers.ByteBuffer, obj?: ParameterProperties): ParameterProperties;
    /**
     * Data source type
     */
    DATA_SOURCE(): DataSourceType;
    /**
     * Read-only parameter
     */
    READ_ONLY(): boolean;
    /**
     * System/subsystem name
     */
    SYSTEM_NAME(): string | null;
    SYSTEM_NAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Validity condition
     */
    VALIDITY_CONDITION(obj?: MatchCriteria): MatchCriteria | null;
    static startParameterProperties(builder: flatbuffers.Builder): void;
    static addDataSource(builder: flatbuffers.Builder, DATA_SOURCE: DataSourceType): void;
    static addReadOnly(builder: flatbuffers.Builder, READ_ONLY: boolean): void;
    static addSystemName(builder: flatbuffers.Builder, SYSTEM_NAMEOffset: flatbuffers.Offset): void;
    static addValidityCondition(builder: flatbuffers.Builder, VALIDITY_CONDITIONOffset: flatbuffers.Offset): void;
    static endParameterProperties(builder: flatbuffers.Builder): flatbuffers.Offset;
    unpack(): ParameterPropertiesT;
    unpackTo(_o: ParameterPropertiesT): void;
}
export declare class ParameterPropertiesT implements flatbuffers.IGeneratedObject {
    DATA_SOURCE: DataSourceType;
    READ_ONLY: boolean;
    SYSTEM_NAME: string | Uint8Array | null;
    VALIDITY_CONDITION: MatchCriteriaT | null;
    constructor(DATA_SOURCE?: DataSourceType, READ_ONLY?: boolean, SYSTEM_NAME?: string | Uint8Array | null, VALIDITY_CONDITION?: MatchCriteriaT | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=ParameterProperties.d.ts.map