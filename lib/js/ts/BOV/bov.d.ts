import * as flatbuffers from 'flatbuffers';
/**
 * Burn Out Vector Message
 */
export declare class BOV implements flatbuffers.IUnpackableObject<BOVT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): BOV;
    static getRootAsBOV(bb: flatbuffers.ByteBuffer, obj?: BOV): BOV;
    static getSizePrefixedRootAsBOV(bb: flatbuffers.ByteBuffer, obj?: BOV): BOV;
    static bufferHasIdentifier(bb: flatbuffers.ByteBuffer): boolean;
    eCoordinate(): number;
    fCoordinate(): number;
    gCoordinate(): number;
    eDot(): number;
    fDot(): number;
    gDot(): number;
    epoch(): string | null;
    epoch(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    timeFromLaunch(): number;
    static startBOV(builder: flatbuffers.Builder): void;
    static addECoordinate(builder: flatbuffers.Builder, eCoordinate: number): void;
    static addFCoordinate(builder: flatbuffers.Builder, fCoordinate: number): void;
    static addGCoordinate(builder: flatbuffers.Builder, gCoordinate: number): void;
    static addEDot(builder: flatbuffers.Builder, eDot: number): void;
    static addFDot(builder: flatbuffers.Builder, fDot: number): void;
    static addGDot(builder: flatbuffers.Builder, gDot: number): void;
    static addEpoch(builder: flatbuffers.Builder, epochOffset: flatbuffers.Offset): void;
    static addTimeFromLaunch(builder: flatbuffers.Builder, timeFromLaunch: number): void;
    static endBOV(builder: flatbuffers.Builder): flatbuffers.Offset;
    static finishBOVBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static finishSizePrefixedBOVBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static createBOV(builder: flatbuffers.Builder, eCoordinate: number, fCoordinate: number, gCoordinate: number, eDot: number, fDot: number, gDot: number, epochOffset: flatbuffers.Offset, timeFromLaunch: number): flatbuffers.Offset;
    unpack(): BOVT;
    unpackTo(_o: BOVT): void;
}
export declare class BOVT implements flatbuffers.IGeneratedObject {
    eCoordinate: number;
    fCoordinate: number;
    gCoordinate: number;
    eDot: number;
    fDot: number;
    gDot: number;
    epoch: string | Uint8Array | null;
    timeFromLaunch: number;
    constructor(eCoordinate?: number, fCoordinate?: number, gCoordinate?: number, eDot?: number, fDot?: number, gDot?: number, epoch?: string | Uint8Array | null, timeFromLaunch?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=bov.d.ts.map