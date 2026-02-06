import * as flatbuffers from 'flatbuffers';
import { sarMode } from './sarMode.js';
import { sarPolarization } from './sarPolarization.js';
/**
 * SAR Observation
 */
export declare class SAR implements flatbuffers.IUnpackableObject<SART> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): SAR;
    static getRootAsSAR(bb: flatbuffers.ByteBuffer, obj?: SAR): SAR;
    static getSizePrefixedRootAsSAR(bb: flatbuffers.ByteBuffer, obj?: SAR): SAR;
    static bufferHasIdentifier(bb: flatbuffers.ByteBuffer): boolean;
    /**
     * Unique identifier
     */
    ID(): string | null;
    ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Satellite catalog number (of SAR platform)
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
     * External reference identifier
     */
    EXTERNAL_ID(): string | null;
    EXTERNAL_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Collection identifier
     */
    COLLECTION_ID(): string | null;
    COLLECTION_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Detection identifier
     */
    DETECTION_ID(): string | null;
    DETECTION_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Collection start time (ISO 8601)
     */
    COLLECTION_START(): string | null;
    COLLECTION_START(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Collection end time (ISO 8601)
     */
    COLLECTION_END(): string | null;
    COLLECTION_END(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Center time of observation (ISO 8601)
     */
    CENTER_TIME(): string | null;
    CENTER_TIME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Detection start time (ISO 8601)
     */
    DETECTION_START(): string | null;
    DETECTION_START(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Detection end time (ISO 8601)
     */
    DETECTION_END(): string | null;
    DETECTION_END(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Integration/dwell time (seconds)
     */
    DWELL_TIME(): number;
    /**
     * Orbit state description
     */
    ORBIT_STATE(): string | null;
    ORBIT_STATE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * SAR imaging mode
     */
    SAR_MODE(): sarMode;
    /**
     * Operating RF band (e.g., X, C, L, S, P)
     */
    OPERATING_BAND(): string | null;
    OPERATING_BAND(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Operating frequency (GHz)
     */
    OPERATING_FREQ(): number;
    /**
     * Signal-to-noise ratio (dB)
     */
    SNR(): number;
    /**
     * Transmit polarization
     */
    TX_POLARIZATION(): sarPolarization;
    /**
     * Receive polarization
     */
    RX_POLARIZATION(): sarPolarization;
    /**
     * Grazing angle (degrees)
     */
    GRAZE_ANGLE(): number;
    /**
     * Incidence angle (degrees)
     */
    INCIDENCE_ANGLE(): number;
    /**
     * Squint angle (degrees)
     */
    SQUINT_ANGLE(): number;
    /**
     * Pulse bandwidth (MHz)
     */
    PULSE_BANDWIDTH(): number;
    /**
     * Pulse duration (microseconds)
     */
    PULSE_DURATION(): number;
    /**
     * Continuous spot angle (degrees)
     */
    CONTINUOUS_SPOT_ANGLE(): number;
    /**
     * Slant range to target (km)
     */
    SLANT_RANGE(): number;
    /**
     * Near range (km)
     */
    NEAR_RANGE(): number;
    /**
     * Far range (km)
     */
    FAR_RANGE(): number;
    /**
     * Swath length (km)
     */
    SWATH_LENGTH(): number;
    /**
     * Image area GeoJSON
     */
    AGJSON(): string | null;
    AGJSON(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Image area text description
     */
    ATEXT(): string | null;
    ATEXT(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Area type
     */
    ATYPE(): string | null;
    ATYPE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Coordinate system
     */
    COORD_SYS(): string | null;
    COORD_SYS(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Range pixel spacing (meters)
     */
    SPACING_RANGE(): number;
    /**
     * Azimuth pixel spacing (meters)
     */
    SPACING_AZIMUTH(): number;
    /**
     * Number of azimuth looks
     */
    LOOKS_AZIMUTH(): number;
    /**
     * Number of range looks
     */
    LOOKS_RANGE(): number;
    /**
     * Range resolution (meters)
     */
    RESOLUTION_RANGE(): number;
    /**
     * Azimuth resolution (meters)
     */
    RESOLUTION_AZIMUTH(): number;
    /**
     * Observation direction (ASCENDING/DESCENDING)
     */
    OB_DIRECTION(): string | null;
    OB_DIRECTION(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Target position X (km)
     */
    TARGETPOSX(): number;
    /**
     * Target position Y (km)
     */
    TARGETPOSY(): number;
    /**
     * Target position Z (km)
     */
    TARGETPOSZ(): number;
    /**
     * Sensor altitude (km)
     */
    SENALT(): number;
    /**
     * Sensor velocity X (km/s)
     */
    SENVELX(): number;
    /**
     * Sensor velocity Y (km/s)
     */
    SENVELY(): number;
    /**
     * Sensor velocity Z (km/s)
     */
    SENVELZ(): number;
    /**
     * Sensor latitude at start (degrees)
     */
    SENLAT_START(): number;
    /**
     * Sensor longitude at start (degrees)
     */
    SENLON_START(): number;
    /**
     * Sensor latitude at end (degrees)
     */
    SENLAT_END(): number;
    /**
     * Sensor longitude at end (degrees)
     */
    SENLON_END(): number;
    /**
     * Transaction identifier
     */
    TRANSACTION_ID(): string | null;
    TRANSACTION_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Associated tags
     */
    TAGS(index: number): string;
    TAGS(index: number, optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    tagsLength(): number;
    /**
     * Source types
     */
    SRC_TYPS(index: number): string;
    SRC_TYPS(index: number, optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    srcTypsLength(): number;
    /**
     * Source identifiers
     */
    SRC_IDS(index: number): string;
    SRC_IDS(index: number, optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    srcIdsLength(): number;
    static startSAR(builder: flatbuffers.Builder): void;
    static addId(builder: flatbuffers.Builder, IDOffset: flatbuffers.Offset): void;
    static addSatNo(builder: flatbuffers.Builder, SAT_NO: number): void;
    static addOrigObjectId(builder: flatbuffers.Builder, ORIG_OBJECT_IDOffset: flatbuffers.Offset): void;
    static addOnOrbit(builder: flatbuffers.Builder, ON_ORBITOffset: flatbuffers.Offset): void;
    static addIdSensor(builder: flatbuffers.Builder, ID_SENSOROffset: flatbuffers.Offset): void;
    static addOrigSensorId(builder: flatbuffers.Builder, ORIG_SENSOR_IDOffset: flatbuffers.Offset): void;
    static addExternalId(builder: flatbuffers.Builder, EXTERNAL_IDOffset: flatbuffers.Offset): void;
    static addCollectionId(builder: flatbuffers.Builder, COLLECTION_IDOffset: flatbuffers.Offset): void;
    static addDetectionId(builder: flatbuffers.Builder, DETECTION_IDOffset: flatbuffers.Offset): void;
    static addCollectionStart(builder: flatbuffers.Builder, COLLECTION_STARTOffset: flatbuffers.Offset): void;
    static addCollectionEnd(builder: flatbuffers.Builder, COLLECTION_ENDOffset: flatbuffers.Offset): void;
    static addCenterTime(builder: flatbuffers.Builder, CENTER_TIMEOffset: flatbuffers.Offset): void;
    static addDetectionStart(builder: flatbuffers.Builder, DETECTION_STARTOffset: flatbuffers.Offset): void;
    static addDetectionEnd(builder: flatbuffers.Builder, DETECTION_ENDOffset: flatbuffers.Offset): void;
    static addDwellTime(builder: flatbuffers.Builder, DWELL_TIME: number): void;
    static addOrbitState(builder: flatbuffers.Builder, ORBIT_STATEOffset: flatbuffers.Offset): void;
    static addSarMode(builder: flatbuffers.Builder, SAR_MODE: sarMode): void;
    static addOperatingBand(builder: flatbuffers.Builder, OPERATING_BANDOffset: flatbuffers.Offset): void;
    static addOperatingFreq(builder: flatbuffers.Builder, OPERATING_FREQ: number): void;
    static addSnr(builder: flatbuffers.Builder, SNR: number): void;
    static addTxPolarization(builder: flatbuffers.Builder, TX_POLARIZATION: sarPolarization): void;
    static addRxPolarization(builder: flatbuffers.Builder, RX_POLARIZATION: sarPolarization): void;
    static addGrazeAngle(builder: flatbuffers.Builder, GRAZE_ANGLE: number): void;
    static addIncidenceAngle(builder: flatbuffers.Builder, INCIDENCE_ANGLE: number): void;
    static addSquintAngle(builder: flatbuffers.Builder, SQUINT_ANGLE: number): void;
    static addPulseBandwidth(builder: flatbuffers.Builder, PULSE_BANDWIDTH: number): void;
    static addPulseDuration(builder: flatbuffers.Builder, PULSE_DURATION: number): void;
    static addContinuousSpotAngle(builder: flatbuffers.Builder, CONTINUOUS_SPOT_ANGLE: number): void;
    static addSlantRange(builder: flatbuffers.Builder, SLANT_RANGE: number): void;
    static addNearRange(builder: flatbuffers.Builder, NEAR_RANGE: number): void;
    static addFarRange(builder: flatbuffers.Builder, FAR_RANGE: number): void;
    static addSwathLength(builder: flatbuffers.Builder, SWATH_LENGTH: number): void;
    static addAgjson(builder: flatbuffers.Builder, AGJSONOffset: flatbuffers.Offset): void;
    static addAtext(builder: flatbuffers.Builder, ATEXTOffset: flatbuffers.Offset): void;
    static addAtype(builder: flatbuffers.Builder, ATYPEOffset: flatbuffers.Offset): void;
    static addCoordSys(builder: flatbuffers.Builder, COORD_SYSOffset: flatbuffers.Offset): void;
    static addSpacingRange(builder: flatbuffers.Builder, SPACING_RANGE: number): void;
    static addSpacingAzimuth(builder: flatbuffers.Builder, SPACING_AZIMUTH: number): void;
    static addLooksAzimuth(builder: flatbuffers.Builder, LOOKS_AZIMUTH: number): void;
    static addLooksRange(builder: flatbuffers.Builder, LOOKS_RANGE: number): void;
    static addResolutionRange(builder: flatbuffers.Builder, RESOLUTION_RANGE: number): void;
    static addResolutionAzimuth(builder: flatbuffers.Builder, RESOLUTION_AZIMUTH: number): void;
    static addObDirection(builder: flatbuffers.Builder, OB_DIRECTIONOffset: flatbuffers.Offset): void;
    static addTargetposx(builder: flatbuffers.Builder, TARGETPOSX: number): void;
    static addTargetposy(builder: flatbuffers.Builder, TARGETPOSY: number): void;
    static addTargetposz(builder: flatbuffers.Builder, TARGETPOSZ: number): void;
    static addSenalt(builder: flatbuffers.Builder, SENALT: number): void;
    static addSenvelx(builder: flatbuffers.Builder, SENVELX: number): void;
    static addSenvely(builder: flatbuffers.Builder, SENVELY: number): void;
    static addSenvelz(builder: flatbuffers.Builder, SENVELZ: number): void;
    static addSenlatStart(builder: flatbuffers.Builder, SENLAT_START: number): void;
    static addSenlonStart(builder: flatbuffers.Builder, SENLON_START: number): void;
    static addSenlatEnd(builder: flatbuffers.Builder, SENLAT_END: number): void;
    static addSenlonEnd(builder: flatbuffers.Builder, SENLON_END: number): void;
    static addTransactionId(builder: flatbuffers.Builder, TRANSACTION_IDOffset: flatbuffers.Offset): void;
    static addTags(builder: flatbuffers.Builder, TAGSOffset: flatbuffers.Offset): void;
    static createTagsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startTagsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addSrcTyps(builder: flatbuffers.Builder, SRC_TYPSOffset: flatbuffers.Offset): void;
    static createSrcTypsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startSrcTypsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addSrcIds(builder: flatbuffers.Builder, SRC_IDSOffset: flatbuffers.Offset): void;
    static createSrcIdsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startSrcIdsVector(builder: flatbuffers.Builder, numElems: number): void;
    static endSAR(builder: flatbuffers.Builder): flatbuffers.Offset;
    static finishSARBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static finishSizePrefixedSARBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static createSAR(builder: flatbuffers.Builder, IDOffset: flatbuffers.Offset, SAT_NO: number, ORIG_OBJECT_IDOffset: flatbuffers.Offset, ON_ORBITOffset: flatbuffers.Offset, ID_SENSOROffset: flatbuffers.Offset, ORIG_SENSOR_IDOffset: flatbuffers.Offset, EXTERNAL_IDOffset: flatbuffers.Offset, COLLECTION_IDOffset: flatbuffers.Offset, DETECTION_IDOffset: flatbuffers.Offset, COLLECTION_STARTOffset: flatbuffers.Offset, COLLECTION_ENDOffset: flatbuffers.Offset, CENTER_TIMEOffset: flatbuffers.Offset, DETECTION_STARTOffset: flatbuffers.Offset, DETECTION_ENDOffset: flatbuffers.Offset, DWELL_TIME: number, ORBIT_STATEOffset: flatbuffers.Offset, SAR_MODE: sarMode, OPERATING_BANDOffset: flatbuffers.Offset, OPERATING_FREQ: number, SNR: number, TX_POLARIZATION: sarPolarization, RX_POLARIZATION: sarPolarization, GRAZE_ANGLE: number, INCIDENCE_ANGLE: number, SQUINT_ANGLE: number, PULSE_BANDWIDTH: number, PULSE_DURATION: number, CONTINUOUS_SPOT_ANGLE: number, SLANT_RANGE: number, NEAR_RANGE: number, FAR_RANGE: number, SWATH_LENGTH: number, AGJSONOffset: flatbuffers.Offset, ATEXTOffset: flatbuffers.Offset, ATYPEOffset: flatbuffers.Offset, COORD_SYSOffset: flatbuffers.Offset, SPACING_RANGE: number, SPACING_AZIMUTH: number, LOOKS_AZIMUTH: number, LOOKS_RANGE: number, RESOLUTION_RANGE: number, RESOLUTION_AZIMUTH: number, OB_DIRECTIONOffset: flatbuffers.Offset, TARGETPOSX: number, TARGETPOSY: number, TARGETPOSZ: number, SENALT: number, SENVELX: number, SENVELY: number, SENVELZ: number, SENLAT_START: number, SENLON_START: number, SENLAT_END: number, SENLON_END: number, TRANSACTION_IDOffset: flatbuffers.Offset, TAGSOffset: flatbuffers.Offset, SRC_TYPSOffset: flatbuffers.Offset, SRC_IDSOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): SART;
    unpackTo(_o: SART): void;
}
export declare class SART implements flatbuffers.IGeneratedObject {
    ID: string | Uint8Array | null;
    SAT_NO: number;
    ORIG_OBJECT_ID: string | Uint8Array | null;
    ON_ORBIT: string | Uint8Array | null;
    ID_SENSOR: string | Uint8Array | null;
    ORIG_SENSOR_ID: string | Uint8Array | null;
    EXTERNAL_ID: string | Uint8Array | null;
    COLLECTION_ID: string | Uint8Array | null;
    DETECTION_ID: string | Uint8Array | null;
    COLLECTION_START: string | Uint8Array | null;
    COLLECTION_END: string | Uint8Array | null;
    CENTER_TIME: string | Uint8Array | null;
    DETECTION_START: string | Uint8Array | null;
    DETECTION_END: string | Uint8Array | null;
    DWELL_TIME: number;
    ORBIT_STATE: string | Uint8Array | null;
    SAR_MODE: sarMode;
    OPERATING_BAND: string | Uint8Array | null;
    OPERATING_FREQ: number;
    SNR: number;
    TX_POLARIZATION: sarPolarization;
    RX_POLARIZATION: sarPolarization;
    GRAZE_ANGLE: number;
    INCIDENCE_ANGLE: number;
    SQUINT_ANGLE: number;
    PULSE_BANDWIDTH: number;
    PULSE_DURATION: number;
    CONTINUOUS_SPOT_ANGLE: number;
    SLANT_RANGE: number;
    NEAR_RANGE: number;
    FAR_RANGE: number;
    SWATH_LENGTH: number;
    AGJSON: string | Uint8Array | null;
    ATEXT: string | Uint8Array | null;
    ATYPE: string | Uint8Array | null;
    COORD_SYS: string | Uint8Array | null;
    SPACING_RANGE: number;
    SPACING_AZIMUTH: number;
    LOOKS_AZIMUTH: number;
    LOOKS_RANGE: number;
    RESOLUTION_RANGE: number;
    RESOLUTION_AZIMUTH: number;
    OB_DIRECTION: string | Uint8Array | null;
    TARGETPOSX: number;
    TARGETPOSY: number;
    TARGETPOSZ: number;
    SENALT: number;
    SENVELX: number;
    SENVELY: number;
    SENVELZ: number;
    SENLAT_START: number;
    SENLON_START: number;
    SENLAT_END: number;
    SENLON_END: number;
    TRANSACTION_ID: string | Uint8Array | null;
    TAGS: (string)[];
    SRC_TYPS: (string)[];
    SRC_IDS: (string)[];
    constructor(ID?: string | Uint8Array | null, SAT_NO?: number, ORIG_OBJECT_ID?: string | Uint8Array | null, ON_ORBIT?: string | Uint8Array | null, ID_SENSOR?: string | Uint8Array | null, ORIG_SENSOR_ID?: string | Uint8Array | null, EXTERNAL_ID?: string | Uint8Array | null, COLLECTION_ID?: string | Uint8Array | null, DETECTION_ID?: string | Uint8Array | null, COLLECTION_START?: string | Uint8Array | null, COLLECTION_END?: string | Uint8Array | null, CENTER_TIME?: string | Uint8Array | null, DETECTION_START?: string | Uint8Array | null, DETECTION_END?: string | Uint8Array | null, DWELL_TIME?: number, ORBIT_STATE?: string | Uint8Array | null, SAR_MODE?: sarMode, OPERATING_BAND?: string | Uint8Array | null, OPERATING_FREQ?: number, SNR?: number, TX_POLARIZATION?: sarPolarization, RX_POLARIZATION?: sarPolarization, GRAZE_ANGLE?: number, INCIDENCE_ANGLE?: number, SQUINT_ANGLE?: number, PULSE_BANDWIDTH?: number, PULSE_DURATION?: number, CONTINUOUS_SPOT_ANGLE?: number, SLANT_RANGE?: number, NEAR_RANGE?: number, FAR_RANGE?: number, SWATH_LENGTH?: number, AGJSON?: string | Uint8Array | null, ATEXT?: string | Uint8Array | null, ATYPE?: string | Uint8Array | null, COORD_SYS?: string | Uint8Array | null, SPACING_RANGE?: number, SPACING_AZIMUTH?: number, LOOKS_AZIMUTH?: number, LOOKS_RANGE?: number, RESOLUTION_RANGE?: number, RESOLUTION_AZIMUTH?: number, OB_DIRECTION?: string | Uint8Array | null, TARGETPOSX?: number, TARGETPOSY?: number, TARGETPOSZ?: number, SENALT?: number, SENVELX?: number, SENVELY?: number, SENVELZ?: number, SENLAT_START?: number, SENLON_START?: number, SENLAT_END?: number, SENLON_END?: number, TRANSACTION_ID?: string | Uint8Array | null, TAGS?: (string)[], SRC_TYPS?: (string)[], SRC_IDS?: (string)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=SAR.d.ts.map