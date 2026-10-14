import * as flatbuffers from 'flatbuffers';
import { xmtRecordKind } from './xmtRecordKind.js';
/**
 * A product that could not be placed on a catalog object.
 */
export declare class XMTUnplacedRecord implements flatbuffers.IUnpackableObject<XMTUnplacedRecordT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): XMTUnplacedRecord;
    static getRootAsXMTUnplacedRecord(bb: flatbuffers.ByteBuffer, obj?: XMTUnplacedRecord): XMTUnplacedRecord;
    static getSizePrefixedRootAsXMTUnplacedRecord(bb: flatbuffers.ByteBuffer, obj?: XMTUnplacedRecord): XMTUnplacedRecord;
    KIND(): xmtRecordKind;
    /**
     * 0-based position in its input.
     */
    ORDINAL(): number;
    /**
     * Source named by the record; empty when unattributed.
     */
    SOURCE_ID(): string | null;
    SOURCE_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * NORAD number the record names; 0 = none.
     */
    NORAD_CAT_ID(): number;
    /**
     * International designator the record names; empty = none.
     */
    INTERNATIONAL_DESIGNATOR(): string | null;
    INTERNATIONAL_DESIGNATOR(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Native identifier the record names; empty = none.
     */
    NATIVE_ID(): string | null;
    NATIVE_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Reason code: "identity-conflict", "not-in-catalog",
     * "unbound-native-identity" for unlinked records; "unattributed-product",
     * "invalid-epoch", "no-object-identity", "no-maneuver-time" for refused
     * ones.
     */
    REASON(): string | null;
    REASON(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    static startXMTUnplacedRecord(builder: flatbuffers.Builder): void;
    static addKind(builder: flatbuffers.Builder, KIND: xmtRecordKind): void;
    static addOrdinal(builder: flatbuffers.Builder, ORDINAL: number): void;
    static addSourceId(builder: flatbuffers.Builder, SOURCE_IDOffset: flatbuffers.Offset): void;
    static addNoradCatId(builder: flatbuffers.Builder, NORAD_CAT_ID: number): void;
    static addInternationalDesignator(builder: flatbuffers.Builder, INTERNATIONAL_DESIGNATOROffset: flatbuffers.Offset): void;
    static addNativeId(builder: flatbuffers.Builder, NATIVE_IDOffset: flatbuffers.Offset): void;
    static addReason(builder: flatbuffers.Builder, REASONOffset: flatbuffers.Offset): void;
    static endXMTUnplacedRecord(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createXMTUnplacedRecord(builder: flatbuffers.Builder, KIND: xmtRecordKind, ORDINAL: number, SOURCE_IDOffset: flatbuffers.Offset, NORAD_CAT_ID: number, INTERNATIONAL_DESIGNATOROffset: flatbuffers.Offset, NATIVE_IDOffset: flatbuffers.Offset, REASONOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): XMTUnplacedRecordT;
    unpackTo(_o: XMTUnplacedRecordT): void;
}
export declare class XMTUnplacedRecordT implements flatbuffers.IGeneratedObject {
    KIND: xmtRecordKind;
    ORDINAL: number;
    SOURCE_ID: string | Uint8Array | null;
    NORAD_CAT_ID: number;
    INTERNATIONAL_DESIGNATOR: string | Uint8Array | null;
    NATIVE_ID: string | Uint8Array | null;
    REASON: string | Uint8Array | null;
    constructor(KIND?: xmtRecordKind, ORDINAL?: number, SOURCE_ID?: string | Uint8Array | null, NORAD_CAT_ID?: number, INTERNATIONAL_DESIGNATOR?: string | Uint8Array | null, NATIVE_ID?: string | Uint8Array | null, REASON?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=XMTUnplacedRecord.d.ts.map