import * as flatbuffers from 'flatbuffers';
import { XMTManeuverEvent, XMTManeuverEventT } from './XMTManeuverEvent.js';
import { XMTProductChoice, XMTProductChoiceT } from './XMTProductChoice.js';
import { xmtObjectOutcome } from './xmtObjectOutcome.js';
/**
 * The integration of one catalog object.
 */
export declare class XMTIntegratedObject implements flatbuffers.IUnpackableObject<XMTIntegratedObjectT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): XMTIntegratedObject;
    static getRootAsXMTIntegratedObject(bb: flatbuffers.ByteBuffer, obj?: XMTIntegratedObject): XMTIntegratedObject;
    static getSizePrefixedRootAsXMTIntegratedObject(bb: flatbuffers.ByteBuffer, obj?: XMTIntegratedObject): XMTIntegratedObject;
    /**
     * Object key ("norad:<n>", "cospar:<designator>", or "unkeyed:<ordinal>").
     */
    KEY(): string | null;
    KEY(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * NORAD catalog number; 0 = none.
     */
    NORAD_CAT_ID(): number;
    /**
     * International designator; empty = none.
     */
    INTERNATIONAL_DESIGNATOR(): string | null;
    INTERNATIONAL_DESIGNATOR(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    NAME(): string | null;
    NAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * MANEUVERABLE as published (record's own or from history).
     */
    MANEUVERABLE(): boolean;
    /**
     * True when the maneuver history made it maneuverable.
     */
    MANEUVERABLE_FROM_HISTORY(): boolean;
    MANEUVERS(index: number, obj?: XMTManeuverEvent): XMTManeuverEvent | null;
    maneuversLength(): number;
    /**
     * Regime its products' covariance labels name; empty = unknown.
     */
    REGIME(): string | null;
    REGIME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    PRODUCTS(index: number, obj?: XMTProductChoice): XMTProductChoice | null;
    productsLength(): number;
    OUTCOME(): xmtObjectOutcome;
    static startXMTIntegratedObject(builder: flatbuffers.Builder): void;
    static addKey(builder: flatbuffers.Builder, KEYOffset: flatbuffers.Offset): void;
    static addNoradCatId(builder: flatbuffers.Builder, NORAD_CAT_ID: number): void;
    static addInternationalDesignator(builder: flatbuffers.Builder, INTERNATIONAL_DESIGNATOROffset: flatbuffers.Offset): void;
    static addName(builder: flatbuffers.Builder, NAMEOffset: flatbuffers.Offset): void;
    static addManeuverable(builder: flatbuffers.Builder, MANEUVERABLE: boolean): void;
    static addManeuverableFromHistory(builder: flatbuffers.Builder, MANEUVERABLE_FROM_HISTORY: boolean): void;
    static addManeuvers(builder: flatbuffers.Builder, MANEUVERSOffset: flatbuffers.Offset): void;
    static createManeuversVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startManeuversVector(builder: flatbuffers.Builder, numElems: number): void;
    static addRegime(builder: flatbuffers.Builder, REGIMEOffset: flatbuffers.Offset): void;
    static addProducts(builder: flatbuffers.Builder, PRODUCTSOffset: flatbuffers.Offset): void;
    static createProductsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startProductsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addOutcome(builder: flatbuffers.Builder, OUTCOME: xmtObjectOutcome): void;
    static endXMTIntegratedObject(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createXMTIntegratedObject(builder: flatbuffers.Builder, KEYOffset: flatbuffers.Offset, NORAD_CAT_ID: number, INTERNATIONAL_DESIGNATOROffset: flatbuffers.Offset, NAMEOffset: flatbuffers.Offset, MANEUVERABLE: boolean, MANEUVERABLE_FROM_HISTORY: boolean, MANEUVERSOffset: flatbuffers.Offset, REGIMEOffset: flatbuffers.Offset, PRODUCTSOffset: flatbuffers.Offset, OUTCOME: xmtObjectOutcome): flatbuffers.Offset;
    unpack(): XMTIntegratedObjectT;
    unpackTo(_o: XMTIntegratedObjectT): void;
}
export declare class XMTIntegratedObjectT implements flatbuffers.IGeneratedObject {
    KEY: string | Uint8Array | null;
    NORAD_CAT_ID: number;
    INTERNATIONAL_DESIGNATOR: string | Uint8Array | null;
    NAME: string | Uint8Array | null;
    MANEUVERABLE: boolean;
    MANEUVERABLE_FROM_HISTORY: boolean;
    MANEUVERS: (XMTManeuverEventT)[];
    REGIME: string | Uint8Array | null;
    PRODUCTS: (XMTProductChoiceT)[];
    OUTCOME: xmtObjectOutcome;
    constructor(KEY?: string | Uint8Array | null, NORAD_CAT_ID?: number, INTERNATIONAL_DESIGNATOR?: string | Uint8Array | null, NAME?: string | Uint8Array | null, MANEUVERABLE?: boolean, MANEUVERABLE_FROM_HISTORY?: boolean, MANEUVERS?: (XMTManeuverEventT)[], REGIME?: string | Uint8Array | null, PRODUCTS?: (XMTProductChoiceT)[], OUTCOME?: xmtObjectOutcome);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=XMTIntegratedObject.d.ts.map