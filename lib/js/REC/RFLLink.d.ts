import * as flatbuffers from 'flatbuffers';
import { RFLEndpoint, RFLEndpointT } from './RFLEndpoint.js';
import { rflBudgetTerm } from './rflBudgetTerm.js';
import { rflComparison } from './rflComparison.js';
import { rflLinkKind } from './rflLinkKind.js';
/**
 * One link whose budget is sampled by this record.
 */
export declare class RFLLink implements flatbuffers.IUnpackableObject<RFLLinkT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): RFLLink;
    static getRootAsRFLLink(bb: flatbuffers.ByteBuffer, obj?: RFLLink): RFLLink;
    static getSizePrefixedRootAsRFLLink(bb: flatbuffers.ByteBuffer, obj?: RFLLink): RFLLink;
    /**
     * Producer-stable link identifier. Joins `$ACI.ACIInterval.LINK_ID` and
     * `$LKS.ID` when the same link also has an operational-state record.
     */
    LINK_ID(): string;
    LINK_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    /**
     * Human-readable link name.
     */
    LINK_NAME(): string | null;
    LINK_NAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    LINK_KIND(): rflLinkKind;
    /**
     * Transmitting endpoint.
     */
    TRANSMIT_ENDPOINT(obj?: RFLEndpoint): RFLEndpoint | null;
    /**
     * Receiving endpoint.
     */
    RECEIVE_ENDPOINT(obj?: RFLEndpoint): RFLEndpoint | null;
    /**
     * Carrier centre frequency actually used, megahertz — the `$RFB` MHz
     * convention, NOT the `$IQC` hertz convention. A consumer joining the two
     * converts explicitly at the join. Band designation is NOT duplicated here:
     * it is joined from `$RFB.BAND`.
     */
    CENTER_FREQUENCY_MHZ(): number;
    /**
     * Occupied bandwidth, megahertz.
     */
    BANDWIDTH_MHZ(): number;
    /**
     * Modulation as the producer states it (e.g. "QPSK", "8PSK", "16APSK").
     */
    MODULATION(): string | null;
    MODULATION(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Forward error correction scheme as the producer states it.
     */
    CODING(): string | null;
    CODING(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Code rate as a fraction (0-1].
     */
    CODE_RATE(): number;
    /**
     * Symbol rate in baud (symbols per second), NOT kilobaud — the `$RFB.BAUD`
     * convention.
     */
    SYMBOL_RATE_BAUD(): number;
    /**
     * Information bit rate the budget is stated for, bits per second.
     */
    DATA_RATE_BPS(): number;
    /**
     * Required threshold this link is evaluated against. THRESHOLD_TERM,
     * THRESHOLD_VALUE, THRESHOLD_UNITS and THRESHOLD_COMPARISON are meaningful
     * only together; a LINK_MARGIN_DB column without them states a margin
     * against an unstated requirement and MUST be refused.
     */
    THRESHOLD_TERM(): rflBudgetTerm;
    THRESHOLD_VALUE(): number;
    THRESHOLD_UNITS(): string | null;
    THRESHOLD_UNITS(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    THRESHOLD_COMPARISON(): rflComparison;
    /**
     * Receiver group this link belongs to. Links sharing a RECEIVER_GROUP_ID
     * and CHANNEL_GROUP_ID are mutually interfering and MUST be evaluated
     * together; a producer that shards a link matrix MUST keep a group intact
     * within one shard.
     */
    RECEIVER_GROUP_ID(): string | null;
    RECEIVER_GROUP_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    CHANNEL_GROUP_ID(): string | null;
    CHANNEL_GROUP_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Constellation or network this link belongs to.
     */
    CONSTELLATION(): string | null;
    CONSTELLATION(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Operator-facing service or mission designation.
     */
    SERVICE(): string | null;
    SERVICE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    static startRFLLink(builder: flatbuffers.Builder): void;
    static addLinkId(builder: flatbuffers.Builder, LINK_IDOffset: flatbuffers.Offset): void;
    static addLinkName(builder: flatbuffers.Builder, LINK_NAMEOffset: flatbuffers.Offset): void;
    static addLinkKind(builder: flatbuffers.Builder, LINK_KIND: rflLinkKind): void;
    static addTransmitEndpoint(builder: flatbuffers.Builder, TRANSMIT_ENDPOINTOffset: flatbuffers.Offset): void;
    static addReceiveEndpoint(builder: flatbuffers.Builder, RECEIVE_ENDPOINTOffset: flatbuffers.Offset): void;
    static addCenterFrequencyMhz(builder: flatbuffers.Builder, CENTER_FREQUENCY_MHZ: number): void;
    static addBandwidthMhz(builder: flatbuffers.Builder, BANDWIDTH_MHZ: number): void;
    static addModulation(builder: flatbuffers.Builder, MODULATIONOffset: flatbuffers.Offset): void;
    static addCoding(builder: flatbuffers.Builder, CODINGOffset: flatbuffers.Offset): void;
    static addCodeRate(builder: flatbuffers.Builder, CODE_RATE: number): void;
    static addSymbolRateBaud(builder: flatbuffers.Builder, SYMBOL_RATE_BAUD: number): void;
    static addDataRateBps(builder: flatbuffers.Builder, DATA_RATE_BPS: number): void;
    static addThresholdTerm(builder: flatbuffers.Builder, THRESHOLD_TERM: rflBudgetTerm): void;
    static addThresholdValue(builder: flatbuffers.Builder, THRESHOLD_VALUE: number): void;
    static addThresholdUnits(builder: flatbuffers.Builder, THRESHOLD_UNITSOffset: flatbuffers.Offset): void;
    static addThresholdComparison(builder: flatbuffers.Builder, THRESHOLD_COMPARISON: rflComparison): void;
    static addReceiverGroupId(builder: flatbuffers.Builder, RECEIVER_GROUP_IDOffset: flatbuffers.Offset): void;
    static addChannelGroupId(builder: flatbuffers.Builder, CHANNEL_GROUP_IDOffset: flatbuffers.Offset): void;
    static addConstellation(builder: flatbuffers.Builder, CONSTELLATIONOffset: flatbuffers.Offset): void;
    static addService(builder: flatbuffers.Builder, SERVICEOffset: flatbuffers.Offset): void;
    static endRFLLink(builder: flatbuffers.Builder): flatbuffers.Offset;
    unpack(): RFLLinkT;
    unpackTo(_o: RFLLinkT): void;
}
export declare class RFLLinkT implements flatbuffers.IGeneratedObject {
    LINK_ID: string | Uint8Array | null;
    LINK_NAME: string | Uint8Array | null;
    LINK_KIND: rflLinkKind;
    TRANSMIT_ENDPOINT: RFLEndpointT | null;
    RECEIVE_ENDPOINT: RFLEndpointT | null;
    CENTER_FREQUENCY_MHZ: number;
    BANDWIDTH_MHZ: number;
    MODULATION: string | Uint8Array | null;
    CODING: string | Uint8Array | null;
    CODE_RATE: number;
    SYMBOL_RATE_BAUD: number;
    DATA_RATE_BPS: number;
    THRESHOLD_TERM: rflBudgetTerm;
    THRESHOLD_VALUE: number;
    THRESHOLD_UNITS: string | Uint8Array | null;
    THRESHOLD_COMPARISON: rflComparison;
    RECEIVER_GROUP_ID: string | Uint8Array | null;
    CHANNEL_GROUP_ID: string | Uint8Array | null;
    CONSTELLATION: string | Uint8Array | null;
    SERVICE: string | Uint8Array | null;
    constructor(LINK_ID?: string | Uint8Array | null, LINK_NAME?: string | Uint8Array | null, LINK_KIND?: rflLinkKind, TRANSMIT_ENDPOINT?: RFLEndpointT | null, RECEIVE_ENDPOINT?: RFLEndpointT | null, CENTER_FREQUENCY_MHZ?: number, BANDWIDTH_MHZ?: number, MODULATION?: string | Uint8Array | null, CODING?: string | Uint8Array | null, CODE_RATE?: number, SYMBOL_RATE_BAUD?: number, DATA_RATE_BPS?: number, THRESHOLD_TERM?: rflBudgetTerm, THRESHOLD_VALUE?: number, THRESHOLD_UNITS?: string | Uint8Array | null, THRESHOLD_COMPARISON?: rflComparison, RECEIVER_GROUP_ID?: string | Uint8Array | null, CHANNEL_GROUP_ID?: string | Uint8Array | null, CONSTELLATION?: string | Uint8Array | null, SERVICE?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=RFLLink.d.ts.map