import * as flatbuffers from 'flatbuffers';
import { refFrame } from './ref-frame.js';
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
    observerId(): string | null;
    observerId(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Cartesian X coordinate of the OBSERVER location in chosen reference frame
     */
    observerX(): number;
    /**
     * Cartesian Y coordinate of the OBSERVER location in chosen reference frame
     */
    observerY(): number;
    /**
     * Cartesian Z coordinate of the OBSERVER location in chosen reference frame
     */
    observerZ(): number;
    /**
     * Cartesian X coordinate of the OBSERVER velocity in chosen reference frame
     */
    observerVx(): number;
    /**
     * Cartesian Y coordinate of the OBSERVER velocity in chosen reference frame
     */
    observerVy(): number;
    /**
     * Cartesian Z coordinate of the OBSERVER velocity in chosen reference frame
     */
    observerVz(): number;
    /**
     * Reference frame used for OBSERVER location Cartesian coordinates (e.g., ECEF, ECI)
     */
    observerPositionReferenceFrame(): refFrame;
    /**
     * Reference frame used for obs location Cartesian coordinates (e.g., ECEF, ECI)
     */
    obsReferenceFrame(): refFrame;
    /**
     * Epoch time or observation time, in ISO 8601 UTC format -  CCSDS 503.0-B-1
     */
    epoch(): string | null;
    epoch(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * TDM version number -  CCSDS 503.0-B-1, Page D-9
     */
    ccsdsTdmVers(): string | null;
    ccsdsTdmVers(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Comments regarding TDM -  various sections, e.g., Page D-9
     */
    comment(index: number): string;
    comment(index: number, optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    commentLength(): number;
    /**
     * Date of TDM creation -  CCSDS 503.0-B-1, Page D-9
     */
    creationDate(): string | null;
    creationDate(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Originator of the TDM -  CCSDS 503.0-B-1, Page D-9
     */
    originator(): string | null;
    originator(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Start of metadata section -  CCSDS 503.0-B-1, Page D-9
     */
    metaStart(): string | null;
    metaStart(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Time system used -  CCSDS 503.0-B-1, Page D-9
     */
    timeSystem(): string | null;
    timeSystem(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Start time of the data -  CCSDS 503.0-B-1, Page D-9
     */
    startTime(): string | null;
    startTime(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Stop time of the data -  CCSDS 503.0-B-1, Page D-9
     */
    stopTime(): string | null;
    stopTime(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * First participant in the TDM -  CCSDS 503.0-B-1, Page D-9
     */
    participant1(): string | null;
    participant1(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Second participant in the TDM -  CCSDS 503.0-B-1, Page D-9
     */
    participant2(): string | null;
    participant2(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Third participant in the TDM (if applicable) -  CCSDS 503.0-B-1, Page D-9
     */
    participant3(): string | null;
    participant3(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Fourth participant in the TDM (if applicable) -  CCSDS 503.0-B-1, Page D-9
     */
    participant4(): string | null;
    participant4(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Fifth participant in the TDM (if applicable) -  CCSDS 503.0-B-1, Page D-9, max participants
     */
    participant5(): string | null;
    participant5(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Mode of TDM -  CCSDS 503.0-B-1, Page D-9
     */
    mode(): string | null;
    mode(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * First path in TDM -  CCSDS 503.0-B-1, Page D-9
     */
    path1(): number;
    /**
     * Second path in TDM (if applicable) -  CCSDS 503.0-B-1, Page D-9
     */
    path2(): number;
    /**
     * Transmit band -  CCSDS 503.0-B-1, Page D-9
     */
    transmitBand(): string | null;
    transmitBand(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Receive band -  CCSDS 503.0-B-1, Page D-9
     */
    receiveBand(): string | null;
    receiveBand(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Integration interval -  CCSDS 503.0-B-1, Page D-9
     */
    integrationInterval(): number;
    /**
     * Integration reference -  CCSDS 503.0-B-1, Page D-9
     */
    integrationRef(): string | null;
    integrationRef(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Receive delay for second participant -  CCSDS 503.0-B-1, Page D-9
     */
    receiveDelay2(): number;
    /**
     * Receive delay for third participant -  CCSDS 503.0-B-1, Page D-9
     */
    receiveDelay3(): number;
    /**
     * Data quality -  CCSDS 503.0-B-1, Page D-9
     */
    dataQuality(): string | null;
    dataQuality(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * End of metadata section -  CCSDS 503.0-B-1, Page D-9
     */
    metaStop(): string | null;
    metaStop(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Start of data section -  CCSDS 503.0-B-1, Page D-9
     */
    dataStart(): string | null;
    dataStart(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Transmit frequency for first participant -  CCSDS 503.0-B-1, Page D-9
     */
    transmitFreq1(): number;
    /**
     * Receive frequency -  CCSDS 503.0-B-1, Page D-9
     */
    receiveFreq(index: number): number | null;
    receiveFreqLength(): number;
    receiveFreqArray(): Float64Array | null;
    /**
     * End of data section -  CCSDS 503.0-B-1, Page D-9
     */
    dataStop(): string | null;
    dataStop(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Additional properties as required by the specific application of the TDM...
     * Reference for time tagging -  CCSDS 503.0-B-1, Page D-10
     */
    timetagRef(): string | null;
    timetagRef(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Type of angle data -  CCSDS 503.0-B-1, Page D-12
     * Can be AZEL, RADEC, XEYN, XSYE, or another value with provided ICD
     */
    angleType(): string | null;
    angleType(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * First angle value -  CCSDS 503.0-B-1, Page D-12
     */
    angle1(index: number): number | null;
    angle1Length(): number;
    angle1Array(): Float32Array | null;
    /**
     * Second angle value -  CCSDS 503.0-B-1, Page D-12
     */
    angle2(index: number): number | null;
    angle2Length(): number;
    angle2Array(): Float32Array | null;
    /**
     * Uncertainty of first angle -  CCSDS 503.0-B-1
     */
    angleUncertainty1(): number;
    /**
     * Uncertainty of second angle -  CCSDS 503.0-B-1
     */
    angleUncertainty2(): number;
    /**
     * Rate of change of range -  CCSDS 503.0-B-1
     */
    rangeRate(): number;
    /**
     * Uncertainty in range -  CCSDS 503.0-B-1
     */
    rangeUncertainty(): number;
    /**
     * Mode of range data -  CCSDS 503.0-B-1, Page D-10
     */
    rangeMode(): string | null;
    rangeMode(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Modulus value for range data -  CCSDS 503.0-B-1, Page D-10
     */
    rangeModulus(): number;
    /**
     * First correction angle -  CCSDS 503.0-B-1, Page D-12
     */
    correctionAngle1(): number;
    /**
     * Second correction angle -  CCSDS 503.0-B-1, Page D-12
     */
    correctionAngle2(): number;
    /**
     * Indicator of corrections applied -  CCSDS 503.0-B-1, Page D-12
     */
    correctionsApplied(): string | null;
    correctionsApplied(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Dry component of tropospheric delay -  CCSDS 503.0-B-1, Page D-14
     */
    tropoDry(index: number): number | null;
    tropoDryLength(): number;
    tropoDryArray(): Float64Array | null;
    /**
     * Wet component of tropospheric delay -  CCSDS 503.0-B-1, Page D-14
     */
    tropoWet(index: number): number | null;
    tropoWetLength(): number;
    tropoWetArray(): Float64Array | null;
    /**
     * Slant total electron content -  CCSDS 503.0-B-1, Page D-13
     */
    stec(index: number): number | null;
    stecLength(): number;
    stecArray(): Float64Array | null;
    /**
     * Atmospheric pressure -  CCSDS 503.0-B-1, Page D-14
     */
    pressure(index: number): number | null;
    pressureLength(): number;
    pressureArray(): Float64Array | null;
    /**
     * Relative humidity -  CCSDS 503.0-B-1, Page D-14
     */
    rhumidity(index: number): number | null;
    rhumidityLength(): number;
    rhumidityArray(): Float64Array | null;
    /**
     * Ambient temperature -  CCSDS 503.0-B-1, Page D-14
     */
    temperature(index: number): number | null;
    temperatureLength(): number;
    temperatureArray(): Float64Array | null;
    /**
     * Clock bias values -  CCSDS 503.0-B-1, Page D-15
     */
    clockBias(index: number): number | null;
    clockBiasLength(): number;
    clockBiasArray(): Float64Array | null;
    /**
     * Clock drift values -  CCSDS 503.0-B-1, Page D-15
     */
    clockDrift(index: number): number | null;
    clockDriftLength(): number;
    clockDriftArray(): Float64Array | null;
    static startTDM(builder: flatbuffers.Builder): void;
    static addObserverId(builder: flatbuffers.Builder, observerIdOffset: flatbuffers.Offset): void;
    static addObserverX(builder: flatbuffers.Builder, observerX: number): void;
    static addObserverY(builder: flatbuffers.Builder, observerY: number): void;
    static addObserverZ(builder: flatbuffers.Builder, observerZ: number): void;
    static addObserverVx(builder: flatbuffers.Builder, observerVx: number): void;
    static addObserverVy(builder: flatbuffers.Builder, observerVy: number): void;
    static addObserverVz(builder: flatbuffers.Builder, observerVz: number): void;
    static addObserverPositionReferenceFrame(builder: flatbuffers.Builder, observerPositionReferenceFrame: refFrame): void;
    static addObsReferenceFrame(builder: flatbuffers.Builder, obsReferenceFrame: refFrame): void;
    static addEpoch(builder: flatbuffers.Builder, epochOffset: flatbuffers.Offset): void;
    static addCcsdsTdmVers(builder: flatbuffers.Builder, ccsdsTdmVersOffset: flatbuffers.Offset): void;
    static addComment(builder: flatbuffers.Builder, commentOffset: flatbuffers.Offset): void;
    static createCommentVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startCommentVector(builder: flatbuffers.Builder, numElems: number): void;
    static addCreationDate(builder: flatbuffers.Builder, creationDateOffset: flatbuffers.Offset): void;
    static addOriginator(builder: flatbuffers.Builder, originatorOffset: flatbuffers.Offset): void;
    static addMetaStart(builder: flatbuffers.Builder, metaStartOffset: flatbuffers.Offset): void;
    static addTimeSystem(builder: flatbuffers.Builder, timeSystemOffset: flatbuffers.Offset): void;
    static addStartTime(builder: flatbuffers.Builder, startTimeOffset: flatbuffers.Offset): void;
    static addStopTime(builder: flatbuffers.Builder, stopTimeOffset: flatbuffers.Offset): void;
    static addParticipant1(builder: flatbuffers.Builder, participant1Offset: flatbuffers.Offset): void;
    static addParticipant2(builder: flatbuffers.Builder, participant2Offset: flatbuffers.Offset): void;
    static addParticipant3(builder: flatbuffers.Builder, participant3Offset: flatbuffers.Offset): void;
    static addParticipant4(builder: flatbuffers.Builder, participant4Offset: flatbuffers.Offset): void;
    static addParticipant5(builder: flatbuffers.Builder, participant5Offset: flatbuffers.Offset): void;
    static addMode(builder: flatbuffers.Builder, modeOffset: flatbuffers.Offset): void;
    static addPath1(builder: flatbuffers.Builder, path1: number): void;
    static addPath2(builder: flatbuffers.Builder, path2: number): void;
    static addTransmitBand(builder: flatbuffers.Builder, transmitBandOffset: flatbuffers.Offset): void;
    static addReceiveBand(builder: flatbuffers.Builder, receiveBandOffset: flatbuffers.Offset): void;
    static addIntegrationInterval(builder: flatbuffers.Builder, integrationInterval: number): void;
    static addIntegrationRef(builder: flatbuffers.Builder, integrationRefOffset: flatbuffers.Offset): void;
    static addReceiveDelay2(builder: flatbuffers.Builder, receiveDelay2: number): void;
    static addReceiveDelay3(builder: flatbuffers.Builder, receiveDelay3: number): void;
    static addDataQuality(builder: flatbuffers.Builder, dataQualityOffset: flatbuffers.Offset): void;
    static addMetaStop(builder: flatbuffers.Builder, metaStopOffset: flatbuffers.Offset): void;
    static addDataStart(builder: flatbuffers.Builder, dataStartOffset: flatbuffers.Offset): void;
    static addTransmitFreq1(builder: flatbuffers.Builder, transmitFreq1: number): void;
    static addReceiveFreq(builder: flatbuffers.Builder, receiveFreqOffset: flatbuffers.Offset): void;
    static createReceiveFreqVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createReceiveFreqVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startReceiveFreqVector(builder: flatbuffers.Builder, numElems: number): void;
    static addDataStop(builder: flatbuffers.Builder, dataStopOffset: flatbuffers.Offset): void;
    static addTimetagRef(builder: flatbuffers.Builder, timetagRefOffset: flatbuffers.Offset): void;
    static addAngleType(builder: flatbuffers.Builder, angleTypeOffset: flatbuffers.Offset): void;
    static addAngle1(builder: flatbuffers.Builder, angle1Offset: flatbuffers.Offset): void;
    static createAngle1Vector(builder: flatbuffers.Builder, data: number[] | Float32Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createAngle1Vector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startAngle1Vector(builder: flatbuffers.Builder, numElems: number): void;
    static addAngle2(builder: flatbuffers.Builder, angle2Offset: flatbuffers.Offset): void;
    static createAngle2Vector(builder: flatbuffers.Builder, data: number[] | Float32Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createAngle2Vector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startAngle2Vector(builder: flatbuffers.Builder, numElems: number): void;
    static addAngleUncertainty1(builder: flatbuffers.Builder, angleUncertainty1: number): void;
    static addAngleUncertainty2(builder: flatbuffers.Builder, angleUncertainty2: number): void;
    static addRangeRate(builder: flatbuffers.Builder, rangeRate: number): void;
    static addRangeUncertainty(builder: flatbuffers.Builder, rangeUncertainty: number): void;
    static addRangeMode(builder: flatbuffers.Builder, rangeModeOffset: flatbuffers.Offset): void;
    static addRangeModulus(builder: flatbuffers.Builder, rangeModulus: number): void;
    static addCorrectionAngle1(builder: flatbuffers.Builder, correctionAngle1: number): void;
    static addCorrectionAngle2(builder: flatbuffers.Builder, correctionAngle2: number): void;
    static addCorrectionsApplied(builder: flatbuffers.Builder, correctionsAppliedOffset: flatbuffers.Offset): void;
    static addTropoDry(builder: flatbuffers.Builder, tropoDryOffset: flatbuffers.Offset): void;
    static createTropoDryVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createTropoDryVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startTropoDryVector(builder: flatbuffers.Builder, numElems: number): void;
    static addTropoWet(builder: flatbuffers.Builder, tropoWetOffset: flatbuffers.Offset): void;
    static createTropoWetVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createTropoWetVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startTropoWetVector(builder: flatbuffers.Builder, numElems: number): void;
    static addStec(builder: flatbuffers.Builder, stecOffset: flatbuffers.Offset): void;
    static createStecVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createStecVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startStecVector(builder: flatbuffers.Builder, numElems: number): void;
    static addPressure(builder: flatbuffers.Builder, pressureOffset: flatbuffers.Offset): void;
    static createPressureVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createPressureVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startPressureVector(builder: flatbuffers.Builder, numElems: number): void;
    static addRhumidity(builder: flatbuffers.Builder, rhumidityOffset: flatbuffers.Offset): void;
    static createRhumidityVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createRhumidityVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startRhumidityVector(builder: flatbuffers.Builder, numElems: number): void;
    static addTemperature(builder: flatbuffers.Builder, temperatureOffset: flatbuffers.Offset): void;
    static createTemperatureVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createTemperatureVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startTemperatureVector(builder: flatbuffers.Builder, numElems: number): void;
    static addClockBias(builder: flatbuffers.Builder, clockBiasOffset: flatbuffers.Offset): void;
    static createClockBiasVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createClockBiasVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startClockBiasVector(builder: flatbuffers.Builder, numElems: number): void;
    static addClockDrift(builder: flatbuffers.Builder, clockDriftOffset: flatbuffers.Offset): void;
    static createClockDriftVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createClockDriftVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startClockDriftVector(builder: flatbuffers.Builder, numElems: number): void;
    static endTDM(builder: flatbuffers.Builder): flatbuffers.Offset;
    static finishTDMBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static finishSizePrefixedTDMBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static createTDM(builder: flatbuffers.Builder, observerIdOffset: flatbuffers.Offset, observerX: number, observerY: number, observerZ: number, observerVx: number, observerVy: number, observerVz: number, observerPositionReferenceFrame: refFrame, obsReferenceFrame: refFrame, epochOffset: flatbuffers.Offset, ccsdsTdmVersOffset: flatbuffers.Offset, commentOffset: flatbuffers.Offset, creationDateOffset: flatbuffers.Offset, originatorOffset: flatbuffers.Offset, metaStartOffset: flatbuffers.Offset, timeSystemOffset: flatbuffers.Offset, startTimeOffset: flatbuffers.Offset, stopTimeOffset: flatbuffers.Offset, participant1Offset: flatbuffers.Offset, participant2Offset: flatbuffers.Offset, participant3Offset: flatbuffers.Offset, participant4Offset: flatbuffers.Offset, participant5Offset: flatbuffers.Offset, modeOffset: flatbuffers.Offset, path1: number, path2: number, transmitBandOffset: flatbuffers.Offset, receiveBandOffset: flatbuffers.Offset, integrationInterval: number, integrationRefOffset: flatbuffers.Offset, receiveDelay2: number, receiveDelay3: number, dataQualityOffset: flatbuffers.Offset, metaStopOffset: flatbuffers.Offset, dataStartOffset: flatbuffers.Offset, transmitFreq1: number, receiveFreqOffset: flatbuffers.Offset, dataStopOffset: flatbuffers.Offset, timetagRefOffset: flatbuffers.Offset, angleTypeOffset: flatbuffers.Offset, angle1Offset: flatbuffers.Offset, angle2Offset: flatbuffers.Offset, angleUncertainty1: number, angleUncertainty2: number, rangeRate: number, rangeUncertainty: number, rangeModeOffset: flatbuffers.Offset, rangeModulus: number, correctionAngle1: number, correctionAngle2: number, correctionsAppliedOffset: flatbuffers.Offset, tropoDryOffset: flatbuffers.Offset, tropoWetOffset: flatbuffers.Offset, stecOffset: flatbuffers.Offset, pressureOffset: flatbuffers.Offset, rhumidityOffset: flatbuffers.Offset, temperatureOffset: flatbuffers.Offset, clockBiasOffset: flatbuffers.Offset, clockDriftOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): TDMT;
    unpackTo(_o: TDMT): void;
}
export declare class TDMT implements flatbuffers.IGeneratedObject {
    observerId: string | Uint8Array | null;
    observerX: number;
    observerY: number;
    observerZ: number;
    observerVx: number;
    observerVy: number;
    observerVz: number;
    observerPositionReferenceFrame: refFrame;
    obsReferenceFrame: refFrame;
    epoch: string | Uint8Array | null;
    ccsdsTdmVers: string | Uint8Array | null;
    comment: (string)[];
    creationDate: string | Uint8Array | null;
    originator: string | Uint8Array | null;
    metaStart: string | Uint8Array | null;
    timeSystem: string | Uint8Array | null;
    startTime: string | Uint8Array | null;
    stopTime: string | Uint8Array | null;
    participant1: string | Uint8Array | null;
    participant2: string | Uint8Array | null;
    participant3: string | Uint8Array | null;
    participant4: string | Uint8Array | null;
    participant5: string | Uint8Array | null;
    mode: string | Uint8Array | null;
    path1: number;
    path2: number;
    transmitBand: string | Uint8Array | null;
    receiveBand: string | Uint8Array | null;
    integrationInterval: number;
    integrationRef: string | Uint8Array | null;
    receiveDelay2: number;
    receiveDelay3: number;
    dataQuality: string | Uint8Array | null;
    metaStop: string | Uint8Array | null;
    dataStart: string | Uint8Array | null;
    transmitFreq1: number;
    receiveFreq: (number)[];
    dataStop: string | Uint8Array | null;
    timetagRef: string | Uint8Array | null;
    angleType: string | Uint8Array | null;
    angle1: (number)[];
    angle2: (number)[];
    angleUncertainty1: number;
    angleUncertainty2: number;
    rangeRate: number;
    rangeUncertainty: number;
    rangeMode: string | Uint8Array | null;
    rangeModulus: number;
    correctionAngle1: number;
    correctionAngle2: number;
    correctionsApplied: string | Uint8Array | null;
    tropoDry: (number)[];
    tropoWet: (number)[];
    stec: (number)[];
    pressure: (number)[];
    rhumidity: (number)[];
    temperature: (number)[];
    clockBias: (number)[];
    clockDrift: (number)[];
    constructor(observerId?: string | Uint8Array | null, observerX?: number, observerY?: number, observerZ?: number, observerVx?: number, observerVy?: number, observerVz?: number, observerPositionReferenceFrame?: refFrame, obsReferenceFrame?: refFrame, epoch?: string | Uint8Array | null, ccsdsTdmVers?: string | Uint8Array | null, comment?: (string)[], creationDate?: string | Uint8Array | null, originator?: string | Uint8Array | null, metaStart?: string | Uint8Array | null, timeSystem?: string | Uint8Array | null, startTime?: string | Uint8Array | null, stopTime?: string | Uint8Array | null, participant1?: string | Uint8Array | null, participant2?: string | Uint8Array | null, participant3?: string | Uint8Array | null, participant4?: string | Uint8Array | null, participant5?: string | Uint8Array | null, mode?: string | Uint8Array | null, path1?: number, path2?: number, transmitBand?: string | Uint8Array | null, receiveBand?: string | Uint8Array | null, integrationInterval?: number, integrationRef?: string | Uint8Array | null, receiveDelay2?: number, receiveDelay3?: number, dataQuality?: string | Uint8Array | null, metaStop?: string | Uint8Array | null, dataStart?: string | Uint8Array | null, transmitFreq1?: number, receiveFreq?: (number)[], dataStop?: string | Uint8Array | null, timetagRef?: string | Uint8Array | null, angleType?: string | Uint8Array | null, angle1?: (number)[], angle2?: (number)[], angleUncertainty1?: number, angleUncertainty2?: number, rangeRate?: number, rangeUncertainty?: number, rangeMode?: string | Uint8Array | null, rangeModulus?: number, correctionAngle1?: number, correctionAngle2?: number, correctionsApplied?: string | Uint8Array | null, tropoDry?: (number)[], tropoWet?: (number)[], stec?: (number)[], pressure?: (number)[], rhumidity?: (number)[], temperature?: (number)[], clockBias?: (number)[], clockDrift?: (number)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=tdm.d.ts.map