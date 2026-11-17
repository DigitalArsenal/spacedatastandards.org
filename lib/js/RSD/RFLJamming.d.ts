import * as flatbuffers from 'flatbuffers';
import { RFLEndpoint, RFLEndpointT } from './RFLEndpoint.js';
/**
 * A jamming assessment of one link: the jammer and the stated values the
 * assessment and its countermeasures use. Inputs only; what it yields is this
 * record's samples. A record that carries it with no samples is the
 * assessment's definition, to be sampled.
 */
export declare class RFLJamming implements flatbuffers.IUnpackableObject<RFLJammingT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): RFLJamming;
    static getRootAsRFLJamming(bb: flatbuffers.ByteBuffer, obj?: RFLJamming): RFLJamming;
    static getSizePrefixedRootAsRFLJamming(bb: flatbuffers.ByteBuffer, obj?: RFLJamming): RFLJamming;
    /**
     * Index in LINKS of the link assessed.
     */
    LINK_INDEX(): number;
    /**
     * The jammer's end: its site (SIT_ID) or its platform.
     */
    JAMMER_ENDPOINT(obj?: RFLEndpoint): RFLEndpoint | null;
    /**
     * Zero-based index, in the analysis window, of the spacecraft's pass over
     * the link's ground end that is assessed.
     */
    PASS_INDEX(): number;
    /**
     * The ground terminal antenna's stated gain toward the jammer, dBi.
     */
    TERMINAL_GAIN_TOWARD_JAMMER_DBI(): number;
    /**
     * True when TERMINAL_GAIN_TOWARD_JAMMER_DBI is stated.
     */
    HAS_TERMINAL_GAIN_TOWARD_JAMMER_DBI(): boolean;
    /**
     * Countermeasure: the link's EIRP raised by this many dB.
     */
    POWER_STEP_DB(): number;
    /**
     * Countermeasure: processing gain, dB, as the operator states it.
     */
    PROCESSING_GAIN_DB(): number;
    /**
     * True when PROCESSING_GAIN_DB is stated; it has no default.
     */
    HAS_PROCESSING_GAIN_DB(): boolean;
    /**
     * PAP_ID of the $PAP of the receiving array used by the narrower-beam and
     * null countermeasures.
     */
    ARRAY_PAP_ID(): string | null;
    ARRAY_PAP_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Denial area about the link's ground end: radius, km.
     */
    AREA_RADIUS_KM(): number;
    /**
     * Denial area: number of cells across the radius.
     */
    AREA_RESOLUTION(): number;
    static startRFLJamming(builder: flatbuffers.Builder): void;
    static addLinkIndex(builder: flatbuffers.Builder, LINK_INDEX: number): void;
    static addJammerEndpoint(builder: flatbuffers.Builder, JAMMER_ENDPOINTOffset: flatbuffers.Offset): void;
    static addPassIndex(builder: flatbuffers.Builder, PASS_INDEX: number): void;
    static addTerminalGainTowardJammerDbi(builder: flatbuffers.Builder, TERMINAL_GAIN_TOWARD_JAMMER_DBI: number): void;
    static addHasTerminalGainTowardJammerDbi(builder: flatbuffers.Builder, HAS_TERMINAL_GAIN_TOWARD_JAMMER_DBI: boolean): void;
    static addPowerStepDb(builder: flatbuffers.Builder, POWER_STEP_DB: number): void;
    static addProcessingGainDb(builder: flatbuffers.Builder, PROCESSING_GAIN_DB: number): void;
    static addHasProcessingGainDb(builder: flatbuffers.Builder, HAS_PROCESSING_GAIN_DB: boolean): void;
    static addArrayPapId(builder: flatbuffers.Builder, ARRAY_PAP_IDOffset: flatbuffers.Offset): void;
    static addAreaRadiusKm(builder: flatbuffers.Builder, AREA_RADIUS_KM: number): void;
    static addAreaResolution(builder: flatbuffers.Builder, AREA_RESOLUTION: number): void;
    static endRFLJamming(builder: flatbuffers.Builder): flatbuffers.Offset;
    unpack(): RFLJammingT;
    unpackTo(_o: RFLJammingT): void;
}
export declare class RFLJammingT implements flatbuffers.IGeneratedObject {
    LINK_INDEX: number;
    JAMMER_ENDPOINT: RFLEndpointT | null;
    PASS_INDEX: number;
    TERMINAL_GAIN_TOWARD_JAMMER_DBI: number;
    HAS_TERMINAL_GAIN_TOWARD_JAMMER_DBI: boolean;
    POWER_STEP_DB: number;
    PROCESSING_GAIN_DB: number;
    HAS_PROCESSING_GAIN_DB: boolean;
    ARRAY_PAP_ID: string | Uint8Array | null;
    AREA_RADIUS_KM: number;
    AREA_RESOLUTION: number;
    constructor(LINK_INDEX?: number, JAMMER_ENDPOINT?: RFLEndpointT | null, PASS_INDEX?: number, TERMINAL_GAIN_TOWARD_JAMMER_DBI?: number, HAS_TERMINAL_GAIN_TOWARD_JAMMER_DBI?: boolean, POWER_STEP_DB?: number, PROCESSING_GAIN_DB?: number, HAS_PROCESSING_GAIN_DB?: boolean, ARRAY_PAP_ID?: string | Uint8Array | null, AREA_RADIUS_KM?: number, AREA_RESOLUTION?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=RFLJamming.d.ts.map