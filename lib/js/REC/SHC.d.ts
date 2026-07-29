import * as flatbuffers from 'flatbuffers';
import { SHCVariableTerm, SHCVariableTermT } from './SHCVariableTerm.js';
import { shcNormalization } from './shcNormalization.js';
import { shcTideSystem } from './shcTideSystem.js';
/**
 * Spherical-Harmonic Coefficient Set — an actual gravity field, as opposed to
 * the NAME of one.
 *
 * This is deliberately NOT $GRV. $GRV is a model SELECTOR: it names a model,
 * bounds its degree/order, toggles third-body and tidal effects, and carries
 * scalar J2..J6. It cannot carry a coefficient set, and a named model without
 * its coefficients is not interchange — it is a citation.
 *
 * Coefficients are carried as four parallel arrays of equal length, indexed
 * together: entry i is the coefficient at DEGREES[i], ORDERS[i] with cosine
 * term C[i] and sine term S[i]. Parallel arrays rather than a table per
 * coefficient because a 200x200 field is ~40,000 coefficients and a
 * table-per-coefficient encoding is pathological in both size and decode cost.
 */
export declare class SHC implements flatbuffers.IUnpackableObject<SHCT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): SHC;
    static getRootAsSHC(bb: flatbuffers.ByteBuffer, obj?: SHC): SHC;
    static getSizePrefixedRootAsSHC(bb: flatbuffers.ByteBuffer, obj?: SHC): SHC;
    static bufferHasIdentifier(bb: flatbuffers.ByteBuffer): boolean;
    /**
     * Identifier of the coefficient set, e.g. "EGM2008", "GGGRX1200".
     */
    MODEL_NAME(): string;
    MODEL_NAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    /**
     * Body the field describes, as a NAIF integer ID (399 = Earth, 301 = Moon,
     * 499 = Mars). NAIF ID is normative; BODY_NAME is advisory. Note that a
     * barycenter (e.g. 4) is NOT the body (e.g. 499).
     */
    CENTRAL_BODY_NAIF_ID(): number;
    /**
     * Advisory body name.
     */
    BODY_NAME(): string | null;
    BODY_NAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Gravitational parameter of the body, m^3/s^2. Part of the set: a field's
     * coefficients are only meaningful with the GM they were solved against.
     */
    GM(): number;
    /**
     * Reference radius of the expansion, metres. Also part of the set.
     */
    REFERENCE_RADIUS(): number;
    /**
     * Maximum degree and order present in the arrays.
     */
    MAX_DEGREE(): number;
    MAX_ORDER(): number;
    /**
     * Normalization convention. A set published without this is unusable;
     * consumers MUST reject UNSPECIFIED rather than assuming a convention.
     */
    NORMALIZATION(): shcNormalization;
    /**
     * Permanent-tide system. Consumers MUST reject UNSPECIFIED for any
     * application sensitive at the 1e-9 level in C20.
     */
    PERMANENT_TIDE_SYSTEM(): shcTideSystem;
    /**
     * Epoch the static coefficients are referenced to, ISO 8601. Required when
     * VARIABLE_TERMS is present.
     */
    REFERENCE_EPOCH(): string | null;
    REFERENCE_EPOCH(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Parallel coefficient arrays. DEGREES, ORDERS, C and S MUST have identical
     * lengths; a record where they do not is invalid.
     */
    DEGREES(index: number): number | null;
    degreesLength(): number;
    degreesArray(): Uint16Array | null;
    ORDERS(index: number): number | null;
    ordersLength(): number;
    ordersArray(): Uint16Array | null;
    C(index: number): number | null;
    cLength(): number;
    cArray(): Float64Array | null;
    S(index: number): number | null;
    sLength(): number;
    sArray(): Float64Array | null;
    /**
     * Optional 1-sigma uncertainties, parallel to C and S when present.
     */
    C_SIGMA(index: number): number | null;
    cSigmaLength(): number;
    cSigmaArray(): Float64Array | null;
    S_SIGMA(index: number): number | null;
    sSigmaLength(): number;
    sSigmaArray(): Float64Array | null;
    /**
     * Optional time-variable terms applied on top of the static field.
     */
    VARIABLE_TERMS(index: number, obj?: SHCVariableTerm): SHCVariableTerm | null;
    variableTermsLength(): number;
    /**
     * Tide-free/zero-tide conversion already applied, publication reference, or
     * any other provenance needed to reproduce the set.
     */
    SOURCE(): string | null;
    SOURCE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Citation for the field, e.g. the paper or data-centre DOI.
     */
    CITATION(): string | null;
    CITATION(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    static startSHC(builder: flatbuffers.Builder): void;
    static addModelName(builder: flatbuffers.Builder, MODEL_NAMEOffset: flatbuffers.Offset): void;
    static addCentralBodyNaifId(builder: flatbuffers.Builder, CENTRAL_BODY_NAIF_ID: number): void;
    static addBodyName(builder: flatbuffers.Builder, BODY_NAMEOffset: flatbuffers.Offset): void;
    static addGm(builder: flatbuffers.Builder, GM: number): void;
    static addReferenceRadius(builder: flatbuffers.Builder, REFERENCE_RADIUS: number): void;
    static addMaxDegree(builder: flatbuffers.Builder, MAX_DEGREE: number): void;
    static addMaxOrder(builder: flatbuffers.Builder, MAX_ORDER: number): void;
    static addNormalization(builder: flatbuffers.Builder, NORMALIZATION: shcNormalization): void;
    static addPermanentTideSystem(builder: flatbuffers.Builder, PERMANENT_TIDE_SYSTEM: shcTideSystem): void;
    static addReferenceEpoch(builder: flatbuffers.Builder, REFERENCE_EPOCHOffset: flatbuffers.Offset): void;
    static addDegrees(builder: flatbuffers.Builder, DEGREESOffset: flatbuffers.Offset): void;
    static createDegreesVector(builder: flatbuffers.Builder, data: number[] | Uint16Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createDegreesVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startDegreesVector(builder: flatbuffers.Builder, numElems: number): void;
    static addOrders(builder: flatbuffers.Builder, ORDERSOffset: flatbuffers.Offset): void;
    static createOrdersVector(builder: flatbuffers.Builder, data: number[] | Uint16Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createOrdersVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startOrdersVector(builder: flatbuffers.Builder, numElems: number): void;
    static addC(builder: flatbuffers.Builder, COffset: flatbuffers.Offset): void;
    static createCVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createCVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startCVector(builder: flatbuffers.Builder, numElems: number): void;
    static addS(builder: flatbuffers.Builder, SOffset: flatbuffers.Offset): void;
    static createSVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createSVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startSVector(builder: flatbuffers.Builder, numElems: number): void;
    static addCSigma(builder: flatbuffers.Builder, C_SIGMAOffset: flatbuffers.Offset): void;
    static createCSigmaVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createCSigmaVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startCSigmaVector(builder: flatbuffers.Builder, numElems: number): void;
    static addSSigma(builder: flatbuffers.Builder, S_SIGMAOffset: flatbuffers.Offset): void;
    static createSSigmaVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createSSigmaVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startSSigmaVector(builder: flatbuffers.Builder, numElems: number): void;
    static addVariableTerms(builder: flatbuffers.Builder, VARIABLE_TERMSOffset: flatbuffers.Offset): void;
    static createVariableTermsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startVariableTermsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addSource(builder: flatbuffers.Builder, SOURCEOffset: flatbuffers.Offset): void;
    static addCitation(builder: flatbuffers.Builder, CITATIONOffset: flatbuffers.Offset): void;
    static endSHC(builder: flatbuffers.Builder): flatbuffers.Offset;
    static finishSHCBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static finishSizePrefixedSHCBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static createSHC(builder: flatbuffers.Builder, MODEL_NAMEOffset: flatbuffers.Offset, CENTRAL_BODY_NAIF_ID: number, BODY_NAMEOffset: flatbuffers.Offset, GM: number, REFERENCE_RADIUS: number, MAX_DEGREE: number, MAX_ORDER: number, NORMALIZATION: shcNormalization, PERMANENT_TIDE_SYSTEM: shcTideSystem, REFERENCE_EPOCHOffset: flatbuffers.Offset, DEGREESOffset: flatbuffers.Offset, ORDERSOffset: flatbuffers.Offset, COffset: flatbuffers.Offset, SOffset: flatbuffers.Offset, C_SIGMAOffset: flatbuffers.Offset, S_SIGMAOffset: flatbuffers.Offset, VARIABLE_TERMSOffset: flatbuffers.Offset, SOURCEOffset: flatbuffers.Offset, CITATIONOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): SHCT;
    unpackTo(_o: SHCT): void;
}
export declare class SHCT implements flatbuffers.IGeneratedObject {
    MODEL_NAME: string | Uint8Array | null;
    CENTRAL_BODY_NAIF_ID: number;
    BODY_NAME: string | Uint8Array | null;
    GM: number;
    REFERENCE_RADIUS: number;
    MAX_DEGREE: number;
    MAX_ORDER: number;
    NORMALIZATION: shcNormalization;
    PERMANENT_TIDE_SYSTEM: shcTideSystem;
    REFERENCE_EPOCH: string | Uint8Array | null;
    DEGREES: (number)[];
    ORDERS: (number)[];
    C: (number)[];
    S: (number)[];
    C_SIGMA: (number)[];
    S_SIGMA: (number)[];
    VARIABLE_TERMS: (SHCVariableTermT)[];
    SOURCE: string | Uint8Array | null;
    CITATION: string | Uint8Array | null;
    constructor(MODEL_NAME?: string | Uint8Array | null, CENTRAL_BODY_NAIF_ID?: number, BODY_NAME?: string | Uint8Array | null, GM?: number, REFERENCE_RADIUS?: number, MAX_DEGREE?: number, MAX_ORDER?: number, NORMALIZATION?: shcNormalization, PERMANENT_TIDE_SYSTEM?: shcTideSystem, REFERENCE_EPOCH?: string | Uint8Array | null, DEGREES?: (number)[], ORDERS?: (number)[], C?: (number)[], S?: (number)[], C_SIGMA?: (number)[], S_SIGMA?: (number)[], VARIABLE_TERMS?: (SHCVariableTermT)[], SOURCE?: string | Uint8Array | null, CITATION?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=SHC.d.ts.map