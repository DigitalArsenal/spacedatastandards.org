import * as flatbuffers from 'flatbuffers';
import { EXOParameter, EXOParameterT } from './EXOParameter.js';
/**
 * One J-factor (dark-matter annihilation) measurement.
 */
export declare class SSYJFactor implements flatbuffers.IUnpackableObject<SSYJFactorT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): SSYJFactor;
    static getRootAsSSYJFactor(bb: flatbuffers.ByteBuffer, obj?: SSYJFactor): SSYJFactor;
    static getSizePrefixedRootAsSSYJFactor(bb: flatbuffers.ByteBuffer, obj?: SSYJFactor): SSYJFactor;
    /**
     * Integration angle, degrees.
     */
    ANGLE_DEG(obj?: EXOParameter): EXOParameter | null;
    /**
     * log10 J, GeV^2 cm^-5; ERR1/ERR2 at 84th/16th percentiles.
     */
    LOG_J(obj?: EXOParameter): EXOParameter | null;
    /**
     * 5th and 95th percentiles of log10 J; 95% upper limit when unbounded.
     */
    LOG_J_P05(obj?: EXOParameter): EXOParameter | null;
    LOG_J_P95(obj?: EXOParameter): EXOParameter | null;
    LOG_J_UPPER_LIMIT_95(obj?: EXOParameter): EXOParameter | null;
    SELECTION(): string | null;
    SELECTION(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    USE(): string | null;
    USE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    COMMENTS(): string | null;
    COMMENTS(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    static startSSYJFactor(builder: flatbuffers.Builder): void;
    static addAngleDeg(builder: flatbuffers.Builder, ANGLE_DEGOffset: flatbuffers.Offset): void;
    static addLogJ(builder: flatbuffers.Builder, LOG_JOffset: flatbuffers.Offset): void;
    static addLogJP05(builder: flatbuffers.Builder, LOG_J_P05Offset: flatbuffers.Offset): void;
    static addLogJP95(builder: flatbuffers.Builder, LOG_J_P95Offset: flatbuffers.Offset): void;
    static addLogJUpperLimit95(builder: flatbuffers.Builder, LOG_J_UPPER_LIMIT_95Offset: flatbuffers.Offset): void;
    static addSelection(builder: flatbuffers.Builder, SELECTIONOffset: flatbuffers.Offset): void;
    static addUse(builder: flatbuffers.Builder, USEOffset: flatbuffers.Offset): void;
    static addComments(builder: flatbuffers.Builder, COMMENTSOffset: flatbuffers.Offset): void;
    static endSSYJFactor(builder: flatbuffers.Builder): flatbuffers.Offset;
    unpack(): SSYJFactorT;
    unpackTo(_o: SSYJFactorT): void;
}
export declare class SSYJFactorT implements flatbuffers.IGeneratedObject {
    ANGLE_DEG: EXOParameterT | null;
    LOG_J: EXOParameterT | null;
    LOG_J_P05: EXOParameterT | null;
    LOG_J_P95: EXOParameterT | null;
    LOG_J_UPPER_LIMIT_95: EXOParameterT | null;
    SELECTION: string | Uint8Array | null;
    USE: string | Uint8Array | null;
    COMMENTS: string | Uint8Array | null;
    constructor(ANGLE_DEG?: EXOParameterT | null, LOG_J?: EXOParameterT | null, LOG_J_P05?: EXOParameterT | null, LOG_J_P95?: EXOParameterT | null, LOG_J_UPPER_LIMIT_95?: EXOParameterT | null, SELECTION?: string | Uint8Array | null, USE?: string | Uint8Array | null, COMMENTS?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=SSYJFactor.d.ts.map