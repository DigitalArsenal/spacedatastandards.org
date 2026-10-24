import * as flatbuffers from 'flatbuffers';
import { evlAberrationCorrection } from './evlAberrationCorrection.js';
import { evlShadowModel } from './evlShadowModel.js';
/**
 * Configuration for ECLIPSE.
 */
export declare class EVLEclipseConfiguration implements flatbuffers.IUnpackableObject<EVLEclipseConfigurationT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): EVLEclipseConfiguration;
    static getRootAsEVLEclipseConfiguration(bb: flatbuffers.ByteBuffer, obj?: EVLEclipseConfiguration): EVLEclipseConfiguration;
    static getSizePrefixedRootAsEVLEclipseConfiguration(bb: flatbuffers.ByteBuffer, obj?: EVLEclipseConfiguration): EVLEclipseConfiguration;
    /**
     * Ephemeris body codes of the bodies allowed to occult, in the order they
     * are tested. More than one is normal.
     */
    OCCULTING_BODY_IDS(index: number): number | null;
    occultingBodyIdsLength(): number;
    occultingBodyIdsArray(): Int32Array | null;
    /**
     * Ephemeris body code of the illuminating body.
     */
    ILLUMINATING_BODY_ID(): number;
    SHADOW_MODEL(): evlShadowModel;
    /**
     * Which shadow regions to report. A model that cannot distinguish a region
     * MUST refuse the request rather than fold it into a neighbour.
     */
    REPORT_UMBRA(): boolean;
    REPORT_PENUMBRA(): boolean;
    REPORT_ANTUMBRA(): boolean;
    /**
     * Events shorter than this are not reported. 0 reports every event.
     */
    MINIMUM_DURATION_SECONDS(): number;
    /**
     * Correct the illuminating-body direction for signal travel time.
     */
    ABERRATION_CORRECTION(): evlAberrationCorrection;
    static startEVLEclipseConfiguration(builder: flatbuffers.Builder): void;
    static addOccultingBodyIds(builder: flatbuffers.Builder, OCCULTING_BODY_IDSOffset: flatbuffers.Offset): void;
    static createOccultingBodyIdsVector(builder: flatbuffers.Builder, data: number[] | Int32Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createOccultingBodyIdsVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startOccultingBodyIdsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addIlluminatingBodyId(builder: flatbuffers.Builder, ILLUMINATING_BODY_ID: number): void;
    static addShadowModel(builder: flatbuffers.Builder, SHADOW_MODEL: evlShadowModel): void;
    static addReportUmbra(builder: flatbuffers.Builder, REPORT_UMBRA: boolean): void;
    static addReportPenumbra(builder: flatbuffers.Builder, REPORT_PENUMBRA: boolean): void;
    static addReportAntumbra(builder: flatbuffers.Builder, REPORT_ANTUMBRA: boolean): void;
    static addMinimumDurationSeconds(builder: flatbuffers.Builder, MINIMUM_DURATION_SECONDS: number): void;
    static addAberrationCorrection(builder: flatbuffers.Builder, ABERRATION_CORRECTION: evlAberrationCorrection): void;
    static endEVLEclipseConfiguration(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createEVLEclipseConfiguration(builder: flatbuffers.Builder, OCCULTING_BODY_IDSOffset: flatbuffers.Offset, ILLUMINATING_BODY_ID: number, SHADOW_MODEL: evlShadowModel, REPORT_UMBRA: boolean, REPORT_PENUMBRA: boolean, REPORT_ANTUMBRA: boolean, MINIMUM_DURATION_SECONDS: number, ABERRATION_CORRECTION: evlAberrationCorrection): flatbuffers.Offset;
    unpack(): EVLEclipseConfigurationT;
    unpackTo(_o: EVLEclipseConfigurationT): void;
}
export declare class EVLEclipseConfigurationT implements flatbuffers.IGeneratedObject {
    OCCULTING_BODY_IDS: (number)[];
    ILLUMINATING_BODY_ID: number;
    SHADOW_MODEL: evlShadowModel;
    REPORT_UMBRA: boolean;
    REPORT_PENUMBRA: boolean;
    REPORT_ANTUMBRA: boolean;
    MINIMUM_DURATION_SECONDS: number;
    ABERRATION_CORRECTION: evlAberrationCorrection;
    constructor(OCCULTING_BODY_IDS?: (number)[], ILLUMINATING_BODY_ID?: number, SHADOW_MODEL?: evlShadowModel, REPORT_UMBRA?: boolean, REPORT_PENUMBRA?: boolean, REPORT_ANTUMBRA?: boolean, MINIMUM_DURATION_SECONDS?: number, ABERRATION_CORRECTION?: evlAberrationCorrection);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=EVLEclipseConfiguration.d.ts.map