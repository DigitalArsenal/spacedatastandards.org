import * as flatbuffers from 'flatbuffers';
/**
 * Collection Request Message
 */
export declare class CRM implements flatbuffers.IUnpackableObject<CRMT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): CRM;
    static getRootAsCRM(bb: flatbuffers.ByteBuffer, obj?: CRM): CRM;
    static getSizePrefixedRootAsCRM(bb: flatbuffers.ByteBuffer, obj?: CRM): CRM;
    static bufferHasIdentifier(bb: flatbuffers.ByteBuffer): boolean;
    /**
     * Unique identifier of the record, auto-generated by the system.
     */
    ID(): string | null;
    ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Classification marking of the data in IC/CAPCO Portion-marked format.
     */
    CLASSIFICATION(): string | null;
    CLASSIFICATION(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * The type of this collect or contact request.
     */
    TYPE(): string | null;
    TYPE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Unique identifier of the parent plan or schedule associated with this request.
     */
    ID_PLAN(): string | null;
    ID_PLAN(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Index number for records within a collection plan or schedule.
     */
    PLAN_INDEX(): number;
    /**
     * Task ID associated with this request.
     */
    TASK_ID(): string | null;
    TASK_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * The dwell ID associated with this request.
     */
    DWELL_ID(): string | null;
    DWELL_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Optional ID from external systems.
     */
    EXTERNAL_ID(): string | null;
    EXTERNAL_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Unique identifier of the requested/scheduled/planned sensor associated with this request.
     */
    ID_SENSOR(): string | null;
    ID_SENSOR(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Optional identifier provided by the source to indicate the sensor identifier requested/scheduled/planned for this request.
     */
    ORIG_SENSOR_ID(): string | null;
    ORIG_SENSOR_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Optional type of observation requested.
     */
    OB_TYPE(): string | null;
    OB_TYPE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * The priority of the collect request.
     */
    PRIORITY(): string | null;
    PRIORITY(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * The tasking category associated with this request.
     */
    TASK_CATEGORY(): number;
    /**
     * The tasking suffix associated with this request.
     */
    SUFFIX(): string | null;
    SUFFIX(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Boolean indicating that this collect request is UCT follow-up.
     */
    UCT_FOLLOW_UP(): boolean;
    /**
     * The start time of the collect or contact request window, in ISO 8601 UTC format.
     */
    START_TIME(): string | null;
    START_TIME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * The end time of the collect or contact request window, in ISO 8601 UTC format.
     */
    END_TIME(): string | null;
    END_TIME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Satellite/catalog number of the target on-orbit object for this request.
     */
    NORAD_CAT_ID(): number;
    /**
     * Optional identifier provided by the data source to indicate the target object of this request.
     */
    ORIG_OBJECT_ID(): string | null;
    ORIG_OBJECT_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * The tasking group to which the target object is assigned.
     */
    TASK_GROUP(): string | null;
    TASK_GROUP(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Inter-Range Operations Number.
     */
    IRON(): number;
    /**
     * The orbit regime of the target.
     */
    ORBIT_REGIME(): string | null;
    ORBIT_REGIME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * The minimum object (diameter) size, in meters, to be reported.
     */
    TARGET_SIZE(): number;
    /**
     * The minimum Radar Cross-Section of the target, in m^2.
     */
    RCS_MIN(): number;
    /**
     * The Radar Cross-Section of the target, in m^2.
     */
    RCS(): number;
    /**
     * The maximum Radar Cross-Section of the target, in m^2.
     */
    RCS_MAX(): number;
    /**
     * The minimum frequency of interest, in MHz.
     */
    FREQ_MIN(): number;
    /**
     * The estimated or expected emission frequency of the target, in MHz.
     */
    FREQ(): number;
    /**
     * The maximum frequency of interest, in MHz.
     */
    FREQ_MAX(): number;
    /**
     * The RF polarization.
     */
    POLARIZATION(): string | null;
    POLARIZATION(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * The minimum estimated or expected visual magnitude of the target, in Magnitudes (M).
     */
    VIS_MAG_MIN(): number;
    /**
     * The estimated or expected visual magnitude of the target, in Magnitudes (M).
     */
    VIS_MAG(): number;
    /**
     * The maximum estimated or expected visual magnitude of the target, in Magnitudes (M).
     */
    VIS_MAG_MAX(): number;
    /**
     * The spectral model used for the irradiance calculation.
     */
    SPECTRAL_MODEL(): string | null;
    SPECTRAL_MODEL(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * The fraction of solar energy reflected from target.
     */
    REFLECTANCE(): number;
    /**
     * The target object irradiance value.
     */
    IRRADIANCE(): number;
    /**
     * For optical sensors, the requested number of frames to capture at each sensor step.
     */
    NUM_FRAMES(): number;
    /**
     * For optical sensors, the frame rate of the camera, in Hz.
     */
    FRAME_RATE(): number;
    /**
     * For optical sensors, the integration time per camera frame, in milliseconds.
     */
    INTEGRATION_TIME(): number;
    /**
     * The number of requested tracks on the target.
     */
    NUM_TRACKS(): number;
    /**
     * The number of requested observations on the target.
     */
    NUM_OBS(): number;
    /**
     * The duration of the collect request, in seconds.
     */
    DURATION(): number;
    /**
     * The search pattern to be executed for this request.
     */
    SRCH_PATTERN(): string | null;
    SRCH_PATTERN(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Pre-coordinated code, direction, or configuration to be executed by the sensor or site for this collect or contact.
     */
    SCENARIO(): string | null;
    SCENARIO(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * ID of the Elset of the object associated with this request.
     */
    ID_ELSET(): string | null;
    ID_ELSET(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * ID of the Manifold Elset of the object associated with this request.
     */
    ID_MANIFOLD(): string | null;
    ID_MANIFOLD(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * ID of the State Vector of the object or central vector associated with this request.
     */
    ID_STATE_VECTOR(): string | null;
    ID_STATE_VECTOR(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * ID of the Ephemeris Set of the object associated with this request.
     */
    ES_ID(): string | null;
    ES_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Epoch time, in ISO 8601 UTC format, of the orbital elements.
     */
    EPOCH(): string | null;
    EPOCH(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * The average of the periapsis and apoapsis distances, in kilometers.
     */
    SEMI_MAJOR_AXIS(): number;
    /**
     * The orbital eccentricity of an astronomical object.
     */
    ECCENTRICITY(): number;
    /**
     * The angle, in degrees, between the equator and the orbit plane.
     */
    INCLINATION(): number;
    /**
     * Right ascension of the ascending node, in degrees.
     */
    RAAN(): number;
    /**
     * The argument of perigee, in degrees.
     */
    ARG_OF_PERIGEE(): number;
    /**
     * The mean anomaly defines the angular position, in degrees, of the object on its orbital path.
     */
    MEAN_ANOMALY(): number;
    /**
     * The expected or directed right ascension angle, in degrees.
     */
    RA(): number;
    /**
     * The expected or directed declination angle, in degrees.
     */
    DEC(): number;
    /**
     * The expected or directed azimuth angle, in degrees.
     */
    AZ(): number;
    /**
     * The expected or directed elevation angle, in degrees.
     */
    EL(): number;
    /**
     * The expected acquisition range or defined center range, in km.
     */
    RANGE(): number;
    /**
     * The extent of the azimuth angle, in degrees, from center azimuth.
     */
    EXTENT_AZ(): number;
    /**
     * The extent of the elevation angle, in degrees, from center elevation.
     */
    EXTENT_EL(): number;
    /**
     * The extent of the range, in km, from center range.
     */
    EXTENT_RANGE(): number;
    /**
     * WGS-84 latitude, in degrees.
     */
    LAT(): number;
    /**
     * WGS-84 longitude, in degrees.
     */
    LON(): number;
    /**
     * Height above WGS-84 ellipsoid (HAE), in kilometers.
     */
    ALT(): number;
    /**
     * The stopping WGS-84 latitude of a volume definition, in degrees.
     */
    STOP_LAT(): number;
    /**
     * The stopping WGS-84 longitude of a volume definition, in degrees.
     */
    STOP_LON(): number;
    /**
     * The stopping HAE WGS-84 height above ellipsoid (HAE), in kilometers.
     */
    STOP_ALT(): number;
    /**
     * The maximum inclination, in degrees, to be used in search operations.
     */
    SRCH_INC(): number;
    /**
     * The angular distance, in degrees, in the sensor-x direction from scan center.
     */
    X_ANGLE(): number;
    /**
     * The angular distance, in degrees, in the sensor-y direction from scan center.
     */
    Y_ANGLE(): number;
    /**
     * The magnitude of rotation, in degrees, between the xAngle direction and locally defined equinoctial plane.
     */
    ORIENT_ANGLE(): number;
    /**
     * The customer for this request.
     */
    CUSTOMER(): string | null;
    CUSTOMER(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Notes or comments associated with this request.
     */
    NOTES(): string | null;
    NOTES(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     *  Source of the data.
     */
    SOURCE(): string | null;
    SOURCE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     *  Originating system or organization which produced the data, if different from the source.
     */
    ORIGIN(): string | null;
    ORIGIN(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     *  Indicator of whether the data is EXERCISE, REAL, SIMULATED, or TEST data.
     */
    DATA_MODE(): string | null;
    DATA_MODE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    static startCRM(builder: flatbuffers.Builder): void;
    static addId(builder: flatbuffers.Builder, IDOffset: flatbuffers.Offset): void;
    static addClassification(builder: flatbuffers.Builder, CLASSIFICATIONOffset: flatbuffers.Offset): void;
    static addType(builder: flatbuffers.Builder, TYPEOffset: flatbuffers.Offset): void;
    static addIdPlan(builder: flatbuffers.Builder, ID_PLANOffset: flatbuffers.Offset): void;
    static addPlanIndex(builder: flatbuffers.Builder, PLAN_INDEX: number): void;
    static addTaskId(builder: flatbuffers.Builder, TASK_IDOffset: flatbuffers.Offset): void;
    static addDwellId(builder: flatbuffers.Builder, DWELL_IDOffset: flatbuffers.Offset): void;
    static addExternalId(builder: flatbuffers.Builder, EXTERNAL_IDOffset: flatbuffers.Offset): void;
    static addIdSensor(builder: flatbuffers.Builder, ID_SENSOROffset: flatbuffers.Offset): void;
    static addOrigSensorId(builder: flatbuffers.Builder, ORIG_SENSOR_IDOffset: flatbuffers.Offset): void;
    static addObType(builder: flatbuffers.Builder, OB_TYPEOffset: flatbuffers.Offset): void;
    static addPriority(builder: flatbuffers.Builder, PRIORITYOffset: flatbuffers.Offset): void;
    static addTaskCategory(builder: flatbuffers.Builder, TASK_CATEGORY: number): void;
    static addSuffix(builder: flatbuffers.Builder, SUFFIXOffset: flatbuffers.Offset): void;
    static addUctFollowUp(builder: flatbuffers.Builder, UCT_FOLLOW_UP: boolean): void;
    static addStartTime(builder: flatbuffers.Builder, START_TIMEOffset: flatbuffers.Offset): void;
    static addEndTime(builder: flatbuffers.Builder, END_TIMEOffset: flatbuffers.Offset): void;
    static addNoradCatId(builder: flatbuffers.Builder, NORAD_CAT_ID: number): void;
    static addOrigObjectId(builder: flatbuffers.Builder, ORIG_OBJECT_IDOffset: flatbuffers.Offset): void;
    static addTaskGroup(builder: flatbuffers.Builder, TASK_GROUPOffset: flatbuffers.Offset): void;
    static addIron(builder: flatbuffers.Builder, IRON: number): void;
    static addOrbitRegime(builder: flatbuffers.Builder, ORBIT_REGIMEOffset: flatbuffers.Offset): void;
    static addTargetSize(builder: flatbuffers.Builder, TARGET_SIZE: number): void;
    static addRcsMin(builder: flatbuffers.Builder, RCS_MIN: number): void;
    static addRcs(builder: flatbuffers.Builder, RCS: number): void;
    static addRcsMax(builder: flatbuffers.Builder, RCS_MAX: number): void;
    static addFreqMin(builder: flatbuffers.Builder, FREQ_MIN: number): void;
    static addFreq(builder: flatbuffers.Builder, FREQ: number): void;
    static addFreqMax(builder: flatbuffers.Builder, FREQ_MAX: number): void;
    static addPolarization(builder: flatbuffers.Builder, POLARIZATIONOffset: flatbuffers.Offset): void;
    static addVisMagMin(builder: flatbuffers.Builder, VIS_MAG_MIN: number): void;
    static addVisMag(builder: flatbuffers.Builder, VIS_MAG: number): void;
    static addVisMagMax(builder: flatbuffers.Builder, VIS_MAG_MAX: number): void;
    static addSpectralModel(builder: flatbuffers.Builder, SPECTRAL_MODELOffset: flatbuffers.Offset): void;
    static addReflectance(builder: flatbuffers.Builder, REFLECTANCE: number): void;
    static addIrradiance(builder: flatbuffers.Builder, IRRADIANCE: number): void;
    static addNumFrames(builder: flatbuffers.Builder, NUM_FRAMES: number): void;
    static addFrameRate(builder: flatbuffers.Builder, FRAME_RATE: number): void;
    static addIntegrationTime(builder: flatbuffers.Builder, INTEGRATION_TIME: number): void;
    static addNumTracks(builder: flatbuffers.Builder, NUM_TRACKS: number): void;
    static addNumObs(builder: flatbuffers.Builder, NUM_OBS: number): void;
    static addDuration(builder: flatbuffers.Builder, DURATION: number): void;
    static addSrchPattern(builder: flatbuffers.Builder, SRCH_PATTERNOffset: flatbuffers.Offset): void;
    static addScenario(builder: flatbuffers.Builder, SCENARIOOffset: flatbuffers.Offset): void;
    static addIdElset(builder: flatbuffers.Builder, ID_ELSETOffset: flatbuffers.Offset): void;
    static addIdManifold(builder: flatbuffers.Builder, ID_MANIFOLDOffset: flatbuffers.Offset): void;
    static addIdStateVector(builder: flatbuffers.Builder, ID_STATE_VECTOROffset: flatbuffers.Offset): void;
    static addEsId(builder: flatbuffers.Builder, ES_IDOffset: flatbuffers.Offset): void;
    static addEpoch(builder: flatbuffers.Builder, EPOCHOffset: flatbuffers.Offset): void;
    static addSemiMajorAxis(builder: flatbuffers.Builder, SEMI_MAJOR_AXIS: number): void;
    static addEccentricity(builder: flatbuffers.Builder, ECCENTRICITY: number): void;
    static addInclination(builder: flatbuffers.Builder, INCLINATION: number): void;
    static addRaan(builder: flatbuffers.Builder, RAAN: number): void;
    static addArgOfPerigee(builder: flatbuffers.Builder, ARG_OF_PERIGEE: number): void;
    static addMeanAnomaly(builder: flatbuffers.Builder, MEAN_ANOMALY: number): void;
    static addRa(builder: flatbuffers.Builder, RA: number): void;
    static addDec(builder: flatbuffers.Builder, DEC: number): void;
    static addAz(builder: flatbuffers.Builder, AZ: number): void;
    static addEl(builder: flatbuffers.Builder, EL: number): void;
    static addRange(builder: flatbuffers.Builder, RANGE: number): void;
    static addExtentAz(builder: flatbuffers.Builder, EXTENT_AZ: number): void;
    static addExtentEl(builder: flatbuffers.Builder, EXTENT_EL: number): void;
    static addExtentRange(builder: flatbuffers.Builder, EXTENT_RANGE: number): void;
    static addLat(builder: flatbuffers.Builder, LAT: number): void;
    static addLon(builder: flatbuffers.Builder, LON: number): void;
    static addAlt(builder: flatbuffers.Builder, ALT: number): void;
    static addStopLat(builder: flatbuffers.Builder, STOP_LAT: number): void;
    static addStopLon(builder: flatbuffers.Builder, STOP_LON: number): void;
    static addStopAlt(builder: flatbuffers.Builder, STOP_ALT: number): void;
    static addSrchInc(builder: flatbuffers.Builder, SRCH_INC: number): void;
    static addXAngle(builder: flatbuffers.Builder, X_ANGLE: number): void;
    static addYAngle(builder: flatbuffers.Builder, Y_ANGLE: number): void;
    static addOrientAngle(builder: flatbuffers.Builder, ORIENT_ANGLE: number): void;
    static addCustomer(builder: flatbuffers.Builder, CUSTOMEROffset: flatbuffers.Offset): void;
    static addNotes(builder: flatbuffers.Builder, NOTESOffset: flatbuffers.Offset): void;
    static addSource(builder: flatbuffers.Builder, SOURCEOffset: flatbuffers.Offset): void;
    static addOrigin(builder: flatbuffers.Builder, ORIGINOffset: flatbuffers.Offset): void;
    static addDataMode(builder: flatbuffers.Builder, DATA_MODEOffset: flatbuffers.Offset): void;
    static endCRM(builder: flatbuffers.Builder): flatbuffers.Offset;
    static finishCRMBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static finishSizePrefixedCRMBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static createCRM(builder: flatbuffers.Builder, IDOffset: flatbuffers.Offset, CLASSIFICATIONOffset: flatbuffers.Offset, TYPEOffset: flatbuffers.Offset, ID_PLANOffset: flatbuffers.Offset, PLAN_INDEX: number, TASK_IDOffset: flatbuffers.Offset, DWELL_IDOffset: flatbuffers.Offset, EXTERNAL_IDOffset: flatbuffers.Offset, ID_SENSOROffset: flatbuffers.Offset, ORIG_SENSOR_IDOffset: flatbuffers.Offset, OB_TYPEOffset: flatbuffers.Offset, PRIORITYOffset: flatbuffers.Offset, TASK_CATEGORY: number, SUFFIXOffset: flatbuffers.Offset, UCT_FOLLOW_UP: boolean, START_TIMEOffset: flatbuffers.Offset, END_TIMEOffset: flatbuffers.Offset, NORAD_CAT_ID: number, ORIG_OBJECT_IDOffset: flatbuffers.Offset, TASK_GROUPOffset: flatbuffers.Offset, IRON: number, ORBIT_REGIMEOffset: flatbuffers.Offset, TARGET_SIZE: number, RCS_MIN: number, RCS: number, RCS_MAX: number, FREQ_MIN: number, FREQ: number, FREQ_MAX: number, POLARIZATIONOffset: flatbuffers.Offset, VIS_MAG_MIN: number, VIS_MAG: number, VIS_MAG_MAX: number, SPECTRAL_MODELOffset: flatbuffers.Offset, REFLECTANCE: number, IRRADIANCE: number, NUM_FRAMES: number, FRAME_RATE: number, INTEGRATION_TIME: number, NUM_TRACKS: number, NUM_OBS: number, DURATION: number, SRCH_PATTERNOffset: flatbuffers.Offset, SCENARIOOffset: flatbuffers.Offset, ID_ELSETOffset: flatbuffers.Offset, ID_MANIFOLDOffset: flatbuffers.Offset, ID_STATE_VECTOROffset: flatbuffers.Offset, ES_IDOffset: flatbuffers.Offset, EPOCHOffset: flatbuffers.Offset, SEMI_MAJOR_AXIS: number, ECCENTRICITY: number, INCLINATION: number, RAAN: number, ARG_OF_PERIGEE: number, MEAN_ANOMALY: number, RA: number, DEC: number, AZ: number, EL: number, RANGE: number, EXTENT_AZ: number, EXTENT_EL: number, EXTENT_RANGE: number, LAT: number, LON: number, ALT: number, STOP_LAT: number, STOP_LON: number, STOP_ALT: number, SRCH_INC: number, X_ANGLE: number, Y_ANGLE: number, ORIENT_ANGLE: number, CUSTOMEROffset: flatbuffers.Offset, NOTESOffset: flatbuffers.Offset, SOURCEOffset: flatbuffers.Offset, ORIGINOffset: flatbuffers.Offset, DATA_MODEOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): CRMT;
    unpackTo(_o: CRMT): void;
}
export declare class CRMT implements flatbuffers.IGeneratedObject {
    ID: string | Uint8Array | null;
    CLASSIFICATION: string | Uint8Array | null;
    TYPE: string | Uint8Array | null;
    ID_PLAN: string | Uint8Array | null;
    PLAN_INDEX: number;
    TASK_ID: string | Uint8Array | null;
    DWELL_ID: string | Uint8Array | null;
    EXTERNAL_ID: string | Uint8Array | null;
    ID_SENSOR: string | Uint8Array | null;
    ORIG_SENSOR_ID: string | Uint8Array | null;
    OB_TYPE: string | Uint8Array | null;
    PRIORITY: string | Uint8Array | null;
    TASK_CATEGORY: number;
    SUFFIX: string | Uint8Array | null;
    UCT_FOLLOW_UP: boolean;
    START_TIME: string | Uint8Array | null;
    END_TIME: string | Uint8Array | null;
    NORAD_CAT_ID: number;
    ORIG_OBJECT_ID: string | Uint8Array | null;
    TASK_GROUP: string | Uint8Array | null;
    IRON: number;
    ORBIT_REGIME: string | Uint8Array | null;
    TARGET_SIZE: number;
    RCS_MIN: number;
    RCS: number;
    RCS_MAX: number;
    FREQ_MIN: number;
    FREQ: number;
    FREQ_MAX: number;
    POLARIZATION: string | Uint8Array | null;
    VIS_MAG_MIN: number;
    VIS_MAG: number;
    VIS_MAG_MAX: number;
    SPECTRAL_MODEL: string | Uint8Array | null;
    REFLECTANCE: number;
    IRRADIANCE: number;
    NUM_FRAMES: number;
    FRAME_RATE: number;
    INTEGRATION_TIME: number;
    NUM_TRACKS: number;
    NUM_OBS: number;
    DURATION: number;
    SRCH_PATTERN: string | Uint8Array | null;
    SCENARIO: string | Uint8Array | null;
    ID_ELSET: string | Uint8Array | null;
    ID_MANIFOLD: string | Uint8Array | null;
    ID_STATE_VECTOR: string | Uint8Array | null;
    ES_ID: string | Uint8Array | null;
    EPOCH: string | Uint8Array | null;
    SEMI_MAJOR_AXIS: number;
    ECCENTRICITY: number;
    INCLINATION: number;
    RAAN: number;
    ARG_OF_PERIGEE: number;
    MEAN_ANOMALY: number;
    RA: number;
    DEC: number;
    AZ: number;
    EL: number;
    RANGE: number;
    EXTENT_AZ: number;
    EXTENT_EL: number;
    EXTENT_RANGE: number;
    LAT: number;
    LON: number;
    ALT: number;
    STOP_LAT: number;
    STOP_LON: number;
    STOP_ALT: number;
    SRCH_INC: number;
    X_ANGLE: number;
    Y_ANGLE: number;
    ORIENT_ANGLE: number;
    CUSTOMER: string | Uint8Array | null;
    NOTES: string | Uint8Array | null;
    SOURCE: string | Uint8Array | null;
    ORIGIN: string | Uint8Array | null;
    DATA_MODE: string | Uint8Array | null;
    constructor(ID?: string | Uint8Array | null, CLASSIFICATION?: string | Uint8Array | null, TYPE?: string | Uint8Array | null, ID_PLAN?: string | Uint8Array | null, PLAN_INDEX?: number, TASK_ID?: string | Uint8Array | null, DWELL_ID?: string | Uint8Array | null, EXTERNAL_ID?: string | Uint8Array | null, ID_SENSOR?: string | Uint8Array | null, ORIG_SENSOR_ID?: string | Uint8Array | null, OB_TYPE?: string | Uint8Array | null, PRIORITY?: string | Uint8Array | null, TASK_CATEGORY?: number, SUFFIX?: string | Uint8Array | null, UCT_FOLLOW_UP?: boolean, START_TIME?: string | Uint8Array | null, END_TIME?: string | Uint8Array | null, NORAD_CAT_ID?: number, ORIG_OBJECT_ID?: string | Uint8Array | null, TASK_GROUP?: string | Uint8Array | null, IRON?: number, ORBIT_REGIME?: string | Uint8Array | null, TARGET_SIZE?: number, RCS_MIN?: number, RCS?: number, RCS_MAX?: number, FREQ_MIN?: number, FREQ?: number, FREQ_MAX?: number, POLARIZATION?: string | Uint8Array | null, VIS_MAG_MIN?: number, VIS_MAG?: number, VIS_MAG_MAX?: number, SPECTRAL_MODEL?: string | Uint8Array | null, REFLECTANCE?: number, IRRADIANCE?: number, NUM_FRAMES?: number, FRAME_RATE?: number, INTEGRATION_TIME?: number, NUM_TRACKS?: number, NUM_OBS?: number, DURATION?: number, SRCH_PATTERN?: string | Uint8Array | null, SCENARIO?: string | Uint8Array | null, ID_ELSET?: string | Uint8Array | null, ID_MANIFOLD?: string | Uint8Array | null, ID_STATE_VECTOR?: string | Uint8Array | null, ES_ID?: string | Uint8Array | null, EPOCH?: string | Uint8Array | null, SEMI_MAJOR_AXIS?: number, ECCENTRICITY?: number, INCLINATION?: number, RAAN?: number, ARG_OF_PERIGEE?: number, MEAN_ANOMALY?: number, RA?: number, DEC?: number, AZ?: number, EL?: number, RANGE?: number, EXTENT_AZ?: number, EXTENT_EL?: number, EXTENT_RANGE?: number, LAT?: number, LON?: number, ALT?: number, STOP_LAT?: number, STOP_LON?: number, STOP_ALT?: number, SRCH_INC?: number, X_ANGLE?: number, Y_ANGLE?: number, ORIENT_ANGLE?: number, CUSTOMER?: string | Uint8Array | null, NOTES?: string | Uint8Array | null, SOURCE?: string | Uint8Array | null, ORIGIN?: string | Uint8Array | null, DATA_MODE?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=CRM.d.ts.map