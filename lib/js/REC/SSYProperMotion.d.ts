import * as flatbuffers from 'flatbuffers';
import { EXOParameter, EXOParameterT } from './EXOParameter.js';
/**
 * One systemic proper-motion measurement and its PMRA-PMDEC correlation.
 */
export declare class SSYProperMotion implements flatbuffers.IUnpackableObject<SSYProperMotionT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): SSYProperMotion;
    static getRootAsSSYProperMotion(bb: flatbuffers.ByteBuffer, obj?: SSYProperMotion): SSYProperMotion;
    static getSizePrefixedRootAsSSYProperMotion(bb: flatbuffers.ByteBuffer, obj?: SSYProperMotion): SSYProperMotion;
    /**
     * PMRA includes cos(DEC); mas/yr.
     */
    PMRA(obj?: EXOParameter): EXOParameter | null;
    PMDEC(obj?: EXOParameter): EXOParameter | null;
    /**
     * Correlation coefficient of PMRA and PMDEC, [-1, 1].
     */
    CORRELATION(obj?: EXOParameter): EXOParameter | null;
    /**
     * Source method token verbatim, e.g. GAIA_EDR3, HST, GaiaHub.
     */
    METHOD(): string | null;
    METHOD(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * True for the measurement the record adopts in PMRA/PMDEC.
     */
    ADOPTED(): boolean;
    COMMENTS(): string | null;
    COMMENTS(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    static startSSYProperMotion(builder: flatbuffers.Builder): void;
    static addPmra(builder: flatbuffers.Builder, PMRAOffset: flatbuffers.Offset): void;
    static addPmdec(builder: flatbuffers.Builder, PMDECOffset: flatbuffers.Offset): void;
    static addCorrelation(builder: flatbuffers.Builder, CORRELATIONOffset: flatbuffers.Offset): void;
    static addMethod(builder: flatbuffers.Builder, METHODOffset: flatbuffers.Offset): void;
    static addAdopted(builder: flatbuffers.Builder, ADOPTED: boolean): void;
    static addComments(builder: flatbuffers.Builder, COMMENTSOffset: flatbuffers.Offset): void;
    static endSSYProperMotion(builder: flatbuffers.Builder): flatbuffers.Offset;
    unpack(): SSYProperMotionT;
    unpackTo(_o: SSYProperMotionT): void;
}
export declare class SSYProperMotionT implements flatbuffers.IGeneratedObject {
    PMRA: EXOParameterT | null;
    PMDEC: EXOParameterT | null;
    CORRELATION: EXOParameterT | null;
    METHOD: string | Uint8Array | null;
    ADOPTED: boolean;
    COMMENTS: string | Uint8Array | null;
    constructor(PMRA?: EXOParameterT | null, PMDEC?: EXOParameterT | null, CORRELATION?: EXOParameterT | null, METHOD?: string | Uint8Array | null, ADOPTED?: boolean, COMMENTS?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=SSYProperMotion.d.ts.map