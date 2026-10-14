import * as flatbuffers from 'flatbuffers';
import { oilConflictShape } from './oilConflictShape.js';
/**
 * A group of identifiers declared against each other that is not
 * one-to-one.
 */
export declare class OILConflict implements flatbuffers.IUnpackableObject<OILConflictT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): OILConflict;
    static getRootAsOILConflict(bb: flatbuffers.ByteBuffer, obj?: OILConflict): OILConflict;
    static getSizePrefixedRootAsOILConflict(bb: flatbuffers.ByteBuffer, obj?: OILConflict): OILConflict;
    /**
     * Left identifiers in the group, as "<namespace>:<id>".
     */
    LEFT_IDS(index: number): string;
    LEFT_IDS(index: number, optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    leftIdsLength(): number;
    /**
     * Right identifiers in the group, as "<namespace>:<id>".
     */
    RIGHT_IDS(index: number): string;
    RIGHT_IDS(index: number, optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    rightIdsLength(): number;
    SHAPE(): oilConflictShape;
    /**
     * Human-readable description.
     */
    REASON(): string | null;
    REASON(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    static startOILConflict(builder: flatbuffers.Builder): void;
    static addLeftIds(builder: flatbuffers.Builder, LEFT_IDSOffset: flatbuffers.Offset): void;
    static createLeftIdsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startLeftIdsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addRightIds(builder: flatbuffers.Builder, RIGHT_IDSOffset: flatbuffers.Offset): void;
    static createRightIdsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startRightIdsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addShape(builder: flatbuffers.Builder, SHAPE: oilConflictShape): void;
    static addReason(builder: flatbuffers.Builder, REASONOffset: flatbuffers.Offset): void;
    static endOILConflict(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createOILConflict(builder: flatbuffers.Builder, LEFT_IDSOffset: flatbuffers.Offset, RIGHT_IDSOffset: flatbuffers.Offset, SHAPE: oilConflictShape, REASONOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): OILConflictT;
    unpackTo(_o: OILConflictT): void;
}
export declare class OILConflictT implements flatbuffers.IGeneratedObject {
    LEFT_IDS: (string)[];
    RIGHT_IDS: (string)[];
    SHAPE: oilConflictShape;
    REASON: string | Uint8Array | null;
    constructor(LEFT_IDS?: (string)[], RIGHT_IDS?: (string)[], SHAPE?: oilConflictShape, REASON?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=OILConflict.d.ts.map