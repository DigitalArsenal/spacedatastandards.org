import * as flatbuffers from 'flatbuffers';
import { ERMResidualStatistics, ERMResidualStatisticsT } from './ERMResidualStatistics.js';
/**
 * The half-split closure test of a fit.
 */
export declare class ERMClosureTest implements flatbuffers.IUnpackableObject<ERMClosureTestT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): ERMClosureTest;
    static getRootAsERMClosureTest(bb: flatbuffers.ByteBuffer, obj?: ERMClosureTest): ERMClosureTest;
    static getSizePrefixedRootAsERMClosureTest(bb: flatbuffers.ByteBuffer, obj?: ERMClosureTest): ERMClosureTest;
    DEFINITION(): string | null;
    DEFINITION(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    SPLIT_EPOCH(): string | null;
    SPLIT_EPOCH(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    FIT_STATES(): number;
    ITERATIONS(): number;
    RMS(obj?: ERMResidualStatistics): ERMResidualStatistics | null;
    ERROR(): string | null;
    ERROR(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    static startERMClosureTest(builder: flatbuffers.Builder): void;
    static addDefinition(builder: flatbuffers.Builder, DEFINITIONOffset: flatbuffers.Offset): void;
    static addSplitEpoch(builder: flatbuffers.Builder, SPLIT_EPOCHOffset: flatbuffers.Offset): void;
    static addFitStates(builder: flatbuffers.Builder, FIT_STATES: number): void;
    static addIterations(builder: flatbuffers.Builder, ITERATIONS: number): void;
    static addRms(builder: flatbuffers.Builder, RMSOffset: flatbuffers.Offset): void;
    static addError(builder: flatbuffers.Builder, ERROROffset: flatbuffers.Offset): void;
    static endERMClosureTest(builder: flatbuffers.Builder): flatbuffers.Offset;
    unpack(): ERMClosureTestT;
    unpackTo(_o: ERMClosureTestT): void;
}
export declare class ERMClosureTestT implements flatbuffers.IGeneratedObject {
    DEFINITION: string | Uint8Array | null;
    SPLIT_EPOCH: string | Uint8Array | null;
    FIT_STATES: number;
    ITERATIONS: number;
    RMS: ERMResidualStatisticsT | null;
    ERROR: string | Uint8Array | null;
    constructor(DEFINITION?: string | Uint8Array | null, SPLIT_EPOCH?: string | Uint8Array | null, FIT_STATES?: number, ITERATIONS?: number, RMS?: ERMResidualStatisticsT | null, ERROR?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=ERMClosureTest.d.ts.map