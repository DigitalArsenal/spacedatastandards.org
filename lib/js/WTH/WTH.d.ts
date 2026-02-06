import * as flatbuffers from 'flatbuffers';
/**
 * Weather Data
 */
export declare class WTH implements flatbuffers.IUnpackableObject<WTHT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): WTH;
    static getRootAsWTH(bb: flatbuffers.ByteBuffer, obj?: WTH): WTH;
    static getSizePrefixedRootAsWTH(bb: flatbuffers.ByteBuffer, obj?: WTH): WTH;
    static bufferHasIdentifier(bb: flatbuffers.ByteBuffer): boolean;
    /**
     * Unique identifier
     */
    ID(): string | null;
    ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
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
     * Observation time (ISO 8601)
     */
    OB_TIME(): string | null;
    OB_TIME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * File creation time (ISO 8601)
     */
    FILE_CREATION(): string | null;
    FILE_CREATION(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Quality control value
     */
    QC_VALUE(): number;
    /**
     * Terminal altitude (km)
     */
    TERM_ALT(): number;
    /**
     * Average transmit power (dBm)
     */
    AVG_TX_PWR(): number;
    /**
     * Average reflected power (dBm)
     */
    AVG_REF_PWR(): number;
    /**
     * Sector number
     */
    SECTOR_NUM(): number;
    /**
     * Number of data elements
     */
    NUM_ELEMENTS(): number;
    /**
     * Checksum
     */
    CHECKSUM(): number;
    /**
     * Signal power values (dBm)
     */
    SIG_PWRS(index: number): number | null;
    sigPwrsLength(): number;
    sigPwrsArray(): Float64Array | null;
    /**
     * Noise level values (dBm)
     */
    NOISE_LVLS(index: number): number | null;
    noiseLvlsLength(): number;
    noiseLvlsArray(): Float64Array | null;
    /**
     * Spectral width values (m/s)
     */
    SPEC_WIDTHS(index: number): number | null;
    specWidthsLength(): number;
    specWidthsArray(): Float64Array | null;
    /**
     * First guess average values
     */
    FIRST_GUESS_AVGS(index: number): number | null;
    firstGuessAvgsLength(): number;
    firstGuessAvgsArray(): Float64Array | null;
    /**
     * Time domain average sample numbers
     */
    TD_AVG_SAMPLE_NUMS(index: number): number | null;
    tdAvgSampleNumsLength(): number;
    tdAvgSampleNumsArray(): Float64Array | null;
    /**
     * Co-integration values
     */
    CO_INTEGS(index: number): number | null;
    coIntegsLength(): number;
    coIntegsArray(): Float64Array | null;
    /**
     * Spectral average values
     */
    SPEC_AVGS(index: number): number | null;
    specAvgsLength(): number;
    specAvgsArray(): Float64Array | null;
    /**
     * Interpulse periods (microseconds)
     */
    INTERPULSE_PERIODS(index: number): number | null;
    interpulsePeriodsLength(): number;
    interpulsePeriodsArray(): Float64Array | null;
    /**
     * Doppler velocities (m/s)
     */
    DOPP_VELS(index: number): number | null;
    doppVelsLength(): number;
    doppVelsArray(): Float64Array | null;
    /**
     * Consecutive records count
     */
    CONS_RECS(index: number): number | null;
    consRecsLength(): number;
    consRecsArray(): Float64Array | null;
    /**
     * Signal-to-noise ratios (dB)
     */
    SNRS(index: number): number | null;
    snrsLength(): number;
    snrsArray(): Float64Array | null;
    /**
     * Signal strength (dBm)
     */
    SIG_STRENGTH(): number;
    /**
     * Error ellipse semi-major axis (km)
     */
    SEMI_MAJOR_AXIS(): number;
    /**
     * Error ellipse semi-minor axis (km)
     */
    SEMI_MINOR_AXIS(): number;
    /**
     * Error ellipse orientation angle (degrees)
     */
    ANGLE_ORIENTATION(): number;
    /**
     * Lightning event number
     */
    LIGHT_EVENT_NUM(): number;
    /**
     * Lightning detection sensor identifiers
     */
    LIGHT_DET_SENSORS(index: number): string;
    LIGHT_DET_SENSORS(index: number, optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    lightDetSensorsLength(): number;
    /**
     * Position confidence (0-1)
     */
    POS_CONFIDENCE(): number;
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
    static startWTH(builder: flatbuffers.Builder): void;
    static addId(builder: flatbuffers.Builder, IDOffset: flatbuffers.Offset): void;
    static addIdSensor(builder: flatbuffers.Builder, ID_SENSOROffset: flatbuffers.Offset): void;
    static addOrigSensorId(builder: flatbuffers.Builder, ORIG_SENSOR_IDOffset: flatbuffers.Offset): void;
    static addObTime(builder: flatbuffers.Builder, OB_TIMEOffset: flatbuffers.Offset): void;
    static addFileCreation(builder: flatbuffers.Builder, FILE_CREATIONOffset: flatbuffers.Offset): void;
    static addQcValue(builder: flatbuffers.Builder, QC_VALUE: number): void;
    static addTermAlt(builder: flatbuffers.Builder, TERM_ALT: number): void;
    static addAvgTxPwr(builder: flatbuffers.Builder, AVG_TX_PWR: number): void;
    static addAvgRefPwr(builder: flatbuffers.Builder, AVG_REF_PWR: number): void;
    static addSectorNum(builder: flatbuffers.Builder, SECTOR_NUM: number): void;
    static addNumElements(builder: flatbuffers.Builder, NUM_ELEMENTS: number): void;
    static addChecksum(builder: flatbuffers.Builder, CHECKSUM: number): void;
    static addSigPwrs(builder: flatbuffers.Builder, SIG_PWRSOffset: flatbuffers.Offset): void;
    static createSigPwrsVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createSigPwrsVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startSigPwrsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addNoiseLvls(builder: flatbuffers.Builder, NOISE_LVLSOffset: flatbuffers.Offset): void;
    static createNoiseLvlsVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createNoiseLvlsVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startNoiseLvlsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addSpecWidths(builder: flatbuffers.Builder, SPEC_WIDTHSOffset: flatbuffers.Offset): void;
    static createSpecWidthsVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createSpecWidthsVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startSpecWidthsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addFirstGuessAvgs(builder: flatbuffers.Builder, FIRST_GUESS_AVGSOffset: flatbuffers.Offset): void;
    static createFirstGuessAvgsVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createFirstGuessAvgsVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startFirstGuessAvgsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addTdAvgSampleNums(builder: flatbuffers.Builder, TD_AVG_SAMPLE_NUMSOffset: flatbuffers.Offset): void;
    static createTdAvgSampleNumsVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createTdAvgSampleNumsVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startTdAvgSampleNumsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addCoIntegs(builder: flatbuffers.Builder, CO_INTEGSOffset: flatbuffers.Offset): void;
    static createCoIntegsVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createCoIntegsVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startCoIntegsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addSpecAvgs(builder: flatbuffers.Builder, SPEC_AVGSOffset: flatbuffers.Offset): void;
    static createSpecAvgsVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createSpecAvgsVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startSpecAvgsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addInterpulsePeriods(builder: flatbuffers.Builder, INTERPULSE_PERIODSOffset: flatbuffers.Offset): void;
    static createInterpulsePeriodsVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createInterpulsePeriodsVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startInterpulsePeriodsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addDoppVels(builder: flatbuffers.Builder, DOPP_VELSOffset: flatbuffers.Offset): void;
    static createDoppVelsVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createDoppVelsVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startDoppVelsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addConsRecs(builder: flatbuffers.Builder, CONS_RECSOffset: flatbuffers.Offset): void;
    static createConsRecsVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createConsRecsVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startConsRecsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addSnrs(builder: flatbuffers.Builder, SNRSOffset: flatbuffers.Offset): void;
    static createSnrsVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createSnrsVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startSnrsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addSigStrength(builder: flatbuffers.Builder, SIG_STRENGTH: number): void;
    static addSemiMajorAxis(builder: flatbuffers.Builder, SEMI_MAJOR_AXIS: number): void;
    static addSemiMinorAxis(builder: flatbuffers.Builder, SEMI_MINOR_AXIS: number): void;
    static addAngleOrientation(builder: flatbuffers.Builder, ANGLE_ORIENTATION: number): void;
    static addLightEventNum(builder: flatbuffers.Builder, LIGHT_EVENT_NUM: number): void;
    static addLightDetSensors(builder: flatbuffers.Builder, LIGHT_DET_SENSORSOffset: flatbuffers.Offset): void;
    static createLightDetSensorsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startLightDetSensorsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addPosConfidence(builder: flatbuffers.Builder, POS_CONFIDENCE: number): void;
    static addSrcTyps(builder: flatbuffers.Builder, SRC_TYPSOffset: flatbuffers.Offset): void;
    static createSrcTypsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startSrcTypsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addSrcIds(builder: flatbuffers.Builder, SRC_IDSOffset: flatbuffers.Offset): void;
    static createSrcIdsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startSrcIdsVector(builder: flatbuffers.Builder, numElems: number): void;
    static endWTH(builder: flatbuffers.Builder): flatbuffers.Offset;
    static finishWTHBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static finishSizePrefixedWTHBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static createWTH(builder: flatbuffers.Builder, IDOffset: flatbuffers.Offset, ID_SENSOROffset: flatbuffers.Offset, ORIG_SENSOR_IDOffset: flatbuffers.Offset, OB_TIMEOffset: flatbuffers.Offset, FILE_CREATIONOffset: flatbuffers.Offset, QC_VALUE: number, TERM_ALT: number, AVG_TX_PWR: number, AVG_REF_PWR: number, SECTOR_NUM: number, NUM_ELEMENTS: number, CHECKSUM: number, SIG_PWRSOffset: flatbuffers.Offset, NOISE_LVLSOffset: flatbuffers.Offset, SPEC_WIDTHSOffset: flatbuffers.Offset, FIRST_GUESS_AVGSOffset: flatbuffers.Offset, TD_AVG_SAMPLE_NUMSOffset: flatbuffers.Offset, CO_INTEGSOffset: flatbuffers.Offset, SPEC_AVGSOffset: flatbuffers.Offset, INTERPULSE_PERIODSOffset: flatbuffers.Offset, DOPP_VELSOffset: flatbuffers.Offset, CONS_RECSOffset: flatbuffers.Offset, SNRSOffset: flatbuffers.Offset, SIG_STRENGTH: number, SEMI_MAJOR_AXIS: number, SEMI_MINOR_AXIS: number, ANGLE_ORIENTATION: number, LIGHT_EVENT_NUM: number, LIGHT_DET_SENSORSOffset: flatbuffers.Offset, POS_CONFIDENCE: number, SRC_TYPSOffset: flatbuffers.Offset, SRC_IDSOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): WTHT;
    unpackTo(_o: WTHT): void;
}
export declare class WTHT implements flatbuffers.IGeneratedObject {
    ID: string | Uint8Array | null;
    ID_SENSOR: string | Uint8Array | null;
    ORIG_SENSOR_ID: string | Uint8Array | null;
    OB_TIME: string | Uint8Array | null;
    FILE_CREATION: string | Uint8Array | null;
    QC_VALUE: number;
    TERM_ALT: number;
    AVG_TX_PWR: number;
    AVG_REF_PWR: number;
    SECTOR_NUM: number;
    NUM_ELEMENTS: number;
    CHECKSUM: number;
    SIG_PWRS: (number)[];
    NOISE_LVLS: (number)[];
    SPEC_WIDTHS: (number)[];
    FIRST_GUESS_AVGS: (number)[];
    TD_AVG_SAMPLE_NUMS: (number)[];
    CO_INTEGS: (number)[];
    SPEC_AVGS: (number)[];
    INTERPULSE_PERIODS: (number)[];
    DOPP_VELS: (number)[];
    CONS_RECS: (number)[];
    SNRS: (number)[];
    SIG_STRENGTH: number;
    SEMI_MAJOR_AXIS: number;
    SEMI_MINOR_AXIS: number;
    ANGLE_ORIENTATION: number;
    LIGHT_EVENT_NUM: number;
    LIGHT_DET_SENSORS: (string)[];
    POS_CONFIDENCE: number;
    SRC_TYPS: (string)[];
    SRC_IDS: (string)[];
    constructor(ID?: string | Uint8Array | null, ID_SENSOR?: string | Uint8Array | null, ORIG_SENSOR_ID?: string | Uint8Array | null, OB_TIME?: string | Uint8Array | null, FILE_CREATION?: string | Uint8Array | null, QC_VALUE?: number, TERM_ALT?: number, AVG_TX_PWR?: number, AVG_REF_PWR?: number, SECTOR_NUM?: number, NUM_ELEMENTS?: number, CHECKSUM?: number, SIG_PWRS?: (number)[], NOISE_LVLS?: (number)[], SPEC_WIDTHS?: (number)[], FIRST_GUESS_AVGS?: (number)[], TD_AVG_SAMPLE_NUMS?: (number)[], CO_INTEGS?: (number)[], SPEC_AVGS?: (number)[], INTERPULSE_PERIODS?: (number)[], DOPP_VELS?: (number)[], CONS_RECS?: (number)[], SNRS?: (number)[], SIG_STRENGTH?: number, SEMI_MAJOR_AXIS?: number, SEMI_MINOR_AXIS?: number, ANGLE_ORIENTATION?: number, LIGHT_EVENT_NUM?: number, LIGHT_DET_SENSORS?: (string)[], POS_CONFIDENCE?: number, SRC_TYPS?: (string)[], SRC_IDS?: (string)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=WTH.d.ts.map