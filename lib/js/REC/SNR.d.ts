import * as flatbuffers from 'flatbuffers';
import { OPPProvenance, OPPProvenanceT } from './OPPProvenance.js';
import { SCVSensorShapeContract, SCVSensorShapeContractT } from './SCVSensorShapeContract.js';
import { SNRMounting, SNRMountingT } from './SNRMounting.js';
import { SNROpticalParameters, SNROpticalParametersT } from './SNROpticalParameters.js';
import { SNRRfParameters, SNRRfParametersT } from './SNRRfParameters.js';
import { SNRSpectralBand, SNRSpectralBandT } from './SNRSpectralBand.js';
import { SensorType } from './SensorType.js';
import { snrEmissionMode } from './snrEmissionMode.js';
/**
 * Sensor definition: the sensor a platform carries. One record is one sensor.
 *
 * UNKNOWN IS ABSENT. A positive quantity unset is 0, a signed quantity unset
 * is NaN, an unset enum is its UNSPECIFIED (or UNKNOWN) member, an unset
 * string, table or vector is absent. A value is never invented, never zero as a
 * placeholder, never copied from another sensor. Hz is the only frequency unit.
 * Display colors are viewer preferences and never travel in this record.
 *
 * Platform: NORAD_CAT_ID and OBJECT_ID join to $CAT, SITE_ID to $SIT.ID,
 * SENSOR_ID to $SEN.ID. A sensor not attached to a platform has none of them.
 */
