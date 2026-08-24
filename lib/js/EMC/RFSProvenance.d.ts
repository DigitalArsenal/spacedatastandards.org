import * as flatbuffers from 'flatbuffers';
import { rfsPropertyMethod } from './rfsPropertyMethod.js';
/**
 * Where these properties came from.
 */
export declare class RFSProvenance implements flatbuffers.IUnpackableObject<RFSProvenanceT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): RFSProvenance;
    static getRootAsRFSProvenance(bb: flatbuffers.ByteBuffer, obj?: RFSProvenance): RFSProvenance;
    static getSizePrefixedRootAsRFSProvenance(bb: flatbuffers.ByteBuffer, obj?: RFSProvenance): RFSProvenance;
    METHOD(): rfsPropertyMethod;
    /**
     * The measurement campaign, published table or model. Required: an
     * unattributed permittivity is not publishable.
     */
    SOURCE(): string;
    SOURCE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    /**
     * The specific table, recommendation or dataset entry within SOURCE.
     */
    SOURCE_REFERENCE(): string | null;
    SOURCE_REFERENCE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Replayable query that retrieves the source value.
     */
    SOURCE_QUERY(): string | null;
    SOURCE_QUERY(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * How it was measured (e.g. "free-space transmission", "coaxial probe",
     * "resonant cavity").
     */
    MEASUREMENT_TECHNIQUE(): string | null;
    MEASUREMENT_TECHNIQUE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * `$PLG.PLUGIN_ID` / `$PMM.MODULE_ID` that produced modelled values.
     */
    MODULE_ID(): string | null;
    MODULE_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    MODULE_VERSION(): string | null;
    MODULE_VERSION(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    MODULE_CONTENT_HASH(): string | null;
    MODULE_CONTENT_HASH(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Unix ms measured and retrieved.
     */
    MEASURED_AT(): bigint;
    RETRIEVED_AT(): bigint;
    /**
     * 1-sigma uncertainty of the permittivity and conductivity values, in the
     * units of the quantity they qualify.
     */
    RELATIVE_PERMITTIVITY_SIGMA(): number;
    CONDUCTIVITY_SIGMA_S_PER_M(): number;
    /**
     * Licence terms. Empty means UNKNOWN TERMS — never public domain, never a
     * grant to redistribute.
     */
    LICENSE(): string | null;
    LICENSE(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    NON_COMMERCIAL_ONLY(): boolean;
    CITATION(): string | null;
    CITATION(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    static startRFSProvenance(builder: flatbuffers.Builder): void;
    static addMethod(builder: flatbuffers.Builder, METHOD: rfsPropertyMethod): void;
    static addSource(builder: flatbuffers.Builder, SOURCEOffset: flatbuffers.Offset): void;
    static addSourceReference(builder: flatbuffers.Builder, SOURCE_REFERENCEOffset: flatbuffers.Offset): void;
    static addSourceQuery(builder: flatbuffers.Builder, SOURCE_QUERYOffset: flatbuffers.Offset): void;
    static addMeasurementTechnique(builder: flatbuffers.Builder, MEASUREMENT_TECHNIQUEOffset: flatbuffers.Offset): void;
    static addModuleId(builder: flatbuffers.Builder, MODULE_IDOffset: flatbuffers.Offset): void;
    static addModuleVersion(builder: flatbuffers.Builder, MODULE_VERSIONOffset: flatbuffers.Offset): void;
    static addModuleContentHash(builder: flatbuffers.Builder, MODULE_CONTENT_HASHOffset: flatbuffers.Offset): void;
    static addMeasuredAt(builder: flatbuffers.Builder, MEASURED_AT: bigint): void;
    static addRetrievedAt(builder: flatbuffers.Builder, RETRIEVED_AT: bigint): void;
    static addRelativePermittivitySigma(builder: flatbuffers.Builder, RELATIVE_PERMITTIVITY_SIGMA: number): void;
    static addConductivitySigmaSPerM(builder: flatbuffers.Builder, CONDUCTIVITY_SIGMA_S_PER_M: number): void;
    static addLicense(builder: flatbuffers.Builder, LICENSEOffset: flatbuffers.Offset): void;
    static addNonCommercialOnly(builder: flatbuffers.Builder, NON_COMMERCIAL_ONLY: boolean): void;
    static addCitation(builder: flatbuffers.Builder, CITATIONOffset: flatbuffers.Offset): void;
    static endRFSProvenance(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createRFSProvenance(builder: flatbuffers.Builder, METHOD: rfsPropertyMethod, SOURCEOffset: flatbuffers.Offset, SOURCE_REFERENCEOffset: flatbuffers.Offset, SOURCE_QUERYOffset: flatbuffers.Offset, MEASUREMENT_TECHNIQUEOffset: flatbuffers.Offset, MODULE_IDOffset: flatbuffers.Offset, MODULE_VERSIONOffset: flatbuffers.Offset, MODULE_CONTENT_HASHOffset: flatbuffers.Offset, MEASURED_AT: bigint, RETRIEVED_AT: bigint, RELATIVE_PERMITTIVITY_SIGMA: number, CONDUCTIVITY_SIGMA_S_PER_M: number, LICENSEOffset: flatbuffers.Offset, NON_COMMERCIAL_ONLY: boolean, CITATIONOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): RFSProvenanceT;
    unpackTo(_o: RFSProvenanceT): void;
}
export declare class RFSProvenanceT implements flatbuffers.IGeneratedObject {
    METHOD: rfsPropertyMethod;
    SOURCE: string | Uint8Array | null;
    SOURCE_REFERENCE: string | Uint8Array | null;
    SOURCE_QUERY: string | Uint8Array | null;
    MEASUREMENT_TECHNIQUE: string | Uint8Array | null;
    MODULE_ID: string | Uint8Array | null;
    MODULE_VERSION: string | Uint8Array | null;
    MODULE_CONTENT_HASH: string | Uint8Array | null;
    MEASURED_AT: bigint;
    RETRIEVED_AT: bigint;
    RELATIVE_PERMITTIVITY_SIGMA: number;
    CONDUCTIVITY_SIGMA_S_PER_M: number;
    LICENSE: string | Uint8Array | null;
    NON_COMMERCIAL_ONLY: boolean;
    CITATION: string | Uint8Array | null;
    constructor(METHOD?: rfsPropertyMethod, SOURCE?: string | Uint8Array | null, SOURCE_REFERENCE?: string | Uint8Array | null, SOURCE_QUERY?: string | Uint8Array | null, MEASUREMENT_TECHNIQUE?: string | Uint8Array | null, MODULE_ID?: string | Uint8Array | null, MODULE_VERSION?: string | Uint8Array | null, MODULE_CONTENT_HASH?: string | Uint8Array | null, MEASURED_AT?: bigint, RETRIEVED_AT?: bigint, RELATIVE_PERMITTIVITY_SIGMA?: number, CONDUCTIVITY_SIGMA_S_PER_M?: number, LICENSE?: string | Uint8Array | null, NON_COMMERCIAL_ONLY?: boolean, CITATION?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=RFSProvenance.d.ts.map