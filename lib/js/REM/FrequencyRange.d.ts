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
    LOWER(): number;
    /**
     * Upper frequency in MHz
     */
    UPPER(): number;
    static startFrequencyRange(builder: flatbuffers.Builder): void;
    static addLower(builder: flatbuffers.Builder, LOWER: number): void;
    static addUpper(builder: flatbuffers.Builder, UPPER: number): void;
    static endFrequencyRange(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createFrequencyRange(builder: flatbuffers.Builder, LOWER: number, UPPER: number): flatbuffers.Offset;
    unpack(): FrequencyRangeT;
    unpackTo(_o: FrequencyRangeT): void;
}
export declare class FrequencyRangeT implements flatbuffers.IGeneratedObject {
    LOWER: number;
    UPPER: number;
    constructor(LOWER?: number, UPPER?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=FrequencyRange.d.ts.map