import * as flatbuffers from 'flatbuffers';
/**
 * Frequency range with lower and upper limits
 */
export declare class FrequencyRange implements flatbuffers.IUnpackableObject<FrequencyRangeT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): FrequencyRange;
    static getRootAsFrequencyRange(bb: flatbuffers.ByteBuffer, obj?: FrequencyRange): FrequencyRange;
    static getSizePrefixedRootAsFrequencyRange(bb: flatbuffers.ByteBuffer, obj?: FrequencyRange): FrequencyRange;
    /**
     * Lower frequency in MHz
     */
    lower(): number;
    /**
     * Upper frequency in MHz
     */
    upper(): number;
    static startFrequencyRange(builder: flatbuffers.Builder): void;
    static addLower(builder: flatbuffers.Builder, lower: number): void;
    static addUpper(builder: flatbuffers.Builder, upper: number): void;
    static endFrequencyRange(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createFrequencyRange(builder: flatbuffers.Builder, lower: number, upper: number): flatbuffers.Offset;
    unpack(): FrequencyRangeT;
    unpackTo(_o: FrequencyRangeT): void;
}
export declare class FrequencyRangeT implements flatbuffers.IGeneratedObject {
    lower: number;
    upper: number;
    constructor(lower?: number, upper?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=frequency-range.d.ts.map