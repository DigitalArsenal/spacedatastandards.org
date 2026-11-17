import * as flatbuffers from 'flatbuffers';
import { RFM, RFMT } from './RFM.js';
import { SCNAssetsChanged, SCNAssetsChangedT } from './SCNAssetsChanged.js';
import { SCNEvent, SCNEventT } from './SCNEvent.js';
import { SCNPinnedRow, SCNPinnedRowT } from './SCNPinnedRow.js';
import { SCNReference, SCNReferenceT } from './SCNReference.js';
import { VST, VSTT } from './VST.js';
import { scenarioActionCode } from './scenarioActionCode.js';
/**
 * Scenario - canonical scene composition and simulation state for external
 * scenario controls integrations. Domain records remain in their native SDS
 * schemas and are referenced or embedded here only as scenario content.
 *
 * A scenario that carries other records is one $REC whose first record is
 * this $SCN; the other records follow under their own standards. A stored
 * request carries only its request arm, with derived fields left empty to be
 * computed again.
 */
export declare class SCN implements flatbuffers.IUnpackableObject<SCNT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): SCN;
    static getRootAsSCN(bb: flatbuffers.ByteBuffer, obj?: SCN): SCN;
    static getSizePrefixedRootAsSCN(bb: flatbuffers.ByteBuffer, obj?: SCN): SCN;
    static bufferHasIdentifier(bb: flatbuffers.ByteBuffer): boolean;
    /**
     * Stable id for the scenario.
     */
    SCENARIO_ID(): string | null;
    SCENARIO_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Objects, annotations, and variables included in the scenario.
     */
    REFERENCES(index: number, obj?: SCNReference): SCNReference | null;
    referencesLength(): number;
    /**
     * Imported event payload associated with the scenario.
     */
    EVENT(obj?: SCNEvent): SCNEvent | null;
    /**
     * Zero-based focused reference index, or -1 when no index is focused.
     */
    FOCUSED_REFERENCE_INDEX(): number;
    /**
     * Reference id of the currently focused scenario object.
     */
    FOCUSED_REFERENCE_ID(): string | null;
    FOCUSED_REFERENCE_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Current scenario epoch as an ISO-8601 UTC timestamp.
     */
    EPOCH(): string | null;
    EPOCH(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Simulation time-rate multiplier.
     */
    SIM_SPEED(): number;
    /**
     * True when the viewer should use a body-fixed display frame.
     */
    USE_BODY_FIXED_FRAME(): boolean;
    /**
     * Authoritative reference frame used for scenario propagation and display.
     */
    REFERENCE_FRAME(obj?: RFM): RFM | null;
    /**
     * Command action requested for the scenario.
     */
    ACTION(): scenarioActionCode;
    /**
     * Viewer camera and display state for the scenario.
     */
    VIEW_STATE(obj?: VST): VST | null;
    /**
     * Asset-change notification payload for the scenario.
     */
    ASSETS_CHANGED(obj?: SCNAssetsChanged): SCNAssetsChanged | null;
    /**
     * Clock interval start as an ISO-8601 UTC timestamp. EPOCH is the current
     * time.
     */
    START_EPOCH(): string | null;
    START_EPOCH(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Clock interval stop as an ISO-8601 UTC timestamp.
     */
    STOP_EPOCH(): string | null;
    STOP_EPOCH(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * True when the clock was running.
     */
    ANIMATING(): boolean;
    /**
     * Start of the analysis window, the span the timeline showed, as an
     * ISO-8601 UTC timestamp.
     */
    WINDOW_START(): string | null;
    WINDOW_START(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Stop of the analysis window as an ISO-8601 UTC timestamp.
     */
    WINDOW_STOP(): string | null;
    WINDOW_STOP(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Module identifier (the $PRW PRWInstance.MODULE_ID form) of the propagator
     * the catalog objects were flown with.
     */
    PROPAGATOR_MODULE_ID(): string | null;
    PROPAGATOR_MODULE_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Timeline rows kept with the scenario.
     */
    PINNED_ROWS(index: number, obj?: SCNPinnedRow): SCNPinnedRow | null;
    pinnedRowsLength(): number;
    /**
     * Ed25519 signature, 64 bytes, by the first signing key of the $EPM in the
     * enclosing $REC, over the five bytes "$SCN" and 0x00, followed by the
     * enclosing $REC's bytes (without a size prefix) with these 64 bytes set to
     * zero. The record's CID is computed over the signed bytes.
     */
    SIGNATURE(index: number): number | null;
    signatureLength(): number;
    signatureArray(): Uint8Array | null;
    static startSCN(builder: flatbuffers.Builder): void;
    static addScenarioId(builder: flatbuffers.Builder, SCENARIO_IDOffset: flatbuffers.Offset): void;
    static addReferences(builder: flatbuffers.Builder, REFERENCESOffset: flatbuffers.Offset): void;
    static createReferencesVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startReferencesVector(builder: flatbuffers.Builder, numElems: number): void;
    static addEvent(builder: flatbuffers.Builder, EVENTOffset: flatbuffers.Offset): void;
    static addFocusedReferenceIndex(builder: flatbuffers.Builder, FOCUSED_REFERENCE_INDEX: number): void;
    static addFocusedReferenceId(builder: flatbuffers.Builder, FOCUSED_REFERENCE_IDOffset: flatbuffers.Offset): void;
    static addEpoch(builder: flatbuffers.Builder, EPOCHOffset: flatbuffers.Offset): void;
    static addSimSpeed(builder: flatbuffers.Builder, SIM_SPEED: number): void;
    static addUseBodyFixedFrame(builder: flatbuffers.Builder, USE_BODY_FIXED_FRAME: boolean): void;
    static addReferenceFrame(builder: flatbuffers.Builder, REFERENCE_FRAMEOffset: flatbuffers.Offset): void;
    static addAction(builder: flatbuffers.Builder, ACTION: scenarioActionCode): void;
    static addViewState(builder: flatbuffers.Builder, VIEW_STATEOffset: flatbuffers.Offset): void;
    static addAssetsChanged(builder: flatbuffers.Builder, ASSETS_CHANGEDOffset: flatbuffers.Offset): void;
    static addStartEpoch(builder: flatbuffers.Builder, START_EPOCHOffset: flatbuffers.Offset): void;
    static addStopEpoch(builder: flatbuffers.Builder, STOP_EPOCHOffset: flatbuffers.Offset): void;
    static addAnimating(builder: flatbuffers.Builder, ANIMATING: boolean): void;
    static addWindowStart(builder: flatbuffers.Builder, WINDOW_STARTOffset: flatbuffers.Offset): void;
    static addWindowStop(builder: flatbuffers.Builder, WINDOW_STOPOffset: flatbuffers.Offset): void;
    static addPropagatorModuleId(builder: flatbuffers.Builder, PROPAGATOR_MODULE_IDOffset: flatbuffers.Offset): void;
    static addPinnedRows(builder: flatbuffers.Builder, PINNED_ROWSOffset: flatbuffers.Offset): void;
    static createPinnedRowsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startPinnedRowsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addSignature(builder: flatbuffers.Builder, SIGNATUREOffset: flatbuffers.Offset): void;
    static createSignatureVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startSignatureVector(builder: flatbuffers.Builder, numElems: number): void;
    static endSCN(builder: flatbuffers.Builder): flatbuffers.Offset;
    static finishSCNBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static finishSizePrefixedSCNBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    unpack(): SCNT;
    unpackTo(_o: SCNT): void;
}
export declare class SCNT implements flatbuffers.IGeneratedObject {
    SCENARIO_ID: string | Uint8Array | null;
    REFERENCES: (SCNReferenceT)[];
    EVENT: SCNEventT | null;
    FOCUSED_REFERENCE_INDEX: number;
    FOCUSED_REFERENCE_ID: string | Uint8Array | null;
    EPOCH: string | Uint8Array | null;
    SIM_SPEED: number;
    USE_BODY_FIXED_FRAME: boolean;
    REFERENCE_FRAME: RFMT | null;
    ACTION: scenarioActionCode;
    VIEW_STATE: VSTT | null;
    ASSETS_CHANGED: SCNAssetsChangedT | null;
    START_EPOCH: string | Uint8Array | null;
    STOP_EPOCH: string | Uint8Array | null;
    ANIMATING: boolean;
    WINDOW_START: string | Uint8Array | null;
    WINDOW_STOP: string | Uint8Array | null;
    PROPAGATOR_MODULE_ID: string | Uint8Array | null;
    PINNED_ROWS: (SCNPinnedRowT)[];
    SIGNATURE: (number)[];
    constructor(SCENARIO_ID?: string | Uint8Array | null, REFERENCES?: (SCNReferenceT)[], EVENT?: SCNEventT | null, FOCUSED_REFERENCE_INDEX?: number, FOCUSED_REFERENCE_ID?: string | Uint8Array | null, EPOCH?: string | Uint8Array | null, SIM_SPEED?: number, USE_BODY_FIXED_FRAME?: boolean, REFERENCE_FRAME?: RFMT | null, ACTION?: scenarioActionCode, VIEW_STATE?: VSTT | null, ASSETS_CHANGED?: SCNAssetsChangedT | null, START_EPOCH?: string | Uint8Array | null, STOP_EPOCH?: string | Uint8Array | null, ANIMATING?: boolean, WINDOW_START?: string | Uint8Array | null, WINDOW_STOP?: string | Uint8Array | null, PROPAGATOR_MODULE_ID?: string | Uint8Array | null, PINNED_ROWS?: (SCNPinnedRowT)[], SIGNATURE?: (number)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=SCN.d.ts.map