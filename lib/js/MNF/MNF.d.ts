import * as flatbuffers from 'flatbuffers';
import { manifoldElset, manifoldElsetT } from './manifoldElset.js';
import { manifoldStatus } from './manifoldStatus.js';
/**
 * Orbit Manifold
 */
export declare class MNF implements flatbuffers.IUnpackableObject<MNFT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): MNF;
    static getRootAsMNF(bb: flatbuffers.ByteBuffer, obj?: MNF): MNF;
    static getSizePrefixedRootAsMNF(bb: flatbuffers.ByteBuffer, obj?: MNF): MNF;
    static bufferHasIdentifier(bb: flatbuffers.ByteBuffer): boolean;
    /**
     * Unique manifold identifier
     */
    ID(): string | null;
    ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Parent object satellite number
     */
    SAT_NO(): number;
    /**
     * Object designator
     */
    OBJECT_DESIGNATOR(): string | null;
    OBJECT_DESIGNATOR(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Manifold status
     */
    STATUS(): manifoldStatus;
    /**
     * Event epoch that spawned the manifold (ISO 8601)
     */
    EVENT_EPOCH(): string | null;
    EVENT_EPOCH(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Source of detection (sensor ID or method)
     */
    SOURCE(): string | null;
    SOURCE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Reference frame
     */
    REF_FRAME(): string | null;
    REF_FRAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Original pre-event semi-major axis in km
     */
    ORIG_SEMI_MAJOR_AXIS(): number;
    /**
     * Original pre-event eccentricity
     */
    ORIG_ECCENTRICITY(): number;
    /**
     * Original pre-event inclination in degrees
     */
    ORIG_INCLINATION(): number;
    /**
     * Minimum delta-V sampled in m/s
     */
    DELTA_V_MIN(): number;
    /**
     * Maximum delta-V sampled in m/s
     */
    DELTA_V_MAX(): number;
    /**
     * Delta-V step size in m/s
     */
    DELTA_V_STEP(): number;
    /**
     * Minimum delta-T sampled in seconds
     */
    DELTA_T_MIN(): number;
    /**
     * Maximum delta-T sampled in seconds
     */
    DELTA_T_MAX(): number;
    /**
     * Delta-T step size in seconds
     */
    DELTA_T_STEP(): number;
    /**
     * Total number of manifold elements
     */
    NUM_ELEMENTS(): number;
    /**
     * Theoretical element sets
     */
    ELEMENTS(index: number, obj?: manifoldElset): manifoldElset | null;
    elementsLength(): number;
    /**
     * Correlated catalog object ID (if matched)
     */
    CORRELATED_ID(): string | null;
    CORRELATED_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Additional notes
     */
    NOTES(): string | null;
    NOTES(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    static startMNF(builder: flatbuffers.Builder): void;
    static addId(builder: flatbuffers.Builder, IDOffset: flatbuffers.Offset): void;
    static addSatNo(builder: flatbuffers.Builder, SAT_NO: number): void;
    static addObjectDesignator(builder: flatbuffers.Builder, OBJECT_DESIGNATOROffset: flatbuffers.Offset): void;
    static addStatus(builder: flatbuffers.Builder, STATUS: manifoldStatus): void;
    static addEventEpoch(builder: flatbuffers.Builder, EVENT_EPOCHOffset: flatbuffers.Offset): void;
    static addSource(builder: flatbuffers.Builder, SOURCEOffset: flatbuffers.Offset): void;
    static addRefFrame(builder: flatbuffers.Builder, REF_FRAMEOffset: flatbuffers.Offset): void;
    static addOrigSemiMajorAxis(builder: flatbuffers.Builder, ORIG_SEMI_MAJOR_AXIS: number): void;
    static addOrigEccentricity(builder: flatbuffers.Builder, ORIG_ECCENTRICITY: number): void;
    static addOrigInclination(builder: flatbuffers.Builder, ORIG_INCLINATION: number): void;
    static addDeltaVMin(builder: flatbuffers.Builder, DELTA_V_MIN: number): void;
    static addDeltaVMax(builder: flatbuffers.Builder, DELTA_V_MAX: number): void;
    static addDeltaVStep(builder: flatbuffers.Builder, DELTA_V_STEP: number): void;
    static addDeltaTMin(builder: flatbuffers.Builder, DELTA_T_MIN: number): void;
    static addDeltaTMax(builder: flatbuffers.Builder, DELTA_T_MAX: number): void;
    static addDeltaTStep(builder: flatbuffers.Builder, DELTA_T_STEP: number): void;
    static addNumElements(builder: flatbuffers.Builder, NUM_ELEMENTS: number): void;
    static addElements(builder: flatbuffers.Builder, ELEMENTSOffset: flatbuffers.Offset): void;
    static createElementsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startElementsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addCorrelatedId(builder: flatbuffers.Builder, CORRELATED_IDOffset: flatbuffers.Offset): void;
    static addNotes(builder: flatbuffers.Builder, NOTESOffset: flatbuffers.Offset): void;
    static endMNF(builder: flatbuffers.Builder): flatbuffers.Offset;
    static finishMNFBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static finishSizePrefixedMNFBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static createMNF(builder: flatbuffers.Builder, IDOffset: flatbuffers.Offset, SAT_NO: number, OBJECT_DESIGNATOROffset: flatbuffers.Offset, STATUS: manifoldStatus, EVENT_EPOCHOffset: flatbuffers.Offset, SOURCEOffset: flatbuffers.Offset, REF_FRAMEOffset: flatbuffers.Offset, ORIG_SEMI_MAJOR_AXIS: number, ORIG_ECCENTRICITY: number, ORIG_INCLINATION: number, DELTA_V_MIN: number, DELTA_V_MAX: number, DELTA_V_STEP: number, DELTA_T_MIN: number, DELTA_T_MAX: number, DELTA_T_STEP: number, NUM_ELEMENTS: number, ELEMENTSOffset: flatbuffers.Offset, CORRELATED_IDOffset: flatbuffers.Offset, NOTESOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): MNFT;
    unpackTo(_o: MNFT): void;
}
export declare class MNFT implements flatbuffers.IGeneratedObject {
    ID: string | Uint8Array | null;
    SAT_NO: number;
    OBJECT_DESIGNATOR: string | Uint8Array | null;
    STATUS: manifoldStatus;
    EVENT_EPOCH: string | Uint8Array | null;
    SOURCE: string | Uint8Array | null;
    REF_FRAME: string | Uint8Array | null;
    ORIG_SEMI_MAJOR_AXIS: number;
    ORIG_ECCENTRICITY: number;
    ORIG_INCLINATION: number;
    DELTA_V_MIN: number;
    DELTA_V_MAX: number;
    DELTA_V_STEP: number;
    DELTA_T_MIN: number;
    DELTA_T_MAX: number;
    DELTA_T_STEP: number;
    NUM_ELEMENTS: number;
    ELEMENTS: (manifoldElsetT)[];
    CORRELATED_ID: string | Uint8Array | null;
    NOTES: string | Uint8Array | null;
    constructor(ID?: string | Uint8Array | null, SAT_NO?: number, OBJECT_DESIGNATOR?: string | Uint8Array | null, STATUS?: manifoldStatus, EVENT_EPOCH?: string | Uint8Array | null, SOURCE?: string | Uint8Array | null, REF_FRAME?: string | Uint8Array | null, ORIG_SEMI_MAJOR_AXIS?: number, ORIG_ECCENTRICITY?: number, ORIG_INCLINATION?: number, DELTA_V_MIN?: number, DELTA_V_MAX?: number, DELTA_V_STEP?: number, DELTA_T_MIN?: number, DELTA_T_MAX?: number, DELTA_T_STEP?: number, NUM_ELEMENTS?: number, ELEMENTS?: (manifoldElsetT)[], CORRELATED_ID?: string | Uint8Array | null, NOTES?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=MNF.d.ts.map