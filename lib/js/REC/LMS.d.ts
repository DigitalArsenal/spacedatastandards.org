import * as flatbuffers from 'flatbuffers';
import { lambertTransferPath } from './lambertTransferPath.js';
/**
 * Lambert boundary-value solve request.
 */
export declare class LMS implements flatbuffers.IUnpackableObject<LMST> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): LMS;
    static getRootAsLMS(bb: flatbuffers.ByteBuffer, obj?: LMS): LMS;
    static getSizePrefixedRootAsLMS(bb: flatbuffers.ByteBuffer, obj?: LMS): LMS;
    static bufferHasIdentifier(bb: flatbuffers.ByteBuffer): boolean;
    /**
     * Caller-supplied request identifier for result correlation.
     */
    REQUEST_ID(): string | null;
    REQUEST_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Initial position X component (km).
     */
    R1_X(): number;
    /**
     * Initial position Y component (km).
     */
    R1_Y(): number;
    /**
     * Initial position Z component (km).
     */
    R1_Z(): number;
    /**
     * Final position X component (km).
     */
    R2_X(): number;
    /**
     * Final position Y component (km).
     */
    R2_Y(): number;
    /**
     * Final position Z component (km).
     */
    R2_Z(): number;
    /**
     * Time of flight (seconds). Must be greater than zero.
     */
    TOF_SEC(): number;
    /**
     * Central-body gravitational parameter (km^3/s^2). Must be greater than zero.
     */
    MU_KM3_S2(): number;
    /**
     * Short-way or long-way transfer selection.
     */
    TRANSFER_WAY(): lambertTransferPath;
    /**
     * Maximum complete revolutions to search. Zero means single-revolution only.
     */
    MAX_REVS(): number;
    /**
     * Inertial reference frame label for both position vectors (for example GCRF, EME2000, ICRF).
     */
    REF_FRAME(): string | null;
    REF_FRAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Optional epoch/time-scale label for provenance. The solver uses TOF, not epoch, internally.
     */
    EPOCH(): string | null;
    EPOCH(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Request flags reserved for future compatibility.
     */
    FLAGS(): number;
    static startLMS(builder: flatbuffers.Builder): void;
    static addRequestId(builder: flatbuffers.Builder, REQUEST_IDOffset: flatbuffers.Offset): void;
    static addR1X(builder: flatbuffers.Builder, R1_X: number): void;
    static addR1Y(builder: flatbuffers.Builder, R1_Y: number): void;
    static addR1Z(builder: flatbuffers.Builder, R1_Z: number): void;
    static addR2X(builder: flatbuffers.Builder, R2_X: number): void;
    static addR2Y(builder: flatbuffers.Builder, R2_Y: number): void;
    static addR2Z(builder: flatbuffers.Builder, R2_Z: number): void;
    static addTofSec(builder: flatbuffers.Builder, TOF_SEC: number): void;
    static addMuKm3S2(builder: flatbuffers.Builder, MU_KM3_S2: number): void;
    static addTransferWay(builder: flatbuffers.Builder, TRANSFER_WAY: lambertTransferPath): void;
    static addMaxRevs(builder: flatbuffers.Builder, MAX_REVS: number): void;
    static addRefFrame(builder: flatbuffers.Builder, REF_FRAMEOffset: flatbuffers.Offset): void;
    static addEpoch(builder: flatbuffers.Builder, EPOCHOffset: flatbuffers.Offset): void;
    static addFlags(builder: flatbuffers.Builder, FLAGS: number): void;
    static endLMS(builder: flatbuffers.Builder): flatbuffers.Offset;
    static finishLMSBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static finishSizePrefixedLMSBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static createLMS(builder: flatbuffers.Builder, REQUEST_IDOffset: flatbuffers.Offset, R1_X: number, R1_Y: number, R1_Z: number, R2_X: number, R2_Y: number, R2_Z: number, TOF_SEC: number, MU_KM3_S2: number, TRANSFER_WAY: lambertTransferPath, MAX_REVS: number, REF_FRAMEOffset: flatbuffers.Offset, EPOCHOffset: flatbuffers.Offset, FLAGS: number): flatbuffers.Offset;
    unpack(): LMST;
    unpackTo(_o: LMST): void;
}
export declare class LMST implements flatbuffers.IGeneratedObject {
    REQUEST_ID: string | Uint8Array | null;
    R1_X: number;
    R1_Y: number;
    R1_Z: number;
    R2_X: number;
    R2_Y: number;
    R2_Z: number;
    TOF_SEC: number;
    MU_KM3_S2: number;
    TRANSFER_WAY: lambertTransferPath;
    MAX_REVS: number;
    REF_FRAME: string | Uint8Array | null;
    EPOCH: string | Uint8Array | null;
    FLAGS: number;
    constructor(REQUEST_ID?: string | Uint8Array | null, R1_X?: number, R1_Y?: number, R1_Z?: number, R2_X?: number, R2_Y?: number, R2_Z?: number, TOF_SEC?: number, MU_KM3_S2?: number, TRANSFER_WAY?: lambertTransferPath, MAX_REVS?: number, REF_FRAME?: string | Uint8Array | null, EPOCH?: string | Uint8Array | null, FLAGS?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=LMS.d.ts.map