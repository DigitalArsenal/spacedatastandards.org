import * as flatbuffers from 'flatbuffers';
import { PHBMeasurement, PHBMeasurementT } from './PHBMeasurement.js';
import { csoAlertStage } from './csoAlertStage.js';
import { csoMessenger } from './csoMessenger.js';
import { csoSourceClass } from './csoSourceClass.js';
/**
 * Celestial Source: a non-stellar source or transient, with position and multi-band brightness.
 */
export declare class CSO implements flatbuffers.IUnpackableObject<CSOT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): CSO;
    static getRootAsCSO(bb: flatbuffers.ByteBuffer, obj?: CSO): CSO;
    static getSizePrefixedRootAsCSO(bb: flatbuffers.ByteBuffer, obj?: CSO): CSO;
    static bufferHasIdentifier(bb: flatbuffers.ByteBuffer): boolean;
    /**
     * Stable identifier, equal across every revision of one source.
     */
    ID(): string;
    ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    /**
     * Preferred name.
     */
    NAME(): string | null;
    NAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Other designations, each in the form its catalogue uses.
     */
    DESIGNATIONS(index: number): string;
    DESIGNATIONS(index: number, optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    designationsLength(): number;
    /**
     * Physical class.
     */
    SOURCE_CLASS(): csoSourceClass;
    /**
     * Producer's class name when SOURCE_CLASS is OTHER, or a finer subclass.
     */
    CLASS_NAME(): string | null;
    CLASS_NAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Probability that SOURCE_CLASS is right, [0, 1].
     */
    CLASS_PROBABILITY(): number;
    /**
     * Carrier the source was detected in.
     */
    MESSENGER(): csoMessenger;
    /**
     * Right ascension, degrees, ICRS.
     */
    RA(): number;
    /**
     * Declination, degrees, ICRS.
     */
    DEC(): number;
    /**
     * Epoch of RA and DEC, Julian years (TT).
     */
    POSITION_EPOCH(): number;
    /**
     * Semi-major axis of the localisation ellipse, arcseconds.
     */
    POS_ERR_MAJOR_ARCSEC(): number;
    /**
     * Semi-minor axis of the localisation ellipse, arcseconds.
     */
    POS_ERR_MINOR_ARCSEC(): number;
    /**
     * Position angle of the major axis, degrees east of north.
     */
    POS_ERR_PA_DEG(): number;
    /**
     * Probability contained in the ellipse, (0, 1), e.g. 0.9.
     */
    POS_ERR_CONFIDENCE(): number;
    /**
     * LAYER_ID of the `$SKT` probability-map tiles that localise the source,
     * when an ellipse cannot.
     */
    LOCALIZATION_LAYER_ID(): string | null;
    LOCALIZATION_LAYER_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Parallax, milliarcseconds.
     */
    PARALLAX(): number;
    /**
     * Proper motion in RA times cos(DEC), milliarcseconds per year.
     */
    PMRA(): number;
    /**
     * Proper motion in DEC, milliarcseconds per year.
     */
    PMDEC(): number;
    /**
     * Redshift.
     */
    REDSHIFT(): number;
    /**
     * One-sigma redshift uncertainty.
     */
    REDSHIFT_UNC(): number;
    /**
     * Luminosity distance, megaparsecs, when stated directly (as for a
     * gravitational-wave candidate).
     */
    DISTANCE_MPC(): number;
    /**
     * One-sigma distance uncertainty, megaparsecs.
     */
    DISTANCE_UNC_MPC(): number;
    /**
     * Angular size of an extended source: major axis, arcseconds. Absent for
     * a point source.
     */
    SIZE_MAJOR_ARCSEC(): number;
    /**
     * Minor axis, arcseconds.
     */
    SIZE_MINOR_ARCSEC(): number;
    /**
     * Position angle of the major axis, degrees east of north.
     */
    SIZE_PA_DEG(): number;
    /**
     * Brightness per band.
     */
    PHOTOMETRY(index: number, obj?: PHBMeasurement): PHBMeasurement | null;
    photometryLength(): number;
    /**
     * True when the source is a transient or flaring episode rather than a
     * persistent source.
     */
    IS_TRANSIENT(): boolean;
    /**
     * Trigger or peak time, ISO 8601 UTC.
     */
    EVENT_TIME(): string | null;
    EVENT_TIME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Start of the activity, ISO 8601 UTC.
     */
    START_TIME(): string | null;
    START_TIME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * End of the activity, ISO 8601 UTC.
     */
    END_TIME(): string | null;
    END_TIME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Duration containing 90% of the fluence, seconds.
     */
    DURATION_T90_S(): number;
    /**
     * Period of a periodic source (rotation, orbit, pulsation), seconds.
     */
    PERIOD_S(): number;
    /**
     * First time derivative of PERIOD_S, seconds per second.
     */
    PERIOD_DERIVATIVE(): number;
    /**
     * Detection significance, standard deviations.
     */
    SIGNIFICANCE_SIGMA(): number;
    /**
     * False-alarm rate of the detection, per year.
     */
    FALSE_ALARM_RATE_PER_YR(): number;
    /**
     * Stage of an alert record.
     */
    ALERT_STATE(): csoAlertStage;
    /**
     * Revision number of this record for its ID, from 0.
     */
    ALERT_REVISION(): number;
    /**
     * Time this revision was issued, ISO 8601 UTC.
     */
    ISSUED_TIME(): string | null;
    ISSUED_TIME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Verbatim name of the catalogue or alert stream the record came from.
     */
    SOURCE_CATALOG(): string | null;
    SOURCE_CATALOG(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * URL of the upstream record.
     */
    SOURCE_URL(): string | null;
    SOURCE_URL(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Citation the upstream publisher asks for.
     */
    CITATION(): string | null;
    CITATION(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    static startCSO(builder: flatbuffers.Builder): void;
    static addId(builder: flatbuffers.Builder, IDOffset: flatbuffers.Offset): void;
    static addName(builder: flatbuffers.Builder, NAMEOffset: flatbuffers.Offset): void;
    static addDesignations(builder: flatbuffers.Builder, DESIGNATIONSOffset: flatbuffers.Offset): void;
    static createDesignationsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startDesignationsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addSourceClass(builder: flatbuffers.Builder, SOURCE_CLASS: csoSourceClass): void;
    static addClassName(builder: flatbuffers.Builder, CLASS_NAMEOffset: flatbuffers.Offset): void;
    static addClassProbability(builder: flatbuffers.Builder, CLASS_PROBABILITY: number): void;
    static addMessenger(builder: flatbuffers.Builder, MESSENGER: csoMessenger): void;
    static addRa(builder: flatbuffers.Builder, RA: number): void;
    static addDec(builder: flatbuffers.Builder, DEC: number): void;
    static addPositionEpoch(builder: flatbuffers.Builder, POSITION_EPOCH: number): void;
    static addPosErrMajorArcsec(builder: flatbuffers.Builder, POS_ERR_MAJOR_ARCSEC: number): void;
    static addPosErrMinorArcsec(builder: flatbuffers.Builder, POS_ERR_MINOR_ARCSEC: number): void;
    static addPosErrPaDeg(builder: flatbuffers.Builder, POS_ERR_PA_DEG: number): void;
    static addPosErrConfidence(builder: flatbuffers.Builder, POS_ERR_CONFIDENCE: number): void;
    static addLocalizationLayerId(builder: flatbuffers.Builder, LOCALIZATION_LAYER_IDOffset: flatbuffers.Offset): void;
    static addParallax(builder: flatbuffers.Builder, PARALLAX: number): void;
    static addPmra(builder: flatbuffers.Builder, PMRA: number): void;
    static addPmdec(builder: flatbuffers.Builder, PMDEC: number): void;
    static addRedshift(builder: flatbuffers.Builder, REDSHIFT: number): void;
    static addRedshiftUnc(builder: flatbuffers.Builder, REDSHIFT_UNC: number): void;
    static addDistanceMpc(builder: flatbuffers.Builder, DISTANCE_MPC: number): void;
    static addDistanceUncMpc(builder: flatbuffers.Builder, DISTANCE_UNC_MPC: number): void;
    static addSizeMajorArcsec(builder: flatbuffers.Builder, SIZE_MAJOR_ARCSEC: number): void;
    static addSizeMinorArcsec(builder: flatbuffers.Builder, SIZE_MINOR_ARCSEC: number): void;
    static addSizePaDeg(builder: flatbuffers.Builder, SIZE_PA_DEG: number): void;
    static addPhotometry(builder: flatbuffers.Builder, PHOTOMETRYOffset: flatbuffers.Offset): void;
    static createPhotometryVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startPhotometryVector(builder: flatbuffers.Builder, numElems: number): void;
    static addIsTransient(builder: flatbuffers.Builder, IS_TRANSIENT: boolean): void;
    static addEventTime(builder: flatbuffers.Builder, EVENT_TIMEOffset: flatbuffers.Offset): void;
    static addStartTime(builder: flatbuffers.Builder, START_TIMEOffset: flatbuffers.Offset): void;
    static addEndTime(builder: flatbuffers.Builder, END_TIMEOffset: flatbuffers.Offset): void;
    static addDurationT90S(builder: flatbuffers.Builder, DURATION_T90_S: number): void;
    static addPeriodS(builder: flatbuffers.Builder, PERIOD_S: number): void;
    static addPeriodDerivative(builder: flatbuffers.Builder, PERIOD_DERIVATIVE: number): void;
    static addSignificanceSigma(builder: flatbuffers.Builder, SIGNIFICANCE_SIGMA: number): void;
    static addFalseAlarmRatePerYr(builder: flatbuffers.Builder, FALSE_ALARM_RATE_PER_YR: number): void;
    static addAlertState(builder: flatbuffers.Builder, ALERT_STATE: csoAlertStage): void;
    static addAlertRevision(builder: flatbuffers.Builder, ALERT_REVISION: number): void;
    static addIssuedTime(builder: flatbuffers.Builder, ISSUED_TIMEOffset: flatbuffers.Offset): void;
    static addSourceCatalog(builder: flatbuffers.Builder, SOURCE_CATALOGOffset: flatbuffers.Offset): void;
    static addSourceUrl(builder: flatbuffers.Builder, SOURCE_URLOffset: flatbuffers.Offset): void;
    static addCitation(builder: flatbuffers.Builder, CITATIONOffset: flatbuffers.Offset): void;
    static endCSO(builder: flatbuffers.Builder): flatbuffers.Offset;
    static finishCSOBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static finishSizePrefixedCSOBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static createCSO(builder: flatbuffers.Builder, IDOffset: flatbuffers.Offset, NAMEOffset: flatbuffers.Offset, DESIGNATIONSOffset: flatbuffers.Offset, SOURCE_CLASS: csoSourceClass, CLASS_NAMEOffset: flatbuffers.Offset, CLASS_PROBABILITY: number, MESSENGER: csoMessenger, RA: number, DEC: number, POSITION_EPOCH: number, POS_ERR_MAJOR_ARCSEC: number, POS_ERR_MINOR_ARCSEC: number, POS_ERR_PA_DEG: number, POS_ERR_CONFIDENCE: number, LOCALIZATION_LAYER_IDOffset: flatbuffers.Offset, PARALLAX: number, PMRA: number, PMDEC: number, REDSHIFT: number, REDSHIFT_UNC: number, DISTANCE_MPC: number, DISTANCE_UNC_MPC: number, SIZE_MAJOR_ARCSEC: number, SIZE_MINOR_ARCSEC: number, SIZE_PA_DEG: number, PHOTOMETRYOffset: flatbuffers.Offset, IS_TRANSIENT: boolean, EVENT_TIMEOffset: flatbuffers.Offset, START_TIMEOffset: flatbuffers.Offset, END_TIMEOffset: flatbuffers.Offset, DURATION_T90_S: number, PERIOD_S: number, PERIOD_DERIVATIVE: number, SIGNIFICANCE_SIGMA: number, FALSE_ALARM_RATE_PER_YR: number, ALERT_STATE: csoAlertStage, ALERT_REVISION: number, ISSUED_TIMEOffset: flatbuffers.Offset, SOURCE_CATALOGOffset: flatbuffers.Offset, SOURCE_URLOffset: flatbuffers.Offset, CITATIONOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): CSOT;
    unpackTo(_o: CSOT): void;
}
export declare class CSOT implements flatbuffers.IGeneratedObject {
    ID: string | Uint8Array | null;
    NAME: string | Uint8Array | null;
    DESIGNATIONS: (string)[];
    SOURCE_CLASS: csoSourceClass;
    CLASS_NAME: string | Uint8Array | null;
    CLASS_PROBABILITY: number;
    MESSENGER: csoMessenger;
    RA: number;
    DEC: number;
    POSITION_EPOCH: number;
    POS_ERR_MAJOR_ARCSEC: number;
    POS_ERR_MINOR_ARCSEC: number;
    POS_ERR_PA_DEG: number;
    POS_ERR_CONFIDENCE: number;
    LOCALIZATION_LAYER_ID: string | Uint8Array | null;
    PARALLAX: number;
    PMRA: number;
    PMDEC: number;
    REDSHIFT: number;
    REDSHIFT_UNC: number;
    DISTANCE_MPC: number;
    DISTANCE_UNC_MPC: number;
    SIZE_MAJOR_ARCSEC: number;
    SIZE_MINOR_ARCSEC: number;
    SIZE_PA_DEG: number;
    PHOTOMETRY: (PHBMeasurementT)[];
    IS_TRANSIENT: boolean;
    EVENT_TIME: string | Uint8Array | null;
    START_TIME: string | Uint8Array | null;
    END_TIME: string | Uint8Array | null;
    DURATION_T90_S: number;
    PERIOD_S: number;
    PERIOD_DERIVATIVE: number;
    SIGNIFICANCE_SIGMA: number;
    FALSE_ALARM_RATE_PER_YR: number;
    ALERT_STATE: csoAlertStage;
    ALERT_REVISION: number;
    ISSUED_TIME: string | Uint8Array | null;
    SOURCE_CATALOG: string | Uint8Array | null;
    SOURCE_URL: string | Uint8Array | null;
    CITATION: string | Uint8Array | null;
    constructor(ID?: string | Uint8Array | null, NAME?: string | Uint8Array | null, DESIGNATIONS?: (string)[], SOURCE_CLASS?: csoSourceClass, CLASS_NAME?: string | Uint8Array | null, CLASS_PROBABILITY?: number, MESSENGER?: csoMessenger, RA?: number, DEC?: number, POSITION_EPOCH?: number, POS_ERR_MAJOR_ARCSEC?: number, POS_ERR_MINOR_ARCSEC?: number, POS_ERR_PA_DEG?: number, POS_ERR_CONFIDENCE?: number, LOCALIZATION_LAYER_ID?: string | Uint8Array | null, PARALLAX?: number, PMRA?: number, PMDEC?: number, REDSHIFT?: number, REDSHIFT_UNC?: number, DISTANCE_MPC?: number, DISTANCE_UNC_MPC?: number, SIZE_MAJOR_ARCSEC?: number, SIZE_MINOR_ARCSEC?: number, SIZE_PA_DEG?: number, PHOTOMETRY?: (PHBMeasurementT)[], IS_TRANSIENT?: boolean, EVENT_TIME?: string | Uint8Array | null, START_TIME?: string | Uint8Array | null, END_TIME?: string | Uint8Array | null, DURATION_T90_S?: number, PERIOD_S?: number, PERIOD_DERIVATIVE?: number, SIGNIFICANCE_SIGMA?: number, FALSE_ALARM_RATE_PER_YR?: number, ALERT_STATE?: csoAlertStage, ALERT_REVISION?: number, ISSUED_TIME?: string | Uint8Array | null, SOURCE_CATALOG?: string | Uint8Array | null, SOURCE_URL?: string | Uint8Array | null, CITATION?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=CSO.d.ts.map