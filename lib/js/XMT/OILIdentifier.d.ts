import * as flatbuffers from 'flatbuffers';
/**
 * One object identifier in one namespace.
 */
export declare class OILIdentifier implements flatbuffers.IUnpackableObject<OILIdentifierT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): OILIdentifier;
    static getRootAsOILIdentifier(bb: flatbuffers.ByteBuffer, obj?: OILIdentifier): OILIdentifier;
    static getSizePrefixedRootAsOILIdentifier(bb: flatbuffers.ByteBuffer, obj?: OILIdentifier): OILIdentifier;
    /**
     * Namespace (catalog or provider) the identifier belongs to, e.g. "vimpel",
     * "NORAD", "COSPAR", "space-track", "esa-discos".
     */
    NAMESPACE(): string | null;
    NAMESPACE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * The identifier in canonical form (leading zeros removed for a number),
     * e.g. "12" for Vimpel "00012".
     */
    ID(): string | null;
    ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * The identifier exactly as the source printed it; empty when the same as
     * ID.
     */
    ID_AS_PRINTED(): string | null;
    ID_AS_PRINTED(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * NORAD catalog number when the namespace is NORAD or the identifier
     * resolves to one; 0 = none.
     */
    NORAD_CAT_ID(): number;
    /**
     * International (COSPAR) designator when known, YYYY-NNNP; empty = none.
     */
    INTERNATIONAL_DESIGNATOR(): string | null;
    INTERNATIONAL_DESIGNATOR(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Date the source says the object was first detected under this
     * identifier, ISO 8601 calendar date (YYYY-MM-DD); empty when not stated
     * or not a valid date.
     */
    FIRST_DETECTED(): string | null;
    FIRST_DETECTED(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * The first-detection date as printed, when it is not a valid date (e.g.
     * "20239591"); empty otherwise.
     */
    FIRST_DETECTED_AS_PRINTED(): string | null;
    FIRST_DETECTED_AS_PRINTED(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Identifier of a trajectory or state product of this identity that a test
     * of the link compares (an $XMT trajectory ID); empty = none.
     */
    TRAJECTORY_ID(): string | null;
    TRAJECTORY_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    static startOILIdentifier(builder: flatbuffers.Builder): void;
    static addNamespace(builder: flatbuffers.Builder, NAMESPACEOffset: flatbuffers.Offset): void;
    static addId(builder: flatbuffers.Builder, IDOffset: flatbuffers.Offset): void;
    static addIdAsPrinted(builder: flatbuffers.Builder, ID_AS_PRINTEDOffset: flatbuffers.Offset): void;
    static addNoradCatId(builder: flatbuffers.Builder, NORAD_CAT_ID: number): void;
    static addInternationalDesignator(builder: flatbuffers.Builder, INTERNATIONAL_DESIGNATOROffset: flatbuffers.Offset): void;
    static addFirstDetected(builder: flatbuffers.Builder, FIRST_DETECTEDOffset: flatbuffers.Offset): void;
    static addFirstDetectedAsPrinted(builder: flatbuffers.Builder, FIRST_DETECTED_AS_PRINTEDOffset: flatbuffers.Offset): void;
    static addTrajectoryId(builder: flatbuffers.Builder, TRAJECTORY_IDOffset: flatbuffers.Offset): void;
    static endOILIdentifier(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createOILIdentifier(builder: flatbuffers.Builder, NAMESPACEOffset: flatbuffers.Offset, IDOffset: flatbuffers.Offset, ID_AS_PRINTEDOffset: flatbuffers.Offset, NORAD_CAT_ID: number, INTERNATIONAL_DESIGNATOROffset: flatbuffers.Offset, FIRST_DETECTEDOffset: flatbuffers.Offset, FIRST_DETECTED_AS_PRINTEDOffset: flatbuffers.Offset, TRAJECTORY_IDOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): OILIdentifierT;
    unpackTo(_o: OILIdentifierT): void;
}
export declare class OILIdentifierT implements flatbuffers.IGeneratedObject {
    NAMESPACE: string | Uint8Array | null;
    ID: string | Uint8Array | null;
    ID_AS_PRINTED: string | Uint8Array | null;
    NORAD_CAT_ID: number;
    INTERNATIONAL_DESIGNATOR: string | Uint8Array | null;
    FIRST_DETECTED: string | Uint8Array | null;
    FIRST_DETECTED_AS_PRINTED: string | Uint8Array | null;
    TRAJECTORY_ID: string | Uint8Array | null;
    constructor(NAMESPACE?: string | Uint8Array | null, ID?: string | Uint8Array | null, ID_AS_PRINTED?: string | Uint8Array | null, NORAD_CAT_ID?: number, INTERNATIONAL_DESIGNATOR?: string | Uint8Array | null, FIRST_DETECTED?: string | Uint8Array | null, FIRST_DETECTED_AS_PRINTED?: string | Uint8Array | null, TRAJECTORY_ID?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=OILIdentifier.d.ts.map