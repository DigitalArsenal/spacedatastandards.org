import * as flatbuffers from 'flatbuffers';
/**
 * Validation result for one asset variant.
 */
export declare class VAMValidation implements flatbuffers.IUnpackableObject<VAMValidationT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): VAMValidation;
    static getRootAsVAMValidation(bb: flatbuffers.ByteBuffer, obj?: VAMValidation): VAMValidation;
    static getSizePrefixedRootAsVAMValidation(bb: flatbuffers.ByteBuffer, obj?: VAMValidation): VAMValidation;
    STATUS(): string | null;
    STATUS(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    VALIDATOR_NAME(): string | null;
    VALIDATOR_NAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    VALIDATOR_VERSION(): string | null;
    VALIDATOR_VERSION(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * RFC 3339 UTC fixed-millisecond timestamp (YYYY-MM-DDTHH:mm:ss.sssZ) when validation completed.
     */
    VALIDATED_AT(): string | null;
    VALIDATED_AT(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    ERRORS(index: number): string;
    ERRORS(index: number, optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    errorsLength(): number;
    WARNINGS(index: number): string;
    WARNINGS(index: number, optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    warningsLength(): number;
    static startVAMValidation(builder: flatbuffers.Builder): void;
    static addStatus(builder: flatbuffers.Builder, STATUSOffset: flatbuffers.Offset): void;
    static addValidatorName(builder: flatbuffers.Builder, VALIDATOR_NAMEOffset: flatbuffers.Offset): void;
    static addValidatorVersion(builder: flatbuffers.Builder, VALIDATOR_VERSIONOffset: flatbuffers.Offset): void;
    static addValidatedAt(builder: flatbuffers.Builder, VALIDATED_ATOffset: flatbuffers.Offset): void;
    static addErrors(builder: flatbuffers.Builder, ERRORSOffset: flatbuffers.Offset): void;
    static createErrorsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startErrorsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addWarnings(builder: flatbuffers.Builder, WARNINGSOffset: flatbuffers.Offset): void;
    static createWarningsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startWarningsVector(builder: flatbuffers.Builder, numElems: number): void;
    static endVAMValidation(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createVAMValidation(builder: flatbuffers.Builder, STATUSOffset: flatbuffers.Offset, VALIDATOR_NAMEOffset: flatbuffers.Offset, VALIDATOR_VERSIONOffset: flatbuffers.Offset, VALIDATED_ATOffset: flatbuffers.Offset, ERRORSOffset: flatbuffers.Offset, WARNINGSOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): VAMValidationT;
    unpackTo(_o: VAMValidationT): void;
}
export declare class VAMValidationT implements flatbuffers.IGeneratedObject {
    STATUS: string | Uint8Array | null;
    VALIDATOR_NAME: string | Uint8Array | null;
    VALIDATOR_VERSION: string | Uint8Array | null;
    VALIDATED_AT: string | Uint8Array | null;
    ERRORS: (string)[];
    WARNINGS: (string)[];
    constructor(STATUS?: string | Uint8Array | null, VALIDATOR_NAME?: string | Uint8Array | null, VALIDATOR_VERSION?: string | Uint8Array | null, VALIDATED_AT?: string | Uint8Array | null, ERRORS?: (string)[], WARNINGS?: (string)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=VAMValidation.d.ts.map