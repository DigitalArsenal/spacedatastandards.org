import * as flatbuffers from 'flatbuffers';
import { radarObsType } from './radarObsType.js';
/**
 * Radar Observation
 */
export declare class RDO implements flatbuffers.IUnpackableObject<RDOT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): RDO;
    static getRootAsRDO(bb: flatbuffers.ByteBuffer, obj?: RDO): RDO;
    static getSizePrefixedRootAsRDO(bb: flatbuffers.ByteBuffer, obj?: RDO): RDO;
    static bufferHasIdentifier(bb: flatbuffers.ByteBuffer): boolean;
    /**
     * Unique identifier
     */
    ID(): string | null;
    ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Observation time (ISO 8601)
     */
    OB_TIME(): string | null;
    OB_TIME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Sensor identifier
     */
    ID_SENSOR(): string | null;
    ID_SENSOR(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Original sensor identifier
     */
    ORIG_SENSOR_ID(): string | null;
    ORIG_SENSOR_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Satellite catalog number
     */
    SAT_NO(): number;
    /**
     * International designator
     */
    ORIG_OBJECT_ID(): string | null;
    ORIG_OBJECT_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * On-orbit reference
     */
    ON_ORBIT(): string | null;
    ON_ORBIT(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * True if uncorrelated target
     */
    UCT(): boolean;
    /**
     * Observation type
     */
    OBS_TYPE(): radarObsType;
    /**
     * Task identifier
     */
    TASK_ID(): string | null;
    TASK_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Transaction identifier
     */
    TRANSACTION_ID(): string | null;
    TRANSACTION_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Track identifier
     */
    TRACK_ID(): string | null;
    TRACK_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Observation position identifier
     */
    OB_POSITION(): string | null;
    OB_POSITION(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Sensor reference frame
     */
    SEN_REFERENCE_FRAME(): string | null;
    SEN_REFERENCE_FRAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Azimuth angle (degrees)
     */
    AZIMUTH(): number;
    /**
     * Azimuth uncertainty (degrees, 1-sigma)
     */
    AZIMUTH_UNC(): number;
    /**
     * Azimuth bias (degrees)
     */
    AZIMUTH_BIAS(): number;
    /**
     * Azimuth rate (degrees/s)
     */
    AZIMUTH_RATE(): number;
    /**
     * Elevation angle (degrees)
     */
    ELEVATION(): number;
    /**
     * Elevation uncertainty (degrees, 1-sigma)
     */
    ELEVATION_UNC(): number;
    /**
     * Elevation bias (degrees)
     */
    ELEVATION_BIAS(): number;
    /**
     * Elevation rate (degrees/s)
     */
    ELEVATION_RATE(): number;
    /**
     * Slant range (km)
     */
    RANGE(): number;
    /**
     * Range uncertainty (km, 1-sigma)
     */
    RANGE_UNC(): number;
    /**
     * Range bias (km)
     */
    RANGE_BIAS(): number;
    /**
     * Range rate (km/s)
     */
    RANGE_RATE(): number;
    /**
     * Range rate uncertainty (km/s, 1-sigma)
     */
    RANGE_RATE_UNC(): number;
    /**
     * Range acceleration (km/s^2)
     */
    RANGE_ACCEL(): number;
    /**
     * Range acceleration uncertainty (km/s^2, 1-sigma)
     */
    RANGE_ACCEL_UNC(): number;
    /**
     * Doppler shift (Hz)
     */
    DOPPLER(): number;
    /**
     * Doppler uncertainty (Hz, 1-sigma)
     */
    DOPPLER_UNC(): number;
    /**
     * Right ascension (degrees)
     */
    RA(): number;
    /**
     * Declination (degrees)
     */
    DECLINATION(): number;
    /**
     * Target position X (km, ECI)
     */
    X(): number;
    /**
     * Target position Y (km, ECI)
     */
    Y(): number;
    /**
     * Target position Z (km, ECI)
     */
    Z(): number;
    /**
     * Target velocity X (km/s, ECI)
     */
    XVEL(): number;
    /**
     * Target velocity Y (km/s, ECI)
     */
    YVEL(): number;
    /**
     * Target velocity Z (km/s, ECI)
     */
    ZVEL(): number;
    /**
     * Sensor position X (km, ECEF)
     */
    SENX(): number;
    /**
     * Sensor position Y (km, ECEF)
     */
    SENY(): number;
    /**
     * Sensor position Z (km, ECEF)
     */
    SENZ(): number;
    /**
     * Radar cross-section (dBsm)
     */
    RCS(): number;
    /**
     * RCS uncertainty (dBsm, 1-sigma)
     */
    RCS_UNC(): number;
    /**
     * Orthogonal polarization RCS (dBsm)
     */
    ORTHOGONAL_RCS(): number;
    /**
     * Orthogonal RCS uncertainty (dBsm, 1-sigma)
     */
    ORTHOGONAL_RCS_UNC(): number;
    /**
     * Signal-to-noise ratio (dB)
     */
    SNR(): number;
    /**
     * Beam identifier
     */
    BEAM(): number;
    /**
     * Timing bias (seconds)
     */
    TIMING_BIAS(): number;
    /**
     * Reference to raw data file
     */
    RAW_FILE_URI(): string | null;
    RAW_FILE_URI(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Event descriptor
     */
    DESCRIPTOR(): string | null;
    DESCRIPTOR(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Associated tags
     */
    TAGS(index: number): string;
    TAGS(index: number, optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    tagsLength(): number;
    static startRDO(builder: flatbuffers.Builder): void;
    static addId(builder: flatbuffers.Builder, IDOffset: flatbuffers.Offset): void;
    static addObTime(builder: flatbuffers.Builder, OB_TIMEOffset: flatbuffers.Offset): void;
    static addIdSensor(builder: flatbuffers.Builder, ID_SENSOROffset: flatbuffers.Offset): void;
    static addOrigSensorId(builder: flatbuffers.Builder, ORIG_SENSOR_IDOffset: flatbuffers.Offset): void;
    static addSatNo(builder: flatbuffers.Builder, SAT_NO: number): void;
    static addOrigObjectId(builder: flatbuffers.Builder, ORIG_OBJECT_IDOffset: flatbuffers.Offset): void;
    static addOnOrbit(builder: flatbuffers.Builder, ON_ORBITOffset: flatbuffers.Offset): void;
    static addUct(builder: flatbuffers.Builder, UCT: boolean): void;
    static addObsType(builder: flatbuffers.Builder, OBS_TYPE: radarObsType): void;
    static addTaskId(builder: flatbuffers.Builder, TASK_IDOffset: flatbuffers.Offset): void;
    static addTransactionId(builder: flatbuffers.Builder, TRANSACTION_IDOffset: flatbuffers.Offset): void;
    static addTrackId(builder: flatbuffers.Builder, TRACK_IDOffset: flatbuffers.Offset): void;
    static addObPosition(builder: flatbuffers.Builder, OB_POSITIONOffset: flatbuffers.Offset): void;
    static addSenReferenceFrame(builder: flatbuffers.Builder, SEN_REFERENCE_FRAMEOffset: flatbuffers.Offset): void;
    static addAzimuth(builder: flatbuffers.Builder, AZIMUTH: number): void;
    static addAzimuthUnc(builder: flatbuffers.Builder, AZIMUTH_UNC: number): void;
    static addAzimuthBias(builder: flatbuffers.Builder, AZIMUTH_BIAS: number): void;
    static addAzimuthRate(builder: flatbuffers.Builder, AZIMUTH_RATE: number): void;
    static addElevation(builder: flatbuffers.Builder, ELEVATION: number): void;
    static addElevationUnc(builder: flatbuffers.Builder, ELEVATION_UNC: number): void;
    static addElevationBias(builder: flatbuffers.Builder, ELEVATION_BIAS: number): void;
    static addElevationRate(builder: flatbuffers.Builder, ELEVATION_RATE: number): void;
    static addRange(builder: flatbuffers.Builder, RANGE: number): void;
    static addRangeUnc(builder: flatbuffers.Builder, RANGE_UNC: number): void;
    static addRangeBias(builder: flatbuffers.Builder, RANGE_BIAS: number): void;
    static addRangeRate(builder: flatbuffers.Builder, RANGE_RATE: number): void;
    static addRangeRateUnc(builder: flatbuffers.Builder, RANGE_RATE_UNC: number): void;
    static addRangeAccel(builder: flatbuffers.Builder, RANGE_ACCEL: number): void;
    static addRangeAccelUnc(builder: flatbuffers.Builder, RANGE_ACCEL_UNC: number): void;
    static addDoppler(builder: flatbuffers.Builder, DOPPLER: number): void;
    static addDopplerUnc(builder: flatbuffers.Builder, DOPPLER_UNC: number): void;
    static addRa(builder: flatbuffers.Builder, RA: number): void;
    static addDeclination(builder: flatbuffers.Builder, DECLINATION: number): void;
    static addX(builder: flatbuffers.Builder, X: number): void;
    static addY(builder: flatbuffers.Builder, Y: number): void;
    static addZ(builder: flatbuffers.Builder, Z: number): void;
    static addXvel(builder: flatbuffers.Builder, XVEL: number): void;
    static addYvel(builder: flatbuffers.Builder, YVEL: number): void;
    static addZvel(builder: flatbuffers.Builder, ZVEL: number): void;
    static addSenx(builder: flatbuffers.Builder, SENX: number): void;
    static addSeny(builder: flatbuffers.Builder, SENY: number): void;
    static addSenz(builder: flatbuffers.Builder, SENZ: number): void;
    static addRcs(builder: flatbuffers.Builder, RCS: number): void;
    static addRcsUnc(builder: flatbuffers.Builder, RCS_UNC: number): void;
    static addOrthogonalRcs(builder: flatbuffers.Builder, ORTHOGONAL_RCS: number): void;
    static addOrthogonalRcsUnc(builder: flatbuffers.Builder, ORTHOGONAL_RCS_UNC: number): void;
    static addSnr(builder: flatbuffers.Builder, SNR: number): void;
    static addBeam(builder: flatbuffers.Builder, BEAM: number): void;
    static addTimingBias(builder: flatbuffers.Builder, TIMING_BIAS: number): void;
    static addRawFileUri(builder: flatbuffers.Builder, RAW_FILE_URIOffset: flatbuffers.Offset): void;
    static addDescriptor(builder: flatbuffers.Builder, DESCRIPTOROffset: flatbuffers.Offset): void;
    static addTags(builder: flatbuffers.Builder, TAGSOffset: flatbuffers.Offset): void;
    static createTagsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startTagsVector(builder: flatbuffers.Builder, numElems: number): void;
    static endRDO(builder: flatbuffers.Builder): flatbuffers.Offset;
    static finishRDOBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static finishSizePrefixedRDOBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static createRDO(builder: flatbuffers.Builder, IDOffset: flatbuffers.Offset, OB_TIMEOffset: flatbuffers.Offset, ID_SENSOROffset: flatbuffers.Offset, ORIG_SENSOR_IDOffset: flatbuffers.Offset, SAT_NO: number, ORIG_OBJECT_IDOffset: flatbuffers.Offset, ON_ORBITOffset: flatbuffers.Offset, UCT: boolean, OBS_TYPE: radarObsType, TASK_IDOffset: flatbuffers.Offset, TRANSACTION_IDOffset: flatbuffers.Offset, TRACK_IDOffset: flatbuffers.Offset, OB_POSITIONOffset: flatbuffers.Offset, SEN_REFERENCE_FRAMEOffset: flatbuffers.Offset, AZIMUTH: number, AZIMUTH_UNC: number, AZIMUTH_BIAS: number, AZIMUTH_RATE: number, ELEVATION: number, ELEVATION_UNC: number, ELEVATION_BIAS: number, ELEVATION_RATE: number, RANGE: number, RANGE_UNC: number, RANGE_BIAS: number, RANGE_RATE: number, RANGE_RATE_UNC: number, RANGE_ACCEL: number, RANGE_ACCEL_UNC: number, DOPPLER: number, DOPPLER_UNC: number, RA: number, DECLINATION: number, X: number, Y: number, Z: number, XVEL: number, YVEL: number, ZVEL: number, SENX: number, SENY: number, SENZ: number, RCS: number, RCS_UNC: number, ORTHOGONAL_RCS: number, ORTHOGONAL_RCS_UNC: number, SNR: number, BEAM: number, TIMING_BIAS: number, RAW_FILE_URIOffset: flatbuffers.Offset, DESCRIPTOROffset: flatbuffers.Offset, TAGSOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): RDOT;
    unpackTo(_o: RDOT): void;
}
export declare class RDOT implements flatbuffers.IGeneratedObject {
    ID: string | Uint8Array | null;
    OB_TIME: string | Uint8Array | null;
    ID_SENSOR: string | Uint8Array | null;
    ORIG_SENSOR_ID: string | Uint8Array | null;
    SAT_NO: number;
    ORIG_OBJECT_ID: string | Uint8Array | null;
    ON_ORBIT: string | Uint8Array | null;
    UCT: boolean;
    OBS_TYPE: radarObsType;
    TASK_ID: string | Uint8Array | null;
    TRANSACTION_ID: string | Uint8Array | null;
    TRACK_ID: string | Uint8Array | null;
    OB_POSITION: string | Uint8Array | null;
    SEN_REFERENCE_FRAME: string | Uint8Array | null;
    AZIMUTH: number;
    AZIMUTH_UNC: number;
    AZIMUTH_BIAS: number;
    AZIMUTH_RATE: number;
    ELEVATION: number;
    ELEVATION_UNC: number;
    ELEVATION_BIAS: number;
    ELEVATION_RATE: number;
    RANGE: number;
    RANGE_UNC: number;
    RANGE_BIAS: number;
    RANGE_RATE: number;
    RANGE_RATE_UNC: number;
    RANGE_ACCEL: number;
    RANGE_ACCEL_UNC: number;
    DOPPLER: number;
    DOPPLER_UNC: number;
    RA: number;
    DECLINATION: number;
    X: number;
    Y: number;
    Z: number;
    XVEL: number;
    YVEL: number;
    ZVEL: number;
    SENX: number;
    SENY: number;
    SENZ: number;
    RCS: number;
    RCS_UNC: number;
    ORTHOGONAL_RCS: number;
    ORTHOGONAL_RCS_UNC: number;
    SNR: number;
    BEAM: number;
    TIMING_BIAS: number;
    RAW_FILE_URI: string | Uint8Array | null;
    DESCRIPTOR: string | Uint8Array | null;
    TAGS: (string)[];
    constructor(ID?: string | Uint8Array | null, OB_TIME?: string | Uint8Array | null, ID_SENSOR?: string | Uint8Array | null, ORIG_SENSOR_ID?: string | Uint8Array | null, SAT_NO?: number, ORIG_OBJECT_ID?: string | Uint8Array | null, ON_ORBIT?: string | Uint8Array | null, UCT?: boolean, OBS_TYPE?: radarObsType, TASK_ID?: string | Uint8Array | null, TRANSACTION_ID?: string | Uint8Array | null, TRACK_ID?: string | Uint8Array | null, OB_POSITION?: string | Uint8Array | null, SEN_REFERENCE_FRAME?: string | Uint8Array | null, AZIMUTH?: number, AZIMUTH_UNC?: number, AZIMUTH_BIAS?: number, AZIMUTH_RATE?: number, ELEVATION?: number, ELEVATION_UNC?: number, ELEVATION_BIAS?: number, ELEVATION_RATE?: number, RANGE?: number, RANGE_UNC?: number, RANGE_BIAS?: number, RANGE_RATE?: number, RANGE_RATE_UNC?: number, RANGE_ACCEL?: number, RANGE_ACCEL_UNC?: number, DOPPLER?: number, DOPPLER_UNC?: number, RA?: number, DECLINATION?: number, X?: number, Y?: number, Z?: number, XVEL?: number, YVEL?: number, ZVEL?: number, SENX?: number, SENY?: number, SENZ?: number, RCS?: number, RCS_UNC?: number, ORTHOGONAL_RCS?: number, ORTHOGONAL_RCS_UNC?: number, SNR?: number, BEAM?: number, TIMING_BIAS?: number, RAW_FILE_URI?: string | Uint8Array | null, DESCRIPTOR?: string | Uint8Array | null, TAGS?: (string)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=RDO.d.ts.map