import * as flatbuffers from 'flatbuffers';
/**
 * One layer's record of an object.
 */
export declare class XMTLayerRecord implements flatbuffers.IUnpackableObject<XMTLayerRecordT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): XMTLayerRecord;
    static getRootAsXMTLayerRecord(bb: flatbuffers.ByteBuffer, obj?: XMTLayerRecord): XMTLayerRecord;
    static getSizePrefixedRootAsXMTLayerRecord(bb: flatbuffers.ByteBuffer, obj?: XMTLayerRecord): XMTLayerRecord;
    /**
     * Layer ID.
     */
    LAYER(): string | null;
    LAYER(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * 0-based position of the record in the layer's input.
     */
    ORDINAL(): number;
    /**
     * Source-native key; empty = none.
     */
    NATIVE_KEY(): string | null;
    NATIVE_KEY(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Object name in the record.
     */
    NAME(): string | null;
    NAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * International designator in the record; empty = none.
     */
    DESIGNATOR(): string | null;
    DESIGNATOR(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    static startXMTLayerRecord(builder: flatbuffers.Builder): void;
    static addLayer(builder: flatbuffers.Builder, LAYEROffset: flatbuffers.Offset): void;
    static addOrdinal(builder: flatbuffers.Builder, ORDINAL: number): void;
    static addNativeKey(builder: flatbuffers.Builder, NATIVE_KEYOffset: flatbuffers.Offset): void;
    static addName(builder: flatbuffers.Builder, NAMEOffset: flatbuffers.Offset): void;
    static addDesignator(builder: flatbuffers.Builder, DESIGNATOROffset: flatbuffers.Offset): void;
    static endXMTLayerRecord(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createXMTLayerRecord(builder: flatbuffers.Builder, LAYEROffset: flatbuffers.Offset, ORDINAL: number, NATIVE_KEYOffset: flatbuffers.Offset, NAMEOffset: flatbuffers.Offset, DESIGNATOROffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): XMTLayerRecordT;
    unpackTo(_o: XMTLayerRecordT): void;
}
export declare class XMTLayerRecordT implements flatbuffers.IGeneratedObject {
    LAYER: string | Uint8Array | null;
    ORDINAL: number;
    NATIVE_KEY: string | Uint8Array | null;
    NAME: string | Uint8Array | null;
    DESIGNATOR: string | Uint8Array | null;
    constructor(LAYER?: string | Uint8Array | null, ORDINAL?: number, NATIVE_KEY?: string | Uint8Array | null, NAME?: string | Uint8Array | null, DESIGNATOR?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=XMTLayerRecord.d.ts.map