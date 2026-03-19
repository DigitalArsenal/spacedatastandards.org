import * as flatbuffers from 'flatbuffers';
import { CAT, CATT } from './CAT.js';
import { PPEOrbitalElementRecord, PPEOrbitalElementRecordT } from './PPEOrbitalElementRecord.js';
import { PPEPositionRecord, PPEPositionRecordT } from './PPEPositionRecord.js';
import { RFM, RFMT } from './RFM.js';
import { polynomialBasisType } from './polynomialBasisType.js';
import { timeSystem } from './timeSystem.js';
/**
 * Polynomial Ephemeris — top-level message containing metadata and
 * one or more polynomial coefficient records for a single space object.
 *
 * A PPE message may contain position records, orbital element records, or both.
 * Records should be ordered chronologically by EPOCH_MID and should collectively
 * cover the time span [START_TIME, STOP_TIME] without gaps.
 */
export declare class PPE implements flatbuffers.IUnpackableObject<PPET> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): PPE;
    static getRootAsPPE(bb: flatbuffers.ByteBuffer, obj?: PPE): PPE;
    static getSizePrefixedRootAsPPE(bb: flatbuffers.ByteBuffer, obj?: PPE): PPE;
    static bufferHasIdentifier(bb: flatbuffers.ByteBuffer): boolean;
    /**
     * Plain-text comments.
     */
    COMMENT(index: number): string;
    COMMENT(index: number, optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    commentLength(): number;
    /**
     * Space object identification.
     */
    OBJECT(obj?: CAT): CAT | null;
    /**
     * Origin of the reference frame (e.g., EARTH, MOON, MARS).
     */
    CENTER_NAME(): string | null;
    CENTER_NAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Reference frame for position/velocity coefficients.
     */
    REFERENCE_FRAME(obj?: RFM): RFM | null;
    /**
     * Time system used for all epochs in this message.
     */
    TIME_SYSTEM(): timeSystem;
    /**
     * Start of the total time span covered by this ephemeris (ISO 8601).
     */
    START_TIME(): string | null;
    START_TIME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * End of the total time span covered by this ephemeris (ISO 8601).
     */
    STOP_TIME(): string | null;
    STOP_TIME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Default polynomial basis type for all records in this message.
     * Individual records may override this with their own BASIS_TYPE field.
     */
    DEFAULT_BASIS_TYPE(): polynomialBasisType;
    /**
     * Array of position polynomial records.
     * Each record covers a time segment; together they span [START_TIME, STOP_TIME].
     */
    POSITION_RECORDS(index: number, obj?: PPEPositionRecord): PPEPositionRecord | null;
    positionRecordsLength(): number;
    /**
     * Array of orbital element polynomial records.
     * Each record covers a time segment; together they span [START_TIME, STOP_TIME].
     */
    ORBITAL_ELEMENT_RECORDS(index: number, obj?: PPEOrbitalElementRecord): PPEOrbitalElementRecord | null;
    orbitalElementRecordsLength(): number;
    /**
     * Generating ephemeris source (e.g., "JPL DE440", "HPOP v2.1", "Basilisk chebyPosEphem").
     */
    EPHEMERIS_SOURCE(): string | null;
    EPHEMERIS_SOURCE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Fit span in seconds used to generate each polynomial segment.
     * Informational; actual spans are in individual records.
     */
    NOMINAL_SEGMENT_SPAN(): number;
    /**
     * Nominal number of coefficients per segment.
     * Informational; actual counts are in individual records.
     */
    NOMINAL_NUM_COEFFICIENTS(): number;
    static startPPE(builder: flatbuffers.Builder): void;
    static addComment(builder: flatbuffers.Builder, COMMENTOffset: flatbuffers.Offset): void;
    static createCommentVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startCommentVector(builder: flatbuffers.Builder, numElems: number): void;
    static addObject(builder: flatbuffers.Builder, OBJECTOffset: flatbuffers.Offset): void;
    static addCenterName(builder: flatbuffers.Builder, CENTER_NAMEOffset: flatbuffers.Offset): void;
    static addReferenceFrame(builder: flatbuffers.Builder, REFERENCE_FRAMEOffset: flatbuffers.Offset): void;
    static addTimeSystem(builder: flatbuffers.Builder, TIME_SYSTEM: timeSystem): void;
    static addStartTime(builder: flatbuffers.Builder, START_TIMEOffset: flatbuffers.Offset): void;
    static addStopTime(builder: flatbuffers.Builder, STOP_TIMEOffset: flatbuffers.Offset): void;
    static addDefaultBasisType(builder: flatbuffers.Builder, DEFAULT_BASIS_TYPE: polynomialBasisType): void;
    static addPositionRecords(builder: flatbuffers.Builder, POSITION_RECORDSOffset: flatbuffers.Offset): void;
    static createPositionRecordsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startPositionRecordsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addOrbitalElementRecords(builder: flatbuffers.Builder, ORBITAL_ELEMENT_RECORDSOffset: flatbuffers.Offset): void;
    static createOrbitalElementRecordsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startOrbitalElementRecordsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addEphemerisSource(builder: flatbuffers.Builder, EPHEMERIS_SOURCEOffset: flatbuffers.Offset): void;
    static addNominalSegmentSpan(builder: flatbuffers.Builder, NOMINAL_SEGMENT_SPAN: number): void;
    static addNominalNumCoefficients(builder: flatbuffers.Builder, NOMINAL_NUM_COEFFICIENTS: number): void;
    static endPPE(builder: flatbuffers.Builder): flatbuffers.Offset;
    static finishPPEBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static finishSizePrefixedPPEBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    unpack(): PPET;
    unpackTo(_o: PPET): void;
}
export declare class PPET implements flatbuffers.IGeneratedObject {
    COMMENT: (string)[];
    OBJECT: CATT | null;
    CENTER_NAME: string | Uint8Array | null;
    REFERENCE_FRAME: RFMT | null;
    TIME_SYSTEM: timeSystem;
    START_TIME: string | Uint8Array | null;
    STOP_TIME: string | Uint8Array | null;
    DEFAULT_BASIS_TYPE: polynomialBasisType;
    POSITION_RECORDS: (PPEPositionRecordT)[];
    ORBITAL_ELEMENT_RECORDS: (PPEOrbitalElementRecordT)[];
    EPHEMERIS_SOURCE: string | Uint8Array | null;
    NOMINAL_SEGMENT_SPAN: number;
    NOMINAL_NUM_COEFFICIENTS: number;
    constructor(COMMENT?: (string)[], OBJECT?: CATT | null, CENTER_NAME?: string | Uint8Array | null, REFERENCE_FRAME?: RFMT | null, TIME_SYSTEM?: timeSystem, START_TIME?: string | Uint8Array | null, STOP_TIME?: string | Uint8Array | null, DEFAULT_BASIS_TYPE?: polynomialBasisType, POSITION_RECORDS?: (PPEPositionRecordT)[], ORBITAL_ELEMENT_RECORDS?: (PPEOrbitalElementRecordT)[], EPHEMERIS_SOURCE?: string | Uint8Array | null, NOMINAL_SEGMENT_SPAN?: number, NOMINAL_NUM_COEFFICIENTS?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=PPE.d.ts.map