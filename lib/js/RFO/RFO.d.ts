import * as flatbuffers from 'flatbuffers';
import { rfDetectionStatus } from './rfDetectionStatus.js';
import { rfObsType } from './rfObsType.js';
/**
 * RF Observation
 */
export declare class RFO implements flatbuffers.IUnpackableObject<RFOT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): RFO;
    static getRootAsRFO(bb: flatbuffers.ByteBuffer, obj?: RFO): RFO;
    static getSizePrefixedRootAsRFO(bb: flatbuffers.ByteBuffer, obj?: RFO): RFO;
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
     * Observation type
     */
    OBS_TYPE(): rfObsType;
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
     * Transponder identifier
     */
    TRANSPONDER(): string | null;
    TRANSPONDER(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Detection status
     */
    DETECTION_STATUS(): rfDetectionStatus;
    /**
     * Azimuth angle (degrees)
     */
    AZIMUTH(): number;
    /**
     * Azimuth uncertainty (degrees, 1-sigma)
     */
    AZIMUTH_UNC(): number;
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
     * Range rate (km/s)
     */
    RANGE_RATE(): number;
    /**
     * Range rate uncertainty (km/s, 1-sigma)
     */
    RANGE_RATE_UNC(): number;
    /**
     * Track range (km)
     */
    TRACK_RANGE(): number;
    /**
     * Sensor latitude (degrees)
     */
    SENLAT(): number;
    /**
     * Sensor longitude (degrees)
     */
    SENLON(): number;
    /**
     * Sensor altitude (km)
     */
    SENALT(): number;
    /**
     * ELNOT (Electronic Intelligence Notation)
     */
    ELNOT(): string | null;
    ELNOT(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Antenna name
     */
    ANTENNA_NAME(): string | null;
    ANTENNA_NAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Collection mode
     */
    COLLECTION_MODE(): string | null;
    COLLECTION_MODE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Measured center frequency (MHz)
     */
    FREQUENCY(): number;
    /**
     * Nominal center frequency (MHz)
     */
    NOMINAL_FREQUENCY(): number;
    /**
     * Start frequency of emission (MHz)
     */
    START_FREQUENCY(): number;
    /**
     * End frequency of emission (MHz)
     */
    END_FREQUENCY(): number;
    /**
     * Frequency shift from nominal (MHz)
     */
    FREQUENCY_SHIFT(): number;
    /**
     * Measured bandwidth (MHz)
     */
    BANDWIDTH(): number;
    /**
     * Nominal bandwidth (MHz)
     */
    NOMINAL_BANDWIDTH(): number;
    /**
     * Resolution bandwidth (MHz)
     */
    RESOLUTION_BANDWIDTH(): number;
    /**
     * Video bandwidth (MHz)
     */
    VIDEO_BANDWIDTH(): number;
    /**
     * Relative carrier power (dBm)
     */
    RELATIVE_CARRIER_POWER(): number;
    /**
     * Spectrum analyzer power (dBm)
     */
    SPECTRUM_ANALYZER_POWER(): number;
    /**
     * Relative noise floor (dBm)
     */
    RELATIVE_NOISE_FLOOR(): number;
    /**
     * Reference level (dBm)
     */
    REFERENCE_LEVEL(): number;
    /**
     * Noise power density (dBm/Hz)
     */
    NOISE_PWR_DENSITY(): number;
    /**
     * PGRI (Pulse Group Repetition Interval, microseconds)
     */
    PGRI(): number;
    /**
     * Effective isotropic radiated power (dBW)
     */
    EIRP(): number;
    /**
     * Nominal EIRP (dBW)
     */
    NOMINAL_EIRP(): number;
    /**
     * Minimum power spectral density (dBm/Hz)
     */
    MIN_PSD(): number;
    /**
     * Maximum power spectral density (dBm/Hz)
     */
    MAX_PSD(): number;
    /**
     * Signal-to-noise ratio (dB)
     */
    SNR(): number;
    /**
     * Nominal SNR (dB)
     */
    NOMINAL_SNR(): number;
    /**
     * Power over noise (dB)
     */
    POWER_OVER_NOISE(): number;
    /**
     * Nominal power over noise (dB)
     */
    NOMINAL_POWER_OVER_NOISE(): number;
    /**
     * Polarity angle (degrees)
     */
    POLARITY(): number;
    /**
     * Polarization type (e.g., LHCP, RHCP, LINEAR)
     */
    POLARITY_TYPE(): string | null;
    POLARITY_TYPE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Channel number
     */
    CHANNEL(): number;
    /**
     * Baud rate (symbols/s)
     */
    BAUD_RATE(): number;
    /**
     * Symbol-to-noise ratio (dB)
     */
    SYMBOL_TO_NOISE_RATIO(): number;
    /**
     * Bit error rate
     */
    BIT_ERROR_RATE(): number;
    /**
     * True if peak measurement
     */
    PEAK(): boolean;
    /**
     * True if incoming signal
     */
    INCOMING(): boolean;
    /**
     * Switch point number
     */
    SWITCH_POINT(): number;
    /**
     * Confidence score (0-1)
     */
    CONFIDENCE(): number;
    /**
     * Carrier standard (e.g., DVB-S, DVB-S2)
     */
    CARRIER_STANDARD(): string | null;
    CARRIER_STANDARD(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Modulation type
     */
    MODULATION(): string | null;
    MODULATION(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Inner FEC coding rate denominator
     */
    INNER_CODING_RATE(): number;
    /**
     * Outer FEC coding rate denominator
     */
    OUTER_CODING_RATE(): number;
    /**
     * Transmit filter type
     */
    TRANSMIT_FILTER_TYPE(): string | null;
    TRANSMIT_FILTER_TYPE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Transmit filter roll-off factor
     */
    TRANSMIT_FILTER_ROLL_OFF(): number;
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
     * Reference URL
     */
    URL(): string | null;
    URL(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Associated tags
     */
    TAGS(index: number): string;
    TAGS(index: number, optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    tagsLength(): number;
    static startRFO(builder: flatbuffers.Builder): void;
    static addId(builder: flatbuffers.Builder, IDOffset: flatbuffers.Offset): void;
    static addObTime(builder: flatbuffers.Builder, OB_TIMEOffset: flatbuffers.Offset): void;
    static addIdSensor(builder: flatbuffers.Builder, ID_SENSOROffset: flatbuffers.Offset): void;
    static addOrigSensorId(builder: flatbuffers.Builder, ORIG_SENSOR_IDOffset: flatbuffers.Offset): void;
    static addObsType(builder: flatbuffers.Builder, OBS_TYPE: rfObsType): void;
    static addSatNo(builder: flatbuffers.Builder, SAT_NO: number): void;
    static addOrigObjectId(builder: flatbuffers.Builder, ORIG_OBJECT_IDOffset: flatbuffers.Offset): void;
    static addOnOrbit(builder: flatbuffers.Builder, ON_ORBITOffset: flatbuffers.Offset): void;
    static addUct(builder: flatbuffers.Builder, UCT: boolean): void;
    static addTaskId(builder: flatbuffers.Builder, TASK_IDOffset: flatbuffers.Offset): void;
    static addTransactionId(builder: flatbuffers.Builder, TRANSACTION_IDOffset: flatbuffers.Offset): void;
    static addTrackId(builder: flatbuffers.Builder, TRACK_IDOffset: flatbuffers.Offset): void;
    static addTransponder(builder: flatbuffers.Builder, TRANSPONDEROffset: flatbuffers.Offset): void;
    static addDetectionStatus(builder: flatbuffers.Builder, DETECTION_STATUS: rfDetectionStatus): void;
    static addAzimuth(builder: flatbuffers.Builder, AZIMUTH: number): void;
    static addAzimuthUnc(builder: flatbuffers.Builder, AZIMUTH_UNC: number): void;
    static addAzimuthRate(builder: flatbuffers.Builder, AZIMUTH_RATE: number): void;
    static addElevation(builder: flatbuffers.Builder, ELEVATION: number): void;
    static addElevationUnc(builder: flatbuffers.Builder, ELEVATION_UNC: number): void;
    static addElevationRate(builder: flatbuffers.Builder, ELEVATION_RATE: number): void;
    static addRange(builder: flatbuffers.Builder, RANGE: number): void;
    static addRangeUnc(builder: flatbuffers.Builder, RANGE_UNC: number): void;
    static addRangeRate(builder: flatbuffers.Builder, RANGE_RATE: number): void;
    static addRangeRateUnc(builder: flatbuffers.Builder, RANGE_RATE_UNC: number): void;
    static addTrackRange(builder: flatbuffers.Builder, TRACK_RANGE: number): void;
    static addSenlat(builder: flatbuffers.Builder, SENLAT: number): void;
    static addSenlon(builder: flatbuffers.Builder, SENLON: number): void;
    static addSenalt(builder: flatbuffers.Builder, SENALT: number): void;
    static addElnot(builder: flatbuffers.Builder, ELNOTOffset: flatbuffers.Offset): void;
    static addAntennaName(builder: flatbuffers.Builder, ANTENNA_NAMEOffset: flatbuffers.Offset): void;
    static addCollectionMode(builder: flatbuffers.Builder, COLLECTION_MODEOffset: flatbuffers.Offset): void;
    static addFrequency(builder: flatbuffers.Builder, FREQUENCY: number): void;
    static addNominalFrequency(builder: flatbuffers.Builder, NOMINAL_FREQUENCY: number): void;
    static addStartFrequency(builder: flatbuffers.Builder, START_FREQUENCY: number): void;
    static addEndFrequency(builder: flatbuffers.Builder, END_FREQUENCY: number): void;
    static addFrequencyShift(builder: flatbuffers.Builder, FREQUENCY_SHIFT: number): void;
    static addBandwidth(builder: flatbuffers.Builder, BANDWIDTH: number): void;
    static addNominalBandwidth(builder: flatbuffers.Builder, NOMINAL_BANDWIDTH: number): void;
    static addResolutionBandwidth(builder: flatbuffers.Builder, RESOLUTION_BANDWIDTH: number): void;
    static addVideoBandwidth(builder: flatbuffers.Builder, VIDEO_BANDWIDTH: number): void;
    static addRelativeCarrierPower(builder: flatbuffers.Builder, RELATIVE_CARRIER_POWER: number): void;
    static addSpectrumAnalyzerPower(builder: flatbuffers.Builder, SPECTRUM_ANALYZER_POWER: number): void;
    static addRelativeNoiseFloor(builder: flatbuffers.Builder, RELATIVE_NOISE_FLOOR: number): void;
    static addReferenceLevel(builder: flatbuffers.Builder, REFERENCE_LEVEL: number): void;
    static addNoisePwrDensity(builder: flatbuffers.Builder, NOISE_PWR_DENSITY: number): void;
    static addPgri(builder: flatbuffers.Builder, PGRI: number): void;
    static addEirp(builder: flatbuffers.Builder, EIRP: number): void;
    static addNominalEirp(builder: flatbuffers.Builder, NOMINAL_EIRP: number): void;
    static addMinPsd(builder: flatbuffers.Builder, MIN_PSD: number): void;
    static addMaxPsd(builder: flatbuffers.Builder, MAX_PSD: number): void;
    static addSnr(builder: flatbuffers.Builder, SNR: number): void;
    static addNominalSnr(builder: flatbuffers.Builder, NOMINAL_SNR: number): void;
    static addPowerOverNoise(builder: flatbuffers.Builder, POWER_OVER_NOISE: number): void;
    static addNominalPowerOverNoise(builder: flatbuffers.Builder, NOMINAL_POWER_OVER_NOISE: number): void;
    static addPolarity(builder: flatbuffers.Builder, POLARITY: number): void;
    static addPolarityType(builder: flatbuffers.Builder, POLARITY_TYPEOffset: flatbuffers.Offset): void;
    static addChannel(builder: flatbuffers.Builder, CHANNEL: number): void;
    static addBaudRate(builder: flatbuffers.Builder, BAUD_RATE: number): void;
    static addSymbolToNoiseRatio(builder: flatbuffers.Builder, SYMBOL_TO_NOISE_RATIO: number): void;
    static addBitErrorRate(builder: flatbuffers.Builder, BIT_ERROR_RATE: number): void;
    static addPeak(builder: flatbuffers.Builder, PEAK: boolean): void;
    static addIncoming(builder: flatbuffers.Builder, INCOMING: boolean): void;
    static addSwitchPoint(builder: flatbuffers.Builder, SWITCH_POINT: number): void;
    static addConfidence(builder: flatbuffers.Builder, CONFIDENCE: number): void;
    static addCarrierStandard(builder: flatbuffers.Builder, CARRIER_STANDARDOffset: flatbuffers.Offset): void;
    static addModulation(builder: flatbuffers.Builder, MODULATIONOffset: flatbuffers.Offset): void;
    static addInnerCodingRate(builder: flatbuffers.Builder, INNER_CODING_RATE: number): void;
    static addOuterCodingRate(builder: flatbuffers.Builder, OUTER_CODING_RATE: number): void;
    static addTransmitFilterType(builder: flatbuffers.Builder, TRANSMIT_FILTER_TYPEOffset: flatbuffers.Offset): void;
    static addTransmitFilterRollOff(builder: flatbuffers.Builder, TRANSMIT_FILTER_ROLL_OFF: number): void;
    static addRawFileUri(builder: flatbuffers.Builder, RAW_FILE_URIOffset: flatbuffers.Offset): void;
    static addDescriptor(builder: flatbuffers.Builder, DESCRIPTOROffset: flatbuffers.Offset): void;
    static addUrl(builder: flatbuffers.Builder, URLOffset: flatbuffers.Offset): void;
    static addTags(builder: flatbuffers.Builder, TAGSOffset: flatbuffers.Offset): void;
    static createTagsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startTagsVector(builder: flatbuffers.Builder, numElems: number): void;
    static endRFO(builder: flatbuffers.Builder): flatbuffers.Offset;
    static finishRFOBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static finishSizePrefixedRFOBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static createRFO(builder: flatbuffers.Builder, IDOffset: flatbuffers.Offset, OB_TIMEOffset: flatbuffers.Offset, ID_SENSOROffset: flatbuffers.Offset, ORIG_SENSOR_IDOffset: flatbuffers.Offset, OBS_TYPE: rfObsType, SAT_NO: number, ORIG_OBJECT_IDOffset: flatbuffers.Offset, ON_ORBITOffset: flatbuffers.Offset, UCT: boolean, TASK_IDOffset: flatbuffers.Offset, TRANSACTION_IDOffset: flatbuffers.Offset, TRACK_IDOffset: flatbuffers.Offset, TRANSPONDEROffset: flatbuffers.Offset, DETECTION_STATUS: rfDetectionStatus, AZIMUTH: number, AZIMUTH_UNC: number, AZIMUTH_RATE: number, ELEVATION: number, ELEVATION_UNC: number, ELEVATION_RATE: number, RANGE: number, RANGE_UNC: number, RANGE_RATE: number, RANGE_RATE_UNC: number, TRACK_RANGE: number, SENLAT: number, SENLON: number, SENALT: number, ELNOTOffset: flatbuffers.Offset, ANTENNA_NAMEOffset: flatbuffers.Offset, COLLECTION_MODEOffset: flatbuffers.Offset, FREQUENCY: number, NOMINAL_FREQUENCY: number, START_FREQUENCY: number, END_FREQUENCY: number, FREQUENCY_SHIFT: number, BANDWIDTH: number, NOMINAL_BANDWIDTH: number, RESOLUTION_BANDWIDTH: number, VIDEO_BANDWIDTH: number, RELATIVE_CARRIER_POWER: number, SPECTRUM_ANALYZER_POWER: number, RELATIVE_NOISE_FLOOR: number, REFERENCE_LEVEL: number, NOISE_PWR_DENSITY: number, PGRI: number, EIRP: number, NOMINAL_EIRP: number, MIN_PSD: number, MAX_PSD: number, SNR: number, NOMINAL_SNR: number, POWER_OVER_NOISE: number, NOMINAL_POWER_OVER_NOISE: number, POLARITY: number, POLARITY_TYPEOffset: flatbuffers.Offset, CHANNEL: number, BAUD_RATE: number, SYMBOL_TO_NOISE_RATIO: number, BIT_ERROR_RATE: number, PEAK: boolean, INCOMING: boolean, SWITCH_POINT: number, CONFIDENCE: number, CARRIER_STANDARDOffset: flatbuffers.Offset, MODULATIONOffset: flatbuffers.Offset, INNER_CODING_RATE: number, OUTER_CODING_RATE: number, TRANSMIT_FILTER_TYPEOffset: flatbuffers.Offset, TRANSMIT_FILTER_ROLL_OFF: number, RAW_FILE_URIOffset: flatbuffers.Offset, DESCRIPTOROffset: flatbuffers.Offset, URLOffset: flatbuffers.Offset, TAGSOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): RFOT;
    unpackTo(_o: RFOT): void;
}
export declare class RFOT implements flatbuffers.IGeneratedObject {
    ID: string | Uint8Array | null;
    OB_TIME: string | Uint8Array | null;
    ID_SENSOR: string | Uint8Array | null;
    ORIG_SENSOR_ID: string | Uint8Array | null;
    OBS_TYPE: rfObsType;
    SAT_NO: number;
    ORIG_OBJECT_ID: string | Uint8Array | null;
    ON_ORBIT: string | Uint8Array | null;
    UCT: boolean;
    TASK_ID: string | Uint8Array | null;
    TRANSACTION_ID: string | Uint8Array | null;
    TRACK_ID: string | Uint8Array | null;
    TRANSPONDER: string | Uint8Array | null;
    DETECTION_STATUS: rfDetectionStatus;
    AZIMUTH: number;
    AZIMUTH_UNC: number;
    AZIMUTH_RATE: number;
    ELEVATION: number;
    ELEVATION_UNC: number;
    ELEVATION_RATE: number;
    RANGE: number;
    RANGE_UNC: number;
    RANGE_RATE: number;
    RANGE_RATE_UNC: number;
    TRACK_RANGE: number;
    SENLAT: number;
    SENLON: number;
    SENALT: number;
    ELNOT: string | Uint8Array | null;
    ANTENNA_NAME: string | Uint8Array | null;
    COLLECTION_MODE: string | Uint8Array | null;
    FREQUENCY: number;
    NOMINAL_FREQUENCY: number;
    START_FREQUENCY: number;
    END_FREQUENCY: number;
    FREQUENCY_SHIFT: number;
    BANDWIDTH: number;
    NOMINAL_BANDWIDTH: number;
    RESOLUTION_BANDWIDTH: number;
    VIDEO_BANDWIDTH: number;
    RELATIVE_CARRIER_POWER: number;
    SPECTRUM_ANALYZER_POWER: number;
    RELATIVE_NOISE_FLOOR: number;
    REFERENCE_LEVEL: number;
    NOISE_PWR_DENSITY: number;
    PGRI: number;
    EIRP: number;
    NOMINAL_EIRP: number;
    MIN_PSD: number;
    MAX_PSD: number;
    SNR: number;
    NOMINAL_SNR: number;
    POWER_OVER_NOISE: number;
    NOMINAL_POWER_OVER_NOISE: number;
    POLARITY: number;
    POLARITY_TYPE: string | Uint8Array | null;
    CHANNEL: number;
    BAUD_RATE: number;
    SYMBOL_TO_NOISE_RATIO: number;
    BIT_ERROR_RATE: number;
    PEAK: boolean;
    INCOMING: boolean;
    SWITCH_POINT: number;
    CONFIDENCE: number;
    CARRIER_STANDARD: string | Uint8Array | null;
    MODULATION: string | Uint8Array | null;
    INNER_CODING_RATE: number;
    OUTER_CODING_RATE: number;
    TRANSMIT_FILTER_TYPE: string | Uint8Array | null;
    TRANSMIT_FILTER_ROLL_OFF: number;
    RAW_FILE_URI: string | Uint8Array | null;
    DESCRIPTOR: string | Uint8Array | null;
    URL: string | Uint8Array | null;
    TAGS: (string)[];
    constructor(ID?: string | Uint8Array | null, OB_TIME?: string | Uint8Array | null, ID_SENSOR?: string | Uint8Array | null, ORIG_SENSOR_ID?: string | Uint8Array | null, OBS_TYPE?: rfObsType, SAT_NO?: number, ORIG_OBJECT_ID?: string | Uint8Array | null, ON_ORBIT?: string | Uint8Array | null, UCT?: boolean, TASK_ID?: string | Uint8Array | null, TRANSACTION_ID?: string | Uint8Array | null, TRACK_ID?: string | Uint8Array | null, TRANSPONDER?: string | Uint8Array | null, DETECTION_STATUS?: rfDetectionStatus, AZIMUTH?: number, AZIMUTH_UNC?: number, AZIMUTH_RATE?: number, ELEVATION?: number, ELEVATION_UNC?: number, ELEVATION_RATE?: number, RANGE?: number, RANGE_UNC?: number, RANGE_RATE?: number, RANGE_RATE_UNC?: number, TRACK_RANGE?: number, SENLAT?: number, SENLON?: number, SENALT?: number, ELNOT?: string | Uint8Array | null, ANTENNA_NAME?: string | Uint8Array | null, COLLECTION_MODE?: string | Uint8Array | null, FREQUENCY?: number, NOMINAL_FREQUENCY?: number, START_FREQUENCY?: number, END_FREQUENCY?: number, FREQUENCY_SHIFT?: number, BANDWIDTH?: number, NOMINAL_BANDWIDTH?: number, RESOLUTION_BANDWIDTH?: number, VIDEO_BANDWIDTH?: number, RELATIVE_CARRIER_POWER?: number, SPECTRUM_ANALYZER_POWER?: number, RELATIVE_NOISE_FLOOR?: number, REFERENCE_LEVEL?: number, NOISE_PWR_DENSITY?: number, PGRI?: number, EIRP?: number, NOMINAL_EIRP?: number, MIN_PSD?: number, MAX_PSD?: number, SNR?: number, NOMINAL_SNR?: number, POWER_OVER_NOISE?: number, NOMINAL_POWER_OVER_NOISE?: number, POLARITY?: number, POLARITY_TYPE?: string | Uint8Array | null, CHANNEL?: number, BAUD_RATE?: number, SYMBOL_TO_NOISE_RATIO?: number, BIT_ERROR_RATE?: number, PEAK?: boolean, INCOMING?: boolean, SWITCH_POINT?: number, CONFIDENCE?: number, CARRIER_STANDARD?: string | Uint8Array | null, MODULATION?: string | Uint8Array | null, INNER_CODING_RATE?: number, OUTER_CODING_RATE?: number, TRANSMIT_FILTER_TYPE?: string | Uint8Array | null, TRANSMIT_FILTER_ROLL_OFF?: number, RAW_FILE_URI?: string | Uint8Array | null, DESCRIPTOR?: string | Uint8Array | null, URL?: string | Uint8Array | null, TAGS?: (string)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=RFO.d.ts.map