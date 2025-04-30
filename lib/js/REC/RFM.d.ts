import * as flatbuffers from 'flatbuffers';
import { CelestialFrameWrapperT } from './CelestialFrameWrapper.js';
import { CustomFrameWrapperT } from './CustomFrameWrapper.js';
import { OrbitFrameWrapperT } from './OrbitFrameWrapper.js';
import { RFMUnion } from './RFMUnion.js';
import { SpacecraftFrameWrapperT } from './SpacecraftFrameWrapper.js';
/**
 * Reference Frame Message
 */
export declare class RFM implements flatbuffers.IUnpackableObject<RFMT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): RFM;
    static getRootAsRFM(bb: flatbuffers.ByteBuffer, obj?: RFM): RFM;
    static getSizePrefixedRootAsRFM(bb: flatbuffers.ByteBuffer, obj?: RFM): RFM;
    static bufferHasIdentifier(bb: flatbuffers.ByteBuffer): boolean;
    referenceFrameType(): RFMUnion;
    REFERENCE_FRAME<T extends flatbuffers.Table>(obj: any): any | null;
    INDEX(): number;
    NAME(): string | null;
    NAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    static startRFM(builder: flatbuffers.Builder): void;
    static addReferenceFrameType(builder: flatbuffers.Builder, referenceFrameType: RFMUnion): void;
    static addReferenceFrame(builder: flatbuffers.Builder, REFERENCE_FRAMEOffset: flatbuffers.Offset): void;
    static addIndex(builder: flatbuffers.Builder, INDEX: number): void;
    static addName(builder: flatbuffers.Builder, NAMEOffset: flatbuffers.Offset): void;
    static endRFM(builder: flatbuffers.Builder): flatbuffers.Offset;
    static finishRFMBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static finishSizePrefixedRFMBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static createRFM(builder: flatbuffers.Builder, referenceFrameType: RFMUnion, REFERENCE_FRAMEOffset: flatbuffers.Offset, INDEX: number, NAMEOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): RFMT;
    unpackTo(_o: RFMT): void;
}
export declare class RFMT implements flatbuffers.IGeneratedObject {
    referenceFrameType: RFMUnion;
    REFERENCE_FRAME: CelestialFrameWrapperT | CustomFrameWrapperT | OrbitFrameWrapperT | SpacecraftFrameWrapperT | null;
    INDEX: number;
    NAME: string | Uint8Array | null;
    constructor(referenceFrameType?: RFMUnion, REFERENCE_FRAME?: CelestialFrameWrapperT | CustomFrameWrapperT | OrbitFrameWrapperT | SpacecraftFrameWrapperT | null, INDEX?: number, NAME?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=RFM.d.ts.map