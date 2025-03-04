import * as flatbuffers from 'flatbuffers';
import { FrequencyRange, FrequencyRangeT } from './frequency-range.js';
/**
 * Table representing a frequency band with a name and frequency range
 */
export declare class Band implements flatbuffers.IUnpackableObject<BandT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): Band;
    static getRootAsBand(bb: flatbuffers.ByteBuffer, obj?: Band): Band;
    static getSizePrefixedRootAsBand(bb: flatbuffers.ByteBuffer, obj?: Band): Band;
    /**
     * Name of the band
     */
    name(): string | null;
    name(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Frequency range of the band
     */
    frequencyRange(obj?: FrequencyRange): FrequencyRange | null;
    static startBand(builder: flatbuffers.Builder): void;
    static addName(builder: flatbuffers.Builder, nameOffset: flatbuffers.Offset): void;
    static addFrequencyRange(builder: flatbuffers.Builder, frequencyRangeOffset: flatbuffers.Offset): void;
    static endBand(builder: flatbuffers.Builder): flatbuffers.Offset;
    unpack(): BandT;
    unpackTo(_o: BandT): void;
}
export declare class BandT implements flatbuffers.IGeneratedObject {
    name: string | Uint8Array | null;
    frequencyRange: FrequencyRangeT | null;
    constructor(name?: string | Uint8Array | null, frequencyRange?: FrequencyRangeT | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=band.d.ts.map