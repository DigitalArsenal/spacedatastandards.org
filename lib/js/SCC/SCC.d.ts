import * as flatbuffers from 'flatbuffers';
import { SCCAssetPicker, SCCAssetPickerT } from './SCCAssetPicker.js';
import { SCCReady, SCCReadyT } from './SCCReady.js';
import { SCCRequestState, SCCRequestStateT } from './SCCRequestState.js';
import { SCCStateResponse, SCCStateResponseT } from './SCCStateResponse.js';
import { SCN, SCNT } from './SCN.js';
import { controlMessageKind } from './controlMessageKind.js';
/**
 * Scenario Controls - message-bus envelope for scenario setup, state
 * requests/responses, startup readiness, and asset-picker delegation.
 */
export declare class SCC implements flatbuffers.IUnpackableObject<SCCT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): SCC;
    static getRootAsSCC(bb: flatbuffers.ByteBuffer, obj?: SCC): SCC;
    static getSizePrefixedRootAsSCC(bb: flatbuffers.ByteBuffer, obj?: SCC): SCC;
    static bufferHasIdentifier(bb: flatbuffers.ByteBuffer): boolean;
    MESSAGE_KIND(): controlMessageKind;
    TRACE_ID(): string | null;
    TRACE_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    SCENARIOS(index: number, obj?: SCN): SCN | null;
    scenariosLength(): number;
    SCENARIO(obj?: SCN): SCN | null;
    REQUEST_STATE(obj?: SCCRequestState): SCCRequestState | null;
    STATE_RESPONSE(obj?: SCCStateResponse): SCCStateResponse | null;
    ASSET_PICKER(obj?: SCCAssetPicker): SCCAssetPicker | null;
    READY(obj?: SCCReady): SCCReady | null;
    static startSCC(builder: flatbuffers.Builder): void;
    static addMessageKind(builder: flatbuffers.Builder, MESSAGE_KIND: controlMessageKind): void;
    static addTraceId(builder: flatbuffers.Builder, TRACE_IDOffset: flatbuffers.Offset): void;
    static addScenarios(builder: flatbuffers.Builder, SCENARIOSOffset: flatbuffers.Offset): void;
    static createScenariosVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startScenariosVector(builder: flatbuffers.Builder, numElems: number): void;
    static addScenario(builder: flatbuffers.Builder, SCENARIOOffset: flatbuffers.Offset): void;
    static addRequestState(builder: flatbuffers.Builder, REQUEST_STATEOffset: flatbuffers.Offset): void;
    static addStateResponse(builder: flatbuffers.Builder, STATE_RESPONSEOffset: flatbuffers.Offset): void;
    static addAssetPicker(builder: flatbuffers.Builder, ASSET_PICKEROffset: flatbuffers.Offset): void;
    static addReady(builder: flatbuffers.Builder, READYOffset: flatbuffers.Offset): void;
    static endSCC(builder: flatbuffers.Builder): flatbuffers.Offset;
    static finishSCCBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static finishSizePrefixedSCCBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    unpack(): SCCT;
    unpackTo(_o: SCCT): void;
}
export declare class SCCT implements flatbuffers.IGeneratedObject {
    MESSAGE_KIND: controlMessageKind;
    TRACE_ID: string | Uint8Array | null;
    SCENARIOS: (SCNT)[];
    SCENARIO: SCNT | null;
    REQUEST_STATE: SCCRequestStateT | null;
    STATE_RESPONSE: SCCStateResponseT | null;
    ASSET_PICKER: SCCAssetPickerT | null;
    READY: SCCReadyT | null;
    constructor(MESSAGE_KIND?: controlMessageKind, TRACE_ID?: string | Uint8Array | null, SCENARIOS?: (SCNT)[], SCENARIO?: SCNT | null, REQUEST_STATE?: SCCRequestStateT | null, STATE_RESPONSE?: SCCStateResponseT | null, ASSET_PICKER?: SCCAssetPickerT | null, READY?: SCCReadyT | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=SCC.d.ts.map