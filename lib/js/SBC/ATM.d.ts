import * as flatbuffers from 'flatbuffers';
import { AtmosphericModelFamily } from './AtmosphericModelFamily.js';
/**
 * Atmospheric Model Message
 */
export declare class ATM implements flatbuffers.IUnpackableObject<ATMT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): ATM;
    static getRootAsATM(bb: flatbuffers.ByteBuffer, obj?: ATM): ATM;
    static getSizePrefixedRootAsATM(bb: flatbuffers.ByteBuffer, obj?: ATM): ATM;
    static bufferHasIdentifier(bb: flatbuffers.ByteBuffer): boolean;
    /**
     * Canonical model family
     */
    MODEL(): AtmosphericModelFamily;
    /**
     * Four-digit year identifying the model version (e.g., 1970, 2008, 2020)
     */
    YEAR(): number;
    static startATM(builder: flatbuffers.Builder): void;
    static addModel(builder: flatbuffers.Builder, MODEL: AtmosphericModelFamily): void;
    static addYear(builder: flatbuffers.Builder, YEAR: number): void;
    static endATM(builder: flatbuffers.Builder): flatbuffers.Offset;
    static finishATMBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static finishSizePrefixedATMBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static createATM(builder: flatbuffers.Builder, MODEL: AtmosphericModelFamily, YEAR: number): flatbuffers.Offset;
    unpack(): ATMT;
    unpackTo(_o: ATMT): void;
}
export declare class ATMT implements flatbuffers.IGeneratedObject {
    MODEL: AtmosphericModelFamily;
    YEAR: number;
    constructor(MODEL?: AtmosphericModelFamily, YEAR?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=ATM.d.ts.map