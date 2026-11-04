import * as flatbuffers from 'flatbuffers';
import { FRMVector3, FRMVector3T } from './FRMVector3.js';
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
    /**
     * Normal of the plane crossed, in the axes of REFERENCE_COORDINATE_SYSTEM_NAME;
     * it need not be a unit vector. Absent or zero: the pole of those axes, which
     * makes the crossings the nodes of its equator. Any other normal is an
     * arbitrary plane through the center of the system.
     */
    PLANE_NORMAL(obj?: FRMVector3): FRMVector3 | null;
    static startEVLNodeCrossingConfiguration(builder: flatbuffers.Builder): void;
    static addReferenceCoordinateSystemName(builder: flatbuffers.Builder, REFERENCE_COORDINATE_SYSTEM_NAMEOffset: flatbuffers.Offset): void;
    static addReportAscending(builder: flatbuffers.Builder, REPORT_ASCENDING: boolean): void;
    static addReportDescending(builder: flatbuffers.Builder, REPORT_DESCENDING: boolean): void;
    static addPlaneNormal(builder: flatbuffers.Builder, PLANE_NORMALOffset: flatbuffers.Offset): void;
    static endEVLNodeCrossingConfiguration(builder: flatbuffers.Builder): flatbuffers.Offset;
    unpack(): EVLNodeCrossingConfigurationT;
    unpackTo(_o: EVLNodeCrossingConfigurationT): void;
}
export declare class EVLNodeCrossingConfigurationT implements flatbuffers.IGeneratedObject {
    REFERENCE_COORDINATE_SYSTEM_NAME: string | Uint8Array | null;
    REPORT_ASCENDING: boolean;
    REPORT_DESCENDING: boolean;
    PLANE_NORMAL: FRMVector3T | null;
    constructor(REFERENCE_COORDINATE_SYSTEM_NAME?: string | Uint8Array | null, REPORT_ASCENDING?: boolean, REPORT_DESCENDING?: boolean, PLANE_NORMAL?: FRMVector3T | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=EVLNodeCrossingConfiguration.d.ts.map