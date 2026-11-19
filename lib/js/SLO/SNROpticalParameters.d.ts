import * as flatbuffers from 'flatbuffers';
import { OPPProvenance, OPPProvenanceT } from './OPPProvenance.js';
/**
 * Optical parameters. Every quantity is positive except LIMITING_MAGNITUDE,
 * which is signed and uses NaN for "not stated"; 0 means "not stated" elsewhere.
 */
export declare class SNROpticalParameters implements flatbuffers.IUnpackableObject<SNROpticalParametersT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): SNROpticalParameters;
    static getRootAsSNROpticalParameters(bb: flatbuffers.ByteBuffer, obj?: SNROpticalParameters): SNROpticalParameters;
    static getSizePrefixedRootAsSNROpticalParameters(bb: flatbuffers.ByteBuffer, obj?: SNROpticalParameters): SNROpticalParameters;
    /**
     * Clear aperture diameter, m.
     */
    APERTURE_M(): number;
    /**
     * Focal length, m.
     */
    FOCAL_LENGTH_M(): number;
    /**
     * Instantaneous field of view of one detector element, radians.
     */
    IFOV_RAD(): number;
    /**
     * Ground sample distance, m, at the nadir and nominal altitude the source
     * states (qualifiers go in PROVENANCE.NOTES).
     */
    GSD_M(): number;
    /**
     * Limiting visual magnitude. NaN = not stated.
     */
    LIMITING_MAGNITUDE(): number;
    /**
     * Detector as the source names it ("CCD", "HgCdTe", "sCMOS").
     */
    DETECTOR(): string | null;
    DETECTOR(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Where these values were read, when it differs from the record's PROVENANCE.
     */
    PROVENANCE(obj?: OPPProvenance): OPPProvenance | null;
    static startSNROpticalParameters(builder: flatbuffers.Builder): void;
    static addApertureM(builder: flatbuffers.Builder, APERTURE_M: number): void;
    static addFocalLengthM(builder: flatbuffers.Builder, FOCAL_LENGTH_M: number): void;
    static addIfovRad(builder: flatbuffers.Builder, IFOV_RAD: number): void;
    static addGsdM(builder: flatbuffers.Builder, GSD_M: number): void;
    static addLimitingMagnitude(builder: flatbuffers.Builder, LIMITING_MAGNITUDE: number): void;
    static addDetector(builder: flatbuffers.Builder, DETECTOROffset: flatbuffers.Offset): void;
    static addProvenance(builder: flatbuffers.Builder, PROVENANCEOffset: flatbuffers.Offset): void;
    static endSNROpticalParameters(builder: flatbuffers.Builder): flatbuffers.Offset;
    unpack(): SNROpticalParametersT;
    unpackTo(_o: SNROpticalParametersT): void;
}
export declare class SNROpticalParametersT implements flatbuffers.IGeneratedObject {
    APERTURE_M: number;
    FOCAL_LENGTH_M: number;
    IFOV_RAD: number;
    GSD_M: number;
    LIMITING_MAGNITUDE: number;
    DETECTOR: string | Uint8Array | null;
    PROVENANCE: OPPProvenanceT | null;
    constructor(APERTURE_M?: number, FOCAL_LENGTH_M?: number, IFOV_RAD?: number, GSD_M?: number, LIMITING_MAGNITUDE?: number, DETECTOR?: string | Uint8Array | null, PROVENANCE?: OPPProvenanceT | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=SNROpticalParameters.d.ts.map