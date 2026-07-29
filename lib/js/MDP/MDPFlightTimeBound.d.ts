import * as flatbuffers from 'flatbuffers';
/**
 * Time-of-flight bound between two encounters. Adjacent stages give per-leg
 * bounds; non-adjacent stages give cumulative bounds such as
 * "Earth to Mars to Earth within 3 years".
 */
export declare class MDPFlightTimeBound implements flatbuffers.IUnpackableObject<MDPFlightTimeBoundT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): MDPFlightTimeBound;
    static getRootAsMDPFlightTimeBound(bb: flatbuffers.ByteBuffer, obj?: MDPFlightTimeBound): MDPFlightTimeBound;
    static getSizePrefixedRootAsMDPFlightTimeBound(bb: flatbuffers.ByteBuffer, obj?: MDPFlightTimeBound): MDPFlightTimeBound;
    /**
     * Stage indices the bound spans. TO_STAGE_INDEX > FROM_STAGE_INDEX.
     */
    FROM_STAGE_INDEX(): number;
    TO_STAGE_INDEX(): number;
    /**
     * Inclusive bounds on elapsed time between those two encounters, days.
     */
    MIN_DAYS(): number;
    MAX_DAYS(): number;
    static startMDPFlightTimeBound(builder: flatbuffers.Builder): void;
    static addFromStageIndex(builder: flatbuffers.Builder, FROM_STAGE_INDEX: number): void;
    static addToStageIndex(builder: flatbuffers.Builder, TO_STAGE_INDEX: number): void;
    static addMinDays(builder: flatbuffers.Builder, MIN_DAYS: number): void;
    static addMaxDays(builder: flatbuffers.Builder, MAX_DAYS: number): void;
    static endMDPFlightTimeBound(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createMDPFlightTimeBound(builder: flatbuffers.Builder, FROM_STAGE_INDEX: number, TO_STAGE_INDEX: number, MIN_DAYS: number, MAX_DAYS: number): flatbuffers.Offset;
    unpack(): MDPFlightTimeBoundT;
    unpackTo(_o: MDPFlightTimeBoundT): void;
}
export declare class MDPFlightTimeBoundT implements flatbuffers.IGeneratedObject {
    FROM_STAGE_INDEX: number;
    TO_STAGE_INDEX: number;
    MIN_DAYS: number;
    MAX_DAYS: number;
    constructor(FROM_STAGE_INDEX?: number, TO_STAGE_INDEX?: number, MIN_DAYS?: number, MAX_DAYS?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=MDPFlightTimeBound.d.ts.map