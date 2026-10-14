import * as flatbuffers from 'flatbuffers';
import { CVR, CVRT } from './CVR.js';
/**
 * A realism cell: a regime and age tested at a horizon.
 */
export declare class ERMRealismCell implements flatbuffers.IUnpackableObject<ERMRealismCellT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): ERMRealismCell;
    static getRootAsERMRealismCell(bb: flatbuffers.ByteBuffer, obj?: ERMRealismCell): ERMRealismCell;
    static getSizePrefixedRootAsERMRealismCell(bb: flatbuffers.ByteBuffer, obj?: ERMRealismCell): ERMRealismCell;
    REGIME_INDEX(): number;
    AGE_INDEX(): number;
    /**
     * The test's decision as worded, e.g. "REALISTIC",
     * "NOT REALISTIC (overconfident)".
     */
    DECISION(): string | null;
    DECISION(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * REGIME, HORIZON_DAYS, MEAN_D2_OVER_3, COVERAGE_95, SAMPLES, OBJECTS,
     * CALIBRATION of the cell.
     */
    REALISM(obj?: CVR): CVR | null;
    static startERMRealismCell(builder: flatbuffers.Builder): void;
    static addRegimeIndex(builder: flatbuffers.Builder, REGIME_INDEX: number): void;
    static addAgeIndex(builder: flatbuffers.Builder, AGE_INDEX: number): void;
    static addDecision(builder: flatbuffers.Builder, DECISIONOffset: flatbuffers.Offset): void;
    static addRealism(builder: flatbuffers.Builder, REALISMOffset: flatbuffers.Offset): void;
    static endERMRealismCell(builder: flatbuffers.Builder): flatbuffers.Offset;
    unpack(): ERMRealismCellT;
    unpackTo(_o: ERMRealismCellT): void;
}
export declare class ERMRealismCellT implements flatbuffers.IGeneratedObject {
    REGIME_INDEX: number;
    AGE_INDEX: number;
    DECISION: string | Uint8Array | null;
    REALISM: CVRT | null;
    constructor(REGIME_INDEX?: number, AGE_INDEX?: number, DECISION?: string | Uint8Array | null, REALISM?: CVRT | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=ERMRealismCell.d.ts.map