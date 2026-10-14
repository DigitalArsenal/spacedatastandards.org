import * as flatbuffers from 'flatbuffers';
import { XMTManeuverMember, XMTManeuverMemberT } from './XMTManeuverMember.js';
import { XMTRecordRef, XMTRecordRefT } from './XMTRecordRef.js';
import { maneuverStatus } from './maneuverStatus.js';
/**
 * One maneuver event of an object after merging.
 */
export declare class XMTManeuverEvent implements flatbuffers.IUnpackableObject<XMTManeuverEventT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): XMTManeuverEvent;
    static getRootAsXMTManeuverEvent(bb: flatbuffers.ByteBuffer, obj?: XMTManeuverEvent): XMTManeuverEvent;
    static getSizePrefixedRootAsXMTManeuverEvent(bb: flatbuffers.ByteBuffer, obj?: XMTManeuverEvent): XMTManeuverEvent;
    /**
     * Earliest member's time, Unix milliseconds.
     */
    TIME_MS(): bigint;
    /**
     * Best status any member gave.
     */
    STATUS(): maneuverStatus;
    /**
     * Delta-v of the primary member, km/s; NaN = not stated.
     */
    DELTA_V_KM_S(): number;
    MEMBERS(index: number, obj?: XMTManeuverMember): XMTManeuverMember | null;
    membersLength(): number;
    /**
     * The published $MNV record.
     */
    RECORD(obj?: XMTRecordRef): XMTRecordRef | null;
    static startXMTManeuverEvent(builder: flatbuffers.Builder): void;
    static addTimeMs(builder: flatbuffers.Builder, TIME_MS: bigint): void;
    static addStatus(builder: flatbuffers.Builder, STATUS: maneuverStatus): void;
    static addDeltaVKmS(builder: flatbuffers.Builder, DELTA_V_KM_S: number): void;
    static addMembers(builder: flatbuffers.Builder, MEMBERSOffset: flatbuffers.Offset): void;
    static createMembersVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startMembersVector(builder: flatbuffers.Builder, numElems: number): void;
    static addRecord(builder: flatbuffers.Builder, RECORDOffset: flatbuffers.Offset): void;
    static endXMTManeuverEvent(builder: flatbuffers.Builder): flatbuffers.Offset;
    unpack(): XMTManeuverEventT;
    unpackTo(_o: XMTManeuverEventT): void;
}
export declare class XMTManeuverEventT implements flatbuffers.IGeneratedObject {
    TIME_MS: bigint;
    STATUS: maneuverStatus;
    DELTA_V_KM_S: number;
    MEMBERS: (XMTManeuverMemberT)[];
    RECORD: XMTRecordRefT | null;
    constructor(TIME_MS?: bigint, STATUS?: maneuverStatus, DELTA_V_KM_S?: number, MEMBERS?: (XMTManeuverMemberT)[], RECORD?: XMTRecordRefT | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=XMTManeuverEvent.d.ts.map