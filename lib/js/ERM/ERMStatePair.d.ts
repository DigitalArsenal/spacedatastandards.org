import * as flatbuffers from 'flatbuffers';
import { ERMPairSide, ERMPairSideT } from './ERMPairSide.js';
/**
 * A predicted state and a truth state.
 */
export declare class ERMStatePair implements flatbuffers.IUnpackableObject<ERMStatePairT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): ERMStatePair;
    static getRootAsERMStatePair(bb: flatbuffers.ByteBuffer, obj?: ERMStatePair): ERMStatePair;
    static getSizePrefixedRootAsERMStatePair(bb: flatbuffers.ByteBuffer, obj?: ERMStatePair): ERMStatePair;
    ID(): string | null;
    ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    PREDICTED(obj?: ERMPairSide): ERMPairSide | null;
    TRUTH(obj?: ERMPairSide): ERMPairSide | null;
    static startERMStatePair(builder: flatbuffers.Builder): void;
    static addId(builder: flatbuffers.Builder, IDOffset: flatbuffers.Offset): void;
    static addPredicted(builder: flatbuffers.Builder, PREDICTEDOffset: flatbuffers.Offset): void;
    static addTruth(builder: flatbuffers.Builder, TRUTHOffset: flatbuffers.Offset): void;
    static endERMStatePair(builder: flatbuffers.Builder): flatbuffers.Offset;
    unpack(): ERMStatePairT;
    unpackTo(_o: ERMStatePairT): void;
}
export declare class ERMStatePairT implements flatbuffers.IGeneratedObject {
    ID: string | Uint8Array | null;
    PREDICTED: ERMPairSideT | null;
    TRUTH: ERMPairSideT | null;
    constructor(ID?: string | Uint8Array | null, PREDICTED?: ERMPairSideT | null, TRUTH?: ERMPairSideT | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=ERMStatePair.d.ts.map