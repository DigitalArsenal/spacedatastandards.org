import * as flatbuffers from 'flatbuffers';
import { refFrame } from './refFrame.js';
/**
 * Electro-Optical Observation
 */
export declare class EOO implements flatbuffers.IUnpackableObject<EOOT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): EOO;
    static getRootAsEOO(bb: flatbuffers.ByteBuffer, obj?: EOO): EOO;
    static getSizePrefixedRootAsEOO(bb: flatbuffers.ByteBuffer, obj?: EOO): EOO;
    static bufferHasIdentifier(bb: flatbuffers.ByteBuffer): boolean;
    /**
     * Unique identifier for Earth Observation Observation
     */
    EOBSERVATION_ID(): string | null;
    EOBSERVATION_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Classification marking of the data
     */
    CLASSIFICATION(): string | null;
    CLASSIFICATION(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Observation time in UTC
     */
    OB_TIME(): string | null;
    OB_TIME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Quality of the correlation
     */
    CORR_QUALITY(): number;
    /**
     * Identifier for the satellite on orbit
     */
    ID_ON_ORBIT(): string | null;
    ID_ON_ORBIT(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Identifier for the sensor
     */
    SENSOR_ID(): string | null;
    SENSOR_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Method of data collection
     */
    COLLECT_METHOD(): string | null;
    COLLECT_METHOD(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * NORAD catalog identifier for the satellite
     */
    NORAD_CAT_ID(): number;
    /**
     * Identifier for the task
     */
    TASK_ID(): string | null;
    TASK_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Identifier for the transaction
     */
    TRANSACTION_ID(): string | null;
    TRANSACTION_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Identifier for the track
     */
    TRACK_ID(): string | null;
    TRACK_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Position of the observation
     */
    OB_POSITION(): string | null;
    OB_POSITION(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Original object identifier
     */
    ORIG_OBJECT_ID(): string | null;
    ORIG_OBJECT_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Original sensor identifier
     */
    ORIG_SENSOR_ID(): string | null;
    ORIG_SENSOR_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Universal Coordinated Time flag
     */
    UCT(): boolean;
    /**
     * Azimuth angle
     */
    AZIMUTH(): number;
    /**
     * Uncertainty in azimuth angle
     */
    AZIMUTH_UNC(): number;
    /**
     * Bias in azimuth angle
     */
    AZIMUTH_BIAS(): number;
    /**
     * Rate of change in azimuth
     */
    AZIMUTH_RATE(): number;
    /**
     * Elevation angle
     */
    ELEVATION(): number;
    /**
     * Uncertainty in elevation angle
     */
    ELEVATION_UNC(): number;
    /**
     * Bias in elevation angle
     */
    ELEVATION_BIAS(): number;
    /**
     * Rate of change in elevation
     */
    ELEVATION_RATE(): number;
    /**
     * Range to the target
     */
    RANGE(): number;
    /**
     * Uncertainty in range
     */
    RANGE_UNC(): number;
    /**
     * Bias in range measurement
     */
    RANGE_BIAS(): number;
    /**
     * Rate of change in range
     */
    RANGE_RATE(): number;
    /**
     * Uncertainty in range rate
     */
    RANGE_RATE_UNC(): number;
    /**
     * Right ascension
     */
    RA(): number;
    /**
     * Rate of change in right ascension
     */
    RA_RATE(): number;
    /**
     * Uncertainty in right ascension
     */
    RA_UNC(): number;
    /**
     * Bias in right ascension
     */
    RA_BIAS(): number;
    /**
     * Declination angle
     */
    DECLINATION(): number;
    /**
     * Rate of change in declination
     */
    DECLINATION_RATE(): number;
    /**
     * Uncertainty in declination
     */
    DECLINATION_UNC(): number;
    /**
     * Bias in declination
     */
    DECLINATION_BIAS(): number;
    /**
     * X-component of line-of-sight vector
     */
    LOSX(): number;
    /**
     * Y-component of line-of-sight vector
     */
    LOSY(): number;
    /**
     * Z-component of line-of-sight vector
     */
    LOSZ(): number;
    /**
     * Uncertainty in line-of-sight vector
     */
    LOS_UNC(): number;
    /**
     * X-component of line-of-sight velocity
     */
    LOSXVEL(): number;
    /**
     * Y-component of line-of-sight velocity
     */
    LOSYVEL(): number;
    /**
     * Z-component of line-of-sight velocity
     */
    LOSZVEL(): number;
    /**
     * Latitude of sensor
     */
    SENLAT(): number;
    /**
     * Longitude of sensor
     */
    SENLON(): number;
    /**
     * Altitude of sensor
     */
    SENALT(): number;
    /**
     * X-coordinate of sensor position
     */
    SENX(): number;
    /**
     * Y-coordinate of sensor position
     */
    SENY(): number;
    /**
     * Z-coordinate of sensor position
     */
    SENZ(): number;
    /**
     * Number of fields of view
     */
    FOV_COUNT(): number;
    /**
     * Number of uncorrelated satellites in the field of view (JCO)
     */
    FOV_COUNT_UCTS(): number;
    /**
     * Duration of the exposure
     */
    EXP_DURATION(): number;
    /**
     * Zero-point displacement
     */
    ZEROPTD(): number;
    /**
     * Net object signal
     */
    NET_OBJ_SIG(): number;
    /**
     * Uncertainty in net object signal
     */
    NET_OBJ_SIG_UNC(): number;
    /**
     * Magnitude of the observation
     */
    MAG(): number;
    /**
     * Uncertainty in magnitude
     */
    MAG_UNC(): number;
    /**
     * Normalized range for magnitude
     */
    MAG_NORM_RANGE(): number;
    /**
     * Geocentric latitude
     */
    GEOLAT(): number;
    /**
     * Geocentric longitude
     */
    GEOLON(): number;
    /**
     * Geocentric altitude
     */
    GEOALT(): number;
    /**
     * Geocentric range
     */
    GEORANGE(): number;
    /**
     * Sky background level
     */
    SKY_BKGRND(): number;
    /**
     * Primary extinction
     */
    PRIMARY_EXTINCTION(): number;
    /**
     * Uncertainty in primary extinction
     */
    PRIMARY_EXTINCTION_UNC(): number;
    /**
     * Solar phase angle
     */
    SOLAR_PHASE_ANGLE(): number;
    /**
     * Solar equatorial phase angle
     */
    SOLAR_EQ_PHASE_ANGLE(): number;
    /**
     * Solar declination angle
     */
    SOLAR_DEC_ANGLE(): number;
    /**
     * Shutter delay
     */
    SHUTTER_DELAY(): number;
    /**
     * Timing bias
     */
    TIMING_BIAS(): number;
    /**
     * URI of the raw data file
     */
    RAW_FILE_URI(): string | null;
    RAW_FILE_URI(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Intensity of the observation
     */
    INTENSITY(): number;
    /**
     * Background intensity
     */
    BG_INTENSITY(): number;
    /**
     * Descriptor of the provided data
     */
    DESCRIPTOR(): string | null;
    DESCRIPTOR(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Source of the data
     */
    SOURCE(): string | null;
    SOURCE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Origin of the data
     */
    ORIGIN(): string | null;
    ORIGIN(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Mode of the data
     */
    DATA_MODE(): string | null;
    DATA_MODE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Creation time of the record
     */
    CREATED_AT(): string | null;
    CREATED_AT(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * User who created the record
     */
    CREATED_BY(): string | null;
    CREATED_BY(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Reference frame of the observation
     */
    REFERENCE_FRAME(): refFrame;
    /**
     * Reference frame of the sensor
     */
    SEN_REFERENCE_FRAME(): string | null;
    SEN_REFERENCE_FRAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Flag for umbra (total eclipse)
     */
    UMBRA(): boolean;
    /**
     * Flag for penumbra (partial eclipse)
     */
    PENUMBRA(): boolean;
    /**
     * Original network identifier
     */
    ORIG_NETWORK(): string | null;
    ORIG_NETWORK(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Data link source
     */
    SOURCE_DL(): string | null;
    SOURCE_DL(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Type of the observation
     */
    TYPE(): string | null;
    TYPE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * True if measured, false if computed. Required if azimuth is reported (JCO)
     */
    AZIMUTH_MEASURED(): boolean;
    /**
     * True if measured, false if computed. Required if elevation is reported (JCO)
     */
    ELEVATION_MEASURED(): boolean;
    /**
     * True if measured, false if computed. Required if range is reported (JCO)
     */
    RANGE_MEASURED(): boolean;
    /**
     * True if measured, false if computed. Required if range-rate is reported (JCO)
     */
    RANGERATE_MEASURED(): boolean;
    /**
     * True if measured, false if computed. Required if right ascension is reported (JCO)
     */
    RA_MEASURED(): boolean;
    /**
     * True if measured, false if computed. Required if declination is reported (JCO)
     */
    DECLINATION_MEASURED(): boolean;
    static startEOO(builder: flatbuffers.Builder): void;
    static addEobservationId(builder: flatbuffers.Builder, EOBSERVATION_IDOffset: flatbuffers.Offset): void;
    static addClassification(builder: flatbuffers.Builder, CLASSIFICATIONOffset: flatbuffers.Offset): void;
    static addObTime(builder: flatbuffers.Builder, OB_TIMEOffset: flatbuffers.Offset): void;
    static addCorrQuality(builder: flatbuffers.Builder, CORR_QUALITY: number): void;
    static addIdOnOrbit(builder: flatbuffers.Builder, ID_ON_ORBITOffset: flatbuffers.Offset): void;
    static addSensorId(builder: flatbuffers.Builder, SENSOR_IDOffset: flatbuffers.Offset): void;
    static addCollectMethod(builder: flatbuffers.Builder, COLLECT_METHODOffset: flatbuffers.Offset): void;
    static addNoradCatId(builder: flatbuffers.Builder, NORAD_CAT_ID: number): void;
    static addTaskId(builder: flatbuffers.Builder, TASK_IDOffset: flatbuffers.Offset): void;
    static addTransactionId(builder: flatbuffers.Builder, TRANSACTION_IDOffset: flatbuffers.Offset): void;
    static addTrackId(builder: flatbuffers.Builder, TRACK_IDOffset: flatbuffers.Offset): void;
    static addObPosition(builder: flatbuffers.Builder, OB_POSITIONOffset: flatbuffers.Offset): void;
    static addOrigObjectId(builder: flatbuffers.Builder, ORIG_OBJECT_IDOffset: flatbuffers.Offset): void;
    static addOrigSensorId(builder: flatbuffers.Builder, ORIG_SENSOR_IDOffset: flatbuffers.Offset): void;
    static addUct(builder: flatbuffers.Builder, UCT: boolean): void;
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
    static addRa(builder: flatbuffers.Builder, RA: number): void;
    static addRaRate(builder: flatbuffers.Builder, RA_RATE: number): void;
    static addRaUnc(builder: flatbuffers.Builder, RA_UNC: number): void;
    static addRaBias(builder: flatbuffers.Builder, RA_BIAS: number): void;
    static addDeclination(builder: flatbuffers.Builder, DECLINATION: number): void;
    static addDeclinationRate(builder: flatbuffers.Builder, DECLINATION_RATE: number): void;
    static addDeclinationUnc(builder: flatbuffers.Builder, DECLINATION_UNC: number): void;
    static addDeclinationBias(builder: flatbuffers.Builder, DECLINATION_BIAS: number): void;
    static addLosx(builder: flatbuffers.Builder, LOSX: number): void;
    static addLosy(builder: flatbuffers.Builder, LOSY: number): void;
    static addLosz(builder: flatbuffers.Builder, LOSZ: number): void;
    static addLosUnc(builder: flatbuffers.Builder, LOS_UNC: number): void;
    static addLosxvel(builder: flatbuffers.Builder, LOSXVEL: number): void;
    static addLosyvel(builder: flatbuffers.Builder, LOSYVEL: number): void;
    static addLoszvel(builder: flatbuffers.Builder, LOSZVEL: number): void;
    static addSenlat(builder: flatbuffers.Builder, SENLAT: number): void;
    static addSenlon(builder: flatbuffers.Builder, SENLON: number): void;
    static addSenalt(builder: flatbuffers.Builder, SENALT: number): void;
    static addSenx(builder: flatbuffers.Builder, SENX: number): void;
    static addSeny(builder: flatbuffers.Builder, SENY: number): void;
    static addSenz(builder: flatbuffers.Builder, SENZ: number): void;
    static addFovCount(builder: flatbuffers.Builder, FOV_COUNT: number): void;
    static addFovCountUcts(builder: flatbuffers.Builder, FOV_COUNT_UCTS: number): void;
    static addExpDuration(builder: flatbuffers.Builder, EXP_DURATION: number): void;
    static addZeroptd(builder: flatbuffers.Builder, ZEROPTD: number): void;
    static addNetObjSig(builder: flatbuffers.Builder, NET_OBJ_SIG: number): void;
    static addNetObjSigUnc(builder: flatbuffers.Builder, NET_OBJ_SIG_UNC: number): void;
    static addMag(builder: flatbuffers.Builder, MAG: number): void;
    static addMagUnc(builder: flatbuffers.Builder, MAG_UNC: number): void;
    static addMagNormRange(builder: flatbuffers.Builder, MAG_NORM_RANGE: number): void;
    static addGeolat(builder: flatbuffers.Builder, GEOLAT: number): void;
    static addGeolon(builder: flatbuffers.Builder, GEOLON: number): void;
    static addGeoalt(builder: flatbuffers.Builder, GEOALT: number): void;
    static addGeorange(builder: flatbuffers.Builder, GEORANGE: number): void;
    static addSkyBkgrnd(builder: flatbuffers.Builder, SKY_BKGRND: number): void;
    static addPrimaryExtinction(builder: flatbuffers.Builder, PRIMARY_EXTINCTION: number): void;
    static addPrimaryExtinctionUnc(builder: flatbuffers.Builder, PRIMARY_EXTINCTION_UNC: number): void;
    static addSolarPhaseAngle(builder: flatbuffers.Builder, SOLAR_PHASE_ANGLE: number): void;
    static addSolarEqPhaseAngle(builder: flatbuffers.Builder, SOLAR_EQ_PHASE_ANGLE: number): void;
    static addSolarDecAngle(builder: flatbuffers.Builder, SOLAR_DEC_ANGLE: number): void;
    static addShutterDelay(builder: flatbuffers.Builder, SHUTTER_DELAY: number): void;
    static addTimingBias(builder: flatbuffers.Builder, TIMING_BIAS: number): void;
    static addRawFileUri(builder: flatbuffers.Builder, RAW_FILE_URIOffset: flatbuffers.Offset): void;
    static addIntensity(builder: flatbuffers.Builder, INTENSITY: number): void;
    static addBgIntensity(builder: flatbuffers.Builder, BG_INTENSITY: number): void;
    static addDescriptor(builder: flatbuffers.Builder, DESCRIPTOROffset: flatbuffers.Offset): void;
    static addSource(builder: flatbuffers.Builder, SOURCEOffset: flatbuffers.Offset): void;
    static addOrigin(builder: flatbuffers.Builder, ORIGINOffset: flatbuffers.Offset): void;
    static addDataMode(builder: flatbuffers.Builder, DATA_MODEOffset: flatbuffers.Offset): void;
    static addCreatedAt(builder: flatbuffers.Builder, CREATED_ATOffset: flatbuffers.Offset): void;
    static addCreatedBy(builder: flatbuffers.Builder, CREATED_BYOffset: flatbuffers.Offset): void;
    static addReferenceFrame(builder: flatbuffers.Builder, REFERENCE_FRAME: refFrame): void;
    static addSenReferenceFrame(builder: flatbuffers.Builder, SEN_REFERENCE_FRAMEOffset: flatbuffers.Offset): void;
    static addUmbra(builder: flatbuffers.Builder, UMBRA: boolean): void;
    static addPenumbra(builder: flatbuffers.Builder, PENUMBRA: boolean): void;
    static addOrigNetwork(builder: flatbuffers.Builder, ORIG_NETWORKOffset: flatbuffers.Offset): void;
    static addSourceDl(builder: flatbuffers.Builder, SOURCE_DLOffset: flatbuffers.Offset): void;
    static addType(builder: flatbuffers.Builder, TYPEOffset: flatbuffers.Offset): void;
    static addAzimuthMeasured(builder: flatbuffers.Builder, AZIMUTH_MEASURED: boolean): void;
    static addElevationMeasured(builder: flatbuffers.Builder, ELEVATION_MEASURED: boolean): void;
    static addRangeMeasured(builder: flatbuffers.Builder, RANGE_MEASURED: boolean): void;
    static addRangerateMeasured(builder: flatbuffers.Builder, RANGERATE_MEASURED: boolean): void;
    static addRaMeasured(builder: flatbuffers.Builder, RA_MEASURED: boolean): void;
    static addDeclinationMeasured(builder: flatbuffers.Builder, DECLINATION_MEASURED: boolean): void;
    static endEOO(builder: flatbuffers.Builder): flatbuffers.Offset;
    static finishEOOBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static finishSizePrefixedEOOBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static createEOO(builder: flatbuffers.Builder, EOBSERVATION_IDOffset: flatbuffers.Offset, CLASSIFICATIONOffset: flatbuffers.Offset, OB_TIMEOffset: flatbuffers.Offset, CORR_QUALITY: number, ID_ON_ORBITOffset: flatbuffers.Offset, SENSOR_IDOffset: flatbuffers.Offset, COLLECT_METHODOffset: flatbuffers.Offset, NORAD_CAT_ID: number, TASK_IDOffset: flatbuffers.Offset, TRANSACTION_IDOffset: flatbuffers.Offset, TRACK_IDOffset: flatbuffers.Offset, OB_POSITIONOffset: flatbuffers.Offset, ORIG_OBJECT_IDOffset: flatbuffers.Offset, ORIG_SENSOR_IDOffset: flatbuffers.Offset, UCT: boolean, AZIMUTH: number, AZIMUTH_UNC: number, AZIMUTH_BIAS: number, AZIMUTH_RATE: number, ELEVATION: number, ELEVATION_UNC: number, ELEVATION_BIAS: number, ELEVATION_RATE: number, RANGE: number, RANGE_UNC: number, RANGE_BIAS: number, RANGE_RATE: number, RANGE_RATE_UNC: number, RA: number, RA_RATE: number, RA_UNC: number, RA_BIAS: number, DECLINATION: number, DECLINATION_RATE: number, DECLINATION_UNC: number, DECLINATION_BIAS: number, LOSX: number, LOSY: number, LOSZ: number, LOS_UNC: number, LOSXVEL: number, LOSYVEL: number, LOSZVEL: number, SENLAT: number, SENLON: number, SENALT: number, SENX: number, SENY: number, SENZ: number, FOV_COUNT: number, FOV_COUNT_UCTS: number, EXP_DURATION: number, ZEROPTD: number, NET_OBJ_SIG: number, NET_OBJ_SIG_UNC: number, MAG: number, MAG_UNC: number, MAG_NORM_RANGE: number, GEOLAT: number, GEOLON: number, GEOALT: number, GEORANGE: number, SKY_BKGRND: number, PRIMARY_EXTINCTION: number, PRIMARY_EXTINCTION_UNC: number, SOLAR_PHASE_ANGLE: number, SOLAR_EQ_PHASE_ANGLE: number, SOLAR_DEC_ANGLE: number, SHUTTER_DELAY: number, TIMING_BIAS: number, RAW_FILE_URIOffset: flatbuffers.Offset, INTENSITY: number, BG_INTENSITY: number, DESCRIPTOROffset: flatbuffers.Offset, SOURCEOffset: flatbuffers.Offset, ORIGINOffset: flatbuffers.Offset, DATA_MODEOffset: flatbuffers.Offset, CREATED_ATOffset: flatbuffers.Offset, CREATED_BYOffset: flatbuffers.Offset, REFERENCE_FRAME: refFrame, SEN_REFERENCE_FRAMEOffset: flatbuffers.Offset, UMBRA: boolean, PENUMBRA: boolean, ORIG_NETWORKOffset: flatbuffers.Offset, SOURCE_DLOffset: flatbuffers.Offset, TYPEOffset: flatbuffers.Offset, AZIMUTH_MEASURED: boolean, ELEVATION_MEASURED: boolean, RANGE_MEASURED: boolean, RANGERATE_MEASURED: boolean, RA_MEASURED: boolean, DECLINATION_MEASURED: boolean): flatbuffers.Offset;
    unpack(): EOOT;
    unpackTo(_o: EOOT): void;
}
export declare class EOOT implements flatbuffers.IGeneratedObject {
    EOBSERVATION_ID: string | Uint8Array | null;
    CLASSIFICATION: string | Uint8Array | null;
    OB_TIME: string | Uint8Array | null;
    CORR_QUALITY: number;
    ID_ON_ORBIT: string | Uint8Array | null;
    SENSOR_ID: string | Uint8Array | null;
    COLLECT_METHOD: string | Uint8Array | null;
    NORAD_CAT_ID: number;
    TASK_ID: string | Uint8Array | null;
    TRANSACTION_ID: string | Uint8Array | null;
    TRACK_ID: string | Uint8Array | null;
    OB_POSITION: string | Uint8Array | null;
    ORIG_OBJECT_ID: string | Uint8Array | null;
    ORIG_SENSOR_ID: string | Uint8Array | null;
    UCT: boolean;
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
    RA: number;
    RA_RATE: number;
    RA_UNC: number;
    RA_BIAS: number;
    DECLINATION: number;
    DECLINATION_RATE: number;
    DECLINATION_UNC: number;
    DECLINATION_BIAS: number;
    LOSX: number;
    LOSY: number;
    LOSZ: number;
    LOS_UNC: number;
    LOSXVEL: number;
    LOSYVEL: number;
    LOSZVEL: number;
    SENLAT: number;
    SENLON: number;
    SENALT: number;
    SENX: number;
    SENY: number;
    SENZ: number;
    FOV_COUNT: number;
    FOV_COUNT_UCTS: number;
    EXP_DURATION: number;
    ZEROPTD: number;
    NET_OBJ_SIG: number;
    NET_OBJ_SIG_UNC: number;
    MAG: number;
    MAG_UNC: number;
    MAG_NORM_RANGE: number;
    GEOLAT: number;
    GEOLON: number;
    GEOALT: number;
    GEORANGE: number;
    SKY_BKGRND: number;
    PRIMARY_EXTINCTION: number;
    PRIMARY_EXTINCTION_UNC: number;
    SOLAR_PHASE_ANGLE: number;
    SOLAR_EQ_PHASE_ANGLE: number;
    SOLAR_DEC_ANGLE: number;
    SHUTTER_DELAY: number;
    TIMING_BIAS: number;
    RAW_FILE_URI: string | Uint8Array | null;
    INTENSITY: number;
    BG_INTENSITY: number;
    DESCRIPTOR: string | Uint8Array | null;
    SOURCE: string | Uint8Array | null;
    ORIGIN: string | Uint8Array | null;
    DATA_MODE: string | Uint8Array | null;
    CREATED_AT: string | Uint8Array | null;
    CREATED_BY: string | Uint8Array | null;
    REFERENCE_FRAME: refFrame;
    SEN_REFERENCE_FRAME: string | Uint8Array | null;
    UMBRA: boolean;
    PENUMBRA: boolean;
    ORIG_NETWORK: string | Uint8Array | null;
    SOURCE_DL: string | Uint8Array | null;
    TYPE: string | Uint8Array | null;
    AZIMUTH_MEASURED: boolean;
    ELEVATION_MEASURED: boolean;
    RANGE_MEASURED: boolean;
    RANGERATE_MEASURED: boolean;
    RA_MEASURED: boolean;
    DECLINATION_MEASURED: boolean;
    constructor(EOBSERVATION_ID?: string | Uint8Array | null, CLASSIFICATION?: string | Uint8Array | null, OB_TIME?: string | Uint8Array | null, CORR_QUALITY?: number, ID_ON_ORBIT?: string | Uint8Array | null, SENSOR_ID?: string | Uint8Array | null, COLLECT_METHOD?: string | Uint8Array | null, NORAD_CAT_ID?: number, TASK_ID?: string | Uint8Array | null, TRANSACTION_ID?: string | Uint8Array | null, TRACK_ID?: string | Uint8Array | null, OB_POSITION?: string | Uint8Array | null, ORIG_OBJECT_ID?: string | Uint8Array | null, ORIG_SENSOR_ID?: string | Uint8Array | null, UCT?: boolean, AZIMUTH?: number, AZIMUTH_UNC?: number, AZIMUTH_BIAS?: number, AZIMUTH_RATE?: number, ELEVATION?: number, ELEVATION_UNC?: number, ELEVATION_BIAS?: number, ELEVATION_RATE?: number, RANGE?: number, RANGE_UNC?: number, RANGE_BIAS?: number, RANGE_RATE?: number, RANGE_RATE_UNC?: number, RA?: number, RA_RATE?: number, RA_UNC?: number, RA_BIAS?: number, DECLINATION?: number, DECLINATION_RATE?: number, DECLINATION_UNC?: number, DECLINATION_BIAS?: number, LOSX?: number, LOSY?: number, LOSZ?: number, LOS_UNC?: number, LOSXVEL?: number, LOSYVEL?: number, LOSZVEL?: number, SENLAT?: number, SENLON?: number, SENALT?: number, SENX?: number, SENY?: number, SENZ?: number, FOV_COUNT?: number, FOV_COUNT_UCTS?: number, EXP_DURATION?: number, ZEROPTD?: number, NET_OBJ_SIG?: number, NET_OBJ_SIG_UNC?: number, MAG?: number, MAG_UNC?: number, MAG_NORM_RANGE?: number, GEOLAT?: number, GEOLON?: number, GEOALT?: number, GEORANGE?: number, SKY_BKGRND?: number, PRIMARY_EXTINCTION?: number, PRIMARY_EXTINCTION_UNC?: number, SOLAR_PHASE_ANGLE?: number, SOLAR_EQ_PHASE_ANGLE?: number, SOLAR_DEC_ANGLE?: number, SHUTTER_DELAY?: number, TIMING_BIAS?: number, RAW_FILE_URI?: string | Uint8Array | null, INTENSITY?: number, BG_INTENSITY?: number, DESCRIPTOR?: string | Uint8Array | null, SOURCE?: string | Uint8Array | null, ORIGIN?: string | Uint8Array | null, DATA_MODE?: string | Uint8Array | null, CREATED_AT?: string | Uint8Array | null, CREATED_BY?: string | Uint8Array | null, REFERENCE_FRAME?: refFrame, SEN_REFERENCE_FRAME?: string | Uint8Array | null, UMBRA?: boolean, PENUMBRA?: boolean, ORIG_NETWORK?: string | Uint8Array | null, SOURCE_DL?: string | Uint8Array | null, TYPE?: string | Uint8Array | null, AZIMUTH_MEASURED?: boolean, ELEVATION_MEASURED?: boolean, RANGE_MEASURED?: boolean, RANGERATE_MEASURED?: boolean, RA_MEASURED?: boolean, DECLINATION_MEASURED?: boolean);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=EOO.d.ts.map