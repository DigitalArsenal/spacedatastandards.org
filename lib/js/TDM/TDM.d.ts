import * as flatbuffers from 'flatbuffers';
import { referenceFrame } from './referenceFrame.js';
/**
 * Tracking Data Message
 */
export declare class TDM implements flatbuffers.IUnpackableObject<TDMT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): TDM;
    static getRootAsTDM(bb: flatbuffers.ByteBuffer, obj?: TDM): TDM;
    static getSizePrefixedRootAsTDM(bb: flatbuffers.ByteBuffer, obj?: TDM): TDM;
    static bufferHasIdentifier(bb: flatbuffers.ByteBuffer): boolean;
    /**
     * Unique identifier for the observation OBSERVER -  [Specific CCSDS Document]
     */
    OBSERVER_ID(): string | null;
    OBSERVER_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Cartesian X coordinate of the OBSERVER location in chosen reference frame
     */
    OBSERVER_X(): number;
    /**
     * Cartesian Y coordinate of the OBSERVER location in chosen reference frame
     */
    OBSERVER_Y(): number;
    /**
     * Cartesian Z coordinate of the OBSERVER location in chosen reference frame
     */
    OBSERVER_Z(): number;
    /**
     * Cartesian X coordinate of the OBSERVER velocity in chosen reference frame
     */
    OBSERVER_VX(): number;
    /**
     * Cartesian Y coordinate of the OBSERVER velocity in chosen reference frame
     */
    OBSERVER_VY(): number;
    /**
     * Cartesian Z coordinate of the OBSERVER velocity in chosen reference frame
     */
    OBSERVER_VZ(): number;
    /**
     * Reference frame used for OBSERVER location Cartesian coordinates (e.g., ECEF, ECI)
     */
    OBSERVER_POSITION_REFERENCE_FRAME(): referenceFrame;
    /**
     * Reference frame used for obs location Cartesian coordinates (e.g., ECEF, ECI)
     */
    OBS_REFERENCE_FRAME(): referenceFrame;
    /**
     * Epoch or observation time -  CCSDS 503.0-B-1
     */
    EPOCH(): string | null;
    EPOCH(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * TDM version number -  CCSDS 503.0-B-1, Page D-9
     */
    CCSDS_TDM_VERS(): string | null;
    CCSDS_TDM_VERS(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Comments regarding TDM -  various sections, e.g., Page D-9
     */
    COMMENT(index: number): string;
    COMMENT(index: number, optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    commentLength(): number;
    /**
     * Date of TDM creation -  CCSDS 503.0-B-1, Page D-9
     */
    CREATION_DATE(): string | null;
    CREATION_DATE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Originator of the TDM -  CCSDS 503.0-B-1, Page D-9
     */
    ORIGINATOR(): string | null;
    ORIGINATOR(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Start of metadata section -  CCSDS 503.0-B-1, Page D-9
     */
    META_START(): string | null;
    META_START(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Time system used -  CCSDS 503.0-B-1, Page D-9
     */
    TIME_SYSTEM(): string | null;
    TIME_SYSTEM(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Start time of the data -  CCSDS 503.0-B-1, Page D-9
     */
    START_TIME(): string | null;
    START_TIME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Stop time of the data -  CCSDS 503.0-B-1, Page D-9
     */
    STOP_TIME(): string | null;
    STOP_TIME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * First participant in the TDM -  CCSDS 503.0-B-1, Page D-9
     */
    PARTICIPANT_1(): string | null;
    PARTICIPANT_1(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Second participant in the TDM -  CCSDS 503.0-B-1, Page D-9
     */
    PARTICIPANT_2(): string | null;
    PARTICIPANT_2(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Third participant in the TDM (if applicable) -  CCSDS 503.0-B-1, Page D-9
     */
    PARTICIPANT_3(): string | null;
    PARTICIPANT_3(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Fourth participant in the TDM (if applicable) -  CCSDS 503.0-B-1, Page D-9
     */
    PARTICIPANT_4(): string | null;
    PARTICIPANT_4(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Fifth participant in the TDM (if applicable) -  CCSDS 503.0-B-1, Page D-9, max participants
     */
    PARTICIPANT_5(): string | null;
    PARTICIPANT_5(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Mode of TDM -  CCSDS 503.0-B-1, Page D-9
     */
    MODE(): string | null;
    MODE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * First path in TDM -  CCSDS 503.0-B-1, Page D-9
     */
    PATH_1(): number;
    /**
     * Second path in TDM (if applicable) -  CCSDS 503.0-B-1, Page D-9
     */
    PATH_2(): number;
    /**
     * Transmit band -  CCSDS 503.0-B-1, Page D-9
     */
    TRANSMIT_BAND(): string | null;
    TRANSMIT_BAND(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Receive band -  CCSDS 503.0-B-1, Page D-9
     */
    RECEIVE_BAND(): string | null;
    RECEIVE_BAND(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Integration interval -  CCSDS 503.0-B-1, Page D-9
     */
    INTEGRATION_INTERVAL(): number;
    /**
     * Integration reference -  CCSDS 503.0-B-1, Page D-9
     */
    INTEGRATION_REF(): string | null;
    INTEGRATION_REF(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Receive delay for second participant -  CCSDS 503.0-B-1, Page D-9
     */
    RECEIVE_DELAY_2(): number;
    /**
     * Receive delay for third participant -  CCSDS 503.0-B-1, Page D-9
     */
    RECEIVE_DELAY_3(): number;
    /**
     * Data quality -  CCSDS 503.0-B-1, Page D-9
     */
    DATA_QUALITY(): string | null;
    DATA_QUALITY(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * End of metadata section -  CCSDS 503.0-B-1, Page D-9
     */
    META_STOP(): string | null;
    META_STOP(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Start of data section -  CCSDS 503.0-B-1, Page D-9
     */
    DATA_START(): string | null;
    DATA_START(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Transmit frequency for first participant -  CCSDS 503.0-B-1, Page D-9
     */
    TRANSMIT_FREQ_1(): number;
    /**
     * Receive frequency -  CCSDS 503.0-B-1, Page D-9
     */
    RECEIVE_FREQ(index: number): number | null;
    receiveFreqLength(): number;
    receiveFreqArray(): Float64Array | null;
    /**
     * End of data section -  CCSDS 503.0-B-1, Page D-9
     */
    DATA_STOP(): string | null;
    DATA_STOP(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Additional properties as required by the specific application of the TDM...
     * Reference for time tagging -  CCSDS 503.0-B-1, Page D-10
     */
    TIMETAG_REF(): string | null;
    TIMETAG_REF(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Type of angle data -  CCSDS 503.0-B-1, Page D-12
     * Can be AZEL, RADEC, XEYN, XSYE, or another value with provided ICD
     */
    ANGLE_TYPE(): string | null;
    ANGLE_TYPE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * First angle value -  CCSDS 503.0-B-1, Page D-12
     */
    ANGLE_1(index: number): number | null;
    angle1Length(): number;
    angle1Array(): Float32Array | null;
    /**
     * Second angle value -  CCSDS 503.0-B-1, Page D-12
     */
    ANGLE_2(index: number): number | null;
    angle2Length(): number;
    angle2Array(): Float32Array | null;
    /**
     * Uncertainty of first angle -  CCSDS 503.0-B-1
     */
    ANGLE_UNCERTAINTY_1(): number;
    /**
     * Uncertainty of second angle -  CCSDS 503.0-B-1
     */
    ANGLE_UNCERTAINTY_2(): number;
    /**
     * Rate of change of range -  CCSDS 503.0-B-1
     */
    RANGE_RATE(): number;
    /**
     * Uncertainty in range -  CCSDS 503.0-B-1
     */
    RANGE_UNCERTAINTY(): number;
    /**
     * Mode of range data -  CCSDS 503.0-B-1, Page D-10
     */
    RANGE_MODE(): string | null;
    RANGE_MODE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Modulus value for range data -  CCSDS 503.0-B-1, Page D-10
     */
    RANGE_MODULUS(): number;
    /**
     * First correction angle -  CCSDS 503.0-B-1, Page D-12
     */
    CORRECTION_ANGLE_1(): number;
    /**
     * Second correction angle -  CCSDS 503.0-B-1, Page D-12
     */
    CORRECTION_ANGLE_2(): number;
    /**
     * Indicator of corrections applied -  CCSDS 503.0-B-1, Page D-12
     */
    CORRECTIONS_APPLIED(): string | null;
    CORRECTIONS_APPLIED(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Dry component of tropospheric delay -  CCSDS 503.0-B-1, Page D-14
     */
    TROPO_DRY(index: number): number | null;
    tropoDryLength(): number;
    tropoDryArray(): Float64Array | null;
    /**
     * Wet component of tropospheric delay -  CCSDS 503.0-B-1, Page D-14
     */
    TROPO_WET(index: number): number | null;
    tropoWetLength(): number;
    tropoWetArray(): Float64Array | null;
    /**
     * Slant total electron content -  CCSDS 503.0-B-1, Page D-13
     */
    STEC(index: number): number | null;
    stecLength(): number;
    stecArray(): Float64Array | null;
    /**
     * Atmospheric pressure -  CCSDS 503.0-B-1, Page D-14
     */
    PRESSURE(index: number): number | null;
    pressureLength(): number;
    pressureArray(): Float64Array | null;
    /**
     * Relative humidity -  CCSDS 503.0-B-1, Page D-14
     */
    RHUMIDITY(index: number): number | null;
    rhumidityLength(): number;
    rhumidityArray(): Float64Array | null;
    /**
     * Ambient temperature -  CCSDS 503.0-B-1, Page D-14
     */
    TEMPERATURE(index: number): number | null;
    temperatureLength(): number;
    temperatureArray(): Float64Array | null;
    /**
     * Clock bias values -  CCSDS 503.0-B-1, Page D-15
     */
    CLOCK_BIAS(index: number): number | null;
    clockBiasLength(): number;
    clockBiasArray(): Float64Array | null;
    /**
     * Clock drift values -  CCSDS 503.0-B-1, Page D-15
     */
    CLOCK_DRIFT(index: number): number | null;
    clockDriftLength(): number;
    clockDriftArray(): Float64Array | null;
    static startTDM(builder: flatbuffers.Builder): void;
    static addObserverId(builder: flatbuffers.Builder, OBSERVER_IDOffset: flatbuffers.Offset): void;
    static addObserverX(builder: flatbuffers.Builder, OBSERVER_X: number): void;
    static addObserverY(builder: flatbuffers.Builder, OBSERVER_Y: number): void;
    static addObserverZ(builder: flatbuffers.Builder, OBSERVER_Z: number): void;
    static addObserverVx(builder: flatbuffers.Builder, OBSERVER_VX: number): void;
    static addObserverVy(builder: flatbuffers.Builder, OBSERVER_VY: number): void;
    static addObserverVz(builder: flatbuffers.Builder, OBSERVER_VZ: number): void;
    static addObserverPositionReferenceFrame(builder: flatbuffers.Builder, OBSERVER_POSITION_REFERENCE_FRAME: referenceFrame): void;
    static addObsReferenceFrame(builder: flatbuffers.Builder, OBS_REFERENCE_FRAME: referenceFrame): void;
    static addEpoch(builder: flatbuffers.Builder, EPOCHOffset: flatbuffers.Offset): void;
    static addCcsdsTdmVers(builder: flatbuffers.Builder, CCSDS_TDM_VERSOffset: flatbuffers.Offset): void;
    static addComment(builder: flatbuffers.Builder, COMMENTOffset: flatbuffers.Offset): void;
    static createCommentVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startCommentVector(builder: flatbuffers.Builder, numElems: number): void;
    static addCreationDate(builder: flatbuffers.Builder, CREATION_DATEOffset: flatbuffers.Offset): void;
    static addOriginator(builder: flatbuffers.Builder, ORIGINATOROffset: flatbuffers.Offset): void;
    static addMetaStart(builder: flatbuffers.Builder, META_STARTOffset: flatbuffers.Offset): void;
    static addTimeSystem(builder: flatbuffers.Builder, TIME_SYSTEMOffset: flatbuffers.Offset): void;
    static addStartTime(builder: flatbuffers.Builder, START_TIMEOffset: flatbuffers.Offset): void;
    static addStopTime(builder: flatbuffers.Builder, STOP_TIMEOffset: flatbuffers.Offset): void;
    static addParticipant1(builder: flatbuffers.Builder, PARTICIPANT_1Offset: flatbuffers.Offset): void;
    static addParticipant2(builder: flatbuffers.Builder, PARTICIPANT_2Offset: flatbuffers.Offset): void;
    static addParticipant3(builder: flatbuffers.Builder, PARTICIPANT_3Offset: flatbuffers.Offset): void;
    static addParticipant4(builder: flatbuffers.Builder, PARTICIPANT_4Offset: flatbuffers.Offset): void;
    static addParticipant5(builder: flatbuffers.Builder, PARTICIPANT_5Offset: flatbuffers.Offset): void;
    static addMode(builder: flatbuffers.Builder, MODEOffset: flatbuffers.Offset): void;
    static addPath1(builder: flatbuffers.Builder, PATH_1: number): void;
    static addPath2(builder: flatbuffers.Builder, PATH_2: number): void;
    static addTransmitBand(builder: flatbuffers.Builder, TRANSMIT_BANDOffset: flatbuffers.Offset): void;
    static addReceiveBand(builder: flatbuffers.Builder, RECEIVE_BANDOffset: flatbuffers.Offset): void;
    static addIntegrationInterval(builder: flatbuffers.Builder, INTEGRATION_INTERVAL: number): void;
    static addIntegrationRef(builder: flatbuffers.Builder, INTEGRATION_REFOffset: flatbuffers.Offset): void;
    static addReceiveDelay2(builder: flatbuffers.Builder, RECEIVE_DELAY_2: number): void;
    static addReceiveDelay3(builder: flatbuffers.Builder, RECEIVE_DELAY_3: number): void;
    static addDataQuality(builder: flatbuffers.Builder, DATA_QUALITYOffset: flatbuffers.Offset): void;
    static addMetaStop(builder: flatbuffers.Builder, META_STOPOffset: flatbuffers.Offset): void;
    static addDataStart(builder: flatbuffers.Builder, DATA_STARTOffset: flatbuffers.Offset): void;
    static addTransmitFreq1(builder: flatbuffers.Builder, TRANSMIT_FREQ_1: number): void;
    static addReceiveFreq(builder: flatbuffers.Builder, RECEIVE_FREQOffset: flatbuffers.Offset): void;
    static createReceiveFreqVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createReceiveFreqVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startReceiveFreqVector(builder: flatbuffers.Builder, numElems: number): void;
    static addDataStop(builder: flatbuffers.Builder, DATA_STOPOffset: flatbuffers.Offset): void;
    static addTimetagRef(builder: flatbuffers.Builder, TIMETAG_REFOffset: flatbuffers.Offset): void;
    static addAngleType(builder: flatbuffers.Builder, ANGLE_TYPEOffset: flatbuffers.Offset): void;
    static addAngle1(builder: flatbuffers.Builder, ANGLE_1Offset: flatbuffers.Offset): void;
    static createAngle1Vector(builder: flatbuffers.Builder, data: number[] | Float32Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createAngle1Vector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startAngle1Vector(builder: flatbuffers.Builder, numElems: number): void;
    static addAngle2(builder: flatbuffers.Builder, ANGLE_2Offset: flatbuffers.Offset): void;
    static createAngle2Vector(builder: flatbuffers.Builder, data: number[] | Float32Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createAngle2Vector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startAngle2Vector(builder: flatbuffers.Builder, numElems: number): void;
    static addAngleUncertainty1(builder: flatbuffers.Builder, ANGLE_UNCERTAINTY_1: number): void;
    static addAngleUncertainty2(builder: flatbuffers.Builder, ANGLE_UNCERTAINTY_2: number): void;
    static addRangeRate(builder: flatbuffers.Builder, RANGE_RATE: number): void;
    static addRangeUncertainty(builder: flatbuffers.Builder, RANGE_UNCERTAINTY: number): void;
    static addRangeMode(builder: flatbuffers.Builder, RANGE_MODEOffset: flatbuffers.Offset): void;
    static addRangeModulus(builder: flatbuffers.Builder, RANGE_MODULUS: number): void;
    static addCorrectionAngle1(builder: flatbuffers.Builder, CORRECTION_ANGLE_1: number): void;
    static addCorrectionAngle2(builder: flatbuffers.Builder, CORRECTION_ANGLE_2: number): void;
    static addCorrectionsApplied(builder: flatbuffers.Builder, CORRECTIONS_APPLIEDOffset: flatbuffers.Offset): void;
    static addTropoDry(builder: flatbuffers.Builder, TROPO_DRYOffset: flatbuffers.Offset): void;
    static createTropoDryVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createTropoDryVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startTropoDryVector(builder: flatbuffers.Builder, numElems: number): void;
    static addTropoWet(builder: flatbuffers.Builder, TROPO_WETOffset: flatbuffers.Offset): void;
    static createTropoWetVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createTropoWetVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startTropoWetVector(builder: flatbuffers.Builder, numElems: number): void;
    static addStec(builder: flatbuffers.Builder, STECOffset: flatbuffers.Offset): void;
    static createStecVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createStecVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startStecVector(builder: flatbuffers.Builder, numElems: number): void;
    static addPressure(builder: flatbuffers.Builder, PRESSUREOffset: flatbuffers.Offset): void;
    static createPressureVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createPressureVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startPressureVector(builder: flatbuffers.Builder, numElems: number): void;
    static addRhumidity(builder: flatbuffers.Builder, RHUMIDITYOffset: flatbuffers.Offset): void;
    static createRhumidityVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createRhumidityVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startRhumidityVector(builder: flatbuffers.Builder, numElems: number): void;
    static addTemperature(builder: flatbuffers.Builder, TEMPERATUREOffset: flatbuffers.Offset): void;
    static createTemperatureVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createTemperatureVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startTemperatureVector(builder: flatbuffers.Builder, numElems: number): void;
    static addClockBias(builder: flatbuffers.Builder, CLOCK_BIASOffset: flatbuffers.Offset): void;
    static createClockBiasVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createClockBiasVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startClockBiasVector(builder: flatbuffers.Builder, numElems: number): void;
    static addClockDrift(builder: flatbuffers.Builder, CLOCK_DRIFTOffset: flatbuffers.Offset): void;
    static createClockDriftVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createClockDriftVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startClockDriftVector(builder: flatbuffers.Builder, numElems: number): void;
    static endTDM(builder: flatbuffers.Builder): flatbuffers.Offset;
    static finishTDMBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static finishSizePrefixedTDMBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static createTDM(builder: flatbuffers.Builder, OBSERVER_IDOffset: flatbuffers.Offset, OBSERVER_X: number, OBSERVER_Y: number, OBSERVER_Z: number, OBSERVER_VX: number, OBSERVER_VY: number, OBSERVER_VZ: number, OBSERVER_POSITION_REFERENCE_FRAME: referenceFrame, OBS_REFERENCE_FRAME: referenceFrame, EPOCHOffset: flatbuffers.Offset, CCSDS_TDM_VERSOffset: flatbuffers.Offset, COMMENTOffset: flatbuffers.Offset, CREATION_DATEOffset: flatbuffers.Offset, ORIGINATOROffset: flatbuffers.Offset, META_STARTOffset: flatbuffers.Offset, TIME_SYSTEMOffset: flatbuffers.Offset, START_TIMEOffset: flatbuffers.Offset, STOP_TIMEOffset: flatbuffers.Offset, PARTICIPANT_1Offset: flatbuffers.Offset, PARTICIPANT_2Offset: flatbuffers.Offset, PARTICIPANT_3Offset: flatbuffers.Offset, PARTICIPANT_4Offset: flatbuffers.Offset, PARTICIPANT_5Offset: flatbuffers.Offset, MODEOffset: flatbuffers.Offset, PATH_1: number, PATH_2: number, TRANSMIT_BANDOffset: flatbuffers.Offset, RECEIVE_BANDOffset: flatbuffers.Offset, INTEGRATION_INTERVAL: number, INTEGRATION_REFOffset: flatbuffers.Offset, RECEIVE_DELAY_2: number, RECEIVE_DELAY_3: number, DATA_QUALITYOffset: flatbuffers.Offset, META_STOPOffset: flatbuffers.Offset, DATA_STARTOffset: flatbuffers.Offset, TRANSMIT_FREQ_1: number, RECEIVE_FREQOffset: flatbuffers.Offset, DATA_STOPOffset: flatbuffers.Offset, TIMETAG_REFOffset: flatbuffers.Offset, ANGLE_TYPEOffset: flatbuffers.Offset, ANGLE_1Offset: flatbuffers.Offset, ANGLE_2Offset: flatbuffers.Offset, ANGLE_UNCERTAINTY_1: number, ANGLE_UNCERTAINTY_2: number, RANGE_RATE: number, RANGE_UNCERTAINTY: number, RANGE_MODEOffset: flatbuffers.Offset, RANGE_MODULUS: number, CORRECTION_ANGLE_1: number, CORRECTION_ANGLE_2: number, CORRECTIONS_APPLIEDOffset: flatbuffers.Offset, TROPO_DRYOffset: flatbuffers.Offset, TROPO_WETOffset: flatbuffers.Offset, STECOffset: flatbuffers.Offset, PRESSUREOffset: flatbuffers.Offset, RHUMIDITYOffset: flatbuffers.Offset, TEMPERATUREOffset: flatbuffers.Offset, CLOCK_BIASOffset: flatbuffers.Offset, CLOCK_DRIFTOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): TDMT;
    unpackTo(_o: TDMT): void;
}
export declare class TDMT implements flatbuffers.IGeneratedObject {
    OBSERVER_ID: string | Uint8Array | null;
    OBSERVER_X: number;
    OBSERVER_Y: number;
    OBSERVER_Z: number;
    OBSERVER_VX: number;
    OBSERVER_VY: number;
    OBSERVER_VZ: number;
    OBSERVER_POSITION_REFERENCE_FRAME: referenceFrame;
    OBS_REFERENCE_FRAME: referenceFrame;
    EPOCH: string | Uint8Array | null;
    CCSDS_TDM_VERS: string | Uint8Array | null;
    COMMENT: (string)[];
    CREATION_DATE: string | Uint8Array | null;
    ORIGINATOR: string | Uint8Array | null;
    META_START: string | Uint8Array | null;
    TIME_SYSTEM: string | Uint8Array | null;
    START_TIME: string | Uint8Array | null;
    STOP_TIME: string | Uint8Array | null;
    PARTICIPANT_1: string | Uint8Array | null;
    PARTICIPANT_2: string | Uint8Array | null;
    PARTICIPANT_3: string | Uint8Array | null;
    PARTICIPANT_4: string | Uint8Array | null;
    PARTICIPANT_5: string | Uint8Array | null;
    MODE: string | Uint8Array | null;
    PATH_1: number;
    PATH_2: number;
    TRANSMIT_BAND: string | Uint8Array | null;
    RECEIVE_BAND: string | Uint8Array | null;
    INTEGRATION_INTERVAL: number;
    INTEGRATION_REF: string | Uint8Array | null;
    RECEIVE_DELAY_2: number;
    RECEIVE_DELAY_3: number;
    DATA_QUALITY: string | Uint8Array | null;
    META_STOP: string | Uint8Array | null;
    DATA_START: string | Uint8Array | null;
    TRANSMIT_FREQ_1: number;
    RECEIVE_FREQ: (number)[];
    DATA_STOP: string | Uint8Array | null;
    TIMETAG_REF: string | Uint8Array | null;
    ANGLE_TYPE: string | Uint8Array | null;
    ANGLE_1: (number)[];
    ANGLE_2: (number)[];
    ANGLE_UNCERTAINTY_1: number;
    ANGLE_UNCERTAINTY_2: number;
    RANGE_RATE: number;
    RANGE_UNCERTAINTY: number;
    RANGE_MODE: string | Uint8Array | null;
    RANGE_MODULUS: number;
    CORRECTION_ANGLE_1: number;
    CORRECTION_ANGLE_2: number;
    CORRECTIONS_APPLIED: string | Uint8Array | null;
    TROPO_DRY: (number)[];
    TROPO_WET: (number)[];
    STEC: (number)[];
    PRESSURE: (number)[];
    RHUMIDITY: (number)[];
    TEMPERATURE: (number)[];
    CLOCK_BIAS: (number)[];
    CLOCK_DRIFT: (number)[];
    constructor(OBSERVER_ID?: string | Uint8Array | null, OBSERVER_X?: number, OBSERVER_Y?: number, OBSERVER_Z?: number, OBSERVER_VX?: number, OBSERVER_VY?: number, OBSERVER_VZ?: number, OBSERVER_POSITION_REFERENCE_FRAME?: referenceFrame, OBS_REFERENCE_FRAME?: referenceFrame, EPOCH?: string | Uint8Array | null, CCSDS_TDM_VERS?: string | Uint8Array | null, COMMENT?: (string)[], CREATION_DATE?: string | Uint8Array | null, ORIGINATOR?: string | Uint8Array | null, META_START?: string | Uint8Array | null, TIME_SYSTEM?: string | Uint8Array | null, START_TIME?: string | Uint8Array | null, STOP_TIME?: string | Uint8Array | null, PARTICIPANT_1?: string | Uint8Array | null, PARTICIPANT_2?: string | Uint8Array | null, PARTICIPANT_3?: string | Uint8Array | null, PARTICIPANT_4?: string | Uint8Array | null, PARTICIPANT_5?: string | Uint8Array | null, MODE?: string | Uint8Array | null, PATH_1?: number, PATH_2?: number, TRANSMIT_BAND?: string | Uint8Array | null, RECEIVE_BAND?: string | Uint8Array | null, INTEGRATION_INTERVAL?: number, INTEGRATION_REF?: string | Uint8Array | null, RECEIVE_DELAY_2?: number, RECEIVE_DELAY_3?: number, DATA_QUALITY?: string | Uint8Array | null, META_STOP?: string | Uint8Array | null, DATA_START?: string | Uint8Array | null, TRANSMIT_FREQ_1?: number, RECEIVE_FREQ?: (number)[], DATA_STOP?: string | Uint8Array | null, TIMETAG_REF?: string | Uint8Array | null, ANGLE_TYPE?: string | Uint8Array | null, ANGLE_1?: (number)[], ANGLE_2?: (number)[], ANGLE_UNCERTAINTY_1?: number, ANGLE_UNCERTAINTY_2?: number, RANGE_RATE?: number, RANGE_UNCERTAINTY?: number, RANGE_MODE?: string | Uint8Array | null, RANGE_MODULUS?: number, CORRECTION_ANGLE_1?: number, CORRECTION_ANGLE_2?: number, CORRECTIONS_APPLIED?: string | Uint8Array | null, TROPO_DRY?: (number)[], TROPO_WET?: (number)[], STEC?: (number)[], PRESSURE?: (number)[], RHUMIDITY?: (number)[], TEMPERATURE?: (number)[], CLOCK_BIAS?: (number)[], CLOCK_DRIFT?: (number)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=TDM.d.ts.map