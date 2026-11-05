import * as flatbuffers from 'flatbuffers';
import { OPPProvenance, OPPProvenanceT } from './OPPProvenance.js';
/**
 * One scalar physical quantity, its unit and its own provenance.
 *
 * PROVENANCE is required: an OPPQuantity that exists names where it came from.
 * Presence of the table is the signal that a value exists, so VALUE zero is a
 * real zero (0 dBsm is 1 m2) and an unknown quantity omits the whole table.
 */
export declare class OPPQuantity implements flatbuffers.IUnpackableObject<OPPQuantityT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): OPPQuantity;
    static getRootAsOPPQuantity(bb: flatbuffers.ByteBuffer, obj?: OPPQuantity): OPPQuantity;
    static getSizePrefixedRootAsOPPQuantity(bb: flatbuffers.ByteBuffer, obj?: OPPQuantity): OPPQuantity;
    VALUE(): number;
    /**
     * Unit symbol verbatim, never silently converted: "kg", "m", "m2", "m2/kg",
     * "kg/m2", "dBsm", "W", "mag". A converted value states the unit it was
     * converted to and records the conversion in PROVENANCE.NOTES with
     * PROVENANCE.METHOD DERIVED.
     */
    UNITS(): string;
    UNITS(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    /**
     * 1-sigma uncertainty in UNITS. Zero means the source stated no uncertainty;
     * a genuine stated sigma is never exactly zero.
     */
    SIGMA(): number;
    PROVENANCE(obj?: OPPProvenance): OPPProvenance | null;
    static startOPPQuantity(builder: flatbuffers.Builder): void;
    static addValue(builder: flatbuffers.Builder, VALUE: number): void;
    static addUnits(builder: flatbuffers.Builder, UNITSOffset: flatbuffers.Offset): void;
    static addSigma(builder: flatbuffers.Builder, SIGMA: number): void;
    static addProvenance(builder: flatbuffers.Builder, PROVENANCEOffset: flatbuffers.Offset): void;
    static endOPPQuantity(builder: flatbuffers.Builder): flatbuffers.Offset;
    unpack(): OPPQuantityT;
    unpackTo(_o: OPPQuantityT): void;
}
export declare class OPPQuantityT implements flatbuffers.IGeneratedObject {
    VALUE: number;
    UNITS: string | Uint8Array | null;
    SIGMA: number;
    PROVENANCE: OPPProvenanceT | null;
    constructor(VALUE?: number, UNITS?: string | Uint8Array | null, SIGMA?: number, PROVENANCE?: OPPProvenanceT | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=OPPQuantity.d.ts.map