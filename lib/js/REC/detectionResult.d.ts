import * as flatbuffers from 'flatbuffers';
/**
 * Detection result output (48 bytes, 8-byte aligned).
 */
export declare class detectionResult implements flatbuffers.IUnpackableObject<detectionResultT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): detectionResult;
    /**
     * Index of target in input array.
     */
    TARGET_INDEX(): number;
    /**
     * Detection flag (1 == detected, 0 == not detected).
     */
    DETECTED(): number;
    /**
     * Range to target (meters).
     */
    RANGE(): number;
    /**
     * Signal-to-noise ratio (dB).
     */
    SNR(): number;
    /**
     * Doppler shift (Hz).
     */
    DOPPLER(): number;
    /**
     * Probability of detection (0.0 – 1.0).
     */
    PROBABILITY(): number;
    /**
     * Detection flags (detectionResultFlags bitfield).
     */
    FLAGS(): number;
    /**
     * Reserved for future use.
     */
    RESERVED(): number;
    static sizeOf(): number;
    static createdetectionResult(builder: flatbuffers.Builder, TARGET_INDEX: number, DETECTED: number, RANGE: number, SNR: number, DOPPLER: number, PROBABILITY: number, FLAGS: number, RESERVED: number): flatbuffers.Offset;
    unpack(): detectionResultT;
    unpackTo(_o: detectionResultT): void;
}
export declare class detectionResultT implements flatbuffers.IGeneratedObject {
    TARGET_INDEX: number;
    DETECTED: number;
    RANGE: number;
    SNR: number;
    DOPPLER: number;
    PROBABILITY: number;
    FLAGS: number;
    RESERVED: number;
    constructor(TARGET_INDEX?: number, DETECTED?: number, RANGE?: number, SNR?: number, DOPPLER?: number, PROBABILITY?: number, FLAGS?: number, RESERVED?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=detectionResult.d.ts.map