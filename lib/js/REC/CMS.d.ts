import * as flatbuffers from 'flatbuffers';
import { commsTransponder, commsTransponderT } from './commsTransponder.js';
/**
 * Communications Payload
 */
export declare class CMS implements flatbuffers.IUnpackableObject<CMST> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): CMS;
    static getRootAsCMS(bb: flatbuffers.ByteBuffer, obj?: CMS): CMS;
    static getSizePrefixedRootAsCMS(bb: flatbuffers.ByteBuffer, obj?: CMS): CMS;
    static bufferHasIdentifier(bb: flatbuffers.ByteBuffer): boolean;
    /**
     * Unique identifier
     */
    ID(): string | null;
    ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Reference to parent entity
     */
    ID_ENTITY(): string | null;
    ID_ENTITY(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Communications payload name
     */
    NAME(): string | null;
    NAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Description
     */
    DESCRIPTION(): string | null;
    DESCRIPTION(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Parent entity designator
     */
    ENTITY(): string | null;
    ENTITY(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Satellite number
     */
    SAT_NO(): number;
    /**
     * Number of transponders
     */
    NUM_TRANSPONDERS(): number;
    /**
     * Transponders
     */
    TRANSPONDERS(index: number, obj?: commsTransponder): commsTransponder | null;
    transpondersLength(): number;
    /**
     * Total payload power in Watts
     */
    TOTAL_POWER(): number;
    /**
     * Total payload mass in kg
     */
    TOTAL_MASS(): number;
    /**
     * Total aggregate bandwidth in MHz
     */
    TOTAL_BANDWIDTH(): number;
    /**
     * Primary mission (e.g., FIXED_SAT, BROADCAST, MOBILE, RELAY, MILSATCOM)
     */
    MISSION(): string | null;
    MISSION(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Coverage region description
     */
    COVERAGE(): string | null;
    COVERAGE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Design lifetime in years
     */
    DESIGN_LIFE(): number;
    /**
     * Additional notes
     */
    NOTES(): string | null;
    NOTES(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    static startCMS(builder: flatbuffers.Builder): void;
    static addId(builder: flatbuffers.Builder, IDOffset: flatbuffers.Offset): void;
    static addIdEntity(builder: flatbuffers.Builder, ID_ENTITYOffset: flatbuffers.Offset): void;
    static addName(builder: flatbuffers.Builder, NAMEOffset: flatbuffers.Offset): void;
    static addDescription(builder: flatbuffers.Builder, DESCRIPTIONOffset: flatbuffers.Offset): void;
    static addEntity(builder: flatbuffers.Builder, ENTITYOffset: flatbuffers.Offset): void;
    static addSatNo(builder: flatbuffers.Builder, SAT_NO: number): void;
    static addNumTransponders(builder: flatbuffers.Builder, NUM_TRANSPONDERS: number): void;
    static addTransponders(builder: flatbuffers.Builder, TRANSPONDERSOffset: flatbuffers.Offset): void;
    static createTranspondersVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startTranspondersVector(builder: flatbuffers.Builder, numElems: number): void;
    static addTotalPower(builder: flatbuffers.Builder, TOTAL_POWER: number): void;
    static addTotalMass(builder: flatbuffers.Builder, TOTAL_MASS: number): void;
    static addTotalBandwidth(builder: flatbuffers.Builder, TOTAL_BANDWIDTH: number): void;
    static addMission(builder: flatbuffers.Builder, MISSIONOffset: flatbuffers.Offset): void;
    static addCoverage(builder: flatbuffers.Builder, COVERAGEOffset: flatbuffers.Offset): void;
    static addDesignLife(builder: flatbuffers.Builder, DESIGN_LIFE: number): void;
    static addNotes(builder: flatbuffers.Builder, NOTESOffset: flatbuffers.Offset): void;
    static endCMS(builder: flatbuffers.Builder): flatbuffers.Offset;
    static finishCMSBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static finishSizePrefixedCMSBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static createCMS(builder: flatbuffers.Builder, IDOffset: flatbuffers.Offset, ID_ENTITYOffset: flatbuffers.Offset, NAMEOffset: flatbuffers.Offset, DESCRIPTIONOffset: flatbuffers.Offset, ENTITYOffset: flatbuffers.Offset, SAT_NO: number, NUM_TRANSPONDERS: number, TRANSPONDERSOffset: flatbuffers.Offset, TOTAL_POWER: number, TOTAL_MASS: number, TOTAL_BANDWIDTH: number, MISSIONOffset: flatbuffers.Offset, COVERAGEOffset: flatbuffers.Offset, DESIGN_LIFE: number, NOTESOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): CMST;
    unpackTo(_o: CMST): void;
}
export declare class CMST implements flatbuffers.IGeneratedObject {
    ID: string | Uint8Array | null;
    ID_ENTITY: string | Uint8Array | null;
    NAME: string | Uint8Array | null;
    DESCRIPTION: string | Uint8Array | null;
    ENTITY: string | Uint8Array | null;
    SAT_NO: number;
    NUM_TRANSPONDERS: number;
    TRANSPONDERS: (commsTransponderT)[];
    TOTAL_POWER: number;
    TOTAL_MASS: number;
    TOTAL_BANDWIDTH: number;
    MISSION: string | Uint8Array | null;
    COVERAGE: string | Uint8Array | null;
    DESIGN_LIFE: number;
    NOTES: string | Uint8Array | null;
    constructor(ID?: string | Uint8Array | null, ID_ENTITY?: string | Uint8Array | null, NAME?: string | Uint8Array | null, DESCRIPTION?: string | Uint8Array | null, ENTITY?: string | Uint8Array | null, SAT_NO?: number, NUM_TRANSPONDERS?: number, TRANSPONDERS?: (commsTransponderT)[], TOTAL_POWER?: number, TOTAL_MASS?: number, TOTAL_BANDWIDTH?: number, MISSION?: string | Uint8Array | null, COVERAGE?: string | Uint8Array | null, DESIGN_LIFE?: number, NOTES?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=CMS.d.ts.map