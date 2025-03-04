import * as flatbuffers from 'flatbuffers';
import { refFrame } from './ref-frame.js';
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
    eobservationId(): string | null;
    eobservationId(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Classification marking of the data
     */
    classification(): string | null;
    classification(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Observation time in UTC
     */
    obTime(): string | null;
    obTime(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Quality of the correlation
     */
    corrQuality(): number;
    /**
     * Identifier for the satellite on orbit
     */
    idOnOrbit(): string | null;
    idOnOrbit(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Identifier for the sensor
     */
    sensorId(): string | null;
    sensorId(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Method of data collection
     */
    collectMethod(): string | null;
    collectMethod(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * NORAD catalog identifier for the satellite
     */
    noradCatId(): number;
    /**
     * Identifier for the task
     */
    taskId(): string | null;
    taskId(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Identifier for the transaction
     */
    transactionId(): string | null;
    transactionId(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Identifier for the track
     */
    trackId(): string | null;
    trackId(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Position of the observation
     */
    obPosition(): string | null;
    obPosition(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Original object identifier
     */
    origObjectId(): string | null;
    origObjectId(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Original sensor identifier
     */
    origSensorId(): string | null;
    origSensorId(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Universal Coordinated Time flag
     */
    uct(): boolean;
    /**
     * Azimuth angle
     */
    azimuth(): number;
    /**
     * Uncertainty in azimuth angle
     */
    azimuthUnc(): number;
    /**
     * Bias in azimuth angle
     */
    azimuthBias(): number;
    /**
     * Rate of change in azimuth
     */
    azimuthRate(): number;
    /**
     * Elevation angle
     */
    elevation(): number;
    /**
     * Uncertainty in elevation angle
     */
    elevationUnc(): number;
    /**
     * Bias in elevation angle
     */
    elevationBias(): number;
    /**
     * Rate of change in elevation
     */
    elevationRate(): number;
    /**
     * Range to the target
     */
    range(): number;
    /**
     * Uncertainty in range
     */
    rangeUnc(): number;
    /**
     * Bias in range measurement
     */
    rangeBias(): number;
    /**
     * Rate of change in range
     */
    rangeRate(): number;
    /**
     * Uncertainty in range rate
     */
    rangeRateUnc(): number;
    /**
     * Right ascension
     */
    ra(): number;
    /**
     * Rate of change in right ascension
     */
    raRate(): number;
    /**
     * Uncertainty in right ascension
     */
    raUnc(): number;
    /**
     * Bias in right ascension
     */
    raBias(): number;
    /**
     * Declination angle
     */
    declination(): number;
    /**
     * Rate of change in declination
     */
    declinationRate(): number;
    /**
     * Uncertainty in declination
     */
    declinationUnc(): number;
    /**
     * Bias in declination
     */
    declinationBias(): number;
    /**
     * X-component of line-of-sight vector
     */
    losx(): number;
    /**
     * Y-component of line-of-sight vector
     */
    losy(): number;
    /**
     * Z-component of line-of-sight vector
     */
    losz(): number;
    /**
     * Uncertainty in line-of-sight vector
     */
    losUnc(): number;
    /**
     * X-component of line-of-sight velocity
     */
    losxvel(): number;
    /**
     * Y-component of line-of-sight velocity
     */
    losyvel(): number;
    /**
     * Z-component of line-of-sight velocity
     */
    loszvel(): number;
    /**
     * Latitude of sensor
     */
    senlat(): number;
    /**
     * Longitude of sensor
     */
    senlon(): number;
    /**
     * Altitude of sensor
     */
    senalt(): number;
    /**
     * X-coordinate of sensor position
     */
    senx(): number;
    /**
     * Y-coordinate of sensor position
     */
    seny(): number;
    /**
     * Z-coordinate of sensor position
     */
    senz(): number;
    /**
     * Number of fields of view
     */
    fovCount(): number;
    /**
     * Duration of the exposure
     */
    expDuration(): number;
    /**
     * Zero-point displacement
     */
    zeroptd(): number;
    /**
     * Net object signal
     */
    netObjSig(): number;
    /**
     * Uncertainty in net object signal
     */
    netObjSigUnc(): number;
    /**
     * Magnitude of the observation
     */
    mag(): number;
    /**
     * Uncertainty in magnitude
     */
    magUnc(): number;
    /**
     * Normalized range for magnitude
     */
    magNormRange(): number;
    /**
     * Geocentric latitude
     */
    geolat(): number;
    /**
     * Geocentric longitude
     */
    geolon(): number;
    /**
     * Geocentric altitude
     */
    geoalt(): number;
    /**
     * Geocentric range
     */
    georange(): number;
    /**
     * Sky background level
     */
    skyBkgrnd(): number;
    /**
     * Primary extinction
     */
    primaryExtinction(): number;
    /**
     * Uncertainty in primary extinction
     */
    primaryExtinctionUnc(): number;
    /**
     * Solar phase angle
     */
    solarPhaseAngle(): number;
    /**
     * Solar equatorial phase angle
     */
    solarEqPhaseAngle(): number;
    /**
     * Solar declination angle
     */
    solarDecAngle(): number;
    /**
     * Shutter delay
     */
    shutterDelay(): number;
    /**
     * Timing bias
     */
    timingBias(): number;
    /**
     * URI of the raw data file
     */
    rawFileUri(): string | null;
    rawFileUri(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Intensity of the observation
     */
    intensity(): number;
    /**
     * Background intensity
     */
    bgIntensity(): number;
    /**
     * Descriptor of the provided data
     */
    descriptor(): string | null;
    descriptor(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Source of the data
     */
    source(): string | null;
    source(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Origin of the data
     */
    origin(): string | null;
    origin(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Mode of the data
     */
    dataMode(): string | null;
    dataMode(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Creation time of the record
     */
    createdAt(): string | null;
    createdAt(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * User who created the record
     */
    createdBy(): string | null;
    createdBy(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Reference frame of the observation
     */
    referenceFrame(): refFrame;
    /**
     * Reference frame of the sensor
     */
    senReferenceFrame(): string | null;
    senReferenceFrame(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Flag for umbra (total eclipse)
     */
    umbra(): boolean;
    /**
     * Flag for penumbra (partial eclipse)
     */
    penumbra(): boolean;
    /**
     * Original network identifier
     */
    origNetwork(): string | null;
    origNetwork(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Data link source
     */
    sourceDl(): string | null;
    sourceDl(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Type of the observation
     */
    type(): string | null;
    type(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    static startEOO(builder: flatbuffers.Builder): void;
    static addEobservationId(builder: flatbuffers.Builder, eobservationIdOffset: flatbuffers.Offset): void;
    static addClassification(builder: flatbuffers.Builder, classificationOffset: flatbuffers.Offset): void;
    static addObTime(builder: flatbuffers.Builder, obTimeOffset: flatbuffers.Offset): void;
    static addCorrQuality(builder: flatbuffers.Builder, corrQuality: number): void;
    static addIdOnOrbit(builder: flatbuffers.Builder, idOnOrbitOffset: flatbuffers.Offset): void;
    static addSensorId(builder: flatbuffers.Builder, sensorIdOffset: flatbuffers.Offset): void;
    static addCollectMethod(builder: flatbuffers.Builder, collectMethodOffset: flatbuffers.Offset): void;
    static addNoradCatId(builder: flatbuffers.Builder, noradCatId: number): void;
    static addTaskId(builder: flatbuffers.Builder, taskIdOffset: flatbuffers.Offset): void;
    static addTransactionId(builder: flatbuffers.Builder, transactionIdOffset: flatbuffers.Offset): void;
    static addTrackId(builder: flatbuffers.Builder, trackIdOffset: flatbuffers.Offset): void;
    static addObPosition(builder: flatbuffers.Builder, obPositionOffset: flatbuffers.Offset): void;
    static addOrigObjectId(builder: flatbuffers.Builder, origObjectIdOffset: flatbuffers.Offset): void;
    static addOrigSensorId(builder: flatbuffers.Builder, origSensorIdOffset: flatbuffers.Offset): void;
    static addUct(builder: flatbuffers.Builder, uct: boolean): void;
    static addAzimuth(builder: flatbuffers.Builder, azimuth: number): void;
    static addAzimuthUnc(builder: flatbuffers.Builder, azimuthUnc: number): void;
    static addAzimuthBias(builder: flatbuffers.Builder, azimuthBias: number): void;
    static addAzimuthRate(builder: flatbuffers.Builder, azimuthRate: number): void;
    static addElevation(builder: flatbuffers.Builder, elevation: number): void;
    static addElevationUnc(builder: flatbuffers.Builder, elevationUnc: number): void;
    static addElevationBias(builder: flatbuffers.Builder, elevationBias: number): void;
    static addElevationRate(builder: flatbuffers.Builder, elevationRate: number): void;
    static addRange(builder: flatbuffers.Builder, range: number): void;
    static addRangeUnc(builder: flatbuffers.Builder, rangeUnc: number): void;
    static addRangeBias(builder: flatbuffers.Builder, rangeBias: number): void;
    static addRangeRate(builder: flatbuffers.Builder, rangeRate: number): void;
    static addRangeRateUnc(builder: flatbuffers.Builder, rangeRateUnc: number): void;
    static addRa(builder: flatbuffers.Builder, ra: number): void;
    static addRaRate(builder: flatbuffers.Builder, raRate: number): void;
    static addRaUnc(builder: flatbuffers.Builder, raUnc: number): void;
    static addRaBias(builder: flatbuffers.Builder, raBias: number): void;
    static addDeclination(builder: flatbuffers.Builder, declination: number): void;
    static addDeclinationRate(builder: flatbuffers.Builder, declinationRate: number): void;
    static addDeclinationUnc(builder: flatbuffers.Builder, declinationUnc: number): void;
    static addDeclinationBias(builder: flatbuffers.Builder, declinationBias: number): void;
    static addLosx(builder: flatbuffers.Builder, losx: number): void;
    static addLosy(builder: flatbuffers.Builder, losy: number): void;
    static addLosz(builder: flatbuffers.Builder, losz: number): void;
    static addLosUnc(builder: flatbuffers.Builder, losUnc: number): void;
    static addLosxvel(builder: flatbuffers.Builder, losxvel: number): void;
    static addLosyvel(builder: flatbuffers.Builder, losyvel: number): void;
    static addLoszvel(builder: flatbuffers.Builder, loszvel: number): void;
    static addSenlat(builder: flatbuffers.Builder, senlat: number): void;
    static addSenlon(builder: flatbuffers.Builder, senlon: number): void;
    static addSenalt(builder: flatbuffers.Builder, senalt: number): void;
    static addSenx(builder: flatbuffers.Builder, senx: number): void;
    static addSeny(builder: flatbuffers.Builder, seny: number): void;
    static addSenz(builder: flatbuffers.Builder, senz: number): void;
    static addFovCount(builder: flatbuffers.Builder, fovCount: number): void;
    static addExpDuration(builder: flatbuffers.Builder, expDuration: number): void;
    static addZeroptd(builder: flatbuffers.Builder, zeroptd: number): void;
    static addNetObjSig(builder: flatbuffers.Builder, netObjSig: number): void;
    static addNetObjSigUnc(builder: flatbuffers.Builder, netObjSigUnc: number): void;
    static addMag(builder: flatbuffers.Builder, mag: number): void;
    static addMagUnc(builder: flatbuffers.Builder, magUnc: number): void;
    static addMagNormRange(builder: flatbuffers.Builder, magNormRange: number): void;
    static addGeolat(builder: flatbuffers.Builder, geolat: number): void;
    static addGeolon(builder: flatbuffers.Builder, geolon: number): void;
    static addGeoalt(builder: flatbuffers.Builder, geoalt: number): void;
    static addGeorange(builder: flatbuffers.Builder, georange: number): void;
    static addSkyBkgrnd(builder: flatbuffers.Builder, skyBkgrnd: number): void;
    static addPrimaryExtinction(builder: flatbuffers.Builder, primaryExtinction: number): void;
    static addPrimaryExtinctionUnc(builder: flatbuffers.Builder, primaryExtinctionUnc: number): void;
    static addSolarPhaseAngle(builder: flatbuffers.Builder, solarPhaseAngle: number): void;
    static addSolarEqPhaseAngle(builder: flatbuffers.Builder, solarEqPhaseAngle: number): void;
    static addSolarDecAngle(builder: flatbuffers.Builder, solarDecAngle: number): void;
    static addShutterDelay(builder: flatbuffers.Builder, shutterDelay: number): void;
    static addTimingBias(builder: flatbuffers.Builder, timingBias: number): void;
    static addRawFileUri(builder: flatbuffers.Builder, rawFileUriOffset: flatbuffers.Offset): void;
    static addIntensity(builder: flatbuffers.Builder, intensity: number): void;
    static addBgIntensity(builder: flatbuffers.Builder, bgIntensity: number): void;
    static addDescriptor(builder: flatbuffers.Builder, descriptorOffset: flatbuffers.Offset): void;
    static addSource(builder: flatbuffers.Builder, sourceOffset: flatbuffers.Offset): void;
    static addOrigin(builder: flatbuffers.Builder, originOffset: flatbuffers.Offset): void;
    static addDataMode(builder: flatbuffers.Builder, dataModeOffset: flatbuffers.Offset): void;
    static addCreatedAt(builder: flatbuffers.Builder, createdAtOffset: flatbuffers.Offset): void;
    static addCreatedBy(builder: flatbuffers.Builder, createdByOffset: flatbuffers.Offset): void;
    static addReferenceFrame(builder: flatbuffers.Builder, referenceFrame: refFrame): void;
    static addSenReferenceFrame(builder: flatbuffers.Builder, senReferenceFrameOffset: flatbuffers.Offset): void;
    static addUmbra(builder: flatbuffers.Builder, umbra: boolean): void;
    static addPenumbra(builder: flatbuffers.Builder, penumbra: boolean): void;
    static addOrigNetwork(builder: flatbuffers.Builder, origNetworkOffset: flatbuffers.Offset): void;
    static addSourceDl(builder: flatbuffers.Builder, sourceDlOffset: flatbuffers.Offset): void;
    static addType(builder: flatbuffers.Builder, typeOffset: flatbuffers.Offset): void;
    static endEOO(builder: flatbuffers.Builder): flatbuffers.Offset;
    static finishEOOBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static finishSizePrefixedEOOBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static createEOO(builder: flatbuffers.Builder, eobservationIdOffset: flatbuffers.Offset, classificationOffset: flatbuffers.Offset, obTimeOffset: flatbuffers.Offset, corrQuality: number, idOnOrbitOffset: flatbuffers.Offset, sensorIdOffset: flatbuffers.Offset, collectMethodOffset: flatbuffers.Offset, noradCatId: number, taskIdOffset: flatbuffers.Offset, transactionIdOffset: flatbuffers.Offset, trackIdOffset: flatbuffers.Offset, obPositionOffset: flatbuffers.Offset, origObjectIdOffset: flatbuffers.Offset, origSensorIdOffset: flatbuffers.Offset, uct: boolean, azimuth: number, azimuthUnc: number, azimuthBias: number, azimuthRate: number, elevation: number, elevationUnc: number, elevationBias: number, elevationRate: number, range: number, rangeUnc: number, rangeBias: number, rangeRate: number, rangeRateUnc: number, ra: number, raRate: number, raUnc: number, raBias: number, declination: number, declinationRate: number, declinationUnc: number, declinationBias: number, losx: number, losy: number, losz: number, losUnc: number, losxvel: number, losyvel: number, loszvel: number, senlat: number, senlon: number, senalt: number, senx: number, seny: number, senz: number, fovCount: number, expDuration: number, zeroptd: number, netObjSig: number, netObjSigUnc: number, mag: number, magUnc: number, magNormRange: number, geolat: number, geolon: number, geoalt: number, georange: number, skyBkgrnd: number, primaryExtinction: number, primaryExtinctionUnc: number, solarPhaseAngle: number, solarEqPhaseAngle: number, solarDecAngle: number, shutterDelay: number, timingBias: number, rawFileUriOffset: flatbuffers.Offset, intensity: number, bgIntensity: number, descriptorOffset: flatbuffers.Offset, sourceOffset: flatbuffers.Offset, originOffset: flatbuffers.Offset, dataModeOffset: flatbuffers.Offset, createdAtOffset: flatbuffers.Offset, createdByOffset: flatbuffers.Offset, referenceFrame: refFrame, senReferenceFrameOffset: flatbuffers.Offset, umbra: boolean, penumbra: boolean, origNetworkOffset: flatbuffers.Offset, sourceDlOffset: flatbuffers.Offset, typeOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): EOOT;
    unpackTo(_o: EOOT): void;
}
export declare class EOOT implements flatbuffers.IGeneratedObject {
    eobservationId: string | Uint8Array | null;
    classification: string | Uint8Array | null;
    obTime: string | Uint8Array | null;
    corrQuality: number;
    idOnOrbit: string | Uint8Array | null;
    sensorId: string | Uint8Array | null;
    collectMethod: string | Uint8Array | null;
    noradCatId: number;
    taskId: string | Uint8Array | null;
    transactionId: string | Uint8Array | null;
    trackId: string | Uint8Array | null;
    obPosition: string | Uint8Array | null;
    origObjectId: string | Uint8Array | null;
    origSensorId: string | Uint8Array | null;
    uct: boolean;
    azimuth: number;
    azimuthUnc: number;
    azimuthBias: number;
    azimuthRate: number;
    elevation: number;
    elevationUnc: number;
    elevationBias: number;
    elevationRate: number;
    range: number;
    rangeUnc: number;
    rangeBias: number;
    rangeRate: number;
    rangeRateUnc: number;
    ra: number;
    raRate: number;
    raUnc: number;
    raBias: number;
    declination: number;
    declinationRate: number;
    declinationUnc: number;
    declinationBias: number;
    losx: number;
    losy: number;
    losz: number;
    losUnc: number;
    losxvel: number;
    losyvel: number;
    loszvel: number;
    senlat: number;
    senlon: number;
    senalt: number;
    senx: number;
    seny: number;
    senz: number;
    fovCount: number;
    expDuration: number;
    zeroptd: number;
    netObjSig: number;
    netObjSigUnc: number;
    mag: number;
    magUnc: number;
    magNormRange: number;
    geolat: number;
    geolon: number;
    geoalt: number;
    georange: number;
    skyBkgrnd: number;
    primaryExtinction: number;
    primaryExtinctionUnc: number;
    solarPhaseAngle: number;
    solarEqPhaseAngle: number;
    solarDecAngle: number;
    shutterDelay: number;
    timingBias: number;
    rawFileUri: string | Uint8Array | null;
    intensity: number;
    bgIntensity: number;
    descriptor: string | Uint8Array | null;
    source: string | Uint8Array | null;
    origin: string | Uint8Array | null;
    dataMode: string | Uint8Array | null;
    createdAt: string | Uint8Array | null;
    createdBy: string | Uint8Array | null;
    referenceFrame: refFrame;
    senReferenceFrame: string | Uint8Array | null;
    umbra: boolean;
    penumbra: boolean;
    origNetwork: string | Uint8Array | null;
    sourceDl: string | Uint8Array | null;
    type: string | Uint8Array | null;
    constructor(eobservationId?: string | Uint8Array | null, classification?: string | Uint8Array | null, obTime?: string | Uint8Array | null, corrQuality?: number, idOnOrbit?: string | Uint8Array | null, sensorId?: string | Uint8Array | null, collectMethod?: string | Uint8Array | null, noradCatId?: number, taskId?: string | Uint8Array | null, transactionId?: string | Uint8Array | null, trackId?: string | Uint8Array | null, obPosition?: string | Uint8Array | null, origObjectId?: string | Uint8Array | null, origSensorId?: string | Uint8Array | null, uct?: boolean, azimuth?: number, azimuthUnc?: number, azimuthBias?: number, azimuthRate?: number, elevation?: number, elevationUnc?: number, elevationBias?: number, elevationRate?: number, range?: number, rangeUnc?: number, rangeBias?: number, rangeRate?: number, rangeRateUnc?: number, ra?: number, raRate?: number, raUnc?: number, raBias?: number, declination?: number, declinationRate?: number, declinationUnc?: number, declinationBias?: number, losx?: number, losy?: number, losz?: number, losUnc?: number, losxvel?: number, losyvel?: number, loszvel?: number, senlat?: number, senlon?: number, senalt?: number, senx?: number, seny?: number, senz?: number, fovCount?: number, expDuration?: number, zeroptd?: number, netObjSig?: number, netObjSigUnc?: number, mag?: number, magUnc?: number, magNormRange?: number, geolat?: number, geolon?: number, geoalt?: number, georange?: number, skyBkgrnd?: number, primaryExtinction?: number, primaryExtinctionUnc?: number, solarPhaseAngle?: number, solarEqPhaseAngle?: number, solarDecAngle?: number, shutterDelay?: number, timingBias?: number, rawFileUri?: string | Uint8Array | null, intensity?: number, bgIntensity?: number, descriptor?: string | Uint8Array | null, source?: string | Uint8Array | null, origin?: string | Uint8Array | null, dataMode?: string | Uint8Array | null, createdAt?: string | Uint8Array | null, createdBy?: string | Uint8Array | null, referenceFrame?: refFrame, senReferenceFrame?: string | Uint8Array | null, umbra?: boolean, penumbra?: boolean, origNetwork?: string | Uint8Array | null, sourceDl?: string | Uint8Array | null, type?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=eoo.d.ts.map