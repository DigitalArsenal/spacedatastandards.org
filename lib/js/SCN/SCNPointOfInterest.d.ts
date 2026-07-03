import * as flatbuffers from 'flatbuffers';
import { SCNGeodeticPoint, SCNGeodeticPointT } from './SCNGeodeticPoint.js';
/**
 * Time-tagged point or annotation shown in a scenario.
 */
export declare class SCNPointOfInterest implements flatbuffers.IUnpackableObject<SCNPointOfInterestT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): SCNPointOfInterest;
    static getRootAsSCNPointOfInterest(bb: flatbuffers.ByteBuffer, obj?: SCNPointOfInterest): SCNPointOfInterest;
    static getSizePrefixedRootAsSCNPointOfInterest(bb: flatbuffers.ByteBuffer, obj?: SCNPointOfInterest): SCNPointOfInterest;
    NAME(): string | null;
    NAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    DESCRIPTION(): string | null;
    DESCRIPTION(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    EPOCH(): string | null;
    EPOCH(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    HIGHLIGHT_BEFORE_SEC(): number;
    HIGHLIGHT_AFTER_SEC(): number;
    COLOR(): string | null;
    COLOR(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    POSITION(obj?: SCNGeodeticPoint): SCNGeodeticPoint | null;
    static startSCNPointOfInterest(builder: flatbuffers.Builder): void;
    static addName(builder: flatbuffers.Builder, NAMEOffset: flatbuffers.Offset): void;
    static addDescription(builder: flatbuffers.Builder, DESCRIPTIONOffset: flatbuffers.Offset): void;
    static addEpoch(builder: flatbuffers.Builder, EPOCHOffset: flatbuffers.Offset): void;
    static addHighlightBeforeSec(builder: flatbuffers.Builder, HIGHLIGHT_BEFORE_SEC: number): void;
    static addHighlightAfterSec(builder: flatbuffers.Builder, HIGHLIGHT_AFTER_SEC: number): void;
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
    HIGHLIGHT_BEFORE_SEC: number;
    HIGHLIGHT_AFTER_SEC: number;
    COLOR: string | Uint8Array | null;
    POSITION: SCNGeodeticPointT | null;
    constructor(NAME?: string | Uint8Array | null, DESCRIPTION?: string | Uint8Array | null, EPOCH?: string | Uint8Array | null, HIGHLIGHT_BEFORE_SEC?: number, HIGHLIGHT_AFTER_SEC?: number, COLOR?: string | Uint8Array | null, POSITION?: SCNGeodeticPointT | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=SCNPointOfInterest.d.ts.map