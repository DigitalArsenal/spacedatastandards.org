import * as flatbuffers from 'flatbuffers';
import { FrequencyRange, FrequencyRangeT } from './FrequencyRange.js';
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
    NAME(): string | null;
    NAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Frequency range of the band
     */
    FREQUENCY_RANGE(obj?: FrequencyRange): FrequencyRange | null;
    static startBand(builder: flatbuffers.Builder): void;
    static addName(builder: flatbuffers.Builder, NAMEOffset: flatbuffers.Offset): void;
    static addFrequencyRange(builder: flatbuffers.Builder, FREQUENCY_RANGEOffset: flatbuffers.Offset): void;
    static endBand(builder: flatbuffers.Builder): flatbuffers.Offset;
    unpack(): BandT;
    unpackTo(_o: BandT): void;
}
export declare class BandT implements flatbuffers.IGeneratedObject {
    NAME: string | Uint8Array | null;
    FREQUENCY_RANGE: FrequencyRangeT | null;
    constructor(NAME?: string | Uint8Array | null, FREQUENCY_RANGE?: FrequencyRangeT | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=Band.d.ts.map