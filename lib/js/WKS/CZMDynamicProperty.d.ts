import * as flatbuffers from 'flatbuffers';
import { CZMDynInterval, CZMDynIntervalT } from './CZMDynInterval.js';
import { CZMDynSampled, CZMDynSampledT } from './CZMDynSampled.js';
/**
 * A single time-dynamic property (non-static value)
 */
export declare class CZMDynamicProperty implements flatbuffers.IUnpackableObject<CZMDynamicPropertyT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): CZMDynamicProperty;
    static getRootAsCZMDynamicProperty(bb: flatbuffers.ByteBuffer, obj?: CZMDynamicProperty): CZMDynamicProperty;
    static getSizePrefixedRootAsCZMDynamicProperty(bb: flatbuffers.ByteBuffer, obj?: CZMDynamicProperty): CZMDynamicProperty;
    /**
     * Dotted path name, e.g. "billboard.scale", "point.color"
     */
    NAME(): string | null;
    NAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Sampled data (when property uses epoch + data array)
     */
    SAMPLED(obj?: CZMDynSampled): CZMDynSampled | null;
    /**
     * Interval-based values
     */
    INTERVALS(index: number, obj?: CZMDynInterval): CZMDynInterval | null;
    intervalsLength(): number;
    /**
     * Reference to another entity's property
     */
    REFERENCE(): string | null;
    REFERENCE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    static startCZMDynamicProperty(builder: flatbuffers.Builder): void;
    static addName(builder: flatbuffers.Builder, NAMEOffset: flatbuffers.Offset): void;
    static addSampled(builder: flatbuffers.Builder, SAMPLEDOffset: flatbuffers.Offset): void;
    static addIntervals(builder: flatbuffers.Builder, INTERVALSOffset: flatbuffers.Offset): void;
    static createIntervalsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startIntervalsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addReference(builder: flatbuffers.Builder, REFERENCEOffset: flatbuffers.Offset): void;
    static endCZMDynamicProperty(builder: flatbuffers.Builder): flatbuffers.Offset;
    unpack(): CZMDynamicPropertyT;
    unpackTo(_o: CZMDynamicPropertyT): void;
}
export declare class CZMDynamicPropertyT implements flatbuffers.IGeneratedObject {
    NAME: string | Uint8Array | null;
    SAMPLED: CZMDynSampledT | null;
    INTERVALS: (CZMDynIntervalT)[];
    REFERENCE: string | Uint8Array | null;
    constructor(NAME?: string | Uint8Array | null, SAMPLED?: CZMDynSampledT | null, INTERVALS?: (CZMDynIntervalT)[], REFERENCE?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=CZMDynamicProperty.d.ts.map