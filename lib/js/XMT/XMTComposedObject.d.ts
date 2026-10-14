import * as flatbuffers from 'flatbuffers';
import { XMTLayerRecord, XMTLayerRecordT } from './XMTLayerRecord.js';
import { XMTStateSelection, XMTStateSelectionT } from './XMTStateSelection.js';
import { xmtRecordChoice } from './xmtRecordChoice.js';
/**
 * The composition decision for one object.
 */
export declare class XMTComposedObject implements flatbuffers.IUnpackableObject<XMTComposedObjectT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): XMTComposedObject;
    static getRootAsXMTComposedObject(bb: flatbuffers.ByteBuffer, obj?: XMTComposedObject): XMTComposedObject;
    static getSizePrefixedRootAsXMTComposedObject(bb: flatbuffers.ByteBuffer, obj?: XMTComposedObject): XMTComposedObject;
    /**
     * Object key ("norad:<n>", "cospar:<designator>", or a source key).
     */
    KEY(): string | null;
    KEY(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * International designator of the selected record.
     */
    INTERNATIONAL_DESIGNATOR(): string | null;
    INTERNATIONAL_DESIGNATOR(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Name in the selected record.
     */
    NAME(): string | null;
    NAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Layer of the selected record.
     */
    SELECTED_LAYER(): string | null;
    SELECTED_LAYER(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    STATUS(): xmtRecordChoice;
    /**
     * Every layer's record of the object.
     */
    CANDIDATES(index: number, obj?: XMTLayerRecord): XMTLayerRecord | null;
    candidatesLength(): number;
    STATE(obj?: XMTStateSelection): XMTStateSelection | null;
    static startXMTComposedObject(builder: flatbuffers.Builder): void;
    static addKey(builder: flatbuffers.Builder, KEYOffset: flatbuffers.Offset): void;
    static addInternationalDesignator(builder: flatbuffers.Builder, INTERNATIONAL_DESIGNATOROffset: flatbuffers.Offset): void;
    static addName(builder: flatbuffers.Builder, NAMEOffset: flatbuffers.Offset): void;
    static addSelectedLayer(builder: flatbuffers.Builder, SELECTED_LAYEROffset: flatbuffers.Offset): void;
    static addStatus(builder: flatbuffers.Builder, STATUS: xmtRecordChoice): void;
    static addCandidates(builder: flatbuffers.Builder, CANDIDATESOffset: flatbuffers.Offset): void;
    static createCandidatesVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startCandidatesVector(builder: flatbuffers.Builder, numElems: number): void;
    static addState(builder: flatbuffers.Builder, STATEOffset: flatbuffers.Offset): void;
    static endXMTComposedObject(builder: flatbuffers.Builder): flatbuffers.Offset;
    unpack(): XMTComposedObjectT;
    unpackTo(_o: XMTComposedObjectT): void;
}
export declare class XMTComposedObjectT implements flatbuffers.IGeneratedObject {
    KEY: string | Uint8Array | null;
    INTERNATIONAL_DESIGNATOR: string | Uint8Array | null;
    NAME: string | Uint8Array | null;
    SELECTED_LAYER: string | Uint8Array | null;
    STATUS: xmtRecordChoice;
    CANDIDATES: (XMTLayerRecordT)[];
    STATE: XMTStateSelectionT | null;
    constructor(KEY?: string | Uint8Array | null, INTERNATIONAL_DESIGNATOR?: string | Uint8Array | null, NAME?: string | Uint8Array | null, SELECTED_LAYER?: string | Uint8Array | null, STATUS?: xmtRecordChoice, CANDIDATES?: (XMTLayerRecordT)[], STATE?: XMTStateSelectionT | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=XMTComposedObject.d.ts.map