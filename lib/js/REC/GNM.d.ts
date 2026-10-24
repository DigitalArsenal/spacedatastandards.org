import * as flatbuffers from 'flatbuffers';
import { gnssConstellation } from './gnssConstellation.js';
import { gnssKeplerianBroadcast, gnssKeplerianBroadcastT } from './gnssKeplerianBroadcast.js';
import { gnssNavMessageType } from './gnssNavMessageType.js';
import { gnssStateBroadcast, gnssStateBroadcastT } from './gnssStateBroadcast.js';
/**
 * GNSS broadcast navigation message: one satellite, one message. Exactly one
 * of KEPLERIAN and STATE is present, by CONSTELLATION and MESSAGE_TYPE. The
 * parameters are the broadcast ones, not an evaluated orbit; an evaluated
 * orbit belongs in $OEM.
 */
export declare class GNM implements flatbuffers.IUnpackableObject<GNMT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): GNM;
    static getRootAsGNM(bb: flatbuffers.ByteBuffer, obj?: GNM): GNM;
    static getSizePrefixedRootAsGNM(bb: flatbuffers.ByteBuffer, obj?: GNM): GNM;
    static bufferHasIdentifier(bb: flatbuffers.ByteBuffer): boolean;
    /**
     * Satellite identifier as the source writes it, for example G05, E11, C21,
     * R24. Default empty.
     */
    SATELLITE_ID(): string | null;
    SATELLITE_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Constellation of the satellite (the $GNO family's enumeration).
     */
    CONSTELLATION(): gnssConstellation;
    /**
     * Broadcast message the record came from. Default UNSPECIFIED.
     */
    MESSAGE_TYPE(): gnssNavMessageType;
    /**
     * System time scale TOC, TOE and the clock refer to, as the source names it.
     * Default empty.
     */
    TIME_SYSTEM(): string | null;
    TIME_SYSTEM(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Time of clock, ISO 8601 on TIME_SYSTEM. Default empty.
     */
    TOC(): string | null;
    TOC(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Satellite clock bias, s.
     */
    CLOCK_BIAS(): number;
    /**
     * Satellite clock drift, s/s.
     */
    CLOCK_DRIFT(): number;
    /**
     * Satellite clock drift rate, s/s^2.
     */
    CLOCK_DRIFT_RATE(): number;
    /**
     * Transmission time of the message, seconds of the system week.
     */
    TRANSMISSION_TIME(): number;
    /**
     * Health word as broadcast. Meaningful only when HAS_HEALTH.
     */
    HEALTH(): number;
    /**
     * True when HEALTH carries a value (0 is a real health word); false (the
     * default) means absent.
     */
    HAS_HEALTH(): boolean;
    /**
     * Signal accuracy (URA, SISA or URE index resolved), m.
     */
    ACCURACY(): number;
    /**
     * The accuracy index as broadcast. Meaningful only when HAS_ACCURACY_INDEX.
     */
    ACCURACY_INDEX(): number;
    /**
     * True when ACCURACY_INDEX carries a value (0 is a real index); false (the
     * default) means absent.
     */
    HAS_ACCURACY_INDEX(): boolean;
    /**
     * Group delays (TGD, BGD, ISC), s, in the order of GROUP_DELAY_NAMES. Default
     * empty.
     */
    GROUP_DELAYS(index: number): number | null;
    groupDelaysLength(): number;
    groupDelaysArray(): Float64Array | null;
    /**
     * Names of the GROUP_DELAYS, same order and length. Default empty.
     */
    GROUP_DELAY_NAMES(index: number): string;
    GROUP_DELAY_NAMES(index: number, optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    groupDelayNamesLength(): number;
    /**
     * Keplerian parameters (GPS, Galileo, BeiDou, QZSS, NavIC).
     */
    KEPLERIAN(obj?: gnssKeplerianBroadcast): gnssKeplerianBroadcast | null;
    /**
     * State vector (GLONASS, SBAS).
     */
    STATE(obj?: gnssStateBroadcast): gnssStateBroadcast | null;
    /**
     * The RINEX data-source bit field. Default 0.
     */
    DATA_SOURCES(): number;
    static startGNM(builder: flatbuffers.Builder): void;
    static addSatelliteId(builder: flatbuffers.Builder, SATELLITE_IDOffset: flatbuffers.Offset): void;
    static addConstellation(builder: flatbuffers.Builder, CONSTELLATION: gnssConstellation): void;
    static addMessageType(builder: flatbuffers.Builder, MESSAGE_TYPE: gnssNavMessageType): void;
    static addTimeSystem(builder: flatbuffers.Builder, TIME_SYSTEMOffset: flatbuffers.Offset): void;
    static addToc(builder: flatbuffers.Builder, TOCOffset: flatbuffers.Offset): void;
    static addClockBias(builder: flatbuffers.Builder, CLOCK_BIAS: number): void;
    static addClockDrift(builder: flatbuffers.Builder, CLOCK_DRIFT: number): void;
    static addClockDriftRate(builder: flatbuffers.Builder, CLOCK_DRIFT_RATE: number): void;
    static addTransmissionTime(builder: flatbuffers.Builder, TRANSMISSION_TIME: number): void;
    static addHealth(builder: flatbuffers.Builder, HEALTH: number): void;
    static addHasHealth(builder: flatbuffers.Builder, HAS_HEALTH: boolean): void;
    static addAccuracy(builder: flatbuffers.Builder, ACCURACY: number): void;
    static addAccuracyIndex(builder: flatbuffers.Builder, ACCURACY_INDEX: number): void;
    static addHasAccuracyIndex(builder: flatbuffers.Builder, HAS_ACCURACY_INDEX: boolean): void;
    static addGroupDelays(builder: flatbuffers.Builder, GROUP_DELAYSOffset: flatbuffers.Offset): void;
    static createGroupDelaysVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createGroupDelaysVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startGroupDelaysVector(builder: flatbuffers.Builder, numElems: number): void;
    static addGroupDelayNames(builder: flatbuffers.Builder, GROUP_DELAY_NAMESOffset: flatbuffers.Offset): void;
    static createGroupDelayNamesVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startGroupDelayNamesVector(builder: flatbuffers.Builder, numElems: number): void;
    static addKeplerian(builder: flatbuffers.Builder, KEPLERIANOffset: flatbuffers.Offset): void;
    static addState(builder: flatbuffers.Builder, STATEOffset: flatbuffers.Offset): void;
    static addDataSources(builder: flatbuffers.Builder, DATA_SOURCES: number): void;
    static endGNM(builder: flatbuffers.Builder): flatbuffers.Offset;
    static finishGNMBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static finishSizePrefixedGNMBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    unpack(): GNMT;
    unpackTo(_o: GNMT): void;
}
export declare class GNMT implements flatbuffers.IGeneratedObject {
    SATELLITE_ID: string | Uint8Array | null;
    CONSTELLATION: gnssConstellation;
    MESSAGE_TYPE: gnssNavMessageType;
    TIME_SYSTEM: string | Uint8Array | null;
    TOC: string | Uint8Array | null;
    CLOCK_BIAS: number;
    CLOCK_DRIFT: number;
    CLOCK_DRIFT_RATE: number;
    TRANSMISSION_TIME: number;
    HEALTH: number;
    HAS_HEALTH: boolean;
    ACCURACY: number;
    ACCURACY_INDEX: number;
    HAS_ACCURACY_INDEX: boolean;
    GROUP_DELAYS: (number)[];
    GROUP_DELAY_NAMES: (string)[];
    KEPLERIAN: gnssKeplerianBroadcastT | null;
    STATE: gnssStateBroadcastT | null;
    DATA_SOURCES: number;
    constructor(SATELLITE_ID?: string | Uint8Array | null, CONSTELLATION?: gnssConstellation, MESSAGE_TYPE?: gnssNavMessageType, TIME_SYSTEM?: string | Uint8Array | null, TOC?: string | Uint8Array | null, CLOCK_BIAS?: number, CLOCK_DRIFT?: number, CLOCK_DRIFT_RATE?: number, TRANSMISSION_TIME?: number, HEALTH?: number, HAS_HEALTH?: boolean, ACCURACY?: number, ACCURACY_INDEX?: number, HAS_ACCURACY_INDEX?: boolean, GROUP_DELAYS?: (number)[], GROUP_DELAY_NAMES?: (string)[], KEPLERIAN?: gnssKeplerianBroadcastT | null, STATE?: gnssStateBroadcastT | null, DATA_SOURCES?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=GNM.d.ts.map