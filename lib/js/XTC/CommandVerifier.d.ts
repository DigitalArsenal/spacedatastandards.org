import * as flatbuffers from 'flatbuffers';
import { MatchCriteria, MatchCriteriaT } from './MatchCriteria.js';
import { TimeWindowRefType } from './TimeWindowRefType.js';
import { VerifierType } from './VerifierType.js';
/**
 * Command verifier definition
 */
export declare class CommandVerifier implements flatbuffers.IUnpackableObject<CommandVerifierT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): CommandVerifier;
    static getRootAsCommandVerifier(bb: flatbuffers.ByteBuffer, obj?: CommandVerifier): CommandVerifier;
    static getSizePrefixedRootAsCommandVerifier(bb: flatbuffers.ByteBuffer, obj?: CommandVerifier): CommandVerifier;
    /**
     * Verifier name
     */
    NAME(): string | null;
    NAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Verifier type
     */
    VERIFIER_TYPE(): VerifierType;
    /**
     * Verification condition
     */
    CONDITION(obj?: MatchCriteria): MatchCriteria | null;
    /**
     * Container reference for verification
     */
    CONTAINER_REF(): string | null;
    CONTAINER_REF(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Time window start (seconds)
     */
    TIME_WINDOW_START(): number;
    /**
     * Time window stop (seconds)
     */
    TIME_WINDOW_STOP(): number;
    /**
     * Time window reference type
     */
    TIME_WINDOW_REF(): TimeWindowRefType;
    static startCommandVerifier(builder: flatbuffers.Builder): void;
    static addName(builder: flatbuffers.Builder, NAMEOffset: flatbuffers.Offset): void;
    static addVerifierType(builder: flatbuffers.Builder, VERIFIER_TYPE: VerifierType): void;
    static addCondition(builder: flatbuffers.Builder, CONDITIONOffset: flatbuffers.Offset): void;
    static addContainerRef(builder: flatbuffers.Builder, CONTAINER_REFOffset: flatbuffers.Offset): void;
    static addTimeWindowStart(builder: flatbuffers.Builder, TIME_WINDOW_START: number): void;
    static addTimeWindowStop(builder: flatbuffers.Builder, TIME_WINDOW_STOP: number): void;
    static addTimeWindowRef(builder: flatbuffers.Builder, TIME_WINDOW_REF: TimeWindowRefType): void;
    static endCommandVerifier(builder: flatbuffers.Builder): flatbuffers.Offset;
    unpack(): CommandVerifierT;
    unpackTo(_o: CommandVerifierT): void;
}
export declare class CommandVerifierT implements flatbuffers.IGeneratedObject {
    NAME: string | Uint8Array | null;
    VERIFIER_TYPE: VerifierType;
    CONDITION: MatchCriteriaT | null;
    CONTAINER_REF: string | Uint8Array | null;
    TIME_WINDOW_START: number;
    TIME_WINDOW_STOP: number;
    TIME_WINDOW_REF: TimeWindowRefType;
    constructor(NAME?: string | Uint8Array | null, VERIFIER_TYPE?: VerifierType, CONDITION?: MatchCriteriaT | null, CONTAINER_REF?: string | Uint8Array | null, TIME_WINDOW_START?: number, TIME_WINDOW_STOP?: number, TIME_WINDOW_REF?: TimeWindowRefType);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=CommandVerifier.d.ts.map