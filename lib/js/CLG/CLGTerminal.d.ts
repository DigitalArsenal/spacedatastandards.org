import * as flatbuffers from 'flatbuffers';
import { CLGQuaternion, CLGQuaternionT } from './CLGQuaternion.js';
import { CLGVector3, CLGVector3T } from './CLGVector3.js';
export declare class CLGTerminal implements flatbuffers.IUnpackableObject<CLGTerminalT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): CLGTerminal;
    static getRootAsCLGTerminal(bb: flatbuffers.ByteBuffer, obj?: CLGTerminal): CLGTerminal;
    static getSizePrefixedRootAsCLGTerminal(bb: flatbuffers.ByteBuffer, obj?: CLGTerminal): CLGTerminal;
    TERMINAL_ID(): string;
    TERMINAL_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    NODE_INDEX(): number;
    PROFILE_INDEX(): number;
    MOUNT_TO_NODE(obj?: CLGQuaternion): CLGQuaternion | null;
    /**
     * Mechanical initial direction; fixed beam requires exactly mount +Z.
     */
    INITIAL_DIRECTION(obj?: CLGVector3): CLGVector3 | null;
    INITIAL_AT_REST(): boolean;
    /**
     * Value presence: false means omitted; true precedes value validation.
     */
    HAS_NODE_INDEX(): boolean;
    HAS_PROFILE_INDEX(): boolean;
    HAS_INITIAL_AT_REST(): boolean;
    static startCLGTerminal(builder: flatbuffers.Builder): void;
    static addTerminalId(builder: flatbuffers.Builder, TERMINAL_IDOffset: flatbuffers.Offset): void;
    static addNodeIndex(builder: flatbuffers.Builder, NODE_INDEX: number): void;
    static addProfileIndex(builder: flatbuffers.Builder, PROFILE_INDEX: number): void;
    static addMountToNode(builder: flatbuffers.Builder, MOUNT_TO_NODEOffset: flatbuffers.Offset): void;
    static addInitialDirection(builder: flatbuffers.Builder, INITIAL_DIRECTIONOffset: flatbuffers.Offset): void;
    static addInitialAtRest(builder: flatbuffers.Builder, INITIAL_AT_REST: boolean): void;
    static addHasNodeIndex(builder: flatbuffers.Builder, HAS_NODE_INDEX: boolean): void;
    static addHasProfileIndex(builder: flatbuffers.Builder, HAS_PROFILE_INDEX: boolean): void;
    static addHasInitialAtRest(builder: flatbuffers.Builder, HAS_INITIAL_AT_REST: boolean): void;
    static endCLGTerminal(builder: flatbuffers.Builder): flatbuffers.Offset;
    unpack(): CLGTerminalT;
    unpackTo(_o: CLGTerminalT): void;
}
export declare class CLGTerminalT implements flatbuffers.IGeneratedObject {
    TERMINAL_ID: string | Uint8Array | null;
    NODE_INDEX: number;
    PROFILE_INDEX: number;
    MOUNT_TO_NODE: CLGQuaternionT | null;
    INITIAL_DIRECTION: CLGVector3T | null;
    INITIAL_AT_REST: boolean;
    HAS_NODE_INDEX: boolean;
    HAS_PROFILE_INDEX: boolean;
    HAS_INITIAL_AT_REST: boolean;
    constructor(TERMINAL_ID?: string | Uint8Array | null, NODE_INDEX?: number, PROFILE_INDEX?: number, MOUNT_TO_NODE?: CLGQuaternionT | null, INITIAL_DIRECTION?: CLGVector3T | null, INITIAL_AT_REST?: boolean, HAS_NODE_INDEX?: boolean, HAS_PROFILE_INDEX?: boolean, HAS_INITIAL_AT_REST?: boolean);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=CLGTerminal.d.ts.map