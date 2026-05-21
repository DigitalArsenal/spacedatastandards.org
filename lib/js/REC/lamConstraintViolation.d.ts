import * as flatbuffers from 'flatbuffers';
import { lamConstraintStatus } from './lamConstraintStatus.js';
/**
 * Launch-ascent constraint violation.
 */
export declare class lamConstraintViolation implements flatbuffers.IUnpackableObject<lamConstraintViolationT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): lamConstraintViolation;
    static getRootAslamConstraintViolation(bb: flatbuffers.ByteBuffer, obj?: lamConstraintViolation): lamConstraintViolation;
    static getSizePrefixedRootAslamConstraintViolation(bb: flatbuffers.ByteBuffer, obj?: lamConstraintViolation): lamConstraintViolation;
    /**
     * Constraint identifier.
     */
    CONSTRAINT_ID(): string | null;
    CONSTRAINT_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Constraint name.
     */
    CONSTRAINT_NAME(): string | null;
    CONSTRAINT_NAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Constraint status.
     */
    STATUS(): lamConstraintStatus;
    /**
     * Epoch of closest approach or violation in ISO 8601 UTC format.
     */
    EPOCH(): string | null;
    EPOCH(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Time from launch in seconds.
     */
    TIME_FROM_LAUNCH_S(): number;
    /**
     * Observed constraint value.
     */
    VALUE(): number;
    /**
     * Constraint limit.
     */
    LIMIT(): number;
    /**
     * Units for value and limit.
     */
    UNITS(): string | null;
    UNITS(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Free-form description.
     */
    DESCRIPTION(): string | null;
    DESCRIPTION(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    static startlamConstraintViolation(builder: flatbuffers.Builder): void;
    static addConstraintId(builder: flatbuffers.Builder, CONSTRAINT_IDOffset: flatbuffers.Offset): void;
    static addConstraintName(builder: flatbuffers.Builder, CONSTRAINT_NAMEOffset: flatbuffers.Offset): void;
    static addStatus(builder: flatbuffers.Builder, STATUS: lamConstraintStatus): void;
    static addEpoch(builder: flatbuffers.Builder, EPOCHOffset: flatbuffers.Offset): void;
    static addTimeFromLaunchS(builder: flatbuffers.Builder, TIME_FROM_LAUNCH_S: number): void;
    static addValue(builder: flatbuffers.Builder, VALUE: number): void;
    static addLimit(builder: flatbuffers.Builder, LIMIT: number): void;
    static addUnits(builder: flatbuffers.Builder, UNITSOffset: flatbuffers.Offset): void;
    static addDescription(builder: flatbuffers.Builder, DESCRIPTIONOffset: flatbuffers.Offset): void;
    static endlamConstraintViolation(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createlamConstraintViolation(builder: flatbuffers.Builder, CONSTRAINT_IDOffset: flatbuffers.Offset, CONSTRAINT_NAMEOffset: flatbuffers.Offset, STATUS: lamConstraintStatus, EPOCHOffset: flatbuffers.Offset, TIME_FROM_LAUNCH_S: number, VALUE: number, LIMIT: number, UNITSOffset: flatbuffers.Offset, DESCRIPTIONOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): lamConstraintViolationT;
    unpackTo(_o: lamConstraintViolationT): void;
}
export declare class lamConstraintViolationT implements flatbuffers.IGeneratedObject {
    CONSTRAINT_ID: string | Uint8Array | null;
    CONSTRAINT_NAME: string | Uint8Array | null;
    STATUS: lamConstraintStatus;
    EPOCH: string | Uint8Array | null;
    TIME_FROM_LAUNCH_S: number;
    VALUE: number;
    LIMIT: number;
    UNITS: string | Uint8Array | null;
    DESCRIPTION: string | Uint8Array | null;
    constructor(CONSTRAINT_ID?: string | Uint8Array | null, CONSTRAINT_NAME?: string | Uint8Array | null, STATUS?: lamConstraintStatus, EPOCH?: string | Uint8Array | null, TIME_FROM_LAUNCH_S?: number, VALUE?: number, LIMIT?: number, UNITS?: string | Uint8Array | null, DESCRIPTION?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=lamConstraintViolation.d.ts.map