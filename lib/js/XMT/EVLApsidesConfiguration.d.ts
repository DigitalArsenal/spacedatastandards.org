import * as flatbuffers from 'flatbuffers';
/**
 * Configuration for APSIDES.
 */
export declare class EVLApsidesConfiguration implements flatbuffers.IUnpackableObject<EVLApsidesConfigurationT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): EVLApsidesConfiguration;
    static getRootAsEVLApsidesConfiguration(bb: flatbuffers.ByteBuffer, obj?: EVLApsidesConfiguration): EVLApsidesConfiguration;
    static getSizePrefixedRootAsEVLApsidesConfiguration(bb: flatbuffers.ByteBuffer, obj?: EVLApsidesConfiguration): EVLApsidesConfiguration;
    /**
     * Ephemeris body code the radius is measured from. The apsis is the root
     * of the RADIAL_VELOCITY parameter about this body, NOT an extremum of
     * geodetic height; the two differ by tens of degrees of true anomaly on an
     * oblate body.
     */
    CENTRAL_BODY_ID(): number;
    REPORT_APOAPSIS(): boolean;
    REPORT_PERIAPSIS(): boolean;
    static startEVLApsidesConfiguration(builder: flatbuffers.Builder): void;
    static addCentralBodyId(builder: flatbuffers.Builder, CENTRAL_BODY_ID: number): void;
    static addReportApoapsis(builder: flatbuffers.Builder, REPORT_APOAPSIS: boolean): void;
    static addReportPeriapsis(builder: flatbuffers.Builder, REPORT_PERIAPSIS: boolean): void;
    static endEVLApsidesConfiguration(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createEVLApsidesConfiguration(builder: flatbuffers.Builder, CENTRAL_BODY_ID: number, REPORT_APOAPSIS: boolean, REPORT_PERIAPSIS: boolean): flatbuffers.Offset;
    unpack(): EVLApsidesConfigurationT;
    unpackTo(_o: EVLApsidesConfigurationT): void;
}
export declare class EVLApsidesConfigurationT implements flatbuffers.IGeneratedObject {
    CENTRAL_BODY_ID: number;
    REPORT_APOAPSIS: boolean;
    REPORT_PERIAPSIS: boolean;
    constructor(CENTRAL_BODY_ID?: number, REPORT_APOAPSIS?: boolean, REPORT_PERIAPSIS?: boolean);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=EVLApsidesConfiguration.d.ts.map