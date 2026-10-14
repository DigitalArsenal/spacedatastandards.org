import * as flatbuffers from 'flatbuffers';
/**
 * Rule scores at one miss distance.
 */
export declare class ERMScreeningRow implements flatbuffers.IUnpackableObject<ERMScreeningRowT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): ERMScreeningRow;
    static getRootAsERMScreeningRow(bb: flatbuffers.ByteBuffer, obj?: ERMScreeningRow): ERMScreeningRow;
    static getSizePrefixedRootAsERMScreeningRow(bb: flatbuffers.ByteBuffer, obj?: ERMScreeningRow): ERMScreeningRow;
    MISS_M(): number;
    /**
     * True when the miss is within the hard-body radius.
     */
    COLLISION(): boolean;
    CASES(): number;
    PC_ALERT_RATE(): number;
    MEAN_PC(): number;
    BRIER(): number;
    BOUNDED_SET_ALERT_RATE(): number;
    POSSIBILITY_ALERT_RATE(): number;
    MEAN_POSSIBILITY_OF_COLLISION(): number;
    static startERMScreeningRow(builder: flatbuffers.Builder): void;
    static addMissM(builder: flatbuffers.Builder, MISS_M: number): void;
    static addCollision(builder: flatbuffers.Builder, COLLISION: boolean): void;
    static addCases(builder: flatbuffers.Builder, CASES: number): void;
    static addPcAlertRate(builder: flatbuffers.Builder, PC_ALERT_RATE: number): void;
    static addMeanPc(builder: flatbuffers.Builder, MEAN_PC: number): void;
    static addBrier(builder: flatbuffers.Builder, BRIER: number): void;
    static addBoundedSetAlertRate(builder: flatbuffers.Builder, BOUNDED_SET_ALERT_RATE: number): void;
    static addPossibilityAlertRate(builder: flatbuffers.Builder, POSSIBILITY_ALERT_RATE: number): void;
    static addMeanPossibilityOfCollision(builder: flatbuffers.Builder, MEAN_POSSIBILITY_OF_COLLISION: number): void;
    static endERMScreeningRow(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createERMScreeningRow(builder: flatbuffers.Builder, MISS_M: number, COLLISION: boolean, CASES: number, PC_ALERT_RATE: number, MEAN_PC: number, BRIER: number, BOUNDED_SET_ALERT_RATE: number, POSSIBILITY_ALERT_RATE: number, MEAN_POSSIBILITY_OF_COLLISION: number): flatbuffers.Offset;
    unpack(): ERMScreeningRowT;
    unpackTo(_o: ERMScreeningRowT): void;
}
export declare class ERMScreeningRowT implements flatbuffers.IGeneratedObject {
    MISS_M: number;
    COLLISION: boolean;
    CASES: number;
    PC_ALERT_RATE: number;
    MEAN_PC: number;
    BRIER: number;
    BOUNDED_SET_ALERT_RATE: number;
    POSSIBILITY_ALERT_RATE: number;
    MEAN_POSSIBILITY_OF_COLLISION: number;
    constructor(MISS_M?: number, COLLISION?: boolean, CASES?: number, PC_ALERT_RATE?: number, MEAN_PC?: number, BRIER?: number, BOUNDED_SET_ALERT_RATE?: number, POSSIBILITY_ALERT_RATE?: number, MEAN_POSSIBILITY_OF_COLLISION?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=ERMScreeningRow.d.ts.map