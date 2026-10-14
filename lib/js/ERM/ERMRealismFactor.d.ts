import * as flatbuffers from 'flatbuffers';
import { CVR, CVRT } from './CVR.js';
/**
 * A measured realism factor for a source's fit class.
 */
export declare class ERMRealismFactor implements flatbuffers.IUnpackableObject<ERMRealismFactorT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): ERMRealismFactor;
    static getRootAsERMRealismFactor(bb: flatbuffers.ByteBuffer, obj?: ERMRealismFactor): ERMRealismFactor;
    static getSizePrefixedRootAsERMRealismFactor(bb: flatbuffers.ByteBuffer, obj?: ERMRealismFactor): ERMRealismFactor;
    /**
     * Sources it applies to; "*" = any.
     */
    SOURCES(index: number): string;
    SOURCES(index: number, optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    sourcesLength(): number;
    /**
     * Fit class.
     */
    FIT_CLASS(): string | null;
    FIT_CLASS(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * SCALE_FACTOR, MEAN_D2_OVER_3, COVERAGE_95, SAMPLES, OBJECTS, EVIDENCE,
     * TEST_WINDOW.
     */
    REALISM(obj?: CVR): CVR | null;
    static startERMRealismFactor(builder: flatbuffers.Builder): void;
    static addSources(builder: flatbuffers.Builder, SOURCESOffset: flatbuffers.Offset): void;
    static createSourcesVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startSourcesVector(builder: flatbuffers.Builder, numElems: number): void;
    static addFitClass(builder: flatbuffers.Builder, FIT_CLASSOffset: flatbuffers.Offset): void;
    static addRealism(builder: flatbuffers.Builder, REALISMOffset: flatbuffers.Offset): void;
    static endERMRealismFactor(builder: flatbuffers.Builder): flatbuffers.Offset;
    unpack(): ERMRealismFactorT;
    unpackTo(_o: ERMRealismFactorT): void;
}
export declare class ERMRealismFactorT implements flatbuffers.IGeneratedObject {
    SOURCES: (string)[];
    FIT_CLASS: string | Uint8Array | null;
    REALISM: CVRT | null;
    constructor(SOURCES?: (string)[], FIT_CLASS?: string | Uint8Array | null, REALISM?: CVRT | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=ERMRealismFactor.d.ts.map