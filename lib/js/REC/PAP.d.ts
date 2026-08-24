import * as flatbuffers from 'flatbuffers';
import { PAPElement, PAPElementT } from './PAPElement.js';
import { PAPGainCut, PAPGainCutT } from './PAPGainCut.js';
import { PAPNull, PAPNullT } from './PAPNull.js';
import { RFLProvenance, RFLProvenanceT } from './RFLProvenance.js';
import { papArrayGeometry } from './papArrayGeometry.js';
import { papTaperFamily } from './papTaperFamily.js';
/**
 * Phased Array Pattern Synthesis
 */
export declare class PAP implements flatbuffers.IUnpackableObject<PAPT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): PAP;
    static getRootAsPAP(bb: flatbuffers.ByteBuffer, obj?: PAP): PAP;
    static getSizePrefixedRootAsPAP(bb: flatbuffers.ByteBuffer, obj?: PAP): PAP;
    static bufferHasIdentifier(bb: flatbuffers.ByteBuffer): boolean;
    PAP_ID(): string;
    PAP_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    NAME(): string | null;
    NAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    SCENARIO_ID(): string | null;
    SCENARIO_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    RFE_ID(): string | null;
    RFE_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    BEM_ID(): string | null;
    BEM_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * BEMHopSchedule.SCHEDULE_ID evaluated by this synthesis, when applicable.
     */
    HOP_SCHEDULE_ID(): string | null;
    HOP_SCHEDULE_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    GEOMETRY(): papArrayGeometry;
    ELEMENTS(index: number, obj?: PAPElement): PAPElement | null;
    elementsLength(): number;
    TAPER(): papTaperFamily;
    TAPER_PARAMETERS(index: number): number | null;
    taperParametersLength(): number;
    taperParametersArray(): Float64Array | null;
    STEERING_AZIMUTH_DEG(): number;
    STEERING_ELEVATION_DEG(): number;
    STEERING_CONE_DEG(): number;
    STEERING_CLOCK_DEG(): number;
    SCAN_LOSS_DB(): number;
    PEAK_GAIN_DBI(): number;
    GAIN_CUTS(index: number, obj?: PAPGainCut): PAPGainCut | null;
    gainCutsLength(): number;
    AZIMUTH_3DB_BEAMWIDTH_DEG(): number;
    ELEVATION_3DB_BEAMWIDTH_DEG(): number;
    FIRST_SIDELOBE_LEVEL_DB(): number;
    PEAK_SIDELOBE_LEVEL_DB(): number;
    GRATING_LOBE_PRESENT(): boolean;
    GRATING_LOBE_AZIMUTH_DEG(index: number): number | null;
    gratingLobeAzimuthDegLength(): number;
    gratingLobeAzimuthDegArray(): Float64Array | null;
    GRATING_LOBE_ELEVATION_DEG(index: number): number | null;
    gratingLobeElevationDegLength(): number;
    gratingLobeElevationDegArray(): Float64Array | null;
    NULLS(index: number, obj?: PAPNull): PAPNull | null;
    nullsLength(): number;
    PROVENANCE(obj?: RFLProvenance): RFLProvenance | null;
    COMPUTED_AT(): bigint;
    PRODUCER_ID(): string;
    PRODUCER_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    /**
     * Ed25519 signature over the size-prefixed FlatBuffer with both 64-byte
     * signature payloads zeroed while preserving their vectors and offsets.
     */
    SIGNATURE(index: number): number | null;
    signatureLength(): number;
    signatureArray(): Uint8Array;
    /**
     * Ed25519 signature over canonical JSON with IDL field order and
     * capitalization, no insignificant whitespace, and both signature fields
     * omitted.
     */
    CANONICAL_JSON_SIGNATURE(index: number): number | null;
    canonicalJsonSignatureLength(): number;
    canonicalJsonSignatureArray(): Uint8Array;
    static startPAP(builder: flatbuffers.Builder): void;
    static addPapId(builder: flatbuffers.Builder, PAP_IDOffset: flatbuffers.Offset): void;
    static addName(builder: flatbuffers.Builder, NAMEOffset: flatbuffers.Offset): void;
    static addScenarioId(builder: flatbuffers.Builder, SCENARIO_IDOffset: flatbuffers.Offset): void;
    static addRfeId(builder: flatbuffers.Builder, RFE_IDOffset: flatbuffers.Offset): void;
    static addBemId(builder: flatbuffers.Builder, BEM_IDOffset: flatbuffers.Offset): void;
    static addHopScheduleId(builder: flatbuffers.Builder, HOP_SCHEDULE_IDOffset: flatbuffers.Offset): void;
    static addGeometry(builder: flatbuffers.Builder, GEOMETRY: papArrayGeometry): void;
    static addElements(builder: flatbuffers.Builder, ELEMENTSOffset: flatbuffers.Offset): void;
    static createElementsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startElementsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addTaper(builder: flatbuffers.Builder, TAPER: papTaperFamily): void;
    static addTaperParameters(builder: flatbuffers.Builder, TAPER_PARAMETERSOffset: flatbuffers.Offset): void;
    static createTaperParametersVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createTaperParametersVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startTaperParametersVector(builder: flatbuffers.Builder, numElems: number): void;
    static addSteeringAzimuthDeg(builder: flatbuffers.Builder, STEERING_AZIMUTH_DEG: number): void;
    static addSteeringElevationDeg(builder: flatbuffers.Builder, STEERING_ELEVATION_DEG: number): void;
    static addSteeringConeDeg(builder: flatbuffers.Builder, STEERING_CONE_DEG: number): void;
    static addSteeringClockDeg(builder: flatbuffers.Builder, STEERING_CLOCK_DEG: number): void;
    static addScanLossDb(builder: flatbuffers.Builder, SCAN_LOSS_DB: number): void;
    static addPeakGainDbi(builder: flatbuffers.Builder, PEAK_GAIN_DBI: number): void;
    static addGainCuts(builder: flatbuffers.Builder, GAIN_CUTSOffset: flatbuffers.Offset): void;
    static createGainCutsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startGainCutsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addAzimuth3DbBeamwidthDeg(builder: flatbuffers.Builder, AZIMUTH_3DB_BEAMWIDTH_DEG: number): void;
    static addElevation3DbBeamwidthDeg(builder: flatbuffers.Builder, ELEVATION_3DB_BEAMWIDTH_DEG: number): void;
    static addFirstSidelobeLevelDb(builder: flatbuffers.Builder, FIRST_SIDELOBE_LEVEL_DB: number): void;
    static addPeakSidelobeLevelDb(builder: flatbuffers.Builder, PEAK_SIDELOBE_LEVEL_DB: number): void;
    static addGratingLobePresent(builder: flatbuffers.Builder, GRATING_LOBE_PRESENT: boolean): void;
    static addGratingLobeAzimuthDeg(builder: flatbuffers.Builder, GRATING_LOBE_AZIMUTH_DEGOffset: flatbuffers.Offset): void;
    static createGratingLobeAzimuthDegVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createGratingLobeAzimuthDegVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startGratingLobeAzimuthDegVector(builder: flatbuffers.Builder, numElems: number): void;
    static addGratingLobeElevationDeg(builder: flatbuffers.Builder, GRATING_LOBE_ELEVATION_DEGOffset: flatbuffers.Offset): void;
    static createGratingLobeElevationDegVector(builder: flatbuffers.Builder, data: number[] | Float64Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createGratingLobeElevationDegVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startGratingLobeElevationDegVector(builder: flatbuffers.Builder, numElems: number): void;
    static addNulls(builder: flatbuffers.Builder, NULLSOffset: flatbuffers.Offset): void;
    static createNullsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startNullsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addProvenance(builder: flatbuffers.Builder, PROVENANCEOffset: flatbuffers.Offset): void;
    static addComputedAt(builder: flatbuffers.Builder, COMPUTED_AT: bigint): void;
    static addProducerId(builder: flatbuffers.Builder, PRODUCER_IDOffset: flatbuffers.Offset): void;
    static addSignature(builder: flatbuffers.Builder, SIGNATUREOffset: flatbuffers.Offset): void;
    static createSignatureVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startSignatureVector(builder: flatbuffers.Builder, numElems: number): void;
    static addCanonicalJsonSignature(builder: flatbuffers.Builder, CANONICAL_JSON_SIGNATUREOffset: flatbuffers.Offset): void;
    static createCanonicalJsonSignatureVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startCanonicalJsonSignatureVector(builder: flatbuffers.Builder, numElems: number): void;
    static endPAP(builder: flatbuffers.Builder): flatbuffers.Offset;
    static finishPAPBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static finishSizePrefixedPAPBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    unpack(): PAPT;
    unpackTo(_o: PAPT): void;
}
export declare class PAPT implements flatbuffers.IGeneratedObject {
    PAP_ID: string | Uint8Array | null;
    NAME: string | Uint8Array | null;
    SCENARIO_ID: string | Uint8Array | null;
    RFE_ID: string | Uint8Array | null;
    BEM_ID: string | Uint8Array | null;
    HOP_SCHEDULE_ID: string | Uint8Array | null;
    GEOMETRY: papArrayGeometry;
    ELEMENTS: (PAPElementT)[];
    TAPER: papTaperFamily;
    TAPER_PARAMETERS: (number)[];
    STEERING_AZIMUTH_DEG: number;
    STEERING_ELEVATION_DEG: number;
    STEERING_CONE_DEG: number;
    STEERING_CLOCK_DEG: number;
    SCAN_LOSS_DB: number;
    PEAK_GAIN_DBI: number;
    GAIN_CUTS: (PAPGainCutT)[];
    AZIMUTH_3DB_BEAMWIDTH_DEG: number;
    ELEVATION_3DB_BEAMWIDTH_DEG: number;
    FIRST_SIDELOBE_LEVEL_DB: number;
    PEAK_SIDELOBE_LEVEL_DB: number;
    GRATING_LOBE_PRESENT: boolean;
    GRATING_LOBE_AZIMUTH_DEG: (number)[];
    GRATING_LOBE_ELEVATION_DEG: (number)[];
    NULLS: (PAPNullT)[];
    PROVENANCE: RFLProvenanceT | null;
    COMPUTED_AT: bigint;
    PRODUCER_ID: string | Uint8Array | null;
    SIGNATURE: (number)[];
    CANONICAL_JSON_SIGNATURE: (number)[];
    constructor(PAP_ID?: string | Uint8Array | null, NAME?: string | Uint8Array | null, SCENARIO_ID?: string | Uint8Array | null, RFE_ID?: string | Uint8Array | null, BEM_ID?: string | Uint8Array | null, HOP_SCHEDULE_ID?: string | Uint8Array | null, GEOMETRY?: papArrayGeometry, ELEMENTS?: (PAPElementT)[], TAPER?: papTaperFamily, TAPER_PARAMETERS?: (number)[], STEERING_AZIMUTH_DEG?: number, STEERING_ELEVATION_DEG?: number, STEERING_CONE_DEG?: number, STEERING_CLOCK_DEG?: number, SCAN_LOSS_DB?: number, PEAK_GAIN_DBI?: number, GAIN_CUTS?: (PAPGainCutT)[], AZIMUTH_3DB_BEAMWIDTH_DEG?: number, ELEVATION_3DB_BEAMWIDTH_DEG?: number, FIRST_SIDELOBE_LEVEL_DB?: number, PEAK_SIDELOBE_LEVEL_DB?: number, GRATING_LOBE_PRESENT?: boolean, GRATING_LOBE_AZIMUTH_DEG?: (number)[], GRATING_LOBE_ELEVATION_DEG?: (number)[], NULLS?: (PAPNullT)[], PROVENANCE?: RFLProvenanceT | null, COMPUTED_AT?: bigint, PRODUCER_ID?: string | Uint8Array | null, SIGNATURE?: (number)[], CANONICAL_JSON_SIGNATURE?: (number)[]);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=PAP.d.ts.map