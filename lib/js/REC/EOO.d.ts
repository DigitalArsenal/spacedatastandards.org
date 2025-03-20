import * as flatbuffers from 'flatbuffers';
import { CollectMethod } from './CollectMethod.js';
import { DataMode } from './DataMode.js';
import { DeviceType } from './DeviceType.js';
import { ObservationPosition } from './ObservationPosition.js';
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
     * Unique identifier of the record.
     */
    ID(): string | null;
    ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Classification marking of the data in IC/CAPCO Portion-marked format.
     */
    CLASSIFICATION(): string | null;
    CLASSIFICATION(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Ob detection time in ISO 8601 UTC (YYYY-MM-DDTHH:MM:SS.ssssssZ), up to microsecond precision.
     */
    OB_TIME(): string | null;
    OB_TIME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Correlation score of the observation when compared to a known orbit state.
     */
    CORR_QUALITY(): number;
    /**
     * Server will auto-populate with SAT_NO if available.
     */
    ID_ON_ORBIT(): string | null;
    ID_ON_ORBIT(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Unique ID of the sensor. Must have a corresponding sensor record on the server.
     */
    SENSOR_ID(): string | null;
    SENSOR_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Accepted Collection Method
     */
    COLLECT_METHOD(): CollectMethod;
    /**
     * 18SDS satellite number. Only list if correlated against the 18SDS catalog.
     */
    NORAD_CAT_ID(): number;
    /**
     * Identifier for the collectRequest message if the collection was in response to tasking.
     */
    TASK_ID(): string | null;
    TASK_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Optional identifier to track a transaction.
     */
    TRANSACTION_ID(): string | null;
    TRANSACTION_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * The user-defined set ID of a sequence of images.
     */
    IMAGE_SET_ID(): string | null;
    IMAGE_SET_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * The number of images in an image set.
     */
    IMAGE_SET_LENGTH(): number;
    /**
     * The sequence ID of an image within an image set.
     */
    SEQUENCE_ID(): number;
    /**
     * The position of this observation within a track (FENCE, FIRST, IN, LAST, SINGLE).
     */
    OB_POSITION(): ObservationPosition;
    /**
     * Provider maintained ID. May not be consistent with 18SDS SAT_NO.
     */
    ORIG_OBJECT_ID(): string | null;
    ORIG_OBJECT_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Sensor ID.
     */
    ORIG_SENSOR_ID(): string | null;
    ORIG_SENSOR_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Required if correlation is attempted. Indicates whether correlation succeeded.
     */
    UCT(): boolean;
    /**
     * Line of sight azimuth angle in degrees and topocentric frame.
     */
    AZIMUTH(): number;
    /**
     * One sigma uncertainty in the line of sight azimuth angle, in degrees.
     */
    AZIMUTH_UNC(): number;
    /**
     * Sensor line of sight azimuth angle bias in degrees.
     */
    AZIMUTH_BIAS(): number;
    /**
     * Rate of change of the line of sight azimuth in degrees per second.
     */
    AZIMUTH_RATE(): number;
    /**
     * Line of sight elevation in degrees and topocentric frame.
     */
    ELEVATION(): number;
    /**
     * One sigma uncertainty in the line of sight elevation angle, in degrees.
     */
    ELEVATION_UNC(): number;
    /**
     * Sensor line of sight elevation bias in degrees.
     */
    ELEVATION_BIAS(): number;
    /**
     * Rate of change of the line of sight elevation in degrees per second.
     */
    ELEVATION_RATE(): number;
    /**
     * Line of sight range in km. Reported value should include all applicable corrections.
     */
    RANGE(): number;
    /**
     * One sigma uncertainty in the line of sight range, in km.
     */
    RANGE_UNC(): number;
    /**
     * Sensor line of sight range bias in km.
     */
    RANGE_BIAS(): number;
    /**
     * Range rate in km/s. Reported value should include all applicable corrections.
     */
    RANGE_RATE(): number;
    /**
     * One sigma uncertainty in the line of sight range rate, in km/sec.
     */
    RANGE_RATE_UNC(): number;
    /**
     * Right ascension in degrees. Required metric reporting field for EO observations.
     */
    RA(): number;
    /**
     * Line of sight right ascension rate of change, in degrees/sec.
     */
    RA_RATE(): number;
    /**
     * One sigma uncertainty in the line of sight right ascension angle, in degrees.
     */
    RA_UNC(): number;
    /**
     * Sensor line of sight right ascension bias in degrees.
     */
    RA_BIAS(): number;
    /**
     * Declination in degrees. Required metric reporting field for EO observations.
     */
    DECLINATION(): number;
    /**
     * Line of sight declination rate of change, in degrees/sec.
     */
    DECLINATION_RATE(): number;
    /**
     * One sigma uncertainty in the line of sight declination angle, in degrees.
     */
    DECLINATION_UNC(): number;
    /**
     * Sensor line of sight declination angle bias in degrees.
     */
    DECLINATION_BIAS(): number;
    /**
     * X-component of the unit vector representing the line-of-sight direction in the observer's reference frame.
     */
    LOSX(): number;
    /**
     * Y-component of the unit vector representing the line-of-sight direction in the observer's reference frame.
     */
    LOSY(): number;
    /**
     * Z-component of the unit vector representing the line-of-sight direction in the observer's reference frame.
     */
    LOSZ(): number;
    /**
     * One sigma uncertainty in the line-of-sight direction vector components.
     */
    LOS_UNC(): number;
    /**
     * X-component of the velocity vector along the line of sight, in km/s.
     */
    LOSXVEL(): number;
    /**
     * Y-component of the velocity vector along the line of sight, in km/s.
     */
    LOSYVEL(): number;
    /**
     * Z-component of the velocity vector along the line of sight, in km/s.
     */
    LOSZVEL(): number;
    /**
     * WGS-84 latitude in decimal degrees at the time of the observation.
     */
    SENLAT(): number;
    /**
     * WGS-84 longitude in decimal degrees at the time of the observation.
     */
    SENLON(): number;
    /**
     * Sensor height in km relative to the WGS-84 ellipsoid at the time of the observation.
     */
    SENALT(): number;
    /**
     * Cartesian X position in km at the time of the observation.
     */
    SENX(): number;
    /**
     * Cartesian Y position in km at the time of the observation.
     */
    SENY(): number;
    /**
     * Cartesian Z position in km at the time of the observation.
     */
    SENZ(): number;
    /**
     * Total number of satellites in the field of view.
     */
    FOV_COUNT(): number;
    /**
     * Number of uncorrelated satellites in the field of view (JCO).
     */
    FOV_COUNT_UCTS(): number;
    /**
     * Image exposure duration in seconds. For observations performed using frame stacking or synthetic tracking methods,
     * the exposure duration should be the total integration time. This field is highly recommended / required if the
     * observations are going to be used for photometric processing.
     */
    EXP_DURATION(): number;
    /**
     * Formula: 2.5 * log_10 (zero_mag_counts / EXP_DURATION).
     */
    ZEROPTD(): number;
    /**
     * Net object signature = counts / EXP_DURATION.
     */
    NET_OBJ_SIG(): number;
    /**
     * Net object signature uncertainty = counts uncertainty / EXP_DURATION.
     */
    NET_OBJ_SIG_UNC(): number;
    /**
     * Measure of observed brightness calibrated against the Gaia G-band.
     */
    MAG(): number;
    /**
     * Uncertainty of the observed brightness.
     */
    MAG_UNC(): number;
    /**
     * [Definition needed].
     */
    MAG_NORM_RANGE(): number;
    /**
     * Computed estimate of the latitude, positive degrees north. It should be computed based on the assumed slant range
     * and corresponding viewing geometry. It must NOT be computed from the orbit state.
     */
    GEOLAT(): number;
    /**
     * Computed estimate of the longitude as +/- 180 degrees east. It should be computed based on the assumed slant range
     * and viewing geometry. It must NOT be computed from the orbit state.
     */
    GEOLON(): number;
    /**
     * Computed estimate of satellite altitude in km at the reported location. It must NOT be computed from the orbit state.
     */
    GEOALT(): number;
    /**
     * Computed estimate of the slant range in km. It must NOT be computed from the orbit state.
     */
    GEORANGE(): number;
    /**
     * Average Sky Background signal, in Magnitudes. Sky Background refers to the incoming light from an apparently
     * empty part of the night sky.
     */
    SKY_BKGRND(): number;
    /**
     * Primary Extinction Coefficient, in Magnitudes. Primary Extinction is the coefficient applied to the airmass
     * to determine how much the observed visual magnitude has been attenuated by the atmosphere. Extinction, in general,
     * describes the absorption and scattering of electromagnetic radiation by dust and gas between an emitting astronomical
     * object and the observer.
     */
    PRIMARY_EXTINCTION(): number;
    /**
     * Primary Extinction Coefficient Uncertainty, in Magnitudes.
     */
    PRIMARY_EXTINCTION_UNC(): number;
    /**
     * The angle, in degrees, between the target-to-observer vector and the target-to-sun vector. Recommend using the
     * calculation listed in the EOSSA documentation, pg 106 of the EOSSA spec.
     */
    SOLAR_PHASE_ANGLE(): number;
    /**
     * The angle, in degrees, between the projections of the target-to-observer vector and the target-to-sun vector
     * onto the equatorial plane. The convention used is negative when closing (i.e., before the opposition)
     * and positive when opening (after the opposition).
     */
    SOLAR_EQ_PHASE_ANGLE(): number;
    /**
     * Angle from the sun to the equatorial plane.
     */
    SOLAR_DEC_ANGLE(): number;
    /**
     * Shutter delay in seconds.
     */
    SHUTTER_DELAY(): number;
    /**
     * Sensor timing bias in seconds.
     */
    TIMING_BIAS(): number;
    /**
     * Optional URI location in the document repository of the raw file parsed by the system to produce this record.
     */
    RAW_FILE_URI(): string | null;
    RAW_FILE_URI(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Intensity of the target for IR observations, in kw/sr/em.
     */
    INTENSITY(): number;
    /**
     * Background intensity for IR observations, in kw/sr/um.
     */
    BG_INTENSITY(): number;
    /**
     * Optional source-provided and searchable metadata or descriptor of the data.
     */
    DESCRIPTOR(): string | null;
    DESCRIPTOR(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Source of the data.
     */
    SOURCE(): string | null;
    SOURCE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Originating system or organization which produced the data, if different from the source.
     * The origin may be different than the source if the source was a mediating system which forwarded
     * the data on behalf of the origin system. If null, the source may be assumed to be the origin.
     */
    ORIGIN(): string | null;
    ORIGIN(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Indicator of whether the data is EXERCISE, REAL, SIMULATED, or TEST.
     */
    DATA_MODE(): DataMode;
    /**
     * Time the row was created in the database, auto-populated by the system.
     */
    CREATED_AT(): string | null;
    CREATED_AT(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Application user who created the row in the database, auto-populated by the system.
     */
    CREATED_BY(): string | null;
    CREATED_BY(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * EO observations are assumed to be topocentric J2000 coordinates ('J2000') as defined by the IAU, unless otherwise specified.
     */
    REFERENCE_FRAME(): refFrame;
    /**
     * The sensor reference frame is assumed to be the International Terrestrial Reference Frame (ITRF),
     * unless otherwise specified. (ITRF is equivalent to Earth-Centered Earth-Fixed (ECEF) for this purpose).
     * Lat / long / height values should be reported using the WGS-84 ellipsoid, where applicable.
     */
    SEN_REFERENCE_FRAME(): refFrame;
    /**
     * Boolean indicating that the target object was in umbral eclipse at the time of this observation.
     */
    UMBRA(): boolean;
    /**
     * Boolean indicating that the target object was in a penumbral eclipse at the time of this observation.
     * This field is highly recommended if the observations will be used for photometric processing.
     */
    PENUMBRA(): boolean;
    /**
     * The originating source network on which this record was created, auto-populated by the system.
     */
    ORIG_NETWORK(): string | null;
    ORIG_NETWORK(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * The source from which this record was received.
     */
    SOURCE_DL(): string | null;
    SOURCE_DL(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Device Type
     */
    TYPE(): DeviceType;
    /**
     * True if measured, false if computed. Required if azimuth is reported.
     */
    AZIMUTH_MEASURED(): boolean;
    /**
     * True if measured, false if computed. Required if elevation is reported.
     */
    ELEVATION_MEASURED(): boolean;
    /**
     * True if measured, false if computed. Required if range is reported.
     */
    RANGE_MEASURED(): boolean;
    /**
     * True if measured, false if computed. Required if range-rate is reported.
     */
    RANGERATE_MEASURED(): boolean;
    /**
     * True if measured, false if computed. Required if right ascension is reported.
     */
    RA_MEASURED(): boolean;
    /**
     * True if measured, false if computed. Required if declination is reported.
     */
    DECLINATION_MEASURED(): boolean;
    static startEOO(builder: flatbuffers.Builder): void;
    static addId(builder: flatbuffers.Builder, IDOffset: flatbuffers.Offset): void;
    static addClassification(builder: flatbuffers.Builder, CLASSIFICATIONOffset: flatbuffers.Offset): void;
    static addObTime(builder: flatbuffers.Builder, OB_TIMEOffset: flatbuffers.Offset): void;
    static addCorrQuality(builder: flatbuffers.Builder, CORR_QUALITY: number): void;
    static addIdOnOrbit(builder: flatbuffers.Builder, ID_ON_ORBITOffset: flatbuffers.Offset): void;
    static addSensorId(builder: flatbuffers.Builder, SENSOR_IDOffset: flatbuffers.Offset): void;
    static addCollectMethod(builder: flatbuffers.Builder, COLLECT_METHOD: CollectMethod): void;
    static addNoradCatId(builder: flatbuffers.Builder, NORAD_CAT_ID: number): void;
    static addTaskId(builder: flatbuffers.Builder, TASK_IDOffset: flatbuffers.Offset): void;
    static addTransactionId(builder: flatbuffers.Builder, TRANSACTION_IDOffset: flatbuffers.Offset): void;
    static addImageSetId(builder: flatbuffers.Builder, IMAGE_SET_IDOffset: flatbuffers.Offset): void;
    static addImageSetLength(builder: flatbuffers.Builder, IMAGE_SET_LENGTH: number): void;
    static addSequenceId(builder: flatbuffers.Builder, SEQUENCE_ID: number): void;
    static addObPosition(builder: flatbuffers.Builder, OB_POSITION: ObservationPosition): void;
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
    static addDataMode(builder: flatbuffers.Builder, DATA_MODE: DataMode): void;
    static addCreatedAt(builder: flatbuffers.Builder, CREATED_ATOffset: flatbuffers.Offset): void;
    static addCreatedBy(builder: flatbuffers.Builder, CREATED_BYOffset: flatbuffers.Offset): void;
    static addReferenceFrame(builder: flatbuffers.Builder, REFERENCE_FRAME: refFrame): void;
    static addSenReferenceFrame(builder: flatbuffers.Builder, SEN_REFERENCE_FRAME: refFrame): void;
    static addUmbra(builder: flatbuffers.Builder, UMBRA: boolean): void;
    static addPenumbra(builder: flatbuffers.Builder, PENUMBRA: boolean): void;
    static addOrigNetwork(builder: flatbuffers.Builder, ORIG_NETWORKOffset: flatbuffers.Offset): void;
    static addSourceDl(builder: flatbuffers.Builder, SOURCE_DLOffset: flatbuffers.Offset): void;
    static addType(builder: flatbuffers.Builder, TYPE: DeviceType): void;
    static addAzimuthMeasured(builder: flatbuffers.Builder, AZIMUTH_MEASURED: boolean): void;
    static addElevationMeasured(builder: flatbuffers.Builder, ELEVATION_MEASURED: boolean): void;
    static addRangeMeasured(builder: flatbuffers.Builder, RANGE_MEASURED: boolean): void;
    static addRangerateMeasured(builder: flatbuffers.Builder, RANGERATE_MEASURED: boolean): void;
    static addRaMeasured(builder: flatbuffers.Builder, RA_MEASURED: boolean): void;
    static addDeclinationMeasured(builder: flatbuffers.Builder, DECLINATION_MEASURED: boolean): void;
    static endEOO(builder: flatbuffers.Builder): flatbuffers.Offset;
    static finishEOOBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static finishSizePrefixedEOOBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static createEOO(builder: flatbuffers.Builder, IDOffset: flatbuffers.Offset, CLASSIFICATIONOffset: flatbuffers.Offset, OB_TIMEOffset: flatbuffers.Offset, CORR_QUALITY: number, ID_ON_ORBITOffset: flatbuffers.Offset, SENSOR_IDOffset: flatbuffers.Offset, COLLECT_METHOD: CollectMethod, NORAD_CAT_ID: number, TASK_IDOffset: flatbuffers.Offset, TRANSACTION_IDOffset: flatbuffers.Offset, IMAGE_SET_IDOffset: flatbuffers.Offset, IMAGE_SET_LENGTH: number, SEQUENCE_ID: number, OB_POSITION: ObservationPosition, ORIG_OBJECT_IDOffset: flatbuffers.Offset, ORIG_SENSOR_IDOffset: flatbuffers.Offset, UCT: boolean, AZIMUTH: number, AZIMUTH_UNC: number, AZIMUTH_BIAS: number, AZIMUTH_RATE: number, ELEVATION: number, ELEVATION_UNC: number, ELEVATION_BIAS: number, ELEVATION_RATE: number, RANGE: number, RANGE_UNC: number, RANGE_BIAS: number, RANGE_RATE: number, RANGE_RATE_UNC: number, RA: number, RA_RATE: number, RA_UNC: number, RA_BIAS: number, DECLINATION: number, DECLINATION_RATE: number, DECLINATION_UNC: number, DECLINATION_BIAS: number, LOSX: number, LOSY: number, LOSZ: number, LOS_UNC: number, LOSXVEL: number, LOSYVEL: number, LOSZVEL: number, SENLAT: number, SENLON: number, SENALT: number, SENX: number, SENY: number, SENZ: number, FOV_COUNT: number, FOV_COUNT_UCTS: number, EXP_DURATION: number, ZEROPTD: number, NET_OBJ_SIG: number, NET_OBJ_SIG_UNC: number, MAG: number, MAG_UNC: number, MAG_NORM_RANGE: number, GEOLAT: number, GEOLON: number, GEOALT: number, GEORANGE: number, SKY_BKGRND: number, PRIMARY_EXTINCTION: number, PRIMARY_EXTINCTION_UNC: number, SOLAR_PHASE_ANGLE: number, SOLAR_EQ_PHASE_ANGLE: number, SOLAR_DEC_ANGLE: number, SHUTTER_DELAY: number, TIMING_BIAS: number, RAW_FILE_URIOffset: flatbuffers.Offset, INTENSITY: number, BG_INTENSITY: number, DESCRIPTOROffset: flatbuffers.Offset, SOURCEOffset: flatbuffers.Offset, ORIGINOffset: flatbuffers.Offset, DATA_MODE: DataMode, CREATED_ATOffset: flatbuffers.Offset, CREATED_BYOffset: flatbuffers.Offset, REFERENCE_FRAME: refFrame, SEN_REFERENCE_FRAME: refFrame, UMBRA: boolean, PENUMBRA: boolean, ORIG_NETWORKOffset: flatbuffers.Offset, SOURCE_DLOffset: flatbuffers.Offset, TYPE: DeviceType, AZIMUTH_MEASURED: boolean, ELEVATION_MEASURED: boolean, RANGE_MEASURED: boolean, RANGERATE_MEASURED: boolean, RA_MEASURED: boolean, DECLINATION_MEASURED: boolean): flatbuffers.Offset;
    unpack(): EOOT;
    unpackTo(_o: EOOT): void;
}
export declare class EOOT implements flatbuffers.IGeneratedObject {
    ID: string | Uint8Array | null;
    CLASSIFICATION: string | Uint8Array | null;
    OB_TIME: string | Uint8Array | null;
    CORR_QUALITY: number;
    ID_ON_ORBIT: string | Uint8Array | null;
    SENSOR_ID: string | Uint8Array | null;
    COLLECT_METHOD: CollectMethod;
    NORAD_CAT_ID: number;
    TASK_ID: string | Uint8Array | null;
    TRANSACTION_ID: string | Uint8Array | null;
    IMAGE_SET_ID: string | Uint8Array | null;
    IMAGE_SET_LENGTH: number;
    SEQUENCE_ID: number;
    OB_POSITION: ObservationPosition;
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
    DATA_MODE: DataMode;
    CREATED_AT: string | Uint8Array | null;
    CREATED_BY: string | Uint8Array | null;
    REFERENCE_FRAME: refFrame;
    SEN_REFERENCE_FRAME: refFrame;
    UMBRA: boolean;
    PENUMBRA: boolean;
    ORIG_NETWORK: string | Uint8Array | null;
    SOURCE_DL: string | Uint8Array | null;
    TYPE: DeviceType;
    AZIMUTH_MEASURED: boolean;
    ELEVATION_MEASURED: boolean;
    RANGE_MEASURED: boolean;
    RANGERATE_MEASURED: boolean;
    RA_MEASURED: boolean;
    DECLINATION_MEASURED: boolean;
    constructor(ID?: string | Uint8Array | null, CLASSIFICATION?: string | Uint8Array | null, OB_TIME?: string | Uint8Array | null, CORR_QUALITY?: number, ID_ON_ORBIT?: string | Uint8Array | null, SENSOR_ID?: string | Uint8Array | null, COLLECT_METHOD?: CollectMethod, NORAD_CAT_ID?: number, TASK_ID?: string | Uint8Array | null, TRANSACTION_ID?: string | Uint8Array | null, IMAGE_SET_ID?: string | Uint8Array | null, IMAGE_SET_LENGTH?: number, SEQUENCE_ID?: number, OB_POSITION?: ObservationPosition, ORIG_OBJECT_ID?: string | Uint8Array | null, ORIG_SENSOR_ID?: string | Uint8Array | null, UCT?: boolean, AZIMUTH?: number, AZIMUTH_UNC?: number, AZIMUTH_BIAS?: number, AZIMUTH_RATE?: number, ELEVATION?: number, ELEVATION_UNC?: number, ELEVATION_BIAS?: number, ELEVATION_RATE?: number, RANGE?: number, RANGE_UNC?: number, RANGE_BIAS?: number, RANGE_RATE?: number, RANGE_RATE_UNC?: number, RA?: number, RA_RATE?: number, RA_UNC?: number, RA_BIAS?: number, DECLINATION?: number, DECLINATION_RATE?: number, DECLINATION_UNC?: number, DECLINATION_BIAS?: number, LOSX?: number, LOSY?: number, LOSZ?: number, LOS_UNC?: number, LOSXVEL?: number, LOSYVEL?: number, LOSZVEL?: number, SENLAT?: number, SENLON?: number, SENALT?: number, SENX?: number, SENY?: number, SENZ?: number, FOV_COUNT?: number, FOV_COUNT_UCTS?: number, EXP_DURATION?: number, ZEROPTD?: number, NET_OBJ_SIG?: number, NET_OBJ_SIG_UNC?: number, MAG?: number, MAG_UNC?: number, MAG_NORM_RANGE?: number, GEOLAT?: number, GEOLON?: number, GEOALT?: number, GEORANGE?: number, SKY_BKGRND?: number, PRIMARY_EXTINCTION?: number, PRIMARY_EXTINCTION_UNC?: number, SOLAR_PHASE_ANGLE?: number, SOLAR_EQ_PHASE_ANGLE?: number, SOLAR_DEC_ANGLE?: number, SHUTTER_DELAY?: number, TIMING_BIAS?: number, RAW_FILE_URI?: string | Uint8Array | null, INTENSITY?: number, BG_INTENSITY?: number, DESCRIPTOR?: string | Uint8Array | null, SOURCE?: string | Uint8Array | null, ORIGIN?: string | Uint8Array | null, DATA_MODE?: DataMode, CREATED_AT?: string | Uint8Array | null, CREATED_BY?: string | Uint8Array | null, REFERENCE_FRAME?: refFrame, SEN_REFERENCE_FRAME?: refFrame, UMBRA?: boolean, PENUMBRA?: boolean, ORIG_NETWORK?: string | Uint8Array | null, SOURCE_DL?: string | Uint8Array | null, TYPE?: DeviceType, AZIMUTH_MEASURED?: boolean, ELEVATION_MEASURED?: boolean, RANGE_MEASURED?: boolean, RANGERATE_MEASURED?: boolean, RA_MEASURED?: boolean, DECLINATION_MEASURED?: boolean);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=EOO.d.ts.map