import * as flatbuffers from 'flatbuffers';
import { emitterType } from './emitterType.js';
import { rfEmitterDetail, rfEmitterDetailT } from './rfEmitterDetail.js';
/**
 * RF Emitter
 */
export declare class RFE implements flatbuffers.IUnpackableObject<RFET> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): RFE;
    static getRootAsRFE(bb: flatbuffers.ByteBuffer, obj?: RFE): RFE;
    static getSizePrefixedRootAsRFE(bb: flatbuffers.ByteBuffer, obj?: RFE): RFE;
    static bufferHasIdentifier(bb: flatbuffers.ByteBuffer): boolean;
    /**
     * Unique emitter identifier
     */
    ID(): string | null;
    ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Reference to parent entity
     */
    ID_ENTITY(): string | null;
    ID_ENTITY(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Emitter name or designation
     */
    NAME(): string | null;
    NAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Emitter type
     */
    TYPE(): emitterType;
    /**
     * Parent entity designator
     */
    ENTITY(): string | null;
    ENTITY(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * ELNOT (Electronic Notation)
     */
    ELNOT(): string | null;
    ELNOT(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * NATO reporting name
     */
    NATO_NAME(): string | null;
    NATO_NAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Platform type (e.g., SHIP, AIRCRAFT, GROUND, SATELLITE)
     */
    PLATFORM_TYPE(): string | null;
    PLATFORM_TYPE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Country of origin
     */
    COUNTRY(): string | null;
    COUNTRY(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Primary function description
     */
    FUNCTION(): string | null;
    FUNCTION(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Operating band (e.g., HF, VHF, UHF, L, S, C, X, Ku, Ka)
     */
    BAND(): string | null;
    BAND(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Minimum operating frequency in MHz
     */
    FREQ_MIN(): number;
    /**
     * Maximum operating frequency in MHz
     */
    FREQ_MAX(): number;
    /**
     * Peak power in kW
     */
    PEAK_POWER(): number;
    /**
     * Average power in kW
     */
    AVG_POWER(): number;
    /**
     * Antenna gain in dBi
     */
    ANTENNA_GAIN(): number;
    /**
     * Number of operating modes
     */
    NUM_MODES(): number;
    /**
     * Emitter operating mode details
     */
    RF_EMITTER_DETAILS(index: number, obj?: rfEmitterDetail): rfEmitterDetail | null;
    rfEmitterDetailsLength(): number;
    /**
     * Threat level assessment
     */
    THREAT_LEVEL(): string | null;
    THREAT_LEVEL(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Additional notes
     */
    NOTES(): string | null;
    NOTES(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    static startRFE(builder: flatbuffers.Builder): void;
    static addId(builder: flatbuffers.Builder, IDOffset: flatbuffers.Offset): void;
    static addIdEntity(builder: flatbuffers.Builder, ID_ENTITYOffset: flatbuffers.Offset): void;
    static addName(builder: flatbuffers.Builder, NAMEOffset: flatbuffers.Offset): void;
    static addType(builder: flatbuffers.Builder, TYPE: emitterType): void;
    static addEntity(builder: flatbuffers.Builder, ENTITYOffset: flatbuffers.Offset): void;
    static addElnot(builder: flatbuffers.Builder, ELNOTOffset: flatbuffers.Offset): void;
    static addNatoName(builder: flatbuffers.Builder, NATO_NAMEOffset: flatbuffers.Offset): void;
    static addPlatformType(builder: flatbuffers.Builder, PLATFORM_TYPEOffset: flatbuffers.Offset): void;
    static addCountry(builder: flatbuffers.Builder, COUNTRYOffset: flatbuffers.Offset): void;
    static addFunction(builder: flatbuffers.Builder, FUNCTIONOffset: flatbuffers.Offset): void;
    static addBand(builder: flatbuffers.Builder, BANDOffset: flatbuffers.Offset): void;
    static addFreqMin(builder: flatbuffers.Builder, FREQ_MIN: number): void;
    static addFreqMax(builder: flatbuffers.Builder, FREQ_MAX: number): void;
    static addPeakPower(builder: flatbuffers.Builder, PEAK_POWER: number): void;
    static addAvgPower(builder: flatbuffers.Builder, AVG_POWER: number): void;
    static addAntennaGain(builder: flatbuffers.Builder, ANTENNA_GAIN: number): void;
    static addNumModes(builder: flatbuffers.Builder, NUM_MODES: number): void;
    static addRfEmitterDetails(builder: flatbuffers.Builder, RF_EMITTER_DETAILSOffset: flatbuffers.Offset): void;
    static createRfEmitterDetailsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startRfEmitterDetailsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addThreatLevel(builder: flatbuffers.Builder, THREAT_LEVELOffset: flatbuffers.Offset): void;
    static addNotes(builder: flatbuffers.Builder, NOTESOffset: flatbuffers.Offset): void;
    static endRFE(builder: flatbuffers.Builder): flatbuffers.Offset;
    static finishRFEBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static finishSizePrefixedRFEBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static createRFE(builder: flatbuffers.Builder, IDOffset: flatbuffers.Offset, ID_ENTITYOffset: flatbuffers.Offset, NAMEOffset: flatbuffers.Offset, TYPE: emitterType, ENTITYOffset: flatbuffers.Offset, ELNOTOffset: flatbuffers.Offset, NATO_NAMEOffset: flatbuffers.Offset, PLATFORM_TYPEOffset: flatbuffers.Offset, COUNTRYOffset: flatbuffers.Offset, FUNCTIONOffset: flatbuffers.Offset, BANDOffset: flatbuffers.Offset, FREQ_MIN: number, FREQ_MAX: number, PEAK_POWER: number, AVG_POWER: number, ANTENNA_GAIN: number, NUM_MODES: number, RF_EMITTER_DETAILSOffset: flatbuffers.Offset, THREAT_LEVELOffset: flatbuffers.Offset, NOTESOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): RFET;
    unpackTo(_o: RFET): void;
}
export declare class RFET implements flatbuffers.IGeneratedObject {
    ID: string | Uint8Array | null;
    ID_ENTITY: string | Uint8Array | null;
    NAME: string | Uint8Array | null;
    TYPE: emitterType;
    ENTITY: string | Uint8Array | null;
    ELNOT: string | Uint8Array | null;
    NATO_NAME: string | Uint8Array | null;
    PLATFORM_TYPE: string | Uint8Array | null;
    COUNTRY: string | Uint8Array | null;
    FUNCTION: string | Uint8Array | null;
    BAND: string | Uint8Array | null;
    FREQ_MIN: number;
    FREQ_MAX: number;
    PEAK_POWER: number;
    AVG_POWER: number;
    ANTENNA_GAIN: number;
    NUM_MODES: number;
    RF_EMITTER_DETAILS: (rfEmitterDetailT)[];
    THREAT_LEVEL: string | Uint8Array | null;
    NOTES: string | Uint8Array | null;
    constructor(ID?: string | Uint8Array | null, ID_ENTITY?: string | Uint8Array | null, NAME?: string | Uint8Array | null, TYPE?: emitterType, ENTITY?: string | Uint8Array | null, ELNOT?: string | Uint8Array | null, NATO_NAME?: string | Uint8Array | null, PLATFORM_TYPE?: string | Uint8Array | null, COUNTRY?: string | Uint8Array | null, FUNCTION?: string | Uint8Array | null, BAND?: string | Uint8Array | null, FREQ_MIN?: number, FREQ_MAX?: number, PEAK_POWER?: number, AVG_POWER?: number, ANTENNA_GAIN?: number, NUM_MODES?: number, RF_EMITTER_DETAILS?: (rfEmitterDetailT)[], THREAT_LEVEL?: string | Uint8Array | null, NOTES?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=RFE.d.ts.map