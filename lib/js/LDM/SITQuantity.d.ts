import * as flatbuffers from 'flatbuffers';
import { SITCitation, SITCitationT } from './SITCitation.js';
import { sitQuantityKind } from './sitQuantityKind.js';
/**
 * One stated quantity of a site.
 */
export declare class SITQuantity implements flatbuffers.IUnpackableObject<SITQuantityT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): SITQuantity;
    static getRootAsSITQuantity(bb: flatbuffers.ByteBuffer, obj?: SITQuantity): SITQuantity;
    static getSizePrefixedRootAsSITQuantity(bb: flatbuffers.ByteBuffer, obj?: SITQuantity): SITQuantity;
    /**
     * What it measures
     */
    KIND(): sitQuantityKind;
    /**
     * Its value
     */
    VALUE(): number;
    /**
     * Units, CCSDS NDM spelling (MW, m); empty for a count
     */
    UNITS(): string | null;
    UNITS(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * When the value applies, ISO 8601 at the source's precision; empty when the source states none
     */
    DATE(): string | null;
    DATE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Where it was read
     */
    CITATION(obj?: SITCitation): SITCitation | null;
    static startSITQuantity(builder: flatbuffers.Builder): void;
    static addKind(builder: flatbuffers.Builder, KIND: sitQuantityKind): void;
    static addValue(builder: flatbuffers.Builder, VALUE: number): void;
    static addUnits(builder: flatbuffers.Builder, UNITSOffset: flatbuffers.Offset): void;
    static addDate(builder: flatbuffers.Builder, DATEOffset: flatbuffers.Offset): void;
    static addCitation(builder: flatbuffers.Builder, CITATIONOffset: flatbuffers.Offset): void;
    static endSITQuantity(builder: flatbuffers.Builder): flatbuffers.Offset;
    unpack(): SITQuantityT;
    unpackTo(_o: SITQuantityT): void;
}
export declare class SITQuantityT implements flatbuffers.IGeneratedObject {
    KIND: sitQuantityKind;
    VALUE: number;
    UNITS: string | Uint8Array | null;
    DATE: string | Uint8Array | null;
    CITATION: SITCitationT | null;
    constructor(KIND?: sitQuantityKind, VALUE?: number, UNITS?: string | Uint8Array | null, DATE?: string | Uint8Array | null, CITATION?: SITCitationT | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=SITQuantity.d.ts.map