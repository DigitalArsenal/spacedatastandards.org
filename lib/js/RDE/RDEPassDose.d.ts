import * as flatbuffers from 'flatbuffers';
/**
 * Integrated radiation exposure for a single belt or SAA pass.
 */
export declare class RDEPassDose implements flatbuffers.IUnpackableObject<RDEPassDoseT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): RDEPassDose;
    static getRootAsRDEPassDose(bb: flatbuffers.ByteBuffer, obj?: RDEPassDose): RDEPassDose;
    static getSizePrefixedRootAsRDEPassDose(bb: flatbuffers.ByteBuffer, obj?: RDEPassDose): RDEPassDose;
    /**
     * Unique pass identifier within the assessment window.
     */
    PASS_ID(): string;
    PASS_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    /**
     * Pass entry timestamp, RFC 3339 UTC.
     */
    START_UTC(): string;
    START_UTC(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    /**
     * Pass exit timestamp, RFC 3339 UTC.
     */
    END_UTC(): string;
    END_UTC(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    /**
     * True when the pass traverses the South Atlantic Anomaly.
     */
    IN_SAA(): boolean;
    /**
     * True when the pass traverses a primary trapped radiation belt core.
     */
    IN_BELT_CORE(): boolean;
    /**
     * Peak instantaneous dose rate during the pass in mSv/h.
     */
    PEAK_DOSE_RATE_MSV_H(): number;
    /**
     * Total integrated dose accumulated during the pass in mSv.
     */
    INTEGRATED_DOSE_MSV(): number;
    /**
     * Peak McIlwain L-shell reached during the pass.
     */
    PEAK_L_SHELL(): number;
    static startRDEPassDose(builder: flatbuffers.Builder): void;
    static addPassId(builder: flatbuffers.Builder, PASS_IDOffset: flatbuffers.Offset): void;
    static addStartUtc(builder: flatbuffers.Builder, START_UTCOffset: flatbuffers.Offset): void;
    static addEndUtc(builder: flatbuffers.Builder, END_UTCOffset: flatbuffers.Offset): void;
    static addInSaa(builder: flatbuffers.Builder, IN_SAA: boolean): void;
    static addInBeltCore(builder: flatbuffers.Builder, IN_BELT_CORE: boolean): void;
    static addPeakDoseRateMsvH(builder: flatbuffers.Builder, PEAK_DOSE_RATE_MSV_H: number): void;
    static addIntegratedDoseMsv(builder: flatbuffers.Builder, INTEGRATED_DOSE_MSV: number): void;
    static addPeakLShell(builder: flatbuffers.Builder, PEAK_L_SHELL: number): void;
    static endRDEPassDose(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createRDEPassDose(builder: flatbuffers.Builder, PASS_IDOffset: flatbuffers.Offset, START_UTCOffset: flatbuffers.Offset, END_UTCOffset: flatbuffers.Offset, IN_SAA: boolean, IN_BELT_CORE: boolean, PEAK_DOSE_RATE_MSV_H: number, INTEGRATED_DOSE_MSV: number, PEAK_L_SHELL: number): flatbuffers.Offset;
    unpack(): RDEPassDoseT;
    unpackTo(_o: RDEPassDoseT): void;
}
export declare class RDEPassDoseT implements flatbuffers.IGeneratedObject {
    PASS_ID: string | Uint8Array | null;
    START_UTC: string | Uint8Array | null;
    END_UTC: string | Uint8Array | null;
    IN_SAA: boolean;
    IN_BELT_CORE: boolean;
    PEAK_DOSE_RATE_MSV_H: number;
    INTEGRATED_DOSE_MSV: number;
    PEAK_L_SHELL: number;
    constructor(PASS_ID?: string | Uint8Array | null, START_UTC?: string | Uint8Array | null, END_UTC?: string | Uint8Array | null, IN_SAA?: boolean, IN_BELT_CORE?: boolean, PEAK_DOSE_RATE_MSV_H?: number, INTEGRATED_DOSE_MSV?: number, PEAK_L_SHELL?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=RDEPassDose.d.ts.map