export declare class SNR implements flatbuffers.IUnpackableObject<SNRT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): SNR;
    static getRootAsSNR(bb: flatbuffers.ByteBuffer, obj?: SNR): SNR;
    static getSizePrefixedRootAsSNR(bb: flatbuffers.ByteBuffer, obj?: SNR): SNR;
    static bufferHasIdentifier(bb: flatbuffers.ByteBuffer): boolean;
    /**
     * Stable identifier of this sensor. $SEN.ID of the same sensor.
     */
    SENSOR_ID(): string;
    SENSOR_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array;
    NAME(): string | null;
    NAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * $CAT.NORAD_CAT_ID of the spacecraft that carries the sensor. 0 = none.
     */
    NORAD_CAT_ID(): number;
    /**
     * $CAT.OBJECT_ID (COSPAR designator) of the spacecraft that carries it.
     */
    OBJECT_ID(): string | null;
    OBJECT_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * $SIT.ID of the ground site the sensor is at.
     */
    SITE_ID(): string | null;
    SITE_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Stable non-catalogue entity key of the platform, for a platform with neither
     * a catalogue number nor a $SIT.
     */
    ENTITY_ID(): string | null;
    ENTITY_ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    TYPE(): SensorType;
    EMISSION(): snrEmissionMode;
    /**
     * Spectral bands in Hz. One list serves a radar, a multispectral imager and
     * a passive RF receiver. Empty = none stated.
     */
    SPECTRAL_BANDS(index: number, obj?: SNRSpectralBand): SNRSpectralBand | null;
    spectralBandsLength(): number;
    /**
     * Field-of-view shape: the same table $SCV analyses use.
     */
    FIELD_OF_VIEW(obj?: SCVSensorShapeContract): SCVSensorShapeContract | null;
    /**
     * Where FIELD_OF_VIEW was read, when it differs from PROVENANCE.
     */
    FIELD_OF_VIEW_PROVENANCE(obj?: OPPProvenance): OPPProvenance | null;
    MOUNTING(obj?: SNRMounting): SNRMounting | null;
    RF(obj?: SNRRfParameters): SNRRfParameters | null;
    OPTICAL(obj?: SNROpticalParameters): SNROpticalParameters | null;
    /**
     * Where the values of this record were read. A published real-world sensor
     * carries SOURCE, RETRIEVED_AT, METHOD and LICENSE; a user-defined sensor
     * carries METHOD USER_DEFINED. A section's own PROVENANCE supersedes this one
     * for that section.
     */
    PROVENANCE(obj?: OPPProvenance): OPPProvenance | null;
    NOTES(): string | null;
    NOTES(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    static startSNR(builder: flatbuffers.Builder): void;
    static addSensorId(builder: flatbuffers.Builder, SENSOR_IDOffset: flatbuffers.Offset): void;
    static addName(builder: flatbuffers.Builder, NAMEOffset: flatbuffers.Offset): void;
    static addNoradCatId(builder: flatbuffers.Builder, NORAD_CAT_ID: number): void;
    static addObjectId(builder: flatbuffers.Builder, OBJECT_IDOffset: flatbuffers.Offset): void;
    static addSiteId(builder: flatbuffers.Builder, SITE_IDOffset: flatbuffers.Offset): void;
    static addEntityId(builder: flatbuffers.Builder, ENTITY_IDOffset: flatbuffers.Offset): void;
    static addType(builder: flatbuffers.Builder, TYPE: SensorType): void;
    static addEmission(builder: flatbuffers.Builder, EMISSION: snrEmissionMode): void;
    static addSpectralBands(builder: flatbuffers.Builder, SPECTRAL_BANDSOffset: flatbuffers.Offset): void;
    static createSpectralBandsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startSpectralBandsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addFieldOfView(builder: flatbuffers.Builder, FIELD_OF_VIEWOffset: flatbuffers.Offset): void;
    static addFieldOfViewProvenance(builder: flatbuffers.Builder, FIELD_OF_VIEW_PROVENANCEOffset: flatbuffers.Offset): void;
    static addMounting(builder: flatbuffers.Builder, MOUNTINGOffset: flatbuffers.Offset): void;
    static addRf(builder: flatbuffers.Builder, RFOffset: flatbuffers.Offset): void;
    static addOptical(builder: flatbuffers.Builder, OPTICALOffset: flatbuffers.Offset): void;
    static addProvenance(builder: flatbuffers.Builder, PROVENANCEOffset: flatbuffers.Offset): void;
    static addNotes(builder: flatbuffers.Builder, NOTESOffset: flatbuffers.Offset): void;
    static endSNR(builder: flatbuffers.Builder): flatbuffers.Offset;
    static finishSNRBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static finishSizePrefixedSNRBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    unpack(): SNRT;
    unpackTo(_o: SNRT): void;
}
export declare class SNRT implements flatbuffers.IGeneratedObject {
    SENSOR_ID: string | Uint8Array | null;
    NAME: string | Uint8Array | null;
    NORAD_CAT_ID: number;
    OBJECT_ID: string | Uint8Array | null;
    SITE_ID: string | Uint8Array | null;
    ENTITY_ID: string | Uint8Array | null;
    TYPE: SensorType;
    EMISSION: snrEmissionMode;
    SPECTRAL_BANDS: (SNRSpectralBandT)[];
    FIELD_OF_VIEW: SCVSensorShapeContractT | null;
    FIELD_OF_VIEW_PROVENANCE: OPPProvenanceT | null;
    MOUNTING: SNRMountingT | null;
    RF: SNRRfParametersT | null;
    OPTICAL: SNROpticalParametersT | null;
    PROVENANCE: OPPProvenanceT | null;
    NOTES: string | Uint8Array | null;
    constructor(SENSOR_ID?: string | Uint8Array | null, NAME?: string | Uint8Array | null, NORAD_CAT_ID?: number, OBJECT_ID?: string | Uint8Array | null, SITE_ID?: string | Uint8Array | null, ENTITY_ID?: string | Uint8Array | null, TYPE?: SensorType, EMISSION?: snrEmissionMode, SPECTRAL_BANDS?: (SNRSpectralBandT)[], FIELD_OF_VIEW?: SCVSensorShapeContractT | null, FIELD_OF_VIEW_PROVENANCE?: OPPProvenanceT | null, MOUNTING?: SNRMountingT | null, RF?: SNRRfParametersT | null, OPTICAL?: SNROpticalParametersT | null, PROVENANCE?: OPPProvenanceT | null, NOTES?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=SNR.d.ts.map