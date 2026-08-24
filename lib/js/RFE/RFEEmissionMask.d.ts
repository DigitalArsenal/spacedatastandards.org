import * as flatbuffers from 'flatbuffers';
import { RFEEmissionMaskPoint, RFEEmissionMaskPointT } from './RFEEmissionMaskPoint.js';
import { RFEProvenance, RFEProvenanceT } from './RFEProvenance.js';
import { rfeEmissionMaskClass } from './rfeEmissionMaskClass.js';
import { rfeEmissionPath } from './rfeEmissionPath.js';
/**
 * A replayable spurious, harmonic, out-of-band, noise, conducted, radiated,
 * or susceptibility limit curve.
 */
export declare class RFEEmissionMask implements flatbuffers.IUnpackableObject<RFEEmissionMaskT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): RFEEmissionMask;
    static getRootAsRFEEmissionMask(bb: flatbuffers.ByteBuffer, obj?: RFEEmissionMask): RFEEmissionMask;
    static getSizePrefixedRootAsRFEEmissionMask(bb: flatbuffers.ByteBuffer, obj?: RFEEmissionMask): RFEEmissionMask;
    MASK_ID(): string;
    MASK_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    NAME(): string | null;
    NAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    CLASS(): rfeEmissionMaskClass;
    PATH(): rfeEmissionPath;
    /**
     * Unit token applying to every point VALUE, for example dBW, dBW/Hz, dBuV,
     * or dBuA. A point with no unit is not publishable.
     */
    UNITS(): string;
    UNITS(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    REFERENCE_FREQUENCY_HZ(): number;
    REFERENCE_BANDWIDTH_HZ(): number;
    POINTS(index: number, obj?: RFEEmissionMaskPoint): RFEEmissionMaskPoint | null;
    pointsLength(): number;
    PROVENANCE(obj?: RFEProvenance): RFEProvenance | null;
    static startRFEEmissionMask(builder: flatbuffers.Builder): void;
    static addMaskId(builder: flatbuffers.Builder, MASK_IDOffset: flatbuffers.Offset): void;
    static addName(builder: flatbuffers.Builder, NAMEOffset: flatbuffers.Offset): void;
    static addClass(builder: flatbuffers.Builder, CLASS: rfeEmissionMaskClass): void;
    static addPath(builder: flatbuffers.Builder, PATH: rfeEmissionPath): void;
    static addUnits(builder: flatbuffers.Builder, UNITSOffset: flatbuffers.Offset): void;
    static addReferenceFrequencyHz(builder: flatbuffers.Builder, REFERENCE_FREQUENCY_HZ: number): void;
    static addReferenceBandwidthHz(builder: flatbuffers.Builder, REFERENCE_BANDWIDTH_HZ: number): void;
    static addPoints(builder: flatbuffers.Builder, POINTSOffset: flatbuffers.Offset): void;
    static createPointsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startPointsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addProvenance(builder: flatbuffers.Builder, PROVENANCEOffset: flatbuffers.Offset): void;
    static endRFEEmissionMask(builder: flatbuffers.Builder): flatbuffers.Offset;
    unpack(): RFEEmissionMaskT;
    unpackTo(_o: RFEEmissionMaskT): void;
}
export declare class RFEEmissionMaskT implements flatbuffers.IGeneratedObject {
    MASK_ID: string | Uint8Array | null;
    NAME: string | Uint8Array | null;
    CLASS: rfeEmissionMaskClass;
    PATH: rfeEmissionPath;
    UNITS: string | Uint8Array | null;
    REFERENCE_FREQUENCY_HZ: number;
    REFERENCE_BANDWIDTH_HZ: number;
    POINTS: (RFEEmissionMaskPointT)[];
    PROVENANCE: RFEProvenanceT | null;
    constructor(MASK_ID?: string | Uint8Array | null, NAME?: string | Uint8Array | null, CLASS?: rfeEmissionMaskClass, PATH?: rfeEmissionPath, UNITS?: string | Uint8Array | null, REFERENCE_FREQUENCY_HZ?: number, REFERENCE_BANDWIDTH_HZ?: number, POINTS?: (RFEEmissionMaskPointT)[], PROVENANCE?: RFEProvenanceT | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=RFEEmissionMask.d.ts.map