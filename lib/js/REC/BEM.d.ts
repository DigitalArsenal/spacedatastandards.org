import * as flatbuffers from 'flatbuffers';
import { beamContour, beamContourT } from './beamContour.js';
import { beamPolarization } from './beamPolarization.js';
import { beamType } from './beamType.js';
/**
 * Antenna Beam
 */
export declare class BEM implements flatbuffers.IUnpackableObject<BEMT> {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): BEM;
    static getRootAsBEM(bb: flatbuffers.ByteBuffer, obj?: BEM): BEM;
    static getSizePrefixedRootAsBEM(bb: flatbuffers.ByteBuffer, obj?: BEM): BEM;
    static bufferHasIdentifier(bb: flatbuffers.ByteBuffer): boolean;
    /**
     * Unique beam identifier
     */
    ID(): string | null;
    ID(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Beam name or designation
     */
    BEAM_NAME(): string | null;
    BEAM_NAME(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Reference to parent entity (satellite/transponder)
     */
    ID_ENTITY(): string | null;
    ID_ENTITY(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Reference to parent antenna
     */
    ID_ANTENNA(): string | null;
    ID_ANTENNA(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    /**
     * Beam type
     */
    TYPE(): beamType;
    /**
     * Beam polarization
     */
    POLARIZATION(): beamPolarization;
    /**
     * Peak gain in dBi
     */
    PEAK_GAIN(): number;
    /**
     * Edge-of-coverage gain in dBi
     */
    EOC_GAIN(): number;
    /**
     * Beam center latitude in degrees
     */
    CENTER_LATITUDE(): number;
    /**
     * Beam center longitude in degrees
     */
    CENTER_LONGITUDE(): number;
    /**
     * Beamwidth (3dB) in degrees
     */
    BEAMWIDTH(): number;
    /**
     * Operating frequency in MHz
     */
    FREQUENCY(): number;
    /**
     * EIRP at beam center in dBW
     */
    EIRP(): number;
    /**
     * G/T at beam center in dB/K
     */
    G_OVER_T(): number;
    /**
     * Beam footprint area in km^2
     */
    FOOTPRINT_AREA(): number;
    /**
     * Beam contour definitions
     */
    BEAM_CONTOURS(index: number, obj?: beamContour): beamContour | null;
    beamContoursLength(): number;
    /**
     * Additional notes
     */
    NOTES(): string | null;
    NOTES(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    static startBEM(builder: flatbuffers.Builder): void;
    static addId(builder: flatbuffers.Builder, IDOffset: flatbuffers.Offset): void;
    static addBeamName(builder: flatbuffers.Builder, BEAM_NAMEOffset: flatbuffers.Offset): void;
    static addIdEntity(builder: flatbuffers.Builder, ID_ENTITYOffset: flatbuffers.Offset): void;
    static addIdAntenna(builder: flatbuffers.Builder, ID_ANTENNAOffset: flatbuffers.Offset): void;
    static addType(builder: flatbuffers.Builder, TYPE: beamType): void;
    static addPolarization(builder: flatbuffers.Builder, POLARIZATION: beamPolarization): void;
    static addPeakGain(builder: flatbuffers.Builder, PEAK_GAIN: number): void;
    static addEocGain(builder: flatbuffers.Builder, EOC_GAIN: number): void;
    static addCenterLatitude(builder: flatbuffers.Builder, CENTER_LATITUDE: number): void;
    static addCenterLongitude(builder: flatbuffers.Builder, CENTER_LONGITUDE: number): void;
    static addBeamwidth(builder: flatbuffers.Builder, BEAMWIDTH: number): void;
    static addFrequency(builder: flatbuffers.Builder, FREQUENCY: number): void;
    static addEirp(builder: flatbuffers.Builder, EIRP: number): void;
    static addGOverT(builder: flatbuffers.Builder, G_OVER_T: number): void;
    static addFootprintArea(builder: flatbuffers.Builder, FOOTPRINT_AREA: number): void;
    static addBeamContours(builder: flatbuffers.Builder, BEAM_CONTOURSOffset: flatbuffers.Offset): void;
    static createBeamContoursVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startBeamContoursVector(builder: flatbuffers.Builder, numElems: number): void;
    static addNotes(builder: flatbuffers.Builder, NOTESOffset: flatbuffers.Offset): void;
    static endBEM(builder: flatbuffers.Builder): flatbuffers.Offset;
    static finishBEMBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static finishSizePrefixedBEMBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static createBEM(builder: flatbuffers.Builder, IDOffset: flatbuffers.Offset, BEAM_NAMEOffset: flatbuffers.Offset, ID_ENTITYOffset: flatbuffers.Offset, ID_ANTENNAOffset: flatbuffers.Offset, TYPE: beamType, POLARIZATION: beamPolarization, PEAK_GAIN: number, EOC_GAIN: number, CENTER_LATITUDE: number, CENTER_LONGITUDE: number, BEAMWIDTH: number, FREQUENCY: number, EIRP: number, G_OVER_T: number, FOOTPRINT_AREA: number, BEAM_CONTOURSOffset: flatbuffers.Offset, NOTESOffset: flatbuffers.Offset): flatbuffers.Offset;
    unpack(): BEMT;
    unpackTo(_o: BEMT): void;
}
export declare class BEMT implements flatbuffers.IGeneratedObject {
    ID: string | Uint8Array | null;
    BEAM_NAME: string | Uint8Array | null;
    ID_ENTITY: string | Uint8Array | null;
    ID_ANTENNA: string | Uint8Array | null;
    TYPE: beamType;
    POLARIZATION: beamPolarization;
    PEAK_GAIN: number;
    EOC_GAIN: number;
    CENTER_LATITUDE: number;
    CENTER_LONGITUDE: number;
    BEAMWIDTH: number;
    FREQUENCY: number;
    EIRP: number;
    G_OVER_T: number;
    FOOTPRINT_AREA: number;
    BEAM_CONTOURS: (beamContourT)[];
    NOTES: string | Uint8Array | null;
    constructor(ID?: string | Uint8Array | null, BEAM_NAME?: string | Uint8Array | null, ID_ENTITY?: string | Uint8Array | null, ID_ANTENNA?: string | Uint8Array | null, TYPE?: beamType, POLARIZATION?: beamPolarization, PEAK_GAIN?: number, EOC_GAIN?: number, CENTER_LATITUDE?: number, CENTER_LONGITUDE?: number, BEAMWIDTH?: number, FREQUENCY?: number, EIRP?: number, G_OVER_T?: number, FOOTPRINT_AREA?: number, BEAM_CONTOURS?: (beamContourT)[], NOTES?: string | Uint8Array | null);
    pack(builder: flatbuffers.Builder): flatbuffers.Offset;
}
//# sourceMappingURL=BEM.d.ts.map