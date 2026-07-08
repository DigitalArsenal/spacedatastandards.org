import * as flatbuffers from 'flatbuffers';
import { GJNPosition, GJNPositionT } from './GJNPosition.js';
/**
 * Time-tagged point or annotation shown in a scenario.
 */
export declare class SCNPointOfInterest implements flatbuffers.IUnpackableObject<SCNPointOfInterestT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): SCNPointOfInterest;
    static getRootAsSCNPointOfInterest(bb: flatbuffers.ByteBuffer, obj?: SCNPointOfInterest): SCNPointOfInterest;
    static getSizePrefixedRootAsSCNPointOfInterest(bb: flatbuffers.ByteBuffer, obj?: SCNPointOfInterest): SCNPointOfInterest;
    /**
     * Display name for the point of interest.
     */
    NAME(): string | null;
    NAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Optional detail text shown with the point of interest.
     */
    DESCRIPTION(): string | null;
    DESCRIPTION(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * UTC epoch associated with the point of interest.
     */
    EPOCH(): string | null;
    EPOCH(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Seconds before the epoch when highlighting begins.
     */
    HIGHLIGHT_BEFORE(): number;
    /**
     * Seconds after the epoch when highlighting remains active.
     */
    HIGHLIGHT_AFTER(): number;
    /**
     * Display color token for the point of interest.
     */
    COLOR(): string | null;
    COLOR(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * WGS84 geodetic position for the point of interest.
     */
    POSITION(obj?: GJNPosition): GJNPosition | null;
    static startSCNPointOfInterest(builder: flatbuffers.Builder): void;
    static addName(builder: flatbuffers.Builder, NAMEOffset: flatbuffers.Offset): void;
    static addDescription(builder: flatbuffers.Builder, DESCRIPTIONOffset: flatbuffers.Offset): void;
    static addEpoch(builder: flatbuffers.Builder, EPOCHOffset: flatbuffers.Offset): void;
    static addHighlightBefore(builder: flatbuffers.Builder, HIGHLIGHT_BEFORE: number): void;
    static addHighlightAfter(builder: flatbuffers.Builder, HIGHLIGHT_AFTER: number): void;
    static addColor(builder: flatbuffers.Builder, COLOROffset: flatbuffers.Offset): void;
    static addPosition(builder: flatbuffers.Builder, POSITIONOffset: flatbuffers.Offset): void;
    static endSCNPointOfInterest(builder: flatbuffers.Builder): flatbuffers.Offset;
    unpack(): SCNPointOfInterestT;
    unpackTo(_o: SCNPointOfInterestT): void;
}
export declare class SCNPointOfInterestT implements flatbuffers.IGeneratedObject {
    NAME: string | Uint8Array | null;
    DESCRIPTION: string | Uint8Array | null;
    EPOCH: string | Uint8Array | null;
    HIGHLIGHT_BEFORE: number;
    HIGHLIGHT_AFTER: number;
    COLOR: string | Uint8Array | null;
    POSITION: GJNPositionT | null;
    constructor(NAME?: string | Uint8Array | null, DESCRIPTION?: string | Uint8Array | null, EPOCH?: string | Uint8Array | null, HIGHLIGHT_BEFORE?: number, HIGHLIGHT_AFTER?: number, COLOR?: string | Uint8Array | null, POSITION?: GJNPositionT | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=SCNPointOfInterest.d.ts.map