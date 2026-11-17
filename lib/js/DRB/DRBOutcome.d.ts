import * as flatbuffers from 'flatbuffers';
import { drbRecordOutcome } from './drbRecordOutcome.js';
/**
 * The outcome of one input record that carries no rows.
 */
export declare class DRBOutcome implements flatbuffers.IUnpackableObject<DRBOutcomeT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): DRBOutcome;
    /**
     * Position of the record in the input stream, from 0.
     */
    RECORD_INDEX(): number;
    /**
     * Why it carries no rows.
     */
    OUTCOME(): drbRecordOutcome;
    static sizeOf(): number;
    static createDRBOutcome(builder: flatbuffers.Builder, RECORD_INDEX: number, OUTCOME: drbRecordOutcome): flatbuffers.Offset;
    unpack(): DRBOutcomeT;
    unpackTo(_o: DRBOutcomeT): void;
}
export declare class DRBOutcomeT implements flatbuffers.IGeneratedObject {
    RECORD_INDEX: number;
    OUTCOME: drbRecordOutcome;
    constructor(RECORD_INDEX?: number, OUTCOME?: drbRecordOutcome);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=DRBOutcome.d.ts.map