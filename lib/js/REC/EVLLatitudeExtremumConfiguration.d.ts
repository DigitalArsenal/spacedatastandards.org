import * as flatbuffers from 'flatbuffers';
/**
 * Configuration for LATITUDE_EXTREMUM.
 */
export declare class EVLLatitudeExtremumConfiguration implements flatbuffers.IUnpackableObject<EVLLatitudeExtremumConfigurationT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): EVLLatitudeExtremumConfiguration;
    static getRootAsEVLLatitudeExtremumConfiguration(bb: flatbuffers.ByteBuffer, obj?: EVLLatitudeExtremumConfiguration): EVLLatitudeExtremumConfiguration;
    static getSizePrefixedRootAsEVLLatitudeExtremumConfiguration(bb: flatbuffers.ByteBuffer, obj?: EVLLatitudeExtremumConfiguration): EVLLatitudeExtremumConfiguration;
    /**
     * Ephemeris body code the latitude is measured about; the pole is that of
     * the request context's axes.
     */
    CENTRAL_BODY_ID(): number;
    REPORT_MAXIMUM(): boolean;
    REPORT_MINIMUM(): boolean;
    static startEVLLatitudeExtremumConfiguration(builder: flatbuffers.Builder): void;
    static addCentralBodyId(builder: flatbuffers.Builder, CENTRAL_BODY_ID: number): void;
    static addReportMaximum(builder: flatbuffers.Builder, REPORT_MAXIMUM: boolean): void;
    static addReportMinimum(builder: flatbuffers.Builder, REPORT_MINIMUM: boolean): void;
    static endEVLLatitudeExtremumConfiguration(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createEVLLatitudeExtremumConfiguration(builder: flatbuffers.Builder, CENTRAL_BODY_ID: number, REPORT_MAXIMUM: boolean, REPORT_MINIMUM: boolean): flatbuffers.Offset;
    unpack(): EVLLatitudeExtremumConfigurationT;
    unpackTo(_o: EVLLatitudeExtremumConfigurationT): void;
}
export declare class EVLLatitudeExtremumConfigurationT implements flatbuffers.IGeneratedObject {
    CENTRAL_BODY_ID: number;
    REPORT_MAXIMUM: boolean;
    REPORT_MINIMUM: boolean;
    constructor(CENTRAL_BODY_ID?: number, REPORT_MAXIMUM?: boolean, REPORT_MINIMUM?: boolean);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=EVLLatitudeExtremumConfiguration.d.ts.map