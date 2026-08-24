import * as flatbuffers from 'flatbuffers';
/**
 * One modulation-and-coding choice available to a link. The table carries
 * engineering capability only; catalogue or recommendation names belong in
 * ID / NAME and provenance data, never in the schema vocabulary.
 */
export declare class RFLModCod implements flatbuffers.IUnpackableObject<RFLModCodT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): RFLModCod;
    static getRootAsRFLModCod(bb: flatbuffers.ByteBuffer, obj?: RFLModCod): RFLModCod;
    static getSizePrefixedRootAsRFLModCod(bb: flatbuffers.ByteBuffer, obj?: RFLModCod): RFLModCod;
    /**
     * Stable identifier within the containing link's MODCOD_SET.
     */
    MODCOD_ID(): string;
    MODCOD_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    /**
     * Producer-supplied display name.
     */
    NAME(): string | null;
    NAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    MODULATION(): string | null;
    MODULATION(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    CODING(): string | null;
    CODING(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Information bits divided by coded bits, in (0,1].
     */
    CODE_RATE(): number;
    BITS_PER_SYMBOL(): number;
    SPECTRAL_EFFICIENCY_BPS_HZ(): number;
    REQUIRED_ES_N0_DB(): number;
    REQUIRED_EB_N0_DB(): number;
    TARGET_BIT_ERROR_RATE(): number;
    TARGET_BLOCK_ERROR_RATE(): number;
    /**
     * Additional implementation margin required before this entry is selected.
     */
    REQUIRED_MARGIN_DB(): number;
    /**
     * Optional ceiling imposed by framing or implementation, bits per second.
     */
    MAXIMUM_DATA_RATE_BPS(): number;
    static startRFLModCod(builder: flatbuffers.Builder): void;
    static addModcodId(builder: flatbuffers.Builder, MODCOD_IDOffset: flatbuffers.Offset): void;
    static addName(builder: flatbuffers.Builder, NAMEOffset: flatbuffers.Offset): void;
    static addModulation(builder: flatbuffers.Builder, MODULATIONOffset: flatbuffers.Offset): void;
    static addCoding(builder: flatbuffers.Builder, CODINGOffset: flatbuffers.Offset): void;
    static addCodeRate(builder: flatbuffers.Builder, CODE_RATE: number): void;
    static addBitsPerSymbol(builder: flatbuffers.Builder, BITS_PER_SYMBOL: number): void;
    static addSpectralEfficiencyBpsHz(builder: flatbuffers.Builder, SPECTRAL_EFFICIENCY_BPS_HZ: number): void;
    static addRequiredEsN0Db(builder: flatbuffers.Builder, REQUIRED_ES_N0_DB: number): void;
    static addRequiredEbN0Db(builder: flatbuffers.Builder, REQUIRED_EB_N0_DB: number): void;
    static addTargetBitErrorRate(builder: flatbuffers.Builder, TARGET_BIT_ERROR_RATE: number): void;
    static addTargetBlockErrorRate(builder: flatbuffers.Builder, TARGET_BLOCK_ERROR_RATE: number): void;
    static addRequiredMarginDb(builder: flatbuffers.Builder, REQUIRED_MARGIN_DB: number): void;
    static addMaximumDataRateBps(builder: flatbuffers.Builder, MAXIMUM_DATA_RATE_BPS: number): void;
    static endRFLModCod(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createRFLModCod(builder: flatbuffers.Builder, MODCOD_IDOffset: flatbuffers.Offset, NAMEOffset: flatbuffers.Offset, MODULATIONOffset: flatbuffers.Offset, CODINGOffset: flatbuffers.Offset, CODE_RATE: number, BITS_PER_SYMBOL: number, SPECTRAL_EFFICIENCY_BPS_HZ: number, REQUIRED_ES_N0_DB: number, REQUIRED_EB_N0_DB: number, TARGET_BIT_ERROR_RATE: number, TARGET_BLOCK_ERROR_RATE: number, REQUIRED_MARGIN_DB: number, MAXIMUM_DATA_RATE_BPS: number): flatbuffers.Offset;
    unpack(): RFLModCodT;
    unpackTo(_o: RFLModCodT): void;
}
export declare class RFLModCodT implements flatbuffers.IGeneratedObject {
    MODCOD_ID: string | Uint8Array | null;
    NAME: string | Uint8Array | null;
    MODULATION: string | Uint8Array | null;
    CODING: string | Uint8Array | null;
    CODE_RATE: number;
    BITS_PER_SYMBOL: number;
    SPECTRAL_EFFICIENCY_BPS_HZ: number;
    REQUIRED_ES_N0_DB: number;
    REQUIRED_EB_N0_DB: number;
    TARGET_BIT_ERROR_RATE: number;
    TARGET_BLOCK_ERROR_RATE: number;
    REQUIRED_MARGIN_DB: number;
    MAXIMUM_DATA_RATE_BPS: number;
    constructor(MODCOD_ID?: string | Uint8Array | null, NAME?: string | Uint8Array | null, MODULATION?: string | Uint8Array | null, CODING?: string | Uint8Array | null, CODE_RATE?: number, BITS_PER_SYMBOL?: number, SPECTRAL_EFFICIENCY_BPS_HZ?: number, REQUIRED_ES_N0_DB?: number, REQUIRED_EB_N0_DB?: number, TARGET_BIT_ERROR_RATE?: number, TARGET_BLOCK_ERROR_RATE?: number, REQUIRED_MARGIN_DB?: number, MAXIMUM_DATA_RATE_BPS?: number);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=RFLModCod.d.ts.map