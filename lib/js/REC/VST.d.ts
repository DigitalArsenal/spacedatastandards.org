import * as flatbuffers from 'flatbuffers';
import { VSTCameraOptions, VSTCameraOptionsT } from './VSTCameraOptions.js';
import { VSTDisplaySettings, VSTDisplaySettingsT } from './VSTDisplaySettings.js';
/**
 * Viewer State — display and camera state associated with a scenario.
 */
export declare class VST implements flatbuffers.IUnpackableObject<VSTT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): VST;
    static getRootAsVST(bb: flatbuffers.ByteBuffer, obj?: VST): VST;
    static getSizePrefixedRootAsVST(bb: flatbuffers.ByteBuffer, obj?: VST): VST;
    static bufferHasIdentifier(bb: flatbuffers.ByteBuffer): boolean;
    CAMERA(obj?: VSTCameraOptions): VSTCameraOptions | null;
    DISPLAY_SETTINGS(obj?: VSTDisplaySettings): VSTDisplaySettings | null;
    FOCUSED_REFERENCE_ID(): string | null;
    FOCUSED_REFERENCE_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    FOCUSED_REFERENCE_INDEX(): number;
    static startVST(builder: flatbuffers.Builder): void;
    static addCamera(builder: flatbuffers.Builder, CAMERAOffset: flatbuffers.Offset): void;
    static addDisplaySettings(builder: flatbuffers.Builder, DISPLAY_SETTINGSOffset: flatbuffers.Offset): void;
    static addFocusedReferenceId(builder: flatbuffers.Builder, FOCUSED_REFERENCE_IDOffset: flatbuffers.Offset): void;
    static addFocusedReferenceIndex(builder: flatbuffers.Builder, FOCUSED_REFERENCE_INDEX: number): void;
    static endVST(builder: flatbuffers.Builder): flatbuffers.Offset;
    static finishVSTBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static finishSizePrefixedVSTBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    unpack(): VSTT;
    unpackTo(_o: VSTT): void;
}
export declare class VSTT implements flatbuffers.IGeneratedObject {
    CAMERA: VSTCameraOptionsT | null;
    DISPLAY_SETTINGS: VSTDisplaySettingsT | null;
    FOCUSED_REFERENCE_ID: string | Uint8Array | null;
    FOCUSED_REFERENCE_INDEX: number;
    constructor(CAMERA?: VSTCameraOptionsT | null, DISPLAY_SETTINGS?: VSTDisplaySettingsT | null, FOCUSED_REFERENCE_ID?: string | Uint8Array | null, FOCUSED_REFERENCE_INDEX?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=VST.d.ts.map