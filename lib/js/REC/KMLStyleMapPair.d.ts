import * as flatbuffers from 'flatbuffers';
import { KMLStyleState } from './KMLStyleState.js';
/**
 * Style map pair
 */
export declare class KMLStyleMapPair implements flatbuffers.IUnpackableObject<KMLStyleMapPairT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): KMLStyleMapPair;
    static getRootAsKMLStyleMapPair(bb: flatbuffers.ByteBuffer, obj?: KMLStyleMapPair): KMLStyleMapPair;
    static getSizePrefixedRootAsKMLStyleMapPair(bb: flatbuffers.ByteBuffer, obj?: KMLStyleMapPair): KMLStyleMapPair;
    /**
     * State (normal or highlight)
     */
    STATE(): KMLStyleState;
    /**
     * Style URL or inline style ID
     */
    STYLE_URL(): string | null;
    STYLE_URL(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    static startKMLStyleMapPair(builder: flatbuffers.Builder): void;
    static addState(builder: flatbuffers.Builder, STATE: KMLStyleState): void;
    static addStyleUrl(builder: flatbuffers.Builder, STYLE_URLOffset: flatbuffers.Offset): void;
    static endKMLStyleMapPair(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createKMLStyleMapPair(builder: flatbuffers.Builder, STATE: KMLStyleState, STYLE_URLOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): KMLStyleMapPairT;
    unpackTo(_o: KMLStyleMapPairT): void;
}
export declare class KMLStyleMapPairT implements flatbuffers.IGeneratedObject {
    STATE: KMLStyleState;
    STYLE_URL: string | Uint8Array | null;
    constructor(STATE?: KMLStyleState, STYLE_URL?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=KMLStyleMapPair.d.ts.map