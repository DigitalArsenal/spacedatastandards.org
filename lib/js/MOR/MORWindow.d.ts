import * as flatbuffers from 'flatbuffers';
import { morWindowStatus } from './morWindowStatus.js';
/**
 * One window of the polynomial rows derived from this record's elements: Chebyshev series of the first
 * kind over [EPOCH_MID_SECONDS - EPOCH_HALF_SPAN, EPOCH_MID_SECONDS + EPOCH_HALF_SPAN], position in km and
 * velocity in km/s, TEME of date, about the Earth.
 */
export declare class MORWindow implements flatbuffers.IUnpackableObject<MORWindowT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): MORWindow;
    /**
     * Middle of the window, seconds after EPOCH_UNIX_US.
     */
    EPOCH_MID_SECONDS(): number;
    /**
     * Half the window, seconds; above 0.
     */
    EPOCH_HALF_SPAN(): number;
    /**
     * SERVED, or why no record serves the window.
     */
    STATUS(): morWindowStatus;
    /**
     * Position coefficients per axis, 1 or more when SERVED; the last triple is not +0.0 on all three axes.
     */
    POS_COEFF_COUNT(): number;
    /**
     * Leading position coefficients per axis held as binary64; the rest are binary32. At most
     * POS_COEFF_COUNT.
     */
    POS_COEFF_HEAD_COUNT(): number;
    /**
     * Velocity coefficients per axis; 0 for a position-only window. The last triple is not +0.0 on all
     * three axes.
     */
    VEL_COEFF_COUNT(): number;
    /**
     * Leading velocity coefficients per axis held as binary64. At most VEL_COEFF_COUNT.
     */
    VEL_COEFF_HEAD_COUNT(): number;
    static sizeOf(): number;
    static createMORWindow(builder: flatbuffers.Builder, EPOCH_MID_SECONDS: number, EPOCH_HALF_SPAN: number, STATUS: morWindowStatus, POS_COEFF_COUNT: number, POS_COEFF_HEAD_COUNT: number, VEL_COEFF_COUNT: number, VEL_COEFF_HEAD_COUNT: number): flatbuffers.Offset;
    unpack(): MORWindowT;
    unpackTo(_o: MORWindowT): void;
}
export declare class MORWindowT implements flatbuffers.IGeneratedObject {
    EPOCH_MID_SECONDS: number;
    EPOCH_HALF_SPAN: number;
    STATUS: morWindowStatus;
    POS_COEFF_COUNT: number;
    POS_COEFF_HEAD_COUNT: number;
    VEL_COEFF_COUNT: number;
    VEL_COEFF_HEAD_COUNT: number;
    constructor(EPOCH_MID_SECONDS?: number, EPOCH_HALF_SPAN?: number, STATUS?: morWindowStatus, POS_COEFF_COUNT?: number, POS_COEFF_HEAD_COUNT?: number, VEL_COEFF_COUNT?: number, VEL_COEFF_HEAD_COUNT?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=MORWindow.d.ts.map