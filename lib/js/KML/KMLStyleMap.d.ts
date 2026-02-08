import * as flatbuffers from 'flatbuffers';
import { KMLStyleMapPair, KMLStyleMapPairT } from './KMLStyleMapPair.js';
/**
 * Style map (normal/highlight pair)
 */
export declare class KMLStyleMap implements flatbuffers.IUnpackableObject<KMLStyleMapT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): KMLStyleMap;
    static getRootAsKMLStyleMap(bb: flatbuffers.ByteBuffer, obj?: KMLStyleMap): KMLStyleMap;
    static getSizePrefixedRootAsKMLStyleMap(bb: flatbuffers.ByteBuffer, obj?: KMLStyleMap): KMLStyleMap;
    /**
     * Style map identifier
     */
    ID(): string | null;
    ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Pairs
     */
    PAIRS(index: number, obj?: KMLStyleMapPair): KMLStyleMapPair | null;
    pairsLength(): number;
    static startKMLStyleMap(builder: flatbuffers.Builder): void;
    static addId(builder: flatbuffers.Builder, IDOffset: flatbuffers.Offset): void;
    static addPairs(builder: flatbuffers.Builder, PAIRSOffset: flatbuffers.Offset): void;
    static createPairsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startPairsVector(builder: flatbuffers.Builder, numElems: number): void;
    static endKMLStyleMap(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createKMLStyleMap(builder: flatbuffers.Builder, IDOffset: flatbuffers.Offset, PAIRSOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): KMLStyleMapT;
    unpackTo(_o: KMLStyleMapT): void;
}
export declare class KMLStyleMapT implements flatbuffers.IGeneratedObject {
    ID: string | Uint8Array | null;
    PAIRS: (KMLStyleMapPairT)[];
    constructor(ID?: string | Uint8Array | null, PAIRS?: (KMLStyleMapPairT)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=KMLStyleMap.d.ts.map