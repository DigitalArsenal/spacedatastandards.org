import * as flatbuffers from 'flatbuffers';
/**
 * Configuration for NODE_CROSSING.
 */
export declare class EVLNodeCrossingConfiguration implements flatbuffers.IUnpackableObject<EVLNodeCrossingConfigurationT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): EVLNodeCrossingConfiguration;
    static getRootAsEVLNodeCrossingConfiguration(bb: flatbuffers.ByteBuffer, obj?: EVLNodeCrossingConfiguration): EVLNodeCrossingConfiguration;
    static getSizePrefixedRootAsEVLNodeCrossingConfiguration(bb: flatbuffers.ByteBuffer, obj?: EVLNodeCrossingConfiguration): EVLNodeCrossingConfiguration;
    /**
     * Coordinate system whose reference plane defines the node line; resolves
     * against RFMCoordinateSystem.NAME on the request context.
     */
    REFERENCE_COORDINATE_SYSTEM_NAME(): string | null;
    REFERENCE_COORDINATE_SYSTEM_NAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    REPORT_ASCENDING(): boolean;
    REPORT_DESCENDING(): boolean;
    static startEVLNodeCrossingConfiguration(builder: flatbuffers.Builder): void;
    static addReferenceCoordinateSystemName(builder: flatbuffers.Builder, REFERENCE_COORDINATE_SYSTEM_NAMEOffset: flatbuffers.Offset): void;
    static addReportAscending(builder: flatbuffers.Builder, REPORT_ASCENDING: boolean): void;
    static addReportDescending(builder: flatbuffers.Builder, REPORT_DESCENDING: boolean): void;
    static endEVLNodeCrossingConfiguration(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createEVLNodeCrossingConfiguration(builder: flatbuffers.Builder, REFERENCE_COORDINATE_SYSTEM_NAMEOffset: flatbuffers.Offset, REPORT_ASCENDING: boolean, REPORT_DESCENDING: boolean): flatbuffers.Offset;
    unpack(): EVLNodeCrossingConfigurationT;
    unpackTo(_o: EVLNodeCrossingConfigurationT): void;
}
export declare class EVLNodeCrossingConfigurationT implements flatbuffers.IGeneratedObject {
    REFERENCE_COORDINATE_SYSTEM_NAME: string | Uint8Array | null;
    REPORT_ASCENDING: boolean;
    REPORT_DESCENDING: boolean;
    constructor(REFERENCE_COORDINATE_SYSTEM_NAME?: string | Uint8Array | null, REPORT_ASCENDING?: boolean, REPORT_DESCENDING?: boolean);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=EVLNodeCrossingConfiguration.d.ts.map