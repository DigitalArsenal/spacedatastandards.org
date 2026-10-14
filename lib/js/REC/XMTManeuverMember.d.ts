import * as flatbuffers from 'flatbuffers';
import { maneuverStatus } from './maneuverStatus.js';
/**
 * One source's report of a merged maneuver.
 */
export declare class XMTManeuverMember implements flatbuffers.IUnpackableObject<XMTManeuverMemberT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): XMTManeuverMember;
    static getRootAsXMTManeuverMember(bb: flatbuffers.ByteBuffer, obj?: XMTManeuverMember): XMTManeuverMember;
    static getSizePrefixedRootAsXMTManeuverMember(bb: flatbuffers.ByteBuffer, obj?: XMTManeuverMember): XMTManeuverMember;
    SOURCE_ID(): string | null;
    SOURCE_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    STATUS(): maneuverStatus;
    /**
     * The source's maneuver ID.
     */
    ID(): string | null;
    ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Maneuver time, Unix milliseconds.
     */
    TIME_MS(): bigint;
    static startXMTManeuverMember(builder: flatbuffers.Builder): void;
    static addSourceId(builder: flatbuffers.Builder, SOURCE_IDOffset: flatbuffers.Offset): void;
    static addStatus(builder: flatbuffers.Builder, STATUS: maneuverStatus): void;
    static addId(builder: flatbuffers.Builder, IDOffset: flatbuffers.Offset): void;
    static addTimeMs(builder: flatbuffers.Builder, TIME_MS: bigint): void;
    static endXMTManeuverMember(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createXMTManeuverMember(builder: flatbuffers.Builder, SOURCE_IDOffset: flatbuffers.Offset, STATUS: maneuverStatus, IDOffset: flatbuffers.Offset, TIME_MS: bigint): flatbuffers.Offset;
    unpack(): XMTManeuverMemberT;
    unpackTo(_o: XMTManeuverMemberT): void;
}
export declare class XMTManeuverMemberT implements flatbuffers.IGeneratedObject {
    SOURCE_ID: string | Uint8Array | null;
    STATUS: maneuverStatus;
    ID: string | Uint8Array | null;
    TIME_MS: bigint;
    constructor(SOURCE_ID?: string | Uint8Array | null, STATUS?: maneuverStatus, ID?: string | Uint8Array | null, TIME_MS?: bigint);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=XMTManeuverMember.d.ts.map