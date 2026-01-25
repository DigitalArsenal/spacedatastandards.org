import * as flatbuffers from 'flatbuffers';
import { DefaultAlarm, DefaultAlarmT } from './DefaultAlarm.js';
import { MatchCriteria, MatchCriteriaT } from './MatchCriteria.js';
/**
 * Context-dependent alarm
 */
export declare class ContextAlarm implements flatbuffers.IUnpackableObject<ContextAlarmT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): ContextAlarm;
    static getRootAsContextAlarm(bb: flatbuffers.ByteBuffer, obj?: ContextAlarm): ContextAlarm;
    static getSizePrefixedRootAsContextAlarm(bb: flatbuffers.ByteBuffer, obj?: ContextAlarm): ContextAlarm;
    /**
     * Match criteria for this alarm context
     */
    MATCH_CRITERIA(obj?: MatchCriteria): MatchCriteria | null;
    /**
     * Alarm definition for this context
     */
    ALARM(obj?: DefaultAlarm): DefaultAlarm | null;
    static startContextAlarm(builder: flatbuffers.Builder): void;
    static addMatchCriteria(builder: flatbuffers.Builder, MATCH_CRITERIAOffset: flatbuffers.Offset): void;
    static addAlarm(builder: flatbuffers.Builder, ALARMOffset: flatbuffers.Offset): void;
    static endContextAlarm(builder: flatbuffers.Builder): flatbuffers.Offset;
    unpack(): ContextAlarmT;
    unpackTo(_o: ContextAlarmT): void;
}
export declare class ContextAlarmT implements flatbuffers.IGeneratedObject {
    MATCH_CRITERIA: MatchCriteriaT | null;
    ALARM: DefaultAlarmT | null;
    constructor(MATCH_CRITERIA?: MatchCriteriaT | null, ALARM?: DefaultAlarmT | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=ContextAlarm.d.ts.map