import * as flatbuffers from 'flatbuffers';
import { soiCalibrationType } from './soiCalibrationType.js';
import { soiCollectionMode } from './soiCollectionMode.js';
import { soiObsType } from './soiObsType.js';
/**
 * Space Object Identification Observation Set
 */
export declare class SOI implements flatbuffers.IUnpackableObject<SOIT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): SOI;
    static getRootAsSOI(bb: flatbuffers.ByteBuffer, obj?: SOI): SOI;
    static getSizePrefixedRootAsSOI(bb: flatbuffers.ByteBuffer, obj?: SOI): SOI;
    static bufferHasIdentifier(bb: flatbuffers.ByteBuffer): boolean;
    /**
     * Unique identifier
     */
    ID(): string | null;
    ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Message creation date (ISO 8601)
     */
    MSG_CREATE_DATE(): string | null;
    MSG_CREATE_DATE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
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
     * Sensor observation set identifier
     */
    SENSOR_AS_ID(): string | null;
    SENSOR_AS_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
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
     * Satellite common name
     */
    SATELLITE_NAME(): string | null;
    SATELLITE_NAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * True if uncorrelated target
     */
    UCT(): boolean;
    /**
     * Sensor geodetic latitude (degrees)
     */
    SENLAT(): number;
    /**
     * Sensor geodetic longitude (degrees)
     */
    SENLON(): number;
    /**
     * Sensor altitude (km)
     */
    SENALT(): number;
    /**
     * Sensor ECEF X position (km)
     */
    SENX(): number;
    /**
     * Sensor ECEF Y position (km)
     */
    SENY(): number;
    /**
     * Sensor ECEF Z position (km)
     */
    SENZ(): number;
    /**
     * Sensor ECEF X velocity (km/s)
     */
    SENVELX(): number;
    /**
     * Sensor ECEF Y velocity (km/s)
     */
    SENVELY(): number;
    /**
     * Sensor ECEF Z velocity (km/s)
     */
    SENVELZ(): number;
    /**
     * Sensor reference frame
     */
    SEN_REFERENCE_FRAME(): string | null;
    SEN_REFERENCE_FRAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Observation type
     */
    OBS_TYPE(): soiObsType;
    /**
     * Collection mode
     */
    COLLECTION_MODE(): soiCollectionMode;
    /**
     * Observation start time (ISO 8601)
     */
    START_TIME(): string | null;
    START_TIME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Observation end time (ISO 8601)
     */
    END_TIME(): string | null;
    END_TIME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Number of observations in set
     */
    NUM_OBS(): number;
    /**
     * Observation reference frame
     */
    REFERENCE_FRAME(): string | null;
    REFERENCE_FRAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Polar angle at start (degrees)
     */
    POLAR_ANGLE_START(): number;
    /**
     * Polar angle at end (degrees)
     */
    POLAR_ANGLE_END(): number;
    /**
     * Line-of-sight declination at start (degrees)
     */
    LOS_DECLINATION_START(): number;
    /**
     * Line-of-sight declination at end (degrees)
     */
    LOS_DECLINATION_END(): number;
    /**
     * Pointing azimuth at start (degrees)
     */
    POINTING_ANGLE_AZ_START(): number;
    /**
     * Pointing azimuth at end (degrees)
     */
    POINTING_ANGLE_AZ_END(): number;
    /**
     * Pointing elevation at start (degrees)
     */
    POINTING_ANGLE_EL_START(): number;
    /**
     * Pointing elevation at end (degrees)
     */
    POINTING_ANGLE_EL_END(): number;
    /**
     * Focal plane array width (pixels)
     */
    PIXEL_ARRAY_WIDTH(): number;
    /**
     * Focal plane array height (pixels)
     */
    PIXEL_ARRAY_HEIGHT(): number;
    /**
     * Number of spectral filters used
     */
    NUM_SPECTRAL_FILTERS(): number;
    /**
     * Spectral filter identifiers
     */
    SPECTRAL_FILTERS(index: number): string;
    SPECTRAL_FILTERS(index: number, optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    spectralFiltersLength(): number;
    /**
     * Detector gain setting
     */
    GAIN(): number;
    /**
     * Horizontal binning factor
     */
    BINNING_HORIZ(): number;
    /**
     * Vertical binning factor
     */
    BINNING_VERT(): number;
    /**
     * Solar visual magnitude
     */
    SOLAR_MAG(): number;
    /**
     * Minimum pixel value in observation
     */
    PIXEL_MIN(): number;
    /**
     * Maximum pixel value in observation
     */
    PIXEL_MAX(): number;
    /**
     * Processing software version
     */
    SOFTWARE_VERSION(): string | null;
    SOFTWARE_VERSION(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Star catalog used for calibration
     */
    STAR_CAT_NAME(): string | null;
    STAR_CAT_NAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Correlation quality score
     */
    CORR_QUALITY(): number;
    /**
     * Calibration type
     */
    CALIBRATION_TYPE(): soiCalibrationType;
    /**
     * Valid calibration identifiers
     */
    VALID_CALIBRATIONS(): string | null;
    VALID_CALIBRATIONS(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Percent saturation threshold
     */
    PERCENT_SAT_THRESHOLD(): number;
    /**
     * True if change detected from baseline
     */
    CHANGE_DETECTED(): boolean;
    /**
     * True if periodicity change detected
     */
    PERIODICITY_CHANGE_DETECTED(): boolean;
    /**
     * True if brightness variance change detected
     */
    BRIGHTNESS_VARIANCE_CHANGE_DETECTED(): boolean;
    /**
     * True if solar phase angle brightness change detected
     */
    SOLAR_PHASE_ANGLE_BRIGHTNESS_CHANGE_DETECTED(): boolean;
    /**
     * Change confidence assessment
     */
    CHANGE_CONF(): string | null;
    CHANGE_CONF(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Collection density confidence
     */
    COLLECTION_DENSITY_CONF(): string | null;
    COLLECTION_DENSITY_CONF(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Periodicity sampling confidence
     */
    PERIODICITY_SAMPLING_CONF(): string | null;
    PERIODICITY_SAMPLING_CONF(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Periodicity detection confidence
     */
    PERIODICITY_DETECTION_CONF(): string | null;
    PERIODICITY_DETECTION_CONF(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Collection identifier
     */
    COLLECTION_ID(): string | null;
    COLLECTION_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Calibration record references
     */
    CALIBRATIONS(index: number): string;
    CALIBRATIONS(index: number, optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    calibrationsLength(): number;
    /**
     * Associated tags
     */
    TAGS(index: number): string;
    TAGS(index: number, optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    tagsLength(): number;
    /**
     * Transaction identifier
     */
    TRANSACTION_ID(): string | null;
    TRANSACTION_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Optical SOI observation references
     */
    OPTICAL_SOIOBSERVATION_LIST(index: number): string;
    OPTICAL_SOIOBSERVATION_LIST(index: number, optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    opticalSoiobservationListLength(): number;
    /**
     * Radar SOI observation references
     */
    RADAR_SOIOBSERVATION_LIST(index: number): string;
    RADAR_SOIOBSERVATION_LIST(index: number, optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    radarSoiobservationListLength(): number;
    static startSOI(builder: flatbuffers.Builder): void;
    static addId(builder: flatbuffers.Builder, IDOffset: flatbuffers.Offset): void;
    static addMsgCreateDate(builder: flatbuffers.Builder, MSG_CREATE_DATEOffset: flatbuffers.Offset): void;
    static addIdSensor(builder: flatbuffers.Builder, ID_SENSOROffset: flatbuffers.Offset): void;
    static addOrigSensorId(builder: flatbuffers.Builder, ORIG_SENSOR_IDOffset: flatbuffers.Offset): void;
    static addSensorAsId(builder: flatbuffers.Builder, SENSOR_AS_IDOffset: flatbuffers.Offset): void;
    static addSatNo(builder: flatbuffers.Builder, SAT_NO: number): void;
    static addOrigObjectId(builder: flatbuffers.Builder, ORIG_OBJECT_IDOffset: flatbuffers.Offset): void;
    static addSatelliteName(builder: flatbuffers.Builder, SATELLITE_NAMEOffset: flatbuffers.Offset): void;
    static addUct(builder: flatbuffers.Builder, UCT: boolean): void;
    static addSenlat(builder: flatbuffers.Builder, SENLAT: number): void;
    static addSenlon(builder: flatbuffers.Builder, SENLON: number): void;
    static addSenalt(builder: flatbuffers.Builder, SENALT: number): void;
    static addSenx(builder: flatbuffers.Builder, SENX: number): void;
    static addSeny(builder: flatbuffers.Builder, SENY: number): void;
    static addSenz(builder: flatbuffers.Builder, SENZ: number): void;
    static addSenvelx(builder: flatbuffers.Builder, SENVELX: number): void;
    static addSenvely(builder: flatbuffers.Builder, SENVELY: number): void;
    static addSenvelz(builder: flatbuffers.Builder, SENVELZ: number): void;
    static addSenReferenceFrame(builder: flatbuffers.Builder, SEN_REFERENCE_FRAMEOffset: flatbuffers.Offset): void;
    static addObsType(builder: flatbuffers.Builder, OBS_TYPE: soiObsType): void;
    static addCollectionMode(builder: flatbuffers.Builder, COLLECTION_MODE: soiCollectionMode): void;
    static addStartTime(builder: flatbuffers.Builder, START_TIMEOffset: flatbuffers.Offset): void;
    static addEndTime(builder: flatbuffers.Builder, END_TIMEOffset: flatbuffers.Offset): void;
    static addNumObs(builder: flatbuffers.Builder, NUM_OBS: number): void;
    static addReferenceFrame(builder: flatbuffers.Builder, REFERENCE_FRAMEOffset: flatbuffers.Offset): void;
    static addPolarAngleStart(builder: flatbuffers.Builder, POLAR_ANGLE_START: number): void;
    static addPolarAngleEnd(builder: flatbuffers.Builder, POLAR_ANGLE_END: number): void;
    static addLosDeclinationStart(builder: flatbuffers.Builder, LOS_DECLINATION_START: number): void;
    static addLosDeclinationEnd(builder: flatbuffers.Builder, LOS_DECLINATION_END: number): void;
    static addPointingAngleAzStart(builder: flatbuffers.Builder, POINTING_ANGLE_AZ_START: number): void;
    static addPointingAngleAzEnd(builder: flatbuffers.Builder, POINTING_ANGLE_AZ_END: number): void;
    static addPointingAngleElStart(builder: flatbuffers.Builder, POINTING_ANGLE_EL_START: number): void;
    static addPointingAngleElEnd(builder: flatbuffers.Builder, POINTING_ANGLE_EL_END: number): void;
    static addPixelArrayWidth(builder: flatbuffers.Builder, PIXEL_ARRAY_WIDTH: number): void;
    static addPixelArrayHeight(builder: flatbuffers.Builder, PIXEL_ARRAY_HEIGHT: number): void;
    static addNumSpectralFilters(builder: flatbuffers.Builder, NUM_SPECTRAL_FILTERS: number): void;
    static addSpectralFilters(builder: flatbuffers.Builder, SPECTRAL_FILTERSOffset: flatbuffers.Offset): void;
    static createSpectralFiltersVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startSpectralFiltersVector(builder: flatbuffers.Builder, numElems: number): void;
    static addGain(builder: flatbuffers.Builder, GAIN: number): void;
    static addBinningHoriz(builder: flatbuffers.Builder, BINNING_HORIZ: number): void;
    static addBinningVert(builder: flatbuffers.Builder, BINNING_VERT: number): void;
    static addSolarMag(builder: flatbuffers.Builder, SOLAR_MAG: number): void;
    static addPixelMin(builder: flatbuffers.Builder, PIXEL_MIN: number): void;
    static addPixelMax(builder: flatbuffers.Builder, PIXEL_MAX: number): void;
    static addSoftwareVersion(builder: flatbuffers.Builder, SOFTWARE_VERSIONOffset: flatbuffers.Offset): void;
    static addStarCatName(builder: flatbuffers.Builder, STAR_CAT_NAMEOffset: flatbuffers.Offset): void;
    static addCorrQuality(builder: flatbuffers.Builder, CORR_QUALITY: number): void;
    static addCalibrationType(builder: flatbuffers.Builder, CALIBRATION_TYPE: soiCalibrationType): void;
    static addValidCalibrations(builder: flatbuffers.Builder, VALID_CALIBRATIONSOffset: flatbuffers.Offset): void;
    static addPercentSatThreshold(builder: flatbuffers.Builder, PERCENT_SAT_THRESHOLD: number): void;
    static addChangeDetected(builder: flatbuffers.Builder, CHANGE_DETECTED: boolean): void;
    static addPeriodicityChangeDetected(builder: flatbuffers.Builder, PERIODICITY_CHANGE_DETECTED: boolean): void;
    static addBrightnessVarianceChangeDetected(builder: flatbuffers.Builder, BRIGHTNESS_VARIANCE_CHANGE_DETECTED: boolean): void;
    static addSolarPhaseAngleBrightnessChangeDetected(builder: flatbuffers.Builder, SOLAR_PHASE_ANGLE_BRIGHTNESS_CHANGE_DETECTED: boolean): void;
    static addChangeConf(builder: flatbuffers.Builder, CHANGE_CONFOffset: flatbuffers.Offset): void;
    static addCollectionDensityConf(builder: flatbuffers.Builder, COLLECTION_DENSITY_CONFOffset: flatbuffers.Offset): void;
    static addPeriodicitySamplingConf(builder: flatbuffers.Builder, PERIODICITY_SAMPLING_CONFOffset: flatbuffers.Offset): void;
    static addPeriodicityDetectionConf(builder: flatbuffers.Builder, PERIODICITY_DETECTION_CONFOffset: flatbuffers.Offset): void;
    static addCollectionId(builder: flatbuffers.Builder, COLLECTION_IDOffset: flatbuffers.Offset): void;
    static addCalibrations(builder: flatbuffers.Builder, CALIBRATIONSOffset: flatbuffers.Offset): void;
    static createCalibrationsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startCalibrationsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addTags(builder: flatbuffers.Builder, TAGSOffset: flatbuffers.Offset): void;
    static createTagsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startTagsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addTransactionId(builder: flatbuffers.Builder, TRANSACTION_IDOffset: flatbuffers.Offset): void;
    static addOpticalSoiobservationList(builder: flatbuffers.Builder, OPTICAL_SOIOBSERVATION_LISTOffset: flatbuffers.Offset): void;
    static createOpticalSoiobservationListVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startOpticalSoiobservationListVector(builder: flatbuffers.Builder, numElems: number): void;
    static addRadarSoiobservationList(builder: flatbuffers.Builder, RADAR_SOIOBSERVATION_LISTOffset: flatbuffers.Offset): void;
    static createRadarSoiobservationListVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startRadarSoiobservationListVector(builder: flatbuffers.Builder, numElems: number): void;
    static endSOI(builder: flatbuffers.Builder): flatbuffers.Offset;
    static finishSOIBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static finishSizePrefixedSOIBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static createSOI(builder: flatbuffers.Builder, IDOffset: flatbuffers.Offset, MSG_CREATE_DATEOffset: flatbuffers.Offset, ID_SENSOROffset: flatbuffers.Offset, ORIG_SENSOR_IDOffset: flatbuffers.Offset, SENSOR_AS_IDOffset: flatbuffers.Offset, SAT_NO: number, ORIG_OBJECT_IDOffset: flatbuffers.Offset, SATELLITE_NAMEOffset: flatbuffers.Offset, UCT: boolean, SENLAT: number, SENLON: number, SENALT: number, SENX: number, SENY: number, SENZ: number, SENVELX: number, SENVELY: number, SENVELZ: number, SEN_REFERENCE_FRAMEOffset: flatbuffers.Offset, OBS_TYPE: soiObsType, COLLECTION_MODE: soiCollectionMode, START_TIMEOffset: flatbuffers.Offset, END_TIMEOffset: flatbuffers.Offset, NUM_OBS: number, REFERENCE_FRAMEOffset: flatbuffers.Offset, POLAR_ANGLE_START: number, POLAR_ANGLE_END: number, LOS_DECLINATION_START: number, LOS_DECLINATION_END: number, POINTING_ANGLE_AZ_START: number, POINTING_ANGLE_AZ_END: number, POINTING_ANGLE_EL_START: number, POINTING_ANGLE_EL_END: number, PIXEL_ARRAY_WIDTH: number, PIXEL_ARRAY_HEIGHT: number, NUM_SPECTRAL_FILTERS: number, SPECTRAL_FILTERSOffset: flatbuffers.Offset, GAIN: number, BINNING_HORIZ: number, BINNING_VERT: number, SOLAR_MAG: number, PIXEL_MIN: number, PIXEL_MAX: number, SOFTWARE_VERSIONOffset: flatbuffers.Offset, STAR_CAT_NAMEOffset: flatbuffers.Offset, CORR_QUALITY: number, CALIBRATION_TYPE: soiCalibrationType, VALID_CALIBRATIONSOffset: flatbuffers.Offset, PERCENT_SAT_THRESHOLD: number, CHANGE_DETECTED: boolean, PERIODICITY_CHANGE_DETECTED: boolean, BRIGHTNESS_VARIANCE_CHANGE_DETECTED: boolean, SOLAR_PHASE_ANGLE_BRIGHTNESS_CHANGE_DETECTED: boolean, CHANGE_CONFOffset: flatbuffers.Offset, COLLECTION_DENSITY_CONFOffset: flatbuffers.Offset, PERIODICITY_SAMPLING_CONFOffset: flatbuffers.Offset, PERIODICITY_DETECTION_CONFOffset: flatbuffers.Offset, COLLECTION_IDOffset: flatbuffers.Offset, CALIBRATIONSOffset: flatbuffers.Offset, TAGSOffset: flatbuffers.Offset, TRANSACTION_IDOffset: flatbuffers.Offset, OPTICAL_SOIOBSERVATION_LISTOffset: flatbuffers.Offset, RADAR_SOIOBSERVATION_LISTOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): SOIT;
    unpackTo(_o: SOIT): void;
}
export declare class SOIT implements flatbuffers.IGeneratedObject {
    ID: string | Uint8Array | null;
    MSG_CREATE_DATE: string | Uint8Array | null;
    ID_SENSOR: string | Uint8Array | null;
    ORIG_SENSOR_ID: string | Uint8Array | null;
    SENSOR_AS_ID: string | Uint8Array | null;
    SAT_NO: number;
    ORIG_OBJECT_ID: string | Uint8Array | null;
    SATELLITE_NAME: string | Uint8Array | null;
    UCT: boolean;
    SENLAT: number;
    SENLON: number;
    SENALT: number;
    SENX: number;
    SENY: number;
    SENZ: number;
    SENVELX: number;
    SENVELY: number;
    SENVELZ: number;
    SEN_REFERENCE_FRAME: string | Uint8Array | null;
    OBS_TYPE: soiObsType;
    COLLECTION_MODE: soiCollectionMode;
    START_TIME: string | Uint8Array | null;
    END_TIME: string | Uint8Array | null;
    NUM_OBS: number;
    REFERENCE_FRAME: string | Uint8Array | null;
    POLAR_ANGLE_START: number;
    POLAR_ANGLE_END: number;
    LOS_DECLINATION_START: number;
    LOS_DECLINATION_END: number;
    POINTING_ANGLE_AZ_START: number;
    POINTING_ANGLE_AZ_END: number;
    POINTING_ANGLE_EL_START: number;
    POINTING_ANGLE_EL_END: number;
    PIXEL_ARRAY_WIDTH: number;
    PIXEL_ARRAY_HEIGHT: number;
    NUM_SPECTRAL_FILTERS: number;
    SPECTRAL_FILTERS: (string)[];
    GAIN: number;
    BINNING_HORIZ: number;
    BINNING_VERT: number;
    SOLAR_MAG: number;
    PIXEL_MIN: number;
    PIXEL_MAX: number;
    SOFTWARE_VERSION: string | Uint8Array | null;
    STAR_CAT_NAME: string | Uint8Array | null;
    CORR_QUALITY: number;
    CALIBRATION_TYPE: soiCalibrationType;
    VALID_CALIBRATIONS: string | Uint8Array | null;
    PERCENT_SAT_THRESHOLD: number;
    CHANGE_DETECTED: boolean;
    PERIODICITY_CHANGE_DETECTED: boolean;
    BRIGHTNESS_VARIANCE_CHANGE_DETECTED: boolean;
    SOLAR_PHASE_ANGLE_BRIGHTNESS_CHANGE_DETECTED: boolean;
    CHANGE_CONF: string | Uint8Array | null;
    COLLECTION_DENSITY_CONF: string | Uint8Array | null;
    PERIODICITY_SAMPLING_CONF: string | Uint8Array | null;
    PERIODICITY_DETECTION_CONF: string | Uint8Array | null;
    COLLECTION_ID: string | Uint8Array | null;
    CALIBRATIONS: (string)[];
    TAGS: (string)[];
    TRANSACTION_ID: string | Uint8Array | null;
    OPTICAL_SOIOBSERVATION_LIST: (string)[];
    RADAR_SOIOBSERVATION_LIST: (string)[];
    constructor(ID?: string | Uint8Array | null, MSG_CREATE_DATE?: string | Uint8Array | null, ID_SENSOR?: string | Uint8Array | null, ORIG_SENSOR_ID?: string | Uint8Array | null, SENSOR_AS_ID?: string | Uint8Array | null, SAT_NO?: number, ORIG_OBJECT_ID?: string | Uint8Array | null, SATELLITE_NAME?: string | Uint8Array | null, UCT?: boolean, SENLAT?: number, SENLON?: number, SENALT?: number, SENX?: number, SENY?: number, SENZ?: number, SENVELX?: number, SENVELY?: number, SENVELZ?: number, SEN_REFERENCE_FRAME?: string | Uint8Array | null, OBS_TYPE?: soiObsType, COLLECTION_MODE?: soiCollectionMode, START_TIME?: string | Uint8Array | null, END_TIME?: string | Uint8Array | null, NUM_OBS?: number, REFERENCE_FRAME?: string | Uint8Array | null, POLAR_ANGLE_START?: number, POLAR_ANGLE_END?: number, LOS_DECLINATION_START?: number, LOS_DECLINATION_END?: number, POINTING_ANGLE_AZ_START?: number, POINTING_ANGLE_AZ_END?: number, POINTING_ANGLE_EL_START?: number, POINTING_ANGLE_EL_END?: number, PIXEL_ARRAY_WIDTH?: number, PIXEL_ARRAY_HEIGHT?: number, NUM_SPECTRAL_FILTERS?: number, SPECTRAL_FILTERS?: (string)[], GAIN?: number, BINNING_HORIZ?: number, BINNING_VERT?: number, SOLAR_MAG?: number, PIXEL_MIN?: number, PIXEL_MAX?: number, SOFTWARE_VERSION?: string | Uint8Array | null, STAR_CAT_NAME?: string | Uint8Array | null, CORR_QUALITY?: number, CALIBRATION_TYPE?: soiCalibrationType, VALID_CALIBRATIONS?: string | Uint8Array | null, PERCENT_SAT_THRESHOLD?: number, CHANGE_DETECTED?: boolean, PERIODICITY_CHANGE_DETECTED?: boolean, BRIGHTNESS_VARIANCE_CHANGE_DETECTED?: boolean, SOLAR_PHASE_ANGLE_BRIGHTNESS_CHANGE_DETECTED?: boolean, CHANGE_CONF?: string | Uint8Array | null, COLLECTION_DENSITY_CONF?: string | Uint8Array | null, PERIODICITY_SAMPLING_CONF?: string | Uint8Array | null, PERIODICITY_DETECTION_CONF?: string | Uint8Array | null, COLLECTION_ID?: string | Uint8Array | null, CALIBRATIONS?: (string)[], TAGS?: (string)[], TRANSACTION_ID?: string | Uint8Array | null, OPTICAL_SOIOBSERVATION_LIST?: (string)[], RADAR_SOIOBSERVATION_LIST?: (string)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=SOI.d.ts.map