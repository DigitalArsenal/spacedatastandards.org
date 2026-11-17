import * as flatbuffers from 'flatbuffers';
/**
 * One constraint in a maneuver-targeting problem and how well the converged
 * solution satisfies it.
 */
export declare class MPETargeterConstraint implements flatbuffers.IUnpackableObject<MPETargeterConstraintT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): MPETargeterConstraint;
    static getRootAsMPETargeterConstraint(bb: flatbuffers.ByteBuffer, obj?: MPETargeterConstraint): MPETargeterConstraint;
    static getSizePrefixedRootAsMPETargeterConstraint(bb: flatbuffers.ByteBuffer, obj?: MPETargeterConstraint): MPETargeterConstraint;
    /**
     * Constraint identifier, e.g. "SMA", "INC", "RIC_R"
     */
    NAME(): string | null;
    NAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Reference frame the constraint is expressed in
     */
    FRAME(): string | null;
    FRAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Epoch the constraint applies at (UNIX timestamp) [numeric seconds since
     * 1970-01-01T00:00:00 UTC]; 0 when the constraint anchors to EVENT
     */
    EPOCH(): number;
    /**
     * Event the constraint anchors to when EPOCH is 0, e.g. "APOAPSIS"
     */
    EVENT(): string | null;
    EVENT(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Target value of the constrained quantity
     */
    TARGET_VALUE(): number;
    /**
     * Value achieved by the converged solution
     */
    ACHIEVED_VALUE(): number;
    /**
     * Acceptable tolerance on the constrained quantity
     */
    TOLERANCE(): number;
    /**
     * Relative weight of this constraint in the corrector
     */
    WEIGHT(): number;
    static startMPETargeterConstraint(builder: flatbuffers.Builder): void;
    static addName(builder: flatbuffers.Builder, NAMEOffset: flatbuffers.Offset): void;
    static addFrame(builder: flatbuffers.Builder, FRAMEOffset: flatbuffers.Offset): void;
    static addEpoch(builder: flatbuffers.Builder, EPOCH: number): void;
    static addEvent(builder: flatbuffers.Builder, EVENTOffset: flatbuffers.Offset): void;
    static addTargetValue(builder: flatbuffers.Builder, TARGET_VALUE: number): void;
    static addAchievedValue(builder: flatbuffers.Builder, ACHIEVED_VALUE: number): void;
    static addTolerance(builder: flatbuffers.Builder, TOLERANCE: number): void;
    static addWeight(builder: flatbuffers.Builder, WEIGHT: number): void;
    static endMPETargeterConstraint(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createMPETargeterConstraint(builder: flatbuffers.Builder, NAMEOffset: flatbuffers.Offset, FRAMEOffset: flatbuffers.Offset, EPOCH: number, EVENTOffset: flatbuffers.Offset, TARGET_VALUE: number, ACHIEVED_VALUE: number, TOLERANCE: number, WEIGHT: number): flatbuffers.Offset;
    unpack(): MPETargeterConstraintT;
    unpackTo(_o: MPETargeterConstraintT): void;
}
export declare class MPETargeterConstraintT implements flatbuffers.IGeneratedObject {
    NAME: string | Uint8Array | null;
    FRAME: string | Uint8Array | null;
    EPOCH: number;
    EVENT: string | Uint8Array | null;
    TARGET_VALUE: number;
    ACHIEVED_VALUE: number;
    TOLERANCE: number;
    WEIGHT: number;
    constructor(NAME?: string | Uint8Array | null, FRAME?: string | Uint8Array | null, EPOCH?: number, EVENT?: string | Uint8Array | null, TARGET_VALUE?: number, ACHIEVED_VALUE?: number, TOLERANCE?: number, WEIGHT?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=MPETargeterConstraint.d.ts.map